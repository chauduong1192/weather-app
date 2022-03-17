import { CROSS_DOMAIN, BASE_URL } from "../utils/constants";

const request = async (uri?: string, method?: string, body?: any) => {
  const url = `${CROSS_DOMAIN}/${BASE_URL}/${uri}`;
  try {
    const res = await fetch(url, {
        method,
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const json = await res.json();
    return json;
  } catch (error) {
    if (error) {
      return error;
    }
  }
};

const $get = async (uri?: string) => request(uri, 'GET');

export {
  request,
  $get,
};
