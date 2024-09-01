import { useState } from 'react';
import './main.css';

export default function TP2_09() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === '3') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <p>Qual das opções abaixo representa uma media query correta para aplicar estilos entre 600px e 1200px?</p>
        
        <div>
          <input 
            type="radio" 
            id="option1" 
            name="question" 
            value="1" 
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="option1">A) @media (min-width: 600px) or (max-width: 1200px)</label>
        </div>

        <div>
          <input 
            type="radio" 
            id="option2" 
            name="question" 
            value="2" 
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="option2">B) @media (min-width: 1200px) and (max-width: 600px)</label>
        </div>

        <div>
          <input 
            type="radio" 
            id="option3" 
            name="question" 
            value="3" 
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="option3">C) @media (min-width: 600px) and (max-width: 1200px)</label>
        </div>

        <div>
          <input 
            type="radio" 
            id="option4" 
            name="question" 
            value="4" 
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="option4">D) @media (min-width: 600px) between (max-width: 1200px)</label>
        </div>

        <div>
          <input 
            type="radio" 
            id="option5" 
            name="question" 
            value="5" 
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          <label htmlFor="option5">E) @media only screen and (width: 600px) to (1200px)</label>
        </div>

        <button type="submit">Enviar</button>
      </form>

      {isCorrect !== null && (
        <p className='mensagem'>
          {isCorrect ? 'Correto! Essa media query seleciona dispositivos com largura de tela entre 600px e 1200px.' : 'Incorreto! A resposta correta é: C) @media (min-width: 600px) and (max-width: 1200px).'}
        </p>
      )}
    </div>
  );
}
