import Image from "next/image";

interface ImageUri {
  uri: string;
  subtitle: string;
}

interface LegendItemProps {
  title: string;
  imageUris: ImageUri[];
}

export function LegendItem({ title, imageUris }: LegendItemProps) {
  return (
    <main className="flex flex-col items-center justify-center ">
      <span>{title}</span>
      <div className="flex flex-row gap-3 mt-2">
        {imageUris.map((image) => (
          <div
            key={image.uri}
            className="flex flex-col items-center justify-center"
          >
            <Image src={image.uri} alt={image.subtitle} width={50} height={0} />
            <span className="font-medium">{image.subtitle}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
