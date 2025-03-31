import { useState } from "react";
import apiClient from "../../utils/apiClient";
import { Button, FormWrapper, Input, PageContainer, Title } from "./CreateSection.styles";
import { useParams } from "react-router-dom";

const CreateSection = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const [title, setTitle] = useState("");

    console.log("Course ID from state:", courseId);

    const handleCreateSection = async (e: React.FormEvent) => {
        e.preventDefault();

        if (title.trim() === "") {
            alert("Title cannot be empty spaces.");
            return;
        }
        
        try {
            const response = await apiClient.post(`/section`, {
                title,
                courseId,
            });
            alert("Section Created Successfully!");
            console.log(response.data); 
        } catch (error: any) {
            console.error("Error creating section:", error.response?.data?.message || error.message);
        }
    };

    return (
        <PageContainer>
            <FormWrapper>
                <Title>Create a New Section</Title>
                <form onSubmit={handleCreateSection}>
                    <Input type="text" placeholder="Enter section title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <Button type="submit">Create Section</Button>
                </form>
            </FormWrapper>
        </PageContainer>
    );
    

}

export default CreateSection;