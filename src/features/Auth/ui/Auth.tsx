import { useEffect, useState } from "react";
import { Create_request_token } from "../model/api/create_token";
import { Create_account } from "../model/api/create_account";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const buttonClassName = "p-3 bg-mainColor rounded-[10px]";
  const [request_token, setRequest_token] = useState<string | null>(
    localStorage.getItem("request_token")
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [sessionLoading, setSessionLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {}, [request_token]);

  function removeToken() {
    localStorage.removeItem("request_token");
    setRequest_token(null);
  }

  return (
    <div className="text-white p-3 flex flex-col gap-y-20">
      <div className="flex flex-col items-start gap-y-5">
        <h3 className="font-bold text-[20px]">
          Инструкция по созданию аккаунта:
        </h3>
        <p>
          Пожалуйста, перед созданием,{" "}
          <span className="font-bold font-sans">
            прочитайте данную инструкцию:
          </span>{" "}
          <br />
          Для того чтобы создать аккаунт, сначала вы должны{" "}
          <span className="font-bold font-sans">
            сгенерировать токен доступа,{" "}
          </span>
          нажав на кнопку "Создать токен доступа". После этого вы должны будете
          подтвердить создание токена, и токен автоматический сохранится в
          память приложения. <br /> Состояние токена можно увидеть ниже:
        </p>
        <p className="text-[20px] font-semibold text-mainColor">
          {request_token
            ? "Токен доступа успешно создан"
            : "Вы еще не создавали токена доступа"}
        </p>
        <div className="flex gap-x-2">
          <button
            onClick={() => Create_request_token(setLoading)}
            className={`${buttonClassName} w-[280px] flex justify-center items-center`}
          >
            {loading ? (
              <div className="animate-spin bg-none rounded-full border-r-[3px] border-l-[3px] border-white w-[20px] h-[20px]"></div>
            ) : (
              "Создать новый токен доступа"
            )}
          </button>
          {request_token && (
            <button onClick={removeToken} className={buttonClassName}>
              Удалить токен доступа
            </button>
          )}
        </div>
        <p>
          Далее, вы можете нажать на кнопку "Создать аккаунт". Эта кнопка
          появится после того, как вы успешно создадите токен доступа, и он
          будет храниться в памяти приложения
        </p>
        <p>
          <span className="font-sans font-bold">Внимание!</span> Создать аккаунт
          не получится, если вы не нажали кнопку "Approve" в странице
          подтверждения токена. Токен будет храниться в памяти приложения, но{" "}
          <span className="font-sans font-bold">не будет активирован!</span>{" "}
          <br />
          Чтобы исправить это, нажмите на кнопку "Удалить токен доступа", а
          затем создайте новый, нажав в странице подтверждения кнопку "Approve"
        </p>
      </div>
      {request_token && (
        <div className="w-full flex justify-center items-center flex-col gap-y-4">
          <h3 className="text-[20px] font-medium">Выберите действие:</h3>
          <div className="flex gap-x-5">
            <button
              onClick={() => Create_account(request_token, setSessionLoading, navigate)}
              className={`${buttonClassName} w-[280px] flex justify-center items-center`}
            >
              {sessionLoading ? (
                <div className="animate-spin bg-none rounded-full border-r-[3px] border-l-[3px] border-white w-[20px] h-[20px]"></div>
              ) : (
                "Создать аккаунт"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
