import store from "./redux/store";
import { Result, Calculate } from './components'

function App() {
  return (
    <>
      <header>
        S P L I<br />T T E R
      </header>
      <main>
        <div className="container">
          <Calculate />
          <Result />
        </div>
      </main>
    </>
  );
}

export default App;
