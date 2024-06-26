

interface props {
    ButtonLabel: String
    classProp?: String
    handleButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    buttonType?: "submit" | "reset" | "button" | undefined
}

const HL_PrimaryButton = ({ ButtonLabel, classProp, handleButtonClick, buttonType }: props) => {

    return (<>
        <button className={'action-button relative py-[10.5px] pl-12 pr-8 text-xl-32 ' + classProp} type={buttonType} onClick={(event) => { handleButtonClick && handleButtonClick(event) }}>
            <span className="absolute button-icon left-0 p-2 pr-2.5 top-0" aria-label="Sign In-icon" role="img"></span>
            <span>{ButtonLabel}</span>
        </button >
    </>)
}

export default HL_PrimaryButton