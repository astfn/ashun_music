(this.webpackJsonpashun_music=this.webpackJsonpashun_music||[]).push([[11],{253:function(n,e,t){"use strict";var i,c=t(0),s=t(18),r=t(19).a.div(i||(i=Object(s.a)(["\n  height: 24px;\n  font-size: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n  .left {\n    .title {\n      color: #333;\n      font-weight: bold;\n    }\n  }\n  .right {\n    .more {\n      color: #666;\n    }\n  }\n"]))),o=t(4),a=function(n){var e=n.title,t=n.moreText;return Object(o.jsxs)(r,{children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("span",{className:"title",children:e})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)("span",{className:"more link",children:t})})]})};e.a=Object(c.memo)(a)},275:function(n,e,t){"use strict";t.r(e);var i,c,s,r,o,a,l,p,x=t(0),d=t(22),b=t(40),j=t(18),m=t(19),u=m.a.div(i||(i=Object(j.a)(["\n  overflow: hidden;\n  background-color: #fff;\n  border: 1px solid #d3d3d3;\n  border-top: none;\n  border-bottom: none;\n  display: flex;\n"]))),h=m.a.div(c||(c=Object(j.a)([""]))),g=m.a.div(s||(s=Object(j.a)(["\n  padding: 20px 40px 40px 30px;\n  flex: 1;\n  border-left: 2px solid #eaeaea;\n"]))),f=t(48),O=m.a.div(r||(r=Object(j.a)(["\n  padding-top: 35px;\n  width: 709px;\n  display: flex;\n  justify-content: center;\n"]))),v=m.a.div(o||(o=Object(j.a)(["\n  margin-right: 20px;\n\n  .img_box {\n    width: 206px;\n    height: 205px;\n    position: relative;\n    img {\n      width: 130px;\n      height: 130px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n    .mask {\n      display: block;\n      position: absolute;\n      top: 0px;\n      left: 0px;\n      bottom: 0px;\n      right: 0px;\n      z-index: 99;\n      background-position: -140px -580px;\n    }\n  }\n\n  .generator {\n    margin: 10px 0px 0px -16px;\n    text-align: center;\n    .icon {\n      position: relative;\n      top: 3px;\n      display: inline-block;\n      width: 16px;\n      height: 16px;\n      background-position: -34px -863px;\n    }\n    a {\n      color: #0c73c2;\n      text-decoration: underline;\n    }\n  }\n"]))),N=m.a.div(a||(a=Object(j.a)(["\n  width: 414px;\n\n  .info {\n    .name_box {\n      display: flex;\n      .icon {\n        margin-top: 6px;\n        width: 54px;\n        height: 24px;\n        background-position: 0 -463px;\n      }\n      span {\n        flex: 1;\n        margin-left: 10px;\n        font-size: 24px;\n        color: #333;\n      }\n    }\n    .desc {\n      p {\n        margin: 10px 0px;\n        font-size: 12px;\n        color: #999;\n      }\n      a {\n        color: #0c73c2;\n      }\n    }\n  }\n\n  .operations {\n    margin-bottom: 25px;\n    /* margin-right: -30px; */\n    display: flex;\n    align-items: center;\n    .prominentBTN {\n      margin-right: 5px;\n      button {\n        color: #fff;\n        height: 31px;\n        text-align: center;\n        cursor: pointer;\n      }\n      .play {\n        width: 70px;\n        text-indent: 23px;\n\n        background-position: 0 -633px;\n        &:hover {\n          background-position: 0 -805px;\n        }\n      }\n      .addto {\n        text-indent: 999px;\n        width: 31px;\n        margin-left: -3px;\n        background-position: 0 -1588px;\n        &:hover {\n          background-position: -80px -1588px;\n        }\n      }\n    }\n    .otherBTN {\n      button {\n        margin-right: 5px;\n        height: 31px;\n        line-height: 31px;\n        color: #333;\n      }\n      .right_bg {\n        padding: 0 7px 0 28px;\n        display: inline-block;\n        height: 100%;\n        background-position: right -1020px;\n      }\n      .star {\n        background-position: 0 -977px;\n      }\n      .share {\n        background-position: 0 -1225px;\n      }\n      .down {\n        background-position: 0 -2761px;\n      }\n      .comment_sum {\n        background-position: 0 -1465px;\n      }\n    }\n  }\n  .lyrics {\n    .lyric-control {\n      position: relative;\n      color: #0c73c2;\n      background-color: #fff;\n      cursor: pointer;\n      &:hover {\n        text-decoration: underline;\n      }\n\n      i {\n        position: absolute;\n        width: 11px;\n        height: 8px;\n        right: -13px;\n        top: 3px;\n        background-position: "," -520px;\n      }\n    }\n  }\n"])),(function(n){return n.isSpread?"-45px":"-65px"})),y=t(4),k=function(n){var e=Object(x.useState)(!1),t=Object(f.a)(e,2),i=t[0],c=t[1],s=Object(d.d)((function(n){return{currentSong:n.getIn(["player","currentSong"]),currentLyrics:n.getIn(["player","currentLyrics"])}}),d.b),r=s.currentSong,o=s.currentLyrics,a=r.name,l=r.ar,p=r.al,b=r.dt,j=l||[],m={songInfo:{name:a,id:r.id,albumName:p.name,imgUrl:p?p.picUrl:"",duration:b},singerNames:j.map((function(n){return n.name})).join("/")},u=i?o.length:13;return Object(y.jsxs)(O,{className:"wrap-v2",children:[Object(y.jsxs)(v,{className:"portrait",children:[Object(y.jsxs)("div",{className:"img_box",children:[Object(y.jsx)("span",{className:"mask sprite_covor"}),Object(y.jsx)("img",{src:m.songInfo.imgUrl,alt:m.songInfo.name})]}),Object(y.jsxs)("div",{className:"generator",children:[Object(y.jsx)("i",{className:"icon sprite_icon2"}),Object(y.jsx)("a",{href:"/#",onClick:function(n){return n.preventDefault()},children:"\u751f\u6210\u5916\u94fe\u64ad\u653e\u5668"})]})]}),Object(y.jsxs)(N,{isSpread:i,children:[Object(y.jsxs)("div",{className:"info",children:[Object(y.jsxs)("div",{className:"name_box",children:[Object(y.jsx)("i",{className:"icon sprite_icon2"}),Object(y.jsx)("span",{children:m.songInfo.name})]}),Object(y.jsxs)("div",{className:"desc",children:[Object(y.jsxs)("p",{children:["\u6b4c\u624b\uff1a",Object(y.jsx)("a",{href:"/#",onClick:function(n){return n.preventDefault()},children:m.singerNames})]}),Object(y.jsxs)("p",{children:["\u6240\u5c5e\u4e13\u8f91\uff1a",Object(y.jsxs)("a",{href:"/#",onClick:function(n){return n.preventDefault()},children:["Ashuntefannao\ud83d\ude00/",m.songInfo.albumName]})]})]})]}),Object(y.jsxs)("div",{className:"operations",children:[Object(y.jsxs)("div",{className:"prominentBTN",children:[Object(y.jsx)("button",{className:"play sprite_button",children:"\u64ad\u653e"}),Object(y.jsx)("button",{className:"addto sprite_button",children:"+"})]}),Object(y.jsxs)("div",{className:"otherBTN",children:[Object(y.jsx)("button",{className:"star sprite_button",children:Object(y.jsx)("span",{className:"right_bg sprite_button",children:"\u6536\u85cf"})}),Object(y.jsx)("button",{className:"share sprite_button",children:Object(y.jsx)("span",{className:"right_bg sprite_button",children:"\u5206\u4eab"})}),Object(y.jsx)("button",{className:"down sprite_button",children:Object(y.jsx)("span",{className:"right_bg sprite_button",children:"\u4e0b\u8f7d"})}),Object(y.jsx)("button",{className:"comment_sum sprite_button",children:Object(y.jsx)("span",{className:"right_bg sprite_button",children:"(9999)"})})]})]}),Object(y.jsxs)("div",{className:"lyrics",children:[o.slice(0,u).map((function(n,e){return Object(y.jsx)("p",{className:"lyric-line",children:n.lyric},n.time+n.lyric)})),Object(y.jsxs)("button",{className:"lyric-control",onClick:function(n){return c(!i)},children:[i?"\u6536\u8d77":"\u5c55\u5f00",Object(y.jsx)("i",{className:"sprite_icon2"})]})]})]})]})},w=Object(x.memo)(k),_=t(34),S=m.a.div(l||(l=Object(j.a)(["\n  .content {\n    margin: 20px 0px;\n\n    .item {\n      margin-bottom: 15px;\n      display: flex;\n\n      .img-box {\n        min-width: 50px;\n        min-height: 50px;\n        position: relative;\n        overflow: hidden;\n        border-radius: 3px;\n        a {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n        }\n      }\n\n      .info {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        padding: 3px 0px 3px 10px;\n        a {\n          display: inline-block;\n          max-width: 135px;\n          font-size: 14px;\n          color: black;\n        }\n        .desc-box {\n          display: flex;\n          align-items: flex-end;\n          font-size: 12px;\n          .preText {\n            color: #999;\n          }\n          .creator-name {\n            display: inline-block;\n            max-width: 100px;\n            margin: 0 2px 0 4px;\n            color: #666;\n          }\n        }\n      }\n    }\n  }\n"]))),I=t(253),C=function(n){var e=Object(d.c)(),t=Object(d.d)((function(n){return{currentSong:n.getIn(["player","currentSong"]),relevantSongList:n.getIn(["player","relevantSongList"])}}),d.b),i=t.currentSong,c=t.relevantSongList,s=i.id;return Object(x.useEffect)((function(){e(Object(b.f)(s))}),[e,s]),Object(y.jsxs)(S,{children:[Object(y.jsx)(I.a,{title:"\u5305\u542b\u8fd9\u9996\u6b4c\u7684\u6b4c\u5355"}),Object(y.jsx)("div",{className:"content",children:c.map((function(n,e){return Object(y.jsxs)("div",{className:"item",children:[Object(y.jsxs)("div",{className:"img-box",children:[Object(y.jsx)("img",{src:Object(_.b)(n.coverImgUrl,"50x50"),alt:n.name}),Object(y.jsx)("a",{href:"/#",onClick:function(n){return n.preventDefault()},children:""})]}),Object(y.jsxs)("div",{className:"info",children:[Object(y.jsx)("a",{href:"/#",className:"text-nowrap",onClick:function(n){return n.preventDefault()},children:n.name}),Object(y.jsxs)("div",{className:"desc-box",children:[Object(y.jsx)("span",{className:"preText",children:"by"}),Object(y.jsx)("span",{className:"creator-name text-nowrap",children:n.creator.nickname})]})]})]},n.id)}))})]})},z=Object(x.memo)(C),D=m.a.div(p||(p=Object(j.a)(["\n  .content {\n    margin: 20px 0px;\n    .item {\n      margin-bottom: 15px;\n      display: flex;\n      height: 32px;\n\n      .info {\n        width: 156px;\n        display: flex;\n        flex-direction: column;\n        font-size: 12px;\n        .song-name {\n          color: #333;\n        }\n        .artist-name {\n          color: #999;\n        }\n      }\n      .operations {\n        padding: 0px 3px;\n        flex: 1;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        button {\n          width: 10px;\n          height: 11px;\n          cursor: pointer;\n          opacity: 0.9;\n        }\n        .play {\n          background-position: -69px -455px;\n        }\n        .addto {\n          background-position: -87px -454px;\n        }\n      }\n    }\n  }\n"]))),T=function(n){var e=Object(d.c)(),t=Object(d.d)((function(n){return{currentSong:n.getIn(["player","currentSong"]),similarSongs:n.getIn(["player","similarSongs"])}}),d.b),i=t.currentSong,c=t.similarSongs,s=i.id;Object(x.useEffect)((function(){e(Object(b.g)(s))}),[e,s]),console.log(c);return Object(y.jsxs)(D,{children:[Object(y.jsx)(I.a,{title:"\u76f8\u4f3c\u6b4c\u66f2"}),Object(y.jsx)("div",{className:"content",children:c.map((function(n,t){var i=n.artists.map((function(n){return n.name})).join("/");return Object(y.jsxs)("div",{className:"item",children:[Object(y.jsxs)("div",{className:"info",children:[Object(y.jsx)("a",{href:"/#",className:"song-name text-nowrap",onClick:function(n){return n.preventDefault()},children:n.name}),Object(y.jsx)("a",{href:"/#",className:"artist-name text-nowrap",onClick:function(n){return n.preventDefault()},children:i})]}),Object(y.jsxs)("div",{className:"operations",children:[Object(y.jsx)("button",{className:"play sprite_icon3",onClick:function(t){return function(n){e(Object(b.e)(n))}(n.id)}}),Object(y.jsx)("button",{className:"addto sprite_icon3"})]})]},n.id)}))})]})},L=Object(x.memo)(T),B=function(n){var e=Object(d.c)();return Object(x.useEffect)((function(){return e(Object(b.d)(!0)),function(){e(Object(b.d)(!1))}}),[e]),Object(y.jsxs)(u,{className:"wrap-v2",children:[Object(y.jsx)(h,{children:Object(y.jsx)(w,{})}),Object(y.jsxs)(g,{children:[Object(y.jsx)(z,{}),Object(y.jsx)(L,{})]})]})};e.default=Object(x.memo)(B)}}]);
//# sourceMappingURL=11.d956590d.chunk.js.map