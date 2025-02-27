import { useState } from "react";
import { RegisterContainer, FormWrapper, Title, Input, RegisterButton, SubTitle } from "./Register.styles";
import apiClient from "../../utils/apiClient";

const Register = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (Object.values(formData).some((value) => value.trim() === "")) {
      setError("All fields are required and cannot be empty spaces.");
      return;
    }


    setError(null);

    try {
      const response = await apiClient.post("/auth/register", formData);
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
        <Title> Get Started With OpenLearn </Title>
        <SubTitle>Please provide your details to join OpenLearn community</SubTitle>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} required />
          <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} required />
          <Input type="email" name="email" placeholder="Email Address" onChange={handleChange} value={formData.email} required />
          <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
          <RegisterButton type="submit" disabled={loading}>
            {loading ? "Registering..." : "REGISTER NOW"}
          </RegisterButton>
        </form>
      </FormWrapper>
    </RegisterContainer>
  );
};

export default Register;
