import LottoGenerator from './LottoGenerator.js';

class LottoGame {
  #lottos;

  play() {
    const numOfLottos = 5; // 가정
    const userLottos = new LottoGenerator({
      numOfNumbers: 6,
      rangeOfNumbers: {
        startInclusive: 1,
        endInclusive: 45,
      },
    }).generateLottos(numOfLottos);
    console.log(userLottos);
  }
}

export default LottoGame;
