//格式化数字
export function formatNumber(number) {
  if (
    typeof number !== "number" ||
    typeof (number * 1) !== "number" ||
    number < 0
  )
    return;
  if (number < 10000) return number;
  if (number / 10000 > 0 && number / 1000 / 10000 < 10) {
    return (number / 10000).toFixed(2) + "万";
  } else {
    return (number / 10000 / 10000).toFixed(2) + "亿";
  }
}
//获取指定图片的url
export function formatImgSize(imgURL, size) {
  return `${imgURL}?param=${size}`;
}

//歌曲时间的处理
export function formatDoubleDigit(num) {
  const length = num.toString().length;
  switch (length) {
    case 1: {
      return `0${num}`;
    }
    default: {
      return num;
    }
  }
}
export function formatSongTime(time) {
  time = Math.floor(time / 1000);
  const minute = formatDoubleDigit(Math.floor(time / 60));
  const second = formatDoubleDigit(time - minute * 60);
  return `${minute}:${second}`;
}

//获取播放音乐的MP3文件
export function formatGetPlayerSongUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

//格式化歌词，转化为一个Array
export function formatLyricAsArray(LyricStr) {
  const getTimeReg = /\[(?<minute>\d{2}):(?<second>\d{2})\.(?<ms>\d+?)\]/;
  const LyricLines = LyricStr.split("\n");
  let LyricList = LyricLines.map((line, index) => {
    if (line === "") return ""; //按照\n截取得到的Array，最后一个元素为空string。
    let { minute, second, ms } = line.match(getTimeReg).groups;
    minute = minute * 60 * 1000;
    second = second * 1000;
    ms = ms * 1;
    const time = minute + second + ms;
    const lyric = line.replace(getTimeReg, "");
    return { time, lyric };
  });
  LyricList.length--;
  LyricList = LyricList.map((line, index, arr) => {
    const mergeLine = arr.filter((val) => val.time === line.time);
    if (mergeLine.length === 1) {
      return line;
    } else {
      //合并重复项的内容
      const newLine = {
        time: line.time,
        lyric: mergeLine.map((v) => v.lyric).join("\n"),
      };
      //将重复项从原Array剔除
      mergeLine.splice(0, 1);
      mergeLine.forEach((repeat) => {
        const i = arr.findIndex(
          (v) => v.time === repeat.time && v.lyric === repeat.lyric
        );
        LyricList.splice(i, 1);
      });
      return newLine;
    }
  });
  return LyricList;
}
