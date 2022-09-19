import React from 'react';
import s from './App.module.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'
import { useState } from 'react';
function App() {
  const [wasClicked, setClicked] = useState(false)
  const [inBottom, setInBottom] = useState(false)
  const [manufacturer, setManufacturer] = useState([
    {id: 0, name: 'Bad Drip',},
    {id: 1, name: 'Jam Monster', },
    {id: 2, name: 'Humble', },
    {id: 3, name: 'Nasty Juice'},
    {id: 4, name: 'URBN'},
    {id: 5, name: 'Smoke Kitchen'},
    {id: 6, name: 'Maxwell'},

  ])
  

  const [liquid, setLiquid] = useState([
    { id: 0, brand: 'Maxwell', name: 'MAXWELL PINK', base: 'соль', strong: '20mg никотина', full: '30mg объём', taste: 'сладкая мята', oldPrice: '590', currentPrice: '490 рублей', image: './liquidImage.png' },
    { id: 1, brand: 'Maxwell', name: 'MAXWELL BLUE', base: 'соль', strong: '20mg никотина', full: '30mg объём', taste: 'черника', oldPrice: '690', currentPrice: '590 рублей', image: './liquidImage.png' },
    { id: 2, brand: 'Maxwell', name: 'MAXWELL MANGO', base: 'соль', strong: '20mg никотина', full: '30mg объём', taste: 'манго', oldPrice: '490', currentPrice: '390 рублей', image: './liquidImage.png' },
    { id: 3, brand: 'Maxwell', name: 'MAXWELL BERRY', base: 'соль', strong: '20mg никотина', full: '30mg объём', taste: 'ягоды', oldPrice: '690', currentPrice: '490 рублей', image: './liquidImage.png' },
    { id: 4, brand: 'Maxwell', name: 'MAXWELL QIWI', base: 'соль', strong: '20mg никотина', full: '30mg объём', taste: 'киви', oldPrice: '690', currentPrice: '590 рублей', image: './liquidImage.png' },
  ])

  return (
    <div className={s.container}>
      <div className={s.App}>
        <Header
          liquid={liquid} setLiquid={setLiquid}
          manufacturer={manufacturer} setManufacturer={setManufacturer}
          wasClicked={wasClicked} setClicked={setClicked}
          setInBottom={setInBottom}/>
        <Main
          liquid={liquid} setLiquid={setLiquid}
          manufacturer={manufacturer} setManufacturer={setManufacturer}
          wasClicked={wasClicked} setClicked={setClicked}/>
        <Footer 
          inBottom={inBottom}
          setInBottom={setInBottom}/>
      </div>
    </div>
  );
}

export default App;
