const url = "https://erupyawdaagduppaijwm.supabase.co/rest/v1/";
const apiKey = "sb_publishable_fxAV0RNxyELBkA8l2ke7Rw_xYJBa-RL";

export default async function request(path = "/", method = "GET", data = null) {
  const options = {
    headers: {
      apikey: apiKey,
    },
  };
  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.body = JSON.stringify(data);
    options.headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${url}${path}`, options);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  if(response.status === 204) {
    return null;
  }

  return response.json();
}
