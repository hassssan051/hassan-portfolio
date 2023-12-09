export const openInNewTab = (url: string) => {
  const newTab = window.open(url, "_blank", "noopener,noreferrer");
  if (newTab) {
    window.opener = null;
  }
};
