import { useAccountStore } from "@/app/providers/store/account/accountStore";
import Loading from "@/pages/load/Loading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "@/shared/assets/icons/avatar.svg";
import { imgUrl } from "@/shared/api/tmdb_images/instance";
import account_href from "@/shared/api/account_href";
import info_mark from "@/shared/assets/icons/Info_mark.svg";

const Account = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("session_id");
  const { account, setAccount } = useAccountStore();
  const [loading, setLoading] = useState<boolean>(false);

  const avatarPath = account.avatar.tmdb.avatar_path;
  
  useEffect(() => {
    if (!id) {
      navigate("/auth");
    }
    if (id != null) {
      setAccount(id, setLoading);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log(account);

  return (
    <div className="p-3 text-white">
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-8">
          <img
            src={avatarPath ? imgUrl + "/w342" + avatarPath : avatar}
            alt="Avatar"
            className="rounded-full h-[120px] w-[120px] object-cover"
          />
          <div className="flex flex-col justify-around">
            <div>
              <h3 className="text-[30px] font-semibold">{account.name}</h3>
              <p className="text-gray-400">{account.username}</p>
            </div>
            <p className="text-gray-400">Country: {account.iso_3166_1}</p>
          </div>
        </div>
        <div className="flex gap-x-3 items-center">
          <a
            target="_blank"
            href={account_href + account.username}
            className="p-3 bg-mainColor rounded-[10px] w-[30%] flex justify-center"
          >
            Настройки аккаунта
          </a>
          <img src={info_mark} alt="Info" className="w-[35px] h-[35px]" title={`Данный сайт не может менять персональные данные, поэтому вы можете сделать это на официальном сайте`}/>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Account;
