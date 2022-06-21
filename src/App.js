import "./App.css";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Url from "./components/Url";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Url />
        <Statistics />
        <Boost />
      </main>
      <Footer />
    </>
  );
}

export default App;
