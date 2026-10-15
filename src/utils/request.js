const restUrl = "https://erupyawdaagduppaijwm.supabase.co/rest/v1";
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

export default async function request(path = "/", method = "GET", data = null, opts = {}) {
  const options = {
    headers: {
      apikey: import.meta.env.VITE_API_KEY,
      Prefer: "return=representation"
    },
    ...opts
  };

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.body = JSON.stringify(data);
    options.headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${restUrl}${path}`, options);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
}
