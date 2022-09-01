(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function y(){}function Me(t){return t()}function xe(){return Object.create(null)}function ee(t){t.forEach(Me)}function ze(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function je(t){return Object.keys(t).length===0}function u(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function Ye(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function I(){return B(" ")}function Je(){return B("")}function oe(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Qe(t){return Array.from(t.childNodes)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function L(t,e,n,o){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let Re;function se(t){Re=t}const ne=[],Ke=[],ge=[],$e=[],Xe=Promise.resolve();let Oe=!1;function et(){Oe||(Oe=!0,Xe.then(Fe))}function Te(t){ge.push(t)}const Ne=new Set;let me=0;function Fe(){const t=Re;do{for(;me<ne.length;){const e=ne[me];me++,se(e),tt(e.$$)}for(se(null),ne.length=0,me=0;Ke.length;)Ke.pop()();for(let e=0;e<ge.length;e+=1){const n=ge[e];Ne.has(n)||(Ne.add(n),n())}ge.length=0}while(ne.length);for(;$e.length;)$e.pop()();Oe=!1,Ne.clear(),se(t)}function tt(t){if(t.fragment!==null){t.update(),ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Te)}}const Ee=new Set;let F;function We(){F={r:0,c:[],p:F}}function Ve(){F.r||ee(F.c),F=F.p}function U(t,e){t&&t.i&&(Ee.delete(t),t.i(e))}function W(t,e,n,o){if(t&&t.o){if(Ee.has(t))return;Ee.add(t),F.c.push(()=>{Ee.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function le(t){t&&t.c()}function Q(t,e,n,o){const{fragment:s,on_mount:c,on_destroy:l,after_update:i}=t.$$;s&&s.m(e,n),o||Te(()=>{const f=c.map(Me).filter(ze);l?l.push(...f):ee(f),t.$$.on_mount=[]}),i.forEach(Te)}function X(t,e){const n=t.$$;n.fragment!==null&&(ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){t.$$.dirty[0]===-1&&(ne.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,n,o,s,c,l,i=[-1]){const f=Re;se(t);const r=t.$$={fragment:null,ctx:null,props:c,update:y,not_equal:s,bound:xe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:xe(),dirty:i,skip_bound:!1,root:e.target||f.$$.root};l&&l(r.root);let _=!1;if(r.ctx=n?n(t,e.props||{},(g,v,...T)=>{const C=T.length?T[0]:v;return r.ctx&&s(r.ctx[g],r.ctx[g]=C)&&(!r.skip_bound&&r.bound[g]&&r.bound[g](C),_&&nt(t,g)),v}):[],r.update(),_=!0,ee(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const g=Qe(e.target);r.fragment&&r.fragment.l(g),g.forEach(O)}else r.fragment&&r.fragment.c();e.intro&&U(t.$$.fragment),Q(t,e.target,e.anchor,e.customElement),Fe()}se(f)}class M{$destroy(){X(this,1),this.$destroy=y}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var E=(t=>(t.UP="up",t.RIGHT="right",t.LEFT="left",t.DOWN="down",t.UNKNOWN="",t))(E||{}),h=(t=>(t[t.SCREEN_WIDTH=600]="SCREEN_WIDTH",t[t.SCREEN_HEIGHT=400]="SCREEN_HEIGHT",t[t.BLOCK_SIZE=25]="BLOCK_SIZE",t))(h||{});const Y=[];function qe(t,e=y){let n;const o=new Set;function s(i){if(Z(t,i)&&(t=i,n)){const f=!Y.length;for(const r of o)r[1](),Y.push(r,t);if(f){for(let r=0;r<Y.length;r+=2)Y[r][0](Y[r+1]);Y.length=0}}}function c(i){s(i(t))}function l(i,f=y){const r=[i,f];return o.add(r),o.size===1&&(n=e(s)||y),i(t),()=>{o.delete(r),o.size===0&&(n(),n=null)}}return{set:s,update:c,subscribe:l}}const st=()=>{let t={playerName:"Abhay",level:1,stage:1,score:0,highScore:0,bonus:0,food:0},{update:e,subscribe:n}=qe(t);return{subscribe:n,resetScore:()=>{e(l=>(l.food=0,l.bonus=0,l.score=0,l))},eatFood:()=>{e(l=>(l.food=l.food+1,l.score=l.food*5+l.bonus*20,l.score>l.highScore&&(l.highScore=l.score),l))},nextLevel:()=>{e(l=>(l.level=l.level+1,l))}}};let J=st();function ot(t){let e,n,o,s,c,l,i,f=t[0].playerName+"",r,_,g,v,T,C=t[0].score+"",p,b,w,A,V,q=t[0].food+"",te,m,S,G,k,x=t[0].bonus+"",ve,we,re,ce,fe,ie=t[0].highScore+"",Se,ke,ue,ae,z,de=t[0].level+"",Le,be,_e=t[0].stage+"",ye,Be,j,pe,He,he,Ce,Ae;return{c(){e=a("div"),n=a("div"),n.textContent="Snake",o=I(),s=a("table"),c=a("tr"),l=a("td"),l.textContent="Player",i=a("td"),r=B(f),_=I(),g=a("tr"),v=a("td"),v.textContent="Score",T=a("td"),p=B(C),b=I(),w=a("tr"),A=a("td"),A.textContent="Food",V=a("td"),te=B(q),m=I(),S=a("tr"),G=a("td"),G.textContent="Bonus",k=a("td"),ve=B(x),we=I(),re=a("tr"),ce=a("td"),ce.textContent="High Score",fe=a("td"),Se=B(ie),ke=I(),ue=a("tr"),ae=a("td"),ae.textContent="Level-Stage",z=a("td"),Le=B(de),be=a("span"),be.textContent="-",ye=B(_e),Be=I(),j=a("div"),pe=a("button"),pe.textContent="Replay",He=I(),he=a("button"),he.textContent="Menu",d(n,"class","title svelte-1phc8sd"),d(l,"class","c1 svelte-1phc8sd"),d(i,"class","c2 svelte-1phc8sd"),d(v,"class","c1 svelte-1phc8sd"),d(T,"class","c2 svelte-1phc8sd"),d(A,"class","c1 svelte-1phc8sd"),d(V,"class","c2 svelte-1phc8sd"),d(G,"class","c1 svelte-1phc8sd"),d(k,"class","c2 svelte-1phc8sd"),d(ce,"class","c1 svelte-1phc8sd"),d(fe,"class","c2 svelte-1phc8sd"),d(ae,"class","c1 svelte-1phc8sd"),d(z,"class","c2 svelte-1phc8sd"),d(s,"class","svelte-1phc8sd"),d(j,"class","flex svelte-1phc8sd"),d(e,"class","game-over-screen svelte-1phc8sd")},m(H,K){R(H,e,K),u(e,n),u(e,o),u(e,s),u(s,c),u(c,l),u(c,i),u(i,r),u(s,_),u(s,g),u(g,v),u(g,T),u(T,p),u(s,b),u(s,w),u(w,A),u(w,V),u(V,te),u(s,m),u(s,S),u(S,G),u(S,k),u(k,ve),u(s,we),u(s,re),u(re,ce),u(re,fe),u(fe,Se),u(s,ke),u(s,ue),u(ue,ae),u(ue,z),u(z,Le),u(z,be),u(z,ye),u(e,Be),u(e,j),u(j,pe),u(j,He),u(j,he),Ce||(Ae=[oe(pe,"click",t[2]),oe(he,"click",t[1])],Ce=!0)},p(H,[K]){K&1&&f!==(f=H[0].playerName+"")&&$(r,f),K&1&&C!==(C=H[0].score+"")&&$(p,C),K&1&&q!==(q=H[0].food+"")&&$(te,q),K&1&&x!==(x=H[0].bonus+"")&&$(ve,x),K&1&&ie!==(ie=H[0].highScore+"")&&$(Se,ie),K&1&&de!==(de=H[0].level+"")&&$(Le,de),K&1&&_e!==(_e=H[0].stage+"")&&$(ye,_e)},i:y,o:y,d(H){H&&O(e),Ce=!1,ee(Ae)}}}function lt(t,e,n){const o=()=>{console.log("restart game"),D.welcomeScreen()},s=()=>{J.resetScore(),D.startGame()};let c;return J.subscribe(l=>{n(0,c=l)}),[c,o,s]}class rt extends M{constructor(e){super(),P(this,e,lt,ot,Z,{})}}function ct(t){let e;return{c(){e=a("div"),d(e,"class","food svelte-14olvay"),L(e,"left",t[1]+"px"),L(e,"top",t[0]+"px"),L(e,"width",h.BLOCK_SIZE-2+"px"),L(e,"height",h.BLOCK_SIZE-2+"px")},m(n,o){R(n,e,o)},p(n,[o]){o&2&&L(e,"left",n[1]+"px"),o&1&&L(e,"top",n[0]+"px")},i:y,o:y,d(n){n&&O(e)}}}function ft(t,e,n){let{foodTop:o=0}=e,{foodLeft:s=0}=e;return t.$$set=c=>{"foodTop"in c&&n(0,o=c.foodTop),"foodLeft"in c&&n(1,s=c.foodLeft)},[o,s]}class it extends M{constructor(e){super(),P(this,e,ft,ct,Z,{foodTop:0,foodLeft:1})}}function Ue(t){let e,n,o;return{c(){e=a("div"),n=I(),o=a("div"),d(e,"id","leftEye"),d(e,"class","eyes svelte-rzshp"),d(o,"id","rightEye"),d(o,"class","eyes svelte-rzshp")},m(s,c){R(s,e,c),R(s,n,c),R(s,o,c)},d(s){s&&O(e),s&&O(n),s&&O(o)}}}function ut(t){let e,n,o=t[2]&&Ue();return{c(){e=a("div"),o&&o.c(),L(e,"left",t[1]+"px"),L(e,"top",t[0]+"px"),L(e,"width",h.BLOCK_SIZE+"px"),L(e,"height",h.BLOCK_SIZE+"px"),d(e,"class",n="snake-body "+t[3]+" svelte-rzshp")},m(s,c){R(s,e,c),o&&o.m(e,null)},p(s,[c]){s[2]?o||(o=Ue(),o.c(),o.m(e,null)):o&&(o.d(1),o=null),c&2&&L(e,"left",s[1]+"px"),c&1&&L(e,"top",s[0]+"px"),c&8&&n!==(n="snake-body "+s[3]+" svelte-rzshp")&&d(e,"class",n)},i:y,o:y,d(s){s&&O(e),o&&o.d()}}}function at(t,e,n){let{top:o=h.BLOCK_SIZE}=e,{left:s=h.BLOCK_SIZE}=e,{isHead:c=!1}=e,{direction:l="right"}=e;return t.$$set=i=>{"top"in i&&n(0,o=i.top),"left"in i&&n(1,s=i.left),"isHead"in i&&n(2,c=i.isHead),"direction"in i&&n(3,l=i.direction)},[o,s,c,l]}class dt extends M{constructor(e){super(),P(this,e,at,ut,Z,{top:0,left:1,isHead:2,direction:3})}}function Ze(t,e,n){const o=t.slice();return o[2]=e[n],o[4]=n,o}function De(t){let e,n;return e=new dt({props:{isHead:t[4]==0,top:t[2].top,left:t[2].left,direction:t[1]}}),{c(){le(e.$$.fragment)},m(o,s){Q(e,o,s),n=!0},p(o,s){const c={};s&1&&(c.top=o[2].top),s&1&&(c.left=o[2].left),s&2&&(c.direction=o[1]),e.$set(c)},i(o){n||(U(e.$$.fragment,o),n=!0)},o(o){W(e.$$.fragment,o),n=!1},d(o){X(e,o)}}}function _t(t){let e,n,o=t[0],s=[];for(let l=0;l<o.length;l+=1)s[l]=De(Ze(t,o,l));const c=l=>W(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=Je()},m(l,i){for(let f=0;f<s.length;f+=1)s[f].m(l,i);R(l,e,i),n=!0},p(l,[i]){if(i&3){o=l[0];let f;for(f=0;f<o.length;f+=1){const r=Ze(l,o,f);s[f]?(s[f].p(r,i),U(s[f],1)):(s[f]=De(r),s[f].c(),U(s[f],1),s[f].m(e.parentNode,e))}for(We(),f=o.length;f<s.length;f+=1)c(f);Ve()}},i(l){if(!n){for(let i=0;i<o.length;i+=1)U(s[i]);n=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)W(s[i]);n=!1},d(l){Ye(s,l),l&&O(e)}}}function pt(t,e,n){let{snakeBodies:o=[]}=e,{direction:s="right"}=e;return t.$$set=c=>{"snakeBodies"in c&&n(0,o=c.snakeBodies),"direction"in c&&n(1,s=c.direction)},[o,s]}class ht extends M{constructor(e){super(),P(this,e,pt,_t,Z,{snakeBodies:0,direction:1})}}const Ge=[{bg:"#ff0000"},{bg:"#00ff00"},{bg:"#00ff"},{bg:"#00ff00"}];function mt(t){let e,n,o,s,c,l,i=t[0].level+"",f,r,_=t[0].score+"",g,v,T,C;return n=new ht({props:{direction:t[3],snakeBodies:t[4]}}),s=new it({props:{foodLeft:t[1],foodTop:t[2]}}),{c(){e=a("main"),le(n.$$.fragment),o=I(),le(s.$$.fragment),c=I(),l=a("div"),f=B(i),r=B(" : "),g=B(_),L(e,"width",h.SCREEN_WIDTH+"px"),L(e,"height",h.SCREEN_HEIGHT+"px"),L(e,"background",Ge[t[0].level].bg),d(e,"class","svelte-1m9984m"),d(l,"class","score svelte-1m9984m")},m(p,b){R(p,e,b),Q(n,e,null),u(e,o),Q(s,e,null),R(p,c,b),R(p,l,b),u(l,f),u(l,r),u(l,g),v=!0,T||(C=oe(window,"keydown",t[5]),T=!0)},p(p,[b]){const w={};b&8&&(w.direction=p[3]),b&16&&(w.snakeBodies=p[4]),n.$set(w);const A={};b&2&&(A.foodLeft=p[1]),b&4&&(A.foodTop=p[2]),s.$set(A),(!v||b&1)&&L(e,"background",Ge[p[0].level].bg),(!v||b&1)&&i!==(i=p[0].level+"")&&$(f,i),(!v||b&1)&&_!==(_=p[0].score+"")&&$(g,_)},i(p){v||(U(n.$$.fragment,p),U(s.$$.fragment,p),v=!0)},o(p){W(n.$$.fragment,p),W(s.$$.fragment,p),v=!1},d(p){p&&O(e),X(n),X(s),p&&O(c),p&&O(l),T=!1,C()}}}function Pe(t,e){return!(t.top<e.top||t.top>e.top||t.left<e.left||t.left>e.left)}function gt(t,e,n){let o=!1,s;D.subscribe(m=>{}),J.subscribe(m=>{n(0,s=m)});const c=()=>{console.log("game over"),D.gameOver()};let l=0,i=0,f=E.RIGHT,r=[],_;const g=h.SCREEN_WIDTH,v=h.SCREEN_HEIGHT,T=()=>{J.nextLevel(),J.resetScore(),clearInterval(_),C(),w()},C=()=>{let m=5-s.level;m=m*50,_=setInterval(()=>{r.pop();let{left:S,top:G}=r[0];f===E.UP?G-=h.BLOCK_SIZE:f===E.DOWN?G+=h.BLOCK_SIZE:f===E.LEFT?S-=h.BLOCK_SIZE:f===E.RIGHT&&(S+=h.BLOCK_SIZE);const k={left:S,top:G};n(4,r=[k,...r]),Pe(k,{left:l,top:i})&&(n(4,r=[...r,r[r.length-1]]),J.eatFood(),b(),r.length/5>1&&r.length%5==0&&(s.level<Ge.length-1?T():D.allLevelsCleared())),A()&&(clearInterval(_),w(),c())},m)},p=()=>{let m=0,S=0;for(;;){m=Math.floor(Math.random()*(v/h.BLOCK_SIZE))*h.BLOCK_SIZE,S=Math.floor(Math.random()*(g/h.BLOCK_SIZE))*h.BLOCK_SIZE;let G=r.findIndex(x=>{x.top==m}),k=r.findIndex(x=>{x.left==S});if(G==-1&&k==-1)break}return{top:m,left:S}};function b(){const{top:m,left:S}=p();n(1,l=S),n(2,i=m)}function w(){b(),n(3,f=E.RIGHT),n(4,r=[{left:h.BLOCK_SIZE*2,top:0},{left:h.BLOCK_SIZE,top:0},{left:0,top:0}])}function A(){if(r.slice(1).filter(x=>Pe(x,r[0])).length>0)return!0;const{top:G,left:k}=r[0];return k>=g&&f==E.RIGHT&&n(4,r[0].left=0,r),k<0&&f==E.LEFT&&n(4,r[0].left=g-h.BLOCK_SIZE,r),G<0&&f==E.UP&&n(4,r[0].top=v-h.BLOCK_SIZE,r),G>=v&&f==E.DOWN&&n(4,r[0].top=0,r),!1}function V(){console.log("pauseGame"),clearInterval(_)}function q(m){return m===38&&f!=E.DOWN?E.UP:m===39&&f!=E.LEFT?E.RIGHT:m===37&&f!=E.RIGHT?E.LEFT:m===40&&f!=E.UP?E.DOWN:E.UNKNOWN}function te(m){if(m.keyCode===32&&(o=!o,o?V():C()),o)return;const S=q(m.keyCode);S!=E.UNKNOWN&&n(3,f=S)}return C(),w(),[s,l,i,f,r,te]}class Ie extends M{constructor(e){super(),P(this,e,gt,mt,Z,{})}}function Et(t){let e,n,o,s,c,l,i;return{c(){e=a("div"),n=a("div"),n.textContent="Snake",o=I(),s=a("div"),c=a("button"),c.textContent="Start",d(n,"class","title svelte-yxm8be"),d(s,"class","btn svelte-yxm8be"),d(e,"class","start-screen svelte-yxm8be")},m(f,r){R(f,e,r),u(e,n),u(e,o),u(e,s),u(s,c),l||(i=oe(c,"click",t[0]),l=!0)},p:y,i:y,o:y,d(f){f&&O(e),l=!1,i()}}}function vt(t){return[()=>{console.log("start game"),D.startGame()}]}class St extends M{constructor(e){super(),P(this,e,vt,Et,Z,{})}}function Lt(t){let e,n,o,s,c,l,i,f;return{c(){e=a("div"),n=a("div"),n.textContent="Congratulations !",o=I(),s=a("div"),s.textContent="You have cleared all the levels.",c=I(),l=a("button"),l.textContent="Menu",d(n,"class","title svelte-gyhhqq"),d(e,"class","final svelte-gyhhqq")},m(r,_){R(r,e,_),u(e,n),u(e,o),u(e,s),u(e,c),u(e,l),i||(f=oe(l,"click",t[0]),i=!0)},p:y,i:y,o:y,d(r){r&&O(e),i=!1,f()}}}function bt(t){return[()=>{console.log("restart game"),D.welcomeScreen()}]}class yt extends M{constructor(e){super(),P(this,e,bt,Lt,Z,{})}}var N=(t=>(t.NOT_STARTED="NOT_STARTED",t.RUNNING="RUNNING",t.PAUSED="PAUSED",t.RESUME="RESUME",t.GAME_OVER="GAME OVER",t.ALL_LEVELS_CLEARED="ALL_LEVELS_CLEARED",t))(N||{});const Ct=()=>{const t=[{status:N.NOT_STARTED,component:St},{status:N.RUNNING,component:Ie},{status:N.PAUSED,component:Ie},{status:N.RESUME,component:Ie},{status:N.GAME_OVER,component:rt},{status:N.ALL_LEVELS_CLEARED,component:yt}];let{update:e,subscribe:n}=qe(t.find(r=>r.status==N.ALL_LEVELS_CLEARED));return{subscribe:n,startGame:()=>{e(r=>(r=t.find(_=>_.status==N.RUNNING),r))},pauseGame:()=>{e(r=>(r=t.find(_=>_.status==N.PAUSED),r))},resumeGame:()=>{e(r=>(r=t.find(_=>_.status==N.RUNNING),r))},gameOver:()=>{e(r=>(r=t.find(_=>_.status==N.GAME_OVER),r))},welcomeScreen:()=>{e(r=>(r=t.find(_=>_.status==N.NOT_STARTED),r))},allLevelsCleared:()=>{e(r=>(r=t.find(_=>_.status==N.ALL_LEVELS_CLEARED),r))}}},D=Ct();function Nt(t){let e,n,o;var s=t[0].component;function c(l){return{}}return s&&(n=new s(c())),{c(){e=a("div"),n&&le(n.$$.fragment),d(e,"class","container svelte-16au4d0"),L(e,"width",h.SCREEN_WIDTH+"px"),L(e,"height",h.SCREEN_HEIGHT+"px")},m(l,i){R(l,e,i),n&&Q(n,e,null),o=!0},p(l,[i]){if(s!==(s=l[0].component)){if(n){We();const f=n;W(f.$$.fragment,1,0,()=>{X(f,1)}),Ve()}s?(n=new s(c()),le(n.$$.fragment),U(n.$$.fragment,1),Q(n,e,null)):n=null}},i(l){o||(n&&U(n.$$.fragment,l),o=!0)},o(l){n&&W(n.$$.fragment,l),o=!1},d(l){l&&O(e),n&&X(n)}}}function It(t,e,n){let o;return D.subscribe(s=>{n(0,o=s)}),[o]}class Ot extends M{constructor(e){super(),P(this,e,It,Nt,Z,{})}}new Ot({target:document.getElementById("app")});
