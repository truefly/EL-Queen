module.exports = {
  title: "玩味雅诗兰黛掠心假日",
  desc: "掀起掠心攻势，解锁惊喜小样",
  language: "中文",
  start: {
    head: "掀起掠心攻势，解锁惊喜小样",
    tap: "点击屏幕开启游戏"
  },
  rule: {
    title: "游戏规则",
    content: `
      <div class='p'><div class='line'>
      1. 选择心仪的红心皇后
      </div></div>
      <div class='p'><div class='line'>
      2. 游戏开始后，点击捕捉您选择的皇后卡牌
      </div></div>
      <div class='p'><div class='line'>
      3. 成功集齐4位皇后卡牌后，挑战成功！
      </div></div>
      <div class='p'><div class='line'>
      4. 根据屏幕提示，前往雅诗兰黛免税专柜领取假日专属礼赠
      </div></div>
      <div class='p'><div class='line small' >
      *数量有限，赠完即止
      </div>
      <div class='line small' >
      *雅诗兰黛旅游零售保留对本次活动的最终解释权
      </div></div>
    `,
    start: "开始游戏",
    terms: "礼赠细则"
  },
  terms: {
    title: "礼赠细则",
    content: `
      <div class='p'>
        <div class='line'>
          雅诗兰黛免税礼遇内含：
        </div>
        <div class='line'>
        （产品名称&规格）
        </div>
      </div>
    
      <div class='p'><div class='line'>
        兑换页面将作为礼物兑换的唯一凭证；
      </div></div>
    
      <div class='p'><div class='line'>
        每人限领一份，礼物以专柜实际领取的实物为准，数量有限，先到先得。若在活动截止日期前全部发放完毕，则无法再领取。
      </div></div>
    
      <div class='p'><div class='line small'>
        *雅诗兰黛旅游零售保留对本次活动的最终解释权    
      </div></div>
    `
  },
  game: {
    chooseQueen: "选择心仪的红心皇后",
    chooseSuccess: "选择成功！",
    tap: "点击捕捉你所挑选的红心皇后，<br/>四次正确即挑战成功！",
    congratulations: "恭喜挑战成功！",
    scan: "请使用手机扫描下方二维码，领取假日专属礼赠！"
  },
  success: {
    Congratulations: "恭喜挑战成功！",
    content: `
    <div class='p'>
      <div class='line'>
      请向雅诗兰黛免税柜台美妆顾问展示此页面，并确保由其点击确认按钮
      </div>
    </div>
    <div class='p'>
      <div class='line'>
      若您本人点击确认按钮，您将无法获得此份免税礼赠
      </div>
    </div>
  `,
    confirm: "确认兑换",
    terms: "礼赠细则",
    success: "兑换成功，感谢参与！",
    fail: "抱歉，该兑换码无效！",
    used: "抱歉，该兑换码已被兑换！"
  },
  successSec: {
    title: "恭喜挑战成功！",
    content: `
    <div class='p'>
      <div class='line'>
        恭喜挑战成功！
      </div>
    </div>

    <div class='p'>
      <div class='line'>
        你已获得*雅诗兰黛免税礼赠一份
      </div>
    </div>

    <div class='p'>
      <div class='line'>
        请向美容顾问咨询奖品详情，了解更多假日掠心装扮！
      </div>
    </div>

    <div class='p'>
      <div class='line small'>
        *每人限领一份，赠完即止
      </div>
    </div>
    `
  }
};
