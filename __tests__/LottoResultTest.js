import Lotto from '../src/Lotto';
import LottoResult from '../src/LottoResult';
import OutputView from '../src/OutputView';
import PurchaseAmount from '../src/PurchaseAmount';
import WinningAndBonusResult from '../src/WinningAndBonusResult';
import WinningResult from '../src/WinningResult';

describe('로또 결과 확인자 클래스 테스트', () => {
  describe('케이스 1', () => {
    const lottoResult = new LottoResult(
      new WinningResult(6, 1, 2000000000),
      new WinningAndBonusResult(5, 2, 30000000, 3, 1500000),
      new WinningResult(4, 4, 50000),
      new WinningResult(3, 5, 5000),
    );
    const userLottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([1, 2, 3, 4, 7, 8]),
      new Lotto([1, 2, 3, 7, 8, 9]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    lottoResult.check(userLottos, winningNumbers, bonusNumber);

    test('[1등 1개, 2등 1개, 3등 1개, 4등 1개, 5등 1개]', () => {
      const result = `6개 일치 (2,000,000,000원) - 1개
5개 일치, 보너스 볼 일치 (30,000,000원) - 1개
5개 일치 (1,500,000원) - 1개
4개 일치 (50,000원) - 1개
3개 일치 (5,000원) - 1개
`;
      expect(
        OutputView.formatWinningResults(lottoResult.getWinningResults()),
      ).toBe(result);
    });

    test('수익률', () => {
      expect(
        lottoResult.calculateProfitRate(new PurchaseAmount(1000, 5000)),
      ).toBe(40631100);
    });
  });

  describe('케이스 2', () => {
    const lottoResult = new LottoResult(
      new WinningResult(6, 1, 2000000000),
      new WinningAndBonusResult(5, 2, 30000000, 3, 1500000),
      new WinningResult(4, 4, 50000),
      new WinningResult(3, 5, 5000),
    );
    const userLottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
      new Lotto([7, 11, 16, 35, 36, 44]),
      new Lotto([1, 8, 11, 31, 41, 42]),
      new Lotto([13, 14, 16, 38, 42, 45]),
      new Lotto([7, 11, 30, 40, 42, 43]),
      new Lotto([2, 13, 22, 32, 38, 45]),
      new Lotto([1, 3, 5, 14, 22, 45]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    lottoResult.check(userLottos, winningNumbers, bonusNumber);

    test('[1등 0개, 2등 0개, 3등 0개, 4등 0개, 5등 1개]', () => {
      const result = `6개 일치 (2,000,000,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
5개 일치 (1,500,000원) - 0개
4개 일치 (50,000원) - 0개
3개 일치 (5,000원) - 1개
`;
      expect(
        OutputView.formatWinningResults(lottoResult.getWinningResults()),
      ).toBe(result);
    });

    test('수익률', () => {
      expect(
        lottoResult.calculateProfitRate(new PurchaseAmount(1000, 8000)),
      ).toBe(62.5);
    });
  });
});
