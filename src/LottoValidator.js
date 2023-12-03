class LottoValidator {
  #numOfNumbers;
  #rangeOfNumber;

  constructor(numOfNumbers, rangeOfNumber) {
    this.#numOfNumbers = numOfNumbers;
    this.#rangeOfNumber = rangeOfNumber;
  }

  validateNumbers(numbers) {
    if (numbers.length !== this.#numOfNumbers) {
      throw new Error(
        `[ERROR] 로또 번호는 ${this.#numOfNumbers}개여야 합니다.`,
      );
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않는 숫자여야 합니다.');
    }
    numbers.forEach((number) => this.validateNumber(number));
  }

  validateNumber(number) {
    const { startInclusive, endInclusive } = this.#rangeOfNumber;
    if (!(startInclusive <= number && number <= endInclusive)) {
      throw new Error(
        `[ERROR] 로또 번호는 ${startInclusive}부터 ${endInclusive} 사이의 숫자여야 합니다.`,
      );
    }
  }
}

export default LottoValidator;
