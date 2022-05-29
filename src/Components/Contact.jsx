import { Avatar } from "./Avatar";
import { Message } from "./Message";
import styled from "styled-components";

const Container = styled.div`
  max-width: 375px;
  height: 76px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 6.5px;
`;

function Contact({ info }) {
  const { name, message, avatar, status } = info;

  return (
    <Container>
      <Wrapper>
        <Avatar name={name} avatar={avatar} status={status}></Avatar>
        <Message message={message} name={name}></Message>
      </Wrapper>
    </Container>
  );
}

export { Contact };
