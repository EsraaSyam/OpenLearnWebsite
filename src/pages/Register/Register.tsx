import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  RegisterContainer, FormWrapper, Title, Input, 
  RegisterButton, SubTitle, GoogleButton, 
  OrDivider
} from "./Register.styles";
import apiClient from "../../utils/apiClient";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("authToken", token); 
      navigate("/OpenLearnWebsite");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const nameRegex = /^[a-zA-Z\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\s]+$/;

    if (Object.values(formData).some((value) => value.trim() === "")) {
      setError("All fields are required and cannot be empty spaces.");
      return;
    }

    if (!nameRegex.test(formData.firstName) || !nameRegex.test(formData.lastName)) {
      setError("First name and last name must contain only letters");
      setLoading(false);
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

  const handleGoogleLogin = () => {
    window.location.href = "https://openlearn-production.up.railway.app/api/v1/auth/google/login";
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
        <OrDivider>OR</OrDivider>
        <GoogleButton onClick={handleGoogleLogin}>
          CONTINUEU WITH GOOGLE
        </GoogleButton>
      </FormWrapper>
    </RegisterContainer>
  );
};

export default Register;
