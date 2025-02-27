import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 3rem;
  }
`;

export const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 450px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: #A435F0;
  margin-bottom: 1.5rem;
  width: 100%;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    width: 90%;
  }

  @media (max-width: 377px) {
    font-size: 1.1rem;
    width: 92%;
  }

  @media (max-width: 322px) {
    font-size: 0.9rem;
    width: 95%;
  }

`;


export const Input = styled.input`
  width: 90%;
  padding: 0.6rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #A435F0;
  }

  @media (max-width: 375px) {
    width: 90%;
    font-size: 0.9rem;
  }
`;

export const RegisterButton = styled.button`
  width: 90%;
  padding: 0.7rem;
  margin-top: 1rem;
  background: #A435F0;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #8a2be2;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 0.9rem;
  }

`;


export const SubTitle = styled.p`
  margin-top: -1.4rem;
  font-size: 0.9rem;
  color: #666;
  width: 85%;
  color:rgb(105, 103, 107);

  @media (max-width: 768px) {
    width: 93%;
    margin-top: -1.4rem;
    font-size: 0.6rem;
  }

  @media (max-width: 480px) {
    width: 93%;
    margin-top: -1.4rem;
    font-size: 0.7rem;
  }

  @media (max-width: 377px) {
    width: 95%;
    margin-top: -1.4rem;
    font-size: 0.6rem;
  }

  @media (max-width: 322px) {
    width: 97%;
    margin-top: -1.4rem;
    font-size: 0.5rem;
  }
  
`;
