import { useState } from 'react';
import './main.css';

export default function TP2_09() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === '5') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Qual das opções abaixo NÃO é um benefício da responsividade em design web?</p>
        
        <div>
          <input 
            type="radio" 
            id="option1" 
            name="question" 
            value="1" 
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="option1">A) Melhor experiência do usuário.</label>
        </div>

        <div>
          <input 
            type="radio" 
            id="option2" 
            name="question" 
            value="2" 
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="option2">B) Aumento do tempo de permanência no site.</label>
        </div>

        <div>
          <input 
            type="radio" 
            id="option3" 
            name="question" 
            value="3" 
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="option3">C) Melhor desempenho em dispositivos móveis</label>
        </div>

        <div>
          <input 
            type="radio" 
            id="option4" 
            name="question" 
            value="4" 
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="option4">D) SEO melhorado</label>
        </div>

        <div>
          <input 
            type="radio" 
            id="option5" 
            name="question" 
            value="5" 
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="option5">E) Redução do tempo de carregamento do site</label>
        </div>

        <button type="submit">Enviar</button>
      </form>

      {isCorrect !== null && (
        <p id='mensagem'>
          {isCorrect ? 'Correto! A responsividade melhora a experiência do usuário, o SEO e o desempenho em dispositivos móveis, mas não necessariamente reduz o tempo de carregamento do site. O tempo de carregamento depende de outros fatores, como otimização de imagens e eficiência do código.' : 'Incorreto! A Resposta correta seria: E) Redução do tempo de carregamento do site.'}
        </p>
      )}
    </div>
  );
}