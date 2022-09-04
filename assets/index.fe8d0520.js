(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();function D(){}function tt(t){return t()}function Pe(){return Object.create(null)}function me(t){t.forEach(tt)}function rt(t){return typeof t=="function"}function X(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function it(t){return Object.keys(t).length===0}function ge(t){return t==null?"":t}function f(t,e){t.appendChild(e)}function K(t,e,l){t.insertBefore(e,l||null)}function U(t){t.parentNode.removeChild(t)}function nt(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function y(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function q(t){return document.createTextNode(t)}function $(){return q(" ")}function Ze(){return q("")}function ye(t,e,l,o){return t.addEventListener(e,l,o),()=>t.removeEventListener(e,l,o)}function n(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function ct(t){return Array.from(t.childNodes)}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e,l,o){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,o?"important":"")}function ft(t,e,{bubbles:l=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,l,o,e),s}let we;function ve(t){we=t}function lt(){if(!we)throw new Error("Function called outside component initialization");return we}function at(t){lt().$$.on_mount.push(t)}function ut(){const t=lt();return(e,l,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=ft(e,l,{cancelable:o});return s.slice().forEach(r=>{r.call(t,i)}),!i.defaultPrevented}return!0}}const Ee=[],qe=[],Be=[],We=[],dt=Promise.resolve();let Re=!1;function _t(){Re||(Re=!0,dt.then(st))}function Me(t){Be.push(t)}const De=new Set;let Ge=0;function st(){const t=we;do{for(;Ge<Ee.length;){const e=Ee[Ge];Ge++,ve(e),pt(e.$$)}for(ve(null),Ee.length=0,Ge=0;qe.length;)qe.pop()();for(let e=0;e<Be.length;e+=1){const l=Be[e];De.has(l)||(De.add(l),l())}Be.length=0}while(Ee.length);for(;We.length;)We.pop()();Re=!1,De.clear(),ve(t)}function pt(t){if(t.fragment!==null){t.update(),me(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Me)}}const Ne=new Set;let ae;function be(){ae={r:0,c:[],p:ae}}function ke(){ae.r||me(ae.c),ae=ae.p}function M(t,e){t&&t.i&&(Ne.delete(t),t.i(e))}function H(t,e,l,o){if(t&&t.o){if(Ne.has(t))return;Ne.add(t),ae.c.push(()=>{Ne.delete(t),o&&(l&&t.d(1),o())}),t.o(e)}else o&&o()}function ht(t,e){H(t,1,1,()=>{e.delete(t.key)})}function gt(t,e,l,o,s,i,r,c,a,u,p,h){let _=t.length,w=i.length,m=_;const b={};for(;m--;)b[t[m].key]=m;const O=[],B=new Map,I=new Map;for(m=w;m--;){const E=h(s,i,m),C=l(E);let F=r.get(C);F?o&&F.p(E,e):(F=u(C,E),F.c()),B.set(C,O[m]=F),C in b&&I.set(C,Math.abs(m-b[C]))}const G=new Set,A=new Set;function x(E){M(E,1),E.m(c,p),r.set(E.key,E),p=E.first,w--}for(;_&&w;){const E=O[w-1],C=t[_-1],F=E.key,W=C.key;E===C?(p=E.first,_--,w--):B.has(W)?!r.has(F)||G.has(F)?x(E):A.has(W)?_--:I.get(F)>I.get(W)?(A.add(F),x(E)):(G.add(W),_--):(a(C,r),_--)}for(;_--;){const E=t[_];B.has(E.key)||a(E,r)}for(;w;)x(O[w-1]);return O}function oe(t){t&&t.c()}function ne(t,e,l,o){const{fragment:s,on_mount:i,on_destroy:r,after_update:c}=t.$$;s&&s.m(e,l),o||Me(()=>{const a=i.map(tt).filter(rt);r?r.push(...a):me(a),t.$$.on_mount=[]}),c.forEach(Me)}function le(t,e){const l=t.$$;l.fragment!==null&&(me(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(Ee.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,l,o,s,i,r,c=[-1]){const a=we;ve(t);const u=t.$$={fragment:null,ctx:null,props:i,update:D,not_equal:s,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Pe(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};r&&r(u.root);let p=!1;if(u.ctx=l?l(t,e.props||{},(h,_,...w)=>{const m=w.length?w[0]:_;return u.ctx&&s(u.ctx[h],u.ctx[h]=m)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](m),p&&mt(t,h)),_}):[],u.update(),p=!0,me(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){const h=ct(e.target);u.fragment&&u.fragment.l(h),h.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&M(t.$$.fragment),ne(t,e.target,e.anchor,e.customElement),st()}ve(a)}class Q{$destroy(){le(this,1),this.$destroy=D}$on(e,l){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(l),()=>{const s=o.indexOf(l);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var R=(t=>(t.UP="up",t.RIGHT="right",t.LEFT="left",t.DOWN="down",t.UNKNOWN="",t))(R||{}),v=(t=>(t[t.SCREEN_WIDTH=600]="SCREEN_WIDTH",t[t.SCREEN_HEIGHT=400]="SCREEN_HEIGHT",t[t.BLOCK_SIZE=50]="BLOCK_SIZE",t))(v||{}),fe=(t=>(t[t.DELAY=50]="DELAY",t[t.MAX_POINTS=10]="MAX_POINTS",t[t.BONUS_TIME=5e3]="BONUS_TIME",t[t.MESSAGE_TIME=3e3]="MESSAGE_TIME",t))(fe||{}),pe=(t=>(t.UP="ArrowUp",t.LEFT="ArrowLeft",t.RIGHT="ArrowRight",t.DOWN="ArrowDown",t.SPACEBAR="Space",t))(pe||{}),Se=(t=>(t.NEXT_LEVEL="Next Level",t.GAME_OVER="Game Over",t))(Se||{});const _e=[];function ot(t,e=D){let l;const o=new Set;function s(c){if(X(t,c)&&(t=c,l)){const a=!_e.length;for(const u of o)u[1](),_e.push(u,t);if(a){for(let u=0;u<_e.length;u+=2)_e[u][0](_e[u+1]);_e.length=0}}}function i(c){s(c(t))}function r(c,a=D){const u=[c,a];return o.add(u),o.size===1&&(l=e(s)||D),c(t),()=>{o.delete(u),o.size===0&&(l(),l=null)}}return{set:s,update:i,subscribe:r}}const Et=()=>{let t={playerName:"Abhay",level:1,stage:1,score:0,highScore:0,bonus:0,food:0},{update:e,subscribe:l}=ot(t);return{subscribe:l,resetScore:()=>{e(c=>(c.food=0,c.bonus=0,c.score=0,c))},eatFood:()=>{e(c=>(c.food=c.food+1,c.score=c.food*5+c.bonus*20,c.score>c.highScore&&(c.highScore=c.score),c))},getBonus:()=>{e(c=>(c.bonus=c.bonus+1,c))},nextLevel:()=>{e(c=>(c.level=c.level+1,c))}}};let ie=Et();function St(t){let e,l,o,s,i,r,c,a,u,p,h,_,w,m,b,O;return{c(){e=y("div"),l=d("svg"),o=d("g"),s=d("g"),i=d("g"),r=d("g"),c=d("ellipse"),a=d("g"),u=d("path"),p=d("path"),h=d("g"),_=d("path"),w=d("g"),m=d("path"),b=d("g"),O=d("ellipse"),n(o,"id","Layer_1"),n(c,"id","shadow"),n(c,"opacity","0.3"),n(c,"cx","438.7"),n(c,"cy","765.8"),n(c,"rx","283"),n(c,"ry","32.9"),n(u,"id","cup-shadow"),n(u,"fill","#E7F4FA"),n(u,"d",`M135.4,492.8c0,0,17,201,77,230c81.1,39.2,258,43.7,392,25.1\r
            c100.5-13.9,115.1-120.1,122-154.4c8-39.7,19.5-119,6.5-137S217.4,370.8,135.4,492.8z`),n(p,"id","cup-light"),n(p,"fill","#FFFFFF"),n(p,"d",`M155.8,563.9c0,0,12.5,129.5,68.5,151.7c75.8,30,241,33.4,366.1,19.2\r
            c93.8-10.7,107.5-92,114-118.3c7.5-30.4,22.7-73.8,15.3-89C711.8,510.9,478.4,406.5,155.8,563.9z`),n(_,"id","mainFood"),n(_,"fill","#DB343C"),n(_,"d",`M57,240.8c35.9-55.2,83.5-142,189.1-192.7C365.6-9.3,527.4-11.2,598.8,20.8\r
            c41.7,18.7,160.6,74,214.5,205.5c92,224.4,10.9,261.8-27.3,263.6s-285.6-42.4-347.6-36.1c-59.9,6.1-148.2,2.1-312.4,77.9\r
            C54.4,564.8,8.4,515.8,0.6,479C-3.5,459.8,13.4,307.8,57,240.8z`),n(m,"id","highlight"),n(m,"opacity","0.3"),n(m,"fill","#FFFFFF"),n(m,"stroke","#000000"),n(m,"stroke-width","0.25"),n(m,"stroke-miterlimit","10"),n(m,"d",`M231.4,76.8\r
            c74.3-34.1,184.9-82.6,345-35c148,44,244,176,207,256s-53.4,66.9-110,58c-83-13-226-101-256-120s-175-97-186-111\r
            S189.5,96,231.4,76.8z`),n(O,"id","c2"),n(O,"fill","#FFFFFF"),n(O,"cx","436.8"),n(O,"cy","144.3"),n(O,"rx","140.6"),n(O,"ry","138.4"),n(b,"id","c1"),n(s,"id","Layer_2"),n(l,"viewBox","0 0 855.6 798.6"),n(e,"class","food svelte-h8lqdv"),g(e,"left",t[1]+"px"),g(e,"top",t[0]+"px"),g(e,"width",v.BLOCK_SIZE-2+"px"),g(e,"height",v.BLOCK_SIZE-2+"px")},m(B,I){K(B,e,I),f(e,l),f(l,o),f(l,s),f(s,i),f(i,r),f(r,c),f(i,a),f(a,u),f(a,p),f(i,h),f(h,_),f(i,w),f(w,m),f(i,b),f(b,O)},p(B,[I]){I&2&&g(e,"left",B[1]+"px"),I&1&&g(e,"top",B[0]+"px")},i:D,o:D,d(B){B&&U(e)}}}function vt(t,e,l){let{top:o=0}=e,{left:s=0}=e;return t.$$set=i=>{"top"in i&&l(0,o=i.top),"left"in i&&l(1,s=i.left)},[o,s]}class yt extends Q{constructor(e){super(),J(this,e,vt,St,X,{top:0,left:1})}}function wt(t){let e,l,o,s,i;return{c(){e=y("div"),l=d("svg"),o=d("style"),s=q(`.red {\r
        fill: red;\r
        animation: blink 250ms linear infinite;\r
      }\r
      @keyframes blink {\r
        0% {\r
          fill: yellow;\r
        }\r
        50% {\r
          /* opacity: 0.5; */\r
        }\r
        100% {\r
          fill: red;\r
        }\r
      }\r
    `),i=d("polygon"),n(o,"id","style2"),n(i,"fill","#FFA300"),n(i,"stroke","#EB0000"),n(i,"stroke-width","0.25"),n(i,"stroke-miterlimit","10"),n(i,"points",`221.7,0.3 290.1,138.9 443.1,161.1 \r
        332.4,269 358.5,421.4 221.7,349.5 84.8,421.4 111,269 0.3,161.1 153.3,138.9 `),n(i,"class","red"),n(l,"viewBox","0 0 443.3 421.6"),n(e,"class","bonus svelte-y90akj"),g(e,"width",v.BLOCK_SIZE+"px"),g(e,"height",v.BLOCK_SIZE+"px"),g(e,"left",t[0]+"px"),g(e,"top",t[1]+"px")},m(r,c){K(r,e,c),f(e,l),f(l,o),f(o,s),f(l,i)},p(r,[c]){c&1&&g(e,"left",r[0]+"px"),c&2&&g(e,"top",r[1]+"px")},i:D,o:D,d(r){r&&U(e)}}}function bt(t,e,l){const o=ut();let{left:s}=e,{top:i}=e,{id:r}=e;return at(()=>{setTimeout(()=>{o("bonusFinished",r)},fe.BONUS_TIME)}),t.$$set=c=>{"left"in c&&l(0,s=c.left),"top"in c&&l(1,i=c.top),"id"in c&&l(2,r=c.id)},[s,i,r]}class kt extends Q{constructor(e){super(),J(this,e,bt,wt,X,{left:0,top:1,id:2})}}function It(t){let e,l,o,s,i,r,c,a=t[0].playerName+"",u,p,h,_,w,m=t[0].score+"",b,O,B,I,G,A=t[0].food+"",x,E,C,F,W,Y=t[0].bonus+"",re,T,S,L,Z,k=t[0].highScore+"",N,V,j,P,ue,Ie=t[0].level+"",xe,Fe,Le=t[0].stage+"",Ae,$e,de,Ce,He,Oe,Te,Ve;return{c(){e=y("div"),l=y("div"),l.textContent="Snake",o=$(),s=y("table"),i=y("tr"),r=y("td"),r.textContent="Player",c=y("td"),u=q(a),p=$(),h=y("tr"),_=y("td"),_.textContent="Score",w=y("td"),b=q(m),O=$(),B=y("tr"),I=y("td"),I.textContent="Food",G=y("td"),x=q(A),E=$(),C=y("tr"),F=y("td"),F.textContent="Bonus",W=y("td"),re=q(Y),T=$(),S=y("tr"),L=y("td"),L.textContent="High Score",Z=y("td"),N=q(k),V=$(),j=y("tr"),P=y("td"),P.textContent="Level-Stage",ue=y("td"),xe=q(Ie),Fe=y("span"),Fe.textContent="-",Ae=q(Le),$e=$(),de=y("div"),Ce=y("button"),Ce.textContent="Replay",He=$(),Oe=y("button"),Oe.textContent="Menu",n(l,"class","title svelte-mdywih"),n(r,"class","c1 svelte-mdywih"),n(c,"class","c2 svelte-mdywih"),n(_,"class","c1 svelte-mdywih"),n(w,"class","c2 svelte-mdywih"),n(I,"class","c1 svelte-mdywih"),n(G,"class","c2 svelte-mdywih"),n(F,"class","c1 svelte-mdywih"),n(W,"class","c2 svelte-mdywih"),n(L,"class","c1 svelte-mdywih"),n(Z,"class","c2 svelte-mdywih"),n(P,"class","c1 svelte-mdywih"),n(ue,"class","c2 svelte-mdywih"),n(s,"class","svelte-mdywih"),n(de,"class","flex svelte-mdywih"),n(e,"class","game-over-screen svelte-mdywih")},m(ee,se){K(ee,e,se),f(e,l),f(e,o),f(e,s),f(s,i),f(i,r),f(i,c),f(c,u),f(s,p),f(s,h),f(h,_),f(h,w),f(w,b),f(s,O),f(s,B),f(B,I),f(B,G),f(G,x),f(s,E),f(s,C),f(C,F),f(C,W),f(W,re),f(s,T),f(s,S),f(S,L),f(S,Z),f(Z,N),f(s,V),f(s,j),f(j,P),f(j,ue),f(ue,xe),f(ue,Fe),f(ue,Ae),f(e,$e),f(e,de),f(de,Ce),f(de,He),f(de,Oe),Te||(Ve=[ye(Ce,"click",t[2]),ye(Oe,"click",t[1])],Te=!0)},p(ee,[se]){se&1&&a!==(a=ee[0].playerName+"")&&te(u,a),se&1&&m!==(m=ee[0].score+"")&&te(b,m),se&1&&A!==(A=ee[0].food+"")&&te(x,A),se&1&&Y!==(Y=ee[0].bonus+"")&&te(re,Y),se&1&&k!==(k=ee[0].highScore+"")&&te(N,k),se&1&&Ie!==(Ie=ee[0].level+"")&&te(xe,Ie),se&1&&Le!==(Le=ee[0].stage+"")&&te(Ae,Le)},i:D,o:D,d(ee){ee&&U(e),Te=!1,me(Ve)}}}function Lt(t,e,l){const o=()=>{console.log("restart game"),ce.welcomeScreen()},s=()=>{ie.resetScore(),ce.startGame()};let i;return ie.subscribe(r=>{l(0,i=r)}),[i,o,s]}class Ct extends Q{constructor(e){super(),J(this,e,Lt,It,X,{})}}function Ot(t){let e,l,o;return{c(){e=d("svg"),l=d("rect"),n(l,"y","77"),n(l,"fill","#0037FF"),n(l,"width","258"),n(l,"height","102"),n(e,"viewBox","0 0 258 258"),n(e,"class",o=ge(t[4])+" svelte-1squm21")},m(s,i){K(s,e,i),f(e,l)},p(s,i){i&16&&o!==(o=ge(s[4])+" svelte-1squm21")&&n(e,"class",o)},d(s){s&&U(e)}}}function Gt(t){let e,l,o;return{c(){e=d("svg"),l=d("polygon"),n(l,"fill","#0037FF"),n(l,"points","258,179 0,128 0,128 258,77 "),n(e,"viewBox","0 0 258 258"),n(e,"class",o=ge(t[4])+" svelte-1squm21")},m(s,i){K(s,e,i),f(e,l)},p(s,i){i&16&&o!==(o=ge(s[4])+" svelte-1squm21")&&n(e,"class",o)},d(s){s&&U(e)}}}function Bt(t){let e,l,o,s,i,r,c;return{c(){e=d("svg"),l=d("g"),o=d("rect"),s=d("path"),i=d("circle"),r=d("circle"),n(o,"opacity","0"),n(o,"fill","#FFFFFF"),n(o,"width","258"),n(o,"height","258"),n(s,"fill","#0037FF"),n(s,"d",`M147.5,29.2C111.6,29.2,80.1,48,62.6,77H0v104h62.6c17.5,28,49,47.3,84.9,47.3c55,0,99.6-44.6,99.6-99.6\r
        S202.5,29.2,147.5,29.2z`),n(i,"fill","#FFF800"),n(i,"stroke","#000000"),n(i,"stroke-miterlimit","10"),n(i,"cx","184.3"),n(i,"cy","84.5"),n(i,"r","21.8"),n(r,"fill","#FFF800"),n(r,"stroke","#000000"),n(r,"stroke-miterlimit","10"),n(r,"cx","184.3"),n(r,"cy","164.5"),n(r,"r","21.8"),n(e,"viewBox","0 0 258 258"),n(e,"class",c=ge(t[4])+" svelte-1squm21")},m(a,u){K(a,e,u),f(e,l),f(l,o),f(l,s),f(l,i),f(l,r)},p(a,u){u&16&&c!==(c=ge(a[4])+" svelte-1squm21")&&n(e,"class",c)},d(a){a&&U(e)}}}function Nt(t){let e;function l(i,r){return i[2]?Bt:i[3]?Gt:Ot}let o=l(t),s=o(t);return{c(){e=y("div"),s.c(),g(e,"left",t[1]+"px"),g(e,"top",t[0]+"px"),g(e,"width",v.BLOCK_SIZE+"px"),g(e,"height",v.BLOCK_SIZE+"px"),n(e,"class","snake-body svelte-1squm21")},m(i,r){K(i,e,r),s.m(e,null)},p(i,[r]){o===(o=l(i))&&s?s.p(i,r):(s.d(1),s=o(i),s&&(s.c(),s.m(e,null))),r&2&&g(e,"left",i[1]+"px"),r&1&&g(e,"top",i[0]+"px")},i:D,o:D,d(i){i&&U(e),s.d()}}}function xt(t,e,l){let{top:o=v.BLOCK_SIZE}=e,{left:s=v.BLOCK_SIZE}=e,{isHead:i=!1}=e,{isTail:r=!1}=e,{direction:c="right"}=e;return t.$$set=a=>{"top"in a&&l(0,o=a.top),"left"in a&&l(1,s=a.left),"isHead"in a&&l(2,i=a.isHead),"isTail"in a&&l(3,r=a.isTail),"direction"in a&&l(4,c=a.direction)},[o,s,i,r,c]}class Ft extends Q{constructor(e){super(),J(this,e,xt,Nt,X,{top:0,left:1,isHead:2,isTail:3,direction:4})}}function ze(t,e,l){const o=t.slice();return o[2]=e[l],o[4]=l,o}function je(t){let e,l;return e=new Ft({props:{isHead:t[4]==0,isTail:t[4]==t[0].length-1,top:t[2].top,left:t[2].left,direction:t[1]}}),{c(){oe(e.$$.fragment)},m(o,s){ne(e,o,s),l=!0},p(o,s){const i={};s&1&&(i.isTail=o[4]==o[0].length-1),s&1&&(i.top=o[2].top),s&1&&(i.left=o[2].left),s&2&&(i.direction=o[1]),e.$set(i)},i(o){l||(M(e.$$.fragment,o),l=!0)},o(o){H(e.$$.fragment,o),l=!1},d(o){le(e,o)}}}function At(t){let e,l,o=t[0],s=[];for(let r=0;r<o.length;r+=1)s[r]=je(ze(t,o,r));const i=r=>H(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=Ze()},m(r,c){for(let a=0;a<s.length;a+=1)s[a].m(r,c);K(r,e,c),l=!0},p(r,[c]){if(c&3){o=r[0];let a;for(a=0;a<o.length;a+=1){const u=ze(r,o,a);s[a]?(s[a].p(u,c),M(s[a],1)):(s[a]=je(u),s[a].c(),M(s[a],1),s[a].m(e.parentNode,e))}for(be(),a=o.length;a<s.length;a+=1)i(a);ke()}},i(r){if(!l){for(let c=0;c<o.length;c+=1)M(s[c]);l=!0}},o(r){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)H(s[c]);l=!1},d(r){nt(s,r),r&&U(e)}}}function Tt(t,e,l){let{snakeBodies:o=[]}=e,{direction:s="right"}=e;return t.$$set=i=>{"snakeBodies"in i&&l(0,o=i.snakeBodies),"direction"in i&&l(1,s=i.direction)},[o,s]}class Dt extends Q{constructor(e){super(),J(this,e,Tt,At,X,{snakeBodies:0,direction:1})}}var Ke=(t=>(t[t.DEFAULT=0]="DEFAULT",t[t.ROCK=1]="ROCK",t[t.CONCRETE=2]="CONCRETE",t))(Ke||{});const he=[{bg:"#affbaf",wall:[{type:0,top:v.BLOCK_SIZE*2,left:v.BLOCK_SIZE*2},{type:1,top:v.BLOCK_SIZE*2,left:v.BLOCK_SIZE*3},{type:1,top:v.BLOCK_SIZE*2,left:v.BLOCK_SIZE*4},{type:0,top:v.BLOCK_SIZE*2,left:v.BLOCK_SIZE*5},{type:2,top:v.BLOCK_SIZE,left:v.BLOCK_SIZE*3},{type:2,top:v.BLOCK_SIZE*3,left:v.BLOCK_SIZE*4}]},{bg:"#fda2f2",wall:[{type:0,top:200,left:100},{type:1,top:200,left:125},{type:1,top:200,left:150},{type:0,top:200,left:175},{type:2,top:175,left:125},{type:2,top:225,left:150}]},{bg:"#7f61bb",wall:[]},{bg:"#c34366",wall:[]}],Ut=()=>Date.now().toString(36)+Math.random().toString(36).substr(2);function Rt(t){let e,l,o;return{c(){e=y("div"),l=y("h1"),o=q(t[0]),n(l,"class","svelte-1x8upsq"),n(e,"class","message-box svelte-1x8upsq")},m(s,i){K(s,e,i),f(e,l),f(l,o)},p(s,[i]){i&1&&te(o,s[0])},i:D,o:D,d(s){s&&U(e)}}}function Mt(t,e,l){let{message:o=""}=e;return t.$$set=s=>{"message"in s&&l(0,o=s.message)},[o]}class Kt extends Q{constructor(e){super(),J(this,e,Mt,Rt,X,{message:0})}}function Zt(t){let e,l,o,s,i,r,c,a,u;return{c(){e=d("svg"),l=d("radialGradient"),o=d("stop"),s=d("stop"),i=d("rect"),r=d("linearGradient"),c=d("stop"),a=d("stop"),u=d("rect"),n(o,"offset","0"),g(o,"stop-color","#333333"),n(s,"offset","1"),g(s,"stop-color","#000000"),n(l,"id","rock_svgid"),n(l,"cx","219.5"),n(l,"cy","219.5"),n(l,"r","219"),n(l,"gradientUnits","userSpaceOnUse"),n(i,"x","0.5"),n(i,"y","0.5"),n(i,"fill","url(#rock_svgid)"),n(i,"stroke","#000000"),n(i,"stroke-miterlimit","10"),n(i,"width","438"),n(i,"height","438"),n(c,"offset","0"),g(c,"stop-color","#000000"),g(c,"stop-opacity","0"),n(a,"offset","1"),g(a,"stop-color","#FFFFFF"),g(a,"stop-opacity","0.5"),n(r,"id","rock_svgid2"),n(r,"gradientUnits","userSpaceOnUse"),n(r,"x1","219"),n(r,"y1","431"),n(r,"x2","219"),n(r,"y2","9.0005"),n(u,"x","8"),n(u,"y","9"),n(u,"fill","url(#rock_svgid2)"),n(u,"width","422"),n(u,"height","422"),n(e,"viewBox","0 0 439 439")},m(p,h){K(p,e,h),f(e,l),f(l,o),f(l,s),f(e,i),f(e,r),f(r,c),f(r,a),f(e,u)},d(p){p&&U(e)}}}function $t(t){let e,l,o,s,i,r,c,a,u,p,h,_,w,m,b,O,B,I,G,A,x,E;return{c(){e=d("svg"),l=d("g"),o=d("linearGradient"),s=d("stop"),i=d("stop"),r=d("rect"),c=d("linearGradient"),a=d("stop"),u=d("stop"),p=d("rect"),h=d("linearGradient"),_=d("stop"),w=d("stop"),m=d("polygon"),b=d("linearGradient"),O=d("stop"),B=d("stop"),I=d("rect"),G=d("linearGradient"),A=d("stop"),x=d("stop"),E=d("rect"),n(s,"offset","0"),g(s,"stop-color","#998675"),n(i,"offset","1"),g(i,"stop-color","#C7B299"),n(o,"id","concrete_SVGID_1_"),n(o,"gradientUnits","userSpaceOnUse"),n(o,"x1","4"),n(o,"y1","96.5"),n(o,"x2","281"),n(o,"y2","96.5"),n(r,"x","4"),n(r,"y","4"),n(r,"fill","url(#concrete_SVGID_1_)"),n(r,"stroke","#CABD99"),n(r,"stroke-width","8"),n(r,"stroke-miterlimit","10"),n(r,"width","277"),n(r,"height","185"),n(a,"offset","0"),g(a,"stop-color","#998675"),n(u,"offset","1"),g(u,"stop-color","#C7B299"),n(c,"id","concrete_SVGID_2_"),n(c,"gradientUnits","userSpaceOnUse"),n(c,"x1","420"),n(c,"y1","189"),n(c,"x2","420"),n(c,"y2","4"),n(p,"x","281"),n(p,"y","4"),n(p,"fill","url(#concrete_SVGID_2_)"),n(p,"stroke","#CABD99"),n(p,"stroke-width","8"),n(p,"stroke-miterlimit","10"),n(p,"width","278"),n(p,"height","185"),n(_,"offset","0"),g(_,"stop-color","#998675"),n(w,"offset","1"),g(w,"stop-color","#C7B299"),n(h,"id","concrete_SVGID_3_"),n(h,"gradientUnits","userSpaceOnUse"),n(h,"x1","281.5"),n(h,"y1","374"),n(h,"x2","281.5"),n(h,"y2","189.0005"),n(m,"fill","url(#concrete_SVGID_3_)"),n(m,"stroke","#CABD99"),n(m,"stroke-width","8"),n(m,"stroke-miterlimit","10"),n(m,"points",`281,189 4,189 4,374 281,374 \r
    559,374 559,189 	`),n(O,"offset","0"),g(O,"stop-color","#998675"),n(B,"offset","1"),g(B,"stop-color","#C7B299"),n(b,"id","concrete_SVGID_4_"),n(b,"gradientUnits","userSpaceOnUse"),n(b,"x1","4"),n(b,"y1","466.5"),n(b,"x2","281"),n(b,"y2","466.5"),n(I,"x","4"),n(I,"y","374"),n(I,"fill","url(#concrete_SVGID_4_)"),n(I,"stroke","#CABD99"),n(I,"stroke-width","8"),n(I,"stroke-miterlimit","10"),n(I,"width","277"),n(I,"height","185"),n(A,"offset","0"),g(A,"stop-color","#998675"),n(x,"offset","1"),g(x,"stop-color","#C7B299"),n(G,"id","concrete_SVGID_5_"),n(G,"gradientUnits","userSpaceOnUse"),n(G,"x1","281"),n(G,"y1","466.5"),n(G,"x2","559"),n(G,"y2","466.5"),n(E,"x","281"),n(E,"y","374"),n(E,"fill","url(#concrete_SVGID_5_)"),n(E,"stroke","#CABD99"),n(E,"stroke-width","8"),n(E,"stroke-miterlimit","10"),n(E,"width","278"),n(E,"height","185"),n(e,"viewBox","0 0 563 563")},m(C,F){K(C,e,F),f(e,l),f(l,o),f(o,s),f(o,i),f(l,r),f(l,c),f(c,a),f(c,u),f(l,p),f(l,h),f(h,_),f(h,w),f(l,m),f(l,b),f(b,O),f(b,B),f(l,I),f(l,G),f(G,A),f(G,x),f(l,E)},d(C){C&&U(e)}}}function Ht(t){let e,l,o,s,i,r,c,a,u,p,h,_,w,m,b,O,B,I,G,A,x,E;return{c(){e=d("svg"),l=d("g"),o=d("linearGradient"),s=d("stop"),i=d("stop"),r=d("rect"),c=d("linearGradient"),a=d("stop"),u=d("stop"),p=d("rect"),h=d("linearGradient"),_=d("stop"),w=d("stop"),m=d("polygon"),b=d("linearGradient"),O=d("stop"),B=d("stop"),I=d("rect"),G=d("linearGradient"),A=d("stop"),x=d("stop"),E=d("rect"),n(s,"offset","0"),g(s,"stop-color","#9E2000"),n(i,"offset","1"),g(i,"stop-color","#F15A24"),n(o,"id","brick_SVGID_1_"),n(o,"gradientUnits","userSpaceOnUse"),n(o,"x1","4"),n(o,"y1","96.5"),n(o,"x2","281"),n(o,"y2","96.5"),n(r,"x","4"),n(r,"y","4"),n(r,"fill","url(#brick_SVGID_1_)"),n(r,"stroke","#000000"),n(r,"stroke-width","8"),n(r,"stroke-miterlimit","10"),n(r,"width","277"),n(r,"height","185"),n(a,"offset","0"),g(a,"stop-color","#9E2000"),n(u,"offset","1"),g(u,"stop-color","#F15A24"),n(c,"id","SVGID_2_"),n(c,"gradientUnits","userSpaceOnUse"),n(c,"x1","420"),n(c,"y1","189"),n(c,"x2","420"),n(c,"y2","4"),n(p,"x","281"),n(p,"y","4"),n(p,"fill","url(#SVGID_2_)"),n(p,"stroke","#000000"),n(p,"stroke-width","8"),n(p,"stroke-miterlimit","10"),n(p,"width","278"),n(p,"height","185"),n(_,"offset","0"),g(_,"stop-color","#9E2000"),n(w,"offset","1"),g(w,"stop-color","#F15A24"),n(h,"id","SVGID_3_"),n(h,"gradientUnits","userSpaceOnUse"),n(h,"x1","281.5"),n(h,"y1","374"),n(h,"x2","281.5"),n(h,"y2","189.0005"),n(m,"fill","url(#SVGID_3_)"),n(m,"stroke","#000000"),n(m,"stroke-width","8"),n(m,"stroke-miterlimit","10"),n(m,"points",`281,189 4,189 4,374 281,374 \r
            559,374 559,189 	`),n(O,"offset","0"),g(O,"stop-color","#9E2000"),n(B,"offset","1"),g(B,"stop-color","#F15A24"),n(b,"id","SVGID_4_"),n(b,"gradientUnits","userSpaceOnUse"),n(b,"x1","4"),n(b,"y1","466.5"),n(b,"x2","281"),n(b,"y2","466.5"),n(I,"x","4"),n(I,"y","374"),n(I,"fill","url(#SVGID_4_)"),n(I,"stroke","#000000"),n(I,"stroke-width","8"),n(I,"stroke-miterlimit","10"),n(I,"width","277"),n(I,"height","185"),n(A,"offset","0"),g(A,"stop-color","#9E2000"),n(x,"offset","1"),g(x,"stop-color","#F15A24"),n(G,"id","SVGID_5_"),n(G,"gradientUnits","userSpaceOnUse"),n(G,"x1","281"),n(G,"y1","466.5"),n(G,"x2","559"),n(G,"y2","466.5"),n(E,"x","281"),n(E,"y","374"),n(E,"fill","url(#SVGID_5_)"),n(E,"stroke","#000000"),n(E,"stroke-width","8"),n(E,"stroke-miterlimit","10"),n(E,"width","278"),n(E,"height","185"),n(e,"viewBox","0 0 563 563")},m(C,F){K(C,e,F),f(e,l),f(l,o),f(o,s),f(o,i),f(l,r),f(l,c),f(c,a),f(c,u),f(l,p),f(l,h),f(h,_),f(h,w),f(l,m),f(l,b),f(b,O),f(b,B),f(l,I),f(l,G),f(G,A),f(G,x),f(l,E)},d(C){C&&U(e)}}}function Vt(t){let e;function l(i,r){return i[0].type==Ke.DEFAULT?Ht:i[0].type==Ke.CONCRETE?$t:Zt}let o=l(t),s=o(t);return{c(){e=y("div"),s.c(),n(e,"class","brick svelte-1ezhfpr"),g(e,"top",t[0].top+"px"),g(e,"left",t[0].left+"px"),g(e,"width",v.BLOCK_SIZE+"px"),g(e,"height",v.BLOCK_SIZE+"px")},m(i,r){K(i,e,r),s.m(e,null)},p(i,[r]){o!==(o=l(i))&&(s.d(1),s=o(i),s&&(s.c(),s.m(e,null))),r&1&&g(e,"top",i[0].top+"px"),r&1&&g(e,"left",i[0].left+"px")},i:D,o:D,d(i){i&&U(e),s.d()}}}function Pt(t,e,l){let{data:o}=e;return t.$$set=s=>{"data"in s&&l(0,o=s.data)},[o]}class qt extends Q{constructor(e){super(),J(this,e,Pt,Vt,X,{data:0})}}function Xe(t,e,l){const o=t.slice();return o[2]=e[l],o}function Ye(t){let e,l;return e=new qt({props:{data:t[2]}}),{c(){oe(e.$$.fragment)},m(o,s){ne(e,o,s),l=!0},p(o,s){const i={};s&1&&(i.data=o[2]),e.$set(i)},i(o){l||(M(e.$$.fragment,o),l=!0)},o(o){H(e.$$.fragment,o),l=!1},d(o){le(e,o)}}}function Wt(t){let e,l,o=t[0],s=[];for(let r=0;r<o.length;r+=1)s[r]=Ye(Xe(t,o,r));const i=r=>H(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=Ze()},m(r,c){for(let a=0;a<s.length;a+=1)s[a].m(r,c);K(r,e,c),l=!0},p(r,[c]){if(c&1){o=r[0];let a;for(a=0;a<o.length;a+=1){const u=Xe(r,o,a);s[a]?(s[a].p(u,c),M(s[a],1)):(s[a]=Ye(u),s[a].c(),M(s[a],1),s[a].m(e.parentNode,e))}for(be(),a=o.length;a<s.length;a+=1)i(a);ke()}},i(r){if(!l){for(let c=0;c<o.length;c+=1)M(s[c]);l=!0}},o(r){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)H(s[c]);l=!1},d(r){nt(s,r),r&&U(e)}}}function zt(t,e,l){let o,s;return ie.subscribe(i=>{l(1,s=i)}),t.$$.update=()=>{t.$$.dirty&2&&l(0,o=he[s.level-1].wall)},[o,s]}class jt extends Q{constructor(e){super(),J(this,e,zt,Wt,X,{})}}function Je(t,e,l){const o=t.slice();return o[30]=e[l],o}function Qe(t,e){let l,o,s;return o=new kt({props:{id:e[30].id,left:e[30].left,top:e[30].top}}),o.$on("bonusFinished",e[9]),{key:t,first:null,c(){l=Ze(),oe(o.$$.fragment),this.first=l},m(i,r){K(i,l,r),ne(o,i,r),s=!0},p(i,r){e=i;const c={};r[0]&128&&(c.id=e[30].id),r[0]&128&&(c.left=e[30].left),r[0]&128&&(c.top=e[30].top),o.$set(c)},i(i){s||(M(o.$$.fragment,i),s=!0)},o(i){H(o.$$.fragment,i),s=!1},d(i){i&&U(l),le(o,i)}}}function et(t){let e,l;return e=new Kt({props:{message:t[2]}}),{c(){oe(e.$$.fragment)},m(o,s){ne(e,o,s),l=!0},p(o,s){const i={};s[0]&4&&(i.message=o[2]),e.$set(i)},i(o){l||(M(e.$$.fragment,o),l=!0)},o(o){H(e.$$.fragment,o),l=!1},d(o){le(e,o)}}}function Xt(t){let e,l,o,s,i,r,c,a=[],u=new Map,p,h,_,w,m=t[0].level+"",b,O,B=t[0].score+"",I,G,A,x=t[0].bonus+"",E,C,F,W;l=new jt({}),s=new Dt({props:{direction:t[5],snakeBodies:t[6]}}),r=new yt({props:{left:t[3],top:t[4]}});let Y=t[7];const re=S=>S[30].id;for(let S=0;S<Y.length;S+=1){let L=Je(t,Y,S),Z=re(L);u.set(Z,a[S]=Qe(Z,L))}let T=t[1]==!0&&et(t);return{c(){e=y("main"),oe(l.$$.fragment),o=$(),oe(s.$$.fragment),i=$(),oe(r.$$.fragment),c=$();for(let S=0;S<a.length;S+=1)a[S].c();p=$(),T&&T.c(),h=$(),_=y("div"),w=y("div"),b=q(m),O=q(" : "),I=q(B),G=$(),A=y("div"),E=q(x),g(e,"width",v.SCREEN_WIDTH+"px"),g(e,"height",v.SCREEN_HEIGHT+"px"),g(e,"background",he[t[0].level].bg),n(e,"class","svelte-sjb5bh"),n(_,"class","score svelte-sjb5bh")},m(S,L){K(S,e,L),ne(l,e,null),f(e,o),ne(s,e,null),f(e,i),ne(r,e,null),f(e,c);for(let Z=0;Z<a.length;Z+=1)a[Z].m(e,null);f(e,p),T&&T.m(e,null),K(S,h,L),K(S,_,L),f(_,w),f(w,b),f(w,O),f(w,I),f(_,G),f(_,A),f(A,E),C=!0,F||(W=ye(window,"keydown",t[8]),F=!0)},p(S,L){const Z={};L[0]&32&&(Z.direction=S[5]),L[0]&64&&(Z.snakeBodies=S[6]),s.$set(Z);const k={};L[0]&8&&(k.left=S[3]),L[0]&16&&(k.top=S[4]),r.$set(k),L[0]&640&&(Y=S[7],be(),a=gt(a,L,re,1,S,Y,u,e,ht,Qe,p,Je),ke()),S[1]==!0?T?(T.p(S,L),L[0]&2&&M(T,1)):(T=et(S),T.c(),M(T,1),T.m(e,null)):T&&(be(),H(T,1,1,()=>{T=null}),ke()),(!C||L[0]&1)&&g(e,"background",he[S[0].level].bg),(!C||L[0]&1)&&m!==(m=S[0].level+"")&&te(b,m),(!C||L[0]&1)&&B!==(B=S[0].score+"")&&te(I,B),(!C||L[0]&1)&&x!==(x=S[0].bonus+"")&&te(E,x)},i(S){if(!C){M(l.$$.fragment,S),M(s.$$.fragment,S),M(r.$$.fragment,S);for(let L=0;L<Y.length;L+=1)M(a[L]);M(T),C=!0}},o(S){H(l.$$.fragment,S),H(s.$$.fragment,S),H(r.$$.fragment,S);for(let L=0;L<a.length;L+=1)H(a[L]);H(T),C=!1},d(S){S&&U(e),le(l),le(s),le(r);for(let L=0;L<a.length;L+=1)a[L].d();T&&T.d(),S&&U(h),S&&U(_),F=!1,W()}}}function Yt(t,e,l){let o,s=!1,i=!1,r=Se.NEXT_LEVEL,c;ce.subscribe(k=>{}),ie.subscribe(k=>{l(0,c=k)});const a=()=>{B(Se.GAME_OVER),clearInterval(m),setTimeout(()=>{I(),F(),ce.gameOver()},fe.MESSAGE_TIME)};let u=0,p=0,h=R.RIGHT,_=[],w=[],m;const b=v.SCREEN_WIDTH,O=v.SCREEN_HEIGHT,B=k=>{l(2,r=k),l(1,i=!0)},I=()=>{l(1,i=!1),l(2,r=Se.GAME_OVER)},G=()=>{B(Se.NEXT_LEVEL),clearInterval(m),setTimeout(()=>{I(),ie.nextLevel(),ie.resetScore(),A(),F()},fe.MESSAGE_TIME)},A=()=>{let k=he.length-c.level;k=k*fe.DELAY,m=setInterval(()=>{_.pop();let{left:N,top:V}=_[0];h===R.UP?V-=v.BLOCK_SIZE:h===R.DOWN?V+=v.BLOCK_SIZE:h===R.LEFT?N-=v.BLOCK_SIZE:h===R.RIGHT&&(N+=v.BLOCK_SIZE);const j={left:N,top:V};l(6,_=[j,..._]),w.forEach(P=>{x(j,P)&&(Z(P.id),ie.getBonus())}),x(j,{left:u,top:p})&&(l(6,_=[..._,_[_.length-1]]),ie.eatFood(),C(),c.food%5==0&&L(),_.length/fe.MAX_POINTS>1&&_.length%fe.MAX_POINTS==0&&(c.level<he.length-1?G():(clearInterval(m),ce.allLevelsCleared()))),W()&&a()},k)},x=(k,N)=>!(k.top<N.top||k.top>N.top||k.left<N.left||k.left>N.left),E=()=>{let k=0,N=0;for(;;){k=Math.floor(Math.random()*(O/v.BLOCK_SIZE))*v.BLOCK_SIZE,N=Math.floor(Math.random()*(b/v.BLOCK_SIZE))*v.BLOCK_SIZE;let V=_.findIndex(P=>{P.top==k}),j=_.findIndex(P=>{P.left==N});if(V==-1&&j==-1)break}return{top:k,left:N}},C=()=>{const{top:k,left:N}=E();l(3,u=N),l(4,p=k)},F=()=>{C(),l(5,h=R.RIGHT),l(6,_=[{left:v.BLOCK_SIZE*2,top:0},{left:v.BLOCK_SIZE,top:0},{left:0,top:0}])},W=()=>{if(_.slice(1).filter(P=>x(P,_[0])).length>0)return!0;o.forEach(P=>{if(x(_[0],P))return!0});const{top:V,left:j}=_[0];return j>=b&&h==R.RIGHT&&l(6,_[0].left=0,_),j<0&&h==R.LEFT&&l(6,_[0].left=b-v.BLOCK_SIZE,_),V<0&&h==R.UP&&l(6,_[0].top=O-v.BLOCK_SIZE,_),V>=O&&h==R.DOWN&&l(6,_[0].top=0,_),!1},Y=()=>{clearInterval(m)},re=k=>k===pe.UP&&h!=R.DOWN?R.UP:k===pe.RIGHT&&h!=R.LEFT?R.RIGHT:k===pe.LEFT&&h!=R.RIGHT?R.LEFT:k===pe.DOWN&&h!=R.UP?R.DOWN:R.UNKNOWN,T=k=>{const N=k.code;if(N===pe.SPACEBAR&&(s=!s,s?Y():A()),s)return;const V=re(N);V!=R.UNKNOWN&&l(5,h=V)},S=k=>{console.log(`on bonus finished =${k.detail}`),Z(k.detail)},L=()=>{const k=Ut();let N={top:0,left:0,id:k};N.top=Math.floor(Math.random()*(O/v.BLOCK_SIZE))*v.BLOCK_SIZE,N.left=Math.floor(Math.random()*(b/v.BLOCK_SIZE))*v.BLOCK_SIZE,w.push(N),l(7,w)},Z=k=>{const N=w.findIndex(V=>V.id==k);N!=-1&&(w.splice(N,1),l(7,w))};return A(),F(),t.$$.update=()=>{t.$$.dirty[0]&1&&(o=he[c.level-1].wall)},[c,i,r,u,p,h,_,w,T,S]}class Ue extends Q{constructor(e){super(),J(this,e,Yt,Xt,X,{},null,[-1,-1])}}function Jt(t){let e,l,o,s,i,r,c;return{c(){e=y("div"),l=y("div"),l.textContent="Snake",o=$(),s=y("div"),i=y("button"),i.textContent="Start",n(l,"class","title svelte-yxm8be"),n(s,"class","btn svelte-yxm8be"),n(e,"class","start-screen svelte-yxm8be")},m(a,u){K(a,e,u),f(e,l),f(e,o),f(e,s),f(s,i),r||(c=ye(i,"click",t[0]),r=!0)},p:D,i:D,o:D,d(a){a&&U(e),r=!1,c()}}}function Qt(t){return[()=>{console.log("start game"),ce.startGame()}]}class en extends Q{constructor(e){super(),J(this,e,Qt,Jt,X,{})}}function tn(t){let e,l,o,s,i,r,c,a;return{c(){e=y("div"),l=y("div"),l.textContent="Congratulations !",o=$(),s=y("div"),s.textContent="You have cleared all the levels.",i=$(),r=y("button"),r.textContent="Menu",n(l,"class","title svelte-gyhhqq"),n(e,"class","final svelte-gyhhqq")},m(u,p){K(u,e,p),f(e,l),f(e,o),f(e,s),f(e,i),f(e,r),c||(a=ye(r,"click",t[0]),c=!0)},p:D,i:D,o:D,d(u){u&&U(e),c=!1,a()}}}function nn(t){return[()=>{console.log("restart game"),ce.welcomeScreen()}]}class ln extends Q{constructor(e){super(),J(this,e,nn,tn,X,{})}}var z=(t=>(t.NOT_STARTED="NOT_STARTED",t.RUNNING="RUNNING",t.PAUSED="PAUSED",t.RESUME="RESUME",t.GAME_OVER="GAME OVER",t.ALL_LEVELS_CLEARED="ALL_LEVELS_CLEARED",t))(z||{});const sn=()=>{const t=[{status:z.NOT_STARTED,component:en},{status:z.RUNNING,component:Ue},{status:z.PAUSED,component:Ue},{status:z.RESUME,component:Ue},{status:z.GAME_OVER,component:Ct},{status:z.ALL_LEVELS_CLEARED,component:ln}];let{update:e,subscribe:l}=ot(t.find(u=>u.status==z.RUNNING));return{subscribe:l,startGame:()=>{e(u=>(u=t.find(p=>p.status==z.RUNNING),u))},pauseGame:()=>{e(u=>(u=t.find(p=>p.status==z.PAUSED),u))},resumeGame:()=>{e(u=>(u=t.find(p=>p.status==z.RUNNING),u))},gameOver:()=>{e(u=>(u=t.find(p=>p.status==z.GAME_OVER),u))},welcomeScreen:()=>{e(u=>(u=t.find(p=>p.status==z.NOT_STARTED),u))},allLevelsCleared:()=>{e(u=>(u=t.find(p=>p.status==z.ALL_LEVELS_CLEARED),u))}}},ce=sn();function on(t){let e,l,o;var s=t[0].component;function i(r){return{}}return s&&(l=new s(i())),{c(){e=y("div"),l&&oe(l.$$.fragment),n(e,"class","container svelte-16au4d0"),g(e,"width",v.SCREEN_WIDTH+"px"),g(e,"height",v.SCREEN_HEIGHT+"px")},m(r,c){K(r,e,c),l&&ne(l,e,null),o=!0},p(r,[c]){if(s!==(s=r[0].component)){if(l){be();const a=l;H(a.$$.fragment,1,0,()=>{le(a,1)}),ke()}s?(l=new s(i()),oe(l.$$.fragment),M(l.$$.fragment,1),ne(l,e,null)):l=null}},i(r){o||(l&&M(l.$$.fragment,r),o=!0)},o(r){l&&H(l.$$.fragment,r),o=!1},d(r){r&&U(e),l&&le(l)}}}function rn(t,e,l){let o;return ce.subscribe(s=>{l(0,o=s)}),[o]}class cn extends Q{constructor(e){super(),J(this,e,rn,on,X,{})}}new cn({target:document.getElementById("app")});