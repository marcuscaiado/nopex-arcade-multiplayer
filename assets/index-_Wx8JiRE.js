var Cf=Object.defineProperty;var Pf=(n,e,t)=>e in n?Cf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Dt=(n,e,t)=>Pf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Df="modulepreload",Lf=function(n,e){return new URL(n,e).href},xc={},If=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let a=function(f){return Promise.all(f.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=a(t.map(f=>{if(f=Lf(f,i),f in xc)return;xc[f]=!0;const u=f.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===f&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${h}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":Df,u||(g.as="script"),g.crossOrigin="",g.href=f,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${f}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},Xr=JSON.parse(`[{"id":"neon-orbit-drift","name":"Neon Orbit Drift","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-orbit-drift/","description":"One-tap gravitational slingshot runner with harmonic chords & orbital drift physics.","tech":["Canvas 2D","Web Audio Synth","Physics"],"badgeClass":"btn-orbit"},{"id":"cyber-pinball-fx","name":"Cyber Pinball FX","icon":"⚡","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pinball-fx/","description":"High-speed neon arcade pinball table with multi-bumpers, chime feedback & dual flippers.","tech":["Canvas 2D","Bumper Physics","Audio FX"],"badgeClass":"btn-pinball"},{"id":"neon-katana-slash","name":"Neon Katana Slash (Fruit Ninja)","icon":"🍉","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/neon-katana-slash/","description":"Super juicy Fruit Ninja blade slicer! Swipe glowing blade trails to slice flying fruits and build massive combos.","tech":["Canvas 2D","Swipe Slicer","Fruit Combos"],"badgeClass":"btn-katana"},{"id":"cute-mini-golf","name":"Cute Mini Golf 3D","icon":"⛳","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cute-mini-golf/","description":"Nintendo-style mini golf with 3 kawaii golfers, 3D animated putters & authentic cup suction.","tech":["Three.js 3D","Cannon-es","Web Audio"],"badgeClass":"btn-golf"},{"id":"kawaii-8ball-pool","name":"Kawaii 8-Ball Pool","icon":"🎱","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/kawaii-8ball-pool/","description":"Super cute 8-ball pool where every ball has an animated kawaii face with squish physics.","tech":["Canvas 2D","2-Player","Squish Physics"],"badgeClass":"btn-pool"},{"id":"stickman-fps-arcade","name":"Stickman FPS Arcade","icon":"🔫","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/stickman-fps-arcade/","description":"Retro stationary bunker shooter with 5 weapons, shop upgrades and wave defense.","tech":["Canvas 2D","Shop Upgrades","Web Audio"],"badgeClass":"btn-fps"},{"id":"geometricsurvivor","name":"Geometric Survivor 3D","icon":"⚔️","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/geometricsurvivor/","description":"Megabonk-style 3D cartoon survivor on a floating island! 3 heroes (Sir Bonk, Pippin & Sparky), healing hearts, invincibility & speed buffs.","tech":["Three.js 3D","3 Heroes","Vampire Upgrades"],"badgeClass":"btn-geo"},{"id":"neon-drift-racer","name":"Neon Drift Racer","icon":"🏎️","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drift-racer/","description":"High-speed synthwave pseudo-3D highway racer with nitro boost and touch controls.","tech":["Canvas 3D Projection","Nitro System","Retro"],"badgeClass":"btn-racer"},{"id":"cyber-pong-3d","name":"Kawaii Table Tennis 3D","icon":"🏓","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pong-3d/","description":"Super cute 3D table tennis with Kawaii eye paddles, generous hitboxes, 1-to-1 mouse controls, bouncy ball physics & sweet audio FX.","tech":["Three.js 3D","Paddle Physics","Cute Audio"],"badgeClass":"btn-pong"},{"id":"neon-viper","name":"Neon Viper 3D","icon":"🐍","category":"arcade","unit":"MASS","url":"https://marcuscaiado.github.io/neon-viper/","description":"3D Snake.io cyber arena with 8 3D skins, 10+ smart AI bots, radar minimap, nitro boost & safe body coiling.","tech":["Three.js 3D","Snake.io Physics","8 Skins"],"badgeClass":"btn-viper"},{"id":"brick-breaker-fx","name":"Brick Breaker FX","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/brick-breaker-fx/","description":"Juice-packed neon breakout arcade game with multi-ball power-ups, paddle expansion & shatter physics.","tech":["Canvas 2D","Multi-Ball","Power-Ups"],"badgeClass":"btn-brick"},{"id":"sky-ace-1944","name":"Sky Ace 1944","icon":"🛩️","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/sky-ace-1944/","description":"Vertical retro WWII bullet-hell shooter with mega bombs, shields & quad spread.","tech":["Canvas 2D","Bullet Patterns","Boss Battles"],"badgeClass":"btn-sky"},{"id":"neon-drop-2048","name":"Neon Drop 2048","icon":"🧩","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drop-2048/","description":"Physics merge puzzle with glowing bouncy 2048 balls and satisfying pop chain reactions.","tech":["Canvas 2D","Circle Physics","Suika Merge"],"badgeClass":"btn-drop"},{"id":"asteroid-blitz","name":"Asteroid Blitz","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/asteroid-blitz/","description":"Classic vector space shooter with inertia physics, hyperspace warp & splitting rocks.","tech":["Canvas 2D Vector","Inertia Physics","Retro"],"badgeClass":"btn-asteroid"},{"id":"neon-tetris-3d","name":"Neon Cyber Tetris 3D","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-tetris-3d/","description":"Tetris Effect-style 3D falling tetrominoes in a holographic cyber matrix with laser line clears and popping glowing graphics.","tech":["Three.js 3D","Ghost Projection","Synth Audio","SRS Rotation"],"badgeClass":"btn-tetris"},{"id":"neon-archery-master","name":"Neon Archery Master","icon":"🎯","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/neon-archery-master/","description":"Precision bow archery with trajectory prediction, crosswinds & holographic targets.","tech":["Canvas 2D","Ballistics Math","Wind Physics"],"badgeClass":"btn-archery"},{"id":"neon-stack-3d","name":"Neon Stack Harmony 3D","icon":"🌌","category":"arcade","unit":"SLABS","url":"https://marcuscaiado.github.io/neon-stack-3d/","description":"3D block slicing tower stacking with soothing pentatonic synth chords.","tech":["Three.js 3D","Web Audio","Slicing Math"],"badgeClass":"btn-stack"},{"id":"neon-pachinko-pop","name":"Neon Pachinko Pop","icon":"🔮","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-pachinko-pop/","description":"Peggle-style bouncy pachinko drop with jackpot buckets and neon bumpers.","tech":["Canvas 2D","Peg Physics","Jackpot Zones"],"badgeClass":"btn-pachinko"},{"id":"cyber-runner-3d","name":"Cyber Runner 3D","icon":"🏃","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-runner-3d/","description":"Fast-paced synthwave 3-lane obstacle runner with jump mechanics and power-ups.","tech":["Canvas 3D","Perspective Math","Endless"],"badgeClass":"btn-runner"},{"id":"cyber-shuriken","name":"Cyber Shuriken Neo","icon":"🎯","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-shuriken/","description":"Rhythmic knife throwing into rotating boss matrices with harmonic chimes.","tech":["Canvas 2D","Rotational Math","Boss Waves"],"badgeClass":"btn-shuriken"},{"id":"flappy-cyber-droid","name":"Flappy Cyber Droid","icon":"🐦","category":"arcade","unit":"GATES","url":"https://marcuscaiado.github.io/flappy-cyber-droid/","description":"Addictive neon flapper arcade game featuring a hovering cyber-droid, laser gates & energy crystals.","tech":["Canvas 2D","One-Tap Flap","Laser Gates"],"badgeClass":"btn-droid"},{"id":"street-fighter-2","name":"Street Fighter II Turbo","icon":"🥊","category":"action","unit":"WINS","url":"https://marcuscaiado.github.io/street-fighter-2/","description":"Authentic Capcom arcade fighting! All 12 fighters, Turbo speed modes, Hadoukens, Shoryukens, and 60 FPS WebAssembly emulation.","tech":["WASM EmulatorJS","12 Fighters","Turbo Mode"],"badgeClass":"btn-fighter"},{"id":"super-mario","name":"Super Mario World","icon":"🍄","category":"retro","unit":"EXITS","url":"https://marcuscaiado.github.io/super-mario/","description":"The legendary Super Nintendo masterpiece! Ride Yoshi, soar with the magic cape, explore Dinosaur Land, and run in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Yoshi & Cape","96 Exits"],"badgeClass":"btn-mario"},{"id":"super-bomberman","name":"Super Bomberman","icon":"💣","category":"retro","unit":"WINS","url":"https://marcuscaiado.github.io/super-bomberman/","description":"The ultimate explosive party battle! Drop bombs, collect powerups, blast soft blocks, and battle across arenas in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Hudson Soft","Arena Battle"],"badgeClass":"btn-bomberman"},{"id":"gta-2","name":"Grand Theft Auto 2","icon":"🚗","category":"action","unit":"RESPECT","url":"https://marcuscaiado.github.io/gta-2/","description":"Rockstar's legendary top-down crime epic! Steal cars, outrun police, answer payphones, and rule the city in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Rockstar Games","Open World"],"badgeClass":"btn-gta"}]`);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="182",Uf=0,vc=1,Nf=2,_s=1,Ff=2,vr=3,In=0,Bt=1,Ot=2,Cn=0,Gi=1,yc=2,Sc=3,Mc=4,Of=5,ci=100,Bf=101,kf=102,zf=103,Vf=104,Gf=200,Hf=201,Wf=202,Xf=203,ka=204,za=205,qf=206,Yf=207,$f=208,Kf=209,jf=210,Zf=211,Jf=212,Qf=213,eh=214,Va=0,Ga=1,Ha=2,Xi=3,Wa=4,Xa=5,qa=6,Ya=7,$l=0,th=1,nh=2,mn=0,Kl=1,jl=2,Zl=3,Jl=4,Ql=5,eu=6,tu=7,nu=300,mi=301,qi=302,$a=303,Ka=304,Is=306,wr=1e3,Rn=1001,ja=1002,wt=1003,ih=1004,qr=1005,yt=1006,Xs=1007,ui=1008,Xt=1009,iu=1010,ru=1011,Ar=1012,Go=1013,xn=1014,dn=1015,Un=1016,Ho=1017,Wo=1018,Rr=1020,su=35902,au=35899,ou=1021,cu=1022,rn=1023,Nn=1026,fi=1027,lu=1028,Xo=1029,Yi=1030,qo=1031,Yo=1033,xs=33776,vs=33777,ys=33778,Ss=33779,Za=35840,Ja=35841,Qa=35842,eo=35843,to=36196,no=37492,io=37496,ro=37488,so=37489,ao=37490,oo=37491,co=37808,lo=37809,uo=37810,fo=37811,ho=37812,po=37813,mo=37814,go=37815,_o=37816,xo=37817,vo=37818,yo=37819,So=37820,Mo=37821,Eo=36492,bo=36494,To=36495,wo=36283,Ao=36284,Ro=36285,Co=36286,rh=3200,uu=0,sh=1,Wn="",Kt="srgb",$i="srgb-linear",Ts="linear",rt="srgb",Mi=7680,Ec=519,ah=512,oh=513,ch=514,$o=515,lh=516,uh=517,Ko=518,fh=519,Po=35044,bc="300 es",pn=2e3,ws=2001;function fu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function As(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hh(){const n=As("canvas");return n.style.display="block",n}const Tc={};function Rs(...n){const e="THREE."+n.shift();console.log(e,...n)}function Be(...n){const e="THREE."+n.shift();console.warn(e,...n)}function je(...n){const e="THREE."+n.shift();console.error(e,...n)}function Cr(...n){const e=n.join(" ");e in Tc||(Tc[e]=!0,Be(...n))}function dh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,Do=180/Math.PI;function $n(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function ph(n,e){return(n%e+e)%e}function Ys(n,e,t){return(1-t)*n+t*e}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],f=i[r+2],u=i[r+3],h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u;return}if(o>=1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==h||l!==p||f!==g){let m=c*h+l*p+f*g+u*_;m<0&&(h=-h,p=-p,g=-g,_=-_,m=-m);let d=1-o;if(m<.9995){const v=Math.acos(m),E=Math.sin(v);d=Math.sin(d*v)/E,o=Math.sin(o*v)/E,c=c*d+h*o,l=l*d+p*o,f=f*d+g*o,u=u*d+_*o}else{c=c*d+h*o,l=l*d+p*o,f=f*d+g*o,u=u*d+_*o;const v=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=v,l*=v,f*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],f=i[r+3],u=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+f*u+c*p-l*h,e[t+1]=c*g+f*h+l*u-o*p,e[t+2]=l*g+f*p+o*h-c*u,e[t+3]=f*g-o*u-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),f=o(r/2),u=o(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*f*u+l*p*g,this._y=l*p*u-h*f*g,this._z=l*f*g+h*p*u,this._w=l*f*u-h*p*g;break;case"YXZ":this._x=h*f*u+l*p*g,this._y=l*p*u-h*f*g,this._z=l*f*g-h*p*u,this._w=l*f*u+h*p*g;break;case"ZXY":this._x=h*f*u-l*p*g,this._y=l*p*u+h*f*g,this._z=l*f*g+h*p*u,this._w=l*f*u-h*p*g;break;case"ZYX":this._x=h*f*u-l*p*g,this._y=l*p*u+h*f*g,this._z=l*f*g-h*p*u,this._w=l*f*u+h*p*g;break;case"YZX":this._x=h*f*u+l*p*g,this._y=l*p*u+h*f*g,this._z=l*f*g-h*p*u,this._w=l*f*u-h*p*g;break;case"XZY":this._x=h*f*u-l*p*g,this._y=l*p*u-h*f*g,this._z=l*f*g+h*p*u,this._w=l*f*u+h*p*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],u=t[10],h=i+o+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(f-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-i*l,this._z=s*f+a*l+i*c-r*o,this._w=a*f-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),f=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*f,this.y=i+c*f+o*l-s*u,this.z=r+c*u+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $s.copy(this).projectOnVector(e),this.sub($s)}reflect(e){return this.sub($s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new H,wc=new Br;class ze{constructor(e,t,i,r,s,a,o,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],f=i[4],u=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],v=r[1],E=r[4],b=r[7],S=r[2],w=r[5],C=r[8];return s[0]=a*_+o*v+c*S,s[3]=a*m+o*E+c*w,s[6]=a*d+o*b+c*C,s[1]=l*_+f*v+u*S,s[4]=l*m+f*E+u*w,s[7]=l*d+f*b+u*C,s[2]=h*_+p*v+g*S,s[5]=h*m+p*E+g*w,s[8]=h*d+p*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-i*s*f+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=f*a-o*l,h=o*c-f*s,p=l*s-a*c,g=t*u+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*l-f*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(f*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ks.makeScale(e,t)),this}rotate(e){return this.premultiply(Ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new ze,Ac=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mh(){const n={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=Pn(r.r),r.g=Pn(r.g),r.b=Pn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wn?Ts:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$i]:{primaries:e,whitePoint:i,transfer:Ts,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}const Ze=mh();function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ei;class gh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ei===void 0&&(Ei=As("canvas")),Ei.width=e.width,Ei.height=e.height;const r=Ei.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ei}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=As("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pn(t[i]/255)*255):t[i]=Pn(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _h=0;class jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(js(r[a].image)):s.push(js(r[a]))}else s=js(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let xh=0;const Zs=new H;class Ct extends er{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=Rn,r=Rn,s=yt,a=ui,o=rn,c=Xt,l=Ct.DEFAULT_ANISOTROPY,f=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=$n(),this.name="",this.source=new jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zs).x}get height(){return this.source.getSize(Zs).y}get depth(){return this.source.getSize(Zs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=nu;Ct.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],f=c[4],u=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,b=(p+1)/2,S=(d+1)/2,w=(f+h)/4,C=(u+_)/4,P=(g+m)/4;return E>b&&E>S?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=C/i):b>S?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=w/r,s=P/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=C/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(h-f)/v,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vh extends er{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ct(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new jo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends vh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hu extends Ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yh extends Ct{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(e.matrixWorld),this.union(Yr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),$r.subVectors(this.max,sr),bi.subVectors(e.a,sr),Ti.subVectors(e.b,sr),wi.subVectors(e.c,sr),On.subVectors(Ti,bi),Bn.subVectors(wi,Ti),ei.subVectors(bi,wi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ei.z,ei.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ei.z,0,-ei.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ei.y,ei.x,0];return!Js(t,bi,Ti,wi,$r)||(t=[1,0,0,0,1,0,0,0,1],!Js(t,bi,Ti,wi,$r))?!1:(Kr.crossVectors(On,Bn),t=[Kr.x,Kr.y,Kr.z],Js(t,bi,Ti,wi,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new H,new H,new H,new H,new H,new H,new H,new H],en=new H,Yr=new kr,bi=new H,Ti=new H,wi=new H,On=new H,Bn=new H,ei=new H,sr=new H,$r=new H,Kr=new H,ti=new H;function Js(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ti.fromArray(n,s);const o=r.x*Math.abs(ti.x)+r.y*Math.abs(ti.y)+r.z*Math.abs(ti.z),c=e.dot(ti),l=t.dot(ti),f=i.dot(ti);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Sh=new kr,ar=new H,Qs=new H;class Zo{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Qs)),this.expandByPoint(ar.copy(e.center).sub(Qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const En=new H,ea=new H,jr=new H,kn=new H,ta=new H,Zr=new H,na=new H;class du{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ea.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(ea);const s=e.distanceTo(t)*.5,a=-this.direction.dot(jr),o=kn.dot(this.direction),c=-kn.dot(jr),l=kn.lengthSq(),f=Math.abs(1-a*a);let u,h,p,g;if(f>0)if(u=a*c-o,h=a*o-c,g=s*f,u>=0)if(h>=-g)if(h<=g){const _=1/f;u*=_,h*=_,p=u*(u+a*h+2*o)+h*(a*u+h+2*c)+l}else h=s,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+h*(h+2*c)+l);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),p=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ea).addScaledVector(jr,h),p}intersectSphere(e,t){En.subVectors(e.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,i,r,s){ta.subVectors(t,e),Zr.subVectors(i,e),na.crossVectors(ta,Zr);let a=this.direction.dot(na),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,e);const c=o*this.direction.dot(Zr.crossVectors(kn,Zr));if(c<0)return null;const l=o*this.direction.dot(ta.cross(kn));if(l<0||c+l>a)return null;const f=-o*kn.dot(na);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,a,o,c,l,f,u,h,p,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,f,u,h,p,g,_,m)}set(e,t,i,r,s,a,o,c,l,f,u,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=f,d[10]=u,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*f,p=a*u,g=o*f,_=o*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*f,p=c*u,g=l*f,_=l*u;t[0]=h+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=p*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*f,p=c*u,g=l*f,_=l*u;t[0]=h-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*f,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*f,p=a*u,g=o*f,_=o*u;t[0]=c*f,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*u,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*f,t[4]=_-h*u,t[8]=g*u+p,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=p*u+g,t[10]=h-_*u}else if(e.order==="XZY"){const h=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=h*u+_,t[5]=a*f,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*f,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mh,e,Eh)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),zn.crossVectors(i,Gt),zn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),zn.crossVectors(i,Gt)),zn.normalize(),Jr.crossVectors(Gt,zn),r[0]=zn.x,r[4]=Jr.x,r[8]=Gt.x,r[1]=zn.y,r[5]=Jr.y,r[9]=Gt.y,r[2]=zn.z,r[6]=Jr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],f=i[1],u=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],E=i[7],b=i[11],S=i[15],w=r[0],C=r[4],P=r[8],y=r[12],T=r[1],I=r[5],z=r[9],k=r[13],A=r[2],D=r[6],U=r[10],N=r[14],G=r[3],J=r[7],Q=r[11],L=r[15];return s[0]=a*w+o*T+c*A+l*G,s[4]=a*C+o*I+c*D+l*J,s[8]=a*P+o*z+c*U+l*Q,s[12]=a*y+o*k+c*N+l*L,s[1]=f*w+u*T+h*A+p*G,s[5]=f*C+u*I+h*D+p*J,s[9]=f*P+u*z+h*U+p*Q,s[13]=f*y+u*k+h*N+p*L,s[2]=g*w+_*T+m*A+d*G,s[6]=g*C+_*I+m*D+d*J,s[10]=g*P+_*z+m*U+d*Q,s[14]=g*y+_*k+m*N+d*L,s[3]=v*w+E*T+b*A+S*G,s[7]=v*C+E*I+b*D+S*J,s[11]=v*P+E*z+b*U+S*Q,s[15]=v*y+E*k+b*N+S*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],u=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15],v=c*p-l*h,E=o*p-l*u,b=o*h-c*u,S=a*p-l*f,w=a*h-c*f,C=a*u-o*f;return t*(_*v-m*E+d*b)-i*(g*v-m*S+d*w)+r*(g*E-_*S+d*C)-s*(g*b-_*w+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=u*m*l-_*h*l+_*c*p-o*m*p-u*c*d+o*h*d,E=g*h*l-f*m*l-g*c*p+a*m*p+f*c*d-a*h*d,b=f*_*l-g*u*l+g*o*p-a*_*p-f*o*d+a*u*d,S=g*u*c-f*_*c-g*o*h+a*_*h+f*o*m-a*u*m,w=t*v+i*E+r*b+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=v*C,e[1]=(_*h*s-u*m*s-_*r*p+i*m*p+u*r*d-i*h*d)*C,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*d+i*c*d)*C,e[3]=(u*c*s-o*h*s-u*r*l+i*h*l+o*r*p-i*c*p)*C,e[4]=E*C,e[5]=(f*m*s-g*h*s+g*r*p-t*m*p-f*r*d+t*h*d)*C,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*d-t*c*d)*C,e[7]=(a*h*s-f*c*s+f*r*l-t*h*l-a*r*p+t*c*p)*C,e[8]=b*C,e[9]=(g*u*s-f*_*s-g*i*p+t*_*p+f*i*d-t*u*d)*C,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*d+t*o*d)*C,e[11]=(f*o*s-a*u*s-f*i*l+t*u*l+a*i*p-t*o*p)*C,e[12]=S*C,e[13]=(f*_*r-g*u*r+g*i*h-t*_*h-f*i*m+t*u*m)*C,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*C,e[15]=(a*u*r-f*o*r+f*i*c-t*u*c-a*i*h+t*o*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+i,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,u=o+o,h=s*l,p=s*f,g=s*u,_=a*f,m=a*u,d=o*u,v=c*l,E=c*f,b=c*u,S=i.x,w=i.y,C=i.z;return r[0]=(1-(_+d))*S,r[1]=(p+b)*S,r[2]=(g-E)*S,r[3]=0,r[4]=(p-b)*w,r[5]=(1-(h+d))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+E)*C,r[9]=(m-v)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Ai.set(r[0],r[1],r[2]).length();const a=Ai.set(r[4],r[5],r[6]).length(),o=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),tn.copy(this);const l=1/s,f=1/a,u=1/o;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=f,tn.elements[5]*=f,tn.elements[6]*=f,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=pn,c=!1){const l=this.elements,f=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===pn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ws)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=pn,c=!1){const l=this.elements,f=2/(t-e),u=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===pn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ws)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ai=new H,tn=new ht,Mh=new H(0,0,0),Eh=new H(1,1,1),zn=new H,Jr=new H,Gt=new H,Cc=new ht,Pc=new Br;class vn{constructor(e=0,t=0,i=0,r=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],u=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bh=0;const Dc=new H,Ri=new Br,bn=new ht,Qr=new H,or=new H,Th=new H,wh=new Br,Lc=new H(1,0,0),Ic=new H(0,1,0),Uc=new H(0,0,1),Nc={type:"added"},Ah={type:"removed"},Ci={type:"childadded",child:null},ia={type:"childremoved",child:null};class Tt extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new H,t=new vn,i=new Br,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Uc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qr.copy(e):Qr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(or,Qr,this.up):bn.lookAt(Qr,or,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(bn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ah),ia.child=e,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Th),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,wh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),u=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new H(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new H,Tn=new H,ra=new H,wn=new H,Pi=new H,Di=new H,Fc=new H,sa=new H,aa=new H,oa=new H,ca=new gt,la=new gt,ua=new gt;class jt{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),Tn.subVectors(i,t),ra.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(Tn),c=nn.dot(ra),l=Tn.dot(Tn),f=Tn.dot(ra),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,p=(l*c-o*f)*h,g=(a*f-o*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return ca.setScalar(0),la.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(e,t),la.fromBufferAttribute(e,i),ua.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ca,s.x),a.addScaledVector(la,s.y),a.addScaledVector(ua,s.z),a}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),Tn.subVectors(e,t),nn.cross(Tn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),nn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Pi.subVectors(r,i),Di.subVectors(s,i),sa.subVectors(e,i);const c=Pi.dot(sa),l=Di.dot(sa);if(c<=0&&l<=0)return t.copy(i);aa.subVectors(e,r);const f=Pi.dot(aa),u=Di.dot(aa);if(f>=0&&u<=f)return t.copy(r);const h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(Pi,a);oa.subVectors(e,s);const p=Pi.dot(oa),g=Di.dot(oa);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Di,o);const m=f*g-p*u;if(m<=0&&u-f>=0&&p-g>=0)return Fc.subVectors(s,r),o=(u-f)/(u-f+(p-g)),t.copy(r).addScaledVector(Fc,o);const d=1/(m+_+h);return a=_*d,o=h*d,t.copy(i).addScaledVector(Pi,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},es={h:0,s:0,l:0};function fa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=ph(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=fa(a,s,e+1/3),this.g=fa(a,s,e),this.b=fa(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Kt){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=pu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ze.workingToColorSpace(Rt.copy(this),e),Math.round($e(Rt.r*255,0,255))*65536+Math.round($e(Rt.g*255,0,255))*256+Math.round($e(Rt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Rt.copy(this),t);const i=Rt.r,r=Rt.g,s=Rt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=f<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Kt){Ze.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,r=Rt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(es);const i=Ys(Vn.h,es.h,t),r=Ys(Vn.s,es.s,t),s=Ys(Vn.l,es.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Ke;Ke.NAMES=pu;let Rh=0;class tr extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Gi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=za,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vt extends tr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new H,ts=new Ve;let Ch=0;class sn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ch++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Po,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Po&&(e.usage=this.usage),e}}class mu extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gu extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _t extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ph=0;const $t=new ht,ha=new Tt,Li=new H,Ht=new kr,cr=new kr,Et=new H;class kt extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fu(e)?gu:mu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ht.min,cr.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,cr.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(cr.min),Ht.expandByPoint(cr.max))}Ht.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Et.fromBufferAttribute(o,l),c&&(Li.fromBufferAttribute(e,l),Et.add(Li)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new H,c[P]=new H;const l=new H,f=new H,u=new H,h=new Ve,p=new Ve,g=new Ve,_=new H,m=new H;function d(P,y,T){l.fromBufferAttribute(i,P),f.fromBufferAttribute(i,y),u.fromBufferAttribute(i,T),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,T),f.sub(l),u.sub(l),p.sub(h),g.sub(h);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(I),o[P].add(_),o[y].add(_),o[T].add(_),c[P].add(m),c[y].add(m),c[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,y=v.length;P<y;++P){const T=v[P],I=T.start,z=T.count;for(let k=I,A=I+z;k<A;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const E=new H,b=new H,S=new H,w=new H;function C(P){S.fromBufferAttribute(r,P),w.copy(S);const y=o[P];E.copy(y),E.sub(S.multiplyScalar(S.dot(y))).normalize(),b.crossVectors(w,y);const I=b.dot(c[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,I)}for(let P=0,y=v.length;P<y;++P){const T=v[P],I=T.start,z=T.count;for(let k=I,A=I+z;k<A;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,f=new H,u=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(f),c.add(f),l.add(f),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,u=o.normalized,h=new l.constructor(c.length*f);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*f;for(let d=0;d<f;d++)h[g++]=l[p++]}return new sn(h,f,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,u=l.length;f<u;f++){const h=l[f],p=e(h,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){const p=l[u];f.push(p.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],u=s[l];for(let h=0,p=u.length;h<p;h++)f.push(u[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oc=new ht,ni=new du,ns=new Zo,Bc=new H,is=new H,rs=new H,ss=new H,da=new H,as=new H,kc=new H,os=new H;class Ce extends Tt{constructor(e=new kt,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){as.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],u=s[c];f!==0&&(da.fromBufferAttribute(u,e),a?as.addScaledVector(da,f):as.addScaledVector(da.sub(t),f))}t.add(as)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(s),ni.copy(e.ray).recast(e.near),!(ns.containsPoint(ni.origin)===!1&&(ni.intersectSphere(ns,Bc)===null||ni.origin.distanceToSquared(Bc)>(e.far-e.near)**2))&&(Oc.copy(s).invert(),ni.copy(e.ray).applyMatrix4(Oc),!(i.boundingBox!==null&&ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,S=E;b<S;b+=3){const w=o.getX(b),C=o.getX(b+1),P=o.getX(b+2);r=cs(this,d,e,i,l,f,u,w,C,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);r=cs(this,a,e,i,l,f,u,v,E,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,S=E;b<S;b+=3){const w=b,C=b+1,P=b+2;r=cs(this,d,e,i,l,f,u,w,C,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,E=m+1,b=m+2;r=cs(this,a,e,i,l,f,u,v,E,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Dh(n,e,t,i,r,s,a,o){let c;if(e.side===Bt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===In,o),c===null)return null;os.copy(o),os.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(os);return l<t.near||l>t.far?null:{distance:l,point:os.clone(),object:n}}function cs(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,is),n.getVertexPosition(c,rs),n.getVertexPosition(l,ss);const f=Dh(n,e,t,i,is,rs,ss,kc);if(f){const u=new H;jt.getBarycoord(kc,is,rs,ss,u),r&&(f.uv=jt.getInterpolatedAttribute(r,o,c,l,u,new Ve)),s&&(f.uv1=jt.getInterpolatedAttribute(s,o,c,l,u,new Ve)),a&&(f.normal=jt.getInterpolatedAttribute(a,o,c,l,u,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new H,materialIndex:0};jt.getNormal(is,rs,ss,h.normal),f.face=h,f.barycoord=u}return f}class dt extends kt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(u,2));function g(_,m,d,v,E,b,S,w,C,P,y){const T=b/C,I=S/P,z=b/2,k=S/2,A=w/2,D=C+1,U=P+1;let N=0,G=0;const J=new H;for(let Q=0;Q<U;Q++){const L=Q*I-k;for(let q=0;q<D;q++){const se=q*T-z;J[_]=se*v,J[m]=L*E,J[d]=A,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[d]=w>0?1:-1,f.push(J.x,J.y,J.z),u.push(q/C),u.push(1-Q/P),N+=1}}for(let Q=0;Q<P;Q++)for(let L=0;L<C;L++){const q=h+L+D*Q,se=h+L+D*(Q+1),Ae=h+(L+1)+D*(Q+1),be=h+(L+1)+D*Q;c.push(q,se,be),c.push(se,Ae,be),G+=6}o.addGroup(p,G,y),p+=G,h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ki(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Ki(n[t]);for(const r in i)e[r]=i[r]}return e}function Lh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _u(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Ih={clone:Ki,merge:It};var Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends tr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=Lh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xu extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new H,zc=new Ve,Vc=new Ve;class Wt extends xu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-e/Gn.z)}getViewSize(e,t){return this.getViewBounds(e,zc,Vc),t.subVectors(Vc,zc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Ui=1;class Fh extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(Ii,Ui,e,t);r.layers=this.layers,this.add(r);const s=new Wt(Ii,Ui,e,t);s.layers=this.layers,this.add(s);const a=new Wt(Ii,Ui,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Ii,Ui,e,t);o.layers=this.layers,this.add(o);const c=new Wt(Ii,Ui,e,t);c.layers=this.layers,this.add(c);const l=new Wt(Ii,Ui,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(u,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class vu extends Ct{constructor(e=[],t=mi,i,r,s,a,o,c,l,f){super(e,t,i,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yu extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dt(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Cn});s.uniforms.tEquirect.value=t;const a=new Ce(r,s),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=yt),new Fh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Xn extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Oh={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Oh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Qo{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=i}clone(){return new Qo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bh extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Po,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new H;class Cs{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Rs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Rs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ec extends tr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ni;const lr=new H,Fi=new H,Oi=new H,Bi=new Ve,ur=new Ve,Su=new ht,ls=new H,fr=new H,us=new H,Gc=new Ve,ma=new Ve,Hc=new Ve;class Mu extends Tt{constructor(e=new ec){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new kh(t,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new Cs(i,3,0,!1)),Ni.setAttribute("uv",new Cs(i,2,3,!1))}this.geometry=Ni,this.material=e,this.center=new Ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),Su.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;fs(ls.set(-.5,-.5,0),Oi,a,Fi,r,s),fs(fr.set(.5,-.5,0),Oi,a,Fi,r,s),fs(us.set(.5,.5,0),Oi,a,Fi,r,s),Gc.set(0,0),ma.set(1,0),Hc.set(1,1);let o=e.ray.intersectTriangle(ls,fr,us,!1,lr);if(o===null&&(fs(fr.set(-.5,.5,0),Oi,a,Fi,r,s),ma.set(0,1),o=e.ray.intersectTriangle(ls,us,fr,!1,lr),o===null))return;const c=e.ray.origin.distanceTo(lr);c<e.near||c>e.far||t.push({distance:c,point:lr.clone(),uv:jt.getInterpolation(lr,ls,fr,us,Gc,ma,Hc,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fs(n,e,t,i,r,s){Bi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ur.x=s*Bi.x-r*Bi.y,ur.y=r*Bi.x+s*Bi.y):ur.copy(Bi),n.copy(e),n.x+=ur.x,n.y+=ur.y,n.applyMatrix4(Su)}class zh extends Ct{constructor(e=null,t=1,i=1,r,s,a,o,c,l=wt,f=wt,u,h){super(null,a,o,c,l,f,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ga=new H,Vh=new H,Gh=new ze;class oi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ga.subVectors(i,t).cross(Vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ga),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gh.getNormalMatrix(e),r=this.coplanarPoint(ga).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Zo,Hh=new Ve(.5,.5),hs=new H;class tc{constructor(e=new oi,t=new oi,i=new oi,r=new oi,s=new oi,a=new oi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],u=s[5],h=s[6],p=s[7],g=s[8],_=s[9],m=s[10],d=s[11],v=s[12],E=s[13],b=s[14],S=s[15];if(r[0].setComponents(l-a,p-f,d-g,S-v).normalize(),r[1].setComponents(l+a,p+f,d+g,S+v).normalize(),r[2].setComponents(l+o,p+u,d+_,S+E).normalize(),r[3].setComponents(l-o,p-u,d-_,S-E).normalize(),i)r[4].setComponents(c,h,m,b).normalize(),r[5].setComponents(l-c,p-h,d-m,S-b).normalize();else if(r[4].setComponents(l-c,p-h,d-m,S-b).normalize(),t===pn)r[5].setComponents(l+c,p+h,d+m,S+b).normalize();else if(t===ws)r[5].setComponents(c,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);const t=Hh.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(hs.x=r.normal.x>0?e.max.x:e.min.x,hs.y=r.normal.y>0?e.max.y:e.min.y,hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gi extends Ct{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pr extends Ct{constructor(e,t,i=xn,r,s,a,o=wt,c=wt,l,f=Nn,u=1){if(f!==Nn&&f!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,a,o,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wh extends Pr{constructor(e,t=xn,i=mi,r,s,a=wt,o=wt,c,l=Nn){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Eu extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Us extends kt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new H,f=new Ve;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const p=i+u/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),f.x=(a[h]/e+1)/2,f.y=(a[h+1]/e+1)/2,c.push(f.x,f.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _n extends kt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const f=[],u=[],h=[],p=[];let g=0;const _=[],m=i/2;let d=0;v(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(p,2));function v(){const b=new H,S=new H;let w=0;const C=(t-e)/i;for(let P=0;P<=s;P++){const y=[],T=P/s,I=T*(t-e)+e;for(let z=0;z<=r;z++){const k=z/r,A=k*c+o,D=Math.sin(A),U=Math.cos(A);S.x=I*D,S.y=-T*i+m,S.z=I*U,u.push(S.x,S.y,S.z),b.set(D,C,U).normalize(),h.push(b.x,b.y,b.z),p.push(k,1-T),y.push(g++)}_.push(y)}for(let P=0;P<r;P++)for(let y=0;y<s;y++){const T=_[y][P],I=_[y+1][P],z=_[y+1][P+1],k=_[y][P+1];(e>0||y!==0)&&(f.push(T,I,k),w+=3),(t>0||y!==s-1)&&(f.push(I,z,k),w+=3)}l.addGroup(d,w,0),d+=w}function E(b){const S=g,w=new Ve,C=new H;let P=0;const y=b===!0?e:t,T=b===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,m*T,0),h.push(0,T,0),p.push(.5,.5),g++;const I=g;for(let z=0;z<=r;z++){const A=z/r*c+o,D=Math.cos(A),U=Math.sin(A);C.x=y*U,C.y=m*T,C.z=y*D,u.push(C.x,C.y,C.z),h.push(0,T,0),w.x=D*.5+.5,w.y=U*.5*T+.5,p.push(w.x,w.y),g++}for(let z=0;z<r;z++){const k=S+z,A=I+z;b===!0?f.push(A,A+1,k):f.push(A+1,A,k),P+=3}l.addGroup(d,P,b===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dn extends kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,f=c+1,u=e/o,h=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<f;d++){const v=d*h-a;for(let E=0;E<l;E++){const b=E*u-s;g.push(b,-v,0),_.push(0,0,1),m.push(E/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const E=v+l*d,b=v+l*(d+1),S=v+1+l*(d+1),w=v+1+l*d;p.push(E,b,w),p.push(b,S,w)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ji extends kt{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],f=[];let u=e;const h=(t-e)/r,p=new H,g=new Ve;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const d=s+m/i*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,f.push(g.x,g.y)}u+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let d=0;d<i;d++){const v=d+m,E=v,b=v+i+1,S=v+i+2,w=v+1;o.push(E,b,w),o.push(b,S,w)}}this.setIndex(o),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _i extends kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const f=[],u=new H,h=new H,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const v=[],E=d/i;let b=0;d===0&&a===0?b=.5/t:d===i&&c===Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){const w=S/t;u.x=-e*Math.cos(r+w*s)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(r+w*s)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),m.push(w+b,1-E),v.push(l++)}f.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){const E=f[d][v+1],b=f[d][v],S=f[d+1][v],w=f[d+1][v+1];(d!==0||a>0)&&p.push(E,b,w),(d!==i-1||c<Math.PI)&&p.push(b,S,w)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xh extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bt extends tr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uu,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qh extends tr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yh extends tr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ns extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class $h extends Ns{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _a=new ht,Wc=new H,Xc=new H;class bu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kh extends bu{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}}class xa extends Ns{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class nc extends xu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jh extends bu{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new jh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Zh extends Ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jh extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Yc=new ht;class ed{constructor(e,t,i=0,r=1/0){this.ray=new du(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yc),this}intersectObject(e,t=!0,i=[]){return Lo(e,this,i,t),i.sort($c),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Lo(e[r],this,i,t);return i.sort($c),i}}function $c(n,e){return n.distance-e.distance}function Lo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Lo(s[a],e,t,!0)}}function Kc(n,e,t,i){const r=td(i);switch(t){case ou:return n*e;case lu:return n*e/r.components*r.byteLength;case Xo:return n*e/r.components*r.byteLength;case Yi:return n*e*2/r.components*r.byteLength;case qo:return n*e*2/r.components*r.byteLength;case cu:return n*e*3/r.components*r.byteLength;case rn:return n*e*4/r.components*r.byteLength;case Yo:return n*e*4/r.components*r.byteLength;case xs:case vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ys:case Ss:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:case eo:return Math.max(n,16)*Math.max(e,8)/4;case Za:case Qa:return Math.max(n,8)*Math.max(e,8)/2;case to:case no:case ro:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case io:case ao:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case So:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eo:case bo:case To:return Math.ceil(n/4)*Math.ceil(e/4)*16;case wo:case Ao:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ro:case Co:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function td(n){switch(n){case Xt:case iu:return{byteLength:1,components:1};case Ar:case ru:case Un:return{byteLength:2,components:1};case Ho:case Wo:return{byteLength:2,components:4};case xn:case Go:case dn:return{byteLength:4,components:1};case su:case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nd(n){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const f=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,f);else{u.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<u.length;p++){const g=u[h],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,u[h]=_)}u.length=h+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(l,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ld=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,md=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ad=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,np=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Um=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:id,alphahash_pars_fragment:rd,alphamap_fragment:sd,alphamap_pars_fragment:ad,alphatest_fragment:od,alphatest_pars_fragment:cd,aomap_fragment:ld,aomap_pars_fragment:ud,batching_pars_vertex:fd,batching_vertex:hd,begin_vertex:dd,beginnormal_vertex:pd,bsdfs:md,iridescence_fragment:gd,bumpmap_pars_fragment:_d,clipping_planes_fragment:xd,clipping_planes_pars_fragment:vd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Sd,color_fragment:Md,color_pars_fragment:Ed,color_pars_vertex:bd,color_vertex:Td,common:wd,cube_uv_reflection_fragment:Ad,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Cd,displacementmap_vertex:Pd,emissivemap_fragment:Dd,emissivemap_pars_fragment:Ld,colorspace_fragment:Id,colorspace_pars_fragment:Ud,envmap_fragment:Nd,envmap_common_pars_fragment:Fd,envmap_pars_fragment:Od,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:Kd,envmap_vertex:kd,fog_vertex:zd,fog_pars_vertex:Vd,fog_fragment:Gd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:Xd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Yd,lights_pars_begin:$d,lights_toon_fragment:jd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Jd,lights_phong_pars_fragment:Qd,lights_physical_fragment:ep,lights_physical_pars_fragment:tp,lights_fragment_begin:np,lights_fragment_maps:ip,lights_fragment_end:rp,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:ap,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:cp,map_fragment:lp,map_pars_fragment:up,map_particle_fragment:fp,map_particle_pars_fragment:hp,metalnessmap_fragment:dp,metalnessmap_pars_fragment:pp,morphinstance_vertex:mp,morphcolor_vertex:gp,morphnormal_vertex:_p,morphtarget_pars_vertex:xp,morphtarget_vertex:vp,normal_fragment_begin:yp,normal_fragment_maps:Sp,normal_pars_fragment:Mp,normal_pars_vertex:Ep,normal_vertex:bp,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Cp,opaque_fragment:Pp,packing:Dp,premultiplied_alpha_fragment:Lp,project_vertex:Ip,dithering_fragment:Up,dithering_pars_fragment:Np,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:kp,shadowmap_vertex:zp,shadowmask_pars_fragment:Vp,skinbase_vertex:Gp,skinning_pars_vertex:Hp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:qp,specularmap_pars_fragment:Yp,tonemapping_fragment:$p,tonemapping_pars_fragment:Kp,transmission_fragment:jp,transmission_pars_fragment:Zp,uv_pars_fragment:Jp,uv_pars_vertex:Qp,uv_vertex:em,worldpos_vertex:tm,background_vert:nm,background_frag:im,backgroundCube_vert:rm,backgroundCube_frag:sm,cube_vert:am,cube_frag:om,depth_vert:cm,depth_frag:lm,distance_vert:um,distance_frag:fm,equirect_vert:hm,equirect_frag:dm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:_m,meshlambert_vert:xm,meshlambert_frag:vm,meshmatcap_vert:ym,meshmatcap_frag:Sm,meshnormal_vert:Mm,meshnormal_frag:Em,meshphong_vert:bm,meshphong_frag:Tm,meshphysical_vert:wm,meshphysical_frag:Am,meshtoon_vert:Rm,meshtoon_frag:Cm,points_vert:Pm,points_frag:Dm,shadow_vert:Lm,shadow_frag:Im,sprite_vert:Um,sprite_frag:Nm},_e={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},fn={basic:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:It([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:It([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:It([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:It([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:It([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:It([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:It([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:It([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:It([_e.common,_e.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:It([_e.lights,_e.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};fn.physical={uniforms:It([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ds={r:0,b:0,g:0},ri=new vn,Fm=new ht;function Om(n,e,t,i,r,s,a){const o=new Ke(0);let c=s===!0?0:1,l,f,u=null,h=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function _(E){let b=!1;const S=g(E);S===null?d(o,c):S&&S.isColor&&(d(S,1),b=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===Is)?(f===void 0&&(f=new Ce(new dt(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Ki(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ri.copy(b.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(ri)),f.material.toneMapped=Ze.getTransfer(S.colorSpace)!==rt,(u!==S||h!==S.version||p!==n.toneMapping)&&(f.material.needsUpdate=!0,u=S,h=S.version,p=n.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ce(new Dn(2,2),new yn({name:"BackgroundMaterial",uniforms:Ki(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,b){E.getRGB(ds,_u(n)),i.buffers.color.setClear(ds.r,ds.g,ds.b,b,a)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),c=b,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(o,c)},render:_,addToRenderList:m,dispose:v}}function Bm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(T,I,z,k,A){let D=!1;const U=u(k,z,I);s!==U&&(s=U,l(s.object)),D=p(T,k,z,A),D&&g(T,k,z,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,b(T,I,z,k),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return n.createVertexArray()}function l(T){return n.bindVertexArray(T)}function f(T){return n.deleteVertexArray(T)}function u(T,I,z){const k=z.wireframe===!0;let A=i[T.id];A===void 0&&(A={},i[T.id]=A);let D=A[I.id];D===void 0&&(D={},A[I.id]=D);let U=D[k];return U===void 0&&(U=h(c()),D[k]=U),U}function h(T){const I=[],z=[],k=[];for(let A=0;A<t;A++)I[A]=0,z[A]=0,k[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:k,object:T,attributes:{},index:null}}function p(T,I,z,k){const A=s.attributes,D=I.attributes;let U=0;const N=z.getAttributes();for(const G in N)if(N[G].location>=0){const Q=A[G];let L=D[G];if(L===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(L=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(L=T.instanceColor)),Q===void 0||Q.attribute!==L||L&&Q.data!==L.data)return!0;U++}return s.attributesNum!==U||s.index!==k}function g(T,I,z,k){const A={},D=I.attributes;let U=0;const N=z.getAttributes();for(const G in N)if(N[G].location>=0){let Q=D[G];Q===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor));const L={};L.attribute=Q,Q&&Q.data&&(L.data=Q.data),A[G]=L,U++}s.attributes=A,s.attributesNum=U,s.index=k}function _(){const T=s.newAttributes;for(let I=0,z=T.length;I<z;I++)T[I]=0}function m(T){d(T,0)}function d(T,I){const z=s.newAttributes,k=s.enabledAttributes,A=s.attributeDivisors;z[T]=1,k[T]===0&&(n.enableVertexAttribArray(T),k[T]=1),A[T]!==I&&(n.vertexAttribDivisor(T,I),A[T]=I)}function v(){const T=s.newAttributes,I=s.enabledAttributes;for(let z=0,k=I.length;z<k;z++)I[z]!==T[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function E(T,I,z,k,A,D,U){U===!0?n.vertexAttribIPointer(T,I,z,A,D):n.vertexAttribPointer(T,I,z,k,A,D)}function b(T,I,z,k){_();const A=k.attributes,D=z.getAttributes(),U=I.defaultAttributeValues;for(const N in D){const G=D[N];if(G.location>=0){let J=A[N];if(J===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(J=T.instanceColor)),J!==void 0){const Q=J.normalized,L=J.itemSize,q=e.get(J);if(q===void 0)continue;const se=q.buffer,Ae=q.type,be=q.bytesPerElement,j=Ae===n.INT||Ae===n.UNSIGNED_INT||J.gpuType===Go;if(J.isInterleavedBufferAttribute){const te=J.data,ve=te.stride,Ie=J.offset;if(te.isInstancedInterleavedBuffer){for(let he=0;he<G.locationSize;he++)d(G.location+he,te.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let he=0;he<G.locationSize;he++)m(G.location+he);n.bindBuffer(n.ARRAY_BUFFER,se);for(let he=0;he<G.locationSize;he++)E(G.location+he,L/G.locationSize,Ae,Q,ve*be,(Ie+L/G.locationSize*he)*be,j)}else{if(J.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)d(G.location+te,J.meshPerAttribute);T.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);n.bindBuffer(n.ARRAY_BUFFER,se);for(let te=0;te<G.locationSize;te++)E(G.location+te,L/G.locationSize,Ae,Q,L*be,L/G.locationSize*te*be,j)}}else if(U!==void 0){const Q=U[N];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(G.location,Q);break;case 3:n.vertexAttrib3fv(G.location,Q);break;case 4:n.vertexAttrib4fv(G.location,Q);break;default:n.vertexAttrib1fv(G.location,Q)}}}}v()}function S(){P();for(const T in i){const I=i[T];for(const z in I){const k=I[z];for(const A in k)f(k[A].object),delete k[A];delete I[z]}delete i[T]}}function w(T){if(i[T.id]===void 0)return;const I=i[T.id];for(const z in I){const k=I[z];for(const A in k)f(k[A].object),delete k[A];delete I[z]}delete i[T.id]}function C(T){for(const I in i){const z=i[I];if(z[T.id]===void 0)continue;const k=z[T.id];for(const A in k)f(k[A].object),delete k[A];delete z[T.id]}}function P(){y(),a=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function km(n,e,t){let i;function r(l){i=l}function s(l,f){n.drawArrays(i,l,f),t.update(f,i,1)}function a(l,f,u){u!==0&&(n.drawArraysInstanced(i,l,f,u),t.update(f,i,u))}function o(l,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,f,0,u);let p=0;for(let g=0;g<u;g++)p+=f[g];t.update(p,i,1)}function c(l,f,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],f[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,f,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=f[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==rn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Xt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==dn&&!P)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Be("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:b,maxSamples:S,samples:w}}function Vm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new oi,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||i!==0||r;return r=h,i=u.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?f(null):l();else{const v=s?0:i,E=v*4;let b=d.clippingState||null;c.value=b,b=f(g,h,E,p);for(let S=0;S!==E;++S)b[S]=t[S];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,b=p;E!==_;++E,b+=4)a.copy(u[E]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Gm(n){let e=new WeakMap;function t(a,o){return o===$a?a.mapping=mi:o===Ka&&(a.mapping=qi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$a||o===Ka)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new yu(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const qn=4,jc=[.125,.215,.35,.446,.526,.582],li=20,Hm=256,hr=new nc,Zc=new Ke;let va=null,ya=0,Sa=0,Ma=!1;const Wm=new H;class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Wm}=s;va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(va,ya,Sa),this._renderer.xr.enabled=Ma,e.scissorTest=!1,ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Un,format:rn,colorSpace:$i,depthBuffer:!1},r=Qc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xm(s)),this._blurMaterial=Ym(s,e,t),this._ggxMaterial=qm(s,e,t)}return r}_compileMaterial(e){const t=new Ce(new kt,e);this._renderer.compile(t,hr)}_sceneToCubeUV(e,t,i,r,s){const c=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Zc),u.toneMapping=mn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new dt,new vt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let d=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,d=!0):(m.color.copy(Zc),d=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[E],s.y,s.z)):b===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[E]));const S=this._cubeSize;ki(r,b*S,E>2?S:0,S,S),u.setRenderTarget(r),d&&u.render(_,c),u.render(e,c)}u.toneMapping=p,u.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===mi||e.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ki(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,hr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-f*f),h=0+l*1.25,p=u*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-qn?i-g+qn:0),d=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,ki(s,m,d,3*_,2*_),r.setRenderTarget(s),r.render(o,hr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,ki(e,m,d,3*_,2*_),r.setRenderTarget(e),r.render(o,hr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[r];u.material=l;const h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*li-1),_=s/g,m=isFinite(s)?1+Math.floor(f*_):li;m>li&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const d=[];let v=0;for(let C=0;C<li;++C){const P=C/_,y=Math.exp(-P*P/2);d.push(y),C===0?v+=y:C<m&&(v+=2*y)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const b=this._sizeLods[r],S=3*b*(r>E-qn?r-E+qn:0),w=4*(this._cubeSize-b);ki(t,S,w,3*b,2*b),c.setRenderTarget(t),c.render(u,hr)}}function Xm(n){const e=[],t=[],i=[];let r=n;const s=n-qn+1+jc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-qn?c=jc[a-n+qn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),f=-l,u=1+l,h=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),E=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,P=w>2?0:-1,y=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(y,_*g*w),E.set(h,m*g*w);const T=[w,w,w,w,w,w];b.set(T,d*g*w)}const S=new kt;S.setAttribute("position",new sn(v,_)),S.setAttribute("uv",new sn(E,m)),S.setAttribute("faceIndex",new sn(b,d)),i.push(new Ce(S,null)),r>qn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Qc(n,e,t){const i=new gn(n,e,t);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ki(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function qm(n,e,t){return new yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Ym(n,e,t){const i=new Float32Array(li),r=new H(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function el(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function tl(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Fs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $m(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===$a||c===Ka,f=c===mi||c===qi;if(l||f){let u=e.get(o);const h=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Jc(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||f&&p&&r(p)?(t===null&&(t=new Jc(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Km(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Cr("WebGLRenderer: "+i+" extension not supported."),r}}}function jm(n,e,t,i){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(u){const h=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let E=0,b=v.length;E<b;E+=3){const S=v[E+0],w=v[E+1],C=v[E+2];h.push(S,w,w,C,C,S)}}else if(g!==void 0){const v=g.array;_=g.version;for(let E=0,b=v.length/3-1;E<b;E+=3){const S=E+0,w=E+1,C=E+2;h.push(S,w,w,C,C,S)}}else return;const m=new(fu(h)?gu:mu)(h,1);m.version=_;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function f(u){const h=s.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:f}}function Zm(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*a,g),t.update(p,i,g))}function f(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function u(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)l(h[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Jm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Qm(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let h=i.get(o);if(h===void 0||h.count!==u){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let b=o.attributes.position.count*E,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*S*4*u),C=new hu(w,b,S,u);C.type=dn,C.needsUpdate=!0;const P=E*4;for(let T=0;T<u;T++){const I=m[T],z=d[T],k=v[T],A=b*S*4*T;for(let D=0;D<I.count;D++){const U=D*P;p===!0&&(r.fromBufferAttribute(I,D),w[A+U+0]=r.x,w[A+U+1]=r.y,w[A+U+2]=r.z,w[A+U+3]=0),g===!0&&(r.fromBufferAttribute(z,D),w[A+U+4]=r.x,w[A+U+5]=r.y,w[A+U+6]=r.z,w[A+U+7]=0),_===!0&&(r.fromBufferAttribute(k,D),w[A+U+8]=r.x,w[A+U+9]=r.y,w[A+U+10]=r.z,w[A+U+11]=k.itemSize===4?r.w:1)}}h={count:u,texture:C,size:new Ve(b,S)},i.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function eg(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const tg={[Kl]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[Zl]:"CINEON_TONE_MAPPING",[Jl]:"ACES_FILMIC_TONE_MAPPING",[eu]:"AGX_TONE_MAPPING",[tu]:"NEUTRAL_TONE_MAPPING",[Ql]:"CUSTOM_TONE_MAPPING"};function ng(n,e,t,i,r){const s=new gn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new gn(e,t,{type:Un,depthBuffer:!1,stencilBuffer:!1}),o=new kt;o.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _t([0,2,0,0,2,0],2));const c=new Xh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Ce(o,c),f=new nc(-1,1,1,-1,0,1);let u=null,h=null,p=!1,g,_=null,m=[],d=!1;this.setSize=function(v,E){s.setSize(v,E),a.setSize(v,E);for(let b=0;b<m.length;b++){const S=m[b];S.setSize&&S.setSize(v,E)}},this.setEffects=function(v){m=v,d=m.length>0&&m[0].isRenderPass===!0;const E=s.width,b=s.height;for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(E,b)}},this.begin=function(v,E){if(p||v.toneMapping===mn&&m.length===0)return!1;if(_=E,E!==null){const b=E.width,S=E.height;(s.width!==b||s.height!==S)&&this.setSize(b,S)}return d===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=mn,!0},this.hasRenderPass=function(){return d},this.end=function(v,E){v.toneMapping=g,p=!0;let b=s,S=a;for(let w=0;w<m.length;w++){const C=m[w];if(C.enabled!==!1&&(C.render(v,S,b,E),C.needsSwap!==!1)){const P=b;b=S,S=P}}if(u!==v.outputColorSpace||h!==v.toneMapping){u=v.outputColorSpace,h=v.toneMapping,c.defines={},Ze.getTransfer(u)===rt&&(c.defines.SRGB_TRANSFER="");const w=tg[h];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(_),v.render(l,f),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const wu=new Ct,Io=new Pr(1,1),Au=new hu,Ru=new yh,Cu=new vu,nl=[],il=[],rl=new Float32Array(16),sl=new Float32Array(9),al=new Float32Array(4);function nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=nl[r];if(s===void 0&&(s=new Float32Array(r),nl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Os(n,e){let t=il[e];t===void 0&&(t=new Int32Array(e),il[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ig(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function og(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;al.set(i),n.uniformMatrix2fv(this.addr,!1,al),Mt(t,i)}}function cg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;sl.set(i),n.uniformMatrix3fv(this.addr,!1,sl),Mt(t,i)}}function lg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;rl.set(i),n.uniformMatrix4fv(this.addr,!1,rl),Mt(t,i)}}function ug(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function xg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Io.compareFunction=t.isReversedDepthBuffer()?Ko:$o,s=Io):s=wu,t.setTexture2D(e||s,r)}function vg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ru,r)}function yg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cu,r)}function Sg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Au,r)}function Mg(n){switch(n){case 5126:return ig;case 35664:return rg;case 35665:return sg;case 35666:return ag;case 35674:return og;case 35675:return cg;case 35676:return lg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return hg;case 35669:case 35673:return dg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Sg}}function Eg(n,e){n.uniform1fv(this.addr,e)}function bg(n,e){const t=nr(e,this.size,2);n.uniform2fv(this.addr,t)}function Tg(n,e){const t=nr(e,this.size,3);n.uniform3fv(this.addr,t)}function wg(n,e){const t=nr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ag(n,e){const t=nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rg(n,e){const t=nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cg(n,e){const t=nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Pg(n,e){n.uniform1iv(this.addr,e)}function Dg(n,e){n.uniform2iv(this.addr,e)}function Lg(n,e){n.uniform3iv(this.addr,e)}function Ig(n,e){n.uniform4iv(this.addr,e)}function Ug(n,e){n.uniform1uiv(this.addr,e)}function Ng(n,e){n.uniform2uiv(this.addr,e)}function Fg(n,e){n.uniform3uiv(this.addr,e)}function Og(n,e){n.uniform4uiv(this.addr,e)}function Bg(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Io:a=wu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function kg(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ru,s[a])}function zg(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cu,s[a])}function Vg(n,e,t){const i=this.cache,r=e.length,s=Os(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Au,s[a])}function Gg(n){switch(n){case 5126:return Eg;case 35664:return bg;case 35665:return Tg;case 35666:return wg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Dg;case 35668:case 35672:return Lg;case 35669:case 35673:return Ig;case 5125:return Ug;case 36294:return Ng;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Hg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mg(t.type)}}class Wg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gg(t.type)}}class Xg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function ol(n,e){n.seq.push(e),n.map[e.id]=e}function qg(n,e,t){const i=n.name,r=i.length;for(Ea.lastIndex=0;;){const s=Ea.exec(i),a=Ea.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ol(t,l===void 0?new Hg(o,n,e):new Wg(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Xg(o),ol(t,u)),t=u}}}class Ms{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);qg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function cl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Yg=37297;let $g=0;function Kg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ll=new ze;function jg(n){Ze._getMatrix(ll,Ze.workingColorSpace,n);const e=`mat3( ${ll.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Ts:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ul(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Kg(n.getShaderSource(e),o)}else return s}function Zg(n,e){const t=jg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Jg={[Kl]:"Linear",[jl]:"Reinhard",[Zl]:"Cineon",[Jl]:"ACESFilmic",[eu]:"AgX",[tu]:"Neutral",[Ql]:"Custom"};function Qg(n,e){const t=Jg[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ps=new H;function e0(){Ze.getLuminanceCoefficients(ps);const n=ps.x.toFixed(4),e=ps.y.toFixed(4),t=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function n0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function i0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function yr(n){return n!==""}function fl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(n){return n.replace(r0,a0)}const s0=new Map;function a0(n,e){let t=Ge[e];if(t===void 0){const i=s0.get(e);if(i!==void 0)t=Ge[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uo(t)}const o0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(n){return n.replace(o0,c0)}function c0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const l0={[_s]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function u0(n){return l0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f0={[mi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE_UV"};function h0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":f0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const d0={[qi]:"ENVMAP_MODE_REFRACTION"};function p0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":d0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m0={[$l]:"ENVMAP_BLENDING_MULTIPLY",[th]:"ENVMAP_BLENDING_MIX",[nh]:"ENVMAP_BLENDING_ADD"};function g0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":m0[n.combine]||"ENVMAP_BLENDING_NONE"}function _0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function x0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=u0(t),l=h0(t),f=p0(t),u=g0(t),h=_0(t),p=t0(t),g=n0(s),_=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),d.length>0&&(d+=`
`)):(m=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),d=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==mn?Qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Zg("linearToOutputTexel",t.outputColorSpace),e0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=Uo(a),a=fl(a,t),a=hl(a,t),o=Uo(o),o=fl(o,t),o=hl(o,t),a=dl(a),o=dl(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=v+m+a,b=v+d+o,S=cl(r,r.VERTEX_SHADER,E),w=cl(r,r.FRAGMENT_SHADER,b);r.attachShader(_,S),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(I){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(S)||"",A=r.getShaderInfoLog(w)||"",D=z.trim(),U=k.trim(),N=A.trim();let G=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,S,w);else{const Q=ul(r,S,"vertex"),L=ul(r,w,"fragment");je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+Q+`
`+L)}else D!==""?Be("WebGLProgram: Program Info Log:",D):(U===""||N==="")&&(J=!1);J&&(I.diagnostics={runnable:G,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:N,prefix:d}})}r.deleteShader(S),r.deleteShader(w),P=new Ms(r,_),y=i0(r,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,Yg)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$g++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let v0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new S0(e),t.set(e,i)),i}}class S0{constructor(e){this.id=v0++,this.code=e,this.usedTimes=0}}function M0(n,e,t,i,r,s,a){const o=new Jo,c=new y0,l=new Set,f=[],u=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,T,I,z,k){const A=z.fog,D=k.geometry,U=y.isMeshStandardMaterial?z.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),G=N&&N.mapping===Is?N.image.height:null,J=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&Be("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,L=Q!==void 0?Q.length:0;let q=0;D.morphAttributes.position!==void 0&&(q=1),D.morphAttributes.normal!==void 0&&(q=2),D.morphAttributes.color!==void 0&&(q=3);let se,Ae,be,j;if(J){const nt=fn[J];se=nt.vertexShader,Ae=nt.fragmentShader}else se=y.vertexShader,Ae=y.fragmentShader,c.update(y),be=c.getVertexShaderID(y),j=c.getFragmentShaderID(y);const te=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Ie=k.isInstancedMesh===!0,he=k.isBatchedMesh===!0,Ne=!!y.map,et=!!y.matcap,He=!!N,Xe=!!y.aoMap,Pe=!!y.lightMap,Fe=!!y.bumpMap,tt=!!y.normalMap,F=!!y.displacementMap,lt=!!y.emissiveMap,qe=!!y.metalnessMap,Ye=!!y.roughnessMap,Me=y.anisotropy>0,R=y.clearcoat>0,x=y.dispersion>0,B=y.iridescence>0,$=y.sheen>0,ee=y.transmission>0,K=Me&&!!y.anisotropyMap,Ee=R&&!!y.clearcoatMap,fe=R&&!!y.clearcoatNormalMap,ne=R&&!!y.clearcoatRoughnessMap,le=B&&!!y.iridescenceMap,Z=B&&!!y.iridescenceThicknessMap,ae=$&&!!y.sheenColorMap,ie=$&&!!y.sheenRoughnessMap,de=!!y.specularMap,ce=!!y.specularColorMap,ke=!!y.specularIntensityMap,O=ee&&!!y.transmissionMap,ge=ee&&!!y.thicknessMap,ue=!!y.gradientMap,ye=!!y.alphaMap,oe=y.alphaTest>0,re=!!y.alphaHash,pe=!!y.extensions;let Oe=mn;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const ut={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:se,fragmentShader:Ae,defines:y.defines,customVertexShaderID:be,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:he,batchingColor:he&&k._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&k.instanceColor!==null,instancingMorph:Ie&&k.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:$i,alphaToCoverage:!!y.alphaToCoverage,map:Ne,matcap:et,envMap:He,envMapMode:He&&N.mapping,envMapCubeUVHeight:G,aoMap:Xe,lightMap:Pe,bumpMap:Fe,normalMap:tt,displacementMap:F,emissiveMap:lt,normalMapObjectSpace:tt&&y.normalMapType===sh,normalMapTangentSpace:tt&&y.normalMapType===uu,metalnessMap:qe,roughnessMap:Ye,anisotropy:Me,anisotropyMap:K,clearcoat:R,clearcoatMap:Ee,clearcoatNormalMap:fe,clearcoatRoughnessMap:ne,dispersion:x,iridescence:B,iridescenceMap:le,iridescenceThicknessMap:Z,sheen:$,sheenColorMap:ae,sheenRoughnessMap:ie,specularMap:de,specularColorMap:ce,specularIntensityMap:ke,transmission:ee,transmissionMap:O,thicknessMap:ge,gradientMap:ue,opaque:y.transparent===!1&&y.blending===Gi&&y.alphaToCoverage===!1,alphaMap:ye,alphaTest:oe,alphaHash:re,combine:y.combine,mapUv:Ne&&_(y.map.channel),aoMapUv:Xe&&_(y.aoMap.channel),lightMapUv:Pe&&_(y.lightMap.channel),bumpMapUv:Fe&&_(y.bumpMap.channel),normalMapUv:tt&&_(y.normalMap.channel),displacementMapUv:F&&_(y.displacementMap.channel),emissiveMapUv:lt&&_(y.emissiveMap.channel),metalnessMapUv:qe&&_(y.metalnessMap.channel),roughnessMapUv:Ye&&_(y.roughnessMap.channel),anisotropyMapUv:K&&_(y.anisotropyMap.channel),clearcoatMapUv:Ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(y.sheenRoughnessMap.channel),specularMapUv:de&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:ke&&_(y.specularIntensityMap.channel),transmissionMapUv:O&&_(y.transmissionMap.channel),thicknessMapUv:ge&&_(y.thicknessMap.channel),alphaMapUv:ye&&_(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(tt||Me),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!D.attributes.uv&&(Ne||ye),fog:!!A,useFog:y.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ve,skinning:k.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:lt&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:pe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&y.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function d(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(v(T,y),E(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function E(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function b(y){const T=g[y.type];let I;if(T){const z=fn[T];I=Ih.clone(z.uniforms)}else I=y.uniforms;return I}function S(y,T){let I=u.get(T);return I!==void 0?++I.usedTimes:(I=new x0(n,T,y,s),f.push(I),u.set(T,I)),I}function w(y){if(--y.usedTimes===0){const T=f.indexOf(y);f[T]=f[f.length-1],f.pop(),u.delete(y.cacheKey),y.destroy()}}function C(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:S,releaseProgram:w,releaseShaderCache:C,programs:f,dispose:P}}function E0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function b0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ml(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function o(u,h,p,g,_,m){const d=a(u,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(u,h,p,g,_,m){const d=a(u,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(u,h){t.length>1&&t.sort(u||b0),i.length>1&&i.sort(h||ml),r.length>1&&r.sort(h||ml)}function f(){for(let u=e,h=n.length;u<h;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:l}}function T0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new gl,n.set(i,[a])):r>=s.length?(a=new gl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function w0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ke};break;case"SpotLight":t={position:new H,direction:new H,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function A0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let R0=0;function C0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function P0(n){const e=new w0,t=A0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const r=new H,s=new ht,a=new ht;function o(l){let f=0,u=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,E=0,b=0,S=0,w=0,C=0;l.sort(C0);for(let y=0,T=l.length;y<T;y++){const I=l[y],z=I.color,k=I.intensity,A=I.distance;let D=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Yi?D=I.shadow.map.texture:D=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=z.r*k,u+=z.g*k,h+=z.b*k;else if(I.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(I.sh.coefficients[U],k);C++}else if(I.isDirectionalLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const N=I.shadow,G=t.get(I);G.shadowIntensity=N.intensity,G.shadowBias=N.bias,G.shadowNormalBias=N.normalBias,G.shadowRadius=N.radius,G.shadowMapSize=N.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=I.shadow.matrix,v++}i.directional[p]=U,p++}else if(I.isSpotLight){const U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(z).multiplyScalar(k),U.distance=A,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,i.spot[_]=U;const N=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,N.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[_]=N.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=N.intensity,G.shadowBias=N.bias,G.shadowNormalBias=N.normalBias,G.shadowRadius=N.radius,G.shadowMapSize=N.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=D,b++}_++}else if(I.isRectAreaLight){const U=e.get(I);U.color.copy(z).multiplyScalar(k),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=U,m++}else if(I.isPointLight){const U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){const N=I.shadow,G=t.get(I);G.shadowIntensity=N.intensity,G.shadowBias=N.bias,G.shadowNormalBias=N.normalBias,G.shadowRadius=N.radius,G.shadowMapSize=N.mapSize,G.shadowCameraNear=N.camera.near,G.shadowCameraFar=N.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=U,g++}else if(I.isHemisphereLight){const U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(k),U.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[d]=U,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==v||P.numPointShadows!==E||P.numSpotShadows!==b||P.numSpotMaps!==S||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=v,P.numPointShadows=E,P.numSpotShadows=b,P.numSpotMaps=S,P.numLightProbes=C,i.version=R0++)}function c(l,f){let u=0,h=0,p=0,g=0,_=0;const m=f.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){const E=l[d];if(E.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),u++}else if(E.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function _l(n){const e=new P0(n),t=[],i=[];function r(f){l.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function a(f){i.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function D0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _l(n),e.set(r,[o])):s>=a.length?(o=new _l(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,U0=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],N0=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],xl=new ht,dr=new H,ba=new H;function F0(n,e,t){let i=new tc;const r=new Ve,s=new Ve,a=new gt,o=new qh,c=new Yh,l={},f=t.maxTextureSize,u={[In]:Bt,[Bt]:In,[Ot]:Ot},h=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:L0,fragmentShader:I0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ce(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let d=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Ff&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=_s);const y=n.getRenderTarget(),T=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Cn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=d!==this.type;k&&C.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(D=>D.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,D=w.length;A<D;A++){const U=w[A],N=U.shadow;if(N===void 0){Be("WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const G=N.getFrameExtents();if(r.multiply(G),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/G.x),r.x=s.x*G.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/G.y),r.y=s.y*G.y,N.mapSize.y=s.y)),N.map===null||k===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===vr){if(U.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new gn(r.x,r.y,{format:Yi,type:Un,minFilter:yt,magFilter:yt,generateMipmaps:!1}),N.map.texture.name=U.name+".shadowMap",N.map.depthTexture=new Pr(r.x,r.y,dn),N.map.depthTexture.name=U.name+".shadowMapDepth",N.map.depthTexture.format=Nn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=wt,N.map.depthTexture.magFilter=wt}else{U.isPointLight?(N.map=new yu(r.x),N.map.depthTexture=new Wh(r.x,xn)):(N.map=new gn(r.x,r.y),N.map.depthTexture=new Pr(r.x,r.y,xn)),N.map.depthTexture.name=U.name+".shadowMap",N.map.depthTexture.format=Nn;const Q=n.state.buffers.depth.getReversed();this.type===_s?(N.map.depthTexture.compareFunction=Q?Ko:$o,N.map.depthTexture.minFilter=yt,N.map.depthTexture.magFilter=yt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=wt,N.map.depthTexture.magFilter=wt)}N.camera.updateProjectionMatrix()}const J=N.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<J;Q++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,Q),n.clear();else{Q===0&&(n.setRenderTarget(N.map),n.clear());const L=N.getViewport(Q);a.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),z.viewport(a)}if(U.isPointLight){const L=N.camera,q=N.matrix,se=U.distance||L.far;se!==L.far&&(L.far=se,L.updateProjectionMatrix()),dr.setFromMatrixPosition(U.matrixWorld),L.position.copy(dr),ba.copy(L.position),ba.add(U0[Q]),L.up.copy(N0[Q]),L.lookAt(ba),L.updateMatrixWorld(),q.makeTranslation(-dr.x,-dr.y,-dr.z),xl.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),N._frustum.setFromProjectionMatrix(xl,L.coordinateSystem,L.reversedDepth)}else N.updateMatrices(U);i=N.getFrustum(),b(C,P,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===vr&&v(N,P),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,T,I)};function v(w,C){const P=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gn(r.x,r.y,{format:Yi,type:Un})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,P,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,P,p,_,null)}function E(w,C,P,y){let T=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)T=I;else if(T=P.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=T.uuid,k=C.uuid;let A=l[z];A===void 0&&(A={},l[z]=A);let D=A[k];D===void 0&&(D=T.clone(),A[k]=D,C.addEventListener("dispose",S)),T=D}if(T.visible=C.visible,T.wireframe=C.wireframe,y===vr?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=n.properties.get(T);z.light=P}return T}function b(w,C,P,y,T){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===vr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const k=e.update(w),A=w.material;if(Array.isArray(A)){const D=k.groups;for(let U=0,N=D.length;U<N;U++){const G=D[U],J=A[G.materialIndex];if(J&&J.visible){const Q=E(w,J,y,T);w.onBeforeShadow(n,w,C,P,k,Q,G),n.renderBufferDirect(P,null,k,Q,w,G),w.onAfterShadow(n,w,C,P,k,Q,G)}}}else if(A.visible){const D=E(w,A,y,T);w.onBeforeShadow(n,w,C,P,k,D,null),n.renderBufferDirect(P,null,k,D,w,null),w.onAfterShadow(n,w,C,P,k,D,null)}}const z=w.children;for(let k=0,A=z.length;k<A;k++)b(z[k],C,P,y,T)}function S(w){w.target.removeEventListener("dispose",S);for(const P in l){const y=l[P],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const O0={[Va]:Ga,[Ha]:qa,[Wa]:Ya,[Xi]:Xa,[Ga]:Va,[qa]:Ha,[Ya]:Wa,[Xa]:Xi};function B0(n,e){function t(){let O=!1;const ge=new gt;let ue=null;const ye=new gt(0,0,0,0);return{setMask:function(oe){ue!==oe&&!O&&(n.colorMask(oe,oe,oe,oe),ue=oe)},setLocked:function(oe){O=oe},setClear:function(oe,re,pe,Oe,ut){ut===!0&&(oe*=Oe,re*=Oe,pe*=Oe),ge.set(oe,re,pe,Oe),ye.equals(ge)===!1&&(n.clearColor(oe,re,pe,Oe),ye.copy(ge))},reset:function(){O=!1,ue=null,ye.set(-1,0,0,0)}}}function i(){let O=!1,ge=!1,ue=null,ye=null,oe=null;return{setReversed:function(re){if(ge!==re){const pe=e.get("EXT_clip_control");re?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ge=re;const Oe=oe;oe=null,this.setClear(Oe)}},getReversed:function(){return ge},setTest:function(re){re?te(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(re){ue!==re&&!O&&(n.depthMask(re),ue=re)},setFunc:function(re){if(ge&&(re=O0[re]),ye!==re){switch(re){case Va:n.depthFunc(n.NEVER);break;case Ga:n.depthFunc(n.ALWAYS);break;case Ha:n.depthFunc(n.LESS);break;case Xi:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case Xa:n.depthFunc(n.GEQUAL);break;case qa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=re}},setLocked:function(re){O=re},setClear:function(re){oe!==re&&(ge&&(re=1-re),n.clearDepth(re),oe=re)},reset:function(){O=!1,ue=null,ye=null,oe=null,ge=!1}}}function r(){let O=!1,ge=null,ue=null,ye=null,oe=null,re=null,pe=null,Oe=null,ut=null;return{setTest:function(nt){O||(nt?te(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!O&&(n.stencilMask(nt),ge=nt)},setFunc:function(nt,ln,Sn){(ue!==nt||ye!==ln||oe!==Sn)&&(n.stencilFunc(nt,ln,Sn),ue=nt,ye=ln,oe=Sn)},setOp:function(nt,ln,Sn){(re!==nt||pe!==ln||Oe!==Sn)&&(n.stencilOp(nt,ln,Sn),re=nt,pe=ln,Oe=Sn)},setLocked:function(nt){O=nt},setClear:function(nt){ut!==nt&&(n.clearStencil(nt),ut=nt)},reset:function(){O=!1,ge=null,ue=null,ye=null,oe=null,re=null,pe=null,Oe=null,ut=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let f={},u={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,E=null,b=null,S=null,w=null,C=new Ke(0,0,0),P=0,y=!1,T=null,I=null,z=null,k=null,A=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,N=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=N>=1):G.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=N>=2);let J=null,Q={};const L=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),se=new gt().fromArray(L),Ae=new gt().fromArray(q);function be(O,ge,ue,ye){const oe=new Uint8Array(4),re=n.createTexture();n.bindTexture(O,re),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<ue;pe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(ge+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return re}const j={};j[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(Xi),Fe(!1),tt(vc),te(n.CULL_FACE),Xe(Cn);function te(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function ve(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function Ie(O,ge){return u[O]!==ge?(n.bindFramebuffer(O,ge),u[O]=ge,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function he(O,ge){let ue=p,ye=!1;if(O){ue=h.get(ge),ue===void 0&&(ue=[],h.set(ge,ue));const oe=O.textures;if(ue.length!==oe.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let re=0,pe=oe.length;re<pe;re++)ue[re]=n.COLOR_ATTACHMENT0+re;ue.length=oe.length,ye=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,ye=!0);ye&&n.drawBuffers(ue)}function Ne(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const et={[ci]:n.FUNC_ADD,[Bf]:n.FUNC_SUBTRACT,[kf]:n.FUNC_REVERSE_SUBTRACT};et[zf]=n.MIN,et[Vf]=n.MAX;const He={[Gf]:n.ZERO,[Hf]:n.ONE,[Wf]:n.SRC_COLOR,[ka]:n.SRC_ALPHA,[jf]:n.SRC_ALPHA_SATURATE,[$f]:n.DST_COLOR,[qf]:n.DST_ALPHA,[Xf]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[Kf]:n.ONE_MINUS_DST_COLOR,[Yf]:n.ONE_MINUS_DST_ALPHA,[Zf]:n.CONSTANT_COLOR,[Jf]:n.ONE_MINUS_CONSTANT_COLOR,[Qf]:n.CONSTANT_ALPHA,[eh]:n.ONE_MINUS_CONSTANT_ALPHA};function Xe(O,ge,ue,ye,oe,re,pe,Oe,ut,nt){if(O===Cn){_===!0&&(ve(n.BLEND),_=!1);return}if(_===!1&&(te(n.BLEND),_=!0),O!==Of){if(O!==m||nt!==y){if((d!==ci||b!==ci)&&(n.blendEquation(n.FUNC_ADD),d=ci,b=ci),nt)switch(O){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFunc(n.ONE,n.ONE);break;case Sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",O);break}else switch(O){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sc:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",O);break}v=null,E=null,S=null,w=null,C.set(0,0,0),P=0,m=O,y=nt}return}oe=oe||ge,re=re||ue,pe=pe||ye,(ge!==d||oe!==b)&&(n.blendEquationSeparate(et[ge],et[oe]),d=ge,b=oe),(ue!==v||ye!==E||re!==S||pe!==w)&&(n.blendFuncSeparate(He[ue],He[ye],He[re],He[pe]),v=ue,E=ye,S=re,w=pe),(Oe.equals(C)===!1||ut!==P)&&(n.blendColor(Oe.r,Oe.g,Oe.b,ut),C.copy(Oe),P=ut),m=O,y=!1}function Pe(O,ge){O.side===Ot?ve(n.CULL_FACE):te(n.CULL_FACE);let ue=O.side===Bt;ge&&(ue=!ue),Fe(ue),O.blending===Gi&&O.transparent===!1?Xe(Cn):Xe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const ye=O.stencilWrite;o.setTest(ye),ye&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),lt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(O){T!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),T=O)}function tt(O){O!==Uf?(te(n.CULL_FACE),O!==I&&(O===vc?n.cullFace(n.BACK):O===Nf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),I=O}function F(O){O!==z&&(U&&n.lineWidth(O),z=O)}function lt(O,ge,ue){O?(te(n.POLYGON_OFFSET_FILL),(k!==ge||A!==ue)&&(n.polygonOffset(ge,ue),k=ge,A=ue)):ve(n.POLYGON_OFFSET_FILL)}function qe(O){O?te(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function Ye(O){O===void 0&&(O=n.TEXTURE0+D-1),J!==O&&(n.activeTexture(O),J=O)}function Me(O,ge,ue){ue===void 0&&(J===null?ue=n.TEXTURE0+D-1:ue=J);let ye=Q[ue];ye===void 0&&(ye={type:void 0,texture:void 0},Q[ue]=ye),(ye.type!==O||ye.texture!==ge)&&(J!==ue&&(n.activeTexture(ue),J=ue),n.bindTexture(O,ge||j[O]),ye.type=O,ye.texture=ge)}function R(){const O=Q[J];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function $(){try{n.texSubImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function ee(){try{n.texSubImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function fe(){try{n.texStorage2D(...arguments)}catch(O){je("WebGLState:",O)}}function ne(){try{n.texStorage3D(...arguments)}catch(O){je("WebGLState:",O)}}function le(){try{n.texImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function Z(){try{n.texImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function ae(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function ie(O){Ae.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ae.copy(O))}function de(O,ge){let ue=l.get(ge);ue===void 0&&(ue=new WeakMap,l.set(ge,ue));let ye=ue.get(O);ye===void 0&&(ye=n.getUniformBlockIndex(ge,O.name),ue.set(O,ye))}function ce(O,ge){const ye=l.get(ge).get(O);c.get(ge)!==ye&&(n.uniformBlockBinding(ge,ye,O.__bindingPointIndex),c.set(ge,ye))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},J=null,Q={},u={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,E=null,b=null,S=null,w=null,C=new Ke(0,0,0),P=0,y=!1,T=null,I=null,z=null,k=null,A=null,se.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:ve,bindFramebuffer:Ie,drawBuffers:he,useProgram:Ne,setBlending:Xe,setMaterial:Pe,setFlipSided:Fe,setCullFace:tt,setLineWidth:F,setPolygonOffset:lt,setScissorTest:qe,activeTexture:Ye,bindTexture:Me,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:le,texImage3D:Z,updateUBOMapping:de,uniformBlockBinding:ce,texStorage2D:fe,texStorage3D:ne,texSubImage2D:$,texSubImage3D:ee,compressedTexSubImage2D:K,compressedTexSubImage3D:Ee,scissor:ae,viewport:ie,reset:ke}}function k0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,f=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return p?new OffscreenCanvas(R,x):As("canvas")}function _(R,x,B){let $=1;const ee=Me(R);if((ee.width>B||ee.height>B)&&($=B/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor($*ee.width),Ee=Math.floor($*ee.height);u===void 0&&(u=g(K,Ee));const fe=x?g(K,Ee):u;return fe.width=K,fe.height=Ee,fe.getContext("2d").drawImage(R,0,0,K,Ee),Be("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Ee+")."),fe}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,x,B,$,ee=!1){if(R!==null){if(n[R]!==void 0)return n[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=x;if(x===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),x===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),x===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),x===n.RGBA){const Ee=ee?Ts:Ze.getTransfer($);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=Ee===rt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(R,x){let B;return R?x===null||x===xn||x===Rr?B=n.DEPTH24_STENCIL8:x===dn?B=n.DEPTH32F_STENCIL8:x===Ar&&(B=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xn||x===Rr?B=n.DEPTH_COMPONENT24:x===dn?B=n.DEPTH_COMPONENT32F:x===Ar&&(B=n.DEPTH_COMPONENT16),B}function S(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==wt&&R.minFilter!==yt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),P(x),x.isVideoTexture&&f.delete(x)}function C(R){const x=R.target;x.removeEventListener("dispose",C),T(x)}function P(R){const x=i.get(R);if(x.__webglInit===void 0)return;const B=R.source,$=h.get(B);if($){const ee=$[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(R),Object.keys($).length===0&&h.delete(B)}i.remove(R)}function y(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const B=R.source,$=h.get(B);delete $[x.__cacheKey],a.memory.textures--}function T(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ee=0;ee<x.__webglFramebuffer[$].length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[$][ee]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=R.textures;for(let $=0,ee=B.length;$<ee;$++){const K=i.get(B[$]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(B[$])}i.remove(R)}let I=0;function z(){I=0}function k(){const R=I;return R>=r.maxTextures&&Be("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function A(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function D(R,x){const B=i.get(R);if(R.isVideoTexture&&qe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const $=R.image;if($===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,R,x);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function U(R,x){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){j(B,R,x);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function N(R,x){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){j(B,R,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function G(R,x){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){te(B,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const J={[wr]:n.REPEAT,[Rn]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},Q={[wt]:n.NEAREST,[ih]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[yt]:n.LINEAR,[Xs]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},L={[ah]:n.NEVER,[fh]:n.ALWAYS,[oh]:n.LESS,[$o]:n.LEQUAL,[ch]:n.EQUAL,[Ko]:n.GEQUAL,[lh]:n.GREATER,[uh]:n.NOTEQUAL};function q(R,x){if(x.type===dn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===yt||x.magFilter===Xs||x.magFilter===qr||x.magFilter===ui||x.minFilter===yt||x.minFilter===Xs||x.minFilter===qr||x.minFilter===ui)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,J[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,J[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,J[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Q[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,L[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wt||x.minFilter!==qr&&x.minFilter!==ui||x.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function se(R,x){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const $=x.source;let ee=h.get($);ee===void 0&&(ee={},h.set($,ee));const K=A(x);if(K!==R.__cacheKey){ee[K]===void 0&&(ee[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ee[K].usedTimes++;const Ee=ee[R.__cacheKey];Ee!==void 0&&(ee[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(x)),R.__cacheKey=K,R.__webglTexture=ee[K].texture}return B}function Ae(R,x,B){return Math.floor(Math.floor(R/B)/x)}function be(R,x,B,$){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,B,$,x.data);else{K.sort((Z,ae)=>Z.start-ae.start);let Ee=0;for(let Z=1;Z<K.length;Z++){const ae=K[Ee],ie=K[Z],de=ae.start+ae.count,ce=Ae(ie.start,x.width,4),ke=Ae(ae.start,x.width,4);ie.start<=de+1&&ce===ke&&Ae(ie.start+ie.count-1,x.width,4)===ce?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++Ee,K[Ee]=ie)}K.length=Ee+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),ne=n.getParameter(n.UNPACK_SKIP_PIXELS),le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Z=0,ae=K.length;Z<ae;Z++){const ie=K[Z],de=Math.floor(ie.start/4),ce=Math.ceil(ie.count/4),ke=de%x.width,O=Math.floor(de/x.width),ge=ce,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,ke,O,ge,ue,B,$,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function j(R,x,B){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const ee=se(R,x),K=x.source;t.bindTexture($,R.__webglTexture,n.TEXTURE0+B);const Ee=i.get(K);if(K.version!==Ee.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const fe=Ze.getPrimaries(Ze.workingColorSpace),ne=x.colorSpace===Wn?null:Ze.getPrimaries(x.colorSpace),le=x.colorSpace===Wn||fe===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Z=_(x.image,!1,r.maxTextureSize);Z=Ye(x,Z);const ae=s.convert(x.format,x.colorSpace),ie=s.convert(x.type);let de=E(x.internalFormat,ae,ie,x.colorSpace,x.isVideoTexture);q($,x);let ce;const ke=x.mipmaps,O=x.isVideoTexture!==!0,ge=Ee.__version===void 0||ee===!0,ue=K.dataReady,ye=S(x,Z);if(x.isDepthTexture)de=b(x.format===fi,x.type),ge&&(O?t.texStorage2D(n.TEXTURE_2D,1,de,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,de,Z.width,Z.height,0,ae,ie,null));else if(x.isDataTexture)if(ke.length>0){O&&ge&&t.texStorage2D(n.TEXTURE_2D,ye,de,ke[0].width,ke[0].height);for(let oe=0,re=ke.length;oe<re;oe++)ce=ke[oe],O?ue&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ce.width,ce.height,ae,ie,ce.data):t.texImage2D(n.TEXTURE_2D,oe,de,ce.width,ce.height,0,ae,ie,ce.data);x.generateMipmaps=!1}else O?(ge&&t.texStorage2D(n.TEXTURE_2D,ye,de,Z.width,Z.height),ue&&be(x,Z,ae,ie)):t.texImage2D(n.TEXTURE_2D,0,de,Z.width,Z.height,0,ae,ie,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,de,ke[0].width,ke[0].height,Z.depth);for(let oe=0,re=ke.length;oe<re;oe++)if(ce=ke[oe],x.format!==rn)if(ae!==null)if(O){if(ue)if(x.layerUpdates.size>0){const pe=Kc(ce.width,ce.height,x.format,x.type);for(const Oe of x.layerUpdates){const ut=ce.data.subarray(Oe*pe/ce.data.BYTES_PER_ELEMENT,(Oe+1)*pe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Oe,ce.width,ce.height,1,ae,ut)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ce.width,ce.height,Z.depth,ae,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,de,ce.width,ce.height,Z.depth,0,ce.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ce.width,ce.height,Z.depth,ae,ie,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,de,ce.width,ce.height,Z.depth,0,ae,ie,ce.data)}else{O&&ge&&t.texStorage2D(n.TEXTURE_2D,ye,de,ke[0].width,ke[0].height);for(let oe=0,re=ke.length;oe<re;oe++)ce=ke[oe],x.format!==rn?ae!==null?O?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,de,ce.width,ce.height,0,ce.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ue&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ce.width,ce.height,ae,ie,ce.data):t.texImage2D(n.TEXTURE_2D,oe,de,ce.width,ce.height,0,ae,ie,ce.data)}else if(x.isDataArrayTexture)if(O){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,de,Z.width,Z.height,Z.depth),ue)if(x.layerUpdates.size>0){const oe=Kc(Z.width,Z.height,x.format,x.type);for(const re of x.layerUpdates){const pe=Z.data.subarray(re*oe/Z.data.BYTES_PER_ELEMENT,(re+1)*oe/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,Z.width,Z.height,1,ae,ie,pe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ae,ie,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,Z.width,Z.height,Z.depth,0,ae,ie,Z.data);else if(x.isData3DTexture)O?(ge&&t.texStorage3D(n.TEXTURE_3D,ye,de,Z.width,Z.height,Z.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ae,ie,Z.data)):t.texImage3D(n.TEXTURE_3D,0,de,Z.width,Z.height,Z.depth,0,ae,ie,Z.data);else if(x.isFramebufferTexture){if(ge)if(O)t.texStorage2D(n.TEXTURE_2D,ye,de,Z.width,Z.height);else{let oe=Z.width,re=Z.height;for(let pe=0;pe<ye;pe++)t.texImage2D(n.TEXTURE_2D,pe,de,oe,re,0,ae,ie,null),oe>>=1,re>>=1}}else if(ke.length>0){if(O&&ge){const oe=Me(ke[0]);t.texStorage2D(n.TEXTURE_2D,ye,de,oe.width,oe.height)}for(let oe=0,re=ke.length;oe<re;oe++)ce=ke[oe],O?ue&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ae,ie,ce):t.texImage2D(n.TEXTURE_2D,oe,de,ae,ie,ce);x.generateMipmaps=!1}else if(O){if(ge){const oe=Me(Z);t.texStorage2D(n.TEXTURE_2D,ye,de,oe.width,oe.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,ie,Z)}else t.texImage2D(n.TEXTURE_2D,0,de,ae,ie,Z);m(x)&&d($),Ee.__version=K.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function te(R,x,B){if(x.image.length!==6)return;const $=se(R,x),ee=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const K=i.get(ee);if(ee.version!==K.__version||$===!0){t.activeTexture(n.TEXTURE0+B);const Ee=Ze.getPrimaries(Ze.workingColorSpace),fe=x.colorSpace===Wn?null:Ze.getPrimaries(x.colorSpace),ne=x.colorSpace===Wn||Ee===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,Z=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let re=0;re<6;re++)!le&&!Z?ae[re]=_(x.image[re],!0,r.maxCubemapSize):ae[re]=Z?x.image[re].image:x.image[re],ae[re]=Ye(x,ae[re]);const ie=ae[0],de=s.convert(x.format,x.colorSpace),ce=s.convert(x.type),ke=E(x.internalFormat,de,ce,x.colorSpace),O=x.isVideoTexture!==!0,ge=K.__version===void 0||$===!0,ue=ee.dataReady;let ye=S(x,ie);q(n.TEXTURE_CUBE_MAP,x);let oe;if(le){O&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,ke,ie.width,ie.height);for(let re=0;re<6;re++){oe=ae[re].mipmaps;for(let pe=0;pe<oe.length;pe++){const Oe=oe[pe];x.format!==rn?de!==null?O?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,0,0,Oe.width,Oe.height,de,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,ke,Oe.width,Oe.height,0,Oe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,0,0,Oe.width,Oe.height,de,ce,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,ke,Oe.width,Oe.height,0,de,ce,Oe.data)}}}else{if(oe=x.mipmaps,O&&ge){oe.length>0&&ye++;const re=Me(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,ke,re.width,re.height)}for(let re=0;re<6;re++)if(Z){O?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ae[re].width,ae[re].height,de,ce,ae[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,ae[re].width,ae[re].height,0,de,ce,ae[re].data);for(let pe=0;pe<oe.length;pe++){const ut=oe[pe].image[re].image;O?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,0,0,ut.width,ut.height,de,ce,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,ke,ut.width,ut.height,0,de,ce,ut.data)}}else{O?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,de,ce,ae[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,de,ce,ae[re]);for(let pe=0;pe<oe.length;pe++){const Oe=oe[pe];O?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,0,0,de,ce,Oe.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,ke,de,ce,Oe.image[re])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),K.__version=ee.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ve(R,x,B,$,ee,K){const Ee=s.convert(B.format,B.colorSpace),fe=s.convert(B.type),ne=E(B.internalFormat,Ee,fe,B.colorSpace),le=i.get(x),Z=i.get(B);if(Z.__renderTarget=x,!le.__hasExternalTextures){const ae=Math.max(1,x.width>>K),ie=Math.max(1,x.height>>K);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,ne,ae,ie,x.depth,0,Ee,fe,null):t.texImage2D(ee,K,ne,ae,ie,0,Ee,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),lt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,ee,Z.__webglTexture,0,F(x)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,ee,Z.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(R,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const $=x.depthTexture,ee=$&&$.isDepthTexture?$.type:null,K=b(x.stencilBuffer,ee),Ee=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;lt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(x),K,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(x),K,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,R)}else{const $=x.textures;for(let ee=0;ee<$.length;ee++){const K=$[ee],Ee=s.convert(K.format,K.colorSpace),fe=s.convert(K.type),ne=E(K.internalFormat,Ee,fe,K.colorSpace);lt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(x),ne,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(x),ne,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ne,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(R,x,B){const $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(x.depthTexture);if(ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),q(n.TEXTURE_CUBE_MAP,x.depthTexture);const le=s.convert(x.depthTexture.format),Z=s.convert(x.depthTexture.type);let ae;x.depthTexture.format===Nn?ae=n.DEPTH_COMPONENT24:x.depthTexture.format===fi&&(ae=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ae,x.width,x.height,0,le,Z,null)}}else D(x.depthTexture,0);const K=ee.__webglTexture,Ee=F(x),fe=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ne=x.depthTexture.format===fi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Nn)lt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,fe,K,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,ne,fe,K,0);else if(x.depthTexture.format===fi)lt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,fe,K,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,ne,fe,K,0);else throw new Error("Unknown depthTexture format")}function Ne(R){const x=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=$}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let $=0;$<6;$++)he(x.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?he(x.__webglFramebuffer[0],R,0):he(x.__webglFramebuffer,R,0)}else if(B){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),Ie(x.__webglDepthbuffer[$],R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,K)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ie(x.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(R,x,B){const $=i.get(R);x!==void 0&&ve($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ne(R)}function He(R){const x=R.texture,B=i.get(R),$=i.get(x);R.addEventListener("dispose",C);const ee=R.textures,K=R.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[fe]=[];for(let ne=0;ne<x.mipmaps.length;ne++)B.__webglFramebuffer[fe][ne]=n.createFramebuffer()}else B.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)B.__webglFramebuffer[fe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let fe=0,ne=ee.length;fe<ne;fe++){const le=i.get(ee[fe]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&lt(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const ne=ee[fe];B.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);const le=s.convert(ne.format,ne.colorSpace),Z=s.convert(ne.type),ae=E(ne.internalFormat,le,Z,ne.colorSpace,R.isXRRenderTarget===!0),ie=F(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),q(n.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)ve(B.__webglFramebuffer[fe][ne],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ne);else ve(B.__webglFramebuffer[fe],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let fe=0,ne=ee.length;fe<ne;fe++){const le=ee[fe],Z=i.get(le);let ae=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),q(ae,le),ve(B.__webglFramebuffer,R,le,n.COLOR_ATTACHMENT0+fe,ae,0),m(le)&&d(ae)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,$.__webglTexture),q(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)ve(B.__webglFramebuffer[ne],R,x,n.COLOR_ATTACHMENT0,fe,ne);else ve(B.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,fe,0);m(x)&&d(fe),t.unbindTexture()}R.depthBuffer&&Ne(R)}function Xe(R){const x=R.textures;for(let B=0,$=x.length;B<$;B++){const ee=x[B];if(m(ee)){const K=v(R),Ee=i.get(ee).__webglTexture;t.bindTexture(K,Ee),d(K),t.unbindTexture()}}}const Pe=[],Fe=[];function tt(R){if(R.samples>0){if(lt(R)===!1){const x=R.textures,B=R.width,$=R.height;let ee=n.COLOR_BUFFER_BIT;const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(R),fe=x.length>1;if(fe)for(let le=0;le<x.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const ne=R.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let le=0;le<x.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[le]);const Z=i.get(x[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,B,$,0,0,B,$,ee,n.NEAREST),c===!0&&(Pe.length=0,Fe.length=0,Pe.push(n.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pe.push(K),Fe.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let le=0;le<x.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[le]);const Z=i.get(x[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function F(R){return Math.min(r.maxSamples,R.samples)}function lt(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function qe(R){const x=a.render.frame;f.get(R)!==x&&(f.set(R,x),R.update())}function Ye(R,x){const B=R.colorSpace,$=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==$i&&B!==Wn&&(Ze.getTransfer(B)===rt?($!==rn||ee!==Xt)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",B)),x}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=D,this.setTexture2DArray=U,this.setTexture3D=N,this.setTextureCube=G,this.rebindTextures=et,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function z0(n,e){function t(i,r=Wn){let s;const a=Ze.getTransfer(r);if(i===Xt)return n.UNSIGNED_BYTE;if(i===Ho)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===su)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===au)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===iu)return n.BYTE;if(i===ru)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===Go)return n.INT;if(i===xn)return n.UNSIGNED_INT;if(i===dn)return n.FLOAT;if(i===Un)return n.HALF_FLOAT;if(i===ou)return n.ALPHA;if(i===cu)return n.RGB;if(i===rn)return n.RGBA;if(i===Nn)return n.DEPTH_COMPONENT;if(i===fi)return n.DEPTH_STENCIL;if(i===lu)return n.RED;if(i===Xo)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===qo)return n.RG_INTEGER;if(i===Yo)return n.RGBA_INTEGER;if(i===xs||i===vs||i===ys||i===Ss)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Qa||i===eo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===eo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===to||i===no||i===io||i===ro||i===so||i===ao||i===oo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===to||i===no)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===io)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ro)return s.COMPRESSED_R11_EAC;if(i===so)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ao)return s.COMPRESSED_RG11_EAC;if(i===oo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===co||i===lo||i===uo||i===fo||i===ho||i===po||i===mo||i===go||i===_o||i===xo||i===vo||i===yo||i===So||i===Mo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===co)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ho)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===po)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===go)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_o)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===So)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===bo||i===To)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eo)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===To)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wo||i===Ao||i===Ro||i===Co)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ao)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ro)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Co)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const V0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Eu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yn({vertexShader:V0,fragmentShader:G0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ce(new Dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W0 extends er{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,u=null,h=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new H0,d={},v=t.getContextAttributes();let E=null,b=null;const S=[],w=[],C=new Ve;let P=null;const y=new Wt;y.viewport=new gt;const T=new Wt;T.viewport=new gt;const I=[y,T],z=new Jh;let k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=S[j];return te===void 0&&(te=new pa,S[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=S[j];return te===void 0&&(te=new pa,S[j]=te),te.getGripSpace()},this.getHand=function(j){let te=S[j];return te===void 0&&(te=new pa,S[j]=te),te.getHandSpace()};function D(j){const te=w.indexOf(j.inputSource);if(te===-1)return;const ve=S[te];ve!==void 0&&(ve.update(j.inputSource,j.frame,l||a),ve.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",N);for(let j=0;j<S.length;j++){const te=w[j];te!==null&&(w[j]=null,S[j].disconnect(te))}k=null,A=null,m.reset();for(const j in d)delete d[j];e.setRenderTarget(E),p=null,h=null,u=null,r=null,b=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",U),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ie=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=v.stencil?fi:Nn,Ie=v.stencil?Rr:xn);const Ne={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new gn(h.textureWidth,h.textureHeight,{format:rn,type:Xt,depthTexture:new Pr(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new gn(p.framebufferWidth,p.framebufferHeight,{format:rn,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(j){for(let te=0;te<j.removed.length;te++){const ve=j.removed[te],Ie=w.indexOf(ve);Ie>=0&&(w[Ie]=null,S[Ie].disconnect(ve))}for(let te=0;te<j.added.length;te++){const ve=j.added[te];let Ie=w.indexOf(ve);if(Ie===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=w.length){w.push(ve),Ie=Ne;break}else if(w[Ne]===null){w[Ne]=ve,Ie=Ne;break}if(Ie===-1)break}const he=S[Ie];he&&he.connect(ve)}}const G=new H,J=new H;function Q(j,te,ve){G.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ve.matrixWorld);const Ie=G.distanceTo(J),he=te.projectionMatrix.elements,Ne=ve.projectionMatrix.elements,et=he[14]/(he[10]-1),He=he[14]/(he[10]+1),Xe=(he[9]+1)/he[5],Pe=(he[9]-1)/he[5],Fe=(he[8]-1)/he[0],tt=(Ne[8]+1)/Ne[0],F=et*Fe,lt=et*tt,qe=Ie/(-Fe+tt),Ye=qe*-Fe;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ye),j.translateZ(qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),he[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Me=et+qe,R=He+qe,x=F-Ye,B=lt+(Ie-Ye),$=Xe*He/R*Me,ee=Pe*He/R*Me;j.projectionMatrix.makePerspective(x,B,$,ee,Me,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function L(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let te=j.near,ve=j.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),z.near=T.near=y.near=te,z.far=T.far=y.far=ve,(k!==z.near||A!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),k=z.near,A=z.far),z.layers.mask=j.layers.mask|6,y.layers.mask=z.layers.mask&3,T.layers.mask=z.layers.mask&5;const Ie=j.parent,he=z.cameras;L(z,Ie);for(let Ne=0;Ne<he.length;Ne++)L(he[Ne],Ie);he.length===2?Q(z,y,T):z.projectionMatrix.copy(y.projectionMatrix),q(j,z,Ie)};function q(j,te,ve){ve===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(ve.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Do*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(j){return d[j]};let se=null;function Ae(j,te){if(f=te.getViewerPose(l||a),g=te,f!==null){const ve=f.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Ie=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let He=0;He<ve.length;He++){const Xe=ve[He];let Pe=null;if(p!==null)Pe=p.getViewport(Xe);else{const tt=u.getViewSubImage(h,Xe);Pe=tt.viewport,He===0&&(e.setRenderTargetTextures(b,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(b))}let Fe=I[He];Fe===void 0&&(Fe=new Wt,Fe.layers.enable(He),Fe.viewport=new gt,I[He]=Fe),Fe.matrix.fromArray(Xe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Xe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),He===0&&(z.matrix.copy(Fe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(Fe)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const He=u.getDepthInformation(ve[0]);He&&He.isValid&&He.texture&&m.init(He,r.renderState)}if(he&&he.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let He=0;He<ve.length;He++){const Xe=ve[He].camera;if(Xe){let Pe=d[Xe];Pe||(Pe=new Eu,d[Xe]=Pe);const Fe=u.getCameraImage(Xe);Pe.sourceTexture=Fe}}}}for(let ve=0;ve<S.length;ve++){const Ie=w[ve],he=S[ve];Ie!==null&&he!==void 0&&he.update(Ie,te,l||a)}se&&se(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const be=new Tu;be.setAnimationLoop(Ae),this.setAnimationLoop=function(j){se=j},this.dispose=function(){}}}const si=new vn,X0=new ht;function q0(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,_u(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,E,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,v,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Bt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Bt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),E=v.envMap,b=v.envMapRotation;E&&(m.envMap.value=E,si.copy(b),si.x*=-1,si.y*=-1,si.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(si)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Y0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){const b=E.program;i.uniformBlockBinding(v,b)}function l(v,E){let b=r[v.id];b===void 0&&(g(v),b=f(v),r[v.id]=b,v.addEventListener("dispose",m));const S=E.program;i.updateUBOMapping(v,S);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function f(v){const E=u();v.__bindingPointIndex=E;const b=n.createBuffer(),S=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,S,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const E=r[v.id],b=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,C=b.length;w<C;w++){const P=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,T=P.length;y<T;y++){const I=P[y];if(p(I,w,y,S)===!0){const z=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let A=0;for(let D=0;D<k.length;D++){const U=k[D],N=_(U);typeof U=="number"||typeof U=="boolean"?(I.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,z+A,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=0,I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=0,I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=0):(U.toArray(I.__data,A),A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,E,b,S){const w=v.value,C=E+"_"+b;if(S[C]===void 0)return typeof w=="number"||typeof w=="boolean"?S[C]=w:S[C]=w.clone(),!0;{const P=S[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return S[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(v){const E=v.uniforms;let b=0;const S=16;for(let C=0,P=E.length;C<P;C++){const y=Array.isArray(E[C])?E[C]:[E[C]];for(let T=0,I=y.length;T<I;T++){const z=y[T],k=Array.isArray(z.value)?z.value:[z.value];for(let A=0,D=k.length;A<D;A++){const U=k[A],N=_(U),G=b%S,J=G%N.boundary,Q=G+J;b+=J,Q!==0&&S-Q<N.storage&&(b+=S-Q),z.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=N.storage}}}const w=b%S;return w>0&&(b+=S-w),v.__size=b,v.__cache={},this}function _(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",v),E}function m(v){const E=v.target;E.removeEventListener("dispose",m);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}const $0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let un=null;function K0(){return un===null&&(un=new zh($0,16,16,Yi,Un),un.name="DFG_LUT",un.minFilter=yt,un.magFilter=yt,un.wrapS=Rn,un.wrapT=Rn,un.generateMipmaps=!1,un.needsUpdate=!0),un}class j0{constructor(e={}){const{canvas:t=hh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Xt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=p,m=new Set([Yo,qo,Xo]),d=new Set([Xt,xn,Ar,Rr,Ho,Wo]),v=new Uint32Array(4),E=new Int32Array(4);let b=null,S=null;const w=[],C=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let T=!1;this._outputColorSpace=Kt;let I=0,z=0,k=null,A=-1,D=null;const U=new gt,N=new gt;let G=null;const J=new Ke(0);let Q=0,L=t.width,q=t.height,se=1,Ae=null,be=null;const j=new gt(0,0,L,q),te=new gt(0,0,L,q);let ve=!1;const Ie=new tc;let he=!1,Ne=!1;const et=new ht,He=new H,Xe=new gt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function tt(){return k===null?se:1}let F=i;function lt(M,V){return t.getContext(M,V)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",nt,!1),F===null){const V="webgl2";if(F=lt(V,M),F===null)throw lt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw je("WebGLRenderer: "+M.message),M}let qe,Ye,Me,R,x,B,$,ee,K,Ee,fe,ne,le,Z,ae,ie,de,ce,ke,O,ge,ue,ye,oe;function re(){qe=new Km(F),qe.init(),ue=new z0(F,qe),Ye=new zm(F,qe,e,ue),Me=new B0(F,qe),Ye.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),R=new Jm(F),x=new E0,B=new k0(F,qe,Me,x,Ye,ue,R),$=new Gm(y),ee=new $m(y),K=new nd(F),ye=new Bm(F,K),Ee=new jm(F,K,R,ye),fe=new eg(F,Ee,K,R),ke=new Qm(F,Ye,B),ie=new Vm(x),ne=new M0(y,$,ee,qe,Ye,ye,ie),le=new q0(y,x),Z=new T0,ae=new D0(qe),ce=new Om(y,$,ee,Me,fe,g,c),de=new F0(y,fe,Ye),oe=new Y0(F,R,Ye,Me),O=new km(F,qe,R),ge=new Zm(F,qe,R),R.programs=ne.programs,y.capabilities=Ye,y.extensions=qe,y.properties=x,y.renderLists=Z,y.shadowMap=de,y.state=Me,y.info=R}re(),_!==Xt&&(P=new ng(_,t.width,t.height,r,s));const pe=new W0(y,F);this.xr=pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(M){M!==void 0&&(se=M,this.setSize(L,q,!1))},this.getSize=function(M){return M.set(L,q)},this.setSize=function(M,V,Y=!0){if(pe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}L=M,q=V,t.width=Math.floor(M*se),t.height=Math.floor(V*se),Y===!0&&(t.style.width=M+"px",t.style.height=V+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,M,V)},this.getDrawingBufferSize=function(M){return M.set(L*se,q*se).floor()},this.setDrawingBufferSize=function(M,V,Y){L=M,q=V,se=Y,t.width=Math.floor(M*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,M,V)},this.setEffects=function(M){if(_===Xt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let V=0;V<M.length;V++)if(M[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,V,Y,X){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,V,Y,X),Me.viewport(U.copy(j).multiplyScalar(se).round())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,V,Y,X){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,V,Y,X),Me.scissor(N.copy(te).multiplyScalar(se).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(M){Me.setScissorTest(ve=M)},this.setOpaqueSort=function(M){Ae=M},this.setTransparentSort=function(M){be=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(M=!0,V=!0,Y=!0){let X=0;if(M){let W=!1;if(k!==null){const me=k.texture.format;W=m.has(me)}if(W){const me=k.texture.type,Se=d.has(me),xe=ce.getClearColor(),Te=ce.getClearAlpha(),Re=xe.r,Ue=xe.g,De=xe.b;Se?(v[0]=Re,v[1]=Ue,v[2]=De,v[3]=Te,F.clearBufferuiv(F.COLOR,0,v)):(E[0]=Re,E[1]=Ue,E[2]=De,E[3]=Te,F.clearBufferiv(F.COLOR,0,E))}else X|=F.COLOR_BUFFER_BIT}V&&(X|=F.DEPTH_BUFFER_BIT),Y&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ce.dispose(),Z.dispose(),ae.dispose(),x.dispose(),$.dispose(),ee.dispose(),fe.dispose(),ye.dispose(),oe.dispose(),ne.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",fc),pe.removeEventListener("sessionend",hc),Jn.stop()};function Oe(M){M.preventDefault(),Rs("WebGLRenderer: Context Lost."),T=!0}function ut(){Rs("WebGLRenderer: Context Restored."),T=!1;const M=R.autoReset,V=de.enabled,Y=de.autoUpdate,X=de.needsUpdate,W=de.type;re(),R.autoReset=M,de.enabled=V,de.autoUpdate=Y,de.needsUpdate=X,de.type=W}function nt(M){je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ln(M){const V=M.target;V.removeEventListener("dispose",ln),Sn(V)}function Sn(M){Sf(M),x.remove(M)}function Sf(M){const V=x.get(M).programs;V!==void 0&&(V.forEach(function(Y){ne.releaseProgram(Y)}),M.isShaderMaterial&&ne.releaseShaderCache(M))}this.renderBufferDirect=function(M,V,Y,X,W,me){V===null&&(V=Pe);const Se=W.isMesh&&W.matrixWorld.determinant()<0,xe=Ef(M,V,Y,X,W);Me.setMaterial(X,Se);let Te=Y.index,Re=1;if(X.wireframe===!0){if(Te=Ee.getWireframeAttribute(Y),Te===void 0)return;Re=2}const Ue=Y.drawRange,De=Y.attributes.position;let We=Ue.start*Re,at=(Ue.start+Ue.count)*Re;me!==null&&(We=Math.max(We,me.start*Re),at=Math.min(at,(me.start+me.count)*Re)),Te!==null?(We=Math.max(We,0),at=Math.min(at,Te.count)):De!=null&&(We=Math.max(We,0),at=Math.min(at,De.count));const pt=at-We;if(pt<0||pt===1/0)return;ye.setup(W,X,xe,Y,Te);let mt,ct=O;if(Te!==null&&(mt=K.get(Te),ct=ge,ct.setIndex(mt)),W.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*tt()),ct.setMode(F.LINES)):ct.setMode(F.TRIANGLES);else if(W.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),Me.setLineWidth(Le*tt()),W.isLineSegments?ct.setMode(F.LINES):W.isLineLoop?ct.setMode(F.LINE_LOOP):ct.setMode(F.LINE_STRIP)}else W.isPoints?ct.setMode(F.POINTS):W.isSprite&&ct.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Cr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Le=W._multiDrawStarts,it=W._multiDrawCounts,Je=W._multiDrawCount,zt=Te?K.get(Te).bytesPerElement:1,Si=x.get(X).currentProgram.getUniforms();for(let Vt=0;Vt<Je;Vt++)Si.setValue(F,"_gl_DrawID",Vt),ct.render(Le[Vt]/zt,it[Vt])}else if(W.isInstancedMesh)ct.renderInstances(We,pt,W.count);else if(Y.isInstancedBufferGeometry){const Le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,it=Math.min(Y.instanceCount,Le);ct.renderInstances(We,pt,it)}else ct.render(We,pt)};function uc(M,V,Y){M.transparent===!0&&M.side===Ot&&M.forceSinglePass===!1?(M.side=Bt,M.needsUpdate=!0,Wr(M,V,Y),M.side=In,M.needsUpdate=!0,Wr(M,V,Y),M.side=Ot):Wr(M,V,Y)}this.compile=function(M,V,Y=null){Y===null&&(Y=M),S=ae.get(Y),S.init(V),C.push(S),Y.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),M!==Y&&M.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights();const X=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const me=W.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const xe=me[Se];uc(xe,Y,W),X.add(xe)}else uc(me,Y,W),X.add(me)}),S=C.pop(),X},this.compileAsync=function(M,V,Y=null){const X=this.compile(M,V,Y);return new Promise(W=>{function me(){if(X.forEach(function(Se){x.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){W(M);return}setTimeout(me,10)}qe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Gs=null;function Mf(M){Gs&&Gs(M)}function fc(){Jn.stop()}function hc(){Jn.start()}const Jn=new Tu;Jn.setAnimationLoop(Mf),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(M){Gs=M,pe.setAnimationLoop(M),M===null?Jn.stop():Jn.start()},pe.addEventListener("sessionstart",fc),pe.addEventListener("sessionend",hc),this.render=function(M,V){if(V!==void 0&&V.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const Y=pe.enabled===!0&&pe.isPresenting===!0,X=P!==null&&(k===null||Y)&&P.begin(y,k);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(V),V=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,V,k),S=ae.get(M,C.length),S.init(V),C.push(S),et.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ie.setFromProjectionMatrix(et,pn,V.reversedDepth),Ne=this.localClippingEnabled,he=ie.init(this.clippingPlanes,Ne),b=Z.get(M,w.length),b.init(),w.push(b),pe.enabled===!0&&pe.isPresenting===!0){const Se=y.xr.getDepthSensingMesh();Se!==null&&Hs(Se,V,-1/0,y.sortObjects)}Hs(M,V,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(Ae,be),Fe=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Fe&&ce.addToRenderList(b,M),this.info.render.frame++,he===!0&&ie.beginShadows();const W=S.state.shadowsArray;if(de.render(W,M,V),he===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&P.hasRenderPass())===!1){const Se=b.opaque,xe=b.transmissive;if(S.setupLights(),V.isArrayCamera){const Te=V.cameras;if(xe.length>0)for(let Re=0,Ue=Te.length;Re<Ue;Re++){const De=Te[Re];pc(Se,xe,M,De)}Fe&&ce.render(M);for(let Re=0,Ue=Te.length;Re<Ue;Re++){const De=Te[Re];dc(b,M,De,De.viewport)}}else xe.length>0&&pc(Se,xe,M,V),Fe&&ce.render(M),dc(b,M,V)}k!==null&&z===0&&(B.updateMultisampleRenderTarget(k),B.updateRenderTargetMipmap(k)),X&&P.end(y),M.isScene===!0&&M.onAfterRender(y,M,V),ye.resetDefaultState(),A=-1,D=null,C.pop(),C.length>0?(S=C[C.length-1],he===!0&&ie.setGlobalState(y.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?b=w[w.length-1]:b=null};function Hs(M,V,Y,X){if(M.visible===!1)return;if(M.layers.test(V.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(V);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ie.intersectsSprite(M)){X&&Xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);const Se=fe.update(M),xe=M.material;xe.visible&&b.push(M,Se,xe,Y,Xe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ie.intersectsObject(M))){const Se=fe.update(M),xe=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xe.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Xe.copy(Se.boundingSphere.center)),Xe.applyMatrix4(M.matrixWorld).applyMatrix4(et)),Array.isArray(xe)){const Te=Se.groups;for(let Re=0,Ue=Te.length;Re<Ue;Re++){const De=Te[Re],We=xe[De.materialIndex];We&&We.visible&&b.push(M,Se,We,Y,Xe.z,De)}}else xe.visible&&b.push(M,Se,xe,Y,Xe.z,null)}}const me=M.children;for(let Se=0,xe=me.length;Se<xe;Se++)Hs(me[Se],V,Y,X)}function dc(M,V,Y,X){const{opaque:W,transmissive:me,transparent:Se}=M;S.setupLightsView(Y),he===!0&&ie.setGlobalState(y.clippingPlanes,Y),X&&Me.viewport(U.copy(X)),W.length>0&&Hr(W,V,Y),me.length>0&&Hr(me,V,Y),Se.length>0&&Hr(Se,V,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function pc(M,V,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){const We=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new gn(1,1,{generateMipmaps:!0,type:We?Un:Xt,minFilter:ui,samples:Ye.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const me=S.state.transmissionRenderTarget[X.id],Se=X.viewport||U;me.setSize(Se.z*y.transmissionResolutionScale,Se.w*y.transmissionResolutionScale);const xe=y.getRenderTarget(),Te=y.getActiveCubeFace(),Re=y.getActiveMipmapLevel();y.setRenderTarget(me),y.getClearColor(J),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Fe&&ce.render(Y);const Ue=y.toneMapping;y.toneMapping=mn;const De=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),he===!0&&ie.setGlobalState(y.clippingPlanes,X),Hr(M,Y,X),B.updateMultisampleRenderTarget(me),B.updateRenderTargetMipmap(me),qe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let at=0,pt=V.length;at<pt;at++){const mt=V[at],{object:ct,geometry:Le,material:it,group:Je}=mt;if(it.side===Ot&&ct.layers.test(X.layers)){const zt=it.side;it.side=Bt,it.needsUpdate=!0,mc(ct,Y,X,Le,it,Je),it.side=zt,it.needsUpdate=!0,We=!0}}We===!0&&(B.updateMultisampleRenderTarget(me),B.updateRenderTargetMipmap(me))}y.setRenderTarget(xe,Te,Re),y.setClearColor(J,Q),De!==void 0&&(X.viewport=De),y.toneMapping=Ue}function Hr(M,V,Y){const X=V.isScene===!0?V.overrideMaterial:null;for(let W=0,me=M.length;W<me;W++){const Se=M[W],{object:xe,geometry:Te,group:Re}=Se;let Ue=Se.material;Ue.allowOverride===!0&&X!==null&&(Ue=X),xe.layers.test(Y.layers)&&mc(xe,V,Y,Te,Ue,Re)}}function mc(M,V,Y,X,W,me){M.onBeforeRender(y,V,Y,X,W,me),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(y,V,Y,X,M,me),W.transparent===!0&&W.side===Ot&&W.forceSinglePass===!1?(W.side=Bt,W.needsUpdate=!0,y.renderBufferDirect(Y,V,X,W,M,me),W.side=In,W.needsUpdate=!0,y.renderBufferDirect(Y,V,X,W,M,me),W.side=Ot):y.renderBufferDirect(Y,V,X,W,M,me),M.onAfterRender(y,V,Y,X,W,me)}function Wr(M,V,Y){V.isScene!==!0&&(V=Pe);const X=x.get(M),W=S.state.lights,me=S.state.shadowsArray,Se=W.state.version,xe=ne.getParameters(M,W.state,me,V,Y),Te=ne.getProgramCacheKey(xe);let Re=X.programs;X.environment=M.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(M.isMeshStandardMaterial?ee:$).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?V.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",ln),Re=new Map,X.programs=Re);let Ue=Re.get(Te);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===Se)return _c(M,xe),Ue}else xe.uniforms=ne.getUniforms(M),M.onBeforeCompile(xe,y),Ue=ne.acquireProgram(xe,Te),Re.set(Te,Ue),X.uniforms=xe.uniforms;const De=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(De.clippingPlanes=ie.uniform),_c(M,xe),X.needsLights=Tf(M),X.lightsStateVersion=Se,X.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.directionalShadowMap.value=W.state.directionalShadowMap,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotShadowMap.value=W.state.spotShadowMap,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMap.value=W.state.pointShadowMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function gc(M){if(M.uniformsList===null){const V=M.currentProgram.getUniforms();M.uniformsList=Ms.seqWithValue(V.seq,M.uniforms)}return M.uniformsList}function _c(M,V){const Y=x.get(M);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Ef(M,V,Y,X,W){V.isScene!==!0&&(V=Pe),B.resetTextureUnits();const me=V.fog,Se=X.isMeshStandardMaterial?V.environment:null,xe=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$i,Te=(X.isMeshStandardMaterial?ee:$).get(X.envMap||Se),Re=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ue=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!Y.morphAttributes.position,We=!!Y.morphAttributes.normal,at=!!Y.morphAttributes.color;let pt=mn;X.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(pt=y.toneMapping);const mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ct=mt!==void 0?mt.length:0,Le=x.get(X),it=S.state.lights;if(he===!0&&(Ne===!0||M!==D)){const Pt=M===D&&X.id===A;ie.setState(X,M,Pt)}let Je=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==it.state.version||Le.outputColorSpace!==xe||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==Te||X.fog===!0&&Le.fog!==me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ie.numPlanes||Le.numIntersection!==ie.numIntersection)||Le.vertexAlphas!==Re||Le.vertexTangents!==Ue||Le.morphTargets!==De||Le.morphNormals!==We||Le.morphColors!==at||Le.toneMapping!==pt||Le.morphTargetsCount!==ct)&&(Je=!0):(Je=!0,Le.__version=X.version);let zt=Le.currentProgram;Je===!0&&(zt=Wr(X,V,W));let Si=!1,Vt=!1,rr=!1;const ft=zt.getUniforms(),Nt=Le.uniforms;if(Me.useProgram(zt.program)&&(Si=!0,Vt=!0,rr=!0),X.id!==A&&(A=X.id,Vt=!0),Si||D!==M){Me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(F,"projectionMatrix",M.projectionMatrix),ft.setValue(F,"viewMatrix",M.matrixWorldInverse);const Ft=ft.map.cameraPosition;Ft!==void 0&&Ft.setValue(F,He.setFromMatrixPosition(M.matrixWorld)),Ye.logarithmicDepthBuffer&&ft.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ft.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),D!==M&&(D=M,Vt=!0,rr=!0)}if(Le.needsLights&&(it.state.directionalShadowMap.length>0&&ft.setValue(F,"directionalShadowMap",it.state.directionalShadowMap,B),it.state.spotShadowMap.length>0&&ft.setValue(F,"spotShadowMap",it.state.spotShadowMap,B),it.state.pointShadowMap.length>0&&ft.setValue(F,"pointShadowMap",it.state.pointShadowMap,B)),W.isSkinnedMesh){ft.setOptional(F,W,"bindMatrix"),ft.setOptional(F,W,"bindMatrixInverse");const Pt=W.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(F,"boneTexture",Pt.boneTexture,B))}W.isBatchedMesh&&(ft.setOptional(F,W,"batchingTexture"),ft.setValue(F,"batchingTexture",W._matricesTexture,B),ft.setOptional(F,W,"batchingIdTexture"),ft.setValue(F,"batchingIdTexture",W._indirectTexture,B),ft.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&ft.setValue(F,"batchingColorTexture",W._colorsTexture,B));const Yt=Y.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&ke.update(W,Y,zt),(Vt||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,ft.setValue(F,"receiveShadow",W.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Nt.envMap.value=Te,Nt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&V.environment!==null&&(Nt.envMapIntensity.value=V.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=K0()),Vt&&(ft.setValue(F,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&bf(Nt,rr),me&&X.fog===!0&&le.refreshFogUniforms(Nt,me),le.refreshMaterialUniforms(Nt,X,se,q,S.state.transmissionRenderTarget[M.id]),Ms.upload(F,gc(Le),Nt,B)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ms.upload(F,gc(Le),Nt,B),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ft.setValue(F,"center",W.center),ft.setValue(F,"modelViewMatrix",W.modelViewMatrix),ft.setValue(F,"normalMatrix",W.normalMatrix),ft.setValue(F,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Pt=X.uniformsGroups;for(let Ft=0,Ws=Pt.length;Ft<Ws;Ft++){const Qn=Pt[Ft];oe.update(Qn,zt),oe.bind(Qn,zt)}}return zt}function bf(M,V){M.ambientLightColor.needsUpdate=V,M.lightProbe.needsUpdate=V,M.directionalLights.needsUpdate=V,M.directionalLightShadows.needsUpdate=V,M.pointLights.needsUpdate=V,M.pointLightShadows.needsUpdate=V,M.spotLights.needsUpdate=V,M.spotLightShadows.needsUpdate=V,M.rectAreaLights.needsUpdate=V,M.hemisphereLights.needsUpdate=V}function Tf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,V,Y){const X=x.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),x.get(M.texture).__webglTexture=V,x.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,V){const Y=x.get(M);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};const wf=F.createFramebuffer();this.setRenderTarget=function(M,V=0,Y=0){k=M,I=V,z=Y;let X=null,W=!1,me=!1;if(M){const xe=x.get(M);if(xe.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(F.FRAMEBUFFER,xe.__webglFramebuffer),U.copy(M.viewport),N.copy(M.scissor),G=M.scissorTest,Me.viewport(U),Me.scissor(N),Me.setScissorTest(G),A=-1;return}else if(xe.__webglFramebuffer===void 0)B.setupRenderTarget(M);else if(xe.__hasExternalTextures)B.rebindTextures(M,x.get(M.texture).__webglTexture,x.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ue=M.depthTexture;if(xe.__boundDepthTexture!==Ue){if(Ue!==null&&x.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(M)}}const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(me=!0);const Re=x.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[V])?X=Re[V][Y]:X=Re[V],W=!0):M.samples>0&&B.useMultisampledRTT(M)===!1?X=x.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?X=Re[Y]:X=Re,U.copy(M.viewport),N.copy(M.scissor),G=M.scissorTest}else U.copy(j).multiplyScalar(se).floor(),N.copy(te).multiplyScalar(se).floor(),G=ve;if(Y!==0&&(X=wf),Me.bindFramebuffer(F.FRAMEBUFFER,X)&&Me.drawBuffers(M,X),Me.viewport(U),Me.scissor(N),Me.setScissorTest(G),W){const xe=x.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe.__webglTexture,Y)}else if(me){const xe=V;for(let Te=0;Te<M.textures.length;Te++){const Re=x.get(M.textures[Te]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Te,Re.__webglTexture,Y,xe)}}else if(M!==null&&Y!==0){const xe=x.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xe.__webglTexture,Y)}A=-1},this.readRenderTargetPixels=function(M,V,Y,X,W,me,Se,xe=0){if(!(M&&M.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){Me.bindFramebuffer(F.FRAMEBUFFER,Te);try{const Re=M.textures[xe],Ue=Re.format,De=Re.type;if(!Ye.textureFormatReadable(Ue)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(De)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=M.width-X&&Y>=0&&Y<=M.height-W&&(M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe),F.readPixels(V,Y,X,W,ue.convert(Ue),ue.convert(De),me))}finally{const Re=k!==null?x.get(k).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,V,Y,X,W,me,Se,xe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(V>=0&&V<=M.width-X&&Y>=0&&Y<=M.height-W){Me.bindFramebuffer(F.FRAMEBUFFER,Te);const Re=M.textures[xe],Ue=Re.format,De=Re.type;if(!Ye.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,We),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+xe),F.readPixels(V,Y,X,W,ue.convert(Ue),ue.convert(De),0);const at=k!==null?x.get(k).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,at);const pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await dh(F,pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,We),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.deleteBuffer(We),F.deleteSync(pt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,V=null,Y=0){const X=Math.pow(2,-Y),W=Math.floor(M.image.width*X),me=Math.floor(M.image.height*X),Se=V!==null?V.x:0,xe=V!==null?V.y:0;B.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Se,xe,W,me),Me.unbindTexture()};const Af=F.createFramebuffer(),Rf=F.createFramebuffer();this.copyTextureToTexture=function(M,V,Y=null,X=null,W=0,me=null){me===null&&(W!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=W,W=0):me=0);let Se,xe,Te,Re,Ue,De,We,at,pt;const mt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(Y!==null)Se=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,Re=Y.min.x,Ue=Y.min.y,De=Y.isBox3?Y.min.z:0;else{const Yt=Math.pow(2,-W);Se=Math.floor(mt.width*Yt),xe=Math.floor(mt.height*Yt),M.isDataArrayTexture?Te=mt.depth:M.isData3DTexture?Te=Math.floor(mt.depth*Yt):Te=1,Re=0,Ue=0,De=0}X!==null?(We=X.x,at=X.y,pt=X.z):(We=0,at=0,pt=0);const ct=ue.convert(V.format),Le=ue.convert(V.type);let it;V.isData3DTexture?(B.setTexture3D(V,0),it=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(B.setTexture2DArray(V,0),it=F.TEXTURE_2D_ARRAY):(B.setTexture2D(V,0),it=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const Je=F.getParameter(F.UNPACK_ROW_LENGTH),zt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Si=F.getParameter(F.UNPACK_SKIP_PIXELS),Vt=F.getParameter(F.UNPACK_SKIP_ROWS),rr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Re),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,De);const ft=M.isDataArrayTexture||M.isData3DTexture,Nt=V.isDataArrayTexture||V.isData3DTexture;if(M.isDepthTexture){const Yt=x.get(M),Pt=x.get(V),Ft=x.get(Yt.__renderTarget),Ws=x.get(Pt.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Qn=0;Qn<Te;Qn++)ft&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,x.get(M).__webglTexture,W,De+Qn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,x.get(V).__webglTexture,me,pt+Qn)),F.blitFramebuffer(Re,Ue,Se,xe,We,at,Se,xe,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||x.has(M)){const Yt=x.get(M),Pt=x.get(V);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Af),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Rf);for(let Ft=0;Ft<Te;Ft++)ft?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yt.__webglTexture,W,De+Ft):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yt.__webglTexture,W),Nt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.__webglTexture,me,pt+Ft):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pt.__webglTexture,me),W!==0?F.blitFramebuffer(Re,Ue,Se,xe,We,at,Se,xe,F.COLOR_BUFFER_BIT,F.NEAREST):Nt?F.copyTexSubImage3D(it,me,We,at,pt+Ft,Re,Ue,Se,xe):F.copyTexSubImage2D(it,me,We,at,Re,Ue,Se,xe);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Nt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(it,me,We,at,pt,Se,xe,Te,ct,Le,mt.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(it,me,We,at,pt,Se,xe,Te,ct,mt.data):F.texSubImage3D(it,me,We,at,pt,Se,xe,Te,ct,Le,mt):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,We,at,Se,xe,ct,Le,mt.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,We,at,mt.width,mt.height,ct,mt.data):F.texSubImage2D(F.TEXTURE_2D,me,We,at,Se,xe,ct,Le,mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Je),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,zt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Si),F.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,rr),me===0&&V.generateMipmaps&&F.generateMipmap(it),Me.unbindTexture()},this.initRenderTarget=function(M){x.get(M).__webglFramebuffer===void 0&&B.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?B.setTextureCube(M,0):M.isData3DTexture?B.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?B.setTexture2DArray(M,0):B.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){I=0,z=0,k=null,Me.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}let zi=null;function zr(){if(!zi){const n=window.AudioContext||window.webkitAudioContext;n&&(zi=new n)}return zi&&zi.state==="suspended"&&zi.resume().catch(()=>{}),zi}function Pu(){try{const n=zr();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="sine",e.frequency.setValueAtTime(95+Math.random()*20,n.currentTime),e.frequency.exponentialRampToValueAtTime(35,n.currentTime+.08),t.gain.setValueAtTime(.06,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.08),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.08)}catch{}}function Du(){try{const n=zr();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="triangle",e.frequency.setValueAtTime(1850,n.currentTime),e.frequency.exponentialRampToValueAtTime(2450,n.currentTime+.12),t.gain.setValueAtTime(.18,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.28),e.connect(t),t.connect(n.destination),e.start(n.currentTime),e.stop(n.currentTime+.28),[523.25,659.25,783.99,1046.5].forEach((a,o)=>{const c=n.createOscillator(),l=n.createGain();c.type="sine",c.frequency.setValueAtTime(a,n.currentTime);const f=n.currentTime+o*.05;l.gain.setValueAtTime(0,f),l.gain.linearRampToValueAtTime(.16,f+.02),l.gain.exponentialRampToValueAtTime(1e-4,f+.5),c.connect(l),l.connect(n.destination),c.start(f),c.stop(f+.55)});const r=n.createOscillator(),s=n.createGain();r.type="sine",r.frequency.setValueAtTime(110,n.currentTime+.12),r.frequency.exponentialRampToValueAtTime(42,n.currentTime+.45),s.gain.setValueAtTime(.26,n.currentTime+.12),s.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.45),r.connect(s),s.connect(n.destination),r.start(n.currentTime+.12),r.stop(n.currentTime+.45)}catch{}}function Z0(){try{const n=zr();if(!n)return;[523.25,659.25,783.99,1046.5].forEach((t,i)=>{const r=n.createOscillator(),s=n.createGain();r.type="triangle",r.frequency.setValueAtTime(t,n.currentTime);const a=n.currentTime+i*.055;s.gain.setValueAtTime(0,a),s.gain.linearRampToValueAtTime(.18,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.45),r.connect(s),s.connect(n.destination),r.start(a),r.stop(a+.5)})}catch{}}function Lu(){try{const n=zr();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="triangle",e.frequency.setValueAtTime(440,n.currentTime),e.frequency.exponentialRampToValueAtTime(880,n.currentTime+.15),t.gain.setValueAtTime(.08,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.18),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.18)}catch{}}function Iu(){try{const n=zr();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="sine",e.frequency.setValueAtTime(600,n.currentTime),e.frequency.exponentialRampToValueAtTime(150,n.currentTime+.25),t.gain.setValueAtTime(.12,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.25),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.25)}catch{}}const J0=Object.freeze(Object.defineProperty({__proto__:null,playCabinetExit:Iu,playCabinetHighlight:Lu,playCoinDrop:Du,playDopamineChime:Z0,playFootstep:Pu},Symbol.toStringTag,{value:"Module"}));class Q0{constructor(e,t=null){this.scene=e,this.identity=t||{tag:"MARC1",color:62975,colorHex:"#00f5ff"},this.tag=(this.identity.tag||"MARC1").slice(0,5).toUpperCase(),this.colorNum=this.identity.color||62975,this.colorHex=this.identity.colorHex||"#00f5ff",this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetRotation=Math.PI,this.speed=7.5,this.radius=.45,this.isMoving=!1,this.walkCycle=0,this.footstepTimer=0,this.keys={forward:!1,backward:!1,left:!1,right:!1},this.joystickVector={x:0,y:0},this.navTarget=null,this.createAvatarMesh(),this.createNameTagSprite(),this.bindKeyboard()}setIdentity(e){e&&(this.identity=e,this.tag=(e.tag||"MARC1").slice(0,5).toUpperCase(),this.colorNum=e.color||62975,this.colorHex=e.colorHex||"#00f5ff",this.torso&&this.torso.material.color.setHex(this.colorNum),this.leftFoot&&this.leftFoot.material.color.setHex(this.colorNum),this.rightFoot&&this.rightFoot.material.color.setHex(this.colorNum),this.nameSprite&&(this.group.remove(this.nameSprite),this.createNameTagSprite()))}createNameTagSprite(){const e=document.createElement("canvas");e.width=320,e.height=110;const t=e.getContext("2d");t.fillStyle="rgba(8, 9, 16, 0.88)",t.strokeStyle=this.colorHex,t.lineWidth=4,t.beginPath(),t.roundRect(10,10,e.width-20,e.height-20,24),t.fill(),t.stroke(),t.font='bold 36px "Press Start 2P", monospace, sans-serif',t.fillStyle="#ffd32a",t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ffd32a",t.shadowBlur=8,t.fillText(this.tag,e.width/2,42),t.shadowBlur=0,t.font='bold 16px "Outfit", sans-serif',t.fillStyle=this.colorHex,t.fillText("VOCÊ",e.width/2,78);const i=new gi(e),r=new ec({map:i,transparent:!0,depthTest:!1});this.nameSprite=new Mu(r),this.nameSprite.position.set(0,2.35,0),this.nameSprite.scale.set(1.6,.55,1),this.group.add(this.nameSprite)}setNavigationTarget(e,t,i=null){this.navTarget={x:e,z:t,onArrival:i}}clearNavigationTarget(){this.navTarget=null}createAvatarMesh(){this.group=new Xn,this.group.position.set(this.x,this.y,this.z);const e=new _n(.38,.32,.8,16),t=new bt({color:this.colorNum,roughness:.3,metalness:.2});this.torso=new Ce(e,t),this.torso.position.y=.85,this.group.add(this.torso);const i=new dt(.04,.78,.05),r=new vt({color:16711807}),s=new Ce(i,r);s.position.set(0,.85,.35),this.group.add(s);const a=new _i(.42,24,24),o=new bt({color:16777215,roughness:.2,metalness:.1});this.head=new Ce(a,o),this.head.position.y=1.55,this.group.add(this.head),this.visorCanvas=document.createElement("canvas"),this.visorCanvas.width=256,this.visorCanvas.height=128,this.visorCtx=this.visorCanvas.getContext("2d"),this.renderVisorEyes(!1),this.visorTex=new gi(this.visorCanvas),this.visorTex.needsUpdate=!0;const c=new vt({map:this.visorTex,transparent:!0}),l=new _n(.43,.43,.3,16,1,!1,Math.PI*.15,Math.PI*.7);this.visorMesh=new Ce(l,c),this.visorMesh.position.set(0,1.55,.02),this.visorMesh.rotation.y=-Math.PI/2,this.group.add(this.visorMesh);const f=new dt(.42,.5,.22),u=new bt({color:1712440,roughness:.4,metalness:.6}),h=new Ce(f,u);h.position.set(0,.9,-.36),this.group.add(h);const p=new _n(.06,.04,.12,12),g=new vt({color:62975}),_=new Ce(p,g);_.position.set(-.12,.6,-.36);const m=new Ce(p,g);m.position.set(.12,.6,-.36),this.group.add(_),this.group.add(m);const d=new _i(.14,12,12),v=new bt({color:this.colorNum,roughness:.3});this.leftFoot=new Ce(d,v),this.leftFoot.position.set(-.2,.14,0),this.group.add(this.leftFoot),this.rightFoot=new Ce(d,v),this.rightFoot.position.set(.2,.14,0),this.group.add(this.rightFoot);const E=new Us(.55,24),b=new vt({color:0,transparent:!0,opacity:.45}),S=new Ce(E,b);S.rotation.x=-Math.PI/2,S.position.y=.02,this.group.add(S),this.scene.add(this.group)}renderVisorEyes(e){const t=this.visorCtx;t.clearRect(0,0,256,128),t.fillStyle="#060814",t.fillRect(0,0,256,128),t.fillStyle=this.colorHex,t.shadowColor=this.colorHex,t.shadowBlur=12,e?(t.lineWidth=6,t.strokeStyle=this.colorHex,t.beginPath(),t.arc(85,64,22,.2,Math.PI-.2,!1),t.stroke(),t.beginPath(),t.arc(171,64,22,.2,Math.PI-.2,!1),t.stroke()):(t.beginPath(),t.ellipse(85,60,20,26,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(171,60,20,26,0,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.shadowBlur=0,t.beginPath(),t.arc(90,52,7,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(176,52,7,0,Math.PI*2),t.fill())}bindKeyboard(){window.addEventListener("keydown",e=>{["ArrowUp","KeyW"].includes(e.code)&&(this.keys.forward=!0),["ArrowDown","KeyS"].includes(e.code)&&(this.keys.backward=!0),["ArrowLeft","KeyA"].includes(e.code)&&(this.keys.left=!0),["ArrowRight","KeyD"].includes(e.code)&&(this.keys.right=!0)}),window.addEventListener("keyup",e=>{["ArrowUp","KeyW"].includes(e.code)&&(this.keys.forward=!1),["ArrowDown","KeyS"].includes(e.code)&&(this.keys.backward=!1),["ArrowLeft","KeyA"].includes(e.code)&&(this.keys.left=!1),["ArrowRight","KeyD"].includes(e.code)&&(this.keys.right=!1)})}setJoystickVector(e,t){this.joystickVector.x=e,this.joystickVector.y=t}update(e,t,i,r=null){let s=0,a=0;if(this.keys.forward&&(a-=1),this.keys.backward&&(a+=1),this.keys.left&&(s-=1),this.keys.right&&(s+=1),(Math.abs(this.joystickVector.x)>.1||Math.abs(this.joystickVector.y)>.1)&&(s+=this.joystickVector.x,a+=this.joystickVector.y),Math.hypot(s,a)>.01)this.navTarget=null;else if(this.navTarget){const h=this.navTarget.x-this.x,p=this.navTarget.z-this.z,g=Math.hypot(h,p);if(g<.35){const _=this.navTarget.onArrival;this.navTarget=null,_&&_()}else s=h/g,a=p/g}const c=Math.hypot(s,a);if(c>.01){s/=c,a/=c,this.isMoving=!0,this.targetRotation=Math.atan2(s,a);const h=this.speed*e,p=this.x+s*h,g=this.z+a*h;let _=!0;if(t&&(p-this.radius<t.minX||p+this.radius>t.maxX)&&(_=!1),i&&_){for(const d of i)if(d.collider&&d.collider.intersectsSphere(new H(p,0,this.z),this.radius)){_=!1;break}}_&&(this.x=p);let m=!0;if(t&&(g-this.radius<t.minZ||g+this.radius>t.maxZ)&&(m=!1),i&&m){for(const d of i)if(d.collider&&d.collider.intersectsSphere(new H(this.x,0,g),this.radius)){m=!1;break}}m&&(this.z=g),this.walkCycle+=e*14,this.footstepTimer+=e,this.footstepTimer>.28&&(Pu(),this.footstepTimer=0)}else this.isMoving=!1,this.walkCycle=0;let l=this.targetRotation-this.rotation;for(;l<-Math.PI;)l+=Math.PI*2;for(;l>Math.PI;)l-=Math.PI*2;this.rotation+=l*.25,this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.rotation,this.isMoving?(this.leftFoot.position.z=Math.sin(this.walkCycle)*.22,this.rightFoot.position.z=-Math.sin(this.walkCycle)*.22,this.torso.rotation.z=0):(this.leftFoot.position.z=0,this.rightFoot.position.z=0,this.torso.rotation.z=0);const f=performance.now()*.001,u=Math.sin(f*1.5)>.94;this.lastBlinkState!==u&&(this.lastBlinkState=u,this.renderVisorEyes(u),this.visorTex.needsUpdate=!0),this.nameSprite&&r&&this.nameSprite.quaternion.copy(r.quaternion)}}const vl=[{primary:62975,secondary:7940298,accent:16711807},{primary:16711807,secondary:62975,accent:16765738},{primary:393121,secondary:62975,accent:16711807},{primary:16765738,secondary:16711807,accent:62975},{primary:7940298,secondary:62975,accent:393121}];function e_(n,e){const t=document.createElement("canvas");t.width=512,t.height=128;const i=t.getContext("2d"),r=i.createLinearGradient(0,0,512,128);r.addColorStop(0,"#0a0d24"),r.addColorStop(.5,"#191f48"),r.addColorStop(1,"#0a0d24"),i.fillStyle=r,i.fillRect(0,0,512,128),i.strokeStyle="#"+e.secondary.toString(16).padStart(6,"0"),i.lineWidth=4,i.strokeRect(6,6,500,116),i.strokeStyle="#"+e.primary.toString(16).padStart(6,"0"),i.lineWidth=2,i.strokeRect(12,12,488,104),i.fillStyle="#ffffff",i.font='bold 36px "Segoe UI", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),i.shadowBlur=15;const s=`${n.icon||"🎮"} ${(n.name||"ARCADE").toUpperCase()}`;i.fillText(s,256,54),i.font="bold 16px monospace",i.fillStyle="#"+e.accent.toString(16).padStart(6,"0"),i.shadowBlur=8,i.fillText(`• ${n.category?n.category.toUpperCase():"CLASSIC ARCADE"} •`,256,96);const a=new gi(t);return a.minFilter=yt,a.needsUpdate=!0,a}function t_(n,e){const t=document.createElement("canvas");t.width=512,t.height=512;const i=t.getContext("2d"),r=a=>{i.fillStyle="#060a1e",i.fillRect(0,0,512,512),i.strokeStyle="rgba(0, 245, 255, 0.2)",i.lineWidth=2;const o=a*30%32;for(let l=o;l<512;l+=32)i.beginPath(),i.moveTo(0,l),i.lineTo(512,l),i.stroke();for(let l=0;l<512;l+=32)i.beginPath(),i.moveTo(l,0),i.lineTo(l,512),i.stroke();i.fillStyle="rgba(255, 0, 127, 0.4)",i.fillRect(100,35,312,36),i.strokeStyle="#ff007f",i.lineWidth=2,i.strokeRect(100,35,312,36),i.fillStyle="#ffffff",i.font='bold 16px "Press Start 2P", monospace, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("★ ARCADE CLASSIC ★",256,53);const c=1+Math.sin(a*3.5)*.08;i.save(),i.translate(256,160),i.scale(c,c),i.font="76px sans-serif",i.textAlign="center",i.textBaseline="middle",i.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),i.shadowBlur=24,i.fillText(n.icon||"🎮",0,0),i.restore(),i.font='bold 28px "Outfit", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),i.shadowBlur=18,i.fillStyle="#ffffff",i.fillText((n.name||"ARCADE GAME").toUpperCase(),256,260),i.font="bold 16px monospace",i.fillStyle="#ffd32a",i.shadowColor="#ffd32a",i.shadowBlur=10,i.fillText(`• ${(n.category||"ACTION").toUpperCase()} • 60 FPS •`,256,310),Math.floor(a*2.5)%2===0&&(i.fillStyle="#"+e.primary.toString(16).padStart(6,"0"),i.font="bold 22px monospace",i.shadowColor="#"+e.accent.toString(16).padStart(6,"0"),i.shadowBlur=16,i.fillText("▶ PRESS [SPACE] TO PLAY ◀",256,410),i.font="14px monospace",i.fillStyle="#94a3b8",i.shadowBlur=0,i.fillText("INSERT 1 COIN (25¢)",256,442)),i.fillStyle="rgba(0, 0, 0, 0.28)";for(let l=0;l<512;l+=4)i.fillRect(0,l,512,2);i.strokeStyle="#"+e.primary.toString(16).padStart(6,"0"),i.lineWidth=8,i.strokeRect(4,4,504,504),s.needsUpdate=!0},s=new gi(t);return s.minFilter=yt,r(0),{texture:s,update:r}}function n_(n,e,t=0){const i=new Xn;i.position.set(e.x,0,e.z),i.rotation.y=t;let r=0;for(let $=0;$<(n.id||"").length;$++)r=(r<<5)-r+n.id.charCodeAt($);let s=vl[Math.abs(r)%vl.length];n.id==="street-fighter-2"&&(s={primary:16726832,secondary:26367,accent:16765738}),n.id==="super-mario"&&(s={primary:15017249,secondary:4436039,accent:16502784}),n.id==="super-bomberman"&&(s={primary:28908,secondary:16777215,accent:16729943}),n.id==="gta-2"&&(s={primary:16765738,secondary:26367,accent:16726072});const a=new bt({color:1975357,roughness:.4,metalness:.3}),o=new bt({color:s.primary,roughness:.3,metalness:.4}),c=new vt({color:s.primary}),l=new dt(1.6,1.4,1.3),f=new Ce(l,a);f.position.set(0,.7,0),i.add(f);const u=new Dn(.7,.8),h=new bt({color:790304,roughness:.5,metalness:.7}),p=new Ce(u,h);p.position.set(0,.75,.66),i.add(p);const g=new dt(.14,.1,.04),_=new vt({color:16755200}),m=new Ce(g,_);m.position.set(-.16,.9,.68);const d=new Ce(g,_);d.position.set(.16,.9,.68),i.add(m),i.add(d);const v=new dt(1.65,.22,.7),E=new bt({color:1316907,roughness:.3,metalness:.4}),b=new Ce(v,E);b.position.set(0,1.4,.48),b.rotation.x=.22,i.add(b);const S=new _n(.02,.02,.14),w=new bt({color:13421772,metalness:.9}),C=new _i(.05,12,12),P=new vt({color:s.accent}),y=new Ce(S,w);y.position.set(-.35,1.55,.48);const T=new Ce(C,P);T.position.set(-.35,1.63,.48),i.add(y),i.add(T);const I=new _n(.035,.035,.03,10),z=[62975,16711807,16765738,393121];for(let $=0;$<2;$++)for(let ee=0;ee<3;ee++){const K=new vt({color:z[($*3+ee)%z.length]}),Ee=new Ce(I,K);Ee.position.set(.12+ee*.1,1.48-$*.06,.54-$*.08),i.add(Ee)}const k=new dt(1.6,1.3,1.1),A=new Ce(k,a);A.position.set(0,2.1,-.05),i.add(A);const D=new dt(1.4,1,.08),U=new bt({color:527128,roughness:.8}),N=new Ce(D,U);N.position.set(0,2.15,.46),N.rotation.x=-.25,i.add(N);const{texture:G,update:J}=t_(n,s),Q=new Dn(1.22,.88),L=new vt({map:G}),q=new Ce(Q,L);q.position.set(0,2.15,.51),q.rotation.x=-.25,i.add(q);const se=new dt(1.65,.6,.85),Ae=new Ce(se,a);Ae.position.set(0,3,.2),i.add(Ae);const be=e_(n,s),j=new vt({map:be}),te=new Dn(1.58,.52),ve=new Ce(te,j);ve.position.set(0,3.02,.64),ve.rotation.x=-.08,i.add(ve);const Ie=new dt(1.68,.05,.05),he=new Ce(Ie,c);he.position.set(0,3.3,.66);const Ne=new Ce(Ie,c);Ne.position.set(0,2.74,.62),i.add(he),i.add(Ne);const et=new dt(.06,2.7,1.25),He=new Ce(et,o);He.position.set(-.82,1.7,.05);const Xe=new Ce(et,o);Xe.position.set(.82,1.7,.05),i.add(He),i.add(Xe);const Pe=new ji(1.2,1.45,32),Fe=new vt({color:s.primary,side:Ot,transparent:!0,opacity:.35}),tt=new Ce(Pe,Fe);tt.rotation.x=-Math.PI/2,tt.position.set(0,.03,.8),i.add(tt);const F=Math.sin(t)*2.2,lt=Math.cos(t)*2.2,qe=e.x+F,Ye=e.z+lt,Me=Math.abs(Math.sin(t))>.5,R=Me?.65:.78,x=Me?.78:.65,B={minX:e.x-R,maxX:e.x+R,minZ:e.z-x,maxZ:e.z+x};return{game:n,group:i,theme:s,screenMesh:q,marqueeFace:ve,floorGlow:tt,standSpot:{x:qe,z:Ye},position:{x:e.x,z:e.z},rotationY:t,collisionBox:B,isHovered:!1,_lastFrame:0,update($){if(this.isHovered)J($),tt.material.opacity=.7+Math.sin($*6)*.25;else{const ee=Math.floor($*2);this._lastFrame!==ee&&(this._lastFrame=ee,J($)),tt.material.opacity=.3}}}}function i_(){const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#10142e",e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.28)",e.lineWidth=2;for(let i=0;i<512;i+=64)e.beginPath(),e.moveTo(i,0),e.lineTo(i,512),e.stroke();for(let i=0;i<512;i+=64)e.beginPath(),e.moveTo(0,i),e.lineTo(512,i),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.45)";for(let i=32;i<512;i+=64)for(let r=32;r<512;r+=64)e.beginPath(),e.arc(i,r,5,0,Math.PI*2),e.fill();const t=new gi(n);return t.wrapS=wr,t.wrapT=wr,t.repeat.set(12,16),t.needsUpdate=!0,t}function pr(n,e,t,i="#00f5ff",r="#ff007f"){const s=document.createElement("canvas");s.width=1024,s.height=256;const a=s.getContext("2d");a.fillStyle="transparent",a.fillRect(0,0,1024,256),a.font='bold 72px "Segoe UI", sans-serif',a.textAlign="center",a.textBaseline="middle",a.shadowColor=r,a.shadowBlur=30,a.fillStyle=i,a.fillText(n,512,128);const o=new gi(s);o.needsUpdate=!0;const c=new vt({map:o,transparent:!0,side:Ot});return new Ce(new Dn(e,t),c)}function r_(n,e){const t={minX:-23.5,maxX:23.5,minZ:-29,maxZ:18},i=new Xn;n.add(i);const r=new Zh(16777215,2.4);i.add(r);const s=new $h(62975,16711807,2.2);i.add(s);const a=new qc(16777215,2.2);a.position.set(10,25,20),i.add(a);const o=new qc(62975,1.8);o.position.set(-15,20,-15),i.add(o);const c=new xa(62975,3.5,60,0);c.position.set(0,8,0),i.add(c);const l=new xa(16711807,3.2,60,0);l.position.set(-15,7,-10),i.add(l);const f=new xa(16765738,3.2,60,0);f.position.set(15,7,-10),i.add(f);const u=i_(),h=new Dn(50,76),p=new bt({map:u,roughness:.5,metalness:.2}),g=new Ce(h,p);g.rotation.x=-Math.PI/2,g.position.set(0,0,4),i.add(g);const _=new _n(10.5,10.5,.08,36),m=new bt({color:1581122,roughness:.3,metalness:.5}),d=new Ce(_,m);d.position.set(0,.04,-2.5),i.add(d);const v=new ji(10.2,10.5,36),E=new vt({color:62975,side:Ot}),b=new Ce(v,E);b.rotation.x=-Math.PI/2,b.position.set(0,.09,-2.5),i.add(b);const S=new ji(1.2,1.8,24),w=new vt({color:16711807,side:Ot}),C=new Ce(S,w);C.rotation.x=-Math.PI/2,C.position.set(0,.1,-2.5),i.add(C);const P=new bt({color:1448494,roughness:.5,metalness:.3,side:In}),y=new Ce(new dt(50,10,1),P);y.position.set(0,5,-30),i.add(y);const T=new Ce(new dt(50,10,1),P);T.position.set(0,5,40),i.add(T);const I=new Ce(new dt(1,10,72),P);I.position.set(-24.5,5,4),i.add(I);const z=new Ce(new dt(1,10,72),P);z.position.set(24.5,5,4),i.add(z);const k=(q,se,Ae,be,j,te)=>{const ve=j?new dt(.12,.12,be):new dt(be,.12,.12),Ie=new vt({color:te}),he=new Ce(ve,Ie);he.position.set(q,se,Ae),i.add(he)};k(0,4.2,-29.4,48,!1,62975),k(0,7.8,-29.4,48,!1,16711807),k(-23.9,4.2,4,68,!0,393121),k(23.9,4.2,4,68,!0,16765738);const A=pr("⚡ NOPEX VIRTUAL ARCADE ⚡",24,6,"#00f5ff","#ff007f");A.position.set(0,7.5,-29.2),i.add(A);const D=pr("🌟 SPOTLIGHT MEGAHITS",10,2.5,"#ffd32a","#ff007f");D.position.set(0,6.2,-2),i.add(D);const U=pr("⚔️ ACTION ALLEY",10,2.5,"#ff007f","#00f5ff");U.position.set(-18,6.2,-4),U.rotation.y=Math.PI/2,i.add(U);const N=pr("🎱 SPORTS & CASUAL",10,2.5,"#05ffa1","#ffd32a");N.position.set(18,6.2,-4),N.rotation.y=-Math.PI/2,i.add(N);const G=pr("🕹️ RETRO VAULT",12,2.5,"#7928ca","#00f5ff");G.position.set(0,5.8,-24.5),i.add(G);const J={};e.forEach(q=>{J[q.id]=q});const Q=[],L=(q,se,Ae)=>{const be=J[q]||e[Q.length%e.length],j=n_(be,se,Ae);i.add(j.group),Q.push(j)};return L("neon-tetris-3d",{x:0,z:2.8},Math.PI),L("geometricsurvivor",{x:0,z:-8},0),L("cyber-pong-3d",{x:0,z:-2.5},Math.PI),L("neon-viper",{x:-6,z:-5.2},Math.PI/2),L("cute-mini-golf",{x:6,z:-5.2},-Math.PI/2),L("neon-katana-slash",{x:-18,z:-17},Math.PI/2),L("stickman-fps-arcade",{x:-18,z:-11},Math.PI/2),L("sky-ace-1944",{x:-18,z:-5},Math.PI/2),L("asteroid-blitz",{x:-18,z:1},Math.PI/2),L("cyber-shuriken",{x:-18,z:7},Math.PI/2),L("street-fighter-2",{x:-18,z:13},Math.PI/2),L("gta-2",{x:-18,z:19},Math.PI/2),L("kawaii-8ball-pool",{x:18,z:-17},-Math.PI/2),L("neon-pachinko-pop",{x:18,z:-11},-Math.PI/2),L("neon-archery-master",{x:18,z:-5},-Math.PI/2),L("brick-breaker-fx",{x:18,z:1},-Math.PI/2),L("neon-drop-2048",{x:18,z:7},-Math.PI/2),L("neon-drift-racer",{x:-15,z:-26},0),L("cyber-runner-3d",{x:-9,z:-26},0),L("neon-stack-3d",{x:-3,z:-26},0),L("super-mario",{x:0,z:-26},0),L("neon-orbit-drift",{x:3,z:-26},0),L("super-bomberman",{x:6,z:-26},0),L("cyber-pinball-fx",{x:9,z:-26},0),L("flappy-cyber-droid",{x:15,z:-26},0),{roomBounds:t,cabinets:Q,worldGroup:i,floorMesh:g,update(q){Q.forEach(se=>se.update(q)),b.material.opacity=.8+Math.sin(q*4)*.2}}}class s_{constructor(e,t){this.cabinets=e,this.onPlayGame=t,this.activeCabinet=null,this.lastHoveredCab=null,this.promptEl=document.getElementById("arcade-3d-prompt"),this.promptTitle=document.getElementById("arcade-prompt-title"),this.promptDesc=document.getElementById("arcade-prompt-desc"),this.promptRecord=document.getElementById("arcade-prompt-record"),this.actionBtn=document.getElementById("arcade-action-btn"),this.playBtn=document.getElementById("arcade-hologram-play-btn"),this.bindInputs()}bindInputs(){window.addEventListener("keydown",e=>{e.code==="Space"&&this.activeCabinet&&(e.preventDefault(),this.triggerPlay())}),this.actionBtn&&this.actionBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay()}),this.playBtn&&this.playBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay()}),this.promptEl&&this.promptEl.addEventListener("click",e=>{e.target.tagName!=="BUTTON"&&this.activeCabinet&&this.triggerPlay()})}triggerPlay(){this.activeCabinet&&this.onPlayGame&&this.onPlayGame(this.activeCabinet.game,this.activeCabinet)}update(e){let t=null,i=1/0;for(const r of this.cabinets){r.isHovered=!1;const s=Math.hypot(e.x-r.standSpot.x,e.z-r.standSpot.z);s<3.8&&s<i&&(i=s,t=r)}t?(t.isHovered=!0,this.activeCabinet=t,this.lastHoveredCab!==t&&(Lu(),this.lastHoveredCab=t,this.renderHologram(t.game)),this.promptEl&&this.promptEl.classList.add("visible"),this.actionBtn&&this.actionBtn.classList.add("visible")):(this.activeCabinet=null,this.lastHoveredCab=null,this.promptEl&&this.promptEl.classList.remove("visible"),this.actionBtn&&this.actionBtn.classList.remove("visible"))}renderHologram(e){if(this.promptTitle&&(this.promptTitle.innerHTML=`${e.icon||"🎮"} ${e.name||"ARCADE GAME"}`),this.promptDesc&&(this.promptDesc.textContent=e.description||"Pressione [ESPAÇO] para entrar na máquina e jogar."),this.promptRecord){const t=window.__ARCADE_LEADERBOARDS__&&window.__ARCADE_LEADERBOARDS__[e.id];t&&t.topScore?this.promptRecord.innerHTML=`🏆 Recorde Mundial: <strong>${t.topScore.toLocaleString()} ${e.unit||"PTS"}</strong> [${t.topPilot||"MRC"}]`:this.promptRecord.innerHTML=`⚡ 60 FPS Instantâneo • <strong>${(e.category||"ACTION").toUpperCase()}</strong>`}}}class a_{constructor(e){this.onCloseCallback=e,this.overlay=document.getElementById("arcade-game-overlay"),this.iframe=document.getElementById("arcade-game-iframe"),this.titleEl=document.getElementById("arcade-overlay-title"),this.closeBtn=document.getElementById("arcade-overlay-back"),this.fullscreenBtn=document.getElementById("arcade-overlay-fullscreen"),this.reloadBtn=document.getElementById("arcade-overlay-reload"),this.isOpen=!1,this.activeGame=null,this.bindEvents()}bindEvents(){this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):this.overlay.requestFullscreen().catch(()=>{})}),this.reloadBtn&&this.reloadBtn.addEventListener("click",()=>{this.iframe&&this.activeGame&&(this.iframe.src=this.activeGame.url)}),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&(document.fullscreenElement?document.exitFullscreen().catch(()=>{}):this.close())})}open(e){this.isOpen=!0,this.activeGame=e,Du(),this.titleEl&&(this.titleEl.innerHTML=`${e.icon||"🎮"} ${e.name||"JOGO"}`),this.iframe&&(this.iframe.src=e.url),this.overlay&&(this.overlay.style.display="flex",setTimeout(()=>{this.overlay.classList.add("active")},10))}close(){this.isOpen&&(this.isOpen=!1,Iu(),this.overlay&&(this.overlay.classList.remove("active"),setTimeout(()=>{this.overlay.style.display="none",this.iframe&&(this.iframe.src="about:blank")},250)),this.onCloseCallback&&this.onCloseCallback())}}class o_{constructor(){this.tickerEl=null,this.createBanner()}createBanner(){let e=document.getElementById("mp-score-ticker");e&&e.remove(),e=document.createElement("div"),e.id="mp-score-ticker",e.style.cssText=`
      position: fixed;
      top: 60px;
      left: 50%;
      transform: translateX(-50%) translateY(-100px);
      background: linear-gradient(135deg, rgba(255, 211, 42, 0.95), rgba(255, 56, 56, 0.95));
      color: #000;
      font-family: 'Press Start 2P', monospace;
      font-size: 11px;
      font-weight: 900;
      padding: 10px 24px;
      border-radius: 30px;
      box-shadow: 0 0 25px rgba(255, 211, 42, 0.8), 0 4px 15px rgba(0, 0, 0, 0.5);
      z-index: 12000;
      display: flex;
      align-items: center;
      gap: 12px;
      pointer-events: none;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      white-space: nowrap;
    `,document.body.appendChild(e),this.tickerEl=e}showRecord(e,t,i){if(!this.tickerEl)return;const r=typeof i=="number"?i.toLocaleString("pt-BR"):i;this.tickerEl.innerHTML=`
      <span style="font-size: 16px;">🏆</span>
      <span>NOVO RECORDE: <strong>${e}</strong> MARCOU <strong>${r} PTS</strong> EM ${t.toUpperCase()}!</span>
      <span style="font-size: 16px;">🔥</span>
    `,this.tickerEl.style.transform="translateX(-50%) translateY(0)",this.playFanfareAudio(),this.hideTimeout&&clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(()=>{this.tickerEl.style.transform="translateX(-50%) translateY(-100px)"},6e3)}playFanfareAudio(){try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;t.state==="suspended"&&t.resume(),[523.25,659.25,783.99,1046.5].forEach((r,s)=>{const a=t.createOscillator(),o=t.createGain();a.type="triangle",a.frequency.setValueAtTime(r,t.currentTime+s*.1),o.gain.setValueAtTime(.2,t.currentTime+s*.1),o.gain.exponentialRampToValueAtTime(.01,t.currentTime+s*.1+.3),a.connect(o),o.connect(t.destination),a.start(t.currentTime+s*.1),a.stop(t.currentTime+s*.1+.3)})}catch{}}}/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const ic=Object.freeze,Kn=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Vr=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Uu=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Nu=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,c_=ic({p:Kn,n:Vr,h:1n,a:0n,b:7n,Gx:Uu,Gy:Nu}),an=32,yl=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,Qt=(n,e,t="")=>{if(yl(n)&&(e===void 0||n.length===e))return n;const i=yl(n),r=e!==void 0?` of length ${e}`:"",s=i?`length=${n.length}`:`type=${typeof n}`,a=(t?`"${t}" `:"")+"expected Uint8Array"+r+", got "+s;throw i?new RangeError(a):new TypeError(a)},l_=n=>Uint8Array.from(n),u_=(n,e,t)=>l_(Qt(n,t,e)),Fu=(n,e)=>n.toString(16).padStart(e,"0"),Ou=n=>{let e="";for(const t of Qt(n))e+=Fu(t,2);return e},Bu=n=>{const e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);const t=new Uint8Array(n.length/2);for(let i=0,r=0;i<t.length;i++,r+=2){const s=n.charCodeAt(r),a=n.charCodeAt(r+1);t[i]=((s&15)+(s>>6)*9)*16+(a&15)+(a>>6)*9}return t},Sl=()=>{var e;const n=(e=globalThis==null?void 0:globalThis.crypto)==null?void 0:e.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},Zi=(...n)=>{let e=0;for(const r of n)e+=Qt(r).length;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.length;return t},rc=(n=an)=>{const e=globalThis==null?void 0:globalThis.crypto;if(typeof(e==null?void 0:e.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},f_=BigInt,Gr=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},we=(n,e=Kn)=>(n%=e)>=0n?n:e+n,Bs=n=>we(n,Vr),h_=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=we(n,e),i=e,r=0n,s=1n;for(;t!==0n;){const o=i/t,c=i-t*o,l=r-s*o;i=t,t=c,r=s,s=l}if(i!==1n)throw new Error("invert: does not exist");return we(r,e)},ku=n=>{const e=g_[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},Ml=(n,e,t)=>Qt(ku(n)(e,t),an,"digest"),El=async(n,e,t)=>Qt(await ku(n)(e,t),an,"digest"),Ta=n=>{if(n instanceof Zn)return n;throw new TypeError("Point expected")},wa="bad point: not on curve",zu=n=>we(we(n*n)*n+7n),bl=n=>Gr(n,0n,Kn),Mr=n=>Gr(n,1n,Kn),Vu=n=>Gr(n,1n,Vr),ks=n=>!(n&1n),d_=n=>Uint8Array.of(ks(n)?2:3),Gu=n=>{const e=zu(Mr(n));let t=1n;for(let i=e,r=(Kn+1n)/4n;r>0n;r>>=1n)r&1n&&(t=t*i%Kn),i=i*i%Kn;if(we(t*t)!==e)throw new Error("sqrt invalid");return new Zn(n,ks(t)?t:we(-t),1n)},An=class An{constructor(e,t,i){Dt(this,"X");Dt(this,"Y");Dt(this,"Z");this.X=bl(e),this.Y=Mr(t),this.Z=bl(i),ic(this)}static CURVE(){return c_}static fromAffine(e){const{x:t,y:i}=e;return t===0n&&i===0n?Er:new An(t,i,1n)}static fromBytes(e){Qt(e);const t=e.length,i=e[0],r=Ps(e,1,33);try{if(t===33&&(i===2||i===3)){const s=Gu(r);return i===3?s.negate():s}if(t===65&&i===4)return new An(r,Ps(e,33,65),1n).assertValidity()}catch{throw new Error(wa)}throw new Error(wa)}static fromHex(e){return An.fromBytes(Bu(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=Ta(e);return we(t*o)===we(s*r)&&we(i*o)===we(a*r)}is0(){return this.Z===0n}negate(){return new An(this.X,we(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=Ta(e),c=0n,l=7n;let f=0n,u=0n,h=0n;const p=we(l*3n);let g=we(t*s),_=we(i*a),m=we(r*o),d=we(t+i),v=we(s+a);d=we(d*v),v=we(g+_),d=we(d-v),v=we(t+r);let E=we(s+o);return v=we(v*E),E=we(g+m),v=we(v-E),E=we(i+r),f=we(a+o),E=we(E*f),f=we(_+m),E=we(E-f),h=we(c*v),f=we(p*m),h=we(f+h),f=we(_-h),h=we(_+h),u=we(f*h),_=we(g+g),_=we(_+g),m=we(c*m),v=we(p*v),_=we(_+m),m=we(g-m),m=we(c*m),v=we(v+m),g=we(_*v),u=we(u+g),g=we(E*v),f=we(d*f),f=we(f-g),g=we(d*_),h=we(E*h),h=we(h+g),new An(f,u,h)}subtract(e){return this.add(Ta(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Er;if(Vu(e),e===1n)return this;if(this.equals(xi))return b_(e).p;let i=Er,r=xi,s=this;for(let a=0;t?a<256:e>0n;a++)e&1n?i=i.add(s):t&&(r=r.add(s)),s=s.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};const r=h_(i,Kn);if(we(i*r)!==1n)throw new Error("inverse invalid");return{x:we(e*r),y:we(t*r)}}assertValidity(){const{x:e,y:t}=this.toAffine();if(Mr(e),Mr(t),we(t*t)!==zu(e))throw new Error(wa);return this}toBytes(e=!0){const{x:t,y:i}=this.assertValidity().toAffine(),r=Fn(t);return e?Zi(d_(i),r):Zi(Uint8Array.of(4),r,Fn(i))}toHex(e){return Ou(this.toBytes(e))}};Dt(An,"BASE"),Dt(An,"ZERO");let Zn=An;const xi=new Zn(Uu,Nu,1n),Er=new Zn(0n,1n,0n);Zn.BASE=xi;Zn.ZERO=Er;const p_=(n,e,t)=>xi.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),vi=n=>f_("0x"+(Ou(n)||"0")),Ps=(n,e,t)=>vi(n.subarray(e,t)),Fn=n=>Bu(Fu(Gr(n,0n,2n**256n),an*2)),m_=n=>{const e=vi(Qt(n,an,"secret key"));return Gr(e,1n,Vr,"invalid secret key: outside of range")},Tl="SHA-256",g_={hmacSha256Async:async(n,e)=>{const t=Sl(),i=await t.importKey("raw",n,{name:"HMAC",hash:Tl},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await Sl().digest(Tl,n)),sha256:void 0},__=n=>{if(n=n===void 0?rc(48):n,Qt(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");const e=we(vi(n),Vr-1n);return Fn(e+1n)},x_=n=>e=>{const t=__(e);return{secretKey:t,publicKey:n(t)}},Hu=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),No=(n,...e)=>{const t=Ml("sha256",Hu(n));return Ml("sha256",Zi(t,t,...e))},Fo=(n,...e)=>El("sha256Async",Hu(n)).then(t=>El("sha256Async",Zi(t,t,...e))),sc=n=>{const e=m_(n),t=xi.multiply(e),{x:i,y:r}=t.assertValidity().toAffine(),s=ks(r)?e:Bs(-e),a=Fn(i);return{d:s,px:a}},ac=n=>Bs(vi(n)),Wu=(...n)=>ac(No("challenge",...n)),Xu=async(...n)=>ac(await Fo("challenge",...n)),qu=n=>sc(n).px,v_=x_(qu),Yu=(n,e,t)=>{const i=u_(n,"message"),{px:r,d:s}=sc(e);return{m:i,px:r,d:s,a:Qt(t,an)}},$u=n=>{const e=ac(n);if(e===0n)throw new Error("sign failed: k is zero");const{px:t,d:i}=sc(Fn(e));return{rx:t,k:i}},Ku=(n,e,t,i)=>Zi(e,Fn(Bs(n+t*i))),ju="invalid signature produced",y_=(n,e,t=rc(an))=>{const{m:i,px:r,d:s,a}=Yu(n,e,t),o=Fn(s^vi(No("aux",a))),{rx:c,k:l}=$u(No("nonce",o,r,i)),f=Ku(l,c,Wu(c,r,i),s);if(!Ju(f,i,r))throw new Error(ju);return f},S_=async(n,e,t=rc(an))=>{const{m:i,px:r,d:s,a}=Yu(n,e,t),o=Fn(s^vi(await Fo("aux",a))),{rx:c,k:l}=$u(await Fo("nonce",o,r,i)),f=Ku(l,c,await Xu(c,r,i),s);if(!await Qu(f,i,r))throw new Error(ju);return f},M_=(n,e)=>n instanceof Promise?n.then(e):e(n),Zu=(n,e,t,i)=>{const r=Qt(n,64,"signature"),s=Qt(e,void 0,"message"),a=Qt(t,an,"publicKey");let o,c,l,f;try{const u=vi(a);o=Gu(u),c=Mr(Ps(r,0,an)),l=Vu(Ps(r,an,64)),f=Zi(Fn(c),a,s)}catch{return!1}return M_(i(f),u=>{try{const{x:h,y:p}=p_(o,l,Bs(-u)).toAffine();return!(!ks(p)||h!==c)}catch{return!1}})},Ju=(n,e,t)=>Zu(n,e,t,Wu),Qu=async(n,e,t)=>Zu(n,e,t,Xu),ef=ic({keygen:v_,getPublicKey:qu,sign:y_,verify:Ju,signAsync:S_,verifyAsync:Qu}),E_=()=>{const n=[];let e=xi,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let r=1;r<128;r++)t=t.add(e),n.push(t);e=t.double()}return n};let wl;const Al=(n,e)=>{const t=e.negate();return n?t:e},b_=n=>{const e=wl||(wl=E_());let t=Er,i=xi;for(let r=0;r<33;r++){let s=Number(n&255n);n>>=8n,s>128&&(s-=256,n+=1n);const a=r*128,o=a+Math.abs(s)-1,c=r%2!==0,l=s<0;s===0?i=i.add(Al(c,e[a])):t=t.add(Al(l,e[o]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}},{floor:Oo,min:T_,sin:w_}=Math,cn="Trystero",Dr=(n,e)=>Array(n).fill(void 0).map(e),A_="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",ir=n=>Dr(n,()=>A_[Oo(Math.random()*62)]??"").join(""),on=ir(20),yi=Promise.all.bind(Promise),tf=typeof window<"u",{entries:di,fromEntries:nf,keys:Zt,values:Wi}=Object,Ut=()=>{},rf="candidate",st=n=>(n!==null&&clearTimeout(n),null),Qe=n=>new Error(`${cn}: ${n}`),Ji=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:qt(n??e),Yn=(n,e)=>n instanceof Error?n:Qe(Ji(n,e)),R_=new TextEncoder,C_=new TextDecoder,jn=n=>R_.encode(n),hi=n=>C_.decode(n),Lr=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Ir=(...n)=>n.join("@"),P_=(n,e)=>{const t=[...n],i=()=>{const s=w_(e++)*1e4;return s-Oo(s)};let r=t.length;for(;r;){const s=Oo(i()*r--),a=t[r];t[r]=t[s],t[s]=a}return t},D_=(n,e,t,i=!1)=>{var r,s;return((r=n.relayConfig)==null?void 0:r.urls)||(i?P_(e,sf(n.appId)):e).slice(0,((s=n.relayConfig)==null?void 0:s.redundancy)??t)},qt=JSON.stringify,Qi=n=>{try{return JSON.parse(n)}catch{throw Qe(`failed to parse JSON: ${n}`)}},sf=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,Rl=3333,Cl=6e4,mr={};let br=null,Tr=null;const L_=()=>{br||(br=new Promise(n=>{Tr=n}).finally(()=>{Tr=null,br=null}))},I_=()=>{Tr==null||Tr()},U_=(n,e,t)=>{const i={};let r=!1,s=!1,a,o=Ut;i.isClosed=!1,i.ready=new Promise(l=>o=l);const c=()=>{if(i.isClosed)return;a=void 0,s=!1;const l=new WebSocket(n);l.onclose=()=>{if(i.isClosed||s)return;if(s=!0,br){br.then(c);return}const f=mr[n]??(mr[n]=Rl);if(f>=Cl){i.isClosed=!0;return}a=setTimeout(c,Math.random()*f),mr[n]=T_(f*2,Cl)},l.onmessage=f=>e(String(f.data)),i.socket=l,i.url=l.url,l.onopen=()=>{const f=r;r=!0,o(i),mr[n]=Rl,f&&(t==null||t())},i.send=f=>{l.readyState===1&&l.send(f)}};return i.close=()=>{i.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),i.socket.close()},c(),i},N_=n=>{const e={},t=new WeakMap,i=a=>{const o=t.get(a);if(!o)throw Qe("relay bookkeeping missing registration for relay client");return o},r=()=>{const a={},o=c=>a[c]??(a[c]={});return{forKey:o,forRelay:c=>o(i(c))}},s=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>{const c=e[a];return c||s(a,o())},keyOf:i,scoped:r,getSockets:()=>nf(di(e).flatMap(([a,o])=>{const c=n(o);return c?[[a,c]]:[]}))}},F_=()=>{if(tf){const n=new AbortController;return addEventListener("online",I_,{signal:n.signal}),addEventListener("offline",L_,{signal:n.signal}),()=>n.abort()}return Ut},oc="AES-GCM",Aa={},O_=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),B_=n=>{const e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},zs=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,jn(e))),Ur=async n=>Aa[n]??(Aa[n]=Array.from(await zs("SHA-1",n)).map(e=>e.toString(36)).join("")),k_=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},jn(`${n}:${e}:${t}`)),{name:oc},!1,["encrypt","decrypt"]),z_=async(n,e)=>Lr(await zs("SHA-256",`${cn}:${n}:${e}`)),af="$",of=",",V_=async(n,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(of)+af+O_(await crypto.subtle.encrypt({name:oc,iv:t},await n,jn(e)))},G_=async(n,e)=>{const[t,i]=e.split(af);return hi(await crypto.subtle.decrypt({name:oc,iv:new Uint8Array((t==null?void 0:t.split(of).map(Number))??[])},await n,B_(i??"")))},cc=57333,H_=18e4,W_=20;var X_=class{constructor(n){Dt(this,"makeOffer");Dt(this,"pool",[]);Dt(this,"pooled",new Set);Dt(this,"leased",new Map);Dt(this,"recycling",new Set);Dt(this,"cleanupTimer",null);Dt(this,"active",!1);this.makeOffer=n}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Dr(W_,this.makeOffer).forEach(n=>this.push(n)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(n=>n.isDead?(this.pooled.delete(n),!1):!0)},cc)}push(n){n.isDead||this.pooled.has(n)||this.leased.has(n)||(this.pool.push(n),this.pooled.add(n))}shift(n){const e=[];for(;e.length<n&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(n){const e=this.leased.get(n);e&&(st(e),this.leased.delete(n))}recycle(n){if(!(n.isDead||this.recycling.has(n))){if(n.connection.remoteDescription){n.destroy();return}if(!this.active){n.destroy();return}this.recycling.add(n),n.setHandlers({connect:Ut,close:Ut,error:Ut}),n.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||n.isDead||!this.active){n.destroy();return}this.push(n)}).catch(()=>n.destroy()).finally(()=>this.recycling.delete(n))}}reclaimLeased(n){const e=this.leased.get(n);e&&(st(e),this.leased.delete(n),this.recycle(n))}lease(n){this.claimLeased(n),this.leased.set(n,setTimeout(()=>{this.leased.delete(n),this.recycle(n)},H_))}checkout(n,e,t){const i=this.shift(n),r=Math.max(0,n-i.length);r>0&&i.push(...Dr(r,this.makeOffer));const s=async(a,o=!1)=>{try{const c=await t(a);return e?(this.lease(a),{peer:a,offer:c,claim:()=>this.claimLeased(a),reclaim:()=>this.reclaimLeased(a)}):{peer:a,offer:c}}catch(c){if(this.claimLeased(a),this.pooled.delete(a),a.destroy(),!o)return s(this.makeOffer(),!0);throw c}};return yi(i.map(a=>s(a)))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(n=>n.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((n,e)=>{st(n),e.destroy()}),this.leased.clear(),this.recycling.forEach(n=>n.destroy()),this.recycling.clear()}};const Ra=Qe("incorrect password for overlapping room"),q_=(n,e,t)=>{const i=a=>zs("SHA-256",`${a}:${n}:${e}:${t}`).then(Lr),r=async(a,o,c)=>{if(!n)return;if(c){const f=ir(36);await a({__trystero_pw:"challenge",c:f});const{data:u}=await o();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw Ra;const h=await i(f);if(u.h!==h)throw Ra;return}const{data:l}=await o();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw Ra;await a({__trystero_pw:"response",h:await i(l.c)})};return{run:r,compose:a=>n||a?async(o,c,l,f)=>{await r(c,l,f),await(a==null?void 0:a(o,c,l,f))}:void 0}},Y_=n=>{const e=Ji(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},$_=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:r,onActivate:s,onFailure:a})=>{const o={},c=(u,h)=>{const p=o[u];!p||h&&p.peer!==h||p.isActive||!p.didLocalHandshakePass||!p.didReceiveRemoteReady||(p.isActive=!0,p.handshakeTimer=st(p.handshakeTimer),s(u,p.peer))},l=(u,h,p)=>{const g=o[u];if(!g||g.peer!==h)return;const _=Y_(p);e==null||e(u,_),a(u,h,Qe(_))},f=(u,h)=>{const p=o[u];!p||p.peer!==h||p.isActive||(p.didLocalHandshakePass=!0,r("",u).catch(g=>l(u,h,Qe(`failed sending handshake readiness: ${Ji(g,"unknown send failure")}`))),c(u,h))};return{addPeer:(u,h)=>{o[u]={peer:h,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,h)=>{const p=o[u];p&&(p.handshakeTimer=st(p.handshakeTimer),p.pendingHandshakePayloads.length=0,p.handshakeWaiters.splice(0).forEach(g=>g.reject(h)),delete o[u])},canReceiveFromPeer:(u,h)=>{const p=o[u];return!!(p&&(p.isActive||h))},start:(u,h)=>{const p=o[u];if(!p||p.peer!==h)return;p.handshakeTimer=setTimeout(()=>l(u,h,Qe(`handshake timed out after ${t}ms`)),t);const g=async(d,v)=>{await i(d,u,v)},_=()=>new Promise((d,v)=>{const E=o[u];if(!E||E.peer!==h){v(Qe("peer disconnected during handshake"));return}const b=E.pendingHandshakePayloads.shift();if(b){d(b);return}E.handshakeWaiters.push({resolve:d,reject:S=>v(S)})}),m=on<u;Promise.resolve(n==null?void 0:n(u,g,_,m)).then(()=>f(u,h)).catch(d=>l(u,h,Yn(d,"handshake failed")))},receiveHandshakeData:(u,h,p)=>{const g=o[h];if(!g||g.isActive)return;const _=p===void 0?{data:u}:{data:u,metadata:p},m=g.handshakeWaiters.shift();if(m){m.resolve(_);return}g.pendingHandshakePayloads.push(_)},receiveHandshakeReady:u=>{const h=o[u];!h||h.isActive||(h.didReceiveRemoteReady=!0,c(u))}}},K_=15e3,j_=5e3,Pl="icegatheringstatechange",Z_="iceconnectionstatechange",gr="offer",J_="answer",Q_=/out of range/i,Dl=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var Ll=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:r,_test_only_mdnsHostFallbackToLoopback:s})=>{const a=new(i??RTCPeerConnection)({iceServers:ex.concat(r??[]),...t}),o={},c=[],l=[],f=e!==!1,u=[],h=[];let p=!1,g=!1,_=null,m=null,d=!1;const v=()=>m=st(m),E=()=>{var L;d||(d=!0,v(),(L=o.close)==null||L.call(o))},b=L=>{o.signal?o.signal(L):c.push(L)},S=L=>{const q=o.signal;o.signal=se=>{q==null||q(se),L(se)},c.length>0&&c.splice(0).forEach(se=>{var Ae;return(Ae=o.signal)==null?void 0:Ae.call(o,se)})},w=L=>s?Dl(L):L,C=L=>{if(!s||typeof L.candidate!="string")return L;const q=Dl(L.candidate);return q===L.candidate?L:{...L,candidate:q}},P=L=>{var q,se;return{type:((q=L.localDescription)==null?void 0:q.type)??gr,sdp:w(((se=L.localDescription)==null?void 0:se.sdp)??"")}},y=()=>{var q,se;const L=(q=a.remoteDescription)==null?void 0:q.sdp;return L?((se=L.match(/a=ice-ufrag:([^\s]+)/))==null?void 0:se[1])??null:null},T=()=>{var L,q;return(((q=(L=a.remoteDescription)==null?void 0:L.sdp)==null?void 0:q.match(/^m=/gm))??[]).length},I=L=>{if(!a.remoteDescription)return!1;const q=T();if(typeof L.sdpMLineIndex=="number"&&q>0&&L.sdpMLineIndex>=q)return!1;const se=y();return!(se&&L.usernameFragment&&L.usernameFragment!==se)},z=async L=>{try{return await a.addIceCandidate(L),!0}catch(q){if(q instanceof Error&&Q_.test(q.message)&&typeof L.sdpMLineIndex=="number")return!1;throw q}},k=async()=>{if(!a.remoteDescription||u.length===0)return;const L=u.splice(0),q=[];for(const se of L){if(!I(se)){q.push(se);continue}await z(se)||q.push(se)}q.length>0&&u.push(...q)},A=async L=>{if(I(L)){await z(L)||u.push(L);return}u.push(L)},D=L=>{L.binaryType="arraybuffer",L.bufferedAmountLowThreshold=65535,L.onmessage=q=>{const se=q.data;o.data?o.data(se):l.push(se)},L.onopen=()=>{var q;return(q=o.connect)==null?void 0:q.call(o)},L.onclose=E,L.onerror=({error:q})=>{var se;return(se=o.error)==null?void 0:se.call(o,Yn(q,"data channel error"))}},U=async L=>{let q=null;try{await Promise.race([new Promise(se=>{const Ae=()=>{L.iceGatheringState==="complete"&&(L.removeEventListener(Pl,Ae),se())};L.addEventListener(Pl,Ae),Ae()}),new Promise(se=>{q=setTimeout(se,K_)})])}finally{st(q)}return P(L)},N=async()=>{const L=f?P(a):await U(a);return b(L),L};n?(_=a.createDataChannel("data"),D(_)):a.ondatachannel=({channel:L})=>{_=L,D(L)};const G=async(L=!1)=>{var q,se;if(a.connectionState!=="closed")try{return p=!0,L&&(a.signalingState!=="stable"&&a.signalingState!=="closed"&&((q=a.localDescription)==null?void 0:q.type)===gr&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(L?await a.createOffer({iceRestart:!0}):void 0),await N()}catch(Ae){(se=o.error)==null||se.call(o,Yn(Ae,"failed to create local offer"))}finally{p=!1}};a.onnegotiationneeded=async()=>G(!1),a.onicecandidate=({candidate:L})=>{if(!f||!L)return;const q=C(typeof L.toJSON=="function"?L.toJSON():{candidate:L.candidate,sdpMid:L.sdpMid,sdpMLineIndex:L.sdpMLineIndex,usernameFragment:L.usernameFragment});b({type:rf,sdp:JSON.stringify(q)})};const J=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){E();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){v();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&E()},j_));return}};a.onconnectionstatechange=J,a.addEventListener(Z_,J),a.ontrack=L=>{var se,Ae;const q=L.streams[0];if(q){if(!o.track&&!o.stream){h.push({track:L.track,stream:q});return}(se=o.track)==null||se.call(o,L.track,q),(Ae=o.stream)==null||Ae.call(o,q)}},a.onremovestream=L=>{var q;return(q=o.stream)==null?void 0:q.call(o,L.stream)};const Q=n?new Promise(L=>S(q=>{q.type===gr&&L(q)})):Promise.resolve();return n&&queueMicrotask(()=>{var L;!p&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&((L=a.onnegotiationneeded)==null||L.call(a,new Event("negotiationneeded")))}),{created:Date.now(),connection:a,get channel(){return _},get isDead(){return a.connectionState==="closed"},getOffer:async(L=!1)=>{var q;if(n)return L?G(!0):((q=a.localDescription)==null?void 0:q.type)===gr?f?P(a):U(a):Q},async signal(L){var q,se,Ae;if(L.type==="candidate"){try{const be=JSON.parse(L.sdp);be&&typeof be=="object"&&await A(C(be))}catch(be){(q=o.error)==null||q.call(o,Yn(be,"failed to parse remote candidate"))}return}if(!((_==null?void 0:_.readyState)==="open"&&!((se=L.sdp)!=null&&se.includes("a=rtpmap"))))try{const be={...L,sdp:w(L.sdp)};if(L.type===gr){if(p||a.signalingState!=="stable"&&!g){if(n)return;await yi([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(be)])}else await a.setRemoteDescription(be);return await k(),await a.setLocalDescription(),await N()}if(L.type===J_){g=!0;try{await a.setRemoteDescription(be),await k()}finally{g=!1}}}catch(be){(Ae=o.error)==null||Ae.call(o,Yn(be,"failed to apply remote signal"))}},sendData:L=>_==null?void 0:_.send(L),destroy:()=>{v(),_==null||_.close(),a.close(),p=!1,g=!1,E()},setHandlers:L=>{const{signal:q,...se}=L;Object.assign(o,se),o.data&&l.length>0&&l.splice(0).forEach(Ae=>{var be;return(be=o.data)==null?void 0:be.call(o,Ae)}),q&&S(q),(o.track||o.stream)&&h.length>0&&h.splice(0).forEach(({track:Ae,stream:be})=>{var j,te;(j=o.track)==null||j.call(o,Ae,be),(te=o.stream)==null||te.call(o,be)})},offerPromise:Q,addStream:L=>L.getTracks().forEach(q=>a.addTrack(q,L)),removeStream:L=>a.getSenders().filter(q=>q.track&&L.getTracks().includes(q.track)).forEach(q=>a.removeTrack(q)),addTrack:(L,q)=>a.addTrack(L,q),removeTrack:L=>{const q=a.getSenders().find(se=>se.track===L);q&&a.removeTrack(q)},replaceTrack:(L,q)=>{const se=a.getSenders().find(Ae=>Ae.track===L);if(se)return se.replaceTrack(q)}}};const ex=[...Dr(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n})),tx=Object.getPrototypeOf(Uint8Array),Ca=32,nx=0,Pa=32,Il=34,Da=35,Es=36,ai=16*2**10-Es,_r=255,ix=65535,Ul="bufferedamountlow",Nl="close",Fl="error",rx=1e4,sx=n=>n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength),ax=(n,e=rx)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(t=>{let i=!1,r=null;const s=c=>{i||(i=!0,n.removeEventListener(Ul,a),n.removeEventListener(Nl,o),n.removeEventListener(Fl,o),st(r),t(c))},a=()=>s(!0),o=()=>s(!1);if(n.addEventListener(Ul,a),n.addEventListener(Nl,o),n.addEventListener(Fl,o),r=setTimeout(()=>s(!1),e),n.readyState!=="open"){s(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&s(!0)}),ox=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:i})=>{const r={},s={},a={},o={},c=(u,h,{includePending:p=!1}={})=>(u?Array.isArray(u)?u:[u]:e(p)).flatMap(g=>{const _=n(g,p);return _?[Promise.resolve(h(g,_))]:(console.warn(`${cn}: no peer with id ${g} found`),[])});return{makeInternalAction:(u,h={})=>{const p=s[u];if(r[u]&&p){const v=r[u].options;if(v.sendToPending!==!!h.sendToPending||v.receiveWhilePending!==!!h.receiveWhilePending)throw Qe(`action type "${u}" cannot be redefined`);return p}if(!u)throw Qe("action type argument is required");const g=jn(u);if(g.byteLength>Ca)throw Qe(`action type string "${u}" (${g.byteLength}b) exceeds byte limit (${Ca}). Hint: choose a shorter name.`);const _={sendToPending:!!h.sendToPending,receiveWhilePending:!!h.receiveWhilePending},m=new Uint8Array(Ca);m.set(g);let d=0;return r[u]={onComplete:Ut,onProgress:Ut,setOnComplete:v=>{r[u].onComplete=v;const E=o[u];E!=null&&E.length&&(delete o[u],E.forEach(({payload:b,peerId:S,metadata:w})=>v(b,S,w)))},setOnProgress:v=>{r[u].onProgress=v},send:async(v,E,b,S,w)=>{i(w);const C=typeof v;if(C==="undefined")throw Qe("action data cannot be undefined");const P=C!=="string",y=v instanceof Blob,T=y||v instanceof ArrayBuffer||v instanceof tx,I=b!==void 0,z=T?sx(y?await v.arrayBuffer():v):jn(P?qt(v):v),k=I?jn(qt(b)):null,A=Math.ceil(z.byteLength/ai)+(I?1:0)||1,D=Dr(A,(U,N)=>{const G=N===A-1,J=!!(I&&N===0),Q=new Uint8Array(Es+(J?(k==null?void 0:k.byteLength)??0:G?z.byteLength-ai*(A-(I?2:1)):ai));return Q.set(m),Q.set([d>>8,d&_r],Pa),Q.set([Number(G)|Number(J)<<1|Number(T)<<2|Number(P)<<3],Il),Q.set([Math.round((N+1)/A*_r)],Da),Q.set(I?J?k??new Uint8Array:z.subarray((N-1)*ai,N*ai):z.subarray(N*ai,(N+1)*ai),Es),Q});return d=d+1&ix,await yi(c(E,async(U,N)=>{const{channel:G}=N;let J=0;for(;J<A;){i(w);const Q=D[J];if(!Q)break;if(G&&G.bufferedAmount>G.bufferedAmountLowThreshold){const se=await ax(G);if(i(w),!se)break}const L=n(U,_.sendToPending);if(!L||L!==N)break;N.sendData(Q),J++;const q=Q[Da]??_r;S==null||S(q/_r,U,b)}},{includePending:_.sendToPending})),[]},options:_},s[u]={send:r[u].send,onMessage:r[u].setOnComplete,onProgress:r[u].setOnProgress}},handleData:(u,h)=>{var I,z;const p=new Uint8Array(h),g=hi(p.subarray(nx,Pa)).replaceAll("\0",""),_=r[g];if(!t(u,!!(_!=null&&_.options.receiveWhilePending)))return;const m=(p[Pa]??0)<<8|(p[33]??0),d=p[Il]??0,v=p[Da]??0,E=p.subarray(Es),b=!!(d&1),S=!!(d&2),w=!!(d&4),C=!!(d&8);a[u]??(a[u]={}),(I=a[u])[g]??(I[g]={});const P=(z=a[u][g])[m]??(z[m]={chunks:[]});if(S?P.meta=Qi(hi(E)):P.chunks.push(E),_==null||_.onProgress(v/_r,u,P.meta),!b)return;const y=new Uint8Array(P.chunks.reduce((k,A)=>k+A.byteLength,0));P.chunks.reduce((k,A)=>(y.set(A,k),k+A.byteLength),0),delete a[u][g][m];const T=w?y:C?Qi(hi(y)):hi(y);if(_){_.onComplete(T,u,P.meta);return}(o[g]??(o[g]=[])).push({payload:T,peerId:u,...P.meta===void 0?{}:{metadata:P.meta}})},clearPeer:u=>{delete a[u]}}},cx=500,Vi=(n,e)=>{const t=Qe(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},La=n=>{if(n!=null&&n.aborted)throw Vi("aborted","operation aborted")},Ol=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...Object.hasOwn(n,"m")?{m:n.m}:{}}:null,lx=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...typeof n.e=="string"?{e:n.e}:{}}:null,ms=(n,e)=>e===void 0?n:{...n,metadata:e},ux=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t})=>{const i={},r={},s=ox({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:La}),a=s.makeInternalAction,o=s.handleData,c=p=>{const g=r[p];g&&(st(g.timer),g.signal&&g.abortHandler&&g.signal.removeEventListener("abort",g.abortHandler),delete r[p])},l=(p,g)=>{di(r).forEach(([_,m])=>{m.peerId===p&&(c(_),m.reject(g))})},f=(p,g)=>{s.clearPeer(p),l(p,Vi("disconnected",Ji(g,"peer disconnected")))},u=a("@_response");return u.onMessage((p,g,_)=>{const m=lx(_);if(!m)return;const d=r[m.r];if(!(!d||d.peerId!==g)){if(c(m.r),m.e!==void 0){d.reject(Vi("rejected",m.e));return}d.resolve(p)}}),{makeAction:(p,g)=>{if(g&&"onRequest"in g&&g.kind!=="request")throw Qe('request actions must use kind: "request"');const _=(g==null?void 0:g.kind)??"message",m=a(p),d=i[p];if(d){if(d.kind!==_)throw Qe(`action type "${p}" cannot be redefined`);return d.action}const v={kind:_,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:(g==null?void 0:g.onReceiveProgress)??null},E=(A,D)=>A?(U,N)=>A(U,ms({peerId:N},D)):void 0,b=A=>{v.onReceiveProgress=A},S=(A,D,U)=>{var G;const N=v.kind==="request"?Ol(U):null;(G=v.onReceiveProgress)==null||G.call(v,A,ms({peerId:D},N?N.m:U))};if(m.onProgress(S),_==="message"){let A=(g==null?void 0:g.onMessage)??null;const D=()=>{if(!A)return;const N=A;v.pendingMessages.splice(0).forEach(({payload:G,peerId:J,metadata:Q})=>{Promise.resolve().then(()=>N(G,ms({peerId:J},Q))).catch(L=>console.error(`${cn} action handler error:`,L))})},U={send:async(N,G={})=>{await m.send(N,G.target,G.metadata,E(G.onProgress,G.metadata),G.signal)},get onMessage(){return A},set onMessage(N){A=N,D()},get onReceiveProgress(){return v.onReceiveProgress},set onReceiveProgress(N){b(N)}};return m.onMessage((N,G,J)=>{if(!A){v.pendingMessages.push(J===void 0?{payload:N,peerId:G}:{payload:N,peerId:G,metadata:J});return}const Q=A;Promise.resolve().then(()=>Q(N,ms({peerId:G},J))).catch(L=>console.error(`${cn} action handler error:`,L))}),v.action=U,i[p]=v,D(),U}let w=(g==null?void 0:g.onRequest)??null;const C=A=>{st(A.timer);const D=v.pendingRequests.indexOf(A);D>-1&&v.pendingRequests.splice(D,1)},P=(A,D,U)=>{u.send(null,A,{r:D,e:Ji(U,"request failed")})},y=(A,D)=>{C(A),Promise.resolve().then(()=>D(A.payload,{peerId:A.peerId,...A.metadata===void 0?{}:{metadata:A.metadata},signal:A.controller.signal})).then(async U=>{if(U===void 0)throw Qe("request handler returned undefined");await u.send(U,A.peerId,{r:A.requestId})}).catch(U=>P(A.peerId,A.requestId,U)).finally(()=>A.controller.abort())},T=()=>{w&&v.pendingRequests.slice().forEach(A=>y(A,w))},I=(A,D,U,N)=>{if(w){const J={payload:A,peerId:D,...U===void 0?{}:{metadata:U},requestId:N,controller:new AbortController,timer:null};y(J,w);return}const G={payload:A,peerId:D,...U===void 0?{}:{metadata:U},requestId:N,controller:new AbortController,timer:setTimeout(()=>{C(G),G.controller.abort(),P(D,N,"request handler unavailable")},cx)};v.pendingRequests.push(G)},z=async(A,D)=>{const{target:U,metadata:N,onProgress:G,signal:J,timeoutMs:Q}=D;if(La(J),!n(U,!1))throw Vi("disconnected",`no active peer with id ${U}`);const L=ir(20),q=new Promise((se,Ae)=>{const be={peerId:U,resolve:se,reject:Ae,timer:null,...J===void 0?{}:{signal:J}},j=()=>{c(L),Ae(Vi("aborted","operation aborted"))};J&&(be.abortHandler=j,J.addEventListener("abort",j,{once:!0})),r[L]=be}).catch(se=>{throw se});try{await m.send(A,U,N===void 0?{r:L}:{r:L,m:N},E(G,N),J);const se=r[L];return se&&Q!==void 0&&(se.timer=setTimeout(()=>{c(L),se.reject(Vi("timeout","request timed out"))},Q)),await q}catch(se){throw c(L),se}},k={request:z,requestMany:async(A,D)=>(La(D.signal),await yi(D.targets.map(async U=>{var N,G;try{const J={peerId:U,status:"fulfilled",value:await z(A,{target:U,...D.metadata===void 0?{}:{metadata:D.metadata},...D.timeoutMs===void 0?{}:{timeoutMs:D.timeoutMs},...D.onProgress===void 0?{}:{onProgress:D.onProgress},...D.signal===void 0?{}:{signal:D.signal}})};return(N=D.onResult)==null||N.call(D,J),J}catch(J){const Q=Yn(J,"request failed");if(Q.kind==="aborted"||!Q.kind)throw Q;const L=Q.kind==="timeout"?{peerId:U,status:"timeout"}:Q.kind==="disconnected"?{peerId:U,status:"disconnected"}:{peerId:U,status:"rejected",error:Q};return(G=D.onResult)==null||G.call(D,L),L}}))),get onRequest(){return w},set onRequest(A){w=A,T()},get onReceiveProgress(){return v.onReceiveProgress},set onReceiveProgress(A){b(A)}};return m.onMessage((A,D,U)=>{const N=Ol(U);N&&I(A,D,N.m,N.r)}),v.action=k,i[p]=v,T(),k},makeInternalAction:a,handleData:o,clearPeer:f}},Bl=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,kl=n=>e=>{let t=n.get(e);return t||(t=ir(20),n.set(e,t)),t},cf=()=>{const n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,r=new Map,s=new Map;return{getStreamKey:kl(n),getTrackKey:kl(e),rememberRemoteStream:(a,o,c)=>{t.set(a,o),c&&i.set(c,o)},getRemoteStream:(a,o)=>t.get(a)??(o?i.get(o):void 0),rememberRemoteTrack:(a,o,c,l,f)=>{const u={track:o,stream:c};r.set(a,u),l&&s.set(l,u),f&&i.set(f,c)},getRemoteTrack:(a,o)=>r.get(a)??(o?s.get(o):void 0),clearRemote:()=>{t.clear(),i.clear(),r.clear(),s.clear()}}},fx=({iterate:n,isActive:e,getSharedMediaPeer:t})=>{const i={},r={},s=cf(),a={onPeerStream:null,onPeerTrack:null},o=(f,u,h,p)=>{var g,_,m;e(f)&&((_=(g=t(f))==null?void 0:g.__trysteroMedia)==null||_.rememberRemoteStream(u,h,typeof h.id=="string"?h.id:void 0),(m=a.onPeerStream)==null||m.call(a,h,f,p))},c=(f,u,h,p,g)=>{var _,m,d;e(f)&&((m=(_=t(f))==null?void 0:_.__trysteroMedia)==null||m.rememberRemoteTrack(u,h,p,typeof h.id=="string"?h.id:void 0,typeof p.id=="string"?p.id:void 0),(d=a.onPeerTrack)==null||d.call(a,h,p,f,g))},l=(f,u,h,p,g,_={})=>{const m={k:u,..._,...h===void 0?{}:{m:h}};return n(f,async(d,v)=>{await p(m,d),g(v)})};return{addStream:(f,u,h)=>l(u.target,s.getStreamKey(f),u.metadata,h,p=>p.addStream(f),{s:f.id}),removeStream:(f,u)=>{n(u,(h,p)=>p.removeStream(f))},addTrack:(f,u,h,p)=>l(h.target,s.getTrackKey(f),h.metadata,p,g=>g.addTrack(f,u),{s:u.id,t:f.id}),removeTrack:(f,u)=>{n(u,(h,p)=>p.removeTrack(f))},replaceTrack:(f,u,h,p)=>l(h.target,s.getTrackKey(u),h.metadata,p,g=>g.replaceTrack(f,u),{t:f.id}),receiveStreamMeta:(f,u)=>{var g,_;if(!e(u))return;const h=Bl(f);if(!h)return;const p=(_=(g=t(u))==null?void 0:g.__trysteroMedia)==null?void 0:_.getRemoteStream(h.key,h.streamId);if(p){o(u,h.key,p,h.metadata);return}(i[u]??(i[u]=[])).push(h)},receiveTrackMeta:(f,u)=>{var g,_;if(!e(u))return;const h=Bl(f);if(!h)return;const p=(_=(g=t(u))==null?void 0:g.__trysteroMedia)==null?void 0:_.getRemoteTrack(h.key,h.trackId);if(p){c(u,h.key,p.track,p.stream,h.metadata);return}(r[u]??(r[u]=[])).push(h)},receiveRemoteStream:(f,u)=>{var p;if(!e(f))return;const h=(p=i[f])==null?void 0:p.shift();h&&o(f,h.key,u,h.metadata)},receiveRemoteTrack:(f,u,h)=>{var g;if(!e(f))return;const p=(g=r[f])==null?void 0:g.shift();p&&c(f,p.key,u,h,p.metadata)},clearPeer:f=>{delete i[f],delete r[f]},get onPeerStream(){return a.onPeerStream},set onPeerStream(f){a.onPeerStream=f},get onPeerTrack(){return a.onPeerTrack},set onPeerTrack(f){a.onPeerTrack=f}}},zl="beforeunload",hx=1e4,Hn=n=>"@_"+n,Sr=new Set,Vl=()=>Sr.forEach(n=>n()),dx=n=>(Sr.add(n),Sr.size===1&&addEventListener(zl,Vl),()=>{Sr.delete(n),Sr.size||removeEventListener(zl,Vl)});var px=(n,e,t,{onPeerHandshake:i,onHandshakeError:r,handshakeTimeoutMs:s=hx,isPassive:a=!1}={})=>{const o={},c={},l={},f={onPeerJoin:null,onPeerLeave:null};let u=Ut,h=null;const p=(A,D,{includePending:U=!1}={})=>(A?Array.isArray(A)?A:[A]:Zt(U?o:c)).flatMap(N=>{const G=U?o[N]:c[N];return G?[Promise.resolve(D(N,G))]:(console.warn(`${cn}: no peer with id ${N} found`),[])}),g=fx({iterate:(A,D)=>p(A,(U,N)=>D(U,N)),isActive:A=>!!c[A],getSharedMediaPeer:A=>o[A]??null}),_=ux({getPeer:(A,D)=>(D?o:c)[A],getPeerIds:A=>Zt(A?o:c),canReceiveFromPeer:(A,D)=>!!(h!=null&&h.canReceiveFromPeer(A,D))}),m=_.makeInternalAction,d=_.handleData,v=_.makeAction,E=(A,D=Qe("peer disconnected"))=>{var N;const U=Yn(D,"peer disconnected");h==null||h.clearPeer(A,U),delete o[A],delete c[A],_.clearPeer(A,U),(N=l[A])==null||N.splice(0).forEach(G=>G.reject(U)),delete l[A],g.clearPeer(A)},b=(A,D,U)=>{var J;const N=o[A];if(!N||D&&N!==D)return;const G=!!c[A];E(A,U),N.destroy(),G&&((J=f.onPeerLeave)==null||J.call(f,A)),e(A)},S=async()=>{await I.send(""),await new Promise(A=>setTimeout(A,99)),di(o).forEach(([A,D])=>{D.destroy(),E(A,Qe("room left"))}),u(),t()},w=m(Hn("ping")),C=m(Hn("pong")),P=m(Hn("signal")),y=m(Hn("stream")),T=m(Hn("track")),I=m(Hn("leave"),{sendToPending:!0,receiveWhilePending:!0}),z=m(Hn("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),k=m(Hn("hsready"),{sendToPending:!0,receiveWhilePending:!0});return h=$_({...i===void 0?{}:{onPeerHandshake:i},...r===void 0?{}:{onHandshakeError:r},handshakeTimeoutMs:s,sendHandshakeData:z.send,sendHandshakeReady:k.send,onActivate:(A,D)=>{var U;c[A]=D,(U=f.onPeerJoin)==null||U.call(f,A)},onFailure:(A,D,U)=>b(A,D,U)}),w.onMessage((A,D)=>C.send("",D)),C.onMessage((A,D)=>{var N;const U=l[D];(N=U==null?void 0:U.shift())==null||N.resolve(),U&&!U.length&&delete l[D]}),P.onMessage((A,D)=>{var U;c[D]&&((U=o[D])==null||U.signal(A))}),y.onMessage((A,D)=>g.receiveStreamMeta(A,D)),T.onMessage((A,D)=>g.receiveTrackMeta(A,D)),I.onMessage((A,D)=>b(D,void 0,Qe("peer left room"))),z.onMessage((A,D,U)=>h==null?void 0:h.receiveHandshakeData(A,D,U)),k.onMessage((A,D)=>h==null?void 0:h.receiveHandshakeReady(D)),n((A,D)=>{const U=o[D];if(U){if(U===A)return;U.destroy(),E(D,Qe("peer replaced"))}o[D]=A,h==null||h.addPeer(D,A),A.setHandlers({data:N=>d(D,N),stream:N=>g.receiveRemoteStream(D,N),track:(N,G)=>g.receiveRemoteTrack(D,N,G),signal:N=>{c[D]&&P.send(N,D)},close:()=>b(D,A,Qe("peer disconnected")),error:N=>{console.error(`${cn} peer error:`,N),b(D,A,N)}}),h==null||h.start(D,A)}),tf&&(u=dx(()=>S().catch(Ut))),{makeAction:v,leave:S,ping:async A=>{if(!c[A])throw Qe(`no active peer with id ${A}`);const D=Date.now();return await new Promise((U,N)=>{const G=l[A]??(l[A]=[]),J=()=>{const L=l[A];if(!L)return;const q=L.indexOf(Q);q>-1&&L.splice(q,1),L.length||delete l[A]},Q={resolve:()=>{J(),U()},reject:L=>{J(),N(L)}};G.push(Q),w.send("",A).catch(L=>Q.reject(Yn(L,"peer disconnected")))}),Date.now()-D},isPassive:()=>a,getPeers:()=>nf(di(c).map(([A,D])=>[A,D.connection])),addStream:(A,D={})=>g.addStream(A,D,y.send),removeStream:(A,D={})=>{g.removeStream(A,D.target)},addTrack:(A,D,U={})=>g.addTrack(A,D,U,T.send),removeTrack:(A,D={})=>{g.removeTrack(A,D.target)},replaceTrack:(A,D,U={})=>g.replaceTrack(A,D,U,T.send),get onPeerJoin(){return f.onPeerJoin},set onPeerJoin(A){f.onPeerJoin=A,A&&Zt(c).forEach(D=>A(D))},get onPeerLeave(){return f.onPeerLeave},set onPeerLeave(A){f.onPeerLeave=A},get onPeerStream(){return g.onPeerStream},set onPeerStream(A){g.onPeerStream=A},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(A){g.onPeerTrack=A}}};const lf=1,uf=2,Gl=(n,e)=>{const t=jn(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=lf,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},mx=(n,e)=>{const t=jn(n),i=new Uint8Array(4+t.byteLength);return i[0]=uf,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},gx=n=>{const e=new Uint8Array(n);if(e.byteLength<3)return null;if(e[0]===lf){const r=(e[1]??0)<<8|(e[2]??0),s=3+r;return r<=0||e.byteLength<s?null:{type:"room",roomToken:hi(e.subarray(3,s)),payload:e.subarray(s).slice().buffer}}if(e[0]!==uf||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),i=4+t;return t<=0||e.byteLength<i?null:{type:"presence",roomToken:hi(e.subarray(4,i)),isPresent:e[1]===1}},ff=n=>{const{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||(t==null?void 0:t.readyState)==="closing"||(t==null?void 0:t.readyState)==="closed"},_x=n=>{if(ff(n))return"stale";const{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"};var xx=class{constructor(){Dt(this,"byApp",{});Dt(this,"roomPresenceHandlers",{})}getMap(n){var e;return(e=this.byApp)[n]??(e[n]={})}get(n,e){var t;return(t=this.byApp[n])==null?void 0:t[e]}isPeerStale(n){return ff(n)}getHealth(n){return this.isPeerStale(n)?"stale":"live"}setRoomPresenceHandler(n,e){return this.roomPresenceHandlers[n]=e,()=>{this.roomPresenceHandlers[n]===e&&delete this.roomPresenceHandlers[n]}}sendRoomPresence(n,e,t){n.isClosing||n.peer.isDead||n.peer.sendData(mx(e,t))}clear(n,e,{destroyPeer:t}){const i=this.byApp[n],r=i==null?void 0:i[e];if(!r||r.isClosing)return;r.idleTimer=st(r.idleTimer),r.isClosing=!0,t&&!r.peer.isDead&&r.peer.destroy();const s=Wi(r.bindings);r.bindings={},r.bindingsByToken={},r.controlRoomId=null,delete i[e],s.forEach(a=>{var o,c;(c=(o=a.handlers).close)==null||c.call(o),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),r.media.clearRemote(),r.pendingDataByToken.clear(),r.remoteRoomTokens.clear(),Zt(i).length===0&&delete this.byApp[n]}register(n,e,t,i){const r=this.getMap(n),s=r[e];if(s){if(s.idleTimer=st(s.idleTimer),s.peer===t)return s;this.clear(n,e,{destroyPeer:!0})}const a={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:cf(),idleMs:i,isClosing:!1};return t.setHandlers({data:o=>this.dispatchData(a,o),signal:o=>this.dispatchSignal(a,o),close:()=>this.clear(n,e,{destroyPeer:!1}),error:o=>{console.error(`${cn} peer error:`,o),this.clear(n,e,{destroyPeer:!1})},track:(o,c)=>this.dispatchTrack(a,o,c)}),r[e]=a,a}bind(n,e,t,{onDetach:i}){const r=t.bindings[n];if(r)return t.idleTimer=st(t.idleTimer),{proxy:r.proxy,isNew:!1};const s={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Ut,proxy:{}},a=()=>{t.bindings[n]&&(this.pruneRoomOwnership(t,n),delete t.bindings[n],s.roomToken&&t.bindingsByToken[s.roomToken]===s&&delete t.bindingsByToken[s.roomToken],t.controlRoomId===n&&(t.controlRoomId=Zt(t.bindings)[0]??null),i(),this.scheduleIdleTimer(t))},o={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!s.roomToken){s.pendingSendData.push(c);return}t.peer.sendData(Gl(s.roomToken,c))},destroy:()=>a(),setHandlers:c=>{const{signal:l,...f}=c;Object.assign(s.handlers,f),l&&(s.handlers.signal=l),this.flushBindingQueues(s)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,f=l.size===0;l.add(n),t.streamOwners.set(c,l),f&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(n),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const f=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=f.rooms.size===0;return f.stream=l,f.rooms.add(n),t.trackOwners.set(c,f),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(h=>h.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(n),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const f=t.trackOwners.get(c);if(f){t.trackOwners.delete(c);const u=t.trackOwners.get(l)??{stream:f.stream,rooms:new Set};f.rooms.forEach(h=>u.rooms.add(h)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return s.proxy=o,s.detach=a,t.bindings[n]=s,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=st(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[n]!==s)return;s.roomToken=c,t.bindingsByToken[c]=s;const l=t.pendingDataByToken.get(c);l!=null&&l.length&&(s.pendingData.push(...l),t.pendingDataByToken.delete(c)),s.pendingSendData.splice(0).forEach(f=>t.peer.sendData(Gl(c,f))),this.flushBindingQueues(s)}),{proxy:o,isNew:!0}}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>{t.delete(e),t.size===0&&(n.streamOwners.delete(i),n.peer.removeStream(i))}),n.trackOwners.forEach((t,i)=>{t.rooms.delete(e),t.rooms.size===0&&(n.trackOwners.delete(i),n.peer.removeTrack(i))})}scheduleIdleTimer(n){n.isClosing||Zt(n.bindings).length>0||(n.idleTimer=st(n.idleTimer),n.idleTimer=setTimeout(()=>{var t;const e=(t=this.byApp[n.appId])==null?void 0:t[n.peerId];!e||Zt(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){const t=n.bindings[n.controlRoomId];if(t!=null&&t.handlers.signal)return t}const e=Wi(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n){const{handlers:e}=n;e.data&&n.pendingData.length>0&&n.pendingData.splice(0).forEach(t=>{var i;return(i=e.data)==null?void 0:i.call(e,t)}),(e.track||e.stream)&&n.pendingTracks.length&&n.pendingTracks.splice(0).forEach(({track:t,stream:i})=>{var r,s;(r=e.track)==null||r.call(e,t,i),(s=e.stream)==null||s.call(e,i)})}dispatchData(n,e){var r,s;const t=gx(e);if(!t)return;if(t.type==="presence"){t.isPresent?n.remoteRoomTokens.add(t.roomToken):n.remoteRoomTokens.delete(t.roomToken),(s=(r=this.roomPresenceHandlers)[n.appId])==null||s.call(r,n.peerId,t.roomToken,t.isPresent);return}const i=n.bindingsByToken[t.roomToken];if(!i){const a=n.pendingDataByToken.get(t.roomToken)??[];a.push(t.payload),n.pendingDataByToken.set(t.roomToken,a);return}i.handlers.data?i.handlers.data(t.payload):i.pendingData.push(t.payload)}dispatchSignal(n,e){var t,i,r;(r=(t=this.getSignalBinding(n))==null?void 0:(i=t.handlers).signal)==null||r.call(i,e)}dispatchTrack(n,e,t){Wi(n.bindings).forEach(i=>{var r,s,a,o;if(i.handlers.track||i.handlers.stream){(s=(r=i.handlers).track)==null||s.call(r,e,t),(o=(a=i.handlers).stream)==null||o.call(a,t);return}i.pendingTracks.push({track:e,stream:t})})}};const vx=23333,yx=12,Sx=7533,Mx=23333,Bo="__legacy__",Ds="offer-placeholder",Ex=["offer","answer","candidate"],bx=n=>{if(typeof n=="string")try{const e=Qi(n);return e&&typeof e=="object"?e:null}catch{return null}return n&&typeof n=="object"?n:null},xr=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,Tx=n=>Ex.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),hf=(n,e,t,i,r,s)=>{n.toCipher(e).then(a=>{n.isLeaving()||!s()||i(t,qt(r(a.sdp)))})},wx=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),Ax=n=>{var e;return[...n.turnConfig??[],...((e=n.rtcConfig)==null?void 0:e.iceServers)??[]].some(({urls:t})=>(Array.isArray(t)?t:[t]).some(i=>/^turns?:/i.test(i)))},Rx=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${Ax(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Vs=(n,e,t)=>{var i;n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,(i=n.onJoinError)==null||i.call(n,{error:Rx(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},Nr=(n,e)=>n[e]??(n[e]=wx()),Jt=n=>{n.connectedPeer?n.status="connected":n.answeringPeer?n.status="answering":n.offerPeer||n.offerRelays.some(Boolean)?n.status="offering":n.status="idle"},bs=(n,e)=>{n.answeringPeer===e&&(n.answeringExpiryTimer=st(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,Jt(n))},ko=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,Jt(n))},lc=(n,e)=>{n.offerRelayTimers[e]=st(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0,Jt(n))},Hl=(n,e)=>{(n==null?void 0:n.offerRelays[e])===Ds&&lc(n,e)},Cx=n=>{if(n.isDead||n.connection.connectionState==="closed")return!0;try{return!!n.connection.remoteDescription}catch{return!0}},Fr=(n,e)=>{const t=n.offerAnswered;n.offerExpiryTimer=st(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((i,r)=>lc(n,r)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(t||Cx(n.offerPeer)?n.offerPeer.isDead||n.offerPeer.destroy():e.recycle(n.offerPeer)),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1,Jt(n)},Px=(n,e,t,i)=>{st(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const r=n.peerStates[t];!r||r.connectedPeer||r.answeringPeer!==i||(r.answerSent&&Vs(n,r,t),i.destroy(),bs(r,i),n.checkDeactivate())},Mx)},Dx=async(n,e,t)=>{const i=t?[t,Bo]:[Bo];for(const r of i){const s=n.pendingCandidates[r];if(s!=null&&s.length){delete n.pendingCandidates[r];for(const a of s)await e.signal(a)}}},df=(n,e,t,i=cc)=>{st(e.offerExpiryTimer);const r=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const s=n.peerStates[t];!s||s.connectedPeer||s.offerId!==r||(s.offerAnswered&&Vs(n,s,t),Fr(s,n.offerPool),n.checkDeactivate())},i)},Lx=(n,e,t,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const r=(await n.offerPool.checkout(1,!1,n.encryptOffer))[0];if(!r)throw Qe("failed to allocate offer peer");const{peer:s,offer:a}=r;e.offerPeer=s,e.offerId=ir(yx),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],Jt(e);const o=()=>{e.offerPeer===s&&!e.connectedPeer&&(e.offerAnswered&&Vs(n,e,t),Fr(e,n.offerPool)),n.disconnectPeer(s,t),n.checkDeactivate()};return s.setHandlers({connect:()=>n.connectPeer(s,t,i),signal:c=>{e.offerPeer===s&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l==null?void 0:l(c)))},close:o,error:o}),df(n,e,t),{peer:s,offer:a,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),Ix=async(n,e,t,i,r)=>{if(i){n.attachSharedPeerToRoom(t,i);return}const s=n.peerStates[t];if(!s||s.connectedPeer||s.answeringPeer||s.offerAnswered){Hl(s,e);return}if(s.offerRelays[e]!==Ds)return;const[a,o]=await yi([Ur(Ir(n.rootTopicPlaintext,t)),Lx(n,s,t,e)]);if(n.isLeaving())return;if(s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerRelays[e]!==Ds){Hl(s,e);return}s.offerRelayTimers[e]=st(s.offerRelayTimers[e]),s.offerRelays[e]=!0,Jt(s),s.offerRelayTimers[e]=setTimeout(()=>Ox(n,t,e),(n.announceIntervals[e]??n.announceIntervalMs)*.9);let c=!1;s.offerSignalRelays[e]=l=>{c&&(n.isLeaving()||s.connectedPeer||s.offerPeer!==o.peer||s.offerId!==o.offerId||l.type!=="candidate"||hf(n,l,a,r,f=>({peerId:on,offerId:o.offerId,candidate:f,...n.isPassive?{passive:!0}:{}}),()=>!s.connectedPeer&&s.offerPeer===o.peer&&s.offerId===o.offerId))},r(a,qt({peerId:on,offerId:o.offerId,offer:o.offer,...n.isPassive?{passive:!0}:{}})),c=!0,s.offerSignalBacklog.forEach(l=>{var f,u;return(u=(f=s.offerSignalRelays)[e])==null?void 0:u.call(f,l)})},Ux=async(n,e,t,i,r,s,a)=>{var p;const o=Nr(n.peerStates,t);if(o.answeringPeer||o.offerAnswered)return;const c=!!(o.offerPeer||o.offerRelays.some(Boolean));if((c||s)&&on<t)return;c&&Fr(o,n.offerPool);const l=n.initPeer(!1,n.config);o.answeringPeer=l,o.answerSent=!1,o.connectionErrorReported=!1,Px(n,o,t,l),Jt(o);const f=()=>{o.answeringPeer===l&&!o.connectedPeer&&o.answerSent&&Vs(n,o,t),bs(o,l),n.disconnectPeer(l,t),n.checkDeactivate()};l.setHandlers({connect:()=>n.connectPeer(l,t,e),close:f,error:f});let u;try{u=await n.toPlain({type:"offer",sdp:i})}catch{bs(o,l),(p=n.onJoinError)==null||p.call(n,{error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(l.isDead){bs(o,l);return}const h=await Ur(Ir(n.rootTopicPlaintext,t));n.isLeaving()||(l.setHandlers({signal:g=>{n.isLeaving()||o.answeringPeer!==l||l.isDead||g.type!=="answer"&&g.type!=="candidate"||hf(n,g,h,a,_=>{const m={peerId:on};return g.type==="answer"?(o.answerSent=!0,m.answer=_):m.candidate=_,r&&(m.offerId=r),n.isPassive&&(m.passive=!0),m},()=>o.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await Dx(o,l,r))},Nx=async(n,e,t,i,r)=>{var u;let s;try{s=await n.toPlain({type:rf,sdp:t})}catch{return}const a=Nr(n.peerStates,e),o=i&&(a!=null&&a.offerPeer)&&a.offerId===i?a.offerPeer:null,c=(a==null?void 0:a.answeringPeer)??null,l=!i&&(a!=null&&a.offerPeer)?a.offerPeer:null,f=r&&!r.isDead?r:o??c??l;if(!f||f.isDead){const h=i??Bo;((u=a.pendingCandidates)[h]??(u[h]=[])).push(s);return}f.signal(s)},Fx=async(n,e,t,i,r,s)=>{var o;let a;try{a=await n.toPlain({type:"answer",sdp:i})}catch{(o=n.onJoinError)==null||o.call(n,{error:"incorrect room password when decrypting answer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(s)n.offerPool.claimLeased(s),s.setHandlers({connect:()=>n.connectPeer(s,t,e),close:()=>n.disconnectPeer(s,t)}),s.signal(a);else{const c=n.peerStates[t];if(!c||!c.offerPeer||c.offerAnswered||r&&c.offerId&&r!==c.offerId||c.offerPeer.isDead)return;c.offerAnswered=!0,df(n,c,t,vx),c.offerPeer.signal(a)}},Ox=(n,e,t)=>{const i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(lc(i,t),n.checkDeactivate())},Bx=n=>e=>async(t,i,r)=>{var b;if(n.isLeaving())return;const s=bx(i);if(!s||Tx(s))return;const a=xr(s,"peerId")??"",o=xr(s,"offer"),c=xr(s,"answer"),l=xr(s,"candidate"),f=xr(s,"offerId"),u=s.peer,h=s.hasOutgoingOffer===!0,p=s.passive===!0;if(!a||a===on)return;const[g,_]=await yi([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==g&&t!==_||n.isPassive&&p||(n.isPassive&&!n.isActive&&!c&&!l&&(n.isActive=!0,(b=n.requeueAnnounce)==null||b.call(n)),n.isPassive&&!n.isActive))return;const m=n.peerStates[a],d=m==null?void 0:m.connectedPeer;if(d&&m){const S=_x(d);if(S==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(S==="stale")ko(m);else{const w=Date.now(),C=m.connectedPeerUnhealthySinceMs??w;if(m.connectedPeerUnhealthySinceMs=C,w-C<Sx)return;ko(m)}}let v=n.sharedPeers.get(n.appId,a);v&&n.sharedPeers.getHealth(v.peer)==="stale"&&(n.sharedPeers.clear(n.appId,a,{destroyPeer:!0}),v=void 0);const E=!!(a&&!o&&!c&&!l);if(E&&!v){const S=Nr(n.peerStates,a),w=on<a;if(S.answeringPeer||S.connectedPeer||S.offerAnswered)return;if(!w&&!S.offerPeer){const C=await Ur(Ir(n.rootTopicPlaintext,a));!n.isLeaving()&&!S.connectedPeer&&r(C,qt({peerId:on}));return}if(S.offerRelays[e])return;S.offerRelays[e]=Ds,Jt(S)}if(v&&(o||c||l)){if(v.bindings[n.roomId])return;n.attachSharedPeerToRoom(a,v);return}if(E)return Ix(n,e,a,v,r);if(o)return Ux(n,e,a,o,f,h,r);if(l)return Nx(n,a,l,f,u);if(c)return Fx(n,e,a,c,f,u)},gs=5333,kx=[233,533,1333],zx=7533,Vx=123333;var Gx=({init:n,subscribe:e,announce:t,deactivate:i})=>{const r={},s={},a={},o={},c=new xx,l=()=>Wi(r).some(S=>Zt(S).length>0),f=S=>s[S]??(s[S]={}),u=S=>a[S]??(a[S]={}),h=(S,w,C)=>{c.getHealth(S.peer)==="live"&&c.sendRoomPresence(S,w,C)},p=(S,w)=>{di(s[S]??{}).forEach(([C,P])=>{if(!P.shouldAdvertise())return;const{roomToken:y,roomTokenPromise:T}=P;if(y){h(w,y,!0);return}T.then(I=>{var z;((z=s[S])==null?void 0:z[C])===P&&P.roomToken===I&&(c.get(S,w.peerId)!==w||w.isClosing||P.shouldAdvertise()&&h(w,I,!0))})})},g=(S,w,C)=>Wi(c.getMap(S)).forEach(P=>h(P,w,C)),_=S=>{o[S]||(o[S]=c.setRoomPresenceHandler(S,(w,C,P)=>{var I,z,k;if(!P)return;const y=c.get(S,w),T=(I=a[S])==null?void 0:I[C];!y||!T||(k=(z=s[S])==null?void 0:z[T])==null||k.attachSharedPeerToRoom(w,y)}))},m=S=>{var w;r[S]&&Zt(r[S]).length>0||((w=o[S])==null||w.call(o),delete o[S],delete s[S],delete a[S])};let d=!1,v=[],E=null,b=Ut;return(S,w,C)=>{var Ee,fe;if(!S)throw Qe("requires a config map as the first argument");if(C&&typeof C!="object")throw Qe("third argument must be a callbacks object");const{appId:P}=S,y=C==null?void 0:C.onJoinError,T=C==null?void 0:C.onPeerHandshake,I=C==null?void 0:C.handshakeTimeoutMs;if(!P)throw Qe("config map is missing appId field");if(!w)throw Qe("roomId argument required");if(I!==void 0&&(!Number.isFinite(I)||I<=0))throw Qe("handshakeTimeoutMs must be a positive number");if((Ee=r[P])!=null&&Ee[w])return r[P][w];_(P);const z=Ir(cn,P,w),k=Ur(z),A=Ur(Ir(z,on)),D=k_(S.password??"",P,w),U=z_(P,w),N=S._test_only_sharedPeerIdleMs??Vx;let G=!1;const J=ne=>async le=>({type:le.type,sdp:await ne(D,le.sdp)}),Q=J(G_),L=J(V_),q=c.getMap(P),se=()=>Ll(!0,S);let Ae=!1;E||(E=new X_(se));const be=E,j=async ne=>{const le=await ne.getOffer(Date.now()-ne.created>cc);if(!le||le.type!=="offer")throw Qe("failed to get offer for peer");return(await L(le)).sdp},te=(ne,le)=>{const Z=Nr(Pe.peerStates,ne);Z.answeringExpiryTimer=st(Z.answeringExpiryTimer),Z.answeringPeer=null;const{proxy:ae,isNew:ie}=c.bind(w,U,le,{onDetach:()=>{const de=Pe.peerStates[ne];(de==null?void 0:de.connectedPeer)===le.peer&&(de.connectedPeer=null,de.connectedPeerUnhealthySinceMs=null,Jt(de))}});Z.connectedPeer=le.peer,Z.connectedPeerUnhealthySinceMs=null,Jt(Z),ie&&R(ae,ne),Fr(Z,be)},ve=(ne,le,Z)=>{if(G){ne.destroy();return}const ae=Nr(Pe.peerStates,le);if(ae.connectedPeer){const ce=q[le];if(ce&&ae.connectedPeer===ce.peer&&ce.bindings[w])return;ae.connectedPeer!==ne&&!ne.isDead&&ne.destroy();return}let ie=q[le];if(ie&&c.getHealth(ie.peer)==="stale"&&(c.clear(P,le,{destroyPeer:!0}),ie=void 0),ie&&ie.peer!==ne){ne.isDead||ne.destroy(),te(le,ie);return}const de=!ie;ie||(ie=c.register(P,le,ne,N)),te(le,ie),de&&p(P,ie)},Ie=(ne,le)=>{var ae;if(G)return;const Z=Pe.peerStates[le];(Z==null?void 0:Z.connectedPeer)===ne&&(ko(Z),Xe(),!he&&Ae&&((ae=Pe.requeueAnnounce)==null||ae.call(Pe)))},he=!!S.passive;let Ne=null,et,He=Ut;const Xe=()=>{if(!he||!Pe.isActive)return;let ne=!1;di(Pe.peerStates).forEach(([le,Z])=>{Z.connectedPeer||Z.answeringPeer||Z.offerInitPromise||Z.offerPeer||Z.offerRelays.some(Boolean)?ne=!0:Z.status==="idle"&&delete Pe.peerStates[le]}),ne||(Pe.isActive=!1,et=st(et),Ye.forEach(st),Ye.length=0,He(),Ne!=null&&Ne.roomToken&&g(P,Ne.roomToken,!1))},Pe={appId:P,roomId:w,config:S,peerStates:{},rootTopicPlaintext:z,rootTopicP:k,selfTopicP:A,toPlain:Q,toCipher:L,isLeaving:()=>G,isPassive:he,isActive:!he,onJoinError:y,sharedPeers:c,offerPool:be,encryptOffer:j,initPeer:Ll,connectPeer:ve,disconnectPeer:Ie,attachSharedPeerToRoom:te,checkDeactivate:Xe,announceIntervals:[],announceIntervalMs:gs},Fe={config:S,appId:P,roomId:w,isPassive:he},tt=Bx(Pe);if(!d){const ne=n(S);v=(Array.isArray(ne)?ne:[ne]).map(le=>Promise.resolve(le)),d=!0,b=(fe=S.relayConfig)!=null&&fe.manualReconnection?Ut:F_()}!he&&!be.isActive&&be.warmup(),Pe.announceIntervals=v.map(()=>gs);const F=v.map(()=>gs),lt=v.map(()=>0),qe=v.map(()=>0),Ye=[],Me=v.map(async(ne,le)=>e(await ne,await k,await A,tt(le),Z=>be.getOffers(Z,j),Fe));yi([k,A]).then(([ne,le])=>{if(G)return;const Z=async(ae,ie)=>{var ue;if(G||he&&!Pe.isActive)return;const de=he?{passive:!0}:void 0;let ce;try{ce=await t(ae,ne,le,de,Fe),qe[ie]=0}catch(ye){const oe=qe[ie]??0;oe===0&&((ue=S.relayConfig)==null?void 0:ue.warnOnRelayFailure)!==!1&&console.warn(`${cn}: announce failed - ${Ji(ye,"")}`),qe[ie]=oe+1}if(G||he&&!Pe.isActive||ce&&typeof ce!="number"&&"stopAnnouncing"in ce)return;typeof ce=="number"?(Pe.announceIntervals[ie]=ce,F[ie]=ce):ce&&(F[ie]=ce.nextAnnounceMs,Ae||(Ae=ce.reannounceOnDisconnect===!0));const ke=lt[ie]??0;lt[ie]=ke+1;const O=F[ie]??gs,ge=kx[ke];Ye[ie]=setTimeout(()=>{Z(ae,ie)},typeof ge=="number"?Math.min(O,ge):O)};He=()=>{i&&v.forEach(async ae=>{const ie=await ae;G||i(ie,ne,le,Fe)})},Pe.requeueAnnounce=()=>{Ye.forEach(st),Ye.length=0,et=st(et),be.isActive||be.warmup(),Ne!=null&&Ne.roomToken&&g(P,Ne.roomToken,!0),et=setTimeout(Xe,zx),v.forEach(async(ae,ie)=>{const de=await ae;de&&!G&&(lt[ie]=0,Z(de,ie))})},Me.forEach(async(ae,ie)=>{if(await ae,G)return;const de=await v[ie];de&&!G&&(!he||Pe.isActive)&&Z(de,ie)})});let R=Ut;const{compose:x}=q_(S.password??"",P,w),B=x(T),$={...B?{onPeerHandshake:B}:{},...I===void 0?{}:{handshakeTimeoutMs:I},isPassive:he,onHandshakeError:(ne,le)=>y==null?void 0:y({error:le.replace(/^handshake failed: /,""),appId:P,peerId:ne,roomId:w})};r[P]??(r[P]={});const ee=f(P),K=px(ne=>R=ne,ne=>{if(G)return;const le=Pe.peerStates[ne];le!=null&&le.connectedPeer&&(le.connectedPeer=null,Jt(le),Xe())},()=>{var le,Z;G=!0,R=Ut;const ne=(le=s[P])==null?void 0:le[w];ne!=null&&ne.roomToken&&(g(P,ne.roomToken,!1),(Z=a[P])==null||delete Z[ne.roomToken],a[P]&&!Zt(a[P]).length&&delete a[P]),s[P]&&(delete s[P][w],Zt(s[P]).length||delete s[P]),di(Pe.peerStates).forEach(([ae,ie])=>{if(ie.answeringExpiryTimer=st(ie.answeringExpiryTimer),ie.connectedPeer&&!ie.connectedPeer.isDead){const de=q[ae];(!de||de.peer!==ie.connectedPeer)&&ie.connectedPeer.destroy()}ie.answeringPeer&&!ie.answeringPeer.isDead&&ie.answeringPeer.destroy(),Fr(ie,be),ie.connectedPeer=null,ie.answeringPeer=null,Jt(ie)}),r[P]&&(delete r[P][w],Zt(r[P]).length===0&&delete r[P]),Ye.forEach(st),et=st(et),Me.forEach(async ae=>{(await ae)()}),!l()&&(d=!1,be.destroy(),E=null,b(),m(P))},$);return Ne={roomToken:null,roomTokenPromise:U,attachSharedPeerToRoom:te,shouldAdvertise:()=>!he||Pe.isActive},ee[w]=Ne,U.then(ne=>{var Z;const le=Ne;!le||G||((Z=s[P])==null?void 0:Z[w])!==le||(le.roomToken=ne,u(P)[ne]=w,Wi(q).forEach(ae=>{ae.remoteRoomTokens.has(ne)&&te(ae.peerId,ae)}),(!he||Pe.isActive)&&g(P,ne,!0))}),r[P][w]=K}};const Hx=["offer","answer","candidate"],Wx=6e4,Xx=n=>{if(typeof n=="string")try{const e=Qi(n);return e&&typeof e=="object"?e:null}catch{return null}return n},Ia=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,qx=n=>Hx.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),Yx=n=>{const e=Xx(n);if(!e||qx(e))return!1;const t=Ia(e,"peerId");return!!(t&&t!==on&&e.passive!==!0&&!Ia(e,"answer")&&!Ia(e,"candidate"))},Ua=n=>{if(!n)throw Qe("topic strategy missing room context");return n},Wl=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),Na=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i});var $x=({steadyAnnounceIntervalMs:n=Wx,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:r,unpublishTopic:s})=>Gx({init:t,subscribe:async(a,o,c,l,f,u)=>{const h=Ua(u),p=(S,w)=>void r(a,S,w,Na(h,"signal",o,c));let g=null,_=!1,m=null,d=!1;const v=S=>{_||(_=!0,S())},E=()=>(m||(m=Promise.resolve(i(a,c,(S,w)=>{d||l(S,w,p)},Wl(h,"self",o,c))).then(S=>{g=S,d&&v(S)})),m);h.isPassive||await E();const b=await i(a,o,async(S,w)=>{d||(h.isPassive&&Yx(w)&&await E(),d||await l(S,w,p))},Wl(h,"root",o,c));return()=>{d=!0,g&&v(g),b()}},announce:async(a,o,c,l,f)=>{const u=Ua(f),h=await r(a,o,qt({peerId:on,...l}),Na(u,"announce",o,c));return typeof h=="number"||h!==void 0&&"stopAnnouncing"in h?h:{nextAnnounceMs:(h==null?void 0:h.nextAnnounceMs)??n,reannounceOnDisconnect:(h==null?void 0:h.reannounceOnDisconnect)??e}},...s?{deactivate:(a,o,c,l)=>{const f=Ua(l);return s(a,o,Na(f,"announce",o,c))}}:{}});const Kx=N_(n=>n.socket),jx=5,pf="x",mf="EVENT",{secretKey:Zx,publicKey:Jx}=ef.keygen(),Qx=Lr(Jx),ev={},tv={},Fa={},Xl=250,Ls=6e4,nv=15*6e4,iv=5333,Or=new WeakMap,zo=new WeakSet,pi=new WeakMap,ql=n=>{const e=Or.get(n),t=Math.min(e!=null&&e.delayMs?Math.max(Ls,e.delayMs*2):Ls,nv);return Or.set(n,{delayMs:t,untilMs:Date.now()+t}),t},rv=n=>{const e=Or.get(n);if(!e)return 0;const t=e.untilMs-Date.now();return t>0?t:0},Oa=n=>({nextAnnounceMs:n}),sv={stopAnnouncing:!0},av=n=>{var t;if(zo.has(n))return!1;const e=pi.get(n);return e&&(clearTimeout(e.timer),pi.delete(n)),zo.add(n),Or.delete(n),(t=n.close)==null||t.call(n),!0},ov=(n,e)=>{const t=pi.get(n);t&&(clearTimeout(t.timer),t.eventIds.add(e));const i=(t==null?void 0:t.eventIds)??new Set([e]),r=setTimeout(()=>{pi.delete(n)},iv);pi.set(n,{eventIds:i,timer:r})},cv=(n,e)=>{const t=pi.get(n);return t!=null&&t.eventIds.has(e)?(clearTimeout(t.timer),pi.delete(n),!0):!1},gf=()=>Math.floor(Date.now()/1e3),_f=n=>Fa[n]??(Fa[n]=sf(n,1e4)+2e4),lv=async(n,e)=>{const t={kind:_f(n),tags:[[pf,n]],created_at:gf(),content:e,pubkey:Qx},i=await zs("SHA-256",qt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return qt([mf,{...t,id:Lr(i),sig:Lr(await ef.signAsync(i,Zx))}])},Ln={},xf=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},uv=(n,e,t)=>{var r;const i=Ln[r=n.url]??(Ln[r]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});i.topics.set(e,t),vf(n,i)},fv=(n,e)=>{const t=Ln[n.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),xf(t),t.subIds.forEach(i=>n.send(qt(["CLOSE",i]))),delete Ln[n.url]):vf(n,t))},vf=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{yf(n)}finally{xf(e)}},0))},hv=n=>{const e=Ln[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},yf=n=>{const e=Ln[n.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],i=[],r=gf();for(let s=0;s<t.length;s+=Xl)i.push(t.slice(s,s+Xl));for(;e.subIds.length>i.length;){const s=e.subIds.pop();s&&n.send(qt(["CLOSE",s]))}i.forEach((s,a)=>{var c;const o=(c=e.subIds)[a]??(c[a]=ir(64));n.send(qt(["REQ",o,{kinds:[...new Set(s.map(_f))],since:r,"#x":s}]))})},dv=n=>{const e=Ln[n.url];e&&e.topics.size>0&&yf(n)},pv=$x({init:n=>D_(n,mv,jx,!0).map(e=>{const t=Kx.register(e,()=>U_(e,i=>{var c,l;const[r,s,a,o]=Qi(i);if(r!==mf){const f=`${cn}: relay failure from ${t.url} - `,u=r==="CLOSED"&&typeof a=="string"?a:o,h=r==="OK"&&a===!1,p=h&&(u==null?void 0:u.startsWith("rate-limited:")),g=h&&(u==null?void 0:u.startsWith("duplicate:")),_=r==="CLOSED"||h&&!p&&!g,m=r==="OK"&&cv(t,s);if(_&&!av(t))return;p?ql(t):m&&Or.delete(t),!g&&((c=n.relayConfig)==null?void 0:c.warnOnRelayFailure)!==!1&&(r==="NOTICE"?console.warn(f+s):(h||r==="CLOSED")&&console.warn(f+u));return}if(a&&typeof a=="object"&&"content"in a){const{content:f}=a,u=tv[s];if(u){u(ev[s]??"",f);return}const h=Ln[t.url];if(h!=null&&h.subIds.includes(s)&&a.tags){const p=a.tags.find(g=>g[0]===pf);p!=null&&p[1]&&((l=h.topics.get(p[1]))==null||l(p[1],f))}}},()=>dv(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{uv(n,e,(a,o)=>void t(a,o));const s=()=>{fv(n,e)};return i.kind==="root"?hv(n).then(()=>s):s},publishTopic:async(n,e,t,i)=>{if(zo.has(n)||n.isClosed)return i.kind==="announce"?sv:void 0;if(i.kind==="announce"){const o=rv(n);if(o>0)return Oa(Math.max(Ls,o))}const r=await lv(e,typeof t=="string"?t:qt(t)),s=n.socket.readyState===1;if(n.send(r),i.kind!=="announce")return;if(!s)return Oa(ql(n));const a=Qi(r)[1].id;return ov(n,a),Oa(Ls)}}),mv=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(n=>"wss://"+n);class gv{constructor(e,t,i="P2",r="#00f5ff"){this.scene=e,this.peerId=t,this.tag=(i||"P2").slice(0,5).toUpperCase(),this.colorHex=r,this.colorNum=parseInt(r.replace("#","0x"),16)||62975,this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetPosition=new H(0,0,7.5),this.targetRotation=Math.PI,this.isMoving=!1,this.walkCycle=0,this.statusText="ONLINE",this.lastActiveTime=Date.now(),this.createAvatarMesh(),this.createNameTagSprite()}createAvatarMesh(){this.group=new Xn,this.group.position.set(this.x,this.y,this.z);const e=new _n(.38,.32,.8,16),t=new bt({color:this.colorNum,roughness:.3,metalness:.3,emissive:this.colorNum,emissiveIntensity:.15});this.torso=new Ce(e,t),this.torso.position.y=.85,this.group.add(this.torso);const i=new dt(.04,.78,.05),r=new vt({color:16777215}),s=new Ce(i,r);s.position.set(0,.85,.35),this.group.add(s);const a=new _i(.42,24,24),o=new bt({color:1711406,roughness:.2,metalness:.8});this.helmet=new Ce(a,o),this.helmet.position.y=1.6,this.group.add(this.helmet);const c=new _i(.36,24,16,0,Math.PI*2,0,Math.PI*.45),l=new bt({color:this.colorNum,roughness:.1,metalness:.9,emissive:this.colorNum,emissiveIntensity:.3}),f=new Ce(c,l);f.rotation.x=Math.PI*.5,f.position.set(0,1.6,.12),this.group.add(f);const u=new _n(.12,.1,.65,12),h=new bt({color:658454,roughness:.5});this.leftLeg=new Ce(u,h),this.leftLeg.position.set(-.18,.35,0),this.group.add(this.leftLeg),this.rightLeg=new Ce(u,h),this.rightLeg.position.set(.18,.35,0),this.group.add(this.rightLeg);const p=new dt(.18,.16,.28),g=new bt({color:this.colorNum,roughness:.3}),_=new Ce(p,g);_.position.set(0,-.28,.05),this.leftLeg.add(_);const m=new Ce(p,g);m.position.set(0,-.28,.05),this.rightLeg.add(m);const d=new Us(.55,16),v=new vt({color:0,transparent:!0,opacity:.4}),E=new Ce(d,v);E.rotation.x=-Math.PI*.5,E.position.y=.02,this.group.add(E),this.scene.add(this.group)}createNameTagSprite(){const e=document.createElement("canvas");e.width=320,e.height=110,this.nameCanvas=e,this.nameCtx=e.getContext("2d"),this.renderNameTagCanvas();const t=new gi(e);t.minFilter=yt,t.magFilter=yt,this.nameTexture=t;const i=new ec({map:t,transparent:!0,depthTest:!1});this.nameSprite=new Mu(i),this.nameSprite.position.set(0,2.35,0),this.nameSprite.scale.set(1.6,.55,1),this.group.add(this.nameSprite)}renderNameTagCanvas(){const e=this.nameCtx,t=this.nameCanvas.width,i=this.nameCanvas.height;e.clearRect(0,0,t,i),e.fillStyle="rgba(8, 9, 16, 0.88)",e.strokeStyle=this.colorHex,e.lineWidth=4;const r=24;e.beginPath(),e.roundRect(10,10,t-20,i-20,r),e.fill(),e.stroke(),e.font='bold 36px "Press Start 2P", monospace, sans-serif',e.fillStyle="#ffd32a",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffd32a",e.shadowBlur=8,e.fillText(this.tag,t/2,42),e.shadowBlur=0,e.font='bold 16px "Outfit", sans-serif',e.fillStyle=this.colorHex,e.fillText(this.statusText,t/2,78),this.nameTexture&&(this.nameTexture.needsUpdate=!0)}setTelemetry(e,t,i,r){this.targetPosition.set(e,0,t),this.targetRotation=i,this.isMoving=!!r,this.lastActiveTime=Date.now(),this.isMoving&&this.statusText==="ONLINE"?(this.statusText="ANDANDO",this.renderNameTagCanvas()):!this.isMoving&&this.statusText==="ANDANDO"&&(this.statusText="ONLINE",this.renderNameTagCanvas())}setActivity(e){this.statusText=e.slice(0,14).toUpperCase(),this.renderNameTagCanvas()}update(e,t){if(!this.group)return;this.group.position.lerp(this.targetPosition,.22);let i=this.targetRotation-this.group.rotation.y;for(;i<-Math.PI;)i+=Math.PI*2;for(;i>Math.PI;)i-=Math.PI*2;if(this.group.rotation.y+=i*.22,this.isMoving){this.walkCycle+=e*10;const r=Math.sin(this.walkCycle)*.45;this.leftLeg.rotation.x=r,this.rightLeg.rotation.x=-r,this.torso.position.y=.85+Math.abs(Math.sin(this.walkCycle*2))*.04,this.helmet.position.y=1.6+Math.abs(Math.sin(this.walkCycle*2))*.04}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.torso.position.y=.85,this.helmet.position.y=1.6;this.nameSprite&&t&&this.nameSprite.quaternion.copy(t.quaternion)}dispose(){this.group&&this.scene&&(this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))}}class _v{constructor(e,t,i){this.scene=e,this.identity=t,this.scoreTicker=i,this.peers=new Map,this.room=null,this.sendPos=null,this.sendId=null,this.sendAct=null,this.sendScore=null,this.hudEl=null,this.createHud(),this.connect()}createHud(){let e=document.getElementById("mp-network-hud");e&&e.remove(),e=document.createElement("div"),e.id="mp-network-hud",e.style.cssText=`
      position: absolute;
      top: 14px;
      right: 14px;
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 8px;
      pointer-events: auto;
    `,e.innerHTML=`
      <div id="mp-players-badge" style="
        background: rgba(14, 14, 24, 0.88);
        border: 1px solid #00f5ff;
        backdrop-filter: blur(10px);
        padding: 6px 14px;
        border-radius: 20px;
        color: #00f5ff;
        font-family: 'Press Start 2P', monospace;
        font-size: 9px;
        font-weight: 800;
        box-shadow: 0 0 15px rgba(0, 245, 255, 0.3);
        display: flex;
        align-items: center;
        gap: 6px;
      ">
        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #00ff88; box-shadow: 0 0 8px #00ff88;"></span>
        <span id="mp-count-text">1/10 ONLINE</span>
      </div>
    `,document.body.appendChild(e),this.hudEl=e}updateHudCount(){const e=document.getElementById("mp-count-text");if(e){const t=this.peers.size+1;e.textContent=`${t}/10 ONLINE`}}connect(){try{const e={appId:"nopex-arcade-webrtc-v1"},t="nopex-main-hub";this.room=pv(e,t),this.posAction=this.room.makeAction("pos"),this.idAction=this.room.makeAction("id"),this.actAction=this.room.makeAction("act"),this.scoreAction=this.room.makeAction("score"),this.room.onPeerJoin=i=>{console.log(`[WebRTC] Peer connected: ${i}`),this.idAction&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:i}),this.updateHudCount()},this.room.onPeerLeave=i=>{console.log(`[WebRTC] Peer disconnected: ${i}`);const r=this.peers.get(i);r&&(r.dispose(),this.peers.delete(i)),this.updateHudCount()},this.idAction.onMessage=(i,{peerId:r})=>{if(!(!i||!i.tag))if(this.peers.has(r)){const s=this.peers.get(r);s.tag=i.tag.slice(0,5).toUpperCase(),s.colorHex=i.colorHex||"#00f5ff",s.renderNameTagCanvas()}else{if(this.peers.size>=9)return;const s=new gv(this.scene,r,i.tag,i.colorHex);this.peers.set(r,s),this.updateHudCount()}},this.posAction.onMessage=(i,{peerId:r})=>{if(!i)return;const s=this.peers.get(r);s&&s.setTelemetry(i.x,i.z,i.r,i.m)},this.actAction.onMessage=(i,{peerId:r})=>{if(!i)return;const s=this.peers.get(r);s&&s.setActivity(i.status||"ONLINE")},this.scoreAction.onMessage=i=>{i&&this.scoreTicker&&this.scoreTicker.showRecord(i.player,i.game,i.score)}}catch(e){console.warn("[WebRTC] Connection failed, operating in offline hub mode:",e)}}broadcastIdentity(){this.idAction&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex})}broadcastLocalPosition(e,t,i,r){this.posAction&&this.posAction.send({x:Math.round(e*100)/100,z:Math.round(t*100)/100,r:Math.round(i*100)/100,m:!!r})}broadcastActivity(e){this.actAction&&this.actAction.send({status:e})}broadcastHighScore(e,t){this.scoreAction&&(this.scoreAction.send({player:this.identity.tag,game:e,score:t,time:Date.now()}),this.scoreTicker&&this.scoreTicker.showRecord(this.identity.tag,e,t))}update(e,t){this.peers.forEach(i=>{i.update(e,t)})}}class xv{constructor(e,t,i=null){this.container=e,this.gamesManifest=t,this.identity=i,this.isRunning=!1,this.isZoomingIn=!1,this.zoomTarget=null,this.zoomProgress=0,this.initScene(),this.initWorld(),this.initPlayer(),this.initInteraction(),this.initOverlay(),this.initNetwork(),this.initMobileControls(),this.initTapToWalk(),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>{setTimeout(()=>this.onResize(),150)})}initScene(){this.scene=new Bh,this.scene.background=new Ke(856619),this.scene.fog=new Qo(856619,40,95);const e=this.container.clientWidth||window.innerWidth||1280,t=this.container.clientHeight||window.innerHeight||720;this.camera=new Wt(52,e/t,.1,200),this.camera.position.set(0,4.2,13.5),this.renderer=new j0({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.container.appendChild(this.renderer.domElement),this.clock=new Qh,this.raycaster=new ed;const i=new ji(.5,.75,32),r=new vt({color:62975,side:Ot,transparent:!0,opacity:0});this.destinationRing=new Ce(i,r),this.destinationRing.rotation.x=-Math.PI/2,this.destinationRing.position.set(0,.05,0),this.scene.add(this.destinationRing),this.destinationPulse=0}initWorld(){this.world=r_(this.scene,this.gamesManifest)}initPlayer(){this.player=new Q0(this.scene,this.identity)}initInteraction(){this.interaction=new s_(this.world.cabinets,(e,t)=>{this.launchGame(e,t)})}initOverlay(){this.overlay=new a_(()=>{this.isZoomingIn=!1,this.zoomTarget=null,this.zoomProgress=0,this.network&&this.network.broadcastActivity("ONLINE")})}initNetwork(){this.scoreTicker=new o_,this.network=new _v(this.scene,this.identity||{tag:"MARC1",color:62975,colorHex:"#00f5ff"},this.scoreTicker),window.__ARCADE_NETWORK__=this.network}setPlayerIdentity(e){this.identity=e,this.player&&this.player.setIdentity(e),this.network&&(this.network.identity=e,this.network.broadcastIdentity())}launchGame(e,t){this.isZoomingIn=!0,this.zoomTarget=t,this.zoomProgress=0,this.network&&this.network.broadcastActivity(e.title),setTimeout(()=>{this.overlay.open(e)},550)}teleportToCabinet(e){const t=this.world.cabinets.find(i=>i.game.id===e);t&&(this.player.clearNavigationTarget(),this.player.x=t.standSpot.x,this.player.z=t.standSpot.z,this.player.rotation=t.rotationY+Math.PI,this.player.targetRotation=this.player.rotation,this.interaction.update(this.player))}showDestinationPulse(e,t){this.destinationRing.position.set(e,.04,t),this.destinationRing.scale.set(.6,.6,.6),this.destinationRing.material.opacity=.9,this.destinationPulse=1}initTapToWalk(){let e=0,t=0,i=0;const r=o=>{e=performance.now(),t=o.clientX,i=o.clientY},s=o=>{const c=performance.now()-e,l=Math.abs(o.clientX-t),f=Math.abs(o.clientY-i);if(c>380||l>20||f>20||o.target.closest(".nopex-hud-header, .arcade-mobile-joystick, .arcade-mobile-dpad, .arcade-mobile-action-btn, .arcade-hologram-card, .arcade-game-overlay, .mobile-teleport-drawer"))return;const h=this.renderer.domElement.getBoundingClientRect(),p=(o.clientX-h.left)/h.width*2-1,g=-((o.clientY-h.top)/h.height)*2+1;this.raycaster.setFromCamera({x:p,y:g},this.camera);let _=null,m=1/0;for(const d of this.world.cabinets){const v=this.raycaster.intersectObjects(d.group.children,!0);v.length>0&&v[0].distance<m&&(m=v[0].distance,_=d)}if(_){this.showDestinationPulse(_.standSpot.x,_.standSpot.z),this.player.setNavigationTarget(_.standSpot.x,_.standSpot.z,()=>{this.interaction.update(this.player)});return}if(this.world.floorMesh){const d=this.raycaster.intersectObject(this.world.floorMesh);if(d.length>0){const v=d[0].point,E=this.world.roomBounds,b=Math.max(E.minX+.5,Math.min(E.maxX-.5,v.x)),S=Math.max(E.minZ+.5,Math.min(E.maxZ-.5,v.z));this.showDestinationPulse(b,S),this.player.setNavigationTarget(b,S,()=>{this.interaction.update(this.player)})}}},a=this.renderer.domElement;a.addEventListener("pointerdown",r),a.addEventListener("pointerup",s)}initMobileControls(){("ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches)&&document.body.classList.add("touch-device");const t=document.getElementById("arcade-joystick"),i=document.getElementById("joystick-thumb");if(!t||!i)return;let r=null,s=0,a=0;const o=45,c=t.querySelector(".arrow-up"),l=t.querySelector(".arrow-down"),f=t.querySelector(".arrow-left"),u=t.querySelector(".arrow-right"),h=(d,v)=>{c&&c.classList.toggle("active",v<-12),l&&l.classList.toggle("active",v>12),f&&f.classList.toggle("active",d<-12),u&&u.classList.toggle("active",d>12)},p=d=>{if(!(this.overlay&&this.overlay.isOpen))for(let v=0;v<d.changedTouches.length;v++){const E=d.changedTouches[v],b=t.getBoundingClientRect(),S=E.clientX>=b.left&&E.clientX<=b.right&&E.clientY>=b.top&&E.clientY<=b.bottom,w=E.clientX<=window.innerWidth*.55&&E.clientY>=window.innerHeight*.4;if(r===null&&(S||w)){if(E.target&&E.target.closest&&E.target.closest(".nopex-hud-header, .mobile-teleport-drawer, .arcade-mobile-action-btn, #arcade-game-overlay"))continue;d.preventDefault(),r=E.identifier,S?(s=b.left+b.width/2,a=b.top+b.height/2):(s=E.clientX,a=E.clientY,t.style.left=`${Math.max(12,Math.min(window.innerWidth-130,s-b.width/2))}px`,t.style.bottom=`${Math.max(12,Math.min(window.innerHeight-130,window.innerHeight-a-b.height/2))}px`),t.classList.add("active"),this.player.clearNavigationTarget();break}}},g=d=>{if(r!==null)for(let v=0;v<d.changedTouches.length;v++){const E=d.changedTouches[v];if(E.identifier===r){d.preventDefault();let b=E.clientX-s,S=E.clientY-a;const w=Math.hypot(b,S);w>o&&(b=b/w*o,S=S/w*o),i.style.transform=`translate(${b}px, ${S}px)`,h(b,S),this.player.setJoystickVector(b/o,S/o);break}}},_=d=>{for(let v=0;v<d.changedTouches.length;v++)if(d.changedTouches[v].identifier===r){r=null,i.style.transform="translate(0px, 0px)",t.classList.remove("active"),h(0,0),this.player.setJoystickVector(0,0);break}};window.addEventListener("touchstart",p,{passive:!1}),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",_),window.addEventListener("touchcancel",_),[{id:"dpad-up",vx:0,vy:-1},{id:"dpad-down",vx:0,vy:1},{id:"dpad-left",vx:-1,vy:0},{id:"dpad-right",vx:1,vy:0}].forEach(({id:d,vx:v,vy:E})=>{const b=document.getElementById(d);if(!b)return;const S=C=>{C.preventDefault(),this.player.clearNavigationTarget(),this.player.setJoystickVector(v,E),b.classList.add("pressed")},w=C=>{C.preventDefault(),this.player.setJoystickVector(0,0),b.classList.remove("pressed")};b.addEventListener("pointerdown",S),b.addEventListener("pointerup",w),b.addEventListener("pointerleave",w),b.addEventListener("pointercancel",w)})}onResize(){if(!this.container||!this.renderer||!this.camera)return;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}start(){this.isRunning||(this.isRunning=!0,this.clock.start(),this.onResize(),this.animate())}stop(){this.isRunning=!1}animate(){if(!this.isRunning)return;requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.1),t=this.clock.getElapsedTime();if(this.world.update(t),this.destinationPulse>0){this.destinationPulse-=e*1.6;const i=.6+(1-Math.max(0,this.destinationPulse))*.9;this.destinationRing.scale.set(i,i,i),this.destinationRing.material.opacity=Math.max(0,this.destinationPulse)*.9,this.destinationPulse<=0&&(this.destinationRing.material.opacity=0)}if(this.overlay.isOpen?this.player.nameSprite&&this.camera&&this.player.nameSprite.quaternion.copy(this.camera.quaternion):(this.player.update(e,this.world.roomBounds,this.world.cabinets,this.camera),this.interaction.update(this.player)),this.network&&(this.network.broadcastLocalPosition(this.player.x,this.player.z,this.player.rotation,this.player.isMoving),this.network.update(e,this.camera)),this.isZoomingIn&&this.zoomTarget){const i=this.zoomTarget,r=i.rotationY,s=i.position.x+Math.sin(r)*.51,a=2.15,o=i.position.z+Math.cos(r)*.51,c=new H(s,a,o),l=Math.sin(r)*.975,f=.22,u=Math.cos(r)*.975,h=new H(s+l*1.35,a+f*1.35,o+u*1.35);this.camera.position.lerp(h,.16),this.camera.lookAt(c)}else{const i=this.player.x,r=4,s=Math.min(26,this.player.z+6.2);this.camera.position.x+=(i-this.camera.position.x)*.14,this.camera.position.y+=(r-this.camera.position.y)*.14,this.camera.position.z+=(s-this.camera.position.z)*.14,this.camLookTarget||(this.camLookTarget=new H(this.player.x,1.4,this.player.z-1.2)),this.camLookTarget.x+=(this.player.x-this.camLookTarget.x)*.14,this.camLookTarget.y=1.4,this.camLookTarget.z+=(this.player.z-1.2-this.camLookTarget.z)*.14,this.camera.lookAt(this.camLookTarget)}this.renderer.render(this.scene,this.camera)}}const Ba=[{name:"Cyan",hex:"#00f5ff",num:62975,accent:"#ffffff"},{name:"Magenta",hex:"#ff007f",num:16711807,accent:"#00f5ff"},{name:"Ouro",hex:"#ffd32a",num:16765738,accent:"#ff3838"},{name:"Esmeralda",hex:"#00ff88",num:65416,accent:"#00ffff"},{name:"Roxo",hex:"#a55eea",num:10837738,accent:"#ffd32a"},{name:"Rubi",hex:"#ff3838",num:16726072,accent:"#ffd32a"}];class vv{constructor(e){this.onReady=e,this.tag=localStorage.getItem("ARCADE_MP_TAG")||"",this.colorHex=localStorage.getItem("ARCADE_MP_COLOR")||"#00f5ff",this.modalEl=null,this.createModal(),this.tag&&this.tag.length>=2?setTimeout(()=>{this.onReady&&this.onReady(this.getIdentity())},100):this.showModal()}getIdentity(){const e=Ba.find(t=>t.hex.toLowerCase()===this.colorHex.toLowerCase())||Ba[0];return{tag:(this.tag||"MARC1").slice(0,5).toUpperCase(),color:e.num,colorHex:e.hex,accent:e.accent}}createModal(){const e=document.getElementById("mp-identity-modal");e&&e.remove();const t=document.createElement("div");t.id="mp-identity-modal",t.style.cssText=`
      position: fixed;
      inset: 0;
      background: rgba(5, 5, 12, 0.92);
      backdrop-filter: blur(14px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 25000;
      font-family: 'Outfit', sans-serif;
      padding: 16px;
    `;const i=document.createElement("div");i.style.cssText=`
      background: linear-gradient(145deg, #101222, #070811);
      border: 2px solid #00f5ff;
      border-radius: 16px;
      padding: 24px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 0 35px rgba(0, 245, 255, 0.4), inset 0 0 20px rgba(0, 245, 255, 0.1);
      text-align: center;
      color: #fff;
    `,i.innerHTML=`
      <div style="font-family: 'Press Start 2P', monospace; font-size: 14px; color: #ffd32a; text-shadow: 0 0 10px #ffd32a; margin-bottom: 8px;">
        🕹️ FLIPERAMA MULTIPLAYER 🕹️
      </div>
      <div style="font-size: 12px; color: #8a99ad; margin-bottom: 18px;">
        Conecte-se com até 10 jogadores via WebRTC P2P
      </div>

      <div style="text-align: left; margin-bottom: 14px;">
        <label style="font-size: 11px; font-weight: 800; color: #00f5ff; letter-spacing: 1px; display: block; margin-bottom: 6px;">
          SUA TAG RETRÔ (MÁX. 5 LETRAS/NÚMEROS):
        </label>
        <input id="mp-tag-input" type="text" maxlength="5" placeholder="MARC1" value="${this.tag}" style="
          width: 100%;
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid #00f5ff;
          border-radius: 8px;
          padding: 10px 14px;
          font-family: 'Press Start 2P', monospace;
          font-size: 18px;
          color: #ffd32a;
          text-align: center;
          text-transform: uppercase;
          outline: none;
          box-shadow: inset 0 0 10px rgba(0, 245, 255, 0.3);
        " />
      </div>

      <div style="text-align: left; margin-bottom: 20px;">
        <label style="font-size: 11px; font-weight: 800; color: #00f5ff; letter-spacing: 1px; display: block; margin-bottom: 8px;">
          COR DO SEU TRAJE CYBER:
        </label>
        <div id="mp-color-picker" style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px;">
          ${Ba.map(o=>`
            <div class="color-swatch" data-hex="${o.hex}" title="${o.name}" style="
              height: 36px;
              background: ${o.hex};
              border-radius: 8px;
              cursor: pointer;
              border: 3px solid ${o.hex.toLowerCase()===this.colorHex.toLowerCase()?"#fff":"transparent"};
              box-shadow: ${o.hex.toLowerCase()===this.colorHex.toLowerCase()?"0 0 12px "+o.hex:"none"};
              transition: transform 0.2s, box-shadow 0.2s;
            "></div>
          `).join("")}
        </div>
      </div>

      <button id="mp-enter-btn" style="
        width: 100%;
        background: linear-gradient(135deg, #00f5ff, #0070ec);
        color: #000;
        font-family: 'Press Start 2P', monospace;
        font-size: 12px;
        padding: 14px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-weight: 900;
        box-shadow: 0 0 20px rgba(0, 245, 255, 0.6);
        transition: transform 0.15s, filter 0.2s;
      ">
        ENTRAR NO ARCADE ➔
      </button>
    `,t.appendChild(i),document.body.appendChild(t),this.modalEl=t;const r=i.querySelector("#mp-tag-input");r.addEventListener("input",o=>{r.value=r.value.replace(/[^a-zA-Z0-9]/g,"").slice(0,5).toUpperCase()});const s=i.querySelectorAll(".color-swatch");s.forEach(o=>{o.addEventListener("click",()=>{this.colorHex=o.getAttribute("data-hex"),s.forEach(c=>{const l=c.getAttribute("data-hex")===this.colorHex;c.style.border=l?"3px solid #fff":"transparent",c.style.boxShadow=l?"0 0 12px "+this.colorHex:"none"})})}),i.querySelector("#mp-enter-btn").addEventListener("click",()=>{const o=r.value.trim().toUpperCase();if(!o||o.length<2){alert("Por favor, digite uma TAG de 2 a 5 letras!"),r.focus();return}this.tag=o,localStorage.setItem("ARCADE_MP_TAG",this.tag),localStorage.setItem("ARCADE_MP_COLOR",this.colorHex),this.hideModal(),this.onReady&&this.onReady(this.getIdentity())})}showModal(){this.modalEl&&(this.modalEl.style.display="flex")}hideModal(){this.modalEl&&(this.modalEl.style.display="none")}}const yv="https://gist.githubusercontent.com/marcuscaiado/a238a8db5b064579413c7a54aba6c840/raw/marcus-arcade-leaderboard.json";function Yl(){const n=document.getElementById("arcade-3d-canvas-container"),e=document.getElementById("webgl-error");if(!n){console.error("Missing #arcade-3d-canvas-container");return}let t=null;const i=new vv(u=>{if(t)t.setPlayerIdentity(u);else try{t=new xv(n,Xr,u),t.start()}catch(h){console.error("Fatal WebGL / Three.js Initialization Error:",h),e&&(e.style.display="block",e.textContent="Erro ao inicializar 3D: "+h.message)}}),r=document.getElementById("arcade-tag-btn");if(r&&r.addEventListener("click",u=>{u.stopPropagation(),i.showModal()}),window.ArcadeLeaderboard&&window.ArcadeLeaderboard.submitScore){const u=window.ArcadeLeaderboard.submitScore.bind(window.ArcadeLeaderboard);window.ArcadeLeaderboard.submitScore=function(h,p){const g=u(h,p);if(window.__ARCADE_NETWORK__){const _=Xr.find(d=>d.id===h),m=_?_.title:h;window.__ARCADE_NETWORK__.broadcastHighScore(m,p)}return g}}window.addEventListener("message",u=>{if(u.data&&(u.data.type==="ARCADE_SCORE"||u.data.type==="GAME_SCORE")&&u.data.score&&window.__ARCADE_NETWORK__){const h=Xr.find(g=>g.id===u.data.gameId),p=h&&h.title||u.data.gameTitle||"Arcade Game";window.__ARCADE_NETWORK__.broadcastHighScore(p,Number(u.data.score))}});const s=document.getElementById("teleport-select");s&&s.addEventListener("change",u=>{const h=u.target.value;h&&t&&(If(()=>Promise.resolve().then(()=>J0),void 0,import.meta.url).then(p=>p.playDopamineChime()),t.teleportToCabinet(h),s.blur())});const a=document.getElementById("arcade-ctrl-toggle"),o=document.getElementById("arcade-joystick"),c=document.getElementById("arcade-dpad");let l="joystick";a&&o&&c&&a.addEventListener("click",u=>{u.stopPropagation(),l==="joystick"?(l="dpad",o.style.display="none",c.style.display="flex",a.innerHTML="<span>🕹️ JOYSTICK</span>"):(l="joystick",o.style.display="block",c.style.display="none",a.innerHTML="<span>🎮 D-PAD</span>")});async function f(){window.__ARCADE_LEADERBOARDS__=window.__ARCADE_LEADERBOARDS__||{};try{const u=await fetch(`${yv}?_t=${Date.now()}`);if(u.ok){const h=await u.json();Xr.forEach(p=>{let g=[];try{g=JSON.parse(localStorage.getItem(`arcade_lb_${p.id}`)||"[]")}catch{}const m=[...h[p.id]||[],...g].filter(v=>v&&v.name&&v.score);m.sort((v,E)=>E.score-v.score);const d=m[0];d&&(window.__ARCADE_LEADERBOARDS__[p.id]={topScore:d.score,topPilot:String(d.name).replace(/[^a-zA-Z0-9]/g,"").toUpperCase().substring(0,3)||"MRC"})})}}catch(u){console.warn("Could not sync cloud records:",u)}}f()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Yl):Yl();
