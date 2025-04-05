import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../model/logout";

const Logout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [session_id] = useState(localStorage.getItem("session_id"));

  useEffect(() => {}, [session_id])

  if (!session_id) {
    return (
      <div className="w-full h-full flex justify-center items-center text-white">
        <p className="text-[20px]">
          Вы еще не создавали аккаунта, зайдите на страницу{" "}
          <span className="font-semibold">Аккаунт</span>, чтобы сделать это
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center items-center text-white">
      <div className="flex flex-col gap-y-3">
        <h3 className="text-[20px] font-bold">
          Вы действительно хотите выйти из аккаунта ?
        </h3>
        <button
          onClick={() => logout(setLoading, navigate, session_id)}
          className="p-3 bg-mainColor flex justify-center items-center rounded-[10px]"
        >
          {" "}
          {loading ? (
            <div className="animate-spin bg-none rounded-full border-r-[3px] border-l-[3px] border-white w-[20px] h-[20px]"></div>
          ) : (
            "Подтвердить"
          )}
        </button>
      </div>
    </div>
  );
};

export default Logout;
