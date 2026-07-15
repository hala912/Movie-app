// src/utils/mylistStorage.ts
import type { Movie, MovieDetails } from "../types/movie";
import type { SeriesDetails } from "../types/series";

export type MyListItem =
  | (MovieDetails & { media_type: "movie" })
  | (SeriesDetails & { media_type: "tv" });

const getKey = (userId: string) => `mylist_${userId}`;

export const getMyList = (userId: string): MyListItem[] => {
  const raw = localStorage.getItem(getKey(userId));
  return raw ? JSON.parse(raw) : [];
};

export const saveMyList = (userId: string, list: MyListItem[]): void => {
  localStorage.setItem(getKey(userId), JSON.stringify(list));
};

export const addToMyList = (
  userId: string,
  item: MyListItem
): MyListItem[] => {
  const list = getMyList(userId);
  if (list.some((m) => m.id === item.id && m.media_type === item.media_type)) {
    return list; // already in list
  }
  const updated = [...list, item];
  saveMyList(userId, updated);
  return updated;
};

export const removeFromMyList = (
  userId: string,
  itemId: number,
  mediaType: "movie" | "tv"
): MyListItem[] => {
  const list = getMyList(userId);
  const updated = list.filter(
    (m) => !(m.id === itemId && m.media_type === mediaType)
  );
  saveMyList(userId, updated);
  return updated;
};