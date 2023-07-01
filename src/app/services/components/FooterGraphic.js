import Image from "next/image";

export default function FooterGraphic() {
  return (
    <div className="">
      <Image
        src="/static/boxes.svg"
        alt="3D Character"
        width={300}
        height={300}
        className="rotate-180 max-h-[150px] sm:max-h-full"
      />
    </div>
  );
}
