import image from "./img/infnet.jpeg";

export default function App() {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt="Instituto Infnet" />
      </div>
      <div className="card-content">
        <h2>Instituto Infnet</h2>
        <p>
          O Infnet é um Instituto de Tecnologia fundado em 1994 que tornou-se referência na formação 
          de profissionais em Tecnologia da Informação, Negócios e para a Indústria Criativa.
        </p>
        <p>
          Rua São José, 90 – Centro, Rio de Janeiro – RJ, 20010-020
        </p>
      </div>
    </div>
  );
}
