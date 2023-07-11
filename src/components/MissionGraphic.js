import Image from "next/image";
import gardenCoding from "../../public/static/gardenCoding.svg";

export default function MissionGraphic() {
  return (
    <div className="">
      <Image
        src={gardenCoding}
        width={1200}
        height={1000}
        alt="Mission Hero Image"
        className=""
      />
    </div>
  );
}
