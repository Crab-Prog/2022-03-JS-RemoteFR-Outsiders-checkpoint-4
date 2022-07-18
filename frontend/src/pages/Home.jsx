import Header from "@components/Header";
import Navbar from "@components/Navbar";
import "@styles/Home.scss";

export default function Home() {
  return (
    <header className="home-header">
      <Navbar />
      <Header />
    </header>
  );
}
