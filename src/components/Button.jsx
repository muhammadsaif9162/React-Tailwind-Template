const Button = ({ label, iconURL, backgroundColor = 'bg-coral-red', borderColor = 'border-coral-red', textColor = 'text-white', fullWidth }) => {
    return (
        <button className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor} rounded-full ${textColor} ${borderColor} ${fullWidth && 'w-full'}`}>{label}
            {iconURL && <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="arroww-right" />}
        </button>
    )
}

export default Button