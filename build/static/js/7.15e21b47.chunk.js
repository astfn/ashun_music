(this.webpackJsonpashun_music=this.webpackJsonpashun_music||[]).push([[7],{270:function(n,t,e){"use strict";e.d(t,"d",(function(){return r})),e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return o})),e.d(t,"e",(function(){return s})),e.d(t,"c",(function(){return a}));var i=e(65);function r(){return Object(i.a)({url:"/banner"})}function c(n){return Object(i.a)({url:"/personalized",params:{limit:n}})}function o(n){return Object(i.a)({url:"/top/album",params:{limit:n}})}function s(n){return Object(i.a)({url:"/top/list",params:{idx:n}})}function a(n,t){return Object(i.a)({url:"/artist/list",params:{limit:n,cat:t}})}},271:function(n,t,e){"use strict";e.d(t,"d",(function(){return c})),e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return s})),e.d(t,"e",(function(){return a})),e.d(t,"c",(function(){return p}));var i=e(51),r=e(270);function c(){return function(n,t){Object(r.d)().then((function(t){var e;n((e=t.banners,{type:i.d,topBanners:e}))}),(function(n){return n}))}}function o(n){return function(t,e){Object(r.a)(n).then((function(n){var e;t((e=n.result,{type:i.a,hotRecommends:e}))}),(function(n){return n}))}}function s(n){return function(t,e){Object(r.b)(n).then((function(n){var e;t((e=n.albums,{type:i.b,newAlbums:e}))}),(function(n){return n}))}}function a(n){return function(t,e){Object(r.e)(n).then((function(e){var r,c,o,s=e.playlist;switch(n){case 0:t((o=s,{type:i.e,topNewList:o}));break;case 2:t((c=s,{type:i.f,topOriginList:c}));break;case 3:t((r=s,{type:i.g,topUpList:r}));break;default:console.log("\u83b7\u53d6\u699c\u5355\u5931\u8d25\uff1a\u6ca1\u6709\u5339\u914d\u7684idx")}}),(function(n){return n}))}}function p(n){return function(t,e){Object(r.c)(n,5001).then((function(n){var e;t((e=n.artists,{type:i.c,settleSingerList:e}))}),(function(n){return n}))}}},278:function(n,t,e){"use strict";var i,r=e(0),c=e(17),o=e(19),s=e(20).a.div(i||(i=Object(o.a)(["\n  flex: 1;\n  /* border: 2px solid; */\n  .top {\n    height: 100px;\n    padding: 20px 0 0 20px;\n    display: flex;\n\n    .left {\n      position: relative;\n      width: 80px;\n      height: 80px;\n      img {\n        width: 100%;\n      }\n      .mask {\n        background-position: -145px -57px;\n      }\n    }\n\n    .right {\n      width: 116px;\n      margin: 6px 0 0 10px;\n\n      .title {\n        font-weight: bold;\n      }\n      .icons {\n        .btn {\n          width: 22px;\n          height: 22px;\n          margin-right: 10px;\n          cursor: pointer;\n        }\n        .play {\n          background-position: -267px -205px;\n          &:hover {\n            background-position: -267px -235px;\n          }\n        }\n        .favor {\n          background-position: -300px -205px;\n          &:hover {\n            background-position: -300px -235px;\n          }\n        }\n      }\n    }\n  }\n\n  .middle {\n    margin-top: 20px;\n    /* height: 319px; */\n    .item {\n      height: 32px;\n      line-height: 32px;\n      display: flex;\n      .rank {\n        width: 50px;\n        position: relative;\n        span {\n          position: absolute;\n          right: 0px;\n          width: 35px;\n          font-size: 16px;\n          text-align: center;\n        }\n      }\n      .info {\n        flex: 1;\n        width: 170px;\n        display: flex;\n\n        span {\n          flex: 1;\n          display: block;\n        }\n        .operations {\n          display: none;\n          width: 82px;\n          margin-right: 10px;\n\n          .btn {\n            width: 17px;\n            height: 17px;\n            margin-left: 8px;\n            cursor: pointer;\n          }\n          .play {\n            background-position: -267px -268px;\n            &:hover {\n              background-position: -267px -288px;\n            }\n          }\n          .addto {\n            top: 2px;\n            background-position: 0 -700px;\n            &:hover {\n              background-position: -22px -700px;\n            }\n            position: relative;\n          }\n\n          .favor {\n            background-position: -297px -268px;\n            &:hover {\n              background-position: -297px -288px;\n            }\n          }\n        }\n        &:hover .operations {\n          display: flex;\n          justify-content: space-around;\n          align-items: center;\n        }\n      }\n    }\n    .item:nth-of-type(-n + 3) > .rank {\n      color: #c10d0c;\n    }\n  }\n  .bottom {\n    width: 100%;\n    height: 32px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    a {\n      color: black;\n      margin-right: 30px;\n    }\n  }\n"]))),a=e(44),p=e(4),u=function(n){var t=n.name,e=n.coverImgUrl,i=n.tracks,r=void 0===i?[]:i,o=n.nums,u=void 0===o?10:o,d=Object(c.c)();return Object(p.jsxs)(s,{children:[Object(p.jsxs)("div",{className:"top",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("img",{src:e,alt:t}),Object(p.jsx)("a",{href:"./#",className:"mask image_cover",onClick:function(n){return n.preventDefault()},children:""})]}),Object(p.jsxs)("div",{className:"right",children:[Object(p.jsx)("h3",{className:"title",children:t}),Object(p.jsxs)("div",{className:"icons",children:[Object(p.jsx)("button",{className:"btn play sprite_02"}),Object(p.jsx)("button",{className:"btn favor sprite_02"})]})]})]}),Object(p.jsx)("div",{className:"middle",children:r.slice(0,u).map((function(n,t){return Object(p.jsxs)("div",{className:"item",children:[Object(p.jsx)("div",{className:"rank",children:Object(p.jsx)("span",{children:t+1})}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsx)("span",{className:"link text-nowrap",children:n.name}),Object(p.jsxs)("div",{className:"operations",children:[Object(p.jsx)("button",{className:"btn sprite_02 play",onClick:function(){return t=n.id,void d(Object(a.e)(t));var t}}),Object(p.jsx)("button",{className:"btn sprite_icon2 addto"}),Object(p.jsx)("button",{className:"btn sprite_02 favor"})]})]})]},n.id)}))}),Object(p.jsx)("div",{className:"bottom",children:Object(p.jsx)("a",{href:"./#",onClick:function(n){return n.preventDefault()},children:"\u67e5\u770b\u5168\u90e8 >"})})]})};t.a=Object(r.memo)(u)},306:function(n,t,e){"use strict";e.r(t);var i,r,c=e(37),o=e(0),s=e(17),a=e(271),p=e(19),u=e(20),d=u.a.div(i||(i=Object(p.a)(["\n  border-left: 2px solid #e1e1e1;\n  border-right: 1px solid #d3d3d3;\n  background-color: #fff;\n"]))),l=u.a.div(r||(r=Object(p.a)(["\n  padding: 30px 40px;\n  display: flex;\n"]))),b=e(278),x=e(4),j=function(n){var t=Object(s.d)((function(n){return{topUpList:n.getIn(["recommend","topUpList"]),topNewList:n.getIn(["recommend","topNewList"]),topOriginList:n.getIn(["recommend","topOriginList"])}}),s.b),e=t.topUpList,i=t.topNewList,r=t.topOriginList,p=Object(s.c)();return Object(o.useEffect)((function(){p(Object(a.e)(0)),p(Object(a.e)(2)),p(Object(a.e)(3))}),[p]),Object(x.jsx)(d,{className:"wrap-v1",children:Object(x.jsxs)(l,{children:[Object(x.jsx)(b.a,Object(c.a)(Object(c.a)({},e),{},{nums:100})),Object(x.jsx)(b.a,Object(c.a)(Object(c.a)({},i),{},{nums:100})),Object(x.jsx)(b.a,Object(c.a)(Object(c.a)({},r),{},{nums:100}))]})})};t.default=Object(o.memo)(j)}}]);
//# sourceMappingURL=7.15e21b47.chunk.js.map