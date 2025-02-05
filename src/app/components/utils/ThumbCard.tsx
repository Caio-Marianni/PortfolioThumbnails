import React from "react";
import Image, { StaticImageData } from "next/image";

interface ThumbCardProps {
  image: StaticImageData;
  tags?: string[];
  onClick?: () => void;
}

const ThumbCard: React.FC<ThumbCardProps> = ({ image, tags, onClick }) => {
  return (
    <div className="relative border-2 border-black group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 bg-gray-900">
      {/* Imagem da Thumbnail */}
      <Image src={image} alt="Thumbnail" width={320} height={180} className="w-full h-auto object-cover" />

      {/* Sobreposição Gradiente */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10"></div> */}

      {/* Título e Tags */}
      <div className="absolute translate-y-0 group-hover:-translate-y-[46px] transition-all duration-500 ease-in-out  p-3 w-full flex flex-col gap-2 bg-gradient-to-b from-transparent to-black">
        {tags && (
          <div className="flex flex-wrap-reverse gap-1 ">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThumbCard;
