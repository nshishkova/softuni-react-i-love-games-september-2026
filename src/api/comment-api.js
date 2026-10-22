import request from "../utils/request.js";

export const getAll = async (gameId) => {
  return request(`/comments?game_id=eq.${gameId}&order=created_at.desc`);
};

export const create = async (data, accessToken) => {
  return request("/comments", "POST", data, {
    headers: {
      ...getAuthHeader(accessToken),
    },
  });
};

function getAuthHeader(accessToken) {
  return {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };
}
