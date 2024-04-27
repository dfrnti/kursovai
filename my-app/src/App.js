//import './components/Header/header-styles.css';
//import './App.css';
import Header from './components/Header/header.js';
import MainList from './components/Header/main/main.js';
import { dataForList } from './content/maindata.js';
import Button from './components/button/button.js';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <dl>
            {dataForList.map((item) => <MainList {...item} />)}
          </dl>
        </section>
        <section>
          <h3>All buttons</h3>
          <Button />
        </section>
      </main>
    </div>
  );
}

export default App;
