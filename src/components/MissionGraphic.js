import Image from "next/image"
import heroImage from "../../public/static/ComputerDesktop.svg"


export default function MissionGraphic() {
    return(
        <div className="">
            <Image 
                    src={heroImage}
                    style={{ width: '100%', height: 'auto' }}
                    alt="Mission Hero Image"
                    className="hero--image brand-secondary"
                />
        </div>
    )
}