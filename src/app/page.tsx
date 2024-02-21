import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="py-10 px-52 flex flex-col">
        <h1 className="font-semibold text-3xl">
          REABERTURA <br />
          SMART FIT
        </h1>
        <div className="bg-black h-[6px] w-16 mt-4" />
        <p className="font-light mt-4 text-base">
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medida de segurança que estamos seguindo
        </p>
      </main>
    </div>
  );
}
