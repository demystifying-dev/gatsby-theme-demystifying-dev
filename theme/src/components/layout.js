/** @jsx jsx */
import { 
  jsx,
  Layout as DefaultLayout,
  Header,
  Footer,
  Main,
  Container,
  Styled
} from "theme-ui"
import { Global } from "@emotion/core"

const Layout = ({ children }) => (
  <DefaultLayout>
    <Global styles={{ body: { margin: 0 } }} />
    <Header>
      Header
    </Header>
    <Main>
      <Container>
        <Styled.h2>Test</Styled.h2>
        { children }
      </Container>
    </Main>
    <Footer>
      Footer
    </Footer>
  </DefaultLayout>
)

export default Layout
