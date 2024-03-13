import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="w-full px-3 mx-auto py-3 md:w-full md:mx-auto md:max-w-7xl md:px-10 md:py-8">
      {children}
    </div>
  );
}
