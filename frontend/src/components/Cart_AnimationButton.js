import { HashLink as Link } from 'react-router-hash-link';
import styles from '../routes/Cart.module.css'

export default function AnimationButton({ linkTo, name, id, onClick }) {
    return (<>
        {linkTo ? (
            <Link to={`${linkTo}#`} className={styles.btn} id={id}>
                <span />
                <span />
                <span />
                <span />
                {name}
            </Link>
        ) : (
            <div className={styles.btn} onClick={onClick}>
                <span />
                <span />
                <span />
                <span />
                {name}
            </div>
        )}
    </>)
}