import CalendlyForm from "../components/CalendlyForm";

export default function Calendly({params}){
    const CalendlyUrl = params.ID;

    return(
        <main>
            <CalendlyForm {...{CalendlyUrl}} />
        </main>
    )
}