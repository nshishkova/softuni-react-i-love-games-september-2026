const restUrl = "https://erupyawdaagduppaijwm.supabase.co/rest/v1";
const authUrl = "https://erupyawdaagduppaijwm.supabase.co/auth/v1";
const storageUrl = "https://erupyawdaagduppaijwm.supabase.co/storage/v1/object/images"

export async function baseRequest(url, path = "/", method = "GET", data = null, opts = {}) {
  const options = {
    ...opts,
    headers: {
      ...opts.headers,
      apikey: import.meta.env.VITE_API_KEY,
      Prefer: "return=representation",
      ...getAuthHeader()
    }
  };

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.headers["Content-Type"] = options.headers["Content-Type"] ||"application/json";
    options.body = data instanceof File ? data : JSON.stringify(data);
  }

  const response = await fetch(`${url}${path}`, options);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export default async function request(path = "/", method = "GET", data = null, opts = {}) {
  return baseRequest(restUrl, path, method, data, opts);
}
//export default baseRequest.bind(null, restUrl);

export const authRequest = async (path = "/", method = "GET", data = null, opts = {}) => {
  return baseRequest(authUrl, path, method, data, opts);
};
//export const authRequest = baseRequest.bind(null, authUrl);

export const storageRequest = async (fileName, file) => {
  return baseRequest(storageUrl, `/${fileName}`, "POST", file, {
    headers: {
      'Content-Type': file.type || "application/octet-stream",
    } 
  });
};

function getAuthHeader() {
  const auth = localStorage.getItem("auth");
  const accessToken = auth ? JSON.parse(auth)?.access_token : null;

  return {
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };
}