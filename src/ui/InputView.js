import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readPurchaseAmount() {
    const input = Number(
      await Console.readLineAsync('구입금액을 입력해 주세요.\n'),
    );
    this.validateNumber(input);
    return input;
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const numbers = input.split(',').map(Number);
    numbers.forEach((number) => this.validateNumber(number));
    return numbers;
  },

  async readBonusNumber() {
    const input = Number(
      await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n'),
    );
    this.validateNumber(input);
    return input;
  },

  validateNumber(input) {
    if (!input) throw new Error('올바른 숫자를 입력하세요.\n');
  },
};

export default InputView;
