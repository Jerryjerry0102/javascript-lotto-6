import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readPurchaseAmount() {
    const input = Number(
      await Console.readLineAsync('구입금액을 입력해 주세요.\n'),
    );
    this.validateNumber(input);
    return input;
  },

  validateNumber(input) {
    if (!input) throw new Error('[ERROR] 올바른 숫자를 입력하세요.\n');
  },
};

export default InputView;
