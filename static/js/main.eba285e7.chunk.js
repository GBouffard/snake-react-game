(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n,e,t){n.exports=t(31)},25:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(3),i=t.n(a),l=(t(25),t(9)),c=t(10),u=t(16),s=t(11),h=t(17),d=t(14),f=t(1),v=t(2),g={2:38,4:37,6:39,8:40},m=Object.keys(g),b=function(n){return m.includes(n.toString())};function p(){var n=Object(f.a)(["\n  z-index: 500;\n  background-color: lightgrey;\n  color: black;\n  box-shadow: 0 0.8vh #1a1a1a;\n  border: none;\n  border-radius: 50%;\n  outline: none;\n  font-size: 4vh;\n  font-weight: bold;\n  margin: 1.25vh 1vh 0;\n  cursor: ",";\n\n  &:active {\n    background-color: #bababa;\n    color: ",";\n    box-shadow: 0 0.2vh #050505;\n    text-shadow: ",";\n    transform: translateY(0.6vh);\n  }\n"]);return p=function(){return n},n}var w=v.a.button(p(),function(n){return b(n.children)?"pointer":"default"},function(n){return b(n.children)?"lightgoldenrodyellow":"black"},function(n){return b(n.children)?"0.2vh 0.2vh 0.4vh grey, 0 0 5vh lightgoldenrodyellow, 0 0 1vh yellow":"null"}),y=function(n){var e=n.number,t=n.onClick;return o.a.createElement(w,{onClick:t},e)};function k(){var n=Object(f.a)(["\n  position: absolute;\n  top: 66%;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  width: 33vh;\n"]);return k=function(){return n},n}var E=v.a.div(k()),O=Object(d.a)(Array(10).keys()).slice(1);O.push("*","0","#");var j=function(n){var e=n.onKeyDown;return o.a.createElement(E,null,O.map(function(n){return o.a.createElement(y,{number:n,key:n,onClick:function(){return function(n,e){var t={preventDefault:function(){}};b(n)&&(t.keyCode=g[n],e(t))}(n,e)}})}))},x=t(15),C=t(4),M=t.n(C);function D(){var n=Object(f.a)(["\n  background: linear-gradient(#333333, black, #333333);\n  border: 0.5vw solid darkgrey;\n  border-radius: 1vw;\n  color: white;\n  font-size: 2vh;\n  font-weight: 500;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  padding: 5vw;\n  text-align: left;\n"]);return D=function(){return n},n}function z(){var n=Object(f.a)(['\n  position: absolute;\n  top: 15vw;\n  width: 92vw;\n  height: 75vh;\n  z-index: 999;\n\n  &&::after {\n    content: "";\n    position: absolute;\n\n    border-bottom: 3vw solid darkgrey;\n    border-right: 2vw solid transparent;\n    border-left: 2vw solid transparent;\n    top: -1vw;\n    right: 0;\n    transform: translateY(-50%);\n  }\n']);return z=function(){return n},n}function S(){var n=Object(f.a)(["\n  font-weight: bold;\n  font-size: 6vw;\n  fill: ghostwhite;\n"]);return S=function(){return n},n}function K(){var n=Object(f.a)(["\n  cx: 50%;\n  cy: 50%;\n  r: 4vw;\n  stroke: darkgrey;\n  stroke-width: 3;\n"]);return K=function(){return n},n}function G(){var n=Object(f.a)(["\n  position: absolute;\n  right: 0;\n  height: 12vw;\n  width: 12vw;\n  cursor: default;\n"]);return G=function(){return n},n}var I=v.a.svg(G()),R=v.a.circle(K()),A=v.a.text(S()),L=v.a.div(z()),B=v.a.div(D()),J=function(){var n=Object(r.useState)(!1),e=Object(x.a)(n,2),t=e[0],a=e[1],i={onMouseOver:function(){return M()()?null:a(!0)},onMouseLeave:function(){return M()()?null:a(!1)},onClick:function(){return M()()?a(!t):null}};return o.a.createElement(r.Fragment,null,o.a.createElement(I,null,o.a.createElement("radialGradient",{id:"circleGradient"},o.a.createElement("stop",{offset:"1%","stop-color":"black"}),o.a.createElement("stop",{offset:"95%","stop-color":"#333333"})),o.a.createElement(R,Object.assign({fill:"url('#circleGradient')"},i)),o.a.createElement(A,Object.assign({x:"50%",y:"55%",dominantBaseline:"middle",textAnchor:"middle"},i),"?")),t&&o.a.createElement(L,null,o.a.createElement(B,null,"Snake is a video game where the player maneuvers a snake which grows in length each time it reaches food. The goal is to make the snake as large as possible before the game ends which happens when the snake moves into itself. The first version originated in 1976 and the one below (from 1998) came as a package on old mobile phone.\n\n\nHow to play:\n\u2022 on desktop; use the arrow keys (\u2191, \u2192, \u2193, \u2190).\n\u2022 on mobile; like on an original phone, click the following keys instead:\n  2 (\u2191)  4 (\u2190)  6 (\u2192)  8 (\u2193)")))};function T(){var n=Object(f.a)(["\n  position: relative;\n  z-index: 1;\n  top: 25%;\n  background: ",";\n  height: 24%;\n"]);return T=function(){return n},n}function W(){var n=Object(f.a)(["\n  position: absolute;\n  z-index: 8;\n  top: 28%;\n  height: 17.5%;\n  border: 2px ridge ",";\n"]);return W=function(){return n},n}function Y(){var n=Object(f.a)(["\n  background: linear-gradient(to right, teal, white, teal);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return Y=function(){return n},n}function _(){var n=Object(f.a)(["\n  z-index: 2;\n  position: absolute;\n  height: 100%;\n"]);return _=function(){return n},n}var F,H,U,q,N,P,Q,V="#AEC108",X="#5C5003",Z=v.a.img(_()),$=v.a.div(Y()),nn=v.a.canvas(W(),X),en=v.a.canvas(T(),V),tn=function(){U=[1,0],F=10,H=10,q=[],N=5,P=Math.floor(20*Math.random()),Q=Math.floor(20*Math.random())};tn();var rn=function(n){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,n),Object(c.a)(e,[{key:"componentWillMount",value:function(){clearInterval(this.interval)}},{key:"componentDidMount",value:function(){var n=this,e=this.refs.myGameCanvas,t=e.getContext("2d");document.addEventListener("keydown",this.onKeyDown),this.interval=setInterval(function(){return n.game(e,t)},100)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown),clearInterval(this.interval),tn()}},{key:"onKeyDown",value:function(n){n.preventDefault(),!function(n){return 37===n.keyCode}(n)||1===U[0]||0===U[1]?!function(n){return 38===n.keyCode}(n)||0===U[0]||1===U[1]?!function(n){return 39===n.keyCode}(n)||-1===U[0]||0===U[1]?function(n){return 40===n.keyCode}(n)&&0!==U[0]&&-1!==U[1]&&(U=[0,1]):U=[1,0]:U=[0,-1]:U=[-1,0]}},{key:"game",value:function(n,e){e.fillStyle=V,e.fillRect(0,0,n.width,n.height),F+=U[0],H+=U[1],e.fillStyle=X,q.forEach(function(n){e.fillRect(8*n.x,6*n.y,7,5),function(n,e,t){return n.x===e&&n.y===t}(n,F,H)&&tn()}),F<0&&(F=19),F>19&&(F=0),H<0&&(H=19),H>19&&(H=0),q.push({x:F,y:H}),q.length>N&&(q=q.slice(q.length-N)),function(n,e,t,r){return n===e&&t===r}(P,F,Q,H)&&(N++,P=Math.floor(20*Math.random()),Q=Math.floor(20*Math.random())),e.fillStyle=X,e.fillRect(8*P,6*Q,7,5),e.fillStyle=V,e.fillRect(8*P+2,6*Q+2,3,1)}},{key:"render",value:function(){return o.a.createElement($,null,o.a.createElement(J,null),o.a.createElement(Z,{src:"".concat("/snake-react-game","/nostalgic_phone.png"),alt:"nostalgic_phone"}),o.a.createElement(nn,{height:"120",width:"160",id:"gameCanvas",ref:"myGameCanvas"}),o.a.createElement(en,{height:"150",width:"190"}),o.a.createElement(j,{onKeyDown:this.onKeyDown}))}}]),e}(r.Component);i.a.render(o.a.createElement(rn,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.eba285e7.chunk.js.map