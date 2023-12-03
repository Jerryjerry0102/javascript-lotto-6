import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printNumOfLottos(numOfLottos) {
    Console.print(`\n${numOfLottos}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  },

  printWinningResults(winningResults) {
    Console.print('\n당첨 통계\n---');
    Console.print(this.formatWinningResults(winningResults));
  },

  formatWinningResults(winningResults) {
    return winningResults.reduce(
      (message, winningResult) => `${message + winningResult.toString()}\n`,
      '',
    );
  },

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${this.formatProfitRate(profitRate)}%입니다.`);
  },

  formatProfitRate(profitRate) {
    return profitRate.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
};

export default OutputView;
