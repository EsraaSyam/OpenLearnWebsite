import { useState } from "react";
import axios from "axios";
import { RegisterContainer, FormWrapper, Title, Input, RegisterButton } from "./Register.styles";

const Register = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
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
      const response = await axios.post("http://localhost:3000/api/v1/auth/register", formData);
      console.log("User registered successfully:", response.data);
      alert("Account created successfully!");
      
    } catch (err: any) {
      console.log("Error: ", err);
      console.error("Registration failed:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <FormWrapper>
        <Title>Create an Account</Title>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <RegisterButton type="submit" disabled={loading}>
            {loading ? "Registering..." : "Sign Up"}
          </RegisterButton>
        </form>
      </FormWrapper>
    </RegisterContainer>
  );
};

export default Register;
