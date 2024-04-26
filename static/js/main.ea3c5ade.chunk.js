(this.webpackJsonplobster=this.webpackJsonplobster||[]).push([[0],{18:function(t,e,n){t.exports=n(30)},23:function(t,e,n){},24:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),r=n(13),o=n.n(r),s=(n(23),n(3)),c=n(4),u=n(6),h=n(5),l=n(8),d=n(7),f=(n(24),n(1)),p=n(2);function g(){var t=Object(f.a)(["\n  width: 100%;\n  margin: 0;\n  text-align: center;\n  font-size: 3vmin;\n"]);return g=function(){return t},t}function m(){var t=Object(f.a)(["\n  font-size: ",";\n"]);return m=function(){return t},t}function v(){var t=Object(f.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: ","px;\n"]);return v=function(){return t},t}var b=p.a.div(v(),(function(t){return t.height})),w=p.a.p(m(),(function(t){return t.fontSize})),y=p.a.p(g()),j=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(h.a)(e).call(this,t))).canvas=document.createElement("canvas"),n.adjustSizes=n.adjustSizes.bind(Object(l.a)(n)),window.addEventListener("resize",n.adjustSizes,!1),n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"getMaxSizes",value:function(){var t=document.body.getBoundingClientRect(),e=.96*t.width,n=this.getFullHeight(t);return{maxWidth:e,maxHeight:.8699*n,fullHeight:n}}},{key:"getFullHeight",value:function(t){return t.width>t.height&&!this.props.showImage?t.height:.7*t.height>t.width?t.height-1.1*t.width:t.height-Math.min(t.width,.8*t.height)}},{key:"adjustSizes",value:function(){this.sizes=this.getMaxSizes()}},{key:"getOptimumFontSize",value:function(t,e){var n,i,a=this.canvas.getContext("2d"),r=e?.7*this.sizes.fullHeight:this.sizes.maxHeight,o=i=r,s=16;do{a.font="".concat(o,"px sans-serif"),s-=1,i/=2,(n=a.measureText(t).width)>this.sizes.maxWidth?o-=i:o===r?i=0:o+=i}while(s&&(i>.01||n>this.sizes.maxWidth));return o+"px"}},{key:"render",value:function(){this.adjustSizes();var t=this.props.item.text,e=this.props.item.dates,n=this.getOptimumFontSize(t,e),i=this.sizes.fullHeight;return a.a.createElement(b,{height:i},a.a.createElement(w,{style:{fontSize:n}},t),a.a.createElement(y,null,e))}}]),e}(i.Component);function k(){var t=Object(f.a)(["\n  position: absolute;\n  left: 0;\n  z-index: 0;\n  width: 100%;\n  pointer-events: none;\n  opacity: ","\n\n"]);return k=function(){return t},t}var O=p.a.img(k(),(function(t){return t.dim?.333:1})),x=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(h.a)(e).call(this,t))).folder="img/",n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.image;return t&&"XXX"!==t.src?a.a.createElement(O,{src:this.folder+t.src,alt:this.props.text,dim:this.props.dim}):""}}]),e}(i.Component);function z(){var t=Object(f.a)(["\n  width: 100%;\n  z-index: 1;\n\n  font-size: 4vw;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  overflow-y: auto;\n\n  @media (min-aspect-ratio: 8/10) {\n    font-size: 3.2vh;\n  }\n\n  & li {\n    margin: 0.33em 0;\n  }\n\n  & a {\n    color: #fff;\n  }\n"]);return z=function(){return t},t}function E(){var t=Object(f.a)(["\n  height: calc(100% - 10vmin);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n\n  @media (max-aspect-ratio: 7/10) {\n    height: 100%;\n  }\n\n"]);return E=function(){return t},t}function I(){var t=Object(f.a)(["\n  position: relative;\n  width: ","px;\n  height: ","px;\n  padding-bottom: ","px;\n\n/*  @media (min-aspect-ratio: 1/1) {\n    height: 0\n    display: none;\n  } */\n"]);return I=function(){return t},t}var S=p.a.div(I(),(function(t){return t.size}),(function(t){return t.size}),(function(t){return t.padding})),C=p.a.div(E()),M=p.a.ul(z()),B=function(t){function e(t){var n;Object(s.a)(this,e),(n=Object(u.a)(this,Object(h.a)(e).call(this,t))).adjustSize=n.adjustSize.bind(Object(l.a)(n)),window.addEventListener("resize",n.adjustSize,!1);var i=n.getSizes();return n.state=i,n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.adjustSize()}},{key:"adjustSize",value:function(){var t=this.getSizes();this.setState(t)}},{key:"getSizes",value:function(){var t=document.body.getBoundingClientRect(),e=t.width>t.height;return{size:Math.min(t.width,.8*t.height),padding:.1*t.width,landscape:e}}},{key:"getCredits",value:function(){var t=this.props.item.image;if(!t||"XXX"===t.source)return"";var e=[];return t.author&&e.push(a.a.createElement("li",{key:"author"},"Image by ",t.author)),e.push(a.a.createElement("li",{key:"source"},a.a.createElement("a",{href:t.source,target:"credits"},"Original image"))),t.licenceURL?e.push(a.a.createElement("li",{key:"licence"},a.a.createElement("a",{href:t.licenceURL},t.licence))):e.push(a.a.createElement("li",{key:"licence"},t.licence)),e}},{key:"getDetails",value:function(){var t=this.props.item.details;return t&&"ZZZ"!==t[0]?t.map((function(t,e){return a.a.createElement("li",{key:e},t)})):""}},{key:"getWords",value:function(){var t=this.props.item.words;return t&&t.length?t.map((function(t,e){return a.a.createElement("li",{key:e},t)})):""}},{key:"getInfo",value:function(t){if(this.state.landscape)return"";switch(t){case"credits":return this.getCredits();case"words":return this.getWords();case"info":return this.getDetails();default:return""}}},{key:"render",value:function(){var t=this.getInfo(this.props.info);return t&&(t=a.a.createElement(M,null,t)),a.a.createElement(S,{size:this.state.size,padding:this.state.padding},a.a.createElement(x,{image:this.props.item.image,dim:!!t}),a.a.createElement(C,null,t))}}]),e}(i.Component);function H(){var t=Object(f.a)(['\n  width: 9vmin;\n  height: 9vmin;\n  border: none;\n  background-color: transparent;\n  background-image: url("img/icons/','");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  opacity: 0.333;\n\n  &:hover {\n    opacity: 0.666;\n  }\n\n  &:active {\n    opacity: 1;\n  }\n\n  ',"\n\n  ","\n\n  ","\n\n"]);return H=function(){return t},t}function W(){var t=Object(f.a)(["\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n"]);return W=function(){return t},t}var X=p.a.div(W()),Z=p.a.button(H(),(function(t){return t.src}),(function(t){return t.active?"opacity:1!important;":""}),(function(t){return t.disabled?"opacity:0.1;pointer-events:none;cursor:default;":""}),(function(t){return t.hide?"visibility:hidden;pointer-events;cursor:default;":""})),L=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=this.props.empty.indexOf("info")>-1,n=this.props.empty.indexOf("words")>-1;return a.a.createElement(X,{onClick:this.props.showMenu},a.a.createElement(Z,{src:"prev.svg",onClick:function(){return t.props.go("back")},disabled:this.props.first}),a.a.createElement(Z,{src:"info.svg",onClick:function(){return t.props.show("info")},active:"info"===this.props.info,hide:this.props.hide||e}),a.a.createElement(Z,{src:"words.svg",onClick:function(){return t.props.show("words")},active:"words"===this.props.info,hide:this.props.hide||n}),a.a.createElement(Z,{src:"credits.svg",onClick:function(){return t.props.show("credits")},active:"credits"===this.props.info,hide:this.props.hide}),a.a.createElement(Z,{src:"next.svg",onClick:function(){return t.props.go("next")},disabled:this.props.last}))}}]),e}(i.Component);function R(){var t=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 3vh;\n  height: 3vh;\n  display: flex;\n  font-size: 5vh;\n  background-color: #000;\n  border-color: #333;\n\n  & p {\n    line-height: 0;\n    position: relative;\n    left: -1vh;\n    font-size: 5vh;\n    color: #c00;\n  }\n"]);return R=function(){return t},t}function D(){var t=Object(f.a)(["\n  width: 50vw;\n  height: 10vh;\n  font-size: 5vh;\n  background-color: #111;\n  border-color: #555;\n  color: #fff;\n"]);return D=function(){return t},t}function F(){var t=Object(f.a)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 20vh;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0,0,0,0.8);\n\n  ","\n\n  @media (max-aspect-ratio: 1/1) {\n    display: none;\n  }\n"]);return F=function(){return t},t}var N=p.a.div(F(),(function(t){return t.show?"display: flex;":"display: none;"})),J=p.a.button(D()),U=p.a.button(R()),A=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"getCheckBox",value:function(){var t=this.props.showImage?"Hide image":"Show image";return a.a.createElement(J,{onClick:this.props.toggleImage},t)}},{key:"getCloseBox",value:function(){return a.a.createElement(U,{onClick:this.props.close},a.a.createElement("p",null,"\xd7"))}},{key:"render",value:function(){var t=this.getCheckBox(),e=this.getCloseBox();return a.a.createElement(N,{show:this.props.show},t,e)}}]),e}(i.Component),T=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(h.a)(e).call(this,t))).go=n.go.bind(Object(l.a)(n)),n.show=n.show.bind(Object(l.a)(n)),n.showMenu=n.showMenu.bind(Object(l.a)(n)),n.toggleInfo=n.toggleInfo.bind(Object(l.a)(n)),n.toggleImage=n.toggleImage.bind(Object(l.a)(n)),n.state={item:{text:""},index:0,empty:["info","words"]},n.last=0,fetch("data/data.json").then((function(t){return t.json().then((function(t){n.colours=t.colours,n.items=t.items,n.initialize()}))}),(function(t){return console.log(t)})),window.addEventListener("resize",n.toggleInfo,!1),n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"initialize",value:function(){this.last=this.items.length-1,this.shuffle(this.items),this.toggleInfo(),this.go(0)}},{key:"shuffle",value:function(t){for(var e=t.length;e;){var n=Math.floor(Math.random()*e),i=t[e-=1];t[e]=t[n],t[n]=i}return t}},{key:"go",value:function(t){switch(t){case"next":t=Math.min(this.state.index+1,this.last);break;case"back":t=Math.max(0,this.state.index-1);break;default:if(isNaN(t)||t<0||t>this.last)return}var e=this.items[t],n=this.getEmpty(e);this.setState({item:e,index:t,empty:n})}},{key:"getEmpty",value:function(t){var e=[];return t.words&&0!==t.words.length||e.push("words"),t.details&&"ZZZ"!==t.details[0]||e.push("info"),e}},{key:"show",value:function(t){var e=this.state.info;e=e!==t?t:void 0,this.setState({info:e})}},{key:"showMenu",value:function(t){if("close"===t||"DIV"===t.target.tagName){var e=!this.state.menu;this.setState({menu:e})}}},{key:"toggleInfo",value:function(){var t=document.body.getBoundingClientRect(),e=t.width>t.height;this.setState({hideInfo:e})}},{key:"toggleImage",value:function(){var t=!this.state.showImage;this.setState({showImage:t,menu:!1})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"App"},a.a.createElement(j,{item:this.state.item,showImage:this.state.showImage}),a.a.createElement(B,{item:this.state.item,info:this.state.info}),a.a.createElement(L,{go:this.go,show:this.show,info:this.state.info,hide:this.state.hideInfo,first:0===this.state.index,last:this.state.index===this.last,empty:this.state.empty,showMenu:this.showMenu}),a.a.createElement(A,{show:this.state.menu,showImage:this.state.showImage,toggleImage:this.toggleImage,close:function(){return t.showMenu("close")}}))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ea3c5ade.chunk.js.map