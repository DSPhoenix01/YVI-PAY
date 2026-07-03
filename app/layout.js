import "./globals.css";

export const metadata = {
  title: "YVI PAY",
  description: "Votre argent. Vos proches. Sans frontières.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
