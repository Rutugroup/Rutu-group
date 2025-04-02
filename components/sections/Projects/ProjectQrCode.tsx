import Image from "next/image";

interface ProjectQrCodeProps {
  qrCode: string;
  maharera: string;
  website: string;
}

export default function ProjectQrCode({
  qrCode,
  maharera,
  website,
}: ProjectQrCodeProps) {
  return (
    <section className="py-16" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          <Image
            src={qrCode || "/placeholder.svg?height=150&width=150"}
            alt="MahaRERA QR Code"
            width={120}
            height={120}
            className="mb-4"
          />
          <p className="text-gray-700 mb-1">MahaRERA No.: {maharera}</p>
          <p className="text-gray-600 text-sm">
            Project details available at:{" "}
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e87237] hover:underline"
            >
              {website}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
