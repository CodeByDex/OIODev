export default function InputField(props) {
    return (
        <span>
            {
                props.enableEditing ? (
                    <input 
                        type="text"
                        value={props.value}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        autoFocus
                        className="block w-auto rounded-md border-spacing-0 text-3xl invalid:ring-red-600"
                        placeholder="Enter your name"
                        pattern="[a-z/i]"
                    />
                ) :

                (
                    <span
                        onClick={props.handleClick}
                        className="font-secondary text-brand-textBody text-3xl display: inline-block w-6 h-3"
                        
                    >
                    {props.value}
                    </span>
                )

            } 
        </span>
    )
}