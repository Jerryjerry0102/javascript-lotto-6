import { WINNING_AND_BONUS_TEMPLATE } from './Template.js';
import WinningResult from './WinningResult.js';

class WinningAndBonusResult extends WinningResult {
  #winningAndBonusCount = 0;
  #bonusRank;
  #bonusPrizeMoney;

  constructor(
    matchingNumbersCount,
    bonusRank,
    bonusPrizeMoney,
    rank,
    prizeMoney,
  ) {
    super(matchingNumbersCount, rank, prizeMoney);
    this.#bonusRank = bonusRank;
    this.#bonusPrizeMoney = bonusPrizeMoney;
  }

  increaseWinningCount(isBonusNumberMatched) {
    if (isBonusNumberMatched) this.#winningAndBonusCount += 1;
    else super.increaseWinningCount();
  }

  calculateTotalPrizeMoney() {
    return (
      super.calculateTotalPrizeMoney() +
      this.#winningAndBonusCount * this.#bonusPrizeMoney
    );
  }

  toString() {
    return WINNING_AND_BONUS_TEMPLATE(
      super.getMatchingNumbersCount(),
      this.#bonusPrizeMoney,
      this.#winningAndBonusCount,
      super.getPrizeMoney(),
      super.getWinningCount(),
    );
  }
}

export default WinningAndBonusResult;
