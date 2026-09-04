var Nh=Object.defineProperty;var Fh=(n,e,t)=>e in n?Nh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Dt=(n,e,t)=>Fh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const kh="modulepreload",Oh=function(n,e){return new URL(n,e).href},bl={},Va=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(h=>{if(h=Oh(h,i),h in bl)return;bl[h]=!0;const f=h.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===h&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":kh,f||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},js=JSON.parse(`[{"id":"neon-orbit-drift","name":"Neon Orbit Drift","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-orbit-drift/","description":"One-tap gravitational slingshot runner with harmonic chords & orbital drift physics.","tech":["Canvas 2D","Web Audio Synth","Physics"],"badgeClass":"btn-orbit"},{"id":"cyber-pinball-fx","name":"Cyber Pinball FX","icon":"⚡","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pinball-fx/","description":"High-speed neon arcade pinball table with multi-bumpers, chime feedback & dual flippers.","tech":["Canvas 2D","Bumper Physics","Audio FX"],"badgeClass":"btn-pinball"},{"id":"neon-katana-slash","name":"Neon Katana Slash (Fruit Ninja)","icon":"🍉","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/neon-katana-slash/","description":"Super juicy Fruit Ninja blade slicer! Swipe glowing blade trails to slice flying fruits and build massive combos.","tech":["Canvas 2D","Swipe Slicer","Fruit Combos"],"badgeClass":"btn-katana"},{"id":"cute-mini-golf","name":"Cute Mini Golf 3D","icon":"⛳","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cute-mini-golf/","description":"Nintendo-style mini golf with 3 kawaii golfers, 3D animated putters & authentic cup suction.","tech":["Three.js 3D","Cannon-es","Web Audio"],"badgeClass":"btn-golf"},{"id":"kawaii-8ball-pool","name":"Kawaii 8-Ball Pool","icon":"🎱","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/kawaii-8ball-pool/","description":"Super cute 8-ball pool where every ball has an animated kawaii face with squish physics.","tech":["Canvas 2D","2-Player","Squish Physics"],"badgeClass":"btn-pool"},{"id":"stickman-fps-arcade","name":"Stickman FPS Arcade","icon":"🔫","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/stickman-fps-arcade/","description":"Retro stationary bunker shooter with 5 weapons, shop upgrades and wave defense.","tech":["Canvas 2D","Shop Upgrades","Web Audio"],"badgeClass":"btn-fps"},{"id":"geometricsurvivor","name":"Geometric Survivor 3D","icon":"⚔️","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/geometricsurvivor/","description":"Megabonk-style 3D cartoon survivor on a floating island! 3 heroes (Sir Bonk, Pippin & Sparky), healing hearts, invincibility & speed buffs.","tech":["Three.js 3D","3 Heroes","Vampire Upgrades"],"badgeClass":"btn-geo"},{"id":"neon-drift-racer","name":"Neon Drift Racer","icon":"🏎️","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drift-racer/","description":"High-speed synthwave pseudo-3D highway racer with nitro boost and touch controls.","tech":["Canvas 3D Projection","Nitro System","Retro"],"badgeClass":"btn-racer"},{"id":"cyber-pong-3d","name":"Kawaii Table Tennis 3D","icon":"🏓","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pong-3d/","description":"Super cute 3D table tennis with Kawaii eye paddles, generous hitboxes, 1-to-1 mouse controls, bouncy ball physics & sweet audio FX.","tech":["Three.js 3D","Paddle Physics","Cute Audio"],"badgeClass":"btn-pong"},{"id":"neon-viper","name":"Neon Viper 3D","icon":"🐍","category":"arcade","unit":"MASS","url":"https://marcuscaiado.github.io/neon-viper/","description":"3D Snake.io cyber arena with 8 3D skins, 10+ smart AI bots, radar minimap, nitro boost & safe body coiling.","tech":["Three.js 3D","Snake.io Physics","8 Skins"],"badgeClass":"btn-viper"},{"id":"brick-breaker-fx","name":"Brick Breaker FX","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/brick-breaker-fx/","description":"Juice-packed neon breakout arcade game with multi-ball power-ups, paddle expansion & shatter physics.","tech":["Canvas 2D","Multi-Ball","Power-Ups"],"badgeClass":"btn-brick"},{"id":"sky-ace-1944","name":"Sky Ace 1944","icon":"🛩️","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/sky-ace-1944/","description":"Vertical retro WWII bullet-hell shooter with mega bombs, shields & quad spread.","tech":["Canvas 2D","Bullet Patterns","Boss Battles"],"badgeClass":"btn-sky"},{"id":"neon-drop-2048","name":"Neon Drop 2048","icon":"🧩","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drop-2048/","description":"Physics merge puzzle with glowing bouncy 2048 balls and satisfying pop chain reactions.","tech":["Canvas 2D","Circle Physics","Suika Merge"],"badgeClass":"btn-drop"},{"id":"asteroid-blitz","name":"Asteroid Blitz","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/asteroid-blitz/","description":"Classic vector space shooter with inertia physics, hyperspace warp & splitting rocks.","tech":["Canvas 2D Vector","Inertia Physics","Retro"],"badgeClass":"btn-asteroid"},{"id":"neon-tetris-3d","name":"Neon Cyber Tetris 3D","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-tetris-3d/","description":"Tetris Effect-style 3D falling tetrominoes in a holographic cyber matrix with laser line clears and popping glowing graphics.","tech":["Three.js 3D","Ghost Projection","Synth Audio","SRS Rotation"],"badgeClass":"btn-tetris"},{"id":"neon-archery-master","name":"Neon Archery Master","icon":"🎯","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/neon-archery-master/","description":"Precision bow archery with trajectory prediction, crosswinds & holographic targets.","tech":["Canvas 2D","Ballistics Math","Wind Physics"],"badgeClass":"btn-archery"},{"id":"neon-stack-3d","name":"Neon Stack Harmony 3D","icon":"🌌","category":"arcade","unit":"SLABS","url":"https://marcuscaiado.github.io/neon-stack-3d/","description":"3D block slicing tower stacking with soothing pentatonic synth chords.","tech":["Three.js 3D","Web Audio","Slicing Math"],"badgeClass":"btn-stack"},{"id":"neon-pachinko-pop","name":"Neon Pachinko Pop","icon":"🔮","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-pachinko-pop/","description":"Peggle-style bouncy pachinko drop with jackpot buckets and neon bumpers.","tech":["Canvas 2D","Peg Physics","Jackpot Zones"],"badgeClass":"btn-pachinko"},{"id":"cyber-runner-3d","name":"Cyber Runner 3D","icon":"🏃","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-runner-3d/","description":"Fast-paced synthwave 3-lane obstacle runner with jump mechanics and power-ups.","tech":["Canvas 3D","Perspective Math","Endless"],"badgeClass":"btn-runner"},{"id":"cyber-shuriken","name":"Cyber Shuriken Neo","icon":"🎯","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-shuriken/","description":"Rhythmic knife throwing into rotating boss matrices with harmonic chimes.","tech":["Canvas 2D","Rotational Math","Boss Waves"],"badgeClass":"btn-shuriken"},{"id":"flappy-cyber-droid","name":"Flappy Cyber Droid","icon":"🐦","category":"arcade","unit":"GATES","url":"https://marcuscaiado.github.io/flappy-cyber-droid/","description":"Addictive neon flapper arcade game featuring a hovering cyber-droid, laser gates & energy crystals.","tech":["Canvas 2D","One-Tap Flap","Laser Gates"],"badgeClass":"btn-droid"},{"id":"street-fighter-2","name":"Street Fighter II Turbo","icon":"🥊","category":"action","unit":"WINS","url":"https://marcuscaiado.github.io/street-fighter-2/","description":"Authentic Capcom arcade fighting! All 12 fighters, Turbo speed modes, Hadoukens, Shoryukens, and 60 FPS WebAssembly emulation.","tech":["WASM EmulatorJS","12 Fighters","Turbo Mode"],"badgeClass":"btn-fighter"},{"id":"super-mario","name":"Super Mario World","icon":"🍄","category":"retro","unit":"EXITS","url":"https://marcuscaiado.github.io/super-mario/","description":"The legendary Super Nintendo masterpiece! Ride Yoshi, soar with the magic cape, explore Dinosaur Land, and run in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Yoshi & Cape","96 Exits"],"badgeClass":"btn-mario"},{"id":"super-bomberman","name":"Super Bomberman","icon":"💣","category":"retro","unit":"WINS","url":"https://marcuscaiado.github.io/super-bomberman/","description":"The ultimate explosive party battle! Drop bombs, collect powerups, blast soft blocks, and battle across arenas in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Hudson Soft","Arena Battle"],"badgeClass":"btn-bomberman"},{"id":"gta-2","name":"Grand Theft Auto 2","icon":"🚗","category":"action","unit":"RESPECT","url":"https://marcuscaiado.github.io/gta-2/","description":"Rockstar's legendary top-down crime epic! Steal cars, outrun police, answer payphones, and rule the city in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Rockstar Games","Open World"],"badgeClass":"btn-gta"},{"id":"classic-doom","name":"Classic DOOM","icon":"🔥","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/classic-doom/","description":"The father of FPS! Rip and tear through phobos base with shotgun, chainsaw, rocket launcher and BFG9000 in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","id Software","FPS 60 FPS"],"badgeClass":"btn-doom"},{"id":"classic-pacman","name":"Pac-Man (1980 Classic Arcade)","icon":"🟡","category":"retro","unit":"PTS","url":"games/pacman/index.html","description":"The immortal 1980 Namco arcade classic! Chomp dots, dodge Blinky, Pinky, Inky & Clyde, grab Power Pellets and rack up high scores.","tech":["Canvas 2D","Namco 1980","Authentic Sound"],"badgeClass":"btn-pacman"},{"id":"sonic1","name":"Sonic The Hedgehog","icon":"🦔","category":"retro","unit":"RINGS","url":"games/sonic1/index.html","description":"Sega's supersonic blue blur! Blast through Green Hill Zone, collect gold rings and defeat Dr. Robotnik in 60 FPS WebAssembly.","tech":["WASM Sega Genesis","Sonic Team","60 FPS"],"badgeClass":"btn-sonic"},{"id":"sonic2","name":"Sonic The Hedgehog 2","icon":"🦊","category":"retro","unit":"RINGS","url":"games/sonic2/index.html","description":"The peak of 16-bit speed! Introducing Tails, the legendary Spin Dash Turbo, Chemical Plant Zone, and Super Sonic.","tech":["WASM Sega Genesis","Spin Dash","Sonic & Tails"],"badgeClass":"btn-sonic2"},{"id":"fzero","name":"F-Zero","icon":"🏎️","category":"retro","unit":"PTS","url":"games/fzero/index.html","description":"Nintendo's groundbreaking 1990 futuristic 400+ km/h Mode-7 hovercraft racer with Captain Falcon & the Blue Falcon.","tech":["WASM SNES Mode-7","Nintendo EAD","60 FPS"],"badgeClass":"btn-fzero"},{"id":"mk2","name":"Mortal Kombat II","icon":"🐉","category":"action","unit":"WINS","url":"games/mk2/index.html","description":"Midway's legendary arcade fighting sensation! Scorpion, Sub-Zero, Liu Kang, Shang Tsung, brutal Fatalities & Babalities.","tech":["WASM Sega Genesis","Midway Arcade","Fatalities"],"badgeClass":"btn-mk2"},{"id":"megaman2","name":"Mega Man 2","icon":"🤖","category":"retro","unit":"BOSSES","url":"games/megaman2/index.html","description":"Capcom's 8-bit platforming masterpiece! 8 Robot Masters, Metal Blade, Dr. Wily's Castle and the greatest NES soundtrack ever.","tech":["WASM NES","Capcom 1988","Chiptune Classic"],"badgeClass":"btn-megaman"},{"id":"outrun","name":"OutRun","icon":"🌴","category":"retro","unit":"CHECKPOINTS","url":"games/outrun/index.html","description":"Yu Suzuki's ultimate arcade driving fantasy! Cruise in the red Ferrari Testarossa with Magical Sound Shower on the radio.","tech":["WASM Sega Genesis","Yu Suzuki","Synthwave Classic"],"badgeClass":"btn-outrun"},{"id":"sor2","name":"Streets of Rage 2","icon":"💥","category":"action","unit":"KO","url":"games/sor2/index.html","description":"The crowned king of 90s beat-'em-ups! Axel, Blaze, Skate and Max brawl to Yuzo Koshiro's ground-shaking club house soundtrack.","tech":["WASM Sega Genesis","Yuzo Koshiro","4 Brawlers"],"badgeClass":"btn-sor2"},{"id":"topgear","name":"Top Gear","icon":"🏁","category":"retro","unit":"PTS","url":"games/topgear/index.html","description":"The sacred arcade racing holy grail! Hit the Nitro boost, screech around hairpin turns and blast Barry Leitch's immortal chiptune beats.","tech":["WASM SNES","Gremlin Graphics","Nitro Turbo"],"badgeClass":"btn-topgear"},{"id":"castlevania4","name":"Super Castlevania IV","icon":"🦇","category":"action","unit":"HEARTS","url":"games/castlevania4/index.html","description":"Konami's gothic 16-bit tour de force! 8-way directional whip swinging, rotating rooms, Mode-7 chandeliers and Dracula's legions.","tech":["WASM SNES","Konami 1991","8-Way Whip"],"badgeClass":"btn-castlevania"},{"id":"mslug","name":"Metal Slug (1996)","icon":"💥","category":"action","unit":"PTS","url":"games/mslug/index.html","description":"The immortal SNK Neo-Geo arcade run-and-gun! Blast General Morden's rebel forces with SV-001 tank, heavy machine gun, rocket launcher and rescue POWs.","tech":["WASM Neo-Geo","SNK Arcade","SV-001 Tank"],"badgeClass":"btn-mslug"},{"id":"mslugx","name":"Metal Slug X","icon":"💣","category":"action","unit":"PTS","url":"games/mslugx/index.html","description":"The super-upgraded Neo-Geo definitive edition! Laser guns, Iron Lizard, Super Grenades, alien invaders, mummies, and zero slowdowns at silky 60 FPS.","tech":["WASM Neo-Geo","SNK Arcade","Definitive Edition"],"badgeClass":"btn-mslugx"}]`);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qo="182",Bh=0,El=1,zh=2,Sr=1,Gh=2,xs=3,Fn=0,zt=1,Rt=2,Dn=0,Xi=1,Tl=2,wl=3,Al=4,Vh=5,hi=100,Hh=101,Wh=102,Xh=103,qh=104,Yh=200,jh=201,$h=202,Kh=203,Ha=204,Wa=205,Zh=206,Jh=207,Qh=208,ed=209,td=210,nd=211,id=212,sd=213,rd=214,Xa=0,qa=1,Ya=2,ji=3,ja=4,$a=5,Ka=6,Za=7,Qc=0,ad=1,od=2,Sn=0,ef=1,tf=2,nf=3,sf=4,rf=5,af=6,of=7,lf=300,vi=301,$i=302,Ja=303,Qa=304,Fr=306,Rs=1e3,In=1001,eo=1002,bt=1003,ld=1004,$s=1005,vt=1006,jr=1007,ui=1008,qt=1009,cf=1010,ff=1011,Ps=1012,Yo=1013,Mn=1014,_n=1015,kn=1016,jo=1017,$o=1018,Cs=1020,hf=35902,df=35899,uf=1021,pf=1022,ln=1023,On=1026,pi=1027,mf=1028,Ko=1029,Ki=1030,Zo=1031,Jo=1033,xr=33776,Mr=33777,br=33778,Er=33779,to=35840,no=35841,io=35842,so=35843,ro=36196,ao=37492,oo=37496,lo=37488,co=37489,fo=37490,ho=37491,uo=37808,po=37809,mo=37810,go=37811,_o=37812,vo=37813,yo=37814,So=37815,xo=37816,Mo=37817,bo=37818,Eo=37819,To=37820,wo=37821,Ao=36492,Ro=36494,Po=36495,Co=36283,Lo=36284,Io=36285,Do=36286,cd=3200,gf=0,fd=1,Yn="",Zt="srgb",Zi="srgb-linear",Rr="linear",rt="srgb",Ei=7680,Rl=519,hd=512,dd=513,ud=514,Qo=515,pd=516,md=517,el=518,gd=519,Uo=35044,Pl="300 es",vn=2e3,Pr=2001;function _f(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _d(){const n=Cr("canvas");return n.style.display="block",n}const Cl={};function Lr(...n){const e="THREE."+n.shift();console.log(e,...n)}function Be(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Ze(...n){const e="THREE."+n.shift();console.error(e,...n)}function Ls(...n){const e=n.join(" ");e in Cl||(Cl[e]=!0,Be(...n))}function vd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,No=180/Math.PI;function Kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function yd(n,e){return(n%e+e)%e}function Kr(n,e,t){return(1-t)*n+t*e}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+f*_;m<0&&(d=-d,p=-p,g=-g,_=-_,m=-m);let u=1-o;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);u=Math.sin(u*y)/b,o=Math.sin(o*y)/b,l=l*u+d*o,c=c*u+p*o,h=h*u+g*o,f=f*u+_*o}else{l=l*u+d*o,c=c*u+p*o,h=h*u+g*o,f=f*u+_*o;const y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*p-c*d,e[t+1]=l*g+h*d+c*f-o*p,e[t+2]=c*g+h*p+o*d-l*f,e[t+3]=h*g-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zr.copy(this).projectOnVector(e),this.sub(Zr)}reflect(e){return this.sub(Zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new W,Ll=new Gs;class Ge{constructor(e,t,i,s,r,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],u=s[6],y=s[1],b=s[4],E=s[7],x=s[2],w=s[5],P=s[8];return r[0]=a*_+o*y+l*x,r[3]=a*m+o*b+l*w,r[6]=a*u+o*E+l*P,r[1]=c*_+h*y+f*x,r[4]=c*m+h*b+f*w,r[7]=c*u+h*E+f*P,r[2]=d*_+p*y+g*x,r[5]=d*m+p*b+g*w,r[8]=d*u+p*E+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jr.makeScale(e,t)),this}rotate(e){return this.premultiply(Jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new Ge,Il=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sd(){const n={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zi]:{primaries:e,whitePoint:i,transfer:Rr,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Il,fromXYZ:Dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}const Qe=Sd();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ti;class xd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ti===void 0&&(Ti=Cr("canvas")),Ti.width=e.width,Ti.height=e.height;const s=Ti.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ti}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Md=0;class tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qr(s[a].image)):r.push(Qr(s[a]))}else r=Qr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Qr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let bd=0;const ea=new W;class Lt extends is{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=In,s=In,r=vt,a=ui,o=ln,l=qt,c=Lt.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Kn(),this.name="",this.source=new tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=lf;Lt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,x=(u+1)/2,w=(h+d)/4,P=(f+_)/4,C=(g+m)/4;return b>E&&b>x?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=w/i,r=P/i):E>x?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=w/s,r=C/s):x<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),i=P/r,s=C/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ed extends is{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Lt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new tl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends Ed{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vf extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Td extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ks.copy(i.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),Zs.subVectors(this.max,ls),wi.subVectors(e.a,ls),Ai.subVectors(e.b,ls),Ri.subVectors(e.c,ls),zn.subVectors(Ai,wi),Gn.subVectors(Ri,Ai),ii.subVectors(wi,Ri);let t=[0,-zn.z,zn.y,0,-Gn.z,Gn.y,0,-ii.z,ii.y,zn.z,0,-zn.x,Gn.z,0,-Gn.x,ii.z,0,-ii.x,-zn.y,zn.x,0,-Gn.y,Gn.x,0,-ii.y,ii.x,0];return!ta(t,wi,Ai,Ri,Zs)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,wi,Ai,Ri,Zs))?!1:(Js.crossVectors(zn,Gn),t=[Js.x,Js.y,Js.z],ta(t,wi,Ai,Ri,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new W,new W,new W,new W,new W,new W,new W,new W],rn=new W,Ks=new Vs,wi=new W,Ai=new W,Ri=new W,zn=new W,Gn=new W,ii=new W,ls=new W,Zs=new W,Js=new W,si=new W;function ta(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){si.fromArray(n,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),h=i.dot(si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const wd=new Vs,cs=new W,na=new W;class nl{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(cs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(na)),this.expandByPoint(cs.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const An=new W,ia=new W,Qs=new W,Vn=new W,sa=new W,er=new W,ra=new W;class yf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ia.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(ia);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=Vn.dot(this.direction),l=-Vn.dot(Qs),c=Vn.lengthSq(),h=Math.abs(1-a*a);let f,d,p,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ia).addScaledVector(Qs,d),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const i=An.dot(this.direction),s=An.dot(An)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,i,s,r){sa.subVectors(t,e),er.subVectors(i,e),ra.crossVectors(sa,er);let a=this.direction.dot(ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,e);const l=o*this.direction.dot(er.crossVectors(Vn,er));if(l<0)return null;const c=o*this.direction.dot(sa.cross(Vn));if(c<0||l+c>a)return null;const h=-o*Vn.dot(ra);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,s,r,a,o,l,c,h,f,d,p,g,_,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,d,p,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,f,d,p,g,_,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*f,g=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*f,g=c*h,_=c*f;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*f,g=c*h,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*f,g=o*h,_=o*f;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Rd)}lookAt(e,t,i){const s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Hn.crossVectors(i,Ht),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Hn.crossVectors(i,Ht)),Hn.normalize(),tr.crossVectors(Ht,Hn),s[0]=Hn.x,s[4]=tr.x,s[8]=Ht.x,s[1]=Hn.y,s[5]=tr.y,s[9]=Ht.y,s[2]=Hn.z,s[6]=tr.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],u=i[14],y=i[3],b=i[7],E=i[11],x=i[15],w=s[0],P=s[4],C=s[8],S=s[12],T=s[1],I=s[5],z=s[9],B=s[13],A=s[2],L=s[6],D=s[10],N=s[14],H=s[3],ee=s[7],te=s[11],U=s[15];return r[0]=a*w+o*T+l*A+c*H,r[4]=a*P+o*I+l*L+c*ee,r[8]=a*C+o*z+l*D+c*te,r[12]=a*S+o*B+l*N+c*U,r[1]=h*w+f*T+d*A+p*H,r[5]=h*P+f*I+d*L+p*ee,r[9]=h*C+f*z+d*D+p*te,r[13]=h*S+f*B+d*N+p*U,r[2]=g*w+_*T+m*A+u*H,r[6]=g*P+_*I+m*L+u*ee,r[10]=g*C+_*z+m*D+u*te,r[14]=g*S+_*B+m*N+u*U,r[3]=y*w+b*T+E*A+x*H,r[7]=y*P+b*I+E*L+x*ee,r[11]=y*C+b*z+E*D+x*te,r[15]=y*S+b*B+E*N+x*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15],y=l*p-c*d,b=o*p-c*f,E=o*d-l*f,x=a*p-c*h,w=a*d-l*h,P=a*f-o*h;return t*(_*y-m*b+u*E)-i*(g*y-m*x+u*w)+s*(g*b-_*x+u*P)-r*(g*E-_*w+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],y=f*m*c-_*d*c+_*l*p-o*m*p-f*l*u+o*d*u,b=g*d*c-h*m*c-g*l*p+a*m*p+h*l*u-a*d*u,E=h*_*c-g*f*c+g*o*p-a*_*p-h*o*u+a*f*u,x=g*f*l-h*_*l-g*o*d+a*_*d+h*o*m-a*f*m,w=t*y+i*b+s*E+r*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return e[0]=y*P,e[1]=(_*d*r-f*m*r-_*s*p+i*m*p+f*s*u-i*d*u)*P,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*u+i*l*u)*P,e[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*p-i*l*p)*P,e[4]=b*P,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*u+t*d*u)*P,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*u-t*l*u)*P,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*p+t*l*p)*P,e[8]=E*P,e[9]=(g*f*r-h*_*r-g*i*p+t*_*p+h*i*u-t*f*u)*P,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*u+t*o*u)*P,e[11]=(h*o*r-a*f*r-h*i*c+t*f*c+a*i*p-t*o*p)*P,e[12]=x*P,e[13]=(h*_*s-g*f*s+g*i*d-t*_*d-h*i*m+t*f*m)*P,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*P,e[15]=(a*f*s-h*o*s+h*i*l-t*f*l-a*i*d+t*o*d)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,g=r*f,_=a*h,m=a*f,u=o*f,y=l*c,b=l*h,E=l*f,x=i.x,w=i.y,P=i.z;return s[0]=(1-(_+u))*x,s[1]=(p+E)*x,s[2]=(g-b)*x,s[3]=0,s[4]=(p-E)*w,s[5]=(1-(d+u))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+b)*P,s[9]=(m-y)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Pi.set(s[0],s[1],s[2]).length();const a=Pi.set(s[4],s[5],s[6]).length(),o=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),an.copy(this);const c=1/r,h=1/a,f=1/o;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=vn,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===vn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Pr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=vn,l=!1){const c=this.elements,h=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===vn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Pr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pi=new W,an=new mt,Ad=new W(0,0,0),Rd=new W(1,1,1),Hn=new W,tr=new W,Ht=new W,Ul=new mt,Nl=new Gs;class bn{constructor(e=0,t=0,i=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pd=0;const Fl=new W,Ci=new Gs,Rn=new mt,nr=new W,fs=new W,Cd=new W,Ld=new Gs,kl=new W(1,0,0),Ol=new W(0,1,0),Bl=new W(0,0,1),zl={type:"added"},Id={type:"removed"},Li={type:"childadded",child:null},aa={type:"childremoved",child:null};class At extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new W,t=new bn,i=new Gs,s=new W(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ge}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(kl,e)}rotateY(e){return this.rotateOnAxis(Ol,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return Fl.copy(e).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kl,e)}translateY(e){return this.translateOnAxis(Ol,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nr.copy(e):nr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(fs,nr,this.up):Rn.lookAt(nr,fs,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),Li.child=e,this.dispatchEvent(Li),Li.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Id),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new W(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new W,Pn=new W,oa=new W,Cn=new W,Ii=new W,Di=new W,Gl=new W,la=new W,ca=new W,fa=new W,ha=new xt,da=new xt,ua=new xt;class Jt{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),on.subVectors(e,t),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){on.subVectors(s,t),Pn.subVectors(i,t),oa.subVectors(e,t);const a=on.dot(on),o=on.dot(Pn),l=on.dot(oa),c=Pn.dot(Pn),h=Pn.dot(oa),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return ha.setScalar(0),da.setScalar(0),ua.setScalar(0),ha.fromBufferAttribute(e,t),da.fromBufferAttribute(e,i),ua.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ha,r.x),a.addScaledVector(da,r.y),a.addScaledVector(ua,r.z),a}static isFrontFacing(e,t,i,s){return on.subVectors(i,t),Pn.subVectors(e,t),on.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),on.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ii.subVectors(s,i),Di.subVectors(r,i),la.subVectors(e,i);const l=Ii.dot(la),c=Di.dot(la);if(l<=0&&c<=0)return t.copy(i);ca.subVectors(e,s);const h=Ii.dot(ca),f=Di.dot(ca);if(h>=0&&f<=h)return t.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Ii,a);fa.subVectors(e,r);const p=Ii.dot(fa),g=Di.dot(fa);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Di,o);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return Gl.subVectors(r,s),o=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(Gl,o);const u=1/(m+_+d);return a=_*u,o=d*u,t.copy(i).addScaledVector(Ii,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=yd(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=pa(a,r,e+1/3),this.g=pa(a,r,e),this.b=pa(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=Sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Qe.workingToColorSpace(Ct.copy(this),e),Math.round($e(Ct.r*255,0,255))*65536+Math.round($e(Ct.g*255,0,255))*256+Math.round($e(Ct.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,s=Ct.g,r=Ct.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Zt){Qe.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,s=Ct.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(ir);const i=Kr(Wn.h,ir.h,t),s=Kr(Wn.s,ir.s,t),r=Kr(Wn.l,ir.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ke;Ke.NAMES=Sf;let Dd=0;class ss extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Xi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Wa,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==Fn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ha&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ft extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new W,sr=new Ve;let Ud=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uo,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uo&&(e.usage=this.usage),e}}class xf extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mf extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gt extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Nd=0;const Kt=new mt,ma=new At,Ui=new W,Wt=new Vs,hs=new Vs,wt=new W;class kt extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_f(e)?Mf:xf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Wt.min,hs.min),Wt.expandByPoint(wt),wt.addVectors(Wt.max,hs.max),Wt.expandByPoint(wt)):(Wt.expandByPoint(hs.min),Wt.expandByPoint(hs.max))}Wt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),wt.add(Ui)),s=Math.max(s,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new W,l[C]=new W;const c=new W,h=new W,f=new W,d=new Ve,p=new Ve,g=new Ve,_=new W,m=new W;function u(C,S,T){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),f.fromBufferAttribute(i,T),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,T),h.sub(c),f.sub(c),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[C].add(_),o[S].add(_),o[T].add(_),l[C].add(m),l[S].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){const T=y[C],I=T.start,z=T.count;for(let B=I,A=I+z;B<A;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new W,E=new W,x=new W,w=new W;function P(C){x.fromBufferAttribute(s,C),w.copy(x);const S=o[C];b.copy(S),b.sub(x.multiplyScalar(x.dot(S))).normalize(),E.crossVectors(w,S);const I=E.dot(l[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,I)}for(let C=0,S=y.length;C<S;++C){const T=y[C],I=T.start,z=T.count;for(let B=I,A=I+z;B<A;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,h=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let u=0;u<h;u++)d[g++]=c[p++]}return new cn(d,h,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new mt,ri=new yf,rr=new nl,Hl=new W,ar=new W,or=new W,lr=new W,ga=new W,cr=new W,Wl=new W,fr=new W;class Se extends At{constructor(e=new kt,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(ga.fromBufferAttribute(f,e),a?cr.addScaledVector(ga,h):cr.addScaledVector(ga.sub(t),h))}t.add(cr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(rr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(rr,Hl)===null||ri.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(Vl.copy(r).invert(),ri.copy(e.ray).applyMatrix4(Vl),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],u=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,x=b;E<x;E+=3){const w=o.getX(E),P=o.getX(E+1),C=o.getX(E+2);s=hr(this,u,e,i,c,h,f,w,P,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const y=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);s=hr(this,a,e,i,c,h,f,y,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],u=a[m.materialIndex],y=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,x=b;E<x;E+=3){const w=E,P=E+1,C=E+2;s=hr(this,u,e,i,c,h,f,w,P,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const y=m,b=m+1,E=m+2;s=hr(this,a,e,i,c,h,f,y,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Fd(n,e,t,i,s,r,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Fn,o),l===null)return null;fr.copy(o),fr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fr);return c<t.near||c>t.far?null:{distance:c,point:fr.clone(),object:n}}function hr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ar),n.getVertexPosition(l,or),n.getVertexPosition(c,lr);const h=Fd(n,e,t,i,ar,or,lr,Wl);if(h){const f=new W;Jt.getBarycoord(Wl,ar,or,lr,f),s&&(h.uv=Jt.getInterpolatedAttribute(s,o,l,c,f,new Ve)),r&&(h.uv1=Jt.getInterpolatedAttribute(r,o,l,c,f,new Ve)),a&&(h.normal=Jt.getInterpolatedAttribute(a,o,l,c,f,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};Jt.getNormal(ar,or,lr,d.normal),h.face=d,h.barycoord=f}return h}class at extends kt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2));function g(_,m,u,y,b,E,x,w,P,C,S){const T=E/P,I=x/C,z=E/2,B=x/2,A=w/2,L=P+1,D=C+1;let N=0,H=0;const ee=new W;for(let te=0;te<D;te++){const U=te*I-B;for(let V=0;V<L;V++){const re=V*T-z;ee[_]=re*y,ee[m]=U*b,ee[u]=A,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[u]=w>0?1:-1,h.push(ee.x,ee.y,ee.z),f.push(V/P),f.push(1-te/C),N+=1}}for(let te=0;te<C;te++)for(let U=0;U<P;U++){const V=d+U+L*te,re=d+U+L*(te+1),be=d+(U+1)+L*(te+1),Ee=d+(U+1)+L*te;l.push(V,re,Ee),l.push(re,be,Ee),H+=6}o.addGroup(p,H,S),p+=H,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=Ji(n[t]);for(const s in i)e[s]=i[s]}return e}function kd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Od={clone:Ji,merge:Nt};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ef extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new W,Xl=new Ve,ql=new Ve;class Xt extends Ef{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Xl,ql),t.subVectors(ql,Xl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Fi=1;class Gd extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(Ni,Fi,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Ni,Fi,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Ni,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Ni,Fi,e,t);o.layers=this.layers,this.add(o);const l=new Xt(Ni,Fi,e,t);l.layers=this.layers,this.add(l);const c=new Xt(Ni,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Tf extends Lt{constructor(e=[],t=vi,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wf extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Tf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new at(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Dn});r.uniforms.tEquirect.value=t;const a=new Se(s,r),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=vt),new Gd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class yn extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vd={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class sl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=i}clone(){return new sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Hd extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uo,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new W;class Ir{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ir(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qi extends ss{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ki;const ds=new W,Oi=new W,Bi=new W,zi=new Ve,us=new Ve,Af=new mt,dr=new W,ps=new W,ur=new W,Yl=new Ve,va=new Ve,jl=new Ve;class Is extends At{constructor(e=new Qi){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wd(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new Ir(i,3,0,!1)),ki.setAttribute("uv",new Ir(i,2,3,!1))}this.geometry=ki,this.material=e,this.center=new Ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Oi.setFromMatrixScale(this.matrixWorld),Af.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Oi.multiplyScalar(-Bi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;pr(dr.set(-.5,-.5,0),Bi,a,Oi,s,r),pr(ps.set(.5,-.5,0),Bi,a,Oi,s,r),pr(ur.set(.5,.5,0),Bi,a,Oi,s,r),Yl.set(0,0),va.set(1,0),jl.set(1,1);let o=e.ray.intersectTriangle(dr,ps,ur,!1,ds);if(o===null&&(pr(ps.set(-.5,.5,0),Bi,a,Oi,s,r),va.set(0,1),o=e.ray.intersectTriangle(dr,ur,ps,!1,ds),o===null))return;const l=e.ray.origin.distanceTo(ds);l<e.near||l>e.far||t.push({distance:l,point:ds.clone(),uv:Jt.getInterpolation(ds,dr,ps,ur,Yl,va,jl,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pr(n,e,t,i,s,r){zi.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(us.x=r*zi.x-s*zi.y,us.y=s*zi.x+r*zi.y):us.copy(zi),n.copy(e),n.x+=us.x,n.y+=us.y,n.applyMatrix4(Af)}class Xd extends Lt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=bt,h=bt,f,d){super(null,a,o,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ya=new W,qd=new W,Yd=new Ge;class fi{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ya.subVectors(i,t).cross(qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ya),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yd.getNormalMatrix(e),s=this.coplanarPoint(ya).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new nl,jd=new Ve(.5,.5),mr=new W;class rl{constructor(e=new fi,t=new fi,i=new fi,s=new fi,r=new fi,a=new fi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],u=r[11],y=r[12],b=r[13],E=r[14],x=r[15];if(s[0].setComponents(c-a,p-h,u-g,x-y).normalize(),s[1].setComponents(c+a,p+h,u+g,x+y).normalize(),s[2].setComponents(c+o,p+f,u+_,x+b).normalize(),s[3].setComponents(c-o,p-f,u-_,x-b).normalize(),i)s[4].setComponents(l,d,m,E).normalize(),s[5].setComponents(c-l,p-d,u-m,x-E).normalize();else if(s[4].setComponents(c-l,p-d,u-m,x-E).normalize(),t===vn)s[5].setComponents(c+l,p+d,u+m,x+E).normalize();else if(t===Pr)s[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=jd.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(mr.x=s.normal.x>0?e.max.x:e.min.x,mr.y=s.normal.y>0?e.max.y:e.min.y,mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tn extends Lt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ds extends Lt{constructor(e,t,i=Mn,s,r,a,o=bt,l=bt,c,h=On,f=1){if(h!==On&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $d extends Ds{constructor(e,t=Mn,i=vi,s,r,a=bt,o=bt,l,c=On){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rf extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class kr extends kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new W,h=new Ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const p=i+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yt extends kt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],d=[],p=[];let g=0;const _=[],m=i/2;let u=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(p,2));function y(){const E=new W,x=new W;let w=0;const P=(t-e)/i;for(let C=0;C<=r;C++){const S=[],T=C/r,I=T*(t-e)+e;for(let z=0;z<=s;z++){const B=z/s,A=B*l+o,L=Math.sin(A),D=Math.cos(A);x.x=I*L,x.y=-T*i+m,x.z=I*D,f.push(x.x,x.y,x.z),E.set(L,P,D).normalize(),d.push(E.x,E.y,E.z),p.push(B,1-T),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const T=_[S][C],I=_[S+1][C],z=_[S+1][C+1],B=_[S][C+1];(e>0||S!==0)&&(h.push(T,I,B),w+=3),(t>0||S!==r-1)&&(h.push(I,z,B),w+=3)}c.addGroup(u,w,0),u+=w}function b(E){const x=g,w=new Ve,P=new W;let C=0;const S=E===!0?e:t,T=E===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),g++;const I=g;for(let z=0;z<=s;z++){const A=z/s*l+o,L=Math.cos(A),D=Math.sin(A);P.x=S*D,P.y=m*T,P.z=S*L,f.push(P.x,P.y,P.z),d.push(0,T,0),w.x=L*.5+.5,w.y=D*.5*T+.5,p.push(w.x,w.y),g++}for(let z=0;z<s;z++){const B=x+z,A=I+z;E===!0?h.push(A,A+1,B):h.push(A+1,A,B),C+=3}c.addGroup(u,C,E===!0?1:2),u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nn extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const y=u*d-a;for(let b=0;b<c;b++){const E=b*f-r;g.push(E,-y,0),_.push(0,0,1),m.push(b/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<o;y++){const b=y+c*u,E=y+c*(u+1),x=y+1+c*(u+1),w=y+1+c*u;p.push(b,E,w),p.push(E,x,w)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qn extends kt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let f=e;const d=(t-e)/s,p=new W,g=new Ve;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const u=r+m/i*a;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}f+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let u=0;u<i;u++){const y=u+m,b=y,E=y+i+1,x=y+i+2,w=y+1;o.push(b,E,w),o.push(E,x,w)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class yi extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new W,d=new W,p=[],g=[],_=[],m=[];for(let u=0;u<=i;u++){const y=[],b=u/i;let E=0;u===0&&a===0?E=.5/t:u===i&&l===Math.PI&&(E=-.5/t);for(let x=0;x<=t;x++){const w=x/t;f.x=-e*Math.cos(s+w*r)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(s+w*r)*Math.sin(a+b*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(w+E,1-b),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<t;y++){const b=h[u][y+1],E=h[u][y],x=h[u+1][y],w=h[u+1][y+1];(u!==0||a>0)&&p.push(b,E,w),(u!==i-1||l<Math.PI)&&p.push(E,x,w)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class al extends kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new W,f=new W,d=new W;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,y=(s+1)*p+g;a.push(_,m,y),a.push(m,u,y)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Kd extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _t extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zd extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jd extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Or extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Qd extends Or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Sa=new mt,$l=new W,Kl=new W;class Pf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$l.setFromMatrixPosition(e.matrixWorld),t.position.copy($l),Kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kl),t.updateMatrixWorld(),Sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eu extends Pf{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}}class xa extends Or{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ol extends Ef{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tu extends Pf{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zl extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new tu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class nu extends Or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class iu extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class su{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Jl=new mt;class ru{constructor(e,t,i=0,s=1/0){this.ray=new yf(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new il,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jl),this}intersectObject(e,t=!0,i=[]){return Fo(e,this,i,t),i.sort(Ql),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Fo(e[s],this,i,t);return i.sort(Ql),i}}function Ql(n,e){return n.distance-e.distance}function Fo(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Fo(r[a],e,t,!0)}}function ec(n,e,t,i){const s=au(i);switch(t){case uf:return n*e;case mf:return n*e/s.components*s.byteLength;case Ko:return n*e/s.components*s.byteLength;case Ki:return n*e*2/s.components*s.byteLength;case Zo:return n*e*2/s.components*s.byteLength;case pf:return n*e*3/s.components*s.byteLength;case ln:return n*e*4/s.components*s.byteLength;case Jo:return n*e*4/s.components*s.byteLength;case xr:case Mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case br:case Er:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case no:case so:return Math.max(n,16)*Math.max(e,8)/4;case to:case io:return Math.max(n,8)*Math.max(e,8)/2;case ro:case ao:case lo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oo:case fo:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ao:case Ro:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Co:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Io:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function au(n){switch(n){case qt:case cf:return{byteLength:1,components:1};case Ps:case ff:case kn:return{byteLength:2,components:1};case jo:case $o:return{byteLength:2,components:4};case Mn:case Yo:case _n:return{byteLength:4,components:1};case hf:case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cf(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ou(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cu=`#ifdef USE_ALPHAHASH
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
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pu=`#ifdef USE_AOMAP
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
#endif`,mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gu=`#ifdef USE_BATCHING
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
#endif`,_u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Su=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xu=`#ifdef USE_IRIDESCENCE
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
#endif`,Mu=`#ifdef USE_BUMPMAP
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
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lu=`#define PI 3.141592653589793
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
} // validated`,Iu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Du=`vec3 transformedNormal = objectNormal;
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
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
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
#endif`,Hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$u=`#ifdef USE_GRADIENTMAP
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
}`,Ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qu=`uniform bool receiveShadow;
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
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,ap=`uniform sampler2D dfgLUT;
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
}`,op=`
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_p=`#if defined( USE_POINTS_UV )
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
#endif`,vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cp=`#ifdef USE_NORMALMAP
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
#endif`,Lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qp=`float getShadowMask() {
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
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,xm=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,Em=`#define LAMBERT
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
}`,Tm=`#define MATCAP
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
}`,wm=`#define MATCAP
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
}`,Am=`#define NORMAL
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
}`,Rm=`#define NORMAL
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
}`,Pm=`#define PHONG
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
}`,Cm=`#define PHONG
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
}`,Lm=`#define STANDARD
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
}`,Im=`#define STANDARD
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
}`,Dm=`#define TOON
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
}`,Um=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,zm=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:lu,alphahash_pars_fragment:cu,alphamap_fragment:fu,alphamap_pars_fragment:hu,alphatest_fragment:du,alphatest_pars_fragment:uu,aomap_fragment:pu,aomap_pars_fragment:mu,batching_pars_vertex:gu,batching_vertex:_u,begin_vertex:vu,beginnormal_vertex:yu,bsdfs:Su,iridescence_fragment:xu,bumpmap_pars_fragment:Mu,clipping_planes_fragment:bu,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:wu,color_fragment:Au,color_pars_fragment:Ru,color_pars_vertex:Pu,color_vertex:Cu,common:Lu,cube_uv_reflection_fragment:Iu,defaultnormal_vertex:Du,displacementmap_pars_vertex:Uu,displacementmap_vertex:Nu,emissivemap_fragment:Fu,emissivemap_pars_fragment:ku,colorspace_fragment:Ou,colorspace_pars_fragment:Bu,envmap_fragment:zu,envmap_common_pars_fragment:Gu,envmap_pars_fragment:Vu,envmap_pars_vertex:Hu,envmap_physical_pars_fragment:ep,envmap_vertex:Wu,fog_vertex:Xu,fog_pars_vertex:qu,fog_fragment:Yu,fog_pars_fragment:ju,gradientmap_pars_fragment:$u,lightmap_pars_fragment:Ku,lights_lambert_fragment:Zu,lights_lambert_pars_fragment:Ju,lights_pars_begin:Qu,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:up,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:_p,metalnessmap_fragment:vp,metalnessmap_pars_fragment:yp,morphinstance_vertex:Sp,morphcolor_vertex:xp,morphnormal_vertex:Mp,morphtarget_pars_vertex:bp,morphtarget_vertex:Ep,normal_fragment_begin:Tp,normal_fragment_maps:wp,normal_pars_fragment:Ap,normal_pars_vertex:Rp,normal_vertex:Pp,normalmap_pars_fragment:Cp,clearcoat_normal_fragment_begin:Lp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Dp,iridescence_pars_fragment:Up,opaque_fragment:Np,packing:Fp,premultiplied_alpha_fragment:kp,project_vertex:Op,dithering_fragment:Bp,dithering_pars_fragment:zp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Vp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:qp,skinbase_vertex:Yp,skinning_pars_vertex:jp,skinning_vertex:$p,skinnormal_vertex:Kp,specularmap_fragment:Zp,specularmap_pars_fragment:Jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:am,background_vert:om,background_frag:lm,backgroundCube_vert:cm,backgroundCube_frag:fm,cube_vert:hm,cube_frag:dm,depth_vert:um,depth_frag:pm,distance_vert:mm,distance_frag:gm,equirect_vert:_m,equirect_frag:vm,linedashed_vert:ym,linedashed_frag:Sm,meshbasic_vert:xm,meshbasic_frag:Mm,meshlambert_vert:bm,meshlambert_frag:Em,meshmatcap_vert:Tm,meshmatcap_frag:wm,meshnormal_vert:Am,meshnormal_frag:Rm,meshphong_vert:Pm,meshphong_frag:Cm,meshphysical_vert:Lm,meshphysical_frag:Im,meshtoon_vert:Dm,meshtoon_frag:Um,points_vert:Nm,points_frag:Fm,shadow_vert:km,shadow_frag:Om,sprite_vert:Bm,sprite_frag:zm},ve={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mn={basic:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Nt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Nt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Nt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Nt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Nt([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Nt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Nt([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Nt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Nt([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Nt([ve.common,ve.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Nt([ve.lights,ve.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};mn.physical={uniforms:Nt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const gr={r:0,b:0,g:0},oi=new bn,Gm=new mt;function Vm(n,e,t,i,s,r,a){const o=new Ke(0);let l=r===!0?0:1,c,h,f=null,d=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function _(b){let E=!1;const x=g(b);x===null?u(o,l):x&&x.isColor&&(u(x,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===Fr)?(h===void 0&&(h=new Se(new at(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ji(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),oi.copy(E.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(oi)),h.material.toneMapped=Qe.getTransfer(x.colorSpace)!==rt,(f!==x||d!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Se(new nn(2,2),new En({name:"BackgroundMaterial",uniforms:Ji(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,E){b.getRGB(gr,bf(n)),i.buffers.color.setClear(gr.r,gr.g,gr.b,E,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(o,l)},render:_,addToRenderList:m,dispose:y}}function Hm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(T,I,z,B,A){let L=!1;const D=f(B,z,I);r!==D&&(r=D,c(r.object)),L=p(T,B,z,A),L&&g(T,B,z,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,E(T,I,z,B),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function h(T){return n.deleteVertexArray(T)}function f(T,I,z){const B=z.wireframe===!0;let A=i[T.id];A===void 0&&(A={},i[T.id]=A);let L=A[I.id];L===void 0&&(L={},A[I.id]=L);let D=L[B];return D===void 0&&(D=d(l()),L[B]=D),D}function d(T){const I=[],z=[],B=[];for(let A=0;A<t;A++)I[A]=0,z[A]=0,B[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:B,object:T,attributes:{},index:null}}function p(T,I,z,B){const A=r.attributes,L=I.attributes;let D=0;const N=z.getAttributes();for(const H in N)if(N[H].location>=0){const te=A[H];let U=L[H];if(U===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(U=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(U=T.instanceColor)),te===void 0||te.attribute!==U||U&&te.data!==U.data)return!0;D++}return r.attributesNum!==D||r.index!==B}function g(T,I,z,B){const A={},L=I.attributes;let D=0;const N=z.getAttributes();for(const H in N)if(N[H].location>=0){let te=L[H];te===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(te=T.instanceColor));const U={};U.attribute=te,te&&te.data&&(U.data=te.data),A[H]=U,D++}r.attributes=A,r.attributesNum=D,r.index=B}function _(){const T=r.newAttributes;for(let I=0,z=T.length;I<z;I++)T[I]=0}function m(T){u(T,0)}function u(T,I){const z=r.newAttributes,B=r.enabledAttributes,A=r.attributeDivisors;z[T]=1,B[T]===0&&(n.enableVertexAttribArray(T),B[T]=1),A[T]!==I&&(n.vertexAttribDivisor(T,I),A[T]=I)}function y(){const T=r.newAttributes,I=r.enabledAttributes;for(let z=0,B=I.length;z<B;z++)I[z]!==T[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function b(T,I,z,B,A,L,D){D===!0?n.vertexAttribIPointer(T,I,z,A,L):n.vertexAttribPointer(T,I,z,B,A,L)}function E(T,I,z,B){_();const A=B.attributes,L=z.getAttributes(),D=I.defaultAttributeValues;for(const N in L){const H=L[N];if(H.location>=0){let ee=A[N];if(ee===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),ee!==void 0){const te=ee.normalized,U=ee.itemSize,V=e.get(ee);if(V===void 0)continue;const re=V.buffer,be=V.type,Ee=V.bytesPerElement,$=be===n.INT||be===n.UNSIGNED_INT||ee.gpuType===Yo;if(ee.isInterleavedBufferAttribute){const Q=ee.data,me=Q.stride,Ue=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let de=0;de<H.locationSize;de++)u(H.location+de,Q.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<H.locationSize;de++)m(H.location+de);n.bindBuffer(n.ARRAY_BUFFER,re);for(let de=0;de<H.locationSize;de++)b(H.location+de,U/H.locationSize,be,te,me*Ee,(Ue+U/H.locationSize*de)*Ee,$)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)u(H.location+Q,ee.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Q=0;Q<H.locationSize;Q++)b(H.location+Q,U/H.locationSize,be,te,U*Ee,U/H.locationSize*Q*Ee,$)}}else if(D!==void 0){const te=D[N];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(H.location,te);break;case 3:n.vertexAttrib3fv(H.location,te);break;case 4:n.vertexAttrib4fv(H.location,te);break;default:n.vertexAttrib1fv(H.location,te)}}}}y()}function x(){C();for(const T in i){const I=i[T];for(const z in I){const B=I[z];for(const A in B)h(B[A].object),delete B[A];delete I[z]}delete i[T]}}function w(T){if(i[T.id]===void 0)return;const I=i[T.id];for(const z in I){const B=I[z];for(const A in B)h(B[A].object),delete B[A];delete I[z]}delete i[T.id]}function P(T){for(const I in i){const z=i[I];if(z[T.id]===void 0)continue;const B=z[T.id];for(const A in B)h(B[A].object),delete B[A];delete z[T.id]}}function C(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Wm(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,i,1)}function l(c,h,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==ln&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const C=P===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==qt&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==_n&&!C)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:E,maxSamples:x,samples:w}}function qm(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new fi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,u=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,b=y*4;let E=u.clippingState||null;l.value=E,E=h(g,d,b,p);for(let x=0;x!==b;++x)E[x]=t[x];u.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let b=0,E=p;b!==_;++b,E+=4)a.copy(f[b]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ym(n){let e=new WeakMap;function t(a,o){return o===Ja?a.mapping=vi:o===Qa&&(a.mapping=$i),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ja||o===Qa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const jn=4,tc=[.125,.215,.35,.446,.526,.582],di=20,jm=256,ms=new ol,nc=new Ke;let Ma=null,ba=0,Ea=0,Ta=!1;const $m=new W;class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=$m}=r;Ma=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,ba,Ea),this._renderer.xr.enabled=Ta,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:kn,format:ln,colorSpace:Zi,depthBuffer:!1},s=sc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Km(r)),this._blurMaterial=Jm(r,e,t),this._ggxMaterial=Zm(r,e,t)}return s}_compileMaterial(e){const t=new Se(new kt,e);this._renderer.compile(t,ms)}_sceneToCubeUV(e,t,i,s,r){const l=new Xt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(nc),f.toneMapping=Sn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Se(new at,new ft({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let u=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,u=!0):(m.color.copy(nc),u=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const x=this._cubeSize;Gi(s,E*x,b>2?x:0,x,x),f.setRenderTarget(s),u&&f.render(_,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===vi||e.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Gi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ms)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=0+c*1.25,p=f*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-jn?i-g+jn:0),u=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Gi(r,m,u,3*_,2*_),s.setRenderTarget(r),s.render(o,ms),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Gi(e,m,u,3*_,2*_),s.setRenderTarget(e),s.render(o,ms)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*di-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):di;m>di&&Be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const u=[];let y=0;for(let P=0;P<di;++P){const C=P/_,S=Math.exp(-C*C/2);u.push(S),P===0?y+=S:P<m&&(y+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const E=this._sizeLods[s],x=3*E*(s>b-jn?s-b+jn:0),w=4*(this._cubeSize-E);Gi(t,x,w,3*E,2*E),l.setRenderTarget(t),l.render(f,ms)}}function Km(n){const e=[],t=[],i=[];let s=n;const r=n-jn+1+tc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-jn?l=tc[a-n+jn-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,_=3,m=2,u=1,y=new Float32Array(_*g*p),b=new Float32Array(m*g*p),E=new Float32Array(u*g*p);for(let w=0;w<p;w++){const P=w%3*2/3-1,C=w>2?0:-1,S=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];y.set(S,_*g*w),b.set(d,m*g*w);const T=[w,w,w,w,w,w];E.set(T,u*g*w)}const x=new kt;x.setAttribute("position",new cn(y,_)),x.setAttribute("uv",new cn(b,m)),x.setAttribute("faceIndex",new cn(E,u)),i.push(new Se(x,null)),s>jn&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function sc(n,e,t){const i=new xn(n,e,t);return i.texture.mapping=Fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gi(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Zm(n,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Jm(n,e,t){const i=new Float32Array(di),s=new W(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Br(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function rc(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ac(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Br(){return`

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
	`}function Qm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ja||l===Qa,h=l===vi||l===$i;if(c||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ic(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ic(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function e0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ls("WebGLRenderer: "+i+" extension not supported."),s}}}function t0(n,e,t,i){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let b=0,E=y.length;b<E;b+=3){const x=y[b+0],w=y[b+1],P=y[b+2];d.push(x,w,w,P,P,x)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,E=y.length/3-1;b<E;b+=3){const x=b+0,w=b+1,P=b+2;d.push(x,w,w,P,P,x)}}else return;const m=new(_f(d)?Mf:xf)(d,1);m.version=_;const u=r.get(f);u&&e.remove(u),r.set(f,m)}function h(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function n0(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*a,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/a,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let u=0;for(let y=0;y<g;y++)u+=p[y]*_[y];t.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function i0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function s0(n,e,t){const i=new WeakMap,s=new xt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let E=o.attributes.position.count*b,x=1;E>e.maxTextureSize&&(x=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*x*4*f),P=new vf(w,E,x,f);P.type=_n,P.needsUpdate=!0;const C=b*4;for(let T=0;T<f;T++){const I=m[T],z=u[T],B=y[T],A=E*x*4*T;for(let L=0;L<I.count;L++){const D=L*C;p===!0&&(s.fromBufferAttribute(I,L),w[A+D+0]=s.x,w[A+D+1]=s.y,w[A+D+2]=s.z,w[A+D+3]=0),g===!0&&(s.fromBufferAttribute(z,L),w[A+D+4]=s.x,w[A+D+5]=s.y,w[A+D+6]=s.z,w[A+D+7]=0),_===!0&&(s.fromBufferAttribute(B,L),w[A+D+8]=s.x,w[A+D+9]=s.y,w[A+D+10]=s.z,w[A+D+11]=B.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new Ve(E,x)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function r0(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const a0={[ef]:"LINEAR_TONE_MAPPING",[tf]:"REINHARD_TONE_MAPPING",[nf]:"CINEON_TONE_MAPPING",[sf]:"ACES_FILMIC_TONE_MAPPING",[af]:"AGX_TONE_MAPPING",[of]:"NEUTRAL_TONE_MAPPING",[rf]:"CUSTOM_TONE_MAPPING"};function o0(n,e,t,i,s){const r=new xn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),a=new xn(e,t,{type:kn,depthBuffer:!1,stencilBuffer:!1}),o=new kt;o.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new gt([0,2,0,0,2,0],2));const l=new Kd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Se(o,l),h=new ol(-1,1,1,-1,0,1);let f=null,d=null,p=!1,g,_=null,m=[],u=!1;this.setSize=function(y,b){r.setSize(y,b),a.setSize(y,b);for(let E=0;E<m.length;E++){const x=m[E];x.setSize&&x.setSize(y,b)}},this.setEffects=function(y){m=y,u=m.length>0&&m[0].isRenderPass===!0;const b=r.width,E=r.height;for(let x=0;x<m.length;x++){const w=m[x];w.setSize&&w.setSize(b,E)}},this.begin=function(y,b){if(p||y.toneMapping===Sn&&m.length===0)return!1;if(_=b,b!==null){const E=b.width,x=b.height;(r.width!==E||r.height!==x)&&this.setSize(E,x)}return u===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=Sn,!0},this.hasRenderPass=function(){return u},this.end=function(y,b){y.toneMapping=g,p=!0;let E=r,x=a;for(let w=0;w<m.length;w++){const P=m[w];if(P.enabled!==!1&&(P.render(y,x,E,b),P.needsSwap!==!1)){const C=E;E=x,x=C}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,l.defines={},Qe.getTransfer(f)===rt&&(l.defines.SRGB_TRANSFER="");const w=a0[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(_),y.render(c,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Lf=new Lt,ko=new Ds(1,1),If=new vf,Df=new Td,Uf=new Tf,oc=[],lc=[],cc=new Float32Array(16),fc=new Float32Array(9),hc=new Float32Array(4);function rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=oc[s];if(r===void 0&&(r=new Float32Array(s),oc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zr(n,e){let t=lc[e];t===void 0&&(t=new Int32Array(e),lc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function l0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function h0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function d0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;hc.set(i),n.uniformMatrix2fv(this.addr,!1,hc),Tt(t,i)}}function u0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;fc.set(i),n.uniformMatrix3fv(this.addr,!1,fc),Tt(t,i)}}function p0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;cc.set(i),n.uniformMatrix4fv(this.addr,!1,cc),Tt(t,i)}}function m0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function y0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function x0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function M0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function b0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ko.compareFunction=t.isReversedDepthBuffer()?el:Qo,r=ko):r=Lf,t.setTexture2D(e||r,s)}function E0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Df,s)}function T0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Uf,s)}function w0(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||If,s)}function A0(n){switch(n){case 5126:return l0;case 35664:return c0;case 35665:return f0;case 35666:return h0;case 35674:return d0;case 35675:return u0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return _0;case 35669:case 35673:return v0;case 5125:return y0;case 36294:return S0;case 36295:return x0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return w0}}function R0(n,e){n.uniform1fv(this.addr,e)}function P0(n,e){const t=rs(e,this.size,2);n.uniform2fv(this.addr,t)}function C0(n,e){const t=rs(e,this.size,3);n.uniform3fv(this.addr,t)}function L0(n,e){const t=rs(e,this.size,4);n.uniform4fv(this.addr,t)}function I0(n,e){const t=rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D0(n,e){const t=rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function U0(n,e){const t=rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function N0(n,e){n.uniform1iv(this.addr,e)}function F0(n,e){n.uniform2iv(this.addr,e)}function k0(n,e){n.uniform3iv(this.addr,e)}function O0(n,e){n.uniform4iv(this.addr,e)}function B0(n,e){n.uniform1uiv(this.addr,e)}function z0(n,e){n.uniform2uiv(this.addr,e)}function G0(n,e){n.uniform3uiv(this.addr,e)}function V0(n,e){n.uniform4uiv(this.addr,e)}function H0(n,e,t){const i=this.cache,s=e.length,r=zr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ko:a=Lf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function W0(n,e,t){const i=this.cache,s=e.length,r=zr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Df,r[a])}function X0(n,e,t){const i=this.cache,s=e.length,r=zr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uf,r[a])}function q0(n,e,t){const i=this.cache,s=e.length,r=zr(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||If,r[a])}function Y0(n){switch(n){case 5126:return R0;case 35664:return P0;case 35665:return C0;case 35666:return L0;case 35674:return I0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return k0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return G0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}class j0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=A0(t.type)}}class $0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y0(t.type)}}class K0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function dc(n,e){n.seq.push(e),n.map[e.id]=e}function Z0(n,e,t){const i=n.name,s=i.length;for(wa.lastIndex=0;;){const r=wa.exec(i),a=wa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dc(t,c===void 0?new j0(o,n,e):new $0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new K0(o),dc(t,f)),t=f}}}class Tr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Z0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function uc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const J0=37297;let Q0=0;function eg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const pc=new Ge;function tg(n){Qe._getMatrix(pc,Qe.workingColorSpace,n);const e=`mat3( ${pc.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Rr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+eg(n.getShaderSource(e),o)}else return r}function ng(n,e){const t=tg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ig={[ef]:"Linear",[tf]:"Reinhard",[nf]:"Cineon",[sf]:"ACESFilmic",[af]:"AgX",[of]:"Neutral",[rf]:"Custom"};function sg(n,e){const t=ig[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _r=new W;function rg(){Qe.getLuminanceCoefficients(_r);const n=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function og(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ms(n){return n!==""}function gc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(n){return n.replace(cg,hg)}const fg=new Map;function hg(n,e){let t=He[e];if(t===void 0){const i=fg.get(e);if(i!==void 0)t=He[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(n){return n.replace(dg,ug)}function ug(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const pg={[Sr]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function mg(n){return pg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gg={[vi]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function _g(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const vg={[$i]:"ENVMAP_MODE_REFRACTION"};function yg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sg={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[ad]:"ENVMAP_BLENDING_MIX",[od]:"ENVMAP_BLENDING_ADD"};function xg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sg[n.combine]||"ENVMAP_BLENDING_NONE"}function Mg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bg(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mg(t),c=_g(t),h=yg(t),f=xg(t),d=Mg(t),p=ag(t),g=og(r),_=s.createProgram();let m,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),u.length>0&&(u+=`
`)):(m=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),u=[yc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?He.tonemapping_pars_fragment:"",t.toneMapping!==Sn?sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,ng("linearToOutputTexel",t.outputColorSpace),rg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Oo(a),a=gc(a,t),a=_c(a,t),o=Oo(o),o=gc(o,t),o=_c(o,t),a=vc(a),o=vc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=y+m+a,E=y+u+o,x=uc(s,s.VERTEX_SHADER,b),w=uc(s,s.FRAGMENT_SHADER,E);s.attachShader(_,x),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(I){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(x)||"",A=s.getShaderInfoLog(w)||"",L=z.trim(),D=B.trim(),N=A.trim();let H=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,x,w);else{const te=mc(s,x,"vertex"),U=mc(s,w,"fragment");Ze("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+te+`
`+U)}else L!==""?Be("WebGLProgram: Program Info Log:",L):(D===""||N==="")&&(ee=!1);ee&&(I.diagnostics={runnable:H,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:u}})}s.deleteShader(x),s.deleteShader(w),C=new Tr(s,_),S=lg(s,_)}let C;this.getUniforms=function(){return C===void 0&&P(this),C};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,J0)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=w,this}let Eg=0;class Tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wg(e),t.set(e,i)),i}}class wg{constructor(e){this.id=Eg++,this.code=e,this.usedTimes=0}}function Ag(n,e,t,i,s,r,a){const o=new il,l=new Tg,c=new Set,h=[],f=new Map,d=s.logarithmicDepthBuffer;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,T,I,z,B){const A=z.fog,L=B.geometry,D=S.isMeshStandardMaterial?z.environment:null,N=(S.isMeshStandardMaterial?t:e).get(S.envMap||D),H=N&&N.mapping===Fr?N.image.height:null,ee=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&Be("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,U=te!==void 0?te.length:0;let V=0;L.morphAttributes.position!==void 0&&(V=1),L.morphAttributes.normal!==void 0&&(V=2),L.morphAttributes.color!==void 0&&(V=3);let re,be,Ee,$;if(ee){const it=mn[ee];re=it.vertexShader,be=it.fragmentShader}else re=S.vertexShader,be=S.fragmentShader,l.update(S),Ee=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const Q=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ue=B.isInstancedMesh===!0,de=B.isBatchedMesh===!0,De=!!S.map,Je=!!S.matcap,Ne=!!N,Xe=!!S.aoMap,Ce=!!S.lightMap,ke=!!S.bumpMap,tt=!!S.normalMap,F=!!S.displacementMap,dt=!!S.emissiveMap,Ye=!!S.metalnessMap,je=!!S.roughnessMap,we=S.anisotropy>0,R=S.clearcoat>0,v=S.dispersion>0,O=S.iridescence>0,J=S.sheen>0,K=S.transmission>0,j=we&&!!S.anisotropyMap,Me=R&&!!S.clearcoatMap,he=R&&!!S.clearcoatNormalMap,ne=R&&!!S.clearcoatRoughnessMap,ce=O&&!!S.iridescenceMap,Z=O&&!!S.iridescenceThicknessMap,ae=J&&!!S.sheenColorMap,ie=J&&!!S.sheenRoughnessMap,ue=!!S.specularMap,le=!!S.specularColorMap,ze=!!S.specularIntensityMap,k=K&&!!S.transmissionMap,_e=K&&!!S.thicknessMap,fe=!!S.gradientMap,xe=!!S.alphaMap,oe=S.alphaTest>0,se=!!S.alphaHash,pe=!!S.extensions;let Oe=Sn;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const ut={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:be,defines:S.defines,customVertexShaderID:Ee,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:de,batchingColor:de&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Zi,alphaToCoverage:!!S.alphaToCoverage,map:De,matcap:Je,envMap:Ne,envMapMode:Ne&&N.mapping,envMapCubeUVHeight:H,aoMap:Xe,lightMap:Ce,bumpMap:ke,normalMap:tt,displacementMap:F,emissiveMap:dt,normalMapObjectSpace:tt&&S.normalMapType===fd,normalMapTangentSpace:tt&&S.normalMapType===gf,metalnessMap:Ye,roughnessMap:je,anisotropy:we,anisotropyMap:j,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:he,clearcoatRoughnessMap:ne,dispersion:v,iridescence:O,iridescenceMap:ce,iridescenceThicknessMap:Z,sheen:J,sheenColorMap:ae,sheenRoughnessMap:ie,specularMap:ue,specularColorMap:le,specularIntensityMap:ze,transmission:K,transmissionMap:k,thicknessMap:_e,gradientMap:fe,opaque:S.transparent===!1&&S.blending===Xi&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:oe,alphaHash:se,combine:S.combine,mapUv:De&&_(S.map.channel),aoMapUv:Xe&&_(S.aoMap.channel),lightMapUv:Ce&&_(S.lightMap.channel),bumpMapUv:ke&&_(S.bumpMap.channel),normalMapUv:tt&&_(S.normalMap.channel),displacementMapUv:F&&_(S.displacementMap.channel),emissiveMapUv:dt&&_(S.emissiveMap.channel),metalnessMapUv:Ye&&_(S.metalnessMap.channel),roughnessMapUv:je&&_(S.roughnessMap.channel),anisotropyMapUv:j&&_(S.anisotropyMap.channel),clearcoatMapUv:Me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(S.sheenRoughnessMap.channel),specularMapUv:ue&&_(S.specularMap.channel),specularColorMapUv:le&&_(S.specularColorMap.channel),specularIntensityMapUv:ze&&_(S.specularIntensityMap.channel),transmissionMapUv:k&&_(S.transmissionMap.channel),thicknessMapUv:_e&&_(S.thicknessMap.channel),alphaMapUv:xe&&_(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(tt||we),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!L.attributes.uv&&(De||xe),fog:!!A,useFog:S.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:B.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:dt&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Rt,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&S.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function u(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)T.push(I),T.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(y(T,S),b(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function y(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function b(S,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const T=g[S.type];let I;if(T){const z=mn[T];I=Od.clone(z.uniforms)}else I=S.uniforms;return I}function x(S,T){let I=f.get(T);return I!==void 0?++I.usedTimes:(I=new bg(n,T,S,r),h.push(I),f.set(T,I)),I}function w(S){if(--S.usedTimes===0){const T=h.indexOf(S);h[T]=h[h.length-1],h.pop(),f.delete(S.cacheKey),S.destroy()}}function P(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:x,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:C}}function Rg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Pg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f,d,p,g,_,m){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=m),e++,u}function o(f,d,p,g,_,m){const u=a(f,d,p,g,_,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(f,d,p,g,_,m){const u=a(f,d,p,g,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||Pg),i.length>1&&i.sort(d||Sc),s.length>1&&s.sort(d||Sc)}function h(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Cg(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new xc,n.set(i,[a])):s>=r.length?(a=new xc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ke};break;case"SpotLight":t={position:new W,direction:new W,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Ig(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Dg=0;function Ug(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ng(n){const e=new Lg,t=Ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const s=new W,r=new mt,a=new mt;function o(c){let h=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,y=0,b=0,E=0,x=0,w=0,P=0;c.sort(Ug);for(let S=0,T=c.length;S<T;S++){const I=c[S],z=I.color,B=I.intensity,A=I.distance;let L=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ki?L=I.shadow.map.texture:L=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*B,f+=z.g*B,d+=z.b*B;else if(I.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(I.sh.coefficients[D],B);P++}else if(I.isDirectionalLight){const D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const N=I.shadow,H=t.get(I);H.shadowIntensity=N.intensity,H.shadowBias=N.bias,H.shadowNormalBias=N.normalBias,H.shadowRadius=N.radius,H.shadowMapSize=N.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=I.shadow.matrix,y++}i.directional[p]=D,p++}else if(I.isSpotLight){const D=e.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(z).multiplyScalar(B),D.distance=A,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,i.spot[_]=D;const N=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,N.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[_]=N.matrix,I.castShadow){const H=t.get(I);H.shadowIntensity=N.intensity,H.shadowBias=N.bias,H.shadowNormalBias=N.normalBias,H.shadowRadius=N.radius,H.shadowMapSize=N.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=L,E++}_++}else if(I.isRectAreaLight){const D=e.get(I);D.color.copy(z).multiplyScalar(B),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=D,m++}else if(I.isPointLight){const D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){const N=I.shadow,H=t.get(I);H.shadowIntensity=N.intensity,H.shadowBias=N.bias,H.shadowNormalBias=N.normalBias,H.shadowRadius=N.radius,H.shadowMapSize=N.mapSize,H.shadowCameraNear=N.camera.near,H.shadowCameraFar=N.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=D,g++}else if(I.isHemisphereLight){const D=e.get(I);D.skyColor.copy(I.color).multiplyScalar(B),D.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[u]=D,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==y||C.numPointShadows!==b||C.numSpotShadows!==E||C.numSpotMaps!==x||C.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=y,C.numPointShadows=b,C.numSpotShadows=E,C.numSpotMaps=x,C.numLightProbes=P,i.version=Dg++)}function l(c,h){let f=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){const b=c[u];if(b.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Mc(n){const e=new Ng(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Fg(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Mc(n),e.set(s,[o])):r>=a.length?(o=new Mc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
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
}`,Bg=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],zg=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],bc=new mt,gs=new W,Aa=new W;function Gg(n,e,t){let i=new rl;const s=new Ve,r=new Ve,a=new xt,o=new Zd,l=new Jd,c={},h=t.maxTextureSize,f={[Fn]:zt,[zt]:Fn,[Rt]:Rt},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:kg,fragmentShader:Og}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Se(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let u=this.type;this.render=function(w,P,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Gh&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Sr);const S=n.getRenderTarget(),T=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Dn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=u!==this.type;B&&P.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(L=>L.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,L=w.length;A<L;A++){const D=w[A],N=D.shadow;if(N===void 0){Be("WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const H=N.getFrameExtents();if(s.multiply(H),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,N.mapSize.y=r.y)),N.map===null||B===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===xs){if(D.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new xn(s.x,s.y,{format:Ki,type:kn,minFilter:vt,magFilter:vt,generateMipmaps:!1}),N.map.texture.name=D.name+".shadowMap",N.map.depthTexture=new Ds(s.x,s.y,_n),N.map.depthTexture.name=D.name+".shadowMapDepth",N.map.depthTexture.format=On,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=bt,N.map.depthTexture.magFilter=bt}else{D.isPointLight?(N.map=new wf(s.x),N.map.depthTexture=new $d(s.x,Mn)):(N.map=new xn(s.x,s.y),N.map.depthTexture=new Ds(s.x,s.y,Mn)),N.map.depthTexture.name=D.name+".shadowMap",N.map.depthTexture.format=On;const te=n.state.buffers.depth.getReversed();this.type===Sr?(N.map.depthTexture.compareFunction=te?el:Qo,N.map.depthTexture.minFilter=vt,N.map.depthTexture.magFilter=vt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=bt,N.map.depthTexture.magFilter=bt)}N.camera.updateProjectionMatrix()}const ee=N.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<ee;te++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,te),n.clear();else{te===0&&(n.setRenderTarget(N.map),n.clear());const U=N.getViewport(te);a.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),z.viewport(a)}if(D.isPointLight){const U=N.camera,V=N.matrix,re=D.distance||U.far;re!==U.far&&(U.far=re,U.updateProjectionMatrix()),gs.setFromMatrixPosition(D.matrixWorld),U.position.copy(gs),Aa.copy(U.position),Aa.add(Bg[te]),U.up.copy(zg[te]),U.lookAt(Aa),U.updateMatrixWorld(),V.makeTranslation(-gs.x,-gs.y,-gs.z),bc.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),N._frustum.setFromProjectionMatrix(bc,U.coordinateSystem,U.reversedDepth)}else N.updateMatrices(D);i=N.getFrustum(),E(P,C,N.camera,D,this.type)}N.isPointLightShadow!==!0&&this.type===xs&&y(N,C),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(S,T,I)};function y(w,P){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xn(s.x,s.y,{format:Ki,type:kn})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,C,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,C,p,_,null)}function b(w,P,C,S){let T=null;const I=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)T=I;else if(T=C.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=T.uuid,B=P.uuid;let A=c[z];A===void 0&&(A={},c[z]=A);let L=A[B];L===void 0&&(L=T.clone(),A[B]=L,P.addEventListener("dispose",x)),T=L}if(T.visible=P.visible,T.wireframe=P.wireframe,S===xs?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:f[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=n.properties.get(T);z.light=C}return T}function E(w,P,C,S,T){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===xs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const B=e.update(w),A=w.material;if(Array.isArray(A)){const L=B.groups;for(let D=0,N=L.length;D<N;D++){const H=L[D],ee=A[H.materialIndex];if(ee&&ee.visible){const te=b(w,ee,S,T);w.onBeforeShadow(n,w,P,C,B,te,H),n.renderBufferDirect(C,null,B,te,w,H),w.onAfterShadow(n,w,P,C,B,te,H)}}}else if(A.visible){const L=b(w,A,S,T);w.onBeforeShadow(n,w,P,C,B,L,null),n.renderBufferDirect(C,null,B,L,w,null),w.onAfterShadow(n,w,P,C,B,L,null)}}const z=w.children;for(let B=0,A=z.length;B<A;B++)E(z[B],P,C,S,T)}function x(w){w.target.removeEventListener("dispose",x);for(const C in c){const S=c[C],T=w.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const Vg={[Xa]:qa,[Ya]:Ka,[ja]:Za,[ji]:$a,[qa]:Xa,[Ka]:Ya,[Za]:ja,[$a]:ji};function Hg(n,e){function t(){let k=!1;const _e=new xt;let fe=null;const xe=new xt(0,0,0,0);return{setMask:function(oe){fe!==oe&&!k&&(n.colorMask(oe,oe,oe,oe),fe=oe)},setLocked:function(oe){k=oe},setClear:function(oe,se,pe,Oe,ut){ut===!0&&(oe*=Oe,se*=Oe,pe*=Oe),_e.set(oe,se,pe,Oe),xe.equals(_e)===!1&&(n.clearColor(oe,se,pe,Oe),xe.copy(_e))},reset:function(){k=!1,fe=null,xe.set(-1,0,0,0)}}}function i(){let k=!1,_e=!1,fe=null,xe=null,oe=null;return{setReversed:function(se){if(_e!==se){const pe=e.get("EXT_clip_control");se?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),_e=se;const Oe=oe;oe=null,this.setClear(Oe)}},getReversed:function(){return _e},setTest:function(se){se?Q(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(se){fe!==se&&!k&&(n.depthMask(se),fe=se)},setFunc:function(se){if(_e&&(se=Vg[se]),xe!==se){switch(se){case Xa:n.depthFunc(n.NEVER);break;case qa:n.depthFunc(n.ALWAYS);break;case Ya:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case ja:n.depthFunc(n.EQUAL);break;case $a:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case Za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=se}},setLocked:function(se){k=se},setClear:function(se){oe!==se&&(_e&&(se=1-se),n.clearDepth(se),oe=se)},reset:function(){k=!1,fe=null,xe=null,oe=null,_e=!1}}}function s(){let k=!1,_e=null,fe=null,xe=null,oe=null,se=null,pe=null,Oe=null,ut=null;return{setTest:function(it){k||(it?Q(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(it){_e!==it&&!k&&(n.stencilMask(it),_e=it)},setFunc:function(it,un,Tn){(fe!==it||xe!==un||oe!==Tn)&&(n.stencilFunc(it,un,Tn),fe=it,xe=un,oe=Tn)},setOp:function(it,un,Tn){(se!==it||pe!==un||Oe!==Tn)&&(n.stencilOp(it,un,Tn),se=it,pe=un,Oe=Tn)},setLocked:function(it){k=it},setClear:function(it){ut!==it&&(n.clearStencil(it),ut=it)},reset:function(){k=!1,_e=null,fe=null,xe=null,oe=null,se=null,pe=null,Oe=null,ut=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,u=null,y=null,b=null,E=null,x=null,w=null,P=new Ke(0,0,0),C=0,S=!1,T=null,I=null,z=null,B=null,A=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,N=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(H)[1]),D=N>=1):H.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),D=N>=2);let ee=null,te={};const U=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),re=new xt().fromArray(U),be=new xt().fromArray(V);function Ee(k,_e,fe,xe){const oe=new Uint8Array(4),se=n.createTexture();n.bindTexture(k,se),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<fe;pe++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(_e+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return se}const $={};$[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(ji),ke(!1),tt(El),Q(n.CULL_FACE),Xe(Dn);function Q(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function me(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function Ue(k,_e){return f[k]!==_e?(n.bindFramebuffer(k,_e),f[k]=_e,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_e),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function de(k,_e){let fe=p,xe=!1;if(k){fe=d.get(_e),fe===void 0&&(fe=[],d.set(_e,fe));const oe=k.textures;if(fe.length!==oe.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let se=0,pe=oe.length;se<pe;se++)fe[se]=n.COLOR_ATTACHMENT0+se;fe.length=oe.length,xe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,xe=!0);xe&&n.drawBuffers(fe)}function De(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const Je={[hi]:n.FUNC_ADD,[Hh]:n.FUNC_SUBTRACT,[Wh]:n.FUNC_REVERSE_SUBTRACT};Je[Xh]=n.MIN,Je[qh]=n.MAX;const Ne={[Yh]:n.ZERO,[jh]:n.ONE,[$h]:n.SRC_COLOR,[Ha]:n.SRC_ALPHA,[td]:n.SRC_ALPHA_SATURATE,[Qh]:n.DST_COLOR,[Zh]:n.DST_ALPHA,[Kh]:n.ONE_MINUS_SRC_COLOR,[Wa]:n.ONE_MINUS_SRC_ALPHA,[ed]:n.ONE_MINUS_DST_COLOR,[Jh]:n.ONE_MINUS_DST_ALPHA,[nd]:n.CONSTANT_COLOR,[id]:n.ONE_MINUS_CONSTANT_COLOR,[sd]:n.CONSTANT_ALPHA,[rd]:n.ONE_MINUS_CONSTANT_ALPHA};function Xe(k,_e,fe,xe,oe,se,pe,Oe,ut,it){if(k===Dn){_===!0&&(me(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),k!==Vh){if(k!==m||it!==S){if((u!==hi||E!==hi)&&(n.blendEquation(n.FUNC_ADD),u=hi,E=hi),it)switch(k){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tl:n.blendFunc(n.ONE,n.ONE);break;case wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Al:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",k);break}else switch(k){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wl:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",k);break}y=null,b=null,x=null,w=null,P.set(0,0,0),C=0,m=k,S=it}return}oe=oe||_e,se=se||fe,pe=pe||xe,(_e!==u||oe!==E)&&(n.blendEquationSeparate(Je[_e],Je[oe]),u=_e,E=oe),(fe!==y||xe!==b||se!==x||pe!==w)&&(n.blendFuncSeparate(Ne[fe],Ne[xe],Ne[se],Ne[pe]),y=fe,b=xe,x=se,w=pe),(Oe.equals(P)===!1||ut!==C)&&(n.blendColor(Oe.r,Oe.g,Oe.b,ut),P.copy(Oe),C=ut),m=k,S=!1}function Ce(k,_e){k.side===Rt?me(n.CULL_FACE):Q(n.CULL_FACE);let fe=k.side===zt;_e&&(fe=!fe),ke(fe),k.blending===Xi&&k.transparent===!1?Xe(Dn):Xe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const xe=k.stencilWrite;o.setTest(xe),xe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),dt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(k){T!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),T=k)}function tt(k){k!==Bh?(Q(n.CULL_FACE),k!==I&&(k===El?n.cullFace(n.BACK):k===zh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),I=k}function F(k){k!==z&&(D&&n.lineWidth(k),z=k)}function dt(k,_e,fe){k?(Q(n.POLYGON_OFFSET_FILL),(B!==_e||A!==fe)&&(n.polygonOffset(_e,fe),B=_e,A=fe)):me(n.POLYGON_OFFSET_FILL)}function Ye(k){k?Q(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function je(k){k===void 0&&(k=n.TEXTURE0+L-1),ee!==k&&(n.activeTexture(k),ee=k)}function we(k,_e,fe){fe===void 0&&(ee===null?fe=n.TEXTURE0+L-1:fe=ee);let xe=te[fe];xe===void 0&&(xe={type:void 0,texture:void 0},te[fe]=xe),(xe.type!==k||xe.texture!==_e)&&(ee!==fe&&(n.activeTexture(fe),ee=fe),n.bindTexture(k,_e||$[k]),xe.type=k,xe.texture=_e)}function R(){const k=te[ee];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(k){Ze("WebGLState:",k)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(k){Ze("WebGLState:",k)}}function J(){try{n.texSubImage2D(...arguments)}catch(k){Ze("WebGLState:",k)}}function K(){try{n.texSubImage3D(...arguments)}catch(k){Ze("WebGLState:",k)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(k){Ze("WebGLState:",k)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(k){Ze("WebGLState:",k)}}function he(){try{n.texStorage2D(...arguments)}catch(k){Ze("WebGLState:",k)}}function ne(){try{n.texStorage3D(...arguments)}catch(k){Ze("WebGLState:",k)}}function ce(){try{n.texImage2D(...arguments)}catch(k){Ze("WebGLState:",k)}}function Z(){try{n.texImage3D(...arguments)}catch(k){Ze("WebGLState:",k)}}function ae(k){re.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),re.copy(k))}function ie(k){be.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),be.copy(k))}function ue(k,_e){let fe=c.get(_e);fe===void 0&&(fe=new WeakMap,c.set(_e,fe));let xe=fe.get(k);xe===void 0&&(xe=n.getUniformBlockIndex(_e,k.name),fe.set(k,xe))}function le(k,_e){const xe=c.get(_e).get(k);l.get(_e)!==xe&&(n.uniformBlockBinding(_e,xe,k.__bindingPointIndex),l.set(_e,xe))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ee=null,te={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,u=null,y=null,b=null,E=null,x=null,w=null,P=new Ke(0,0,0),C=0,S=!1,T=null,I=null,z=null,B=null,A=null,re.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:me,bindFramebuffer:Ue,drawBuffers:de,useProgram:De,setBlending:Xe,setMaterial:Ce,setFlipSided:ke,setCullFace:tt,setLineWidth:F,setPolygonOffset:dt,setScissorTest:Ye,activeTexture:je,bindTexture:we,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:ce,texImage3D:Z,updateUBOMapping:ue,uniformBlockBinding:le,texStorage2D:he,texStorage3D:ne,texSubImage2D:J,texSubImage3D:K,compressedTexSubImage2D:j,compressedTexSubImage3D:Me,scissor:ae,viewport:ie,reset:ze}}function Wg(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return p?new OffscreenCanvas(R,v):Cr("canvas")}function _(R,v,O){let J=1;const K=we(R);if((K.width>O||K.height>O)&&(J=O/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(J*K.width),Me=Math.floor(J*K.height);f===void 0&&(f=g(j,Me));const he=v?g(j,Me):f;return he.width=j,he.height=Me,he.getContext("2d").drawImage(R,0,0,j,Me),Be("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+Me+")."),he}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,v,O,J,K=!1){if(R!==null){if(n[R]!==void 0)return n[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=v;if(v===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),v===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),v===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),v===n.RGBA){const Me=K?Rr:Qe.getTransfer(J);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=Me===rt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(R,v){let O;return R?v===null||v===Mn||v===Cs?O=n.DEPTH24_STENCIL8:v===_n?O=n.DEPTH32F_STENCIL8:v===Ps&&(O=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mn||v===Cs?O=n.DEPTH_COMPONENT24:v===_n?O=n.DEPTH_COMPONENT32F:v===Ps&&(O=n.DEPTH_COMPONENT16),O}function x(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==bt&&R.minFilter!==vt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){const v=R.target;v.removeEventListener("dispose",w),C(v),v.isVideoTexture&&h.delete(v)}function P(R){const v=R.target;v.removeEventListener("dispose",P),T(v)}function C(R){const v=i.get(R);if(v.__webglInit===void 0)return;const O=R.source,J=d.get(O);if(J){const K=J[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(R),Object.keys(J).length===0&&d.delete(O)}i.remove(R)}function S(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const O=R.source,J=d.get(O);delete J[v.__cacheKey],a.memory.textures--}function T(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let K=0;K<v.__webglFramebuffer[J].length;K++)n.deleteFramebuffer(v.__webglFramebuffer[J][K]);else n.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)n.deleteFramebuffer(v.__webglFramebuffer[J]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=R.textures;for(let J=0,K=O.length;J<K;J++){const j=i.get(O[J]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(O[J])}i.remove(R)}let I=0;function z(){I=0}function B(){const R=I;return R>=s.maxTextures&&Be("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function A(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function L(R,v){const O=i.get(R);if(R.isVideoTexture&&Ye(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const J=R.image;if(J===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,R,v);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function D(R,v){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){$(O,R,v);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function N(R,v){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){$(O,R,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function H(R,v){const O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){Q(O,R,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const ee={[Rs]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[eo]:n.MIRRORED_REPEAT},te={[bt]:n.NEAREST,[ld]:n.NEAREST_MIPMAP_NEAREST,[$s]:n.NEAREST_MIPMAP_LINEAR,[vt]:n.LINEAR,[jr]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},U={[hd]:n.NEVER,[gd]:n.ALWAYS,[dd]:n.LESS,[Qo]:n.LEQUAL,[ud]:n.EQUAL,[el]:n.GEQUAL,[pd]:n.GREATER,[md]:n.NOTEQUAL};function V(R,v){if(v.type===_n&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===vt||v.magFilter===jr||v.magFilter===$s||v.magFilter===ui||v.minFilter===vt||v.minFilter===jr||v.minFilter===$s||v.minFilter===ui)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ee[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ee[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ee[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,te[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,te[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,U[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bt||v.minFilter!==$s&&v.minFilter!==ui||v.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function re(R,v){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",w));const J=v.source;let K=d.get(J);K===void 0&&(K={},d.set(J,K));const j=A(v);if(j!==R.__cacheKey){K[j]===void 0&&(K[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[j].usedTimes++;const Me=K[R.__cacheKey];Me!==void 0&&(K[R.__cacheKey].usedTimes--,Me.usedTimes===0&&S(v)),R.__cacheKey=j,R.__webglTexture=K[j].texture}return O}function be(R,v,O){return Math.floor(Math.floor(R/O)/v)}function Ee(R,v,O,J){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,O,J,v.data);else{j.sort((Z,ae)=>Z.start-ae.start);let Me=0;for(let Z=1;Z<j.length;Z++){const ae=j[Me],ie=j[Z],ue=ae.start+ae.count,le=be(ie.start,v.width,4),ze=be(ae.start,v.width,4);ie.start<=ue+1&&le===ze&&be(ie.start+ie.count-1,v.width,4)===le?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++Me,j[Me]=ie)}j.length=Me+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),ne=n.getParameter(n.UNPACK_SKIP_PIXELS),ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Z=0,ae=j.length;Z<ae;Z++){const ie=j[Z],ue=Math.floor(ie.start/4),le=Math.ceil(ie.count/4),ze=ue%v.width,k=Math.floor(ue/v.width),_e=le,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,ze,k,_e,fe,O,J,v.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function $(R,v,O){let J=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=n.TEXTURE_3D);const K=re(R,v),j=v.source;t.bindTexture(J,R.__webglTexture,n.TEXTURE0+O);const Me=i.get(j);if(j.version!==Me.__version||K===!0){t.activeTexture(n.TEXTURE0+O);const he=Qe.getPrimaries(Qe.workingColorSpace),ne=v.colorSpace===Yn?null:Qe.getPrimaries(v.colorSpace),ce=v.colorSpace===Yn||he===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let Z=_(v.image,!1,s.maxTextureSize);Z=je(v,Z);const ae=r.convert(v.format,v.colorSpace),ie=r.convert(v.type);let ue=b(v.internalFormat,ae,ie,v.colorSpace,v.isVideoTexture);V(J,v);let le;const ze=v.mipmaps,k=v.isVideoTexture!==!0,_e=Me.__version===void 0||K===!0,fe=j.dataReady,xe=x(v,Z);if(v.isDepthTexture)ue=E(v.format===pi,v.type),_e&&(k?t.texStorage2D(n.TEXTURE_2D,1,ue,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ue,Z.width,Z.height,0,ae,ie,null));else if(v.isDataTexture)if(ze.length>0){k&&_e&&t.texStorage2D(n.TEXTURE_2D,xe,ue,ze[0].width,ze[0].height);for(let oe=0,se=ze.length;oe<se;oe++)le=ze[oe],k?fe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,le.width,le.height,ae,ie,le.data):t.texImage2D(n.TEXTURE_2D,oe,ue,le.width,le.height,0,ae,ie,le.data);v.generateMipmaps=!1}else k?(_e&&t.texStorage2D(n.TEXTURE_2D,xe,ue,Z.width,Z.height),fe&&Ee(v,Z,ae,ie)):t.texImage2D(n.TEXTURE_2D,0,ue,Z.width,Z.height,0,ae,ie,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){k&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ue,ze[0].width,ze[0].height,Z.depth);for(let oe=0,se=ze.length;oe<se;oe++)if(le=ze[oe],v.format!==ln)if(ae!==null)if(k){if(fe)if(v.layerUpdates.size>0){const pe=ec(le.width,le.height,v.format,v.type);for(const Oe of v.layerUpdates){const ut=le.data.subarray(Oe*pe/le.data.BYTES_PER_ELEMENT,(Oe+1)*pe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Oe,le.width,le.height,1,ae,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,le.width,le.height,Z.depth,ae,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,ue,le.width,le.height,Z.depth,0,le.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,le.width,le.height,Z.depth,ae,ie,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,ue,le.width,le.height,Z.depth,0,ae,ie,le.data)}else{k&&_e&&t.texStorage2D(n.TEXTURE_2D,xe,ue,ze[0].width,ze[0].height);for(let oe=0,se=ze.length;oe<se;oe++)le=ze[oe],v.format!==ln?ae!==null?k?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,le.width,le.height,ae,le.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,ue,le.width,le.height,0,le.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?fe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,le.width,le.height,ae,ie,le.data):t.texImage2D(n.TEXTURE_2D,oe,ue,le.width,le.height,0,ae,ie,le.data)}else if(v.isDataArrayTexture)if(k){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,ue,Z.width,Z.height,Z.depth),fe)if(v.layerUpdates.size>0){const oe=ec(Z.width,Z.height,v.format,v.type);for(const se of v.layerUpdates){const pe=Z.data.subarray(se*oe/Z.data.BYTES_PER_ELEMENT,(se+1)*oe/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,Z.width,Z.height,1,ae,ie,pe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ae,ie,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Z.width,Z.height,Z.depth,0,ae,ie,Z.data);else if(v.isData3DTexture)k?(_e&&t.texStorage3D(n.TEXTURE_3D,xe,ue,Z.width,Z.height,Z.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ae,ie,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Z.width,Z.height,Z.depth,0,ae,ie,Z.data);else if(v.isFramebufferTexture){if(_e)if(k)t.texStorage2D(n.TEXTURE_2D,xe,ue,Z.width,Z.height);else{let oe=Z.width,se=Z.height;for(let pe=0;pe<xe;pe++)t.texImage2D(n.TEXTURE_2D,pe,ue,oe,se,0,ae,ie,null),oe>>=1,se>>=1}}else if(ze.length>0){if(k&&_e){const oe=we(ze[0]);t.texStorage2D(n.TEXTURE_2D,xe,ue,oe.width,oe.height)}for(let oe=0,se=ze.length;oe<se;oe++)le=ze[oe],k?fe&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ae,ie,le):t.texImage2D(n.TEXTURE_2D,oe,ue,ae,ie,le);v.generateMipmaps=!1}else if(k){if(_e){const oe=we(Z);t.texStorage2D(n.TEXTURE_2D,xe,ue,oe.width,oe.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,ie,Z)}else t.texImage2D(n.TEXTURE_2D,0,ue,ae,ie,Z);m(v)&&u(J),Me.__version=j.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Q(R,v,O){if(v.image.length!==6)return;const J=re(R,v),K=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+O);const j=i.get(K);if(K.version!==j.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const Me=Qe.getPrimaries(Qe.workingColorSpace),he=v.colorSpace===Yn?null:Qe.getPrimaries(v.colorSpace),ne=v.colorSpace===Yn||Me===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const ce=v.isCompressedTexture||v.image[0].isCompressedTexture,Z=v.image[0]&&v.image[0].isDataTexture,ae=[];for(let se=0;se<6;se++)!ce&&!Z?ae[se]=_(v.image[se],!0,s.maxCubemapSize):ae[se]=Z?v.image[se].image:v.image[se],ae[se]=je(v,ae[se]);const ie=ae[0],ue=r.convert(v.format,v.colorSpace),le=r.convert(v.type),ze=b(v.internalFormat,ue,le,v.colorSpace),k=v.isVideoTexture!==!0,_e=j.__version===void 0||J===!0,fe=K.dataReady;let xe=x(v,ie);V(n.TEXTURE_CUBE_MAP,v);let oe;if(ce){k&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,ze,ie.width,ie.height);for(let se=0;se<6;se++){oe=ae[se].mipmaps;for(let pe=0;pe<oe.length;pe++){const Oe=oe[pe];v.format!==ln?ue!==null?k?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,0,0,Oe.width,Oe.height,ue,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,ze,Oe.width,Oe.height,0,Oe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,0,0,Oe.width,Oe.height,ue,le,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,ze,Oe.width,Oe.height,0,ue,le,Oe.data)}}}else{if(oe=v.mipmaps,k&&_e){oe.length>0&&xe++;const se=we(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,ze,se.width,se.height)}for(let se=0;se<6;se++)if(Z){k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ae[se].width,ae[se].height,ue,le,ae[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,ae[se].width,ae[se].height,0,ue,le,ae[se].data);for(let pe=0;pe<oe.length;pe++){const ut=oe[pe].image[se].image;k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,0,0,ut.width,ut.height,ue,le,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,ze,ut.width,ut.height,0,ue,le,ut.data)}}else{k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ue,le,ae[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,ue,le,ae[se]);for(let pe=0;pe<oe.length;pe++){const Oe=oe[pe];k?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,0,0,ue,le,Oe.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,ze,ue,le,Oe.image[se])}}}m(v)&&u(n.TEXTURE_CUBE_MAP),j.__version=K.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function me(R,v,O,J,K,j){const Me=r.convert(O.format,O.colorSpace),he=r.convert(O.type),ne=b(O.internalFormat,Me,he,O.colorSpace),ce=i.get(v),Z=i.get(O);if(Z.__renderTarget=v,!ce.__hasExternalTextures){const ae=Math.max(1,v.width>>j),ie=Math.max(1,v.height>>j);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,j,ne,ae,ie,v.depth,0,Me,he,null):t.texImage2D(K,j,ne,ae,ie,0,Me,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),dt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,K,Z.__webglTexture,0,F(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,K,Z.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(R,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const J=v.depthTexture,K=J&&J.isDepthTexture?J.type:null,j=E(v.stencilBuffer,K),Me=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;dt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(v),j,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(v),j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,R)}else{const J=v.textures;for(let K=0;K<J.length;K++){const j=J[K],Me=r.convert(j.format,j.colorSpace),he=r.convert(j.type),ne=b(j.internalFormat,Me,he,j.colorSpace);dt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(v),ne,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(v),ne,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ne,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(R,v,O){const J=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),V(n.TEXTURE_CUBE_MAP,v.depthTexture);const ce=r.convert(v.depthTexture.format),Z=r.convert(v.depthTexture.type);let ae;v.depthTexture.format===On?ae=n.DEPTH_COMPONENT24:v.depthTexture.format===pi&&(ae=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ae,v.width,v.height,0,ce,Z,null)}}else L(v.depthTexture,0);const j=K.__webglTexture,Me=F(v),he=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,ne=v.depthTexture.format===pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===On)dt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,he,j,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,ne,he,j,0);else if(v.depthTexture.format===pi)dt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,he,j,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,ne,he,j,0);else throw new Error("Unknown depthTexture format")}function De(R){const v=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=J}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let J=0;J<6;J++)de(v.__webglFramebuffer[J],R,J);else{const J=R.texture.mipmaps;J&&J.length>0?de(v.__webglFramebuffer[0],R,0):de(v.__webglFramebuffer,R,0)}else if(O){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=n.createRenderbuffer(),Ue(v.__webglDepthbuffer[J],R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ue(v.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(R,v,O){const J=i.get(R);v!==void 0&&me(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&De(R)}function Ne(R){const v=R.texture,O=i.get(R),J=i.get(v);R.addEventListener("dispose",P);const K=R.textures,j=R.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=v.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let ne=0;ne<v.mipmaps.length;ne++)O.__webglFramebuffer[he][ne]=n.createFramebuffer()}else O.__webglFramebuffer[he]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)O.__webglFramebuffer[he]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Me)for(let he=0,ne=K.length;he<ne;he++){const ce=i.get(K[he]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&dt(R)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<K.length;he++){const ne=K[he];O.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const ce=r.convert(ne.format,ne.colorSpace),Z=r.convert(ne.type),ae=b(ne.internalFormat,ce,Z,ne.colorSpace,R.isXRRenderTarget===!0),ie=F(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,O.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),V(n.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)me(O.__webglFramebuffer[he][ne],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ne);else me(O.__webglFramebuffer[he],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let he=0,ne=K.length;he<ne;he++){const ce=K[he],Z=i.get(ce);let ae=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),V(ae,ce),me(O.__webglFramebuffer,R,ce,n.COLOR_ATTACHMENT0+he,ae,0),m(ce)&&u(ae)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,J.__webglTexture),V(he,v),v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)me(O.__webglFramebuffer[ne],R,v,n.COLOR_ATTACHMENT0,he,ne);else me(O.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,he,0);m(v)&&u(he),t.unbindTexture()}R.depthBuffer&&De(R)}function Xe(R){const v=R.textures;for(let O=0,J=v.length;O<J;O++){const K=v[O];if(m(K)){const j=y(R),Me=i.get(K).__webglTexture;t.bindTexture(j,Me),u(j),t.unbindTexture()}}}const Ce=[],ke=[];function tt(R){if(R.samples>0){if(dt(R)===!1){const v=R.textures,O=R.width,J=R.height;let K=n.COLOR_BUFFER_BIT;const j=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(R),he=v.length>1;if(he)for(let ce=0;ce<v.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ne=R.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ce=0;ce<v.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const Z=i.get(v[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,K,n.NEAREST),l===!0&&(Ce.length=0,ke.length=0,Ce.push(n.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ce.push(j),ke.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let ce=0;ce<v.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ce]);const Z=i.get(v[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function F(R){return Math.min(s.maxSamples,R.samples)}function dt(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ye(R){const v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function je(R,v){const O=R.colorSpace,J=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Zi&&O!==Yn&&(Qe.getTransfer(O)===rt?(J!==ln||K!==qt)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",O)),v}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=L,this.setTexture2DArray=D,this.setTexture3D=N,this.setTextureCube=H,this.rebindTextures=Je,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=me,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xg(n,e){function t(i,s=Yn){let r;const a=Qe.getTransfer(s);if(i===qt)return n.UNSIGNED_BYTE;if(i===jo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$o)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===df)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cf)return n.BYTE;if(i===ff)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===Yo)return n.INT;if(i===Mn)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===kn)return n.HALF_FLOAT;if(i===uf)return n.ALPHA;if(i===pf)return n.RGB;if(i===ln)return n.RGBA;if(i===On)return n.DEPTH_COMPONENT;if(i===pi)return n.DEPTH_STENCIL;if(i===mf)return n.RED;if(i===Ko)return n.RED_INTEGER;if(i===Ki)return n.RG;if(i===Zo)return n.RG_INTEGER;if(i===Jo)return n.RGBA_INTEGER;if(i===xr||i===Mr||i===br||i===Er)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===to||i===no||i===io||i===so)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===so)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ro||i===ao||i===oo||i===lo||i===co||i===fo||i===ho)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ro||i===ao)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===lo)return r.COMPRESSED_R11_EAC;if(i===co)return r.COMPRESSED_SIGNED_R11_EAC;if(i===fo)return r.COMPRESSED_RG11_EAC;if(i===ho)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uo||i===po||i===mo||i===go||i===_o||i===vo||i===yo||i===So||i===xo||i===Mo||i===bo||i===Eo||i===To||i===wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===uo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===po)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===go)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_o)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===So)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===To)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ao||i===Ro||i===Po)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ao)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Co||i===Lo||i===Io||i===Do)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yg=`
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

}`;class jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Rf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new En({vertexShader:qg,fragmentShader:Yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends is{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new jg,u={},y=t.getContextAttributes();let b=null,E=null;const x=[],w=[],P=new Ve;let C=null;const S=new Xt;S.viewport=new xt;const T=new Xt;T.viewport=new xt;const I=[S,T],z=new iu;let B=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=x[$];return Q===void 0&&(Q=new _a,x[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=x[$];return Q===void 0&&(Q=new _a,x[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=x[$];return Q===void 0&&(Q=new _a,x[$]=Q),Q.getHandSpace()};function L($){const Q=w.indexOf($.inputSource);if(Q===-1)return;const me=x[Q];me!==void 0&&(me.update($.inputSource,$.frame,c||a),me.dispatchEvent({type:$.type,data:$.inputSource}))}function D(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",N);for(let $=0;$<x.length;$++){const Q=w[$];Q!==null&&(w[$]=null,x[$].disconnect(Q))}B=null,A=null,m.reset();for(const $ in u)delete u[$];e.setRenderTarget(b),p=null,d=null,f=null,s=null,E=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",D),s.addEventListener("inputsourceschange",N),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,de=null;y.depth&&(de=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?pi:On,Ue=y.stencil?Cs:Mn);const De={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(De),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new xn(d.textureWidth,d.textureHeight,{format:ln,type:qt,depthTexture:new Ds(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new xn(p.framebufferWidth,p.framebufferHeight,{format:ln,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N($){for(let Q=0;Q<$.removed.length;Q++){const me=$.removed[Q],Ue=w.indexOf(me);Ue>=0&&(w[Ue]=null,x[Ue].disconnect(me))}for(let Q=0;Q<$.added.length;Q++){const me=$.added[Q];let Ue=w.indexOf(me);if(Ue===-1){for(let De=0;De<x.length;De++)if(De>=w.length){w.push(me),Ue=De;break}else if(w[De]===null){w[De]=me,Ue=De;break}if(Ue===-1)break}const de=x[Ue];de&&de.connect(me)}}const H=new W,ee=new W;function te($,Q,me){H.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(me.matrixWorld);const Ue=H.distanceTo(ee),de=Q.projectionMatrix.elements,De=me.projectionMatrix.elements,Je=de[14]/(de[10]-1),Ne=de[14]/(de[10]+1),Xe=(de[9]+1)/de[5],Ce=(de[9]-1)/de[5],ke=(de[8]-1)/de[0],tt=(De[8]+1)/De[0],F=Je*ke,dt=Je*tt,Ye=Ue/(-ke+tt),je=Ye*-ke;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(je),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),de[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const we=Je+Ye,R=Ne+Ye,v=F-je,O=dt+(Ue-je),J=Xe*Ne/R*we,K=Ce*Ne/R*we;$.projectionMatrix.makePerspective(v,O,J,K,we,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function U($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,me=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(me=m.depthFar)),z.near=T.near=S.near=Q,z.far=T.far=S.far=me,(B!==z.near||A!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),B=z.near,A=z.far),z.layers.mask=$.layers.mask|6,S.layers.mask=z.layers.mask&3,T.layers.mask=z.layers.mask&5;const Ue=$.parent,de=z.cameras;U(z,Ue);for(let De=0;De<de.length;De++)U(de[De],Ue);de.length===2?te(z,S,T):z.projectionMatrix.copy(S.projectionMatrix),V($,z,Ue)};function V($,Q,me){me===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=No*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return u[$]};let re=null;function be($,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const me=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ue=!1;me.length!==z.cameras.length&&(z.cameras.length=0,Ue=!0);for(let Ne=0;Ne<me.length;Ne++){const Xe=me[Ne];let Ce=null;if(p!==null)Ce=p.getViewport(Xe);else{const tt=f.getViewSubImage(d,Xe);Ce=tt.viewport,Ne===0&&(e.setRenderTargetTextures(E,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(E))}let ke=I[Ne];ke===void 0&&(ke=new Xt,ke.layers.enable(Ne),ke.viewport=new xt,I[Ne]=ke),ke.matrix.fromArray(Xe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Xe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Ne===0&&(z.matrix.copy(ke.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ue===!0&&z.cameras.push(ke)}const de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const Ne=f.getDepthInformation(me[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,s.renderState)}if(de&&de.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Ne=0;Ne<me.length;Ne++){const Xe=me[Ne].camera;if(Xe){let Ce=u[Xe];Ce||(Ce=new Rf,u[Xe]=Ce);const ke=f.getCameraImage(Xe);Ce.sourceTexture=ke}}}}for(let me=0;me<x.length;me++){const Ue=w[me],de=x[me];Ue!==null&&de!==void 0&&de.update(Ue,Q,c||a)}re&&re($,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ee=new Cf;Ee.setAnimationLoop(be),this.setAnimationLoop=function($){re=$},this.dispose=function(){}}}const li=new bn,Kg=new mt;function Zg(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,bf(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,b,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,E)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,y,b):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===zt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===zt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=e.get(u),b=y.envMap,E=y.envMapRotation;b&&(m.envMap.value=b,li.copy(E),li.x*=-1,li.y*=-1,li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(li)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,b){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=b*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===zt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const y=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jg(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const E=b.program;i.uniformBlockBinding(y,E)}function c(y,b){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",m));const x=b.program;i.updateUBOMapping(y,x);const w=e.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const b=f();y.__bindingPointIndex=b;const E=n.createBuffer(),x=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,x,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=s[y.id],E=y.uniforms,x=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,P=E.length;w<P;w++){const C=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,T=C.length;S<T;S++){const I=C[S];if(p(I,w,S,x)===!0){const z=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let A=0;for(let L=0;L<B.length;L++){const D=B[L],N=_(D);typeof D=="number"||typeof D=="boolean"?(I.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,z+A,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=0,I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=0,I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=0):(D.toArray(I.__data,A),A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,b,E,x){const w=y.value,P=b+"_"+E;if(x[P]===void 0)return typeof w=="number"||typeof w=="boolean"?x[P]=w:x[P]=w.clone(),!0;{const C=x[P];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return x[P]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){const b=y.uniforms;let E=0;const x=16;for(let P=0,C=b.length;P<C;P++){const S=Array.isArray(b[P])?b[P]:[b[P]];for(let T=0,I=S.length;T<I;T++){const z=S[T],B=Array.isArray(z.value)?z.value:[z.value];for(let A=0,L=B.length;A<L;A++){const D=B[A],N=_(D),H=E%x,ee=H%N.boundary,te=H+ee;E+=ee,te!==0&&x-te<N.storage&&(E+=x-te),z.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=N.storage}}}const w=E%x;return w>0&&(E+=x-w),y.__size=E,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function u(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}const Qg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pn=null;function e_(){return pn===null&&(pn=new Xd(Qg,16,16,Ki,kn),pn.name="DFG_LUT",pn.minFilter=vt,pn.magFilter=vt,pn.wrapS=In,pn.wrapT=In,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class t_{constructor(e={}){const{canvas:t=_d(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=qt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=p,m=new Set([Jo,Zo,Ko]),u=new Set([qt,Mn,Ps,Cs,jo,$o]),y=new Uint32Array(4),b=new Int32Array(4);let E=null,x=null;const w=[],P=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=Zt;let I=0,z=0,B=null,A=-1,L=null;const D=new xt,N=new xt;let H=null;const ee=new Ke(0);let te=0,U=t.width,V=t.height,re=1,be=null,Ee=null;const $=new xt(0,0,U,V),Q=new xt(0,0,U,V);let me=!1;const Ue=new rl;let de=!1,De=!1;const Je=new mt,Ne=new W,Xe=new xt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function tt(){return B===null?re:1}let F=i;function dt(M,G){return t.getContext(M,G)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qo}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",it,!1),F===null){const G="webgl2";if(F=dt(G,M),F===null)throw dt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ze("WebGLRenderer: "+M.message),M}let Ye,je,we,R,v,O,J,K,j,Me,he,ne,ce,Z,ae,ie,ue,le,ze,k,_e,fe,xe,oe;function se(){Ye=new e0(F),Ye.init(),fe=new Xg(F,Ye),je=new Xm(F,Ye,e,fe),we=new Hg(F,Ye),je.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),R=new i0(F),v=new Rg,O=new Wg(F,Ye,we,v,je,fe,R),J=new Ym(S),K=new Qm(S),j=new ou(F),xe=new Hm(F,j),Me=new t0(F,j,R,xe),he=new r0(F,Me,j,R),ze=new s0(F,je,O),ie=new qm(v),ne=new Ag(S,J,K,Ye,je,xe,ie),ce=new Zg(S,v),Z=new Cg,ae=new Fg(Ye),le=new Vm(S,J,K,we,he,g,l),ue=new Gg(S,he,je),oe=new Jg(F,R,je,we),k=new Wm(F,Ye,R),_e=new n0(F,Ye,R),R.programs=ne.programs,S.capabilities=je,S.extensions=Ye,S.properties=v,S.renderLists=Z,S.shadowMap=ue,S.state=we,S.info=R}se(),_!==qt&&(C=new o0(_,t.width,t.height,s,r));const pe=new $g(S,F);this.xr=pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(U,V,!1))},this.getSize=function(M){return M.set(U,V)},this.setSize=function(M,G,Y=!0){if(pe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}U=M,V=G,t.width=Math.floor(M*re),t.height=Math.floor(G*re),Y===!0&&(t.style.width=M+"px",t.style.height=G+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,M,G)},this.getDrawingBufferSize=function(M){return M.set(U*re,V*re).floor()},this.setDrawingBufferSize=function(M,G,Y){U=M,V=G,re=Y,t.width=Math.floor(M*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,M,G)},this.setEffects=function(M){if(_===qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let G=0;G<M.length;G++)if(M[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy($)},this.setViewport=function(M,G,Y,q){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,G,Y,q),we.viewport(D.copy($).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,G,Y,q){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,G,Y,q),we.scissor(N.copy(Q).multiplyScalar(re).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(M){we.setScissorTest(me=M)},this.setOpaqueSort=function(M){be=M},this.setTransparentSort=function(M){Ee=M},this.getClearColor=function(M){return M.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(M=!0,G=!0,Y=!0){let q=0;if(M){let X=!1;if(B!==null){const ge=B.texture.format;X=m.has(ge)}if(X){const ge=B.texture.type,Te=u.has(ge),ye=le.getClearColor(),Ae=le.getClearAlpha(),Pe=ye.r,Fe=ye.g,Le=ye.b;Te?(y[0]=Pe,y[1]=Fe,y[2]=Le,y[3]=Ae,F.clearBufferuiv(F.COLOR,0,y)):(b[0]=Pe,b[1]=Fe,b[2]=Le,b[3]=Ae,F.clearBufferiv(F.COLOR,0,b))}else q|=F.COLOR_BUFFER_BIT}G&&(q|=F.DEPTH_BUFFER_BIT),Y&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",it,!1),le.dispose(),Z.dispose(),ae.dispose(),v.dispose(),J.dispose(),K.dispose(),he.dispose(),xe.dispose(),oe.dispose(),ne.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",gl),pe.removeEventListener("sessionend",_l),ti.stop()};function Oe(M){M.preventDefault(),Lr("WebGLRenderer: Context Lost."),T=!0}function ut(){Lr("WebGLRenderer: Context Restored."),T=!1;const M=R.autoReset,G=ue.enabled,Y=ue.autoUpdate,q=ue.needsUpdate,X=ue.type;se(),R.autoReset=M,ue.enabled=G,ue.autoUpdate=Y,ue.needsUpdate=q,ue.type=X}function it(M){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function un(M){const G=M.target;G.removeEventListener("dispose",un),Tn(G)}function Tn(M){Ah(M),v.remove(M)}function Ah(M){const G=v.get(M).programs;G!==void 0&&(G.forEach(function(Y){ne.releaseProgram(Y)}),M.isShaderMaterial&&ne.releaseShaderCache(M))}this.renderBufferDirect=function(M,G,Y,q,X,ge){G===null&&(G=Ce);const Te=X.isMesh&&X.matrixWorld.determinant()<0,ye=Ph(M,G,Y,q,X);we.setMaterial(q,Te);let Ae=Y.index,Pe=1;if(q.wireframe===!0){if(Ae=Me.getWireframeAttribute(Y),Ae===void 0)return;Pe=2}const Fe=Y.drawRange,Le=Y.attributes.position;let qe=Fe.start*Pe,lt=(Fe.start+Fe.count)*Pe;ge!==null&&(qe=Math.max(qe,ge.start*Pe),lt=Math.min(lt,(ge.start+ge.count)*Pe)),Ae!==null?(qe=Math.max(qe,0),lt=Math.min(lt,Ae.count)):Le!=null&&(qe=Math.max(qe,0),lt=Math.min(lt,Le.count));const yt=lt-qe;if(yt<0||yt===1/0)return;xe.setup(X,q,ye,Y,Ae);let St,ht=k;if(Ae!==null&&(St=j.get(Ae),ht=_e,ht.setIndex(St)),X.isMesh)q.wireframe===!0?(we.setLineWidth(q.wireframeLinewidth*tt()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(X.isLine){let Ie=q.linewidth;Ie===void 0&&(Ie=1),we.setLineWidth(Ie*tt()),X.isLineSegments?ht.setMode(F.LINES):X.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else X.isPoints?ht.setMode(F.POINTS):X.isSprite&&ht.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ls("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ht.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ie=X._multiDrawStarts,st=X._multiDrawCounts,et=X._multiDrawCount,Gt=Ae?j.get(Ae).bytesPerElement:1,bi=v.get(q).currentProgram.getUniforms();for(let Vt=0;Vt<et;Vt++)bi.setValue(F,"_gl_DrawID",Vt),ht.render(Ie[Vt]/Gt,st[Vt])}else if(X.isInstancedMesh)ht.renderInstances(qe,yt,X.count);else if(Y.isInstancedBufferGeometry){const Ie=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,st=Math.min(Y.instanceCount,Ie);ht.renderInstances(qe,yt,st)}else ht.render(qe,yt)};function ml(M,G,Y){M.transparent===!0&&M.side===Rt&&M.forceSinglePass===!1?(M.side=zt,M.needsUpdate=!0,Ys(M,G,Y),M.side=Fn,M.needsUpdate=!0,Ys(M,G,Y),M.side=Rt):Ys(M,G,Y)}this.compile=function(M,G,Y=null){Y===null&&(Y=M),x=ae.get(Y),x.init(G),P.push(x),Y.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),M!==Y&&M.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const q=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Te=0;Te<ge.length;Te++){const ye=ge[Te];ml(ye,Y,X),q.add(ye)}else ml(ge,Y,X),q.add(ge)}),x=P.pop(),q},this.compileAsync=function(M,G,Y=null){const q=this.compile(M,G,Y);return new Promise(X=>{function ge(){if(q.forEach(function(Te){v.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){X(M);return}setTimeout(ge,10)}Ye.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Xr=null;function Rh(M){Xr&&Xr(M)}function gl(){ti.stop()}function _l(){ti.start()}const ti=new Cf;ti.setAnimationLoop(Rh),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(M){Xr=M,pe.setAnimationLoop(M),M===null?ti.stop():ti.start()},pe.addEventListener("sessionstart",gl),pe.addEventListener("sessionend",_l),this.render=function(M,G){if(G!==void 0&&G.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const Y=pe.enabled===!0&&pe.isPresenting===!0,q=C!==null&&(B===null||Y)&&C.begin(S,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,G,B),x=ae.get(M,P.length),x.init(G),P.push(x),Je.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ue.setFromProjectionMatrix(Je,vn,G.reversedDepth),De=this.localClippingEnabled,de=ie.init(this.clippingPlanes,De),E=Z.get(M,w.length),E.init(),w.push(E),pe.enabled===!0&&pe.isPresenting===!0){const Te=S.xr.getDepthSensingMesh();Te!==null&&qr(Te,G,-1/0,S.sortObjects)}qr(M,G,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(be,Ee),ke=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ke&&le.addToRenderList(E,M),this.info.render.frame++,de===!0&&ie.beginShadows();const X=x.state.shadowsArray;if(ue.render(X,M,G),de===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&C.hasRenderPass())===!1){const Te=E.opaque,ye=E.transmissive;if(x.setupLights(),G.isArrayCamera){const Ae=G.cameras;if(ye.length>0)for(let Pe=0,Fe=Ae.length;Pe<Fe;Pe++){const Le=Ae[Pe];yl(Te,ye,M,Le)}ke&&le.render(M);for(let Pe=0,Fe=Ae.length;Pe<Fe;Pe++){const Le=Ae[Pe];vl(E,M,Le,Le.viewport)}}else ye.length>0&&yl(Te,ye,M,G),ke&&le.render(M),vl(E,M,G)}B!==null&&z===0&&(O.updateMultisampleRenderTarget(B),O.updateRenderTargetMipmap(B)),q&&C.end(S),M.isScene===!0&&M.onAfterRender(S,M,G),xe.resetDefaultState(),A=-1,L=null,P.pop(),P.length>0?(x=P[P.length-1],de===!0&&ie.setGlobalState(S.clippingPlanes,x.state.camera)):x=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function qr(M,G,Y,q){if(M.visible===!1)return;if(M.layers.test(G.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(G);else if(M.isLight)x.pushLight(M),M.castShadow&&x.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ue.intersectsSprite(M)){q&&Xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Je);const Te=he.update(M),ye=M.material;ye.visible&&E.push(M,Te,ye,Y,Xe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ue.intersectsObject(M))){const Te=he.update(M),ye=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xe.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Xe.copy(Te.boundingSphere.center)),Xe.applyMatrix4(M.matrixWorld).applyMatrix4(Je)),Array.isArray(ye)){const Ae=Te.groups;for(let Pe=0,Fe=Ae.length;Pe<Fe;Pe++){const Le=Ae[Pe],qe=ye[Le.materialIndex];qe&&qe.visible&&E.push(M,Te,qe,Y,Xe.z,Le)}}else ye.visible&&E.push(M,Te,ye,Y,Xe.z,null)}}const ge=M.children;for(let Te=0,ye=ge.length;Te<ye;Te++)qr(ge[Te],G,Y,q)}function vl(M,G,Y,q){const{opaque:X,transmissive:ge,transparent:Te}=M;x.setupLightsView(Y),de===!0&&ie.setGlobalState(S.clippingPlanes,Y),q&&we.viewport(D.copy(q)),X.length>0&&qs(X,G,Y),ge.length>0&&qs(ge,G,Y),Te.length>0&&qs(Te,G,Y),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function yl(M,G,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[q.id]===void 0){const qe=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[q.id]=new xn(1,1,{generateMipmaps:!0,type:qe?kn:qt,minFilter:ui,samples:je.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const ge=x.state.transmissionRenderTarget[q.id],Te=q.viewport||D;ge.setSize(Te.z*S.transmissionResolutionScale,Te.w*S.transmissionResolutionScale);const ye=S.getRenderTarget(),Ae=S.getActiveCubeFace(),Pe=S.getActiveMipmapLevel();S.setRenderTarget(ge),S.getClearColor(ee),te=S.getClearAlpha(),te<1&&S.setClearColor(16777215,.5),S.clear(),ke&&le.render(Y);const Fe=S.toneMapping;S.toneMapping=Sn;const Le=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),x.setupLightsView(q),de===!0&&ie.setGlobalState(S.clippingPlanes,q),qs(M,Y,q),O.updateMultisampleRenderTarget(ge),O.updateRenderTargetMipmap(ge),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let lt=0,yt=G.length;lt<yt;lt++){const St=G[lt],{object:ht,geometry:Ie,material:st,group:et}=St;if(st.side===Rt&&ht.layers.test(q.layers)){const Gt=st.side;st.side=zt,st.needsUpdate=!0,Sl(ht,Y,q,Ie,st,et),st.side=Gt,st.needsUpdate=!0,qe=!0}}qe===!0&&(O.updateMultisampleRenderTarget(ge),O.updateRenderTargetMipmap(ge))}S.setRenderTarget(ye,Ae,Pe),S.setClearColor(ee,te),Le!==void 0&&(q.viewport=Le),S.toneMapping=Fe}function qs(M,G,Y){const q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ge=M.length;X<ge;X++){const Te=M[X],{object:ye,geometry:Ae,group:Pe}=Te;let Fe=Te.material;Fe.allowOverride===!0&&q!==null&&(Fe=q),ye.layers.test(Y.layers)&&Sl(ye,G,Y,Ae,Fe,Pe)}}function Sl(M,G,Y,q,X,ge){M.onBeforeRender(S,G,Y,q,X,ge),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(S,G,Y,q,M,ge),X.transparent===!0&&X.side===Rt&&X.forceSinglePass===!1?(X.side=zt,X.needsUpdate=!0,S.renderBufferDirect(Y,G,q,X,M,ge),X.side=Fn,X.needsUpdate=!0,S.renderBufferDirect(Y,G,q,X,M,ge),X.side=Rt):S.renderBufferDirect(Y,G,q,X,M,ge),M.onAfterRender(S,G,Y,q,X,ge)}function Ys(M,G,Y){G.isScene!==!0&&(G=Ce);const q=v.get(M),X=x.state.lights,ge=x.state.shadowsArray,Te=X.state.version,ye=ne.getParameters(M,X.state,ge,G,Y),Ae=ne.getProgramCacheKey(ye);let Pe=q.programs;q.environment=M.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(M.isMeshStandardMaterial?K:J).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?G.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",un),Pe=new Map,q.programs=Pe);let Fe=Pe.get(Ae);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===Te)return Ml(M,ye),Fe}else ye.uniforms=ne.getUniforms(M),M.onBeforeCompile(ye,S),Fe=ne.acquireProgram(ye,Ae),Pe.set(Ae,Fe),q.uniforms=ye.uniforms;const Le=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ie.uniform),Ml(M,ye),q.needsLights=Lh(M),q.lightsStateVersion=Te,q.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMap.value=X.state.directionalShadowMap,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotShadowMap.value=X.state.spotShadowMap,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMap.value=X.state.pointShadowMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function xl(M){if(M.uniformsList===null){const G=M.currentProgram.getUniforms();M.uniformsList=Tr.seqWithValue(G.seq,M.uniforms)}return M.uniformsList}function Ml(M,G){const Y=v.get(M);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function Ph(M,G,Y,q,X){G.isScene!==!0&&(G=Ce),O.resetTextureUnits();const ge=G.fog,Te=q.isMeshStandardMaterial?G.environment:null,ye=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Zi,Ae=(q.isMeshStandardMaterial?K:J).get(q.envMap||Te),Pe=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!Y.morphAttributes.position,qe=!!Y.morphAttributes.normal,lt=!!Y.morphAttributes.color;let yt=Sn;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(yt=S.toneMapping);const St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=St!==void 0?St.length:0,Ie=v.get(q),st=x.state.lights;if(de===!0&&(De===!0||M!==L)){const It=M===L&&q.id===A;ie.setState(q,M,It)}let et=!1;q.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==st.state.version||Ie.outputColorSpace!==ye||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==Ae||q.fog===!0&&Ie.fog!==ge||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ie.numPlanes||Ie.numIntersection!==ie.numIntersection)||Ie.vertexAlphas!==Pe||Ie.vertexTangents!==Fe||Ie.morphTargets!==Le||Ie.morphNormals!==qe||Ie.morphColors!==lt||Ie.toneMapping!==yt||Ie.morphTargetsCount!==ht)&&(et=!0):(et=!0,Ie.__version=q.version);let Gt=Ie.currentProgram;et===!0&&(Gt=Ys(q,G,X));let bi=!1,Vt=!1,os=!1;const pt=Gt.getUniforms(),Ot=Ie.uniforms;if(we.useProgram(Gt.program)&&(bi=!0,Vt=!0,os=!0),q.id!==A&&(A=q.id,Vt=!0),bi||L!==M){we.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(F,"projectionMatrix",M.projectionMatrix),pt.setValue(F,"viewMatrix",M.matrixWorldInverse);const Bt=pt.map.cameraPosition;Bt!==void 0&&Bt.setValue(F,Ne.setFromMatrixPosition(M.matrixWorld)),je.logarithmicDepthBuffer&&pt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),L!==M&&(L=M,Vt=!0,os=!0)}if(Ie.needsLights&&(st.state.directionalShadowMap.length>0&&pt.setValue(F,"directionalShadowMap",st.state.directionalShadowMap,O),st.state.spotShadowMap.length>0&&pt.setValue(F,"spotShadowMap",st.state.spotShadowMap,O),st.state.pointShadowMap.length>0&&pt.setValue(F,"pointShadowMap",st.state.pointShadowMap,O)),X.isSkinnedMesh){pt.setOptional(F,X,"bindMatrix"),pt.setOptional(F,X,"bindMatrixInverse");const It=X.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),pt.setValue(F,"boneTexture",It.boneTexture,O))}X.isBatchedMesh&&(pt.setOptional(F,X,"batchingTexture"),pt.setValue(F,"batchingTexture",X._matricesTexture,O),pt.setOptional(F,X,"batchingIdTexture"),pt.setValue(F,"batchingIdTexture",X._indirectTexture,O),pt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(F,"batchingColorTexture",X._colorsTexture,O));const $t=Y.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ze.update(X,Y,Gt),(Vt||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,pt.setValue(F,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ot.envMap.value=Ae,Ot.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(Ot.envMapIntensity.value=G.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=e_()),Vt&&(pt.setValue(F,"toneMappingExposure",S.toneMappingExposure),Ie.needsLights&&Ch(Ot,os),ge&&q.fog===!0&&ce.refreshFogUniforms(Ot,ge),ce.refreshMaterialUniforms(Ot,q,re,V,x.state.transmissionRenderTarget[M.id]),Tr.upload(F,xl(Ie),Ot,O)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Tr.upload(F,xl(Ie),Ot,O),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(F,"center",X.center),pt.setValue(F,"modelViewMatrix",X.modelViewMatrix),pt.setValue(F,"normalMatrix",X.normalMatrix),pt.setValue(F,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const It=q.uniformsGroups;for(let Bt=0,Yr=It.length;Bt<Yr;Bt++){const ni=It[Bt];oe.update(ni,Gt),oe.bind(ni,Gt)}}return Gt}function Ch(M,G){M.ambientLightColor.needsUpdate=G,M.lightProbe.needsUpdate=G,M.directionalLights.needsUpdate=G,M.directionalLightShadows.needsUpdate=G,M.pointLights.needsUpdate=G,M.pointLightShadows.needsUpdate=G,M.spotLights.needsUpdate=G,M.spotLightShadows.needsUpdate=G,M.rectAreaLights.needsUpdate=G,M.hemisphereLights.needsUpdate=G}function Lh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,G,Y){const q=v.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),v.get(M.texture).__webglTexture=G,v.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,G){const Y=v.get(M);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};const Ih=F.createFramebuffer();this.setRenderTarget=function(M,G=0,Y=0){B=M,I=G,z=Y;let q=null,X=!1,ge=!1;if(M){const ye=v.get(M);if(ye.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),D.copy(M.viewport),N.copy(M.scissor),H=M.scissorTest,we.viewport(D),we.scissor(N),we.setScissorTest(H),A=-1;return}else if(ye.__webglFramebuffer===void 0)O.setupRenderTarget(M);else if(ye.__hasExternalTextures)O.rebindTextures(M,v.get(M.texture).__webglTexture,v.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Fe=M.depthTexture;if(ye.__boundDepthTexture!==Fe){if(Fe!==null&&v.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ge=!0);const Pe=v.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[G])?q=Pe[G][Y]:q=Pe[G],X=!0):M.samples>0&&O.useMultisampledRTT(M)===!1?q=v.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?q=Pe[Y]:q=Pe,D.copy(M.viewport),N.copy(M.scissor),H=M.scissorTest}else D.copy($).multiplyScalar(re).floor(),N.copy(Q).multiplyScalar(re).floor(),H=me;if(Y!==0&&(q=Ih),we.bindFramebuffer(F.FRAMEBUFFER,q)&&we.drawBuffers(M,q),we.viewport(D),we.scissor(N),we.setScissorTest(H),X){const ye=v.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,ye.__webglTexture,Y)}else if(ge){const ye=G;for(let Ae=0;Ae<M.textures.length;Ae++){const Pe=v.get(M.textures[Ae]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,Y,ye)}}else if(M!==null&&Y!==0){const ye=v.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,Y)}A=-1},this.readRenderTargetPixels=function(M,G,Y,q,X,ge,Te,ye=0){if(!(M&&M.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){we.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const Pe=M.textures[ye],Fe=Pe.format,Le=Pe.type;if(!je.textureFormatReadable(Fe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Le)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=M.width-q&&Y>=0&&Y<=M.height-X&&(M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye),F.readPixels(G,Y,q,X,fe.convert(Fe),fe.convert(Le),ge))}finally{const Pe=B!==null?v.get(B).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,G,Y,q,X,ge,Te,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae)if(G>=0&&G<=M.width-q&&Y>=0&&Y<=M.height-X){we.bindFramebuffer(F.FRAMEBUFFER,Ae);const Pe=M.textures[ye],Fe=Pe.format,Le=Pe.type;if(!je.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye),F.readPixels(G,Y,q,X,fe.convert(Fe),fe.convert(Le),0);const lt=B!==null?v.get(B).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,lt);const yt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await vd(F,yt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.deleteBuffer(qe),F.deleteSync(yt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,G=null,Y=0){const q=Math.pow(2,-Y),X=Math.floor(M.image.width*q),ge=Math.floor(M.image.height*q),Te=G!==null?G.x:0,ye=G!==null?G.y:0;O.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Te,ye,X,ge),we.unbindTexture()};const Dh=F.createFramebuffer(),Uh=F.createFramebuffer();this.copyTextureToTexture=function(M,G,Y=null,q=null,X=0,ge=null){ge===null&&(X!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=X,X=0):ge=0);let Te,ye,Ae,Pe,Fe,Le,qe,lt,yt;const St=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(Y!==null)Te=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Pe=Y.min.x,Fe=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{const $t=Math.pow(2,-X);Te=Math.floor(St.width*$t),ye=Math.floor(St.height*$t),M.isDataArrayTexture?Ae=St.depth:M.isData3DTexture?Ae=Math.floor(St.depth*$t):Ae=1,Pe=0,Fe=0,Le=0}q!==null?(qe=q.x,lt=q.y,yt=q.z):(qe=0,lt=0,yt=0);const ht=fe.convert(G.format),Ie=fe.convert(G.type);let st;G.isData3DTexture?(O.setTexture3D(G,0),st=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(O.setTexture2DArray(G,0),st=F.TEXTURE_2D_ARRAY):(O.setTexture2D(G,0),st=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const et=F.getParameter(F.UNPACK_ROW_LENGTH),Gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bi=F.getParameter(F.UNPACK_SKIP_PIXELS),Vt=F.getParameter(F.UNPACK_SKIP_ROWS),os=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,St.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le);const pt=M.isDataArrayTexture||M.isData3DTexture,Ot=G.isDataArrayTexture||G.isData3DTexture;if(M.isDepthTexture){const $t=v.get(M),It=v.get(G),Bt=v.get($t.__renderTarget),Yr=v.get(It.__renderTarget);we.bindFramebuffer(F.READ_FRAMEBUFFER,Bt.__webglFramebuffer),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let ni=0;ni<Ae;ni++)pt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,v.get(M).__webglTexture,X,Le+ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,v.get(G).__webglTexture,ge,yt+ni)),F.blitFramebuffer(Pe,Fe,Te,ye,qe,lt,Te,ye,F.DEPTH_BUFFER_BIT,F.NEAREST);we.bindFramebuffer(F.READ_FRAMEBUFFER,null),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||v.has(M)){const $t=v.get(M),It=v.get(G);we.bindFramebuffer(F.READ_FRAMEBUFFER,Dh),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,Uh);for(let Bt=0;Bt<Ae;Bt++)pt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.__webglTexture,X,Le+Bt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$t.__webglTexture,X),Ot?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.__webglTexture,ge,yt+Bt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,ge),X!==0?F.blitFramebuffer(Pe,Fe,Te,ye,qe,lt,Te,ye,F.COLOR_BUFFER_BIT,F.NEAREST):Ot?F.copyTexSubImage3D(st,ge,qe,lt,yt+Bt,Pe,Fe,Te,ye):F.copyTexSubImage2D(st,ge,qe,lt,Pe,Fe,Te,ye);we.bindFramebuffer(F.READ_FRAMEBUFFER,null),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ot?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(st,ge,qe,lt,yt,Te,ye,Ae,ht,Ie,St.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(st,ge,qe,lt,yt,Te,ye,Ae,ht,St.data):F.texSubImage3D(st,ge,qe,lt,yt,Te,ye,Ae,ht,Ie,St):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,qe,lt,Te,ye,ht,Ie,St.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,qe,lt,St.width,St.height,ht,St.data):F.texSubImage2D(F.TEXTURE_2D,ge,qe,lt,Te,ye,ht,Ie,St);F.pixelStorei(F.UNPACK_ROW_LENGTH,et),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,os),ge===0&&G.generateMipmaps&&F.generateMipmap(st),we.unbindTexture()},this.initRenderTarget=function(M){v.get(M).__webglFramebuffer===void 0&&O.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?O.setTextureCube(M,0):M.isData3DTexture?O.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?O.setTexture2DArray(M,0):O.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){I=0,z=0,B=null,we.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}let Vi=null;function Hs(){if(!Vi){const n=window.AudioContext||window.webkitAudioContext;n&&(Vi=new n)}return Vi&&Vi.state==="suspended"&&Vi.resume().catch(()=>{}),Vi}function Nf(){try{const n=Hs();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="sine",e.frequency.setValueAtTime(95+Math.random()*20,n.currentTime),e.frequency.exponentialRampToValueAtTime(35,n.currentTime+.08),t.gain.setValueAtTime(.06,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.08),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.08)}catch{}}function Ff(){try{const n=Hs();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="triangle",e.frequency.setValueAtTime(1850,n.currentTime),e.frequency.exponentialRampToValueAtTime(2450,n.currentTime+.12),t.gain.setValueAtTime(.18,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.28),e.connect(t),t.connect(n.destination),e.start(n.currentTime),e.stop(n.currentTime+.28),[523.25,659.25,783.99,1046.5].forEach((a,o)=>{const l=n.createOscillator(),c=n.createGain();l.type="sine",l.frequency.setValueAtTime(a,n.currentTime);const h=n.currentTime+o*.05;c.gain.setValueAtTime(0,h),c.gain.linearRampToValueAtTime(.16,h+.02),c.gain.exponentialRampToValueAtTime(1e-4,h+.5),l.connect(c),c.connect(n.destination),l.start(h),l.stop(h+.55)});const s=n.createOscillator(),r=n.createGain();s.type="sine",s.frequency.setValueAtTime(110,n.currentTime+.12),s.frequency.exponentialRampToValueAtTime(42,n.currentTime+.45),r.gain.setValueAtTime(.26,n.currentTime+.12),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.45),s.connect(r),r.connect(n.destination),s.start(n.currentTime+.12),s.stop(n.currentTime+.45)}catch{}}function n_(){try{const n=Hs();if(!n)return;[523.25,659.25,783.99,1046.5].forEach((t,i)=>{const s=n.createOscillator(),r=n.createGain();s.type="triangle",s.frequency.setValueAtTime(t,n.currentTime);const a=n.currentTime+i*.055;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.18,a+.015),r.gain.exponentialRampToValueAtTime(1e-4,a+.45),s.connect(r),r.connect(n.destination),s.start(a),s.stop(a+.5)})}catch{}}function kf(){try{const n=Hs();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="triangle",e.frequency.setValueAtTime(440,n.currentTime),e.frequency.exponentialRampToValueAtTime(880,n.currentTime+.15),t.gain.setValueAtTime(.08,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.18),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.18)}catch{}}function Of(){try{const n=Hs();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="sine",e.frequency.setValueAtTime(600,n.currentTime),e.frequency.exponentialRampToValueAtTime(150,n.currentTime+.25),t.gain.setValueAtTime(.12,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.25),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.25)}catch{}}const Bo=Object.freeze(Object.defineProperty({__proto__:null,playCabinetExit:Of,playCabinetHighlight:kf,playCoinDrop:Ff,playDopamineChime:n_,playFootstep:Nf},Symbol.toStringTag,{value:"Module"}));class i_{constructor(e,t=null){this.scene=e,this.identity=t||{tag:"MARC1",color:62975,colorHex:"#00f5ff"},this.tag=(this.identity.tag||"MARC1").slice(0,5).toUpperCase(),this.colorNum=this.identity.color||62975,this.colorHex=this.identity.colorHex||"#00f5ff",this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetRotation=Math.PI,this.speed=7.5,this.radius=.45,this.velocityY=0,this.gravity=-26,this.jumpStrength=8.5,this.isGrounded=!0,this.isMoving=!1,this.walkCycle=0,this.footstepTimer=0,this.keys={forward:!1,backward:!1,left:!1,right:!1},this.joystickVector={x:0,y:0},this.navTarget=null,this.createAvatarMesh(),this.createNameTagSprite(),this.createSpeechBubbleSprite(),this.bindKeyboard()}resetMovement(){this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1,this.isMoving=!1}setIdentity(e){e&&(this.identity=e,this.tag=(e.tag||"MARC1").slice(0,5).toUpperCase(),this.colorNum=e.color||62975,this.colorHex=e.colorHex||"#00f5ff",this.torso&&this.torso.material.color.setHex(this.colorNum),this.leftFoot&&this.leftFoot.material.color.setHex(this.colorNum),this.rightFoot&&this.rightFoot.material.color.setHex(this.colorNum),this.nameSprite&&(this.group.remove(this.nameSprite),this.createNameTagSprite()))}createNameTagSprite(){const e=document.createElement("canvas");e.width=320,e.height=110;const t=e.getContext("2d");t.fillStyle="rgba(8, 9, 16, 0.88)",t.strokeStyle=this.colorHex,t.lineWidth=4,t.beginPath(),t.roundRect(10,10,e.width-20,e.height-20,24),t.fill(),t.stroke(),t.font='bold 36px "Press Start 2P", monospace, sans-serif',t.fillStyle="#ffd32a",t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ffd32a",t.shadowBlur=8,t.fillText(this.tag,e.width/2,42),t.shadowBlur=0,t.font='bold 16px "Outfit", sans-serif',t.fillStyle=this.colorHex,t.fillText("VOCÊ",e.width/2,78);const i=new tn(e),s=new Qi({map:i,transparent:!0,depthTest:!1});this.nameSprite=new Is(s),this.nameSprite.position.set(0,2.35,0),this.nameSprite.scale.set(1.6,.55,1),this.group.add(this.nameSprite)}createSpeechBubbleSprite(){const e=document.createElement("canvas");e.width=384,e.height=140,this.bubbleCanvas=e,this.bubbleCtx=e.getContext("2d"),this.bubbleTexture=new tn(e),this.bubbleTexture.minFilter=vt;const t=new Qi({map:this.bubbleTexture,transparent:!0,depthTest:!1});this.speechSprite=new Is(t),this.speechSprite.position.set(0,3.1,0),this.speechSprite.scale.set(2.2,.8,1),this.speechSprite.visible=!1,this.speechTimer=0,this.group.add(this.speechSprite)}showSpeechBubble(e){if(!e||!this.speechSprite)return;const t=this.bubbleCtx,i=this.bubbleCanvas.width,s=this.bubbleCanvas.height;t.clearRect(0,0,i,s),t.fillStyle="rgba(8, 12, 28, 0.94)",t.strokeStyle=this.colorHex||"#00f5ff",t.lineWidth=4,t.beginPath(),t.roundRect(10,10,i-20,s-36,18),t.fill(),t.stroke(),t.beginPath(),t.moveTo(i/2-14,s-26),t.lineTo(i/2,s-6),t.lineTo(i/2+14,s-26),t.closePath(),t.fill(),t.stroke(),t.fillStyle="rgba(8, 12, 28, 0.94)",t.fillRect(i/2-12,s-28,24,6),t.fillStyle="#ffffff",t.font='bold 22px "Outfit", "Segoe UI", sans-serif',t.textAlign="center",t.textBaseline="middle";const r=22,a=e.trim();if(a.length<=r)t.fillText(a,i/2,(s-36)/2+10);else{let o=a.lastIndexOf(" ",r);(o===-1||o<8)&&(o=r);const l=a.substring(0,o).trim(),c=a.substring(o,o+r).trim();t.fillText(l,i/2,34),t.fillText(c+(a.length>o+r?"...":""),i/2,64)}this.bubbleTexture.needsUpdate=!0,this.speechSprite.visible=!0,this.speechTimer=5}setNavigationTarget(e,t,i=null){this.navTarget={x:e,z:t,onArrival:i}}clearNavigationTarget(){this.navTarget=null}createAvatarMesh(){this.group=new yn,this.group.position.set(this.x,this.y,this.z);const e=new Yt(.38,.32,.8,16),t=new _t({color:this.colorNum,roughness:.3,metalness:.2});this.torso=new Se(e,t),this.torso.position.y=.85,this.group.add(this.torso);const i=new at(.04,.78,.05),s=new ft({color:16711807}),r=new Se(i,s);r.position.set(0,.85,.35),this.group.add(r);const a=new yi(.42,24,24),o=new _t({color:16777215,roughness:.2,metalness:.1});this.head=new Se(a,o),this.head.position.y=1.55,this.group.add(this.head),this.visorCanvas=document.createElement("canvas"),this.visorCanvas.width=256,this.visorCanvas.height=128,this.visorCtx=this.visorCanvas.getContext("2d"),this.renderVisorEyes(!1),this.visorTex=new tn(this.visorCanvas),this.visorTex.needsUpdate=!0;const l=new ft({map:this.visorTex,transparent:!0}),c=new Yt(.43,.43,.3,16,1,!1,Math.PI*.15,Math.PI*.7);this.visorMesh=new Se(c,l),this.visorMesh.position.set(0,1.55,.02),this.visorMesh.rotation.y=-Math.PI/2,this.group.add(this.visorMesh);const h=new at(.42,.5,.22),f=new _t({color:1712440,roughness:.4,metalness:.6}),d=new Se(h,f);d.position.set(0,.9,-.36),this.group.add(d);const p=new Yt(.06,.04,.12,12),g=new ft({color:62975}),_=new Se(p,g);_.position.set(-.12,.6,-.36);const m=new Se(p,g);m.position.set(.12,.6,-.36),this.group.add(_),this.group.add(m);const u=new yi(.14,12,12),y=new _t({color:this.colorNum,roughness:.3});this.leftFoot=new Se(u,y),this.leftFoot.position.set(-.2,.14,0),this.group.add(this.leftFoot),this.rightFoot=new Se(u,y),this.rightFoot.position.set(.2,.14,0),this.group.add(this.rightFoot);const b=new kr(.55,24),E=new ft({color:0,transparent:!0,opacity:.45});this.shadow=new Se(b,E),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.02,this.group.add(this.shadow),this.scene.add(this.group)}renderVisorEyes(e){const t=this.visorCtx;t.clearRect(0,0,256,128),t.fillStyle="#060814",t.fillRect(0,0,256,128),t.fillStyle=this.colorHex,t.shadowColor=this.colorHex,t.shadowBlur=12,e?(t.lineWidth=6,t.strokeStyle=this.colorHex,t.beginPath(),t.arc(85,64,22,.2,Math.PI-.2,!1),t.stroke(),t.beginPath(),t.arc(171,64,22,.2,Math.PI-.2,!1),t.stroke()):(t.beginPath(),t.ellipse(85,60,20,26,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(171,60,20,26,0,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.shadowBlur=0,t.beginPath(),t.arc(90,52,7,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(176,52,7,0,Math.PI*2),t.fill())}bindKeyboard(){window.addEventListener("keydown",e=>{var t,i;if(window.__arcadeOverlayOpen||((t=document.activeElement)==null?void 0:t.tagName)==="INPUT"||((i=document.activeElement)==null?void 0:i.tagName)==="TEXTAREA"){this.resetMovement();return}["ArrowUp","KeyW"].includes(e.code)&&(this.keys.forward=!0),["ArrowDown","KeyS"].includes(e.code)&&(this.keys.backward=!0),["ArrowLeft","KeyA"].includes(e.code)&&(this.keys.left=!0),["ArrowRight","KeyD"].includes(e.code)&&(this.keys.right=!0),e.code==="Space"&&this.isGrounded&&(this.velocityY=this.jumpStrength,this.isGrounded=!1)}),window.addEventListener("keyup",e=>{["ArrowUp","KeyW"].includes(e.code)&&(this.keys.forward=!1),["ArrowDown","KeyS"].includes(e.code)&&(this.keys.backward=!1),["ArrowLeft","KeyA"].includes(e.code)&&(this.keys.left=!1),["ArrowRight","KeyD"].includes(e.code)&&(this.keys.right=!1)})}setJoystickVector(e,t){this.joystickVector.x=e,this.joystickVector.y=t}update(e,t,i,s=null){let r=0,a=0;if(this.keys.forward&&(a-=1),this.keys.backward&&(a+=1),this.keys.left&&(r-=1),this.keys.right&&(r+=1),(Math.abs(this.joystickVector.x)>.1||Math.abs(this.joystickVector.y)>.1)&&(r+=this.joystickVector.x,a+=this.joystickVector.y),Math.hypot(r,a)>.01)this.navTarget=null;else if(this.navTarget){const d=this.navTarget.x-this.x,p=this.navTarget.z-this.z,g=Math.hypot(d,p);if(g<.35){const _=this.navTarget.onArrival;this.navTarget=null,_&&_()}else r=d/g,a=p/g}const l=Math.hypot(r,a);if(l>.01){r/=l,a/=l,this.isMoving=!0,this.targetRotation=Math.atan2(r,a);const d=this.speed*e,p=this.x+r*d,g=this.z+a*d;let _=!0;if(t&&(p-this.radius<t.minX||p+this.radius>t.maxX)&&(_=!1),i&&_){for(const u of i)if(u.collider&&u.collider.intersectsSphere(new W(p,0,this.z),this.radius)){_=!1;break}}_&&(this.x=p);let m=!0;if(t&&(g-this.radius<t.minZ||g+this.radius>t.maxZ)&&(m=!1),i&&m){for(const u of i)if(u.collider&&u.collider.intersectsSphere(new W(this.x,0,g),this.radius)){m=!1;break}}m&&(this.z=g),this.walkCycle+=e*14,this.footstepTimer+=e,this.footstepTimer>.28&&(Nf(),this.footstepTimer=0)}else this.isMoving=!1,this.walkCycle=0;let c=this.targetRotation-this.rotation;for(;c<-Math.PI;)c+=Math.PI*2;for(;c>Math.PI;)c-=Math.PI*2;if(this.rotation+=c*.25,this.isGrounded||(this.velocityY+=this.gravity*e,this.y+=this.velocityY*e,this.y<=0&&(this.y=0,this.velocityY=0,this.isGrounded=!0)),this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.rotation,this.shadow){const d=Math.max(.35,1-this.y*.25);this.shadow.scale.set(d,d,d),this.shadow.position.y=.02-this.y}this.isGrounded?this.isMoving?(this.leftFoot.position.y=0,this.rightFoot.position.y=0,this.leftFoot.position.z=Math.sin(this.walkCycle)*.22,this.rightFoot.position.z=-Math.sin(this.walkCycle)*.22,this.torso.rotation.z=0):(this.leftFoot.position.y=0,this.rightFoot.position.y=0,this.leftFoot.position.z=0,this.rightFoot.position.z=0,this.torso.rotation.z=0):(this.leftFoot.position.y=.08,this.rightFoot.position.y=.08,this.leftFoot.position.z=-.08,this.rightFoot.position.z=.08,this.torso.rotation.z=0);const h=performance.now()*.001,f=Math.sin(h*1.5)>.94;this.lastBlinkState!==f&&(this.lastBlinkState=f,this.renderVisorEyes(f),this.visorTex.needsUpdate=!0),this.nameSprite&&s&&this.nameSprite.quaternion.copy(s.quaternion),this.speechSprite&&this.speechSprite.visible&&(s&&this.speechSprite.quaternion.copy(s.quaternion),this.speechTimer-=e,this.speechTimer<=0&&(this.speechSprite.visible=!1))}}function s_(n,e,t,i=256,s=224){switch(n.imageSmoothingEnabled=!1,n.save(),(e.id||"").toLowerCase()){case"cute-mini-golf":a_(n,t,i,s);break;case"kawaii-8ball-pool":o_(n,t,i,s);break;case"neon-katana-slash":l_(n,t,i,s);break;case"geometricsurvivor":c_(n,t,i,s);break;case"stickman-fps-arcade":f_(n,t,i,s);break;case"neon-viper":h_(n,t,i,s);break;case"cyber-pinball-fx":d_(n,t,i,s);break;case"cyber-pong-3d":u_(n,t);break;case"neon-drift-racer":p_(n,t,i,s);break;case"neon-orbit-drift":m_(n,t,i,s);break;case"brick-breaker-fx":g_(n,t,i,s);break;case"sky-ace-1944":__(n,t,i,s);break;case"neon-pachinko-pop":v_(n,t,i,s);break;case"cyber-shuriken":y_(n,t,i,s);break;case"neon-drop-2048":S_(n,t,i,s);break;case"asteroid-blitz":x_(n,t,i,s);break;case"flappy-cyber-droid":M_(n,t,i,s);break;case"neon-archery-master":b_(n,t,i,s);break;case"cyber-runner-3d":E_(n,t,i,s);break;case"neon-stack-3d":T_(n,t,i,s);break;case"neon-tetris-3d":w_(n,t,i,s);break;case"super-mario":A_(n,t,i,s);break;case"super-bomberman":R_(n,t,i,s);break;case"gta-2":P_(n,t,i,s);break;case"classic-doom":C_(n,t,i);break;case"classic-pacman":L_(n,t,i,s);break;case"sonic1":Bf(n,t,i,s);break;case"sonic2":I_(n,t,i,s);break;case"fzero":D_(n,t,i,s);break;case"mk2":U_(n,t,i,s);break;case"megaman2":N_(n,t,i,s);break;case"outrun":F_(n,t,i,s);break;case"sor2":k_(n,t,i,s);break;case"topgear":O_(n,t,i,s);break;case"castlevania4":B_(n,t,i,s);break;case"mslug":zf(n,t,i);break;case"mslugx":z_(n,t,i);break;case"street-fighter-2":G_(n,t,i);break;default:V_(n,e,t,i,s);break}r_(n,e,t,i,s),n.fillStyle="rgba(0, 0, 0, 0.28)";for(let a=0;a<s;a+=2)n.fillRect(0,a,i,1);n.strokeStyle="#05ffa1",n.lineWidth=4,n.strokeRect(2,2,i-4,s-4),n.restore()}function r_(n,e,t,i,s){n.save(),n.font="bold 8px monospace",n.fillStyle="#ffffff",n.textAlign="left",n.fillText("1UP  04820",8,12),n.textAlign="right",n.fillText("HIGH 25000",i-8,12),Math.floor(t*2.5)%2===0?(n.textAlign="center",n.fillStyle="#ffd32a",n.fillText("★ INSERT COIN ★",i/2,s-8)):(n.textAlign="center",n.fillStyle="#00f5ff",n.fillText("▶ DEMO PLAY ◀",i/2,s-8)),n.restore()}function a_(n,e,t,i){n.fillStyle="#27ae60",n.fillRect(0,0,t,i),n.fillStyle="#2ecc71";for(let f=0;f<i;f+=16)n.fillRect(0,f,t,8);n.fillStyle="#f1c40f",n.beginPath(),n.ellipse(40,70,30,16,.2,0,Math.PI*2),n.fill(),n.fillStyle="#3498db",n.beginPath(),n.ellipse(210,150,35,18,-.2,0,Math.PI*2),n.fill();const s=130,r=65;n.fillStyle="#111",n.beginPath(),n.ellipse(s,r,8,4,0,0,Math.PI*2),n.fill(),n.strokeStyle="#fff",n.lineWidth=2,n.beginPath(),n.moveTo(s,r),n.lineTo(s,r-32),n.stroke(),n.fillStyle="#e74c3c";const a=Math.sin(e*8)*3;n.beginPath(),n.moveTo(s,r-32),n.lineTo(s-16+a,r-26),n.lineTo(s,r-20),n.fill();const o=e*.8%3;let l,c,h=!1;if(o<2){const f=o/2;l=130+Math.sin(f*Math.PI)*45,c=190-f*125}else l=s,c=r,h=!0;if(o<.6){n.strokeStyle="#bdc3c7",n.lineWidth=3;const f=-.4+o/.6*.8;n.beginPath(),n.moveTo(130-Math.cos(f)*25,190-Math.sin(f)*25),n.lineTo(130,190),n.stroke()}h?(n.fillStyle="#f39c12",n.font="bold 12px monospace",n.textAlign="center",n.fillText("NICE SHOT!",t/2,110),n.fillStyle="#fff",n.font="9px monospace",n.fillText("+100 PTS",t/2,126)):(n.fillStyle="#ecf0f1",n.beginPath(),n.arc(l,c,4,0,Math.PI*2),n.fill())}function o_(n,e,t,i){n.fillStyle="#5c3a21",n.fillRect(15,25,t-30,i-50),n.fillStyle="#16a085",n.fillRect(25,35,t-50,i-70),n.fillStyle="#0a0a0a",[[25,35],[t/2,33],[t-25,35],[25,i-35],[t/2,i-33],[t-25,i-35]].forEach(([d,p])=>{n.beginPath(),n.arc(d,p,7,0,Math.PI*2),n.fill()});const r=e*.7%3,a=160+(r>.8?(r-.8)*35:0),o=90-(r>.8?(r-.8)*20:0),l=175+(r>.8?(r-.8)*15:0),c=110+(r>.8?(r-.8)*10:0),h=r<.8?80+r*40:130+(r-.8)*15,f=110;if(n.fillStyle="#111",n.beginPath(),n.arc(l,c,6,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(l,c,2.5,0,Math.PI*2),n.fill(),n.fillStyle="#000",n.font="bold 5px monospace",n.textAlign="center",n.fillText("8",l,c+2),n.fillStyle="#f1c40f",n.beginPath(),n.arc(a,o,6,0,Math.PI*2),n.fill(),n.fillStyle="#000",n.fillRect(a-2,o-1,1,2),n.fillRect(a+1,o-1,1,2),n.fillStyle="#ecf0f1",n.beginPath(),n.arc(h,f,6,0,Math.PI*2),n.fill(),r<.8){const d=(.8-r)*20;n.strokeStyle="#d35400",n.lineWidth=3,n.beginPath(),n.moveTo(h-8-d,f),n.lineTo(h-45-d,f),n.stroke()}}function l_(n,e,t,i){n.fillStyle="#1a0e1c",n.fillRect(0,0,t,i);const s=e*1.5%2.5,r=200-Math.sin(s/2.5*Math.PI)*130,a=60+s*55;if(s<1.2)n.fillStyle="#27ae60",n.beginPath(),n.arc(a,r,16,0,Math.PI*2),n.fill(),n.strokeStyle="#1e824c",n.lineWidth=3,n.beginPath(),n.arc(a,r,13,0,Math.PI*2),n.stroke();else{const o=(s-1.2)*25;n.fillStyle="#e74c3c",n.beginPath(),n.arc(a-o,r+o,14,.5*Math.PI,1.5*Math.PI),n.fill(),n.beginPath(),n.arc(a+o,r+o,14,1.5*Math.PI,.5*Math.PI),n.fill(),n.fillStyle="#ff007f";for(let l=0;l<6;l++)n.fillRect(a+Math.sin(l*1.2)*o*1.4,r+Math.cos(l*1.2)*o*1.4,3,3)}s>1&&s<1.6&&(n.strokeStyle="#00f5ff",n.lineWidth=4,n.shadowColor="#00f5ff",n.shadowBlur=12,n.beginPath(),n.moveTo(a-50,r-40),n.lineTo(a+60,r+50),n.stroke(),n.shadowBlur=0,n.fillStyle="#ffd32a",n.font="bold 12px monospace",n.textAlign="center",n.fillText("COMBO x3!",t/2,70))}function c_(n,e,t,i){n.fillStyle="#111827",n.fillRect(0,0,t,i),n.strokeStyle="#1f2937",n.lineWidth=1;for(let o=0;o<t;o+=24)n.beginPath(),n.moveTo(o,0),n.lineTo(o,i),n.stroke();for(let o=0;o<i;o+=24)n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();const s=t/2,r=i/2;n.fillStyle="#3b82f6",n.beginPath(),n.arc(s,r,9,0,Math.PI*2),n.fill(),n.fillStyle="#93c5fd",n.fillRect(s-3,r-4,8,3);for(let o=0;o<3;o++){const l=e*5+o*Math.PI*2/3,c=s+Math.cos(l)*36,h=r+Math.sin(l)*36;n.strokeStyle="#05ffa1",n.lineWidth=3,n.beginPath(),n.moveTo(c,h),n.lineTo(c+Math.cos(l)*12,h+Math.sin(l)*12),n.stroke()}for(let o=0;o<8;o++){const l=60+Math.sin(e*3+o)*15,c=o*Math.PI*2/8+e*.6,h=s+Math.cos(c)*l,f=r+Math.sin(c)*l;n.fillStyle="#ef4444",n.beginPath(),n.moveTo(h,f-6),n.lineTo(h+6,f+6),n.lineTo(h-6,f+6),n.fill()}n.fillStyle="#00f5ff";const a=e*2%1;n.fillRect(s+(1-a)*25,r-(1-a)*20,3,3)}function f_(n,e,t,i){n.fillStyle="#d35400",n.fillRect(0,0,t,i),n.fillStyle="#7f8c8d",n.fillRect(0,140,t,84),n.fillStyle="#b7950b",n.fillRect(30,130,80,20),n.fillRect(150,130,80,20);const r=Math.sin(e*3)>0?110:145;n.strokeStyle="#111",n.lineWidth=2,n.fillStyle="#c0392b",n.beginPath(),n.arc(190,r,6,0,Math.PI*2),n.fill(),n.fillStyle="#2c3e50",n.fillRect(184,r-8,12,4);const a=190+Math.sin(e*6)*12,o=r+Math.cos(e*6)*8;n.strokeStyle="#05ffa1",n.lineWidth=2,n.beginPath(),n.arc(a,o,12,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(a-16,o),n.lineTo(a+16,o),n.stroke(),n.beginPath(),n.moveTo(a,o-16),n.lineTo(a,o+16),n.stroke(),Math.floor(e*8)%3===0&&(n.fillStyle="#ffd32a",n.beginPath(),n.arc(t/2,i-20,18,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(t/2,i-20,10,0,Math.PI*2),n.fill())}function h_(n,e,t,i){n.fillStyle="#060a1e",n.fillRect(0,0,t,i),n.strokeStyle="rgba(0, 245, 255, 0.15)",n.lineWidth=1;for(let s=0;s<t;s+=16)n.beginPath(),n.moveTo(s,0),n.lineTo(s,i),n.stroke();for(let s=0;s<i;s+=16)n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke();n.fillStyle="#ff007f",n.beginPath(),n.arc(60,60,4,0,Math.PI*2),n.fill(),n.fillStyle="#ffd32a",n.beginPath(),n.arc(200,150,4,0,Math.PI*2),n.fill(),n.fillStyle="#00f5ff",n.beginPath(),n.arc(170,70,4,0,Math.PI*2),n.fill();for(let s=14;s>=0;s--){const r=e*4-s*.15,a=t/2+Math.sin(r)*60,o=i/2+Math.cos(r*.7)*45;n.fillStyle=s===0?"#ffffff":"#05ffa1",n.beginPath(),n.arc(a,o,s===0?7:5,0,Math.PI*2),n.fill(),s===0&&(n.fillStyle="#111",n.fillRect(a-2,o-2,2,2),n.fillRect(a+1,o-2,2,2))}}function d_(n,e,t,i){n.fillStyle="#08081a",n.fillRect(0,0,t,i),n.strokeStyle="#7928ca",n.lineWidth=4,n.strokeRect(30,20,t-60,i-40),[[100,70],[160,70],[130,110]].forEach(([l,c],h)=>{n.fillStyle=Math.floor(e*6+h)%2===0?"#ff007f":"#00f5ff",n.beginPath(),n.arc(l,c,12,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font="bold 7px monospace",n.textAlign="center",n.fillText("100",l,c+2)});const r=Math.sin(e*8)>.5?.3:0;n.fillStyle="#ffd32a",n.save(),n.translate(90,175),n.rotate(-r),n.fillRect(0,-3,28,6),n.restore(),n.save(),n.translate(170,175),n.rotate(r),n.fillRect(-28,-3,28,6),n.restore();const a=130+Math.sin(e*7)*35,o=90+Math.cos(e*9)*45;n.fillStyle="#ffffff",n.beginPath(),n.arc(a,o,5,0,Math.PI*2),n.fill()}function u_(n,e,t,i){n.fillStyle="#1e3a8a",n.beginPath(),n.moveTo(40,180),n.lineTo(216,180),n.lineTo(180,70),n.lineTo(76,70),n.fill(),n.strokeStyle="#fff",n.lineWidth=2,n.strokeRect(76,70,104,110),n.strokeStyle="rgba(255, 255, 255, 0.7)",n.lineWidth=3,n.beginPath(),n.moveTo(58,125),n.lineTo(198,125),n.stroke();const s=e*2%2;let r,a;if(s<1)r=60+s*136,a=160-Math.sin(s*Math.PI)*45;else{const o=s-1;r=196-o*136,a=90+Math.sin(o*Math.PI)*45}n.fillStyle="#f97316",n.beginPath(),n.arc(r,a,4,0,Math.PI*2),n.fill(),n.fillStyle="#06b6d4",n.fillRect(48,145+Math.sin(e*5)*15,8,24),n.fillStyle="#ec4899",n.fillRect(200,75+Math.cos(e*5)*15,8,24)}function p_(n,e,t,i){n.fillStyle="#31103f",n.fillRect(0,0,t,100),n.fillStyle="#f43f5e",n.beginPath(),n.arc(t/2,85,30,Math.PI,0),n.fill(),n.fillStyle="#0f172a",n.fillRect(0,100,t,i-100);const s=e*240;for(let a=0;a<6;a++){const o=100+(a*24+s)%124,l=20+(o-100)/124*160;n.fillStyle=Math.floor(o/18)%2===0?"#ff007f":"#00f5ff",n.fillRect(t/2-l/2,o,l,4)}const r=t/2+Math.sin(e*4)*40;n.fillStyle="#ef4444",n.fillRect(r-16,175,32,16),n.fillStyle="#fbbf24",n.fillRect(r-12,185,6,4),n.fillRect(r+6,185,6,4),n.fillStyle="#ffd32a",n.fillRect(r-20,187,3,3),n.fillRect(r+17,187,3,3)}function m_(n,e,t,i){n.fillStyle="#030712",n.fillRect(0,0,t,i);const s=t/2,r=i/2;n.fillStyle="#8b5cf6",n.beginPath(),n.arc(s,r,22,0,Math.PI*2),n.fill(),n.strokeStyle="#c084fc",n.lineWidth=2,n.beginPath(),n.ellipse(s,r,38,10,-.3,0,Math.PI*2),n.stroke();const a=e*3,o=s+Math.cos(a)*50,l=r+Math.sin(a)*28;n.strokeStyle="#00f5ff",n.lineWidth=1,n.beginPath(),n.moveTo(s,r),n.lineTo(o,l),n.stroke(),n.fillStyle="#ffffff",n.beginPath(),n.arc(o,l,4,0,Math.PI*2),n.fill()}function g_(n,e,t,i){n.fillStyle="#0f172a",n.fillRect(0,0,t,i);const s=["#ef4444","#f97316","#eab308","#22c55e","#06b6d4"];for(let l=0;l<5;l++)for(let c=0;c<8;c++)(l+c+Math.floor(e))%7!==0&&(n.fillStyle=s[l],n.fillRect(20+c*27,30+l*12,24,8));const r=t/2+Math.sin(e*3)*50;n.fillStyle="#38bdf8",n.fillRect(r-22,185,44,7);const a=t/2+Math.sin(e*6)*60,o=130+Math.cos(e*7)*45;n.fillStyle="#ffffff",n.beginPath(),n.arc(a,o,4,0,Math.PI*2),n.fill()}function __(n,e,t,i){n.fillStyle="#1d4ed8",n.fillRect(0,0,t,i),n.fillStyle="#15803d";const s=e*40%(i+60)-30;n.beginPath(),n.ellipse(180,s,40,25,.4,0,Math.PI*2),n.fill();const r=t/2+Math.sin(e*3)*35,a=165;n.fillStyle="#94a3b8",n.fillRect(r-3,a-12,6,24),n.fillRect(r-20,a-2,40,5),n.fillStyle="#fef08a";for(let c=0;c<3;c++){const h=a-15-(e*200+c*40)%120;n.fillRect(r-8,h,2,6),n.fillRect(r+6,h,2,6)}const o=t/2,l=60;n.fillStyle="#b91c1c",n.fillRect(o-15,l-4,30,8),Math.floor(e*4)%2===0&&(n.fillStyle="#f59e0b",n.beginPath(),n.arc(o,l,14,0,Math.PI*2),n.fill())}function v_(n,e,t,i){n.fillStyle="#180d2b",n.fillRect(0,0,t,i),n.fillStyle="#ffd32a";for(let s=0;s<7;s++){const r=s%2===0?0:12;for(let a=0;a<9;a++)n.fillRect(36+a*22+r,45+s*18,3,3)}for(let s=0;s<3;s++){const r=(e*1.5+s*.8)%2,a=30+r*75,o=t/2+Math.sin(r*8+s)*35;n.fillStyle="#ffffff",n.beginPath(),n.arc(o,a,4,0,Math.PI*2),n.fill()}n.fillStyle="#05ffa1",n.fillRect(40,180,40,16),n.fillStyle="#ff007f",n.fillRect(108,180,40,16),n.fillStyle="#00f5ff",n.fillRect(176,180,40,16),n.fillStyle="#fff",n.font="7px monospace",n.textAlign="center",n.fillText("FEVER",128,192)}function y_(n,e,t,i){n.fillStyle="#0f172a",n.fillRect(0,0,t,i),n.fillStyle="#78350f",n.fillRect(t/2-4,60,8,110),n.fillStyle="#ffffff",n.beginPath(),n.arc(t/2,85,30,0,Math.PI*2),n.fill(),n.fillStyle="#dc2626",n.beginPath(),n.arc(t/2,85,20,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(t/2,85,10,0,Math.PI*2),n.fill(),n.fillStyle="#dc2626",n.beginPath(),n.arc(t/2,85,4,0,Math.PI*2),n.fill();const s=e*2%1.5,r=30+s*(t/2-30),a=160-s*75;n.save(),n.translate(r,a),n.rotate(e*25),n.fillStyle="#38bdf8",n.fillRect(-8,-2,16,4),n.fillRect(-2,-8,4,16),n.restore()}function S_(n,e,t,i){n.fillStyle="#1e1b4b",n.fillRect(0,0,t,i);const s=[["2","4","8","16"],["32","64","128","256"],["512","1024","2","4"],["8","16","32","64"]],r={2:"#eee4da",4:"#ede0c8",8:"#f2b179",16:"#f59563",32:"#f67c5f",64:"#f65e3b",128:"#edcf72",256:"#edcc61",512:"#edc850",1024:"#edc53f"},a=48,o=40;for(let l=0;l<4;l++)for(let c=0;c<4;c++){const h=s[l][c];n.fillStyle=r[h]||"#cdc1b4",n.fillRect(a+c*38,o+l*38,34,34),n.fillStyle="#111",n.font="bold 9px monospace",n.textAlign="center",n.fillText(h,a+c*38+17,o+l*38+21)}}function x_(n,e,t,i){n.fillStyle="#000000",n.fillRect(0,0,t,i),n.strokeStyle="#22c55e",n.lineWidth=2;const s=e*2,r=t/2,a=i/2;n.save(),n.translate(r,a),n.rotate(s),n.beginPath(),n.moveTo(0,-12),n.lineTo(8,10),n.lineTo(0,5),n.lineTo(-8,10),n.closePath(),n.stroke(),Math.floor(e*8)%2===0&&(n.beginPath(),n.moveTo(-4,7),n.lineTo(0,14),n.lineTo(4,7),n.stroke()),n.restore(),[[60,60,20],[200,70,16],[180,160,14],[70,170,12]].forEach(([l,c,h])=>{n.beginPath();for(let f=0;f<6;f++){const d=f*(Math.PI/3),p=h+(f%2===0?3:-3),g=l+Math.cos(d)*p,_=c+Math.sin(d)*p;f===0?n.moveTo(g,_):n.lineTo(g,_)}n.closePath(),n.stroke()})}function M_(n,e,t,i){n.fillStyle="#4c1d95",n.fillRect(0,0,t,i);const s=e*80%140;[t-s,t-s+140].forEach(o=>{n.fillStyle="#10b981",n.fillRect(o,0,26,75),n.fillRect(o,135,26,89)});const a=105+Math.sin(e*6)*20;n.fillStyle="#f59e0b",n.beginPath(),n.arc(70,a,9,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.fillRect(72,a-4,4,4)}function b_(n,e,t,i){n.fillStyle="#14532d",n.fillRect(0,0,t,i);const s=200,r=90,a=["#f87171","#fbbf24","#38bdf8","#fb7185"];for(let h=4;h>0;h--)n.fillStyle=a[h-1],n.beginPath(),n.arc(s,r,h*8,0,Math.PI*2),n.fill();const o=e*2%1.5,l=40+o*160,c=150-Math.sin(o/1.5*Math.PI)*60;n.strokeStyle="#ffffff",n.lineWidth=2,n.beginPath(),n.moveTo(l-18,c),n.lineTo(l,c),n.stroke(),n.fillStyle="#e11d48",n.fillRect(l-22,c-2,4,4)}function E_(n,e,t,i){n.fillStyle="#18181b",n.fillRect(0,0,t,i),n.strokeStyle="#a855f7",n.lineWidth=2,n.beginPath(),n.moveTo(t/2,70),n.lineTo(30,i),n.stroke(),n.beginPath(),n.moveTo(t/2,70),n.lineTo(t/2,i),n.stroke(),n.beginPath(),n.moveTo(t/2,70),n.lineTo(t-30,i),n.stroke();const s=70+e*120%130;n.fillStyle="#ef4444",n.fillRect(t/2-20,s,40,8);const r=160-Math.abs(Math.sin(e*6))*25;n.fillStyle="#06b6d4",n.fillRect(t/2-6,r,12,22)}function T_(n,e,t,i){n.fillStyle="#0c0a09",n.fillRect(0,0,t,i);const s=["#f43f5e","#ec4899","#d946ef","#a855f7","#6366f1"];for(let a=0;a<5;a++)n.fillStyle=s[a],n.fillRect(t/2-40,180-a*16,80,14);const r=t/2-40+Math.sin(e*4)*35;n.fillStyle="#06b6d4",n.fillRect(r,100,80,14)}function w_(n,e,t,i){n.fillStyle="#030712",n.fillRect(0,0,t,i),n.strokeStyle="#475569",n.lineWidth=2,n.strokeRect(70,20,116,190);const s=["#00f5ff","#ff007f","#ffd32a","#05ffa1","#7928ca"];for(let a=0;a<4;a++)for(let o=0;o<10;o++)(a*10+o+Math.floor(e*.5))%5!==0&&(n.fillStyle=s[(a+o)%s.length],n.fillRect(72+o*11,166+a*11,10,10));const r=30+e*50%120;n.fillStyle="#a855f7",n.fillRect(116,r,10,10),n.fillRect(105,r+11,32,10)}function A_(n,e,t,i){n.fillStyle="#5c94fc",n.fillRect(0,0,t,i),n.fillStyle="#00a800",n.fillRect(0,180,t,44),n.fillStyle="#00a800",n.fillRect(160,140,28,40),n.fillRect(156,134,36,10),n.fillStyle="#fc9838",n.fillRect(90,110,16,16),n.fillStyle="#000",n.font="bold 10px monospace",n.fillText("?",94,122);const s=Math.abs(Math.sin(e*5))*35,r=60+e*40%80,a=164-s;n.fillStyle="#e40058",n.fillRect(r-4,a-8,8,10),n.fillStyle="#0000bc",n.fillRect(r-4,a+2,8,8)}function R_(n,e,t,i){n.fillStyle="#22c55e",n.fillRect(0,0,t,i),n.fillStyle="#64748b";for(let a=0;a<4;a++)for(let o=0;o<5;o++)n.fillRect(40+o*40,40+a*40,18,18);const s=100,r=100;n.fillStyle="#09090b",n.beginPath(),n.arc(s,r,8,0,Math.PI*2),n.fill(),n.fillStyle="#ef4444",n.fillRect(s-1,r-12,3,4),Math.floor(e*3)%2===0&&(n.fillStyle="#f97316",n.fillRect(s-30,r-4,60,8),n.fillRect(s-4,r-30,8,60))}function P_(n,e,t,i){n.fillStyle="#334155",n.fillRect(0,0,t,i),n.strokeStyle="#facc15",n.lineWidth=2,n.setLineDash([8,8]),n.beginPath(),n.moveTo(t/2,0),n.lineTo(t/2,i),n.stroke(),n.setLineDash([]);const s=t/2-25,r=120+Math.sin(e*3)*20;n.fillStyle="#dc2626",n.fillRect(s-8,r-14,16,28);const a=t/2-25,o=r+45;n.fillStyle="#1e293b",n.fillRect(a-8,o-14,16,28),n.fillStyle=Math.floor(e*12)%2===0?"#3b82f6":"#ef4444",n.fillRect(a-4,o-2,8,4)}function C_(n,e,t,i){n.fillStyle="#3f3f46",n.fillRect(0,0,t,120),n.fillStyle="#15803d",n.fillRect(0,120,t,104);const s=t/2+Math.sin(e*2)*25;n.fillStyle="#991b1b",n.fillRect(s-10,75,20,30),n.fillStyle="#f59e0b",n.fillRect(s-5,80,3,3),n.fillRect(s+2,80,3,3),n.fillStyle="#18181b",n.fillRect(t/2-8,165,16,50),Math.floor(e*4)%3===0&&(n.fillStyle="#fbbf24",n.beginPath(),n.arc(t/2,160,24,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(t/2,160,14,0,Math.PI*2),n.fill())}function L_(n,e,t,i){n.fillStyle="#000000",n.fillRect(0,0,t,i),n.strokeStyle="#1d4ed8",n.lineWidth=3,n.strokeRect(30,30,t-60,i-60),n.strokeRect(60,60,50,30),n.strokeRect(146,60,50,30),n.fillStyle="#fef08a";for(let a=45;a<t-45;a+=18)n.fillRect(a,110,3,3);const s=40+e*70%(t-80),r=Math.abs(Math.sin(e*12))*.35;n.fillStyle="#facc15",n.beginPath(),n.arc(s,111,10,r*Math.PI,(2-r)*Math.PI),n.lineTo(s,111),n.fill(),n.fillStyle="#3b82f6",n.beginPath(),n.arc(s+35,111,8,Math.PI,0),n.lineTo(s+43,118),n.lineTo(s+27,118),n.fill()}function Bf(n,e,t,i){n.fillStyle="#38bdf8",n.fillRect(0,0,t,140),n.fillStyle="#b45309",n.fillRect(0,140,t,84),n.fillStyle="#78350f";for(let r=0;r<t;r+=16)for(let a=140;a<i;a+=16)(r+a)%32===0&&n.fillRect(r,a,16,16);const s=e*180%t;n.fillStyle="#2563eb",n.beginPath(),n.arc(s,132,10,0,Math.PI*2),n.fill(),n.fillStyle="#facc15";for(let r=0;r<4;r++)n.fillRect(60+r*25,120,6,8)}function I_(n,e,t,i){Bf(n,e,t,i);const s=e*180%t-24;n.fillStyle="#f97316",n.beginPath(),n.arc(s,134,8,0,Math.PI*2),n.fill(),n.fillRect(s-10,130,6,6)}function D_(n,e,t,i){n.fillStyle="#050515",n.fillRect(0,0,t,100),n.fillStyle="#1e1b4b",n.fillRect(0,100,t,i-100),n.strokeStyle="#06b6d4",n.lineWidth=3,n.beginPath(),n.moveTo(t/2,100),n.lineTo(10,i),n.stroke(),n.beginPath(),n.moveTo(t/2,100),n.lineTo(t-10,i),n.stroke();const s=100+e*180%120;n.fillStyle="#f97316",n.fillRect(t/2-20,s,40,8);const r=t/2+Math.sin(e*3)*30;n.fillStyle="#1d4ed8",n.fillRect(r-14,160,28,16),n.fillStyle="#e11d48",n.fillRect(r-10,172,6,4),n.fillRect(r+4,172,6,4)}function U_(n,e,t,i){n.fillStyle="#1c1917",n.fillRect(0,0,t,i),n.fillStyle="#44403c",n.fillRect(0,160,t,64),n.fillStyle="#eab308",n.fillRect(60,120,14,38),n.fillStyle="#2563eb",n.fillRect(180,120,14,38);const s=e*2%1.5;s<1&&(n.strokeStyle="#eab308",n.lineWidth=2,n.beginPath(),n.moveTo(74,135),n.lineTo(74+s*106,135),n.stroke())}function N_(n,e,t,i){n.fillStyle="#0f172a",n.fillRect(0,0,t,i),n.fillStyle="#0284c7",n.fillRect(0,170,t,54);const s=60,r=150;n.fillStyle="#38bdf8",n.fillRect(s,r,12,20),n.fillStyle="#0284c7",n.fillRect(s-4,r+8,8,8),n.fillStyle="#facc15";for(let a=0;a<3;a++){const o=s+16+(e*200+a*50)%150;n.beginPath(),n.arc(o,r+10,4,0,Math.PI*2),n.fill()}}function F_(n,e,t,i){n.fillStyle="#38bdf8",n.fillRect(0,0,t,100),n.fillStyle="#fef08a",n.beginPath(),n.arc(t/2,70,24,0,Math.PI*2),n.fill(),n.fillStyle="#334155",n.fillRect(0,100,t,i-100);const s=t/2+Math.sin(e*3)*35;n.fillStyle="#dc2626",n.fillRect(s-16,165,32,16),n.fillStyle="#fbbf24",n.fillRect(s-6,158,6,7)}function k_(n,e,t,i){n.fillStyle="#09090b",n.fillRect(0,0,t,i),n.fillStyle="#f43f5e",n.font="bold 10px monospace",n.fillText("CLUB 90s",30,50),n.fillStyle="#27272a",n.fillRect(0,150,t,74);const s=80,r=125;n.fillStyle="#ffffff",n.fillRect(s,r,14,32),n.fillStyle="#1d4ed8",n.fillRect(s,r+16,14,18),Math.floor(e*5)%2===0&&(n.fillStyle="#f97316",n.beginPath(),n.arc(s+20,r+4,12,0,Math.PI*2),n.fill())}function O_(n,e,t,i){n.fillStyle="#f97316",n.fillRect(0,0,t,90),n.fillStyle="#1e293b",n.fillRect(0,90,t,i-90);const s=t/2-25+Math.sin(e*4)*8,r=t/2+15-Math.sin(e*4)*8;n.fillStyle="#ffffff",n.fillRect(s,155,20,14),n.fillStyle="#ef4444",n.fillRect(r,160,20,14),n.fillStyle="#38bdf8",n.fillRect(s+6,169,8,8)}function B_(n,e,t,i){n.fillStyle="#0f051d",n.fillRect(0,0,t,i),n.fillStyle="#991b1b",n.beginPath(),n.arc(190,60,24,0,Math.PI*2),n.fill(),n.fillStyle="#27272a",n.fillRect(0,160,t,64);const s=60,r=130;n.fillStyle="#78350f",n.fillRect(s,r,12,30),n.strokeStyle="#facc15",n.lineWidth=2;const a=e*3%1;n.beginPath(),n.moveTo(s+12,r+8),n.bezierCurveTo(s+35,r-10,s+50,r+20,s+70+a*20,r+6),n.stroke()}function zf(n,e,t,i){n.fillStyle="#fde047",n.fillRect(0,0,t,130),n.fillStyle="#d97706",n.fillRect(0,130,t,94);const s=60,r=145;n.fillStyle="#ffffff",n.fillRect(s-4,r-14,8,4),n.fillStyle="#ef4444",n.fillRect(s-4,r-10,8,14),n.fillStyle="#15803d",n.fillRect(s-4,r+4,8,14),n.fillStyle="#facc15";for(let l=0;l<4;l++){const c=s+16+(e*220+l*40)%140;n.fillRect(c,r-6,6,2)}const a=190,o=145;n.fillStyle="#475569",n.fillRect(a-15,o,30,16),Math.floor(e*6)%2===0&&(n.fillStyle="#f97316",n.beginPath(),n.arc(a,o-4,18,0,Math.PI*2),n.fill())}function z_(n,e,t,i){zf(n,e,t);const s=140+Math.sin(e*3)*30;n.fillStyle="#a855f7",n.beginPath(),n.ellipse(s,50,18,7,0,0,Math.PI*2),n.fill(),Math.floor(e*4)%2===0&&(n.fillStyle="#00f5ff",n.fillRect(s-2,57,4,80))}function G_(n,e,t,i){n.fillStyle="#7c2d12",n.fillRect(0,0,t,140),n.fillStyle="#ca8a04",n.fillRect(0,140,t,84);const s=65,r=135;n.fillStyle="#ffffff",n.fillRect(s-6,r-16,12,30),n.fillStyle="#ef4444",n.fillRect(s-6,r-18,12,3);const a=185,o=135;n.fillStyle="#15803d",n.fillRect(a-8,o-16,16,30),n.fillStyle="#f97316",n.fillRect(a-8,o-20,16,6);const l=e*2%1.2,c=s+14+l*95;n.fillStyle="#38bdf8",n.beginPath(),n.arc(c,r-6,8,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(c,r-6,4,0,Math.PI*2),n.fill()}function V_(n,e,t,i,s){n.fillStyle="#0a0d24",n.fillRect(0,0,i,s),n.strokeStyle="#00f5ff",n.lineWidth=1;for(let r=0;r<s;r+=16)n.beginPath(),n.moveTo(0,r),n.lineTo(i,r),n.stroke();n.fillStyle="#fff",n.font="bold 12px monospace",n.textAlign="center",n.fillText((e.name||"ARCADE").toUpperCase(),i/2,s/2)}const Ec=[{primary:62975,secondary:7940298,accent:16711807},{primary:16711807,secondary:62975,accent:16765738},{primary:393121,secondary:62975,accent:16711807},{primary:16765738,secondary:16711807,accent:62975},{primary:7940298,secondary:62975,accent:393121}];function H_(n,e){const t=document.createElement("canvas");t.width=512,t.height=128;const i=t.getContext("2d"),s=i.createLinearGradient(0,0,512,128);s.addColorStop(0,"#0a0d24"),s.addColorStop(.5,"#191f48"),s.addColorStop(1,"#0a0d24"),i.fillStyle=s,i.fillRect(0,0,512,128),i.strokeStyle="#"+e.secondary.toString(16).padStart(6,"0"),i.lineWidth=4,i.strokeRect(6,6,500,116),i.strokeStyle="#"+e.primary.toString(16).padStart(6,"0"),i.lineWidth=2,i.strokeRect(12,12,488,104),i.fillStyle="#ffffff",i.font='bold 36px "Segoe UI", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),i.shadowBlur=15;const r=`${n.icon||"🎮"} ${(n.name||"ARCADE").toUpperCase()}`;i.fillText(r,256,54),i.font="bold 16px monospace",i.fillStyle="#"+e.accent.toString(16).padStart(6,"0"),i.shadowBlur=8,i.fillText(`• ${n.category?n.category.toUpperCase():"CLASSIC ARCADE"} •`,256,96);const a=new tn(t);return a.minFilter=vt,a.needsUpdate=!0,a}function W_(n,e){const t=document.createElement("canvas");t.width=256,t.height=224;const i=t.getContext("2d");i.imageSmoothingEnabled=!1;const s=new tn(t);s.minFilter=bt,s.magFilter=bt,s.generateMipmaps=!1;const r=a=>{s_(i,n,a,256,224),s.needsUpdate=!0};return r(0),{texture:s,update:r}}function X_(){const n=document.createElement("canvas");n.width=512,n.height=128;const e=n.getContext("2d"),t=new tn(n);t.minFilter=vt;const i=new Qi({map:t,transparent:!0,depthTest:!1}),s=new Is(i);return s.scale.set(2.4,.6,1),s.position.set(0,3.65,.45),s.visible=!1,{sprite:s,setPlayer:a=>{if(!a){s.visible=!1;return}e.clearRect(0,0,512,128),e.fillStyle="rgba(6, 10, 25, 0.92)",e.strokeStyle="#05ffa1",e.lineWidth=5,e.beginPath(),e.roundRect(14,14,484,100,24),e.fill(),e.stroke(),e.font='bold 30px "Outfit", "Segoe UI", sans-serif',e.fillStyle="#05ffa1",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#05ffa1",e.shadowBlur=14,e.fillText(`🕹️ [${a.toUpperCase()}] JOGANDO`,256,64),t.needsUpdate=!0,s.visible=!0}}}function q_(n,e,t=0){const i=new yn;i.position.set(e.x,0,e.z),i.rotation.y=t;let s=0;for(let K=0;K<(n.id||"").length;K++)s=(s<<5)-s+n.id.charCodeAt(K);let r=Ec[Math.abs(s)%Ec.length];n.id==="street-fighter-2"&&(r={primary:16726832,secondary:26367,accent:16765738}),n.id==="super-mario"&&(r={primary:15017249,secondary:4436039,accent:16502784}),n.id==="super-bomberman"&&(r={primary:28908,secondary:16777215,accent:16729943}),n.id==="gta-2"&&(r={primary:16765738,secondary:26367,accent:16726072}),n.id==="classic-doom"&&(r={primary:16726072,secondary:16752410,accent:16765738}),n.id==="classic-pacman"&&(r={primary:16765738,secondary:26367,accent:16777215});const a=new _t({color:1975357,roughness:.4,metalness:.3}),o=new _t({color:r.primary,roughness:.3,metalness:.4}),l=new ft({color:r.primary}),c=new at(1.6,1.4,1.3),h=new Se(c,a);h.position.set(0,.7,0),i.add(h);const f=new nn(.7,.8),d=new _t({color:790304,roughness:.5,metalness:.7}),p=new Se(f,d);p.position.set(0,.75,.66),i.add(p);const g=new at(.14,.1,.04),_=new ft({color:16755200}),m=new Se(g,_);m.position.set(-.16,.9,.68);const u=new Se(g,_);u.position.set(.16,.9,.68),i.add(m),i.add(u);const y=new at(1.65,.22,.7),b=new _t({color:1316907,roughness:.3,metalness:.4}),E=new Se(y,b);E.position.set(0,1.4,.48),E.rotation.x=.22,i.add(E);const x=new Yt(.02,.02,.14),w=new _t({color:13421772,metalness:.9}),P=new yi(.05,12,12),C=new ft({color:r.accent}),S=new Se(x,w);S.position.set(-.35,1.55,.48);const T=new Se(P,C);T.position.set(-.35,1.63,.48),i.add(S),i.add(T);const I=new Yt(.035,.035,.03,10),z=[62975,16711807,16765738,393121];for(let K=0;K<2;K++)for(let j=0;j<3;j++){const Me=new ft({color:z[(K*3+j)%z.length]}),he=new Se(I,Me);he.position.set(.12+j*.1,1.48-K*.06,.54-K*.08),i.add(he)}const B=new at(1.6,1.3,1.1),A=new Se(B,a);A.position.set(0,2.1,-.05),i.add(A);const L=new at(1.4,1,.08),D=new _t({color:527128,roughness:.8}),N=new Se(L,D);N.position.set(0,2.15,.46),N.rotation.x=-.25,i.add(N);const{texture:H,update:ee}=W_(n),te=new nn(1.22,.88),U=new ft({map:H}),V=new Se(te,U);V.position.set(0,2.15,.51),V.rotation.x=-.25,i.add(V);const re=new at(1.65,.6,.85),be=new Se(re,a);be.position.set(0,3,.2),i.add(be);const Ee=H_(n,r),$=new ft({map:Ee}),Q=new nn(1.58,.52),me=new Se(Q,$);me.position.set(0,3.02,.64),me.rotation.x=-.08,i.add(me);const Ue=new at(1.68,.05,.05),de=new Se(Ue,l);de.position.set(0,3.3,.66);const De=new Se(Ue,l);De.position.set(0,2.74,.62),i.add(de),i.add(De);const Je=new at(.06,2.7,1.25),Ne=new Se(Je,o);Ne.position.set(-.82,1.7,.05);const Xe=new Se(Je,o);Xe.position.set(.82,1.7,.05),i.add(Ne),i.add(Xe);const Ce=new Qn(1.2,1.45,32),ke=new ft({color:r.primary,side:Rt,transparent:!0,opacity:.35}),tt=new Se(Ce,ke);tt.rotation.x=-Math.PI/2,tt.position.set(0,.03,.8),i.add(tt);const F=X_();i.add(F.sprite);const dt=Math.sin(t)*2.2,Ye=Math.cos(t)*2.2,je=e.x+dt,we=e.z+Ye,R=Math.abs(Math.sin(t))>.5,v=R?.65:.78,O=R?.78:.65,J={minX:e.x-v,maxX:e.x+v,minZ:e.z-O,maxZ:e.z+O};return{game:n,group:i,theme:r,screenMesh:V,marqueeFace:me,floorGlow:tt,occupancyBadge:F,occupiedBy:null,standSpot:{x:je,z:we},position:{x:e.x,z:e.z},rotationY:t,collisionBox:J,isHovered:!1,_lastFrame:0,setOccupiedBy(K){this.occupiedBy=K,this.occupancyBadge.setPlayer(K)},clearOccupied(){this.occupiedBy=null,this.occupancyBadge.setPlayer(null)},update(K,j){if(this.occupiedBy&&this.occupancyBadge.sprite.visible&&(this.occupancyBadge.sprite.position.y=3.65+Math.sin(K*3.5)*.06),j&&!this.isHovered&&!this.occupiedBy){const Me=this.position.x-j.x,he=this.position.z-j.z;if(Me*Me+he*he>72.25){tt.material.opacity=.25;return}}if(this.isHovered||this.occupiedBy)ee(K),tt.material.opacity=.7+Math.sin(K*6)*.25;else{const Me=Math.floor(K*24);this._lastFrame!==Me&&(this._lastFrame=Me,ee(K)),tt.material.opacity=.35}}}}class Y_{constructor(){this.catalog=null,this.tracks=[],this.artists=[],this.currentIndex=0,this.isPlaying=!1,this.isDucked=!1,this.volume=.75,this.duckMultiplier=1,this.duckInterval=null,this.subscribers=new Set,this.unlocked=!1,this.audioElement=new Audio,this.audioElement.preload="auto",this.audioElement.volume=this.volume,this.currentTrackTime=0,this.tickerInterval=null,this.bindAudioEvents()}bindAudioEvents(){this.audioElement.addEventListener("ended",()=>{this.next()}),this.audioElement.addEventListener("timeupdate",()=>{isNaN(this.audioElement.currentTime)||(this.currentTrackTime=this.audioElement.currentTime)}),this.audioElement.addEventListener("play",()=>{this.isPlaying=!0,this.notify()}),this.audioElement.addEventListener("pause",()=>{this.isPlaying=!1,this.notify()}),this.audioElement.addEventListener("error",e=>{console.warn("Audio playback error on current track:",e,this.audioElement.error),this.isPlaying=!1,this.notify()})}resolveUrl(e){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const t=e.replace(/^(\.\/|\/)/,"");try{return new URL(t,window.location.href).href}catch{return t}}async init(){const e=await this.loadCatalog();return e&&(this.catalog=e,this.tracks=(e.tracks||[]).map(t=>({...t,resolvedAudioUrl:this.resolveUrl(t.audioUrl)})),this.artists=e.artists||[]),this.tracks.length>0&&!this.audioElement.src&&(this.audioElement.src=this.tracks[0].resolvedAudioUrl,this.audioElement.load()),this.startTicker(),this.notify(),this}async loadCatalog(){const e=[new URL("music/catalog.json",window.location.href).href,"./music/catalog.json","/music/catalog.json"];for(const t of e)try{const i=await fetch(t);if(i.ok){const s=await i.json();if(s&&s.tracks&&s.tracks.length>0)return s}}catch{}return console.warn("Could not locate catalog.json in any fallback path"),null}getCurrentTrack(){return this.tracks.length?this.tracks[this.currentIndex]:null}async playTrack(e){if(!this.tracks.length)return;e<0&&(e=this.tracks.length-1),e>=this.tracks.length&&(e=0),this.currentIndex=e;const t=this.getCurrentTrack();if(!t)return;this.currentTrackTime=0;const i=t.resolvedAudioUrl||this.resolveUrl(t.audioUrl);this.audioElement.src!==i&&(this.audioElement.src=i,this.audioElement.load()),this.applyVolume();try{await this.audioElement.play(),this.isPlaying=!0,this.unlocked=!0,this.notify()}catch(s){console.warn("Audio play() error or user gesture required:",s),this.isPlaying=!1,this.notify()}}async togglePlay(){if(this.tracks.length)if(this.isPlaying)this.pause();else{const e=this.getCurrentTrack(),t=(e==null?void 0:e.resolvedAudioUrl)||this.resolveUrl(e==null?void 0:e.audioUrl);(!this.audioElement.src||this.audioElement.src.endsWith("/")||this.audioElement.src==="about:blank")&&t&&(this.audioElement.src=t,this.audioElement.load()),this.applyVolume();try{await this.audioElement.play(),this.isPlaying=!0,this.unlocked=!0,this.notify()}catch(i){console.warn("Audio play() error:",i),this.playTrack(this.currentIndex)}}}pause(){this.isPlaying=!1,this.audioElement.pause(),this.notify()}next(){const e=(this.currentIndex+1)%(this.tracks.length||1);this.playTrack(e)}prev(){const e=(this.currentIndex-1+(this.tracks.length||1))%(this.tracks.length||1);this.playTrack(e)}applyVolume(){const e=this.volume*this.duckMultiplier;this.audioElement.volume=Math.max(0,Math.min(1,e))}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.applyVolume(),this.notify()}duck(e){this.isDucked=e;const t=e?.12:1;this.duckInterval&&clearInterval(this.duckInterval);const i=e?-.1:.1;this.duckInterval=setInterval(()=>{Math.abs(this.duckMultiplier-t)<.1?(this.duckMultiplier=t,this.applyVolume(),clearInterval(this.duckInterval),this.duckInterval=null):(this.duckMultiplier+=i,this.applyVolume())},25)}unlockAndPlay(){this.unlocked||(this.unlocked=!0,this.isPlaying||this.playTrack(this.currentIndex))}getFrequencyData(e){var r;if(!this.isPlaying){e.fill(0);return}const t=performance.now()/1e3,i=((r=this.getCurrentTrack())==null?void 0:r.bpm)||132,s=t*(i/60)%1;for(let a=0;a<e.length;a++){const o=Math.sin(t*8+a*.5),l=Math.pow(Math.sin(s*Math.PI),2),c=Math.max(.08,l*.65+(o*.5+.5)*.35);e[a]=Math.floor(c*255*(this.isDucked?.2:1))}}startTicker(){this.tickerInterval&&clearInterval(this.tickerInterval),this.tickerInterval=setInterval(()=>{this.isPlaying&&(isNaN(this.audioElement.currentTime)||(this.currentTrackTime=this.audioElement.currentTime),this.notify("time"))},250)}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notify(e="state"){const t=this.getCurrentTrack(),i=this.audioElement&&this.audioElement.duration&&!isNaN(this.audioElement.duration)&&this.audioElement.duration>0?this.audioElement.duration:t&&t.durationSec||150,s={type:e,isPlaying:this.isPlaying,currentTrack:t,currentIndex:this.currentIndex,currentTime:this.currentTrackTime,duration:i,volume:this.volume,isDucked:this.isDucked,isProcedural:!1};this.subscribers.forEach(r=>{try{r(s)}catch(a){console.error(a)}})}}const We=new Y_;typeof window<"u"&&(window.__MUSIC_MANAGER__=We);function j_(){const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d"),t=new tn(n);t.minFilter=vt;const i=new Uint8Array(32);return{texture:t,render:(r,a)=>{e.clearRect(0,0,512,512);const o=e.createLinearGradient(0,0,0,512);o.addColorStop(0,"#0a091d"),o.addColorStop(.5,"#151336"),o.addColorStop(1,"#080718"),e.fillStyle=o,e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.12)",e.lineWidth=1;for(let y=0;y<512;y+=32)e.beginPath(),e.moveTo(0,y),e.lineTo(512,y),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.35)",e.fillRect(80,28,352,34),e.strokeStyle="#ff007f",e.lineWidth=2,e.strokeRect(80,28,352,34),e.fillStyle="#ffffff",e.font='bold 15px "Press Start 2P", monospace, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("★ GAME SOUNDTRACKS ★",256,45);const l=We.getCurrentTrack(),c=We.isPlaying;e.fillStyle="#00f5ff",e.font='bold 22px "Outfit", Arial, sans-serif',e.shadowColor="#00f5ff",e.shadowBlur=12;const h=l?l.title:"ARCADE CLASSICS FM";e.fillText(h,256,105),e.fillStyle="#ffd32a",e.font="16px monospace",e.shadowColor="#ffd32a",e.shadowBlur=8;const f=l?`${l.artistName} • ${l.game||"ORIGINAL OST"}`:"TRILHAS DOS FLIPERAMAS";e.fillText(f,256,138),We.getFrequencyData(i);const d=20,p=16,g=6,_=(512-(d*(p+g)-g))/2,m=320,u=120;for(let y=0;y<d;y++){let b=i[y%i.length]/255;(!c||b<.05)&&(b=.15+.12*Math.sin(r*3+y*.4));const E=Math.max(6,b*u),x=_+y*(p+g),w=m-E,P=e.createLinearGradient(0,m,0,m-u);P.addColorStop(0,"#00f5ff"),P.addColorStop(.6,"#ff007f"),P.addColorStop(1,"#ffd32a"),e.fillStyle=P,e.shadowColor="#ff007f",e.shadowBlur=8,e.fillRect(x,w,p,E),e.fillStyle="#ffffff",e.fillRect(x,w-4,p,3)}e.strokeStyle="#00f5ff",e.lineWidth=2,e.beginPath(),e.moveTo(_-10,m+2),e.lineTo(_+d*(p+g)+4,m+2),e.stroke(),e.shadowBlur=0,c?(e.fillStyle="#05ffa1",e.font="bold 16px monospace",e.fillText("● EM REPRODUÇÃO [SPACE = MENU]",256,380)):(e.fillStyle="#ff007f",e.font="bold 16px monospace",e.fillText("■ EM ESPERA [SPACE = ABRIR]",256,380)),(Math.floor(r*2.5)%2===0||a)&&(e.fillStyle="#00f5ff",e.font="bold 20px monospace",e.shadowColor="#00f5ff",e.shadowBlur=14,e.fillText("▶ PRESSIONE [ESPAÇO] PARA OUVIR ◀",256,435)),e.fillStyle="rgba(0, 0, 0, 0.28)";for(let y=0;y<512;y+=4)e.fillRect(0,y,512,2);e.strokeStyle=a?"#00f5ff":"#ff007f",e.lineWidth=8,e.strokeRect(4,4,504,504),t.needsUpdate=!0}}}function $_(){const n=document.createElement("canvas");n.width=512,n.height=160;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,512,160);t.addColorStop(0,"#0c0721"),t.addColorStop(.5,"#220b38"),t.addColorStop(1,"#0c0721"),e.fillStyle=t,e.fillRect(0,0,512,160),e.strokeStyle="#ff007f",e.lineWidth=5,e.strokeRect(6,6,500,148),e.strokeStyle="#00f5ff",e.lineWidth=2,e.strokeRect(12,12,488,136),e.fillStyle="#ffffff",e.font='bold 36px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#00f5ff",e.shadowBlur=20,e.fillText("📻 RETRO ARCADE JUKEBOX",256,65),e.font="bold 16px monospace",e.fillStyle="#ffd32a",e.shadowColor="#ff007f",e.shadowBlur=10,e.fillText("• TRILHAS SONORAS CLÁSSICAS DOS JOGOS •",256,115);const i=new tn(n);return i.needsUpdate=!0,i}function K_(n,e=0){const t=new yn;t.position.set(n.x,0,n.z),t.rotation.y=e;const i=new _t({color:1249576,roughness:.35,metalness:.6}),s=new _t({color:15658734,roughness:.1,metalness:.95}),r=new ft({color:62975}),a=new ft({color:16711807});new ft({color:16765738});const o=new at(1.8,1.3,1.2),l=new Se(o,i);l.position.set(0,.65,0),t.add(l);for(let Ne=0;Ne<7;Ne++){const Xe=new at(1.3,.04,.05),Ce=new Se(Xe,s);Ce.position.set(0,.4+Ne*.12,.61),t.add(Ce)}const c=new Yt(.08,.08,3.2,16),h=new Se(c,r);h.position.set(-.95,1.6,.3),t.add(h);const f=new Se(c,a);f.position.set(.95,1.6,.3),t.add(f);const d=new at(1.85,.2,.7),p=new _t({color:1709624,roughness:.2,metalness:.7}),g=new Se(d,p);g.position.set(0,1.35,.45),g.rotation.x=.2,t.add(g);const _=new yn;_.position.set(0,1.65,.45),t.add(_);const m=new Yt(.32,.32,.02,32),u=new _t({color:1118481,roughness:.2,metalness:.8}),y=new Se(m,u);_.add(y);const b=new Qn(.12,.3,32),E=new ft({color:62975,side:Rt}),x=new Se(b,E);x.rotation.x=-Math.PI/2,x.position.y=.015,_.add(x);const w=new Qn(0,.1,32),P=new ft({color:16711807,side:Rt}),C=new Se(w,P);C.rotation.x=-Math.PI/2,C.position.y=.016,_.add(C);const S=new at(1.8,1.3,1.1),T=new Se(S,i);T.position.set(0,2.1,-.05),t.add(T);const I=new at(1.5,1.05,.08),z=new _t({color:591639,roughness:.7}),B=new Se(I,z);B.position.set(0,2.15,.46),B.rotation.x=-.25,t.add(B);const{texture:A,render:L}=j_(),D=new nn(1.4,.95),N=new ft({map:A,toneMapped:!1}),H=new Se(D,N);H.position.set(0,2.15,.51),H.rotation.x=-.25,t.add(H);const ee=new Yt(.9,.9,1,32,1,!1,0,Math.PI),te=new Se(ee,i);te.rotation.z=Math.PI/2,te.rotation.y=-Math.PI/2,te.position.set(0,2.8,-.05),t.add(te);const U=new al(.88,.05,16,32,Math.PI),V=new Se(U,r);V.position.set(0,2.8,.4),t.add(V);const re=$_();new at(1.7,.45,.1);const be=new Se(new nn(1.68,.42),new ft({map:re,toneMapped:!1}));be.position.set(0,3.12,.46),t.add(be);const Ee=new nn(3.6,3.6),$=new ft({color:62975,transparent:!0,opacity:.45,side:Rt}),Q=new Se(Ee,$);Q.rotation.x=-Math.PI/2,Q.position.set(0,.03,.6),t.add(Q);const me=2,Ue=n.x+Math.sin(e)*me,de=n.z+Math.cos(e)*me,De={minX:n.x-.95,maxX:n.x+.95,minZ:n.z-.7,maxZ:n.z+.7};return{game:{id:"phase-ai-jukebox",name:"Retro Arcade Jukebox",icon:"📻",category:"music",description:"Ouça as trilhas sonoras clássicas de Street Fighter II, Mario, Sonic, OutRun, GTA 2, Streets of Rage, Doom e Mega Man!",isJukebox:!0},group:t,screenMesh:H,marqueeFace:be,floorGlow:Q,standSpot:{x:Ue,z:de},position:{x:n.x,z:n.z},rotationY:e,collisionBox:De,isHovered:!1,isJukebox:!0,update(Ne){L(Ne,this.isHovered),We.isPlaying?_.rotation.y+=.04:_.rotation.y+=.005,this.isHovered?(Q.material.opacity=.75+Math.sin(Ne*6)*.2,V.material.color.setHex(Math.floor(Ne*3)%2===0?62975:16711807)):Q.material.opacity=.4+Math.sin(Ne*2)*.15}}}function Z_(){const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#10142e",e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.28)",e.lineWidth=2;for(let i=0;i<512;i+=64)e.beginPath(),e.moveTo(i,0),e.lineTo(i,512),e.stroke();for(let i=0;i<512;i+=64)e.beginPath(),e.moveTo(0,i),e.lineTo(512,i),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.45)";for(let i=32;i<512;i+=64)for(let s=32;s<512;s+=64)e.beginPath(),e.arc(i,s,5,0,Math.PI*2),e.fill();const t=new tn(n);return t.wrapS=Rs,t.wrapT=Rs,t.repeat.set(12,16),t.needsUpdate=!0,t}function Hi(n,e,t,i="#00f5ff",s="#ff007f"){const r=document.createElement("canvas");r.width=1024,r.height=256;const a=r.getContext("2d");a.fillStyle="transparent",a.fillRect(0,0,1024,256),a.font='bold 72px "Segoe UI", sans-serif',a.textAlign="center",a.textBaseline="middle",a.shadowColor=s,a.shadowBlur=30,a.fillStyle=i,a.fillText(n,512,128);const o=new tn(r);o.needsUpdate=!0;const l=new ft({map:o,transparent:!0,side:Rt});return new Se(new nn(e,t),l)}function J_(n,e){const t={minX:-23.5,maxX:23.5,minZ:-29,maxZ:18},i=new yn;n.add(i);const s=new nu(16777215,2.4);i.add(s);const r=new Qd(62975,16711807,2.2);i.add(r);const a=new Zl(16777215,2.2);a.position.set(10,25,20),i.add(a);const o=new Zl(62975,1.8);o.position.set(-15,20,-15),i.add(o);const l=new xa(62975,3.5,60,0);l.position.set(0,8,0),i.add(l);const c=new xa(16711807,3.2,60,0);c.position.set(-15,7,-10),i.add(c);const h=new xa(16765738,3.2,60,0);h.position.set(15,7,-10),i.add(h);const f=Z_(),d=new nn(50,76),p=new _t({map:f,roughness:.5,metalness:.2}),g=new Se(d,p);g.rotation.x=-Math.PI/2,g.position.set(0,0,4),i.add(g);const _=new Yt(10.5,10.5,.08,36),m=new _t({color:1581122,roughness:.3,metalness:.5}),u=new Se(_,m);u.position.set(0,.04,-2.5),i.add(u);const y=new Qn(10.2,10.5,36),b=new ft({color:62975,side:Rt}),E=new Se(y,b);E.rotation.x=-Math.PI/2,E.position.set(0,.09,-2.5),i.add(E);const x=new Qn(1.2,1.8,24),w=new ft({color:16711807,side:Rt}),P=new Se(x,w);P.rotation.x=-Math.PI/2,P.position.set(0,.1,-2.5),i.add(P);const C=new _t({color:1448494,roughness:.5,metalness:.3,side:Fn}),S=new Se(new at(50,10,1),C);S.position.set(0,5,-30),i.add(S);const T=new Se(new at(50,10,1),C);T.position.set(0,5,40),i.add(T);const I=new Se(new at(1,10,72),C);I.position.set(-24.5,5,4),i.add(I);const z=new Se(new at(1,10,72),C);z.position.set(24.5,5,4),i.add(z);const B=(be,Ee,$,Q,me,Ue)=>{const de=me?new at(.12,.12,Q):new at(Q,.12,.12),De=new ft({color:Ue}),Je=new Se(de,De);Je.position.set(be,Ee,$),i.add(Je)};B(0,4.2,-29.4,48,!1,62975),B(0,7.8,-29.4,48,!1,16711807),B(-23.9,4.2,4,68,!0,393121),B(23.9,4.2,4,68,!0,16765738);const A=Hi("⚡ NOPEX VIRTUAL ARCADE ⚡",24,6,"#00f5ff","#ff007f");A.position.set(0,8.2,-29.2),i.add(A);const L=Hi("🌟 SPOTLIGHT MEGAHITS",10,2.5,"#ffd32a","#ff007f");L.position.set(0,6.5,-3.5),i.add(L);const D=Hi("⚔️ ACTION & FIGHTING ALLEY",14,2.5,"#ff007f","#00f5ff");D.position.set(-18.5,6.5,-3.5),D.rotation.y=Math.PI/2,i.add(D);const N=Hi("🕹️ RETRO VAULT & 16-BIT LEGENDS",15,2.5,"#7928ca","#00f5ff");N.position.set(0,6.5,-25.5),i.add(N);const H=Hi("🏎️ SPEEDWAY & RACING",12,2.5,"#ff3838","#ffd32a");H.position.set(11.5,6.5,-10),H.rotation.y=-Math.PI/2,i.add(H);const ee=Hi("🎱 SPORTS & CASUAL ARCADE",12,2.5,"#05ffa1","#ffd32a");ee.position.set(20,6.5,-5),ee.rotation.y=-Math.PI/2,i.add(ee);const te={};e.forEach(be=>{te[be.id]=be});const U=[],V=(be,Ee,$)=>{const Q=te[be]||e[U.length%e.length],me=q_(Q,Ee,$);i.add(me.group),U.push(me)};V("classic-doom",{x:-5.4,z:5},0),V("classic-pacman",{x:-1.8,z:5},0),V("neon-tetris-3d",{x:1.8,z:5},0);const re=K_({x:5.4,z:5},0);return i.add(re.group),U.push(re),V("geometricsurvivor",{x:0,z:-10},0),V("cyber-pong-3d",{x:0,z:2.5},Math.PI),V("neon-viper",{x:-6.5,z:-3.5},Math.PI/2),V("cute-mini-golf",{x:6.5,z:-3.5},-Math.PI/2),V("street-fighter-2",{x:-19.5,z:-24.5},Math.PI/2),V("mk2",{x:-19.5,z:-21},Math.PI/2),V("sor2",{x:-19.5,z:-17.5},Math.PI/2),V("mslug",{x:-19.5,z:-14},Math.PI/2),V("mslugx",{x:-19.5,z:-10.5},Math.PI/2),V("gta-2",{x:-19.5,z:-7},Math.PI/2),V("neon-katana-slash",{x:-19.5,z:-3.5},Math.PI/2),V("stickman-fps-arcade",{x:-19.5,z:0},Math.PI/2),V("castlevania4",{x:-19.5,z:3.5},Math.PI/2),V("sky-ace-1944",{x:-19.5,z:7},Math.PI/2),V("asteroid-blitz",{x:-19.5,z:10.5},Math.PI/2),V("cyber-shuriken",{x:-19.5,z:14},Math.PI/2),V("sonic1",{x:-11.4,z:-26.5},0),V("sonic2",{x:-7.6,z:-26.5},0),V("megaman2",{x:-3.8,z:-26.5},0),V("super-mario",{x:0,z:-26.5},0),V("super-bomberman",{x:3.8,z:-26.5},0),V("neon-stack-3d",{x:7.6,z:-26.5},0),V("neon-orbit-drift",{x:11.4,z:-26.5},0),V("topgear",{x:11.5,z:-20},-Math.PI/2),V("fzero",{x:11.5,z:-15},-Math.PI/2),V("outrun",{x:11.5,z:-10},-Math.PI/2),V("neon-drift-racer",{x:11.5,z:-5},-Math.PI/2),V("cyber-runner-3d",{x:11.5,z:0},-Math.PI/2),V("kawaii-8ball-pool",{x:20.5,z:-20},-Math.PI/2),V("neon-pachinko-pop",{x:20.5,z:-15},-Math.PI/2),V("neon-archery-master",{x:20.5,z:-10},-Math.PI/2),V("brick-breaker-fx",{x:20.5,z:-5},-Math.PI/2),V("neon-drop-2048",{x:20.5,z:0},-Math.PI/2),V("cyber-pinball-fx",{x:20.5,z:5},-Math.PI/2),V("flappy-cyber-droid",{x:20.5,z:10},-Math.PI/2),{roomBounds:t,cabinets:U,worldGroup:i,floorMesh:g,update(be,Ee){U.forEach($=>$.update(be,Ee)),E.material.opacity=.8+Math.sin(be*4)*.2}}}class Q_{constructor(e,t,i=null){this.cabinets=e,this.onPlayGame=t,this.onDiscoverCabinet=i,this.activeCabinet=null,this.lastHoveredCab=null,this.promptEl=document.getElementById("arcade-3d-prompt"),this.promptTitle=document.getElementById("arcade-prompt-title"),this.promptDesc=document.getElementById("arcade-prompt-desc"),this.promptRecord=document.getElementById("arcade-prompt-record"),this.actionBtn=document.getElementById("arcade-action-btn"),this.playBtn=document.getElementById("arcade-hologram-play-btn"),this.bindInputs()}bindInputs(){window.addEventListener("keydown",e=>{document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA")||window.__arcadeOverlayOpen||(e.code==="Enter"||e.code==="KeyE")&&this.activeCabinet&&(e.preventDefault(),this.triggerPlay())}),this.actionBtn&&this.actionBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay()}),this.playBtn&&this.playBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay()}),this.promptEl&&this.promptEl.addEventListener("click",e=>{e.target.tagName!=="BUTTON"&&this.activeCabinet&&this.triggerPlay()})}triggerPlay(){this.activeCabinet&&this.onPlayGame&&this.onPlayGame(this.activeCabinet.game,this.activeCabinet)}update(e){let t=null,i=1/0;for(const s of this.cabinets){s.isHovered=!1;const r=Math.hypot(e.x-s.standSpot.x,e.z-s.standSpot.z);r<3.8&&r<i&&(i=r,t=s)}t?(t.isHovered=!0,this.activeCabinet=t,this.lastHoveredCab!==t&&(kf(),this.lastHoveredCab=t,this.renderHologram(t.game),this.onDiscoverCabinet&&this.onDiscoverCabinet(t.game.id)),this.promptEl&&this.promptEl.classList.add("visible"),this.actionBtn&&this.actionBtn.classList.add("visible")):(this.activeCabinet=null,this.lastHoveredCab=null,this.promptEl&&this.promptEl.classList.remove("visible"),this.actionBtn&&this.actionBtn.classList.remove("visible"))}renderHologram(e){if(this.promptTitle&&(this.promptTitle.innerHTML=`${e.icon||"🎮"} ${e.name||"ARCADE GAME"}`),this.promptDesc&&(e.isJukebox?this.promptDesc.textContent=e.description||"Pressione [E] ou [ENTER] para abrir o Jukebox de trilhas clássicas.":this.promptDesc.textContent=e.description||"Pressione [ENTER] ou [E] para entrar na máquina e jogar."),this.promptRecord)if(e.isJukebox)this.promptRecord.innerHTML="🎵 <strong>RETRO ARCADE JUKEBOX</strong> • 15 Trilhas Clássicas dos Jogos";else{const t=window.__ARCADE_LEADERBOARDS__&&window.__ARCADE_LEADERBOARDS__[e.id];t&&t.topScore?this.promptRecord.innerHTML=`🏆 Recorde Mundial: <strong>${t.topScore.toLocaleString()} ${e.unit||"PTS"}</strong> [${t.topPilot||"MRC"}]`:this.promptRecord.innerHTML=`⚡ 60 FPS Instantâneo • <strong>${(e.category||"ACTION").toUpperCase()}</strong>`}this.playBtn&&(e.isJukebox?this.playBtn.innerHTML='<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">J</kbd> PARA OUVIR</span> ➔':this.playBtn.innerHTML='<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">ENTER</kbd> PARA JOGAR</span> ➔'),this.actionBtn&&(e.isJukebox?this.actionBtn.innerHTML="<span>OUVIR</span> 📻":this.actionBtn.innerHTML="<span>JOGAR</span> 🕹️")}}class ev{constructor(e){this.onCloseCallback=e,this.overlay=document.getElementById("arcade-game-overlay"),this.iframe=document.getElementById("arcade-game-iframe"),this.titleEl=document.getElementById("arcade-overlay-title"),this.closeBtn=document.getElementById("arcade-overlay-back"),this.fullscreenBtn=document.getElementById("arcade-overlay-fullscreen"),this.reloadBtn=document.getElementById("arcade-overlay-reload"),this.isOpen=!1,this.activeGame=null,this.bindEvents()}bindEvents(){this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):this.overlay.requestFullscreen().catch(()=>{})}),this.reloadBtn&&this.reloadBtn.addEventListener("click",()=>{this.iframe&&this.activeGame&&(this.iframe.src=this.activeGame.url)}),window.addEventListener("message",e=>{e.data&&(e.data.type==="CLOSE_ARCADE_GAME"||e.data.type==="ARCADE_CLOSE"||e.data.type==="ARCADE_EXIT"||e.data==="closeArcade"||e.data==="escape")&&this.close()}),window.addEventListener("keydown",e=>{if(e.key==="Escape"&&this.isOpen){e.preventDefault(),e.stopPropagation(),this.close();return}if(this.isOpen&&this.iframe&&this.iframe.contentWindow&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","W","a","A","s","S","d","D"," ","Enter"].includes(e.key))try{this.iframe.contentWindow.postMessage({type:"ARCADE_KEY_DOWN",key:e.key,code:e.code},"*"),this.iframe.contentWindow.dispatchEvent(new KeyboardEvent("keydown",{key:e.key,code:e.code,bubbles:!0}))}catch{}},!0)}attachIframeEscape(){if(this.iframe)try{const e=this.iframe.contentWindow,t=this.iframe.contentDocument||(e==null?void 0:e.document),i=s=>{(s.key==="Escape"||s.code==="Escape"||s.keyCode===27)&&(s.preventDefault(),s.stopPropagation(),this.close())};e&&(e.removeEventListener("keydown",i,!0),e.addEventListener("keydown",i,!0)),t&&(t.removeEventListener("keydown",i,!0),t.addEventListener("keydown",i,!0))}catch{}}open(e){this.isOpen=!0,window.__arcadeOverlayOpen=!0,document.exitPointerLock&&document.exitPointerLock(),this.activeGame=e,Ff(),We.duck(!0),this.titleEl&&(this.titleEl.innerHTML=`${e.icon||"🎮"} ${e.name||"JOGO"}`),this.iframe&&(this.iframe.src=e.url,this.iframe.onload=()=>{try{this.iframe.focus(),this.iframe.contentWindow&&this.iframe.contentWindow.focus(),this.attachIframeEscape()}catch{}},setTimeout(()=>this.attachIframeEscape(),150),setTimeout(()=>this.attachIframeEscape(),600),setTimeout(()=>this.attachIframeEscape(),1500)),this.overlay&&(this.overlay.style.display="flex",setTimeout(()=>{this.overlay.classList.add("active");try{this.iframe&&(this.iframe.focus(),this.iframe.contentWindow&&this.iframe.contentWindow.focus(),this.attachIframeEscape())}catch{}},100))}close(){this.isOpen&&(this.isOpen=!1,window.__arcadeOverlayOpen=!1,document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),Of(),We.duck(!1),this.overlay&&(this.overlay.classList.remove("active"),setTimeout(()=>{this.overlay.style.display="none",this.iframe&&(this.iframe.src="about:blank")},250)),this.onCloseCallback&&this.onCloseCallback())}}class tv{constructor(){this.tickerEl=null,this.createBanner()}createBanner(){let e=document.getElementById("mp-score-ticker");e&&e.remove(),e=document.createElement("div"),e.id="mp-score-ticker",e.style.cssText=`
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
    `,document.body.appendChild(e),this.tickerEl=e}showRecord(e,t,i){if(!this.tickerEl)return;const s=typeof i=="number"?i.toLocaleString("pt-BR"):i;this.tickerEl.innerHTML=`
      <span style="font-size: 16px;">🏆</span>
      <span>NOVO RECORDE: <strong>${e}</strong> MARCOU <strong>${s} PTS</strong> EM ${t.toUpperCase()}!</span>
      <span style="font-size: 16px;">🔥</span>
    `,this.tickerEl.style.transform="translateX(-50%) translateY(0)",this.playFanfareAudio(),this.hideTimeout&&clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(()=>{this.tickerEl.style.transform="translateX(-50%) translateY(-100px)"},6e3)}playFanfareAudio(){try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;t.state==="suspended"&&t.resume(),[523.25,659.25,783.99,1046.5].forEach((s,r)=>{const a=t.createOscillator(),o=t.createGain();a.type="triangle",a.frequency.setValueAtTime(s,t.currentTime+r*.1),o.gain.setValueAtTime(.2,t.currentTime+r*.1),o.gain.exponentialRampToValueAtTime(.01,t.currentTime+r*.1+.3),a.connect(o),o.connect(t.destination),a.start(t.currentTime+r*.1),a.stop(t.currentTime+r*.1+.3)})}catch{}}}/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const ll=Object.freeze,Zn=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Ws=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Gf=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Vf=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,nv=ll({p:Zn,n:Ws,h:1n,a:0n,b:7n,Gx:Gf,Gy:Vf}),fn=32,Tc=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,sn=(n,e,t="")=>{if(Tc(n)&&(e===void 0||n.length===e))return n;const i=Tc(n),s=e!==void 0?` of length ${e}`:"",r=i?`length=${n.length}`:`type=${typeof n}`,a=(t?`"${t}" `:"")+"expected Uint8Array"+s+", got "+r;throw i?new RangeError(a):new TypeError(a)},iv=n=>Uint8Array.from(n),sv=(n,e,t)=>iv(sn(n,t,e)),Hf=(n,e)=>n.toString(16).padStart(e,"0"),Wf=n=>{let e="";for(const t of sn(n))e+=Hf(t,2);return e},Xf=n=>{const e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);const t=new Uint8Array(n.length/2);for(let i=0,s=0;i<t.length;i++,s+=2){const r=n.charCodeAt(s),a=n.charCodeAt(s+1);t[i]=((r&15)+(r>>6)*9)*16+(a&15)+(a>>6)*9}return t},wc=()=>{var e;const n=(e=globalThis==null?void 0:globalThis.crypto)==null?void 0:e.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},es=(...n)=>{let e=0;for(const s of n)e+=sn(s).length;const t=new Uint8Array(e);let i=0;for(const s of n)t.set(s,i),i+=s.length;return t},cl=(n=fn)=>{const e=globalThis==null?void 0:globalThis.crypto;if(typeof(e==null?void 0:e.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},rv=BigInt,Xs=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},Re=(n,e=Zn)=>(n%=e)>=0n?n:e+n,Gr=n=>Re(n,Ws),av=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Re(n,e),i=e,s=0n,r=1n;for(;t!==0n;){const o=i/t,l=i-t*o,c=s-r*o;i=t,t=l,s=r,r=c}if(i!==1n)throw new Error("invert: does not exist");return Re(s,e)},qf=n=>{const e=fv[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},Ac=(n,e,t)=>sn(qf(n)(e,t),fn,"digest"),Rc=async(n,e,t)=>sn(await qf(n)(e,t),fn,"digest"),Ra=n=>{if(n instanceof ei)return n;throw new TypeError("Point expected")},Pa="bad point: not on curve",Yf=n=>Re(Re(n*n)*n+7n),Pc=n=>Xs(n,0n,Zn),Es=n=>Xs(n,1n,Zn),jf=n=>Xs(n,1n,Ws),Vr=n=>!(n&1n),ov=n=>Uint8Array.of(Vr(n)?2:3),$f=n=>{const e=Yf(Es(n));let t=1n;for(let i=e,s=(Zn+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*i%Zn),i=i*i%Zn;if(Re(t*t)!==e)throw new Error("sqrt invalid");return new ei(n,Vr(t)?t:Re(-t),1n)},Ln=class Ln{constructor(e,t,i){Dt(this,"X");Dt(this,"Y");Dt(this,"Z");this.X=Pc(e),this.Y=Es(t),this.Z=Pc(i),ll(this)}static CURVE(){return nv}static fromAffine(e){const{x:t,y:i}=e;return t===0n&&i===0n?Ts:new Ln(t,i,1n)}static fromBytes(e){sn(e);const t=e.length,i=e[0],s=Dr(e,1,33);try{if(t===33&&(i===2||i===3)){const r=$f(s);return i===3?r.negate():r}if(t===65&&i===4)return new Ln(s,Dr(e,33,65),1n).assertValidity()}catch{throw new Error(Pa)}throw new Error(Pa)}static fromHex(e){return Ln.fromBytes(Xf(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:i,Z:s}=this,{X:r,Y:a,Z:o}=Ra(e);return Re(t*o)===Re(r*s)&&Re(i*o)===Re(a*s)}is0(){return this.Z===0n}negate(){return new Ln(this.X,Re(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:i,Z:s}=this,{X:r,Y:a,Z:o}=Ra(e),l=0n,c=7n;let h=0n,f=0n,d=0n;const p=Re(c*3n);let g=Re(t*r),_=Re(i*a),m=Re(s*o),u=Re(t+i),y=Re(r+a);u=Re(u*y),y=Re(g+_),u=Re(u-y),y=Re(t+s);let b=Re(r+o);return y=Re(y*b),b=Re(g+m),y=Re(y-b),b=Re(i+s),h=Re(a+o),b=Re(b*h),h=Re(_+m),b=Re(b-h),d=Re(l*y),h=Re(p*m),d=Re(h+d),h=Re(_-d),d=Re(_+d),f=Re(h*d),_=Re(g+g),_=Re(_+g),m=Re(l*m),y=Re(p*y),_=Re(_+m),m=Re(g-m),m=Re(l*m),y=Re(y+m),g=Re(_*y),f=Re(f+g),g=Re(b*y),h=Re(u*h),h=Re(h-g),g=Re(u*_),d=Re(b*d),d=Re(d+g),new Ln(h,f,d)}subtract(e){return this.add(Ra(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Ts;if(jf(e),e===1n)return this;if(this.equals(Si))return vv(e).p;let i=Ts,s=Si,r=this;for(let a=0;t?a<256:e>0n;a++)e&1n?i=i.add(r):t&&(s=s.add(r)),r=r.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};const s=av(i,Zn);if(Re(i*s)!==1n)throw new Error("inverse invalid");return{x:Re(e*s),y:Re(t*s)}}assertValidity(){const{x:e,y:t}=this.toAffine();if(Es(e),Es(t),Re(t*t)!==Yf(e))throw new Error(Pa);return this}toBytes(e=!0){const{x:t,y:i}=this.assertValidity().toAffine(),s=Bn(t);return e?es(ov(i),s):es(Uint8Array.of(4),s,Bn(i))}toHex(e){return Wf(this.toBytes(e))}};Dt(Ln,"BASE"),Dt(Ln,"ZERO");let ei=Ln;const Si=new ei(Gf,Vf,1n),Ts=new ei(0n,1n,0n);ei.BASE=Si;ei.ZERO=Ts;const lv=(n,e,t)=>Si.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),xi=n=>rv("0x"+(Wf(n)||"0")),Dr=(n,e,t)=>xi(n.subarray(e,t)),Bn=n=>Xf(Hf(Xs(n,0n,2n**256n),fn*2)),cv=n=>{const e=xi(sn(n,fn,"secret key"));return Xs(e,1n,Ws,"invalid secret key: outside of range")},Cc="SHA-256",fv={hmacSha256Async:async(n,e)=>{const t=wc(),i=await t.importKey("raw",n,{name:"HMAC",hash:Cc},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await wc().digest(Cc,n)),sha256:void 0},hv=n=>{if(n=n===void 0?cl(48):n,sn(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");const e=Re(xi(n),Ws-1n);return Bn(e+1n)},dv=n=>e=>{const t=hv(e);return{secretKey:t,publicKey:n(t)}},Kf=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),zo=(n,...e)=>{const t=Ac("sha256",Kf(n));return Ac("sha256",es(t,t,...e))},Go=(n,...e)=>Rc("sha256Async",Kf(n)).then(t=>Rc("sha256Async",es(t,t,...e))),fl=n=>{const e=cv(n),t=Si.multiply(e),{x:i,y:s}=t.assertValidity().toAffine(),r=Vr(s)?e:Gr(-e),a=Bn(i);return{d:r,px:a}},hl=n=>Gr(xi(n)),Zf=(...n)=>hl(zo("challenge",...n)),Jf=async(...n)=>hl(await Go("challenge",...n)),Qf=n=>fl(n).px,uv=dv(Qf),eh=(n,e,t)=>{const i=sv(n,"message"),{px:s,d:r}=fl(e);return{m:i,px:s,d:r,a:sn(t,fn)}},th=n=>{const e=hl(n);if(e===0n)throw new Error("sign failed: k is zero");const{px:t,d:i}=fl(Bn(e));return{rx:t,k:i}},nh=(n,e,t,i)=>es(e,Bn(Gr(n+t*i))),ih="invalid signature produced",pv=(n,e,t=cl(fn))=>{const{m:i,px:s,d:r,a}=eh(n,e,t),o=Bn(r^xi(zo("aux",a))),{rx:l,k:c}=th(zo("nonce",o,s,i)),h=nh(c,l,Zf(l,s,i),r);if(!rh(h,i,s))throw new Error(ih);return h},mv=async(n,e,t=cl(fn))=>{const{m:i,px:s,d:r,a}=eh(n,e,t),o=Bn(r^xi(await Go("aux",a))),{rx:l,k:c}=th(await Go("nonce",o,s,i)),h=nh(c,l,await Jf(l,s,i),r);if(!await ah(h,i,s))throw new Error(ih);return h},gv=(n,e)=>n instanceof Promise?n.then(e):e(n),sh=(n,e,t,i)=>{const s=sn(n,64,"signature"),r=sn(e,void 0,"message"),a=sn(t,fn,"publicKey");let o,l,c,h;try{const f=xi(a);o=$f(f),l=Es(Dr(s,0,fn)),c=jf(Dr(s,fn,64)),h=es(Bn(l),a,r)}catch{return!1}return gv(i(h),f=>{try{const{x:d,y:p}=lv(o,c,Gr(-f)).toAffine();return!(!Vr(p)||d!==l)}catch{return!1}})},rh=(n,e,t)=>sh(n,e,t,Zf),ah=async(n,e,t)=>sh(n,e,t,Jf),oh=ll({keygen:uv,getPublicKey:Qf,sign:pv,verify:rh,signAsync:mv,verifyAsync:ah}),_v=()=>{const n=[];let e=Si,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let s=1;s<128;s++)t=t.add(e),n.push(t);e=t.double()}return n};let Lc;const Ic=(n,e)=>{const t=e.negate();return n?t:e},vv=n=>{const e=Lc||(Lc=_v());let t=Ts,i=Si;for(let s=0;s<33;s++){let r=Number(n&255n);n>>=8n,r>128&&(r-=256,n+=1n);const a=s*128,o=a+Math.abs(r)-1,l=s%2!==0,c=r<0;r===0?i=i.add(Ic(l,e[a])):t=t.add(Ic(c,e[o]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}},{floor:Vo,min:yv,sin:Sv}=Math,dn="Trystero",Us=(n,e)=>Array(n).fill(void 0).map(e),xv="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",as=n=>Us(n,()=>xv[Vo(Math.random()*62)]??"").join(""),hn=as(20),Mi=Promise.all.bind(Promise),lh=typeof window<"u",{entries:gi,fromEntries:ch,keys:Qt,values:Yi}=Object,Ft=()=>{},fh="candidate",ot=n=>(n!==null&&clearTimeout(n),null),nt=n=>new Error(`${dn}: ${n}`),ts=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:jt(n??e),$n=(n,e)=>n instanceof Error?n:nt(ts(n,e)),Mv=new TextEncoder,bv=new TextDecoder,Jn=n=>Mv.encode(n),mi=n=>bv.decode(n),Ns=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Fs=(...n)=>n.join("@"),Ev=(n,e)=>{const t=[...n],i=()=>{const r=Sv(e++)*1e4;return r-Vo(r)};let s=t.length;for(;s;){const r=Vo(i()*s--),a=t[s];t[s]=t[r],t[r]=a}return t},Tv=(n,e,t,i=!1)=>{var s,r;return((s=n.relayConfig)==null?void 0:s.urls)||(i?Ev(e,hh(n.appId)):e).slice(0,((r=n.relayConfig)==null?void 0:r.redundancy)??t)},jt=JSON.stringify,ns=n=>{try{return JSON.parse(n)}catch{throw nt(`failed to parse JSON: ${n}`)}},hh=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,Dc=3333,Uc=6e4,_s={};let ws=null,As=null;const wv=()=>{ws||(ws=new Promise(n=>{As=n}).finally(()=>{As=null,ws=null}))},Av=()=>{As==null||As()},Rv=(n,e,t)=>{const i={};let s=!1,r=!1,a,o=Ft;i.isClosed=!1,i.ready=new Promise(c=>o=c);const l=()=>{if(i.isClosed)return;a=void 0,r=!1;const c=new WebSocket(n);c.onclose=()=>{if(i.isClosed||r)return;if(r=!0,ws){ws.then(l);return}const h=_s[n]??(_s[n]=Dc);if(h>=Uc){i.isClosed=!0;return}a=setTimeout(l,Math.random()*h),_s[n]=yv(h*2,Uc)},c.onmessage=h=>e(String(h.data)),i.socket=c,i.url=c.url,c.onopen=()=>{const h=s;s=!0,o(i),_s[n]=Dc,h&&(t==null||t())},i.send=h=>{c.readyState===1&&c.send(h)}};return i.close=()=>{i.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),i.socket.close()},l(),i},Pv=n=>{const e={},t=new WeakMap,i=a=>{const o=t.get(a);if(!o)throw nt("relay bookkeeping missing registration for relay client");return o},s=()=>{const a={},o=l=>a[l]??(a[l]={});return{forKey:o,forRelay:l=>o(i(l))}},r=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>{const l=e[a];return l||r(a,o())},keyOf:i,scoped:s,getSockets:()=>ch(gi(e).flatMap(([a,o])=>{const l=n(o);return l?[[a,l]]:[]}))}},Cv=()=>{if(lh){const n=new AbortController;return addEventListener("online",Av,{signal:n.signal}),addEventListener("offline",wv,{signal:n.signal}),()=>n.abort()}return Ft},dl="AES-GCM",Ca={},Lv=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),Iv=n=>{const e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},Hr=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,Jn(e))),ks=async n=>Ca[n]??(Ca[n]=Array.from(await Hr("SHA-1",n)).map(e=>e.toString(36)).join("")),Dv=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Jn(`${n}:${e}:${t}`)),{name:dl},!1,["encrypt","decrypt"]),Uv=async(n,e)=>Ns(await Hr("SHA-256",`${dn}:${n}:${e}`)),dh="$",uh=",",Nv=async(n,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(uh)+dh+Lv(await crypto.subtle.encrypt({name:dl,iv:t},await n,Jn(e)))},Fv=async(n,e)=>{const[t,i]=e.split(dh);return mi(await crypto.subtle.decrypt({name:dl,iv:new Uint8Array((t==null?void 0:t.split(uh).map(Number))??[])},await n,Iv(i??"")))},ul=57333,kv=18e4,Ov=20;var Bv=class{constructor(n){Dt(this,"makeOffer");Dt(this,"pool",[]);Dt(this,"pooled",new Set);Dt(this,"leased",new Map);Dt(this,"recycling",new Set);Dt(this,"cleanupTimer",null);Dt(this,"active",!1);this.makeOffer=n}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Us(Ov,this.makeOffer).forEach(n=>this.push(n)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(n=>n.isDead?(this.pooled.delete(n),!1):!0)},ul)}push(n){n.isDead||this.pooled.has(n)||this.leased.has(n)||(this.pool.push(n),this.pooled.add(n))}shift(n){const e=[];for(;e.length<n&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(n){const e=this.leased.get(n);e&&(ot(e),this.leased.delete(n))}recycle(n){if(!(n.isDead||this.recycling.has(n))){if(n.connection.remoteDescription){n.destroy();return}if(!this.active){n.destroy();return}this.recycling.add(n),n.setHandlers({connect:Ft,close:Ft,error:Ft}),n.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||n.isDead||!this.active){n.destroy();return}this.push(n)}).catch(()=>n.destroy()).finally(()=>this.recycling.delete(n))}}reclaimLeased(n){const e=this.leased.get(n);e&&(ot(e),this.leased.delete(n),this.recycle(n))}lease(n){this.claimLeased(n),this.leased.set(n,setTimeout(()=>{this.leased.delete(n),this.recycle(n)},kv))}checkout(n,e,t){const i=this.shift(n),s=Math.max(0,n-i.length);s>0&&i.push(...Us(s,this.makeOffer));const r=async(a,o=!1)=>{try{const l=await t(a);return e?(this.lease(a),{peer:a,offer:l,claim:()=>this.claimLeased(a),reclaim:()=>this.reclaimLeased(a)}):{peer:a,offer:l}}catch(l){if(this.claimLeased(a),this.pooled.delete(a),a.destroy(),!o)return r(this.makeOffer(),!0);throw l}};return Mi(i.map(a=>r(a)))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(n=>n.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((n,e)=>{ot(n),e.destroy()}),this.leased.clear(),this.recycling.forEach(n=>n.destroy()),this.recycling.clear()}};const La=nt("incorrect password for overlapping room"),zv=(n,e,t)=>{const i=a=>Hr("SHA-256",`${a}:${n}:${e}:${t}`).then(Ns),s=async(a,o,l)=>{if(!n)return;if(l){const h=as(36);await a({__trystero_pw:"challenge",c:h});const{data:f}=await o();if(!f||typeof f!="object"||f.__trystero_pw!=="response"||typeof f.h!="string")throw La;const d=await i(h);if(f.h!==d)throw La;return}const{data:c}=await o();if(!c||typeof c!="object"||c.__trystero_pw!=="challenge"||typeof c.c!="string")throw La;await a({__trystero_pw:"response",h:await i(c.c)})};return{run:s,compose:a=>n||a?async(o,l,c,h)=>{await s(l,c,h),await(a==null?void 0:a(o,l,c,h))}:void 0}},Gv=n=>{const e=ts(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},Vv=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:s,onActivate:r,onFailure:a})=>{const o={},l=(f,d)=>{const p=o[f];!p||d&&p.peer!==d||p.isActive||!p.didLocalHandshakePass||!p.didReceiveRemoteReady||(p.isActive=!0,p.handshakeTimer=ot(p.handshakeTimer),r(f,p.peer))},c=(f,d,p)=>{const g=o[f];if(!g||g.peer!==d)return;const _=Gv(p);e==null||e(f,_),a(f,d,nt(_))},h=(f,d)=>{const p=o[f];!p||p.peer!==d||p.isActive||(p.didLocalHandshakePass=!0,s("",f).catch(g=>c(f,d,nt(`failed sending handshake readiness: ${ts(g,"unknown send failure")}`))),l(f,d))};return{addPeer:(f,d)=>{o[f]={peer:d,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(f,d)=>{const p=o[f];p&&(p.handshakeTimer=ot(p.handshakeTimer),p.pendingHandshakePayloads.length=0,p.handshakeWaiters.splice(0).forEach(g=>g.reject(d)),delete o[f])},canReceiveFromPeer:(f,d)=>{const p=o[f];return!!(p&&(p.isActive||d))},start:(f,d)=>{const p=o[f];if(!p||p.peer!==d)return;p.handshakeTimer=setTimeout(()=>c(f,d,nt(`handshake timed out after ${t}ms`)),t);const g=async(u,y)=>{await i(u,f,y)},_=()=>new Promise((u,y)=>{const b=o[f];if(!b||b.peer!==d){y(nt("peer disconnected during handshake"));return}const E=b.pendingHandshakePayloads.shift();if(E){u(E);return}b.handshakeWaiters.push({resolve:u,reject:x=>y(x)})}),m=hn<f;Promise.resolve(n==null?void 0:n(f,g,_,m)).then(()=>h(f,d)).catch(u=>c(f,d,$n(u,"handshake failed")))},receiveHandshakeData:(f,d,p)=>{const g=o[d];if(!g||g.isActive)return;const _=p===void 0?{data:f}:{data:f,metadata:p},m=g.handshakeWaiters.shift();if(m){m.resolve(_);return}g.pendingHandshakePayloads.push(_)},receiveHandshakeReady:f=>{const d=o[f];!d||d.isActive||(d.didReceiveRemoteReady=!0,l(f))}}},Hv=15e3,Wv=5e3,Nc="icegatheringstatechange",Xv="iceconnectionstatechange",vs="offer",qv="answer",Yv=/out of range/i,Fc=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var kc=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{const a=new(i??RTCPeerConnection)({iceServers:jv.concat(s??[]),...t}),o={},l=[],c=[],h=e!==!1,f=[],d=[];let p=!1,g=!1,_=null,m=null,u=!1;const y=()=>m=ot(m),b=()=>{var U;u||(u=!0,y(),(U=o.close)==null||U.call(o))},E=U=>{o.signal?o.signal(U):l.push(U)},x=U=>{const V=o.signal;o.signal=re=>{V==null||V(re),U(re)},l.length>0&&l.splice(0).forEach(re=>{var be;return(be=o.signal)==null?void 0:be.call(o,re)})},w=U=>r?Fc(U):U,P=U=>{if(!r||typeof U.candidate!="string")return U;const V=Fc(U.candidate);return V===U.candidate?U:{...U,candidate:V}},C=U=>{var V,re;return{type:((V=U.localDescription)==null?void 0:V.type)??vs,sdp:w(((re=U.localDescription)==null?void 0:re.sdp)??"")}},S=()=>{var V,re;const U=(V=a.remoteDescription)==null?void 0:V.sdp;return U?((re=U.match(/a=ice-ufrag:([^\s]+)/))==null?void 0:re[1])??null:null},T=()=>{var U,V;return(((V=(U=a.remoteDescription)==null?void 0:U.sdp)==null?void 0:V.match(/^m=/gm))??[]).length},I=U=>{if(!a.remoteDescription)return!1;const V=T();if(typeof U.sdpMLineIndex=="number"&&V>0&&U.sdpMLineIndex>=V)return!1;const re=S();return!(re&&U.usernameFragment&&U.usernameFragment!==re)},z=async U=>{try{return await a.addIceCandidate(U),!0}catch(V){if(V instanceof Error&&Yv.test(V.message)&&typeof U.sdpMLineIndex=="number")return!1;throw V}},B=async()=>{if(!a.remoteDescription||f.length===0)return;const U=f.splice(0),V=[];for(const re of U){if(!I(re)){V.push(re);continue}await z(re)||V.push(re)}V.length>0&&f.push(...V)},A=async U=>{if(I(U)){await z(U)||f.push(U);return}f.push(U)},L=U=>{U.binaryType="arraybuffer",U.bufferedAmountLowThreshold=65535,U.onmessage=V=>{const re=V.data;o.data?o.data(re):c.push(re)},U.onopen=()=>{var V;return(V=o.connect)==null?void 0:V.call(o)},U.onclose=b,U.onerror=({error:V})=>{var re;return(re=o.error)==null?void 0:re.call(o,$n(V,"data channel error"))}},D=async U=>{let V=null;try{await Promise.race([new Promise(re=>{const be=()=>{U.iceGatheringState==="complete"&&(U.removeEventListener(Nc,be),re())};U.addEventListener(Nc,be),be()}),new Promise(re=>{V=setTimeout(re,Hv)})])}finally{ot(V)}return C(U)},N=async()=>{const U=h?C(a):await D(a);return E(U),U};n?(_=a.createDataChannel("data"),L(_)):a.ondatachannel=({channel:U})=>{_=U,L(U)};const H=async(U=!1)=>{var V,re;if(a.connectionState!=="closed")try{return p=!0,U&&(a.signalingState!=="stable"&&a.signalingState!=="closed"&&((V=a.localDescription)==null?void 0:V.type)===vs&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(U?await a.createOffer({iceRestart:!0}):void 0),await N()}catch(be){(re=o.error)==null||re.call(o,$n(be,"failed to create local offer"))}finally{p=!1}};a.onnegotiationneeded=async()=>H(!1),a.onicecandidate=({candidate:U})=>{if(!h||!U)return;const V=P(typeof U.toJSON=="function"?U.toJSON():{candidate:U.candidate,sdpMid:U.sdpMid,sdpMLineIndex:U.sdpMLineIndex,usernameFragment:U.usernameFragment});E({type:fh,sdp:JSON.stringify(V)})};const ee=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){b();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){y();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&b()},Wv));return}};a.onconnectionstatechange=ee,a.addEventListener(Xv,ee),a.ontrack=U=>{var re,be;const V=U.streams[0];if(V){if(!o.track&&!o.stream){d.push({track:U.track,stream:V});return}(re=o.track)==null||re.call(o,U.track,V),(be=o.stream)==null||be.call(o,V)}},a.onremovestream=U=>{var V;return(V=o.stream)==null?void 0:V.call(o,U.stream)};const te=n?new Promise(U=>x(V=>{V.type===vs&&U(V)})):Promise.resolve();return n&&queueMicrotask(()=>{var U;!p&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&((U=a.onnegotiationneeded)==null||U.call(a,new Event("negotiationneeded")))}),{created:Date.now(),connection:a,get channel(){return _},get isDead(){return a.connectionState==="closed"},getOffer:async(U=!1)=>{var V;if(n)return U?H(!0):((V=a.localDescription)==null?void 0:V.type)===vs?h?C(a):D(a):te},async signal(U){var V,re,be;if(U.type==="candidate"){try{const Ee=JSON.parse(U.sdp);Ee&&typeof Ee=="object"&&await A(P(Ee))}catch(Ee){(V=o.error)==null||V.call(o,$n(Ee,"failed to parse remote candidate"))}return}if(!((_==null?void 0:_.readyState)==="open"&&!((re=U.sdp)!=null&&re.includes("a=rtpmap"))))try{const Ee={...U,sdp:w(U.sdp)};if(U.type===vs){if(p||a.signalingState!=="stable"&&!g){if(n)return;await Mi([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(Ee)])}else await a.setRemoteDescription(Ee);return await B(),await a.setLocalDescription(),await N()}if(U.type===qv){g=!0;try{await a.setRemoteDescription(Ee),await B()}finally{g=!1}}}catch(Ee){(be=o.error)==null||be.call(o,$n(Ee,"failed to apply remote signal"))}},sendData:U=>_==null?void 0:_.send(U),destroy:()=>{y(),_==null||_.close(),a.close(),p=!1,g=!1,b()},setHandlers:U=>{const{signal:V,...re}=U;Object.assign(o,re),o.data&&c.length>0&&c.splice(0).forEach(be=>{var Ee;return(Ee=o.data)==null?void 0:Ee.call(o,be)}),V&&x(V),(o.track||o.stream)&&d.length>0&&d.splice(0).forEach(({track:be,stream:Ee})=>{var $,Q;($=o.track)==null||$.call(o,be,Ee),(Q=o.stream)==null||Q.call(o,Ee)})},offerPromise:te,addStream:U=>U.getTracks().forEach(V=>a.addTrack(V,U)),removeStream:U=>a.getSenders().filter(V=>V.track&&U.getTracks().includes(V.track)).forEach(V=>a.removeTrack(V)),addTrack:(U,V)=>a.addTrack(U,V),removeTrack:U=>{const V=a.getSenders().find(re=>re.track===U);V&&a.removeTrack(V)},replaceTrack:(U,V)=>{const re=a.getSenders().find(be=>be.track===U);if(re)return re.replaceTrack(V)}}};const jv=[...Us(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n})),$v=Object.getPrototypeOf(Uint8Array),Ia=32,Kv=0,Da=32,Oc=34,Ua=35,wr=36,ci=16*2**10-wr,ys=255,Zv=65535,Bc="bufferedamountlow",zc="close",Gc="error",Jv=1e4,Qv=n=>n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength),ey=(n,e=Jv)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(t=>{let i=!1,s=null;const r=l=>{i||(i=!0,n.removeEventListener(Bc,a),n.removeEventListener(zc,o),n.removeEventListener(Gc,o),ot(s),t(l))},a=()=>r(!0),o=()=>r(!1);if(n.addEventListener(Bc,a),n.addEventListener(zc,o),n.addEventListener(Gc,o),s=setTimeout(()=>r(!1),e),n.readyState!=="open"){r(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&r(!0)}),ty=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:i})=>{const s={},r={},a={},o={},l=(f,d,{includePending:p=!1}={})=>(f?Array.isArray(f)?f:[f]:e(p)).flatMap(g=>{const _=n(g,p);return _?[Promise.resolve(d(g,_))]:(console.warn(`${dn}: no peer with id ${g} found`),[])});return{makeInternalAction:(f,d={})=>{const p=r[f];if(s[f]&&p){const y=s[f].options;if(y.sendToPending!==!!d.sendToPending||y.receiveWhilePending!==!!d.receiveWhilePending)throw nt(`action type "${f}" cannot be redefined`);return p}if(!f)throw nt("action type argument is required");const g=Jn(f);if(g.byteLength>Ia)throw nt(`action type string "${f}" (${g.byteLength}b) exceeds byte limit (${Ia}). Hint: choose a shorter name.`);const _={sendToPending:!!d.sendToPending,receiveWhilePending:!!d.receiveWhilePending},m=new Uint8Array(Ia);m.set(g);let u=0;return s[f]={onComplete:Ft,onProgress:Ft,setOnComplete:y=>{s[f].onComplete=y;const b=o[f];b!=null&&b.length&&(delete o[f],b.forEach(({payload:E,peerId:x,metadata:w})=>y(E,x,w)))},setOnProgress:y=>{s[f].onProgress=y},send:async(y,b,E,x,w)=>{i(w);const P=typeof y;if(P==="undefined")throw nt("action data cannot be undefined");const C=P!=="string",S=y instanceof Blob,T=S||y instanceof ArrayBuffer||y instanceof $v,I=E!==void 0,z=T?Qv(S?await y.arrayBuffer():y):Jn(C?jt(y):y),B=I?Jn(jt(E)):null,A=Math.ceil(z.byteLength/ci)+(I?1:0)||1,L=Us(A,(D,N)=>{const H=N===A-1,ee=!!(I&&N===0),te=new Uint8Array(wr+(ee?(B==null?void 0:B.byteLength)??0:H?z.byteLength-ci*(A-(I?2:1)):ci));return te.set(m),te.set([u>>8,u&ys],Da),te.set([Number(H)|Number(ee)<<1|Number(T)<<2|Number(C)<<3],Oc),te.set([Math.round((N+1)/A*ys)],Ua),te.set(I?ee?B??new Uint8Array:z.subarray((N-1)*ci,N*ci):z.subarray(N*ci,(N+1)*ci),wr),te});return u=u+1&Zv,await Mi(l(b,async(D,N)=>{const{channel:H}=N;let ee=0;for(;ee<A;){i(w);const te=L[ee];if(!te)break;if(H&&H.bufferedAmount>H.bufferedAmountLowThreshold){const re=await ey(H);if(i(w),!re)break}const U=n(D,_.sendToPending);if(!U||U!==N)break;N.sendData(te),ee++;const V=te[Ua]??ys;x==null||x(V/ys,D,E)}},{includePending:_.sendToPending})),[]},options:_},r[f]={send:s[f].send,onMessage:s[f].setOnComplete,onProgress:s[f].setOnProgress}},handleData:(f,d)=>{var I,z;const p=new Uint8Array(d),g=mi(p.subarray(Kv,Da)).replaceAll("\0",""),_=s[g];if(!t(f,!!(_!=null&&_.options.receiveWhilePending)))return;const m=(p[Da]??0)<<8|(p[33]??0),u=p[Oc]??0,y=p[Ua]??0,b=p.subarray(wr),E=!!(u&1),x=!!(u&2),w=!!(u&4),P=!!(u&8);a[f]??(a[f]={}),(I=a[f])[g]??(I[g]={});const C=(z=a[f][g])[m]??(z[m]={chunks:[]});if(x?C.meta=ns(mi(b)):C.chunks.push(b),_==null||_.onProgress(y/ys,f,C.meta),!E)return;const S=new Uint8Array(C.chunks.reduce((B,A)=>B+A.byteLength,0));C.chunks.reduce((B,A)=>(S.set(A,B),B+A.byteLength),0),delete a[f][g][m];const T=w?S:P?ns(mi(S)):mi(S);if(_){_.onComplete(T,f,C.meta);return}(o[g]??(o[g]=[])).push({payload:T,peerId:f,...C.meta===void 0?{}:{metadata:C.meta}})},clearPeer:f=>{delete a[f]}}},ny=500,Wi=(n,e)=>{const t=nt(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},Na=n=>{if(n!=null&&n.aborted)throw Wi("aborted","operation aborted")},Vc=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...Object.hasOwn(n,"m")?{m:n.m}:{}}:null,iy=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...typeof n.e=="string"?{e:n.e}:{}}:null,vr=(n,e)=>e===void 0?n:{...n,metadata:e},sy=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t})=>{const i={},s={},r=ty({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Na}),a=r.makeInternalAction,o=r.handleData,l=p=>{const g=s[p];g&&(ot(g.timer),g.signal&&g.abortHandler&&g.signal.removeEventListener("abort",g.abortHandler),delete s[p])},c=(p,g)=>{gi(s).forEach(([_,m])=>{m.peerId===p&&(l(_),m.reject(g))})},h=(p,g)=>{r.clearPeer(p),c(p,Wi("disconnected",ts(g,"peer disconnected")))},f=a("@_response");return f.onMessage((p,g,_)=>{const m=iy(_);if(!m)return;const u=s[m.r];if(!(!u||u.peerId!==g)){if(l(m.r),m.e!==void 0){u.reject(Wi("rejected",m.e));return}u.resolve(p)}}),{makeAction:(p,g)=>{if(g&&"onRequest"in g&&g.kind!=="request")throw nt('request actions must use kind: "request"');const _=(g==null?void 0:g.kind)??"message",m=a(p),u=i[p];if(u){if(u.kind!==_)throw nt(`action type "${p}" cannot be redefined`);return u.action}const y={kind:_,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:(g==null?void 0:g.onReceiveProgress)??null},b=(A,L)=>A?(D,N)=>A(D,vr({peerId:N},L)):void 0,E=A=>{y.onReceiveProgress=A},x=(A,L,D)=>{var H;const N=y.kind==="request"?Vc(D):null;(H=y.onReceiveProgress)==null||H.call(y,A,vr({peerId:L},N?N.m:D))};if(m.onProgress(x),_==="message"){let A=(g==null?void 0:g.onMessage)??null;const L=()=>{if(!A)return;const N=A;y.pendingMessages.splice(0).forEach(({payload:H,peerId:ee,metadata:te})=>{Promise.resolve().then(()=>N(H,vr({peerId:ee},te))).catch(U=>console.error(`${dn} action handler error:`,U))})},D={send:async(N,H={})=>{await m.send(N,H.target,H.metadata,b(H.onProgress,H.metadata),H.signal)},get onMessage(){return A},set onMessage(N){A=N,L()},get onReceiveProgress(){return y.onReceiveProgress},set onReceiveProgress(N){E(N)}};return m.onMessage((N,H,ee)=>{if(!A){y.pendingMessages.push(ee===void 0?{payload:N,peerId:H}:{payload:N,peerId:H,metadata:ee});return}const te=A;Promise.resolve().then(()=>te(N,vr({peerId:H},ee))).catch(U=>console.error(`${dn} action handler error:`,U))}),y.action=D,i[p]=y,L(),D}let w=(g==null?void 0:g.onRequest)??null;const P=A=>{ot(A.timer);const L=y.pendingRequests.indexOf(A);L>-1&&y.pendingRequests.splice(L,1)},C=(A,L,D)=>{f.send(null,A,{r:L,e:ts(D,"request failed")})},S=(A,L)=>{P(A),Promise.resolve().then(()=>L(A.payload,{peerId:A.peerId,...A.metadata===void 0?{}:{metadata:A.metadata},signal:A.controller.signal})).then(async D=>{if(D===void 0)throw nt("request handler returned undefined");await f.send(D,A.peerId,{r:A.requestId})}).catch(D=>C(A.peerId,A.requestId,D)).finally(()=>A.controller.abort())},T=()=>{w&&y.pendingRequests.slice().forEach(A=>S(A,w))},I=(A,L,D,N)=>{if(w){const ee={payload:A,peerId:L,...D===void 0?{}:{metadata:D},requestId:N,controller:new AbortController,timer:null};S(ee,w);return}const H={payload:A,peerId:L,...D===void 0?{}:{metadata:D},requestId:N,controller:new AbortController,timer:setTimeout(()=>{P(H),H.controller.abort(),C(L,N,"request handler unavailable")},ny)};y.pendingRequests.push(H)},z=async(A,L)=>{const{target:D,metadata:N,onProgress:H,signal:ee,timeoutMs:te}=L;if(Na(ee),!n(D,!1))throw Wi("disconnected",`no active peer with id ${D}`);const U=as(20),V=new Promise((re,be)=>{const Ee={peerId:D,resolve:re,reject:be,timer:null,...ee===void 0?{}:{signal:ee}},$=()=>{l(U),be(Wi("aborted","operation aborted"))};ee&&(Ee.abortHandler=$,ee.addEventListener("abort",$,{once:!0})),s[U]=Ee}).catch(re=>{throw re});try{await m.send(A,D,N===void 0?{r:U}:{r:U,m:N},b(H,N),ee);const re=s[U];return re&&te!==void 0&&(re.timer=setTimeout(()=>{l(U),re.reject(Wi("timeout","request timed out"))},te)),await V}catch(re){throw l(U),re}},B={request:z,requestMany:async(A,L)=>(Na(L.signal),await Mi(L.targets.map(async D=>{var N,H;try{const ee={peerId:D,status:"fulfilled",value:await z(A,{target:D,...L.metadata===void 0?{}:{metadata:L.metadata},...L.timeoutMs===void 0?{}:{timeoutMs:L.timeoutMs},...L.onProgress===void 0?{}:{onProgress:L.onProgress},...L.signal===void 0?{}:{signal:L.signal}})};return(N=L.onResult)==null||N.call(L,ee),ee}catch(ee){const te=$n(ee,"request failed");if(te.kind==="aborted"||!te.kind)throw te;const U=te.kind==="timeout"?{peerId:D,status:"timeout"}:te.kind==="disconnected"?{peerId:D,status:"disconnected"}:{peerId:D,status:"rejected",error:te};return(H=L.onResult)==null||H.call(L,U),U}}))),get onRequest(){return w},set onRequest(A){w=A,T()},get onReceiveProgress(){return y.onReceiveProgress},set onReceiveProgress(A){E(A)}};return m.onMessage((A,L,D)=>{const N=Vc(D);N&&I(A,L,N.m,N.r)}),y.action=B,i[p]=y,T(),B},makeInternalAction:a,handleData:o,clearPeer:h}},Hc=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,Wc=n=>e=>{let t=n.get(e);return t||(t=as(20),n.set(e,t)),t},ph=()=>{const n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,s=new Map,r=new Map;return{getStreamKey:Wc(n),getTrackKey:Wc(e),rememberRemoteStream:(a,o,l)=>{t.set(a,o),l&&i.set(l,o)},getRemoteStream:(a,o)=>t.get(a)??(o?i.get(o):void 0),rememberRemoteTrack:(a,o,l,c,h)=>{const f={track:o,stream:l};s.set(a,f),c&&r.set(c,f),h&&i.set(h,l)},getRemoteTrack:(a,o)=>s.get(a)??(o?r.get(o):void 0),clearRemote:()=>{t.clear(),i.clear(),s.clear(),r.clear()}}},ry=({iterate:n,isActive:e,getSharedMediaPeer:t})=>{const i={},s={},r=ph(),a={onPeerStream:null,onPeerTrack:null},o=(h,f,d,p)=>{var g,_,m;e(h)&&((_=(g=t(h))==null?void 0:g.__trysteroMedia)==null||_.rememberRemoteStream(f,d,typeof d.id=="string"?d.id:void 0),(m=a.onPeerStream)==null||m.call(a,d,h,p))},l=(h,f,d,p,g)=>{var _,m,u;e(h)&&((m=(_=t(h))==null?void 0:_.__trysteroMedia)==null||m.rememberRemoteTrack(f,d,p,typeof d.id=="string"?d.id:void 0,typeof p.id=="string"?p.id:void 0),(u=a.onPeerTrack)==null||u.call(a,d,p,h,g))},c=(h,f,d,p,g,_={})=>{const m={k:f,..._,...d===void 0?{}:{m:d}};return n(h,async(u,y)=>{await p(m,u),g(y)})};return{addStream:(h,f,d)=>c(f.target,r.getStreamKey(h),f.metadata,d,p=>p.addStream(h),{s:h.id}),removeStream:(h,f)=>{n(f,(d,p)=>p.removeStream(h))},addTrack:(h,f,d,p)=>c(d.target,r.getTrackKey(h),d.metadata,p,g=>g.addTrack(h,f),{s:f.id,t:h.id}),removeTrack:(h,f)=>{n(f,(d,p)=>p.removeTrack(h))},replaceTrack:(h,f,d,p)=>c(d.target,r.getTrackKey(f),d.metadata,p,g=>g.replaceTrack(h,f),{t:h.id}),receiveStreamMeta:(h,f)=>{var g,_;if(!e(f))return;const d=Hc(h);if(!d)return;const p=(_=(g=t(f))==null?void 0:g.__trysteroMedia)==null?void 0:_.getRemoteStream(d.key,d.streamId);if(p){o(f,d.key,p,d.metadata);return}(i[f]??(i[f]=[])).push(d)},receiveTrackMeta:(h,f)=>{var g,_;if(!e(f))return;const d=Hc(h);if(!d)return;const p=(_=(g=t(f))==null?void 0:g.__trysteroMedia)==null?void 0:_.getRemoteTrack(d.key,d.trackId);if(p){l(f,d.key,p.track,p.stream,d.metadata);return}(s[f]??(s[f]=[])).push(d)},receiveRemoteStream:(h,f)=>{var p;if(!e(h))return;const d=(p=i[h])==null?void 0:p.shift();d&&o(h,d.key,f,d.metadata)},receiveRemoteTrack:(h,f,d)=>{var g;if(!e(h))return;const p=(g=s[h])==null?void 0:g.shift();p&&l(h,p.key,f,d,p.metadata)},clearPeer:h=>{delete i[h],delete s[h]},get onPeerStream(){return a.onPeerStream},set onPeerStream(h){a.onPeerStream=h},get onPeerTrack(){return a.onPeerTrack},set onPeerTrack(h){a.onPeerTrack=h}}},Xc="beforeunload",ay=1e4,qn=n=>"@_"+n,bs=new Set,qc=()=>bs.forEach(n=>n()),oy=n=>(bs.add(n),bs.size===1&&addEventListener(Xc,qc),()=>{bs.delete(n),bs.size||removeEventListener(Xc,qc)});var ly=(n,e,t,{onPeerHandshake:i,onHandshakeError:s,handshakeTimeoutMs:r=ay,isPassive:a=!1}={})=>{const o={},l={},c={},h={onPeerJoin:null,onPeerLeave:null};let f=Ft,d=null;const p=(A,L,{includePending:D=!1}={})=>(A?Array.isArray(A)?A:[A]:Qt(D?o:l)).flatMap(N=>{const H=D?o[N]:l[N];return H?[Promise.resolve(L(N,H))]:(console.warn(`${dn}: no peer with id ${N} found`),[])}),g=ry({iterate:(A,L)=>p(A,(D,N)=>L(D,N)),isActive:A=>!!l[A],getSharedMediaPeer:A=>o[A]??null}),_=sy({getPeer:(A,L)=>(L?o:l)[A],getPeerIds:A=>Qt(A?o:l),canReceiveFromPeer:(A,L)=>!!(d!=null&&d.canReceiveFromPeer(A,L))}),m=_.makeInternalAction,u=_.handleData,y=_.makeAction,b=(A,L=nt("peer disconnected"))=>{var N;const D=$n(L,"peer disconnected");d==null||d.clearPeer(A,D),delete o[A],delete l[A],_.clearPeer(A,D),(N=c[A])==null||N.splice(0).forEach(H=>H.reject(D)),delete c[A],g.clearPeer(A)},E=(A,L,D)=>{var ee;const N=o[A];if(!N||L&&N!==L)return;const H=!!l[A];b(A,D),N.destroy(),H&&((ee=h.onPeerLeave)==null||ee.call(h,A)),e(A)},x=async()=>{await I.send(""),await new Promise(A=>setTimeout(A,99)),gi(o).forEach(([A,L])=>{L.destroy(),b(A,nt("room left"))}),f(),t()},w=m(qn("ping")),P=m(qn("pong")),C=m(qn("signal")),S=m(qn("stream")),T=m(qn("track")),I=m(qn("leave"),{sendToPending:!0,receiveWhilePending:!0}),z=m(qn("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),B=m(qn("hsready"),{sendToPending:!0,receiveWhilePending:!0});return d=Vv({...i===void 0?{}:{onPeerHandshake:i},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:z.send,sendHandshakeReady:B.send,onActivate:(A,L)=>{var D;l[A]=L,(D=h.onPeerJoin)==null||D.call(h,A)},onFailure:(A,L,D)=>E(A,L,D)}),w.onMessage((A,L)=>P.send("",L)),P.onMessage((A,L)=>{var N;const D=c[L];(N=D==null?void 0:D.shift())==null||N.resolve(),D&&!D.length&&delete c[L]}),C.onMessage((A,L)=>{var D;l[L]&&((D=o[L])==null||D.signal(A))}),S.onMessage((A,L)=>g.receiveStreamMeta(A,L)),T.onMessage((A,L)=>g.receiveTrackMeta(A,L)),I.onMessage((A,L)=>E(L,void 0,nt("peer left room"))),z.onMessage((A,L,D)=>d==null?void 0:d.receiveHandshakeData(A,L,D)),B.onMessage((A,L)=>d==null?void 0:d.receiveHandshakeReady(L)),n((A,L)=>{const D=o[L];if(D){if(D===A)return;D.destroy(),b(L,nt("peer replaced"))}o[L]=A,d==null||d.addPeer(L,A),A.setHandlers({data:N=>u(L,N),stream:N=>g.receiveRemoteStream(L,N),track:(N,H)=>g.receiveRemoteTrack(L,N,H),signal:N=>{l[L]&&C.send(N,L)},close:()=>E(L,A,nt("peer disconnected")),error:N=>{console.error(`${dn} peer error:`,N),E(L,A,N)}}),d==null||d.start(L,A)}),lh&&(f=oy(()=>x().catch(Ft))),{makeAction:y,leave:x,ping:async A=>{if(!l[A])throw nt(`no active peer with id ${A}`);const L=Date.now();return await new Promise((D,N)=>{const H=c[A]??(c[A]=[]),ee=()=>{const U=c[A];if(!U)return;const V=U.indexOf(te);V>-1&&U.splice(V,1),U.length||delete c[A]},te={resolve:()=>{ee(),D()},reject:U=>{ee(),N(U)}};H.push(te),w.send("",A).catch(U=>te.reject($n(U,"peer disconnected")))}),Date.now()-L},isPassive:()=>a,getPeers:()=>ch(gi(l).map(([A,L])=>[A,L.connection])),addStream:(A,L={})=>g.addStream(A,L,S.send),removeStream:(A,L={})=>{g.removeStream(A,L.target)},addTrack:(A,L,D={})=>g.addTrack(A,L,D,T.send),removeTrack:(A,L={})=>{g.removeTrack(A,L.target)},replaceTrack:(A,L,D={})=>g.replaceTrack(A,L,D,T.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(A){h.onPeerJoin=A,A&&Qt(l).forEach(L=>A(L))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(A){h.onPeerLeave=A},get onPeerStream(){return g.onPeerStream},set onPeerStream(A){g.onPeerStream=A},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(A){g.onPeerTrack=A}}};const mh=1,gh=2,Yc=(n,e)=>{const t=Jn(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=mh,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},cy=(n,e)=>{const t=Jn(n),i=new Uint8Array(4+t.byteLength);return i[0]=gh,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},fy=n=>{const e=new Uint8Array(n);if(e.byteLength<3)return null;if(e[0]===mh){const s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:mi(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==gh||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),i=4+t;return t<=0||e.byteLength<i?null:{type:"presence",roomToken:mi(e.subarray(4,i)),isPresent:e[1]===1}},_h=n=>{const{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||(t==null?void 0:t.readyState)==="closing"||(t==null?void 0:t.readyState)==="closed"},hy=n=>{if(_h(n))return"stale";const{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"};var dy=class{constructor(){Dt(this,"byApp",{});Dt(this,"roomPresenceHandlers",{})}getMap(n){var e;return(e=this.byApp)[n]??(e[n]={})}get(n,e){var t;return(t=this.byApp[n])==null?void 0:t[e]}isPeerStale(n){return _h(n)}getHealth(n){return this.isPeerStale(n)?"stale":"live"}setRoomPresenceHandler(n,e){return this.roomPresenceHandlers[n]=e,()=>{this.roomPresenceHandlers[n]===e&&delete this.roomPresenceHandlers[n]}}sendRoomPresence(n,e,t){n.isClosing||n.peer.isDead||n.peer.sendData(cy(e,t))}clear(n,e,{destroyPeer:t}){const i=this.byApp[n],s=i==null?void 0:i[e];if(!s||s.isClosing)return;s.idleTimer=ot(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();const r=Yi(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete i[e],r.forEach(a=>{var o,l;(l=(o=a.handlers).close)==null||l.call(o),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),Qt(i).length===0&&delete this.byApp[n]}register(n,e,t,i){const s=this.getMap(n),r=s[e];if(r){if(r.idleTimer=ot(r.idleTimer),r.peer===t)return r;this.clear(n,e,{destroyPeer:!0})}const a={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:ph(),idleMs:i,isClosing:!1};return t.setHandlers({data:o=>this.dispatchData(a,o),signal:o=>this.dispatchSignal(a,o),close:()=>this.clear(n,e,{destroyPeer:!1}),error:o=>{console.error(`${dn} peer error:`,o),this.clear(n,e,{destroyPeer:!1})},track:(o,l)=>this.dispatchTrack(a,o,l)}),s[e]=a,a}bind(n,e,t,{onDetach:i}){const s=t.bindings[n];if(s)return t.idleTimer=ot(t.idleTimer),{proxy:s.proxy,isNew:!1};const r={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Ft,proxy:{}},a=()=>{t.bindings[n]&&(this.pruneRoomOwnership(t,n),delete t.bindings[n],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===n&&(t.controlRoomId=Qt(t.bindings)[0]??null),i(),this.scheduleIdleTimer(t))},o={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:l=>t.peer.getOffer(l),signal:l=>t.peer.signal(l),sendData:l=>{if(!r.roomToken){r.pendingSendData.push(l);return}t.peer.sendData(Yc(r.roomToken,l))},destroy:()=>a(),setHandlers:l=>{const{signal:c,...h}=l;Object.assign(r.handlers,h),c&&(r.handlers.signal=c),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:l=>{const c=t.streamOwners.get(l)??new Set,h=c.size===0;c.add(n),t.streamOwners.set(l,c),h&&t.peer.addStream(l)},removeStream:l=>{const c=t.streamOwners.get(l);c&&(c.delete(n),c.size===0&&(t.streamOwners.delete(l),t.peer.removeStream(l)))},addTrack:(l,c)=>{const h=t.trackOwners.get(l)??{stream:c,rooms:new Set},f=h.rooms.size===0;return h.stream=c,h.rooms.add(n),t.trackOwners.set(l,h),f?t.peer.addTrack(l,c):t.peer.connection.getSenders().find(d=>d.track===l)??t.peer.addTrack(l,c)},removeTrack:l=>{const c=t.trackOwners.get(l);c&&(c.rooms.delete(n),c.rooms.size===0&&(t.trackOwners.delete(l),t.peer.removeTrack(l)))},replaceTrack:(l,c)=>{const h=t.trackOwners.get(l);if(h){t.trackOwners.delete(l);const f=t.trackOwners.get(c)??{stream:h.stream,rooms:new Set};h.rooms.forEach(d=>f.rooms.add(d)),t.trackOwners.set(c,f)}return t.peer.replaceTrack(l,c)},__trysteroMedia:t.media};return r.proxy=o,r.detach=a,t.bindings[n]=r,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=ot(t.idleTimer),e.then(l=>{if(t.isClosing||t.bindings[n]!==r)return;r.roomToken=l,t.bindingsByToken[l]=r;const c=t.pendingDataByToken.get(l);c!=null&&c.length&&(r.pendingData.push(...c),t.pendingDataByToken.delete(l)),r.pendingSendData.splice(0).forEach(h=>t.peer.sendData(Yc(l,h))),this.flushBindingQueues(r)}),{proxy:o,isNew:!0}}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>{t.delete(e),t.size===0&&(n.streamOwners.delete(i),n.peer.removeStream(i))}),n.trackOwners.forEach((t,i)=>{t.rooms.delete(e),t.rooms.size===0&&(n.trackOwners.delete(i),n.peer.removeTrack(i))})}scheduleIdleTimer(n){n.isClosing||Qt(n.bindings).length>0||(n.idleTimer=ot(n.idleTimer),n.idleTimer=setTimeout(()=>{var t;const e=(t=this.byApp[n.appId])==null?void 0:t[n.peerId];!e||Qt(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){const t=n.bindings[n.controlRoomId];if(t!=null&&t.handlers.signal)return t}const e=Yi(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n){const{handlers:e}=n;e.data&&n.pendingData.length>0&&n.pendingData.splice(0).forEach(t=>{var i;return(i=e.data)==null?void 0:i.call(e,t)}),(e.track||e.stream)&&n.pendingTracks.length&&n.pendingTracks.splice(0).forEach(({track:t,stream:i})=>{var s,r;(s=e.track)==null||s.call(e,t,i),(r=e.stream)==null||r.call(e,i)})}dispatchData(n,e){var s,r;const t=fy(e);if(!t)return;if(t.type==="presence"){t.isPresent?n.remoteRoomTokens.add(t.roomToken):n.remoteRoomTokens.delete(t.roomToken),(r=(s=this.roomPresenceHandlers)[n.appId])==null||r.call(s,n.peerId,t.roomToken,t.isPresent);return}const i=n.bindingsByToken[t.roomToken];if(!i){const a=n.pendingDataByToken.get(t.roomToken)??[];a.push(t.payload),n.pendingDataByToken.set(t.roomToken,a);return}i.handlers.data?i.handlers.data(t.payload):i.pendingData.push(t.payload)}dispatchSignal(n,e){var t,i,s;(s=(t=this.getSignalBinding(n))==null?void 0:(i=t.handlers).signal)==null||s.call(i,e)}dispatchTrack(n,e,t){Yi(n.bindings).forEach(i=>{var s,r,a,o;if(i.handlers.track||i.handlers.stream){(r=(s=i.handlers).track)==null||r.call(s,e,t),(o=(a=i.handlers).stream)==null||o.call(a,t);return}i.pendingTracks.push({track:e,stream:t})})}};const uy=23333,py=12,my=7533,gy=23333,Ho="__legacy__",Ur="offer-placeholder",_y=["offer","answer","candidate"],vy=n=>{if(typeof n=="string")try{const e=ns(n);return e&&typeof e=="object"?e:null}catch{return null}return n&&typeof n=="object"?n:null},Ss=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,yy=n=>_y.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),vh=(n,e,t,i,s,r)=>{n.toCipher(e).then(a=>{n.isLeaving()||!r()||i(t,jt(s(a.sdp)))})},Sy=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),xy=n=>{var e;return[...n.turnConfig??[],...((e=n.rtcConfig)==null?void 0:e.iceServers)??[]].some(({urls:t})=>(Array.isArray(t)?t:[t]).some(i=>/^turns?:/i.test(i)))},My=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${xy(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Wr=(n,e,t)=>{var i;n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,(i=n.onJoinError)==null||i.call(n,{error:My(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},Os=(n,e)=>n[e]??(n[e]=Sy()),en=n=>{n.connectedPeer?n.status="connected":n.answeringPeer?n.status="answering":n.offerPeer||n.offerRelays.some(Boolean)?n.status="offering":n.status="idle"},Ar=(n,e)=>{n.answeringPeer===e&&(n.answeringExpiryTimer=ot(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,en(n))},Wo=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,en(n))},pl=(n,e)=>{n.offerRelayTimers[e]=ot(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0,en(n))},jc=(n,e)=>{(n==null?void 0:n.offerRelays[e])===Ur&&pl(n,e)},by=n=>{if(n.isDead||n.connection.connectionState==="closed")return!0;try{return!!n.connection.remoteDescription}catch{return!0}},Bs=(n,e)=>{const t=n.offerAnswered;n.offerExpiryTimer=ot(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((i,s)=>pl(n,s)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(t||by(n.offerPeer)?n.offerPeer.isDead||n.offerPeer.destroy():e.recycle(n.offerPeer)),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1,en(n)},Ey=(n,e,t,i)=>{ot(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const s=n.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==i||(s.answerSent&&Wr(n,s,t),i.destroy(),Ar(s,i),n.checkDeactivate())},gy)},Ty=async(n,e,t)=>{const i=t?[t,Ho]:[Ho];for(const s of i){const r=n.pendingCandidates[s];if(r!=null&&r.length){delete n.pendingCandidates[s];for(const a of r)await e.signal(a)}}},yh=(n,e,t,i=ul)=>{ot(e.offerExpiryTimer);const s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const r=n.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&Wr(n,r,t),Bs(r,n.offerPool),n.checkDeactivate())},i)},wy=(n,e,t,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const s=(await n.offerPool.checkout(1,!1,n.encryptOffer))[0];if(!s)throw nt("failed to allocate offer peer");const{peer:r,offer:a}=s;e.offerPeer=r,e.offerId=as(py),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],en(e);const o=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&Wr(n,e,t),Bs(e,n.offerPool)),n.disconnectPeer(r,t),n.checkDeactivate()};return r.setHandlers({connect:()=>n.connectPeer(r,t,i),signal:l=>{e.offerPeer===r&&(e.offerSignalBacklog.push(l),e.offerSignalRelays.forEach(c=>c==null?void 0:c(l)))},close:o,error:o}),yh(n,e,t),{peer:r,offer:a,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),Ay=async(n,e,t,i,s)=>{if(i){n.attachSharedPeerToRoom(t,i);return}const r=n.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){jc(r,e);return}if(r.offerRelays[e]!==Ur)return;const[a,o]=await Mi([ks(Fs(n.rootTopicPlaintext,t)),wy(n,r,t,e)]);if(n.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==Ur){jc(r,e);return}r.offerRelayTimers[e]=ot(r.offerRelayTimers[e]),r.offerRelays[e]=!0,en(r),r.offerRelayTimers[e]=setTimeout(()=>Ly(n,t,e),(n.announceIntervals[e]??n.announceIntervalMs)*.9);let l=!1;r.offerSignalRelays[e]=c=>{l&&(n.isLeaving()||r.connectedPeer||r.offerPeer!==o.peer||r.offerId!==o.offerId||c.type!=="candidate"||vh(n,c,a,s,h=>({peerId:hn,offerId:o.offerId,candidate:h,...n.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===o.peer&&r.offerId===o.offerId))},s(a,jt({peerId:hn,offerId:o.offerId,offer:o.offer,...n.isPassive?{passive:!0}:{}})),l=!0,r.offerSignalBacklog.forEach(c=>{var h,f;return(f=(h=r.offerSignalRelays)[e])==null?void 0:f.call(h,c)})},Ry=async(n,e,t,i,s,r,a)=>{var p;const o=Os(n.peerStates,t);if(o.answeringPeer||o.offerAnswered)return;const l=!!(o.offerPeer||o.offerRelays.some(Boolean));if((l||r)&&hn<t)return;l&&Bs(o,n.offerPool);const c=n.initPeer(!1,n.config);o.answeringPeer=c,o.answerSent=!1,o.connectionErrorReported=!1,Ey(n,o,t,c),en(o);const h=()=>{o.answeringPeer===c&&!o.connectedPeer&&o.answerSent&&Wr(n,o,t),Ar(o,c),n.disconnectPeer(c,t),n.checkDeactivate()};c.setHandlers({connect:()=>n.connectPeer(c,t,e),close:h,error:h});let f;try{f=await n.toPlain({type:"offer",sdp:i})}catch{Ar(o,c),(p=n.onJoinError)==null||p.call(n,{error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(c.isDead){Ar(o,c);return}const d=await ks(Fs(n.rootTopicPlaintext,t));n.isLeaving()||(c.setHandlers({signal:g=>{n.isLeaving()||o.answeringPeer!==c||c.isDead||g.type!=="answer"&&g.type!=="candidate"||vh(n,g,d,a,_=>{const m={peerId:hn};return g.type==="answer"?(o.answerSent=!0,m.answer=_):m.candidate=_,s&&(m.offerId=s),n.isPassive&&(m.passive=!0),m},()=>o.answeringPeer===c&&!c.isDead)}}),await c.signal(f),await Ty(o,c,s))},Py=async(n,e,t,i,s)=>{var f;let r;try{r=await n.toPlain({type:fh,sdp:t})}catch{return}const a=Os(n.peerStates,e),o=i&&(a!=null&&a.offerPeer)&&a.offerId===i?a.offerPeer:null,l=(a==null?void 0:a.answeringPeer)??null,c=!i&&(a!=null&&a.offerPeer)?a.offerPeer:null,h=s&&!s.isDead?s:o??l??c;if(!h||h.isDead){const d=i??Ho;((f=a.pendingCandidates)[d]??(f[d]=[])).push(r);return}h.signal(r)},Cy=async(n,e,t,i,s,r)=>{var o;let a;try{a=await n.toPlain({type:"answer",sdp:i})}catch{(o=n.onJoinError)==null||o.call(n,{error:"incorrect room password when decrypting answer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(r)n.offerPool.claimLeased(r),r.setHandlers({connect:()=>n.connectPeer(r,t,e),close:()=>n.disconnectPeer(r,t)}),r.signal(a);else{const l=n.peerStates[t];if(!l||!l.offerPeer||l.offerAnswered||s&&l.offerId&&s!==l.offerId||l.offerPeer.isDead)return;l.offerAnswered=!0,yh(n,l,t,uy),l.offerPeer.signal(a)}},Ly=(n,e,t)=>{const i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(pl(i,t),n.checkDeactivate())},Iy=n=>e=>async(t,i,s)=>{var E;if(n.isLeaving())return;const r=vy(i);if(!r||yy(r))return;const a=Ss(r,"peerId")??"",o=Ss(r,"offer"),l=Ss(r,"answer"),c=Ss(r,"candidate"),h=Ss(r,"offerId"),f=r.peer,d=r.hasOutgoingOffer===!0,p=r.passive===!0;if(!a||a===hn)return;const[g,_]=await Mi([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==g&&t!==_||n.isPassive&&p||(n.isPassive&&!n.isActive&&!l&&!c&&(n.isActive=!0,(E=n.requeueAnnounce)==null||E.call(n)),n.isPassive&&!n.isActive))return;const m=n.peerStates[a],u=m==null?void 0:m.connectedPeer;if(u&&m){const x=hy(u);if(x==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(x==="stale")Wo(m);else{const w=Date.now(),P=m.connectedPeerUnhealthySinceMs??w;if(m.connectedPeerUnhealthySinceMs=P,w-P<my)return;Wo(m)}}let y=n.sharedPeers.get(n.appId,a);y&&n.sharedPeers.getHealth(y.peer)==="stale"&&(n.sharedPeers.clear(n.appId,a,{destroyPeer:!0}),y=void 0);const b=!!(a&&!o&&!l&&!c);if(b&&!y){const x=Os(n.peerStates,a),w=hn<a;if(x.answeringPeer||x.connectedPeer||x.offerAnswered)return;if(!w&&!x.offerPeer){const P=await ks(Fs(n.rootTopicPlaintext,a));!n.isLeaving()&&!x.connectedPeer&&s(P,jt({peerId:hn}));return}if(x.offerRelays[e])return;x.offerRelays[e]=Ur,en(x)}if(y&&(o||l||c)){if(y.bindings[n.roomId])return;n.attachSharedPeerToRoom(a,y);return}if(b)return Ay(n,e,a,y,s);if(o)return Ry(n,e,a,o,h,d,s);if(c)return Py(n,a,c,h,f);if(l)return Cy(n,e,a,l,h,f)},yr=5333,Dy=[233,533,1333],Uy=7533,Ny=123333;var Fy=({init:n,subscribe:e,announce:t,deactivate:i})=>{const s={},r={},a={},o={},l=new dy,c=()=>Yi(s).some(x=>Qt(x).length>0),h=x=>r[x]??(r[x]={}),f=x=>a[x]??(a[x]={}),d=(x,w,P)=>{l.getHealth(x.peer)==="live"&&l.sendRoomPresence(x,w,P)},p=(x,w)=>{gi(r[x]??{}).forEach(([P,C])=>{if(!C.shouldAdvertise())return;const{roomToken:S,roomTokenPromise:T}=C;if(S){d(w,S,!0);return}T.then(I=>{var z;((z=r[x])==null?void 0:z[P])===C&&C.roomToken===I&&(l.get(x,w.peerId)!==w||w.isClosing||C.shouldAdvertise()&&d(w,I,!0))})})},g=(x,w,P)=>Yi(l.getMap(x)).forEach(C=>d(C,w,P)),_=x=>{o[x]||(o[x]=l.setRoomPresenceHandler(x,(w,P,C)=>{var I,z,B;if(!C)return;const S=l.get(x,w),T=(I=a[x])==null?void 0:I[P];!S||!T||(B=(z=r[x])==null?void 0:z[T])==null||B.attachSharedPeerToRoom(w,S)}))},m=x=>{var w;s[x]&&Qt(s[x]).length>0||((w=o[x])==null||w.call(o),delete o[x],delete r[x],delete a[x])};let u=!1,y=[],b=null,E=Ft;return(x,w,P)=>{var Me,he;if(!x)throw nt("requires a config map as the first argument");if(P&&typeof P!="object")throw nt("third argument must be a callbacks object");const{appId:C}=x,S=P==null?void 0:P.onJoinError,T=P==null?void 0:P.onPeerHandshake,I=P==null?void 0:P.handshakeTimeoutMs;if(!C)throw nt("config map is missing appId field");if(!w)throw nt("roomId argument required");if(I!==void 0&&(!Number.isFinite(I)||I<=0))throw nt("handshakeTimeoutMs must be a positive number");if((Me=s[C])!=null&&Me[w])return s[C][w];_(C);const z=Fs(dn,C,w),B=ks(z),A=ks(Fs(z,hn)),L=Dv(x.password??"",C,w),D=Uv(C,w),N=x._test_only_sharedPeerIdleMs??Ny;let H=!1;const ee=ne=>async ce=>({type:ce.type,sdp:await ne(L,ce.sdp)}),te=ee(Fv),U=ee(Nv),V=l.getMap(C),re=()=>kc(!0,x);let be=!1;b||(b=new Bv(re));const Ee=b,$=async ne=>{const ce=await ne.getOffer(Date.now()-ne.created>ul);if(!ce||ce.type!=="offer")throw nt("failed to get offer for peer");return(await U(ce)).sdp},Q=(ne,ce)=>{const Z=Os(Ce.peerStates,ne);Z.answeringExpiryTimer=ot(Z.answeringExpiryTimer),Z.answeringPeer=null;const{proxy:ae,isNew:ie}=l.bind(w,D,ce,{onDetach:()=>{const ue=Ce.peerStates[ne];(ue==null?void 0:ue.connectedPeer)===ce.peer&&(ue.connectedPeer=null,ue.connectedPeerUnhealthySinceMs=null,en(ue))}});Z.connectedPeer=ce.peer,Z.connectedPeerUnhealthySinceMs=null,en(Z),ie&&R(ae,ne),Bs(Z,Ee)},me=(ne,ce,Z)=>{if(H){ne.destroy();return}const ae=Os(Ce.peerStates,ce);if(ae.connectedPeer){const le=V[ce];if(le&&ae.connectedPeer===le.peer&&le.bindings[w])return;ae.connectedPeer!==ne&&!ne.isDead&&ne.destroy();return}let ie=V[ce];if(ie&&l.getHealth(ie.peer)==="stale"&&(l.clear(C,ce,{destroyPeer:!0}),ie=void 0),ie&&ie.peer!==ne){ne.isDead||ne.destroy(),Q(ce,ie);return}const ue=!ie;ie||(ie=l.register(C,ce,ne,N)),Q(ce,ie),ue&&p(C,ie)},Ue=(ne,ce)=>{var ae;if(H)return;const Z=Ce.peerStates[ce];(Z==null?void 0:Z.connectedPeer)===ne&&(Wo(Z),Xe(),!de&&be&&((ae=Ce.requeueAnnounce)==null||ae.call(Ce)))},de=!!x.passive;let De=null,Je,Ne=Ft;const Xe=()=>{if(!de||!Ce.isActive)return;let ne=!1;gi(Ce.peerStates).forEach(([ce,Z])=>{Z.connectedPeer||Z.answeringPeer||Z.offerInitPromise||Z.offerPeer||Z.offerRelays.some(Boolean)?ne=!0:Z.status==="idle"&&delete Ce.peerStates[ce]}),ne||(Ce.isActive=!1,Je=ot(Je),je.forEach(ot),je.length=0,Ne(),De!=null&&De.roomToken&&g(C,De.roomToken,!1))},Ce={appId:C,roomId:w,config:x,peerStates:{},rootTopicPlaintext:z,rootTopicP:B,selfTopicP:A,toPlain:te,toCipher:U,isLeaving:()=>H,isPassive:de,isActive:!de,onJoinError:S,sharedPeers:l,offerPool:Ee,encryptOffer:$,initPeer:kc,connectPeer:me,disconnectPeer:Ue,attachSharedPeerToRoom:Q,checkDeactivate:Xe,announceIntervals:[],announceIntervalMs:yr},ke={config:x,appId:C,roomId:w,isPassive:de},tt=Iy(Ce);if(!u){const ne=n(x);y=(Array.isArray(ne)?ne:[ne]).map(ce=>Promise.resolve(ce)),u=!0,E=(he=x.relayConfig)!=null&&he.manualReconnection?Ft:Cv()}!de&&!Ee.isActive&&Ee.warmup(),Ce.announceIntervals=y.map(()=>yr);const F=y.map(()=>yr),dt=y.map(()=>0),Ye=y.map(()=>0),je=[],we=y.map(async(ne,ce)=>e(await ne,await B,await A,tt(ce),Z=>Ee.getOffers(Z,$),ke));Mi([B,A]).then(([ne,ce])=>{if(H)return;const Z=async(ae,ie)=>{var fe;if(H||de&&!Ce.isActive)return;const ue=de?{passive:!0}:void 0;let le;try{le=await t(ae,ne,ce,ue,ke),Ye[ie]=0}catch(xe){const oe=Ye[ie]??0;oe===0&&((fe=x.relayConfig)==null?void 0:fe.warnOnRelayFailure)!==!1&&console.warn(`${dn}: announce failed - ${ts(xe,"")}`),Ye[ie]=oe+1}if(H||de&&!Ce.isActive||le&&typeof le!="number"&&"stopAnnouncing"in le)return;typeof le=="number"?(Ce.announceIntervals[ie]=le,F[ie]=le):le&&(F[ie]=le.nextAnnounceMs,be||(be=le.reannounceOnDisconnect===!0));const ze=dt[ie]??0;dt[ie]=ze+1;const k=F[ie]??yr,_e=Dy[ze];je[ie]=setTimeout(()=>{Z(ae,ie)},typeof _e=="number"?Math.min(k,_e):k)};Ne=()=>{i&&y.forEach(async ae=>{const ie=await ae;H||i(ie,ne,ce,ke)})},Ce.requeueAnnounce=()=>{je.forEach(ot),je.length=0,Je=ot(Je),Ee.isActive||Ee.warmup(),De!=null&&De.roomToken&&g(C,De.roomToken,!0),Je=setTimeout(Xe,Uy),y.forEach(async(ae,ie)=>{const ue=await ae;ue&&!H&&(dt[ie]=0,Z(ue,ie))})},we.forEach(async(ae,ie)=>{if(await ae,H)return;const ue=await y[ie];ue&&!H&&(!de||Ce.isActive)&&Z(ue,ie)})});let R=Ft;const{compose:v}=zv(x.password??"",C,w),O=v(T),J={...O?{onPeerHandshake:O}:{},...I===void 0?{}:{handshakeTimeoutMs:I},isPassive:de,onHandshakeError:(ne,ce)=>S==null?void 0:S({error:ce.replace(/^handshake failed: /,""),appId:C,peerId:ne,roomId:w})};s[C]??(s[C]={});const K=h(C),j=ly(ne=>R=ne,ne=>{if(H)return;const ce=Ce.peerStates[ne];ce!=null&&ce.connectedPeer&&(ce.connectedPeer=null,en(ce),Xe())},()=>{var ce,Z;H=!0,R=Ft;const ne=(ce=r[C])==null?void 0:ce[w];ne!=null&&ne.roomToken&&(g(C,ne.roomToken,!1),(Z=a[C])==null||delete Z[ne.roomToken],a[C]&&!Qt(a[C]).length&&delete a[C]),r[C]&&(delete r[C][w],Qt(r[C]).length||delete r[C]),gi(Ce.peerStates).forEach(([ae,ie])=>{if(ie.answeringExpiryTimer=ot(ie.answeringExpiryTimer),ie.connectedPeer&&!ie.connectedPeer.isDead){const ue=V[ae];(!ue||ue.peer!==ie.connectedPeer)&&ie.connectedPeer.destroy()}ie.answeringPeer&&!ie.answeringPeer.isDead&&ie.answeringPeer.destroy(),Bs(ie,Ee),ie.connectedPeer=null,ie.answeringPeer=null,en(ie)}),s[C]&&(delete s[C][w],Qt(s[C]).length===0&&delete s[C]),je.forEach(ot),Je=ot(Je),we.forEach(async ae=>{(await ae)()}),!c()&&(u=!1,Ee.destroy(),b=null,E(),m(C))},J);return De={roomToken:null,roomTokenPromise:D,attachSharedPeerToRoom:Q,shouldAdvertise:()=>!de||Ce.isActive},K[w]=De,D.then(ne=>{var Z;const ce=De;!ce||H||((Z=r[C])==null?void 0:Z[w])!==ce||(ce.roomToken=ne,f(C)[ne]=w,Yi(V).forEach(ae=>{ae.remoteRoomTokens.has(ne)&&Q(ae.peerId,ae)}),(!de||Ce.isActive)&&g(C,ne,!0))}),s[C][w]=j}};const ky=["offer","answer","candidate"],Oy=6e4,By=n=>{if(typeof n=="string")try{const e=ns(n);return e&&typeof e=="object"?e:null}catch{return null}return n},Fa=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,zy=n=>ky.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),Gy=n=>{const e=By(n);if(!e||zy(e))return!1;const t=Fa(e,"peerId");return!!(t&&t!==hn&&e.passive!==!0&&!Fa(e,"answer")&&!Fa(e,"candidate"))},ka=n=>{if(!n)throw nt("topic strategy missing room context");return n},$c=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),Oa=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i});var Vy=({steadyAnnounceIntervalMs:n=Oy,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:s,unpublishTopic:r})=>Fy({init:t,subscribe:async(a,o,l,c,h,f)=>{const d=ka(f),p=(x,w)=>void s(a,x,w,Oa(d,"signal",o,l));let g=null,_=!1,m=null,u=!1;const y=x=>{_||(_=!0,x())},b=()=>(m||(m=Promise.resolve(i(a,l,(x,w)=>{u||c(x,w,p)},$c(d,"self",o,l))).then(x=>{g=x,u&&y(x)})),m);d.isPassive||await b();const E=await i(a,o,async(x,w)=>{u||(d.isPassive&&Gy(w)&&await b(),u||await c(x,w,p))},$c(d,"root",o,l));return()=>{u=!0,g&&y(g),E()}},announce:async(a,o,l,c,h)=>{const f=ka(h),d=await s(a,o,jt({peerId:hn,...c}),Oa(f,"announce",o,l));return typeof d=="number"||d!==void 0&&"stopAnnouncing"in d?d:{nextAnnounceMs:(d==null?void 0:d.nextAnnounceMs)??n,reannounceOnDisconnect:(d==null?void 0:d.reannounceOnDisconnect)??e}},...r?{deactivate:(a,o,l,c)=>{const h=ka(c);return r(a,o,Oa(h,"announce",o,l))}}:{}});const Hy=Pv(n=>n.socket),Wy=5,Sh="x",xh="EVENT",{secretKey:Xy,publicKey:qy}=oh.keygen(),Yy=Ns(qy),jy={},$y={},Ba={},Kc=250,Nr=6e4,Ky=15*6e4,Zy=5333,zs=new WeakMap,Xo=new WeakSet,_i=new WeakMap,Zc=n=>{const e=zs.get(n),t=Math.min(e!=null&&e.delayMs?Math.max(Nr,e.delayMs*2):Nr,Ky);return zs.set(n,{delayMs:t,untilMs:Date.now()+t}),t},Jy=n=>{const e=zs.get(n);if(!e)return 0;const t=e.untilMs-Date.now();return t>0?t:0},za=n=>({nextAnnounceMs:n}),Qy={stopAnnouncing:!0},eS=n=>{var t;if(Xo.has(n))return!1;const e=_i.get(n);return e&&(clearTimeout(e.timer),_i.delete(n)),Xo.add(n),zs.delete(n),(t=n.close)==null||t.call(n),!0},tS=(n,e)=>{const t=_i.get(n);t&&(clearTimeout(t.timer),t.eventIds.add(e));const i=(t==null?void 0:t.eventIds)??new Set([e]),s=setTimeout(()=>{_i.delete(n)},Zy);_i.set(n,{eventIds:i,timer:s})},nS=(n,e)=>{const t=_i.get(n);return t!=null&&t.eventIds.has(e)?(clearTimeout(t.timer),_i.delete(n),!0):!1},Mh=()=>Math.floor(Date.now()/1e3),bh=n=>Ba[n]??(Ba[n]=hh(n,1e4)+2e4),iS=async(n,e)=>{const t={kind:bh(n),tags:[[Sh,n]],created_at:Mh(),content:e,pubkey:Yy},i=await Hr("SHA-256",jt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return jt([xh,{...t,id:Ns(i),sig:Ns(await oh.signAsync(i,Xy))}])},Nn={},Eh=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},sS=(n,e,t)=>{var s;const i=Nn[s=n.url]??(Nn[s]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});i.topics.set(e,t),Th(n,i)},rS=(n,e)=>{const t=Nn[n.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),Eh(t),t.subIds.forEach(i=>n.send(jt(["CLOSE",i]))),delete Nn[n.url]):Th(n,t))},Th=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{wh(n)}finally{Eh(e)}},0))},aS=n=>{const e=Nn[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},wh=n=>{const e=Nn[n.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],i=[],s=Mh();for(let r=0;r<t.length;r+=Kc)i.push(t.slice(r,r+Kc));for(;e.subIds.length>i.length;){const r=e.subIds.pop();r&&n.send(jt(["CLOSE",r]))}i.forEach((r,a)=>{var l;const o=(l=e.subIds)[a]??(l[a]=as(64));n.send(jt(["REQ",o,{kinds:[...new Set(r.map(bh))],since:s,"#x":r}]))})},oS=n=>{const e=Nn[n.url];e&&e.topics.size>0&&wh(n)},lS=Vy({init:n=>Tv(n,cS,Wy,!0).map(e=>{const t=Hy.register(e,()=>Rv(e,i=>{var l,c;const[s,r,a,o]=ns(i);if(s!==xh){const h=`${dn}: relay failure from ${t.url} - `,f=s==="CLOSED"&&typeof a=="string"?a:o,d=s==="OK"&&a===!1,p=d&&(f==null?void 0:f.startsWith("rate-limited:")),g=d&&(f==null?void 0:f.startsWith("duplicate:")),_=s==="CLOSED"||d&&!p&&!g,m=s==="OK"&&nS(t,r);if(_&&!eS(t))return;p?Zc(t):m&&zs.delete(t),!g&&((l=n.relayConfig)==null?void 0:l.warnOnRelayFailure)!==!1&&(s==="NOTICE"?console.warn(h+r):(d||s==="CLOSED")&&console.warn(h+f));return}if(a&&typeof a=="object"&&"content"in a){const{content:h}=a,f=$y[r];if(f){f(jy[r]??"",h);return}const d=Nn[t.url];if(d!=null&&d.subIds.includes(r)&&a.tags){const p=a.tags.find(g=>g[0]===Sh);p!=null&&p[1]&&((c=d.topics.get(p[1]))==null||c(p[1],h))}}},()=>oS(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{sS(n,e,(a,o)=>void t(a,o));const r=()=>{rS(n,e)};return i.kind==="root"?aS(n).then(()=>r):r},publishTopic:async(n,e,t,i)=>{if(Xo.has(n)||n.isClosed)return i.kind==="announce"?Qy:void 0;if(i.kind==="announce"){const o=Jy(n);if(o>0)return za(Math.max(Nr,o))}const s=await iS(e,typeof t=="string"?t:jt(t)),r=n.socket.readyState===1;if(n.send(s),i.kind!=="announce")return;if(!r)return za(Zc(n));const a=ns(s)[1].id;return tS(n,a),za(Nr)}}),cS=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(n=>"wss://"+n);class fS{constructor(e,t,i="P2",s="#00f5ff"){this.scene=e,this.peerId=t,this.tag=(i||"P2").slice(0,5).toUpperCase(),this.colorHex=s,this.colorNum=parseInt(s.replace("#","0x"),16)||62975,this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetPosition=new W(0,0,7.5),this.targetRotation=Math.PI,this.isMoving=!1,this.walkCycle=0,this.statusText="ONLINE",this.lastActiveTime=Date.now(),this.createAvatarMesh(),this.createNameTagSprite(),this.createSpeechBubbleSprite()}createAvatarMesh(){this.group=new yn,this.group.position.set(this.x,this.y,this.z);const e=new Yt(.38,.32,.8,16),t=new _t({color:this.colorNum,roughness:.3,metalness:.3,emissive:this.colorNum,emissiveIntensity:.15});this.torso=new Se(e,t),this.torso.position.y=.85,this.group.add(this.torso);const i=new at(.04,.78,.05),s=new ft({color:16777215}),r=new Se(i,s);r.position.set(0,.85,.35),this.group.add(r);const a=new yi(.42,24,24),o=new _t({color:1711406,roughness:.2,metalness:.8});this.helmet=new Se(a,o),this.helmet.position.y=1.6,this.group.add(this.helmet);const l=new yi(.36,24,16,0,Math.PI*2,0,Math.PI*.45),c=new _t({color:this.colorNum,roughness:.1,metalness:.9,emissive:this.colorNum,emissiveIntensity:.3}),h=new Se(l,c);h.rotation.x=Math.PI*.5,h.position.set(0,1.6,.12),this.group.add(h);const f=new Yt(.12,.1,.65,12),d=new _t({color:658454,roughness:.5});this.leftLeg=new Se(f,d),this.leftLeg.position.set(-.18,.35,0),this.group.add(this.leftLeg),this.rightLeg=new Se(f,d),this.rightLeg.position.set(.18,.35,0),this.group.add(this.rightLeg);const p=new at(.18,.16,.28),g=new _t({color:this.colorNum,roughness:.3}),_=new Se(p,g);_.position.set(0,-.28,.05),this.leftLeg.add(_);const m=new Se(p,g);m.position.set(0,-.28,.05),this.rightLeg.add(m);const u=new kr(.55,16),y=new ft({color:0,transparent:!0,opacity:.4}),b=new Se(u,y);b.rotation.x=-Math.PI*.5,b.position.y=.02,this.group.add(b),this.scene.add(this.group)}createNameTagSprite(){const e=document.createElement("canvas");e.width=320,e.height=110,this.nameCanvas=e,this.nameCtx=e.getContext("2d"),this.renderNameTagCanvas();const t=new tn(e);t.minFilter=vt,t.magFilter=vt,this.nameTexture=t;const i=new Qi({map:t,transparent:!0,depthTest:!1});this.nameSprite=new Is(i),this.nameSprite.position.set(0,2.35,0),this.nameSprite.scale.set(1.6,.55,1),this.group.add(this.nameSprite)}renderNameTagCanvas(){const e=this.nameCtx,t=this.nameCanvas.width,i=this.nameCanvas.height;e.clearRect(0,0,t,i),e.fillStyle="rgba(8, 9, 16, 0.88)",e.strokeStyle=this.colorHex,e.lineWidth=4;const s=24;e.beginPath(),e.roundRect(10,10,t-20,i-20,s),e.fill(),e.stroke(),e.font='bold 36px "Press Start 2P", monospace, sans-serif',e.fillStyle="#ffd32a",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffd32a",e.shadowBlur=8,e.fillText(this.tag,t/2,42),e.shadowBlur=0,e.font='bold 16px "Outfit", sans-serif',e.fillStyle=this.colorHex,e.fillText(this.statusText,t/2,78),this.nameTexture&&(this.nameTexture.needsUpdate=!0)}createSpeechBubbleSprite(){const e=document.createElement("canvas");e.width=384,e.height=140,this.bubbleCanvas=e,this.bubbleCtx=e.getContext("2d"),this.bubbleTexture=new tn(e),this.bubbleTexture.minFilter=vt;const t=new Qi({map:this.bubbleTexture,transparent:!0,depthTest:!1});this.speechSprite=new Is(t),this.speechSprite.position.set(0,3.1,0),this.speechSprite.scale.set(2.2,.8,1),this.speechSprite.visible=!1,this.speechTimer=0,this.group.add(this.speechSprite)}showSpeechBubble(e){if(!e||!this.speechSprite)return;const t=this.bubbleCtx,i=this.bubbleCanvas.width,s=this.bubbleCanvas.height;t.clearRect(0,0,i,s),t.fillStyle="rgba(8, 12, 28, 0.94)",t.strokeStyle=this.colorHex||"#00f5ff",t.lineWidth=4,t.beginPath(),t.roundRect(10,10,i-20,s-36,18),t.fill(),t.stroke(),t.beginPath(),t.moveTo(i/2-14,s-26),t.lineTo(i/2,s-6),t.lineTo(i/2+14,s-26),t.closePath(),t.fill(),t.stroke(),t.fillStyle="rgba(8, 12, 28, 0.94)",t.fillRect(i/2-12,s-28,24,6),t.fillStyle="#ffffff",t.font='bold 22px "Outfit", "Segoe UI", sans-serif',t.textAlign="center",t.textBaseline="middle";const r=22,a=e.trim();if(a.length<=r)t.fillText(a,i/2,(s-36)/2+10);else{let o=a.lastIndexOf(" ",r);(o===-1||o<8)&&(o=r);const l=a.substring(0,o).trim(),c=a.substring(o,o+r).trim();t.fillText(l,i/2,34),t.fillText(c+(a.length>o+r?"...":""),i/2,64)}this.bubbleTexture.needsUpdate=!0,this.speechSprite.visible=!0,this.speechTimer=5}setTelemetry(e,t,i,s,r=0){this.targetPosition.set(e,r,t),this.targetRotation=i,this.isMoving=!!s,this.lastActiveTime=Date.now()}setActivity(e){this.statusText=e.slice(0,14).toUpperCase(),this.renderNameTagCanvas()}update(e,t){if(!this.group)return;const i=Math.min(1,1-Math.exp(-14*e));this.group.position.lerp(this.targetPosition,i);let s=this.targetRotation-this.group.rotation.y;for(;s<-Math.PI;)s+=Math.PI*2;for(;s>Math.PI;)s-=Math.PI*2;if(this.group.rotation.y+=s*i,this.isMoving){this.walkCycle+=e*10;const r=Math.sin(this.walkCycle)*.45;this.leftLeg.rotation.x=r,this.rightLeg.rotation.x=-r,this.torso.position.y=.85+Math.abs(Math.sin(this.walkCycle*2))*.04,this.helmet.position.y=1.6+Math.abs(Math.sin(this.walkCycle*2))*.04}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.torso.position.y=.85,this.helmet.position.y=1.6;this.nameSprite&&t&&this.nameSprite.quaternion.copy(t.quaternion),this.speechSprite&&this.speechSprite.visible&&(t&&this.speechSprite.quaternion.copy(t.quaternion),this.speechTimer-=e,this.speechTimer<=0&&(this.speechSprite.visible=!1))}dispose(){this.group&&this.scene&&(this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))}}class hS{constructor(e,t,i){this.scene=e,this.identity=t,this.scoreTicker=i,this.peers=new Map,this.room=null,this.posAction=null,this.idAction=null,this.actAction=null,this.scoreAction=null,this.chatAction=null,this.onCabinetOccupancyChange=null,this.lastBroadcastTime=0,this.lastSentX=null,this.lastSentY=null,this.lastSentZ=null,this.lastSentRot=null,this.lastSentMoving=null,this.heartbeatTimer=null,this.hudEl=null,this.createHud(),this.connect()}createHud(){let e=document.getElementById("mp-network-hud");e&&e.remove();const t=document.getElementById("mp-hud-mount");if(t){t.innerHTML=`
        <span class="online-indicator-dot"></span>
        <span id="mp-count-text">1/10 ONLINE</span>
      `,this.hudEl=t,this.updateHudCount();return}e=document.createElement("div"),e.id="mp-network-hud",e.style.cssText=`
      position: absolute;
      top: 14px;
      left: calc(230px + env(safe-area-inset-left, 0px));
      z-index: 25;
      display: flex;
      align-items: center;
      gap: 8px;
      pointer-events: auto;
    `,e.innerHTML=`
      <div id="mp-players-badge" class="hud-online-mount">
        <span class="online-indicator-dot"></span>
        <span id="mp-count-text">1/10 ONLINE</span>
      </div>
    `,document.body.appendChild(e),this.hudEl=e}updateHudCount(){const e=document.getElementById("mp-count-text");if(e){const t=this.peers.size+1;e.textContent=`${t}/10 ONLINE`}}connect(){try{const e={appId:"nopex-arcade-webrtc-v1",relayUrls:["wss://nos.lol","wss://relay.damus.io","wss://relay.primal.net","wss://purplerelay.com"],rtcConfig:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}},t="nopex-main-hub";this.room=lS(e,t),this.posAction=this.room.makeAction("pos"),this.idAction=this.room.makeAction("id"),this.actAction=this.room.makeAction("act"),this.scoreAction=this.room.makeAction("score"),this.chatAction=this.room.makeAction("chat"),this.room.onPeerJoin=i=>{console.log(`[WebRTC] Peer connected: ${i}`),this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:i}),this.updateHudCount()},this.room.onPeerLeave=i=>{console.log(`[WebRTC] Peer disconnected: ${i}`);const s=this.peers.get(i);s&&(s.dispose(),this.peers.delete(i)),this.onCabinetOccupancyChange&&this.onCabinetOccupancyChange(i,null,null,!1),this.updateHudCount()},this.idAction.onMessage=(i,{peerId:s})=>{if(!(!i||!i.tag))if(this.peers.has(s)){const r=this.peers.get(s);(r.tag!==i.tag||r.colorHex!==i.colorHex)&&(r.tag=i.tag.slice(0,5).toUpperCase(),r.colorHex=i.colorHex||"#00f5ff",r.renderNameTagCanvas())}else{if(this.peers.size>=9)return;const r=new fS(this.scene,s,i.tag,i.colorHex);this.peers.set(s,r),this.updateHudCount(),this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:s})}},this.posAction.onMessage=(i,{peerId:s})=>{if(!i)return;const r=this.peers.get(s);r?r.setTelemetry(i.x,i.z,i.r,i.m,i.y||0):this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:s})},this.actAction.onMessage=(i,{peerId:s})=>{if(!i)return;const r=this.peers.get(s);if(r&&r.setActivity(i.status||"ONLINE"),this.onCabinetOccupancyChange){const a=r&&r.tag||i.tag||"P2";this.onCabinetOccupancyChange(s,a,i.gameId,!!i.playing)}},this.scoreAction.onMessage=i=>{i&&this.scoreTicker&&this.scoreTicker.showRecord(i.player,i.game,i.score)},this.chatAction.onMessage=(i,{peerId:s})=>{if(!i||!i.text)return;const r=this.peers.get(s),a=i.tag||(r?r.tag:"P2"),o=i.colorHex||(r?r.colorHex:"#00f5ff");r&&r.showSpeechBubble(i.text),window.dispatchEvent(new CustomEvent("arcade-chat-received",{detail:{peerId:s,tag:a,text:i.text,colorHex:o}}))},this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>{this.idAction&&this.identity&&this.broadcastIdentity()},2500)}catch(e){console.warn("[WebRTC] Connection failed, operating in offline hub mode:",e)}}broadcastIdentity(){!this.idAction||!this.identity||this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex})}broadcastLocalPosition(e,t,i,s,r=0){if(!this.posAction)return;const a=performance.now();if(a-this.lastBroadcastTime<50)return;const o=this.lastSentX!==null?Math.abs(e-this.lastSentX):999,l=this.lastSentY!==null?Math.abs(r-this.lastSentY):999,c=this.lastSentZ!==null?Math.abs(t-this.lastSentZ):999,h=this.lastSentRot!==null?Math.abs(i-this.lastSentRot):999,f=s!==this.lastSentMoving;o<.02&&l<.02&&c<.02&&h<.03&&!f&&a-this.lastBroadcastTime<1500||(this.lastBroadcastTime=a,this.lastSentX=e,this.lastSentY=r,this.lastSentZ=t,this.lastSentRot=i,this.lastSentMoving=s,this.posAction.send({x:Math.round(e*100)/100,y:Math.round(r*100)/100,z:Math.round(t*100)/100,r:Math.round(i*100)/100,m:!!s}))}broadcastActivity(e){this.actAction&&this.actAction.send({status:e})}broadcastPlayingGame(e,t){this.actAction&&this.actAction.send({status:t?"PLAYING":"ONLINE",gameId:e||null,playing:!!t,tag:this.identity?this.identity.tag:"P1"})}broadcastChat(e){!this.chatAction||!e||this.chatAction.send({text:e.slice(0,140),tag:this.identity?this.identity.tag:"P1",colorHex:this.identity?this.identity.colorHex:"#00f5ff"})}broadcastHighScore(e,t){this.scoreAction&&(this.scoreAction.send({player:this.identity.tag,game:e,score:t,time:Date.now()}),this.scoreTicker&&this.scoreTicker.showRecord(this.identity.tag,e,t))}update(e,t){this.peers.forEach(i=>{i.update(e,t)})}}class dS{constructor(){this.modalEl=document.getElementById("arcade-jukebox-modal"),this.isOpen=!1,this.selectedArtistId="all",this.showLyrics=!1,this.renderSkeleton(),this.bindEvents(),We.subscribe(e=>this.onMusicStateUpdate(e))}renderSkeleton(){this.modalEl&&(this.modalEl.innerHTML=`
      <div class="jukebox-backdrop" id="jukebox-backdrop"></div>
      <div class="jukebox-window">
        <!-- Top Bar -->
        <div class="jukebox-header">
          <div class="jukebox-brand">
            <span class="jukebox-logo-icon">⚡</span>
            <div>
              <div class="jukebox-title">RETRO ARCADE JUKEBOX</div>
              <div class="jukebox-subtitle">TRILHAS SONORAS CLÁSSICAS DOS JOGOS</div>
            </div>
          </div>
          <div class="jukebox-header-actions">
            <button id="jukebox-close-btn" class="jukebox-close-btn" title="Fechar Jukebox (ESC)">✕ FECHAR</button>
          </div>
        </div>

        <!-- Artist Filter Tabs -->
        <div class="jukebox-tabs" id="jukebox-artist-tabs">
          <button class="juke-tab active" data-artist="all">🎵 Todas as Músicas</button>
        </div>

        <!-- Main Content Area: Track Grid + Lyrics Panel -->
        <div class="jukebox-body">
          <div class="jukebox-tracklist" id="jukebox-track-container">
            <!-- Dynamically populated -->
          </div>

          <div class="jukebox-lyrics-panel" id="jukebox-lyrics-panel" style="display: none;">
            <div class="lyrics-header">
              <span class="lyrics-tag">LETRA & TRÍVIA DO JOGO</span>
              <button id="lyrics-close-btn" class="lyrics-close-btn">✕</button>
            </div>
            <div class="lyrics-content" id="jukebox-lyrics-content">
              Nenhuma informação disponível para esta faixa.
            </div>
          </div>
        </div>

        <!-- Bottom Player Dock -->
        <div class="jukebox-dock">
          <div class="dock-left">
            <img id="dock-cover" class="dock-cover-img" src="" alt="Capa" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=200'; this.onerror=null;" />
            <div class="dock-info">
              <div id="dock-title" class="dock-title">Selecione uma música</div>
              <div id="dock-artist" class="dock-artist">Phase AI FM</div>
            </div>
            <button id="dock-lyrics-toggle" class="dock-lyrics-btn" title="Exibir Letra">📝 LETRA</button>
          </div>

          <div class="dock-center">
            <div class="dock-buttons">
              <button id="dock-prev" class="dock-ctrl-btn" title="Anterior">⏮</button>
              <button id="dock-play" class="dock-ctrl-btn dock-play-btn" title="Play/Pause">▶</button>
              <button id="dock-next" class="dock-ctrl-btn" title="Próxima">⏭</button>
            </div>
            <div class="dock-scrubber-wrap">
              <span id="dock-time-cur" class="dock-time">0:00</span>
              <div class="dock-progress-track" id="dock-progress-track">
                <div class="dock-progress-bar" id="dock-progress-bar"></div>
              </div>
              <span id="dock-time-dur" class="dock-time">0:00</span>
            </div>
          </div>

          <div class="dock-right">
            <div class="dock-vol-wrap">
              <span class="dock-vol-icon">🔊</span>
              <input type="range" id="dock-vol-slider" min="0" max="1" step="0.05" value="0.7" class="dock-vol-slider" />
            </div>
            <div class="dock-visualizer-mini">
              <canvas id="dock-canvas" width="60" height="24"></canvas>
            </div>
          </div>
        </div>
      </div>
    `,this.initCanvasVisualizer())}initCanvasVisualizer(){if(this.canvas=document.getElementById("dock-canvas"),!this.canvas)return;this.ctx=this.canvas.getContext("2d"),this.freqData=new Uint8Array(16);const e=()=>{if(this.isOpen&&this.ctx){this.ctx.clearRect(0,0,60,24),We.getFrequencyData(this.freqData);for(let t=0;t<8;t++){const i=this.freqData[t]/255,s=Math.max(3,i*22);this.ctx.fillStyle=t%2===0?"#00f5ff":"#ff007f",this.ctx.fillRect(t*7+2,24-s,5,s)}}requestAnimationFrame(e)};requestAnimationFrame(e)}bindEvents(){const e=document.getElementById("jukebox-close-btn"),t=document.getElementById("jukebox-backdrop"),i=document.getElementById("dock-play"),s=document.getElementById("dock-prev"),r=document.getElementById("dock-next"),a=document.getElementById("dock-vol-slider"),o=document.getElementById("dock-lyrics-toggle"),l=document.getElementById("lyrics-close-btn");e&&e.addEventListener("click",()=>this.close()),t&&t.addEventListener("click",()=>this.close()),i&&i.addEventListener("click",()=>We.togglePlay()),s&&s.addEventListener("click",()=>We.prev()),r&&r.addEventListener("click",()=>We.next()),a&&a.addEventListener("input",c=>{We.setVolume(parseFloat(c.target.value))}),o&&o.addEventListener("click",()=>{this.showLyrics=!this.showLyrics,this.updateLyricsPanel()}),l&&l.addEventListener("click",()=>{this.showLyrics=!1,this.updateLyricsPanel()}),window.addEventListener("keydown",c=>{this.isOpen&&(c.key==="Escape"?(c.preventDefault(),this.close()):c.code==="Space"&&c.target.tagName!=="INPUT"&&(c.preventDefault(),We.togglePlay()))})}open(){this.isOpen=!0,this.modalEl&&(this.modalEl.style.display="flex",setTimeout(()=>this.modalEl.classList.add("active"),10)),this.populateTabs(),this.renderTracks(),this.onMusicStateUpdate({isPlaying:We.isPlaying,currentTrack:We.getCurrentTrack(),currentTime:We.currentTrackTime,duration:We.getCurrentTrack()&&We.getCurrentTrack().durationSec||140})}close(){this.isOpen=!1,this.modalEl&&(this.modalEl.classList.remove("active"),setTimeout(()=>{this.modalEl.style.display="none"},250))}populateTabs(){const e=document.getElementById("jukebox-artist-tabs");if(!e||!We.artists.length)return;let t=`<button class="juke-tab ${this.selectedArtistId==="all"?"active":""}" data-artist="all">🎵 Todas as Músicas</button>`;We.artists.forEach(i=>{const s=this.selectedArtistId===i.id?"active":"";t+=`
        <button class="juke-tab ${s}" data-artist="${i.id}">
          <img src="${i.avatar}" class="tab-avatar" alt="" onerror="this.style.display='none'" />
          ${i.name}
        </button>
      `}),e.innerHTML=t,e.querySelectorAll(".juke-tab").forEach(i=>{i.addEventListener("click",s=>{this.selectedArtistId=i.getAttribute("data-artist"),e.querySelectorAll(".juke-tab").forEach(r=>r.classList.remove("active")),i.classList.add("active"),this.renderTracks()})})}renderTracks(){const e=document.getElementById("jukebox-track-container");if(!e)return;const t=We.tracks.filter(s=>this.selectedArtistId==="all"?!0:s.artistId===this.selectedArtistId);if(!t.length){e.innerHTML='<div class="juke-empty">Nenhuma faixa encontrada neste filtro.</div>';return}const i=We.getCurrentTrack();e.innerHTML=t.map(s=>{const r=i&&i.id===s.id,a=r&&We.isPlaying;return`
        <div class="juke-track-card ${r?"now-active":""}" data-id="${s.id}">
          <div class="track-card-cover-wrap">
            <img src="${s.cover}" class="track-card-cover" alt="${s.title}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200'" />
            <button class="track-card-play-btn" data-track-id="${s.id}">
              ${a?"⏸":"▶"}
            </button>
          </div>
          <div class="track-card-info">
            <div class="track-card-title-row">
              <span class="track-card-title">${s.title}</span>
              ${r?'<span class="now-playing-badge">OUVINDO</span>':""}
            </div>
            <div class="track-card-artist">${s.artistName} • <span class="album-name">${s.album||"Single"}</span></div>
            <div class="track-card-meta">
              <span class="track-meta-badge">⚡ ${s.bpm||128} BPM</span>
              <span class="track-meta-plays">▶ ${s.plays||"1M"}</span>
              <span class="track-meta-time">⏱ ${s.duration||"2:15"}</span>
            </div>
          </div>
        </div>
      `}).join(""),e.querySelectorAll(".juke-track-card").forEach(s=>{s.addEventListener("click",r=>{const a=s.getAttribute("data-id"),o=We.tracks.findIndex(l=>l.id===a);o!==-1&&(We.currentIndex===o&&We.isPlaying?We.togglePlay():We.playTrack(o))})})}onMusicStateUpdate(e){const t=document.getElementById("dock-play"),i=document.getElementById("dock-cover"),s=document.getElementById("dock-title"),r=document.getElementById("dock-artist"),a=document.getElementById("dock-time-cur"),o=document.getElementById("dock-time-dur"),l=document.getElementById("dock-progress-bar");if(t&&(t.innerHTML=e.isPlaying?"⏸":"▶"),e.currentTrack&&(i&&(i.src=e.currentTrack.cover),s&&(s.textContent=e.currentTrack.title),r&&(r.textContent=`${e.currentTrack.artistName} • ${e.currentTrack.synthStyle||"AI Synth"}`)),a&&e.currentTime!==void 0&&(a.textContent=this.formatSeconds(e.currentTime)),o&&e.duration!==void 0&&(o.textContent=this.formatSeconds(e.duration)),l&&e.duration){const c=Math.min(100,e.currentTime/e.duration*100);l.style.width=`${c}%`}e.type==="state"&&(this.renderTracks(),this.updateLyricsPanel())}updateLyricsPanel(){const e=document.getElementById("jukebox-lyrics-panel"),t=document.getElementById("jukebox-lyrics-content");if(!e||!t)return;if(!this.showLyrics){e.style.display="none";return}e.style.display="flex";const i=We.getCurrentTrack();i&&i.lyrics&&i.lyrics.length?t.innerHTML=i.lyrics.map(s=>`
        <div class="lyrics-line">
          <span class="lyrics-time">[${this.formatSeconds(s.time)}]</span>
          <span class="lyrics-text">${s.text}</span>
        </div>
      `).join(""):t.innerHTML='<div class="lyrics-empty">Nenhuma letra sincronizada para esta faixa instrumental.</div>'}formatSeconds(e){(isNaN(e)||e<0)&&(e=0);const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i<10?"0":""}${i}`}}class uS{constructor(e){this.onOpenJukeboxModal=e,this.hudContainer=document.getElementById("arcade-music-hud"),this.tickerEl=document.getElementById("music-hud-ticker"),this.playBtn=document.getElementById("music-hud-play"),this.prevBtn=document.getElementById("music-hud-prev"),this.nextBtn=document.getElementById("music-hud-next"),this.expandBtn=document.getElementById("music-hud-expand"),this.volBtn=document.getElementById("music-hud-vol"),this.bars=document.querySelectorAll(".hud-eq-bar"),this.isMuted=!1,this.prevVolume=.7,this.bindEvents(),We.subscribe(t=>this.update(t))}bindEvents(){this.playBtn&&this.playBtn.addEventListener("click",e=>{e.stopPropagation(),We.togglePlay()}),this.prevBtn&&this.prevBtn.addEventListener("click",e=>{e.stopPropagation(),We.prev()}),this.nextBtn&&this.nextBtn.addEventListener("click",e=>{e.stopPropagation(),We.next()}),this.expandBtn&&this.expandBtn.addEventListener("click",e=>{e.stopPropagation(),this.onOpenJukeboxModal&&this.onOpenJukeboxModal()}),this.tickerEl&&this.tickerEl.addEventListener("click",e=>{e.stopPropagation(),this.onOpenJukeboxModal&&this.onOpenJukeboxModal()}),this.volBtn&&this.volBtn.addEventListener("click",e=>{e.stopPropagation(),this.isMuted?(this.isMuted=!1,We.setVolume(this.prevVolume||.7),this.volBtn.textContent="🔊"):(this.isMuted=!0,this.prevVolume=We.volume,We.setVolume(0),this.volBtn.textContent="🔇")})}update(e){if(this.playBtn&&(this.playBtn.innerHTML=e.isPlaying?"⏸":"▶",this.playBtn.setAttribute("title",e.isPlaying?"Pausar":"Tocar")),this.tickerEl&&e.currentTrack){const i=e.isProcedural?" [SYNTH AI]":"";this.tickerEl.innerHTML=`🎵 <strong>${e.currentTrack.artistName}</strong> — ${e.currentTrack.title}${i}`}const t=document.getElementById("music-hud-eq");t&&(e.isPlaying&&!e.isDucked?t.classList.add("dancing"):t.classList.remove("dancing"))}}class pS{constructor(e,t,i=null){this.container=e,this.gamesManifest=t,this.identity=i,this.isRunning=!1,this.isZoomingIn=!1,this.zoomTarget=null,this.zoomProgress=0,this.initScene(),this.initWorld(),this.initPlayer(),this.initTokens(),this.initInteraction(),this.initOverlay(),this.initJukebox(),this.initNetwork(),this.initPointerLock(),this.initChatDock(),this.initMobileControls(),this.initTapToWalk(),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>{setTimeout(()=>this.onResize(),150)})}initScene(){this.scene=new Hd,this.scene.background=new Ke(856619),this.scene.fog=new sl(856619,40,95);const e=this.container.clientWidth||window.innerWidth||1280,t=this.container.clientHeight||window.innerHeight||720;this.camera=new Xt(52,e/t,.1,200),this.camera.position.set(0,4.2,13.5),this.renderer=new t_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),this.container.appendChild(this.renderer.domElement),this.clock=new su,this.raycaster=new ru;const i=new Qn(.5,.75,32),s=new ft({color:62975,side:Rt,transparent:!0,opacity:0});this.destinationRing=new Se(i,s),this.destinationRing.rotation.x=-Math.PI/2,this.destinationRing.position.set(0,.05,0),this.scene.add(this.destinationRing),this.destinationPulse=0}initWorld(){this.world=J_(this.scene,this.gamesManifest)}initPlayer(){this.player=new i_(this.scene,this.identity)}initTokens(){let e=parseInt(localStorage.getItem("arcade_tokens"),10);(isNaN(e)||e<=0)&&(e=25),this.tokens=e;try{this.discoveredCabinets=new Set(JSON.parse(localStorage.getItem("arcade_discovered")||"[]"))}catch{this.discoveredCabinets=new Set}this.updateTokensDisplay()}updateTokensDisplay(){const e=document.getElementById("arcade-tokens-val");e&&(e.textContent=this.tokens),localStorage.setItem("arcade_tokens",String(this.tokens))}spendToken(){this.tokens>0?this.tokens-=1:this.tokens=5,this.updateTokensDisplay(),Va(()=>Promise.resolve().then(()=>Bo),void 0,import.meta.url).then(e=>{var t;return(t=e.playCoinDrop)==null?void 0:t.call(e)})}awardExplorationToken(e){if(e&&!this.discoveredCabinets.has(e)){this.discoveredCabinets.add(e);try{localStorage.setItem("arcade_discovered",JSON.stringify([...this.discoveredCabinets]))}catch{}this.tokens+=2,this.updateTokensDisplay()}}initInteraction(){this.interaction=new Q_(this.world.cabinets,(e,t)=>this.launchGame(e,t),e=>this.awardExplorationToken(e))}initOverlay(){this.overlay=new ev(()=>{this.isZoomingIn=!1,this.zoomProgress=0,this.clock.getDelta(),this.zoomTarget&&(this.zoomTarget.clearOccupied(),this.zoomTarget=null),this.network&&(this.network.broadcastActivity("ONLINE"),this.network.broadcastPlayingGame(null,!1))})}initJukebox(){this.jukeboxModal=new dS,this.musicHud=new uS(()=>this.openJukebox()),We.init()}openJukebox(){var e;document.pointerLockElement&&((e=document.exitPointerLock)==null||e.call(document)),this.jukeboxModal&&(Va(()=>Promise.resolve().then(()=>Bo),void 0,import.meta.url).then(t=>{var i;return(i=t.playDopamineChime)==null?void 0:i.call(t)}),this.jukeboxModal.open())}initNetwork(){this.scoreTicker=new tv,this.network=new hS(this.scene,this.identity||{tag:"MARC1",color:62975,colorHex:"#00f5ff"},this.scoreTicker),window.__ARCADE_NETWORK__=this.network,this.network.onCabinetOccupancyChange=(e,t,i,s)=>{if(s&&i){const r=this.world.cabinets.find(a=>a.game.id===i);r&&r.setOccupiedBy(t)}else this.world.cabinets.forEach(r=>{r.occupiedBy===t&&r.clearOccupied()})}}initPointerLock(){const e=this.renderer.domElement;this.isPointerLocked=!1,this.camPitch=0,e.addEventListener("click",t=>{document.body.classList.contains("touch-device")||"ontouchstart"in window||window.__arcadeOverlayOpen||this.overlay&&this.overlay.isOpen||this.jukeboxModal&&this.jukeboxModal.isOpen||t.target.closest&&t.target.closest(".nopex-hud-header, .arcade-music-hud, .arcade-commands-dock, .arcade-hologram-card, .arcade-jukebox-modal, #arcade-chat-dock")||document.pointerLockElement!==e&&e.requestPointerLock&&e.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===e}),document.addEventListener("mousemove",t=>{if(!this.isPointerLocked||window.__arcadeOverlayOpen||this.overlay&&this.overlay.isOpen)return;const i=t.movementX||0,s=t.movementY||0;this.player.rotation-=i*.0032,this.player.targetRotation=this.player.rotation,this.camPitch=Math.max(-.2,Math.min(.35,(this.camPitch||0)-s*.0018))})}initChatDock(){const e=document.getElementById("arcade-chat-dock"),t=document.getElementById("arcade-chat-messages"),i=document.getElementById("arcade-chat-input"),s=document.getElementById("arcade-chat-send"),r=document.getElementById("mobile-chat-toggle");this.chatDock=e,this.chatMessagesEl=t,this.chatInput=i;const a=()=>{var h,f;if(!i)return;const o=i.value.trim();if(!o)return;i.value="";const l=((h=this.identity)==null?void 0:h.tag)||"VOCÊ",c=((f=this.identity)==null?void 0:f.colorHex)||"#00f5ff";this.player.showSpeechBubble(o),this.network&&this.network.broadcastChat(o),this.appendChatMessage(l,o,c,!0),i.blur()};s&&s.addEventListener("click",o=>{o.preventDefault(),a()}),i&&i.addEventListener("keydown",o=>{o.stopPropagation(),o.key==="Enter"?(o.preventDefault(),a()):o.key==="Escape"&&i.blur()}),r&&e&&r.addEventListener("click",()=>{e.classList.toggle("active"),e.classList.contains("active")&&i&&i.focus()}),window.addEventListener("keydown",o=>{var l;window.__arcadeOverlayOpen||document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA")||o.code==="KeyC"&&(o.preventDefault(),document.pointerLockElement&&((l=document.exitPointerLock)==null||l.call(document)),e&&e.classList.add("active"),i&&(i.focus(),i.select()))}),window.addEventListener("arcade-chat-received",o=>{const l=o.detail;l&&this.appendChatMessage(l.tag||"P2",l.text,l.colorHex||"#ff007f",!1)})}appendChatMessage(e,t,i,s=!1){if(!this.chatMessagesEl)return;const r=document.createElement("div");r.className=`chat-msg-row ${s?"msg-self":""}`;const a=document.createElement("span");a.className="chat-msg-tag",a.textContent=`[${e}]: `,a.style.color=i||"#00f5ff";const o=document.createElement("span");for(o.className="chat-msg-text",o.textContent=t,r.appendChild(a),r.appendChild(o),this.chatMessagesEl.appendChild(r);this.chatMessagesEl.children.length>25;)this.chatMessagesEl.removeChild(this.chatMessagesEl.firstChild);this.chatMessagesEl.scrollTop=this.chatMessagesEl.scrollHeight,this.chatDock&&(this.chatDock.classList.add("active"),clearTimeout(this._chatHideTimer),this._chatHideTimer=setTimeout(()=>{document.activeElement!==this.chatInput&&this.chatDock.classList.remove("active")},7e3))}setPlayerIdentity(e){this.identity=e,this.player&&this.player.setIdentity(e),this.network&&(this.network.identity=e,this.network.broadcastIdentity())}launchGame(e,t){var i;if(t&&t.isJukebox){this.openJukebox();return}document.pointerLockElement&&((i=document.exitPointerLock)==null||i.call(document)),this.spendToken(),this.isZoomingIn=!0,this.zoomTarget=t,this.zoomProgress=0,t&&t.setOccupiedBy(this.identity?this.identity.tag:"VOCÊ"),this.network&&(this.network.broadcastActivity(e.title||e.name),this.network.broadcastPlayingGame(e.id,!0)),setTimeout(()=>{this.overlay.open(e)},550)}teleportToCabinet(e){const t=this.world.cabinets.find(i=>i.game.id===e);t&&(this.player.clearNavigationTarget(),this.player.x=t.standSpot.x,this.player.z=t.standSpot.z,this.player.rotation=t.rotationY+Math.PI,this.player.targetRotation=this.player.rotation,this.interaction.update(this.player))}showDestinationPulse(e,t){this.destinationRing.position.set(e,.04,t),this.destinationRing.scale.set(.6,.6,.6),this.destinationRing.material.opacity=.9,this.destinationPulse=1}initTapToWalk(){let e=0,t=0,i=0;const s=o=>{e=performance.now(),t=o.clientX,i=o.clientY},r=o=>{const l=performance.now()-e,c=Math.abs(o.clientX-t),h=Math.abs(o.clientY-i);if(l>380||c>20||h>20||o.target.closest(".nopex-hud-header, .arcade-mobile-joystick, .arcade-mobile-dpad, .arcade-mobile-action-btn, .arcade-hologram-card, .arcade-game-overlay, .mobile-teleport-drawer"))return;const d=this.renderer.domElement.getBoundingClientRect(),p=(o.clientX-d.left)/d.width*2-1,g=-((o.clientY-d.top)/d.height)*2+1;this.raycaster.setFromCamera({x:p,y:g},this.camera);let _=null,m=1/0;for(const u of this.world.cabinets){const y=this.raycaster.intersectObjects(u.group.children,!0);y.length>0&&y[0].distance<m&&(m=y[0].distance,_=u)}if(_){this.showDestinationPulse(_.standSpot.x,_.standSpot.z),this.player.setNavigationTarget(_.standSpot.x,_.standSpot.z,()=>{this.interaction.update(this.player)});return}if(this.world.floorMesh){const u=this.raycaster.intersectObject(this.world.floorMesh);if(u.length>0){const y=u[0].point,b=this.world.roomBounds,E=Math.max(b.minX+.5,Math.min(b.maxX-.5,y.x)),x=Math.max(b.minZ+.5,Math.min(b.maxZ-.5,y.z));this.showDestinationPulse(E,x),this.player.setNavigationTarget(E,x,()=>{this.interaction.update(this.player)})}}},a=this.renderer.domElement;a.addEventListener("pointerdown",s),a.addEventListener("pointerup",r)}initMobileControls(){("ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches)&&document.body.classList.add("touch-device");const t=document.getElementById("arcade-joystick"),i=document.getElementById("joystick-thumb");if(!t||!i)return;let s=null,r=0,a=0;const o=45,l=t.querySelector(".arrow-up"),c=t.querySelector(".arrow-down"),h=t.querySelector(".arrow-left"),f=t.querySelector(".arrow-right"),d=(u,y)=>{l&&l.classList.toggle("active",y<-12),c&&c.classList.toggle("active",y>12),h&&h.classList.toggle("active",u<-12),f&&f.classList.toggle("active",u>12)},p=u=>{if(!(this.overlay&&this.overlay.isOpen))for(let y=0;y<u.changedTouches.length;y++){const b=u.changedTouches[y],E=t.getBoundingClientRect(),x=b.clientX>=E.left&&b.clientX<=E.right&&b.clientY>=E.top&&b.clientY<=E.bottom,w=b.clientX<=window.innerWidth*.55&&b.clientY>=window.innerHeight*.4;if(s===null&&(x||w)){if(b.target&&b.target.closest&&b.target.closest(".nopex-hud-header, .mobile-teleport-drawer, .arcade-mobile-action-btn, #arcade-game-overlay"))continue;u.preventDefault(),s=b.identifier,x?(r=E.left+E.width/2,a=E.top+E.height/2):(r=b.clientX,a=b.clientY,t.style.left=`${Math.max(12,Math.min(window.innerWidth-130,r-E.width/2))}px`,t.style.bottom=`${Math.max(12,Math.min(window.innerHeight-130,window.innerHeight-a-E.height/2))}px`),t.classList.add("active"),this.player.clearNavigationTarget();break}}},g=u=>{if(s!==null)for(let y=0;y<u.changedTouches.length;y++){const b=u.changedTouches[y];if(b.identifier===s){u.preventDefault();let E=b.clientX-r,x=b.clientY-a;const w=Math.hypot(E,x);w>o&&(E=E/w*o,x=x/w*o),i.style.transform=`translate(${E}px, ${x}px)`,d(E,x),this.player.setJoystickVector(E/o,x/o);break}}},_=u=>{for(let y=0;y<u.changedTouches.length;y++)if(u.changedTouches[y].identifier===s){s=null,i.style.transform="translate(0px, 0px)",t.classList.remove("active"),d(0,0),this.player.setJoystickVector(0,0);break}};window.addEventListener("touchstart",p,{passive:!1}),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",_),window.addEventListener("touchcancel",_),[{id:"dpad-up",vx:0,vy:-1},{id:"dpad-down",vx:0,vy:1},{id:"dpad-left",vx:-1,vy:0},{id:"dpad-right",vx:1,vy:0}].forEach(({id:u,vx:y,vy:b})=>{const E=document.getElementById(u);if(!E)return;const x=P=>{P.preventDefault(),this.player.clearNavigationTarget(),this.player.setJoystickVector(y,b),E.classList.add("pressed")},w=P=>{P.preventDefault(),this.player.setJoystickVector(0,0),E.classList.remove("pressed")};E.addEventListener("pointerdown",x),E.addEventListener("pointerup",w),E.addEventListener("pointerleave",w),E.addEventListener("pointercancel",w)})}onResize(){if(!this.container||!this.renderer||!this.camera)return;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25))}start(){this.isRunning||(this.isRunning=!0,this.clock.start(),this.onResize(),this.animate())}stop(){this.isRunning=!1}animate(){if(!this.isRunning)return;requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.1);if(this.overlay&&this.overlay.isOpen){this.network&&this.network.update(e,this.camera);return}const t=this.clock.getElapsedTime();if(this.world.update(t,this.player),this.destinationPulse>0){this.destinationPulse-=e*1.6;const i=.6+(1-Math.max(0,this.destinationPulse))*.9;this.destinationRing.scale.set(i,i,i),this.destinationRing.material.opacity=Math.max(0,this.destinationPulse)*.9,this.destinationPulse<=0&&(this.destinationRing.material.opacity=0)}if(this.player.update(e,this.world.roomBounds,this.world.cabinets,this.camera),this.interaction.update(this.player),this.network&&(this.network.broadcastLocalPosition(this.player.x,this.player.z,this.player.rotation,this.player.isMoving,this.player.y),this.network.update(e,this.camera)),this.isZoomingIn&&this.zoomTarget){const i=this.zoomTarget,s=i.rotationY,r=i.position.x+Math.sin(s)*.51,a=2.15,o=i.position.z+Math.cos(s)*.51,l=new W(r,a,o),c=Math.sin(s)*.975,h=.22,f=Math.cos(s)*.975,d=new W(r+c*1.35,a+h*1.35,o+f*1.35);this.camera.position.lerp(d,.16),this.camera.lookAt(l)}else{const i=this.camPitch||0,s=this.player.x,r=4+i*2.2,a=Math.min(26,this.player.z+6.2);this.camera.position.x+=(s-this.camera.position.x)*.14,this.camera.position.y+=(r-this.camera.position.y)*.14,this.camera.position.z+=(a-this.camera.position.z)*.14,this.camLookTarget||(this.camLookTarget=new W(this.player.x,1.4,this.player.z-1.2)),this.camLookTarget.x+=(this.player.x-this.camLookTarget.x)*.14,this.camLookTarget.y=1.4+i*3.5,this.camLookTarget.z+=(this.player.z-1.2-this.camLookTarget.z)*.14,this.camera.lookAt(this.camLookTarget)}this.renderer.render(this.scene,this.camera)}}const Ga=[{name:"Cyan",hex:"#00f5ff",num:62975,accent:"#ffffff"},{name:"Magenta",hex:"#ff007f",num:16711807,accent:"#00f5ff"},{name:"Ouro",hex:"#ffd32a",num:16765738,accent:"#ff3838"},{name:"Esmeralda",hex:"#00ff88",num:65416,accent:"#00ffff"},{name:"Roxo",hex:"#a55eea",num:10837738,accent:"#ffd32a"},{name:"Rubi",hex:"#ff3838",num:16726072,accent:"#ffd32a"}];class mS{constructor(e){this.onReady=e,this.tag=localStorage.getItem("ARCADE_MP_TAG")||"MARC1",this.colorHex=localStorage.getItem("ARCADE_MP_COLOR")||"#00f5ff",this.modalEl=null,this.createModal(),this.tag&&this.tag.length>=2?setTimeout(()=>{this.onReady&&this.onReady(this.getIdentity())},100):this.showModal()}getIdentity(){const e=Ga.find(t=>t.hex.toLowerCase()===this.colorHex.toLowerCase())||Ga[0];return{tag:(this.tag||"MARC1").slice(0,5).toUpperCase(),color:e.num,colorHex:e.hex,accent:e.accent}}createModal(){const e=document.getElementById("mp-identity-modal");e&&e.remove();const t=document.createElement("div");t.id="mp-identity-modal",t.style.cssText=`
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
          ${Ga.map(l=>`
            <div class="color-swatch" data-hex="${l.hex}" title="${l.name}" style="
              height: 36px;
              background: ${l.hex};
              border-radius: 8px;
              cursor: pointer;
              border: 3px solid ${l.hex.toLowerCase()===this.colorHex.toLowerCase()?"#fff":"transparent"};
              box-shadow: ${l.hex.toLowerCase()===this.colorHex.toLowerCase()?"0 0 12px "+l.hex:"none"};
              transition: transform 0.2s, box-shadow 0.2s;
            "></div>
          `).join("")}
        </div>
      </div>

      <div id="mp-modal-err" style="color: #ff3838; font-size: 11px; margin-bottom: 10px; display: none; font-weight: 700;"></div>

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
    `,t.appendChild(i),document.body.appendChild(t),this.modalEl=t;const s=i.querySelector("#mp-tag-input");s.addEventListener("input",l=>{s.value=s.value.replace(/[^a-zA-Z0-9]/g,"").slice(0,5).toUpperCase()});const r=i.querySelectorAll(".color-swatch");r.forEach(l=>{l.addEventListener("click",()=>{this.colorHex=l.getAttribute("data-hex"),r.forEach(c=>{const h=c.getAttribute("data-hex")===this.colorHex;c.style.border=h?"3px solid #fff":"transparent",c.style.boxShadow=h?"0 0 12px "+this.colorHex:"none"})})});const a=i.querySelector("#mp-modal-err");i.querySelector("#mp-enter-btn").addEventListener("click",()=>{const l=s.value.trim().toUpperCase();if(!l||l.length<2){a&&(a.textContent="⚠️ Digite uma TAG com pelo menos 2 letras!",a.style.display="block"),s.focus();return}a&&(a.style.display="none"),this.tag=l,localStorage.setItem("ARCADE_MP_TAG",this.tag),localStorage.setItem("ARCADE_MP_COLOR",this.colorHex),this.hideModal(),this.onReady&&this.onReady(this.getIdentity())}),window.addEventListener("keydown",l=>{l.key==="Escape"&&this.modalEl&&this.modalEl.style.display==="flex"&&this.tag&&this.tag.length>=2&&this.hideModal()})}showModal(){this.modalEl&&(this.modalEl.style.display="flex")}hideModal(){this.modalEl&&(this.modalEl.style.display="none")}}const gS="https://gist.githubusercontent.com/marcuscaiado/a238a8db5b064579413c7a54aba6c840/raw/marcus-arcade-leaderboard.json";function Jc(){const n=document.getElementById("arcade-3d-canvas-container"),e=document.getElementById("webgl-error");if(!n){console.error("Missing #arcade-3d-canvas-container");return}let t=null;const i=new mS(f=>{if(t)t.setPlayerIdentity(f);else try{t=new pS(n,js,f),t.start(),window.__ARCADE_ENGINE__=t,window.__MUSIC_MANAGER__=We;const d=()=>{We.unlockAndPlay()};window.addEventListener("pointerdown",d,{once:!0}),window.addEventListener("keydown",d,{once:!0}),window.addEventListener("touchstart",d,{once:!0}),d()}catch(d){console.error("Fatal WebGL / Three.js Initialization Error:",d),e&&(e.style.display="block",e.textContent="Erro ao inicializar 3D: "+d.message)}}),s=document.getElementById("arcade-tag-btn");if(s&&s.addEventListener("click",f=>{f.stopPropagation(),i.showModal()}),window.addEventListener("keydown",f=>{if(!(f.target&&(f.target.tagName==="INPUT"||f.target.tagName==="TEXTAREA"||f.target.tagName==="SELECT"))){if(f.code==="KeyT"&&!f.ctrlKey&&!f.altKey&&!f.metaKey){const d=document.getElementById("arcade-game-overlay");(!d||d.style.display==="none")&&i.showModal()}if(f.code==="KeyJ"&&!f.ctrlKey&&!f.altKey&&!f.metaKey){const d=document.getElementById("arcade-game-overlay");(!d||d.style.display==="none")&&t&&t.jukeboxModal&&t.jukeboxModal.open()}}}),window.ArcadeLeaderboard&&window.ArcadeLeaderboard.submitScore){const f=window.ArcadeLeaderboard.submitScore.bind(window.ArcadeLeaderboard);window.ArcadeLeaderboard.submitScore=function(d,p){const g=f(d,p);if(window.__ARCADE_NETWORK__){const _=js.find(u=>u.id===d),m=_?_.title:d;window.__ARCADE_NETWORK__.broadcastHighScore(m,p)}return g}}window.addEventListener("message",f=>{if(f.data&&(f.data.type==="ARCADE_SCORE"||f.data.type==="GAME_SCORE")&&f.data.score&&window.__ARCADE_NETWORK__){const d=js.find(g=>g.id===f.data.gameId),p=d&&d.title||f.data.gameTitle||"Arcade Game";window.__ARCADE_NETWORK__.broadcastHighScore(p,Number(f.data.score))}});const r=document.getElementById("teleport-select");r&&r.addEventListener("change",f=>{const d=f.target.value;d&&t&&(Va(()=>Promise.resolve().then(()=>Bo),void 0,import.meta.url).then(p=>p.playDopamineChime()),t.teleportToCabinet(d),r.blur())});const a=document.getElementById("arcade-ctrl-toggle"),o=document.getElementById("arcade-joystick"),l=document.getElementById("arcade-dpad");let c="joystick";a&&o&&l&&a.addEventListener("click",f=>{f.stopPropagation(),c==="joystick"?(c="dpad",o.style.display="none",l.style.display="flex",a.innerHTML="<span>🕹️ JOYSTICK</span>"):(c="joystick",o.style.display="block",l.style.display="none",a.innerHTML="<span>🎮 D-PAD</span>")});async function h(){window.__ARCADE_LEADERBOARDS__=window.__ARCADE_LEADERBOARDS__||{};try{const f=await fetch(`${gS}?_t=${Date.now()}`);if(f.ok){const d=await f.json();js.forEach(p=>{let g=[];try{g=JSON.parse(localStorage.getItem(`arcade_lb_${p.id}`)||"[]")}catch{}const m=[...d[p.id]||[],...g].filter(y=>y&&y.name&&y.score);m.sort((y,b)=>b.score-y.score);const u=m[0];u&&(window.__ARCADE_LEADERBOARDS__[p.id]={topScore:u.score,topPilot:String(u.name).replace(/[^a-zA-Z0-9]/g,"").toUpperCase().substring(0,3)||"MRC"})})}}catch(f){console.warn("Could not sync cloud records:",f)}}h()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Jc):Jc();
