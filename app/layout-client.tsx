'use client';

interface RootLayoutClientProps {
  children: React.ReactNode;
  geistSans: {
    variable: string;
  };
  geistMono: {
    variable: string;
  };
}

export default function RootLayoutClient({
  children,
  geistSans,
  geistMono,
}: RootLayoutClientProps) {
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col antialiased min-h-screen`}
      suppressHydrationWarning={true}
    >
      {children}
    </body>
  );
}
