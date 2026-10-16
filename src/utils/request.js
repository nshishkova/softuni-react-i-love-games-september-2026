const restUrl = "https://erupyawdaagduppaijwm.supabase.co/rest/v1";
const authUrl = "https://erupyawdaagduppaijwm.supabase.co/auth/v1";
const storageUrl = "https://erupyawdaagduppaijwm.supabase.co/storage/v1/object/images"

export async function uploadFile(fileName, file ) {
  const options = {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
      'Content-Type': file.type || "application/octet-stream",
      
    }
  };

  const response = await fetch(`${storageUrl}/${fileName}`, {
    method: "POST",
    body: file,
    ...options
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return `https://erupyawdaagduppaijwm.supabase.co/storage/v1/object/images/${fileName}`;

}

export async function baseRequest(url, path = "/", method = "GET", data = null, opts = {}) {
  const options = {
     ...opts,
    headers: {
       ...opts.headers,
      apikey: import.meta.env.VITE_API_KEY,
      Prefer: "return=representation"
    }
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
    const errorText = await response.text();
    console.error("Supabase error:", response.status, errorText)
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