import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { GlobalStyles } from "./globalStyles"
import styled from 'styled-components'
import Home from "./views/Home/Home"

const StyledApp = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  main {
    flex-grow: 1;
    /* height: 55vh; */
  }
`

const App = () => {
  return (
    <StyledApp>
      <GlobalStyles />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </StyledApp>
  )
}

export default App
