
import CalendlyForm from "./components/CalendlyForm";

const props = {CalendlyUrl: "chelsea-luevano"}

export default function Calendly(){
   //console.log(InlineWidget)
   

    return(
        <main>
            <CalendlyForm {...props} />
        </main>
    )
}