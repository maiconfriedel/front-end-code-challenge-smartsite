import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-black p-5 flex items-center justify-center">
      <Image src="logo.svg" width={150} height={0} alt="logo" />
    </header>
  );
};

export default Header;
