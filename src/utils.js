import { message } from "antd";

export const openInNewTab = (url) => {
  const newTab = window.open(url, "_blank", "noopener,noreferrer");
  if (newTab) {
    newWindow.opener = null;
  } else {
    message.error(
      "Unable to open the link in a new tab. Please enable popup. Thanks"
    );
  }
};
