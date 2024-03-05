import '@/app/ui/global.css'; //ui 안에 기본 css가 있다. 연결작업만 해줌
import { inter } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
