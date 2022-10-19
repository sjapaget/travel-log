import logoSrc from "../assets/logo.png"

const Navbar = (props) => {
  return (
    <div>
      <img src={logoSrc} />
      <h1>{props.pageTitle}</h1>
    </div>
  )
};

export default Navbar;
