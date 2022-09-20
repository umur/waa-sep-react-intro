export default function (props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
          </tr>
          {props.myObj.products.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.id}</td>
              <td>{obj.product}</td>
              <td>{obj.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
