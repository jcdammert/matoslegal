import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          background: "#3a3d42",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          margin: 0,
          textAlign: "center",
          gap: "1rem",
        }}
      >
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "5rem", lineHeight: 1, margin: 0 }}>
          404
        </h1>
        <p style={{ color: "rgba(255,255,255,0.5)", margin: 0 }}>
          Page not found.
        </p>
        <Link
          href="/en"
          style={{
            color: "#e63946",
            textDecoration: "underline",
            fontSize: "0.875rem",
          }}
        >
          Return home
        </Link>
      </body>
    </html>
  );
}
