import { Link } from 'react-router-dom'
import style from './navBar.module.css'
export function NavBar () {
    return (
        <section className={style.container}>
            <Link className={style.link} to={{pathname: '/'}}>
                <p>Химические элементы</p>
            </Link>
            <Link className={style.link} to={{pathname: '/spectrum'}}>
                <p>Спектры</p>
            </Link>
        </section>
    )
}