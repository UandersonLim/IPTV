import Header from "./Components/header";
import GlobalStyle from "./globalstyle";
import Main from "./Components/main";
import ContainSlide from "./slides";
import Footer from "./Components/footer";



function App() {

  return (
    <>
    <GlobalStyle/>
     <Header/>
    <ContainSlide/>
     <Main/>
     <Footer/>
    </>
  )
}

export default App
