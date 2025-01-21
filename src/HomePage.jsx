import Container from "./components/Container";
import MenuArea from "./components/MenuArea";
import MenuAreaPrimary from "./components/MenuAreaPrimary";
import MenuAreaSecundary from "./components/MenuAreaSecundary";

function HomePage() {
  return (
    <div>
      <Container>
        <MenuArea>
          <MenuAreaPrimary />
          <MenuAreaSecundary />
        </MenuArea>
      </Container>
    </div>
  )
}

export default HomePage
