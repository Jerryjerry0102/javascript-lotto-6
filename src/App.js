import LottoGame from './LottoGame.js';

class App {
  async play() {
    await new LottoGame().play();
  }
}

export default App;
