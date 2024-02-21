import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black p-5 flex items-center justify-center">
      <Image src="logo.svg" width={150} height={0} alt="logo" />
    </header>
  );
}
