import Image from "next/image";

export function Form() {
  return (
    <div className="w-full border border-gray-300 rounded-md fex flex-col items-start justify-center p-4">
      <div className="flex flex-row items-center justify-start">
        <Image src="/icon-hour.png" alt="hour-icon" width={25} height={0} />
        <span className="text-light-grey font-medium text-sm ml-2">
          Horário
        </span>
      </div>
      <div className="ml-2 mt-2">
        <span className="text-xl text-light-grey font-light">
          Qual período quer treinar?
        </span>
      </div>
    </div>
  );
}
