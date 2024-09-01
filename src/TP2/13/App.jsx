import './main.css';

const App = () => {
  return (
    <div className="container">
      <h1>Questões sobre Responsividade e Mobile-first</h1>
      <div className="question">
        <p>1. Qual das opções abaixo NÃO é um benefício da responsividade em design web?</p>
        <ul>
          <li>A) Melhor experiência do usuário</li>
          <li>B) Aumento do tempo de permanência no site</li>
          <li>C) Melhor desempenho em dispositivos móveis</li>
          <li>D) Redução do tempo de carregamento do site</li>
        </ul>
        <div className="answer">
          <p><strong>Resposta Correta:</strong> D) Redução do tempo de carregamento do site</p>
          <p>A responsividade melhora a experiência do usuário, o SEO e o desempenho em dispositivos móveis, mas não necessariamente reduz o tempo de carregamento do site. O tempo de carregamento depende de outros fatores, como otimização de imagens e eficiência do código.</p>
        </div>
      </div>
      <div className="question">
        <p>2. O que significa a abordagem Mobile-first?</p>
        <ul>
          <li>A) Desenvolver primeiro para dispositivos móveis e depois para desktops</li>
          <li>B) Desenvolver primeiro para desktops e depois para dispositivos móveis</li>
          <li>C) Desenvolver simultaneamente para todos os dispositivos</li>
          <li>D) Desenvolver apenas para dispositivos móveis</li>
        </ul>
        <div className="answer">
          <p><strong>Resposta Correta:</strong> A) Desenvolver primeiro para dispositivos móveis e depois para desktops</p>
          <p>A abordagem Mobile-first significa começar o desenvolvimento pelo design e funcionalidades para dispositivos móveis, garantindo que a experiência seja otimizada para telas menores antes de adaptar para telas maiores.</p>
        </div>
      </div>
      <div className="question">
        <p>3. Qual das opções abaixo representa uma media query correta para aplicar estilos entre 600px e 1200px?</p>
        <ul>
          <li>A) @media (min-width: 600px) or (max-width: 1200px)</li>
          <li>B) @media (min-width: 1200px) and (max-width: 600px)</li>
          <li>C) @media (min-width: 600px) and (max-width: 1200px)</li>
          <li>D) @media (min-width: 600px) between (max-width: 1200px)</li>
        </ul>
        <div className="answer">
          <p><strong>Resposta Correta:</strong> C) @media (min-width: 600px) and (max-width: 1200px)</p>
          <p>Essa media query seleciona dispositivos com largura de tela entre 600px e 1200px, aplicando os estilos definidos dentro dela.</p>
        </div>
      </div>
      <div className="question">
        <p>4. Qual é a principal vantagem de usar unidades relativas (%) em vez de unidades absolutas (px) no design responsivo?</p>
        <ul>
          <li>A) Melhorar a precisão do layout</li>
          <li>B) Facilitar a manutenção do código</li>
          <li>C) Garantir que o layout se ajuste a diferentes tamanhos de tela</li>
          <li>D) Reduzir o tempo de carregamento da página</li>
        </ul>
        <div className="answer">
          <p><strong>Resposta Correta:</strong> C) Garantir que o layout se ajuste a diferentes tamanhos de tela</p>
          <p>Unidades relativas permitem que os elementos do layout se ajustem proporcionalmente ao tamanho da tela, proporcionando uma experiência mais consistente em diferentes dispositivos.</p>
        </div>
      </div>
      <div className="question">
        <p>5. Qual das seguintes práticas NÃO é recomendada no desenvolvimento Mobile-first?</p>
        <ul>
          <li>A) Usar media queries para adaptar o layout para telas maiores</li>
          <li>B) Priorizar o carregamento de recursos essenciais para dispositivos móveis</li>
          <li>C) Desenvolver funcionalidades complexas primeiro para desktops</li>
          <li>D) Otimizar imagens para carregamento rápido em dispositivos móveis</li>
        </ul>
        <div className="answer">
          <p><strong>Resposta Correta:</strong> C) Desenvolver funcionalidades complexas primeiro para desktops</p>
          <p>No desenvolvimento Mobile-first, é importante priorizar a simplicidade e a eficiência para dispositivos móveis antes de adicionar funcionalidades complexas para desktops.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
