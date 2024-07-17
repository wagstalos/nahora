import { ContainerGrid } from "./container";

export function SectionTutorial() {
  return (
    <section className="mt-20">
      <ContainerGrid>
        <div className="w-full h-auto flex flex-col laptop:flex-row items-center justify-center">
          <div className="flex flex-col w-full laptop:w-1/2 laptop:mr-9 text-center laptop:text-start">
            <div className="mb-10">
              <h2 className="text-3xl desktop:text-4xl font-bold gradient__text-dark mb-8 mt-8">
                Experiência do Cliente
              </h2>
              <p className="w-full laptop:max-w-lg">
                O Nahora.app oferece uma{" "}
                <strong>experiência simplificada</strong> para os clientes das
                empresas. Eles podem acessar a página de perfil da empresa,
                selecionar os serviços desejados, escolher o profissional e
                definir o dia e a hora do atendimento de forma intuitiva.
              </p>
            </div>
            <hr className="border-t w-full border-white border-opacity-20 mx-auto" />
            <div>
              <h2 className="text-3xl desktop:text-4xl font-bold gradient__text-dark mb-8 mt-8">
                Notificações e Lembretes
              </h2>
              <p className="w-full laptop:max-w-lg">
                Para garantir que nenhum compromisso seja esquecido, nosso
                aplicativo envia notificações por e-mail e mensagens via
                WhatsApp para lembrar os clientes sobre seus atendimentos. Essa
                funcionalidade torna o Nahora.app mais prático e eficiente do
                que qualquer outro aplicativo de agendamento no mercado
                brasileiro.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full laptop:w-1/2">
            <h2 className="text-2xl font-semibold text-center mb-10 mt-20 laptop:mt-0">
              Tutorial para configuração inicial
            </h2>
            <div className="container-iframe">
              <div className="responsive-iframe">
                <iframe
                  src="https://www.youtube.com/embed/_AQsQNsSAEk?si=qFHOMwufq_6ecVQS"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  width="100%"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </ContainerGrid>
    </section>
  );
}
