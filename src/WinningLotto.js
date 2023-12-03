import Lotto from './Lotto.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers, bonusNumber, validator) {
    super(numbers, validator);
    this.#validateBonusNumber(bonusNumber, validator);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber, validator) {
    validator.validateNumber(bonusNumber);
  }

  isBonusNumberIncludedIn(lotto) {
    return lotto.includes(this.#bonusNumber);
  }
}

export default WinningLotto;
