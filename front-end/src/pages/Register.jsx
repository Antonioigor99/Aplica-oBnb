import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handSubmit = async (e) => {
    e.preventDefault();
    // if (email && password) {
    //   try {
    //     const { data: userDoc } = await axios.post("/users/login", {
    //       email,
    //       password,
    //     });
    //     setUser(userDoc);
    //     setRedirect(true);
    //   } catch (error) {
    //     alert(`Deu um erro ao Logar: ${error.response.data}`);
    //   }
    // } else {
    //   alert("Você precisa preencher o email ou a senha");
    // }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-8">
        <h1 className="text-2xl font-bold">Faça seu Cadastro</h1>
        <form className="flex w-full flex-col gap-2" onSubmit={handSubmit}>
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="text"
            placeholder="Digite seu Nome"
            value={name}
            autoComplete="current-password"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            autoComplete="current-password"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            type="password"
            placeholder="Digite sua senha"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary-400 w-full cursor-pointer rounded-full border border-gray-300 px-4 py-2 font-bold text-white">
            Registrar
          </button>
        </form>
        <p>
          Já tem uma conta{" "}
          <Link to={"/login"} className="font-semibold underline">
            clique aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
