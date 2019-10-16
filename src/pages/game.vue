<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.game {
  padding-top: 6vw;
}

.queens-warpper {
  position: relative;
  width: 60vw;
  height: 94vw;
  margin: 0 auto;
  margin-top: 3vw;
  & > .queen {
    width: calc(38vw * 0.55 * 0.3);
    // height: calc(61vw * 0.534 * 0.3);
    left: calc(38vw * 0.05 + 24.7vw);
    top: calc(61vw * 0.05 + 54.1vw);
    position: absolute;
    z-index: 2;
  }

  .queen-warpper {
    width: 28vw;
    height: 45vw;
    background-image: url("../assets/queen-box.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
      position: absolute;
      content: "";
      transition: all 0.4s ease;
      opacity: 0;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.8);
      z-index: 3;
    }
    &.mask {
      &:after {
        opacity: 1;
      }
    }

    &.left-top {
      top: 0;
      left: 0;
    }
    &.left-bottom {
      left: 0;
      bottom: 0;
    }
    &.right-top {
      right: 0;
      top: 0;
    }
    &.right-bottom {
      right: 0;
      bottom: 0;
    }

    .queen {
      width: 90%;
      height: 90%;
      position: relative;
      z-index: 2;
    }

    .heart {
      width: 12%;
      position: absolute;
      &.front {
        top: 1.4vw;
        left: 2vw;
      }
      &.back {
        bottom: 1.4vw;
        right: 2vw;
        transform: rotate(180deg);
      }
    }

    &.open {
      left: 11vw;
      top: 4vw;
      width: 38vw;
      height: 61vw;
    }
  }
}

.buildings {
  position: fixed;
  transition: all 0.4s ease;
  z-index: 2;
  bottom: 29vw;
  // bottom: 30.7vw;
  left: 5vw;
  width: 90vw;

  .building {
    position: absolute;
    // bottom: -8vw;
    bottom: 0;
    left: 0;
    right: 0;
    width: 70vw;
    height: 80vw;
    background-image: url("../assets/building.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 0 auto;
    z-index: 1;
  }
  .queen {
    transform: scale(1);
  }
}

.choose-item {
  // background: lightblue;
  position: absolute;
  z-index: 4;
  overflow: hidden;
}

.bottom {
  height: 29vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: linear-gradient(
    -45deg,
    #dbcba6 0%,
    #a08041 30%,
    #a08041 60%,
    #dbcba6 100%
  );

  .text-png {
    width: 36vw;
    margin: 0 auto;
    display: block;
    margin-top: 3vw;
  }

  .queen-card-warpper {
    display: flex;
    padding: 0 15vw;
    padding-top: 1vw;
    .one-queen {
      flex: 1;
      width: 12vw;
      height: 18vw;
      .empty-queen {
        background-image: url("../assets/empty-card.png");
        width: 12vw;
        height: 18vw;
        background-size: 100% 100%;
        margin: 0 auto;
      }

      .current-queen {
        width: 12vw;
        height: 18vw;
        position: fixed;
        bottom: 48vh;
        left: 42vw;
        z-index: 9;
        transform: scale(3);

        .queen-warpper {
          width: 12vw;
          height: 18vw;
          background-image: url("../assets/queen-box.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          &.left-top {
            top: 0;
            left: 0;
          }
          &.left-bottom {
            left: 0;
            bottom: 0;
          }
          &.right-top {
            right: 0;
            top: 0;
          }
          &.right-bottom {
            right: 0;
            bottom: 0;
          }

          .queen {
            width: 90%;
            height: 90%;
            position: relative;
            z-index: 2;
          }

          .heart {
            width: 12%;
            position: absolute;
            &.front {
              top: 0.6vw;
              left: 1vw;
            }
            &.back {
              bottom: 0.6vw;
              right: 1vw;
              transform: rotate(180deg);
            }
          }

          &.open {
            left: 11vw;
            top: 4vw;
            width: 38vw;
            height: 61vw;
          }
        }
      }
    }
  }
}

.code {
  margin-top: 10vw;
  text-align: center;

  .scan {
    font-size: 3.4vw;
    line-height: 5vw;
    padding: 0 11vw;
  }
}
</style>

<template>
  <div class="game">
    <strip height="80px"></strip>

    <div class="head-box">
      <span>{{$t(title)}}</span>
    </div>

    <transition name="fade">
      <div class="queens-warpper"
           v-show="!firstEnd">
        <div v-for="(item,index) in locationList"
             :id="item"
             @click="chooseQueen(item,index)"
             :class="`${item} ${queenIndex!==index&&queenIndex!==-1?'mask':''}`"
             :style="queenIndex===index?'z-index:6':''"
             v-show="!hideOther||queenIndex===index"
             class="queen-warpper">
          <transition name="fade">
            <div v-show="queenIndex===index">
              <img class="front heart"
                   src="../assets/heart.png">
              <img class="back heart"
                   src="../assets/heart.png">
            </div>
          </transition>
          <img :src="require('../assets/'+item+'.png')"
               class="queen">
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="buildings"
           @click="begin"
           :style="scale?'transform: scale(1);top: -6vw;':'transform: scale(5);top: -6vw'"
           v-if="firstEnd&&!showCode">
        <div class="building">
          <div class="choose-item"
               :id="`choose-item-${index}`"
               v-show="beginGame"
               v-for="(item,index) in targetList"
               :style="{left:item.left,top:item.top,width:item.width,height:item.height}">
            <card :index="index"
                  @error="error"
                  @current="current"
                  :endGame="endGame"
                  :queenIndex="queenIndex"></card>
          </div>
        </div>

      </div>
    </transition>

    <transition name="fade">
      <div class="code"
           @click="dumpNext"
           v-show="showCode">

        <div class="scan">{{$t('game.scan')}}</div>
        <vue-qr text="http://192.168.0.127:8080/#/success"
                :size="200"></vue-qr>
      </div>
    </transition>

    <transition name="fade">
      <div class="bottom"
           v-show="beginGame">
        <div class="queen-card-warpper">
          <div v-for="(item,index) in selectedQueen"
               class="one-queen">
            <div class="current-queen"
                 :id="`select-queen-${index}`"
                 v-if="item">
              <div :class="locationList[queenIndex]"
                   class="queen-warpper">
                <img class="front heart"
                     src="../assets/heart.png">
                <img class="back heart"
                     src="../assets/heart.png">
                <img :src="require('../assets/'+locationList[queenIndex]+'.png')"
                     class="queen">
              </div>
            </div>
            <div class="empty-queen"
                 :id="`empty-queen-${index}`"></div>
          </div>
        </div>
        <img src="../assets/text.png"
             class="text-png">
      </div>
    </transition>

  </div>
</template>

<script type='text/ecmascript-6'>
import strip from "./components/strip";
import card from "./components/card";
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";
import VueQr from "vue-qr";

const queenFirstMoveSpeed = 1;
export default {
  components: { strip, card, VueQr },
  data() {
    return {
      title: "",
      // 是否显示二维码
      showCode: false,
      // 是否结束游戏
      endGame: false,
      //
      fistEndEnd: false,
      //
      firstEnd: false,
      hideOther: false,
      scale: false,
      beginGame: false,
      queenIndex: -1,
      // 是否选中
      selectedQueen: [false, false, false, false],
      // queen 的位置列表
      locationList: ["left-top", "right-top", "left-bottom", "right-bottom"],
      // 房子的位置列表
      targetList: [
        {
          top: "52px",
          left: "46px",
          width: "20px",
          height: "37px"
        },
        {
          top: "52px",
          left: "121px",
          width: "20px",
          height: "37px"
        },
        {
          top: "52px",
          left: "195px",
          width: "20px",
          height: "37px"
        },

        {
          top: "120px",
          left: "46px",
          width: "20px",
          height: "37px"
        },
        {
          top: "120px",
          left: "121px",
          width: "20px",
          height: "37px"
        },
        {
          top: "120px",
          left: "195px",
          width: "20px",
          height: "37px"
        },

        {
          top: "182px",
          left: "45px",
          width: "20px",
          height: "37px"
        },
        {
          top: "182px",
          left: "120px",
          width: "20px",
          height: "37px"
        },
        {
          top: "182px",
          left: "194px",
          width: "20px",
          height: "37px"
        },

        {
          top: "250px",
          left: "46px",
          width: "20px",
          height: "37px"
        },
        {
          top: "250px",
          left: "120px",
          width: "20px",
          height: "37px"
        },
        {
          top: "250px",
          left: "195px",
          width: "20px",
          height: "37px"
        }
      ],
      // 错误次数
      errorLength: 0
    };
  },
  mounted() {
    this.title = "game.chooseQueen";
  },
  methods: {
    error() {
      this.errorLength++;

      if (this.errorLength === this.targetList.length) {
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    },
    current() {
      let idx;
      this.selectedQueen.find((e, index) => {
        console.log(index);
        idx = index;
        this.selectedQueen[index] = true;
        return !e;
      });

      console.log(this.selectedQueen);
      this.$forceUpdate();
      this.$nextTick(_ => {
        let dom = document
          .querySelector(`#empty-queen-${idx}`)
          .getClientRects()[0];

        var myTimeline = new TimelineMax();
        myTimeline.add(
          TweenLite.fromTo(
            `#select-queen-${idx}`,
            0.4,
            { opacity: 0, scale: 1 },
            { opacity: 1, scale: 3 }
          )
        );

        myTimeline.add(
          TweenLite.to(`#select-queen-${idx}`, 0.4, {
            left: dom.left,
            top: dom.top,
            scale: 1
          })
        );

        let l = this.selectedQueen.filter(e => e).length === 4;

        if (l) {
          this.endGame = true;
          setTimeout(() => {
            this.title = this.$t("game.congratulations");
            this.showCode = true;
          }, 1800);
        }
      });
      // TweenMax();
    },
    begin() {
      this.scale = true;
      this.beginGame = true;
      this.title = "game.tap";

      // setTimeout(() => {
      // TweenMax.to("#queen", 0.4, { x: "-4vw", opacity: 0, display: "none" });

      // setTimeout(() => {
      // }, 400);
      // }, 400);
    },
    chooseQueen(item, index) {
      if (this.queenIndex !== -1) {
        return;
      }
      this.queenIndex = index;
      this.startAnimation(item);
    },
    startAnimation(item) {
      let data = item.split("-");

      let target = {
        top: "unset",
        right: "unset",
        bottom: "unset",
        left: "unset",
        ease: Power2.easeIn
      };
      target[data[0]] = 0;
      target[data[1]] = 0;

      for (let i in this.locationList) {
        if (this.locationList[i] !== item) {
          TweenMax.to(`#${this.locationList[i]}`, queenFirstMoveSpeed, target);
        }
      }

      const LeftTop = new TimelineMax();
      const RightTop = new TimelineMax();
      const LeftBottom = new TimelineMax();
      const RightBottom = new TimelineMax();

      switch (item) {
        case "left-top":
          console.log("left-top");
          RightTop.to("#right-top", 0.3 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(-4deg)"
          })
            .to("#right-top", 0.6 * queenFirstMoveSpeed, {
              ease: Power2.easeInOut,
              transform: "rotate(3deg)"
            })
            .to("#right-top", 0.1 * queenFirstMoveSpeed, {
              ease: Power2.easeInOut,
              transform: "rotate(0deg)"
            });
          RightBottom.to("#right-bottom", 0.9 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(4deg)"
          }).to("#right-bottom", 0.1 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(0deg)"
          });
          break;
        case "left-bottom":
          console.log("left-bottom");
          RightBottom.to("#right-bottom", 0.3 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(-4deg)"
          })
            .to("#right-bottom", 0.6 * queenFirstMoveSpeed, {
              ease: Power2.easeInOut,
              transform: "rotate(3deg)"
            })
            .to("#right-bottom", 0.1 * queenFirstMoveSpeed, {
              ease: Power2.easeInOut,
              transform: "rotate(0deg)"
            });
          RightTop.to("#right-top", 0.9 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(4deg)"
          }).to("#right-top", 0.1 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(0deg)"
          });
          break;
        case "right-top":
          console.log("right-top");
          LeftTop.to("#left-top", 0.3 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(4deg)"
          })
            .to("#left-top", 0.6 * queenFirstMoveSpeed, {
              ease: Power2.easeInOut,
              transform: "rotate(-3deg)"
            })
            .to("#left-top", 0.1 * queenFirstMoveSpeed, {
              ease: Power2.easeInOut,
              transform: "rotate(0deg)"
            });
          LeftBottom.to("#left-bottom", 0.9 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(-4deg)"
          }).to("#left-bottom", 0.1 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(0deg)"
          });
          break;
        case "right-bottom":
          console.log("right-bottom");
          LeftBottom.to("#left-bottom", 0.3 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(4deg)"
          })
            .to("#left-bottom", 0.6 * queenFirstMoveSpeed, {
              ease: Power2.easeInOut,
              transform: "rotate(-3deg)"
            })
            .to("#left-bottom", 0.1 * queenFirstMoveSpeed, {
              ease: Power2.easeInOut,
              transform: "rotate(0deg)"
            });

          LeftTop.to("#left-top", 0.9 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(-4deg)"
          }).to("#left-top", 0.1 * queenFirstMoveSpeed, {
            ease: Power2.easeInOut,
            transform: "rotate(0deg)"
          });
          break;
      }

      setTimeout(() => {
        this.hideOther = true;

        new TweenMax.to(`#${item}`, 1, {
          left: "11.3vw",
          top: "2.9vw",
          width: "38vw",
          height: "60vw"
        });

        setTimeout(() => {
          this.firstEnd = true;
          new TweenMax.to(`#${item}`, 0.4, {
            top: -21,
            scale: 0.11
          });
          setTimeout(() => {
            new TweenMax.to(`#${item}`, 0.4, {
              x: -10,
              opacity: 0
            });
          }, 400);
          this.$nextTick(() => {
            this.fistEndEnd = true;
            this.title = "game.chooseSuccess";
            // console.log("end");
            this.begin();
          });
        }, 1000);
      }, queenFirstMoveSpeed * 1000);
    },
    dumpNext() {
      // this.$emit("dumpIndex", 3);
      console.log(1);

      this.$router.push("/success");
      console.log(1);
    }
  }
};
</script>
