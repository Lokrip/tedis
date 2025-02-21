import "./globals.scss";
import { ClassNameType } from "@/types/react.type";
import Providers from "@/core/providers/Providers";


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
