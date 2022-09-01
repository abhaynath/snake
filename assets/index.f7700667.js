(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function N(){}function We(e){return e()}function $e(){return Object.create(null)}function te(e){e.forEach(We)}function Xe(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ye(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function R(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode.removeChild(e)}function Je(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function a(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function O(){return B(" ")}function Qe(){return B("")}function re(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function et(e){return Array.from(e.childNodes)}function $(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function L(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let Ge;function oe(e){Ge=e}const se=[],De=[],Ee=[],Ue=[],tt=Promise.resolve();let Re=!1;function nt(){Re||(Re=!0,tt.then(Ve))}function we(e){Ee.push(e)}const Te=new Set;let ge=0;function Ve(){const e=Ge;do{for(;ge<se.length;){const t=se[ge];ge++,oe(t),st(t.$$)}for(oe(null),se.length=0,ge=0;De.length;)De.pop()();for(let t=0;t<Ee.length;t+=1){const n=Ee[t];Te.has(n)||(Te.add(n),n())}Ee.length=0}while(se.length);for(;Ue.length;)Ue.pop()();Re=!1,Te.clear(),oe(e)}function st(e){if(e.fragment!==null){e.update(),te(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(we)}}const ve=new Set;let M;function qe(){M={r:0,c:[],p:M}}function ze(){M.r||te(M.c),M=M.p}function D(e,t){e&&e.i&&(ve.delete(e),e.i(t))}function W(e,t,n,o){if(e&&e.o){if(ve.has(e))return;ve.add(e),M.c.push(()=>{ve.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function le(e){e&&e.c()}function Q(e,t,n,o){const{fragment:s,on_mount:c,on_destroy:r,after_update:f}=e.$$;s&&s.m(t,n),o||we(()=>{const i=c.map(We).filter(Xe);r?r.push(...i):te(i),e.$$.on_mount=[]}),f.forEach(we)}function ee(e,t){const n=e.$$;n.fragment!==null&&(te(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,t){e.$$.dirty[0]===-1&&(se.push(e),nt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,o,s,c,r,f=[-1]){const i=Ge;oe(e);const l=e.$$={fragment:null,ctx:null,props:c,update:N,not_equal:s,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:$e(),dirty:f,skip_bound:!1,root:t.target||i.$$.root};r&&r(l.root);let _=!1;if(l.ctx=n?n(e,t.props||{},(g,v,...A)=>{const C=A.length?A[0]:v;return l.ctx&&s(l.ctx[g],l.ctx[g]=C)&&(!l.skip_bound&&l.bound[g]&&l.bound[g](C),_&&ot(e,g)),v}):[],l.update(),_=!0,te(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const g=et(t.target);l.fragment&&l.fragment.l(g),g.forEach(T)}else l.fragment&&l.fragment.c();t.intro&&D(e.$$.fragment),Q(e,t.target,t.anchor,t.customElement),Ve()}oe(i)}class F{$destroy(){ee(this,1),this.$destroy=N}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!Ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var E=(e=>(e.UP="up",e.RIGHT="right",e.LEFT="left",e.DOWN="down",e.UNKNOWN="",e))(E||{}),h=(e=>(e[e.SCREEN_WIDTH=600]="SCREEN_WIDTH",e[e.SCREEN_HEIGHT=400]="SCREEN_HEIGHT",e[e.BLOCK_SIZE=25]="BLOCK_SIZE",e))(h||{}),Se=(e=>(e[e.DELAY=50]="DELAY",e[e.MAX_POINTS=10]="MAX_POINTS",e))(Se||{}),Y=(e=>(e.UP="ArrowUp",e.LEFT="ArrowLeft",e.RIGHT="ArrowRight",e.DOWN="ArrowDown",e.SPACEBAR="Space",e))(Y||{});const X=[];function je(e,t=N){let n;const o=new Set;function s(f){if(U(e,f)&&(e=f,n)){const i=!X.length;for(const l of o)l[1](),X.push(l,e);if(i){for(let l=0;l<X.length;l+=2)X[l][0](X[l+1]);X.length=0}}}function c(f){s(f(e))}function r(f,i=N){const l=[f,i];return o.add(l),o.size===1&&(n=t(s)||N),f(e),()=>{o.delete(l),o.size===0&&(n(),n=null)}}return{set:s,update:c,subscribe:r}}const rt=()=>{let e={playerName:"Abhay",level:1,stage:1,score:0,highScore:0,bonus:0,food:0},{update:t,subscribe:n}=je(e);return{subscribe:n,resetScore:()=>{t(r=>(r.food=0,r.bonus=0,r.score=0,r))},eatFood:()=>{t(r=>(r.food=r.food+1,r.score=r.food*5+r.bonus*20,r.score>r.highScore&&(r.highScore=r.score),r))},nextLevel:()=>{t(r=>(r.level=r.level+1,r))}}};let J=rt();function lt(e){let t,n,o,s,c,r,f,i=e[0].playerName+"",l,_,g,v,A,C=e[0].score+"",p,b,w,k,V,q=e[0].food+"",ne,m,S,I,G,x=e[0].bonus+"",be,Be,ce,ie,fe,ue=e[0].highScore+"",Ne,He,ae,de,z,_e=e[0].level+"",Ie,Ce,pe=e[0].stage+"",ye,ke,j,he,xe,me,Oe,Pe;return{c(){t=a("div"),n=a("div"),n.textContent="Snake",o=O(),s=a("table"),c=a("tr"),r=a("td"),r.textContent="Player",f=a("td"),l=B(i),_=O(),g=a("tr"),v=a("td"),v.textContent="Score",A=a("td"),p=B(C),b=O(),w=a("tr"),k=a("td"),k.textContent="Food",V=a("td"),ne=B(q),m=O(),S=a("tr"),I=a("td"),I.textContent="Bonus",G=a("td"),be=B(x),Be=O(),ce=a("tr"),ie=a("td"),ie.textContent="High Score",fe=a("td"),Ne=B(ue),He=O(),ae=a("tr"),de=a("td"),de.textContent="Level-Stage",z=a("td"),Ie=B(_e),Ce=a("span"),Ce.textContent="-",ye=B(pe),ke=O(),j=a("div"),he=a("button"),he.textContent="Replay",xe=O(),me=a("button"),me.textContent="Menu",d(n,"class","title svelte-1phc8sd"),d(r,"class","c1 svelte-1phc8sd"),d(f,"class","c2 svelte-1phc8sd"),d(v,"class","c1 svelte-1phc8sd"),d(A,"class","c2 svelte-1phc8sd"),d(k,"class","c1 svelte-1phc8sd"),d(V,"class","c2 svelte-1phc8sd"),d(I,"class","c1 svelte-1phc8sd"),d(G,"class","c2 svelte-1phc8sd"),d(ie,"class","c1 svelte-1phc8sd"),d(fe,"class","c2 svelte-1phc8sd"),d(de,"class","c1 svelte-1phc8sd"),d(z,"class","c2 svelte-1phc8sd"),d(s,"class","svelte-1phc8sd"),d(j,"class","flex svelte-1phc8sd"),d(t,"class","game-over-screen svelte-1phc8sd")},m(H,P){R(H,t,P),u(t,n),u(t,o),u(t,s),u(s,c),u(c,r),u(c,f),u(f,l),u(s,_),u(s,g),u(g,v),u(g,A),u(A,p),u(s,b),u(s,w),u(w,k),u(w,V),u(V,ne),u(s,m),u(s,S),u(S,I),u(S,G),u(G,be),u(s,Be),u(s,ce),u(ce,ie),u(ce,fe),u(fe,Ne),u(s,He),u(s,ae),u(ae,de),u(ae,z),u(z,Ie),u(z,Ce),u(z,ye),u(t,ke),u(t,j),u(j,he),u(j,xe),u(j,me),Oe||(Pe=[re(he,"click",e[2]),re(me,"click",e[1])],Oe=!0)},p(H,[P]){P&1&&i!==(i=H[0].playerName+"")&&$(l,i),P&1&&C!==(C=H[0].score+"")&&$(p,C),P&1&&q!==(q=H[0].food+"")&&$(ne,q),P&1&&x!==(x=H[0].bonus+"")&&$(be,x),P&1&&ue!==(ue=H[0].highScore+"")&&$(Ne,ue),P&1&&_e!==(_e=H[0].level+"")&&$(Ie,_e),P&1&&pe!==(pe=H[0].stage+"")&&$(ye,pe)},i:N,o:N,d(H){H&&T(t),Oe=!1,te(Pe)}}}function ct(e,t,n){const o=()=>{console.log("restart game"),K.welcomeScreen()},s=()=>{J.resetScore(),K.startGame()};let c;return J.subscribe(r=>{n(0,c=r)}),[c,o,s]}class it extends F{constructor(t){super(),Z(this,t,ct,lt,U,{})}}function ft(e){let t;return{c(){t=a("div"),d(t,"class","food svelte-14olvay"),L(t,"left",e[1]+"px"),L(t,"top",e[0]+"px"),L(t,"width",h.BLOCK_SIZE-2+"px"),L(t,"height",h.BLOCK_SIZE-2+"px")},m(n,o){R(n,t,o)},p(n,[o]){o&2&&L(t,"left",n[1]+"px"),o&1&&L(t,"top",n[0]+"px")},i:N,o:N,d(n){n&&T(t)}}}function ut(e,t,n){let{foodTop:o=0}=t,{foodLeft:s=0}=t;return e.$$set=c=>{"foodTop"in c&&n(0,o=c.foodTop),"foodLeft"in c&&n(1,s=c.foodLeft)},[o,s]}class at extends F{constructor(t){super(),Z(this,t,ut,ft,U,{foodTop:0,foodLeft:1})}}function Ke(e){let t,n,o;return{c(){t=a("div"),n=O(),o=a("div"),d(t,"id","leftEye"),d(t,"class","eyes svelte-rzshp"),d(o,"id","rightEye"),d(o,"class","eyes svelte-rzshp")},m(s,c){R(s,t,c),R(s,n,c),R(s,o,c)},d(s){s&&T(t),s&&T(n),s&&T(o)}}}function dt(e){let t,n,o=e[2]&&Ke();return{c(){t=a("div"),o&&o.c(),L(t,"left",e[1]+"px"),L(t,"top",e[0]+"px"),L(t,"width",h.BLOCK_SIZE+"px"),L(t,"height",h.BLOCK_SIZE+"px"),d(t,"class",n="snake-body "+e[3]+" svelte-rzshp")},m(s,c){R(s,t,c),o&&o.m(t,null)},p(s,[c]){s[2]?o||(o=Ke(),o.c(),o.m(t,null)):o&&(o.d(1),o=null),c&2&&L(t,"left",s[1]+"px"),c&1&&L(t,"top",s[0]+"px"),c&8&&n!==(n="snake-body "+s[3]+" svelte-rzshp")&&d(t,"class",n)},i:N,o:N,d(s){s&&T(t),o&&o.d()}}}function _t(e,t,n){let{top:o=h.BLOCK_SIZE}=t,{left:s=h.BLOCK_SIZE}=t,{isHead:c=!1}=t,{direction:r="right"}=t;return e.$$set=f=>{"top"in f&&n(0,o=f.top),"left"in f&&n(1,s=f.left),"isHead"in f&&n(2,c=f.isHead),"direction"in f&&n(3,r=f.direction)},[o,s,c,r]}class pt extends F{constructor(t){super(),Z(this,t,_t,dt,U,{top:0,left:1,isHead:2,direction:3})}}function Ze(e,t,n){const o=e.slice();return o[2]=t[n],o[4]=n,o}function Fe(e){let t,n;return t=new pt({props:{isHead:e[4]==0,top:e[2].top,left:e[2].left,direction:e[1]}}),{c(){le(t.$$.fragment)},m(o,s){Q(t,o,s),n=!0},p(o,s){const c={};s&1&&(c.top=o[2].top),s&1&&(c.left=o[2].left),s&2&&(c.direction=o[1]),t.$set(c)},i(o){n||(D(t.$$.fragment,o),n=!0)},o(o){W(t.$$.fragment,o),n=!1},d(o){ee(t,o)}}}function ht(e){let t,n,o=e[0],s=[];for(let r=0;r<o.length;r+=1)s[r]=Fe(Ze(e,o,r));const c=r=>W(s[r],1,1,()=>{s[r]=null});return{c(){for(let r=0;r<s.length;r+=1)s[r].c();t=Qe()},m(r,f){for(let i=0;i<s.length;i+=1)s[i].m(r,f);R(r,t,f),n=!0},p(r,[f]){if(f&3){o=r[0];let i;for(i=0;i<o.length;i+=1){const l=Ze(r,o,i);s[i]?(s[i].p(l,f),D(s[i],1)):(s[i]=Fe(l),s[i].c(),D(s[i],1),s[i].m(t.parentNode,t))}for(qe(),i=o.length;i<s.length;i+=1)c(i);ze()}},i(r){if(!n){for(let f=0;f<o.length;f+=1)D(s[f]);n=!0}},o(r){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)W(s[f]);n=!1},d(r){Je(s,r),r&&T(t)}}}function mt(e,t,n){let{snakeBodies:o=[]}=t,{direction:s="right"}=t;return e.$$set=c=>{"snakeBodies"in c&&n(0,o=c.snakeBodies),"direction"in c&&n(1,s=c.direction)},[o,s]}class gt extends F{constructor(t){super(),Z(this,t,mt,ht,U,{snakeBodies:0,direction:1})}}const Le=[{bg:"#affbaf"},{bg:"#fda2f2"},{bg:"#7f61bb"},{bg:"#c34366"}];function Et(e){let t,n,o,s,c,r,f=e[0].level+"",i,l,_=e[0].score+"",g,v,A,C;return n=new gt({props:{direction:e[3],snakeBodies:e[4]}}),s=new at({props:{foodLeft:e[1],foodTop:e[2]}}),{c(){t=a("main"),le(n.$$.fragment),o=O(),le(s.$$.fragment),c=O(),r=a("div"),i=B(f),l=B(" : "),g=B(_),L(t,"width",h.SCREEN_WIDTH+"px"),L(t,"height",h.SCREEN_HEIGHT+"px"),L(t,"background",Le[e[0].level].bg),d(t,"class","svelte-1m9984m"),d(r,"class","score svelte-1m9984m")},m(p,b){R(p,t,b),Q(n,t,null),u(t,o),Q(s,t,null),R(p,c,b),R(p,r,b),u(r,i),u(r,l),u(r,g),v=!0,A||(C=re(window,"keydown",e[5]),A=!0)},p(p,[b]){const w={};b&8&&(w.direction=p[3]),b&16&&(w.snakeBodies=p[4]),n.$set(w);const k={};b&2&&(k.foodLeft=p[1]),b&4&&(k.foodTop=p[2]),s.$set(k),(!v||b&1)&&L(t,"background",Le[p[0].level].bg),(!v||b&1)&&f!==(f=p[0].level+"")&&$(i,f),(!v||b&1)&&_!==(_=p[0].score+"")&&$(g,_)},i(p){v||(D(n.$$.fragment,p),D(s.$$.fragment,p),v=!0)},o(p){W(n.$$.fragment,p),W(s.$$.fragment,p),v=!1},d(p){p&&T(t),ee(n),ee(s),p&&T(c),p&&T(r),A=!1,C()}}}function Me(e,t){return!(e.top<t.top||e.top>t.top||e.left<t.left||e.left>t.left)}function vt(e,t,n){let o=!1,s;K.subscribe(m=>{}),J.subscribe(m=>{n(0,s=m)});const c=()=>{K.gameOver()};let r=0,f=0,i=E.RIGHT,l=[],_;const g=h.SCREEN_WIDTH,v=h.SCREEN_HEIGHT,A=()=>{J.nextLevel(),J.resetScore(),clearInterval(_),C(),w()},C=()=>{let m=Le.length-s.level;m=m*Se.DELAY,_=setInterval(()=>{l.pop();let{left:S,top:I}=l[0];i===E.UP?I-=h.BLOCK_SIZE:i===E.DOWN?I+=h.BLOCK_SIZE:i===E.LEFT?S-=h.BLOCK_SIZE:i===E.RIGHT&&(S+=h.BLOCK_SIZE);const G={left:S,top:I};n(4,l=[G,...l]),Me(G,{left:r,top:f})&&(n(4,l=[...l,l[l.length-1]]),J.eatFood(),b(),l.length/Se.MAX_POINTS>1&&l.length%Se.MAX_POINTS==0&&(s.level<Le.length-1?A():K.allLevelsCleared())),k()&&(clearInterval(_),w(),c())},m)},p=()=>{let m=0,S=0;for(;;){m=Math.floor(Math.random()*(v/h.BLOCK_SIZE))*h.BLOCK_SIZE,S=Math.floor(Math.random()*(g/h.BLOCK_SIZE))*h.BLOCK_SIZE;let I=l.findIndex(x=>{x.top==m}),G=l.findIndex(x=>{x.left==S});if(I==-1&&G==-1)break}return{top:m,left:S}};function b(){const{top:m,left:S}=p();n(1,r=S),n(2,f=m)}function w(){b(),n(3,i=E.RIGHT),n(4,l=[{left:h.BLOCK_SIZE*2,top:0},{left:h.BLOCK_SIZE,top:0},{left:0,top:0}])}function k(){if(l.slice(1).filter(x=>Me(x,l[0])).length>0)return!0;const{top:I,left:G}=l[0];return G>=g&&i==E.RIGHT&&n(4,l[0].left=0,l),G<0&&i==E.LEFT&&n(4,l[0].left=g-h.BLOCK_SIZE,l),I<0&&i==E.UP&&n(4,l[0].top=v-h.BLOCK_SIZE,l),I>=v&&i==E.DOWN&&n(4,l[0].top=0,l),!1}function V(){clearInterval(_)}function q(m){return m===Y.UP&&i!=E.DOWN?E.UP:m===Y.RIGHT&&i!=E.LEFT?E.RIGHT:m===Y.LEFT&&i!=E.RIGHT?E.LEFT:m===Y.DOWN&&i!=E.UP?E.DOWN:E.UNKNOWN}function ne(m){const S=m.code;if(S===Y.SPACEBAR&&(o=!o,o?V():C()),o)return;const I=q(S);I!=E.UNKNOWN&&n(3,i=I)}return C(),w(),[s,r,f,i,l,ne]}class Ae extends F{constructor(t){super(),Z(this,t,vt,Et,U,{})}}function St(e){let t,n,o,s,c,r,f;return{c(){t=a("div"),n=a("div"),n.textContent="Snake",o=O(),s=a("div"),c=a("button"),c.textContent="Start",d(n,"class","title svelte-yxm8be"),d(s,"class","btn svelte-yxm8be"),d(t,"class","start-screen svelte-yxm8be")},m(i,l){R(i,t,l),u(t,n),u(t,o),u(t,s),u(s,c),r||(f=re(c,"click",e[0]),r=!0)},p:N,i:N,o:N,d(i){i&&T(t),r=!1,f()}}}function Lt(e){return[()=>{console.log("start game"),K.startGame()}]}class bt extends F{constructor(t){super(),Z(this,t,Lt,St,U,{})}}function Nt(e){let t,n,o,s,c,r,f,i;return{c(){t=a("div"),n=a("div"),n.textContent="Congratulations !",o=O(),s=a("div"),s.textContent="You have cleared all the levels.",c=O(),r=a("button"),r.textContent="Menu",d(n,"class","title svelte-gyhhqq"),d(t,"class","final svelte-gyhhqq")},m(l,_){R(l,t,_),u(t,n),u(t,o),u(t,s),u(t,c),u(t,r),f||(i=re(r,"click",e[0]),f=!0)},p:N,i:N,o:N,d(l){l&&T(t),f=!1,i()}}}function It(e){return[()=>{console.log("restart game"),K.welcomeScreen()}]}class Ct extends F{constructor(t){super(),Z(this,t,It,Nt,U,{})}}var y=(e=>(e.NOT_STARTED="NOT_STARTED",e.RUNNING="RUNNING",e.PAUSED="PAUSED",e.RESUME="RESUME",e.GAME_OVER="GAME OVER",e.ALL_LEVELS_CLEARED="ALL_LEVELS_CLEARED",e))(y||{});const yt=()=>{const e=[{status:y.NOT_STARTED,component:bt},{status:y.RUNNING,component:Ae},{status:y.PAUSED,component:Ae},{status:y.RESUME,component:Ae},{status:y.GAME_OVER,component:it},{status:y.ALL_LEVELS_CLEARED,component:Ct}];let{update:t,subscribe:n}=je(e.find(l=>l.status==y.ALL_LEVELS_CLEARED));return{subscribe:n,startGame:()=>{t(l=>(l=e.find(_=>_.status==y.RUNNING),l))},pauseGame:()=>{t(l=>(l=e.find(_=>_.status==y.PAUSED),l))},resumeGame:()=>{t(l=>(l=e.find(_=>_.status==y.RUNNING),l))},gameOver:()=>{t(l=>(l=e.find(_=>_.status==y.GAME_OVER),l))},welcomeScreen:()=>{t(l=>(l=e.find(_=>_.status==y.NOT_STARTED),l))},allLevelsCleared:()=>{t(l=>(l=e.find(_=>_.status==y.ALL_LEVELS_CLEARED),l))}}},K=yt();function Ot(e){let t,n,o;var s=e[0].component;function c(r){return{}}return s&&(n=new s(c())),{c(){t=a("div"),n&&le(n.$$.fragment),d(t,"class","container svelte-16au4d0"),L(t,"width",h.SCREEN_WIDTH+"px"),L(t,"height",h.SCREEN_HEIGHT+"px")},m(r,f){R(r,t,f),n&&Q(n,t,null),o=!0},p(r,[f]){if(s!==(s=r[0].component)){if(n){qe();const i=n;W(i.$$.fragment,1,0,()=>{ee(i,1)}),ze()}s?(n=new s(c()),le(n.$$.fragment),D(n.$$.fragment,1),Q(n,t,null)):n=null}},i(r){o||(n&&D(n.$$.fragment,r),o=!0)},o(r){n&&W(n.$$.fragment,r),o=!1},d(r){r&&T(t),n&&ee(n)}}}function Tt(e,t,n){let o;return K.subscribe(s=>{n(0,o=s)}),[o]}class At extends F{constructor(t){super(),Z(this,t,Tt,Ot,U,{})}}new At({target:document.getElementById("app")});
