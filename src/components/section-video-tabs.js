"use client";
import { Tabs, Tab, Card, CardHeader, CardBody } from "@nextui-org/react";
export function SectionVideoTabs() {
  return (
    <div className="flex align-middle justify-center mx-auto">
      <div className="w-full desktop:w-80percent">
        <div className="flex mx-auto flex-col">
          <Tabs
            aria-label="Options colors sizes"
            className="flex align-middle justify-center mb-10 font-semibold"
            color="danger"
            radius="full"
            size="lg"
          >
            <Tab key="apresentacao" title="Apresentação">
              <Card>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center">
                  <h4 className="font-bold text-large text-slate-700">
                    Conheça as funcionalidades do garçom na tela
                  </h4>
                  {/* <small className="text-default-500">
                    Melhor app de agendamento do Brasil
                  </small> */}
                </CardHeader>
                <CardBody>
                  <div className="container-iframe">
                    <div className="responsive-iframe">
                      <iframe
                        src="https://www.youtube.com/embed/8vkGADckmiI?si=cKsZJ85FuJd59e8k"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        width="100%"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>

            <Tab key="relatorio" title="Pedidos">
              <Card>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center">
                  <h4 className="font-bold text-large text-slate-700">
                    Relatórios
                  </h4>
                  <small className="text-default-500">
                    Relatório financeiro
                  </small>
                </CardHeader>
                <CardBody>
                  <div className="container-iframe">
                    <div className="responsive-iframe">
                      <iframe
                        src="https://www.youtube.com/embed/8vkGADckmiI?si=cKsZJ85FuJd59e8k"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        width="100%"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="personalizada" title="Personalizada">
              <Card>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center text-center">
                  <h4 className="font-bold text-large text-slate-700">
                    Personalizada para seu restaurante
                  </h4>
                  <small className="text-default-500">
                    Configurada e personalizada para sue negócio!
                  </small>
                </CardHeader>
                <CardBody>
                  <div className="container-iframe">
                    <div className="responsive-iframe">
                      <iframe
                        src="https://www.youtube.com/embed/8vkGADckmiI?si=cKsZJ85FuJd59e8k"
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        width="100%"
                        allowFullScreen
                      />
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
