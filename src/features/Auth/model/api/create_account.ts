import api_key from "@/shared/api/api_key";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

function Create_account(
  request_token: string | null,
  loading: Dispatch<SetStateAction<boolean>>,
  navigate: NavigateFunction
) {
  loading(true);
  if (request_token == null) {
    alert("Вы не можете создать аккаунт без токена доступа!");
  } else {
    axios
      .post(
        "https://api.themoviedb.org/3/authentication/session/new",
        {
          request_token,
        },
        {
          params: {
            api_key,
          },
        }
      )
      .then((data) => {
        console.log(data.data);
        localStorage.setItem("session_id", data.data.session_id);
        navigate("/account");
      })
      .catch((err) => console.error(err))
      .finally(() => loading(false));
  }
}

export { Create_account };
