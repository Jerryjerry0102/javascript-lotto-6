import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printNumOfLottos(numOfLottos) {
    Console.print(`${numOfLottos}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  },
};

export default OutputView;
