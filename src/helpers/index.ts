import { v4 as id } from "uuid";

export function getId() {
  let userId = localStorage.getItem("userId");

  if (!userId) {
    userId = id();
    localStorage.setItem("userId", userId);
  }

  return userId;
}
