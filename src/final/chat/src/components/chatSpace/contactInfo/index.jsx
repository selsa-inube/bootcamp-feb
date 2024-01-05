import { StyledContactInfo } from "./styles.js";

const ContactInfo = ({ activeChat, contactMocks, groupMocks }) => {
  let chatSource = {};
  if (activeChat[0] === "g") {
    chatSource = groupMocks.filter((group) => group.id === activeChat)[0];
  } else if (activeChat[0] === "c") {
    chatSource = contactMocks.filter((contact) => contact.id === activeChat)[0];
  }

  return (
    <StyledContactInfo>
      <img src={chatSource.avatar} alt="Chat Pic" />
      <p>{chatSource.name}</p>
      <p>MinutesAgo</p>
    </StyledContactInfo>
  );
};

export { ContactInfo };