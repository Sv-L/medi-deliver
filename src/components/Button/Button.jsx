import { ButtonStyled } from "./ButtonStyled";

const Button = ({ className, onClick, children, label, index=1,type="button"}) => {
    return (
        <ButtonStyled
            type={type}
            key={index} className={className} onClick={onClick}>
            {children}
            {label}
        </ButtonStyled>
    );
};

export default Button