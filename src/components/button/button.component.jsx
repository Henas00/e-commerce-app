import "./button.styles.scss";

const BUTTON_TYPE = {
    google:'google',
    inverted: 'inverted',
}
const Button = ({children, buttonType, ...otherProps}) => {
    return <button className={`${BUTTON_TYPE[buttonType]} custom-button`} {...otherProps}>
        {children}
    </button>;
}
 
export default Button;