import { useState } from "react";
import Header from "./components/Header";
import FriendPost from "./components/FriendPost";
import FriendList from "./components/FriendList";
import SuggestionsList from "./components/SuggestionsList";
import "./main.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const friends = [
    { id: 1, name: "João", mutualFriends: 5, image: "https://via.placeholder.com/50" },
    { id: 2, name: "Maria", mutualFriends: 3, image: "https://via.placeholder.com/50" }
  ];

  const suggestions = [
    { id: 1, name: "Carlos", mutualFriend: "Ana", image: "https://via.placeholder.com/50" },
    { id: 2, name: "Fernanda", mutualFriend: "Pedro", image: "https://via.placeholder.com/50" }
  ];

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="main-content">
        <FriendList friends={friends} />
        <section className="feed">
          <FriendPost
            image="https://placehold.co/100"
            title="Post 1"
            author="João"
            date="12/09/2024"
            content="Este é um exemplo de postagem de um amigo."
            likes={10}
            shares={2}
            comments={["Ótimo post!", "Muito interessante."]}
          />
          {/* Adicionar mais postagens aqui */}
        </section>
        <SuggestionsList suggestions={suggestions} />
      </main>
    </div>
  );
}
