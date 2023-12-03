import Lotto from '../src/Lotto.js';
import LottoValidator from '../src/LottoValidator.js';
import WinningLotto from '../src/WinningLotto.js';

describe('로또 클래스 테스트', () => {
  const validator = new LottoValidator(6, {
    startInclusive: 1,
    endInclusive: 45,
  });

  describe('로또 번호 검증', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7], validator);
      }).toThrow('[ERROR]');
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5], validator);
      }).toThrow('[ERROR]');
    });

    test('로또 번호 중에 1~45 사이를 벗어난 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 46], validator);
      }).toThrow('[ERROR]');
    });
  });

  describe('당첨 번호[1,2,3,4,5,6]와 보너스 번호 7를 로또 번호와 비교', () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7, validator);

    describe('당첨 번호 비교', () => {
      test('로또 번호가 [1,2,3,4,5,6]이면 일치하는 숫자의 개수는 6', () => {
        expect(
          new Lotto([1, 2, 3, 4, 5, 6], validator).getMatchingNumbersCount(
            winningLotto,
          ),
        ).toBe(6);
      });

      test('로또 번호가 [1,2,3,4,5,7]이면 일치하는 숫자의 개수는 5', () => {
        expect(
          new Lotto([1, 2, 3, 4, 5, 7], validator).getMatchingNumbersCount(
            winningLotto,
          ),
        ).toBe(5);
      });

      test('로또 번호가 [1,2,3,4,7,8]이면 일치하는 숫자의 개수는 4', () => {
        expect(
          new Lotto([1, 2, 3, 4, 7, 8], validator).getMatchingNumbersCount(
            winningLotto,
          ),
        ).toBe(4);
      });

      test('로또 번호가 [1,2,3,7,8,9]이면 일치하는 숫자의 개수는 3', () => {
        expect(
          new Lotto([1, 2, 3, 7, 8, 9], validator).getMatchingNumbersCount(
            winningLotto,
          ),
        ).toBe(3);
      });

      test('로또 번호가 [40,41,42,43,44,45]이면 일치하는 숫자의 개수는 0', () => {
        expect(
          new Lotto(
            [40, 41, 42, 43, 44, 45],
            validator,
          ).getMatchingNumbersCount(winningLotto),
        ).toBe(0);
      });
    });

    describe('보너스 번호 비교', () => {
      test('로또 번호가 [7,8,9,10,11,12]이면 true', () => {
        expect(
          winningLotto.isBonusNumberIncludedIn(
            new Lotto([7, 8, 9, 10, 11, 12], validator),
          ),
        ).toBeTruthy();
      });

      test('로또 번호가 [8,9,10,11,12,13]이면 false', () => {
        expect(
          winningLotto.isBonusNumberIncludedIn(
            new Lotto([7, 8, 9, 10, 11, 12], validator),
          ),
        ).toBeTruthy();
      });
    });
  });
});
