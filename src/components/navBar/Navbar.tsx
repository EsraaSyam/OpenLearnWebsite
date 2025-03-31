import { Button, NavbarContainer, NavButtons, Logo, UserName } from "./Navbar.styles";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo2.png";

const Navbar = ({ user }: { user: { firstName: string } | null }) => {
    return (
        <NavbarContainer>
            <Logo>
                <img src={logo} alt="OpenLearn Logo" width="40" height="40" />
                OpenLearn
            </Logo>
            <NavButtons>
                {user ? (
                    <>
                        <UserName>{user.firstName}</UserName>
                        <Link to="/create-course">
                            <Button>Create Course</Button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/register">
                            <Button>Get Started</Button>
                        </Link>
                        <Link to="/login">
                            <Button>Login</Button>
                        </Link>
                    </>
                )}
            </NavButtons>
        </NavbarContainer>
    );
};

export default Navbar;
