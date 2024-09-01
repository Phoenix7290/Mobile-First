import img from "./assets/image.svg";
import "./styles/landscape-screen.css"
import "./styles/portrait-screen.css"

export default function App() {
    return (
        <div>
            <img src={img} alt="A funny meme: I have no ideia how my code works" className="image"/>
            <p>Mobile-first é pensar primeiramente no mobile, telefone/celular. Esse pensamento de pensar primeiro no mobile, gera mais acessibilidade, uma vez que é mais comum o uso de smartphones. Depois, claro, ocorre a responsividade para telas maiores como tablets e desktops.</p>
        </div>
    )
}