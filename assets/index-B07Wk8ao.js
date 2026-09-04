var Bu=Object.defineProperty;var zu=(n,e,t)=>e in n?Bu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var uc=(n,e,t)=>zu(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Vu="modulepreload",Gu=function(n,e){return new URL(n,e).href},fc={},Or=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(t.map(h=>{if(h=Gu(h,i),h in fc)return;fc[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===h&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Vu,d||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},rr=JSON.parse(`[{"id":"neon-orbit-drift","name":"Neon Orbit Drift","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-orbit-drift/","description":"One-tap gravitational slingshot runner with harmonic chords & orbital drift physics.","tech":["Canvas 2D","Web Audio Synth","Physics"],"badgeClass":"btn-orbit"},{"id":"cyber-pinball-fx","name":"Cyber Pinball FX","icon":"⚡","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pinball-fx/","description":"High-speed neon arcade pinball table with multi-bumpers, chime feedback & dual flippers.","tech":["Canvas 2D","Bumper Physics","Audio FX"],"badgeClass":"btn-pinball"},{"id":"neon-katana-slash","name":"Neon Katana Slash (Fruit Ninja)","icon":"🍉","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/neon-katana-slash/","description":"Super juicy Fruit Ninja blade slicer! Swipe glowing blade trails to slice flying fruits and build massive combos.","tech":["Canvas 2D","Swipe Slicer","Fruit Combos"],"badgeClass":"btn-katana"},{"id":"cute-mini-golf","name":"Cute Mini Golf 3D","icon":"⛳","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cute-mini-golf/","description":"Nintendo-style mini golf with 3 kawaii golfers, 3D animated putters & authentic cup suction.","tech":["Three.js 3D","Cannon-es","Web Audio"],"badgeClass":"btn-golf"},{"id":"kawaii-8ball-pool","name":"Kawaii 8-Ball Pool","icon":"🎱","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/kawaii-8ball-pool/","description":"Super cute 8-ball pool where every ball has an animated kawaii face with squish physics.","tech":["Canvas 2D","2-Player","Squish Physics"],"badgeClass":"btn-pool"},{"id":"stickman-fps-arcade","name":"Stickman FPS Arcade","icon":"🔫","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/stickman-fps-arcade/","description":"Retro stationary bunker shooter with 5 weapons, shop upgrades and wave defense.","tech":["Canvas 2D","Shop Upgrades","Web Audio"],"badgeClass":"btn-fps"},{"id":"geometricsurvivor","name":"Geometric Survivor 3D","icon":"⚔️","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/geometricsurvivor/","description":"Megabonk-style 3D cartoon survivor on a floating island! 3 heroes (Sir Bonk, Pippin & Sparky), healing hearts, invincibility & speed buffs.","tech":["Three.js 3D","3 Heroes","Vampire Upgrades"],"badgeClass":"btn-geo"},{"id":"neon-drift-racer","name":"Neon Drift Racer","icon":"🏎️","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drift-racer/","description":"High-speed synthwave pseudo-3D highway racer with nitro boost and touch controls.","tech":["Canvas 3D Projection","Nitro System","Retro"],"badgeClass":"btn-racer"},{"id":"cyber-pong-3d","name":"Kawaii Table Tennis 3D","icon":"🏓","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pong-3d/","description":"Super cute 3D table tennis with Kawaii eye paddles, generous hitboxes, 1-to-1 mouse controls, bouncy ball physics & sweet audio FX.","tech":["Three.js 3D","Paddle Physics","Cute Audio"],"badgeClass":"btn-pong"},{"id":"neon-viper","name":"Neon Viper 3D","icon":"🐍","category":"arcade","unit":"MASS","url":"https://marcuscaiado.github.io/neon-viper/","description":"3D Snake.io cyber arena with 8 3D skins, 10+ smart AI bots, radar minimap, nitro boost & safe body coiling.","tech":["Three.js 3D","Snake.io Physics","8 Skins"],"badgeClass":"btn-viper"},{"id":"brick-breaker-fx","name":"Brick Breaker FX","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/brick-breaker-fx/","description":"Juice-packed neon breakout arcade game with multi-ball power-ups, paddle expansion & shatter physics.","tech":["Canvas 2D","Multi-Ball","Power-Ups"],"badgeClass":"btn-brick"},{"id":"sky-ace-1944","name":"Sky Ace 1944","icon":"🛩️","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/sky-ace-1944/","description":"Vertical retro WWII bullet-hell shooter with mega bombs, shields & quad spread.","tech":["Canvas 2D","Bullet Patterns","Boss Battles"],"badgeClass":"btn-sky"},{"id":"neon-drop-2048","name":"Neon Drop 2048","icon":"🧩","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drop-2048/","description":"Physics merge puzzle with glowing bouncy 2048 balls and satisfying pop chain reactions.","tech":["Canvas 2D","Circle Physics","Suika Merge"],"badgeClass":"btn-drop"},{"id":"asteroid-blitz","name":"Asteroid Blitz","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/asteroid-blitz/","description":"Classic vector space shooter with inertia physics, hyperspace warp & splitting rocks.","tech":["Canvas 2D Vector","Inertia Physics","Retro"],"badgeClass":"btn-asteroid"},{"id":"neon-tetris-3d","name":"Neon Cyber Tetris 3D","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-tetris-3d/","description":"Tetris Effect-style 3D falling tetrominoes in a holographic cyber matrix with laser line clears and popping glowing graphics.","tech":["Three.js 3D","Ghost Projection","Synth Audio","SRS Rotation"],"badgeClass":"btn-tetris"},{"id":"neon-archery-master","name":"Neon Archery Master","icon":"🎯","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/neon-archery-master/","description":"Precision bow archery with trajectory prediction, crosswinds & holographic targets.","tech":["Canvas 2D","Ballistics Math","Wind Physics"],"badgeClass":"btn-archery"},{"id":"neon-stack-3d","name":"Neon Stack Harmony 3D","icon":"🌌","category":"arcade","unit":"SLABS","url":"https://marcuscaiado.github.io/neon-stack-3d/","description":"3D block slicing tower stacking with soothing pentatonic synth chords.","tech":["Three.js 3D","Web Audio","Slicing Math"],"badgeClass":"btn-stack"},{"id":"neon-pachinko-pop","name":"Neon Pachinko Pop","icon":"🔮","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-pachinko-pop/","description":"Peggle-style bouncy pachinko drop with jackpot buckets and neon bumpers.","tech":["Canvas 2D","Peg Physics","Jackpot Zones"],"badgeClass":"btn-pachinko"},{"id":"cyber-runner-3d","name":"Cyber Runner 3D","icon":"🏃","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-runner-3d/","description":"Fast-paced synthwave 3-lane obstacle runner with jump mechanics and power-ups.","tech":["Canvas 3D","Perspective Math","Endless"],"badgeClass":"btn-runner"},{"id":"cyber-shuriken","name":"Cyber Shuriken Neo","icon":"🎯","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-shuriken/","description":"Rhythmic knife throwing into rotating boss matrices with harmonic chimes.","tech":["Canvas 2D","Rotational Math","Boss Waves"],"badgeClass":"btn-shuriken"},{"id":"flappy-cyber-droid","name":"Flappy Cyber Droid","icon":"🐦","category":"arcade","unit":"GATES","url":"https://marcuscaiado.github.io/flappy-cyber-droid/","description":"Addictive neon flapper arcade game featuring a hovering cyber-droid, laser gates & energy crystals.","tech":["Canvas 2D","One-Tap Flap","Laser Gates"],"badgeClass":"btn-droid"},{"id":"street-fighter-2","name":"Street Fighter II Turbo","icon":"🥊","category":"action","unit":"WINS","url":"https://marcuscaiado.github.io/street-fighter-2/","description":"Authentic Capcom arcade fighting! All 12 fighters, Turbo speed modes, Hadoukens, Shoryukens, and 60 FPS WebAssembly emulation.","tech":["WASM EmulatorJS","12 Fighters","Turbo Mode"],"badgeClass":"btn-fighter"},{"id":"super-mario","name":"Super Mario World","icon":"🍄","category":"retro","unit":"EXITS","url":"https://marcuscaiado.github.io/super-mario/","description":"The legendary Super Nintendo masterpiece! Ride Yoshi, soar with the magic cape, explore Dinosaur Land, and run in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Yoshi & Cape","96 Exits"],"badgeClass":"btn-mario"},{"id":"super-bomberman","name":"Super Bomberman","icon":"💣","category":"retro","unit":"WINS","url":"https://marcuscaiado.github.io/super-bomberman/","description":"The ultimate explosive party battle! Drop bombs, collect powerups, blast soft blocks, and battle across arenas in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Hudson Soft","Arena Battle"],"badgeClass":"btn-bomberman"},{"id":"gta-2","name":"Grand Theft Auto 2","icon":"🚗","category":"action","unit":"RESPECT","url":"https://marcuscaiado.github.io/gta-2/","description":"Rockstar's legendary top-down crime epic! Steal cars, outrun police, answer payphones, and rule the city in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Rockstar Games","Open World"],"badgeClass":"btn-gta"},{"id":"classic-doom","name":"Classic DOOM","icon":"🔥","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/classic-doom/","description":"The father of FPS! Rip and tear through phobos base with shotgun, chainsaw, rocket launcher and BFG9000 in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","id Software","FPS 60 FPS"],"badgeClass":"btn-doom"},{"id":"classic-pacman","name":"Pac-Man (1980 Classic Arcade)","icon":"🟡","category":"retro","unit":"PTS","url":"games/pacman/index.html","description":"The immortal 1980 Namco arcade classic! Chomp dots, dodge Blinky, Pinky, Inky & Clyde, grab Power Pellets and rack up high scores.","tech":["Canvas 2D","Namco 1980","Authentic Sound"],"badgeClass":"btn-pacman"},{"id":"sonic1","name":"Sonic The Hedgehog","icon":"🦔","category":"retro","unit":"RINGS","url":"games/sonic1/index.html","description":"Sega's supersonic blue blur! Blast through Green Hill Zone, collect gold rings and defeat Dr. Robotnik in 60 FPS WebAssembly.","tech":["WASM Sega Genesis","Sonic Team","60 FPS"],"badgeClass":"btn-sonic"},{"id":"sonic2","name":"Sonic The Hedgehog 2","icon":"🦊","category":"retro","unit":"RINGS","url":"games/sonic2/index.html","description":"The peak of 16-bit speed! Introducing Tails, the legendary Spin Dash Turbo, Chemical Plant Zone, and Super Sonic.","tech":["WASM Sega Genesis","Spin Dash","Sonic & Tails"],"badgeClass":"btn-sonic2"},{"id":"fzero","name":"F-Zero","icon":"🏎️","category":"retro","unit":"PTS","url":"games/fzero/index.html","description":"Nintendo's groundbreaking 1990 futuristic 400+ km/h Mode-7 hovercraft racer with Captain Falcon & the Blue Falcon.","tech":["WASM SNES Mode-7","Nintendo EAD","60 FPS"],"badgeClass":"btn-fzero"},{"id":"mk2","name":"Mortal Kombat II","icon":"🐉","category":"action","unit":"WINS","url":"games/mk2/index.html","description":"Midway's legendary arcade fighting sensation! Scorpion, Sub-Zero, Liu Kang, Shang Tsung, brutal Fatalities & Babalities.","tech":["WASM Sega Genesis","Midway Arcade","Fatalities"],"badgeClass":"btn-mk2"},{"id":"megaman2","name":"Mega Man 2","icon":"🤖","category":"retro","unit":"BOSSES","url":"games/megaman2/index.html","description":"Capcom's 8-bit platforming masterpiece! 8 Robot Masters, Metal Blade, Dr. Wily's Castle and the greatest NES soundtrack ever.","tech":["WASM NES","Capcom 1988","Chiptune Classic"],"badgeClass":"btn-megaman"},{"id":"outrun","name":"OutRun","icon":"🌴","category":"retro","unit":"CHECKPOINTS","url":"games/outrun/index.html","description":"Yu Suzuki's ultimate arcade driving fantasy! Cruise in the red Ferrari Testarossa with Magical Sound Shower on the radio.","tech":["WASM Sega Genesis","Yu Suzuki","Synthwave Classic"],"badgeClass":"btn-outrun"},{"id":"sor2","name":"Streets of Rage 2","icon":"💥","category":"action","unit":"KO","url":"games/sor2/index.html","description":"The crowned king of 90s beat-'em-ups! Axel, Blaze, Skate and Max brawl to Yuzo Koshiro's ground-shaking club house soundtrack.","tech":["WASM Sega Genesis","Yuzo Koshiro","4 Brawlers"],"badgeClass":"btn-sor2"},{"id":"topgear","name":"Top Gear","icon":"🏁","category":"retro","unit":"PTS","url":"games/topgear/index.html","description":"The sacred arcade racing holy grail! Hit the Nitro boost, screech around hairpin turns and blast Barry Leitch's immortal chiptune beats.","tech":["WASM SNES","Gremlin Graphics","Nitro Turbo"],"badgeClass":"btn-topgear"},{"id":"castlevania4","name":"Super Castlevania IV","icon":"🦇","category":"action","unit":"HEARTS","url":"games/castlevania4/index.html","description":"Konami's gothic 16-bit tour de force! 8-way directional whip swinging, rotating rooms, Mode-7 chandeliers and Dracula's legions.","tech":["WASM SNES","Konami 1991","8-Way Whip"],"badgeClass":"btn-castlevania"},{"id":"mslug","name":"Metal Slug (1996)","icon":"💥","category":"action","unit":"PTS","url":"games/mslug/index.html","description":"The immortal SNK Neo-Geo arcade run-and-gun! Blast General Morden's rebel forces with SV-001 tank, heavy machine gun, rocket launcher and rescue POWs.","tech":["WASM Neo-Geo","SNK Arcade","SV-001 Tank"],"badgeClass":"btn-mslug"},{"id":"mslugx","name":"Metal Slug X","icon":"💣","category":"action","unit":"PTS","url":"games/mslugx/index.html","description":"The super-upgraded Neo-Geo definitive edition! Laser guns, Iron Lizard, Super Grenades, alien invaders, mummies, and zero slowdowns at silky 60 FPS.","tech":["WASM Neo-Geo","SNK Arcade","Definitive Edition"],"badgeClass":"btn-mslugx"}]`);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zl="182",Hu=0,pc=1,Wu=2,kr=1,Xu=2,Us=3,Gn=0,qt=1,Ut=2,Bn=0,ns=1,mc=2,gc=3,_c=4,qu=5,_i=100,Yu=101,ju=102,$u=103,Ku=104,Zu=200,Ju=201,Qu=202,ef=203,Do=204,No=205,tf=206,nf=207,sf=208,rf=209,af=210,of=211,lf=212,cf=213,hf=214,Uo=0,Fo=1,Oo=2,as=3,ko=4,Bo=5,zo=6,Vo=7,cd=0,df=1,uf=2,En=0,hd=1,dd=2,ud=3,fd=4,pd=5,md=6,gd=7,_d=300,Ti=301,os=302,Go=303,Ho=304,la=306,zs=1e3,On=1001,Wo=1002,At=1003,ff=1004,ar=1005,St=1006,Ma=1007,vi=1008,Kt=1009,yd=1010,vd=1011,Vs=1012,Vl=1013,wn=1014,Sn=1015,Hn=1016,Gl=1017,Hl=1018,Gs=1020,Sd=35902,xd=35899,bd=1021,Ed=1022,rn=1023,Wn=1026,Si=1027,Md=1028,Wl=1029,ls=1030,Xl=1031,ql=1033,Br=33776,zr=33777,Vr=33778,Gr=33779,Xo=35840,qo=35841,Yo=35842,jo=35843,$o=36196,Ko=37492,Zo=37496,Jo=37488,Qo=37489,el=37490,tl=37491,nl=37808,il=37809,sl=37810,rl=37811,al=37812,ol=37813,ll=37814,cl=37815,hl=37816,dl=37817,ul=37818,fl=37819,pl=37820,ml=37821,gl=36492,_l=36494,yl=36495,vl=36283,Sl=36284,xl=36285,bl=36286,pf=3200,wd=0,mf=1,ni="",nn="srgb",cs="srgb-linear",$r="linear",mt="srgb",Li=7680,yc=519,gf=512,_f=513,yf=514,Yl=515,vf=516,Sf=517,jl=518,xf=519,El=35044,vc="300 es",xn=2e3,Kr=2001;function Td(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bf(){const n=Zr("canvas");return n.style.display="block",n}const Sc={};function Jr(...n){const e="THREE."+n.shift();console.log(e,...n)}function $e(...n){const e="THREE."+n.shift();console.warn(e,...n)}function ot(...n){const e="THREE."+n.shift();console.error(e,...n)}function Hs(...n){const e=n.join(" ");e in Sc||(Sc[e]=!0,$e(...n))}function Ef(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wa=Math.PI/180,Ml=180/Math.PI;function si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Mf(n,e){return(n%e+e)%e}function Ta(n,e,t){return(1-t)*n+t*e}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class js{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const T=Math.acos(m),R=Math.sin(T);p=Math.sin(p*T)/R,o=Math.sin(o*T)/R,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o;const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new Y,xc=new js;class Ze{constructor(e,t,i,s,r,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],R=s[4],S=s[7],x=s[2],M=s[5],L=s[8];return r[0]=a*_+o*T+l*x,r[3]=a*m+o*R+l*M,r[6]=a*p+o*S+l*L,r[1]=c*_+h*T+d*x,r[4]=c*m+h*R+d*M,r[7]=c*p+h*S+d*L,r[2]=u*_+f*T+g*x,r[5]=u*m+f*R+g*M,r[8]=u*p+f*S+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Ze,bc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){const n={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[cs]:{primaries:e,whitePoint:i,transfer:$r,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:bc,fromXYZ:Ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const lt=wf();function zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class Tf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ii===void 0&&(Ii=Zr("canvas")),Ii.width=e.width,Ii.height=e.height;const s=Ii.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ii}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zn(t[i]/255)*255):t[i]=zn(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Af=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ca(s[a].image)):r.push(Ca(s[a]))}else r=Ca(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Rf=0;const Pa=new Y;class Ft extends ps{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=On,s=On,r=St,a=vi,o=rn,l=Kt,c=Ft.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=si(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=_d;Ft.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,i=0,s=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,S=(f+1)/2,x=(p+1)/2,M=(h+u)/4,L=(d+_)/4,O=(g+m)/4;return R>S&&R>x?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=M/i,r=L/i):S>x?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=M/s,r=O/s):x<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),i=L/r,s=O/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(u-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cf extends ps{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Ft(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new $l(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Cf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ad extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pf extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),or.copy(i.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),lr.subVectors(this.max,ws),Di.subVectors(e.a,ws),Ni.subVectors(e.b,ws),Ui.subVectors(e.c,ws),jn.subVectors(Ni,Di),$n.subVectors(Ui,Ni),oi.subVectors(Di,Ui);let t=[0,-jn.z,jn.y,0,-$n.z,$n.y,0,-oi.z,oi.y,jn.z,0,-jn.x,$n.z,0,-$n.x,oi.z,0,-oi.x,-jn.y,jn.x,0,-$n.y,$n.x,0,-oi.y,oi.x,0];return!La(t,Di,Ni,Ui,lr)||(t=[1,0,0,0,1,0,0,0,1],!La(t,Di,Ni,Ui,lr))?!1:(cr.crossVectors(jn,$n),t=[cr.x,cr.y,cr.z],La(t,Di,Ni,Ui,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],cn=new Y,or=new $s,Di=new Y,Ni=new Y,Ui=new Y,jn=new Y,$n=new Y,oi=new Y,ws=new Y,lr=new Y,cr=new Y,li=new Y;function La(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){li.fromArray(n,r);const o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),h=i.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Lf=new $s,Ts=new Y,Ia=new Y;class Kl{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ts,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(Ia)),this.expandByPoint(Ts.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pn=new Y,Da=new Y,hr=new Y,Kn=new Y,Na=new Y,dr=new Y,Ua=new Y;class Rd{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Da.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Da);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hr),o=Kn.dot(this.direction),l=-Kn.dot(hr),c=Kn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Da).addScaledVector(hr,u),f}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),s=Pn.dot(Pn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,s,r){Na.subVectors(t,e),dr.subVectors(i,e),Ua.crossVectors(Na,dr);let a=this.direction.dot(Ua),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot(dr.crossVectors(Kn,dr));if(l<0)return null;const c=o*this.direction.dot(Na.cross(Kn));if(c<0||l+c>a)return null;const h=-o*Kn.dot(Ua);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(If,e,Df)}lookAt(e,t,i){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Zn.crossVectors(i,Yt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Zn.crossVectors(i,Yt)),Zn.normalize(),ur.crossVectors(Yt,Zn),s[0]=Zn.x,s[4]=ur.x,s[8]=Yt.x,s[1]=Zn.y,s[5]=ur.y,s[9]=Yt.y,s[2]=Zn.z,s[6]=ur.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],R=i[7],S=i[11],x=i[15],M=s[0],L=s[4],O=s[8],y=s[12],b=s[1],B=s[5],D=s[9],C=s[13],I=s[2],N=s[6],F=s[10],U=s[14],z=s[3],K=s[7],H=s[11],Q=s[15];return r[0]=a*M+o*b+l*I+c*z,r[4]=a*L+o*B+l*N+c*K,r[8]=a*O+o*D+l*F+c*H,r[12]=a*y+o*C+l*U+c*Q,r[1]=h*M+d*b+u*I+f*z,r[5]=h*L+d*B+u*N+f*K,r[9]=h*O+d*D+u*F+f*H,r[13]=h*y+d*C+u*U+f*Q,r[2]=g*M+_*b+m*I+p*z,r[6]=g*L+_*B+m*N+p*K,r[10]=g*O+_*D+m*F+p*H,r[14]=g*y+_*C+m*U+p*Q,r[3]=T*M+R*b+S*I+x*z,r[7]=T*L+R*B+S*N+x*K,r[11]=T*O+R*D+S*F+x*H,r[15]=T*y+R*C+S*U+x*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],T=l*f-c*u,R=o*f-c*d,S=o*u-l*d,x=a*f-c*h,M=a*u-l*h,L=a*d-o*h;return t*(_*T-m*R+p*S)-i*(g*T-m*x+p*M)+s*(g*R-_*x+p*L)-r*(g*S-_*M+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=d*m*c-_*u*c+_*l*f-o*m*f-d*l*p+o*u*p,R=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,S=h*_*c-g*d*c+g*o*f-a*_*f-h*o*p+a*d*p,x=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,M=t*T+i*R+s*S+r*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/M;return e[0]=T*L,e[1]=(_*u*r-d*m*r-_*s*f+i*m*f+d*s*p-i*u*p)*L,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*p+i*l*p)*L,e[3]=(d*l*r-o*u*r-d*s*c+i*u*c+o*s*f-i*l*f)*L,e[4]=R*L,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*L,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*L,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*L,e[8]=S*L,e[9]=(g*d*r-h*_*r-g*i*f+t*_*f+h*i*p-t*d*p)*L,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*p+t*o*p)*L,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*f-t*o*f)*L,e[12]=x*L,e[13]=(h*_*s-g*d*s+g*i*u-t*_*u-h*i*m+t*d*m)*L,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*L,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*u+t*o*u)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,T=l*c,R=l*h,S=l*d,x=i.x,M=i.y,L=i.z;return s[0]=(1-(_+p))*x,s[1]=(f+S)*x,s[2]=(g-R)*x,s[3]=0,s[4]=(f-S)*M,s[5]=(1-(u+p))*M,s[6]=(m+T)*M,s[7]=0,s[8]=(g+R)*L,s[9]=(m-T)*L,s[10]=(1-(u+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Fi.set(s[0],s[1],s[2]).length();const a=Fi.set(s[4],s[5],s[6]).length(),o=Fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),hn.copy(this);const c=1/r,h=1/a,d=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=xn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===xn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Kr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=xn,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===xn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Kr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fi=new Y,hn=new Et,If=new Y(0,0,0),Df=new Y(1,1,1),Zn=new Y,ur=new Y,Yt=new Y,Mc=new Et,wc=new js;class Tn{constructor(e=0,t=0,i=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nf=0;const Tc=new Y,Oi=new js,Ln=new Et,fr=new Y,As=new Y,Uf=new Y,Ff=new js,Ac=new Y(1,0,0),Rc=new Y(0,1,0),Cc=new Y(0,0,1),Pc={type:"added"},Of={type:"removed"},ki={type:"childadded",child:null},Fa={type:"childremoved",child:null};class Dt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new Y,t=new Tn,i=new js,s=new Y(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fr.copy(e):fr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(As,fr,this.up):Ln.lookAt(fr,As,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),ki.child=e,this.dispatchEvent(ki),ki.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Of),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new Y(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new Y,In=new Y,Oa=new Y,Dn=new Y,Bi=new Y,zi=new Y,Lc=new Y,ka=new Y,Ba=new Y,za=new Y,Va=new Tt,Ga=new Tt,Ha=new Tt;class sn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){dn.subVectors(s,t),In.subVectors(i,t),Oa.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(In),l=dn.dot(Oa),c=In.dot(In),h=In.dot(Oa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Va.setScalar(0),Ga.setScalar(0),Ha.setScalar(0),Va.fromBufferAttribute(e,t),Ga.fromBufferAttribute(e,i),Ha.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Va,r.x),a.addScaledVector(Ga,r.y),a.addScaledVector(Ha,r.z),a}static isFrontFacing(e,t,i,s){return dn.subVectors(i,t),In.subVectors(e,t),dn.cross(In).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Bi.subVectors(s,i),zi.subVectors(r,i),ka.subVectors(e,i);const l=Bi.dot(ka),c=zi.dot(ka);if(l<=0&&c<=0)return t.copy(i);Ba.subVectors(e,s);const h=Bi.dot(Ba),d=zi.dot(Ba);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Bi,a);za.subVectors(e,r);const f=Bi.dot(za),g=zi.dot(za);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(zi,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Lc.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Lc,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(i).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Wa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=Mf(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Wa(a,r,e+1/3),this.g=Wa(a,r,e),this.b=Wa(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function i(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Cd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return lt.workingToColorSpace(kt.copy(this),e),Math.round(rt(kt.r*255,0,255))*65536+Math.round(rt(kt.g*255,0,255))*256+Math.round(rt(kt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=nn){lt.workingToColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(pr);const i=Ta(Jn.h,pr.h,t),s=Ta(Jn.s,pr.s,t),r=Ta(Jn.l,pr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new at;at.NAMES=Cd;let kf=0;class ms extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=si(),this.name="",this.type="Material",this.blending=ns,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=No,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Do&&(i.blendSrc=this.blendSrc),this.blendDst!==No&&(i.blendDst=this.blendDst),this.blendEquation!==_i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vt extends ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new Y,mr=new Je;let Bf=0;class un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=El,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}}class Pd extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ld extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zf=0;const Qt=new Et,Xa=new Dt,Vi=new Y,jt=new $s,Rs=new $s,It=new Y;class Ht extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Td(e)?Ld:Pd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(jt.min,Rs.min),jt.expandByPoint(It),It.addVectors(jt.max,Rs.max),jt.expandByPoint(It)):(jt.expandByPoint(Rs.min),jt.expandByPoint(Rs.max))}jt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),It.add(Vi)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new Y,l[O]=new Y;const c=new Y,h=new Y,d=new Y,u=new Je,f=new Je,g=new Je,_=new Y,m=new Y;function p(O,y,b){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,b),u.fromBufferAttribute(r,O),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const B=1/(f.x*g.y-g.x*f.y);isFinite(B)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(B),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(B),o[O].add(_),o[y].add(_),o[b].add(_),l[O].add(m),l[y].add(m),l[b].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,y=T.length;O<y;++O){const b=T[O],B=b.start,D=b.count;for(let C=B,I=B+D;C<I;C+=3)p(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const R=new Y,S=new Y,x=new Y,M=new Y;function L(O){x.fromBufferAttribute(s,O),M.copy(x);const y=o[O];R.copy(y),R.sub(x.multiplyScalar(x.dot(y))).normalize(),S.crossVectors(M,y);const B=S.dot(l[O])<0?-1:1;a.setXYZW(O,R.x,R.y,R.z,B)}for(let O=0,y=T.length;O<y;++O){const b=T[O],B=b.start,D=b.count;for(let C=B,I=B+D;C<I;C+=3)L(e.getX(C+0)),L(e.getX(C+1)),L(e.getX(C+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new Y,r=new Y,a=new Y,o=new Y,l=new Y,c=new Y,h=new Y,d=new Y;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new un(u,h,d)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ic=new Et,ci=new Rd,gr=new Kl,Dc=new Y,_r=new Y,yr=new Y,vr=new Y,qa=new Y,Sr=new Y,Nc=new Y,xr=new Y;class Ce extends Dt{constructor(e=new Ht,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(qa.fromBufferAttribute(d,e),a?Sr.addScaledVector(qa,h):Sr.addScaledVector(qa.sub(t),h))}t.add(Sr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(gr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(gr,Dc)===null||ci.origin.distanceToSquared(Dc)>(e.far-e.near)**2))&&(Ic.copy(r).invert(),ci.copy(e.ray).applyMatrix4(Ic),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,x=R;S<x;S+=3){const M=o.getX(S),L=o.getX(S+1),O=o.getX(S+2);s=br(this,p,e,i,c,h,d,M,L,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=o.getX(m),R=o.getX(m+1),S=o.getX(m+2);s=br(this,a,e,i,c,h,d,T,R,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,x=R;S<x;S+=3){const M=S,L=S+1,O=S+2;s=br(this,p,e,i,c,h,d,M,L,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,R=m+1,S=m+2;s=br(this,a,e,i,c,h,d,T,R,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Vf(n,e,t,i,s,r,a,o){let l;if(e.side===qt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Gn,o),l===null)return null;xr.copy(o),xr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xr);return c<t.near||c>t.far?null:{distance:c,point:xr.clone(),object:n}}function br(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,_r),n.getVertexPosition(l,yr),n.getVertexPosition(c,vr);const h=Vf(n,e,t,i,_r,yr,vr,Nc);if(h){const d=new Y;sn.getBarycoord(Nc,_r,yr,vr,d),s&&(h.uv=sn.getInterpolatedAttribute(s,o,l,c,d,new Je)),r&&(h.uv1=sn.getInterpolatedAttribute(r,o,l,c,d,new Je)),a&&(h.normal=sn.getInterpolatedAttribute(a,o,l,c,d,new Y),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new Y,materialIndex:0};sn.getNormal(_r,yr,vr,u.normal),h.face=u,h.barycoord=d}return h}class gt extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(d,2));function g(_,m,p,T,R,S,x,M,L,O,y){const b=S/L,B=x/O,D=S/2,C=x/2,I=M/2,N=L+1,F=O+1;let U=0,z=0;const K=new Y;for(let H=0;H<F;H++){const Q=H*B-C;for(let te=0;te<N;te++){const de=te*b-D;K[_]=de*T,K[m]=Q*R,K[p]=I,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=M>0?1:-1,h.push(K.x,K.y,K.z),d.push(te/L),d.push(1-H/O),U+=1}}for(let H=0;H<O;H++)for(let Q=0;Q<L;Q++){const te=u+Q+N*H,de=u+Q+N*(H+1),ye=u+(Q+1)+N*(H+1),_e=u+(Q+1)+N*H;l.push(te,de,_e),l.push(de,ye,_e),z+=6}o.addGroup(f,z,y),f+=z,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=hs(n[t]);for(const s in i)e[s]=i[s]}return e}function Gf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Id(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Hf={clone:hs,merge:Vt};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dd extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new Y,Uc=new Je,Fc=new Je;class $t extends Dd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Uc,Fc),t.subVectors(Fc,Uc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Hi=1;class qf extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $t(Gi,Hi,e,t);s.layers=this.layers,this.add(s);const r=new $t(Gi,Hi,e,t);r.layers=this.layers,this.add(r);const a=new $t(Gi,Hi,e,t);a.layers=this.layers,this.add(a);const o=new $t(Gi,Hi,e,t);o.layers=this.layers,this.add(o);const l=new $t(Gi,Hi,e,t);l.layers=this.layers,this.add(l);const c=new $t(Gi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Nd extends Ft{constructor(e=[],t=Ti,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ud extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Nd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gt(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Bn});r.uniforms.tEquirect.value=t;const a=new Ce(s,r),o=t.minFilter;return t.minFilter===vi&&(t.minFilter=St),new qf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class bn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yf={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Jl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new at(e),this.near=t,this.far=i}clone(){return new Jl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jf extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $f{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new Y;class Qr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=yn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ds extends ms{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wi;const Cs=new Y,Xi=new Y,qi=new Y,Yi=new Je,Ps=new Je,Fd=new Et,Er=new Y,Ls=new Y,Mr=new Y,Oc=new Je,ja=new Je,kc=new Je;class Ws extends Dt{constructor(e=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $f(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Qr(i,3,0,!1)),Wi.setAttribute("uv",new Qr(i,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new Je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Fd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;wr(Er.set(-.5,-.5,0),qi,a,Xi,s,r),wr(Ls.set(.5,-.5,0),qi,a,Xi,s,r),wr(Mr.set(.5,.5,0),qi,a,Xi,s,r),Oc.set(0,0),ja.set(1,0),kc.set(1,1);let o=e.ray.intersectTriangle(Er,Ls,Mr,!1,Cs);if(o===null&&(wr(Ls.set(-.5,.5,0),qi,a,Xi,s,r),ja.set(0,1),o=e.ray.intersectTriangle(Er,Mr,Ls,!1,Cs),o===null))return;const l=e.ray.origin.distanceTo(Cs);l<e.near||l>e.far||t.push({distance:l,point:Cs.clone(),uv:sn.getInterpolation(Cs,Er,Ls,Mr,Oc,ja,kc,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function wr(n,e,t,i,s,r){Yi.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ps.x=r*Yi.x-s*Yi.y,Ps.y=s*Yi.x+r*Yi.y):Ps.copy(Yi),n.copy(e),n.x+=Ps.x,n.y+=Ps.y,n.applyMatrix4(Fd)}class Kf extends Ft{constructor(e=null,t=1,i=1,s,r,a,o,l,c=At,h=At,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $a=new Y,Zf=new Y,Jf=new Ze;class mi{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$a.subVectors(i,t).cross(Zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($a),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jf.getNormalMatrix(e),s=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Kl,Qf=new Je(.5,.5),Tr=new Y;class Ql{constructor(e=new mi,t=new mi,i=new mi,s=new mi,r=new mi,a=new mi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],T=r[12],R=r[13],S=r[14],x=r[15];if(s[0].setComponents(c-a,f-h,p-g,x-T).normalize(),s[1].setComponents(c+a,f+h,p+g,x+T).normalize(),s[2].setComponents(c+o,f+d,p+_,x+R).normalize(),s[3].setComponents(c-o,f-d,p-_,x-R).normalize(),i)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,f-u,p-m,x-S).normalize();else if(s[4].setComponents(c-l,f-u,p-m,x-S).normalize(),t===xn)s[5].setComponents(c+l,f+u,p+m,x+S).normalize();else if(t===Kr)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);const t=Qf.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Tr.x=s.normal.x>0?e.max.x:e.min.x,Tr.y=s.normal.y>0?e.max.y:e.min.y,Tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ep extends Ft{constructor(e,t,i,s,r=St,a=St,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class an extends Ft{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xs extends Ft{constructor(e,t,i=wn,s,r,a,o=At,l=At,c,h=Wn,d=1){if(h!==Wn&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tp extends Xs{constructor(e,t=wn,i=Ti,s,r,a=At,o=At,l,c=Wn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Od extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ca extends Ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new Y,h=new Je;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(o,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Zt extends Ht{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=i/2;let p=0;T(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(f,2));function T(){const S=new Y,x=new Y;let M=0;const L=(t-e)/i;for(let O=0;O<=r;O++){const y=[],b=O/r,B=b*(t-e)+e;for(let D=0;D<=s;D++){const C=D/s,I=C*l+o,N=Math.sin(I),F=Math.cos(I);x.x=B*N,x.y=-b*i+m,x.z=B*F,d.push(x.x,x.y,x.z),S.set(N,L,F).normalize(),u.push(S.x,S.y,S.z),f.push(C,1-b),y.push(g++)}_.push(y)}for(let O=0;O<s;O++)for(let y=0;y<r;y++){const b=_[y][O],B=_[y+1][O],D=_[y+1][O+1],C=_[y][O+1];(e>0||y!==0)&&(h.push(b,B,C),M+=3),(t>0||y!==r-1)&&(h.push(B,D,C),M+=3)}c.addGroup(p,M,0),p+=M}function R(S){const x=g,M=new Je,L=new Y;let O=0;const y=S===!0?e:t,b=S===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),g++;const B=g;for(let D=0;D<=s;D++){const I=D/s*l+o,N=Math.cos(I),F=Math.sin(I);L.x=y*F,L.y=m*b,L.z=y*N,d.push(L.x,L.y,L.z),u.push(0,b,0),M.x=N*.5+.5,M.y=F*.5*b+.5,f.push(M.x,M.y),g++}for(let D=0;D<s;D++){const C=x+D,I=B+D;S===!0?h.push(I,I+1,C):h.push(I+1,I,C),O+=3}c.addGroup(p,O,S===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class on extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*u-a;for(let R=0;R<c;R++){const S=R*d-r;g.push(S,-T,0),_.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const R=T+c*p,S=T+c*(p+1),x=T+1+c*(p+1),M=T+1+c*p;f.push(R,S,M),f.push(S,x,M)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.widthSegments,e.heightSegments)}}class ri extends Ht{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/s,f=new Y,g=new Je;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const T=p+m,R=T,S=T+i+1,x=T+i+2,M=T+1;o.push(R,S,M),o.push(S,x,M)}}this.setIndex(o),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ai extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new Y,u=new Y,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const T=[],R=p/i;let S=0;p===0&&a===0?S=.5/t:p===i&&l===Math.PI&&(S=-.5/t);for(let x=0;x<=t;x++){const M=x/t;d.x=-e*Math.cos(s+M*r)*Math.sin(a+R*o),d.y=e*Math.cos(a+R*o),d.z=e*Math.sin(s+M*r)*Math.sin(a+R*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(M+S,1-R),T.push(c++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const R=h[p][T+1],S=h[p][T],x=h[p+1][T],M=h[p+1][T+1];(p!==0||a>0)&&f.push(R,S,M),(p!==i-1||l<Math.PI)&&f.push(S,x,M)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ec extends Ht{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new Y,d=new Y,u=new Y;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;a.push(_,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class np extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wt extends ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ip extends ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sp extends ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ha extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class rp extends ha{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ka=new Et,Bc=new Y,zc=new Y;class kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ql,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bc),zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zc),t.updateMatrixWorld(),Ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ap extends kd{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}}class Za extends ha{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class tc extends Dd{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class op extends kd{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vc extends ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new op}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class lp extends ha{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class cp extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Gc=new Et;class dp{constructor(e,t,i=0,s=1/0){this.ray=new Rd(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(e,t=!0,i=[]){return wl(e,this,i,t),i.sort(Hc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)wl(e[s],this,i,t);return i.sort(Hc),i}}function Hc(n,e){return n.distance-e.distance}function wl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)wl(r[a],e,t,!0)}}function Wc(n,e,t,i){const s=up(i);switch(t){case bd:return n*e;case Md:return n*e/s.components*s.byteLength;case Wl:return n*e/s.components*s.byteLength;case ls:return n*e*2/s.components*s.byteLength;case Xl:return n*e*2/s.components*s.byteLength;case Ed:return n*e*3/s.components*s.byteLength;case rn:return n*e*4/s.components*s.byteLength;case ql:return n*e*4/s.components*s.byteLength;case Br:case zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vr:case Gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:case jo:return Math.max(n,16)*Math.max(e,8)/4;case Xo:case Yo:return Math.max(n,8)*Math.max(e,8)/2;case $o:case Ko:case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zo:case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gl:case _l:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vl:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xl:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function up(n){switch(n){case Kt:case yd:return{byteLength:1,components:1};case Vs:case vd:case Hn:return{byteLength:2,components:1};case Gl:case Hl:return{byteLength:2,components:4};case wn:case Vl:case Sn:return{byteLength:4,components:1};case Sd:case xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fp(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
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
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sp=`#ifdef USE_AOMAP
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
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
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
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Op=`#define PI 3.141592653589793
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
} // validated`,kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,um=`uniform sampler2D dfgLUT;
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
}`,fm=`
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fm=`#ifdef USE_NORMALMAP
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
#endif`,Om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jm=`float getShadowMask() {
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
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,t0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`#include <common>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
}`,x0=`#define DISTANCE
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
}`,b0=`#define DISTANCE
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,T0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#define LAMBERT
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
}`,P0=`#define LAMBERT
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
}`,L0=`#define MATCAP
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
}`,I0=`#define MATCAP
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
}`,D0=`#define NORMAL
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
}`,N0=`#define NORMAL
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
}`,U0=`#define PHONG
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
}`,F0=`#define PHONG
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
}`,O0=`#define STANDARD
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
}`,k0=`#define STANDARD
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
}`,B0=`#define TOON
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
}`,z0=`#define TOON
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
}`,V0=`uniform float size;
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
}`,G0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,W0=`uniform vec3 color;
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
}`,X0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:_p,alphatest_fragment:yp,alphatest_pars_fragment:vp,aomap_fragment:Sp,aomap_pars_fragment:xp,batching_pars_vertex:bp,batching_vertex:Ep,begin_vertex:Mp,beginnormal_vertex:wp,bsdfs:Tp,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Ip,color_fragment:Dp,color_pars_fragment:Np,color_pars_vertex:Up,color_vertex:Fp,common:Op,cube_uv_reflection_fragment:kp,defaultnormal_vertex:Bp,displacementmap_pars_vertex:zp,displacementmap_vertex:Vp,emissivemap_fragment:Gp,emissivemap_pars_fragment:Hp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:qp,envmap_common_pars_fragment:Yp,envmap_pars_fragment:jp,envmap_pars_vertex:$p,envmap_physical_pars_fragment:am,envmap_vertex:Kp,fog_vertex:Zp,fog_pars_vertex:Jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:dm,lights_physical_pars_fragment:um,lights_fragment_begin:fm,lights_fragment_maps:pm,lights_fragment_end:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:vm,map_fragment:Sm,map_pars_fragment:xm,map_particle_fragment:bm,map_particle_pars_fragment:Em,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:wm,morphinstance_vertex:Tm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Pm,normal_fragment_begin:Lm,normal_fragment_maps:Im,normal_pars_fragment:Dm,normal_pars_vertex:Nm,normal_vertex:Um,normalmap_pars_fragment:Fm,clearcoat_normal_fragment_begin:Om,clearcoat_normal_fragment_maps:km,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:zm,opaque_fragment:Vm,packing:Gm,premultiplied_alpha_fragment:Hm,project_vertex:Wm,dithering_fragment:Xm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:Km,shadowmap_vertex:Zm,shadowmask_pars_fragment:Jm,skinbase_vertex:Qm,skinning_pars_vertex:e0,skinning_vertex:t0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:s0,tonemapping_fragment:r0,tonemapping_pars_fragment:a0,transmission_fragment:o0,transmission_pars_fragment:l0,uv_pars_fragment:c0,uv_pars_vertex:h0,uv_vertex:d0,worldpos_vertex:u0,background_vert:f0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:_0,cube_frag:y0,depth_vert:v0,depth_frag:S0,distance_vert:x0,distance_frag:b0,equirect_vert:E0,equirect_frag:M0,linedashed_vert:w0,linedashed_frag:T0,meshbasic_vert:A0,meshbasic_frag:R0,meshlambert_vert:C0,meshlambert_frag:P0,meshmatcap_vert:L0,meshmatcap_frag:I0,meshnormal_vert:D0,meshnormal_frag:N0,meshphong_vert:U0,meshphong_frag:F0,meshphysical_vert:O0,meshphysical_frag:k0,meshtoon_vert:B0,meshtoon_frag:z0,points_vert:V0,points_frag:G0,shadow_vert:H0,shadow_frag:W0,sprite_vert:X0,sprite_frag:q0},Ae={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},_n={basic:{uniforms:Vt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Vt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Vt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Vt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Vt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new at(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Vt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Vt([Ae.points,Ae.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Vt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Vt([Ae.common,Ae.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Vt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Vt([Ae.sprite,Ae.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Vt([Ae.common,Ae.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Vt([Ae.lights,Ae.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};_n.physical={uniforms:Vt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ar={r:0,b:0,g:0},di=new Tn,Y0=new Et;function j0(n,e,t,i,s,r,a){const o=new at(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(R){let S=R.isScene===!0?R.background:null;return S&&S.isTexture&&(S=(R.backgroundBlurriness>0?t:e).get(S)),S}function _(R){let S=!1;const x=g(R);x===null?p(o,l):x&&x.isColor&&(p(x,1),S=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===la)?(h===void 0&&(h=new Ce(new gt(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:hs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),di.copy(S.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(di)),h.material.toneMapped=lt.getTransfer(x.colorSpace)!==mt,(d!==x||u!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ce(new on(2,2),new An({name:"BackgroundMaterial",uniforms:hs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=lt.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function p(R,S){R.getRGB(Ar,Id(n)),i.buffers.color.setClear(Ar.r,Ar.g,Ar.b,S,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,S=1){o.set(R),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,p(o,l)},render:_,addToRenderList:m,dispose:T}}function $0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(b,B,D,C,I){let N=!1;const F=d(C,D,B);r!==F&&(r=F,c(r.object)),N=f(b,C,D,I),N&&g(b,C,D,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,S(b,B,D,C),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,B,D){const C=D.wireframe===!0;let I=i[b.id];I===void 0&&(I={},i[b.id]=I);let N=I[B.id];N===void 0&&(N={},I[B.id]=N);let F=N[C];return F===void 0&&(F=u(l()),N[C]=F),F}function u(b){const B=[],D=[],C=[];for(let I=0;I<t;I++)B[I]=0,D[I]=0,C[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:D,attributeDivisors:C,object:b,attributes:{},index:null}}function f(b,B,D,C){const I=r.attributes,N=B.attributes;let F=0;const U=D.getAttributes();for(const z in U)if(U[z].location>=0){const H=I[z];let Q=N[z];if(Q===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),H===void 0||H.attribute!==Q||Q&&H.data!==Q.data)return!0;F++}return r.attributesNum!==F||r.index!==C}function g(b,B,D,C){const I={},N=B.attributes;let F=0;const U=D.getAttributes();for(const z in U)if(U[z].location>=0){let H=N[z];H===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(H=b.instanceColor));const Q={};Q.attribute=H,H&&H.data&&(Q.data=H.data),I[z]=Q,F++}r.attributes=I,r.attributesNum=F,r.index=C}function _(){const b=r.newAttributes;for(let B=0,D=b.length;B<D;B++)b[B]=0}function m(b){p(b,0)}function p(b,B){const D=r.newAttributes,C=r.enabledAttributes,I=r.attributeDivisors;D[b]=1,C[b]===0&&(n.enableVertexAttribArray(b),C[b]=1),I[b]!==B&&(n.vertexAttribDivisor(b,B),I[b]=B)}function T(){const b=r.newAttributes,B=r.enabledAttributes;for(let D=0,C=B.length;D<C;D++)B[D]!==b[D]&&(n.disableVertexAttribArray(D),B[D]=0)}function R(b,B,D,C,I,N,F){F===!0?n.vertexAttribIPointer(b,B,D,I,N):n.vertexAttribPointer(b,B,D,C,I,N)}function S(b,B,D,C){_();const I=C.attributes,N=D.getAttributes(),F=B.defaultAttributeValues;for(const U in N){const z=N[U];if(z.location>=0){let K=I[U];if(K===void 0&&(U==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),U==="instanceColor"&&b.instanceColor&&(K=b.instanceColor)),K!==void 0){const H=K.normalized,Q=K.itemSize,te=e.get(K);if(te===void 0)continue;const de=te.buffer,ye=te.type,_e=te.bytesPerElement,q=ye===n.INT||ye===n.UNSIGNED_INT||K.gpuType===Vl;if(K.isInterleavedBufferAttribute){const Z=K.data,ie=Z.stride,he=K.offset;if(Z.isInstancedInterleavedBuffer){for(let se=0;se<z.locationSize;se++)p(z.location+se,Z.meshPerAttribute);b.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let se=0;se<z.locationSize;se++)m(z.location+se);n.bindBuffer(n.ARRAY_BUFFER,de);for(let se=0;se<z.locationSize;se++)R(z.location+se,Q/z.locationSize,ye,H,ie*_e,(he+Q/z.locationSize*se)*_e,q)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)p(z.location+Z,K.meshPerAttribute);b.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<z.locationSize;Z++)m(z.location+Z);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Z=0;Z<z.locationSize;Z++)R(z.location+Z,Q/z.locationSize,ye,H,Q*_e,Q/z.locationSize*Z*_e,q)}}else if(F!==void 0){const H=F[U];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(z.location,H);break;case 3:n.vertexAttrib3fv(z.location,H);break;case 4:n.vertexAttrib4fv(z.location,H);break;default:n.vertexAttrib1fv(z.location,H)}}}}T()}function x(){O();for(const b in i){const B=i[b];for(const D in B){const C=B[D];for(const I in C)h(C[I].object),delete C[I];delete B[D]}delete i[b]}}function M(b){if(i[b.id]===void 0)return;const B=i[b.id];for(const D in B){const C=B[D];for(const I in C)h(C[I].object),delete C[I];delete B[D]}delete i[b.id]}function L(b){for(const B in i){const D=i[B];if(D[b.id]===void 0)continue;const C=D[b.id];for(const I in C)h(C[I].object),delete C[I];delete D[b.id]}}function O(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:y,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function K0(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Z0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==rn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const O=L===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Kt&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Sn&&!O)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&($e("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:S,maxSamples:x,samples:M}}function J0(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new mi,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:i,R=T*4;let S=p.clippingState||null;l.value=S,S=h(g,u,R,f);for(let x=0;x!==R;++x)S[x]=t[x];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,S=f;R!==_;++R,S+=4)a.copy(d[R]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Q0(n){let e=new WeakMap;function t(a,o){return o===Go?a.mapping=Ti:o===Ho&&(a.mapping=os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Go||o===Ho)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ud(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ii=4,Xc=[.125,.215,.35,.446,.526,.582],yi=20,eg=256,Is=new tc,qc=new at;let Ja=null,Qa=0,eo=0,to=!1;const tg=new Y;class Yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=tg}=r;Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Qa,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:Hn,format:rn,colorSpace:cs,depthBuffer:!1},s=jc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ng(r)),this._blurMaterial=sg(r,e,t),this._ggxMaterial=ig(r,e,t)}return s}_compileMaterial(e){const t=new Ce(new Ht,e);this._renderer.compile(t,Is)}_sceneToCubeUV(e,t,i,s,r){const l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(qc),d.toneMapping=En,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ce(new gt,new vt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(qc),p=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):S===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));const x=this._cubeSize;ji(s,S*x,R>2?x:0,x,x),d.setRenderTarget(s),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ti||e.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ji(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Is)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-ii?i-g+ii:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ji(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Is),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ji(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Is)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):yi;m>yi&&$e(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const p=[];let T=0;for(let L=0;L<yi;++L){const O=L/_,y=Math.exp(-O*O/2);p.push(y),L===0?T+=y:L<m&&(T+=2*y)}for(let L=0;L<p.length;L++)p[L]=p[L]/T;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:R}=this;u.dTheta.value=g,u.mipInt.value=R-i;const S=this._sizeLods[s],x=3*S*(s>R-ii?s-R+ii:0),M=4*(this._cubeSize-S);ji(t,x,M,3*S,2*S),l.setRenderTarget(t),l.render(d,Is)}}function ng(n){const e=[],t=[],i=[];let s=n;const r=n-ii+1+Xc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ii?l=Xc[a-n+ii-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),R=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let M=0;M<f;M++){const L=M%3*2/3-1,O=M>2?0:-1,y=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];T.set(y,_*g*M),R.set(u,m*g*M);const b=[M,M,M,M,M,M];S.set(b,p*g*M)}const x=new Ht;x.setAttribute("position",new un(T,_)),x.setAttribute("uv",new un(R,m)),x.setAttribute("faceIndex",new un(S,p)),i.push(new Ce(x,null)),s>ii&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function jc(n,e,t){const i=new Mn(n,e,t);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ji(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ig(n,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:da(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function sg(n,e,t){const i=new Float32Array(yi),s=new Y(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:da(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function $c(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Kc(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function da(){return`

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
	`}function rg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Go||l===Ho,h=l===Ti||l===os;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Yc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Yc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ag(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Hs("WebGLRenderer: "+i+" extension not supported."),s}}}function og(n,e,t,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let R=0,S=T.length;R<S;R+=3){const x=T[R+0],M=T[R+1],L=T[R+2];u.push(x,M,M,L,L,x)}}else if(g!==void 0){const T=g.array;_=g.version;for(let R=0,S=T.length/3-1;R<S;R+=3){const x=R+0,M=R+1,L=R+2;u.push(x,M,M,L,L,x)}}else return;const m=new(Td(u)?Ld:Pd)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function lg(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*a,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function cg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hg(n,e,t){const i=new WeakMap,s=new Tt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let y=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let R=0;f===!0&&(R=1),g===!0&&(R=2),_===!0&&(R=3);let S=o.attributes.position.count*R,x=1;S>e.maxTextureSize&&(x=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const M=new Float32Array(S*x*4*d),L=new Ad(M,S,x,d);L.type=Sn,L.needsUpdate=!0;const O=R*4;for(let b=0;b<d;b++){const B=m[b],D=p[b],C=T[b],I=S*x*4*b;for(let N=0;N<B.count;N++){const F=N*O;f===!0&&(s.fromBufferAttribute(B,N),M[I+F+0]=s.x,M[I+F+1]=s.y,M[I+F+2]=s.z,M[I+F+3]=0),g===!0&&(s.fromBufferAttribute(D,N),M[I+F+4]=s.x,M[I+F+5]=s.y,M[I+F+6]=s.z,M[I+F+7]=0),_===!0&&(s.fromBufferAttribute(C,N),M[I+F+8]=s.x,M[I+F+9]=s.y,M[I+F+10]=s.z,M[I+F+11]=C.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new Je(S,x)},i.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function dg(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const ug={[hd]:"LINEAR_TONE_MAPPING",[dd]:"REINHARD_TONE_MAPPING",[ud]:"CINEON_TONE_MAPPING",[fd]:"ACES_FILMIC_TONE_MAPPING",[md]:"AGX_TONE_MAPPING",[gd]:"NEUTRAL_TONE_MAPPING",[pd]:"CUSTOM_TONE_MAPPING"};function fg(n,e,t,i,s){const r=new Mn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),a=new Mn(e,t,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),o=new Ht;o.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Mt([0,2,0,0,2,0],2));const l=new np({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ce(o,l),h=new tc(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(T,R){r.setSize(T,R),a.setSize(T,R);for(let S=0;S<m.length;S++){const x=m[S];x.setSize&&x.setSize(T,R)}},this.setEffects=function(T){m=T,p=m.length>0&&m[0].isRenderPass===!0;const R=r.width,S=r.height;for(let x=0;x<m.length;x++){const M=m[x];M.setSize&&M.setSize(R,S)}},this.begin=function(T,R){if(f||T.toneMapping===En&&m.length===0)return!1;if(_=R,R!==null){const S=R.width,x=R.height;(r.width!==S||r.height!==x)&&this.setSize(S,x)}return p===!1&&T.setRenderTarget(r),g=T.toneMapping,T.toneMapping=En,!0},this.hasRenderPass=function(){return p},this.end=function(T,R){T.toneMapping=g,f=!0;let S=r,x=a;for(let M=0;M<m.length;M++){const L=m[M];if(L.enabled!==!1&&(L.render(T,x,S,R),L.needsSwap!==!1)){const O=S;S=x,x=O}}if(d!==T.outputColorSpace||u!==T.toneMapping){d=T.outputColorSpace,u=T.toneMapping,l.defines={},lt.getTransfer(d)===mt&&(l.defines.SRGB_TRANSFER="");const M=ug[u];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,T.setRenderTarget(_),T.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const zd=new Ft,Tl=new Xs(1,1),Vd=new Ad,Gd=new Pf,Hd=new Nd,Zc=[],Jc=[],Qc=new Float32Array(16),eh=new Float32Array(9),th=new Float32Array(4);function gs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zc[s];if(r===void 0&&(r=new Float32Array(s),Zc[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ua(n,e){let t=Jc[e];t===void 0&&(t=new Int32Array(e),Jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;th.set(i),n.uniformMatrix2fv(this.addr,!1,th),Lt(t,i)}}function vg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;eh.set(i),n.uniformMatrix3fv(this.addr,!1,eh),Lt(t,i)}}function Sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),Lt(t,i)}}function xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function Cg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Tl.compareFunction=t.isReversedDepthBuffer()?jl:Yl,r=Tl):r=zd,t.setTexture2D(e||r,s)}function Pg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gd,s)}function Lg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Hd,s)}function Ig(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Vd,s)}function Dg(n){switch(n){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return yg;case 35675:return vg;case 35676:return Sg;case 5124:case 35670:return xg;case 35667:case 35671:return bg;case 35668:case 35672:return Eg;case 35669:case 35673:return Mg;case 5125:return wg;case 36294:return Tg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Ng(n,e){n.uniform1fv(this.addr,e)}function Ug(n,e){const t=gs(e,this.size,2);n.uniform2fv(this.addr,t)}function Fg(n,e){const t=gs(e,this.size,3);n.uniform3fv(this.addr,t)}function Og(n,e){const t=gs(e,this.size,4);n.uniform4fv(this.addr,t)}function kg(n,e){const t=gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bg(n,e){const t=gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zg(n,e){const t=gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vg(n,e){n.uniform1iv(this.addr,e)}function Gg(n,e){n.uniform2iv(this.addr,e)}function Hg(n,e){n.uniform3iv(this.addr,e)}function Wg(n,e){n.uniform4iv(this.addr,e)}function Xg(n,e){n.uniform1uiv(this.addr,e)}function qg(n,e){n.uniform2uiv(this.addr,e)}function Yg(n,e){n.uniform3uiv(this.addr,e)}function jg(n,e){n.uniform4uiv(this.addr,e)}function $g(n,e,t){const i=this.cache,s=e.length,r=ua(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Tl:a=zd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Kg(n,e,t){const i=this.cache,s=e.length,r=ua(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gd,r[a])}function Zg(n,e,t){const i=this.cache,s=e.length,r=ua(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Hd,r[a])}function Jg(n,e,t){const i=this.cache,s=e.length,r=ua(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Vd,r[a])}function Qg(n){switch(n){case 5126:return Ng;case 35664:return Ug;case 35665:return Fg;case 35666:return Og;case 35674:return kg;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}class e_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}}class t_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qg(t.type)}}class n_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const no=/(\w+)(\])?(\[|\.)?/g;function nh(n,e){n.seq.push(e),n.map[e.id]=e}function i_(n,e,t){const i=n.name,s=i.length;for(no.lastIndex=0;;){const r=no.exec(i),a=no.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nh(t,c===void 0?new e_(o,n,e):new t_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new n_(o),nh(t,d)),t=d}}}class Hr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);i_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ih(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const s_=37297;let r_=0;function a_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const sh=new Ze;function o_(n){lt._getMatrix(sh,lt.workingColorSpace,n);const e=`mat3( ${sh.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case $r:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+a_(n.getShaderSource(e),o)}else return r}function l_(n,e){const t=o_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const c_={[hd]:"Linear",[dd]:"Reinhard",[ud]:"Cineon",[fd]:"ACESFilmic",[md]:"AgX",[gd]:"Neutral",[pd]:"Custom"};function h_(n,e){const t=c_[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rr=new Y;function d_(){lt.getLuminanceCoefficients(Rr);const n=Rr.x.toFixed(4),e=Rr.y.toFixed(4),t=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function f_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function p_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Fs(n){return n!==""}function ah(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(m_,__)}const g_=new Map;function __(n,e){let t=et[e];if(t===void 0){const i=g_.get(e);if(i!==void 0)t=et[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(n){return n.replace(y_,v_)}function v_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const S_={[kr]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function x_(n){return S_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const b_={[Ti]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE_UV"};function E_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":b_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const M_={[os]:"ENVMAP_MODE_REFRACTION"};function w_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":M_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const T_={[cd]:"ENVMAP_BLENDING_MULTIPLY",[df]:"ENVMAP_BLENDING_MIX",[uf]:"ENVMAP_BLENDING_ADD"};function A_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":T_[n.combine]||"ENVMAP_BLENDING_NONE"}function R_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function C_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=x_(t),c=E_(t),h=w_(t),d=A_(t),u=R_(t),f=u_(t),g=f_(r),_=s.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(m=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?et.tonemapping_pars_fragment:"",t.toneMapping!==En?h_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,l_("linearToOutputTexel",t.outputColorSpace),d_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),a=Al(a),a=ah(a,t),a=oh(a,t),o=Al(o),o=ah(o,t),o=oh(o,t),a=lh(a),o=lh(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=T+m+a,S=T+p+o,x=ih(s,s.VERTEX_SHADER,R),M=ih(s,s.FRAGMENT_SHADER,S);s.attachShader(_,x),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(B){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",C=s.getShaderInfoLog(x)||"",I=s.getShaderInfoLog(M)||"",N=D.trim(),F=C.trim(),U=I.trim();let z=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,x,M);else{const H=rh(s,x,"vertex"),Q=rh(s,M,"fragment");ot("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+N+`
`+H+`
`+Q)}else N!==""?$e("WebGLProgram: Program Info Log:",N):(F===""||U==="")&&(K=!1);K&&(B.diagnostics={runnable:z,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(x),s.deleteShader(M),O=new Hr(s,_),y=p_(s,_)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,s_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=M,this}let P_=0;class L_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new I_(e),t.set(e,i)),i}}class I_{constructor(e){this.id=P_++,this.code=e,this.usedTimes=0}}function D_(n,e,t,i,s,r,a){const o=new Zl,l=new L_,c=new Set,h=[],d=new Map,u=s.logarithmicDepthBuffer;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,B,D,C){const I=D.fog,N=C.geometry,F=y.isMeshStandardMaterial?D.environment:null,U=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),z=U&&U.mapping===la?U.image.height:null,K=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&$e("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const H=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Q=H!==void 0?H.length:0;let te=0;N.morphAttributes.position!==void 0&&(te=1),N.morphAttributes.normal!==void 0&&(te=2),N.morphAttributes.color!==void 0&&(te=3);let de,ye,_e,q;if(K){const ct=_n[K];de=ct.vertexShader,ye=ct.fragmentShader}else de=y.vertexShader,ye=y.fragmentShader,l.update(y),_e=l.getVertexShaderID(y),q=l.getFragmentShaderID(y);const Z=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),he=C.isInstancedMesh===!0,se=C.isBatchedMesh===!0,Te=!!y.map,Ge=!!y.matcap,Pe=!!U,Fe=!!y.aoMap,Ke=!!y.lightMap,He=!!y.bumpMap,k=!!y.normalMap,E=!!y.displacementMap,$=!!y.emissiveMap,oe=!!y.metalnessMap,Ne=!!y.roughnessMap,pe=y.anisotropy>0,P=y.clearcoat>0,v=y.dispersion>0,G=y.iridescence>0,ne=y.sheen>0,le=y.transmission>0,X=pe&&!!y.anisotropyMap,ue=P&&!!y.clearcoatMap,ae=P&&!!y.clearcoatNormalMap,xe=P&&!!y.clearcoatRoughnessMap,ze=G&&!!y.iridescenceMap,fe=G&&!!y.iridescenceThicknessMap,be=ne&&!!y.sheenColorMap,Le=ne&&!!y.sheenRoughnessMap,ke=!!y.specularMap,Se=!!y.specularColorMap,je=!!y.specularIntensityMap,V=le&&!!y.transmissionMap,Re=le&&!!y.thicknessMap,ve=!!y.gradientMap,Ie=!!y.alphaMap,ge=y.alphaTest>0,ce=!!y.alphaHash,Ee=!!y.extensions;let Ye=En;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const _t={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:de,fragmentShader:ye,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:se,batchingColor:se&&C._colorsTexture!==null,instancing:he,instancingColor:he&&C.instanceColor!==null,instancingMorph:he&&C.morphTexture!==null,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:cs,alphaToCoverage:!!y.alphaToCoverage,map:Te,matcap:Ge,envMap:Pe,envMapMode:Pe&&U.mapping,envMapCubeUVHeight:z,aoMap:Fe,lightMap:Ke,bumpMap:He,normalMap:k,displacementMap:E,emissiveMap:$,normalMapObjectSpace:k&&y.normalMapType===mf,normalMapTangentSpace:k&&y.normalMapType===wd,metalnessMap:oe,roughnessMap:Ne,anisotropy:pe,anisotropyMap:X,clearcoat:P,clearcoatMap:ue,clearcoatNormalMap:ae,clearcoatRoughnessMap:xe,dispersion:v,iridescence:G,iridescenceMap:ze,iridescenceThicknessMap:fe,sheen:ne,sheenColorMap:be,sheenRoughnessMap:Le,specularMap:ke,specularColorMap:Se,specularIntensityMap:je,transmission:le,transmissionMap:V,thicknessMap:Re,gradientMap:ve,opaque:y.transparent===!1&&y.blending===ns&&y.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ge,alphaHash:ce,combine:y.combine,mapUv:Te&&_(y.map.channel),aoMapUv:Fe&&_(y.aoMap.channel),lightMapUv:Ke&&_(y.lightMap.channel),bumpMapUv:He&&_(y.bumpMap.channel),normalMapUv:k&&_(y.normalMap.channel),displacementMapUv:E&&_(y.displacementMap.channel),emissiveMapUv:$&&_(y.emissiveMap.channel),metalnessMapUv:oe&&_(y.metalnessMap.channel),roughnessMapUv:Ne&&_(y.roughnessMap.channel),anisotropyMapUv:X&&_(y.anisotropyMap.channel),clearcoatMapUv:ue&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(y.sheenRoughnessMap.channel),specularMapUv:ke&&_(y.specularMap.channel),specularColorMapUv:Se&&_(y.specularColorMap.channel),specularIntensityMapUv:je&&_(y.specularIntensityMap.channel),transmissionMapUv:V&&_(y.transmissionMap.channel),thicknessMapUv:Re&&_(y.thicknessMap.channel),alphaMapUv:Ie&&_(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(k||pe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!N.attributes.uv&&(Te||Ie),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:C.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===mt,decodeVideoTextureEmissive:$&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)b.push(B),b.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(T(b,y),R(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function T(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function R(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const b=g[y.type];let B;if(b){const D=_n[b];B=Hf.clone(D.uniforms)}else B=y.uniforms;return B}function x(y,b){let B=d.get(b);return B!==void 0?++B.usedTimes:(B=new C_(n,b,y,r),h.push(B),d.set(b,B)),B}function M(y){if(--y.usedTimes===0){const b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),d.delete(y.cacheKey),y.destroy()}}function L(y){l.remove(y)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:x,releaseProgram:M,releaseShaderCache:L,programs:h,dispose:O}}function N_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function U_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||U_),i.length>1&&i.sort(u||hh),s.length>1&&s.sort(u||hh)}function h(){for(let d=e,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function F_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new dh,n.set(i,[a])):s>=r.length?(a=new dh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function O_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new at};break;case"SpotLight":t={position:new Y,direction:new Y,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function k_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let B_=0;function z_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function V_(n){const e=new O_,t=k_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new Et,a=new Et;function o(c){let h=0,d=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,R=0,S=0,x=0,M=0,L=0;c.sort(z_);for(let y=0,b=c.length;y<b;y++){const B=c[y],D=B.color,C=B.intensity,I=B.distance;let N=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ls?N=B.shadow.map.texture:N=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=D.r*C,d+=D.g*C,u+=D.b*C;else if(B.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(B.sh.coefficients[F],C);L++}else if(B.isDirectionalLight){const F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const U=B.shadow,z=t.get(B);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=B.shadow.matrix,T++}i.directional[f]=F,f++}else if(B.isSpotLight){const F=e.get(B);F.position.setFromMatrixPosition(B.matrixWorld),F.color.copy(D).multiplyScalar(C),F.distance=I,F.coneCos=Math.cos(B.angle),F.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),F.decay=B.decay,i.spot[_]=F;const U=B.shadow;if(B.map&&(i.spotLightMap[x]=B.map,x++,U.updateMatrices(B),B.castShadow&&M++),i.spotLightMatrix[_]=U.matrix,B.castShadow){const z=t.get(B);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=N,S++}_++}else if(B.isRectAreaLight){const F=e.get(B);F.color.copy(D).multiplyScalar(C),F.halfWidth.set(B.width*.5,0,0),F.halfHeight.set(0,B.height*.5,0),i.rectArea[m]=F,m++}else if(B.isPointLight){const F=e.get(B);if(F.color.copy(B.color).multiplyScalar(B.intensity),F.distance=B.distance,F.decay=B.decay,B.castShadow){const U=B.shadow,z=t.get(B);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,z.shadowCameraNear=U.camera.near,z.shadowCameraFar=U.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=B.shadow.matrix,R++}i.point[g]=F,g++}else if(B.isHemisphereLight){const F=e.get(B);F.skyColor.copy(B.color).multiplyScalar(C),F.groundColor.copy(B.groundColor).multiplyScalar(C),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const O=i.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==T||O.numPointShadows!==R||O.numSpotShadows!==S||O.numSpotMaps!==x||O.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=S+x-M,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=L,O.directionalLength=f,O.pointLength=g,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=T,O.numPointShadows=R,O.numSpotShadows=S,O.numSpotMaps=x,O.numLightProbes=L,i.version=B_++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const R=c[p];if(R.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(R.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(R.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(R.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(R.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(m),u++}else if(R.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function uh(n){const e=new V_(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function G_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new uh(n),e.set(s,[o])):r>=a.length?(o=new uh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
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
}`,X_=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],q_=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],fh=new Et,Ds=new Y,io=new Y;function Y_(n,e,t){let i=new Ql;const s=new Je,r=new Je,a=new Tt,o=new ip,l=new sp,c={},h=t.maxTextureSize,d={[Gn]:qt,[qt]:Gn,[Ut]:Ut},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:H_,fragmentShader:W_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ce(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kr;let p=this.type;this.render=function(M,L,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;M.type===Xu&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),M.type=kr);const y=n.getRenderTarget(),b=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Bn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const C=p!==this.type;C&&L.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(N=>N.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,N=M.length;I<N;I++){const F=M[I],U=F.shadow;if(U===void 0){$e("WebGLShadowMap:",F,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const z=U.getFrameExtents();if(s.multiply(z),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,U.mapSize.y=r.y)),U.map===null||C===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Us){if(F.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Mn(s.x,s.y,{format:ls,type:Hn,minFilter:St,magFilter:St,generateMipmaps:!1}),U.map.texture.name=F.name+".shadowMap",U.map.depthTexture=new Xs(s.x,s.y,Sn),U.map.depthTexture.name=F.name+".shadowMapDepth",U.map.depthTexture.format=Wn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=At,U.map.depthTexture.magFilter=At}else{F.isPointLight?(U.map=new Ud(s.x),U.map.depthTexture=new tp(s.x,wn)):(U.map=new Mn(s.x,s.y),U.map.depthTexture=new Xs(s.x,s.y,wn)),U.map.depthTexture.name=F.name+".shadowMap",U.map.depthTexture.format=Wn;const H=n.state.buffers.depth.getReversed();this.type===kr?(U.map.depthTexture.compareFunction=H?jl:Yl,U.map.depthTexture.minFilter=St,U.map.depthTexture.magFilter=St):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=At,U.map.depthTexture.magFilter=At)}U.camera.updateProjectionMatrix()}const K=U.map.isWebGLCubeRenderTarget?6:1;for(let H=0;H<K;H++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,H),n.clear();else{H===0&&(n.setRenderTarget(U.map),n.clear());const Q=U.getViewport(H);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),D.viewport(a)}if(F.isPointLight){const Q=U.camera,te=U.matrix,de=F.distance||Q.far;de!==Q.far&&(Q.far=de,Q.updateProjectionMatrix()),Ds.setFromMatrixPosition(F.matrixWorld),Q.position.copy(Ds),io.copy(Q.position),io.add(X_[H]),Q.up.copy(q_[H]),Q.lookAt(io),Q.updateMatrixWorld(),te.makeTranslation(-Ds.x,-Ds.y,-Ds.z),fh.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),U._frustum.setFromProjectionMatrix(fh,Q.coordinateSystem,Q.reversedDepth)}else U.updateMatrices(F);i=U.getFrustum(),S(L,O,U.camera,F,this.type)}U.isPointLightShadow!==!0&&this.type===Us&&T(U,O),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,b,B)};function T(M,L){const O=e.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Mn(s.x,s.y,{format:ls,type:Hn})),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(L,null,O,u,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(L,null,O,f,_,null)}function R(M,L,O,y){let b=null;const B=O.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(B!==void 0)b=B;else if(b=O.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const D=b.uuid,C=L.uuid;let I=c[D];I===void 0&&(I={},c[D]=I);let N=I[C];N===void 0&&(N=b.clone(),I[C]=N,L.addEventListener("dispose",x)),b=N}if(b.visible=L.visible,b.wireframe=L.wireframe,y===Us?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=n.properties.get(b);D.light=O}return b}function S(M,L,O,y,b){if(M.visible===!1)return;if(M.layers.test(L.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Us)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld);const C=e.update(M),I=M.material;if(Array.isArray(I)){const N=C.groups;for(let F=0,U=N.length;F<U;F++){const z=N[F],K=I[z.materialIndex];if(K&&K.visible){const H=R(M,K,y,b);M.onBeforeShadow(n,M,L,O,C,H,z),n.renderBufferDirect(O,null,C,H,M,z),M.onAfterShadow(n,M,L,O,C,H,z)}}}else if(I.visible){const N=R(M,I,y,b);M.onBeforeShadow(n,M,L,O,C,N,null),n.renderBufferDirect(O,null,C,N,M,null),M.onAfterShadow(n,M,L,O,C,N,null)}}const D=M.children;for(let C=0,I=D.length;C<I;C++)S(D[C],L,O,y,b)}function x(M){M.target.removeEventListener("dispose",x);for(const O in c){const y=c[O],b=M.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const j_={[Uo]:Fo,[Oo]:zo,[ko]:Vo,[as]:Bo,[Fo]:Uo,[zo]:Oo,[Vo]:ko,[Bo]:as};function $_(n,e){function t(){let V=!1;const Re=new Tt;let ve=null;const Ie=new Tt(0,0,0,0);return{setMask:function(ge){ve!==ge&&!V&&(n.colorMask(ge,ge,ge,ge),ve=ge)},setLocked:function(ge){V=ge},setClear:function(ge,ce,Ee,Ye,_t){_t===!0&&(ge*=Ye,ce*=Ye,Ee*=Ye),Re.set(ge,ce,Ee,Ye),Ie.equals(Re)===!1&&(n.clearColor(ge,ce,Ee,Ye),Ie.copy(Re))},reset:function(){V=!1,ve=null,Ie.set(-1,0,0,0)}}}function i(){let V=!1,Re=!1,ve=null,Ie=null,ge=null;return{setReversed:function(ce){if(Re!==ce){const Ee=e.get("EXT_clip_control");ce?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Re=ce;const Ye=ge;ge=null,this.setClear(Ye)}},getReversed:function(){return Re},setTest:function(ce){ce?Z(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(ce){ve!==ce&&!V&&(n.depthMask(ce),ve=ce)},setFunc:function(ce){if(Re&&(ce=j_[ce]),Ie!==ce){switch(ce){case Uo:n.depthFunc(n.NEVER);break;case Fo:n.depthFunc(n.ALWAYS);break;case Oo:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case ko:n.depthFunc(n.EQUAL);break;case Bo:n.depthFunc(n.GEQUAL);break;case zo:n.depthFunc(n.GREATER);break;case Vo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ce}},setLocked:function(ce){V=ce},setClear:function(ce){ge!==ce&&(Re&&(ce=1-ce),n.clearDepth(ce),ge=ce)},reset:function(){V=!1,ve=null,Ie=null,ge=null,Re=!1}}}function s(){let V=!1,Re=null,ve=null,Ie=null,ge=null,ce=null,Ee=null,Ye=null,_t=null;return{setTest:function(ct){V||(ct?Z(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(ct){Re!==ct&&!V&&(n.stencilMask(ct),Re=ct)},setFunc:function(ct,Jt,ln){(ve!==ct||Ie!==Jt||ge!==ln)&&(n.stencilFunc(ct,Jt,ln),ve=ct,Ie=Jt,ge=ln)},setOp:function(ct,Jt,ln){(ce!==ct||Ee!==Jt||Ye!==ln)&&(n.stencilOp(ct,Jt,ln),ce=ct,Ee=Jt,Ye=ln)},setLocked:function(ct){V=ct},setClear:function(ct){_t!==ct&&(n.clearStencil(ct),_t=ct)},reset:function(){V=!1,Re=null,ve=null,Ie=null,ge=null,ce=null,Ee=null,Ye=null,_t=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,R=null,S=null,x=null,M=null,L=new at(0,0,0),O=0,y=!1,b=null,B=null,D=null,C=null,I=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,U=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=U>=1):z.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=U>=2);let K=null,H={};const Q=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),de=new Tt().fromArray(Q),ye=new Tt().fromArray(te);function _e(V,Re,ve,Ie){const ge=new Uint8Array(4),ce=n.createTexture();n.bindTexture(V,ce),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<ve;Ee++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(Re+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ce}const q={};q[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(as),He(!1),k(pc),Z(n.CULL_FACE),Fe(Bn);function Z(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function ie(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function he(V,Re){return d[V]!==Re?(n.bindFramebuffer(V,Re),d[V]=Re,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Re),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function se(V,Re){let ve=f,Ie=!1;if(V){ve=u.get(Re),ve===void 0&&(ve=[],u.set(Re,ve));const ge=V.textures;if(ve.length!==ge.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ee=ge.length;ce<Ee;ce++)ve[ce]=n.COLOR_ATTACHMENT0+ce;ve.length=ge.length,Ie=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ve)}function Te(V){return g!==V?(n.useProgram(V),g=V,!0):!1}const Ge={[_i]:n.FUNC_ADD,[Yu]:n.FUNC_SUBTRACT,[ju]:n.FUNC_REVERSE_SUBTRACT};Ge[$u]=n.MIN,Ge[Ku]=n.MAX;const Pe={[Zu]:n.ZERO,[Ju]:n.ONE,[Qu]:n.SRC_COLOR,[Do]:n.SRC_ALPHA,[af]:n.SRC_ALPHA_SATURATE,[sf]:n.DST_COLOR,[tf]:n.DST_ALPHA,[ef]:n.ONE_MINUS_SRC_COLOR,[No]:n.ONE_MINUS_SRC_ALPHA,[rf]:n.ONE_MINUS_DST_COLOR,[nf]:n.ONE_MINUS_DST_ALPHA,[of]:n.CONSTANT_COLOR,[lf]:n.ONE_MINUS_CONSTANT_COLOR,[cf]:n.CONSTANT_ALPHA,[hf]:n.ONE_MINUS_CONSTANT_ALPHA};function Fe(V,Re,ve,Ie,ge,ce,Ee,Ye,_t,ct){if(V===Bn){_===!0&&(ie(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),V!==qu){if(V!==m||ct!==y){if((p!==_i||S!==_i)&&(n.blendEquation(n.FUNC_ADD),p=_i,S=_i),ct)switch(V){case ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFunc(n.ONE,n.ONE);break;case gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",V);break}else switch(V){case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _c:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",V);break}T=null,R=null,x=null,M=null,L.set(0,0,0),O=0,m=V,y=ct}return}ge=ge||Re,ce=ce||ve,Ee=Ee||Ie,(Re!==p||ge!==S)&&(n.blendEquationSeparate(Ge[Re],Ge[ge]),p=Re,S=ge),(ve!==T||Ie!==R||ce!==x||Ee!==M)&&(n.blendFuncSeparate(Pe[ve],Pe[Ie],Pe[ce],Pe[Ee]),T=ve,R=Ie,x=ce,M=Ee),(Ye.equals(L)===!1||_t!==O)&&(n.blendColor(Ye.r,Ye.g,Ye.b,_t),L.copy(Ye),O=_t),m=V,y=!1}function Ke(V,Re){V.side===Ut?ie(n.CULL_FACE):Z(n.CULL_FACE);let ve=V.side===qt;Re&&(ve=!ve),He(ve),V.blending===ns&&V.transparent===!1?Fe(Bn):Fe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const Ie=V.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),$(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(V){b!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),b=V)}function k(V){V!==Hu?(Z(n.CULL_FACE),V!==B&&(V===pc?n.cullFace(n.BACK):V===Wu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),B=V}function E(V){V!==D&&(F&&n.lineWidth(V),D=V)}function $(V,Re,ve){V?(Z(n.POLYGON_OFFSET_FILL),(C!==Re||I!==ve)&&(n.polygonOffset(Re,ve),C=Re,I=ve)):ie(n.POLYGON_OFFSET_FILL)}function oe(V){V?Z(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function Ne(V){V===void 0&&(V=n.TEXTURE0+N-1),K!==V&&(n.activeTexture(V),K=V)}function pe(V,Re,ve){ve===void 0&&(K===null?ve=n.TEXTURE0+N-1:ve=K);let Ie=H[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},H[ve]=Ie),(Ie.type!==V||Ie.texture!==Re)&&(K!==ve&&(n.activeTexture(ve),K=ve),n.bindTexture(V,Re||q[V]),Ie.type=V,Ie.texture=Re)}function P(){const V=H[K];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(V){ot("WebGLState:",V)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(V){ot("WebGLState:",V)}}function ne(){try{n.texSubImage2D(...arguments)}catch(V){ot("WebGLState:",V)}}function le(){try{n.texSubImage3D(...arguments)}catch(V){ot("WebGLState:",V)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(V){ot("WebGLState:",V)}}function ue(){try{n.compressedTexSubImage3D(...arguments)}catch(V){ot("WebGLState:",V)}}function ae(){try{n.texStorage2D(...arguments)}catch(V){ot("WebGLState:",V)}}function xe(){try{n.texStorage3D(...arguments)}catch(V){ot("WebGLState:",V)}}function ze(){try{n.texImage2D(...arguments)}catch(V){ot("WebGLState:",V)}}function fe(){try{n.texImage3D(...arguments)}catch(V){ot("WebGLState:",V)}}function be(V){de.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),de.copy(V))}function Le(V){ye.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ye.copy(V))}function ke(V,Re){let ve=c.get(Re);ve===void 0&&(ve=new WeakMap,c.set(Re,ve));let Ie=ve.get(V);Ie===void 0&&(Ie=n.getUniformBlockIndex(Re,V.name),ve.set(V,Ie))}function Se(V,Re){const Ie=c.get(Re).get(V);l.get(Re)!==Ie&&(n.uniformBlockBinding(Re,Ie,V.__bindingPointIndex),l.set(Re,Ie))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,H={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,R=null,S=null,x=null,M=null,L=new at(0,0,0),O=0,y=!1,b=null,B=null,D=null,C=null,I=null,de.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:ie,bindFramebuffer:he,drawBuffers:se,useProgram:Te,setBlending:Fe,setMaterial:Ke,setFlipSided:He,setCullFace:k,setLineWidth:E,setPolygonOffset:$,setScissorTest:oe,activeTexture:Ne,bindTexture:pe,unbindTexture:P,compressedTexImage2D:v,compressedTexImage3D:G,texImage2D:ze,texImage3D:fe,updateUBOMapping:ke,uniformBlockBinding:Se,texStorage2D:ae,texStorage3D:xe,texSubImage2D:ne,texSubImage3D:le,compressedTexSubImage2D:X,compressedTexSubImage3D:ue,scissor:be,viewport:Le,reset:je}}function K_(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,v){return f?new OffscreenCanvas(P,v):Zr("canvas")}function _(P,v,G){let ne=1;const le=pe(P);if((le.width>G||le.height>G)&&(ne=G/Math.max(le.width,le.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const X=Math.floor(ne*le.width),ue=Math.floor(ne*le.height);d===void 0&&(d=g(X,ue));const ae=v?g(X,ue):d;return ae.width=X,ae.height=ue,ae.getContext("2d").drawImage(P,0,0,X,ue),$e("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+X+"x"+ue+")."),ae}else return"data"in P&&$e("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(P,v,G,ne,le=!1){if(P!==null){if(n[P]!==void 0)return n[P];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let X=v;if(v===n.RED&&(G===n.FLOAT&&(X=n.R32F),G===n.HALF_FLOAT&&(X=n.R16F),G===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(X=n.R8UI),G===n.UNSIGNED_SHORT&&(X=n.R16UI),G===n.UNSIGNED_INT&&(X=n.R32UI),G===n.BYTE&&(X=n.R8I),G===n.SHORT&&(X=n.R16I),G===n.INT&&(X=n.R32I)),v===n.RG&&(G===n.FLOAT&&(X=n.RG32F),G===n.HALF_FLOAT&&(X=n.RG16F),G===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(X=n.RG8UI),G===n.UNSIGNED_SHORT&&(X=n.RG16UI),G===n.UNSIGNED_INT&&(X=n.RG32UI),G===n.BYTE&&(X=n.RG8I),G===n.SHORT&&(X=n.RG16I),G===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(X=n.RGB8UI),G===n.UNSIGNED_SHORT&&(X=n.RGB16UI),G===n.UNSIGNED_INT&&(X=n.RGB32UI),G===n.BYTE&&(X=n.RGB8I),G===n.SHORT&&(X=n.RGB16I),G===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),G===n.UNSIGNED_INT&&(X=n.RGBA32UI),G===n.BYTE&&(X=n.RGBA8I),G===n.SHORT&&(X=n.RGBA16I),G===n.INT&&(X=n.RGBA32I)),v===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),v===n.RGBA){const ue=le?$r:lt.getTransfer(ne);G===n.FLOAT&&(X=n.RGBA32F),G===n.HALF_FLOAT&&(X=n.RGBA16F),G===n.UNSIGNED_BYTE&&(X=ue===mt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(P,v){let G;return P?v===null||v===wn||v===Gs?G=n.DEPTH24_STENCIL8:v===Sn?G=n.DEPTH32F_STENCIL8:v===Vs&&(G=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wn||v===Gs?G=n.DEPTH_COMPONENT24:v===Sn?G=n.DEPTH_COMPONENT32F:v===Vs&&(G=n.DEPTH_COMPONENT16),G}function x(P,v){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==At&&P.minFilter!==St?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function M(P){const v=P.target;v.removeEventListener("dispose",M),O(v),v.isVideoTexture&&h.delete(v)}function L(P){const v=P.target;v.removeEventListener("dispose",L),b(v)}function O(P){const v=i.get(P);if(v.__webglInit===void 0)return;const G=P.source,ne=u.get(G);if(ne){const le=ne[v.__cacheKey];le.usedTimes--,le.usedTimes===0&&y(P),Object.keys(ne).length===0&&u.delete(G)}i.remove(P)}function y(P){const v=i.get(P);n.deleteTexture(v.__webglTexture);const G=P.source,ne=u.get(G);delete ne[v.__cacheKey],a.memory.textures--}function b(P){const v=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let le=0;le<v.__webglFramebuffer[ne].length;le++)n.deleteFramebuffer(v.__webglFramebuffer[ne][le]);else n.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)n.deleteFramebuffer(v.__webglFramebuffer[ne]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const G=P.textures;for(let ne=0,le=G.length;ne<le;ne++){const X=i.get(G[ne]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(G[ne])}i.remove(P)}let B=0;function D(){B=0}function C(){const P=B;return P>=s.maxTextures&&$e("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),B+=1,P}function I(P){const v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function N(P,v){const G=i.get(P);if(P.isVideoTexture&&oe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const ne=P.image;if(ne===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,P,v);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+v)}function F(P,v){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){q(G,P,v);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+v)}function U(P,v){const G=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){q(G,P,v);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+v)}function z(P,v){const G=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Z(G,P,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+v)}const K={[zs]:n.REPEAT,[On]:n.CLAMP_TO_EDGE,[Wo]:n.MIRRORED_REPEAT},H={[At]:n.NEAREST,[ff]:n.NEAREST_MIPMAP_NEAREST,[ar]:n.NEAREST_MIPMAP_LINEAR,[St]:n.LINEAR,[Ma]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},Q={[gf]:n.NEVER,[xf]:n.ALWAYS,[_f]:n.LESS,[Yl]:n.LEQUAL,[yf]:n.EQUAL,[jl]:n.GEQUAL,[vf]:n.GREATER,[Sf]:n.NOTEQUAL};function te(P,v){if(v.type===Sn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===St||v.magFilter===Ma||v.magFilter===ar||v.magFilter===vi||v.minFilter===St||v.minFilter===Ma||v.minFilter===ar||v.minFilter===vi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,K[v.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,H[v.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,H[v.minFilter]),v.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Q[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===At||v.minFilter!==ar&&v.minFilter!==vi||v.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function de(P,v){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",M));const ne=v.source;let le=u.get(ne);le===void 0&&(le={},u.set(ne,le));const X=I(v);if(X!==P.__cacheKey){le[X]===void 0&&(le[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),le[X].usedTimes++;const ue=le[P.__cacheKey];ue!==void 0&&(le[P.__cacheKey].usedTimes--,ue.usedTimes===0&&y(v)),P.__cacheKey=X,P.__webglTexture=le[X].texture}return G}function ye(P,v,G){return Math.floor(Math.floor(P/G)/v)}function _e(P,v,G,ne){const X=P.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,G,ne,v.data);else{X.sort((fe,be)=>fe.start-be.start);let ue=0;for(let fe=1;fe<X.length;fe++){const be=X[ue],Le=X[fe],ke=be.start+be.count,Se=ye(Le.start,v.width,4),je=ye(be.start,v.width,4);Le.start<=ke+1&&Se===je&&ye(Le.start+Le.count-1,v.width,4)===Se?be.count=Math.max(be.count,Le.start+Le.count-be.start):(++ue,X[ue]=Le)}X.length=ue+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),ze=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let fe=0,be=X.length;fe<be;fe++){const Le=X[fe],ke=Math.floor(Le.start/4),Se=Math.ceil(Le.count/4),je=ke%v.width,V=Math.floor(ke/v.width),Re=Se,ve=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,je,V,Re,ve,G,ne,v.data)}P.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,ze)}}function q(P,v,G){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);const le=de(P,v),X=v.source;t.bindTexture(ne,P.__webglTexture,n.TEXTURE0+G);const ue=i.get(X);if(X.version!==ue.__version||le===!0){t.activeTexture(n.TEXTURE0+G);const ae=lt.getPrimaries(lt.workingColorSpace),xe=v.colorSpace===ni?null:lt.getPrimaries(v.colorSpace),ze=v.colorSpace===ni||ae===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let fe=_(v.image,!1,s.maxTextureSize);fe=Ne(v,fe);const be=r.convert(v.format,v.colorSpace),Le=r.convert(v.type);let ke=R(v.internalFormat,be,Le,v.colorSpace,v.isVideoTexture);te(ne,v);let Se;const je=v.mipmaps,V=v.isVideoTexture!==!0,Re=ue.__version===void 0||le===!0,ve=X.dataReady,Ie=x(v,fe);if(v.isDepthTexture)ke=S(v.format===Si,v.type),Re&&(V?t.texStorage2D(n.TEXTURE_2D,1,ke,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,ke,fe.width,fe.height,0,be,Le,null));else if(v.isDataTexture)if(je.length>0){V&&Re&&t.texStorage2D(n.TEXTURE_2D,Ie,ke,je[0].width,je[0].height);for(let ge=0,ce=je.length;ge<ce;ge++)Se=je[ge],V?ve&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Se.width,Se.height,be,Le,Se.data):t.texImage2D(n.TEXTURE_2D,ge,ke,Se.width,Se.height,0,be,Le,Se.data);v.generateMipmaps=!1}else V?(Re&&t.texStorage2D(n.TEXTURE_2D,Ie,ke,fe.width,fe.height),ve&&_e(v,fe,be,Le)):t.texImage2D(n.TEXTURE_2D,0,ke,fe.width,fe.height,0,be,Le,fe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,ke,je[0].width,je[0].height,fe.depth);for(let ge=0,ce=je.length;ge<ce;ge++)if(Se=je[ge],v.format!==rn)if(be!==null)if(V){if(ve)if(v.layerUpdates.size>0){const Ee=Wc(Se.width,Se.height,v.format,v.type);for(const Ye of v.layerUpdates){const _t=Se.data.subarray(Ye*Ee/Se.data.BYTES_PER_ELEMENT,(Ye+1)*Ee/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,Ye,Se.width,Se.height,1,be,_t)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,fe.depth,be,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,ke,Se.width,Se.height,fe.depth,0,Se.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,fe.depth,be,Le,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,ke,Se.width,Se.height,fe.depth,0,be,Le,Se.data)}else{V&&Re&&t.texStorage2D(n.TEXTURE_2D,Ie,ke,je[0].width,je[0].height);for(let ge=0,ce=je.length;ge<ce;ge++)Se=je[ge],v.format!==rn?be!==null?V?ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,ke,Se.width,Se.height,0,Se.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ve&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Se.width,Se.height,be,Le,Se.data):t.texImage2D(n.TEXTURE_2D,ge,ke,Se.width,Se.height,0,be,Le,Se.data)}else if(v.isDataArrayTexture)if(V){if(Re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,ke,fe.width,fe.height,fe.depth),ve)if(v.layerUpdates.size>0){const ge=Wc(fe.width,fe.height,v.format,v.type);for(const ce of v.layerUpdates){const Ee=fe.data.subarray(ce*ge/fe.data.BYTES_PER_ELEMENT,(ce+1)*ge/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,fe.width,fe.height,1,be,Le,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,be,Le,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,fe.width,fe.height,fe.depth,0,be,Le,fe.data);else if(v.isData3DTexture)V?(Re&&t.texStorage3D(n.TEXTURE_3D,Ie,ke,fe.width,fe.height,fe.depth),ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,be,Le,fe.data)):t.texImage3D(n.TEXTURE_3D,0,ke,fe.width,fe.height,fe.depth,0,be,Le,fe.data);else if(v.isFramebufferTexture){if(Re)if(V)t.texStorage2D(n.TEXTURE_2D,Ie,ke,fe.width,fe.height);else{let ge=fe.width,ce=fe.height;for(let Ee=0;Ee<Ie;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,ke,ge,ce,0,be,Le,null),ge>>=1,ce>>=1}}else if(je.length>0){if(V&&Re){const ge=pe(je[0]);t.texStorage2D(n.TEXTURE_2D,Ie,ke,ge.width,ge.height)}for(let ge=0,ce=je.length;ge<ce;ge++)Se=je[ge],V?ve&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,be,Le,Se):t.texImage2D(n.TEXTURE_2D,ge,ke,be,Le,Se);v.generateMipmaps=!1}else if(V){if(Re){const ge=pe(fe);t.texStorage2D(n.TEXTURE_2D,Ie,ke,ge.width,ge.height)}ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Le,fe)}else t.texImage2D(n.TEXTURE_2D,0,ke,be,Le,fe);m(v)&&p(ne),ue.__version=X.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Z(P,v,G){if(v.image.length!==6)return;const ne=de(P,v),le=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const X=i.get(le);if(le.version!==X.__version||ne===!0){t.activeTexture(n.TEXTURE0+G);const ue=lt.getPrimaries(lt.workingColorSpace),ae=v.colorSpace===ni?null:lt.getPrimaries(v.colorSpace),xe=v.colorSpace===ni||ue===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ze=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,be=[];for(let ce=0;ce<6;ce++)!ze&&!fe?be[ce]=_(v.image[ce],!0,s.maxCubemapSize):be[ce]=fe?v.image[ce].image:v.image[ce],be[ce]=Ne(v,be[ce]);const Le=be[0],ke=r.convert(v.format,v.colorSpace),Se=r.convert(v.type),je=R(v.internalFormat,ke,Se,v.colorSpace),V=v.isVideoTexture!==!0,Re=X.__version===void 0||ne===!0,ve=le.dataReady;let Ie=x(v,Le);te(n.TEXTURE_CUBE_MAP,v);let ge;if(ze){V&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,je,Le.width,Le.height);for(let ce=0;ce<6;ce++){ge=be[ce].mipmaps;for(let Ee=0;Ee<ge.length;Ee++){const Ye=ge[Ee];v.format!==rn?ke!==null?V?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,0,0,Ye.width,Ye.height,ke,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,je,Ye.width,Ye.height,0,Ye.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,0,0,Ye.width,Ye.height,ke,Se,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,je,Ye.width,Ye.height,0,ke,Se,Ye.data)}}}else{if(ge=v.mipmaps,V&&Re){ge.length>0&&Ie++;const ce=pe(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(fe){V?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,be[ce].width,be[ce].height,ke,Se,be[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,be[ce].width,be[ce].height,0,ke,Se,be[ce].data);for(let Ee=0;Ee<ge.length;Ee++){const _t=ge[Ee].image[ce].image;V?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,0,0,_t.width,_t.height,ke,Se,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,je,_t.width,_t.height,0,ke,Se,_t.data)}}else{V?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ke,Se,be[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,ke,Se,be[ce]);for(let Ee=0;Ee<ge.length;Ee++){const Ye=ge[Ee];V?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,0,0,ke,Se,Ye.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,je,ke,Se,Ye.image[ce])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),X.__version=le.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function ie(P,v,G,ne,le,X){const ue=r.convert(G.format,G.colorSpace),ae=r.convert(G.type),xe=R(G.internalFormat,ue,ae,G.colorSpace),ze=i.get(v),fe=i.get(G);if(fe.__renderTarget=v,!ze.__hasExternalTextures){const be=Math.max(1,v.width>>X),Le=Math.max(1,v.height>>X);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,X,xe,be,Le,v.depth,0,ue,ae,null):t.texImage2D(le,X,xe,be,Le,0,ue,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),$(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,le,fe.__webglTexture,0,E(v)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,le,fe.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(P,v,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),v.depthBuffer){const ne=v.depthTexture,le=ne&&ne.isDepthTexture?ne.type:null,X=S(v.stencilBuffer,le),ue=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,E(v),X,v.width,v.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,E(v),X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,P)}else{const ne=v.textures;for(let le=0;le<ne.length;le++){const X=ne[le],ue=r.convert(X.format,X.colorSpace),ae=r.convert(X.type),xe=R(X.internalFormat,ue,ae,X.colorSpace);$(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,E(v),xe,v.width,v.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,E(v),xe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,xe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(P,v,G){const ne=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=i.get(v.depthTexture);if(le.__renderTarget=v,(!le.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ne){if(le.__webglInit===void 0&&(le.__webglInit=!0,v.depthTexture.addEventListener("dispose",M)),le.__webglTexture===void 0){le.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),te(n.TEXTURE_CUBE_MAP,v.depthTexture);const ze=r.convert(v.depthTexture.format),fe=r.convert(v.depthTexture.type);let be;v.depthTexture.format===Wn?be=n.DEPTH_COMPONENT24:v.depthTexture.format===Si&&(be=n.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,be,v.width,v.height,0,ze,fe,null)}}else N(v.depthTexture,0);const X=le.__webglTexture,ue=E(v),ae=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,xe=v.depthTexture.format===Si?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Wn)$(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ae,X,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ae,X,0);else if(v.depthTexture.format===Si)$(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ae,X,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ae,X,0);else throw new Error("Unknown depthTexture format")}function Te(P){const v=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){const le=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",le)};ne.addEventListener("dispose",le),v.__depthDisposeCallback=le}v.__boundDepthTexture=ne}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let ne=0;ne<6;ne++)se(v.__webglFramebuffer[ne],P,ne);else{const ne=P.texture.mipmaps;ne&&ne.length>0?se(v.__webglFramebuffer[0],P,0):se(v.__webglFramebuffer,P,0)}else if(G){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=n.createRenderbuffer(),he(v.__webglDepthbuffer[ne],P,!1);else{const le=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,X)}}else{const ne=P.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),he(v.__webglDepthbuffer,P,!1);else{const le=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(P,v,G){const ne=i.get(P);v!==void 0&&ie(ne.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Te(P)}function Pe(P){const v=P.texture,G=i.get(P),ne=i.get(v);P.addEventListener("dispose",L);const le=P.textures,X=P.isWebGLCubeRenderTarget===!0,ue=le.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,a.memory.textures++),X){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[ae]=[];for(let xe=0;xe<v.mipmaps.length;xe++)G.__webglFramebuffer[ae][xe]=n.createFramebuffer()}else G.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)G.__webglFramebuffer[ae]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ue)for(let ae=0,xe=le.length;ae<xe;ae++){const ze=i.get(le[ae]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&$(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ae=0;ae<le.length;ae++){const xe=le[ae];G.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ae]);const ze=r.convert(xe.format,xe.colorSpace),fe=r.convert(xe.type),be=R(xe.internalFormat,ze,fe,xe.colorSpace,P.isXRRenderTarget===!0),Le=E(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,be,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,G.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),he(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),te(n.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)ie(G.__webglFramebuffer[ae][xe],P,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,xe);else ie(G.__webglFramebuffer[ae],P,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ae=0,xe=le.length;ae<xe;ae++){const ze=le[ae],fe=i.get(ze);let be=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,fe.__webglTexture),te(be,ze),ie(G.__webglFramebuffer,P,ze,n.COLOR_ATTACHMENT0+ae,be,0),m(ze)&&p(be)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,ne.__webglTexture),te(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let xe=0;xe<v.mipmaps.length;xe++)ie(G.__webglFramebuffer[xe],P,v,n.COLOR_ATTACHMENT0,ae,xe);else ie(G.__webglFramebuffer,P,v,n.COLOR_ATTACHMENT0,ae,0);m(v)&&p(ae),t.unbindTexture()}P.depthBuffer&&Te(P)}function Fe(P){const v=P.textures;for(let G=0,ne=v.length;G<ne;G++){const le=v[G];if(m(le)){const X=T(P),ue=i.get(le).__webglTexture;t.bindTexture(X,ue),p(X),t.unbindTexture()}}}const Ke=[],He=[];function k(P){if(P.samples>0){if($(P)===!1){const v=P.textures,G=P.width,ne=P.height;let le=n.COLOR_BUFFER_BIT;const X=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(P),ae=v.length>1;if(ae)for(let ze=0;ze<v.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const xe=P.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ze=0;ze<v.length;ze++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ze]);const fe=i.get(v[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,G,ne,0,0,G,ne,le,n.NEAREST),l===!0&&(Ke.length=0,He.length=0,Ke.push(n.COLOR_ATTACHMENT0+ze),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ke.push(X),He.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let ze=0;ze<v.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ze]);const fe=i.get(v[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const v=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function E(P){return Math.min(s.maxSamples,P.samples)}function $(P){const v=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function oe(P){const v=a.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function Ne(P,v){const G=P.colorSpace,ne=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==cs&&G!==ni&&(lt.getTransfer(G)===mt?(ne!==rn||le!==Kt)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",G)),v}function pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=D,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=U,this.setTextureCube=z,this.rebindTextures=Ge,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=$,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Z_(n,e){function t(i,s=ni){let r;const a=lt.getTransfer(s);if(i===Kt)return n.UNSIGNED_BYTE;if(i===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===yd)return n.BYTE;if(i===vd)return n.SHORT;if(i===Vs)return n.UNSIGNED_SHORT;if(i===Vl)return n.INT;if(i===wn)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===Hn)return n.HALF_FLOAT;if(i===bd)return n.ALPHA;if(i===Ed)return n.RGB;if(i===rn)return n.RGBA;if(i===Wn)return n.DEPTH_COMPONENT;if(i===Si)return n.DEPTH_STENCIL;if(i===Md)return n.RED;if(i===Wl)return n.RED_INTEGER;if(i===ls)return n.RG;if(i===Xl)return n.RG_INTEGER;if(i===ql)return n.RGBA_INTEGER;if(i===Br||i===zr||i===Vr||i===Gr)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xo||i===qo||i===Yo||i===jo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$o||i===Ko||i===Zo||i===Jo||i===Qo||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$o||i===Ko)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jo)return r.COMPRESSED_R11_EAC;if(i===Qo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===el)return r.COMPRESSED_RG11_EAC;if(i===tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl||i===dl||i===ul||i===fl||i===pl||i===ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===il)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===al)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ll)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ul)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ml)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gl||i===_l||i===yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===gl)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vl||i===Sl||i===xl||i===bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
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

}`;class ey{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Od(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new An({vertexShader:J_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ce(new on(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ty extends ps{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new ey,p={},T=t.getContextAttributes();let R=null,S=null;const x=[],M=[],L=new Je;let O=null;const y=new $t;y.viewport=new Tt;const b=new $t;b.viewport=new Tt;const B=[y,b],D=new cp;let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=x[q];return Z===void 0&&(Z=new Ya,x[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=x[q];return Z===void 0&&(Z=new Ya,x[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=x[q];return Z===void 0&&(Z=new Ya,x[q]=Z),Z.getHandSpace()};function N(q){const Z=M.indexOf(q.inputSource);if(Z===-1)return;const ie=x[Z];ie!==void 0&&(ie.update(q.inputSource,q.frame,c||a),ie.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",U);for(let q=0;q<x.length;q++){const Z=M[q];Z!==null&&(M[q]=null,x[q].disconnect(Z))}C=null,I=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(R),f=null,u=null,d=null,s=null,S=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",U),T.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,he=null,se=null;T.depth&&(se=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=T.stencil?Si:Wn,he=T.stencil?Gs:wn);const Te={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Te),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Mn(u.textureWidth,u.textureHeight,{format:rn,type:Kt,depthTexture:new Xs(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ie={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Mn(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(q){for(let Z=0;Z<q.removed.length;Z++){const ie=q.removed[Z],he=M.indexOf(ie);he>=0&&(M[he]=null,x[he].disconnect(ie))}for(let Z=0;Z<q.added.length;Z++){const ie=q.added[Z];let he=M.indexOf(ie);if(he===-1){for(let Te=0;Te<x.length;Te++)if(Te>=M.length){M.push(ie),he=Te;break}else if(M[Te]===null){M[Te]=ie,he=Te;break}if(he===-1)break}const se=x[he];se&&se.connect(ie)}}const z=new Y,K=new Y;function H(q,Z,ie){z.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(ie.matrixWorld);const he=z.distanceTo(K),se=Z.projectionMatrix.elements,Te=ie.projectionMatrix.elements,Ge=se[14]/(se[10]-1),Pe=se[14]/(se[10]+1),Fe=(se[9]+1)/se[5],Ke=(se[9]-1)/se[5],He=(se[8]-1)/se[0],k=(Te[8]+1)/Te[0],E=Ge*He,$=Ge*k,oe=he/(-He+k),Ne=oe*-He;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ne),q.translateZ(oe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),se[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const pe=Ge+oe,P=Pe+oe,v=E-Ne,G=$+(he-Ne),ne=Fe*Pe/P*pe,le=Ke*Pe/P*pe;q.projectionMatrix.makePerspective(v,G,ne,le,pe,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,ie=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),D.near=b.near=y.near=Z,D.far=b.far=y.far=ie,(C!==D.near||I!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),C=D.near,I=D.far),D.layers.mask=q.layers.mask|6,y.layers.mask=D.layers.mask&3,b.layers.mask=D.layers.mask&5;const he=q.parent,se=D.cameras;Q(D,he);for(let Te=0;Te<se.length;Te++)Q(se[Te],he);se.length===2?H(D,y,b):D.projectionMatrix.copy(y.projectionMatrix),te(q,D,he)};function te(q,Z,ie){ie===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ml*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(q){return p[q]};let de=null;function ye(q,Z){if(h=Z.getViewerPose(c||a),g=Z,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let he=!1;ie.length!==D.cameras.length&&(D.cameras.length=0,he=!0);for(let Pe=0;Pe<ie.length;Pe++){const Fe=ie[Pe];let Ke=null;if(f!==null)Ke=f.getViewport(Fe);else{const k=d.getViewSubImage(u,Fe);Ke=k.viewport,Pe===0&&(e.setRenderTargetTextures(S,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(S))}let He=B[Pe];He===void 0&&(He=new $t,He.layers.enable(Pe),He.viewport=new Tt,B[Pe]=He),He.matrix.fromArray(Fe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Fe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Pe===0&&(D.matrix.copy(He.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),he===!0&&D.cameras.push(He)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const Pe=d.getDepthInformation(ie[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,s.renderState)}if(se&&se.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Pe=0;Pe<ie.length;Pe++){const Fe=ie[Pe].camera;if(Fe){let Ke=p[Fe];Ke||(Ke=new Od,p[Fe]=Ke);const He=d.getCameraImage(Fe);Ke.sourceTexture=He}}}}for(let ie=0;ie<x.length;ie++){const he=M[ie],se=x[ie];he!==null&&se!==void 0&&se.update(he,Z,c||a)}de&&de(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const _e=new Bd;_e.setAnimationLoop(ye),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}}const ui=new Tn,ny=new Et;function iy(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Id(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,R,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),R=T.envMap,S=T.envMapRotation;R&&(m.envMap.value=R,ui.copy(S),ui.x*=-1,ui.y*=-1,ui.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(ny.makeRotationFromEuler(ui)),m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sy(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,R){const S=R.program;i.uniformBlockBinding(T,S)}function c(T,R){let S=s[T.id];S===void 0&&(g(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",m));const x=R.program;i.updateUBOMapping(T,x);const M=e.render.frame;r[T.id]!==M&&(u(T),r[T.id]=M)}function h(T){const R=d();T.__bindingPointIndex=R;const S=n.createBuffer(),x=T.__size,M=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,x,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,S),S}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const R=s[T.id],S=T.uniforms,x=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let M=0,L=S.length;M<L;M++){const O=Array.isArray(S[M])?S[M]:[S[M]];for(let y=0,b=O.length;y<b;y++){const B=O[y];if(f(B,M,y,x)===!0){const D=B.__offset,C=Array.isArray(B.value)?B.value:[B.value];let I=0;for(let N=0;N<C.length;N++){const F=C[N],U=_(F);typeof F=="number"||typeof F=="boolean"?(B.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,D+I,B.__data)):F.isMatrix3?(B.__data[0]=F.elements[0],B.__data[1]=F.elements[1],B.__data[2]=F.elements[2],B.__data[3]=0,B.__data[4]=F.elements[3],B.__data[5]=F.elements[4],B.__data[6]=F.elements[5],B.__data[7]=0,B.__data[8]=F.elements[6],B.__data[9]=F.elements[7],B.__data[10]=F.elements[8],B.__data[11]=0):(F.toArray(B.__data,I),I+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,R,S,x){const M=T.value,L=R+"_"+S;if(x[L]===void 0)return typeof M=="number"||typeof M=="boolean"?x[L]=M:x[L]=M.clone(),!0;{const O=x[L];if(typeof M=="number"||typeof M=="boolean"){if(O!==M)return x[L]=M,!0}else if(O.equals(M)===!1)return O.copy(M),!0}return!1}function g(T){const R=T.uniforms;let S=0;const x=16;for(let L=0,O=R.length;L<O;L++){const y=Array.isArray(R[L])?R[L]:[R[L]];for(let b=0,B=y.length;b<B;b++){const D=y[b],C=Array.isArray(D.value)?D.value:[D.value];for(let I=0,N=C.length;I<N;I++){const F=C[I],U=_(F),z=S%x,K=z%U.boundary,H=z+K;S+=K,H!==0&&x-H<U.storage&&(S+=x-H),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=U.storage}}}const M=S%x;return M>0&&(S+=x-M),T.__size=S,T.__cache={},this}function _(T){const R={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(R.boundary=4,R.storage=4):T.isVector2?(R.boundary=8,R.storage=8):T.isVector3||T.isColor?(R.boundary=16,R.storage=12):T.isVector4?(R.boundary=16,R.storage=16):T.isMatrix3?(R.boundary=48,R.storage=48):T.isMatrix4?(R.boundary=64,R.storage=64):T.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",T),R}function m(T){const R=T.target;R.removeEventListener("dispose",m);const S=a.indexOf(R.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const ry=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pn=null;function ay(){return pn===null&&(pn=new Kf(ry,16,16,ls,Hn),pn.name="DFG_LUT",pn.minFilter=St,pn.magFilter=St,pn.wrapS=On,pn.wrapT=On,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class oy{constructor(e={}){const{canvas:t=bf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Kt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=f,m=new Set([ql,Xl,Wl]),p=new Set([Kt,wn,Vs,Gs,Gl,Hl]),T=new Uint32Array(4),R=new Int32Array(4);let S=null,x=null;const M=[],L=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=nn;let B=0,D=0,C=null,I=-1,N=null;const F=new Tt,U=new Tt;let z=null;const K=new at(0);let H=0,Q=t.width,te=t.height,de=1,ye=null,_e=null;const q=new Tt(0,0,Q,te),Z=new Tt(0,0,Q,te);let ie=!1;const he=new Ql;let se=!1,Te=!1;const Ge=new Et,Pe=new Y,Fe=new Tt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function k(){return C===null?de:1}let E=i;function $(w,W){return t.getContext(w,W)}try{const w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zl}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",ct,!1),E===null){const W="webgl2";if(E=$(W,w),E===null)throw $(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw ot("WebGLRenderer: "+w.message),w}let oe,Ne,pe,P,v,G,ne,le,X,ue,ae,xe,ze,fe,be,Le,ke,Se,je,V,Re,ve,Ie,ge;function ce(){oe=new ag(E),oe.init(),ve=new Z_(E,oe),Ne=new Z0(E,oe,e,ve),pe=new $_(E,oe),Ne.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),P=new cg(E),v=new N_,G=new K_(E,oe,pe,v,Ne,ve,P),ne=new Q0(y),le=new rg(y),X=new fp(E),Ie=new $0(E,X),ue=new og(E,X,P,Ie),ae=new dg(E,ue,X,P),je=new hg(E,Ne,G),Le=new J0(v),xe=new D_(y,ne,le,oe,Ne,Ie,Le),ze=new iy(y,v),fe=new F_,be=new G_(oe),Se=new j0(y,ne,le,pe,ae,g,l),ke=new Y_(y,ae,Ne),ge=new sy(E,P,Ne,pe),V=new K0(E,oe,P),Re=new lg(E,oe,P),P.programs=xe.programs,y.capabilities=Ne,y.extensions=oe,y.properties=v,y.renderLists=fe,y.shadowMap=ke,y.state=pe,y.info=P}ce(),_!==Kt&&(O=new fg(_,t.width,t.height,s,r));const Ee=new ty(y,E);this.xr=Ee,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(w){w!==void 0&&(de=w,this.setSize(Q,te,!1))},this.getSize=function(w){return w.set(Q,te)},this.setSize=function(w,W,ee=!0){if(Ee.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=w,te=W,t.width=Math.floor(w*de),t.height=Math.floor(W*de),ee===!0&&(t.style.width=w+"px",t.style.height=W+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(Q*de,te*de).floor()},this.setDrawingBufferSize=function(w,W,ee){Q=w,te=W,de=ee,t.width=Math.floor(w*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(_===Kt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,W,ee,J){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,W,ee,J),pe.viewport(F.copy(q).multiplyScalar(de).round())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,W,ee,J){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,W,ee,J),pe.scissor(U.copy(Z).multiplyScalar(de).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){pe.setScissorTest(ie=w)},this.setOpaqueSort=function(w){ye=w},this.setTransparentSort=function(w){_e=w},this.getClearColor=function(w){return w.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,ee=!0){let J=0;if(w){let j=!1;if(C!==null){const Me=C.texture.format;j=m.has(Me)}if(j){const Me=C.texture.type,De=p.has(Me),we=Se.getClearColor(),Ue=Se.getClearAlpha(),Be=we.r,We=we.g,Xe=we.b;De?(T[0]=Be,T[1]=We,T[2]=Xe,T[3]=Ue,E.clearBufferuiv(E.COLOR,0,T)):(R[0]=Be,R[1]=We,R[2]=Xe,R[3]=Ue,E.clearBufferiv(E.COLOR,0,R))}else J|=E.COLOR_BUFFER_BIT}W&&(J|=E.DEPTH_BUFFER_BIT),ee&&(J|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),Se.dispose(),fe.dispose(),be.dispose(),v.dispose(),ne.dispose(),le.dispose(),ae.dispose(),Ie.dispose(),ge.dispose(),xe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",ai),Ee.removeEventListener("sessionend",Ss),Rn.stop()};function Ye(w){w.preventDefault(),Jr("WebGLRenderer: Context Lost."),b=!0}function _t(){Jr("WebGLRenderer: Context Restored."),b=!1;const w=P.autoReset,W=ke.enabled,ee=ke.autoUpdate,J=ke.needsUpdate,j=ke.type;ce(),P.autoReset=w,ke.enabled=W,ke.autoUpdate=ee,ke.needsUpdate=J,ke.type=j}function ct(w){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Jt(w){const W=w.target;W.removeEventListener("dispose",Jt),ln(W)}function ln(w){_a(w),v.remove(w)}function _a(w){const W=v.get(w).programs;W!==void 0&&(W.forEach(function(ee){xe.releaseProgram(ee)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ee,J,j,Me){W===null&&(W=Ke);const De=j.isMesh&&j.matrixWorld.determinant()<0,we=va(w,W,ee,J,j);pe.setMaterial(J,De);let Ue=ee.index,Be=1;if(J.wireframe===!0){if(Ue=ue.getWireframeAttribute(ee),Ue===void 0)return;Be=2}const We=ee.drawRange,Xe=ee.attributes.position;let Qe=We.start*Be,ut=(We.start+We.count)*Be;Me!==null&&(Qe=Math.max(Qe,Me.start*Be),ut=Math.min(ut,(Me.start+Me.count)*Be)),Ue!==null?(Qe=Math.max(Qe,0),ut=Math.min(ut,Ue.count)):Xe!=null&&(Qe=Math.max(Qe,0),ut=Math.min(ut,Xe.count));const xt=ut-Qe;if(xt<0||xt===1/0)return;Ie.setup(j,J,we,ee,Ue);let bt,ft=V;if(Ue!==null&&(bt=X.get(Ue),ft=Re,ft.setIndex(bt)),j.isMesh)J.wireframe===!0?(pe.setLineWidth(J.wireframeLinewidth*k()),ft.setMode(E.LINES)):ft.setMode(E.TRIANGLES);else if(j.isLine){let qe=J.linewidth;qe===void 0&&(qe=1),pe.setLineWidth(qe*k()),j.isLineSegments?ft.setMode(E.LINES):j.isLineLoop?ft.setMode(E.LINE_LOOP):ft.setMode(E.LINE_STRIP)}else j.isPoints?ft.setMode(E.POINTS):j.isSprite&&ft.setMode(E.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Hs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ft.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qe=j._multiDrawStarts,dt=j._multiDrawCounts,it=j._multiDrawCount,Nt=Ue?X.get(Ue).bytesPerElement:1,qn=v.get(J).currentProgram.getUniforms();for(let Bt=0;Bt<it;Bt++)qn.setValue(E,"_gl_DrawID",Bt),ft.render(qe[Bt]/Nt,dt[Bt])}else if(j.isInstancedMesh)ft.renderInstances(Qe,xt,j.count);else if(ee.isInstancedBufferGeometry){const qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,dt=Math.min(ee.instanceCount,qe);ft.renderInstances(Qe,xt,dt)}else ft.render(Qe,xt)};function Qs(w,W,ee){w.transparent===!0&&w.side===Ut&&w.forceSinglePass===!1?(w.side=qt,w.needsUpdate=!0,Pi(w,W,ee),w.side=Gn,w.needsUpdate=!0,Pi(w,W,ee),w.side=Ut):Pi(w,W,ee)}this.compile=function(w,W,ee=null){ee===null&&(ee=w),x=be.get(ee),x.init(W),L.push(x),ee.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),w!==ee&&w.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const J=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let De=0;De<Me.length;De++){const we=Me[De];Qs(we,ee,j),J.add(we)}else Qs(Me,ee,j),J.add(Me)}),x=L.pop(),J},this.compileAsync=function(w,W,ee=null){const J=this.compile(w,W,ee);return new Promise(j=>{function Me(){if(J.forEach(function(De){v.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){j(w);return}setTimeout(Me,10)}oe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let vs=null;function ya(w){vs&&vs(w)}function ai(){Rn.stop()}function Ss(){Rn.start()}const Rn=new Bd;Rn.setAnimationLoop(ya),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(w){vs=w,Ee.setAnimationLoop(w),w===null?Rn.stop():Rn.start()},Ee.addEventListener("sessionstart",ai),Ee.addEventListener("sessionend",Ss),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const ee=Ee.enabled===!0&&Ee.isPresenting===!0,J=O!==null&&(C===null||ee)&&O.begin(y,C);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(W),W=Ee.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,W,C),x=be.get(w,L.length),x.init(W),L.push(x),Ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),he.setFromProjectionMatrix(Ge,xn,W.reversedDepth),Te=this.localClippingEnabled,se=Le.init(this.clippingPlanes,Te),S=fe.get(w,M.length),S.init(),M.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const De=y.xr.getDepthSensingMesh();De!==null&&xs(De,W,-1/0,y.sortObjects)}xs(w,W,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(ye,_e),He=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,He&&Se.addToRenderList(S,w),this.info.render.frame++,se===!0&&Le.beginShadows();const j=x.state.shadowsArray;if(ke.render(j,w,W),se===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&O.hasRenderPass())===!1){const De=S.opaque,we=S.transmissive;if(x.setupLights(),W.isArrayCamera){const Ue=W.cameras;if(we.length>0)for(let Be=0,We=Ue.length;Be<We;Be++){const Xe=Ue[Be];tr(De,we,w,Xe)}He&&Se.render(w);for(let Be=0,We=Ue.length;Be<We;Be++){const Xe=Ue[Be];er(S,w,Xe,Xe.viewport)}}else we.length>0&&tr(De,we,w,W),He&&Se.render(w),er(S,w,W)}C!==null&&D===0&&(G.updateMultisampleRenderTarget(C),G.updateRenderTargetMipmap(C)),J&&O.end(y),w.isScene===!0&&w.onAfterRender(y,w,W),Ie.resetDefaultState(),I=-1,N=null,L.pop(),L.length>0?(x=L[L.length-1],se===!0&&Le.setGlobalState(y.clippingPlanes,x.state.camera)):x=null,M.pop(),M.length>0?S=M[M.length-1]:S=null};function xs(w,W,ee,J){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||he.intersectsSprite(w)){J&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ge);const De=ae.update(w),we=w.material;we.visible&&S.push(w,De,we,ee,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||he.intersectsObject(w))){const De=ae.update(w),we=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Fe.copy(De.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Ge)),Array.isArray(we)){const Ue=De.groups;for(let Be=0,We=Ue.length;Be<We;Be++){const Xe=Ue[Be],Qe=we[Xe.materialIndex];Qe&&Qe.visible&&S.push(w,De,Qe,ee,Fe.z,Xe)}}else we.visible&&S.push(w,De,we,ee,Fe.z,null)}}const Me=w.children;for(let De=0,we=Me.length;De<we;De++)xs(Me[De],W,ee,J)}function er(w,W,ee,J){const{opaque:j,transmissive:Me,transparent:De}=w;x.setupLightsView(ee),se===!0&&Le.setGlobalState(y.clippingPlanes,ee),J&&pe.viewport(F.copy(J)),j.length>0&&Ci(j,W,ee),Me.length>0&&Ci(Me,W,ee),De.length>0&&Ci(De,W,ee),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function tr(w,W,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[J.id]===void 0){const Qe=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[J.id]=new Mn(1,1,{generateMipmaps:!0,type:Qe?Hn:Kt,minFilter:vi,samples:Ne.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const Me=x.state.transmissionRenderTarget[J.id],De=J.viewport||F;Me.setSize(De.z*y.transmissionResolutionScale,De.w*y.transmissionResolutionScale);const we=y.getRenderTarget(),Ue=y.getActiveCubeFace(),Be=y.getActiveMipmapLevel();y.setRenderTarget(Me),y.getClearColor(K),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),He&&Se.render(ee);const We=y.toneMapping;y.toneMapping=En;const Xe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),x.setupLightsView(J),se===!0&&Le.setGlobalState(y.clippingPlanes,J),Ci(w,ee,J),G.updateMultisampleRenderTarget(Me),G.updateRenderTargetMipmap(Me),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ut=0,xt=W.length;ut<xt;ut++){const bt=W[ut],{object:ft,geometry:qe,material:dt,group:it}=bt;if(dt.side===Ut&&ft.layers.test(J.layers)){const Nt=dt.side;dt.side=qt,dt.needsUpdate=!0,bs(ft,ee,J,qe,dt,it),dt.side=Nt,dt.needsUpdate=!0,Qe=!0}}Qe===!0&&(G.updateMultisampleRenderTarget(Me),G.updateRenderTargetMipmap(Me))}y.setRenderTarget(we,Ue,Be),y.setClearColor(K,H),Xe!==void 0&&(J.viewport=Xe),y.toneMapping=We}function Ci(w,W,ee){const J=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Me=w.length;j<Me;j++){const De=w[j],{object:we,geometry:Ue,group:Be}=De;let We=De.material;We.allowOverride===!0&&J!==null&&(We=J),we.layers.test(ee.layers)&&bs(we,W,ee,Ue,We,Be)}}function bs(w,W,ee,J,j,Me){w.onBeforeRender(y,W,ee,J,j,Me),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(y,W,ee,J,w,Me),j.transparent===!0&&j.side===Ut&&j.forceSinglePass===!1?(j.side=qt,j.needsUpdate=!0,y.renderBufferDirect(ee,W,J,j,w,Me),j.side=Gn,j.needsUpdate=!0,y.renderBufferDirect(ee,W,J,j,w,Me),j.side=Ut):y.renderBufferDirect(ee,W,J,j,w,Me),w.onAfterRender(y,W,ee,J,j,Me)}function Pi(w,W,ee){W.isScene!==!0&&(W=Ke);const J=v.get(w),j=x.state.lights,Me=x.state.shadowsArray,De=j.state.version,we=xe.getParameters(w,j.state,Me,W,ee),Ue=xe.getProgramCacheKey(we);let Be=J.programs;J.environment=w.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(w.isMeshStandardMaterial?le:ne).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Jt),Be=new Map,J.programs=Be);let We=Be.get(Ue);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===De)return ir(w,we),We}else we.uniforms=xe.getUniforms(w),w.onBeforeCompile(we,y),We=xe.acquireProgram(we,Ue),Be.set(Ue,We),J.uniforms=we.uniforms;const Xe=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=Le.uniform),ir(w,we),J.needsLights=sr(w),J.lightsStateVersion=De,J.needsLights&&(Xe.ambientLightColor.value=j.state.ambient,Xe.lightProbe.value=j.state.probe,Xe.directionalLights.value=j.state.directional,Xe.directionalLightShadows.value=j.state.directionalShadow,Xe.spotLights.value=j.state.spot,Xe.spotLightShadows.value=j.state.spotShadow,Xe.rectAreaLights.value=j.state.rectArea,Xe.ltc_1.value=j.state.rectAreaLTC1,Xe.ltc_2.value=j.state.rectAreaLTC2,Xe.pointLights.value=j.state.point,Xe.pointLightShadows.value=j.state.pointShadow,Xe.hemisphereLights.value=j.state.hemi,Xe.directionalShadowMap.value=j.state.directionalShadowMap,Xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xe.spotShadowMap.value=j.state.spotShadowMap,Xe.spotLightMatrix.value=j.state.spotLightMatrix,Xe.spotLightMap.value=j.state.spotLightMap,Xe.pointShadowMap.value=j.state.pointShadowMap,Xe.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=We,J.uniformsList=null,We}function nr(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Hr.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function ir(w,W){const ee=v.get(w);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function va(w,W,ee,J,j){W.isScene!==!0&&(W=Ke),G.resetTextureUnits();const Me=W.fog,De=J.isMeshStandardMaterial?W.environment:null,we=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:cs,Ue=(J.isMeshStandardMaterial?le:ne).get(J.envMap||De),Be=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,We=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xe=!!ee.morphAttributes.position,Qe=!!ee.morphAttributes.normal,ut=!!ee.morphAttributes.color;let xt=En;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=y.toneMapping);const bt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ft=bt!==void 0?bt.length:0,qe=v.get(J),dt=x.state.lights;if(se===!0&&(Te===!0||w!==N)){const Ve=w===N&&J.id===I;Le.setState(J,w,Ve)}let it=!1;J.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==dt.state.version||qe.outputColorSpace!==we||j.isBatchedMesh&&qe.batching===!1||!j.isBatchedMesh&&qe.batching===!0||j.isBatchedMesh&&qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qe.instancingMorph===!1&&j.morphTexture!==null||qe.envMap!==Ue||J.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Le.numPlanes||qe.numIntersection!==Le.numIntersection)||qe.vertexAlphas!==Be||qe.vertexTangents!==We||qe.morphTargets!==Xe||qe.morphNormals!==Qe||qe.morphColors!==ut||qe.toneMapping!==xt||qe.morphTargetsCount!==ft)&&(it=!0):(it=!0,qe.__version=J.version);let Nt=qe.currentProgram;it===!0&&(Nt=Pi(J,W,j));let qn=!1,Bt=!1,me=!1;const A=Nt.getUniforms(),re=qe.uniforms;if(pe.useProgram(Nt.program)&&(qn=!0,Bt=!0,me=!0),J.id!==I&&(I=J.id,Bt=!0),qn||N!==w){pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),A.setValue(E,"projectionMatrix",w.projectionMatrix),A.setValue(E,"viewMatrix",w.matrixWorldInverse);const nt=A.map.cameraPosition;nt!==void 0&&nt.setValue(E,Pe.setFromMatrixPosition(w.matrixWorld)),Ne.logarithmicDepthBuffer&&A.setValue(E,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&A.setValue(E,"isOrthographic",w.isOrthographicCamera===!0),N!==w&&(N=w,Bt=!0,me=!0)}if(qe.needsLights&&(dt.state.directionalShadowMap.length>0&&A.setValue(E,"directionalShadowMap",dt.state.directionalShadowMap,G),dt.state.spotShadowMap.length>0&&A.setValue(E,"spotShadowMap",dt.state.spotShadowMap,G),dt.state.pointShadowMap.length>0&&A.setValue(E,"pointShadowMap",dt.state.pointShadowMap,G)),j.isSkinnedMesh){A.setOptional(E,j,"bindMatrix"),A.setOptional(E,j,"bindMatrixInverse");const Ve=j.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),A.setValue(E,"boneTexture",Ve.boneTexture,G))}j.isBatchedMesh&&(A.setOptional(E,j,"batchingTexture"),A.setValue(E,"batchingTexture",j._matricesTexture,G),A.setOptional(E,j,"batchingIdTexture"),A.setValue(E,"batchingIdTexture",j._indirectTexture,G),A.setOptional(E,j,"batchingColorTexture"),j._colorsTexture!==null&&A.setValue(E,"batchingColorTexture",j._colorsTexture,G));const Oe=ee.morphAttributes;if((Oe.position!==void 0||Oe.normal!==void 0||Oe.color!==void 0)&&je.update(j,ee,Nt),(Bt||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,A.setValue(E,"receiveShadow",j.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(re.envMap.value=Ue,re.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(re.envMapIntensity.value=W.environmentIntensity),re.dfgLUT!==void 0&&(re.dfgLUT.value=ay()),Bt&&(A.setValue(E,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&Sa(re,me),Me&&J.fog===!0&&ze.refreshFogUniforms(re,Me),ze.refreshMaterialUniforms(re,J,de,te,x.state.transmissionRenderTarget[w.id]),Hr.upload(E,nr(qe),re,G)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Hr.upload(E,nr(qe),re,G),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&A.setValue(E,"center",j.center),A.setValue(E,"modelViewMatrix",j.modelViewMatrix),A.setValue(E,"normalMatrix",j.normalMatrix),A.setValue(E,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ve=J.uniformsGroups;for(let nt=0,pt=Ve.length;nt<pt;nt++){const Wt=Ve[nt];ge.update(Wt,Nt),ge.bind(Wt,Nt)}}return Nt}function Sa(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function sr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,W,ee){const J=v.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),v.get(w.texture).__webglTexture=W,v.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ee,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const ee=v.get(w);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const xa=E.createFramebuffer();this.setRenderTarget=function(w,W=0,ee=0){C=w,B=W,D=ee;let J=null,j=!1,Me=!1;if(w){const we=v.get(w);if(we.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(E.FRAMEBUFFER,we.__webglFramebuffer),F.copy(w.viewport),U.copy(w.scissor),z=w.scissorTest,pe.viewport(F),pe.scissor(U),pe.setScissorTest(z),I=-1;return}else if(we.__webglFramebuffer===void 0)G.setupRenderTarget(w);else if(we.__hasExternalTextures)G.rebindTextures(w,v.get(w.texture).__webglTexture,v.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const We=w.depthTexture;if(we.__boundDepthTexture!==We){if(We!==null&&v.has(We)&&(w.width!==We.image.width||w.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Me=!0);const Be=v.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?J=Be[W][ee]:J=Be[W],j=!0):w.samples>0&&G.useMultisampledRTT(w)===!1?J=v.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?J=Be[ee]:J=Be,F.copy(w.viewport),U.copy(w.scissor),z=w.scissorTest}else F.copy(q).multiplyScalar(de).floor(),U.copy(Z).multiplyScalar(de).floor(),z=ie;if(ee!==0&&(J=xa),pe.bindFramebuffer(E.FRAMEBUFFER,J)&&pe.drawBuffers(w,J),pe.viewport(F),pe.scissor(U),pe.setScissorTest(z),j){const we=v.get(w.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+W,we.__webglTexture,ee)}else if(Me){const we=W;for(let Ue=0;Ue<w.textures.length;Ue++){const Be=v.get(w.textures[Ue]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ue,Be.__webglTexture,ee,we)}}else if(w!==null&&ee!==0){const we=v.get(w.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,we.__webglTexture,ee)}I=-1},this.readRenderTargetPixels=function(w,W,ee,J,j,Me,De,we=0){if(!(w&&w.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=v.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){pe.bindFramebuffer(E.FRAMEBUFFER,Ue);try{const Be=w.textures[we],We=Be.format,Xe=Be.type;if(!Ne.textureFormatReadable(We)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Xe)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-J&&ee>=0&&ee<=w.height-j&&(w.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+we),E.readPixels(W,ee,J,j,ve.convert(We),ve.convert(Xe),Me))}finally{const Be=C!==null?v.get(C).__webglFramebuffer:null;pe.bindFramebuffer(E.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,W,ee,J,j,Me,De,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=v.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue)if(W>=0&&W<=w.width-J&&ee>=0&&ee<=w.height-j){pe.bindFramebuffer(E.FRAMEBUFFER,Ue);const Be=w.textures[we],We=Be.format,Xe=Be.type;if(!Ne.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Qe),E.bufferData(E.PIXEL_PACK_BUFFER,Me.byteLength,E.STREAM_READ),w.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+we),E.readPixels(W,ee,J,j,ve.convert(We),ve.convert(Xe),0);const ut=C!==null?v.get(C).__webglFramebuffer:null;pe.bindFramebuffer(E.FRAMEBUFFER,ut);const xt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Ef(E,xt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Qe),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Me),E.deleteBuffer(Qe),E.deleteSync(xt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,ee=0){const J=Math.pow(2,-ee),j=Math.floor(w.image.width*J),Me=Math.floor(w.image.height*J),De=W!==null?W.x:0,we=W!==null?W.y:0;G.setTexture2D(w,0),E.copyTexSubImage2D(E.TEXTURE_2D,ee,0,0,De,we,j,Me),pe.unbindTexture()};const ba=E.createFramebuffer(),Es=E.createFramebuffer();this.copyTextureToTexture=function(w,W,ee=null,J=null,j=0,Me=null){Me===null&&(j!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=j,j=0):Me=0);let De,we,Ue,Be,We,Xe,Qe,ut,xt;const bt=w.isCompressedTexture?w.mipmaps[Me]:w.image;if(ee!==null)De=ee.max.x-ee.min.x,we=ee.max.y-ee.min.y,Ue=ee.isBox3?ee.max.z-ee.min.z:1,Be=ee.min.x,We=ee.min.y,Xe=ee.isBox3?ee.min.z:0;else{const Oe=Math.pow(2,-j);De=Math.floor(bt.width*Oe),we=Math.floor(bt.height*Oe),w.isDataArrayTexture?Ue=bt.depth:w.isData3DTexture?Ue=Math.floor(bt.depth*Oe):Ue=1,Be=0,We=0,Xe=0}J!==null?(Qe=J.x,ut=J.y,xt=J.z):(Qe=0,ut=0,xt=0);const ft=ve.convert(W.format),qe=ve.convert(W.type);let dt;W.isData3DTexture?(G.setTexture3D(W,0),dt=E.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(G.setTexture2DArray(W,0),dt=E.TEXTURE_2D_ARRAY):(G.setTexture2D(W,0),dt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,W.unpackAlignment);const it=E.getParameter(E.UNPACK_ROW_LENGTH),Nt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),qn=E.getParameter(E.UNPACK_SKIP_PIXELS),Bt=E.getParameter(E.UNPACK_SKIP_ROWS),me=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,bt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,bt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Be),E.pixelStorei(E.UNPACK_SKIP_ROWS,We),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Xe);const A=w.isDataArrayTexture||w.isData3DTexture,re=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const Oe=v.get(w),Ve=v.get(W),nt=v.get(Oe.__renderTarget),pt=v.get(Ve.__renderTarget);pe.bindFramebuffer(E.READ_FRAMEBUFFER,nt.__webglFramebuffer),pe.bindFramebuffer(E.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Wt=0;Wt<Ue;Wt++)A&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,v.get(w).__webglTexture,j,Xe+Wt),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,v.get(W).__webglTexture,Me,xt+Wt)),E.blitFramebuffer(Be,We,De,we,Qe,ut,De,we,E.DEPTH_BUFFER_BIT,E.NEAREST);pe.bindFramebuffer(E.READ_FRAMEBUFFER,null),pe.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||v.has(w)){const Oe=v.get(w),Ve=v.get(W);pe.bindFramebuffer(E.READ_FRAMEBUFFER,ba),pe.bindFramebuffer(E.DRAW_FRAMEBUFFER,Es);for(let nt=0;nt<Ue;nt++)A?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Oe.__webglTexture,j,Xe+nt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Oe.__webglTexture,j),re?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ve.__webglTexture,Me,xt+nt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ve.__webglTexture,Me),j!==0?E.blitFramebuffer(Be,We,De,we,Qe,ut,De,we,E.COLOR_BUFFER_BIT,E.NEAREST):re?E.copyTexSubImage3D(dt,Me,Qe,ut,xt+nt,Be,We,De,we):E.copyTexSubImage2D(dt,Me,Qe,ut,Be,We,De,we);pe.bindFramebuffer(E.READ_FRAMEBUFFER,null),pe.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else re?w.isDataTexture||w.isData3DTexture?E.texSubImage3D(dt,Me,Qe,ut,xt,De,we,Ue,ft,qe,bt.data):W.isCompressedArrayTexture?E.compressedTexSubImage3D(dt,Me,Qe,ut,xt,De,we,Ue,ft,bt.data):E.texSubImage3D(dt,Me,Qe,ut,xt,De,we,Ue,ft,qe,bt):w.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Me,Qe,ut,De,we,ft,qe,bt.data):w.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Me,Qe,ut,bt.width,bt.height,ft,bt.data):E.texSubImage2D(E.TEXTURE_2D,Me,Qe,ut,De,we,ft,qe,bt);E.pixelStorei(E.UNPACK_ROW_LENGTH,it),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Nt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,qn),E.pixelStorei(E.UNPACK_SKIP_ROWS,Bt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,me),Me===0&&W.generateMipmaps&&E.generateMipmap(dt),pe.unbindTexture()},this.initRenderTarget=function(w){v.get(w).__webglFramebuffer===void 0&&G.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?G.setTextureCube(w,0):w.isData3DTexture?G.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?G.setTexture2DArray(w,0):G.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){B=0,D=0,C=null,pe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}let $i=null;function Ks(){if(!$i){const n=window.AudioContext||window.webkitAudioContext;n&&($i=new n)}return $i&&$i.state==="suspended"&&$i.resume().catch(()=>{}),$i}function Wd(){try{const n=Ks();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="sine",e.frequency.setValueAtTime(95+Math.random()*20,n.currentTime),e.frequency.exponentialRampToValueAtTime(35,n.currentTime+.08),t.gain.setValueAtTime(.06,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.08),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.08)}catch{}}function Xd(){try{const n=Ks();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="triangle",e.frequency.setValueAtTime(1850,n.currentTime),e.frequency.exponentialRampToValueAtTime(2450,n.currentTime+.12),t.gain.setValueAtTime(.18,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.28),e.connect(t),t.connect(n.destination),e.start(n.currentTime),e.stop(n.currentTime+.28),[523.25,659.25,783.99,1046.5].forEach((a,o)=>{const l=n.createOscillator(),c=n.createGain();l.type="sine",l.frequency.setValueAtTime(a,n.currentTime);const h=n.currentTime+o*.05;c.gain.setValueAtTime(0,h),c.gain.linearRampToValueAtTime(.16,h+.02),c.gain.exponentialRampToValueAtTime(1e-4,h+.5),l.connect(c),c.connect(n.destination),l.start(h),l.stop(h+.55)});const s=n.createOscillator(),r=n.createGain();s.type="sine",s.frequency.setValueAtTime(110,n.currentTime+.12),s.frequency.exponentialRampToValueAtTime(42,n.currentTime+.45),r.gain.setValueAtTime(.26,n.currentTime+.12),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.45),s.connect(r),r.connect(n.destination),s.start(n.currentTime+.12),s.stop(n.currentTime+.45)}catch{}}function ly(){try{const n=Ks();if(!n)return;[523.25,659.25,783.99,1046.5].forEach((t,i)=>{const s=n.createOscillator(),r=n.createGain();s.type="triangle",s.frequency.setValueAtTime(t,n.currentTime);const a=n.currentTime+i*.055;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.18,a+.015),r.gain.exponentialRampToValueAtTime(1e-4,a+.45),s.connect(r),r.connect(n.destination),s.start(a),s.stop(a+.5)})}catch{}}function qd(){try{const n=Ks();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="triangle",e.frequency.setValueAtTime(440,n.currentTime),e.frequency.exponentialRampToValueAtTime(880,n.currentTime+.15),t.gain.setValueAtTime(.08,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.18),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.18)}catch{}}function Yd(){try{const n=Ks();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="sine",e.frequency.setValueAtTime(600,n.currentTime),e.frequency.exponentialRampToValueAtTime(150,n.currentTime+.25),t.gain.setValueAtTime(.12,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.25),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.25)}catch{}}const Wr=Object.freeze(Object.defineProperty({__proto__:null,playCabinetExit:Yd,playCabinetHighlight:qd,playCoinDrop:Xd,playDopamineChime:ly,playFootstep:Wd},Symbol.toStringTag,{value:"Module"}));class cy{constructor(e,t=null){this.scene=e,this.identity=t||{tag:"MARC1",color:62975,colorHex:"#00f5ff"},this.tag=(this.identity.tag||"MARC1").slice(0,5).toUpperCase(),this.colorNum=this.identity.color||62975,this.colorHex=this.identity.colorHex||"#00f5ff",this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetRotation=Math.PI,this.speed=7.5,this.radius=.45,this.velocityY=0,this.gravity=-26,this.jumpStrength=8.5,this.isGrounded=!0,this.isMoving=!1,this.walkCycle=0,this.footstepTimer=0,this.keys={forward:!1,backward:!1,left:!1,right:!1},this.joystickVector={x:0,y:0},this.navTarget=null,this.createAvatarMesh(),this.createNameTagSprite(),this.createSpeechBubbleSprite(),this.bindKeyboard()}resetMovement(){this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1,this.isMoving=!1}setIdentity(e){e&&(this.identity=e,this.tag=(e.tag||"MARC1").slice(0,5).toUpperCase(),this.colorNum=e.color||62975,this.colorHex=e.colorHex||"#00f5ff",this.torso&&this.torso.material.color.setHex(this.colorNum),this.leftFoot&&this.leftFoot.material.color.setHex(this.colorNum),this.rightFoot&&this.rightFoot.material.color.setHex(this.colorNum),this.nameSprite&&(this.group.remove(this.nameSprite),this.createNameTagSprite()))}createNameTagSprite(){const e=document.createElement("canvas");e.width=320,e.height=110;const t=e.getContext("2d");t.fillStyle="rgba(8, 9, 16, 0.88)",t.strokeStyle=this.colorHex,t.lineWidth=4,t.beginPath(),t.roundRect(10,10,e.width-20,e.height-20,24),t.fill(),t.stroke(),t.font='bold 36px "Press Start 2P", monospace, sans-serif',t.fillStyle="#ffd32a",t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ffd32a",t.shadowBlur=8,t.fillText(this.tag,e.width/2,42),t.shadowBlur=0,t.font='bold 16px "Outfit", sans-serif',t.fillStyle=this.colorHex,t.fillText("VOCÊ",e.width/2,78);const i=new an(e),s=new ds({map:i,transparent:!0,depthTest:!1});this.nameSprite=new Ws(s),this.nameSprite.position.set(0,2.35,0),this.nameSprite.scale.set(1.6,.55,1),this.group.add(this.nameSprite)}createSpeechBubbleSprite(){const e=document.createElement("canvas");e.width=384,e.height=140,this.bubbleCanvas=e,this.bubbleCtx=e.getContext("2d"),this.bubbleTexture=new an(e),this.bubbleTexture.minFilter=St;const t=new ds({map:this.bubbleTexture,transparent:!0,depthTest:!1});this.speechSprite=new Ws(t),this.speechSprite.position.set(0,3.1,0),this.speechSprite.scale.set(2.2,.8,1),this.speechSprite.visible=!1,this.speechTimer=0,this.group.add(this.speechSprite)}showSpeechBubble(e){if(!e||!this.speechSprite)return;const t=this.bubbleCtx,i=this.bubbleCanvas.width,s=this.bubbleCanvas.height;t.clearRect(0,0,i,s),t.fillStyle="rgba(8, 12, 28, 0.94)",t.strokeStyle=this.colorHex||"#00f5ff",t.lineWidth=4,t.beginPath(),t.roundRect(10,10,i-20,s-36,18),t.fill(),t.stroke(),t.beginPath(),t.moveTo(i/2-14,s-26),t.lineTo(i/2,s-6),t.lineTo(i/2+14,s-26),t.closePath(),t.fill(),t.stroke(),t.fillStyle="rgba(8, 12, 28, 0.94)",t.fillRect(i/2-12,s-28,24,6),t.fillStyle="#ffffff",t.font='bold 22px "Outfit", "Segoe UI", sans-serif',t.textAlign="center",t.textBaseline="middle";const r=22,a=e.trim();if(a.length<=r)t.fillText(a,i/2,(s-36)/2+10);else{let o=a.lastIndexOf(" ",r);(o===-1||o<8)&&(o=r);const l=a.substring(0,o).trim(),c=a.substring(o,o+r).trim();t.fillText(l,i/2,34),t.fillText(c+(a.length>o+r?"...":""),i/2,64)}this.bubbleTexture.needsUpdate=!0,this.speechSprite.visible=!0,this.speechTimer=5}setNavigationTarget(e,t,i=null){this.navTarget={x:e,z:t,onArrival:i}}clearNavigationTarget(){this.navTarget=null}createAvatarMesh(){this.group=new bn,this.group.position.set(this.x,this.y,this.z);const e=new Zt(.38,.32,.8,16),t=new wt({color:this.colorNum,roughness:.3,metalness:.2});this.torso=new Ce(e,t),this.torso.position.y=.85,this.group.add(this.torso);const i=new gt(.04,.78,.05),s=new vt({color:16711807}),r=new Ce(i,s);r.position.set(0,.85,.35),this.group.add(r);const a=new Ai(.42,24,24),o=new wt({color:16777215,roughness:.2,metalness:.1});this.head=new Ce(a,o),this.head.position.y=1.55,this.group.add(this.head),this.visorCanvas=document.createElement("canvas"),this.visorCanvas.width=256,this.visorCanvas.height=128,this.visorCtx=this.visorCanvas.getContext("2d"),this.renderVisorEyes(!1),this.visorTex=new an(this.visorCanvas),this.visorTex.needsUpdate=!0;const l=new vt({map:this.visorTex,transparent:!0}),c=new Zt(.43,.43,.3,16,1,!1,Math.PI*.15,Math.PI*.7);this.visorMesh=new Ce(c,l),this.visorMesh.position.set(0,1.55,.02),this.visorMesh.rotation.y=-Math.PI/2,this.group.add(this.visorMesh);const h=new gt(.42,.5,.22),d=new wt({color:1712440,roughness:.4,metalness:.6}),u=new Ce(h,d);u.position.set(0,.9,-.36),this.group.add(u);const f=new Zt(.06,.04,.12,12),g=new vt({color:62975}),_=new Ce(f,g);_.position.set(-.12,.6,-.36);const m=new Ce(f,g);m.position.set(.12,.6,-.36),this.group.add(_),this.group.add(m);const p=new Ai(.14,12,12),T=new wt({color:this.colorNum,roughness:.3});this.leftFoot=new Ce(p,T),this.leftFoot.position.set(-.2,.14,0),this.group.add(this.leftFoot),this.rightFoot=new Ce(p,T),this.rightFoot.position.set(.2,.14,0),this.group.add(this.rightFoot);const R=new ca(.55,24),S=new vt({color:0,transparent:!0,opacity:.45});this.shadow=new Ce(R,S),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.02,this.group.add(this.shadow),this.scene.add(this.group)}renderVisorEyes(e){const t=this.visorCtx;t.clearRect(0,0,256,128),t.fillStyle="#060814",t.fillRect(0,0,256,128),t.fillStyle=this.colorHex,t.shadowColor=this.colorHex,t.shadowBlur=12,e?(t.lineWidth=6,t.strokeStyle=this.colorHex,t.beginPath(),t.arc(85,64,22,.2,Math.PI-.2,!1),t.stroke(),t.beginPath(),t.arc(171,64,22,.2,Math.PI-.2,!1),t.stroke()):(t.beginPath(),t.ellipse(85,60,20,26,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(171,60,20,26,0,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.shadowBlur=0,t.beginPath(),t.arc(90,52,7,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(176,52,7,0,Math.PI*2),t.fill())}bindKeyboard(){window.addEventListener("keydown",e=>{var t,i;if(window.__arcadeOverlayOpen||((t=document.activeElement)==null?void 0:t.tagName)==="INPUT"||((i=document.activeElement)==null?void 0:i.tagName)==="TEXTAREA"){this.resetMovement();return}["ArrowUp","KeyW"].includes(e.code)&&(this.keys.forward=!0),["ArrowDown","KeyS"].includes(e.code)&&(this.keys.backward=!0),["ArrowLeft","KeyA"].includes(e.code)&&(this.keys.left=!0),["ArrowRight","KeyD"].includes(e.code)&&(this.keys.right=!0),e.code==="Space"&&this.isGrounded&&(this.velocityY=this.jumpStrength,this.isGrounded=!1)}),window.addEventListener("keyup",e=>{["ArrowUp","KeyW"].includes(e.code)&&(this.keys.forward=!1),["ArrowDown","KeyS"].includes(e.code)&&(this.keys.backward=!1),["ArrowLeft","KeyA"].includes(e.code)&&(this.keys.left=!1),["ArrowRight","KeyD"].includes(e.code)&&(this.keys.right=!1)})}setJoystickVector(e,t){this.joystickVector.x=e,this.joystickVector.y=t}update(e,t,i,s=null){let r=0,a=0;if(this.keys.forward&&(a-=1),this.keys.backward&&(a+=1),this.keys.left&&(r-=1),this.keys.right&&(r+=1),(Math.abs(this.joystickVector.x)>.1||Math.abs(this.joystickVector.y)>.1)&&(r+=this.joystickVector.x,a+=this.joystickVector.y),Math.hypot(r,a)>.01)this.navTarget=null;else if(this.navTarget){const u=this.navTarget.x-this.x,f=this.navTarget.z-this.z,g=Math.hypot(u,f);if(g<.35){const _=this.navTarget.onArrival;this.navTarget=null,_&&_()}else r=u/g,a=f/g}const l=Math.hypot(r,a);if(l>.01){r/=l,a/=l,this.isMoving=!0,this.targetRotation=Math.atan2(r,a);const u=this.speed*e,f=this.x+r*u,g=this.z+a*u;let _=!0;if(t&&(f-this.radius<t.minX||f+this.radius>t.maxX)&&(_=!1),i&&_){for(const p of i)if(p.collider&&p.collider.intersectsSphere(new Y(f,0,this.z),this.radius)){_=!1;break}}_&&(this.x=f);let m=!0;if(t&&(g-this.radius<t.minZ||g+this.radius>t.maxZ)&&(m=!1),i&&m){for(const p of i)if(p.collider&&p.collider.intersectsSphere(new Y(this.x,0,g),this.radius)){m=!1;break}}m&&(this.z=g),this.walkCycle+=e*14,this.footstepTimer+=e,this.footstepTimer>.28&&(Wd(),this.footstepTimer=0)}else this.isMoving=!1,this.walkCycle=0;let c=this.targetRotation-this.rotation;for(;c<-Math.PI;)c+=Math.PI*2;for(;c>Math.PI;)c-=Math.PI*2;if(this.rotation+=c*.25,this.isGrounded||(this.velocityY+=this.gravity*e,this.y+=this.velocityY*e,this.y<=0&&(this.y=0,this.velocityY=0,this.isGrounded=!0)),this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.rotation,this.shadow){const u=Math.max(.35,1-this.y*.25);this.shadow.scale.set(u,u,u),this.shadow.position.y=.02-this.y}this.isGrounded?this.isMoving?(this.leftFoot.position.y=0,this.rightFoot.position.y=0,this.leftFoot.position.z=Math.sin(this.walkCycle)*.22,this.rightFoot.position.z=-Math.sin(this.walkCycle)*.22,this.torso.rotation.z=0):(this.leftFoot.position.y=0,this.rightFoot.position.y=0,this.leftFoot.position.z=0,this.rightFoot.position.z=0,this.torso.rotation.z=0):(this.leftFoot.position.y=.08,this.rightFoot.position.y=.08,this.leftFoot.position.z=-.08,this.rightFoot.position.z=.08,this.torso.rotation.z=0);const h=performance.now()*.001,d=Math.sin(h*1.5)>.94;this.lastBlinkState!==d&&(this.lastBlinkState=d,this.renderVisorEyes(d),this.visorTex.needsUpdate=!0),this.nameSprite&&s&&this.nameSprite.quaternion.copy(s.quaternion),this.speechSprite&&this.speechSprite.visible&&(s&&this.speechSprite.quaternion.copy(s.quaternion),this.speechTimer-=e,this.speechTimer<=0&&(this.speechSprite.visible=!1))}}function hy(n,e,t,i=256,s=224){switch(n.imageSmoothingEnabled=!1,n.save(),(e.id||"").toLowerCase()){case"cute-mini-golf":uy(n,t,i,s);break;case"kawaii-8ball-pool":fy(n,t,i,s);break;case"neon-katana-slash":py(n,t,i,s);break;case"geometricsurvivor":my(n,t,i,s);break;case"stickman-fps-arcade":gy(n,t,i,s);break;case"neon-viper":_y(n,t,i,s);break;case"cyber-pinball-fx":yy(n,t,i,s);break;case"cyber-pong-3d":vy(n,t);break;case"neon-drift-racer":Sy(n,t,i,s);break;case"neon-orbit-drift":xy(n,t,i,s);break;case"brick-breaker-fx":by(n,t,i,s);break;case"sky-ace-1944":Ey(n,t,i,s);break;case"neon-pachinko-pop":My(n,t,i,s);break;case"cyber-shuriken":wy(n,t,i,s);break;case"neon-drop-2048":Ty(n,t,i,s);break;case"asteroid-blitz":Ay(n,t,i,s);break;case"flappy-cyber-droid":Ry(n,t,i,s);break;case"neon-archery-master":Cy(n,t,i,s);break;case"cyber-runner-3d":Py(n,t,i,s);break;case"neon-stack-3d":Ly(n,t,i,s);break;case"neon-tetris-3d":Iy(n,t,i,s);break;case"super-mario":Dy(n,t,i,s);break;case"super-bomberman":Ny(n,t,i,s);break;case"gta-2":Uy(n,t,i,s);break;case"classic-doom":Fy(n,t,i);break;case"classic-pacman":Oy(n,t,i,s);break;case"sonic1":jd(n,t,i,s);break;case"sonic2":ky(n,t,i,s);break;case"fzero":By(n,t,i,s);break;case"mk2":zy(n,t,i,s);break;case"megaman2":Vy(n,t,i,s);break;case"outrun":Gy(n,t,i,s);break;case"sor2":Hy(n,t,i,s);break;case"topgear":Wy(n,t,i,s);break;case"castlevania4":Xy(n,t,i,s);break;case"mslug":$d(n,t,i);break;case"mslugx":qy(n,t,i);break;case"street-fighter-2":Yy(n,t,i);break;default:jy(n,e,t,i,s);break}dy(n,e,t,i,s),n.fillStyle="rgba(0, 0, 0, 0.28)";for(let a=0;a<s;a+=2)n.fillRect(0,a,i,1);n.strokeStyle="#05ffa1",n.lineWidth=4,n.strokeRect(2,2,i-4,s-4),n.restore()}function dy(n,e,t,i,s){n.save(),n.font="bold 8px monospace",n.fillStyle="#ffffff",n.textAlign="left",n.fillText("1UP  04820",8,12),n.textAlign="right",n.fillText("HIGH 25000",i-8,12),Math.floor(t*2.5)%2===0?(n.textAlign="center",n.fillStyle="#ffd32a",n.fillText("★ INSERT COIN ★",i/2,s-8)):(n.textAlign="center",n.fillStyle="#00f5ff",n.fillText("▶ DEMO PLAY ◀",i/2,s-8)),n.restore()}function uy(n,e,t,i){n.fillStyle="#27ae60",n.fillRect(0,0,t,i),n.fillStyle="#2ecc71";for(let d=0;d<i;d+=16)n.fillRect(0,d,t,8);n.fillStyle="#f1c40f",n.beginPath(),n.ellipse(40,70,30,16,.2,0,Math.PI*2),n.fill(),n.fillStyle="#3498db",n.beginPath(),n.ellipse(210,150,35,18,-.2,0,Math.PI*2),n.fill();const s=130,r=65;n.fillStyle="#111",n.beginPath(),n.ellipse(s,r,8,4,0,0,Math.PI*2),n.fill(),n.strokeStyle="#fff",n.lineWidth=2,n.beginPath(),n.moveTo(s,r),n.lineTo(s,r-32),n.stroke(),n.fillStyle="#e74c3c";const a=Math.sin(e*8)*3;n.beginPath(),n.moveTo(s,r-32),n.lineTo(s-16+a,r-26),n.lineTo(s,r-20),n.fill();const o=e*.8%3;let l,c,h=!1;if(o<2){const d=o/2;l=130+Math.sin(d*Math.PI)*45,c=190-d*125}else l=s,c=r,h=!0;if(o<.6){n.strokeStyle="#bdc3c7",n.lineWidth=3;const d=-.4+o/.6*.8;n.beginPath(),n.moveTo(130-Math.cos(d)*25,190-Math.sin(d)*25),n.lineTo(130,190),n.stroke()}h?(n.fillStyle="#f39c12",n.font="bold 12px monospace",n.textAlign="center",n.fillText("NICE SHOT!",t/2,110),n.fillStyle="#fff",n.font="9px monospace",n.fillText("+100 PTS",t/2,126)):(n.fillStyle="#ecf0f1",n.beginPath(),n.arc(l,c,4,0,Math.PI*2),n.fill())}function fy(n,e,t,i){n.fillStyle="#5c3a21",n.fillRect(15,25,t-30,i-50),n.fillStyle="#16a085",n.fillRect(25,35,t-50,i-70),n.fillStyle="#0a0a0a",[[25,35],[t/2,33],[t-25,35],[25,i-35],[t/2,i-33],[t-25,i-35]].forEach(([u,f])=>{n.beginPath(),n.arc(u,f,7,0,Math.PI*2),n.fill()});const r=e*.7%3,a=160+(r>.8?(r-.8)*35:0),o=90-(r>.8?(r-.8)*20:0),l=175+(r>.8?(r-.8)*15:0),c=110+(r>.8?(r-.8)*10:0),h=r<.8?80+r*40:130+(r-.8)*15,d=110;if(n.fillStyle="#111",n.beginPath(),n.arc(l,c,6,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(l,c,2.5,0,Math.PI*2),n.fill(),n.fillStyle="#000",n.font="bold 5px monospace",n.textAlign="center",n.fillText("8",l,c+2),n.fillStyle="#f1c40f",n.beginPath(),n.arc(a,o,6,0,Math.PI*2),n.fill(),n.fillStyle="#000",n.fillRect(a-2,o-1,1,2),n.fillRect(a+1,o-1,1,2),n.fillStyle="#ecf0f1",n.beginPath(),n.arc(h,d,6,0,Math.PI*2),n.fill(),r<.8){const u=(.8-r)*20;n.strokeStyle="#d35400",n.lineWidth=3,n.beginPath(),n.moveTo(h-8-u,d),n.lineTo(h-45-u,d),n.stroke()}}function py(n,e,t,i){n.fillStyle="#1a0e1c",n.fillRect(0,0,t,i);const s=e*1.5%2.5,r=200-Math.sin(s/2.5*Math.PI)*130,a=60+s*55;if(s<1.2)n.fillStyle="#27ae60",n.beginPath(),n.arc(a,r,16,0,Math.PI*2),n.fill(),n.strokeStyle="#1e824c",n.lineWidth=3,n.beginPath(),n.arc(a,r,13,0,Math.PI*2),n.stroke();else{const o=(s-1.2)*25;n.fillStyle="#e74c3c",n.beginPath(),n.arc(a-o,r+o,14,.5*Math.PI,1.5*Math.PI),n.fill(),n.beginPath(),n.arc(a+o,r+o,14,1.5*Math.PI,.5*Math.PI),n.fill(),n.fillStyle="#ff007f";for(let l=0;l<6;l++)n.fillRect(a+Math.sin(l*1.2)*o*1.4,r+Math.cos(l*1.2)*o*1.4,3,3)}s>1&&s<1.6&&(n.strokeStyle="#00f5ff",n.lineWidth=4,n.shadowColor="#00f5ff",n.shadowBlur=12,n.beginPath(),n.moveTo(a-50,r-40),n.lineTo(a+60,r+50),n.stroke(),n.shadowBlur=0,n.fillStyle="#ffd32a",n.font="bold 12px monospace",n.textAlign="center",n.fillText("COMBO x3!",t/2,70))}function my(n,e,t,i){n.fillStyle="#111827",n.fillRect(0,0,t,i),n.strokeStyle="#1f2937",n.lineWidth=1;for(let o=0;o<t;o+=24)n.beginPath(),n.moveTo(o,0),n.lineTo(o,i),n.stroke();for(let o=0;o<i;o+=24)n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();const s=t/2,r=i/2;n.fillStyle="#3b82f6",n.beginPath(),n.arc(s,r,9,0,Math.PI*2),n.fill(),n.fillStyle="#93c5fd",n.fillRect(s-3,r-4,8,3);for(let o=0;o<3;o++){const l=e*5+o*Math.PI*2/3,c=s+Math.cos(l)*36,h=r+Math.sin(l)*36;n.strokeStyle="#05ffa1",n.lineWidth=3,n.beginPath(),n.moveTo(c,h),n.lineTo(c+Math.cos(l)*12,h+Math.sin(l)*12),n.stroke()}for(let o=0;o<8;o++){const l=60+Math.sin(e*3+o)*15,c=o*Math.PI*2/8+e*.6,h=s+Math.cos(c)*l,d=r+Math.sin(c)*l;n.fillStyle="#ef4444",n.beginPath(),n.moveTo(h,d-6),n.lineTo(h+6,d+6),n.lineTo(h-6,d+6),n.fill()}n.fillStyle="#00f5ff";const a=e*2%1;n.fillRect(s+(1-a)*25,r-(1-a)*20,3,3)}function gy(n,e,t,i){n.fillStyle="#d35400",n.fillRect(0,0,t,i),n.fillStyle="#7f8c8d",n.fillRect(0,140,t,84),n.fillStyle="#b7950b",n.fillRect(30,130,80,20),n.fillRect(150,130,80,20);const r=Math.sin(e*3)>0?110:145;n.strokeStyle="#111",n.lineWidth=2,n.fillStyle="#c0392b",n.beginPath(),n.arc(190,r,6,0,Math.PI*2),n.fill(),n.fillStyle="#2c3e50",n.fillRect(184,r-8,12,4);const a=190+Math.sin(e*6)*12,o=r+Math.cos(e*6)*8;n.strokeStyle="#05ffa1",n.lineWidth=2,n.beginPath(),n.arc(a,o,12,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(a-16,o),n.lineTo(a+16,o),n.stroke(),n.beginPath(),n.moveTo(a,o-16),n.lineTo(a,o+16),n.stroke(),Math.floor(e*8)%3===0&&(n.fillStyle="#ffd32a",n.beginPath(),n.arc(t/2,i-20,18,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(t/2,i-20,10,0,Math.PI*2),n.fill())}function _y(n,e,t,i){n.fillStyle="#060a1e",n.fillRect(0,0,t,i),n.strokeStyle="rgba(0, 245, 255, 0.15)",n.lineWidth=1;for(let s=0;s<t;s+=16)n.beginPath(),n.moveTo(s,0),n.lineTo(s,i),n.stroke();for(let s=0;s<i;s+=16)n.beginPath(),n.moveTo(0,s),n.lineTo(t,s),n.stroke();n.fillStyle="#ff007f",n.beginPath(),n.arc(60,60,4,0,Math.PI*2),n.fill(),n.fillStyle="#ffd32a",n.beginPath(),n.arc(200,150,4,0,Math.PI*2),n.fill(),n.fillStyle="#00f5ff",n.beginPath(),n.arc(170,70,4,0,Math.PI*2),n.fill();for(let s=14;s>=0;s--){const r=e*4-s*.15,a=t/2+Math.sin(r)*60,o=i/2+Math.cos(r*.7)*45;n.fillStyle=s===0?"#ffffff":"#05ffa1",n.beginPath(),n.arc(a,o,s===0?7:5,0,Math.PI*2),n.fill(),s===0&&(n.fillStyle="#111",n.fillRect(a-2,o-2,2,2),n.fillRect(a+1,o-2,2,2))}}function yy(n,e,t,i){n.fillStyle="#08081a",n.fillRect(0,0,t,i),n.strokeStyle="#7928ca",n.lineWidth=4,n.strokeRect(30,20,t-60,i-40),[[100,70],[160,70],[130,110]].forEach(([l,c],h)=>{n.fillStyle=Math.floor(e*6+h)%2===0?"#ff007f":"#00f5ff",n.beginPath(),n.arc(l,c,12,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font="bold 7px monospace",n.textAlign="center",n.fillText("100",l,c+2)});const r=Math.sin(e*8)>.5?.3:0;n.fillStyle="#ffd32a",n.save(),n.translate(90,175),n.rotate(-r),n.fillRect(0,-3,28,6),n.restore(),n.save(),n.translate(170,175),n.rotate(r),n.fillRect(-28,-3,28,6),n.restore();const a=130+Math.sin(e*7)*35,o=90+Math.cos(e*9)*45;n.fillStyle="#ffffff",n.beginPath(),n.arc(a,o,5,0,Math.PI*2),n.fill()}function vy(n,e,t,i){n.fillStyle="#1e3a8a",n.beginPath(),n.moveTo(40,180),n.lineTo(216,180),n.lineTo(180,70),n.lineTo(76,70),n.fill(),n.strokeStyle="#fff",n.lineWidth=2,n.strokeRect(76,70,104,110),n.strokeStyle="rgba(255, 255, 255, 0.7)",n.lineWidth=3,n.beginPath(),n.moveTo(58,125),n.lineTo(198,125),n.stroke();const s=e*2%2;let r,a;if(s<1)r=60+s*136,a=160-Math.sin(s*Math.PI)*45;else{const o=s-1;r=196-o*136,a=90+Math.sin(o*Math.PI)*45}n.fillStyle="#f97316",n.beginPath(),n.arc(r,a,4,0,Math.PI*2),n.fill(),n.fillStyle="#06b6d4",n.fillRect(48,145+Math.sin(e*5)*15,8,24),n.fillStyle="#ec4899",n.fillRect(200,75+Math.cos(e*5)*15,8,24)}function Sy(n,e,t,i){n.fillStyle="#31103f",n.fillRect(0,0,t,100),n.fillStyle="#f43f5e",n.beginPath(),n.arc(t/2,85,30,Math.PI,0),n.fill(),n.fillStyle="#0f172a",n.fillRect(0,100,t,i-100);const s=e*240;for(let a=0;a<6;a++){const o=100+(a*24+s)%124,l=20+(o-100)/124*160;n.fillStyle=Math.floor(o/18)%2===0?"#ff007f":"#00f5ff",n.fillRect(t/2-l/2,o,l,4)}const r=t/2+Math.sin(e*4)*40;n.fillStyle="#ef4444",n.fillRect(r-16,175,32,16),n.fillStyle="#fbbf24",n.fillRect(r-12,185,6,4),n.fillRect(r+6,185,6,4),n.fillStyle="#ffd32a",n.fillRect(r-20,187,3,3),n.fillRect(r+17,187,3,3)}function xy(n,e,t,i){n.fillStyle="#030712",n.fillRect(0,0,t,i);const s=t/2,r=i/2;n.fillStyle="#8b5cf6",n.beginPath(),n.arc(s,r,22,0,Math.PI*2),n.fill(),n.strokeStyle="#c084fc",n.lineWidth=2,n.beginPath(),n.ellipse(s,r,38,10,-.3,0,Math.PI*2),n.stroke();const a=e*3,o=s+Math.cos(a)*50,l=r+Math.sin(a)*28;n.strokeStyle="#00f5ff",n.lineWidth=1,n.beginPath(),n.moveTo(s,r),n.lineTo(o,l),n.stroke(),n.fillStyle="#ffffff",n.beginPath(),n.arc(o,l,4,0,Math.PI*2),n.fill()}function by(n,e,t,i){n.fillStyle="#0f172a",n.fillRect(0,0,t,i);const s=["#ef4444","#f97316","#eab308","#22c55e","#06b6d4"];for(let l=0;l<5;l++)for(let c=0;c<8;c++)(l+c+Math.floor(e))%7!==0&&(n.fillStyle=s[l],n.fillRect(20+c*27,30+l*12,24,8));const r=t/2+Math.sin(e*3)*50;n.fillStyle="#38bdf8",n.fillRect(r-22,185,44,7);const a=t/2+Math.sin(e*6)*60,o=130+Math.cos(e*7)*45;n.fillStyle="#ffffff",n.beginPath(),n.arc(a,o,4,0,Math.PI*2),n.fill()}function Ey(n,e,t,i){n.fillStyle="#1d4ed8",n.fillRect(0,0,t,i),n.fillStyle="#15803d";const s=e*40%(i+60)-30;n.beginPath(),n.ellipse(180,s,40,25,.4,0,Math.PI*2),n.fill();const r=t/2+Math.sin(e*3)*35,a=165;n.fillStyle="#94a3b8",n.fillRect(r-3,a-12,6,24),n.fillRect(r-20,a-2,40,5),n.fillStyle="#fef08a";for(let c=0;c<3;c++){const h=a-15-(e*200+c*40)%120;n.fillRect(r-8,h,2,6),n.fillRect(r+6,h,2,6)}const o=t/2,l=60;n.fillStyle="#b91c1c",n.fillRect(o-15,l-4,30,8),Math.floor(e*4)%2===0&&(n.fillStyle="#f59e0b",n.beginPath(),n.arc(o,l,14,0,Math.PI*2),n.fill())}function My(n,e,t,i){n.fillStyle="#180d2b",n.fillRect(0,0,t,i),n.fillStyle="#ffd32a";for(let s=0;s<7;s++){const r=s%2===0?0:12;for(let a=0;a<9;a++)n.fillRect(36+a*22+r,45+s*18,3,3)}for(let s=0;s<3;s++){const r=(e*1.5+s*.8)%2,a=30+r*75,o=t/2+Math.sin(r*8+s)*35;n.fillStyle="#ffffff",n.beginPath(),n.arc(o,a,4,0,Math.PI*2),n.fill()}n.fillStyle="#05ffa1",n.fillRect(40,180,40,16),n.fillStyle="#ff007f",n.fillRect(108,180,40,16),n.fillStyle="#00f5ff",n.fillRect(176,180,40,16),n.fillStyle="#fff",n.font="7px monospace",n.textAlign="center",n.fillText("FEVER",128,192)}function wy(n,e,t,i){n.fillStyle="#0f172a",n.fillRect(0,0,t,i),n.fillStyle="#78350f",n.fillRect(t/2-4,60,8,110),n.fillStyle="#ffffff",n.beginPath(),n.arc(t/2,85,30,0,Math.PI*2),n.fill(),n.fillStyle="#dc2626",n.beginPath(),n.arc(t/2,85,20,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(t/2,85,10,0,Math.PI*2),n.fill(),n.fillStyle="#dc2626",n.beginPath(),n.arc(t/2,85,4,0,Math.PI*2),n.fill();const s=e*2%1.5,r=30+s*(t/2-30),a=160-s*75;n.save(),n.translate(r,a),n.rotate(e*25),n.fillStyle="#38bdf8",n.fillRect(-8,-2,16,4),n.fillRect(-2,-8,4,16),n.restore()}function Ty(n,e,t,i){n.fillStyle="#1e1b4b",n.fillRect(0,0,t,i);const s=[["2","4","8","16"],["32","64","128","256"],["512","1024","2","4"],["8","16","32","64"]],r={2:"#eee4da",4:"#ede0c8",8:"#f2b179",16:"#f59563",32:"#f67c5f",64:"#f65e3b",128:"#edcf72",256:"#edcc61",512:"#edc850",1024:"#edc53f"},a=48,o=40;for(let l=0;l<4;l++)for(let c=0;c<4;c++){const h=s[l][c];n.fillStyle=r[h]||"#cdc1b4",n.fillRect(a+c*38,o+l*38,34,34),n.fillStyle="#111",n.font="bold 9px monospace",n.textAlign="center",n.fillText(h,a+c*38+17,o+l*38+21)}}function Ay(n,e,t,i){n.fillStyle="#000000",n.fillRect(0,0,t,i),n.strokeStyle="#22c55e",n.lineWidth=2;const s=e*2,r=t/2,a=i/2;n.save(),n.translate(r,a),n.rotate(s),n.beginPath(),n.moveTo(0,-12),n.lineTo(8,10),n.lineTo(0,5),n.lineTo(-8,10),n.closePath(),n.stroke(),Math.floor(e*8)%2===0&&(n.beginPath(),n.moveTo(-4,7),n.lineTo(0,14),n.lineTo(4,7),n.stroke()),n.restore(),[[60,60,20],[200,70,16],[180,160,14],[70,170,12]].forEach(([l,c,h])=>{n.beginPath();for(let d=0;d<6;d++){const u=d*(Math.PI/3),f=h+(d%2===0?3:-3),g=l+Math.cos(u)*f,_=c+Math.sin(u)*f;d===0?n.moveTo(g,_):n.lineTo(g,_)}n.closePath(),n.stroke()})}function Ry(n,e,t,i){n.fillStyle="#4c1d95",n.fillRect(0,0,t,i);const s=e*80%140;[t-s,t-s+140].forEach(o=>{n.fillStyle="#10b981",n.fillRect(o,0,26,75),n.fillRect(o,135,26,89)});const a=105+Math.sin(e*6)*20;n.fillStyle="#f59e0b",n.beginPath(),n.arc(70,a,9,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.fillRect(72,a-4,4,4)}function Cy(n,e,t,i){n.fillStyle="#14532d",n.fillRect(0,0,t,i);const s=200,r=90,a=["#f87171","#fbbf24","#38bdf8","#fb7185"];for(let h=4;h>0;h--)n.fillStyle=a[h-1],n.beginPath(),n.arc(s,r,h*8,0,Math.PI*2),n.fill();const o=e*2%1.5,l=40+o*160,c=150-Math.sin(o/1.5*Math.PI)*60;n.strokeStyle="#ffffff",n.lineWidth=2,n.beginPath(),n.moveTo(l-18,c),n.lineTo(l,c),n.stroke(),n.fillStyle="#e11d48",n.fillRect(l-22,c-2,4,4)}function Py(n,e,t,i){n.fillStyle="#18181b",n.fillRect(0,0,t,i),n.strokeStyle="#a855f7",n.lineWidth=2,n.beginPath(),n.moveTo(t/2,70),n.lineTo(30,i),n.stroke(),n.beginPath(),n.moveTo(t/2,70),n.lineTo(t/2,i),n.stroke(),n.beginPath(),n.moveTo(t/2,70),n.lineTo(t-30,i),n.stroke();const s=70+e*120%130;n.fillStyle="#ef4444",n.fillRect(t/2-20,s,40,8);const r=160-Math.abs(Math.sin(e*6))*25;n.fillStyle="#06b6d4",n.fillRect(t/2-6,r,12,22)}function Ly(n,e,t,i){n.fillStyle="#0c0a09",n.fillRect(0,0,t,i);const s=["#f43f5e","#ec4899","#d946ef","#a855f7","#6366f1"];for(let a=0;a<5;a++)n.fillStyle=s[a],n.fillRect(t/2-40,180-a*16,80,14);const r=t/2-40+Math.sin(e*4)*35;n.fillStyle="#06b6d4",n.fillRect(r,100,80,14)}function Iy(n,e,t,i){n.fillStyle="#030712",n.fillRect(0,0,t,i),n.strokeStyle="#475569",n.lineWidth=2,n.strokeRect(70,20,116,190);const s=["#00f5ff","#ff007f","#ffd32a","#05ffa1","#7928ca"];for(let a=0;a<4;a++)for(let o=0;o<10;o++)(a*10+o+Math.floor(e*.5))%5!==0&&(n.fillStyle=s[(a+o)%s.length],n.fillRect(72+o*11,166+a*11,10,10));const r=30+e*50%120;n.fillStyle="#a855f7",n.fillRect(116,r,10,10),n.fillRect(105,r+11,32,10)}function Dy(n,e,t,i){n.fillStyle="#5c94fc",n.fillRect(0,0,t,i),n.fillStyle="#00a800",n.fillRect(0,180,t,44),n.fillStyle="#00a800",n.fillRect(160,140,28,40),n.fillRect(156,134,36,10),n.fillStyle="#fc9838",n.fillRect(90,110,16,16),n.fillStyle="#000",n.font="bold 10px monospace",n.fillText("?",94,122);const s=Math.abs(Math.sin(e*5))*35,r=60+e*40%80,a=164-s;n.fillStyle="#e40058",n.fillRect(r-4,a-8,8,10),n.fillStyle="#0000bc",n.fillRect(r-4,a+2,8,8)}function Ny(n,e,t,i){n.fillStyle="#22c55e",n.fillRect(0,0,t,i),n.fillStyle="#64748b";for(let a=0;a<4;a++)for(let o=0;o<5;o++)n.fillRect(40+o*40,40+a*40,18,18);const s=100,r=100;n.fillStyle="#09090b",n.beginPath(),n.arc(s,r,8,0,Math.PI*2),n.fill(),n.fillStyle="#ef4444",n.fillRect(s-1,r-12,3,4),Math.floor(e*3)%2===0&&(n.fillStyle="#f97316",n.fillRect(s-30,r-4,60,8),n.fillRect(s-4,r-30,8,60))}function Uy(n,e,t,i){n.fillStyle="#334155",n.fillRect(0,0,t,i),n.strokeStyle="#facc15",n.lineWidth=2,n.setLineDash([8,8]),n.beginPath(),n.moveTo(t/2,0),n.lineTo(t/2,i),n.stroke(),n.setLineDash([]);const s=t/2-25,r=120+Math.sin(e*3)*20;n.fillStyle="#dc2626",n.fillRect(s-8,r-14,16,28);const a=t/2-25,o=r+45;n.fillStyle="#1e293b",n.fillRect(a-8,o-14,16,28),n.fillStyle=Math.floor(e*12)%2===0?"#3b82f6":"#ef4444",n.fillRect(a-4,o-2,8,4)}function Fy(n,e,t,i){n.fillStyle="#3f3f46",n.fillRect(0,0,t,120),n.fillStyle="#15803d",n.fillRect(0,120,t,104);const s=t/2+Math.sin(e*2)*25;n.fillStyle="#991b1b",n.fillRect(s-10,75,20,30),n.fillStyle="#f59e0b",n.fillRect(s-5,80,3,3),n.fillRect(s+2,80,3,3),n.fillStyle="#18181b",n.fillRect(t/2-8,165,16,50),Math.floor(e*4)%3===0&&(n.fillStyle="#fbbf24",n.beginPath(),n.arc(t/2,160,24,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(t/2,160,14,0,Math.PI*2),n.fill())}function Oy(n,e,t,i){n.fillStyle="#000000",n.fillRect(0,0,t,i),n.strokeStyle="#1d4ed8",n.lineWidth=3,n.strokeRect(30,30,t-60,i-60),n.strokeRect(60,60,50,30),n.strokeRect(146,60,50,30),n.fillStyle="#fef08a";for(let a=45;a<t-45;a+=18)n.fillRect(a,110,3,3);const s=40+e*70%(t-80),r=Math.abs(Math.sin(e*12))*.35;n.fillStyle="#facc15",n.beginPath(),n.arc(s,111,10,r*Math.PI,(2-r)*Math.PI),n.lineTo(s,111),n.fill(),n.fillStyle="#3b82f6",n.beginPath(),n.arc(s+35,111,8,Math.PI,0),n.lineTo(s+43,118),n.lineTo(s+27,118),n.fill()}function jd(n,e,t,i){n.fillStyle="#38bdf8",n.fillRect(0,0,t,140),n.fillStyle="#b45309",n.fillRect(0,140,t,84),n.fillStyle="#78350f";for(let r=0;r<t;r+=16)for(let a=140;a<i;a+=16)(r+a)%32===0&&n.fillRect(r,a,16,16);const s=e*180%t;n.fillStyle="#2563eb",n.beginPath(),n.arc(s,132,10,0,Math.PI*2),n.fill(),n.fillStyle="#facc15";for(let r=0;r<4;r++)n.fillRect(60+r*25,120,6,8)}function ky(n,e,t,i){jd(n,e,t,i);const s=e*180%t-24;n.fillStyle="#f97316",n.beginPath(),n.arc(s,134,8,0,Math.PI*2),n.fill(),n.fillRect(s-10,130,6,6)}function By(n,e,t,i){n.fillStyle="#050515",n.fillRect(0,0,t,100),n.fillStyle="#1e1b4b",n.fillRect(0,100,t,i-100),n.strokeStyle="#06b6d4",n.lineWidth=3,n.beginPath(),n.moveTo(t/2,100),n.lineTo(10,i),n.stroke(),n.beginPath(),n.moveTo(t/2,100),n.lineTo(t-10,i),n.stroke();const s=100+e*180%120;n.fillStyle="#f97316",n.fillRect(t/2-20,s,40,8);const r=t/2+Math.sin(e*3)*30;n.fillStyle="#1d4ed8",n.fillRect(r-14,160,28,16),n.fillStyle="#e11d48",n.fillRect(r-10,172,6,4),n.fillRect(r+4,172,6,4)}function zy(n,e,t,i){n.fillStyle="#1c1917",n.fillRect(0,0,t,i),n.fillStyle="#44403c",n.fillRect(0,160,t,64),n.fillStyle="#eab308",n.fillRect(60,120,14,38),n.fillStyle="#2563eb",n.fillRect(180,120,14,38);const s=e*2%1.5;s<1&&(n.strokeStyle="#eab308",n.lineWidth=2,n.beginPath(),n.moveTo(74,135),n.lineTo(74+s*106,135),n.stroke())}function Vy(n,e,t,i){n.fillStyle="#0f172a",n.fillRect(0,0,t,i),n.fillStyle="#0284c7",n.fillRect(0,170,t,54);const s=60,r=150;n.fillStyle="#38bdf8",n.fillRect(s,r,12,20),n.fillStyle="#0284c7",n.fillRect(s-4,r+8,8,8),n.fillStyle="#facc15";for(let a=0;a<3;a++){const o=s+16+(e*200+a*50)%150;n.beginPath(),n.arc(o,r+10,4,0,Math.PI*2),n.fill()}}function Gy(n,e,t,i){n.fillStyle="#38bdf8",n.fillRect(0,0,t,100),n.fillStyle="#fef08a",n.beginPath(),n.arc(t/2,70,24,0,Math.PI*2),n.fill(),n.fillStyle="#334155",n.fillRect(0,100,t,i-100);const s=t/2+Math.sin(e*3)*35;n.fillStyle="#dc2626",n.fillRect(s-16,165,32,16),n.fillStyle="#fbbf24",n.fillRect(s-6,158,6,7)}function Hy(n,e,t,i){n.fillStyle="#09090b",n.fillRect(0,0,t,i),n.fillStyle="#f43f5e",n.font="bold 10px monospace",n.fillText("CLUB 90s",30,50),n.fillStyle="#27272a",n.fillRect(0,150,t,74);const s=80,r=125;n.fillStyle="#ffffff",n.fillRect(s,r,14,32),n.fillStyle="#1d4ed8",n.fillRect(s,r+16,14,18),Math.floor(e*5)%2===0&&(n.fillStyle="#f97316",n.beginPath(),n.arc(s+20,r+4,12,0,Math.PI*2),n.fill())}function Wy(n,e,t,i){n.fillStyle="#f97316",n.fillRect(0,0,t,90),n.fillStyle="#1e293b",n.fillRect(0,90,t,i-90);const s=t/2-25+Math.sin(e*4)*8,r=t/2+15-Math.sin(e*4)*8;n.fillStyle="#ffffff",n.fillRect(s,155,20,14),n.fillStyle="#ef4444",n.fillRect(r,160,20,14),n.fillStyle="#38bdf8",n.fillRect(s+6,169,8,8)}function Xy(n,e,t,i){n.fillStyle="#0f051d",n.fillRect(0,0,t,i),n.fillStyle="#991b1b",n.beginPath(),n.arc(190,60,24,0,Math.PI*2),n.fill(),n.fillStyle="#27272a",n.fillRect(0,160,t,64);const s=60,r=130;n.fillStyle="#78350f",n.fillRect(s,r,12,30),n.strokeStyle="#facc15",n.lineWidth=2;const a=e*3%1;n.beginPath(),n.moveTo(s+12,r+8),n.bezierCurveTo(s+35,r-10,s+50,r+20,s+70+a*20,r+6),n.stroke()}function $d(n,e,t,i){n.fillStyle="#fde047",n.fillRect(0,0,t,130),n.fillStyle="#d97706",n.fillRect(0,130,t,94);const s=60,r=145;n.fillStyle="#ffffff",n.fillRect(s-4,r-14,8,4),n.fillStyle="#ef4444",n.fillRect(s-4,r-10,8,14),n.fillStyle="#15803d",n.fillRect(s-4,r+4,8,14),n.fillStyle="#facc15";for(let l=0;l<4;l++){const c=s+16+(e*220+l*40)%140;n.fillRect(c,r-6,6,2)}const a=190,o=145;n.fillStyle="#475569",n.fillRect(a-15,o,30,16),Math.floor(e*6)%2===0&&(n.fillStyle="#f97316",n.beginPath(),n.arc(a,o-4,18,0,Math.PI*2),n.fill())}function qy(n,e,t,i){$d(n,e,t);const s=140+Math.sin(e*3)*30;n.fillStyle="#a855f7",n.beginPath(),n.ellipse(s,50,18,7,0,0,Math.PI*2),n.fill(),Math.floor(e*4)%2===0&&(n.fillStyle="#00f5ff",n.fillRect(s-2,57,4,80))}function Yy(n,e,t,i){n.fillStyle="#7c2d12",n.fillRect(0,0,t,140),n.fillStyle="#ca8a04",n.fillRect(0,140,t,84);const s=65,r=135;n.fillStyle="#ffffff",n.fillRect(s-6,r-16,12,30),n.fillStyle="#ef4444",n.fillRect(s-6,r-18,12,3);const a=185,o=135;n.fillStyle="#15803d",n.fillRect(a-8,o-16,16,30),n.fillStyle="#f97316",n.fillRect(a-8,o-20,16,6);const l=e*2%1.2,c=s+14+l*95;n.fillStyle="#38bdf8",n.beginPath(),n.arc(c,r-6,8,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(c,r-6,4,0,Math.PI*2),n.fill()}function jy(n,e,t,i,s){n.fillStyle="#0a0d24",n.fillRect(0,0,i,s),n.strokeStyle="#00f5ff",n.lineWidth=1;for(let r=0;r<s;r+=16)n.beginPath(),n.moveTo(0,r),n.lineTo(i,r),n.stroke();n.fillStyle="#fff",n.font="bold 12px monospace",n.textAlign="center",n.fillText((e.name||"ARCADE").toUpperCase(),i/2,s/2)}const ph=[{primary:62975,secondary:7940298,accent:16711807},{primary:16711807,secondary:62975,accent:16765738},{primary:393121,secondary:62975,accent:16711807},{primary:16765738,secondary:16711807,accent:62975},{primary:7940298,secondary:62975,accent:393121}];function $y(n,e){const t=document.createElement("canvas");t.width=512,t.height=128;const i=t.getContext("2d"),s=i.createLinearGradient(0,0,512,128);s.addColorStop(0,"#0a0d24"),s.addColorStop(.5,"#191f48"),s.addColorStop(1,"#0a0d24"),i.fillStyle=s,i.fillRect(0,0,512,128),i.strokeStyle="#"+e.secondary.toString(16).padStart(6,"0"),i.lineWidth=4,i.strokeRect(6,6,500,116),i.strokeStyle="#"+e.primary.toString(16).padStart(6,"0"),i.lineWidth=2,i.strokeRect(12,12,488,104),i.fillStyle="#ffffff",i.font='bold 36px "Segoe UI", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),i.shadowBlur=15;const r=`${n.icon||"🎮"} ${(n.name||"ARCADE").toUpperCase()}`;i.fillText(r,256,54),i.font="bold 16px monospace",i.fillStyle="#"+e.accent.toString(16).padStart(6,"0"),i.shadowBlur=8,i.fillText(`• ${n.category?n.category.toUpperCase():"CLASSIC ARCADE"} •`,256,96);const a=new an(t);return a.minFilter=St,a.needsUpdate=!0,a}function Ky(n,e){const t=document.createElement("canvas");t.width=256,t.height=224;const i=t.getContext("2d");i.imageSmoothingEnabled=!1;const s=new an(t);s.minFilter=At,s.magFilter=At,s.generateMipmaps=!1;const r=a=>{hy(i,n,a,256,224),s.needsUpdate=!0};return r(0),{texture:s,update:r,canvas:t,ctx:i}}function Zy(){const n=document.createElement("canvas");n.width=512,n.height=128;const e=n.getContext("2d"),t=new an(n);t.minFilter=St;const i=new ds({map:t,transparent:!0,depthTest:!1}),s=new Ws(i);return s.scale.set(2.4,.6,1),s.position.set(0,3.65,.45),s.visible=!1,{sprite:s,setPlayer:(a,o=!1,l=0)=>{if(!a){s.visible=!1;return}if(e.clearRect(0,0,512,128),o){e.fillStyle="rgba(25, 4, 10, 0.94)",e.strokeStyle="#ff0055",e.lineWidth=6,e.beginPath(),e.roundRect(14,14,484,100,24),e.fill(),e.stroke(),e.font='bold 28px "Outfit", "Segoe UI", sans-serif',e.fillStyle="#ff2a70",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ff0055",e.shadowBlur=18;const c=l>0?` • 👁️ ${l}`:"";e.fillText(`🔴 AO VIVO [${a.toUpperCase()}]${c}`,256,64)}else e.fillStyle="rgba(6, 10, 25, 0.92)",e.strokeStyle="#05ffa1",e.lineWidth=5,e.beginPath(),e.roundRect(14,14,484,100,24),e.fill(),e.stroke(),e.font='bold 30px "Outfit", "Segoe UI", sans-serif',e.fillStyle="#05ffa1",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#05ffa1",e.shadowBlur=14,e.fillText(`🕹️ [${a.toUpperCase()}] JOGANDO`,256,64);t.needsUpdate=!0,s.visible=!0}}}function Jy(n,e,t=0){const i=new bn;i.position.set(e.x,0,e.z),i.rotation.y=t;let s=0;for(let X=0;X<(n.id||"").length;X++)s=(s<<5)-s+n.id.charCodeAt(X);let r=ph[Math.abs(s)%ph.length];n.id==="street-fighter-2"&&(r={primary:16726832,secondary:26367,accent:16765738}),n.id==="super-mario"&&(r={primary:15017249,secondary:4436039,accent:16502784}),n.id==="super-bomberman"&&(r={primary:28908,secondary:16777215,accent:16729943}),n.id==="gta-2"&&(r={primary:16765738,secondary:26367,accent:16726072}),n.id==="classic-doom"&&(r={primary:16726072,secondary:16752410,accent:16765738}),n.id==="classic-pacman"&&(r={primary:16765738,secondary:26367,accent:16777215});const a=new wt({color:1975357,roughness:.4,metalness:.3}),o=new wt({color:r.primary,roughness:.3,metalness:.4}),l=new vt({color:r.primary}),c=new gt(1.6,1.4,1.3),h=new Ce(c,a);h.position.set(0,.7,0),i.add(h);const d=new on(.7,.8),u=new wt({color:790304,roughness:.5,metalness:.7}),f=new Ce(d,u);f.position.set(0,.75,.66),i.add(f);const g=new gt(.14,.1,.04),_=new vt({color:16755200}),m=new Ce(g,_);m.position.set(-.16,.9,.68);const p=new Ce(g,_);p.position.set(.16,.9,.68),i.add(m),i.add(p);const T=new gt(1.65,.22,.7),R=new wt({color:1316907,roughness:.3,metalness:.4}),S=new Ce(T,R);S.position.set(0,1.4,.48),S.rotation.x=.22,i.add(S);const x=new Zt(.02,.02,.14),M=new wt({color:13421772,metalness:.9}),L=new Ai(.05,12,12),O=new vt({color:r.accent}),y=new Ce(x,M);y.position.set(-.35,1.55,.48);const b=new Ce(L,O);b.position.set(-.35,1.63,.48),i.add(y),i.add(b);const B=new Zt(.035,.035,.03,10),D=[62975,16711807,16765738,393121];for(let X=0;X<2;X++)for(let ue=0;ue<3;ue++){const ae=new vt({color:D[(X*3+ue)%D.length]}),xe=new Ce(B,ae);xe.position.set(.12+ue*.1,1.48-X*.06,.54-X*.08),i.add(xe)}const C=new gt(1.6,1.3,1.1),I=new Ce(C,a);I.position.set(0,2.1,-.05),i.add(I);const N=new gt(1.4,1,.08),F=new wt({color:527128,roughness:.8}),U=new Ce(N,F);U.position.set(0,2.15,.46),U.rotation.x=-.25,i.add(U);const{texture:z,update:K,ctx:H}=Ky(n),Q=new on(1.22,.88),te=new vt({map:z}),de=new Ce(Q,te);de.position.set(0,2.15,.51),de.rotation.x=-.25,i.add(de);const ye=new gt(1.65,.6,.85),_e=new Ce(ye,a);_e.position.set(0,3,.2),i.add(_e);const q=$y(n,r),Z=new vt({map:q}),ie=new on(1.58,.52),he=new Ce(ie,Z);he.position.set(0,3.02,.64),he.rotation.x=-.08,i.add(he);const se=new gt(1.68,.05,.05),Te=new Ce(se,l);Te.position.set(0,3.3,.66);const Ge=new Ce(se,l);Ge.position.set(0,2.74,.62),i.add(Te),i.add(Ge);const Pe=new gt(.06,2.7,1.25),Fe=new Ce(Pe,o);Fe.position.set(-.82,1.7,.05);const Ke=new Ce(Pe,o);Ke.position.set(.82,1.7,.05),i.add(Fe),i.add(Ke);const He=new ri(1.2,1.45,32),k=new vt({color:r.primary,side:Ut,transparent:!0,opacity:.35}),E=new Ce(He,k);E.rotation.x=-Math.PI/2,E.position.set(0,.03,.8),i.add(E);const $=Zy();i.add($.sprite);const oe=Math.sin(t)*2.2,Ne=Math.cos(t)*2.2,pe=e.x+oe,P=e.z+Ne,v=Math.abs(Math.sin(t))>.5,G=v?.65:.78,ne=v?.78:.65,le={minX:e.x-G,maxX:e.x+G,minZ:e.z-ne,maxZ:e.z+ne};return{game:n,group:i,theme:r,screenMesh:de,marqueeFace:he,floorGlow:E,occupancyBadge:$,occupiedBy:null,standSpot:{x:pe,z:P},position:{x:e.x,z:e.z},rotationY:t,collisionBox:le,isHovered:!1,_lastFrame:0,activeVideoElement:null,videoTexture:null,isLiveStreaming:!1,liveStreamTag:null,spectatorCount:0,setLiveFrame(X,ue="PILOTO"){if(!X)return;this.isLiveStreaming=!0,this.liveStreamTag=ue,this.occupiedBy=ue,this.occupancyBadge.setPlayer(ue,!0,this.spectatorCount);const ae=new Image;ae.onload=()=>{H.fillStyle="#050712",H.fillRect(0,0,256,224);const xe=ae.width||256,ze=ae.height||192,fe=256/xe,be=224/ze,Le=Math.min(fe,be),ke=(256-xe*Le)/2,Se=(224-ze*Le)/2;H.drawImage(ae,0,0,xe,ze,ke,Se,xe*Le,ze*Le),H.fillStyle="rgba(0, 0, 0, 0.12)";for(let je=0;je<224;je+=4)H.fillRect(0,je,256,1);z.needsUpdate=!0},ae.src=X,this.screenMesh.material.map!==z&&(this.screenMesh.material.map=z,this.screenMesh.material.needsUpdate=!0)},drawLiveStandby(X="PILOTO"){H.fillStyle="#080c24",H.fillRect(0,0,256,224),H.strokeStyle="rgba(255, 0, 85, 0.25)",H.lineWidth=1;for(let ue=0;ue<256;ue+=32)H.beginPath(),H.moveTo(ue,0),H.lineTo(ue,224),H.stroke();for(let ue=0;ue<224;ue+=32)H.beginPath(),H.moveTo(0,ue),H.lineTo(256,ue),H.stroke();H.fillStyle="#ff0055",H.font="bold 15px sans-serif",H.textAlign="center",H.fillText("🔴 TRANSMISSÃO AO VIVO",128,95),H.fillStyle="#00f5ff",H.font="bold 13px monospace",H.fillText(`PILOTO: [${(X||"P1").toUpperCase()}]`,128,122),H.fillStyle="#05ffa1",H.font="11px monospace",H.fillText("SINTONIZANDO FEED P2P...",128,144),z.needsUpdate=!0,this.screenMesh.material.map!==z&&(this.screenMesh.material.map=z,this.screenMesh.material.needsUpdate=!0)},setLiveStream(X,ue="PILOTO"){if(!X)return;if(this.isLiveStreaming=!0,this.liveStreamTag=ue,this.occupiedBy=ue,this.occupancyBadge.setPlayer(ue,!0,this.spectatorCount),this.activeVideoElement){try{this.activeVideoElement.pause(),this.activeVideoElement.srcObject=null}catch{}this.activeVideoElement=null}this.videoTexture&&(this.videoTexture.dispose(),this.videoTexture=null);const ae=document.createElement("video");ae.autoplay=!0,ae.muted=!0,ae.playsInline=!0,ae.srcObject=X,ae.play().catch(()=>{}),this.activeVideoElement=ae;const xe=new ep(ae);xe.minFilter=At,xe.magFilter=At,xe.generateMipmaps=!1,xe.format=rn,this.videoTexture=xe,this.screenMesh.material.map=xe,this.screenMesh.material.needsUpdate=!0},clearLiveStream(){if(this.isLiveStreaming=!1,this.liveStreamTag=null,this.activeVideoElement){try{this.activeVideoElement.pause(),this.activeVideoElement.srcObject=null}catch{}this.activeVideoElement=null}this.videoTexture&&(this.videoTexture.dispose(),this.videoTexture=null),this.screenMesh.material.map=z,this.screenMesh.material.needsUpdate=!0,this.occupiedBy?this.occupancyBadge.setPlayer(this.occupiedBy,!1):this.occupancyBadge.setPlayer(null)},setOccupiedBy(X,ue=!1){this.occupiedBy=X,ue&&(this.isLiveStreaming=!0,this.liveStreamTag=X,this.drawLiveStandby(X)),this.occupancyBadge.setPlayer(X,this.isLiveStreaming,this.spectatorCount)},clearOccupied(){this.occupiedBy=null,this.isLiveStreaming?this.clearLiveStream():this.occupancyBadge.setPlayer(null)},update(X,ue,ae="full"){if(this.occupiedBy&&this.occupancyBadge.sprite.visible&&(this.occupancyBadge.sprite.position.y=3.65+Math.sin(X*3.5)*.06),this.isLiveStreaming){E.material.color.setHex(16711765),E.material.opacity=.75+Math.sin(X*7)*.25;return}if(E.material.color.setHex(r.primary),this.isHovered||this.occupiedBy){K(X),E.material.opacity=.7+Math.sin(X*6)*.25;return}if(ae==="skip"){E.material.opacity=.25;return}if(ae==="reduced"){const ze=Math.floor(X*6);this._lastFrame!==ze&&(this._lastFrame=ze,K(X)),E.material.opacity=.35;return}const xe=Math.floor(X*24);this._lastFrame!==xe&&(this._lastFrame=xe,K(X)),E.material.opacity=.45},dispose(){this.clearLiveStream(),z&&z.dispose(),q&&q.dispose(),this.group.traverse(X=>{X.isMesh&&(X.geometry&&X.geometry.dispose(),X.material&&(Array.isArray(X.material)?X.material.forEach(ue=>{ue.map&&ue.map.dispose(),ue.dispose()}):(X.material.map&&X.material.map.dispose(),X.material.dispose())))})}}}class Qy{constructor(){this.catalog=null,this.tracks=[],this.artists=[],this.currentIndex=0,this.isPlaying=!1,this.isDucked=!1,this.volume=.75,this.duckMultiplier=1,this.duckInterval=null,this.subscribers=new Set,this.unlocked=!1,this.audioElement=new Audio,this.audioElement.preload="auto",this.audioElement.volume=this.volume,this.currentTrackTime=0,this.tickerInterval=null,this.bindAudioEvents()}bindAudioEvents(){this.audioElement.addEventListener("ended",()=>{this.next()}),this.audioElement.addEventListener("timeupdate",()=>{isNaN(this.audioElement.currentTime)||(this.currentTrackTime=this.audioElement.currentTime)}),this.audioElement.addEventListener("play",()=>{this.isPlaying=!0,this.notify()}),this.audioElement.addEventListener("pause",()=>{this.isPlaying=!1,this.notify()}),this.audioElement.addEventListener("error",e=>{console.warn("Audio playback error on current track:",e,this.audioElement.error),this.isPlaying=!1,this.notify()})}resolveUrl(e){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const t=e.replace(/^(\.\/|\/)/,"");try{return new URL(t,window.location.href).href}catch{return t}}async init(){const e=await this.loadCatalog();return e&&(this.catalog=e,this.tracks=(e.tracks||[]).map(t=>({...t,resolvedAudioUrl:this.resolveUrl(t.audioUrl)})),this.artists=e.artists||[]),this.tracks.length>0&&!this.audioElement.src&&(this.audioElement.src=this.tracks[0].resolvedAudioUrl,this.audioElement.load()),this.startTicker(),this.notify(),this}async loadCatalog(){const e=[new URL("music/catalog.json",window.location.href).href,"./music/catalog.json","/music/catalog.json"];for(const t of e)try{const i=await fetch(t);if(i.ok){const s=await i.json();if(s&&s.tracks&&s.tracks.length>0)return s}}catch{}return console.warn("Could not locate catalog.json in any fallback path"),null}getCurrentTrack(){return this.tracks.length?this.tracks[this.currentIndex]:null}async playTrack(e){if(!this.tracks.length)return;e<0&&(e=this.tracks.length-1),e>=this.tracks.length&&(e=0),this.currentIndex=e;const t=this.getCurrentTrack();if(!t)return;this.currentTrackTime=0;const i=t.resolvedAudioUrl||this.resolveUrl(t.audioUrl);this.audioElement.src!==i&&(this.audioElement.src=i,this.audioElement.load()),this.applyVolume();try{await this.audioElement.play(),this.isPlaying=!0,this.unlocked=!0,this.notify()}catch(s){console.warn("Audio play() error or user gesture required:",s),this.isPlaying=!1,this.notify()}}async togglePlay(){if(this.tracks.length)if(this.isPlaying)this.pause();else{const e=this.getCurrentTrack(),t=(e==null?void 0:e.resolvedAudioUrl)||this.resolveUrl(e==null?void 0:e.audioUrl);(!this.audioElement.src||this.audioElement.src.endsWith("/")||this.audioElement.src==="about:blank")&&t&&(this.audioElement.src=t,this.audioElement.load()),this.applyVolume();try{await this.audioElement.play(),this.isPlaying=!0,this.unlocked=!0,this.notify()}catch(i){console.warn("Audio play() error:",i),this.playTrack(this.currentIndex)}}}pause(){this.isPlaying=!1,this.audioElement.pause(),this.notify()}next(){const e=(this.currentIndex+1)%(this.tracks.length||1);this.playTrack(e)}prev(){const e=(this.currentIndex-1+(this.tracks.length||1))%(this.tracks.length||1);this.playTrack(e)}applyVolume(){const e=this.volume*this.duckMultiplier;this.audioElement.volume=Math.max(0,Math.min(1,e))}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.applyVolume(),this.notify()}duck(e){this.isDucked=e;const t=e?.12:1;this.duckInterval&&clearInterval(this.duckInterval);const i=e?-.1:.1;this.duckInterval=setInterval(()=>{Math.abs(this.duckMultiplier-t)<.1?(this.duckMultiplier=t,this.applyVolume(),clearInterval(this.duckInterval),this.duckInterval=null):(this.duckMultiplier+=i,this.applyVolume())},25)}unlockAndPlay(){this.unlocked||(this.unlocked=!0,this.isPlaying||this.playTrack(this.currentIndex))}getFrequencyData(e){var r;if(!this.isPlaying){e.fill(0);return}const t=performance.now()/1e3,i=((r=this.getCurrentTrack())==null?void 0:r.bpm)||132,s=t*(i/60)%1;for(let a=0;a<e.length;a++){const o=Math.sin(t*8+a*.5),l=Math.pow(Math.sin(s*Math.PI),2),c=Math.max(.08,l*.65+(o*.5+.5)*.35);e[a]=Math.floor(c*255*(this.isDucked?.2:1))}}startTicker(){this.tickerInterval&&clearInterval(this.tickerInterval),this.tickerInterval=setInterval(()=>{this.isPlaying&&(isNaN(this.audioElement.currentTime)||(this.currentTrackTime=this.audioElement.currentTime),this.notify("time"))},250)}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notify(e="state"){const t=this.getCurrentTrack(),i=this.audioElement&&this.audioElement.duration&&!isNaN(this.audioElement.duration)&&this.audioElement.duration>0?this.audioElement.duration:t&&t.durationSec||150,s={type:e,isPlaying:this.isPlaying,currentTrack:t,currentIndex:this.currentIndex,currentTime:this.currentTrackTime,duration:i,volume:this.volume,isDucked:this.isDucked,isProcedural:!1};this.subscribers.forEach(r=>{try{r(s)}catch(a){console.error(a)}})}}const tt=new Qy;typeof window<"u"&&(window.__MUSIC_MANAGER__=tt);function ev(){const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d"),t=new an(n);t.minFilter=St;const i=new Uint8Array(32);return{texture:t,render:(r,a)=>{e.clearRect(0,0,512,512);const o=e.createLinearGradient(0,0,0,512);o.addColorStop(0,"#0a091d"),o.addColorStop(.5,"#151336"),o.addColorStop(1,"#080718"),e.fillStyle=o,e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.12)",e.lineWidth=1;for(let T=0;T<512;T+=32)e.beginPath(),e.moveTo(0,T),e.lineTo(512,T),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.35)",e.fillRect(80,28,352,34),e.strokeStyle="#ff007f",e.lineWidth=2,e.strokeRect(80,28,352,34),e.fillStyle="#ffffff",e.font='bold 15px "Press Start 2P", monospace, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("★ GAME SOUNDTRACKS ★",256,45);const l=tt.getCurrentTrack(),c=tt.isPlaying;e.fillStyle="#00f5ff",e.font='bold 22px "Outfit", Arial, sans-serif',e.shadowColor="#00f5ff",e.shadowBlur=12;const h=l?l.title:"ARCADE CLASSICS FM";e.fillText(h,256,105),e.fillStyle="#ffd32a",e.font="16px monospace",e.shadowColor="#ffd32a",e.shadowBlur=8;const d=l?`${l.artistName} • ${l.game||"ORIGINAL OST"}`:"TRILHAS DOS FLIPERAMAS";e.fillText(d,256,138),tt.getFrequencyData(i);const u=20,f=16,g=6,_=(512-(u*(f+g)-g))/2,m=320,p=120;for(let T=0;T<u;T++){let R=i[T%i.length]/255;(!c||R<.05)&&(R=.15+.12*Math.sin(r*3+T*.4));const S=Math.max(6,R*p),x=_+T*(f+g),M=m-S,L=e.createLinearGradient(0,m,0,m-p);L.addColorStop(0,"#00f5ff"),L.addColorStop(.6,"#ff007f"),L.addColorStop(1,"#ffd32a"),e.fillStyle=L,e.shadowColor="#ff007f",e.shadowBlur=8,e.fillRect(x,M,f,S),e.fillStyle="#ffffff",e.fillRect(x,M-4,f,3)}e.strokeStyle="#00f5ff",e.lineWidth=2,e.beginPath(),e.moveTo(_-10,m+2),e.lineTo(_+u*(f+g)+4,m+2),e.stroke(),e.shadowBlur=0,c?(e.fillStyle="#05ffa1",e.font="bold 16px monospace",e.fillText("● EM REPRODUÇÃO [SPACE = MENU]",256,380)):(e.fillStyle="#ff007f",e.font="bold 16px monospace",e.fillText("■ EM ESPERA [SPACE = ABRIR]",256,380)),(Math.floor(r*2.5)%2===0||a)&&(e.fillStyle="#00f5ff",e.font="bold 20px monospace",e.shadowColor="#00f5ff",e.shadowBlur=14,e.fillText("▶ PRESSIONE [ESPAÇO] PARA OUVIR ◀",256,435)),e.fillStyle="rgba(0, 0, 0, 0.28)";for(let T=0;T<512;T+=4)e.fillRect(0,T,512,2);e.strokeStyle=a?"#00f5ff":"#ff007f",e.lineWidth=8,e.strokeRect(4,4,504,504),t.needsUpdate=!0}}}function tv(){const n=document.createElement("canvas");n.width=512,n.height=160;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,512,160);t.addColorStop(0,"#0c0721"),t.addColorStop(.5,"#220b38"),t.addColorStop(1,"#0c0721"),e.fillStyle=t,e.fillRect(0,0,512,160),e.strokeStyle="#ff007f",e.lineWidth=5,e.strokeRect(6,6,500,148),e.strokeStyle="#00f5ff",e.lineWidth=2,e.strokeRect(12,12,488,136),e.fillStyle="#ffffff",e.font='bold 36px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#00f5ff",e.shadowBlur=20,e.fillText("📻 RETRO ARCADE JUKEBOX",256,65),e.font="bold 16px monospace",e.fillStyle="#ffd32a",e.shadowColor="#ff007f",e.shadowBlur=10,e.fillText("• TRILHAS SONORAS CLÁSSICAS DOS JOGOS •",256,115);const i=new an(n);return i.needsUpdate=!0,i}function nv(n,e=0){const t=new bn;t.position.set(n.x,0,n.z),t.rotation.y=e;const i=new wt({color:1249576,roughness:.35,metalness:.6}),s=new wt({color:15658734,roughness:.1,metalness:.95}),r=new vt({color:62975}),a=new vt({color:16711807});new vt({color:16765738});const o=new gt(1.8,1.3,1.2),l=new Ce(o,i);l.position.set(0,.65,0),t.add(l);for(let Pe=0;Pe<7;Pe++){const Fe=new gt(1.3,.04,.05),Ke=new Ce(Fe,s);Ke.position.set(0,.4+Pe*.12,.61),t.add(Ke)}const c=new Zt(.08,.08,3.2,16),h=new Ce(c,r);h.position.set(-.95,1.6,.3),t.add(h);const d=new Ce(c,a);d.position.set(.95,1.6,.3),t.add(d);const u=new gt(1.85,.2,.7),f=new wt({color:1709624,roughness:.2,metalness:.7}),g=new Ce(u,f);g.position.set(0,1.35,.45),g.rotation.x=.2,t.add(g);const _=new bn;_.position.set(0,1.65,.45),t.add(_);const m=new Zt(.32,.32,.02,32),p=new wt({color:1118481,roughness:.2,metalness:.8}),T=new Ce(m,p);_.add(T);const R=new ri(.12,.3,32),S=new vt({color:62975,side:Ut}),x=new Ce(R,S);x.rotation.x=-Math.PI/2,x.position.y=.015,_.add(x);const M=new ri(0,.1,32),L=new vt({color:16711807,side:Ut}),O=new Ce(M,L);O.rotation.x=-Math.PI/2,O.position.y=.016,_.add(O);const y=new gt(1.8,1.3,1.1),b=new Ce(y,i);b.position.set(0,2.1,-.05),t.add(b);const B=new gt(1.5,1.05,.08),D=new wt({color:591639,roughness:.7}),C=new Ce(B,D);C.position.set(0,2.15,.46),C.rotation.x=-.25,t.add(C);const{texture:I,render:N}=ev(),F=new on(1.4,.95),U=new vt({map:I,toneMapped:!1}),z=new Ce(F,U);z.position.set(0,2.15,.51),z.rotation.x=-.25,t.add(z);const K=new Zt(.9,.9,1,32,1,!1,0,Math.PI),H=new Ce(K,i);H.rotation.z=Math.PI/2,H.rotation.y=-Math.PI/2,H.position.set(0,2.8,-.05),t.add(H);const Q=new ec(.88,.05,16,32,Math.PI),te=new Ce(Q,r);te.position.set(0,2.8,.4),t.add(te);const de=tv();new gt(1.7,.45,.1);const ye=new Ce(new on(1.68,.42),new vt({map:de,toneMapped:!1}));ye.position.set(0,3.12,.46),t.add(ye);const _e=new on(3.6,3.6),q=new vt({color:62975,transparent:!0,opacity:.45,side:Ut}),Z=new Ce(_e,q);Z.rotation.x=-Math.PI/2,Z.position.set(0,.03,.6),t.add(Z);const ie=2,he=n.x+Math.sin(e)*ie,se=n.z+Math.cos(e)*ie,Te={minX:n.x-.95,maxX:n.x+.95,minZ:n.z-.7,maxZ:n.z+.7};return{game:{id:"phase-ai-jukebox",name:"Retro Arcade Jukebox",icon:"📻",category:"music",description:"Ouça as trilhas sonoras clássicas de Street Fighter II, Mario, Sonic, OutRun, GTA 2, Streets of Rage, Doom e Mega Man!",isJukebox:!0},group:t,screenMesh:z,marqueeFace:ye,floorGlow:Z,standSpot:{x:he,z:se},position:{x:n.x,z:n.z},rotationY:e,collisionBox:Te,isHovered:!1,isJukebox:!0,update(Pe){N(Pe,this.isHovered),tt.isPlaying?_.rotation.y+=.04:_.rotation.y+=.005,this.isHovered?(Z.material.opacity=.75+Math.sin(Pe*6)*.2,te.material.color.setHex(Math.floor(Pe*3)%2===0?62975:16711807)):Z.material.opacity=.4+Math.sin(Pe*2)*.15}}}function iv(){const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#10142e",e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.28)",e.lineWidth=2;for(let i=0;i<512;i+=64)e.beginPath(),e.moveTo(i,0),e.lineTo(i,512),e.stroke();for(let i=0;i<512;i+=64)e.beginPath(),e.moveTo(0,i),e.lineTo(512,i),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.45)";for(let i=32;i<512;i+=64)for(let s=32;s<512;s+=64)e.beginPath(),e.arc(i,s,5,0,Math.PI*2),e.fill();const t=new an(n);return t.wrapS=zs,t.wrapT=zs,t.repeat.set(12,16),t.needsUpdate=!0,t}function Ki(n,e,t,i="#00f5ff",s="#ff007f"){const r=document.createElement("canvas");r.width=1024,r.height=256;const a=r.getContext("2d");a.fillStyle="transparent",a.fillRect(0,0,1024,256),a.font='bold 72px "Segoe UI", sans-serif',a.textAlign="center",a.textBaseline="middle",a.shadowColor=s,a.shadowBlur=30,a.fillStyle=i,a.fillText(n,512,128);const o=new an(r);o.needsUpdate=!0;const l=new vt({map:o,transparent:!0,side:Ut});return new Ce(new on(e,t),l)}function sv(n,e){const t={minX:-23.5,maxX:23.5,minZ:-29,maxZ:18},i=new bn;n.add(i);const s=new lp(16777215,2.4);i.add(s);const r=new rp(62975,16711807,2.2);i.add(r);const a=new Vc(16777215,2.2);a.position.set(10,25,20),i.add(a);const o=new Vc(62975,1.8);o.position.set(-15,20,-15),i.add(o);const l=new Za(62975,3.5,60,0);l.position.set(0,8,0),i.add(l);const c=new Za(16711807,3.2,60,0);c.position.set(-15,7,-10),i.add(c);const h=new Za(16765738,3.2,60,0);h.position.set(15,7,-10),i.add(h);const d=iv(),u=new on(50,76),f=new wt({map:d,roughness:.5,metalness:.2}),g=new Ce(u,f);g.rotation.x=-Math.PI/2,g.position.set(0,0,4),i.add(g);const _=new Zt(10.5,10.5,.08,36),m=new wt({color:1581122,roughness:.3,metalness:.5}),p=new Ce(_,m);p.position.set(0,.04,-2.5),i.add(p);const T=new ri(10.2,10.5,36),R=new vt({color:62975,side:Ut}),S=new Ce(T,R);S.rotation.x=-Math.PI/2,S.position.set(0,.09,-2.5),i.add(S);const x=new ri(1.2,1.8,24),M=new vt({color:16711807,side:Ut}),L=new Ce(x,M);L.rotation.x=-Math.PI/2,L.position.set(0,.1,-2.5),i.add(L);const O=new wt({color:1448494,roughness:.5,metalness:.3,side:Gn}),y=new Ce(new gt(50,10,1),O);y.position.set(0,5,-30),i.add(y);const b=new Ce(new gt(50,10,1),O);b.position.set(0,5,40),i.add(b);const B=new Ce(new gt(1,10,72),O);B.position.set(-24.5,5,4),i.add(B);const D=new Ce(new gt(1,10,72),O);D.position.set(24.5,5,4),i.add(D);const C=(ye,_e,q,Z,ie,he)=>{const se=ie?new gt(.12,.12,Z):new gt(Z,.12,.12),Te=new vt({color:he}),Ge=new Ce(se,Te);Ge.position.set(ye,_e,q),i.add(Ge)};C(0,4.2,-29.4,48,!1,62975),C(0,7.8,-29.4,48,!1,16711807),C(-23.9,4.2,4,68,!0,393121),C(23.9,4.2,4,68,!0,16765738);const I=Ki("⚡ NOPEX VIRTUAL ARCADE ⚡",24,6,"#00f5ff","#ff007f");I.position.set(0,8.2,-29.2),i.add(I);const N=Ki("🌟 SPOTLIGHT MEGAHITS",10,2.5,"#ffd32a","#ff007f");N.position.set(0,6.5,-3.5),i.add(N);const F=Ki("⚔️ ACTION & FIGHTING ALLEY",14,2.5,"#ff007f","#00f5ff");F.position.set(-18.5,6.5,-3.5),F.rotation.y=Math.PI/2,i.add(F);const U=Ki("🕹️ RETRO VAULT & 16-BIT LEGENDS",15,2.5,"#7928ca","#00f5ff");U.position.set(0,6.5,-25.5),i.add(U);const z=Ki("🏎️ SPEEDWAY & RACING",12,2.5,"#ff3838","#ffd32a");z.position.set(11.5,6.5,-10),z.rotation.y=-Math.PI/2,i.add(z);const K=Ki("🎱 SPORTS & CASUAL ARCADE",12,2.5,"#05ffa1","#ffd32a");K.position.set(20,6.5,-5),K.rotation.y=-Math.PI/2,i.add(K);const H={};e.forEach(ye=>{H[ye.id]=ye});const Q=[],te=(ye,_e,q)=>{const Z=H[ye]||e[Q.length%e.length],ie=Jy(Z,_e,q);i.add(ie.group),Q.push(ie)};te("classic-doom",{x:-5.4,z:5},0),te("classic-pacman",{x:-1.8,z:5},0),te("neon-tetris-3d",{x:1.8,z:5},0);const de=nv({x:5.4,z:5},0);return i.add(de.group),Q.push(de),te("geometricsurvivor",{x:0,z:-10},0),te("cyber-pong-3d",{x:0,z:2.5},Math.PI),te("neon-viper",{x:-6.5,z:-3.5},Math.PI/2),te("cute-mini-golf",{x:6.5,z:-3.5},-Math.PI/2),te("street-fighter-2",{x:-19.5,z:-24.5},Math.PI/2),te("mk2",{x:-19.5,z:-21},Math.PI/2),te("sor2",{x:-19.5,z:-17.5},Math.PI/2),te("mslug",{x:-19.5,z:-14},Math.PI/2),te("mslugx",{x:-19.5,z:-10.5},Math.PI/2),te("gta-2",{x:-19.5,z:-7},Math.PI/2),te("neon-katana-slash",{x:-19.5,z:-3.5},Math.PI/2),te("stickman-fps-arcade",{x:-19.5,z:0},Math.PI/2),te("castlevania4",{x:-19.5,z:3.5},Math.PI/2),te("sky-ace-1944",{x:-19.5,z:7},Math.PI/2),te("asteroid-blitz",{x:-19.5,z:10.5},Math.PI/2),te("cyber-shuriken",{x:-19.5,z:14},Math.PI/2),te("sonic1",{x:-11.4,z:-26.5},0),te("sonic2",{x:-7.6,z:-26.5},0),te("megaman2",{x:-3.8,z:-26.5},0),te("super-mario",{x:0,z:-26.5},0),te("super-bomberman",{x:3.8,z:-26.5},0),te("neon-stack-3d",{x:7.6,z:-26.5},0),te("neon-orbit-drift",{x:11.4,z:-26.5},0),te("topgear",{x:11.5,z:-20},-Math.PI/2),te("fzero",{x:11.5,z:-15},-Math.PI/2),te("outrun",{x:11.5,z:-10},-Math.PI/2),te("neon-drift-racer",{x:11.5,z:-5},-Math.PI/2),te("cyber-runner-3d",{x:11.5,z:0},-Math.PI/2),te("kawaii-8ball-pool",{x:20.5,z:-20},-Math.PI/2),te("neon-pachinko-pop",{x:20.5,z:-15},-Math.PI/2),te("neon-archery-master",{x:20.5,z:-10},-Math.PI/2),te("brick-breaker-fx",{x:20.5,z:-5},-Math.PI/2),te("neon-drop-2048",{x:20.5,z:0},-Math.PI/2),te("cyber-pinball-fx",{x:20.5,z:5},-Math.PI/2),te("flappy-cyber-droid",{x:20.5,z:10},-Math.PI/2),{roomBounds:t,cabinets:Q,worldGroup:i,floorMesh:g,update(ye,_e,q="balanced"){const Z=_e?_e.x:0,ie=_e?_e.z:0,he=[];for(let Pe=0;Pe<Q.length;Pe++){const Fe=Q[Pe];if(Fe.isHovered||Fe.occupiedBy||Fe.isLiveStreaming)Fe.update(ye,_e,"full");else{const Ke=Fe.position.x-Z,He=Fe.position.z-ie;he.push({cab:Fe,distSq:Ke*Ke+He*He})}}he.sort((Pe,Fe)=>Pe.distSq-Fe.distSq);const se=q==="ultra-perf"?1:q==="balanced"?3:5,Te=q==="ultra-perf"?3:q==="balanced"?6:10,Ge=q==="ultra-perf"?49:72.25;for(let Pe=0;Pe<he.length;Pe++){const Fe=he[Pe];Fe.distSq>Ge?Fe.cab.update(ye,_e,"skip"):Pe<se?Fe.cab.update(ye,_e,"full"):Pe<Te?Fe.cab.update(ye,_e,"reduced"):Fe.cab.update(ye,_e,"skip")}S.material.opacity=.8+Math.sin(ye*4)*.2}}}class rv{constructor(e,t,i=null,s=null){this.cabinets=e,this.onPlayGame=t,this.onDiscoverCabinet=i,this.onWatchGame=s,this.activeCabinet=null,this.lastHoveredCab=null,this._lastPlayerPos=null,this.promptEl=document.getElementById("arcade-3d-prompt"),this.promptTitle=document.getElementById("arcade-prompt-title"),this.promptDesc=document.getElementById("arcade-prompt-desc"),this.promptRecord=document.getElementById("arcade-prompt-record"),this.actionBtn=document.getElementById("arcade-action-btn"),this.playBtn=document.getElementById("arcade-hologram-play-btn"),this.watchBtn=document.getElementById("arcade-hologram-watch-btn"),this.bindInputs()}bindInputs(){window.addEventListener("keydown",e=>{if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA")||window.__arcadeOverlayOpen||window.__arcadeSpectating)return;if(e.code==="KeyV"||e.key==="v"||e.key==="V"){const s=this.activeCabinet||this.findClosestLiveCabinet();if(s&&(s.isLiveStreaming||s.occupiedBy)){e.preventDefault(),e.stopPropagation(),this.triggerWatch(s);return}}if((e.code==="Enter"||e.code==="KeyE"||e.key==="e"||e.key==="E"||e.key==="Enter")&&this.activeCabinet){e.preventDefault(),e.stopPropagation(),this.triggerPlay(this.activeCabinet);return}},!0),this.actionBtn&&this.actionBtn.addEventListener("click",()=>{this.activeCabinet&&(this.activeCabinet.isLiveStreaming&&this.onWatchGame?this.triggerWatch(this.activeCabinet):this.triggerPlay(this.activeCabinet))}),this.playBtn&&this.playBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay(this.activeCabinet)}),this.watchBtn&&this.watchBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerWatch(this.activeCabinet)}),this.promptEl&&this.promptEl.addEventListener("click",e=>{e.target.tagName!=="BUTTON"&&this.activeCabinet&&(this.activeCabinet.isLiveStreaming&&this.onWatchGame?this.triggerWatch(this.activeCabinet):this.triggerPlay(this.activeCabinet))})}findClosestLiveCabinet(){let e=null,t=5.2;for(const i of this.cabinets)if(i.isLiveStreaming||i.occupiedBy)if(this._lastPlayerPos){const s=Math.hypot(this._lastPlayerPos.x-i.position.x,this._lastPlayerPos.z-i.position.z);s<t&&(t=s,e=i)}else e=i;return e}triggerPlay(e=this.activeCabinet){e&&this.onPlayGame&&this.onPlayGame(e.game,e)}triggerWatch(e=this.activeCabinet){e&&this.onWatchGame&&this.onWatchGame(e)}update(e){if(this._lastPlayerPos={x:e.x,z:e.z},window.__arcadeSpectating){this.promptEl&&this.promptEl.classList.remove("visible"),this.actionBtn&&this.actionBtn.classList.remove("visible");return}let t=null,i=1/0;for(const s of this.cabinets){s.isHovered=!1;const r=Math.hypot(e.x-s.standSpot.x,e.z-s.standSpot.z),a=Math.hypot(e.x-s.position.x,e.z-s.position.z),o=Math.min(r,a*.92);o<4.2&&o<i&&(i=o,t=s)}if(t){t.isHovered=!0,this.activeCabinet=t;const s=!!(t.isLiveStreaming||t.occupiedBy);(this.lastHoveredCab!==t||this._lastLiveState!==s)&&(this.lastHoveredCab!==t&&qd(),this.lastHoveredCab=t,this._lastLiveState=s,this.renderHologram(t.game),this.onDiscoverCabinet&&this.onDiscoverCabinet(t.game.id)),this.promptEl&&this.promptEl.classList.add("visible"),this.actionBtn&&this.actionBtn.classList.add("visible")}else this.activeCabinet=null,this.lastHoveredCab=null,this._lastLiveState=null,this.promptEl&&this.promptEl.classList.remove("visible"),this.actionBtn&&this.actionBtn.classList.remove("visible")}renderHologram(e){const t=this.activeCabinet&&(this.activeCabinet.isLiveStreaming||this.activeCabinet.occupiedBy),i=this.activeCabinet?this.activeCabinet.liveStreamTag||this.activeCabinet.occupiedBy:null;if(this.watchBtn&&(this.watchBtn.style.display=t?"inline-flex":"none"),this.promptTitle&&(t?this.promptTitle.innerHTML=`<span style="color:#ff0055; animation: blink-dot 1.2s infinite;">🔴 AO VIVO</span> • ${e.icon||"🎮"} ${e.name||"ARCADE GAME"}`:this.promptTitle.innerHTML=`${e.icon||"🎮"} ${e.name||"ARCADE GAME"}`),this.promptDesc&&(e.isJukebox?this.promptDesc.textContent=e.description||"Pressione [E] ou [ENTER] para abrir o Jukebox de trilhas clássicas.":t?this.promptDesc.textContent=`Partida em andamento com [${i}]. Pressione [V] para assistir a transmissão ao vivo ou [E] para jogar.`:this.promptDesc.textContent=e.description||"Pressione [ENTER] ou [E] para entrar na máquina e jogar."),this.promptRecord)if(e.isJukebox)this.promptRecord.innerHTML="🎵 <strong>RETRO ARCADE JUKEBOX</strong> • 15 Trilhas Clássicas dos Jogos";else if(t)this.promptRecord.innerHTML=`🔴 <strong>AO VIVO NO SALÃO</strong> • Piloto: <strong>[${i}]</strong> • Pressione <kbd class="kbd-neon">V</kbd> para Assistir`;else{const s=window.__ARCADE_LEADERBOARDS__&&window.__ARCADE_LEADERBOARDS__[e.id];s&&s.topScore?this.promptRecord.innerHTML=`🏆 Recorde Mundial: <strong>${s.topScore.toLocaleString()} ${e.unit||"PTS"}</strong> [${s.topPilot||"MRC"}]`:this.promptRecord.innerHTML=`⚡ 60 FPS Instantâneo • <strong>${(e.category||"ACTION").toUpperCase()}</strong>`}this.playBtn&&(e.isJukebox?this.playBtn.innerHTML='<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">J</kbd> PARA OUVIR</span> ➔':t?this.playBtn.innerHTML='<span>ASSISTIR <kbd class="kbd-action">V</kbd> OU JOGAR <kbd class="kbd-action">E</kbd></span> ➔':this.playBtn.innerHTML='<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">ENTER</kbd> PARA JOGAR</span> ➔'),this.actionBtn&&(e.isJukebox?this.actionBtn.innerHTML="<span>OUVIR</span> 📻":t?this.actionBtn.innerHTML="<span>ASSISTIR</span> 🔴":this.actionBtn.innerHTML="<span>JOGAR</span> 🕹️")}}class av{constructor(e){this.onCloseCallback=e,this.overlay=document.getElementById("arcade-game-overlay"),this.iframe=document.getElementById("arcade-game-iframe"),this.titleEl=document.getElementById("arcade-overlay-title"),this.closeBtn=document.getElementById("arcade-overlay-back"),this.fullscreenBtn=document.getElementById("arcade-overlay-fullscreen"),this.reloadBtn=document.getElementById("arcade-overlay-reload"),this.isOpen=!1,this.activeGame=null,this.currentStream=null,this._frameInterval=null,this._captureCanvas=null,this._captureCtx=null,this._captureVideo=null,this._currentCanvas=null,this.onStreamReady=null,this.onStreamEnded=null,this.onFrameReady=null,this.onFrameEnded=null,this.bindEvents()}bindEvents(){this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):this.overlay.requestFullscreen().catch(()=>{})}),this.reloadBtn&&this.reloadBtn.addEventListener("click",()=>{this.iframe&&this.activeGame&&(this.iframe.src=this.activeGame.url)}),window.addEventListener("message",e=>{e.data&&(e.data.type==="CLOSE_ARCADE_GAME"||e.data.type==="ARCADE_CLOSE"||e.data.type==="ARCADE_EXIT"||e.data==="closeArcade"||e.data==="escape")&&this.close()}),window.addEventListener("keydown",e=>{if(e.key==="Escape"&&this.isOpen){e.preventDefault(),e.stopPropagation(),this.close();return}if(this.isOpen&&this.iframe&&this.iframe.contentWindow&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","W","a","A","s","S","d","D"," ","Enter"].includes(e.key))try{this.iframe.contentWindow.postMessage({type:"ARCADE_KEY_DOWN",key:e.key,code:e.code},"*"),this.iframe.contentWindow.dispatchEvent(new KeyboardEvent("keydown",{key:e.key,code:e.code,bubbles:!0}))}catch{}},!0)}attachIframeEscape(){if(this.iframe)try{const e=this.iframe.contentWindow,t=this.iframe.contentDocument||(e==null?void 0:e.document),i=s=>{(s.key==="Escape"||s.code==="Escape"||s.keyCode===27)&&(s.preventDefault(),s.stopPropagation(),this.close())};e&&(e.removeEventListener("keydown",i,!0),e.addEventListener("keydown",i,!0)),t&&(t.removeEventListener("keydown",i,!0),t.addEventListener("keydown",i,!0))}catch{}}open(e){if(this.isOpen=!0,window.__arcadeOverlayOpen=!0,document.exitPointerLock&&document.exitPointerLock(),this.activeGame=e,this._currentCanvas=null,this._captureVideo)try{this._captureVideo.pause(),this._captureVideo.srcObject=null}catch{}this.currentStream=null,Xd(),tt.duck(!0),this.titleEl&&(this.titleEl.innerHTML=`${e.icon||"🎮"} ${e.name||"JOGO"}`),this.iframe&&(this.iframe.src=e.url,this.iframe.onload=()=>{try{this.iframe.focus(),this.iframe.contentWindow&&this.iframe.contentWindow.focus(),this.attachIframeEscape()}catch{}},setTimeout(()=>this.attachIframeEscape(),150),setTimeout(()=>this.attachIframeEscape(),600),setTimeout(()=>this.attachIframeEscape(),1500),this.startFrameBroadcasting(e.id)),this.overlay&&(this.overlay.style.display="flex",setTimeout(()=>{this.overlay.classList.add("active");try{this.iframe&&(this.iframe.focus(),this.iframe.contentWindow&&this.iframe.contentWindow.focus(),this.attachIframeEscape())}catch{}},100))}startFrameBroadcasting(e){this._frameInterval&&(clearInterval(this._frameInterval),this._frameInterval=null),this._captureCanvas||(this._captureCanvas=document.createElement("canvas"),this._captureCanvas.width=256,this._captureCanvas.height=192,this._captureCtx=this._captureCanvas.getContext("2d",{alpha:!1}));let t=!1;this._frameInterval=setInterval(()=>{var i;if(!this.isOpen||!this.iframe){this._frameInterval&&(clearInterval(this._frameInterval),this._frameInterval=null);return}try{let a=function(h){if(!h)return-999999;const d=(h.id||"").toLowerCase(),u=(h.className||"").toLowerCase();if(d.includes("confetti")||u.includes("confetti"))return-1e4;if(d.includes("minimap")||u.includes("minimap")||d.includes("radar")||u.includes("radar"))return-8e3;if(d.includes("touch")||u.includes("touch")||d.includes("joystick")||u.includes("joystick")||d.includes("dpad")||u.includes("dpad"))return-7e3;if(d.includes("debug")||u.includes("debug"))return-9e3;if(h.width>0&&h.width<=160||h.height>0&&h.height<=160)return-5e3;let f=h.width*h.height||1e3;(d==="webgl-canvas"||d==="webgl"||d==="glcanvas")&&(f+=5e7),(d==="game-canvas"||d==="game"||d==="canvas")&&(f+=4e7),(d.includes("viewport")||d.includes("stage")||d.includes("render")||d.includes("screen"))&&(f+=3e7),(u.includes("game")||u.includes("main"))&&(f+=2e7);try{(h.getContext("webgl2")||h.getContext("webgl"))&&(f+=25e6)}catch{}return f};const s=this.iframe.contentDocument||((i=this.iframe.contentWindow)==null?void 0:i.document);if(!s)return;const r=Array.from(s.querySelectorAll("canvas"));if(r.length===0)return;const o=[...r];o.sort((h,d)=>a(d)-a(h));const l=o[0];if(!l)return;if((l!==this._currentCanvas||!this._captureVideo||!this._captureVideo.srcObject)&&(this._currentCanvas=l,typeof l.captureStream=="function"))try{const h=l.captureStream(24);this.currentStream=h,this._captureVideo||(this._captureVideo=document.createElement("video"),this._captureVideo.muted=!0,this._captureVideo.playsInline=!0,this._captureVideo.autoplay=!0,this._captureVideo.style.cssText="position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;z-index:-999;",document.body.appendChild(this._captureVideo)),this._captureVideo.srcObject!==h&&(this._captureVideo.srcObject=h,this._captureVideo.play().catch(()=>{})),!t&&this.onStreamReady&&(t=!0,this.onStreamReady(h,e))}catch{}let c=null;if(this._captureVideo&&this._captureVideo.videoWidth>0&&!this._captureVideo.paused?c=this._captureVideo:l&&(l.width>0||l.videoWidth>0)&&(c=l),c){this._captureCtx.drawImage(c,0,0,256,192);const h=this._captureCanvas.toDataURL("image/webp",.42);this.onFrameReady&&h&&h.length>50&&this.onFrameReady(h,e)}}catch{}},90)}close(){if(!this.isOpen)return;const e=this.activeGame?this.activeGame.id:null;if(this.isOpen=!1,window.__arcadeOverlayOpen=!1,this._frameInterval&&(clearInterval(this._frameInterval),this._frameInterval=null),this._captureVideo){try{this._captureVideo.srcObject&&this._captureVideo.srcObject.getTracks().forEach(t=>t.stop()),this._captureVideo.pause(),this._captureVideo.srcObject=null,this._captureVideo.remove()}catch{}this._captureVideo=null}if(this._currentCanvas=null,this.currentStream){try{this.currentStream.getTracks().forEach(t=>t.stop())}catch{}this.currentStream=null}this.onStreamEnded&&e&&this.onStreamEnded(e),this.onFrameEnded&&e&&this.onFrameEnded(e),document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),Yd(),tt.duck(!1),this.overlay&&(this.overlay.classList.remove("active"),setTimeout(()=>{this.overlay.style.display="none",this.iframe&&(this.iframe.src="about:blank")},250)),this.onCloseCallback&&this.onCloseCallback()}}class ov{constructor(){this.tickerEl=null,this.createBanner()}createBanner(){let e=document.getElementById("mp-score-ticker");e&&e.remove(),e=document.createElement("div"),e.id="mp-score-ticker",e.style.cssText=`
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
    `,this.tickerEl.style.transform="translateX(-50%) translateY(0)",this.playFanfareAudio(),this.hideTimeout&&clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(()=>{this.tickerEl.style.transform="translateX(-50%) translateY(-100px)"},6e3)}playFanfareAudio(){try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;t.state==="suspended"&&t.resume(),[523.25,659.25,783.99,1046.5].forEach((s,r)=>{const a=t.createOscillator(),o=t.createGain();a.type="triangle",a.frequency.setValueAtTime(s,t.currentTime+r*.1),o.gain.setValueAtTime(.2,t.currentTime+r*.1),o.gain.exponentialRampToValueAtTime(.01,t.currentTime+r*.1+.3),a.connect(o),o.connect(t.destination),a.start(t.currentTime+r*.1),a.stop(t.currentTime+r*.1+.3)})}catch{}}}const Zi=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function fa(n){return n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"}function Rl(n){if(!Number.isSafeInteger(n)||n<0)throw new Error("positive integer expected, got "+n)}function Ri(n,...e){if(!fa(n))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(n.length))throw new Error("Uint8Array expected of length "+e+", got length="+n.length)}function Kd(n){if(typeof n!="function"||typeof n.create!="function")throw new Error("Hash should be wrapped by utils.createHasher");Rl(n.outputLen),Rl(n.blockLen)}function ea(n,e=!0){if(n.destroyed)throw new Error("Hash instance has been destroyed");if(e&&n.finished)throw new Error("Hash#digest() has already been called")}function lv(n,e){Ri(n);const t=e.outputLen;if(n.length<t)throw new Error("digestInto() expects output buffer of length at least "+t)}function ta(...n){for(let e=0;e<n.length;e++)n[e].fill(0)}function so(n){return new DataView(n.buffer,n.byteOffset,n.byteLength)}function mn(n,e){return n<<32-e|n>>>e}const Zd=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",cv=Array.from({length:256},(n,e)=>e.toString(16).padStart(2,"0"));function ss(n){if(Ri(n),Zd)return n.toHex();let e="";for(let t=0;t<n.length;t++)e+=cv[n[t]];return e}const Nn={_0:48,_9:57,A:65,F:70,a:97,f:102};function mh(n){if(n>=Nn._0&&n<=Nn._9)return n-Nn._0;if(n>=Nn.A&&n<=Nn.F)return n-(Nn.A-10);if(n>=Nn.a&&n<=Nn.f)return n-(Nn.a-10)}function na(n){if(typeof n!="string")throw new Error("hex string expected, got "+typeof n);if(Zd)return Uint8Array.fromHex(n);const e=n.length,t=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const i=new Uint8Array(t);for(let s=0,r=0;s<t;s++,r+=2){const a=mh(n.charCodeAt(r)),o=mh(n.charCodeAt(r+1));if(a===void 0||o===void 0){const l=n[r]+n[r+1];throw new Error('hex string expected, got non-hex character "'+l+'" at index '+r)}i[s]=a*16+o}return i}function Jd(n){if(typeof n!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(n))}function nc(n){return typeof n=="string"&&(n=Jd(n)),Ri(n),n}function vn(...n){let e=0;for(let i=0;i<n.length;i++){const s=n[i];Ri(s),e+=s.length}const t=new Uint8Array(e);for(let i=0,s=0;i<n.length;i++){const r=n[i];t.set(r,s),s+=r.length}return t}class Qd{}function hv(n){const e=i=>n().update(nc(i)).digest(),t=n();return e.outputLen=t.outputLen,e.blockLen=t.blockLen,e.create=()=>n(),e}function pa(n=32){if(Zi&&typeof Zi.getRandomValues=="function")return Zi.getRandomValues(new Uint8Array(n));if(Zi&&typeof Zi.randomBytes=="function")return Uint8Array.from(Zi.randomBytes(n));throw new Error("crypto.getRandomValues must be defined")}function dv(n,e,t,i){if(typeof n.setBigUint64=="function")return n.setBigUint64(e,t,i);const s=BigInt(32),r=BigInt(4294967295),a=Number(t>>s&r),o=Number(t&r),l=i?4:0,c=i?0:4;n.setUint32(e+l,a,i),n.setUint32(e+c,o,i)}function uv(n,e,t){return n&e^~n&t}function fv(n,e,t){return n&e^n&t^e&t}class pv extends Qd{constructor(e,t,i,s){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=e,this.outputLen=t,this.padOffset=i,this.isLE=s,this.buffer=new Uint8Array(e),this.view=so(this.buffer)}update(e){ea(this),e=nc(e),Ri(e);const{view:t,buffer:i,blockLen:s}=this,r=e.length;for(let a=0;a<r;){const o=Math.min(s-this.pos,r-a);if(o===s){const l=so(e);for(;s<=r-a;a+=s)this.process(l,a);continue}i.set(e.subarray(a,a+o),this.pos),this.pos+=o,a+=o,this.pos===s&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){ea(this),lv(e,this),this.finished=!0;const{buffer:t,view:i,blockLen:s,isLE:r}=this;let{pos:a}=this;t[a++]=128,ta(this.buffer.subarray(a)),this.padOffset>s-a&&(this.process(i,0),a=0);for(let d=a;d<s;d++)t[d]=0;dv(i,s-8,BigInt(this.length*8),r),this.process(i,0);const o=so(e),l=this.outputLen;if(l%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const c=l/4,h=this.get();if(c>h.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<c;d++)o.setUint32(4*d,h[d],r)}digest(){const{buffer:e,outputLen:t}=this;this.digestInto(e);const i=e.slice(0,t);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:t,buffer:i,length:s,finished:r,destroyed:a,pos:o}=this;return e.destroyed=a,e.finished=r,e.length=s,e.pos=o,s%t&&e.buffer.set(i),e}clone(){return this._cloneInto()}}const ei=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),mv=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ti=new Uint32Array(64);class gv extends pv{constructor(e=32){super(64,e,8,!1),this.A=ei[0]|0,this.B=ei[1]|0,this.C=ei[2]|0,this.D=ei[3]|0,this.E=ei[4]|0,this.F=ei[5]|0,this.G=ei[6]|0,this.H=ei[7]|0}get(){const{A:e,B:t,C:i,D:s,E:r,F:a,G:o,H:l}=this;return[e,t,i,s,r,a,o,l]}set(e,t,i,s,r,a,o,l){this.A=e|0,this.B=t|0,this.C=i|0,this.D=s|0,this.E=r|0,this.F=a|0,this.G=o|0,this.H=l|0}process(e,t){for(let d=0;d<16;d++,t+=4)ti[d]=e.getUint32(t,!1);for(let d=16;d<64;d++){const u=ti[d-15],f=ti[d-2],g=mn(u,7)^mn(u,18)^u>>>3,_=mn(f,17)^mn(f,19)^f>>>10;ti[d]=_+ti[d-7]+g+ti[d-16]|0}let{A:i,B:s,C:r,D:a,E:o,F:l,G:c,H:h}=this;for(let d=0;d<64;d++){const u=mn(o,6)^mn(o,11)^mn(o,25),f=h+u+uv(o,l,c)+mv[d]+ti[d]|0,_=(mn(i,2)^mn(i,13)^mn(i,22))+fv(i,s,r)|0;h=c,c=l,l=o,o=a+f|0,a=r,r=s,s=i,i=f+_|0}i=i+this.A|0,s=s+this.B|0,r=r+this.C|0,a=a+this.D|0,o=o+this.E|0,l=l+this.F|0,c=c+this.G|0,h=h+this.H|0,this.set(i,s,r,a,o,l,c,h)}roundClean(){ta(ti)}destroy(){this.set(0,0,0,0,0,0,0,0),ta(this.buffer)}}const Cl=hv(()=>new gv);class eu extends Qd{constructor(e,t){super(),this.finished=!1,this.destroyed=!1,Kd(e);const i=nc(t);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const s=this.blockLen,r=new Uint8Array(s);r.set(i.length>s?e.create().update(i).digest():i);for(let a=0;a<r.length;a++)r[a]^=54;this.iHash.update(r),this.oHash=e.create();for(let a=0;a<r.length;a++)r[a]^=106;this.oHash.update(r),ta(r)}update(e){return ea(this),this.iHash.update(e),this}digestInto(e){ea(this),Ri(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:t,iHash:i,finished:s,destroyed:r,blockLen:a,outputLen:o}=this;return e=e,e.finished=s,e.destroyed=r,e.blockLen=a,e.outputLen=o,e.oHash=t._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const tu=(n,e,t)=>new eu(n,e).update(t).digest();tu.create=(n,e)=>new eu(n,e);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ic=BigInt(0),Pl=BigInt(1);function ia(n,e=""){if(typeof n!="boolean"){const t=e&&`"${e}"`;throw new Error(t+"expected boolean, got type="+typeof n)}return n}function xi(n,e,t=""){const i=fa(n),s=n==null?void 0:n.length,r=e!==void 0;if(!i||r&&s!==e){const a=t&&`"${t}" `,o=r?` of length ${e}`:"",l=i?`length=${s}`:`type=${typeof n}`;throw new Error(a+"expected Uint8Array"+o+", got "+l)}return n}function Cr(n){const e=n.toString(16);return e.length&1?"0"+e:e}function nu(n){if(typeof n!="string")throw new Error("hex string expected, got "+typeof n);return n===""?ic:BigInt("0x"+n)}function _s(n){return nu(ss(n))}function iu(n){return Ri(n),nu(ss(Uint8Array.from(n).reverse()))}function ma(n,e){return na(n.toString(16).padStart(e*2,"0"))}function su(n,e){return ma(n,e).reverse()}function Ct(n,e,t){let i;if(typeof e=="string")try{i=na(e)}catch(r){throw new Error(n+" must be hex string or Uint8Array, cause: "+r)}else if(fa(e))i=Uint8Array.from(e);else throw new Error(n+" must be hex string or Uint8Array");const s=i.length;if(typeof t=="number"&&s!==t)throw new Error(n+" of length "+t+" expected, got "+s);return i}const ro=n=>typeof n=="bigint"&&ic<=n;function Ll(n,e,t){return ro(n)&&ro(e)&&ro(t)&&e<=n&&n<t}function _v(n,e,t,i){if(!Ll(e,t,i))throw new Error("expected valid "+n+": "+t+" <= n < "+i+", got "+e)}function ru(n){let e;for(e=0;n>ic;n>>=Pl,e+=1);return e}const Zs=n=>(Pl<<BigInt(n))-Pl;function yv(n,e,t){if(typeof n!="number"||n<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof t!="function")throw new Error("hmacFn must be a function");const i=f=>new Uint8Array(f),s=f=>Uint8Array.of(f);let r=i(n),a=i(n),o=0;const l=()=>{r.fill(1),a.fill(0),o=0},c=(...f)=>t(a,r,...f),h=(f=i(0))=>{a=c(s(0),f),r=c(),f.length!==0&&(a=c(s(1),f),r=c())},d=()=>{if(o++>=1e3)throw new Error("drbg: tried 1000 values");let f=0;const g=[];for(;f<e;){r=c();const _=r.slice();g.push(_),f+=r.length}return vn(...g)};return(f,g)=>{l(),h(f);let _;for(;!(_=g(d()));)h();return l(),_}}function sc(n,e,t={}){if(!n||typeof n!="object")throw new Error("expected valid options object");function i(s,r,a){const o=n[s];if(a&&o===void 0)return;const l=typeof o;if(l!==r||o===null)throw new Error(`param "${s}" is invalid: expected ${r}, got ${l}`)}Object.entries(e).forEach(([s,r])=>i(s,r,!1)),Object.entries(t).forEach(([s,r])=>i(s,r,!0))}function gh(n){const e=new WeakMap;return(t,...i)=>{const s=e.get(t);if(s!==void 0)return s;const r=n(t,...i);return e.set(t,r),r}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Xt=BigInt(0),Gt=BigInt(1),bi=BigInt(2),au=BigInt(3),ou=BigInt(4),lu=BigInt(5),vv=BigInt(7),cu=BigInt(8),Sv=BigInt(9),hu=BigInt(16);function tn(n,e){const t=n%e;return t>=Xt?t:e+t}function en(n,e,t){let i=n;for(;e-- >Xt;)i*=i,i%=t;return i}function _h(n,e){if(n===Xt)throw new Error("invert: expected non-zero number");if(e<=Xt)throw new Error("invert: expected positive modulus, got "+e);let t=tn(n,e),i=e,s=Xt,r=Gt;for(;t!==Xt;){const o=i/t,l=i%t,c=s-r*o;i=t,t=l,s=r,r=c}if(i!==Gt)throw new Error("invert: does not exist");return tn(s,e)}function rc(n,e,t){if(!n.eql(n.sqr(e),t))throw new Error("Cannot find square root")}function du(n,e){const t=(n.ORDER+Gt)/ou,i=n.pow(e,t);return rc(n,i,e),i}function xv(n,e){const t=(n.ORDER-lu)/cu,i=n.mul(e,bi),s=n.pow(i,t),r=n.mul(e,s),a=n.mul(n.mul(r,bi),s),o=n.mul(r,n.sub(a,n.ONE));return rc(n,o,e),o}function bv(n){const e=Js(n),t=uu(n),i=t(e,e.neg(e.ONE)),s=t(e,i),r=t(e,e.neg(i)),a=(n+vv)/hu;return(o,l)=>{let c=o.pow(l,a),h=o.mul(c,i);const d=o.mul(c,s),u=o.mul(c,r),f=o.eql(o.sqr(h),l),g=o.eql(o.sqr(d),l);c=o.cmov(c,h,f),h=o.cmov(u,d,g);const _=o.eql(o.sqr(h),l),m=o.cmov(c,h,_);return rc(o,m,l),m}}function uu(n){if(n<au)throw new Error("sqrt is not defined for small field");let e=n-Gt,t=0;for(;e%bi===Xt;)e/=bi,t++;let i=bi;const s=Js(n);for(;yh(s,i)===1;)if(i++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(t===1)return du;let r=s.pow(i,e);const a=(e+Gt)/bi;return function(l,c){if(l.is0(c))return c;if(yh(l,c)!==1)throw new Error("Cannot find square root");let h=t,d=l.mul(l.ONE,r),u=l.pow(c,e),f=l.pow(c,a);for(;!l.eql(u,l.ONE);){if(l.is0(u))return l.ZERO;let g=1,_=l.sqr(u);for(;!l.eql(_,l.ONE);)if(g++,_=l.sqr(_),g===h)throw new Error("Cannot find square root");const m=Gt<<BigInt(h-g-1),p=l.pow(d,m);h=g,d=l.sqr(p),u=l.mul(u,d),f=l.mul(f,p)}return f}}function Ev(n){return n%ou===au?du:n%cu===lu?xv:n%hu===Sv?bv(n):uu(n)}const Mv=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function wv(n){const e={ORDER:"bigint",MASK:"bigint",BYTES:"number",BITS:"number"},t=Mv.reduce((i,s)=>(i[s]="function",i),e);return sc(n,t),n}function Tv(n,e,t){if(t<Xt)throw new Error("invalid exponent, negatives unsupported");if(t===Xt)return n.ONE;if(t===Gt)return e;let i=n.ONE,s=e;for(;t>Xt;)t&Gt&&(i=n.mul(i,s)),s=n.sqr(s),t>>=Gt;return i}function fu(n,e,t=!1){const i=new Array(e.length).fill(t?n.ZERO:void 0),s=e.reduce((a,o,l)=>n.is0(o)?a:(i[l]=a,n.mul(a,o)),n.ONE),r=n.inv(s);return e.reduceRight((a,o,l)=>n.is0(o)?a:(i[l]=n.mul(a,i[l]),n.mul(a,o)),r),i}function yh(n,e){const t=(n.ORDER-Gt)/bi,i=n.pow(e,t),s=n.eql(i,n.ONE),r=n.eql(i,n.ZERO),a=n.eql(i,n.neg(n.ONE));if(!s&&!r&&!a)throw new Error("invalid Legendre symbol result");return s?1:r?0:-1}function pu(n,e){e!==void 0&&Rl(e);const t=e!==void 0?e:n.toString(2).length,i=Math.ceil(t/8);return{nBitLength:t,nByteLength:i}}function Js(n,e,t=!1,i={}){if(n<=Xt)throw new Error("invalid field: expected ORDER > 0, got "+n);let s,r,a=!1,o;if(typeof e=="object"&&e!=null){if(i.sqrt||t)throw new Error("cannot specify opts in two arguments");const u=e;u.BITS&&(s=u.BITS),u.sqrt&&(r=u.sqrt),typeof u.isLE=="boolean"&&(t=u.isLE),typeof u.modFromBytes=="boolean"&&(a=u.modFromBytes),o=u.allowedLengths}else typeof e=="number"&&(s=e),i.sqrt&&(r=i.sqrt);const{nBitLength:l,nByteLength:c}=pu(n,s);if(c>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let h;const d=Object.freeze({ORDER:n,isLE:t,BITS:l,BYTES:c,MASK:Zs(l),ZERO:Xt,ONE:Gt,allowedLengths:o,create:u=>tn(u,n),isValid:u=>{if(typeof u!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof u);return Xt<=u&&u<n},is0:u=>u===Xt,isValidNot0:u=>!d.is0(u)&&d.isValid(u),isOdd:u=>(u&Gt)===Gt,neg:u=>tn(-u,n),eql:(u,f)=>u===f,sqr:u=>tn(u*u,n),add:(u,f)=>tn(u+f,n),sub:(u,f)=>tn(u-f,n),mul:(u,f)=>tn(u*f,n),pow:(u,f)=>Tv(d,u,f),div:(u,f)=>tn(u*_h(f,n),n),sqrN:u=>u*u,addN:(u,f)=>u+f,subN:(u,f)=>u-f,mulN:(u,f)=>u*f,inv:u=>_h(u,n),sqrt:r||(u=>(h||(h=Ev(n)),h(d,u))),toBytes:u=>t?su(u,c):ma(u,c),fromBytes:(u,f=!0)=>{if(o){if(!o.includes(u.length)||u.length>c)throw new Error("Field.fromBytes: expected "+o+" bytes, got "+u.length);const _=new Uint8Array(c);_.set(u,t?0:_.length-u.length),u=_}if(u.length!==c)throw new Error("Field.fromBytes: expected "+c+" bytes, got "+u.length);let g=t?iu(u):_s(u);if(a&&(g=tn(g,n)),!f&&!d.isValid(g))throw new Error("invalid field element: outside of range 0..ORDER");return g},invertBatch:u=>fu(d,u),cmov:(u,f,g)=>g?f:u});return Object.freeze(d)}function mu(n){if(typeof n!="bigint")throw new Error("field order must be bigint");const e=n.toString(2).length;return Math.ceil(e/8)}function gu(n){const e=mu(n);return e+Math.ceil(e/2)}function _u(n,e,t=!1){const i=n.length,s=mu(e),r=gu(e);if(i<16||i<r||i>1024)throw new Error("expected "+r+"-1024 bytes of input, got "+i);const a=t?iu(n):_s(n),o=tn(a,e-Gt)+Gt;return t?su(o,s):ma(o,s)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const us=BigInt(0),Ei=BigInt(1);function sa(n,e){const t=e.negate();return n?t:e}function ao(n,e){const t=fu(n.Fp,e.map(i=>i.Z));return e.map((i,s)=>n.fromAffine(i.toAffine(t[s])))}function yu(n,e){if(!Number.isSafeInteger(n)||n<=0||n>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+n)}function oo(n,e){yu(n,e);const t=Math.ceil(e/n)+1,i=2**(n-1),s=2**n,r=Zs(n),a=BigInt(n);return{windows:t,windowSize:i,mask:r,maxNumber:s,shiftBy:a}}function vh(n,e,t){const{windowSize:i,mask:s,maxNumber:r,shiftBy:a}=t;let o=Number(n&s),l=n>>a;o>i&&(o-=r,l+=Ei);const c=e*i,h=c+Math.abs(o)-1,d=o===0,u=o<0,f=e%2!==0;return{nextN:l,offset:h,isZero:d,isNeg:u,isNegF:f,offsetF:c}}function Av(n,e){if(!Array.isArray(n))throw new Error("array expected");n.forEach((t,i)=>{if(!(t instanceof e))throw new Error("invalid point at index "+i)})}function Rv(n,e){if(!Array.isArray(n))throw new Error("array of scalars expected");n.forEach((t,i)=>{if(!e.isValid(t))throw new Error("invalid scalar at index "+i)})}const lo=new WeakMap,vu=new WeakMap;function co(n){return vu.get(n)||1}function Sh(n){if(n!==us)throw new Error("invalid wNAF")}class Cv{constructor(e,t){this.BASE=e.BASE,this.ZERO=e.ZERO,this.Fn=e.Fn,this.bits=t}_unsafeLadder(e,t,i=this.ZERO){let s=e;for(;t>us;)t&Ei&&(i=i.add(s)),s=s.double(),t>>=Ei;return i}precomputeWindow(e,t){const{windows:i,windowSize:s}=oo(t,this.bits),r=[];let a=e,o=a;for(let l=0;l<i;l++){o=a,r.push(o);for(let c=1;c<s;c++)o=o.add(a),r.push(o);a=o.double()}return r}wNAF(e,t,i){if(!this.Fn.isValid(i))throw new Error("invalid scalar");let s=this.ZERO,r=this.BASE;const a=oo(e,this.bits);for(let o=0;o<a.windows;o++){const{nextN:l,offset:c,isZero:h,isNeg:d,isNegF:u,offsetF:f}=vh(i,o,a);i=l,h?r=r.add(sa(u,t[f])):s=s.add(sa(d,t[c]))}return Sh(i),{p:s,f:r}}wNAFUnsafe(e,t,i,s=this.ZERO){const r=oo(e,this.bits);for(let a=0;a<r.windows&&i!==us;a++){const{nextN:o,offset:l,isZero:c,isNeg:h}=vh(i,a,r);if(i=o,!c){const d=t[l];s=s.add(h?d.negate():d)}}return Sh(i),s}getPrecomputes(e,t,i){let s=lo.get(t);return s||(s=this.precomputeWindow(t,e),e!==1&&(typeof i=="function"&&(s=i(s)),lo.set(t,s))),s}cached(e,t,i){const s=co(e);return this.wNAF(s,this.getPrecomputes(s,e,i),t)}unsafe(e,t,i,s){const r=co(e);return r===1?this._unsafeLadder(e,t,s):this.wNAFUnsafe(r,this.getPrecomputes(r,e,i),t,s)}createCache(e,t){yu(t,this.bits),vu.set(e,t),lo.delete(e)}hasCache(e){return co(e)!==1}}function Pv(n,e,t,i){let s=e,r=n.ZERO,a=n.ZERO;for(;t>us||i>us;)t&Ei&&(r=r.add(s)),i&Ei&&(a=a.add(s)),s=s.double(),t>>=Ei,i>>=Ei;return{p1:r,p2:a}}function Lv(n,e,t,i){Av(t,n),Rv(i,e);const s=t.length,r=i.length;if(s!==r)throw new Error("arrays of points and scalars must have equal length");const a=n.ZERO,o=ru(BigInt(s));let l=1;o>12?l=o-3:o>4?l=o-2:o>0&&(l=2);const c=Zs(l),h=new Array(Number(c)+1).fill(a),d=Math.floor((e.BITS-1)/l)*l;let u=a;for(let f=d;f>=0;f-=l){h.fill(a);for(let _=0;_<r;_++){const m=i[_],p=Number(m>>BigInt(f)&c);h[p]=h[p].add(t[_])}let g=a;for(let _=h.length-1,m=a;_>0;_--)m=m.add(h[_]),g=g.add(m);if(u=u.add(g),f!==0)for(let _=0;_<l;_++)u=u.double()}return u}function xh(n,e,t){if(e){if(e.ORDER!==n)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return wv(e),e}else return Js(n,{isLE:t})}function Iv(n,e,t={},i){if(i===void 0&&(i=n==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${n} CURVE object`);for(const l of["p","n","h"]){const c=e[l];if(!(typeof c=="bigint"&&c>us))throw new Error(`CURVE.${l} must be positive bigint`)}const s=xh(e.p,t.Fp,i),r=xh(e.n,t.Fn,i),o=["Gx","Gy","a","b"];for(const l of o)if(!s.isValid(e[l]))throw new Error(`CURVE.${l} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:s,Fn:r}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const bh=(n,e)=>(n+(n>=0?e:-e)/Su)/e;function Dv(n,e,t){const[[i,s],[r,a]]=e,o=bh(a*n,t),l=bh(-s*n,t);let c=n-o*i-l*r,h=-o*s-l*a;const d=c<kn,u=h<kn;d&&(c=-c),u&&(h=-h);const f=Zs(Math.ceil(ru(t)/2))+rs;if(c<kn||c>=f||h<kn||h>=f)throw new Error("splitScalar (endomorphism): failed, k="+n);return{k1neg:d,k1:c,k2neg:u,k2:h}}function Il(n){if(!["compact","recovered","der"].includes(n))throw new Error('Signature format must be "compact", "recovered", or "der"');return n}function ho(n,e){const t={};for(let i of Object.keys(e))t[i]=n[i]===void 0?e[i]:n[i];return ia(t.lowS,"lowS"),ia(t.prehash,"prehash"),t.format!==void 0&&Il(t.format),t}class Nv extends Error{constructor(e=""){super(e)}}const Un={Err:Nv,_tlv:{encode:(n,e)=>{const{Err:t}=Un;if(n<0||n>256)throw new t("tlv.encode: wrong tag");if(e.length&1)throw new t("tlv.encode: unpadded data");const i=e.length/2,s=Cr(i);if(s.length/2&128)throw new t("tlv.encode: long form length too big");const r=i>127?Cr(s.length/2|128):"";return Cr(n)+r+s+e},decode(n,e){const{Err:t}=Un;let i=0;if(n<0||n>256)throw new t("tlv.encode: wrong tag");if(e.length<2||e[i++]!==n)throw new t("tlv.decode: wrong tlv");const s=e[i++],r=!!(s&128);let a=0;if(!r)a=s;else{const l=s&127;if(!l)throw new t("tlv.decode(long): indefinite length not supported");if(l>4)throw new t("tlv.decode(long): byte length is too big");const c=e.subarray(i,i+l);if(c.length!==l)throw new t("tlv.decode: length bytes not complete");if(c[0]===0)throw new t("tlv.decode(long): zero leftmost byte");for(const h of c)a=a<<8|h;if(i+=l,a<128)throw new t("tlv.decode(long): not minimal encoding")}const o=e.subarray(i,i+a);if(o.length!==a)throw new t("tlv.decode: wrong value length");return{v:o,l:e.subarray(i+a)}}},_int:{encode(n){const{Err:e}=Un;if(n<kn)throw new e("integer: negative integers are not allowed");let t=Cr(n);if(Number.parseInt(t[0],16)&8&&(t="00"+t),t.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return t},decode(n){const{Err:e}=Un;if(n[0]&128)throw new e("invalid signature integer: negative");if(n[0]===0&&!(n[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return _s(n)}},toSig(n){const{Err:e,_int:t,_tlv:i}=Un,s=Ct("signature",n),{v:r,l:a}=i.decode(48,s);if(a.length)throw new e("invalid signature: left bytes after parsing");const{v:o,l}=i.decode(2,r),{v:c,l:h}=i.decode(2,l);if(h.length)throw new e("invalid signature: left bytes after parsing");return{r:t.decode(o),s:t.decode(c)}},hexFromSig(n){const{_tlv:e,_int:t}=Un,i=e.encode(2,t.encode(n.r)),s=e.encode(2,t.encode(n.s)),r=i+s;return e.encode(48,r)}},kn=BigInt(0),rs=BigInt(1),Su=BigInt(2),Pr=BigInt(3),Uv=BigInt(4);function Mi(n,e){const{BYTES:t}=n;let i;if(typeof e=="bigint")i=e;else{let s=Ct("private key",e);try{i=n.fromBytes(s)}catch{throw new Error(`invalid private key: expected ui8a of size ${t}, got ${typeof e}`)}}if(!n.isValidNot0(i))throw new Error("invalid private key: out of range [1..N-1]");return i}function Fv(n,e={}){const t=Iv("weierstrass",n,e),{Fp:i,Fn:s}=t;let r=t.CURVE;const{h:a,n:o}=r;sc(e,{},{allowInfinityPoint:"boolean",clearCofactor:"function",isTorsionFree:"function",fromBytes:"function",toBytes:"function",endo:"object",wrapPrivateKey:"boolean"});const{endo:l}=e;if(l&&(!i.is0(r.a)||typeof l.beta!="bigint"||!Array.isArray(l.basises)))throw new Error('invalid endo: expected "beta": bigint and "basises": array');const c=bu(i,s);function h(){if(!i.isOdd)throw new Error("compression is not supported: Field does not have .isOdd()")}function d(D,C,I){const{x:N,y:F}=C.toAffine(),U=i.toBytes(N);if(ia(I,"isCompressed"),I){h();const z=!i.isOdd(F);return vn(xu(z),U)}else return vn(Uint8Array.of(4),U,i.toBytes(F))}function u(D){xi(D,void 0,"Point");const{publicKey:C,publicKeyUncompressed:I}=c,N=D.length,F=D[0],U=D.subarray(1);if(N===C&&(F===2||F===3)){const z=i.fromBytes(U);if(!i.isValid(z))throw new Error("bad point: is not on curve, wrong x");const K=_(z);let H;try{H=i.sqrt(K)}catch(de){const ye=de instanceof Error?": "+de.message:"";throw new Error("bad point: is not on curve, sqrt error"+ye)}h();const Q=i.isOdd(H);return(F&1)===1!==Q&&(H=i.neg(H)),{x:z,y:H}}else if(N===I&&F===4){const z=i.BYTES,K=i.fromBytes(U.subarray(0,z)),H=i.fromBytes(U.subarray(z,z*2));if(!m(K,H))throw new Error("bad point: is not on curve");return{x:K,y:H}}else throw new Error(`bad point: got length ${N}, expected compressed=${C} or uncompressed=${I}`)}const f=e.toBytes||d,g=e.fromBytes||u;function _(D){const C=i.sqr(D),I=i.mul(C,D);return i.add(i.add(I,i.mul(D,r.a)),r.b)}function m(D,C){const I=i.sqr(C),N=_(D);return i.eql(I,N)}if(!m(r.Gx,r.Gy))throw new Error("bad curve params: generator point");const p=i.mul(i.pow(r.a,Pr),Uv),T=i.mul(i.sqr(r.b),BigInt(27));if(i.is0(i.add(p,T)))throw new Error("bad curve params: a or b");function R(D,C,I=!1){if(!i.isValid(C)||I&&i.is0(C))throw new Error(`bad point coordinate ${D}`);return C}function S(D){if(!(D instanceof y))throw new Error("ProjectivePoint expected")}function x(D){if(!l||!l.basises)throw new Error("no endo");return Dv(D,l.basises,s.ORDER)}const M=gh((D,C)=>{const{X:I,Y:N,Z:F}=D;if(i.eql(F,i.ONE))return{x:I,y:N};const U=D.is0();C==null&&(C=U?i.ONE:i.inv(F));const z=i.mul(I,C),K=i.mul(N,C),H=i.mul(F,C);if(U)return{x:i.ZERO,y:i.ZERO};if(!i.eql(H,i.ONE))throw new Error("invZ was invalid");return{x:z,y:K}}),L=gh(D=>{if(D.is0()){if(e.allowInfinityPoint&&!i.is0(D.Y))return;throw new Error("bad point: ZERO")}const{x:C,y:I}=D.toAffine();if(!i.isValid(C)||!i.isValid(I))throw new Error("bad point: x or y not field elements");if(!m(C,I))throw new Error("bad point: equation left != right");if(!D.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});function O(D,C,I,N,F){return I=new y(i.mul(I.X,D),I.Y,I.Z),C=sa(N,C),I=sa(F,I),C.add(I)}class y{constructor(C,I,N){this.X=R("x",C),this.Y=R("y",I,!0),this.Z=R("z",N),Object.freeze(this)}static CURVE(){return r}static fromAffine(C){const{x:I,y:N}=C||{};if(!C||!i.isValid(I)||!i.isValid(N))throw new Error("invalid affine point");if(C instanceof y)throw new Error("projective point not allowed");return i.is0(I)&&i.is0(N)?y.ZERO:new y(I,N,i.ONE)}static fromBytes(C){const I=y.fromAffine(g(xi(C,void 0,"point")));return I.assertValidity(),I}static fromHex(C){return y.fromBytes(Ct("pointHex",C))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(C=8,I=!0){return B.createCache(this,C),I||this.multiply(Pr),this}assertValidity(){L(this)}hasEvenY(){const{y:C}=this.toAffine();if(!i.isOdd)throw new Error("Field doesn't support isOdd");return!i.isOdd(C)}equals(C){S(C);const{X:I,Y:N,Z:F}=this,{X:U,Y:z,Z:K}=C,H=i.eql(i.mul(I,K),i.mul(U,F)),Q=i.eql(i.mul(N,K),i.mul(z,F));return H&&Q}negate(){return new y(this.X,i.neg(this.Y),this.Z)}double(){const{a:C,b:I}=r,N=i.mul(I,Pr),{X:F,Y:U,Z:z}=this;let K=i.ZERO,H=i.ZERO,Q=i.ZERO,te=i.mul(F,F),de=i.mul(U,U),ye=i.mul(z,z),_e=i.mul(F,U);return _e=i.add(_e,_e),Q=i.mul(F,z),Q=i.add(Q,Q),K=i.mul(C,Q),H=i.mul(N,ye),H=i.add(K,H),K=i.sub(de,H),H=i.add(de,H),H=i.mul(K,H),K=i.mul(_e,K),Q=i.mul(N,Q),ye=i.mul(C,ye),_e=i.sub(te,ye),_e=i.mul(C,_e),_e=i.add(_e,Q),Q=i.add(te,te),te=i.add(Q,te),te=i.add(te,ye),te=i.mul(te,_e),H=i.add(H,te),ye=i.mul(U,z),ye=i.add(ye,ye),te=i.mul(ye,_e),K=i.sub(K,te),Q=i.mul(ye,de),Q=i.add(Q,Q),Q=i.add(Q,Q),new y(K,H,Q)}add(C){S(C);const{X:I,Y:N,Z:F}=this,{X:U,Y:z,Z:K}=C;let H=i.ZERO,Q=i.ZERO,te=i.ZERO;const de=r.a,ye=i.mul(r.b,Pr);let _e=i.mul(I,U),q=i.mul(N,z),Z=i.mul(F,K),ie=i.add(I,N),he=i.add(U,z);ie=i.mul(ie,he),he=i.add(_e,q),ie=i.sub(ie,he),he=i.add(I,F);let se=i.add(U,K);return he=i.mul(he,se),se=i.add(_e,Z),he=i.sub(he,se),se=i.add(N,F),H=i.add(z,K),se=i.mul(se,H),H=i.add(q,Z),se=i.sub(se,H),te=i.mul(de,he),H=i.mul(ye,Z),te=i.add(H,te),H=i.sub(q,te),te=i.add(q,te),Q=i.mul(H,te),q=i.add(_e,_e),q=i.add(q,_e),Z=i.mul(de,Z),he=i.mul(ye,he),q=i.add(q,Z),Z=i.sub(_e,Z),Z=i.mul(de,Z),he=i.add(he,Z),_e=i.mul(q,he),Q=i.add(Q,_e),_e=i.mul(se,he),H=i.mul(ie,H),H=i.sub(H,_e),_e=i.mul(ie,q),te=i.mul(se,te),te=i.add(te,_e),new y(H,Q,te)}subtract(C){return this.add(C.negate())}is0(){return this.equals(y.ZERO)}multiply(C){const{endo:I}=e;if(!s.isValidNot0(C))throw new Error("invalid scalar: out of range");let N,F;const U=z=>B.cached(this,z,K=>ao(y,K));if(I){const{k1neg:z,k1:K,k2neg:H,k2:Q}=x(C),{p:te,f:de}=U(K),{p:ye,f:_e}=U(Q);F=de.add(_e),N=O(I.beta,te,ye,z,H)}else{const{p:z,f:K}=U(C);N=z,F=K}return ao(y,[N,F])[0]}multiplyUnsafe(C){const{endo:I}=e,N=this;if(!s.isValid(C))throw new Error("invalid scalar: out of range");if(C===kn||N.is0())return y.ZERO;if(C===rs)return N;if(B.hasCache(this))return this.multiply(C);if(I){const{k1neg:F,k1:U,k2neg:z,k2:K}=x(C),{p1:H,p2:Q}=Pv(y,N,U,K);return O(I.beta,H,Q,F,z)}else return B.unsafe(N,C)}multiplyAndAddUnsafe(C,I,N){const F=this.multiplyUnsafe(I).add(C.multiplyUnsafe(N));return F.is0()?void 0:F}toAffine(C){return M(this,C)}isTorsionFree(){const{isTorsionFree:C}=e;return a===rs?!0:C?C(y,this):B.unsafe(this,o).is0()}clearCofactor(){const{clearCofactor:C}=e;return a===rs?this:C?C(y,this):this.multiplyUnsafe(a)}isSmallOrder(){return this.multiplyUnsafe(a).is0()}toBytes(C=!0){return ia(C,"isCompressed"),this.assertValidity(),f(y,this,C)}toHex(C=!0){return ss(this.toBytes(C))}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}get px(){return this.X}get py(){return this.X}get pz(){return this.Z}toRawBytes(C=!0){return this.toBytes(C)}_setWindowSize(C){this.precompute(C)}static normalizeZ(C){return ao(y,C)}static msm(C,I){return Lv(y,s,C,I)}static fromPrivateKey(C){return y.BASE.multiply(Mi(s,C))}}y.BASE=new y(r.Gx,r.Gy,i.ONE),y.ZERO=new y(i.ZERO,i.ONE,i.ZERO),y.Fp=i,y.Fn=s;const b=s.BITS,B=new Cv(y,e.endo?Math.ceil(b/2):b);return y.BASE.precompute(8),y}function xu(n){return Uint8Array.of(n?2:3)}function bu(n,e){return{secretKey:e.BYTES,publicKey:1+n.BYTES,publicKeyUncompressed:1+2*n.BYTES,publicKeyHasPrefix:!0,signature:2*e.BYTES}}function Ov(n,e={}){const{Fn:t}=n,i=e.randomBytes||pa,s=Object.assign(bu(n.Fp,t),{seed:gu(t.ORDER)});function r(f){try{return!!Mi(t,f)}catch{return!1}}function a(f,g){const{publicKey:_,publicKeyUncompressed:m}=s;try{const p=f.length;return g===!0&&p!==_||g===!1&&p!==m?!1:!!n.fromBytes(f)}catch{return!1}}function o(f=i(s.seed)){return _u(xi(f,s.seed,"seed"),t.ORDER)}function l(f,g=!0){return n.BASE.multiply(Mi(t,f)).toBytes(g)}function c(f){const g=o(f);return{secretKey:g,publicKey:l(g)}}function h(f){if(typeof f=="bigint")return!1;if(f instanceof n)return!0;const{secretKey:g,publicKey:_,publicKeyUncompressed:m}=s;if(t.allowedLengths||g===_)return;const p=Ct("key",f).length;return p===_||p===m}function d(f,g,_=!0){if(h(f)===!0)throw new Error("first arg must be private key");if(h(g)===!1)throw new Error("second arg must be public key");const m=Mi(t,f);return n.fromHex(g).multiply(m).toBytes(_)}return Object.freeze({getPublicKey:l,getSharedSecret:d,keygen:c,Point:n,utils:{isValidSecretKey:r,isValidPublicKey:a,randomSecretKey:o,isValidPrivateKey:r,randomPrivateKey:o,normPrivateKeyToScalar:f=>Mi(t,f),precompute(f=8,g=n.BASE){return g.precompute(f,!1)}},lengths:s})}function kv(n,e,t={}){Kd(e),sc(t,{},{hmac:"function",lowS:"boolean",randomBytes:"function",bits2int:"function",bits2int_modN:"function"});const i=t.randomBytes||pa,s=t.hmac||((I,...N)=>tu(e,I,vn(...N))),{Fp:r,Fn:a}=n,{ORDER:o,BITS:l}=a,{keygen:c,getPublicKey:h,getSharedSecret:d,utils:u,lengths:f}=Ov(n,t),g={prehash:!1,lowS:typeof t.lowS=="boolean"?t.lowS:!1,format:void 0,extraEntropy:!1},_="compact";function m(I){const N=o>>rs;return I>N}function p(I,N){if(!a.isValidNot0(N))throw new Error(`invalid signature ${I}: out of range 1..Point.Fn.ORDER`);return N}function T(I,N){Il(N);const F=f.signature,U=N==="compact"?F:N==="recovered"?F+1:void 0;return xi(I,U,`${N} signature`)}class R{constructor(N,F,U){this.r=p("r",N),this.s=p("s",F),U!=null&&(this.recovery=U),Object.freeze(this)}static fromBytes(N,F=_){T(N,F);let U;if(F==="der"){const{r:Q,s:te}=Un.toSig(xi(N));return new R(Q,te)}F==="recovered"&&(U=N[0],F="compact",N=N.subarray(1));const z=a.BYTES,K=N.subarray(0,z),H=N.subarray(z,z*2);return new R(a.fromBytes(K),a.fromBytes(H),U)}static fromHex(N,F){return this.fromBytes(na(N),F)}addRecoveryBit(N){return new R(this.r,this.s,N)}recoverPublicKey(N){const F=r.ORDER,{r:U,s:z,recovery:K}=this;if(K==null||![0,1,2,3].includes(K))throw new Error("recovery id invalid");if(o*Su<F&&K>1)throw new Error("recovery id is ambiguous for h>1 curve");const Q=K===2||K===3?U+o:U;if(!r.isValid(Q))throw new Error("recovery id 2 or 3 invalid");const te=r.toBytes(Q),de=n.fromBytes(vn(xu((K&1)===0),te)),ye=a.inv(Q),_e=x(Ct("msgHash",N)),q=a.create(-_e*ye),Z=a.create(z*ye),ie=n.BASE.multiplyUnsafe(q).add(de.multiplyUnsafe(Z));if(ie.is0())throw new Error("point at infinify");return ie.assertValidity(),ie}hasHighS(){return m(this.s)}toBytes(N=_){if(Il(N),N==="der")return na(Un.hexFromSig(this));const F=a.toBytes(this.r),U=a.toBytes(this.s);if(N==="recovered"){if(this.recovery==null)throw new Error("recovery bit must be present");return vn(Uint8Array.of(this.recovery),F,U)}return vn(F,U)}toHex(N){return ss(this.toBytes(N))}assertValidity(){}static fromCompact(N){return R.fromBytes(Ct("sig",N),"compact")}static fromDER(N){return R.fromBytes(Ct("sig",N),"der")}normalizeS(){return this.hasHighS()?new R(this.r,a.neg(this.s),this.recovery):this}toDERRawBytes(){return this.toBytes("der")}toDERHex(){return ss(this.toBytes("der"))}toCompactRawBytes(){return this.toBytes("compact")}toCompactHex(){return ss(this.toBytes("compact"))}}const S=t.bits2int||function(N){if(N.length>8192)throw new Error("input is too large");const F=_s(N),U=N.length*8-l;return U>0?F>>BigInt(U):F},x=t.bits2int_modN||function(N){return a.create(S(N))},M=Zs(l);function L(I){return _v("num < 2^"+l,I,kn,M),a.toBytes(I)}function O(I,N){return xi(I,void 0,"message"),N?xi(e(I),void 0,"prehashed message"):I}function y(I,N,F){if(["recovered","canonical"].some(q=>q in F))throw new Error("sign() legacy options not supported");const{lowS:U,prehash:z,extraEntropy:K}=ho(F,g);I=O(I,z);const H=x(I),Q=Mi(a,N),te=[L(Q),L(H)];if(K!=null&&K!==!1){const q=K===!0?i(f.secretKey):K;te.push(Ct("extraEntropy",q))}const de=vn(...te),ye=H;function _e(q){const Z=S(q);if(!a.isValidNot0(Z))return;const ie=a.inv(Z),he=n.BASE.multiply(Z).toAffine(),se=a.create(he.x);if(se===kn)return;const Te=a.create(ie*a.create(ye+se*Q));if(Te===kn)return;let Ge=(he.x===se?0:2)|Number(he.y&rs),Pe=Te;return U&&m(Te)&&(Pe=a.neg(Te),Ge^=1),new R(se,Pe,Ge)}return{seed:de,k2sig:_e}}function b(I,N,F={}){I=Ct("message",I);const{seed:U,k2sig:z}=y(I,N,F);return yv(e.outputLen,a.BYTES,s)(U,z)}function B(I){let N;const F=typeof I=="string"||fa(I),U=!F&&I!==null&&typeof I=="object"&&typeof I.r=="bigint"&&typeof I.s=="bigint";if(!F&&!U)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");if(U)N=new R(I.r,I.s);else if(F){try{N=R.fromBytes(Ct("sig",I),"der")}catch(z){if(!(z instanceof Un.Err))throw z}if(!N)try{N=R.fromBytes(Ct("sig",I),"compact")}catch{return!1}}return N||!1}function D(I,N,F,U={}){const{lowS:z,prehash:K,format:H}=ho(U,g);if(F=Ct("publicKey",F),N=O(Ct("message",N),K),"strict"in U)throw new Error("options.strict was renamed to lowS");const Q=H===void 0?B(I):R.fromBytes(Ct("sig",I),H);if(Q===!1)return!1;try{const te=n.fromBytes(F);if(z&&Q.hasHighS())return!1;const{r:de,s:ye}=Q,_e=x(N),q=a.inv(ye),Z=a.create(_e*q),ie=a.create(de*q),he=n.BASE.multiplyUnsafe(Z).add(te.multiplyUnsafe(ie));return he.is0()?!1:a.create(he.x)===de}catch{return!1}}function C(I,N,F={}){const{prehash:U}=ho(F,g);return N=O(N,U),R.fromBytes(I,"recovered").recoverPublicKey(N).toBytes()}return Object.freeze({keygen:c,getPublicKey:h,getSharedSecret:d,utils:u,lengths:f,Point:n,sign:b,verify:D,recoverPublicKey:C,Signature:R,hash:e})}function Bv(n){const e={a:n.a,b:n.b,p:n.Fp.ORDER,n:n.n,h:n.h,Gx:n.Gx,Gy:n.Gy},t=n.Fp;let i=n.allowedPrivateKeyLengths?Array.from(new Set(n.allowedPrivateKeyLengths.map(a=>Math.ceil(a/2)))):void 0;const s=Js(e.n,{BITS:n.nBitLength,allowedLengths:i,modFromBytes:n.wrapPrivateKey}),r={Fp:t,Fn:s,allowInfinityPoint:n.allowInfinityPoint,endo:n.endo,isTorsionFree:n.isTorsionFree,clearCofactor:n.clearCofactor,fromBytes:n.fromBytes,toBytes:n.toBytes};return{CURVE:e,curveOpts:r}}function zv(n){const{CURVE:e,curveOpts:t}=Bv(n),i={hmac:n.hmac,randomBytes:n.randomBytes,lowS:n.lowS,bits2int:n.bits2int,bits2int_modN:n.bits2int_modN};return{CURVE:e,curveOpts:t,hash:n.hash,ecdsaOpts:i}}function Vv(n,e){const t=e.Point;return Object.assign({},e,{ProjectivePoint:t,CURVE:Object.assign({},n,pu(t.Fn.ORDER,t.Fn.BITS))})}function Gv(n){const{CURVE:e,curveOpts:t,hash:i,ecdsaOpts:s}=zv(n),r=Fv(e,t),a=kv(r,i,s);return Vv(n,a)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Hv(n,e){const t=i=>Gv({...n,hash:i});return{...t(e),create:t}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const fs={p:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:BigInt(1),a:BigInt(0),b:BigInt(7),Gx:BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),Gy:BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")},Wv={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),basises:[[BigInt("0x3086d221a7d46bcde86c90e49284eb15"),-BigInt("0xe4437ed6010e88286f547fa90abfe4c3")],[BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),BigInt("0x3086d221a7d46bcde86c90e49284eb15")]]},Xv=BigInt(0),Eh=BigInt(1),Dl=BigInt(2);function qv(n){const e=fs.p,t=BigInt(3),i=BigInt(6),s=BigInt(11),r=BigInt(22),a=BigInt(23),o=BigInt(44),l=BigInt(88),c=n*n*n%e,h=c*c*n%e,d=en(h,t,e)*h%e,u=en(d,t,e)*h%e,f=en(u,Dl,e)*c%e,g=en(f,s,e)*f%e,_=en(g,r,e)*g%e,m=en(_,o,e)*_%e,p=en(m,l,e)*m%e,T=en(p,o,e)*_%e,R=en(T,t,e)*h%e,S=en(R,a,e)*g%e,x=en(S,i,e)*c%e,M=en(x,Dl,e);if(!ra.eql(ra.sqr(M),n))throw new Error("Cannot find square root");return M}const ra=Js(fs.p,{sqrt:qv}),Eu=Hv({...fs,Fp:ra,lowS:!0,endo:Wv},Cl),Mh={};function aa(n,...e){let t=Mh[n];if(t===void 0){const i=Cl(Jd(n));t=vn(i,i),Mh[n]=t}return Cl(vn(t,...e))}const ac=n=>n.toBytes(!0).slice(1),ys=Eu.Point,oc=n=>n%Dl===Xv;function Nl(n){const{Fn:e,BASE:t}=ys,i=Mi(e,n),s=t.multiply(i);return{scalar:oc(s.y)?i:e.neg(i),bytes:ac(s)}}function Mu(n){const e=ra;if(!e.isValidNot0(n))throw new Error("invalid x: Fail if x ≥ p");const t=e.create(n*n),i=e.create(t*n+BigInt(7));let s=e.sqrt(i);oc(s)||(s=e.neg(s));const r=ys.fromAffine({x:n,y:s});return r.assertValidity(),r}const Bs=_s;function wu(...n){return ys.Fn.create(Bs(aa("BIP0340/challenge",...n)))}function wh(n){return Nl(n).bytes}function Yv(n,e,t=pa(32)){const{Fn:i}=ys,s=Ct("message",n),{bytes:r,scalar:a}=Nl(e),o=Ct("auxRand",t,32),l=i.toBytes(a^Bs(aa("BIP0340/aux",o))),c=aa("BIP0340/nonce",l,r,s),{bytes:h,scalar:d}=Nl(c),u=wu(h,r,s),f=new Uint8Array(64);if(f.set(h,0),f.set(i.toBytes(i.create(d+u*a)),32),!Tu(f,s,r))throw new Error("sign: Invalid signature produced");return f}function Tu(n,e,t){const{Fn:i,BASE:s}=ys,r=Ct("signature",n,64),a=Ct("message",e),o=Ct("publicKey",t,32);try{const l=Mu(Bs(o)),c=Bs(r.subarray(0,32));if(!Ll(c,Eh,fs.p))return!1;const h=Bs(r.subarray(32,64));if(!Ll(h,Eh,fs.n))return!1;const d=wu(i.toBytes(c),ac(l),a),u=s.multiplyUnsafe(h).add(l.multiplyUnsafe(i.neg(d))),{x:f,y:g}=u.toAffine();return!(u.is0()||!oc(g)||f!==c)}catch{return!1}}const lc=(()=>{const t=(s=pa(48))=>_u(s,fs.n);Eu.utils.randomSecretKey;function i(s){const r=t(s);return{secretKey:r,publicKey:wh(r)}}return{keygen:i,getPublicKey:wh,sign:Yv,verify:Tu,Point:ys,utils:{randomSecretKey:t,randomPrivateKey:t,taggedHash:aa,lift_x:Mu,pointToBytes:ac,numberToBytesBE:ma,bytesToNumberBE:_s,mod:tn},lengths:{secretKey:32,publicKey:32,publicKeyHasPrefix:!1,signature:64,seed:48}}})(),{floor:Ul,random:jv,sin:$v}=Math,qs="Trystero",Ys=(n,e)=>Array(n).fill().map(e),Th="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Fl=n=>Ys(n,()=>Th[Ul(jv()*Th.length)]).join(""),es=Fl(20),ts=Promise.all.bind(Promise),cc=typeof window<"u",{entries:Ah,fromEntries:Kv,keys:Zv}=Object,gi=()=>{},Fn=n=>new Error(`${qs}: ${n}`),Jv=new TextEncoder,Qv=new TextDecoder,wi=n=>Jv.encode(n),Xr=n=>Qv.decode(n),Ol=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Lr=(...n)=>n.join("@"),eS=(n,e)=>{const t=[...n],i=()=>{const r=$v(e++)*1e4;return r-Ul(r)};let s=t.length;for(;s;){const r=Ul(i()*s--);[t[s],t[r]]=[t[r],t[s]]}return t},tS=(n,e,t,i)=>(n.relayUrls||eS(e,Au(n.appId))).slice(0,n.relayUrls?n.relayUrls.length:n.relayRedundancy||t),Xn=JSON.stringify,oa=JSON.parse,Au=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,Rh=3333,Ji={},nS=(n,e)=>{const t={},i=()=>{const s=new WebSocket(n);s.onclose=()=>{Ji[n]??(Ji[n]=Rh),setTimeout(i,Ji[n]),Ji[n]*=2},s.onmessage=r=>e(r.data),t.socket=s,t.url=s.url,t.ready=new Promise(r=>s.onopen=()=>{r(t),Ji[n]=Rh}),t.send=r=>{s.readyState===1&&s.send(r)}};return i(),t},hc="AES-GCM",uo={},iS=n=>btoa(String.fromCharCode.apply(null,new Uint8Array(n))),sS=n=>{const e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},Ir=async n=>{if(uo[n])return uo[n];const e=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-1",wi(n)))).map(t=>t.toString(36)).join("");return uo[n]=e,e},rS=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},wi(`${n}:${e}:${t}`)),{name:hc},!1,["encrypt","decrypt"]),Ru="$",Cu=",",aS=async(n,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(Cu)+Ru+iS(await crypto.subtle.encrypt({name:hc,iv:t},await n,wi(e)))},oS=async(n,e)=>{const[t,i]=e.split(Ru);return Xr(await crypto.subtle.decrypt({name:hc,iv:new Uint8Array(t.split(Cu))},await n,sS(i)))};var lS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Dr={exports:{}},fo,Ch;function cS(){if(Ch)return fo;Ch=1;var n=1e3,e=n*60,t=e*60,i=t*24,s=i*7,r=i*365.25;fo=function(h,d){d=d||{};var u=typeof h;if(u==="string"&&h.length>0)return a(h);if(u==="number"&&isFinite(h))return d.long?l(h):o(h);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(h))};function a(h){if(h=String(h),!(h.length>100)){var d=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(h);if(d){var u=parseFloat(d[1]),f=(d[2]||"ms").toLowerCase();switch(f){case"years":case"year":case"yrs":case"yr":case"y":return u*r;case"weeks":case"week":case"w":return u*s;case"days":case"day":case"d":return u*i;case"hours":case"hour":case"hrs":case"hr":case"h":return u*t;case"minutes":case"minute":case"mins":case"min":case"m":return u*e;case"seconds":case"second":case"secs":case"sec":case"s":return u*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function o(h){var d=Math.abs(h);return d>=i?Math.round(h/i)+"d":d>=t?Math.round(h/t)+"h":d>=e?Math.round(h/e)+"m":d>=n?Math.round(h/n)+"s":h+"ms"}function l(h){var d=Math.abs(h);return d>=i?c(h,d,i,"day"):d>=t?c(h,d,t,"hour"):d>=e?c(h,d,e,"minute"):d>=n?c(h,d,n,"second"):h+" ms"}function c(h,d,u,f){var g=d>=u*1.5;return Math.round(h/u)+" "+f+(g?"s":"")}return fo}var po,Ph;function hS(){if(Ph)return po;Ph=1;function n(e){i.debug=i,i.default=i,i.coerce=c,i.disable=o,i.enable=r,i.enabled=l,i.humanize=cS(),i.destroy=h,Object.keys(e).forEach(d=>{i[d]=e[d]}),i.names=[],i.skips=[],i.formatters={};function t(d){let u=0;for(let f=0;f<d.length;f++)u=(u<<5)-u+d.charCodeAt(f),u|=0;return i.colors[Math.abs(u)%i.colors.length]}i.selectColor=t;function i(d){let u,f=null,g,_;function m(...p){if(!m.enabled)return;const T=m,R=Number(new Date),S=R-(u||R);T.diff=S,T.prev=u,T.curr=R,u=R,p[0]=i.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");let x=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,(L,O)=>{if(L==="%%")return"%";x++;const y=i.formatters[O];if(typeof y=="function"){const b=p[x];L=y.call(T,b),p.splice(x,1),x--}return L}),i.formatArgs.call(T,p),(T.log||i.log).apply(T,p)}return m.namespace=d,m.useColors=i.useColors(),m.color=i.selectColor(d),m.extend=s,m.destroy=i.destroy,Object.defineProperty(m,"enabled",{enumerable:!0,configurable:!1,get:()=>f!==null?f:(g!==i.namespaces&&(g=i.namespaces,_=i.enabled(d)),_),set:p=>{f=p}}),typeof i.init=="function"&&i.init(m),m}function s(d,u){const f=i(this.namespace+(typeof u>"u"?":":u)+d);return f.log=this.log,f}function r(d){i.save(d),i.namespaces=d,i.names=[],i.skips=[];const u=(typeof d=="string"?d:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(const f of u)f[0]==="-"?i.skips.push(f.slice(1)):i.names.push(f)}function a(d,u){let f=0,g=0,_=-1,m=0;for(;f<d.length;)if(g<u.length&&(u[g]===d[f]||u[g]==="*"))u[g]==="*"?(_=g,m=f,g++):(f++,g++);else if(_!==-1)g=_+1,m++,f=m;else return!1;for(;g<u.length&&u[g]==="*";)g++;return g===u.length}function o(){const d=[...i.names,...i.skips.map(u=>"-"+u)].join(",");return i.enable(""),d}function l(d){for(const u of i.skips)if(a(d,u))return!1;for(const u of i.names)if(a(d,u))return!0;return!1}function c(d){return d instanceof Error?d.stack||d.message:d}function h(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return i.enable(i.load()),i}return po=n,po}var Lh;function dS(){return Lh||(Lh=1,(function(n,e){var t={};e.formatArgs=s,e.save=r,e.load=a,e.useColors=i,e.storage=o(),e.destroy=(()=>{let c=!1;return()=>{c||(c=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function i(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let c;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(c=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(c[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function s(c){if(c[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+c[0]+(this.useColors?"%c ":" ")+"+"+n.exports.humanize(this.diff),!this.useColors)return;const h="color: "+this.color;c.splice(1,0,h,"color: inherit");let d=0,u=0;c[0].replace(/%[a-zA-Z%]/g,f=>{f!=="%%"&&(d++,f==="%c"&&(u=d))}),c.splice(u,0,h)}e.log=console.debug||console.log||(()=>{});function r(c){try{c?e.storage.setItem("debug",c):e.storage.removeItem("debug")}catch{}}function a(){let c;try{c=e.storage.getItem("debug")||e.storage.getItem("DEBUG")}catch{}return!c&&typeof process<"u"&&"env"in process&&(c=t.DEBUG),c}function o(){try{return localStorage}catch{}}n.exports=hS()(e);const{formatters:l}=n.exports;l.j=function(c){try{return JSON.stringify(c)}catch(h){return"[UnexpectedJSONParseError]: "+h.message}}})(Dr,Dr.exports)),Dr.exports}var uS=dS();const fS=Pu(uS),Vn=typeof window<"u"?window:self,kl=Vn.RTCPeerConnection||Vn.mozRTCPeerConnection||Vn.webkitRTCPeerConnection,pS=Vn.RTCSessionDescription||Vn.mozRTCSessionDescription||Vn.webkitRTCSessionDescription,mS=Vn.RTCIceCandidate||Vn.mozRTCIceCandidate||Vn.webkitRTCIceCandidate;var Nr={exports:{}},Ih;function gS(){if(Ih)return Nr.exports;Ih=1;var n=typeof Reflect=="object"?Reflect:null,e=n&&typeof n.apply=="function"?n.apply:function(x,M,L){return Function.prototype.apply.call(x,M,L)},t;n&&typeof n.ownKeys=="function"?t=n.ownKeys:Object.getOwnPropertySymbols?t=function(x){return Object.getOwnPropertyNames(x).concat(Object.getOwnPropertySymbols(x))}:t=function(x){return Object.getOwnPropertyNames(x)};function i(S){console&&console.warn&&console.warn(S)}var s=Number.isNaN||function(x){return x!==x};function r(){r.init.call(this)}Nr.exports=r,Nr.exports.once=p,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._eventsCount=0,r.prototype._maxListeners=void 0;var a=10;function o(S){if(typeof S!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof S)}Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(S){if(typeof S!="number"||S<0||s(S))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+S+".");a=S}}),r.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(x){if(typeof x!="number"||x<0||s(x))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+x+".");return this._maxListeners=x,this};function l(S){return S._maxListeners===void 0?r.defaultMaxListeners:S._maxListeners}r.prototype.getMaxListeners=function(){return l(this)},r.prototype.emit=function(x){for(var M=[],L=1;L<arguments.length;L++)M.push(arguments[L]);var O=x==="error",y=this._events;if(y!==void 0)O=O&&y.error===void 0;else if(!O)return!1;if(O){var b;if(M.length>0&&(b=M[0]),b instanceof Error)throw b;var B=new Error("Unhandled error."+(b?" ("+b.message+")":""));throw B.context=b,B}var D=y[x];if(D===void 0)return!1;if(typeof D=="function")e(D,this,M);else for(var C=D.length,I=g(D,C),L=0;L<C;++L)e(I[L],this,M);return!0};function c(S,x,M,L){var O,y,b;if(o(M),y=S._events,y===void 0?(y=S._events=Object.create(null),S._eventsCount=0):(y.newListener!==void 0&&(S.emit("newListener",x,M.listener?M.listener:M),y=S._events),b=y[x]),b===void 0)b=y[x]=M,++S._eventsCount;else if(typeof b=="function"?b=y[x]=L?[M,b]:[b,M]:L?b.unshift(M):b.push(M),O=l(S),O>0&&b.length>O&&!b.warned){b.warned=!0;var B=new Error("Possible EventEmitter memory leak detected. "+b.length+" "+String(x)+" listeners added. Use emitter.setMaxListeners() to increase limit");B.name="MaxListenersExceededWarning",B.emitter=S,B.type=x,B.count=b.length,i(B)}return S}r.prototype.addListener=function(x,M){return c(this,x,M,!1)},r.prototype.on=r.prototype.addListener,r.prototype.prependListener=function(x,M){return c(this,x,M,!0)};function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(S,x,M){var L={fired:!1,wrapFn:void 0,target:S,type:x,listener:M},O=h.bind(L);return O.listener=M,L.wrapFn=O,O}r.prototype.once=function(x,M){return o(M),this.on(x,d(this,x,M)),this},r.prototype.prependOnceListener=function(x,M){return o(M),this.prependListener(x,d(this,x,M)),this},r.prototype.removeListener=function(x,M){var L,O,y,b,B;if(o(M),O=this._events,O===void 0)return this;if(L=O[x],L===void 0)return this;if(L===M||L.listener===M)--this._eventsCount===0?this._events=Object.create(null):(delete O[x],O.removeListener&&this.emit("removeListener",x,L.listener||M));else if(typeof L!="function"){for(y=-1,b=L.length-1;b>=0;b--)if(L[b]===M||L[b].listener===M){B=L[b].listener,y=b;break}if(y<0)return this;y===0?L.shift():_(L,y),L.length===1&&(O[x]=L[0]),O.removeListener!==void 0&&this.emit("removeListener",x,B||M)}return this},r.prototype.off=r.prototype.removeListener,r.prototype.removeAllListeners=function(x){var M,L,O;if(L=this._events,L===void 0)return this;if(L.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):L[x]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete L[x]),this;if(arguments.length===0){var y=Object.keys(L),b;for(O=0;O<y.length;++O)b=y[O],b!=="removeListener"&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(M=L[x],typeof M=="function")this.removeListener(x,M);else if(M!==void 0)for(O=M.length-1;O>=0;O--)this.removeListener(x,M[O]);return this};function u(S,x,M){var L=S._events;if(L===void 0)return[];var O=L[x];return O===void 0?[]:typeof O=="function"?M?[O.listener||O]:[O]:M?m(O):g(O,O.length)}r.prototype.listeners=function(x){return u(this,x,!0)},r.prototype.rawListeners=function(x){return u(this,x,!1)},r.listenerCount=function(S,x){return typeof S.listenerCount=="function"?S.listenerCount(x):f.call(S,x)},r.prototype.listenerCount=f;function f(S){var x=this._events;if(x!==void 0){var M=x[S];if(typeof M=="function")return 1;if(M!==void 0)return M.length}return 0}r.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]};function g(S,x){for(var M=new Array(x),L=0;L<x;++L)M[L]=S[L];return M}function _(S,x){for(;x+1<S.length;x++)S[x]=S[x+1];S.pop()}function m(S){for(var x=new Array(S.length),M=0;M<x.length;++M)x[M]=S[M].listener||S[M];return x}function p(S,x){return new Promise(function(M,L){function O(b){S.removeListener(x,y),L(b)}function y(){typeof S.removeListener=="function"&&S.removeListener("error",O),M([].slice.call(arguments))}R(S,x,y,{once:!0}),x!=="error"&&T(S,O,{once:!0})})}function T(S,x,M){typeof S.on=="function"&&R(S,"error",x,M)}function R(S,x,M,L){if(typeof S.on=="function")L.once?S.once(x,M):S.on(x,M);else if(typeof S.addEventListener=="function")S.addEventListener(x,function O(y){L.once&&S.removeEventListener(x,O),M(y)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof S)}return Nr.exports}var mo,Dh;function _S(){return Dh||(Dh=1,mo=gS()),mo}var go,Nh;function yS(){return Nh||(Nh=1,go=class{constructor(e){if(!(e>0)||(e-1&e)!==0)throw new Error("Max size for a FixedFIFO should be a power of two");this.buffer=new Array(e),this.mask=e-1,this.top=0,this.btm=0,this.next=null}clear(){this.top=this.btm=0,this.next=null,this.buffer.fill(void 0)}push(e){return this.buffer[this.top]!==void 0?!1:(this.buffer[this.top]=e,this.top=this.top+1&this.mask,!0)}shift(){const e=this.buffer[this.btm];if(e!==void 0)return this.buffer[this.btm]=void 0,this.btm=this.btm+1&this.mask,e}peek(){return this.buffer[this.btm]}isEmpty(){return this.buffer[this.btm]===void 0}}),go}var _o,Uh;function vS(){if(Uh)return _o;Uh=1;const n=yS();return _o=class{constructor(t){this.hwm=t||16,this.head=new n(this.hwm),this.tail=this.head,this.length=0}clear(){this.head=this.tail,this.head.clear(),this.length=0}push(t){if(this.length++,!this.head.push(t)){const i=this.head;this.head=i.next=new n(2*this.head.buffer.length),this.head.push(t)}}shift(){this.length!==0&&this.length--;const t=this.tail.shift();if(t===void 0&&this.tail.next){const i=this.tail.next;return this.tail.next=null,this.tail=i,this.tail.shift()}return t}peek(){const t=this.tail.peek();return t===void 0&&this.tail.next?this.tail.next.peek():t}isEmpty(){return this.length===0}},_o}var Ur={exports:{}},yo,Fh;function SS(){if(Fh)return yo;Fh=1;function n(i){return i.length}function e(i){const s=i.byteLength;let r="";for(let a=0;a<s;a++)r+=String.fromCharCode(i[a]&127);return r}function t(i,s){const r=i.byteLength;for(let a=0;a<r;a++)i[a]=s.charCodeAt(a);return r}return yo={byteLength:n,toString:e,write:t},yo}var vo,Oh;function xS(){if(Oh)return vo;Oh=1;const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=new Uint8Array(256);for(let r=0;r<n.length;r++)e[n.charCodeAt(r)]=r;e[45]=62,e[95]=63;function t(r){let a=r.length;return r.charCodeAt(a-1)===61&&a--,a>1&&r.charCodeAt(a-1)===61&&a--,a*3>>>2}function i(r){const a=r.byteLength;let o="";for(let l=0;l<a;l+=3)o+=n[r[l]>>2]+n[(r[l]&3)<<4|r[l+1]>>4]+n[(r[l+1]&15)<<2|r[l+2]>>6]+n[r[l+2]&63];return a%3===2?o=o.substring(0,o.length-1)+"=":a%3===1&&(o=o.substring(0,o.length-2)+"=="),o}function s(r,a){const o=r.byteLength;for(let l=0,c=0;c<o;l+=4){const h=e[a.charCodeAt(l)],d=e[a.charCodeAt(l+1)],u=e[a.charCodeAt(l+2)],f=e[a.charCodeAt(l+3)];r[c++]=h<<2|d>>4,r[c++]=(d&15)<<4|u>>2,r[c++]=(u&3)<<6|f&63}return o}return vo={byteLength:t,toString:i,write:s},vo}var So,kh;function bS(){if(kh)return So;kh=1;function n(s){return s.length>>>1}function e(s){const r=s.byteLength;s=new DataView(s.buffer,s.byteOffset,r);let a="",o=0;for(let l=r-r%4;o<l;o+=4)a+=s.getUint32(o).toString(16).padStart(8,"0");for(;o<r;o++)a+=s.getUint8(o).toString(16).padStart(2,"0");return a}function t(s,r){const a=s.byteLength;for(let o=0;o<a;o++){const l=i(r.charCodeAt(o*2)),c=i(r.charCodeAt(o*2+1));if(l===void 0||c===void 0)return o;s[o]=l<<4|c}return a}So={byteLength:n,toString:e,write:t};function i(s){if(s>=48&&s<=57)return s-48;if(s>=65&&s<=70)return s-65+10;if(s>=97&&s<=102)return s-97+10}return So}var xo,Bh;function ES(){if(Bh)return xo;Bh=1;function n(i){return i.length}function e(i){const s=i.byteLength;let r="";for(let a=0;a<s;a++)r+=String.fromCharCode(i[a]);return r}function t(i,s){const r=i.byteLength;for(let a=0;a<r;a++)i[a]=s.charCodeAt(a);return r}return xo={byteLength:n,toString:e,write:t},xo}var bo,zh;function MS(){if(zh)return bo;zh=1;function n(i){let s=0;for(let r=0,a=i.length;r<a;r++){const o=i.charCodeAt(r);if(o>=55296&&o<=56319&&r+1<a){const l=i.charCodeAt(r+1);if(l>=56320&&l<=57343){s+=4,r++;continue}}o<=127?s+=1:o<=2047?s+=2:s+=3}return s}let e;if(typeof TextDecoder<"u"){const i=new TextDecoder;e=function(r){return i.decode(r)}}else e=function(s){const r=s.byteLength;let a="",o=0;for(;o<r;){let l=s[o];if(l<=127){a+=String.fromCharCode(l),o++;continue}let c=0,h=0;if(l<=223?(c=1,h=l&31):l<=239?(c=2,h=l&15):l<=244&&(c=3,h=l&7),r-o-c>0){let d=0;for(;d<c;)l=s[o+d+1],h=h<<6|l&63,d+=1}else h=65533,c=r-o;a+=String.fromCodePoint(h),o+=c+1}return a};let t;if(typeof TextEncoder<"u"){const i=new TextEncoder;t=function(r,a){return i.encodeInto(a,r).written}}else t=function(s,r){const a=s.byteLength;let o=0,l=0;for(;o<r.length;){const c=r.codePointAt(o);if(c<=127){if(l+1>a)break;s[l++]=c,o++;continue}let h=0,d=0;if(c<=2047?(h=6,d=192):c<=65535?(h=12,d=224):c<=2097151&&(h=18,d=240),l+h/6+1>a)break;for(s[l++]=d|c>>h,h-=6;h>=0;)s[l++]=128|c>>h&63,h-=6;o+=c>=65536?2:1}return l};return bo={byteLength:n,toString:e,write:t},bo}var Eo,Vh;function wS(){if(Vh)return Eo;Vh=1;function n(i){return i.length*2}function e(i){const s=i.byteLength;let r="";for(let a=0;a<s-1;a+=2)r+=String.fromCharCode(i[a]+i[a+1]*256);return r}function t(i,s){const r=i.byteLength;let a=r;for(let o=0;o<s.length&&!((a-=2)<0);++o){const l=s.charCodeAt(o),c=l>>8,h=l%256;i[o*2]=h,i[o*2+1]=c}return r}return Eo={byteLength:n,toString:e,write:t},Eo}var Gh;function Lu(){return Gh||(Gh=1,(function(n,e){const t=SS(),i=xS(),s=bS(),r=ES(),a=MS(),o=wS(),l=new Uint8Array(Uint16Array.of(255).buffer)[0]===255;function c(k){switch(k){case"ascii":return t;case"base64":return i;case"hex":return s;case"binary":case"latin1":return r;case"utf8":case"utf-8":case void 0:case null:return a;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o;default:throw new Error(`Unknown encoding '${k}'`)}}function h(k){return k instanceof Uint8Array}function d(k){try{return c(k),!0}catch{return!1}}function u(k,E,$){const oe=new Uint8Array(k);return E!==void 0&&e.fill(oe,E,0,oe.byteLength,$),oe}function f(k){return new Uint8Array(k)}function g(k){return new Uint8Array(k)}function _(k,E){return c(E).byteLength(k)}function m(k,E){if(k===E)return 0;const $=Math.min(k.byteLength,E.byteLength);k=new DataView(k.buffer,k.byteOffset,k.byteLength),E=new DataView(E.buffer,E.byteOffset,E.byteLength);let oe=0;for(let Ne=$-$%4;oe<Ne;oe+=4){const pe=k.getUint32(oe,l),P=E.getUint32(oe,l);if(pe!==P)break}for(;oe<$;oe++){const Ne=k.getUint8(oe),pe=E.getUint8(oe);if(Ne<pe)return-1;if(Ne>pe)return 1}return k.byteLength>E.byteLength?1:k.byteLength<E.byteLength?-1:0}function p(k,E){E===void 0&&(E=k.reduce((Ne,pe)=>Ne+pe.byteLength,0));const $=new Uint8Array(E);let oe=0;for(const Ne of k){if(oe+Ne.byteLength>$.byteLength)return $.set(Ne.subarray(0,$.byteLength-oe),oe),$;$.set(Ne,oe),oe+=Ne.byteLength}return $}function T(k,E,$=0,oe=0,Ne=k.byteLength){if($<0&&($=0),$>=E.byteLength)return 0;const pe=E.byteLength-$;if(oe<0&&(oe=0),oe>=k.byteLength||Ne<=oe)return 0;Ne>k.byteLength&&(Ne=k.byteLength),Ne-oe>pe&&(Ne=oe+pe);const P=Ne-oe;return k===E?E.copyWithin($,oe,Ne):((oe!==0||Ne!==k.byteLength)&&(k=k.subarray(oe,Ne)),E.set(k,$)),P}function R(k,E){return k===E?!0:k.byteLength!==E.byteLength?!1:m(k,E)===0}function S(k,E,$=0,oe=k.byteLength,Ne="utf8"){if(typeof E=="string"?typeof $=="string"?(Ne=$,$=0,oe=k.byteLength):typeof oe=="string"&&(Ne=oe,oe=k.byteLength):typeof E=="number"?E=E&255:typeof E=="boolean"&&(E=+E),$<0&&($=0),$>=k.byteLength||oe<=$)return k;if(oe>k.byteLength&&(oe=k.byteLength),typeof E=="number")return k.fill(E,$,oe);typeof E=="string"&&(E=e.from(E,Ne));const pe=E.byteLength;for(let P=0,v=oe-$;P<v;++P)k[P+$]=E[P%pe];return k}function x(k,E,$){return typeof k=="string"?M(k,E):Array.isArray(k)?L(k):ArrayBuffer.isView(k)?O(k):y(k,E,$)}function M(k,E){const $=c(E),oe=new Uint8Array($.byteLength(k));return $.write(oe,k),oe}function L(k){const E=new Uint8Array(k.length);return E.set(k),E}function O(k){const E=new Uint8Array(k.byteLength);return E.set(k),E}function y(k,E,$){return new Uint8Array(k,E,$)}function b(k,E,$,oe){return B(k,E,$,oe)!==-1}function B(k,E,$,oe){return C(k,E,$,oe,!0)}function D(k,E,$,oe){return C(k,E,$,oe,!1)}function C(k,E,$,oe,Ne){if(k.byteLength===0)return-1;if(typeof $=="string"?(oe=$,$=0):$===void 0?$=Ne?0:k.length-1:$<0&&($+=k.byteLength),$>=k.byteLength){if(Ne)return-1;$=k.byteLength-1}else if($<0)if(Ne)$=0;else return-1;if(typeof E=="string")E=x(E,oe);else if(typeof E=="number")return E=E&255,Ne?k.indexOf(E,$):k.lastIndexOf(E,$);if(E.byteLength===0)return-1;if(Ne){let pe=-1;for(let P=$;P<k.byteLength;P++)if(k[P]===E[pe===-1?0:P-pe]){if(pe===-1&&(pe=P),P-pe+1===E.byteLength)return pe}else pe!==-1&&(P-=P-pe),pe=-1}else{$+E.byteLength>k.byteLength&&($=k.byteLength-E.byteLength);for(let pe=$;pe>=0;pe--){let P=!0;for(let v=0;v<E.byteLength;v++)if(k[pe+v]!==E[v]){P=!1;break}if(P)return pe}}return-1}function I(k,E,$){const oe=k[E];k[E]=k[$],k[$]=oe}function N(k){const E=k.byteLength;if(E%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let $=0;$<E;$+=2)I(k,$,$+1);return k}function F(k){const E=k.byteLength;if(E%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let $=0;$<E;$+=4)I(k,$,$+3),I(k,$+1,$+2);return k}function U(k){const E=k.byteLength;if(E%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let $=0;$<E;$+=8)I(k,$,$+7),I(k,$+1,$+6),I(k,$+2,$+5),I(k,$+3,$+4);return k}function z(k){return k}function K(k,E="utf8",$=0,oe=k.byteLength){return arguments.length===1?a.toString(k):arguments.length===2?c(E).toString(k):($<0&&($=0),$>=k.byteLength||oe<=$?"":(oe>k.byteLength&&(oe=k.byteLength),($!==0||oe!==k.byteLength)&&(k=k.subarray($,oe)),c(E).toString(k)))}function H(k,E,$=0,oe=k.byteLength,Ne){if(arguments.length===2)return a.write(k,E);typeof $=="string"?(Ne=$,$=0,oe=k.byteLength):typeof oe=="string"&&(Ne=oe,oe=k.byteLength-$),oe=Math.min(oe,e.byteLength(E,Ne));let pe=$;if(pe<0&&(pe=0),pe>=k.byteLength)return 0;let P=$+oe;return P<=pe?0:(P>k.byteLength&&(P=k.byteLength),(pe!==0||P!==k.byteLength)&&(k=k.subarray(pe,P)),c(Ne).write(k,E))}function Q(k,E=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).getFloat64(E,!1)}function te(k,E=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).getFloat64(E,!0)}function de(k,E=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).getFloat32(E,!1)}function ye(k,E=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).getFloat32(E,!0)}function _e(k,E=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).getInt32(E,!1)}function q(k,E=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).getInt32(E,!0)}function Z(k,E=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).getUint32(E,!1)}function ie(k,E=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).getUint32(E,!0)}function he(k,E,$=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).setFloat64($,E,!1),$+8}function se(k,E,$=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).setFloat64($,E,!0),$+8}function Te(k,E,$=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).setFloat32($,E,!1),$+4}function Ge(k,E,$=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).setFloat32($,E,!0),$+4}function Pe(k,E,$=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).setInt32($,E,!1),$+4}function Fe(k,E,$=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).setInt32($,E,!0),$+4}function Ke(k,E,$=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).setUint32($,E,!1),$+4}function He(k,E,$=0){return new DataView(k.buffer,k.byteOffset,k.byteLength).setUint32($,E,!0),$+4}n.exports=e={isBuffer:h,isEncoding:d,alloc:u,allocUnsafe:f,allocUnsafeSlow:g,byteLength:_,compare:m,concat:p,copy:T,equals:R,fill:S,from:x,includes:b,indexOf:B,lastIndexOf:D,swap16:N,swap32:F,swap64:U,toBuffer:z,toString:K,write:H,readDoubleBE:Q,readDoubleLE:te,readFloatBE:de,readFloatLE:ye,readInt32BE:_e,readInt32LE:q,readUInt32BE:Z,readUInt32LE:ie,writeDoubleBE:he,writeDoubleLE:se,writeFloatBE:Te,writeFloatLE:Ge,writeInt32BE:Pe,writeInt32LE:Fe,writeUInt32BE:Ke,writeUInt32LE:He}})(Ur,Ur.exports)),Ur.exports}var Mo,Hh;function TS(){if(Hh)return Mo;Hh=1;const n=Lu();return Mo=class{constructor(t){this.encoding=t}get remaining(){return 0}decode(t){return n.toString(t,this.encoding)}flush(){return""}},Mo}var wo,Wh;function AS(){if(Wh)return wo;Wh=1;const n=Lu();wo=class{constructor(){this._reset()}get remaining(){return this.bytesSeen}decode(s){if(s.byteLength===0)return"";if(this.bytesNeeded===0&&e(s,0)===0)return this.bytesSeen=t(s),n.toString(s,"utf8");let r="",a=0;if(this.bytesNeeded>0){for(;a<s.byteLength;){const c=s[a];if(c<this.lowerBoundary||c>this.upperBoundary){r+="�",this._reset();break}if(this.lowerBoundary=128,this.upperBoundary=191,this.codePoint=this.codePoint<<6|c&63,this.bytesSeen++,a++,this.bytesSeen===this.bytesNeeded){r+=String.fromCodePoint(this.codePoint),this._reset();break}}if(this.bytesNeeded>0)return r}const o=e(s,a),l=s.byteLength-o;l>a&&(r+=n.toString(s,"utf8",a,l));for(let c=l;c<s.byteLength;c++){const h=s[c];if(this.bytesNeeded===0){h<=127?(this.bytesSeen=0,r+=String.fromCharCode(h)):h>=194&&h<=223?(this.bytesNeeded=2,this.bytesSeen=1,this.codePoint=h&31):h>=224&&h<=239?(h===224?this.lowerBoundary=160:h===237&&(this.upperBoundary=159),this.bytesNeeded=3,this.bytesSeen=1,this.codePoint=h&15):h>=240&&h<=244?(h===240?this.lowerBoundary=144:h===244&&(this.upperBoundary=143),this.bytesNeeded=4,this.bytesSeen=1,this.codePoint=h&7):(this.bytesSeen=1,r+="�");continue}if(h<this.lowerBoundary||h>this.upperBoundary){r+="�",c--,this._reset();continue}this.lowerBoundary=128,this.upperBoundary=191,this.codePoint=this.codePoint<<6|h&63,this.bytesSeen++,this.bytesSeen===this.bytesNeeded&&(r+=String.fromCodePoint(this.codePoint),this._reset())}return r}flush(){const s=this.bytesNeeded>0?"�":"";return this._reset(),s}_reset(){this.codePoint=0,this.bytesNeeded=0,this.bytesSeen=0,this.lowerBoundary=128,this.upperBoundary=191}};function e(i,s){const r=i.byteLength;if(r<=s)return 0;const a=Math.max(s,r-4);let o=r-1;for(;o>a&&(i[o]&192)===128;)o--;if(o<s)return 0;const l=i[o];let c;if(l<=127)return 0;if(l>=194&&l<=223)c=2;else if(l>=224&&l<=239)c=3;else if(l>=240&&l<=244)c=4;else return 0;const h=r-o;return h<c?h:0}function t(i){const s=i.byteLength;if(s===0)return 0;const r=i[s-1];if(r<=127)return 0;if((r&192)!==128)return 1;const a=Math.max(0,s-4);let o=s-2;for(;o>=a&&(i[o]&192)===128;)o--;if(o<0)return 1;const l=i[o];let c;if(l>=194&&l<=223)c=2;else if(l>=224&&l<=239)c=3;else if(l>=240&&l<=244)c=4;else return 1;if(s-o!==c)return 1;if(c>=3){const h=i[o+1];if(l===224&&h<160||l===237&&h>159||l===240&&h<144||l===244&&h>143)return 1}return 0}return wo}var To,Xh;function RS(){if(Xh)return To;Xh=1;const n=TS(),e=AS();To=class{constructor(s="utf8"){switch(this.encoding=t(s),this.encoding){case"utf8":this.decoder=new e;break;case"utf16le":case"base64":throw new Error("Unsupported encoding: "+this.encoding);default:this.decoder=new n(this.encoding)}}get remaining(){return this.decoder.remaining}push(s){return typeof s=="string"?s:this.decoder.decode(s)}write(s){return this.push(s)}end(s){let r="";return s&&(r=this.push(s)),r+=this.decoder.flush(),r}};function t(i){switch(i=i.toLowerCase(),i){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return i;default:throw new Error("Unknown encoding: "+i)}}return To}var Ao,qh;function CS(){return qh||(qh=1,Ao=class gn extends Error{constructor(e,t,i=gn){super(e),this.code=t,Error.captureStackTrace&&Error.captureStackTrace(this,i)}static isStreamDestroyed(e){return e&&e.code==="STREAM_DESTROYED"}static isPrematureClose(e){return e&&e.code==="PREMATURE_CLOSE"}static isAborted(e){return e&&e.code==="ABORTED"}static isBadArgument(e){return e&&e.code==="BAD_ARGUMENT"}get name(){return"StreamError"}static STREAM_DESTROYED(){return new gn("Stream was destroyed","STREAM_DESTROYED",gn.STREAM_DESTROYED)}static PREMATURE_CLOSE(e="Premature close"){return new gn(e,"PREMATURE_CLOSE",gn.PREMATURE_CLOSE)}static ABORTED(){return new gn("Stream aborted","ABORTED",gn.ABORTED)}static BAD_ARGUMENT(e="Bad argument"){return new gn(e,"BAD_ARGUMENT",gn.BAD_ARGUMENT)}}),Ao}var Ro,Yh;function PS(){if(Yh)return Ro;Yh=1;const{EventEmitter:n}=_S(),e=vS(),t=RS(),i=CS(),s=typeof queueMicrotask>"u"?me=>lS.process.nextTick(me):queueMicrotask,r=(1<<29)-1,a=1,o=2,l=4,c=8,h=r^a,d=r^o,u=16,f=32,g=64,_=128,m=256,p=512,T=1024,R=2048,S=4096,x=8192,M=16384,L=32768,O=65536,y=131072,b=m|p,B=u|O,D=g|u,C=S|_,I=m|y,N=r^u,F=r^g,U=r^(g|O),z=r^O,K=r^m,H=r^(_|x),Q=r^T,te=r^b,de=r^L,ye=r^f,_e=r^y,q=r^I,Z=1<<18,ie=2<<18,he=4<<18,se=8<<18,Te=16<<18,Ge=32<<18,Pe=64<<18,Fe=128<<18,Ke=256<<18,He=512<<18,k=1024<<18,E=r^(Z|Ke),$=r^he,oe=r^(Z|He),Ne=r^Te,pe=r^se,P=r^Fe,v=r^ie,G=r^k,ne=u|Z,le=r^ne,X=M|Ge,ue=l|c|o,ae=ue|a,xe=ue|X,ze=$&F,fe=Fe|L,be=fe&le,Le=ae|be,ke=ae|T|M,Se=ae|M|_,je=ae|T|_,V=ae|S|_|x,Re=ae|u|T|M|O|y,ve=ue|T|M,Ie=f|ae|L|g,ge=L|a,ce=ae|He|Ge,Ee=se|Te,Ye=se|Z,_t=se|Te|ae|Z,ct=ae|Z|se|k,Jt=he|Z,ln=Z|Ke,_a=ae|He|Ye|Ge,Qs=Te|ue|He|Ge,vs=ie|ae|Fe|he,ya=He|Ge|ue,ai=Symbol.asyncIterator||Symbol("asyncIterator");class Ss{constructor(A,{highWaterMark:re=16384,map:Oe=null,mapWritable:Ve,byteLength:nt,byteLengthWritable:pt}={}){this.stream=A,this.queue=new e,this.highWaterMark=re,this.buffered=0,this.error=null,this.pipeline=null,this.drains=null,this.byteLength=pt||nt||it,this.map=Ve||Oe,this.afterWrite=Pi.bind(this),this.afterUpdateNextTick=va.bind(this)}get ending(){return(this.stream._duplexState&He)!==0}get ended(){return(this.stream._duplexState&Ge)!==0}push(A){return(this.stream._duplexState&ya)!==0?!1:(this.map!==null&&(A=this.map(A)),this.buffered+=this.byteLength(A),this.queue.push(A),this.buffered<this.highWaterMark?(this.stream._duplexState|=se,!0):(this.stream._duplexState|=Ee,!1))}shift(){const A=this.queue.shift();return this.buffered-=this.byteLength(A),this.buffered===0&&(this.stream._duplexState&=pe),A}end(A){typeof A=="function"?this.stream.once("finish",A):A!=null&&this.push(A),this.stream._duplexState=(this.stream._duplexState|He)&$}autoBatch(A,re){const Oe=[],Ve=this.stream;for(Oe.push(A);(Ve._duplexState&ct)===Ye;)Oe.push(Ve._writableState.shift());if((Ve._duplexState&ae)!==0)return re(null);Ve._writev(Oe,re)}update(){const A=this.stream;A._duplexState|=ie;do{for(;(A._duplexState&ct)===se;){const re=this.shift();A._duplexState|=ln,A._write(re,this.afterWrite)}(A._duplexState&Jt)===0&&this.updateNonPrimary()}while(this.continueUpdate()===!0);A._duplexState&=v}updateNonPrimary(){const A=this.stream;if((A._duplexState&_a)===He){A._duplexState=A._duplexState|Z,A._final(Ci.bind(this));return}if((A._duplexState&ue)===l){(A._duplexState&fe)===0&&(A._duplexState|=ne,A._destroy(bs.bind(this)));return}(A._duplexState&Le)===a&&(A._duplexState=(A._duplexState|ne)&h,A._open(sr.bind(this)))}continueUpdate(){return(this.stream._duplexState&Fe)===0?!1:(this.stream._duplexState&=P,!0)}updateCallback(){(this.stream._duplexState&vs)===he?this.update():this.updateNextTick()}updateNextTick(){(this.stream._duplexState&Fe)===0&&(this.stream._duplexState|=Fe,(this.stream._duplexState&ie)===0&&s(this.afterUpdateNextTick))}}class Rn{constructor(A,{highWaterMark:re=16384,map:Oe=null,mapReadable:Ve,byteLength:nt,byteLengthReadable:pt}={}){this.stream=A,this.queue=new e,this.highWaterMark=re===0?1:re,this.buffered=0,this.readAhead=re>0,this.error=null,this.pipeline=null,this.byteLength=pt||nt||it,this.map=Ve||Oe,this.pipeTo=null,this.afterRead=nr.bind(this),this.afterUpdateNextTick=ir.bind(this)}get ending(){return(this.stream._duplexState&T)!==0}get ended(){return(this.stream._duplexState&M)!==0}pipe(A,re){if(this.pipeTo!==null)throw i.BAD_ARGUMENT("Can only pipe to one destination");if(typeof re!="function"&&(re=null),this.stream._duplexState|=p,this.pipeTo=A,this.pipeline=new er(this.stream,A,re),re&&this.stream.on("error",Nt),We(A))A._writableState.pipeline=this.pipeline,re&&A.on("error",Nt),A.on("finish",this.pipeline.finished.bind(this.pipeline));else{const Oe=this.pipeline.done.bind(this.pipeline,A),Ve=this.pipeline.done.bind(this.pipeline,A,null);A.on("error",Oe),A.on("close",Ve),A.on("finish",this.pipeline.finished.bind(this.pipeline))}A.on("drain",tr.bind(this)),this.stream.emit("piping",A),A.emit("pipe",this.stream)}push(A){const re=this.stream;return A===null?(this.highWaterMark=0,re._duplexState=(re._duplexState|T)&U,!1):this.map!==null&&(A=this.map(A),A===null)?(re._duplexState&=z,this.buffered<this.highWaterMark):(this.buffered+=this.byteLength(A),this.queue.push(A),re._duplexState=(re._duplexState|_)&z,this.buffered<this.highWaterMark)}shift(){const A=this.queue.shift();return this.buffered-=this.byteLength(A),this.buffered===0&&(this.stream._duplexState&=H),A}unshift(A){const re=[this.map!==null?this.map(A):A];for(;this.buffered>0;)re.push(this.shift());for(let Oe=0;Oe<re.length-1;Oe++){const Ve=re[Oe];this.buffered+=this.byteLength(Ve),this.queue.push(Ve)}this.push(re[re.length-1])}read(){const A=this.stream;if((A._duplexState&Se)===_){const re=this.shift();return this.pipeTo!==null&&this.pipeTo.write(re)===!1&&(A._duplexState&=te),(A._duplexState&R)!==0&&A.emit("data",re),re}return this.readAhead===!1&&(A._duplexState|=y,this.updateNextTick()),null}drain(){const A=this.stream;for(;(A._duplexState&Se)===_&&(A._duplexState&b)!==0;){const re=this.shift();this.pipeTo!==null&&this.pipeTo.write(re)===!1&&(A._duplexState&=te),(A._duplexState&R)!==0&&A.emit("data",re)}}update(){const A=this.stream;A._duplexState|=f;do{for(this.drain();this.buffered<this.highWaterMark&&(A._duplexState&Re)===y;)A._duplexState|=B,A._read(this.afterRead),this.drain();(A._duplexState&V)===C&&(A._duplexState|=x,A.emit("readable")),(A._duplexState&D)===0&&this.updateNonPrimary()}while(this.continueUpdate()===!0);A._duplexState&=ye}updateNonPrimary(){const A=this.stream;if((A._duplexState&je)===T&&(A._duplexState=(A._duplexState|M)&Q,A.emit("end"),(A._duplexState&xe)===X&&(A._duplexState|=l),this.pipeTo!==null&&this.pipeTo.end()),(A._duplexState&ue)===l){(A._duplexState&fe)===0&&(A._duplexState|=ne,A._destroy(bs.bind(this)));return}(A._duplexState&Le)===a&&(A._duplexState=(A._duplexState|ne)&h,A._open(sr.bind(this)))}continueUpdate(){return(this.stream._duplexState&L)===0?!1:(this.stream._duplexState&=de,!0)}updateCallback(){(this.stream._duplexState&Ie)===g?this.update():this.updateNextTick()}updateNextTickIfOpen(){(this.stream._duplexState&ge)===0&&(this.stream._duplexState|=L,(this.stream._duplexState&f)===0&&s(this.afterUpdateNextTick))}updateNextTick(){(this.stream._duplexState&L)===0&&(this.stream._duplexState|=L,(this.stream._duplexState&f)===0&&s(this.afterUpdateNextTick))}}class xs{constructor(A){this.data=null,this.afterTransform=xa.bind(A),this.afterFinal=null}}class er{constructor(A,re,Oe){this.from=A,this.to=re,this.afterPipe=Oe,this.error=null,this.pipeToFinished=!1}finished(){this.pipeToFinished=!0}done(A,re){if(re&&(this.error=re),A===this.to&&(this.to=null,this.from!==null)){((this.from._duplexState&M)===0||!this.pipeToFinished)&&this.from.destroy(this.error||i.PREMATURE_CLOSE("Writable stream closed"));return}if(A===this.from&&(this.from=null,this.to!==null)){(A._duplexState&M)===0&&this.to.destroy(this.error||i.PREMATURE_CLOSE("Readable stream closed"));return}this.afterPipe!==null&&this.afterPipe(this.error),this.to=this.from=this.afterPipe=null}}function tr(){this.stream._duplexState|=p,this.updateCallback()}function Ci(me){const A=this.stream;me&&A.destroy(me),(A._duplexState&ue)===0&&(A._duplexState|=Ge,A.emit("finish")),(A._duplexState&xe)===X&&(A._duplexState|=l),A._duplexState&=oe,(A._duplexState&ie)===0?this.update():this.updateNextTick()}function bs(me){const A=this.stream;!me&&!i.isStreamDestroyed(this.error)&&(me=this.error),me&&A.emit("error",me),A._duplexState|=c,A.emit("close");const re=A._readableState,Oe=A._writableState;if(re!==null&&re.pipeline!==null&&re.pipeline.done(A,me),Oe!==null){for(;Oe.drains!==null&&Oe.drains.length>0;)Oe.drains.shift().resolve(!1);Oe.pipeline!==null&&Oe.pipeline.done(A,me)}}function Pi(me){const A=this.stream;me&&A.destroy(me),A._duplexState&=E,this.drains!==null&&Sa(this.drains),(A._duplexState&_t)===Te&&(A._duplexState&=Ne,(A._duplexState&Pe)===Pe&&A.emit("drain")),this.updateCallback()}function nr(me){me&&this.stream.destroy(me),this.stream._duplexState&=N,this.readAhead===!1&&(this.stream._duplexState&m)===0&&(this.stream._duplexState&=_e),this.updateCallback()}function ir(){(this.stream._duplexState&f)===0&&(this.stream._duplexState&=de,this.update())}function va(){(this.stream._duplexState&ie)===0&&(this.stream._duplexState&=P,this.update())}function Sa(me){for(let A=0;A<me.length;A++)--me[A].writes===0&&(me.shift().resolve(!0),A--)}function sr(me){const A=this.stream;me&&A.destroy(me),(A._duplexState&l)===0&&((A._duplexState&ke)===0&&(A._duplexState|=g),(A._duplexState&ce)===0&&(A._duplexState|=he),A.emit("open")),A._duplexState&=le,A._writableState!==null&&A._writableState.updateCallback(),A._readableState!==null&&A._readableState.updateCallback()}function xa(me,A){A!=null&&this.push(A),this._writableState.afterWrite(me)}function ba(me){this._readableState!==null&&(me==="data"&&(this._duplexState|=R|I,this._readableState.updateNextTick()),me==="readable"&&(this._duplexState|=S,this._readableState.updateNextTick())),this._writableState!==null&&me==="drain"&&(this._duplexState|=Pe,this._writableState.updateNextTick())}class Es extends n{constructor(A){super(),this._duplexState=0,this._readableState=null,this._writableState=null,A&&(A.open&&(this._open=A.open),A.destroy&&(this._destroy=A.destroy),A.predestroy&&(this._predestroy=A.predestroy),A.signal&&A.signal.addEventListener("abort",qn.bind(this))),this.on("newListener",ba)}_open(A){A(null)}_destroy(A){A(null)}_predestroy(){}get readable(){return this._readableState!==null?!0:void 0}get writable(){return this._writableState!==null?!0:void 0}get destroyed(){return(this._duplexState&c)!==0}get destroying(){return(this._duplexState&ue)!==0}destroy(A){(this._duplexState&ue)===0&&(A||(A=i.STREAM_DESTROYED()),this._duplexState=(this._duplexState|l)&ze,this._readableState!==null&&(this._readableState.highWaterMark=0,this._readableState.error=A),this._writableState!==null&&(this._writableState.highWaterMark=0,this._writableState.error=A),this._duplexState|=o,this._predestroy(),this._duplexState&=d,this._readableState!==null&&this._readableState.updateNextTick(),this._writableState!==null&&this._writableState.updateNextTick())}}class w extends Es{constructor(A){super(A),this._duplexState|=a|Ge|y,this._readableState=new Rn(this,A),A&&(this._readableState.readAhead===!1&&(this._duplexState&=_e),A.read&&(this._read=A.read),A.eagerOpen&&this._readableState.updateNextTick(),A.encoding&&this.setEncoding(A.encoding))}static deferred(A,re){const Oe=new j(re);return A().then(Ve=>{if(Ve===null)return Oe.end();Oe.destroying||we(Ve,Oe,Nt)}).catch(Ve=>Oe.destroy(Ve)),Oe}setEncoding(A){const re=new t(A),Oe=this._readableState.map||Ue;return this._readableState.map=Ve,this;function Ve(nt){const pt=re.push(nt);return pt===""&&(nt.byteLength!==0||re.remaining>0)?null:Oe(pt)}}_read(A){A(null)}pipe(A,re){return this._readableState.updateNextTick(),this._readableState.pipe(A,re),A}read(){return this._readableState.updateNextTick(),this._readableState.read()}push(A){return this._readableState.updateNextTickIfOpen(),this._readableState.push(A)}unshift(A){return this._readableState.updateNextTickIfOpen(),this._readableState.unshift(A)}resume(){return this._duplexState|=I,this._readableState.updateNextTick(),this}pause(){return this._duplexState&=this._readableState.readAhead===!1?q:K,this}static _fromAsyncIterator(A,re){let Oe;const Ve=new w({...re,read(pt){A.next().then(nt).then(pt.bind(null,null)).catch(pt)},predestroy(){Oe=A.return()},destroy(pt){if(!Oe)return pt(null);Oe.then(pt.bind(null,null)).catch(pt)}});return Ve;function nt(pt){pt.done?Ve.push(null):Ve.push(pt.value)}}static from(A,re){if(ft(A))return A;if(A[ai])return this._fromAsyncIterator(A[ai](),re);Array.isArray(A)||(A=A===void 0?[]:[A]);let Oe=0;return new w({...re,read(Ve){this.push(Oe===A.length?null:A[Oe++]),Ve(null)}})}static isBackpressured(A){return(A._duplexState&ve)!==0||A._readableState.buffered>=A._readableState.highWaterMark}static isPaused(A){return(A._duplexState&m)===0}[ai](){const A=this;let re=null,Oe=null,Ve=null;return this.on("error",ht=>{re=ht}),this.on("readable",nt),this.on("close",pt),{[ai](){return this},next(){return new Promise(function(ht,fn){Oe=ht,Ve=fn;const Yn=A.read();Yn!==null?Wt(Yn):(A._duplexState&c)!==0&&Wt(null)})},return(){return Ms(null)},throw(ht){return Ms(ht)}};function nt(){Oe!==null&&Wt(A.read())}function pt(){Oe!==null&&Wt(null)}function Wt(ht){Ve!==null&&(re?Ve(re):ht===null&&(A._duplexState&M)===0?Ve(i.STREAM_DESTROYED()):Oe({value:ht,done:ht===null}),Ve=Oe=null)}function Ms(ht){return A.destroy(ht),new Promise((fn,Yn)=>{if(A._duplexState&c)return fn({value:void 0,done:!0});A.once("close",function(){ht?Yn(ht):fn({value:void 0,done:!0})})})}}}class W extends Es{constructor(A){super(A),this._duplexState|=a|M,this._writableState=new Ss(this,A),A&&(A.writev&&(this._writev=A.writev),A.write&&(this._write=A.write),A.final&&(this._final=A.final),A.eagerOpen&&this._writableState.updateNextTick())}cork(){this._duplexState|=k}uncork(){this._duplexState&=G,this._writableState.updateNextTick()}_writev(A,re){re(null)}_write(A,re){this._writableState.autoBatch(A,re)}_final(A){A(null)}static isBackpressured(A){return(A._duplexState&Qs)!==0}static drained(A){if(A.destroyed)return Promise.resolve(!1);const re=A._writableState,Ve=(Bt(A)?Math.min(1,re.queue.length):re.queue.length)+(A._duplexState&Ke?1:0);return Ve===0?Promise.resolve(!0):(re.drains===null&&(re.drains=[]),new Promise(nt=>{re.drains.push({writes:Ve,resolve:nt})}))}write(A){return this._writableState.updateNextTick(),this._writableState.push(A)}end(A){return this._writableState.updateNextTick(),this._writableState.end(A),this}}class ee extends w{constructor(A){super(A),this._duplexState=a|this._duplexState&y,this._writableState=new Ss(this,A),A&&(A.writev&&(this._writev=A.writev),A.write&&(this._write=A.write),A.final&&(this._final=A.final))}cork(){this._duplexState|=k}uncork(){this._duplexState&=G,this._writableState.updateNextTick()}_writev(A,re){re(null)}_write(A,re){this._writableState.autoBatch(A,re)}_final(A){A(null)}write(A){return this._writableState.updateNextTick(),this._writableState.push(A)}end(A){return this._writableState.updateNextTick(),this._writableState.end(A),this}}class J extends ee{constructor(A){super(A),this._transformState=new xs(this),A&&(A.transform&&(this._transform=A.transform),A.flush&&(this._flush=A.flush))}_write(A,re){this._readableState.buffered>=this._readableState.highWaterMark?this._transformState.data=A:this._transform(A,this._transformState.afterTransform)}_read(A){if(this._transformState.data!==null){const re=this._transformState.data;this._transformState.data=null,A(null),this._transform(re,this._transformState.afterTransform)}else A(null)}destroy(A){super.destroy(A),this._transformState.data!==null&&(this._transformState.data=null,this._transformState.afterTransform())}_transform(A,re){re(null,A)}_flush(A){A(null)}_final(A){this._transformState.afterFinal=A,this._flush(Me.bind(this))}}class j extends J{}function Me(me,A){const re=this._transformState.afterFinal;if(me)return re(me);A!=null&&this.push(A),this.push(null),re(null)}function De(...me){return new Promise((A,re)=>we(...me,Oe=>{if(Oe)return re(Oe);A()}))}function we(me,...A){const re=Array.isArray(me)?[...me,...A]:[me,...A],Oe=re.length&&typeof re[re.length-1]=="function"?re.pop():null;if(re.length<2)throw i.BAD_ARGUMENT("Pipeline requires at least 2 streams");let Ve=re[0],nt=null,pt=null;for(let ht=1;ht<re.length;ht++)nt=re[ht],We(Ve)?Ve.pipe(nt,Ms):(Wt(Ve,!0,ht>1,Ms),Ve.pipe(nt)),Ve=nt;if(Oe){let ht=!1;const fn=We(nt)||!!(nt._writableState&&nt._writableState.autoDestroy);nt.on("error",Yn=>{pt===null&&(pt=Yn)}),nt.on("finish",()=>{ht=!0,fn||Oe(pt)}),fn&&nt.on("close",()=>Oe(pt||(ht?null:i.PREMATURE_CLOSE())))}return nt;function Wt(ht,fn,Yn,Ea){ht.on("error",Ea),ht.on("close",ku);function ku(){if(ht._readableState&&!ht._readableState.ended||Yn&&ht._writableState&&!ht._writableState.ended)return Ea(i.PREMATURE_CLOSE())}}function Ms(ht){if(!(!ht||pt)){pt=ht;for(const fn of re)fn.destroy(ht)}}}function Ue(me){return me}function Be(me){return!!me._readableState||!!me._writableState}function We(me){return typeof me._duplexState=="number"&&Be(me)}function Xe(me){return!!me._readableState&&me._readableState.ending}function Qe(me){return!!me._readableState&&me._readableState.ended}function ut(me){return!!me._writableState&&me._writableState.ending}function xt(me){return!!me._writableState&&me._writableState.ended}function bt(me,A={}){const re=me._readableState&&me._readableState.error||me._writableState&&me._writableState.error;return!A.all&&i.isStreamDestroyed(re)?null:re}function ft(me){return We(me)&&me.readable}function qe(me){return(me._duplexState&a)!==a||(me._duplexState&l)===l||(me._duplexState&fe)!==0}function dt(me){return typeof me=="object"&&me!==null&&typeof me.byteLength=="number"}function it(me){return dt(me)?me.byteLength:1024}function Nt(){}function qn(){this.destroy(i.ABORTED())}function Bt(me){return me._writev!==W.prototype._writev&&me._writev!==ee.prototype._writev}return Ro={pipeline:we,pipelinePromise:De,isStream:Be,isStreamx:We,isEnding:Xe,isEnded:Qe,isFinishing:ut,isFinished:xt,isDisturbed:qe,getStreamError:bt,Stream:Es,Writable:W,Readable:w,Duplex:ee,Transform:J,PassThrough:j},Ro}var LS=PS(),Co,jh;function IS(){if(jh)return Co;jh=1;function n(t,i){for(const s in i)Object.defineProperty(t,s,{value:i[s],enumerable:!0,configurable:!0});return t}function e(t,i,s){if(!t||typeof t=="string")throw new TypeError("Please pass an Error to err-code");s||(s={}),typeof i=="object"&&(s=i,i=""),i&&(s.code=i);try{return n(t,s)}catch{s.message=t.message,s.stack=t.stack;const a=function(){};return a.prototype=Object.create(Object.getPrototypeOf(t)),n(new a,s)}}return Co=e,Co}var DS=IS();const st=Pu(DS);new TextDecoder;const Po=new Uint8Array(128);for(let n=0;n<16;++n)n<10?Po[48+n]=n:(Po[87+n]=n,Po[55+n]=n);const $h=n=>n.toHex(),NS=new TextEncoder,US=n=>NS.encode(n),Kh=n=>crypto.getRandomValues(new Uint8Array(n));/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */const FS=fS("simple-peer"),Lo=64*1024,OS=5*1e3,kS=5*1e3;function Zh(n){return n.replace(/a=ice-options:trickle\s\n/g,"")}function BS(n){console.warn(n)}function Ns(n,e,...t){var s;const i=setTimeout(n,e,...t);return(s=i.unref)==null||s.call(i),i}function Jh(n,e,...t){var s;const i=setInterval(n,e,...t);return(s=i.unref)==null||s.call(i),i}let ga=class Bl extends LS.Duplex{constructor(t){t=Object.assign({allowHalfOpen:!1},t);super(t);uc(this,"_pc");if(this.__objectMode=!!t.objectMode,this._id=$h(Kh(4)).slice(0,7),this._debug("new peer %o",t),this.channelName=t.initiator?t.channelName||$h(Kh(20)):null,this.initiator=t.initiator||!1,this.channelConfig=t.channelConfig||Bl.channelConfig,this.channelNegotiated=this.channelConfig.negotiated,this.config=Object.assign({},Bl.config,t.config),this.offerOptions=t.offerOptions||{},this.answerOptions=t.answerOptions||{},this.sdpTransform=t.sdpTransform||(i=>i),this.trickle=t.trickle!==void 0?t.trickle:!0,this.allowHalfTrickle=t.allowHalfTrickle!==void 0?t.allowHalfTrickle:!1,this.iceCompleteTimeout=t.iceCompleteTimeout||OS,this._destroying=!1,this._connected=!1,this.remoteAddress=void 0,this.remoteFamily=void 0,this.remotePort=void 0,this.localAddress=void 0,this.localFamily=void 0,this.localPort=void 0,!kl)throw st(typeof window>"u"?new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"):new Error("No WebRTC support: Not a supported browser"),"ERR_WEBRTC_SUPPORT");this._pcReady=!1,this._channelReady=!1,this._iceComplete=!1,this._iceCompleteTimer=null,this._channel=null,this._pendingCandidates=[],this._isNegotiating=!1,this._firstNegotiation=!0,this._batchedNegotiation=!1,this._queuedNegotiation=!1,this._sendersAwaitingStable=[],this._closingInterval=null,this._remoteTracks=[],this._remoteStreams=[],this._chunk=null,this._cb=null,this._interval=null;try{this._pc=new kl(this.config)}catch(i){this.__destroy(st(i,"ERR_PC_CONSTRUCTOR"));return}this._isReactNativeWebrtc=typeof this._pc._peerConnectionId=="number",this._pc.oniceconnectionstatechange=()=>{this._onIceStateChange()},this._pc.onicegatheringstatechange=()=>{this._onIceStateChange()},this._pc.onconnectionstatechange=()=>{this._onConnectionStateChange()},this._pc.onsignalingstatechange=()=>{this._onSignalingStateChange()},this._pc.onicecandidate=i=>{this._onIceCandidate(i)},typeof this._pc.peerIdentity=="object"&&this._pc.peerIdentity.catch(i=>{this.__destroy(st(i,"ERR_PC_PEER_IDENTITY"))}),this.initiator||this.channelNegotiated?this._setupData({channel:this._pc.createDataChannel(this.channelName,this.channelConfig)}):this._pc.ondatachannel=i=>{this._setupData(i)},this._debug("initial negotiation"),this._needsNegotiation(),this._onFinishBound=()=>{this._onFinish()},this.once("finish",this._onFinishBound)}get bufferSize(){return this._channel&&this._channel.bufferedAmount||0}get connected(){return this._connected&&this._channel.readyState==="open"}address(){return{port:this.localPort,family:this.localFamily,address:this.localAddress}}signal(t){if(!this._destroying){if(this.destroyed)throw st(new Error("cannot signal after peer is destroyed"),"ERR_DESTROYED");if(typeof t=="string")try{t=JSON.parse(t)}catch{t={}}this._debug("signal()"),t.renegotiate&&this.initiator&&(this._debug("got request to renegotiate"),this._needsNegotiation()),t.transceiverRequest&&this.initiator&&(this._debug("got request for transceiver"),this.addTransceiver(t.transceiverRequest.kind,t.transceiverRequest.init)),t.candidate&&(this._pc.remoteDescription&&this._pc.remoteDescription.type?this._addIceCandidate(t.candidate):this._pendingCandidates.push(t.candidate)),t.sdp&&this._pc.setRemoteDescription(new pS(t)).then(()=>{this.destroyed||(this._pendingCandidates.forEach(i=>{this._addIceCandidate(i)}),this._pendingCandidates=[],this._pc.remoteDescription.type==="offer"&&this._createAnswer())}).catch(i=>{this.__destroy(st(i,"ERR_SET_REMOTE_DESCRIPTION"))}),!t.sdp&&!t.candidate&&!t.renegotiate&&!t.transceiverRequest&&this.__destroy(st(new Error("signal() called with invalid signal data"),"ERR_SIGNALING"))}}_addIceCandidate(t){const i=new mS(t);this._pc.addIceCandidate(i).catch(s=>{!i.address||i.address.endsWith(".local")?BS("Ignoring unsupported ICE candidate."):this.__destroy(st(s,"ERR_ADD_ICE_CANDIDATE"))})}send(t){if(!this._destroying){if(this.destroyed)throw st(new Error("cannot send after peer is destroyed"),"ERR_DESTROYED");this._channel.send(t)}}_needsNegotiation(){this._debug("_needsNegotiation"),!this._batchedNegotiation&&(this._batchedNegotiation=!0,queueMicrotask(()=>{this._batchedNegotiation=!1,this.initiator||!this._firstNegotiation?(this._debug("starting batched negotiation"),this.negotiate()):this._debug("non-initiator initial negotiation request discarded"),this._firstNegotiation=!1}))}negotiate(){if(!this._destroying){if(this.destroyed)throw st(new Error("cannot negotiate after peer is destroyed"),"ERR_DESTROYED");this.initiator?this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("start negotiation"),Ns(()=>{this._createOffer()},0)):this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("requesting negotiation from initiator"),this.emit("signal",{type:"renegotiate",renegotiate:!0})),this._isNegotiating=!0}}_final(t){this._readableState.ended||this.push(null),t(null)}__destroy(t){this.end(),this._destroy(()=>{},t)}_destroy(t,i){this.destroyed||this._destroying||(this._destroying=!0,this._debug("destroying (error: %s)",i&&(i.message||i)),Ns(()=>{if(this._connected&&this.emit("disconnect"),this._connected=!1,this._pcReady=!1,this._channelReady=!1,this._remoteTracks=null,this._remoteStreams=null,this._senderMap=null,clearInterval(this._closingInterval),this._closingInterval=null,clearInterval(this._interval),this._interval=null,this._chunk=null,this._cb=null,this._onFinishBound&&this.removeListener("finish",this._onFinishBound),this._onFinishBound=null,this._channel){try{this._channel.close()}catch{}this._channel.onmessage=null,this._channel.onopen=null,this._channel.onclose=null,this._channel.onerror=null}if(this._pc){try{this._pc.close()}catch{}this._pc.oniceconnectionstatechange=null,this._pc.onicegatheringstatechange=null,this._pc.onsignalingstatechange=null,this._pc.onicecandidate=null,this._pc.ontrack=null,this._pc.ondatachannel=null}this._pc=null,this._channel=null,i&&this.emit("error",i),t()},0))}_setupData(t){if(!t.channel)return this.__destroy(st(new Error("Data channel event is missing `channel` property"),"ERR_DATA_CHANNEL"));this._channel=t.channel,this._channel.binaryType="arraybuffer",typeof this._channel.bufferedAmountLowThreshold=="number"&&(this._channel.bufferedAmountLowThreshold=Lo),this.channelName=this._channel.label,this._channel.onmessage=s=>{this._onChannelMessage(s)},this._channel.onbufferedamountlow=()=>{this._onChannelBufferedAmountLow()},this._channel.onopen=()=>{this._onChannelOpen()},this._channel.onclose=()=>{this._onChannelClose()},this._channel.onerror=s=>{const r=s.error instanceof Error?s.error:new Error(`Datachannel error: ${s.message} ${s.filename}:${s.lineno}:${s.colno}`);this.__destroy(st(r,"ERR_DATA_CHANNEL"))};let i=!1;this._closingInterval=Jh(()=>{this._channel&&this._channel.readyState==="closing"?(i&&this._onChannelClose(),i=!0):i=!1},kS)}_write(t,i){if(this.destroyed)return i(st(new Error("cannot write after peer is destroyed"),"ERR_DATA_CHANNEL"));if(this._connected){try{this.send(t)}catch(s){return this.__destroy(st(s,"ERR_DATA_CHANNEL"))}this._channel.bufferedAmount>Lo?(this._debug("start backpressure: bufferedAmount %d",this._channel.bufferedAmount),this._cb=i):i(null)}else this._debug("write before connect"),this._chunk=t,this._cb=i}_onFinish(){if(this.destroyed)return;const t=()=>{var i,s;(s=(i=Ns(()=>this.__destroy(),1e3)).unref)==null||s.call(i)};this._connected?t():this.once("connect",t)}_startIceCompleteTimeout(){this.destroyed||this._iceCompleteTimer||(this._debug("started iceComplete timeout"),this._iceCompleteTimer=Ns(()=>{this._iceComplete||(this._iceComplete=!0,this._debug("iceComplete timeout completed"),this.emit("iceTimeout"),this.emit("_iceComplete"))},this.iceCompleteTimeout))}_createOffer(){this.destroyed||this._pc.createOffer(this.offerOptions).then(t=>{if(this.destroyed)return;!this.trickle&&!this.allowHalfTrickle&&(t.sdp=Zh(t.sdp)),t.sdp=this.sdpTransform(t.sdp);const i=()=>{if(this.destroyed)return;const a=this._pc.localDescription||t;this._debug("signal"),this.emit("signal",{type:a.type,sdp:a.sdp})},s=()=>{this._debug("createOffer success"),!this.destroyed&&(this.trickle||this._iceComplete?i():this.once("_iceComplete",i))},r=a=>{this.__destroy(st(a,"ERR_SET_LOCAL_DESCRIPTION"))};this._pc.setLocalDescription(t).then(s).catch(r)}).catch(t=>{this.__destroy(st(t,"ERR_CREATE_OFFER"))})}_createAnswer(){this.destroyed||this._pc.createAnswer(this.answerOptions).then(t=>{if(this.destroyed)return;!this.trickle&&!this.allowHalfTrickle&&(t.sdp=Zh(t.sdp)),t.sdp=this.sdpTransform(t.sdp);const i=()=>{var o;if(this.destroyed)return;const a=this._pc.localDescription||t;this._debug("signal"),this.emit("signal",{type:a.type,sdp:a.sdp}),this.initiator||(o=this._requestMissingTransceivers)==null||o.call(this)},s=()=>{this.destroyed||(this.trickle||this._iceComplete?i():this.once("_iceComplete",i))},r=a=>{this.__destroy(st(a,"ERR_SET_LOCAL_DESCRIPTION"))};this._pc.setLocalDescription(t).then(s).catch(r)}).catch(t=>{this.__destroy(st(t,"ERR_CREATE_ANSWER"))})}_onConnectionStateChange(){this.destroyed||this._destroying||this._pc.connectionState==="failed"&&this.__destroy(st(new Error("Connection failed."),"ERR_CONNECTION_FAILURE"))}_onIceStateChange(){if(this.destroyed)return;const t=this._pc.iceConnectionState,i=this._pc.iceGatheringState;this._debug("iceStateChange (connection: %s) (gathering: %s)",t,i),this.emit("iceStateChange",t,i),(t==="connected"||t==="completed")&&(this._pcReady=!0,this._maybeReady()),t==="failed"&&this.__destroy(st(new Error("Ice connection failed."),"ERR_ICE_CONNECTION_FAILURE")),t==="closed"&&this.__destroy(st(new Error("Ice connection closed."),"ERR_ICE_CONNECTION_CLOSED"))}getStats(t){const i=s=>(Object.prototype.toString.call(s.values)==="[object Array]"&&s.values.forEach(r=>{Object.assign(s,r)}),s);this._pc.getStats.length===0||this._isReactNativeWebrtc?this._pc.getStats().then(s=>{const r=[];s.forEach(a=>{r.push(i(a))}),t(null,r)},s=>t(s)):this._pc.getStats.length>0?this._pc.getStats(s=>{if(this.destroyed)return;const r=[];s.result().forEach(a=>{const o={};a.names().forEach(l=>{o[l]=a.stat(l)}),o.id=a.id,o.type=a.type,o.timestamp=a.timestamp,r.push(i(o))}),t(null,r)},s=>t(s)):t(null,[])}_maybeReady(){if(this._debug("maybeReady pc %s channel %s",this._pcReady,this._channelReady),this._connected||this._connecting||!this._pcReady||!this._channelReady)return;this._connecting=!0;const t=()=>{this.destroyed||this._destroying||this.getStats((i,s)=>{if(this.destroyed||this._destroying)return;i&&(s=[]);const r={},a={},o={};let l=!1;s.forEach(h=>{(h.type==="remotecandidate"||h.type==="remote-candidate")&&(r[h.id]=h),(h.type==="localcandidate"||h.type==="local-candidate")&&(a[h.id]=h),(h.type==="candidatepair"||h.type==="candidate-pair")&&(o[h.id]=h)});const c=h=>{l=!0;let d=a[h.localCandidateId];d&&(d.ip||d.address)?(this.localAddress=d.ip||d.address,this.localPort=Number(d.port)):d&&d.ipAddress?(this.localAddress=d.ipAddress,this.localPort=Number(d.portNumber)):typeof h.googLocalAddress=="string"&&(d=h.googLocalAddress.split(":"),this.localAddress=d[0],this.localPort=Number(d[1])),this.localAddress&&(this.localFamily=this.localAddress.includes(":")?"IPv6":"IPv4");let u=r[h.remoteCandidateId];u&&(u.ip||u.address)?(this.remoteAddress=u.ip||u.address,this.remotePort=Number(u.port)):u&&u.ipAddress?(this.remoteAddress=u.ipAddress,this.remotePort=Number(u.portNumber)):typeof h.googRemoteAddress=="string"&&(u=h.googRemoteAddress.split(":"),this.remoteAddress=u[0],this.remotePort=Number(u[1])),this.remoteAddress&&(this.remoteFamily=this.remoteAddress.includes(":")?"IPv6":"IPv4"),this._debug("connect local: %s:%s remote: %s:%s",this.localAddress,this.localPort,this.remoteAddress,this.remotePort)};if(s.forEach(h=>{h.type==="transport"&&h.selectedCandidatePairId&&c(o[h.selectedCandidatePairId]),(h.type==="googCandidatePair"&&h.googActiveConnection==="true"||(h.type==="candidatepair"||h.type==="candidate-pair")&&h.selected)&&c(h)}),!l&&(!Object.keys(o).length||Object.keys(a).length)){Ns(t,100);return}else this._connecting=!1,this._connected=!0;if(this._chunk){try{this.send(this._chunk)}catch(d){return this.__destroy(st(d,"ERR_DATA_CHANNEL"))}this._chunk=null,this._debug('sent chunk from "write before connect"');const h=this._cb;this._cb=null,h(null)}typeof this._channel.bufferedAmountLowThreshold!="number"&&(this._interval=Jh(()=>this._onInterval(),150)),this._debug("connect"),this.emit("connect")})};t()}_onInterval(){!this._cb||!this._channel||this._channel.bufferedAmount>Lo||this._onChannelBufferedAmountLow()}_onSignalingStateChange(){this.destroyed||(this._pc.signalingState==="stable"&&(this._isNegotiating=!1,this._debug("flushing sender queue",this._sendersAwaitingStable),this._sendersAwaitingStable.forEach(t=>{this._pc.removeTrack(t),this._queuedNegotiation=!0}),this._sendersAwaitingStable=[],this._queuedNegotiation?(this._debug("flushing negotiation queue"),this._queuedNegotiation=!1,this._needsNegotiation()):(this._debug("negotiated"),this.emit("negotiated"))),this._debug("signalingStateChange %s",this._pc.signalingState),this.emit("signalingStateChange",this._pc.signalingState))}_onIceCandidate(t){this.destroyed||(t.candidate&&this.trickle?this.emit("signal",{type:"candidate",candidate:{candidate:t.candidate.candidate,sdpMLineIndex:t.candidate.sdpMLineIndex,sdpMid:t.candidate.sdpMid}}):!t.candidate&&!this._iceComplete&&(this._iceComplete=!0,this.emit("_iceComplete")),t.candidate&&this._startIceCompleteTimeout())}_onChannelMessage(t){if(this.destroyed)return;let i=t.data;i instanceof ArrayBuffer?i=new Uint8Array(i):this.__objectMode===!1&&(i=US(i)),this.push(i)}_onChannelBufferedAmountLow(){if(this.destroyed||!this._cb)return;this._debug("ending backpressure: bufferedAmount %d",this._channel.bufferedAmount);const t=this._cb;this._cb=null,t(null)}_onChannelOpen(){this._connected||this.destroyed||(this._debug("on channel open"),this._channelReady=!0,this._maybeReady())}_onChannelClose(){this.destroyed||(this._debug("on channel close"),this.__destroy())}_debug(){const t=[].slice.call(arguments);t[0]="["+this._id+"] "+t[0],FS.apply(null,t)}};ga.WEBRTC_SUPPORT=!!kl;ga.config={iceServers:[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]}],sdpSemantics:"unified-plan"};ga.channelConfig={};/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */class zS extends ga{constructor(e={}){super(e),this._pc&&(this.streams=e.streams||(e.stream?[e.stream]:[]),this._senderMap=new Map,this.streams&&this.streams.forEach(t=>{this.addStream(t)}),this._pc.ontrack=t=>{this._onTrack(t)})}addTransceiver(e,t){if(!this._destroying){if(this.destroyed)throw st(new Error("cannot addTransceiver after peer is destroyed"),"ERR_DESTROYED");if(this._debug("addTransceiver()"),this.initiator)try{this._pc.addTransceiver(e,t),this._needsNegotiation()}catch(i){this.__destroy(st(i,"ERR_ADD_TRANSCEIVER"))}else this.emit("signal",{type:"transceiverRequest",transceiverRequest:{kind:e,init:t}})}}addStream(e){if(!this._destroying){if(this.destroyed)throw st(new Error("cannot addStream after peer is destroyed"),"ERR_DESTROYED");this._debug("addStream()"),e.getTracks().forEach(t=>{this.addTrack(t,e)})}}addTrack(e,t){if(this._destroying)return;if(this.destroyed)throw st(new Error("cannot addTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("addTrack()");const i=this._senderMap.get(e)||new Map;let s=i.get(t);if(!s)s=this._pc.addTrack(e,t),i.set(t,s),this._senderMap.set(e,i),this._needsNegotiation();else throw s.removed?st(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."),"ERR_SENDER_REMOVED"):st(new Error("Track has already been added to that stream."),"ERR_SENDER_ALREADY_ADDED")}replaceTrack(e,t,i){if(this._destroying)return;if(this.destroyed)throw st(new Error("cannot replaceTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("replaceTrack()");const s=this._senderMap.get(e),r=s?s.get(i):null;if(!r)throw st(new Error("Cannot replace track that was never added."),"ERR_TRACK_NOT_ADDED");t&&this._senderMap.set(t,s),r.replaceTrack!=null?r.replaceTrack(t):this.__destroy(st(new Error("replaceTrack is not supported in this browser"),"ERR_UNSUPPORTED_REPLACETRACK"))}removeTrack(e,t){if(this._destroying)return;if(this.destroyed)throw st(new Error("cannot removeTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSender()");const i=this._senderMap.get(e),s=i?i.get(t):null;if(!s)throw st(new Error("Cannot remove track that was never added."),"ERR_TRACK_NOT_ADDED");try{s.removed=!0,this._pc.removeTrack(s)}catch(r){r.name==="NS_ERROR_UNEXPECTED"?this._sendersAwaitingStable.push(s):this.__destroy(st(r,"ERR_REMOVE_TRACK"))}this._needsNegotiation()}removeStream(e){if(!this._destroying){if(this.destroyed)throw st(new Error("cannot removeStream after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSenders()"),e.getTracks().forEach(t=>{this.removeTrack(t,e)})}}_requestMissingTransceivers(){this._pc.getTransceivers&&this._pc.getTransceivers().forEach(e=>{!e.mid&&e.sender.track&&!e.requested&&(e.requested=!0,this.addTransceiver(e.sender.track.kind))})}_onTrack(e){this.destroyed||e.streams.forEach(t=>{this._debug("on track"),this.emit("track",e.track,t),this._remoteTracks.push({track:e.track,stream:t}),!this._remoteStreams.some(i=>i.id===t.id)&&(this._remoteStreams.push(t),queueMicrotask(()=>{this._debug("on stream"),this.emit("stream",t)}))})}}const Qh="data",ed="signal",td=(n,e)=>{const t=new zS({iceServers:[{urls:VS}],...e,initiator:n,trickle:!1}),i=r=>s.push(r);let s=[];return t.on(Qh,i),{id:t._id,created:Date.now(),connection:t._pc,get channel(){return t._channel},get isDead(){return t.destroyed},signal:r=>new Promise(a=>{n||t.on(ed,a),t.signal(r)}),sendData:r=>t.send(r),destroy:()=>t.destroy(),setHandlers:r=>Object.entries(r).forEach(([a,o])=>t.on(a,o)),offerPromise:n?new Promise(r=>t.on(ed,r)):Promise.resolve(),addStream:r=>t.addStream(r),removeStream:r=>t.removeStream(r),addTrack:(r,a)=>t.addTrack(r,a),removeTrack:(r,a)=>t.removeTrack(r,a),replaceTrack:(r,a,o)=>t.replaceTrack(r,a,o),drainEarlyData:r=>{t.off(Qh,i),s.forEach(r),s=null}}},VS=[...Ys(5,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:global.stun.twilio.com:3478"],GS=Object.getPrototypeOf(Uint8Array),qr=12,Iu=0,Yr=Iu+qr,jr=Yr+1,Os=jr+1,ks=Os+1,fi=16*2**10-ks,Fr=255,nd="bufferedamountlow",Qi=n=>"@_"+n,HS=(n,e,t)=>{const i={},s={},r={},a={},o={},l={},c={},h={onPeerJoin:gi,onPeerLeave:gi,onPeerStream:gi,onPeerTrack:gi},d=(D,C)=>(D?Array.isArray(D)?D:[D]:Zv(i)).flatMap(I=>{const N=i[I];return N?C(I,N):(console.warn(`${qs}: no peer with id ${I} found`),[])}),u=D=>{i[D]&&(delete i[D],delete a[D],delete o[D],h.onPeerLeave(D),e(D))},f=D=>{if(s[D])return r[D];if(!D)throw Fn("action type argument is required");const C=wi(D);if(C.byteLength>qr)throw Fn(`action type string "${D}" (${C.byteLength}b) exceeds byte limit (${qr}). Hint: choose a shorter name.`);const I=new Uint8Array(qr);I.set(C);let N=0;return s[D]={onComplete:gi,onProgress:gi,setOnComplete:F=>s[D]={...s[D],onComplete:F},setOnProgress:F=>s[D]={...s[D],onProgress:F},send:async(F,U,z,K)=>{if(z&&typeof z!="object")throw Fn("action meta argument must be an object");const H=typeof F;if(H==="undefined")throw Fn("action data cannot be undefined");const Q=H!=="string",te=F instanceof Blob,de=te||F instanceof ArrayBuffer||F instanceof GS;if(z&&!de)throw Fn("action meta argument can only be used with binary data");const ye=de?new Uint8Array(te?await F.arrayBuffer():F):wi(Q?Xn(F):F),_e=z?wi(Xn(z)):null,q=Math.ceil(ye.byteLength/fi)+(z?1:0)||1,Z=Ys(q,(ie,he)=>{const se=he===q-1,Te=z&&he===0,Ge=new Uint8Array(ks+(Te?_e.byteLength:se?ye.byteLength-fi*(q-(z?2:1)):fi));return Ge.set(I),Ge.set([N],Yr),Ge.set([se|Te<<1|de<<2|Q<<3],jr),Ge.set([Math.round((he+1)/q*Fr)],Os),Ge.set(z?Te?_e:ye.subarray((he-1)*fi,he*fi):ye.subarray(he*fi,(he+1)*fi),ks),Ge});return N=N+1&Fr,ts(d(U,async(ie,he)=>{const{channel:se}=he;let Te=0;for(;Te<q;){const Ge=Z[Te];if(se.bufferedAmount>se.bufferedAmountLowThreshold&&await new Promise(Pe=>{const Fe=()=>{se.removeEventListener(nd,Fe),Pe()};se.addEventListener(nd,Fe)}),!i[ie])break;he.sendData(Ge),Te++,K==null||K(Ge[Os]/Fr,ie,z)}}))}},r[D]||(r[D]=[s[D].send,s[D].setOnComplete,s[D].setOnProgress])},g=(D,C)=>{var q,Z;const I=new Uint8Array(C),N=Xr(I.subarray(Iu,Yr)).replaceAll("\0",""),[F]=I.subarray(Yr,jr),[U]=I.subarray(jr,Os),[z]=I.subarray(Os,ks),K=I.subarray(ks),H=!!(U&1),Q=!!(U&2),te=!!(U&4),de=!!(U&8);if(!s[N]){console.warn(`${qs}: received message with unregistered type (${N})`);return}a[D]||(a[D]={}),(q=a[D])[N]||(q[N]={});const ye=(Z=a[D][N])[F]||(Z[F]={chunks:[]});if(Q?ye.meta=oa(Xr(K)):ye.chunks.push(K),s[N].onProgress(z/Fr,D,ye.meta),!H)return;const _e=new Uint8Array(ye.chunks.reduce((ie,he)=>ie+he.byteLength,0));if(ye.chunks.reduce((ie,he)=>(_e.set(he,ie),ie+he.byteLength),0),delete a[D][N][F],te)s[N].onComplete(_e,D,ye.meta);else{const ie=Xr(_e);s[N].onComplete(de?oa(ie):ie,D)}},_=async()=>{await b(""),await new Promise(D=>setTimeout(D,99)),Ah(i).forEach(([D,C])=>{C.destroy(),delete i[D]}),t()},[m,p]=f(Qi("ping")),[T,R]=f(Qi("pong")),[S,x]=f(Qi("signal")),[M,L]=f(Qi("stream")),[O,y]=f(Qi("track")),[b,B]=f(Qi("leave"));return n((D,C)=>{var I;i[C]||(i[C]=D,D.setHandlers({data:N=>g(C,N),stream:N=>{h.onPeerStream(N,C,l[C]),delete l[C]},track:(N,F)=>{h.onPeerTrack(N,F,C,c[C]),delete c[C]},signal:N=>S(N,C),close:()=>u(C),error:()=>u(C)}),h.onPeerJoin(C),(I=D.drainEarlyData)==null||I.call(D,N=>g(C,N)))}),p((D,C)=>T("",C)),R((D,C)=>{var I;(I=o[C])==null||I.call(o),delete o[C]}),x((D,C)=>{var I;return(I=i[C])==null?void 0:I.signal(D)}),L((D,C)=>l[C]=D),y((D,C)=>c[C]=D),B((D,C)=>u(C)),cc&&addEventListener("beforeunload",_),{makeAction:f,leave:_,ping:async D=>{if(!D)throw Fn("ping() must be called with target peer ID");const C=Date.now();return m("",D),await new Promise(I=>o[D]=I),Date.now()-C},getPeers:()=>Kv(Ah(i).map(([D,C])=>[D,C.connection])),addStream:(D,C,I)=>d(C,async(N,F)=>{I&&await M(I,N),F.addStream(D)}),removeStream:(D,C)=>d(C,(I,N)=>N.removeStream(D)),addTrack:(D,C,I,N)=>d(I,async(F,U)=>{N&&await O(N,F),U.addTrack(D,C)}),removeTrack:(D,C,I)=>d(I,(N,F)=>F.removeTrack(D,C)),replaceTrack:(D,C,I,N,F)=>d(N,async(U,z)=>{F&&await O(F,U),z.replaceTrack(D,C,I)}),onPeerJoin:D=>h.onPeerJoin=D,onPeerLeave:D=>h.onPeerLeave=D,onPeerStream:D=>h.onPeerStream=D,onPeerTrack:D=>h.onPeerTrack=D}},WS=20,XS=5333,id=57333,qS=({init:n,subscribe:e,announce:t})=>{const i={};let s=!1,r,a,o;return(l,c,h)=>{var F;const{appId:d}=l;if((F=i[d])!=null&&F[c])return i[d][c];const u={},f={},g=Lr(qs,d,c),_=Ir(g),m=Ir(Lr(g,es)),p=rS(l.password||"",d,c),T=U=>async z=>({type:z.type,sdp:await U(p,z.sdp)}),R=T(oS),S=T(aS),x=()=>td(!0,l.rtcConfig),M=(U,z,K)=>{var H;if(f[z]){f[z]!==U&&U.destroy();return}f[z]=U,N(U,z),(H=u[z])==null||H.forEach((Q,te)=>{te!==K&&Q.destroy()}),delete u[z]},L=(U,z)=>{f[z]===U&&delete f[z]},O=(U,z)=>{var H;if(f[U])return;const K=(H=u[U])==null?void 0:H[z];K&&(delete u[U][z],K.destroy())},y=U=>(a.push(...Ys(U,x)),ts(a.splice(0,U).map(z=>z.offerPromise.then(S).then(K=>({peer:z,offer:K}))))),b=(U,z)=>h==null?void 0:h({error:`incorrect password (${l.password}) when decrypting ${z}`,appId:d,peerId:U,roomId:c}),B=U=>async(z,K,H)=>{var Z,ie,he;const[Q,te]=await ts([_,m]);if(z!==Q&&z!==te)return;const{peerId:de,offer:ye,answer:_e,peer:q}=typeof K=="string"?oa(K):K;if(!(de===es||f[de])){if(de&&!ye&&!_e){if((Z=u[de])!=null&&Z[U])return;const[[{peer:se,offer:Te}],Ge]=await ts([y(1),Ir(Lr(g,de))]);u[de]||(u[de]=[]),u[de][U]=se,setTimeout(()=>O(de,U),D[U]*.9),se.setHandlers({connect:()=>M(se,de,U),close:()=>L(se,de)}),H(Ge,Xn({peerId:es,offer:Te}))}else if(ye){if(((ie=u[de])==null?void 0:ie[U])&&es>de)return;const Te=td(!1,l.rtcConfig);Te.setHandlers({connect:()=>M(Te,de,U),close:()=>L(Te,de)});let Ge;try{Ge=await R(ye)}catch{b(de,"offer");return}if(Te.isDead)return;const[Pe,Fe]=await ts([Ir(Lr(g,de)),Te.signal(Ge)]);H(Pe,Xn({peerId:es,answer:await S(Fe)}))}else if(_e){let se;try{se=await R(_e)}catch{b(de,"answer");return}if(q)q.setHandlers({connect:()=>M(q,de,U),close:()=>L(q,de)}),q.signal(se);else{const Te=(he=u[de])==null?void 0:he[U];Te&&!Te.isDead&&Te.signal(se)}}}};if(!l)throw Fn("requires a config map as the first argument");if(!d&&!l.firebaseApp)throw Fn("config map is missing appId field");if(!c)throw Fn("roomId argument required");if(!s){const U=n(l);a=Ys(WS,x),r=Array.isArray(U)?U:[U],s=!0,o=setInterval(()=>a=a.filter(z=>{const K=Date.now()-z.created<id;return K||z.destroy(),K}),id*1.03)}const D=r.map(()=>XS),C=[],I=r.map(async(U,z)=>e(await U,await _,await m,B(z),y));ts([_,m]).then(([U,z])=>{const K=async(H,Q)=>{const te=await t(H,U,z);typeof te=="number"&&(D[Q]=te),C[Q]=setTimeout(()=>K(H,Q),D[Q])};I.forEach(async(H,Q)=>{await H,K(await r[Q],Q)})});let N=gi;return i[d]||(i[d]={}),i[d][c]=HS(U=>N=U,U=>delete f[U],()=>{delete i[d][c],C.forEach(clearTimeout),I.forEach(async U=>(await U)()),clearInterval(o)})}},YS=5,Du="x",Nu="EVENT",Uu=cc&&lc.utils.randomPrivateKey(),jS=cc&&Ol(lc.getPublicKey(Uu)),dc={},pi={},sd={},Fu=()=>Math.floor(Date.now()/1e3),Ou=n=>sd[n]??(sd[n]=Au(n,1e4)+2e4),rd=async(n,e)=>{const t={kind:Ou(n),content:e,pubkey:jS,created_at:Fu(),tags:[[Du,n]]},i=Ol(new Uint8Array(await crypto.subtle.digest("SHA-256",wi(Xn([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])))));return Xn([Nu,{...t,id:i,sig:Ol(await lc.sign(i,Uu))}])},ad=(n,e)=>(dc[n]=e,Xn(["REQ",n,{kinds:[Ou(e)],since:Fu(),["#"+Du]:[e]}])),od=n=>(delete dc[n],Xn(["CLOSE",n])),$S=qS({init:n=>tS(n,KS,YS).map(e=>{const t=nS(e,i=>{var l;const[s,r,a,o]=oa(i);if(s!==Nu){const c=`${qs}: relay failure from ${t.url} - `;s==="NOTICE"?console.warn(c+r):s==="OK"&&!a&&console.warn(c+o);return}(l=pi[r])==null||l.call(pi,dc[r],a.content)});return t.ready}),subscribe:(n,e,t,i)=>{const s=Fl(64),r=Fl(64);return pi[s]=pi[r]=(a,o)=>i(a,o,async(l,c)=>n.send(await rd(l,c))),n.send(ad(s,e)),n.send(ad(r,t)),()=>{n.send(od(s)),n.send(od(r)),delete pi[s],delete pi[r]}},announce:async(n,e)=>n.send(await rd(e,Xn({peerId:es})))}),KS=["eu.purplerelay.com","ftp.halifax.rwth-aachen.de/nostr","longhorn.bgp.rodeo","multiplexer.huszonegy.world","nfdb.noswhere.com","nostr-verified.wellorder.net","nostr.cool110.xyz","nostr.data.haus","nostr.grooveix.com","nostr.huszonegy.world","nostr.mom","nostr.openhoofd.nl","nostr.petrkr.net/strfry","nostr.sathoarder.com","nostr.stakey.net","nostr.vulpem.com","nostr2.sanhauf.com","nostrelay.circum.space","relay.fountain.fm","relay.nostraddress.com","relay.nostromo.social","relay.snort.social","relay.verified-nostr.com","strfry.openhoofd.nl","yabu.me/v2"].map(n=>"wss://"+n);class ZS{constructor(e,t,i="P2",s="#00f5ff"){this.scene=e,this.peerId=t,this.tag=(i||"P2").slice(0,5).toUpperCase(),this.colorHex=s,this.colorNum=parseInt(s.replace("#","0x"),16)||62975,this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetPosition=new Y(0,0,7.5),this.targetRotation=Math.PI,this.isMoving=!1,this.walkCycle=0,this.statusText="ONLINE",this.lastActiveTime=Date.now(),this.createAvatarMesh(),this.createNameTagSprite(),this.createSpeechBubbleSprite()}createAvatarMesh(){this.group=new bn,this.group.position.set(this.x,this.y,this.z);const e=new Zt(.38,.32,.8,16),t=new wt({color:this.colorNum,roughness:.3,metalness:.3,emissive:this.colorNum,emissiveIntensity:.15});this.torso=new Ce(e,t),this.torso.position.y=.85,this.group.add(this.torso);const i=new gt(.04,.78,.05),s=new vt({color:16777215}),r=new Ce(i,s);r.position.set(0,.85,.35),this.group.add(r);const a=new Ai(.42,24,24),o=new wt({color:1711406,roughness:.2,metalness:.8});this.helmet=new Ce(a,o),this.helmet.position.y=1.6,this.group.add(this.helmet);const l=new Ai(.36,24,16,0,Math.PI*2,0,Math.PI*.45),c=new wt({color:this.colorNum,roughness:.1,metalness:.9,emissive:this.colorNum,emissiveIntensity:.3}),h=new Ce(l,c);h.rotation.x=Math.PI*.5,h.position.set(0,1.6,.12),this.group.add(h);const d=new Zt(.12,.1,.65,12),u=new wt({color:658454,roughness:.5});this.leftLeg=new Ce(d,u),this.leftLeg.position.set(-.18,.35,0),this.group.add(this.leftLeg),this.rightLeg=new Ce(d,u),this.rightLeg.position.set(.18,.35,0),this.group.add(this.rightLeg);const f=new gt(.18,.16,.28),g=new wt({color:this.colorNum,roughness:.3}),_=new Ce(f,g);_.position.set(0,-.28,.05),this.leftLeg.add(_);const m=new Ce(f,g);m.position.set(0,-.28,.05),this.rightLeg.add(m);const p=new ca(.55,16),T=new vt({color:0,transparent:!0,opacity:.4}),R=new Ce(p,T);R.rotation.x=-Math.PI*.5,R.position.y=.02,this.group.add(R),this.scene.add(this.group)}createNameTagSprite(){const e=document.createElement("canvas");e.width=320,e.height=110,this.nameCanvas=e,this.nameCtx=e.getContext("2d"),this.renderNameTagCanvas();const t=new an(e);t.minFilter=St,t.magFilter=St,this.nameTexture=t;const i=new ds({map:t,transparent:!0,depthTest:!1});this.nameSprite=new Ws(i),this.nameSprite.position.set(0,2.35,0),this.nameSprite.scale.set(1.6,.55,1),this.group.add(this.nameSprite)}renderNameTagCanvas(){const e=this.nameCtx,t=this.nameCanvas.width,i=this.nameCanvas.height;e.clearRect(0,0,t,i),e.fillStyle="rgba(8, 9, 16, 0.88)",e.strokeStyle=this.colorHex,e.lineWidth=4;const s=24;e.beginPath(),e.roundRect(10,10,t-20,i-20,s),e.fill(),e.stroke(),e.font='bold 36px "Press Start 2P", monospace, sans-serif',e.fillStyle="#ffd32a",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffd32a",e.shadowBlur=8,e.fillText(this.tag,t/2,42),e.shadowBlur=0,e.font='bold 16px "Outfit", sans-serif',e.fillStyle=this.colorHex,e.fillText(this.statusText,t/2,78),this.nameTexture&&(this.nameTexture.needsUpdate=!0)}createSpeechBubbleSprite(){const e=document.createElement("canvas");e.width=384,e.height=140,this.bubbleCanvas=e,this.bubbleCtx=e.getContext("2d"),this.bubbleTexture=new an(e),this.bubbleTexture.minFilter=St;const t=new ds({map:this.bubbleTexture,transparent:!0,depthTest:!1});this.speechSprite=new Ws(t),this.speechSprite.position.set(0,3.1,0),this.speechSprite.scale.set(2.2,.8,1),this.speechSprite.visible=!1,this.speechTimer=0,this.group.add(this.speechSprite)}showSpeechBubble(e){if(!e||!this.speechSprite)return;const t=this.bubbleCtx,i=this.bubbleCanvas.width,s=this.bubbleCanvas.height;t.clearRect(0,0,i,s),t.fillStyle="rgba(8, 12, 28, 0.94)",t.strokeStyle=this.colorHex||"#00f5ff",t.lineWidth=4,t.beginPath(),t.roundRect(10,10,i-20,s-36,18),t.fill(),t.stroke(),t.beginPath(),t.moveTo(i/2-14,s-26),t.lineTo(i/2,s-6),t.lineTo(i/2+14,s-26),t.closePath(),t.fill(),t.stroke(),t.fillStyle="rgba(8, 12, 28, 0.94)",t.fillRect(i/2-12,s-28,24,6),t.fillStyle="#ffffff",t.font='bold 22px "Outfit", "Segoe UI", sans-serif',t.textAlign="center",t.textBaseline="middle";const r=22,a=e.trim();if(a.length<=r)t.fillText(a,i/2,(s-36)/2+10);else{let o=a.lastIndexOf(" ",r);(o===-1||o<8)&&(o=r);const l=a.substring(0,o).trim(),c=a.substring(o,o+r).trim();t.fillText(l,i/2,34),t.fillText(c+(a.length>o+r?"...":""),i/2,64)}this.bubbleTexture.needsUpdate=!0,this.speechSprite.visible=!0,this.speechTimer=5}setTelemetry(e,t,i,s,r=0){this.targetPosition.set(e,r,t),this.targetRotation=i,this.isMoving=!!s,this.lastActiveTime=Date.now()}setActivity(e){this.statusText=e.slice(0,14).toUpperCase(),this.renderNameTagCanvas()}update(e,t){if(!this.group)return;const i=Math.min(1,1-Math.exp(-14*e));this.group.position.lerp(this.targetPosition,i);let s=this.targetRotation-this.group.rotation.y;for(;s<-Math.PI;)s+=Math.PI*2;for(;s>Math.PI;)s-=Math.PI*2;if(this.group.rotation.y+=s*i,this.isMoving){this.walkCycle+=e*10;const r=Math.sin(this.walkCycle)*.45;this.leftLeg.rotation.x=r,this.rightLeg.rotation.x=-r,this.torso.position.y=.85+Math.abs(Math.sin(this.walkCycle*2))*.04,this.helmet.position.y=1.6+Math.abs(Math.sin(this.walkCycle*2))*.04}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.torso.position.y=.85,this.helmet.position.y=1.6;this.nameSprite&&t&&this.nameSprite.quaternion.copy(t.quaternion),this.speechSprite&&this.speechSprite.visible&&(t&&this.speechSprite.quaternion.copy(t.quaternion),this.speechTimer-=e,this.speechTimer<=0&&(this.speechSprite.visible=!1))}dispose(){this.group&&this.scene&&(this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))}}class JS{constructor(e,t,i){this.scene=e,this.identity=t,this.scoreTicker=i,this.peers=new Map,this.room=null,this.posAction=null,this.idAction=null,this.actAction=null,this.scoreAction=null,this.chatAction=null,this.frameAction=null,this.onCabinetOccupancyChange=null,this.activeLocalStream=null,this.activeStreamingGameId=null,this.activeRemoteStreams=new Map,this.onRemoteGameStream=null,this.onRemoteGameStreamEnded=null,this.onRemoteGameFrame=null,this.onRemoteGameFrameEnded=null,this.lastSentFrameTime=0,this.lastBroadcastTime=0,this.lastSentX=null,this.lastSentY=null,this.lastSentZ=null,this.lastSentRot=null,this.lastSentMoving=null,this.heartbeatTimer=null,this.hudEl=null,this.createHud(),this.connect()}createHud(){let e=document.getElementById("mp-network-hud");e&&e.remove();const t=document.getElementById("mp-hud-mount");if(t){t.innerHTML=`
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
    `,document.body.appendChild(e),this.hudEl=e}updateHudCount(){const e=document.getElementById("mp-count-text");if(e){const t=this.peers.size+1;e.textContent=`${t}/10 ONLINE`}}connect(){try{const e={appId:"nopex-arcade-webrtc-v1",relayUrls:["wss://nos.lol","wss://relay.damus.io","wss://relay.primal.net","wss://purplerelay.com"],rtcConfig:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}},t="nopex-main-hub";this.room=$S(e,t);const i=s=>{if(!s)return null;if(!Array.isArray(s))return s;const[r,a]=s;return{send(o,l){const c=(l==null?void 0:l.target)||null;return r(o,c)},set onMessage(o){typeof a=="function"&&a((l,c)=>{o(l,{peerId:c})})}}};this.posAction=i(this.room.makeAction("pos")),this.idAction=i(this.room.makeAction("id")),this.actAction=i(this.room.makeAction("act")),this.scoreAction=i(this.room.makeAction("score")),this.chatAction=i(this.room.makeAction("chat")),this.frameAction=i(this.room.makeAction("vframe")),this.room.onPeerJoin=s=>{if(console.log(`[WebRTC] Peer connected: ${s}`),this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:s}),this.activeStreamingGameId&&this.actAction&&this.actAction.send({status:"PLAYING",gameId:this.activeStreamingGameId,playing:!0,tag:this.identity?this.identity.tag:"PILOTO",isLiveStream:!0},{target:s}),this.activeLocalStream&&this.room.addStream)try{this.room.addStream(this.activeLocalStream,s,{type:"GAMEPLAY",gameId:this.activeStreamingGameId,pilotTag:this.identity?this.identity.tag:"P1"})}catch(r){console.warn("[Watch Party] addStream error on peer join:",r)}this.updateHudCount()},this.room.onPeerLeave=s=>{console.log(`[WebRTC] Peer disconnected: ${s}`);const r=this.peers.get(s);r&&(r.dispose(),this.peers.delete(s));for(const[a,o]of this.activeRemoteStreams.entries())o.peerId===s&&(this.activeRemoteStreams.delete(a),this.onRemoteGameStreamEnded&&this.onRemoteGameStreamEnded(a,s));this.onRemoteGameFrameEnded&&this.onRemoteGameFrameEnded(null,s),this.onCabinetOccupancyChange&&this.onCabinetOccupancyChange(s,null,null,!1),this.updateHudCount()},this.room.onPeerStream=(s,r,a)=>{var c;console.log(`[Watch Party] Received remote stream from peer ${r}:`,a);const o=a==null?void 0:a.gameId,l=(a==null?void 0:a.pilotTag)||((c=this.peers.get(r))==null?void 0:c.tag)||"PILOTO";o&&s&&(this.activeRemoteStreams.set(o,{peerId:r,pilotTag:l,stream:s}),this.onRemoteGameStream&&this.onRemoteGameStream(o,l,s,r))},this.room.onPeerTrack=(s,r,a,o)=>{var h;console.log(`[Watch Party] Received remote track from peer ${a}:`,s.kind,o);const l=o==null?void 0:o.gameId,c=(o==null?void 0:o.pilotTag)||((h=this.peers.get(a))==null?void 0:h.tag)||"PILOTO";l&&r&&(this.activeRemoteStreams.set(l,{peerId:a,pilotTag:c,stream:r}),this.onRemoteGameStream&&this.onRemoteGameStream(l,c,r,a))},this.idAction.onMessage=(s,{peerId:r})=>{if(!(!s||!s.tag))if(this.peers.has(r)){const a=this.peers.get(r);(a.tag!==s.tag||a.colorHex!==s.colorHex)&&(a.tag=s.tag.slice(0,5).toUpperCase(),a.colorHex=s.colorHex||"#00f5ff",a.renderNameTagCanvas())}else{if(this.peers.size>=9)return;const a=new ZS(this.scene,r,s.tag,s.colorHex);this.peers.set(r,a),this.updateHudCount(),this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:r})}},this.posAction.onMessage=(s,{peerId:r})=>{if(!s)return;const a=this.peers.get(r);a?a.setTelemetry(s.x,s.z,s.r,s.m,s.y||0):this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:r})},this.actAction.onMessage=(s,{peerId:r})=>{if(!s)return;const a=this.peers.get(r);if(a&&a.setActivity(s.status||"ONLINE"),this.onCabinetOccupancyChange){const o=a&&a.tag||s.tag||"P2";this.onCabinetOccupancyChange(r,o,s.gameId,!!s.playing,!!s.isLiveStream)}!s.playing&&s.gameId&&(this.activeRemoteStreams.has(s.gameId)&&(this.activeRemoteStreams.delete(s.gameId),this.onRemoteGameStreamEnded&&this.onRemoteGameStreamEnded(s.gameId,r)),this.onRemoteGameFrameEnded&&this.onRemoteGameFrameEnded(s.gameId,r))},this.frameAction.onMessage=(s,{peerId:r})=>{var l;if(!s||!s.g)return;const a=s.g,o=s.t||((l=this.peers.get(r))==null?void 0:l.tag)||"PILOTO";if(s.end){this.onRemoteGameFrameEnded&&this.onRemoteGameFrameEnded(a,r);return}s.f&&this.onRemoteGameFrame&&this.onRemoteGameFrame(a,o,s.f,r)},this.scoreAction.onMessage=s=>{s&&this.scoreTicker&&this.scoreTicker.showRecord(s.player,s.game,s.score)},this.chatAction.onMessage=(s,{peerId:r})=>{if(!s||!s.text)return;const a=this.peers.get(r),o=s.tag||(a?a.tag:"P2"),l=s.colorHex||(a?a.colorHex:"#00f5ff");a&&a.showSpeechBubble(s.text),window.dispatchEvent(new CustomEvent("arcade-chat-received",{detail:{peerId:r,tag:o,text:s.text,colorHex:l}}))},this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>{this.idAction&&this.identity&&this.broadcastIdentity()},2500)}catch(e){console.warn("[WebRTC] Connection failed, operating in offline hub mode:",e)}}broadcastIdentity(){!this.idAction||!this.identity||this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex})}broadcastLocalPosition(e,t,i,s,r=0){if(!this.posAction)return;const a=performance.now();if(a-this.lastBroadcastTime<50)return;const o=this.lastSentX!==null?Math.abs(e-this.lastSentX):999,l=this.lastSentY!==null?Math.abs(r-this.lastSentY):999,c=this.lastSentZ!==null?Math.abs(t-this.lastSentZ):999,h=this.lastSentRot!==null?Math.abs(i-this.lastSentRot):999,d=s!==this.lastSentMoving;o<.02&&l<.02&&c<.02&&h<.03&&!d&&a-this.lastBroadcastTime<1500||(this.lastBroadcastTime=a,this.lastSentX=e,this.lastSentY=r,this.lastSentZ=t,this.lastSentRot=i,this.lastSentMoving=s,this.posAction.send({x:Math.round(e*100)/100,y:Math.round(r*100)/100,z:Math.round(t*100)/100,r:Math.round(i*100)/100,m:!!s}))}broadcastActivity(e){this.actAction&&this.actAction.send({status:e})}broadcastPlayingGame(e,t){this.actAction&&this.actAction.send({status:t?"PLAYING":"ONLINE",gameId:e||null,playing:!!t,tag:this.identity?this.identity.tag:"P1"})}startBroadcastingGame(e,t){if(!e)return;this.activeLocalStream=e,this.activeStreamingGameId=t;const i=this.identity?this.identity.tag:"PILOTO";if(this.room&&typeof this.room.addStream=="function")try{this.room.addStream(e,null,{type:"GAMEPLAY",gameId:t,pilotTag:i})}catch(s){console.warn("[Watch Party] room.addStream error:",s)}this.actAction&&this.actAction.send({status:"PLAYING",gameId:t,playing:!0,tag:i,isLiveStream:!0})}broadcastLiveFrame(e,t){if(!this.frameAction||!t)return;const i=performance.now();if(i-this.lastSentFrameTime<80)return;this.lastSentFrameTime=i,this.activeStreamingGameId=e;const s=this.identity?this.identity.tag:"PILOTO";this.frameAction.send({g:e,t:s,f:t})}stopBroadcastingGame(){const e=this.activeStreamingGameId;if(this.activeLocalStream&&this.room&&typeof this.room.removeStream=="function")try{this.room.removeStream(this.activeLocalStream)}catch(t){console.warn("[Watch Party] room.removeStream error:",t)}this.activeLocalStream=null,this.activeStreamingGameId=null,this.frameAction&&e&&this.frameAction.send({g:e,end:!0}),this.actAction&&e&&this.actAction.send({status:"ONLINE",gameId:e,playing:!1,tag:this.identity?this.identity.tag:"PILOTO",isLiveStream:!1})}broadcastChat(e){!this.chatAction||!e||this.chatAction.send({text:e.slice(0,140),tag:this.identity?this.identity.tag:"P1",colorHex:this.identity?this.identity.colorHex:"#00f5ff"})}broadcastHighScore(e,t){this.scoreAction&&(this.scoreAction.send({player:this.identity.tag,game:e,score:t,time:Date.now()}),this.scoreTicker&&this.scoreTicker.showRecord(this.identity.tag,e,t))}update(e,t){this.peers.forEach(i=>{i.update(e,t)})}}class QS{constructor(){this.modalEl=document.getElementById("arcade-jukebox-modal"),this.isOpen=!1,this.selectedArtistId="all",this.showLyrics=!1,this.renderSkeleton(),this.bindEvents(),tt.subscribe(e=>this.onMusicStateUpdate(e))}renderSkeleton(){this.modalEl&&(this.modalEl.innerHTML=`
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
    `,this.initCanvasVisualizer())}initCanvasVisualizer(){if(this.canvas=document.getElementById("dock-canvas"),!this.canvas)return;this.ctx=this.canvas.getContext("2d"),this.freqData=new Uint8Array(16);const e=()=>{if(this.isOpen&&this.ctx){this.ctx.clearRect(0,0,60,24),tt.getFrequencyData(this.freqData);for(let t=0;t<8;t++){const i=this.freqData[t]/255,s=Math.max(3,i*22);this.ctx.fillStyle=t%2===0?"#00f5ff":"#ff007f",this.ctx.fillRect(t*7+2,24-s,5,s)}}requestAnimationFrame(e)};requestAnimationFrame(e)}bindEvents(){const e=document.getElementById("jukebox-close-btn"),t=document.getElementById("jukebox-backdrop"),i=document.getElementById("dock-play"),s=document.getElementById("dock-prev"),r=document.getElementById("dock-next"),a=document.getElementById("dock-vol-slider"),o=document.getElementById("dock-lyrics-toggle"),l=document.getElementById("lyrics-close-btn");e&&e.addEventListener("click",()=>this.close()),t&&t.addEventListener("click",()=>this.close()),i&&i.addEventListener("click",()=>tt.togglePlay()),s&&s.addEventListener("click",()=>tt.prev()),r&&r.addEventListener("click",()=>tt.next()),a&&a.addEventListener("input",c=>{tt.setVolume(parseFloat(c.target.value))}),o&&o.addEventListener("click",()=>{this.showLyrics=!this.showLyrics,this.updateLyricsPanel()}),l&&l.addEventListener("click",()=>{this.showLyrics=!1,this.updateLyricsPanel()}),window.addEventListener("keydown",c=>{this.isOpen&&(c.key==="Escape"?(c.preventDefault(),this.close()):c.code==="Space"&&c.target.tagName!=="INPUT"&&(c.preventDefault(),tt.togglePlay()))})}open(){this.isOpen=!0,this.modalEl&&(this.modalEl.style.display="flex",setTimeout(()=>this.modalEl.classList.add("active"),10)),this.populateTabs(),this.renderTracks(),this.onMusicStateUpdate({isPlaying:tt.isPlaying,currentTrack:tt.getCurrentTrack(),currentTime:tt.currentTrackTime,duration:tt.getCurrentTrack()&&tt.getCurrentTrack().durationSec||140})}close(){this.isOpen=!1,this.modalEl&&(this.modalEl.classList.remove("active"),setTimeout(()=>{this.modalEl.style.display="none"},250))}populateTabs(){const e=document.getElementById("jukebox-artist-tabs");if(!e||!tt.artists.length)return;let t=`<button class="juke-tab ${this.selectedArtistId==="all"?"active":""}" data-artist="all">🎵 Todas as Músicas</button>`;tt.artists.forEach(i=>{const s=this.selectedArtistId===i.id?"active":"";t+=`
        <button class="juke-tab ${s}" data-artist="${i.id}">
          <img src="${i.avatar}" class="tab-avatar" alt="" onerror="this.style.display='none'" />
          ${i.name}
        </button>
      `}),e.innerHTML=t,e.querySelectorAll(".juke-tab").forEach(i=>{i.addEventListener("click",s=>{this.selectedArtistId=i.getAttribute("data-artist"),e.querySelectorAll(".juke-tab").forEach(r=>r.classList.remove("active")),i.classList.add("active"),this.renderTracks()})})}renderTracks(){const e=document.getElementById("jukebox-track-container");if(!e)return;const t=tt.tracks.filter(s=>this.selectedArtistId==="all"?!0:s.artistId===this.selectedArtistId);if(!t.length){e.innerHTML='<div class="juke-empty">Nenhuma faixa encontrada neste filtro.</div>';return}const i=tt.getCurrentTrack();e.innerHTML=t.map(s=>{const r=i&&i.id===s.id,a=r&&tt.isPlaying;return`
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
      `}).join(""),e.querySelectorAll(".juke-track-card").forEach(s=>{s.addEventListener("click",r=>{const a=s.getAttribute("data-id"),o=tt.tracks.findIndex(l=>l.id===a);o!==-1&&(tt.currentIndex===o&&tt.isPlaying?tt.togglePlay():tt.playTrack(o))})})}onMusicStateUpdate(e){const t=document.getElementById("dock-play"),i=document.getElementById("dock-cover"),s=document.getElementById("dock-title"),r=document.getElementById("dock-artist"),a=document.getElementById("dock-time-cur"),o=document.getElementById("dock-time-dur"),l=document.getElementById("dock-progress-bar");if(t&&(t.innerHTML=e.isPlaying?"⏸":"▶"),e.currentTrack&&(i&&(i.src=e.currentTrack.cover),s&&(s.textContent=e.currentTrack.title),r&&(r.textContent=`${e.currentTrack.artistName} • ${e.currentTrack.synthStyle||"AI Synth"}`)),a&&e.currentTime!==void 0&&(a.textContent=this.formatSeconds(e.currentTime)),o&&e.duration!==void 0&&(o.textContent=this.formatSeconds(e.duration)),l&&e.duration){const c=Math.min(100,e.currentTime/e.duration*100);l.style.width=`${c}%`}e.type==="state"&&(this.renderTracks(),this.updateLyricsPanel())}updateLyricsPanel(){const e=document.getElementById("jukebox-lyrics-panel"),t=document.getElementById("jukebox-lyrics-content");if(!e||!t)return;if(!this.showLyrics){e.style.display="none";return}e.style.display="flex";const i=tt.getCurrentTrack();i&&i.lyrics&&i.lyrics.length?t.innerHTML=i.lyrics.map(s=>`
        <div class="lyrics-line">
          <span class="lyrics-time">[${this.formatSeconds(s.time)}]</span>
          <span class="lyrics-text">${s.text}</span>
        </div>
      `).join(""):t.innerHTML='<div class="lyrics-empty">Nenhuma letra sincronizada para esta faixa instrumental.</div>'}formatSeconds(e){(isNaN(e)||e<0)&&(e=0);const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i<10?"0":""}${i}`}}class ex{constructor(e){this.onOpenJukeboxModal=e,this.hudContainer=document.getElementById("arcade-music-hud"),this.tickerEl=document.getElementById("music-hud-ticker"),this.playBtn=document.getElementById("music-hud-play"),this.prevBtn=document.getElementById("music-hud-prev"),this.nextBtn=document.getElementById("music-hud-next"),this.expandBtn=document.getElementById("music-hud-expand"),this.volBtn=document.getElementById("music-hud-vol"),this.bars=document.querySelectorAll(".hud-eq-bar"),this.isMuted=!1,this.prevVolume=.7,this.bindEvents(),tt.subscribe(t=>this.update(t))}bindEvents(){this.playBtn&&this.playBtn.addEventListener("click",e=>{e.stopPropagation(),tt.togglePlay()}),this.prevBtn&&this.prevBtn.addEventListener("click",e=>{e.stopPropagation(),tt.prev()}),this.nextBtn&&this.nextBtn.addEventListener("click",e=>{e.stopPropagation(),tt.next()}),this.expandBtn&&this.expandBtn.addEventListener("click",e=>{e.stopPropagation(),this.onOpenJukeboxModal&&this.onOpenJukeboxModal()}),this.tickerEl&&this.tickerEl.addEventListener("click",e=>{e.stopPropagation(),this.onOpenJukeboxModal&&this.onOpenJukeboxModal()}),this.volBtn&&this.volBtn.addEventListener("click",e=>{e.stopPropagation(),this.isMuted?(this.isMuted=!1,tt.setVolume(this.prevVolume||.7),this.volBtn.textContent="🔊"):(this.isMuted=!0,this.prevVolume=tt.volume,tt.setVolume(0),this.volBtn.textContent="🔇")})}update(e){if(this.playBtn&&(this.playBtn.innerHTML=e.isPlaying?"⏸":"▶",this.playBtn.setAttribute("title",e.isPlaying?"Pausar":"Tocar")),this.tickerEl&&e.currentTrack){const i=e.isProcedural?" [SYNTH AI]":"";this.tickerEl.innerHTML=`🎵 <strong>${e.currentTrack.artistName}</strong> — ${e.currentTrack.title}${i}`}const t=document.getElementById("music-hud-eq");t&&(e.isPlaying&&!e.isDucked?t.classList.add("dancing"):t.classList.remove("dancing"))}}class tx{constructor(e={}){this.onExit=e.onExit||null,this.onCheer=e.onCheer||null,this.isOpen=!1,this.activeCabinet=null,this.container=null,this.titleEl=null,this.pilotEl=null,this.countEl=null,this.cheerButtons=[],this.initDOM()}initDOM(){let e=document.getElementById("arcade-watch-hud");e||(e=document.createElement("div"),e.id="arcade-watch-hud",e.className="arcade-watch-hud",e.innerHTML=`
        <div class="watch-hud-topbar">
          <div class="watch-hud-live-badge">
            <span class="live-dot-pulse"></span>
            <span class="live-text">AO VIVO</span>
          </div>
          <div class="watch-hud-game-info">
            <span class="watch-hud-game-name" id="watch-hud-game-name">ARCADE GAME</span>
            <span class="watch-hud-divider">•</span>
            <span class="watch-hud-pilot" id="watch-hud-pilot">PILOTO: P1</span>
          </div>
          <div class="watch-hud-spectators" id="watch-hud-spectators">
            👁️ 1
          </div>
          <button class="watch-hud-exit-btn" id="watch-hud-exit-btn" title="Sair do Camarote (ESC / V)">
            <kbd class="kbd-neon">V</kbd>
            <span>SAIR DO CAMAROTE</span>
            <span class="exit-x">✕</span>
          </button>
        </div>

        <div class="watch-hud-bottombar">
          <div class="watch-hud-cheers-label">TORCIDA RÁPIDA:</div>
          <div class="watch-hud-cheers-dock">
            <button class="watch-cheer-btn" data-cheer="🔥 GG!">🔥 GG!</button>
            <button class="watch-cheer-btn" data-cheer="💥 BOA!">💥 BOA!</button>
            <button class="watch-cheer-btn" data-cheer="👏 MANDOU BEM!">👏 MANDOU BEM!</button>
            <button class="watch-cheer-btn" data-cheer="😱 CUIDADO!">😱 CUIDADO!</button>
            <button class="watch-cheer-btn" data-cheer="🪙 MAIS UMA FICHA!">🪙 MAIS UMA!</button>
          </div>
          <div class="watch-hud-hint">
            Pressione <kbd class="kbd-neon">ESC</kbd> ou <kbd class="kbd-neon">V</kbd> para voltar a andar
          </div>
        </div>
      `,document.body.appendChild(e)),this.container=e,this.titleEl=e.querySelector("#watch-hud-game-name"),this.pilotEl=e.querySelector("#watch-hud-pilot"),this.countEl=e.querySelector("#watch-hud-spectators"),this.exitBtn=e.querySelector("#watch-hud-exit-btn"),this.exitBtn&&this.exitBtn.addEventListener("click",i=>{i.stopPropagation(),this.onExit&&this.onExit()}),e.querySelectorAll(".watch-cheer-btn").forEach(i=>{i.addEventListener("click",s=>{s.stopPropagation();const r=i.getAttribute("data-cheer");r&&this.onCheer&&(this.onCheer(r),i.classList.add("cheer-popped"),setTimeout(()=>i.classList.remove("cheer-popped"),350))})})}show(e,t=1){var r,a;if(!this.container)return;this.isOpen=!0,this.activeCabinet=e;const i=((r=e==null?void 0:e.game)==null?void 0:r.name)||((a=e==null?void 0:e.game)==null?void 0:a.title)||"ARCADE CLASSIC",s=(e==null?void 0:e.liveStreamTag)||(e==null?void 0:e.occupiedBy)||"PILOTO";this.titleEl&&(this.titleEl.textContent=i.toUpperCase()),this.pilotEl&&(this.pilotEl.textContent=`PILOTO: ${s.toUpperCase()}`),this.countEl&&(this.countEl.innerHTML=`👁️ ${t}`),this.container.classList.add("active"),document.body.classList.add("arcade-spectating")}updateSpectators(e){this.countEl&&(this.countEl.innerHTML=`👁️ ${e}`)}hide(){this.container&&(this.isOpen=!1,this.activeCabinet=null,this.container.classList.remove("active"),document.body.classList.remove("arcade-spectating"))}}class nx{constructor(e,t,i=null){this.container=e,this.gamesManifest=t,this.identity=i,this.isRunning=!1,this.isZoomingIn=!1,this.zoomTarget=null,this.zoomProgress=0,this.isSpectating=!1,this.spectateTarget=null,this.watchHud=null,this.initPerformance(),this.initScene(),this.initWorld(),this.initPlayer(),this.initTokens(),this.initInteraction(),this.initOverlay(),this.initWatchHud(),this.initJukebox(),this.initNetwork(),this.initPointerLock(),this.initChatDock(),this.initMobileControls(),this.initTapToWalk(),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>{setTimeout(()=>this.onResize(),150)})}initScene(){this.scene=new jf,this.scene.background=new at(856619),this.scene.fog=new Jl(856619,40,95);const e=this.container.clientWidth||window.innerWidth||1280,t=this.container.clientHeight||window.innerHeight||720;this.camera=new $t(52,e/t,.1,200),this.camera.position.set(0,4.2,13.5),this.updateCameraProjection(e,t),this.renderer=new oy({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(this.calculateOptimalPixelRatio(e,t));const i=this.renderer.domElement;i.addEventListener("webglcontextlost",a=>{a.preventDefault(),console.warn("[Arcade3D] WebGL context lost! Safely reducing resolution budget..."),this.perfMode="ultra-perf",this.showPerformanceToast("⚡ Modo de Segurança: Resolução 3D ajustada para estabilidade.")}),i.addEventListener("webglcontextrestored",()=>{console.log("[Arcade3D] WebGL context restored."),this.onResize()}),this.container.appendChild(i),this.clock=new hp,this.raycaster=new dp;const s=new ri(.5,.75,32),r=new vt({color:62975,side:Ut,transparent:!0,opacity:0});this.destinationRing=new Ce(s,r),this.destinationRing.rotation.x=-Math.PI/2,this.destinationRing.position.set(0,.05,0),this.scene.add(this.destinationRing),this.destinationPulse=0}initWorld(){this.world=sv(this.scene,this.gamesManifest)}initPlayer(){this.player=new cy(this.scene,this.identity)}initTokens(){let e=parseInt(localStorage.getItem("arcade_tokens"),10);(isNaN(e)||e<=0)&&(e=25),this.tokens=e;try{this.discoveredCabinets=new Set(JSON.parse(localStorage.getItem("arcade_discovered")||"[]"))}catch{this.discoveredCabinets=new Set}this.updateTokensDisplay()}updateTokensDisplay(){const e=document.getElementById("arcade-tokens-val");e&&(e.textContent=this.tokens),localStorage.setItem("arcade_tokens",String(this.tokens))}spendToken(){this.tokens>0?this.tokens-=1:this.tokens=5,this.updateTokensDisplay(),Or(()=>Promise.resolve().then(()=>Wr),void 0,import.meta.url).then(e=>{var t;return(t=e.playCoinDrop)==null?void 0:t.call(e)})}awardExplorationToken(e){if(e&&!this.discoveredCabinets.has(e)){this.discoveredCabinets.add(e);try{localStorage.setItem("arcade_discovered",JSON.stringify([...this.discoveredCabinets]))}catch{}this.tokens+=2,this.updateTokensDisplay()}}initInteraction(){this.interaction=new rv(this.world.cabinets,(e,t)=>this.launchGame(e,t),e=>this.awardExplorationToken(e),e=>this.startSpectatingCabinet(e))}initOverlay(){this.overlay=new av(()=>{this.isZoomingIn=!1,this.zoomProgress=0,this.clock.getDelta(),this.zoomTarget&&(this.zoomTarget.clearOccupied(),this.zoomTarget=null),this.network&&(this.network.broadcastActivity("ONLINE"),this.network.broadcastPlayingGame(null,!1))}),this.overlay.onStreamReady=(e,t)=>{console.log(`[Watch Party] Broadcasting local gameplay stream for ${t}`),this.network&&this.network.startBroadcastingGame(e,t);const i=this.world.cabinets.find(s=>s.game.id===t);i&&i.setLiveStream(e,this.identity?this.identity.tag:"VOCÊ")},this.overlay.onFrameReady=(e,t)=>{this.network&&this.network.broadcastLiveFrame(t,e);const i=this.world.cabinets.find(s=>s.game.id===t);i&&i.setLiveFrame(e,this.identity?this.identity.tag:"VOCÊ")},this.overlay.onFrameEnded=e=>{console.log(`[Watch Party] Ending local frame stream for ${e}`),this.network&&this.network.stopBroadcastingGame();const t=this.world.cabinets.find(i=>i.game.id===e);t&&t.clearLiveStream()},this.overlay.onStreamEnded=e=>{console.log(`[Watch Party] Ending local stream for ${e}`),this.network&&this.network.stopBroadcastingGame();const t=this.world.cabinets.find(i=>i.game.id===e);t&&t.clearLiveStream()}}initWatchHud(){this.watchHud=new tx({onExit:()=>this.stopSpectating(),onCheer:e=>{var s,r;const t=((s=this.identity)==null?void 0:s.tag)||"VOCÊ",i=((r=this.identity)==null?void 0:r.colorHex)||"#00f5ff";this.player.showSpeechBubble(e),this.network&&this.network.broadcastChat(e),this.appendChatMessage(t,e,i,!0)}}),window.addEventListener("keydown",e=>{if(!this.isSpectating||Date.now()-(this._spectateStartTime||0)<400)return;(e.code==="Escape"||e.key==="Escape"||e.code==="KeyV"||e.key==="v"||e.key==="V")&&(e.preventDefault(),e.stopPropagation(),this.stopSpectating())},!0)}startSpectatingCabinet(e){var t;e&&(this.overlay&&this.overlay.isOpen||(document.pointerLockElement&&((t=document.exitPointerLock)==null||t.call(document)),this._spectateStartTime=Date.now(),this.isSpectating=!0,this.spectateTarget=e,window.__arcadeSpectating=!0,this.interaction&&(this.interaction.promptEl&&this.interaction.promptEl.classList.remove("visible"),this.interaction.actionBtn&&this.interaction.actionBtn.classList.remove("visible")),Or(()=>Promise.resolve().then(()=>Wr),void 0,import.meta.url).then(i=>{var s;return(s=i.playDopamineChime)==null?void 0:s.call(i)}),this.watchHud&&this.watchHud.show(e,1)))}stopSpectating(){this.isSpectating&&(this.isSpectating=!1,this.spectateTarget=null,window.__arcadeSpectating=!1,this.clock.getDelta(),this.watchHud&&this.watchHud.hide())}initJukebox(){this.jukeboxModal=new QS,this.musicHud=new ex(()=>this.openJukebox()),tt.init()}openJukebox(){var e;document.pointerLockElement&&((e=document.exitPointerLock)==null||e.call(document)),this.jukeboxModal&&(Or(()=>Promise.resolve().then(()=>Wr),void 0,import.meta.url).then(t=>{var i;return(i=t.playDopamineChime)==null?void 0:i.call(t)}),this.jukeboxModal.open())}initNetwork(){this.scoreTicker=new ov,this.network=new JS(this.scene,this.identity||{tag:"MARC1",color:62975,colorHex:"#00f5ff"},this.scoreTicker),window.__ARCADE_NETWORK__=this.network,this.network.onCabinetOccupancyChange=(e,t,i,s,r)=>{if(s&&i){const a=this.world.cabinets.find(o=>o.game.id===i);a&&a.setOccupiedBy(t,!!r)}else this.world.cabinets.forEach(a=>{a.occupiedBy===t&&(a.clearOccupied(),this.isSpectating&&this.spectateTarget===a&&this.stopSpectating())})},this.network.onRemoteGameStream=(e,t,i,s)=>{console.log(`[Watch Party] Applying remote video stream for ${e} from ${t}`);const r=this.world.cabinets.find(a=>a.game.id===e);r&&(r.setLiveStream(i,t),this.isSpectating&&this.spectateTarget===r&&this.watchHud&&this.watchHud.show(r,1))},this.network.onRemoteGameStreamEnded=(e,t)=>{console.log(`[Watch Party] Remote stream ended for ${e}`);const i=this.world.cabinets.find(s=>s.game.id===e);i&&i.clearLiveStream(),this.isSpectating&&this.spectateTarget===i&&this.stopSpectating()},this.network.onRemoteGameFrame=(e,t,i,s)=>{const r=this.world.cabinets.find(a=>a.game.id===e);r&&(r.setLiveFrame(i,t),this.isSpectating&&this.spectateTarget===r&&this.watchHud&&(this.watchHud.isOpen||this.watchHud.show(r,1)))},this.network.onRemoteGameFrameEnded=(e,t)=>{if(console.log(`[Watch Party] Remote frame stream ended for ${e}`),e){const i=this.world.cabinets.find(s=>s.game.id===e);i&&i.clearLiveStream(),this.isSpectating&&this.spectateTarget===i&&this.stopSpectating()}else this.world.cabinets.forEach(i=>{i.isLiveStreaming&&(i.clearLiveStream(),this.isSpectating&&this.spectateTarget===i&&this.stopSpectating())})}}initPointerLock(){const e=this.renderer.domElement;this.isPointerLocked=!1,this.camPitch=0,e.addEventListener("click",t=>{document.body.classList.contains("touch-device")||"ontouchstart"in window||window.__arcadeOverlayOpen||this.overlay&&this.overlay.isOpen||this.jukeboxModal&&this.jukeboxModal.isOpen||t.target.closest&&t.target.closest(".nopex-hud-header, .arcade-music-hud, .arcade-commands-dock, .arcade-hologram-card, .arcade-jukebox-modal, #arcade-chat-dock")||document.pointerLockElement!==e&&e.requestPointerLock&&e.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===e}),document.addEventListener("mousemove",t=>{if(!this.isPointerLocked||window.__arcadeOverlayOpen||this.overlay&&this.overlay.isOpen)return;const i=t.movementX||0,s=t.movementY||0;this.player.rotation-=i*.0032,this.player.targetRotation=this.player.rotation,this.camPitch=Math.max(-.2,Math.min(.35,(this.camPitch||0)-s*.0018))})}initChatDock(){const e=document.getElementById("arcade-chat-dock"),t=document.getElementById("arcade-chat-messages"),i=document.getElementById("arcade-chat-input"),s=document.getElementById("arcade-chat-send"),r=document.getElementById("mobile-chat-toggle");this.chatDock=e,this.chatMessagesEl=t,this.chatInput=i;const a=()=>{var h,d;if(!i)return;const o=i.value.trim();if(!o)return;i.value="";const l=((h=this.identity)==null?void 0:h.tag)||"VOCÊ",c=((d=this.identity)==null?void 0:d.colorHex)||"#00f5ff";this.player.showSpeechBubble(o),this.network&&this.network.broadcastChat(o),this.appendChatMessage(l,o,c,!0),i.blur()};s&&s.addEventListener("click",o=>{o.preventDefault(),a()}),i&&i.addEventListener("keydown",o=>{o.stopPropagation(),o.key==="Enter"?(o.preventDefault(),a()):o.key==="Escape"&&i.blur()}),r&&e&&r.addEventListener("click",()=>{e.classList.toggle("active"),e.classList.contains("active")&&i&&i.focus()}),window.addEventListener("keydown",o=>{var l;window.__arcadeOverlayOpen||document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA")||o.code==="KeyC"&&(o.preventDefault(),document.pointerLockElement&&((l=document.exitPointerLock)==null||l.call(document)),e&&e.classList.add("active"),i&&(i.focus(),i.select()))}),window.addEventListener("arcade-chat-received",o=>{const l=o.detail;l&&this.appendChatMessage(l.tag||"P2",l.text,l.colorHex||"#ff007f",!1)})}appendChatMessage(e,t,i,s=!1){if(!this.chatMessagesEl)return;const r=document.createElement("div");r.className=`chat-msg-row ${s?"msg-self":""}`;const a=document.createElement("span");a.className="chat-msg-tag",a.textContent=`[${e}]: `,a.style.color=i||"#00f5ff";const o=document.createElement("span");for(o.className="chat-msg-text",o.textContent=t,r.appendChild(a),r.appendChild(o),this.chatMessagesEl.appendChild(r);this.chatMessagesEl.children.length>25;)this.chatMessagesEl.removeChild(this.chatMessagesEl.firstChild);this.chatMessagesEl.scrollTop=this.chatMessagesEl.scrollHeight,this.chatDock&&(this.chatDock.classList.add("active"),clearTimeout(this._chatHideTimer),this._chatHideTimer=setTimeout(()=>{document.activeElement!==this.chatInput&&this.chatDock.classList.remove("active")},7e3))}setPlayerIdentity(e){this.identity=e,this.player&&this.player.setIdentity(e),this.network&&(this.network.identity=e,this.network.broadcastIdentity())}launchGame(e,t){var i;if(t&&t.isJukebox){this.openJukebox();return}document.pointerLockElement&&((i=document.exitPointerLock)==null||i.call(document)),this.spendToken(),this.isZoomingIn=!0,this.zoomTarget=t,this.zoomProgress=0,t&&t.setOccupiedBy(this.identity?this.identity.tag:"VOCÊ"),this.network&&(this.network.broadcastActivity(e.title||e.name),this.network.broadcastPlayingGame(e.id,!0)),setTimeout(()=>{this.overlay.open(e)},550)}teleportToCabinet(e){const t=this.world.cabinets.find(i=>i.game.id===e);t&&(this.player.clearNavigationTarget(),this.player.x=t.standSpot.x,this.player.z=t.standSpot.z,this.player.rotation=t.rotationY+Math.PI,this.player.targetRotation=this.player.rotation,this.interaction.update(this.player))}showDestinationPulse(e,t){this.destinationRing.position.set(e,.04,t),this.destinationRing.scale.set(.6,.6,.6),this.destinationRing.material.opacity=.9,this.destinationPulse=1}initTapToWalk(){let e=0,t=0,i=0;const s=o=>{e=performance.now(),t=o.clientX,i=o.clientY},r=o=>{const l=performance.now()-e,c=Math.abs(o.clientX-t),h=Math.abs(o.clientY-i);if(l>380||c>20||h>20||o.target.closest(".nopex-hud-header, .arcade-mobile-joystick, .arcade-mobile-dpad, .arcade-mobile-action-btn, .arcade-hologram-card, .arcade-game-overlay, .mobile-teleport-drawer"))return;const u=this.renderer.domElement.getBoundingClientRect(),f=(o.clientX-u.left)/u.width*2-1,g=-((o.clientY-u.top)/u.height)*2+1;this.raycaster.setFromCamera({x:f,y:g},this.camera);let _=null,m=1/0;for(const p of this.world.cabinets){const T=this.raycaster.intersectObjects(p.group.children,!0);T.length>0&&T[0].distance<m&&(m=T[0].distance,_=p)}if(_){this.showDestinationPulse(_.standSpot.x,_.standSpot.z),this.player.setNavigationTarget(_.standSpot.x,_.standSpot.z,()=>{this.interaction.update(this.player)});return}if(this.world.floorMesh){const p=this.raycaster.intersectObject(this.world.floorMesh);if(p.length>0){const T=p[0].point,R=this.world.roomBounds,S=Math.max(R.minX+.5,Math.min(R.maxX-.5,T.x)),x=Math.max(R.minZ+.5,Math.min(R.maxZ-.5,T.z));this.showDestinationPulse(S,x),this.player.setNavigationTarget(S,x,()=>{this.interaction.update(this.player)})}}},a=this.renderer.domElement;a.addEventListener("pointerdown",s),a.addEventListener("pointerup",r)}initMobileControls(){("ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches)&&document.body.classList.add("touch-device");const t=document.getElementById("arcade-joystick"),i=document.getElementById("joystick-thumb");if(!t||!i)return;let s=null,r=0,a=0;const o=45,l=t.querySelector(".arrow-up"),c=t.querySelector(".arrow-down"),h=t.querySelector(".arrow-left"),d=t.querySelector(".arrow-right"),u=(p,T)=>{l&&l.classList.toggle("active",T<-12),c&&c.classList.toggle("active",T>12),h&&h.classList.toggle("active",p<-12),d&&d.classList.toggle("active",p>12)},f=p=>{if(!(this.overlay&&this.overlay.isOpen))for(let T=0;T<p.changedTouches.length;T++){const R=p.changedTouches[T],S=t.getBoundingClientRect(),x=R.clientX>=S.left&&R.clientX<=S.right&&R.clientY>=S.top&&R.clientY<=S.bottom,M=R.clientX<=window.innerWidth*.55&&R.clientY>=window.innerHeight*.4;if(s===null&&(x||M)){if(R.target&&R.target.closest&&R.target.closest(".nopex-hud-header, .mobile-teleport-drawer, .arcade-mobile-action-btn, #arcade-game-overlay"))continue;p.preventDefault(),s=R.identifier,x?(r=S.left+S.width/2,a=S.top+S.height/2):(r=R.clientX,a=R.clientY,t.style.left=`${Math.max(12,Math.min(window.innerWidth-130,r-S.width/2))}px`,t.style.bottom=`${Math.max(12,Math.min(window.innerHeight-130,window.innerHeight-a-S.height/2))}px`),t.classList.add("active"),this.player.clearNavigationTarget();break}}},g=p=>{if(s!==null)for(let T=0;T<p.changedTouches.length;T++){const R=p.changedTouches[T];if(R.identifier===s){p.preventDefault();let S=R.clientX-r,x=R.clientY-a;const M=Math.hypot(S,x);M>o&&(S=S/M*o,x=x/M*o),i.style.transform=`translate(${S}px, ${x}px)`,u(S,x),this.player.setJoystickVector(S/o,x/o);break}}},_=p=>{for(let T=0;T<p.changedTouches.length;T++)if(p.changedTouches[T].identifier===s){s=null,i.style.transform="translate(0px, 0px)",t.classList.remove("active"),u(0,0),this.player.setJoystickVector(0,0);break}};window.addEventListener("touchstart",f,{passive:!1}),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",_),window.addEventListener("touchcancel",_),[{id:"dpad-up",vx:0,vy:-1},{id:"dpad-down",vx:0,vy:1},{id:"dpad-left",vx:-1,vy:0},{id:"dpad-right",vx:1,vy:0}].forEach(({id:p,vx:T,vy:R})=>{const S=document.getElementById(p);if(!S)return;const x=L=>{L.preventDefault(),this.player.clearNavigationTarget(),this.player.setJoystickVector(T,R),S.classList.add("pressed")},M=L=>{L.preventDefault(),this.player.setJoystickVector(0,0),S.classList.remove("pressed")};S.addEventListener("pointerdown",x),S.addEventListener("pointerup",M),S.addEventListener("pointerleave",M),S.addEventListener("pointercancel",M)})}onResize(){if(!this.container||!this.renderer||!this.camera)return;const e=this.container.clientWidth||window.innerWidth||1280,t=this.container.clientHeight||window.innerHeight||720;this.updateCameraProjection(e,t),this.renderer.setSize(e,t),this.renderer.setPixelRatio(this.calculateOptimalPixelRatio(e,t))}start(){this.isRunning||(this.isRunning=!0,this.clock.start(),this.onResize(),this.animate())}stop(){this.isRunning=!1}animate(){if(!this.isRunning)return;requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.1);if(this.overlay&&this.overlay.isOpen){this.network&&this.network.update(e,this.camera);return}const t=this.clock.getElapsedTime();this.world.update(t,this.player,this.perfMode),this.fpsFrames=(this.fpsFrames||0)+1;const i=performance.now();if(this.lastFpsCheck||(this.lastFpsCheck=i),i-this.lastFpsCheck>=1e3){const s=i-this.lastFpsCheck;this.currentFps=Math.round(this.fpsFrames*1e3/s),this.fpsFrames=0,this.lastFpsCheck=i,this.updatePerfHud(),this.currentFps<28&&!this.manualPerfOverride?(this.lowFpsStrikes=(this.lowFpsStrikes||0)+1,this.lowFpsStrikes>=3&&(this.lowFpsStrikes=0,this.perfMode==="high"?this.setPerformanceMode("balanced",!0):this.perfMode==="balanced"&&this.setPerformanceMode("ultra-perf",!0))):this.currentFps>=45&&(this.lowFpsStrikes=0)}if(this.destinationPulse>0){this.destinationPulse-=e*1.6;const s=.6+(1-Math.max(0,this.destinationPulse))*.9;this.destinationRing.scale.set(s,s,s),this.destinationRing.material.opacity=Math.max(0,this.destinationPulse)*.9,this.destinationPulse<=0&&(this.destinationRing.material.opacity=0)}if(this.player.update(e,this.world.roomBounds,this.world.cabinets,this.camera),this.interaction.update(this.player),this.network&&(this.network.broadcastLocalPosition(this.player.x,this.player.z,this.player.rotation,this.player.isMoving,this.player.y),this.network.update(e,this.camera)),this.isSpectating&&this.spectateTarget){const s=this.spectateTarget,r=s.rotationY,a=s.position.x+Math.sin(r)*.51,o=2.15,l=s.position.z+Math.cos(r)*.51,c=new Y(a,o,l),h=Math.sin(r),d=Math.cos(r),u=Math.cos(r),f=-Math.sin(r),g=new Y(s.position.x+h*2+u*.28,2.18+Math.sin(t*1.8)*.012,s.position.z+d*2+f*.28);this.camera.position.lerp(g,.12),this.camera.lookAt(c)}else if(this.isZoomingIn&&this.zoomTarget){const s=this.zoomTarget,r=s.rotationY,a=s.position.x+Math.sin(r)*.51,o=2.15,l=s.position.z+Math.cos(r)*.51,c=new Y(a,o,l),h=Math.sin(r)*.975,d=.22,u=Math.cos(r)*.975,f=new Y(a+h*1.35,o+d*1.35,l+u*1.35);this.camera.position.lerp(f,.16),this.camera.lookAt(c)}else{const s=this.camPitch||0,r=this.player.x,a=4+s*2.2,o=Math.min(26,this.player.z+6.2);this.camera.position.x+=(r-this.camera.position.x)*.14,this.camera.position.y+=(a-this.camera.position.y)*.14,this.camera.position.z+=(o-this.camera.position.z)*.14,this.camLookTarget||(this.camLookTarget=new Y(this.player.x,1.4,this.player.z-1.2)),this.camLookTarget.x+=(this.player.x-this.camLookTarget.x)*.14,this.camLookTarget.y=1.4+s*3.5,this.camLookTarget.z+=(this.player.z-1.2-this.camLookTarget.z)*.14,this.camera.lookAt(this.camLookTarget)}this.renderer.render(this.scene,this.camera)}initPerformance(){this.fpsFrames=0,this.lastFpsCheck=performance.now(),this.currentFps=60,this.lowFpsStrikes=0,this.manualPerfOverride=!1;const e=window.innerWidth,t=window.innerHeight,i=e/t,s=localStorage.getItem("arcade_perf_mode");s&&["high","balanced","ultra-perf"].includes(s)?this.perfMode=s:i>2||e>2400?this.perfMode="balanced":this.perfMode="high";const r=document.getElementById("arcade-perf-btn");r&&r.addEventListener("click",a=>{a.preventDefault(),this.manualPerfOverride=!0,this.perfMode==="high"?this.setPerformanceMode("balanced"):this.perfMode==="balanced"?this.setPerformanceMode("ultra-perf"):this.setPerformanceMode("high")}),this.updatePerfHud()}setPerformanceMode(e,t=!1){this.perfMode=e;try{localStorage.setItem("arcade_perf_mode",e)}catch{}this.onResize(),this.updatePerfHud();const i={high:"ALTA (Nativa)",balanced:"BALANCEADA (Otimizada)","ultra-perf":"ULTRA-DESEMPENHO (60 FPS)"};t?this.showPerformanceToast(`⚡ Otimização Automática: Modo ${i[e]} ativado para garantir 60 FPS!`):this.showPerformanceToast(`⚡ Qualidade Gráfica: Modo ${i[e]}`)}updatePerfHud(){const e=document.getElementById("arcade-perf-label"),t=document.getElementById("arcade-perf-btn");if(!e)return;const i={high:"ALTA",balanced:"BAL.","ultra-perf":"ECO 60FPS"};e.textContent=`${this.currentFps||60} FPS [${i[this.perfMode]||"BAL."}]`,t&&(t.classList.remove("perf-high","perf-balanced","perf-ultra"),this.perfMode==="ultra-perf"?t.classList.add("perf-ultra"):this.perfMode==="balanced"?t.classList.add("perf-balanced"):t.classList.add("perf-high"))}showPerformanceToast(e){let t=document.getElementById("arcade-perf-toast");t||(t=document.createElement("div"),t.id="arcade-perf-toast",t.className="arcade-perf-toast",document.body.appendChild(t)),t.textContent=e,t.classList.add("show"),clearTimeout(this._perfToastTimer),this._perfToastTimer=setTimeout(()=>{t.classList.remove("show")},3200)}updateCameraProjection(e,t){const i=e/t;if(this.camera.aspect=i,i>1.85){const s=82*(Math.PI/180),r=2*Math.atan(Math.tan(s/2)/i);this.camera.fov=r*(180/Math.PI)}else this.camera.fov=52;this.camera.updateProjectionMatrix()}calculateOptimalPixelRatio(e,t){const i=window.devicePixelRatio||1,s=e/t;let r=Math.min(i,1.25);if(e>2200||s>2){const o=(this.perfMode==="ultra-perf"?1920:this.perfMode==="balanced"?2400:2560)/e;r=Math.min(r,o)}return this.perfMode==="ultra-perf"?r=Math.min(r,.85):this.perfMode==="balanced"&&(r=Math.min(r,1)),Math.max(.65,Math.min(1.25,r))}}const Io=[{name:"Cyan",hex:"#00f5ff",num:62975,accent:"#ffffff"},{name:"Magenta",hex:"#ff007f",num:16711807,accent:"#00f5ff"},{name:"Ouro",hex:"#ffd32a",num:16765738,accent:"#ff3838"},{name:"Esmeralda",hex:"#00ff88",num:65416,accent:"#00ffff"},{name:"Roxo",hex:"#a55eea",num:10837738,accent:"#ffd32a"},{name:"Rubi",hex:"#ff3838",num:16726072,accent:"#ffd32a"}];class ix{constructor(e){this.onReady=e,this.tag=localStorage.getItem("ARCADE_MP_TAG")||"MARC1",this.colorHex=localStorage.getItem("ARCADE_MP_COLOR")||"#00f5ff",this.modalEl=null,this.createModal(),this.tag&&this.tag.length>=2?setTimeout(()=>{this.onReady&&this.onReady(this.getIdentity())},100):this.showModal()}getIdentity(){const e=Io.find(t=>t.hex.toLowerCase()===this.colorHex.toLowerCase())||Io[0];return{tag:(this.tag||"MARC1").slice(0,5).toUpperCase(),color:e.num,colorHex:e.hex,accent:e.accent}}createModal(){const e=document.getElementById("mp-identity-modal");e&&e.remove();const t=document.createElement("div");t.id="mp-identity-modal",t.style.cssText=`
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
          ${Io.map(l=>`
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
    `,t.appendChild(i),document.body.appendChild(t),this.modalEl=t;const s=i.querySelector("#mp-tag-input");s.addEventListener("input",l=>{s.value=s.value.replace(/[^a-zA-Z0-9]/g,"").slice(0,5).toUpperCase()});const r=i.querySelectorAll(".color-swatch");r.forEach(l=>{l.addEventListener("click",()=>{this.colorHex=l.getAttribute("data-hex"),r.forEach(c=>{const h=c.getAttribute("data-hex")===this.colorHex;c.style.border=h?"3px solid #fff":"transparent",c.style.boxShadow=h?"0 0 12px "+this.colorHex:"none"})})});const a=i.querySelector("#mp-modal-err");i.querySelector("#mp-enter-btn").addEventListener("click",()=>{const l=s.value.trim().toUpperCase();if(!l||l.length<2){a&&(a.textContent="⚠️ Digite uma TAG com pelo menos 2 letras!",a.style.display="block"),s.focus();return}a&&(a.style.display="none"),this.tag=l,localStorage.setItem("ARCADE_MP_TAG",this.tag),localStorage.setItem("ARCADE_MP_COLOR",this.colorHex),this.hideModal(),this.onReady&&this.onReady(this.getIdentity())}),window.addEventListener("keydown",l=>{l.key==="Escape"&&this.modalEl&&this.modalEl.style.display==="flex"&&this.tag&&this.tag.length>=2&&this.hideModal()})}showModal(){this.modalEl&&(this.modalEl.style.display="flex")}hideModal(){this.modalEl&&(this.modalEl.style.display="none")}}const sx="https://gist.githubusercontent.com/marcuscaiado/a238a8db5b064579413c7a54aba6c840/raw/marcus-arcade-leaderboard.json";function ld(){const n=document.getElementById("arcade-3d-canvas-container"),e=document.getElementById("webgl-error");if(!n){console.error("Missing #arcade-3d-canvas-container");return}let t=null;const i=new ix(d=>{if(t)t.setPlayerIdentity(d);else try{t=new nx(n,rr,d),t.start(),window.__ARCADE_ENGINE__=t,window.__arcadeEngine=t,window.__MUSIC_MANAGER__=tt;const u=()=>{tt.unlockAndPlay()};window.addEventListener("pointerdown",u,{once:!0}),window.addEventListener("keydown",u,{once:!0}),window.addEventListener("touchstart",u,{once:!0}),u()}catch(u){console.error("Fatal WebGL / Three.js Initialization Error:",u),e&&(e.style.display="block",e.textContent="Erro ao inicializar 3D: "+u.message)}}),s=document.getElementById("arcade-tag-btn");if(s&&s.addEventListener("click",d=>{d.stopPropagation(),i.showModal()}),window.addEventListener("keydown",d=>{if(!(d.target&&(d.target.tagName==="INPUT"||d.target.tagName==="TEXTAREA"||d.target.tagName==="SELECT"))){if(d.code==="KeyT"&&!d.ctrlKey&&!d.altKey&&!d.metaKey){const u=document.getElementById("arcade-game-overlay");(!u||u.style.display==="none")&&i.showModal()}if(d.code==="KeyJ"&&!d.ctrlKey&&!d.altKey&&!d.metaKey){const u=document.getElementById("arcade-game-overlay");(!u||u.style.display==="none")&&t&&t.jukeboxModal&&t.jukeboxModal.open()}}}),window.ArcadeLeaderboard&&window.ArcadeLeaderboard.submitScore){const d=window.ArcadeLeaderboard.submitScore.bind(window.ArcadeLeaderboard);window.ArcadeLeaderboard.submitScore=function(u,f){const g=d(u,f);if(window.__ARCADE_NETWORK__){const _=rr.find(p=>p.id===u),m=_?_.title:u;window.__ARCADE_NETWORK__.broadcastHighScore(m,f)}return g}}window.addEventListener("message",d=>{if(d.data&&(d.data.type==="ARCADE_SCORE"||d.data.type==="GAME_SCORE")&&d.data.score&&window.__ARCADE_NETWORK__){const u=rr.find(g=>g.id===d.data.gameId),f=u&&u.title||d.data.gameTitle||"Arcade Game";window.__ARCADE_NETWORK__.broadcastHighScore(f,Number(d.data.score))}});const r=document.getElementById("teleport-select");r&&r.addEventListener("change",d=>{const u=d.target.value;u&&t&&(Or(()=>Promise.resolve().then(()=>Wr),void 0,import.meta.url).then(f=>f.playDopamineChime()),t.teleportToCabinet(u),r.blur())});const a=document.getElementById("arcade-ctrl-toggle"),o=document.getElementById("arcade-joystick"),l=document.getElementById("arcade-dpad");let c="joystick";a&&o&&l&&a.addEventListener("click",d=>{d.stopPropagation(),c==="joystick"?(c="dpad",o.style.display="none",l.style.display="flex",a.innerHTML="<span>🕹️ JOYSTICK</span>"):(c="joystick",o.style.display="block",l.style.display="none",a.innerHTML="<span>🎮 D-PAD</span>")});async function h(){window.__ARCADE_LEADERBOARDS__=window.__ARCADE_LEADERBOARDS__||{};try{const d=await fetch(`${sx}?_t=${Date.now()}`);if(d.ok){const u=await d.json();rr.forEach(f=>{let g=[];try{g=JSON.parse(localStorage.getItem(`arcade_lb_${f.id}`)||"[]")}catch{}const m=[...u[f.id]||[],...g].filter(T=>T&&T.name&&T.score);m.sort((T,R)=>R.score-T.score);const p=m[0];p&&(window.__ARCADE_LEADERBOARDS__[f.id]={topScore:p.score,topPilot:String(p.name).replace(/[^a-zA-Z0-9]/g,"").toUpperCase().substring(0,3)||"MRC"})})}}catch(d){console.warn("Could not sync cloud records:",d)}}h()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ld):ld();
