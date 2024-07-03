import { Container } from "./styles";


const TransactionsTable = () => {
  return ( 
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Salario</td>
            <td className="deposit">R$1900</td>
            <td>Salario</td>
            <td>08/06/2024</td>
          </tr>
          <tr>
            <td>Ajuda de custo</td>
            <td className="deposit">R$700</td>
            <td>Salario</td>
            <td>08/06/2024</td>
          </tr>
          <tr>
            <td>Combustivel</td>
            <td  className="withdraw">- R$23</td>
            <td>Automovel</td>
            <td>08/06/2024</td>
          </tr>
        </tbody>
      </table>
    </Container>
   );
}
 
export default TransactionsTable;