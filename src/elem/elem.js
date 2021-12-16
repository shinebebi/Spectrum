import React from 'react'
import {Table} from '../Table/table'
import style from './elem.module.css'
import {useSelector} from "react-redux";
import {NavBar} from "../navBar/navBar";
export function Elem() {
    const {elemImg} = useSelector(state => state.spectrum)
    return (
        <section className={style.main}>
            <NavBar/>
            <h1 className={style.header}>Спектральный анализ</h1>
            <Table/>
            <div className={style.imgContainer}>
                {elemImg &&
                <img className={style.img} src={elemImg}/>
                }
            </div>
        </section>
    );
}