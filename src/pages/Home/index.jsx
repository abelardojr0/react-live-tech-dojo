import { barbeiros_falsos } from "../../mocks/barbeiros";
import { servicos_falsos } from "../../mocks/servicos";

export const Home = () => {
  return (
    <>
      <h2>Barbeiros</h2>
      <section>
        {barbeiros_falsos &&
          barbeiros_falsos.map((element) => (
            <div>
              <h3>
                Nome: <span>{element.nome}</span>
              </h3>
              <p>
                CPF: <span>{element.cpf}</span>
              </p>
              <p>
                Telefone: <span>{element.telefone}</span>
              </p>
            </div>
          ))}
      </section>

      <h2>Serviços</h2>
      <section>
        {servicos_falsos &&
          servicos_falsos.map((element) => (
            <div>
              <h3>
                Nome: <span>{element.nome}</span>
              </h3>
              <p>
                Descrição: <span>{element.descricao}</span>
              </p>
              <p>
                Valor: R$<span>{element.valor}</span>
              </p>
              <p>
                Percentual: <span>{element.percentual_barbeiro} %</span>
              </p>
            </div>
          ))}
      </section>
    </>
  );
};
