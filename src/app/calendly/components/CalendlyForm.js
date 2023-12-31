"use client"
//modeled after: https://dev.to/sebiweise/effortlessly-schedule-meetings-with-a-custom-calendly-nextjs-application-2il7
import Script from 'next/script'
import { useSession } from "next-auth/react"

const CalendlyForm = (props) => {
    const showDetails = process.env.NEXT_PUBLIC_CALENDLY_SHOW_DETAILS == "false" ? 1 : 0;
    const showCookies = process.env.NEXT_PUBLIC_CALENDLY_SHOW_COOKIES == "false" ? 1 : 0;
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <div>Loading...</div>
        )
    } else if (session) {

        return (
            <>
                <div className="calendly-inline-widget w-screen h-screen" data-url={`https://calendly.com/${props.CalendlyUrl}${props.type ? `/${props.type}` : ''}?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}&name=${session.user.name}&email=${session.user.email}`}></div>
                <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
            </>
        )
    } else {
        return (
            <>
                <div className="calendly-inline-widget w-screen h-screen" data-url={`https://calendly.com/${props.CalendlyUrl}${props.type ? `/${props.type}` : ''}?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}></div>
                <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
            </>
        )

    }
}

export default CalendlyForm