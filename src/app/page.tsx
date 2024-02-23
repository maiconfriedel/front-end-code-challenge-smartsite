"use client";
import { Form } from "@/components/Form";
import { Header } from "@/components/header";

export default function Home() {
  async function handleFormSubmit(data: any) {
    alert(JSON.stringify(data));
  }

  return (
    <div className="bg-white flex flex-col justify-start items-center h-screen">
      <Header />
      <main className="py-12 flex flex-col max-w-6xl gap-4 px-10">
        <h1 className="font-semibold text-3xl text-dark-grey">
          REABERTURA <br />
          SMART FIT
        </h1>
        <span className="bg-dark-grey h-[7px] w-20" />
        <p className="font-medium text-dark-grey">
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
        <Form onSubmit={handleFormSubmit} />
      </main>
    </div>
  );
}
