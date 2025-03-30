import { useState } from "react";
import apiClient from "../../utils/apiClient";
import { Button, FormWrapper, Input, PageContainer, Select, TextArea, Title } from "./CreateCourse.styles";

const CreateCourse = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [difficultyLevel, setDifficultyLevel] = useState("beginner");
    const [price, setPrice] = useState(0);

    const handleCreateCourse = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await apiClient.post(`/course`, {
                title,
                description,
                difficultyLevel,
                price,
            });
            alert("Course Created Successfully!");
            console.log(response.data); 
        } catch (error: any) {
            console.error("Error creating course:", error.response?.data?.message || error.message);
        }
    };

    return (
        <PageContainer>
            <FormWrapper>
                <Title>Create a New Course</Title>
                <form onSubmit={handleCreateCourse}>
                    <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <TextArea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <Select value={difficultyLevel} onChange={(e) => setDifficultyLevel(e.target.value)}>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </Select>
                    <Input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
                    <Button type="submit">Create Course</Button>
                </form>
            </FormWrapper>
        </PageContainer>
    );
    

}

export default CreateCourse;