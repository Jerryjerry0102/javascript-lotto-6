import Lotto from '../src/Lotto';
import LottoResultChecker from '../src/LottoResultChecker';

describe('로또 결과 확인자 클래스 테스트', () => {
  test('[1등 1개, 2등 1개, 3등 1개, 4등 1개, 5등 1개], 총 당첨 금액은 2,031,555,000원', () => {
    const userLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 7, 8]),
      new Lotto([1, 2, 3, 7, 8, 9]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    expect(
      LottoResultChecker.check(userLottos, winningNumbers, bonusNumber),
    ).toStrictEqual({ winnings: [1, 1, 1, 1, 1], totalPrizeMoney: 2031555000 });
  });
});
