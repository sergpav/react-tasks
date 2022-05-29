import styled from "styled-components";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MessageWrapper = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
`;

const MessageHeader = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
`;

const MessageText = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: #8e8e93;
  max-width: 250px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const MessageInfo = styled.div`
  margin-top: 3px;
  text-align: center;
  padding-right: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

const MessageTime = styled.div`
  letter-spacing: -0.1px;
  color: #8e8e93;
  text-align: right;
`;

const MessageCounter = styled.div`
  margin-top: 14px;
  height: 20px;
  width: 26px;
  color: #ffffff;
  border-radius: 10px;
  margin-left: auto;
  margin-right: 0;
  background-color: ${(props) => (props.unread ? "#AEAEB2" : "#037EE5")};
`;

function Message({ name, message }) {
  const { body, time } = message;
  console.log();

  const getRandomInt = (max) => {
    return Math.round(Math.random() * max);
  };

  const formatDate = (date) => {
    if (new Date().toString() === date.toString()) {
      return date.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return dayNames[date.getDay()];
  };

  const isActive = getRandomInt(1) === 1 ? "active" : "";

  return (
    <MessageWrapper>
      <div>
        <MessageHeader>{name}</MessageHeader>
        <MessageText>{body}</MessageText>
      </div>
      <MessageInfo>
        <MessageTime>{formatDate(time)}</MessageTime>
        <MessageCounter unread={isActive}>{getRandomInt(100)}</MessageCounter>
      </MessageInfo>
    </MessageWrapper>
  );
}

export { Message };
