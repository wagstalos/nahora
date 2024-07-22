import Image from "next/image";
import { ContainerGrid } from "./container";

import iconUser from "@/assets/icon-user.svg";
import iconCompany from "@/assets/icon-company.svg";
import app from "@/assets/garcomnatela.png";
import prato1 from "@/assets/prato1.png";
import prato2 from "@/assets/prato2.png";

export function SectionBannerHero() {
  return (
    <section className="overflow-hidden pt-20 laptop:pt-36 gradient__bg">
      <ContainerGrid>
        <Image
          className="hidden laptop:block absolute top-96 left-10 animate-float"
          src={prato1}
          alt="prato1"
        />

        <Image
          className="hidden laptop:block absolute top-52 right-5 animate-float"
          src={prato2}
          alt="prato2"
        />
        <div
          className="w-full h-auto
         flex flex-col items-center justify-center rounded-xl py-10 laptop:py-0 px-2 laptop:px-0"
        >
          <h2 className="text-lg mt-10 laptop:mt-5">Seja bem-vindo(a) 👋</h2>
          <h1 className="text-4xl laptop:text-7xl/snug font-poppins max-w-7xl font-bold text-center mb-4 ">
            Revolucione seu
            <span className="gradient__text"> restaurante</span> agora mesmo!
          </h1>

          <p
            className="text-center text-base text-gray-300 laptop:text-xl mb-6 max-w-2xl
          "
          >
            Ofereça a melhor experiência de cardápio digital para os seus
            clientes, organize seu estabelecimento e aumente seu faturamento
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
              className="bg-gradient-to-r from-rose-500  via-rose-500 to-pink-500 py-3 px-7 flex space-x-1
          rounded-full font-medium hover:bg-green-700 transition-all ease-linear"
            >
              <Image src={iconUser} alt="icon user" />
              <span> Entrar como restaurante</span>
            </a>
          </div>

          {/* <div className="mt-5">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp mr-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
              Tire suas dúvidas pelo nosso WhatsApp
            </a>
          </div> */}

          <Image className="mb-[-27px] pt-10" src={app} alt="Screen do app" />
        </div>
      </ContainerGrid>
    </section>
  );
}
