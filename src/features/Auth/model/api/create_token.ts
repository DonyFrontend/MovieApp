import api_key from "@/shared/api/api_key";
import token from "@/shared/api/token";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import vercel_link from "@/shared/api/vercel_link";

function Create_request_token(loading: Dispatch<SetStateAction<boolean>>) {
  loading(true);
  axios
    .get("https://api.themoviedb.org/3/authentication/token/new", {
      headers: {
        Authorization: "Bearer" + token,
        Accept: "application/json",
      },
      params: { 
        api_key,
      },
    })
    .then((data) => {
      localStorage.setItem('request_token', data.data.request_token);
      window.location.href = `https://www.themoviedb.org/authenticate/${data.data.request_token}?redirect_to=${vercel_link}auth`.trim();
    })
    .catch((err) => console.error(err))
    .finally(() => loading(false));
}

export { Create_request_token };
