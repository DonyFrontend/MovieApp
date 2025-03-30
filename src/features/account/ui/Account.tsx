import { useAccountStore } from "@/app/providers/store/account/accountStore";
import Loading from "@/pages/load/Loading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("session_id");
  const { account, setAccount } = useAccountStore();
  const [loading, setLoading] = useState<boolean>(false);

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

  return <div></div>;
};

export default Account;
