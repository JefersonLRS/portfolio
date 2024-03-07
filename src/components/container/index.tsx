import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="md:w-full md:mx-auto md:max-w-7xl md:px-4">{children}</div>
  );
}
