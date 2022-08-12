import styles from './App.module.css';
import ToDo from "./components/ToDo/ToDo";

/* 
  Доброго времени суток!
  Надеюсь, моё приложение не сильно Вас утомит.
  Я постарался сделать его максимально понятным и удобным, заранее прошу прощения, если это не так)
  Дизайн разработан мной в Figma для удобства восприятия.
  P.S. Я не делал localStorage, оставил для наглядности несколько заметок.
*/

function App() {
  
    return (
        <div className={styles.App}>
            <ToDo />
        </div>
    );
}

export default App;
