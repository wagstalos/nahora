import Image from "next/image";
export function SectionCardsInner({ image, title, description }) {
  return (
    <div className="flex-1 p-6 border-2 border-gray-700 rounded-md">
      <Image
        src={image}
        alt="ImgNFT"
        loading="lazy"
        className=""
        width={24}
        height={24}
      />
      <h3 className="font-bold text-lg mb-4 mt-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}