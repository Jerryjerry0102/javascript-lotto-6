class LottoResultChecker {
  static check(userLottos, winningNumbers, bonusNumber) {
    const winnings = [0, 0, 0, 0, 0]; // 1등부터 5등까지의 당첨 횟수
    let totalPrizeMoney = 0;

    userLottos.forEach((userLotto) => {
      const matchingNumbersCount =
        userLotto.countMatchingNumbers(winningNumbers);
      const isBonusNumberMatched = userLotto.includes(bonusNumber);

      switch (matchingNumbersCount) {
        // 1등
        case 6:
          winnings[1 - 1] += 1;
          totalPrizeMoney += 2000000000;
          break;

        // 2등, 3등
        case 5:
          if (isBonusNumberMatched) {
            winnings[2 - 1] += 1;
            totalPrizeMoney += 30000000;
          } else {
            winnings[3 - 1] += 1;
            totalPrizeMoney += 1500000;
          }
          break;

        // 4등
        case 4:
          winnings[4 - 1] += 1;
          totalPrizeMoney += 50000;
          break;

        // 5등
        case 3:
          winnings[5 - 1] += 1;
          totalPrizeMoney += 5000;
          break;

        default:
          break;
      }
    });

    return {
      winnings,
      totalPrizeMoney,
    };
  }
}

export default LottoResultChecker;
