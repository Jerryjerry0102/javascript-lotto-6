import { ERROR } from './Message.js';

class LottoPurchaser {
  #ZERO = 0;
  #THOUSAND = 1000;

  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#validate(Number(purchaseAmount));
    this.#purchaseAmount = Number(purchaseAmount);
  }

  #validate(value) {
    if (value === this.#ZERO) throw new Error(ERROR.falsy);
    if (Number.isNaN(value)) throw new Error(ERROR.falsy);
    if (value % this.#THOUSAND !== this.#ZERO) {
      throw new Error(ERROR.notBeDividedByThousand);
    }
  }
}

export default LottoPurchaser;
