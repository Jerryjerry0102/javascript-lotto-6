class LottoResult {
  #winningResults;

  constructor(...winningResults) {
    this.#winningResults = winningResults;
  }

  check(userLottos, winningNumbers, bonusNumber) {
    userLottos.forEach((userLotto) => {
      const index = this.#findWinningResultsIndex(winningNumbers, userLotto);
      const isBonusNumberMatched = userLotto.includes(bonusNumber);
      this.#winningResults[index]?.increaseWinningCount(isBonusNumberMatched);
    });
  }

  #findWinningResultsIndex(winningNumbers, userLotto) {
    return (
      winningNumbers.length - userLotto.getMatchingNumbersCount(winningNumbers)
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
