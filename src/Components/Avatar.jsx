import styled from "styled-components";

const AvatarContainer = styled.div`
  margin-left: 9px;
  width: 60px;
  height: 60px;
  position: relative;
`;

const AvatarImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

const UserActive = styled.span`
  width: 8px;
  height: 8px;
  position: absolute;
  bottom: 10px;
  right: 3px;
  border-radius: 50%;
  background-color: #3f96d0;
  border: 2px #202b36 solid;
`;

function Avatar({ avatar, status, name }) {
  const currentStatus = () => {
    if (!status) return;
    return <UserActive></UserActive>;
  };

  return (
    <AvatarContainer>
      <AvatarImage src={avatar} alt={name} />
      {currentStatus()}
    </AvatarContainer>
  );
}

export { Avatar };
