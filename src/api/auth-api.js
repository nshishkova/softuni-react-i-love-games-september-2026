import { authRequest } from "../utils/request.js";

export const register = async ({ email, password }) => {
  return authRequest("/signup", "POST", { email, password });
};