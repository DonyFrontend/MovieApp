import { RoutesObject } from "@/shared/const/router";
import { Route, Routes } from "react-router-dom";
import { useAccountStore } from "../store/account/accountStore";
import { useEffect, useState } from "react";
import Loading from "@/pages/load/Loading";

const RoutesComponent = () => {
  const id = localStorage.getItem("session_id");
  const { setAccount } = useAccountStore();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setAccount(id, setLoading);
    }
  }, [id, setAccount]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-950 rounded-[10px] overflow-y-auto h-[100%]">
      <Routes>
        {Object.values(RoutesObject).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default RoutesComponent;
