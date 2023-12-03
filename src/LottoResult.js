class LottoResult {
  #winningResults;

  constructor(...winningResults) {
    this.#winningResults = winningResults;
  }

  check(userLottos, winningLotto) {
    userLottos.forEach((userLotto) => {
      const index = userLotto.getMatchingNumbersCount(winningLotto);
      const isBonusNumberMatched =
        winningLotto.isBonusNumberIncludedIn(userLotto);
      this.#winningResults[index]?.increaseWinningCount(isBonusNumberMatched);
    });

    this.#removeNull();
  }

  #removeNull() {
    this.#winningResults = this.#winningResults.filter(
      (winningResult) => winningResult,
    );
  }

  getWinningResults() {
    return this.#winningResults;
  }

  calculateProfitRate(purchaseAmount) {
    return purchaseAmount.calculateProfitRate(this.#calculateTotalPrizeMoney());
  }

  #calculateTotalPrizeMoney() {
    return this.#winningResults.reduce(
      (totalPrizeMoney, winningResult) =>
        totalPrizeMoney + winningResult.calculateTotalPrizeMoney(),
      0,
    );
  }
}

export default LottoResult;
