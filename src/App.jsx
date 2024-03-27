import Header from "./Components/header";
import GlobalStyle from "./globalstyle";
import Main from "./Components/main";
import ContainSlide from "./slides";
import Footer from "./Components/footer";
import ButtonWhatApp from "./Components/buttonPulssante";



function App() {

  return (
    <>
    <GlobalStyle/>
    <ButtonWhatApp/>
     <Header/>
    <ContainSlide/>
     <Main/>
     <Footer/>
    </>
  )
}

export default App
