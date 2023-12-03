class PurchaseAmount {
  #lottoPrice;
  #purchaseAmount;

  constructor(lottoPrice, purchaseAmount) {
    this.#lottoPrice = lottoPrice;
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  getNumOfLottos() {
    return this.#purchaseAmount / this.#lottoPrice;
  }

  calculateProfitRate(profit) {
    return (profit / this.#purchaseAmount) * 100;
  }

  #validate(purchaseAmount) {
    if (purchaseAmount % this.#lottoPrice !== 0) {
      throw new Error('[ERROR] 1000 단위로 금액을 입력하세요.\n');
    }
  }
}

export default PurchaseAmount;
