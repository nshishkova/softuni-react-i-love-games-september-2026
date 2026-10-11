const url = "https://erupyawdaagduppaijwm.supabase.co/rest/v1/";

export default async function request(path = "/", method = "GET", data = null) {
  const options = {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
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
