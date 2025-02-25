import { Button, NavbarContainer, NavButtons, Logo } from "./Navbar.styles";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>OpenLearn</Logo>
            <NavButtons>
                <Link to="/register">
                    <Button>Get Started</Button>
                </Link>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
            </NavButtons>
        </NavbarContainer>
    );
};

export default Navbar;
