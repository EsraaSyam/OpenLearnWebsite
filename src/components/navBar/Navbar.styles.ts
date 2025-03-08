import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #A435F0;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.7rem 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;

  img {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;

    img {
      width: 35px;
      height: 35px;
  }

  @media (max-width: 322px) {
    font-size: 1rem;

      img {
        width: 30px;
        height: 30px;
      }
  }

`;

export const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 3rem;

  @media (max-width: 768px) {
    gap: 0.7rem; 
    margin-right: 1.5rem;
  }

  @media (max-width: 322px) {
    gap: 0.5rem;
    margin-right: 1rem;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background: white;
    color: #A435F0;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 322px) {
    padding: 0.3rem 0.7rem;
    font-size: 0.8rem;
  }
`;

export const UserName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  text-transform: capitalize;
  transition: 0.3s;

  &:hover {
    background-color: white;
    color: #A435F0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.3rem 0.7rem;
  }

  @media (max-width: 322px) {
    font-size: 0.9rem;
    padding: 0.2rem 0.6rem;
  }
`;
