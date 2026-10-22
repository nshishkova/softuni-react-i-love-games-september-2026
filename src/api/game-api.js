import request from "../utils/request.js";

export const getAll = () => request("/games?order=created_at.desc", "GET");

export const create = (data) => request("/games", "POST", data);

export const remove = async (gameId) => request(`/games?id=eq.${gameId}`, "DELETE");

export const update = async (gameId, data) => 
  request(`/games?id=eq.${gameId}`, "PUT", data);

