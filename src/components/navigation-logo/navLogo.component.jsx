import { Link } from "react-router-dom"

const NavLogo = ({ logoUrl,logoClassName, linkTo }) => {
  return (
    <Link className="logo-container" to={linkTo}>
        <img src={logoUrl} alt="logo" className={logoClassName}/>
    </Link>
  )
}

export default NavLogo