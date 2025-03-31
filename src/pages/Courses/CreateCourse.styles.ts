import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
`;
export const Title = styled.h2`
  color: #A435F0;
  margin-bottom: 1.5rem;
`;

export const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 450px;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: #A435F0;
  }
`;

export const TextArea = styled.textarea`
  width: 85%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  height: 70px;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: #A435F0;
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 450px;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  background: white;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: #A435F0;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 450px;
  padding: 0.9rem;
  margin-top: 1rem;
  background: #A435F0;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s;

  &:hover {
    background: #8a2be2;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

