import { useState } from "react";
import { LoginContainer, FormWrapper, Title, Input, LoginButton } from "./Login.styles";
import apiClient from "../../utils/apiClient";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.post("/auth/login", formData);
      console.log("User logged in successfully:", response.data);
      alert("Welcome back");
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
        <Title> Welcome Back </Title>
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <LoginButton type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Sign In"}
          </LoginButton>
        </form>
      </FormWrapper>
    </LoginContainer>
  );
};

export default Login;
