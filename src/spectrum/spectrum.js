import React from "react";
import {list} from '../elementsList'
import styles from './spectrum.module.css'
import {useDispatch, useSelector} from "react-redux";
import {SPECTRUM_CLICK} from "../services/reducers";
import {NavBar} from "../navBar/navBar";
export function Spectrum () {
    const {elem} = useSelector(state => state.spectrum)
    const dispatch = useDispatch()
    const Element = ({info}) => {
        return (
            <button className={styles.btn} onClick={() => {dispatch({type: SPECTRUM_CLICK, name: info.name})}}>
                <img className={styles.img} src={info.img}/>
            </button>
        )
    }
    return (
        <section className={styles.container}>
            <NavBar/>
            <div className={styles.table}>
                {
                    list.map((elem, index) => (
                        <Element info={elem} key={index}/>
                    ))
                }
            </div>
            <div className={styles.elemContainer}>
                <p className={styles.elem}>{elem}</p>
            </div>
        </section>
    )
}