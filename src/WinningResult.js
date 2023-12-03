import { WINNIG_TEMPLATE } from './Template.js';

class WinningResult {
  #winningCount = 0;
  #matchingNumbersCount;
  #rank;
  #prizeMoney;

  constructor(matchingNumbersCount, rank, prizeMoney) {
    this.#matchingNumbersCount = matchingNumbersCount;
    this.#rank = rank;
    this.#prizeMoney = prizeMoney;
  }

  calculateTotalPrizeMoney() {
    return this.#winningCount * this.#prizeMoney;
  }

  increaseWinningCount() {
    this.#winningCount += 1;
  }

  getMatchingNumbersCount() {
    return this.#matchingNumbersCount;
  }

  getPrizeMoney() {
    return this.#prizeMoney;
  }

  getWinningCount() {
    return this.#winningCount;
  }

  toString() {
    return WINNIG_TEMPLATE(
      this.#matchingNumbersCount,
      this.#prizeMoney,
      this.#winningCount,
    );
  }
}

export default WinningResult;
