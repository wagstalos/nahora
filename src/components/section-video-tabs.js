"use client";
import { Tabs, Tab, Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

import app from "@/assets/tab1.png";
import tab2 from "@/assets/tab2.png";
import tab3 from "@/assets/tab3.png";

export function SectionVideoTabs() {
  return (
    <div className="flex align-middle justify-center mx-auto">
      <div className="w-full">
        <div className="flex mx-auto flex-col">
          <Tabs
            aria-label="Options colors sizes"
            className="flex align-middle justify-center mb-10 font-semibold"
            color="danger"
            radius="full"
            size="lg"
          >
            <Tab key="apresentacao" title="Apresentação">
              <Card className="bg-transparent">
                <CardBody>
                  <div className="flex items-center justify-between flex-col desktop:flex-row">
                    <div className="w-full laptop:w-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="p-2 bg-slate-950 border border-slate-800 rounded-md mb-2"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-3 15h-6l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h6l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
                      </svg>
                      <h2 className="text-3xl">
                        {" "}
                        Conheça as funcionalidades do garçom na tela
                      </h2>

                      <p className="mt-10 text-lg font-inter font-semibold text-gray-300">
                        Em um mundo cada vez mais digital, a tecnologia tem
                        transformado a experiência gastronômica. Apresentamos o
                        Sistema de Garçom na tela, uma solução moderna e
                        eficiente para melhorar o atendimento ao cliente em
                        restaurantes e bares.
                      </p>
                    </div>
                    <div className="w-full laptop:w-1/2 mt-10 laptop:p-10 p-0">
                      <Image src={app} alt="image" />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>

            <Tab key="relatorio" title="Relatórios">
              <Card className="bg-transparent">
                <CardBody>
                  <div className="flex items-center justify-center flex-col desktop:flex-row">
                    <div className="w-full laptop:w-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="p-1 bg-slate-950 border border-slate-800 rounded-md mb-2"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#fff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                        <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                        <path d="M12 17v1m0 -8v1" />
                      </svg>
                      <h2 className="text-3xl"> Gestão de Mesas e Comandas</h2>

                      <p className="mt-10 text-lg font-inter font-semibold text-gray-300">
                        O sistema oferece uma visão clara do status de cada
                        mesa, facilitando o controle de comandas abertas e
                        permitindo uma melhor organização do estabelecimento.
                      </p>
                    </div>
                    <div className="w-full laptop:w-1/2 mt-10 laptop:p-10 p-0">
                      <Image src={tab2} alt="image" />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>

            <Tab key="personalizada" title="Personalizada">
              <Card className="bg-transparent">
                <CardBody>
                  <div className="flex items-center justify-center flex-col desktop:flex-row">
                    <div className="w-full laptop:w-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="p-1 bg-slate-950 border border-slate-700 rounded-md mb-2"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
                      </svg>
                      <h2 className="text-3xl">
                        {" "}
                        Atualização de Cardápio em Tempo Real
                      </h2>

                      <p className="mt-10 text-lg font-inter font-semibold text-gray-300">
                        Possibilita a atualização instantânea do cardápio,
                        refletindo mudanças em pratos, bebidas e promoções, sem
                        a necessidade de reimpressões.
                      </p>
                    </div>
                    <div className="w-full laptop:w-1/2 mt-10 laptop:p-10 p-0">
                      <Image src={tab3} alt="image" />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
