import Image from "next/image";
import { ContainerGrid } from "./container";

import iconUser from "@/assets/icon-user.svg";
import iconCompany from "@/assets/icon-company.svg";
import app from "@/assets/nahora.png";

export function SectionBannerHero() {
  return (
    <section className="overflow-hidden pt-20 laptop:pt-36">
      <ContainerGrid>
        <div
          className="w-full h-auto bg-banner bg-no-repeat 
        bg-cover bg-center flex flex-col items-center justify-center rounded-xl py-10 laptop:py-0 px-2 laptop:px-0"
        >
          <h2 className="text-lg">
            Na<span className="font-bold text-green-primary">Hora</span>.app
          </h2>
          <h1 className="text-5xl laptop:text-7xl/snug font-poppins font-bold text-center mb-4 ">
            Transforme seu
            <span className="gradient__text"> negócio!</span>
          </h1>

          <p
            className="text-center text-base text-gray-300 laptop:text-xl mb-6 max-w-2xl
          "
          >
            Aumente sua produtividade, ofereça a melhor experiência de
            agendamento para o seu cliente, organize sua empresa e fature mais,
            <strong> experimente grátis!</strong>
          </p>

          <div className="flex flex-col items-center laptop:flex-row gap-6 mt-8">
            <a
              href="#"
              className="bg-slate-900 border-2 flex border-sky-700 space-x-1 py-3 px-7 
          rounded-full font-medium hover:bg-sky-800 transition-all ease-linear"
            >
              <Image src={iconCompany} alt="icon-company" />
              <span> Entrar como empresa</span>
            </a>
            <a
              href="#"
              className="bg-green-500 py-3 px-7 flex space-x-1
          rounded-full font-medium hover:bg-green-700 transition-all ease-linear"
            >
              <Image src={iconUser} alt="icon user" />
              <span> Entrar como colaborador</span>
            </a>
          </div>

          <div className="mt-5">
            <a
              href=""
              className="text-white-500 flex text-green-primary hover:text-white transition-all ease-linear underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4BCE97"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp mr-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
              Tire suas dúvidas pelo nosso WhatsApp
            </a>
          </div>

          <Image src={app} alt="Screen do app" />
        </div>
      </ContainerGrid>
    </section>
  );
}
