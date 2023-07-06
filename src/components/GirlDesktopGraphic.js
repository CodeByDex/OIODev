import Image from "next/image"
import GirlWithDesktopGraphic from "../../public/static/GirlWithDesktop.svg"


export default function GirlDesktopGraphic() {
    return(
        <div className="sm:w-full max-w-lg mr-3 my-3">
            <Image 
                    src={GirlWithDesktopGraphic}
                    style={{ width: '100%', height: 'auto' }}
                    alt="Girl with desktop for process Image"
                    className=""
                />
        </div>
    )
}