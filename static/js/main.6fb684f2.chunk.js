(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(n,e,t){n.exports=t(29)},23:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(3),i=t.n(a),l=(t(23),t(8)),c=t(9),u=t(14),h=t(10),f=t(15),d=t(13),s=t(1),v=t(2),m={2:38,4:37,6:39,8:40},y=Object.keys(m),g=function(n){return y.includes(n.toString())};function b(){var n=Object(s.a)(["\n  z-index: 500;\n  background-color: lightgrey;\n  color: black;\n  box-shadow: 0 0.8vh #1a1a1a;\n  border: none;\n  border-radius: 50%;\n  outline: none;\n  font-size: 4vh;\n  font-weight: bold;\n  margin: 1.25vh 1vh 0;\n  cursor: ",";\n\n  &:active {\n    background-color: #bababa;\n    color: ",";\n    box-shadow: 0 0.2vh #050505;\n    text-shadow: ",";\n    transform: translateY(0.6vh);\n  }\n"]);return b=function(){return n},n}var p=v.a.button(b(),function(n){return g(n.children)?"pointer":"default"},function(n){return g(n.children)?"lightgoldenrodyellow":"black"},function(n){return g(n.children)?"0.2vh 0.2vh 0.4vh grey, 0 0 5vh lightgoldenrodyellow, 0 0 1vh yellow":"null"}),k=function(n){var e=n.number,t=n.onClick;return r.a.createElement(p,{onClick:t},e)};function w(){var n=Object(s.a)(["\n  position: absolute;\n  top: 66%;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  width: 33vh;\n"]);return w=function(){return n},n}var x=v.a.div(w()),C=Object(d.a)(Array(10).keys()).slice(1);C.push("*","0","#");var E=function(n){var e=n.onKeyDown;return r.a.createElement(x,null,C.map(function(n){return r.a.createElement(k,{number:n,key:n,onClick:function(){return function(n,e){var t={preventDefault:function(){}};g(n)&&(t.keyCode=m[n],e(t))}(n,e)}})}))};function j(){var n=Object(s.a)(["\n  position: relative;\n  z-index: 1;\n  top: 25%;\n  background: ",";\n  height: 24%;\n"]);return j=function(){return n},n}function O(){var n=Object(s.a)(["\n  position: absolute;\n  z-index: 100;\n  top: 28%;\n  height: 17.5%;\n  border: 2px ridge ",";\n"]);return O=function(){return n},n}function M(){var n=Object(s.a)(["\n  background: linear-gradient(to right, teal, white, teal);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return M=function(){return n},n}function D(){var n=Object(s.a)(["\n  z-index: 2;\n  position: absolute;\n  height: 100%;\n"]);return D=function(){return n},n}var K,z,S,I,R,A,G,J="#AEC108",L="#5C5003",W=v.a.img(D()),_=v.a.div(M()),B=v.a.canvas(O(),L),U=v.a.canvas(j(),J),Y=function(){S=[1,0],K=10,z=10,I=[],R=5,A=Math.floor(20*Math.random()),G=Math.floor(20*Math.random())};Y();var q=function(n){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(c.a)(e,[{key:"componentWillMount",value:function(){clearInterval(this.interval)}},{key:"componentDidMount",value:function(){var n=this,e=this.refs.myGameCanvas,t=e.getContext("2d");document.addEventListener("keydown",this.onKeyDown),this.interval=setInterval(function(){return n.game(e,t)},100)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown),clearInterval(this.interval),Y()}},{key:"onKeyDown",value:function(n){n.preventDefault(),!function(n){return 37===n.keyCode}(n)||1===S[0]||0===S[1]?!function(n){return 38===n.keyCode}(n)||0===S[0]||1===S[1]?!function(n){return 39===n.keyCode}(n)||-1===S[0]||0===S[1]?function(n){return 40===n.keyCode}(n)&&0!==S[0]&&-1!==S[1]&&(S=[0,1]):S=[1,0]:S=[0,-1]:S=[-1,0]}},{key:"game",value:function(n,e){e.fillStyle=J,e.fillRect(0,0,n.width,n.height),K+=S[0],z+=S[1],e.fillStyle=L,I.forEach(function(n){e.fillRect(8*n.x,6*n.y,7,5),function(n,e,t){return n.x===e&&n.y===t}(n,K,z)&&Y()}),K<0&&(K=19),K>19&&(K=0),z<0&&(z=19),z>19&&(z=0),I.push({x:K,y:z}),I.length>R&&(I=I.slice(I.length-R)),function(n,e,t,o){return n===e&&t===o}(A,K,G,z)&&(R++,A=Math.floor(20*Math.random()),G=Math.floor(20*Math.random())),e.fillStyle=L,e.fillRect(8*A,6*G,7,5),e.fillStyle=J,e.fillRect(8*A+2,6*G+2,3,1)}},{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(W,{src:"".concat("/snake-react-game","/nostalgic_phone.png"),alt:"nostalgic_phone"}),r.a.createElement(B,{height:"120",width:"160",id:"gameCanvas",ref:"myGameCanvas"}),r.a.createElement(U,{height:"150",width:"190"}),r.a.createElement(E,{onKeyDown:this.onKeyDown}))}}]),e}(o.Component);i.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6fb684f2.chunk.js.map