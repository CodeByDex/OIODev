import Image from "next/image";

export default function HeaderGraphic() {
  return (
    <div className="">
      <Image src="/static/dev-team.svg" alt="3D Character" width={600} height={500} className=""/>
    </div>
  );
}
