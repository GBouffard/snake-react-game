(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n,e,t){n.exports=t(31)},25:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(3),i=t.n(a),l=(t(25),t(9)),c=t(10),u=t(16),s=t(11),h=t(17),d=t(1),f=t(2);function v(){var n=Object(d.a)(["\n  position: absolute;\n  top: 1vh;\n  left: 1vw;\n"]);return v=function(){return n},n}var g=f.a.div(v()),m=function(n){var e=n.score;return o.a.createElement(g,null,"Score:",e)},b=t(14),p={2:38,4:37,6:39,8:40},w=Object.keys(p),y=function(n){return w.includes(n.toString())};function k(){var n=Object(d.a)(["\n  z-index: 500;\n  background-color: lightgrey;\n  color: black;\n  box-shadow: 0 0.8vh #1a1a1a;\n  border: none;\n  border-radius: 50%;\n  outline: none;\n  font-size: 4vh;\n  font-weight: bold;\n  margin: 1.25vh 1vh 0;\n  cursor: ",";\n\n  &:active {\n    background-color: #bababa;\n    color: ",";\n    -webkit-tap-highlight-color: transparent;\n    box-shadow: 0 0.2vh #050505;\n    text-shadow: ",";\n    transform: translateY(0.6vh);\n  }\n"]);return k=function(){return n},n}var E=f.a.button(k(),function(n){return y(n.children)?"pointer":"default"},function(n){return y(n.children)?"lightgoldenrodyellow":"black"},function(n){return y(n.children)?"0.2vh 0.2vh 0.4vh grey, 0 0 5vh lightgoldenrodyellow, 0 0 1vh yellow":"null"}),O=function(n){var e=n.number,t=n.onClick;return o.a.createElement(E,{onClick:t},e)};function j(){var n=Object(d.a)(["\n  position: absolute;\n  top: 66%;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  width: 33vh;\n"]);return j=function(){return n},n}var x=f.a.div(j()),C=Object(b.a)(Array(10).keys()).slice(1);C.push("*","0","#");var M=function(n){var e=n.onKeyDown;return o.a.createElement(x,null,C.map(function(n){return o.a.createElement(O,{number:n,key:n,onClick:function(){return function(n,e){var t={preventDefault:function(){}};y(n)&&(t.keyCode=p[n],e(t))}(n,e)}})}))},D=t(15),z=t(4),S=t.n(z);function K(){var n=Object(d.a)(["\n  background: linear-gradient(#333333, black, #333333);\n  border: 0.5vw solid darkgrey;\n  border-radius: 1vw;\n  color: white;\n  font-size: 2vh;\n  font-weight: 500;\n  line-height: 1.4;\n  white-space: pre-wrap;\n  padding: 5vw;\n  text-align: left;\n"]);return K=function(){return n},n}function G(){var n=Object(d.a)(['\n  position: absolute;\n  top: 15vw;\n  width: 92vw;\n  height: 75vh;\n  z-index: 999;\n\n  &&::after {\n    content: "";\n    position: absolute;\n\n    border-bottom: 3vw solid darkgrey;\n    border-right: 2vw solid transparent;\n    border-left: 2vw solid transparent;\n    top: -1vw;\n    right: 0;\n    transform: translateY(-50%);\n  }\n']);return G=function(){return n},n}function I(){var n=Object(d.a)(["\n  font-weight: bold;\n  font-size: 6vw;\n  fill: ghostwhite;\n"]);return I=function(){return n},n}function R(){var n=Object(d.a)(["\n  cx: 50%;\n  cy: 50%;\n  r: 4vw;\n  stroke: darkgrey;\n  stroke-width: 3;\n"]);return R=function(){return n},n}function A(){var n=Object(d.a)(["\n  position: absolute;\n  right: 0;\n  height: 12vw;\n  width: 12vw;\n  cursor: default;\n"]);return A=function(){return n},n}var B=f.a.svg(A()),L=f.a.circle(R()),J=f.a.text(I()),T=f.a.div(G()),W=f.a.div(K()),Y=function(){var n=Object(r.useState)(!1),e=Object(D.a)(n,2),t=e[0],a=e[1],i={onMouseOver:function(){return S()()?null:a(!0)},onMouseLeave:function(){return S()()?null:a(!1)},onClick:function(){return S()()?a(!t):null}};return o.a.createElement(r.Fragment,null,o.a.createElement(B,null,o.a.createElement("radialGradient",{id:"circleGradient"},o.a.createElement("stop",{offset:"1%",stopColor:"black"}),o.a.createElement("stop",{offset:"95%",stopColor:"#333333"})),o.a.createElement(L,Object.assign({fill:"url('#circleGradient')"},i)),o.a.createElement(J,Object.assign({x:"50%",y:"55%",dominantBaseline:"middle",textAnchor:"middle"},i),"?")),t&&o.a.createElement(T,null,o.a.createElement(W,null,"Snake is a video game where the player maneuvers a snake which grows in length each time it reaches food. The goal is to make the snake as large as possible before the game ends which happens when the snake moves into itself. The first version originated in 1976 and the one below (from 1998) came as a package on old mobile phone.\n\n\nHow to play:\n\u2022 on desktop; use the arrow keys (\u2191, \u2192, \u2193, \u2190).\n\u2022 on mobile; like on an original phone, click the following keys instead:\n  2 (\u2191)  4 (\u2190)  6 (\u2192)  8 (\u2193)")))};function _(){var n=Object(d.a)(["\n  position: relative;\n  z-index: 1;\n  top: 25%;\n  background: ",";\n  height: 24%;\n"]);return _=function(){return n},n}function F(){var n=Object(d.a)(["\n  position: absolute;\n  z-index: 8;\n  top: 28%;\n  height: 17.5%;\n  border: 2px ridge ",";\n"]);return F=function(){return n},n}function H(){var n=Object(d.a)(["\n  background: linear-gradient(to right, teal, white, teal);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return H=function(){return n},n}function U(){var n=Object(d.a)(["\n  z-index: 2;\n  position: absolute;\n  height: 100%;\n"]);return U=function(){return n},n}var q,N,P,Q,V,X,Z,$,nn="#AEC108",en="#5C5003",tn=f.a.img(U()),rn=f.a.div(H()),on=f.a.canvas(F(),en),an=f.a.canvas(_(),nn),ln=function(){P=[1,0],q=10,N=10,Q=[],V=5,X=Math.floor(20*Math.random()),Z=Math.floor(20*Math.random()),$=0};ln();var cn=function(n){return i.a.render(o.a.createElement(m,{score:n}),document.getElementById("score-display"))},un=function(n){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,n),Object(c.a)(e,[{key:"componentWillMount",value:function(){clearInterval(this.interval)}},{key:"componentDidMount",value:function(){var n=this,e=this.refs.myGameCanvas,t=e.getContext("2d");document.addEventListener("keydown",this.onKeyDown),this.interval=setInterval(function(){return n.game(e,t)},100),cn(7)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown),clearInterval(this.interval),ln()}},{key:"onKeyDown",value:function(n){n.preventDefault(),!function(n){return 37===n.keyCode}(n)||1===P[0]||0===P[1]?!function(n){return 38===n.keyCode}(n)||0===P[0]||1===P[1]?!function(n){return 39===n.keyCode}(n)||-1===P[0]||0===P[1]?function(n){return 40===n.keyCode}(n)&&0!==P[0]&&-1!==P[1]&&(P=[0,1]):P=[1,0]:P=[0,-1]:P=[-1,0]}},{key:"game",value:function(n,e){e.fillStyle=nn,e.fillRect(0,0,n.width,n.height),q+=P[0],N+=P[1],e.fillStyle=en,Q.forEach(function(n){e.fillRect(8*n.x,6*n.y,7,5),function(n,e,t){return n.x===e&&n.y===t}(n,q,N)&&ln()}),q<0&&(q=19),q>19&&(q=0),N<0&&(N=19),N>19&&(N=0),Q.push({x:q,y:N}),Q.length>V&&(Q=Q.slice(Q.length-V)),function(n,e,t,r){return n===e&&t===r}(X,q,Z,N)&&(V++,cn(++$),X=Math.floor(20*Math.random()),Z=Math.floor(20*Math.random())),e.fillStyle=en,e.fillRect(8*X,6*Z,7,5),e.fillStyle=nn,e.fillRect(8*X+2,6*Z+2,3,1)}},{key:"render",value:function(){return o.a.createElement(rn,null,o.a.createElement("div",{id:"score-display"}),o.a.createElement(Y,null),o.a.createElement(tn,{src:"".concat("/snake-react-game","/nostalgic_phone.png"),alt:"nostalgic_phone"}),o.a.createElement(on,{height:"120",width:"160",id:"gameCanvas",ref:"myGameCanvas"}),o.a.createElement(an,{height:"150",width:"190"}),o.a.createElement(M,{onKeyDown:this.onKeyDown}))}}]),e}(r.Component);i.a.render(o.a.createElement(un,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ff14d34e.chunk.js.map