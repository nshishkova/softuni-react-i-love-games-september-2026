import request from "../utils/request.js";

export const getAll = (gameId) => {
  return request(`/comments?game_id=eq.${gameId}&order=created_at.desc`);
};

export const create = (data) => {
  return request("/comments", "POST", data);
};

export const remove = (id) => {
  return request(`/comments?id=eq.${id}`, "DELETE");
};


