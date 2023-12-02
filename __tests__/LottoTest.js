import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  describe('로또 번호 검증', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow('[ERROR]');
    });

    // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow('[ERROR]');
    });
  });

  describe('[1,2,3,4,5,6]와 로또 번호 비교', () => {
    const other = [1, 2, 3, 4, 5, 6];

    test('로또 번호가 [1,2,3,4,5,6]이면 일치하는 숫자의 개수는 6', () => {
      expect(new Lotto([1, 2, 3, 4, 5, 6]).countMatchingNumbers(other)).toBe(6);
    });

    test('로또 번호가 [1,2,3,4,5,7]이면 일치하는 숫자의 개수는 5', () => {
      expect(new Lotto([1, 2, 3, 4, 5, 7]).countMatchingNumbers(other)).toBe(5);
    });

    test('로또 번호가 [1,2,3,4,7,8]이면 일치하는 숫자의 개수는 4', () => {
      expect(new Lotto([1, 2, 3, 4, 7, 8]).countMatchingNumbers(other)).toBe(4);
    });

    test('로또 번호가 [1,2,3,7,8,9]이면 일치하는 숫자의 개수는 3', () => {
      expect(new Lotto([1, 2, 3, 7, 8, 9]).countMatchingNumbers(other)).toBe(3);
    });

    test('로또 번호가 [40,41,42,43,44,45]이면 일치하는 숫자의 개수는 0', () => {
      expect(
        new Lotto([40, 41, 42, 43, 44, 45]).countMatchingNumbers(other),
      ).toBe(0);
    });
  });
});
