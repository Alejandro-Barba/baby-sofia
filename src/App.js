import "./App.css";
import Header from "./header";
import Footer from "./footer"
import Footer2 from "./footer2";
import Bunny from "./bunny";

function App() {
  return (
    <div className="App">
      <Header />
      <Bunny />
      <iframe
        className="mapa"
        title="mapa"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14936.03034445703!2d-103.4195718!3d20.6285476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x452267f731869c4d!2sTERRAZA%20Bambinos!5e0!3m2!1sen!2smx!4v1639332605601!5m2!1sen!2smx"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <Footer />
      <Footer2 />
      <h1 className="esperamos" >Te esperamos!</h1>
    </div>
  );
}

export default App;
