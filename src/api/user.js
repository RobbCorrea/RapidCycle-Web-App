import { basePath, apiVersion } from "./config";

export function signUpApi(data) {
  const url = `${basePath}/${apiVersion}/sign-up`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  console.log(data);

  fetch(url, params)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    });
}
