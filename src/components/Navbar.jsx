import logoSrc from "../assets/logo.png"

const Navbar = (props) => {
  return (
    <nav class="navbar">
      <img className="navbar__logo" src={logoSrc} />
      <h1 className="navbar__title">{props.pageTitle}</h1>
    </nav>
  )
};

export default Navbar;
