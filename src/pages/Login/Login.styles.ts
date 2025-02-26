import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

export const Title = styled.h2`
  color: #A435F0;
  margin-bottom: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #A435F0;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.8rem;
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
`;
