import { Button, NavbarContainer, NavButtons, Logo } from "./Navbar.styles";


const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>OpenLearn</Logo>
            <NavButtons>
                <Button >Get started</Button>
                <Button >Login</Button>
            </NavButtons>
        </NavbarContainer>
    );
};

export default Navbar;
