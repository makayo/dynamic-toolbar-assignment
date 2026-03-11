// src/Toolbar.jsx
import AlertButton from "./AlertButton";

export default function Toolbar() {
  const toolbarStyles = {
    display: "flex",
    gap: "12px",
    padding: "16px",
    backgroundColor: "#F5F7FA",
    borderRadius: "10px",
    border: "1px solid #E1E5EB",
    justifyContent: "flex-start",
    alignItems: "center",
  };

  const buttons = [
    { message: "Downloading!", children: "Download File" },
    { message: "Sharing!", children: "Share Document" },
    { message: "Uploading!", children: "Upload File" },
    // add more button objects here
  ];

  return (
    <div style={toolbarStyles}>
      {buttons.map((btn, index) => (
        <AlertButton key={index} message={btn.message}>
          {btn.children}
        </AlertButton>
      ))}
    </div>
  );
}
