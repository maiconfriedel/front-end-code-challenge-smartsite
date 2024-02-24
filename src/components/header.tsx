import Image from "next/image";

export function Header() {
  return (
    <header className="bg-black p-5 flex items-center justify-center w-full">
      <Image src="logo.svg" width={200} height={0} alt="logo" />
    </header>
  );
}
