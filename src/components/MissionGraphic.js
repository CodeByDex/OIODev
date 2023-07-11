import Image from "next/image";
import heroImage from "../../public/static/ComputerDesktop.svg";
import iPhoneDemo from "../../public/static/phoneDemo.svg";
import gardenCoding from "../../public/static/gardenCoding.svg";

export default function MissionGraphic() {
  return (
    <div className="">
      <Image
        src={gardenCoding}
        width={600}
        height={500}
        alt="Mission Hero Image"
        className=""
      />
    </div>
  );
}
