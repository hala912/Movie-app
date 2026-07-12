// src/utils/mylistStorage.ts
import type { Movie } from "../types/movie";

const getKey = (userId: string) => `mylist_${userId}`;

export const getMyList = (userId: string): Movie[] => {
  const raw = localStorage.getItem(getKey(userId));
  return raw ? JSON.parse(raw) : [];
};

export const saveMyList = (userId: string, list: Movie[]): void => {
  localStorage.setItem(getKey(userId), JSON.stringify(list));
};

export const addToMyList = (userId: string, movie: Movie): Movie[] => {
  const list = getMyList(userId);
  if (list.some((m) => m.id === movie.id)) return list; // already in list
  const updated = [...list, movie];
  saveMyList(userId, updated);
  return updated;
};

export const removeFromMyList = (userId: string, movieId: number): Movie[] => {
  const list = getMyList(userId);
  const updated = list.filter((m) => m.id !== movieId);
  saveMyList(userId, updated);
  return updated;
};