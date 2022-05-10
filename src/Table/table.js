import React from "react";
import {list} from '../elementsList'
import styles from './table.module.css'
import {useDispatch} from "react-redux";
import {ELEM_ClICK} from "../services/reducers";
import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css'

export function Table () {
    const dispatch = useDispatch()
    const Element = ({info}) => {
        return (
            <Tippy content={`Относительная атомная масса: ${info.RAM}`}>
                <button className={styles.btn} onClick={() => {dispatch({type: ELEM_ClICK, image: info.img})}}>
                    <h3 className={styles.text}>{info.name}</h3>
                </button>
            </Tippy>
        )
    }
    return (
        <section className={styles.container}>
            {
                list.map((elem, index) => (
                        <Element info={elem} key={index}/>
                ))
            }
        </section>
    )
}