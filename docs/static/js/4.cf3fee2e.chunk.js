(this.webpackJsonpashun_music=this.webpackJsonpashun_music||[]).push([[4],{270:function(n,t,e){"use strict";e.d(t,"d",(function(){return c})),e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return a})),e.d(t,"e",(function(){return o})),e.d(t,"c",(function(){return s}));var i=e(65);function c(){return Object(i.a)({url:"/banner"})}function r(n){return Object(i.a)({url:"/personalized",params:{limit:n}})}function a(n){return Object(i.a)({url:"/top/album",params:{limit:n}})}function o(n){return Object(i.a)({url:"/top/list",params:{idx:n}})}function s(n,t){return Object(i.a)({url:"/artist/list",params:{limit:n,cat:t}})}},271:function(n,t,e){"use strict";e.d(t,"d",(function(){return r})),e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return o})),e.d(t,"e",(function(){return s})),e.d(t,"c",(function(){return l}));var i=e(51),c=e(270);function r(){return function(n,t){Object(c.d)().then((function(t){var e;n((e=t.banners,{type:i.d,topBanners:e}))}),(function(n){return n}))}}function a(n){return function(t,e){Object(c.a)(n).then((function(n){var e;t((e=n.result,{type:i.a,hotRecommends:e}))}),(function(n){return n}))}}function o(n){return function(t,e){Object(c.b)(n).then((function(n){var e;t((e=n.albums,{type:i.b,newAlbums:e}))}),(function(n){return n}))}}function s(n){return function(t,e){Object(c.e)(n).then((function(e){var c,r,a,o=e.playlist;switch(n){case 0:t((a=o,{type:i.e,topNewList:a}));break;case 2:t((r=o,{type:i.f,topOriginList:r}));break;case 3:t((c=o,{type:i.g,topUpList:c}));break;default:console.log("\u83b7\u53d6\u699c\u5355\u5931\u8d25\uff1a\u6ca1\u6709\u5339\u914d\u7684idx")}}),(function(n){return n}))}}function l(n){return function(t,e){Object(c.c)(n,5001).then((function(n){var e;t((e=n.artists,{type:i.c,settleSingerList:e}))}),(function(n){return n}))}}},272:function(n,t,e){"use strict";var i,c=e(0),r=e(19),a=e(20).a.div(i||(i=Object(r.a)(["\n  height: 24px;\n  font-size: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n  .left {\n    .title {\n      color: #333;\n      font-weight: bold;\n    }\n  }\n  .right {\n    .more {\n      color: #666;\n    }\n  }\n"]))),o=e(4),s=function(n){var t=n.title,e=n.moreText;return Object(o.jsxs)(a,{children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("span",{className:"title",children:t})}),Object(o.jsx)("div",{className:"right",children:Object(o.jsx)("span",{className:"more link",children:e})})]})};t.a=Object(c.memo)(s)},273:function(n,t,e){"use strict";e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"d",(function(){return o})),e.d(t,"e",(function(){return s}));var i=e(26),c=8,r=14,a=5,o=5,s=function(n){return{phone:n.phone,nickName:n.nickName,password:n.password,playList:i.c,starSongs:[],theme:{"--color-deep":"#ad4e00","--color-middle":"#d46b08","--color-shallow":"#fa8c16","--color-light":"#ffa940","--color-near-white":"#fff7e6"}}}},274:function(n,t,e){"use strict";var i,c=e(0),r=e(19),a=e(20).a.div(i||(i=Object(r.a)(['\n  padding: 0 10px 0 0px;\n  width: 100%;\n  height: 35px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid var(--color-middle);\n  /* background-position: -225px -156px; */\n  .left {\n    height: 100%;\n    display: flex;\n    .circle {\n      margin: -3px 10px 0px 10px;\n      align-self: center;\n\n      width: 15px;\n      height: 15px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: 50%;\n      background-color: var(--color-shallow);\n\n      &::before {\n        content: "";\n        width: 6px;\n        height: 6px;\n        border-radius: 50%;\n        background-color: #fff;\n      }\n    }\n    .title {\n      font-size: 20px;\n    }\n\n    .linkList {\n      margin: 7px 0 0 20px;\n      height: 100%;\n      .item {\n        float: left;\n        .link {\n          color: #666;\n        }\n        .line {\n          padding: 0px 12px;\n          color: #ccc;\n        }\n      }\n    }\n  }\n  .right {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .anticon.anticon-caret-right {\n      padding: 0px 3px;\n      color: var(--color-deep);\n    }\n  }\n']))),o=e(269),s=e(4),l=function(n){var t=n.title,e=n.linkList,i=n.moreLink,c=n.jumpRouter;return Object(s.jsxs)(a,{className:"sprite_02",children:[Object(s.jsxs)("div",{className:"left",children:[Object(s.jsx)("div",{className:"circle theme_transition"}),Object(s.jsx)("h2",{className:"title",children:t}),Object(s.jsx)("ul",{className:"linkList",children:e.map((function(n,t){return Object(s.jsxs)("li",{className:"item",children:[Object(s.jsx)("span",{className:"link",onClick:function(){return c(n)},children:n}),Object(s.jsx)("span",{className:"line",children:"|"})]},n)}))})]}),Object(s.jsxs)("div",{className:"right",children:[Object(s.jsx)("a",{href:i,onClick:function(n){return n.preventDefault()},children:"\u66f4\u591a"}),Object(s.jsx)(o.a,{})]})]})};l.defaultProps={linkList:[]};t.a=Object(c.memo)(l)},277:function(n,t,e){"use strict";var i,c=e(0),r=e(38),a=e(19),o=e(20).a.div(i||(i=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  .top {\n    width: ",";\n    height: ",";\n    position: relative;\n\n    img {\n      width: ",";\n      height: ",";\n    }\n\n    .mask {\n      background-position: ",";\n    }\n  }\n  .bottom {\n    flex: 1;\n    font-size: 12px;\n    .albumName {\n      display: block;\n      padding: 5px 0px 0px 0px;\n      width: 100px;\n    }\n\n    .artist {\n      .name {\n        display: block;\n        color: #666;\n        width: 115px;\n      }\n    }\n  }\n"])),(function(n){return n.width+"px"}),(function(n){return n.imgSize+"px"}),(function(n){return n.imgSize+"px"}),(function(n){return n.imgSize+"px"}),(function(n){return n.bgP})),s=e(4),l=function(n){var t=n.width,e=void 0===t?118:t,i=n.imgSize,c=void 0===i?100:i,a=n.bgP,l=void 0===a?"0 -570px":a,p=n.name,d=n.picUrl,b=n.artist;return Object(s.jsxs)(o,{width:e,imgSize:c,bgP:l,children:[Object(s.jsxs)("div",{className:"top",children:[Object(s.jsx)("img",{src:Object(r.b)(d,"".concat(c,"x").concat(c)),alt:p}),Object(s.jsx)("a",{className:"mask image_cover",href:"/#",onClick:function(n){return n.preventDefault()},children:""})]}),Object(s.jsxs)("div",{className:"bottom",children:[Object(s.jsx)("span",{className:"albumName text-nowrap",children:p}),Object(s.jsx)("div",{className:"artist",children:Object(s.jsx)("span",{className:"name text-nowrap",children:b.name})})]})]})};t.a=Object(c.memo)(l)},278:function(n,t,e){"use strict";var i,c=e(0),r=e(17),a=e(19),o=e(20).a.div(i||(i=Object(a.a)(["\n  flex: 1;\n  /* border: 2px solid; */\n  .top {\n    height: 100px;\n    padding: 20px 0 0 20px;\n    display: flex;\n\n    .left {\n      position: relative;\n      width: 80px;\n      height: 80px;\n      img {\n        width: 100%;\n      }\n      .mask {\n        background-position: -145px -57px;\n      }\n    }\n\n    .right {\n      width: 116px;\n      margin: 6px 0 0 10px;\n\n      .title {\n        font-weight: bold;\n      }\n      .icons {\n        .btn {\n          width: 22px;\n          height: 22px;\n          margin-right: 10px;\n          cursor: pointer;\n        }\n        .play {\n          background-position: -267px -205px;\n          &:hover {\n            background-position: -267px -235px;\n          }\n        }\n        .favor {\n          background-position: -300px -205px;\n          &:hover {\n            background-position: -300px -235px;\n          }\n        }\n      }\n    }\n  }\n\n  .middle {\n    margin-top: 20px;\n    /* height: 319px; */\n    .item {\n      height: 32px;\n      line-height: 32px;\n      display: flex;\n      .rank {\n        width: 50px;\n        position: relative;\n        span {\n          position: absolute;\n          right: 0px;\n          width: 35px;\n          font-size: 16px;\n          text-align: center;\n        }\n      }\n      .info {\n        flex: 1;\n        width: 170px;\n        display: flex;\n\n        span {\n          flex: 1;\n          display: block;\n        }\n        .operations {\n          display: none;\n          width: 82px;\n          margin-right: 10px;\n\n          .btn {\n            width: 17px;\n            height: 17px;\n            margin-left: 8px;\n            cursor: pointer;\n          }\n          .play {\n            background-position: -267px -268px;\n            &:hover {\n              background-position: -267px -288px;\n            }\n          }\n          .addto {\n            top: 2px;\n            background-position: 0 -700px;\n            &:hover {\n              background-position: -22px -700px;\n            }\n            position: relative;\n          }\n\n          .favor {\n            background-position: -297px -268px;\n            &:hover {\n              background-position: -297px -288px;\n            }\n          }\n        }\n        &:hover .operations {\n          display: flex;\n          justify-content: space-around;\n          align-items: center;\n        }\n      }\n    }\n    .item:nth-of-type(-n + 3) > .rank {\n      color: #c10d0c;\n    }\n  }\n  .bottom {\n    width: 100%;\n    height: 32px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    a {\n      color: black;\n      margin-right: 30px;\n    }\n  }\n"]))),s=e(44),l=e(4),p=function(n){var t=n.name,e=n.coverImgUrl,i=n.tracks,c=void 0===i?[]:i,a=n.nums,p=void 0===a?10:a,d=Object(r.c)();return Object(l.jsxs)(o,{children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("img",{src:e,alt:t}),Object(l.jsx)("a",{href:"./#",className:"mask image_cover",onClick:function(n){return n.preventDefault()},children:""})]}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("h3",{className:"title",children:t}),Object(l.jsxs)("div",{className:"icons",children:[Object(l.jsx)("button",{className:"btn play sprite_02"}),Object(l.jsx)("button",{className:"btn favor sprite_02"})]})]})]}),Object(l.jsx)("div",{className:"middle",children:c.slice(0,p).map((function(n,t){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"rank",children:Object(l.jsx)("span",{children:t+1})}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("span",{className:"link text-nowrap",children:n.name}),Object(l.jsxs)("div",{className:"operations",children:[Object(l.jsx)("button",{className:"btn sprite_02 play",onClick:function(){return t=n.id,void d(Object(s.e)(t));var t}}),Object(l.jsx)("button",{className:"btn sprite_icon2 addto"}),Object(l.jsx)("button",{className:"btn sprite_02 favor"})]})]})]},n.id)}))}),Object(l.jsx)("div",{className:"bottom",children:Object(l.jsx)("a",{href:"./#",onClick:function(n){return n.preventDefault()},children:"\u67e5\u770b\u5168\u90e8 >"})})]})};t.a=Object(c.memo)(p)},279:function(n,t,e){"use strict";var i,c=e(0),r=e(38),a=e(19),o=e(20).a.div(i||(i=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  .top {\n    width: ",";\n    height: ",";\n    position: relative;\n    background-color: slateblue;\n    background: url(",") no-repeat 0px 0px /\n      ",";\n\n    .mask {\n      display: block;\n      width: 100%;\n      height: 100%;\n      background-position: 0 0;\n    }\n    .info {\n      width: 100%;\n      height: 27px;\n      position: absolute;\n      left: 0px;\n      bottom: 0px;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      background-position: 0 -537px;\n      padding: 0px 10px;\n      color: #ccc;\n\n      .headset {\n        display: inline-block;\n        margin-right: 5px;\n        width: 14px;\n        height: 11px;\n        background-position: 0 -24px;\n      }\n      .play {\n        width: 16px;\n        height: 17px;\n        background-position: 0 0;\n        cursor: pointer;\n        &:hover {\n          background-position: 0 -60px;\n        }\n      }\n    }\n  }\n  .bottom {\n    flex: 1;\n    font-size: 14px;\n    .name {\n      display: block;\n      padding: 8px 0px 2px 0px;\n    }\n    .cover-source {\n      font-size: 12px;\n      .preText {\n        color: #999;\n      }\n      .sourceText {\n        color: #666;\n      }\n    }\n  }\n"])),(function(n){return n.width+"px"}),(function(n){return n.width+"px"}),(function(n){return n.picUrl}),(function(n){return n.width+"px"})),s=e(4),l=function(n){var t=n.width,e=void 0===t?140:t,i=n.imgSize,c=void 0===i?140:i,a=n.name,l=n.playCount,p=n.picUrl,d=n.copywriter,b=n.creator;return Object(s.jsxs)(o,{picUrl:Object(r.b)(p,"".concat(c,"x").concat(c)),width:e,children:[Object(s.jsxs)("div",{className:"top",children:[Object(s.jsx)("a",{className:"mask sprite_covor",href:"./#",onClick:function(n){n.preventDefault()},children:""}),Object(s.jsxs)("div",{className:"info sprite_covor",children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("i",{className:"sprite_icon headset"}),Object(r.d)(l)]}),Object(s.jsx)("i",{className:"sprite_icon play"})]})]}),Object(s.jsxs)("div",{className:"bottom",children:[Object(s.jsx)("span",{className:"name",children:a}),Object(s.jsxs)("div",{className:"cover-source",children:[Object(s.jsx)("span",{className:"preText",children:" by "}),function(){var n=b?b.nickname:null;return Object(s.jsx)("span",{className:"sourceText",children:d||n})}()]})]})]})};t.a=Object(c.memo)(l)},282:function(n,t,e){"use strict";e.r(t),t.default=e.p+"static/media/download.3d89cf30.png"},283:function(n,t,e){"use strict";e.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAA/CAYAAABn0wH+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANFJREFUeNrs2bsNwDAIBNAkM3n/CbyT06ZIw30QxTHBk7Ew4Pucc02L5xoYQQUVVFBBBYXFnoba005qT0vfF7QmoMogNwoCOVEwyIWiQA4UDVKjJCAlSgZSoaQgBUoOYlEWEIOygVCUFYSg7KAqqgVUQbWBKqiFNmzu9LXBqhe9BYaUBDsMLZ5WGPPM2GDsg2yBKVoXOUzV5ElhynZYBlMPDhKYY8SiYa5hlII5x3YY5l5wQLCOVVAZ1rU0W5PSB8HufEIGFVRQQQUVVFC/8QowABHcKUOeGkoJAAAAAElFTkSuQmCC"},284:function(n,t,e){"use strict";e.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAA/CAYAAABn0wH+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANJJREFUeNrs2dEJQzEMQ9H3OlP3nyA7pfS//bCs6wYqTXCIwRbk3ntfp+VxHZigggoqqKD+EbVOfal16vjWSajnFKz6UiMwZXw4TF0JKKyzpzBYd3kiMMdGt8NcZ8YKc94+G8x9kC0woiW0YVR1acHIPiXD6JInwSaaZxk2VYdLsCnU+gL8GaoEmkCVQTRKApEoGUShWiAC1Qa5URaQE2UDuVBWkANlB3VRCKiDwkAqCgUpKBxURY2A1PGhIAWFg9658wkZVFBBBRVUUEF9zEuAAQA4DClDKiiSxAAAAABJRU5ErkJggg=="},293:function(n,t,e){"use strict";e.r(t),t.default="data:image/png;base64,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"},294:function(n,t,e){"use strict";e.r(t);var i,c,r,a,o=e(0),s=e(31),l=e(17),p=e(271),d=e(295),b=e(19),u=e(20),x="270px",m=u.a.div(i||(i=Object(b.a)(["\n  height: ",";\n  background: url(",") center center/6000px;\n  .banner {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: ",";\n    position: relative;\n  }\n"])),x,(function(n){return n.bgBlurImg}),x),j=u.a.div(c||(c=Object(b.a)(["\n  width: 730px;\n  .banner-item {\n    & > img {\n      width: 100%;\n    }\n  }\n"]))),h=u.a.a.attrs({href:"https://music.163.com/#/download",target:"_blank"})(r||(r=Object(b.a)(["\n  width: 250px;\n  height: ",";\n  position: relative;\n  background: url(",");\n  p {\n    width: 100%;\n    color: #8d8d8d;\n    text-align: center;\n    position: absolute;\n    left: 0px;\n    bottom: 5px;\n    margin: 0px;\n  }\n"])),x,e(282).default),f=e(283).default,g=e(284).default,O=u.a.div(a||(a=Object(b.a)(["\n  .point {\n    width: 37px;\n    height: 63px;\n    cursor: pointer;\n    position: absolute;\n    top: 100px;\n    background-color: yellowgreen;\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.2);\n    }\n  }\n\n  .prev_point {\n    left: -68px;\n    background: url(",");\n  }\n  .next_point {\n    right: -68px;\n    background: url(",");\n  }\n"])),f,g),k=e(4);function v(n){var t=Object(o.useState)(0),e=Object(s.a)(t,2),i=e[0],c=e[1],r=Object(l.c)(),a=Object(l.d)((function(n){return{topBanners:n.getIn(["recommend","topBanners"])}})).topBanners,b=Object(o.useRef)();Object(o.useEffect)((function(){r(Object(p.d)())}),[r]);var u=Object(o.useCallback)((function(n,t){c(t)}),[]),x=a[i]&&a[i].imageUrl+"?imageView&blur=40x20";return Object(k.jsx)(m,{bgBlurImg:x,children:Object(k.jsxs)("div",{className:"banner wrap-v2",children:[Object(k.jsx)(j,{children:Object(k.jsx)(d.a,{effect:"fade",autoplay:!0,beforeChange:u,ref:b,children:a.map((function(n){return Object(k.jsx)("div",{className:"banner-item",children:Object(k.jsx)("img",{src:n.imageUrl,alt:n.typeTitle})},n.targetId)}))})}),Object(k.jsx)(h,{children:Object(k.jsx)("p",{children:"PC \u5b89\u5353 iPhone WP iPad Mac \u516d\u5927\u5ba2\u6237\u7aef"})}),Object(k.jsxs)(O,{children:[Object(k.jsx)("div",{className:"point prev_point",onClick:function(){return b.current.prev()}}),Object(k.jsx)("div",{className:"point next_point",onClick:function(){return b.current.next()}})]})]})})}var J,W,w,S,V,N,q,y,Y,A,Z=Object(o.memo)(v),U=e(37),K=e(13),R=e(274),E=e(279),X=u.a.div(J||(J=Object(b.a)(["\n  .content {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    flex-wrap: wrap;\n\n    .songs {\n      width: ",";\n      margin-top: 30px;\n      &:last-of-type {\n        margin-bottom: 30px;\n      }\n    }\n  }\n"])),(function(n){return n.width+"px"})),F=e(273),C=function(n){var t=Object(l.d)((function(n){return{hotRecommends:n.getIn(["recommend","hotRecommends"])}}),l.b).hotRecommends,e=Object(l.c)();Object(o.useEffect)((function(){e(Object(p.a)(F.a))}),[e]);var i=Object(K.g)(),c={title:"\u70ed\u95e8\u63a8\u8350",linkList:["\u534e\u8bed","\u6d41\u884c","\u6447\u6eda","\u6c11\u8c23","\u7535\u5b50"],moreLink:"/discover/songs",jumpRouter:Object(o.useCallback)((function(n){i.push({pathname:"/discover/songs",cat:n})}),[i])},r={width:140,imgSize:140};return Object(k.jsxs)(X,Object(U.a)(Object(U.a)({},r),{},{children:[Object(k.jsx)(R.a,Object(U.a)({},c)),Object(k.jsx)("div",{className:"content",children:t.map((function(n,t){var e=n.name,i=n.playCount,c=n.picUrl,a=n.copywriter,o=n.creator,s={width:r.width,imgSize:r.imgSize,name:e,playCount:i,picUrl:c,copywriter:a,creator:o};return Object(k.jsx)("div",{className:"songs",children:Object(k.jsx)(E.a,Object(U.a)({},s))},n.id)}))})]}))},B=Object(o.memo)(C),G=e(277),L=u.a.div(W||(W=Object(b.a)(["\n  width: 100%;\n  .content {\n    width: 100%;\n    height: 180px;\n    margin: 20px auto;\n    border: 1px solid #d3d3d3;\n    position: relative;\n    background: #f5f5f5;\n\n    .card {\n      width: 100%;\n      height: 180px;\n      /* background-color: skyblue; */\n    }\n    .ant-carousel {\n      margin: 0px 18px;\n    }\n    .cardContent {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n\n      .item {\n        margin-top: 30px;\n        width: ",";\n        &:first-of-type {\n          margin-left: 10px;\n        }\n      }\n    }\n  }\n  .leftPoint,\n  .rightPoint {\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    i {\n      width: 17px;\n      height: 17px;\n      margin-top: -25px;\n    }\n  }\n  .leftPoint {\n    left: 0px;\n    cursor: pointer;\n    i {\n      margin-left: 5px;\n      background-position: -260px -75px;\n    }\n  }\n  .rightPoint {\n    right: 0px;\n    cursor: pointer;\n    i {\n      margin-right: 5px;\n      background-position: -300px -75px;\n    }\n  }\n"])),(function(n){return n.width+"px"})),T=function(n){for(var t=Object(l.d)((function(n){return{newAlbums:n.getIn(["recommend","newAlbums"])}}),l.b).newAlbums,e=void 0===t?[]:t,i=[];e.length;)e.length>=F.c?i.push(e.splice(0,F.c)):i.push(e.splice(0,e.length));var c=Object(l.c)();Object(o.useEffect)((function(){c(Object(p.b)(F.b))}),[c]);var r=Object(o.useRef)(),a={width:118,imgSize:100},s=function(n){return Object(k.jsx)("div",{className:"cardContent",children:n.map((function(n,t){var e=n.name,i=n.picUrl,c=n.artist,r={width:a.width,imgSize:a.imgSize,name:e,picUrl:i,artist:c};return Object(k.jsx)("div",{className:"item",children:Object(k.jsx)(G.a,Object(U.a)({},r))},n.id)}))})};return Object(k.jsxs)(L,Object(U.a)(Object(U.a)({},a),{},{children:[Object(k.jsx)(R.a,Object(U.a)({},{title:"\u65b0\u789f\u4e0a\u67b6",moreLink:"/discover/songs"})),Object(k.jsxs)("div",{className:"content",children:[Object(k.jsx)(d.a,{dots:!1,ref:r,children:i.map((function(n,t){return Object(k.jsx)("div",{className:"card",children:s(n)},n[0].id)}))}),Object(k.jsx)("div",{className:"leftPoint ",onClick:function(){return r.current.prev()},children:Object(k.jsx)("i",{className:"sprite_02"})}),Object(k.jsx)("div",{className:"rightPoint sprite_02",onClick:function(){return r.current.next()},children:Object(k.jsx)("i",{className:"sprite_02"})})]})]}))},P=Object(o.memo)(T),z=e(293).default,D=u.a.div(w||(w=Object(b.a)(["\n  .content {\n    margin-top: 20px;\n    height: 472px;\n    display: flex;\n    background-image: url(",");\n  }\n"])),z),Q=e(278),I=function(n){var t=Object(l.d)((function(n){return{topUpList:n.getIn(["recommend","topUpList"]),topNewList:n.getIn(["recommend","topNewList"]),topOriginList:n.getIn(["recommend","topOriginList"])}}),l.b),e=t.topUpList,i=t.topNewList,c=t.topOriginList,r=Object(l.c)();return Object(o.useEffect)((function(){r(Object(p.e)(0)),r(Object(p.e)(2)),r(Object(p.e)(3))}),[r]),Object(k.jsxs)(D,{children:[Object(k.jsx)(R.a,Object(U.a)({},{title:"\u699c\u5355",moreLink:"/discover/songs"})),Object(k.jsxs)("div",{className:"content",children:[Object(k.jsx)(Q.a,Object(U.a)({},e)),Object(k.jsx)(Q.a,Object(U.a)({},i)),Object(k.jsx)(Q.a,Object(U.a)({},c))]})]})},H=Object(o.memo)(I),M=u.a.div(S||(S=Object(b.a)(["\n  height: 126px;\n  background-position: -2px 0;\n\n  p {\n    width: 205px;\n    margin: 0 auto;\n    padding: 16px 0;\n    line-height: 22px;\n    color: #666;\n  }\n\n  a {\n    display: block;\n    margin: 0 auto;\n    width: 100px;\n    height: 31px;\n    line-height: 31px;\n    color: #fff;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: 0 1px 0 #8a060b;\n    background-position: 0 -195px;\n    &:hover {\n      background-position: -110px -195px;\n    }\n  }\n"]))),_=Object(o.memo)((function(){return Object(k.jsxs)(M,{className:"sprite_02",children:[Object(k.jsx)("p",{children:"\u767b\u5f55\u7f51\u6613\u4e91\u97f3\u4e50\uff0c\u53ef\u4ee5\u4eab\u53d7\u65e0\u9650\u6536\u85cf\u7684\u4e50\u8da3\uff0c\u5e76\u4e14\u65e0\u9650\u540c\u6b65\u5230\u624b\u673a"}),Object(k.jsx)("a",{href:"./#",className:"sprite_02",onClick:function(n){return n.preventDefault()},children:"\u7528\u6237\u767b\u5f55"})]})})),$=u.a.div(V||(V=Object(b.a)(["\n  padding: 15px;\n  .content {\n    .item {\n      margin-top: 15px;\n      display: flex;\n      border: 1px solid #e9e9e9;\n      background-color: #fafafa;\n      text-decoration: none;\n      &:hover {\n        background-color: #f4f4f4;\n      }\n      img {\n        width: 62px;\n        height: 62px;\n      }\n      .info {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        .name,\n        .des {\n          margin-left: 13px;\n        }\n        .name {\n          font-size: 14px;\n          color: #333;\n          font-weight: bold;\n        }\n        .des {\n          font-size: 12px;\n          color: #666;\n          margin-top: -6px;\n        }\n      }\n    }\n  }\n  .apply-for {\n    margin-top: 20px;\n    a {\n      display: flex;\n      height: 31px;\n      justify-content: center;\n      align-items: center;\n      font-weight: bold;\n      text-decoration: none;\n      border: 2px solid #d1d0d0;\n      border-radius: 4px;\n      background-image: linear-gradient(to bottom, #fefefe 20%, #f2f2f2);\n      &:hover {\n        border-color: #d9d8d8;\n        background-image: linear-gradient(to bottom, #fff 50%, #f8f8f8);\n      }\n    }\n  }\n"]))),nn=e(272),tn=function(n){var t=Object(l.d)((function(n){return n.getIn(["recommend","settleSingerList"])}),l.b),e=Object(l.c)();Object(o.useEffect)((function(){e(Object(p.c)(F.d))}),[e]);return Object(k.jsxs)($,{children:[Object(k.jsx)(nn.a,Object(U.a)({},{title:"\u5165\u9a7b\u6b4c\u624b",moreText:"\u67e5\u770b\u5168\u90e8 >"})),Object(k.jsx)("div",{className:"content",children:t.map((function(n,t){return Object(k.jsxs)("a",{href:"./#",className:"item",onClick:function(n){return n.preventDefault()},children:[Object(k.jsx)("img",{src:n.img1v1Url,alt:n.name}),Object(k.jsxs)("div",{className:"info",children:[Object(k.jsx)("span",{className:"name text-nowrap",children:n.name}),Object(k.jsx)("span",{className:"des text-nowrap",children:n.alias.length?n.alias.join("/"):"Ashuntefannao\ud83d\ude00"})]})]},n.id)}))}),Object(k.jsx)("div",{className:"apply-for",children:Object(k.jsx)("a",{href:"./#",onClick:function(n){return n.preventDefault()},children:"\u7533\u8bf7\u6210\u4e3a\u7f51\u6613\u97f3\u4e50\u4eba"})})]})},en=Object(o.memo)(tn),cn=u.a.div(N||(N=Object(b.a)(["\n  padding: 15px;\n  .content {\n    .item {\n      margin-top: 13px;\n      display: flex;\n      img {\n        width: 40px;\n        height: 40px;\n      }\n      .info {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        font-size: 12px;\n        .name,\n        .des {\n          display: inline-block;\n          margin-left: 8px;\n          width: 160px;\n        }\n        .des .name {\n        }\n        .des {\n          color: #666;\n          /* margin-top: -6px; */\n        }\n      }\n    }\n  }\n"]))),rn=e(26),an=function(n){return Object(k.jsxs)(cn,{children:[Object(k.jsx)(nn.a,Object(U.a)({},{title:"\u70ed\u95e8\u4e3b\u64ad"})),Object(k.jsx)("div",{className:"content",children:rn.h.map((function(n,t){return Object(k.jsxs)("div",{href:"/#",className:"item",children:[Object(k.jsx)("img",{src:n.picUrl,alt:n.name}),Object(k.jsxs)("div",{className:"info",children:[Object(k.jsx)("span",{className:"name text-nowrap link",children:n.name}),Object(k.jsx)("span",{className:"des text-nowrap",children:n.position})]})]},n.id)}))})]})},on=Object(o.memo)(an),sn=u.a.div(q||(q=Object(b.a)([""]))),ln=u.a.div(y||(y=Object(b.a)(["\n  background-color: #fff;\n  display: flex;\n  flex-direction: row;\n"]))),pn=u.a.div(Y||(Y=Object(b.a)(["\n  /* flex: 1; */\n  width: 730px;\n  padding: 20px 20px 40px;\n"]))),dn=u.a.div(A||(A=Object(b.a)(["\n  flex: 1;\n  border-left: 2px solid #e1e1e1;\n  border-right: 1px solid #d3d3d3;\n"]))),bn=function(n){return Object(k.jsxs)(sn,{id:"recommend",children:[Object(k.jsx)(Z,{}),Object(k.jsxs)(ln,{className:"wrap-v2",children:[Object(k.jsxs)(pn,{children:[Object(k.jsx)(B,{}),Object(k.jsx)(P,{}),Object(k.jsx)(H,{})]}),Object(k.jsxs)(dn,{children:[Object(k.jsx)(_,{}),Object(k.jsx)(en,{}),Object(k.jsx)(on,{})]})]})]})};t.default=Object(o.memo)(bn)}}]);
//# sourceMappingURL=4.cf3fee2e.chunk.js.map