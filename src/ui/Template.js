export const WINNIG_TEMPLATE = (
  matchingNumbersCount,
  prizeMoney,
  winningCount,
) =>
  `${matchingNumbersCount}개 일치 (${prizeMoney.toLocaleString()}원) - ${winningCount}개`;

export const WINNING_AND_BONUS_TEMPLATE = (
  matchingNumbersCount,
  bonusPrizeMoney,
  winningAndBonusCount,
  prizeMoney,
  winningCount,
) => `${WINNIG_TEMPLATE(matchingNumbersCount, prizeMoney, winningCount)}
${matchingNumbersCount}개 일치, 보너스 볼 일치 (${bonusPrizeMoney.toLocaleString()}원) - ${winningAndBonusCount}개`;
