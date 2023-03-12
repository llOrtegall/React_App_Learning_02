import './Footer.css';

export function Footer({ filters }) {
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {/* <h4>Pruebas Técnica de React</h4>
      <span>@llOrTeGall</span>
      <h5>Shopping Cart Con useContext & useReducer</h5> */}
    </footer>
  )
}