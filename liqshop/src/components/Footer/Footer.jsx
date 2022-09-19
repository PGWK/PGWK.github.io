import React from 'react'
import s from './Footer.module.css'

const Footer = ({ inBottom, setInBottom }) => {
    const scrollUP = () => {
        window.scrollTo({top: -2000, behavior: 'smooth'})
        setInBottom(false)
    }
    
    return (
        <div className={s.container}>
            <div className={s.footer}>
                <div className={s.footer__elem}>
                    <div className={s.footer__logo}>Fumy</div>
                </div>
                <div className={s.footer__elem}>
                    <div className={s.footer__image}> <img src="./footerLogoImage.png" alt="" /></div>
                </div>
                <div className={s.footer__elem}>
                    <div className={s.footer__name}>Liquid Shop</div> 
                </div>
                <div className={s.footer__elem}>
                    <div className={s.footer__line}></div>
                </div>
                <div className={s.footer__elem}>
                    <div className={s.footer__address}>Спб, ул. Оптиков, 45 к.2</div>
                </div>
                <div className={s.footer__elem}>
                    <div className={s.footer__socialLinks}>
                        <div className={s.footer__instagram}>
                            <img src="./Instagram.png" alt="inst" />
                            <div className={s.text}>iwbr_2025</div>
                        </div>
                        <div className={s.footer__phone}>
                            <img src="./Phone.png" alt="phone" />
                            <div className={s.text}>+7(904)-646-8918</div>
                        </div>
                        <div className={s.footer__telegram}>
                            <img src="./Telegram.png" alt="telegram" />
                            <div className={s.text}>@ichlacheln</div>
                        </div>
                    </div>
                </div>
                <div className={s.footer__elem}>
                    <div className={s.footer__copyright}>©designed by @werbitsky</div>
                </div>
                
            </div> 
            {inBottom && <button onClick={() => scrollUP()} className={s.onTop}>X</button>}
        </div>
    )
}

export default Footer;