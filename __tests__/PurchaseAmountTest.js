import PurchaseAmount from '../src/domain/PurchaseAmount';

describe('구입 금액 클래스 테스트', () => {
  test('로또 가격이 1000원일 때 구입 금액이 1000원 단위로 나누어 떨어지면 예외가 발생하지 않는다', () => {
    expect(() => new PurchaseAmount(1000, 1000)).not.toThrow();
    expect(() => new PurchaseAmount(1000, 400000)).not.toThrow();
  });

  test('로또 가격이 1000원일 때 구입 금액이 1000원 단위로 나누어 떨어지지 않으면 예외가 발생한다', () => {
    expect(() => new PurchaseAmount(1000, 1)).toThrow();
    expect(() => new PurchaseAmount(1000, 999)).toThrow();
  });
});
