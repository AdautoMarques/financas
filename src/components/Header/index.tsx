import Logo from '../../assets/logo.png'
import { Container, Content } from './styles';

const Header = () => {
  return ( 
    <Container>
      <Content>
      <img src={Logo} alt="logo finaças"/>
      <button type="button">
        Nova Transação
      </button>
      </Content>
    </Container>
   );
}
 
export default Header;