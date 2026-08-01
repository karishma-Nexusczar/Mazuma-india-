import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "80px 20px", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "56px", color: "#12284c", margin: "0 0 12px" }}>404</h1>
      <h2 style={{ color: "#334155", margin: "0 0 12px" }}>Page Not Found</h2>
      <p style={{ color: "#64748b", marginBottom: "28px" }}>The page you are looking for does not exist or has been moved.</p>
      <Link
        href="/"
        style={{
          padding: "12px 26px",
          background: "#f36b21",
          color: "#ffffff",
          textDecoration: "none",
          borderRadius: "10px",
          fontWeight: 600,
          display: "inline-block",
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}
