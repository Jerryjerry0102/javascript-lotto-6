import Lotto from '../src/domain/lotto/Lotto';
import WinningLotto from '../src/domain/lotto/WinningLotto';
import PurchaseAmount from '../src/domain/PurchaseAmount';
import LottoResult from '../src/domain/result/LottoResult';
import WinningAndBonusResult from '../src/domain/result/WinningAndBonusResult';
import WinningResult from '../src/domain/result/WinningResult';
import OutputView from '../src/ui/OutputView';
import LottoValidator from '../src/validator/LottoValidator';

describe('로또 결과 확인자 클래스 테스트', () => {
  const validator = new LottoValidator(6, {
    startInclusive: 1,
    endInclusive: 45,
  });
  const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7, validator);

  describe('케이스 1', () => {
    const lottoResult = new LottoResult(
      null,
      null,
      null,
      new WinningResult(3, 5, 5000),
      new WinningResult(4, 4, 50000),
      new WinningAndBonusResult(5, 2, 30000000, 3, 1500000),
      new WinningResult(6, 1, 2000000000),
    );

    const userLottos = [
      new Lotto([1, 2, 3, 4, 5, 6], validator),
      new Lotto([1, 2, 3, 4, 5, 7], validator),
      new Lotto([1, 2, 3, 4, 5, 8], validator),
      new Lotto([1, 2, 3, 4, 8, 9], validator),
      new Lotto([1, 2, 3, 8, 9, 10], validator),
    ];

    lottoResult.check(userLottos, winningLotto);

    const result = `3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 1개
5개 일치 (1,500,000원) - 1개
5개 일치, 보너스 볼 일치 (30,000,000원) - 1개
6개 일치 (2,000,000,000원) - 1개`;

    test('[1등 1개, 2등 1개, 3등 1개, 4등 1개, 5등 1개]', () => {
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
      null,
      null,
      null,
      new WinningResult(3, 5, 5000),
      new WinningResult(4, 4, 50000),
      new WinningAndBonusResult(5, 2, 30000000, 3, 1500000),
      new WinningResult(6, 1, 2000000000),
    );

    const userLottos = [
      new Lotto([8, 21, 23, 41, 42, 43], validator),
      new Lotto([3, 5, 11, 16, 32, 38], validator),
      new Lotto([7, 11, 16, 35, 36, 44], validator),
      new Lotto([1, 8, 11, 31, 41, 42], validator),
      new Lotto([13, 14, 16, 38, 42, 45], validator),
      new Lotto([7, 11, 30, 40, 42, 43], validator),
      new Lotto([2, 13, 22, 32, 38, 45], validator),
      new Lotto([1, 3, 5, 14, 22, 45], validator),
    ];

    lottoResult.check(userLottos, winningLotto);

    const result = `3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개`;

    test('[1등 0개, 2등 0개, 3등 0개, 4등 0개, 5등 1개]', () => {
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
