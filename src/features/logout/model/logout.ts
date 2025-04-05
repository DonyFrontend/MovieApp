import token from "@/shared/api/token";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";

const logout = async (
  loading: Dispatch<SetStateAction<boolean>>,
  navigate: NavigateFunction,
  session_id: string | null
) => {
  try {
    loading(true);
    await axios.delete("https://api.themoviedb.org/3/authentication/session", {
      data: {
        session_id,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    localStorage.removeItem('request_token');
    localStorage.removeItem('session_id');
    navigate('/auth');
  } catch (error) {
    console.log(error);
  } finally {
    loading(false);
  }
};

export { logout };
