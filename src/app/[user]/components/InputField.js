import {useState} from 'react'

export default function InputField(props) {
    const [showInput, setShowInput] = useState(false)
    return (
        <span>
            {
                showInput ? (
                    <input 
                        type="text"
                        value={props.value}
                        onChange={props.handleChange}
                        onBlur={()=> setShowInput(false)}
                        autoFocus
                        className="block w-auto rounded-md border-spacing-0 text-3xl"
                        placeholder="Enter your name"
                    />
                ) :

                (
                    <span
                        onClick={() => setShowInput(true)}
                        className="font-secondary text-brand-textBody text-3xl display: inline-block w-6 h-3"
                    >
                    {props.value}
                    </span>
                )

            } 
        </span>
    )
}