<template>
  <div class="wrap">
    <div class="play_wrap" id="player">
      <div class="search_bar">
        <!--        <img src="../image/player_title.png" alt="" />-->
      </div>
      <div class="center_con">
        <div class="song_wrapper">
          <ul class="song_list">
            <li v-for="item in props.musicList" :key="item.id">
              <a href="javascript:;" @click="playMusic(item.id)"></a>
              <b>{{ item.name }}</b>
              <span v-if="item.mvid !== 0" @click="playMV(item.mvid)"
                ><i></i
              ></span>
            </li>
          </ul>
          <img src="../image/line.png" class="switch_btn" alt="" />
        </div>
        <div class="player_con" :class="{ playing: isPlaying }">
          <img src="../image/player_bar.png" class="play_bar" />
          <img src="../image/disc.png" class="disc autoRotate" />
          <img :src="musicCover" class="cover autoRotate" />
        </div>
        <div class="comment_wrapper">
          <h5 class="title">热门留言</h5>
          <div class="comment_list">
            <dl v-for="item in hotComments" :key="item.id">
              <dt><img :src="item.user.avatarUrl" alt="" /></dt>
              <dd class="name">{{ item.nickname }}</dd>
              <dd class="detail">{{ item.content }}</dd>
            </dl>
          </div>
          <img src="../image/line.png" class="right_line" />
        </div>
      </div>
      <div class="audio_con">
        <audio
          ref="audio"
          @play="play"
          @pause="pause"
          :src="musicUrl"
          controls
          autoplay
          loop
          class="myaudio"
        ></audio>
      </div>
      <div class="video_con" v-show="isShow" style="display: none">
        <video :src="mvUrl" controls="controls"></video>
        <div class="mask" @click="hide"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import { ref } from "vue";
import axios from "axios";
import musicAxios from "@/plugins/musicAxios";
import myAxios from "@/plugins/myAxios";

interface Props {
  musicList: any[];
}

const props = withDefaults(defineProps<Props>(), {
  musicList: () => [],
});

const isPlaying = ref(false);
const musicCover = ref("");
const hotComments = ref([]);
const musicUrl = ref("");
const isShow = ref(false);
const mvUrl = ref("");

const playMusic = (musicId: string) => {
  musicAxios.get("/song/url?id=" + musicId).then(
    (response) => {
      musicUrl.value = response.data.data[0].url;
    },
    (err) => {
      // do nothing
    }
  );

  musicAxios.get("/song/detail?ids=" + musicId).then(
    (response) => {
      musicCover.value = response.data.songs[0].al.picUrl;
    },
    (err) => {
      // do nothing
    }
  );

  musicAxios.get("/comment/hot?type=0&id=" + musicId).then(
    (response) => {
      hotComments.value = response.data.hotComments;
    },
    (err) => {
      // do nothing
    }
  );
};

const playMV = (mvid: string) => {
  musicAxios.get("/mv/url?id=" + mvid).then(
    (response) => {
      isShow.value = true;
      mvUrl.value = response.data.data.url;
    },
    (err) => {
      // do nothing
    }
  );
};

const play = () => {
  isPlaying.value = true;
};

const pause = () => {
  isPlaying.value = false;
};

const hide = () => {
  isShow.value = false;
};
</script>

<style scoped>
/* 将原来的样式代码复制到这里，并根据需要进行适当的修改 */
body,
ul,
dl,
dd {
  margin: 0px;
  padding: 0px;
}

/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px) {
  .wrap {
    position: fixed;
    left: 50%;
    top: 60%;
    width: 800px;
    height: 544px;
    margin-left: -400px;
    margin-top: -272px;
    background: url("../image/bg.jpg");
    background-size: 100% 100%;
  }
}

/*默认*/
@media (min-width: 980px) {
  .wrap {
    position: fixed;
    left: 50%;
    top: 60%;
    /*bottom: 30%;*/
    /*width: calc(100% / 2.4);*/
    /*height: calc(100% / 1.93);*/
    /*margin-left: calc(-50% / 2.4);*/
    /*margin-top: calc(-50% / 1.9 / 2);*/
    width: 800px;
    height: 544px;
    margin-left: -400px;
    margin-top: -272px;
    background: url("../image/bg.jpg");
    background-size: 100% 100%;
  }
}

/* 平板电脑和小屏电脑之间的分辨率 */
@media (min-width: 768px) and (max-width: 979px) {
  .wrap {
    position: fixed;
    left: 50%;
    top: 65%;
    width: 500px;
    height: 340px;
    margin-left: -250px;
    margin-top: -170px;
    /*width: calc(100% / 2.4);*/
    /*height: calc(100% / 1.93);*/
    /*margin-left: calc(-50% / 2.4);*/
    /*margin-top: calc(-50% / 1.9 / 2);*/
    background: url("../image/bg.jpg");
    background-size: 100% 100%;
  }
}

/*.wrap {*/
/*  position: fixed;*/
/*  left: 50%;*/
/*  top: 65%;*/
/*  !*bottom: 8%;*!*/
/*  width: 800px;*/
/*  !*width: 41.5%;*!*/
/*  height: 544px;*/
/*  !*height: 52%;*!*/
/*  !*margin-left: -20.75%;*!*/
/*  !*margin-top: -14.5%;*!*/
/*  margin-left: -400px;*/
/*  margin-top: -272px;*/
/*  !*background: url("../image/bg.jpg") no-repeat;*!*/
/*  background: url("../image/bg.jpg");*/
/*  background-size: 100% 100%;*/
/*}*/

/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px) {
  .play_wrap {
    position: fixed;
    left: 50%;
    top: 60%;
    width: 800px;
    height: 544px;
    margin-left: -400px;
    margin-top: -272px;
  }
}

/*默认*/
@media (min-width: 980px) {
  .play_wrap {
    position: fixed;
    left: 50%;
    top: 60%;
    width: 800px;
    height: 544px;
    margin-left: -400px;
    margin-top: -272px;
    /*width: calc(100% / 2.4);*/
    /*height: calc(100% / 1.93);*/
    /*margin-left: calc(-50% / 2.4);*/
    /*margin-top: calc(-50% / 1.9 / 2);*/
  }
}

/* 平板电脑和小屏电脑之间的分辨率 */
@media (min-width: 768px) and (max-width: 979px) {
  .play_wrap {
    position: fixed;
    left: 50%;
    top: 65%;
    width: 500px;
    height: 340px;
    margin-left: -250px;
    margin-top: -170px;
    /*width: calc(100% / 2.4);*/
    /*height: calc(100% / 1.93);*/
    /*margin-left: calc(-50% / 2.4);*/
    /*margin-top: calc(-50% / 1.9 / 2);*/
  }
}

/*.play_wrap {*/
/*  width: 800px;*/
/*  height: 544px;*/
/*  !*width: 41.5%;*!*/
/*  !*height: 52%;*!*/
/*  !*position: fixed;*!*/
/*  left: 50%;*/
/*  top: 65%;*/
/*  !*bottom: 8%;*!*/
/*  margin-left: -400px;*/
/*  margin-top: -272px;*/
/*  !*margin-left: -20.75%;*!*/
/*  !*margin-top: -14.5%;*!*/
/*  !* background-color: #f9f9f9; *!*/
/*}*/

.search_bar {
  height: 60px;
  /*background-color: #1eacda;*/
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 11;
}

.search_bar img {
  margin-left: 23px;
}

.search_bar input {
  margin-right: 23px;
  width: 296px;
  height: 34px;
  border-radius: 17px;
  border: 0px;
  background: url("../image/zoom.png") 265px center no-repeat
    rgba(255, 255, 255, 0.45);
  text-indent: 15px;
  outline: none;
}

.center_con {
  height: 435px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  position: relative;
}

.song_wrapper {
  width: 200px;
  height: 435px;
  box-sizing: border-box;
  padding: 10px;
  list-style: none;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
}

.song_stretch {
  width: 600px;
}

.song_list {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}

.song_list::-webkit-scrollbar {
  display: none;
}

.song_list li {
  font-size: 12px;
  color: #333;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 580px;
  padding-left: 10px;
}

.song_list li:nth-child(odd) {
  background-color: rgba(240, 240, 240, 0.3);
}

.song_list li a {
  display: block;
  width: 17px;
  height: 17px;
  background-image: url("../image/play.png");
  background-size: 100%;
  margin-right: 5px;
  box-sizing: border-box;
}

.song_list li b {
  font-weight: normal;
  width: 122px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song_stretch .song_list li b {
  width: 200px;
}

.song_stretch .song_list li em {
  width: 150px;
}

.song_list li span {
  width: 23px;
  height: 17px;
  margin-right: 50px;
}

.song_list li span i {
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url("../image/MV.png");
  background-size: 100%;
  margin-right: 5px;
  box-sizing: border-box;
}

.song_list li em,
.song_list li i {
  font-style: normal;
  width: 100px;
}

.player_con {
  width: 400px;
  height: 435px;
  position: absolute;
  left: 200px;
  top: 0px;
}

.player_con2 {
  width: 400px;
  height: 435px;
  position: absolute;
  left: 200px;
  top: 0px;
}

.player_con2 video {
  position: absolute;
  left: 20px;
  top: 30px;
  width: 355px;
  height: 265px;
}

.disc {
  position: absolute;
  left: 73px;
  top: 60px;
  z-index: 9;
}

.cover {
  position: absolute;
  left: 125px;
  top: 112px;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  z-index: 8;
}

.comment_wrapper {
  width: 180px;
  height: 435px;
  list-style: none;
  position: absolute;
  left: 600px;
  top: 0px;
  padding: 25px 10px;
}

.comment_wrapper .title {
  position: absolute;
  top: 0;
  margin-top: 10px;
}

.comment_wrapper .comment_list {
  overflow: auto;
  height: 410px;
}

.comment_wrapper .comment_list::-webkit-scrollbar {
  display: none;
}

.comment_wrapper dl {
  padding-top: 10px;
  padding-left: 55px;
  position: relative;
  margin-bottom: 20px;
}

.comment_wrapper dt {
  position: absolute;
  left: 4px;
  top: 10px;
}

.comment_wrapper dt img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}

.comment_wrapper dd {
  font-size: 12px;
}

.comment_wrapper .name {
  font-weight: bold;
  color: #333;
  padding-top: 5px;
}

.comment_wrapper .detail {
  color: #666;
  margin-top: 5px;
  line-height: 18px;
}

.audio_con {
  height: 50px;
  background-color: #f1f3f4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.myaudio {
  width: 800px;
  height: 40px;
  margin-top: 5px;
  outline: none;
  background-color: #f1f3f4;
}

/* 旋转的动画 */
@keyframes Rotate {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
}

/* 旋转的类名 */
.autoRotate {
  animation-name: Rotate;
  animation-iteration-count: infinite;
  animation-play-state: paused;
  animation-timing-function: linear;
  animation-duration: 5s;
}

/* 是否正在播放 */
.player_con.playing .disc,
.player_con.playing .cover {
  animation-play-state: running;
}

.play_bar {
  position: absolute;
  left: 200px;
  top: -10px;
  z-index: 10;
  transform: rotate(-25deg);
  transform-origin: 12px 12px;
  transition: 1s;
}

/* 播放杆 转回去 */
.player_con.playing .play_bar {
  transform: rotate(0);
}

/* 搜索历史列表 */
.search_history {
  position: absolute;
  width: 296px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);
  list-style: none;
  right: 23px;
  top: 50px;
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 17px;
}

.search_history li {
  line-height: 24px;
  font-size: 12px;
  cursor: pointer;
}

.switch_btn {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

.right_line {
  position: absolute;
  left: 0;
  top: 0;
}

.video_con video {
  position: fixed;
  width: 800px;
  height: 546px;
  left: 50%;
  top: 50%;
  margin-top: -273px;
  transform: translateX(-50%);
  z-index: 990;
}

.video_con .mask {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 980;
  background-color: rgba(0, 0, 0, 0.8);
}

.video_con .shutoff {
  position: fixed;
  width: 40px;
  height: 40px;
  background: url("../image/shutoff.png") no-repeat;
  left: 50%;
  margin-left: 400px;
  margin-top: -273px;
  top: 50%;
  z-index: 995;
}
</style>
