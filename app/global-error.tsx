"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div style={{ padding: "60px 20px", textAlign: "center", fontFamily: "sans-serif" }}>
          <h2 style={{ color: "#0F2747", marginBottom: 12 }}>System Error</h2>
          <p style={{ color: "#64748B", marginBottom: 24 }}>{error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => reset()}
            style={{
              padding: "12px 24px",
              background: "#FF6B1A",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
