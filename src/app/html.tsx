import "./globals.scss";
import { ClassNameType } from "@/types/react.type";
import Providers from "./Providers";


export default function MainHtml({
  children,
  className
}: Readonly<{
  children: React.ReactNode;
} & ClassNameType>) {
  return (
    <html lang="en">
      <body className={className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
