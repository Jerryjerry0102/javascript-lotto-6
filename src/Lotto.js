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

  countMatchingNumbers(other) {
    return this.#numbers.filter((number) => other.includes(number)).length;
  }

  includes(number) {
    return this.#numbers.includes(number);
  }
}

export default Lotto;
