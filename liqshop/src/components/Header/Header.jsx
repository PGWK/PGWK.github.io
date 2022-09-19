import React from 'react'
import s from './Header.module.css'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import { useEffect } from 'react';
import { Component } from 'react';

const Header = ( {manufacturer, setLiquid, wasClicked, setClicked, setInBottom} ) => {

  

  const jamMonster = [
    { id: 0, brand: 'Jam Monster', name: 'BLACKBERRY', base: 'щёлочь', strong: '3mg никотина', full: '100ml объём', taste: 'ежевика', oldPrice: '1100', currentPrice: '990 рублей', image: './liquidImage.png' },
    { id: 1, brand: 'Jam Monster', name: 'BLUEBERRY', base: 'щёлочь', strong: '3mg никотина', full: '100ml объём', taste: 'черника', oldPrice: '1100', currentPrice: '990 рублей', image: './liquidImage.png' },
    { id: 2, brand: 'Jam Monster', name: 'RASPBERRY', base: 'щёлочь', strong: '3mg никотина', full: '100ml объём', taste: 'малина', oldPrice: '1100', currentPrice: '990 рублей', image: './liquidImage.png' },
  ]

  const badDrip = [
      { id: 0, brand: 'Bad Drip', name: 'GOD NECTAR', base: 'соль', strong: '20mg никотина', full: '100ml объём', taste: 'тропические фрукты', oldPrice: '', currentPrice: '990 рублей', image: './liquidImage.png' },
      { id: 1, brand: 'Bad Drip', name: "FARLEY'S GNARLY SAUCE ", base: 'соль', strong: '20mg никотина', full: '100ml объём', taste: 'клубничная жвачка', oldPrice: '990', currentPrice: '890 рублей', image: './liquidImage.png' },
      { id: 2, brand: 'Bad Drip', name: "DON'T CARE BEAR", base: 'соль', strong: '20mg никотина', full: '100ml объём', taste: 'дыня и груша', oldPrice: '1100', currentPrice: '990 рублей', image: './liquidImage.png' },
      { id: 3, brand: 'Bad Drip', name: 'GEEKED OUT', base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'арбуз и лимон', oldPrice: '990', currentPrice: '790 рублей', image: './liquidImage.png' },
      { id: 4, brand: 'Bad Drip', name: "DIRECTOR'S CUT", base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'вафли с карамелью и орехами', oldPrice: '990', currentPrice: '890 рублей', image: './liquidImage.png' },
    ]

  const humble = [
    { id: 0, brand: 'Humble', name: 'SWEATER PUPPETS', base: 'соль', strong: '20mg никотина', full: '120ml объём', taste: 'манго и дыня', oldPrice: '1100', currentPrice: '900 рублей', image: './liquidImage.png' },
    { id: 1, brand: 'Humble', name: 'DONKEY KAHN', base: 'соль', strong: '20mg никотина', full: '120ml объём', taste: 'банан и клубника', oldPrice: '', currentPrice: '990 рублей', image: './liquidImage.png' },
    { id: 2, brand: 'Humble', name: 'HUMBLE CRUBLE', base: 'соль', strong: '20mg никотина', full: '60ml объём', taste: 'выпечка с корицей и черникой', oldPrice: '800', currentPrice: '690 рублей', image: './liquidImage.png' },
    { id: 3, brand: 'Humble', name: 'PEE WEE KIWI', base: 'соль', strong: '20mg никотина', full: '60ml объём', taste: 'киви с арбузом и яблоком', oldPrice: '890', currentPrice: '690 рублей', image: './liquidImage.png' },
  ]

  const nastyJuice = [
    { id: 0, brand: 'Nasty Juice', name: 'CUSH MAN', base: 'щёлочь', strong: '3mg никотина', full: '60ml объём', taste: 'клубника', oldPrice: '1500', currentPrice: '1390 рублей', image: './liquidImage.png' },
    { id: 1, brand: 'Nasty Juice', name: 'DEVIL TEETH', base: 'щёлочь', strong: '6mg никотина', full: '60ml объём', taste: 'фруктовая жвачка', oldPrice: '', currentPrice: '990 рублей', image: './liquidImage.png' },
    { id: 2, brand: 'Nasty Juice', name: 'BAD BLOOD', base: 'щёлочь', strong: '3mg никотина', full: '60ml объём', taste: 'холодная смородина', oldPrice: '', currentPrice: '990 рублей', image: './liquidImage.png' },
    { id: 3, brand: 'Nasty Juice', name: 'TRAP QUEEN', base: 'щёлочь', strong: '3mg никотина', full: '60ml объём', taste: 'мятная клубника', oldPrice: '', currentPrice: '990 рублей', image: './liquidImage.png' },
    { id: 4, brand: 'Nasty Juice', name: 'X KILO GAMBINO', base: 'щёлочь', strong: '3mg никотина', full: '60ml объём', taste: 'клубника с бананом и апельсином', oldPrice: '1090', currentPrice: '920 рублей', image: './liquidImage.png' },
    { id: 4, brand: 'Nasty Juice', name: 'WICKED HAZE', base: 'щёлочь', strong: '0/3/6mg никотина', full: '50/60ml объём', taste: 'смородиновый лимонад', oldPrice: '', currentPrice: '990 рублей', image: './liquidImage.png' },
    { id: 4, brand: 'Nasty Juice', name: 'ASAP GRAPE', base: 'щёлочь', strong: '0/3/6mg никотина', full: '60ml объём', taste: 'виноград', oldPrice: '', currentPrice: '990 рублей', image: './liquidImage.png' },
    { id: 4, brand: 'Nasty Juice', name: 'SLOW BLOW', base: 'щёлочь', strong: '6mg никотина', full: '50/60ml объём', taste: 'ананасовый сок', oldPrice: '1010', currentPrice: '990 рублей', image: './liquidImage.png' },
    { id: 4, brand: 'Nasty Juice', name: 'BREEN APE', base: 'щёлочь', strong: '0/3/6/12mg никотина', full: '60ml объём', taste: 'яблоко', oldPrice: '1100', currentPrice: '990 рублей', image: './liquidImage.png' },
    { id: 4, brand: 'Nasty Juice', name: 'VANILLA TOBACCO', base: 'щёлочь', strong: '0/3/6/12mg никотина', full: '60ml объём', taste: 'вальный тобак', oldPrice: '', currentPrice: '1090 рублей', image: './liquidImage.png' },
  ]

  const uRBN = [
    { id: 0, brand: 'URBN', name: 'MADE IN USSR', base: 'щёлочь', strong: '3/6mg никотина', full: '95ml объём', taste: 'смородина', oldPrice: '590', currentPrice: '490 рублей', image: './liquidImage.png' },
    { id: 1, brand: 'URBN', name: 'NICE', base: 'щёлочь', strong: '3/6mg никотина', full: '95ml объём', taste: 'хлопья в молоке', oldPrice: '690', currentPrice: '490 рублей', image: './liquidImage.png' },
    { id: 2, brand: 'URBN', name: 'GUMMY', base: 'щёлочь', strong: '3/6mg никотина', full: '95ml объём', taste: 'ежевика с малиной', oldPrice: '490', currentPrice: '390 рублей', image: './liquidImage.png' },
  ]

  const smokeKitchen = [
    { id: 0, brand: 'Smoke Kitchen', name: 'SELECT', base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'премиальный табак', oldPrice: '590', currentPrice: '490 рублей', image: './liquidImage.png' },
    { id: 1, brand: 'Smoke Kitchen', name: 'TRIX', base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'блинчики', oldPrice: '690', currentPrice: '590 рублей', image: './liquidImage.png' },
    { id: 2, brand: 'Smoke Kitchen', name: 'CEREMONY', base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'зелёный чай', oldPrice: '490', currentPrice: '390 рублей', image: './liquidImage.png' },
    { id: 3, brand: 'Smoke Kitchen', name: 'DROPS', base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'лимонад', oldPrice: '690', currentPrice: '490 рублей', image: './liquidImage.png' },
  ]

  const maxwell = [
    { id: 0, brand: 'Maxwell', name: 'MAXWELL PINK', base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'сладкая мята', oldPrice: '590', currentPrice: '490 рублей', image: './liquidImage.png' },
    { id: 1, brand: 'Maxwell', name: 'MAXWELL BLUE', base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'черника', oldPrice: '690', currentPrice: '590 рублей', image: './liquidImage.png' },
    { id: 2, brand: 'Maxwell', name: 'MAXWELL MANGO', base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'манго', oldPrice: '490', currentPrice: '390 рублей', image: './liquidImage.png' },
    { id: 3, brand: 'Maxwell', name: 'MAXWELL BERRY', base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'ягоды', oldPrice: '690', currentPrice: '490 рублей', image: './liquidImage.png' },
    { id: 4, brand: 'Maxwell', name: 'MAXWELL QIWI', base: 'соль', strong: '20mg никотина', full: '30ml объём', taste: 'киви', oldPrice: '690', currentPrice: '590 рублей', image: './liquidImage.png' },
  ]

  // Переключатель видимости каталога в Хедере
  const [isOpen, setOpen] = useState(false)

  const openCatalogHandle = () => {
    console.log(isOpen)
    setOpen(!isOpen)
  }
  // 

  const changeBrandHandle = (name) => {
    setClicked(!wasClicked)
    console.log(wasClicked)

    switch (name) {
      case 'Jam Monster':
        setLiquid(jamMonster)
        break
      case 'Bad Drip':
        setLiquid(badDrip)
        break
      case 'Humble':
        setLiquid(humble)
        break
      case 'Nasty Juice':
        setLiquid(nastyJuice)
        break
      case 'URBN':
        setLiquid(uRBN)
        break
      case 'Smoke Kitchen':
        setLiquid(smokeKitchen)
        break
      case 'Maxwell':
        setLiquid(maxwell)
        break
    }
    setOpen(!isOpen)
  }

  const scrollDown = () => {
    setInBottom(true)
    window.scrollBy({top: 2000, behavior: 'smooth'})
  }

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.line}></div>
        <button onClick={openCatalogHandle} className={s.catalogButton + ' ' + s.button +' ' +  s.text}>Catalog</button>
        <div className={s.logo}><img src="./Fulllogo.png" alt="" /></div>
        <button onClick={() => scrollDown()} className={s.contactsButton + ' ' + s.button +' ' + s.text}>Contacts</button>
        <div className={s.line}></div>
      </div>
      <div className={s.catalog + ' ' + `${ isOpen ? s.catalogOpen : s.catalogClose}`}>
        <div className={s.catalog__container}>
          <div className={s.catalog__name}>Catalog</div>
          <div className={s.catalog__table}>
            {manufacturer.map(elem => (<button onClick={() => changeBrandHandle(elem.name)} key={elem.id}>{elem.name}</button>))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Header;