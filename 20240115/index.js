var findWinners = function (matches) {
    //建立一個物件儲存每位玩家的失敗次數
    let lossCount = {};
    //建立一個集合來追蹤至少參與一場比賽的玩家
    let playedPlayers = new Set();

    //更新每一位玩家失敗的次數
    for (let match of matches) {
        const [winner, loser] = match;
        //如果失敗次數已存在,則加一, 否則設為1
        lossCount[loser] = (lossCount[loser] || 0) + 1;
        //紀錄參與比賽的玩家
        playedPlayers.add(winner);
        playedPlayers.add(loser);
    }

    //找出失敗為0的玩家
    let zeroLosses = [...playedPlayers].filter(player => !(player in lossCount));

    //找出失敗次數為1的玩家
    let oneLoss = Object.keys(lossCount).filter(player => lossCount[player] === 1);
    //將兩列表按 升冪排序
    zeroLosses.sort((a, b) => a - b);
    oneLoss.sort((a, b) => a - b);

    //回傳結果
    return [zeroLosses, oneLoss];
};