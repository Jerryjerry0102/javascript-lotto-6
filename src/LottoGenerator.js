import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoGenerator {
  #numOfNumbers;
  #rangeOfNumbers;

  constructor({ numOfNumbers, rangeOfNumbers }) {
    this.#numOfNumbers = numOfNumbers;
    this.#rangeOfNumbers = rangeOfNumbers;
  }

  generateLottos(numOfLottos) {
    return Array.from({ length: numOfLottos }, () => this.#generateLotto());
  }

  #generateLotto() {
    return new Lotto(this.#generateNumbers());
  }

  #generateNumbers() {
    return Random.pickUniqueNumbersInRange(
      ...Object.values(this.#rangeOfNumbers),
      this.#numOfNumbers,
    );
  }
}

export default LottoGenerator;
