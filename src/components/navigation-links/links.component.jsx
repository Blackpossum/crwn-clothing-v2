import { Link } from "react-router-dom"

const AnchorElement = ({className,linkTo,label}) => {
  return (
    <Link className={className} to={linkTo}>
        {label}
    </Link>
  )
}

export default AnchorElement