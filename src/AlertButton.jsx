// src/AlertButton.jsx
export default function AlertButton({ message, children }) {
  const styles = {
    padding: "10px 18px",
    backgroundColor: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.2s ease, transform 0.15s ease",
  };

  const hoverStyles = {
    backgroundColor: "#357ABD",
    transform: "translateY(-2px)",
  };

  return (
    <button
      style={styles}
      onClick={() => alert(message)}
      onMouseEnter={(e) => Object.assign(e.target.style, hoverStyles)}
      onMouseLeave={(e) => Object.assign(e.target.style, styles)}
    >
      {children}
    </button>
  );
}
