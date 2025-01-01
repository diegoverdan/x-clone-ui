import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          <div className="px-2 xsm:px-4 xxl:px-8 h-screen">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray h-screen">
            {children}
          </div>
          <div className="hidden lg:flex ml-4 md:ml-8 flex-1 h-screen">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
