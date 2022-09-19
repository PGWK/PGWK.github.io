import React from 'react';
import s from './Main.module.css'
import { useState } from 'react';


const Main = ({ liquid, wasClicked, setClicked }) => {


    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.items}>
                    <div className={s.container}>
                    
                        {
                            wasClicked
                        ?
                            liquid[0].brand.length <= 10 
                                ?
                                    <div className={s.brand}>{liquid[0].brand.toUpperCase()}</div>
                                :
                                    <div className={s.brand + ' ' + s.brandLittle}>{liquid[0].brand.toUpperCase()}</div>
                        :   
                            setClicked(!wasClicked)    
                        }
                            {
                                wasClicked
                            ?
                                liquid.map(elem => (
                                    <div className={s.item} key={elem.id}>
                                        <div className={s.container}>
                                            {elem.id % 2 === 1 && elem.id !== 0
                                                ?
                                                    <img src={elem.image} style={{transform:"rotate(40deg)"}} alt="liq" />
                                                :
                                                    <img src={elem.image} alt="liq" />
                                            }
                                            <div className={s.popUpDescription}>
                                                <div className={s.title}> {elem.name} </div>
                                                <div className={s.base}> {elem.base} </div>
                                                <div className={s.description}>
                                                    <div className={s.strong}>{elem.strong}</div>
                                                    <div className={s.full}> {elem.full} </div>
                                                    <div className={s.taste}> {elem.taste} </div>
                                                </div>
                                                <div className={s.price}><span> {elem.oldPrice} </span> {elem.currentPrice} </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            :             
                                setClicked(!wasClicked)
                            }                                   
                    </div>
                </div>
                <div className={s.greetingModal}>
                    <div className={s.greetingModal__content}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
