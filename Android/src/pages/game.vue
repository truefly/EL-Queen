<!--  -->

<style lang='scss' type='stylesheet/scss' scoped>
.move-down-enter-active,
.move-down-leave-active {
  transition: all 0.6s;
}
.move-down-enter,
.move-down-leave-to {
  opacity: 0;
  transform: translateY(-2vh);
}

.move-left-enter-active {
  transition: all 0.6s;
}
.move-left-enter {
  opacity: 0;
  transform: translateX(-30vw);
}

.move-right-enter-active {
  transition: all 0.6s;
}
.move-right-enter {
  opacity: 0;
  transform: translateX(30vw);
}

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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.queens-warpper {
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    transform: translateY(-50%) scale(0.8);
    transform-origin: top;
  }
  position: fixed;
  width: 60vw;
  height: 94vw;
  margin: 0 auto;
  // margin-top: 12vh;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  z-index: 9;
  & > .queen {
    width: calc(38vw * 0.55 * 0.3);
    // height: calc(61vw * 0.534 * 0.3);
    left: calc(38vw * 0.05 + 24.7vw);
    top: calc(61vw * 0.05 + 54.1vw);
    position: absolute;
    z-index: 2;
  }

  .queens-bg {
    background-image: url("../assets/queen-box.png");
    position: absolute;

    width: 100%;
    height: 100%;

    background-size: 100% 100%;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
  }

  .queen-warpper {
    width: 28vw;
    height: 45vw;

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    // &:after {
    //   position: absolute;
    //   content: "";
    //   transition: all 0.4s ease;
    //   opacity: 0;
    //   left: 0;
    //   right: 0;
    //   bottom: 0;
    //   top: 0;
    //   background: rgba(0, 0, 0, 0.8);
    //   z-index: 3;
    // }
    // &.mask {
    //   &:after {
    //     opacity: 1;
    //   }
    // }

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
  // transition: all 0.4s ease;
  z-index: 10;
  bottom: 29vw;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    top: 24vw;
  }
  // bottom: 30.7vw;
  top: 32vw;
  left: 5vw;
  width: 90vw;

  display: flex;
  justify-content: center;
  align-items: center;

  .building {
    position: relative;
    @media screen and (min-height: 630px) {
      transform: scale(1.3) !important;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      transform: scale(0.8) !important;
    }
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

  .bg {
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    background-image: url("../assets/splash.png");
    background-size: 100% 100%;
  }
}

.bottom {
  height: 29vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
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
        z-index: 99;
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

.head-box {
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    // transform: scale(0.7);
    width: 65vw;
    height: 18vw;
  }
}
</style>

<template>
  <div class="game">
    <transition name="move-down">
      <div class="head-box"
           v-show="show">
        <span v-html="$t(title)"></span>
      </div>
    </transition>

    <!-- <transition name="fade"> -->·
    <div class="queens-warpper"
         :style="{marginTop}">
      <div v-for="(item,index) in locationList">
        <transition :name="`move-${index%2===0?'left':'right'}`">
          <div :id="item"
               @click="chooseQueen(item,index)"
               :class="`${item}`"
               :style="queenIndex===index?'z-index:6':''"
               v-if="show&&(!hideOther||queenIndex===index)"
               class="queen-warpper">

            <div id="queens-bg">
              <div class="queens-bg"></div>
              <transition name="fade">
                <div v-show="queenIndex===index&&!hideBg">
                  <img class="front heart"
                       src="../assets/heart.png">
                  <img class="back heart"
                       src="../assets/heart.png">
                </div>
              </transition>
            </div>
            <img :src="require('../assets/'+item+'.png')"
                 class="queen">
          </div>
        </transition>
      </div>

    </div>
    <!-- </transition> -->

    <transition name="fade">
      <div class="buildings"
           id="buildings"
           v-if="!endGame"
           @click="begin">
        <!-- v-if="firstEnd&&!showCode" -->
        <!-- :style="scale?'transform: scale(1);':'transform: scale(5)'" -->
        <div class="building"
             id="building">
          <div class="choose-item"
               :id="`choose-item-${index}`"
               v-if="beginGame"
               v-for="(item,index) in targetList"
               :style="{
                 left:item.left*ratio+'px',
                 top:item.top*ratio+'px',
                 width:item.width*ratio+'px',
                 height:item.height*ratio+'px'}">

            <div class="bg"
                 :id="`choose-bg-${index}`"
                 :style="{
                   left:-15*ratio+'px',
                   top:-15*ratio+'px',
                   bottom:-15*ratio+'px',
                   right:-15*ratio+'px',
                   opacity:0
                   }"></div>
            <card :index="index"
                  :item="item"
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
           v-show="showCode">

        <div class="scan">{{$t('game.scan')}}</div>
        <vue-qr :text="urlLink"
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

const queenFirstMoveSpeed = 0.6;
export default {
  components: { strip, card, VueQr },
  data() {
    return {
      urlLink: "",
      hideBg: false,
      show: false,
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
          top: "52",
          left: "46",
          width: "20",
          height: "37"
        },
        {
          top: "52",
          left: "121",
          width: "20",
          height: "37"
        },
        {
          top: "52",
          left: "195",
          width: "20",
          height: "37"
        },

        {
          top: "120",
          left: "46",
          width: "20",
          height: "37"
        },
        {
          top: "120",
          left: "121",
          width: "20",
          height: "37"
        },
        {
          top: "120",
          left: "195",
          width: "20",
          height: "37"
        },

        {
          top: "182",
          left: "45",
          width: "20",
          height: "37"
        },
        {
          top: "182",
          left: "120",
          width: "20",
          height: "37"
        },
        {
          top: "182",
          left: "194",
          width: "20",
          height: "37"
        },

        {
          top: "250",
          left: "46",
          width: "20",
          height: "37"
        },
        {
          top: "250",
          left: "120",
          width: "20",
          height: "37"
        },
        {
          top: "250",
          left: "195",
          width: "20",
          height: "37"
        }
      ],
      // 错误次数
      errorLength: 0
    };
  },
  mounted() {
    TweenMax.set("#buildings", {
      opacity: 0,
      display: "none",
      scale: 8,
      zIndex: 8
    });

    this.title = "game.chooseQueen";

    this.show = true;
  },
  computed: {
    ratio() {
      return window.innerWidth / 375;
    },
    marginTop() {
      return window.innerWidth / window.innerHeight > 0.68 ? "12vh" : "3vh";
    }
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
        idx = index;
        this.selectedQueen[index] = true;
        return !e;
      });

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
          let code = randomString(false, 32);

          // if (+gaNetwork === 0 && gaDevice === "mobile") {
          //   setTimeout(() => {
          //     window.location.replace(window.location.href + "success-sec");
          //   }, 1800);
          // }

          // if (gaDevice !== "mobile") {
          //   // offline
          setTimeout(() => {
            this.endGame = true;

            this.urlLink = `https://www.rfisystem.com/holidaygame/?region=AM&device=Meitu&network=0&code=${code}&channel=#/success`;

            this.showCode = true;
          }, 1800);
          // } else {
          //   // this.endGame = true;
          //   setTimeout(() => {
          //     this.title = this.$t("game.congratulations");
          //     // this.showCode = true;
          //     window.location.replace(
          //       window.location.href.split("/?").join(`/?code=${code}&`) +
          //         "success"
          //     );
          //   }, 1800);
          // }
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
        ease: Power2.easeIn,
        opacity: 0
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

        // 移动选中的移动到中心
        new TweenMax.to(`#${item}`, 0.5, {
          left: "11.3vw",
          top: "2.9vw",
          width: "38vw",
          height: "60vw"
        });

        setTimeout(() => {
          // this.hideBg = true;

          // 楼房出现
          TweenMax.to("#queens-bg", 0.8, {
            opacity: 0,
            display: "none"
          });
          this.firstEnd = true;
          TweenMax.set("#buildings", { display: "flex" });

          let height = document
            .querySelector("#building")
            .getBoundingClientRect().height;

          TweenMax.set("#buildings", { y: height * 0.25 });

          TweenMax.fromTo(
            "#buildings",
            0.8,
            { opacity: 0 },
            { opacity: 1, zIndex: "8" }
          );

          setTimeout(() => {
            TweenMax.to(`#${item}`, 0.3, {
              y: 21,
              scale: 0.01,
              opacity: 0,
              ease: Power2.ease
              // y: "-5vh"
            });
            TweenMax.fromTo(
              "#buildings",
              0.5,
              {
                scale: 8,
                y: height * 0.25
              },
              {
                scale: 1,
                y: 0
              }
            );

            // TweenMax.fromTo(
            //   "#buildings",
            //   0.8,
            //   {
            //     // scale: 5,
            //     y: height * 0.25
            //   },
            //   {
            //     // scale: 1,
            //     y: 0
            //   }
            // );

            this.$nextTick(() => {
              this.fistEndEnd = true;
              this.title = "game.chooseSuccess";
              this.begin();
            });

            setTimeout(() => {
              TweenMax.set(".queens-warpper", {
                opacity: 0,
                display: "none"
              });
              new TweenMax.to(`#${item}`, 0.4, {
                x: -10,
                opacity: 0
              });
            }, 500);
          }, 1300);
        }, 500);
      }, queenFirstMoveSpeed * 1000);
    },
    dumpNext() {
      this.$router.push("/success");
    }
  }
};
</script>
