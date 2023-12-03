class Lotto {
  #numbers;

  constructor(numbers, validator) {
    this.#validate(numbers, validator);
    this.#numbers = numbers;
  }

  #validate(numbers, validator) {
    validator.validateNumbers(numbers);
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
