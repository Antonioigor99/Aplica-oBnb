import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-8">
        <h1 className="text-2xl font-bold">Faça seu Login</h1>
        <form className="flex w-full flex-col gap-2">
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="email"
            placeholder="Digite seu e-mail"
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="password"
            placeholder="Digite sua senha"
          />
          <button className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white">
            Login
          </button>
        </form>
        <p>
          Ainda nao tem conta?{" "}
          <Link to={"/Register"} className="font-semibold underline">
            Registre-se Aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
