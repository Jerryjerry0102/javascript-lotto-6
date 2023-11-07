const QUERY = {
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
};
Object.freeze(QUERY);

const ERROR = {
  falsy: '[ERROR] 정확한 숫자를 입력하셔야 합니다.',
  notBeDividedByThousand: '[ERROR] 1000으로 나누어 떨어져야 합니다.',
  notSix: '[ERROR] 로또 번호는 6개여야 합니다.',
  notUnique: '[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.',
  notOneToFortyFive: '[Error] 로또 번호는 1에서 45 사이의 숫자여야 합니다.',
  notUniqueBonusNumber: '[ERROR] 로또 번호에 보너스 번호 숫자가 없어야 합니다.',
};
Object.freeze(ERROR);

const TEMPLATE = {
  numberOfLottos: (numberOfLottos) => `\n${numberOfLottos}개를 구매했습니다.`,
  sortedLotto: (sortedLotto) => `[${sortedLotto}]\n`,
};
Object.freeze(TEMPLATE);

const RANKING_BY = {
  6: 1,
  5: 2,
  51: 3,
  4: 4,
  3: 5,
};
Object.freeze(RANKING_BY);

const PRIZE_MONEY = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};
Object.freeze(PRIZE_MONEY);

export { QUERY, ERROR, TEMPLATE, RANKING_BY, PRIZE_MONEY };
