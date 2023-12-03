class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  getMatchingNumbersCount(other) {
    return this.#numbers.filter((number) => other.includes(number)).length;
  }

  includes(number) {
    return this.#numbers.includes(number);
  }

  toString() {
    return `[${this.#numbers.sort((a, b) => a - b).join(', ')}]`;
  }
}

export default Lotto;
