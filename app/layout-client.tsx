'use client';

import { Geist, Geist_Mono } from "next/font/google";

interface RootLayoutClientProps {
  children: React.ReactNode;
  geistSans: ReturnType<typeof Geist>;
  geistMono: ReturnType<typeof Geist_Mono>;
}

export default function RootLayoutClient({
  children,
  geistSans,
  geistMono,
}: RootLayoutClientProps) {
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col antialiased min-h-screen`}
    >
      {children}
    </body>
  );
}
