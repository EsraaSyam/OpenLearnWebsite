import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1E3A8A;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem 1rem;
  }

`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-right: 0;
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
    color: #1E3A8A;
  }

  }
`;
