
import CalendlyForm from "./components/CalendlyForm";

const props = {CalendlyUrl: "chelsea-luevano"}

export default function Calendly({params}){
   //console.log(InlineWidget)
   

    return(
        <main>
            <CalendlyForm {...props} />
        </main>
    )
}