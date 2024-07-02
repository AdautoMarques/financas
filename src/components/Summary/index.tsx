import UpImg from '../../assets/up.svg'
import DownImg from '../../assets/down.svg'
import Cifrao from '../../assets/cifrao.svg'

import { Container } from './styles'

const Summary = () => {
  return ( 
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={UpImg} alt="icone de seta para cima" />
        </header>
        <strong>
          R$1000,00
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={DownImg} alt="icone de seta para baixo" />
        </header>
        <strong>
          - R$500,00
        </strong>
      </div>
      <div className='green'>
        <header>
          <p>Total</p>
          <img src={Cifrao} alt="cifrao" />
        </header>
        <strong>
          R$500,00
        </strong>
      </div>
    </Container>
   );
}
 
export default Summary;