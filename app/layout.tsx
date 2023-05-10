import "./globals.css";

export const metadata = {
  title: "Tanner Cecchetti",
  description: "Portfolio and link collection for Tanner Cecchetti",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {["16x16", "32x32", "96x96"].map((s) => (
          <link key={s} rel="icon" type="image/png" href={`/favicon-${s}.png`} sizes={s} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
