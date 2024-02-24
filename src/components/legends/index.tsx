import { LegendItem } from "./legend-item";

export function Legends() {
  return (
    <main className="bg-gray-200 w-full rounded-sm p-5 flex flex-col justify-around sm:flex-row gap-2">
      <LegendItem
        title="Máscara"
        imageUris={[
          { uri: "/required-mask.png", subtitle: "Obrigatório" },
          { uri: "/recommended-mask.png", subtitle: "Recomendado" },
        ]}
      />
      <LegendItem
        title="Toalha"
        imageUris={[
          { uri: "/required-towel.png", subtitle: "Obrigatório" },
          { uri: "/recommended-towel.png", subtitle: "Recomendado" },
        ]}
      />
      <LegendItem
        title="Bebedouro"
        imageUris={[
          { uri: "/partial-fountain.png", subtitle: "Parcial" },
          { uri: "/forbidden-fountain.png", subtitle: "Proibido" },
        ]}
      />
      <LegendItem
        title="Vestiários"
        imageUris={[
          { uri: "/required-lockerroom.png", subtitle: "Liberado" },
          { uri: "/partial-lockerroom.png", subtitle: "Parcial" },
          { uri: "/forbidden-lockerroom.png", subtitle: "Fechado" },
        ]}
      />
    </main>
  );
}
