import Card from 'react-bootstrap/Card';
import infnet from '../img/infnet.jpeg';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={infnet} />
      <Card.Body>
        <Card.Title>Instituto Infnet</Card.Title>
        <Card.Text>
          O Infnet é um Instituto de Tecnologia fundado em 1994 que tornou-se referência na formação 
          de profissionais em Tecnologia da Informação, Negócios e para a Indústria Criativa.
        </Card.Text>
        <Card.Text>
          Rua São José, 90 – Centro, Rio de Janeiro – RJ, 20010-020
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;