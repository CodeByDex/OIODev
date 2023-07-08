import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faCalendarCheck,
    faRightFromBracket,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function UserPanel(props) {
    return (
        <>
            <p>{JSON.stringify(props)}</p>
            <section className="userDash--container flex bg-brand-primary/60 rounded-lg mb-6 mx-auto">
                <div className="bg-gray-200/5 rounded-lg h-full w-full">
                    <div className="userDash--infoContainer p-5 flex flex-col items-center md:flex-row md:px-8 md:py-12 md:gap-4">
                        <div className="flex mr-auto gap-4">
                            <div className="userDash--imageContainer flex items-center">
                                <img src={props.user.image} className="userDash--imagePlaceholder h-20 w-20  bg-brand-accent rounded-full md:h-24 md:w-24"></img>
                            </div>
                            <div>
                                <h4 className="userDash--title text-base">Welcome back,</h4>
                                <h2 className="userDash--name font-semibold text-2xl leading-6 text-brand-textHeader sm:text-3xl md:text-4xl">
                                    {props.user.name}
                                </h2>
                                <h4 className="userDash--email text-sm">
                                    {props.user.email}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}