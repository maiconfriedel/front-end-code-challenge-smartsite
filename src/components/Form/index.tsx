"use client";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import { FormRadio } from "./form-radio";
import { FormRadioOption } from "./form-radio-option";

interface FormProps {
  onSubmit(data: any): Promise<void>;
}

export function Form({ onSubmit }: FormProps) {
  const methods = useForm();

  return (
    <div className="w-full border border-gray-300 rounded-md fex flex-col items-start justify-center p-4">
      <div className="flex flex-row items-center justify-start">
        <Image src="/icon-hour.png" alt="hour-icon" width={25} height={0} />
        <span className="text-light-grey font-medium text-sm ml-2">
          Horário
        </span>
      </div>
      <div className="ml-2 mt-6">
        <span className="text-xl text-light-grey font-light">
          Qual período quer treinar?
        </span>
        <hr className="mt-2" />
        <FormProvider {...methods}>
          <form
            className="flex flex-col items-start justify-start font-medium text-light-grey text-md"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <FormRadio>
              <FormRadioOption name="period" label="Manhã" value="morning" />
              <span>06:00 as 12:00</span>
            </FormRadio>
            <FormRadio>
              <FormRadioOption name="period" label="Tarde" value="afternoon" />
              <span>12:01 as 18:00</span>
            </FormRadio>
            <FormRadio>
              <FormRadioOption name="period" label="Noite" value="night" />
              <span>18:01 as 23:00</span>
            </FormRadio>
            <div className="mt-5 flex flex-col justify-start items-start">
              <div>
                <input type="checkbox" {...methods.register("closed")} />
                <label className="ml-2">Exibir unidades fechadas</label>
              </div>
              <div className="mt-2">
                Resultados encontrados: <b>0</b>
              </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-4 mt-6 lg:flex-row">
              <button
                type="submit"
                className="bg-yellow font-bold text-dark-grey rounded border-none w-[50%] py-3"
              >
                ENCONTRAR UNIDADE
              </button>
              <button
                type="reset"
                className="border border-gray-400 font-bold text-dark-grey rounded w-[50%] py-3"
              >
                LIMPAR
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
