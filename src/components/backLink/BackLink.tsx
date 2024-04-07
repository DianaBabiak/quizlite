import {Link} from "react-router-dom";
import s from './backLink.module.scss'


type BackLinkProps = {
    link:string
    name:string
}

export const BackLink = ({link, name}:BackLinkProps)=>{
    return(
        <div className={s.link}>
            <Link className={s.link} to={link}>
                &#9664; Back to {name}
            </Link>
        </div>

    )
}