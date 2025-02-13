

const Button = ({label, iconURL, backgroundColor, textColor, borderColor}) => {
  return (
    <div>
        <button 
        className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
          ${
            backgroundColor 
              ? `${backgroundColor} 
               ${textColor} ${borderColor}` 
               : "bg-coral-red rounded-full text-white font-semibold border-coral-red"}
            `}>
            {label}
            {iconURL && <img 
                src={iconURL} 
                alt="arrow right icon" 
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button>
    </div>
  )
}

export default Button