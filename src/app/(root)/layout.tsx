import { Metadata } from 'next';
import { APP_NAME } from '@/lib/constans';

export const metadata: Metadata = {
  title: `${APP_NAME} | Ecommerce`,
  description:
    'A modern ecommerce platform built with Next.js and Tailwind CSS',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}
