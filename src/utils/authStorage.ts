export interface User {
  id? :number
  fullname : string;
  username: string;
  password: string;

}

export const getUser= ():User[]=>{
   return JSON.parse(localStorage.getItem("users")||"[]")
}

export const addUser = (user: User): boolean => {
  const users = getUser();

  const alreadyExists = users.some((u) => u.username === user.username);

  if (alreadyExists) {
    return false;
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return true;
};

export const findUser = (username: string, password: string): User | undefined => {
  const users = getUser();
  return users.find((u) => u.username === username && u.password === password);
};
