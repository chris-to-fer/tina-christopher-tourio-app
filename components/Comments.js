import styled from "styled-components";
import { FormContainer, Input, Label } from "./Form";
import { StyledButton } from "./StyledButton.js";

export default function Comments({ locationName, comments, id, mutate }) {
  const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-blue-light);
    border-radius: var(--border-radius-small);
    padding: 0.5rem;
    margin-top: 1rem;
    text-align: center;
    p {
      border-bottom: solid 1px var(--color-blue-light);
      padding: 20px;
    }
  `;

  async function handleSubmitComment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch(`/api/places/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    mutate();
  }

  return (
    <Article>
      <FormContainer onSubmit={handleSubmitComment}>
        <Label htmlFor="name">Your Name</Label>
        <Input type="text" name="name" placeholder="name" />
        <Label htmlFor="comment">Your Comment</Label>
        <Input type="text" name="comment" placeholder="comment here..." />
        <StyledButton type="submit">Send</StyledButton>
      </FormContainer>
      {comments && (
        <>
          <h1> {comments.length} fans commented on this place:</h1>
          {comments.map(({ name, comment }, idx) => {
            return (
              <div key={idx}>
                <p>
                  <small>
                    <strong>{name}</strong> commented on {locationName}
                  </small>
                </p>
                <span>{comment}</span>
              </div>
            );
          })}
        </>
      )}
    </Article>
  );
}
