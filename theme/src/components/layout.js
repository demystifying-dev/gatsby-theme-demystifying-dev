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

const Layout = ({ children }) => (
  <DefaultLayout 
    sx = {{ fontFamily: 'body', backgroundColor: 'background', color: 'text' }}
  >
    <Header>
      Header
    </Header>
    <Main>
      <Container>
        <h2>Test</h2>
        { children }
      </Container>
    </Main>
    <Footer>
      Footer
    </Footer>
  </DefaultLayout>
)

export default Layout
