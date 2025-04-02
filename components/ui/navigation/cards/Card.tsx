import Image from "next/image";

interface CardProps {
  imageSrc: string;
  altText: string;
}

export default function Card({ imageSrc, altText }: CardProps) {
  return (
    <div className="card shadow overflow-hidden">
      <Image
        src={imageSrc}
        alt={altText}
        width={190}
        height={254}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
