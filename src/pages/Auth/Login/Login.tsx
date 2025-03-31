import { useState } from "react";
import { LoginContainer, FormWrapper, Title, Input, LoginButton, SubTitle } from "./Login.styles";
import apiClient from "../../../utils/apiClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (Object.values(formData).some((value) => value.trim() === "")) {
      setError("All fields are required and cannot be empty spaces.");
      return
    }

    setLoading(true);

    try {
      const response = await apiClient.post("/auth/login", formData, {
        withCredentials: true,
      });
      console.log("User logged in successfully:", response.data);
      alert("Welcome Back To OpenLearn");
      navigate("/");
    } catch (err: any) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <FormWrapper>
        <Title> Welcome Back To OpenLearn </Title>
        <SubTitle> Please Enter Your Credentials  </SubTitle>
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Email Address" onChange={handleChange} value={formData.email} required />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
          <LoginButton type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Sign In"}
          </LoginButton>
        </form>
      </FormWrapper>
    </LoginContainer>
  );
};

export default Login;
