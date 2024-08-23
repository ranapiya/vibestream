import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section  className="flex flex-1 justify-center items-center flex-col py-10 xl:w-1/2  ">
            <Outlet />
          </section>

          <img
            src="/assets/images/pic2.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat rounded-3xl"
          />
        </>
      )}
    </>
  );
}
