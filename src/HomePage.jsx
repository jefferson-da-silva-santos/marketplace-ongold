import Container from "./components/Container";
import MenuArea from "./components/MenuArea";
import MenuAreaPrimary from "./components/MenuAreaPrimary";
import MenuAreaSecundary from "./components/MenuAreaSecundary";
import Input from "./components/Input";

function HomePage() {
  return (
    <div>
      <Container>
        <MenuArea>
          <MenuAreaPrimary>

          </MenuAreaPrimary>
          <MenuAreaSecundary>
            <Input id={"input-busca"} name={"busca"} placeholder={"Buscar produto..."} type={"text"} className={"input-busca"}/>
            </MenuAreaSecundary>
        </MenuArea>
      </Container>
    </div>
  )
}

export default HomePage
