import { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as MessageIcon } from "../assets/chat.svg";
import { ReactComponent as NotificationIcon } from "../assets/notification.svg";

const StyledChat = styled.div`
  position: relative;

  .notificationIcon {
    position: absolute;
    top: -2px;
    right: -4px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    &.show {
      opacity: 1;
    }
  }
`;

export function ChatIcon() {
  const [showNotification, setShowNotification] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification((prev) => !prev);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // There will be logic for show notification icon

  return (
    <StyledChat>
      <MessageIcon />
      <NotificationIcon
        className={"notificationIcon " + (showNotification ? "show" : "")}
      />
    </StyledChat>
  );
}
