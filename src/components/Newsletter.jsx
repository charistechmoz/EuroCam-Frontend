import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { Button } from "./ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    // TODO: integrar com o backend quando estiver pronto
    // Ex: await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) })

    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <section className="w-full bg-primary py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* Texto */}
          <div className="text-center lg:text-left max-w-md">
            <span className="inline-block text-secondary font-ubuntu font-semibold text-sm tracking-wide uppercase mb-3">
              Newsletter
            </span>
            <h2 className="font-ubuntu font-bold text-fourth text-2xl md:text-3xl leading-tight mb-3">
              Receba a nossa Newsletter
            </h2>
            <p className="font-open-sans text-white/75 text-sm md:text-base leading-relaxed">
              Fique a par de investimentos, parcerias e novidades sobre as
              relações entre a União Europeia e Moçambique.
            </p>
          </div>

          {/* Formulário */}
          <div className="w-full lg:w-auto lg:min-w-[420px]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <div className="relative flex-1">
                <MdEmail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="O seu endereço de email"
                  className="w-full h-12 pl-11 pr-4 rounded-md bg-fourth text-tertiary placeholder:text-gray-400 font-open-sans text-sm outline-none focus:ring-2 focus:ring-secondary transition"
                />
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                disabled={status === "loading"}
                className="shrink-0"
              >
                {status === "loading" ? "A enviar..." : "Subscrever"}
              </Button>
            </form>

            {status === "success" && (
              <p className="text-secondary font-open-sans text-sm mt-3 text-center sm:text-left">
                Obrigado! A sua subscrição foi registada.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-300 font-open-sans text-sm mt-3 text-center sm:text-left">
                Ocorreu um erro. Tente novamente.
              </p>
            )}

            <p className="text-white/50 font-open-sans text-xs mt-3 text-center sm:text-left">
              Não enviamos spam. Pode cancelar a subscrição a qualquer momento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;