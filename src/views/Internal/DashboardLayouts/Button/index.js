import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({ path, isLink, type = 'button', customClass = "", large, full, children }) => {
    const buttons = document.querySelectorAll('.primaryBtn')
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            let ripples = document.createElement('span')
            ripples.style.left = x + 'px'
            ripples.style.top = y + 'px'
            this.appendChild(ripples);

            window.setTimeout(() => {
                ripples.remove()
            }, 500)
        })
    })
    return (
        <>
            {isLink && (
                <Link to={path} className={`primaryBtn ripple ${customClass} ${large ? "lg" : ""}`} >{children}</Link>
            )}
            {!isLink && (
                <button type={type} className={`primaryBtn ripple ${customClass} ${full ? "fullWidth" : ""} ${large ? "lg" : ""}`} >{children}</button>
            )}
        </>
    )

}

export default Button