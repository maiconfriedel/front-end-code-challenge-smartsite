import { PropsWithChildren } from "react";

export function FormRadio({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-row justify-between w-full border-b-[1px] mt-4">
      {children}
    </div>
  );
}
