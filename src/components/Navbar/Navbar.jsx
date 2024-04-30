import './Navbar.css';
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About us</li>
        <li>Porfolio</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
