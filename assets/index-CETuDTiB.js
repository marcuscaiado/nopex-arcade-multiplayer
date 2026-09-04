var Dh=Object.defineProperty;var Ih=(i,e,t)=>e in i?Dh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var It=(i,e,t)=>Ih(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Uh="modulepreload",Nh=function(i,e){return new URL(i,e).href},bc={},Ha=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(t.map(h=>{if(h=Nh(h,n),h in bc)return;bc[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===h&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Uh,d||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),d)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},js=JSON.parse(`[{"id":"neon-orbit-drift","name":"Neon Orbit Drift","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-orbit-drift/","description":"One-tap gravitational slingshot runner with harmonic chords & orbital drift physics.","tech":["Canvas 2D","Web Audio Synth","Physics"],"badgeClass":"btn-orbit"},{"id":"cyber-pinball-fx","name":"Cyber Pinball FX","icon":"⚡","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pinball-fx/","description":"High-speed neon arcade pinball table with multi-bumpers, chime feedback & dual flippers.","tech":["Canvas 2D","Bumper Physics","Audio FX"],"badgeClass":"btn-pinball"},{"id":"neon-katana-slash","name":"Neon Katana Slash (Fruit Ninja)","icon":"🍉","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/neon-katana-slash/","description":"Super juicy Fruit Ninja blade slicer! Swipe glowing blade trails to slice flying fruits and build massive combos.","tech":["Canvas 2D","Swipe Slicer","Fruit Combos"],"badgeClass":"btn-katana"},{"id":"cute-mini-golf","name":"Cute Mini Golf 3D","icon":"⛳","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cute-mini-golf/","description":"Nintendo-style mini golf with 3 kawaii golfers, 3D animated putters & authentic cup suction.","tech":["Three.js 3D","Cannon-es","Web Audio"],"badgeClass":"btn-golf"},{"id":"kawaii-8ball-pool","name":"Kawaii 8-Ball Pool","icon":"🎱","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/kawaii-8ball-pool/","description":"Super cute 8-ball pool where every ball has an animated kawaii face with squish physics.","tech":["Canvas 2D","2-Player","Squish Physics"],"badgeClass":"btn-pool"},{"id":"stickman-fps-arcade","name":"Stickman FPS Arcade","icon":"🔫","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/stickman-fps-arcade/","description":"Retro stationary bunker shooter with 5 weapons, shop upgrades and wave defense.","tech":["Canvas 2D","Shop Upgrades","Web Audio"],"badgeClass":"btn-fps"},{"id":"geometricsurvivor","name":"Geometric Survivor 3D","icon":"⚔️","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/geometricsurvivor/","description":"Megabonk-style 3D cartoon survivor on a floating island! 3 heroes (Sir Bonk, Pippin & Sparky), healing hearts, invincibility & speed buffs.","tech":["Three.js 3D","3 Heroes","Vampire Upgrades"],"badgeClass":"btn-geo"},{"id":"neon-drift-racer","name":"Neon Drift Racer","icon":"🏎️","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drift-racer/","description":"High-speed synthwave pseudo-3D highway racer with nitro boost and touch controls.","tech":["Canvas 3D Projection","Nitro System","Retro"],"badgeClass":"btn-racer"},{"id":"cyber-pong-3d","name":"Kawaii Table Tennis 3D","icon":"🏓","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pong-3d/","description":"Super cute 3D table tennis with Kawaii eye paddles, generous hitboxes, 1-to-1 mouse controls, bouncy ball physics & sweet audio FX.","tech":["Three.js 3D","Paddle Physics","Cute Audio"],"badgeClass":"btn-pong"},{"id":"neon-viper","name":"Neon Viper 3D","icon":"🐍","category":"arcade","unit":"MASS","url":"https://marcuscaiado.github.io/neon-viper/","description":"3D Snake.io cyber arena with 8 3D skins, 10+ smart AI bots, radar minimap, nitro boost & safe body coiling.","tech":["Three.js 3D","Snake.io Physics","8 Skins"],"badgeClass":"btn-viper"},{"id":"brick-breaker-fx","name":"Brick Breaker FX","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/brick-breaker-fx/","description":"Juice-packed neon breakout arcade game with multi-ball power-ups, paddle expansion & shatter physics.","tech":["Canvas 2D","Multi-Ball","Power-Ups"],"badgeClass":"btn-brick"},{"id":"sky-ace-1944","name":"Sky Ace 1944","icon":"🛩️","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/sky-ace-1944/","description":"Vertical retro WWII bullet-hell shooter with mega bombs, shields & quad spread.","tech":["Canvas 2D","Bullet Patterns","Boss Battles"],"badgeClass":"btn-sky"},{"id":"neon-drop-2048","name":"Neon Drop 2048","icon":"🧩","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drop-2048/","description":"Physics merge puzzle with glowing bouncy 2048 balls and satisfying pop chain reactions.","tech":["Canvas 2D","Circle Physics","Suika Merge"],"badgeClass":"btn-drop"},{"id":"asteroid-blitz","name":"Asteroid Blitz","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/asteroid-blitz/","description":"Classic vector space shooter with inertia physics, hyperspace warp & splitting rocks.","tech":["Canvas 2D Vector","Inertia Physics","Retro"],"badgeClass":"btn-asteroid"},{"id":"neon-tetris-3d","name":"Neon Cyber Tetris 3D","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-tetris-3d/","description":"Tetris Effect-style 3D falling tetrominoes in a holographic cyber matrix with laser line clears and popping glowing graphics.","tech":["Three.js 3D","Ghost Projection","Synth Audio","SRS Rotation"],"badgeClass":"btn-tetris"},{"id":"neon-archery-master","name":"Neon Archery Master","icon":"🎯","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/neon-archery-master/","description":"Precision bow archery with trajectory prediction, crosswinds & holographic targets.","tech":["Canvas 2D","Ballistics Math","Wind Physics"],"badgeClass":"btn-archery"},{"id":"neon-stack-3d","name":"Neon Stack Harmony 3D","icon":"🌌","category":"arcade","unit":"SLABS","url":"https://marcuscaiado.github.io/neon-stack-3d/","description":"3D block slicing tower stacking with soothing pentatonic synth chords.","tech":["Three.js 3D","Web Audio","Slicing Math"],"badgeClass":"btn-stack"},{"id":"neon-pachinko-pop","name":"Neon Pachinko Pop","icon":"🔮","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-pachinko-pop/","description":"Peggle-style bouncy pachinko drop with jackpot buckets and neon bumpers.","tech":["Canvas 2D","Peg Physics","Jackpot Zones"],"badgeClass":"btn-pachinko"},{"id":"cyber-runner-3d","name":"Cyber Runner 3D","icon":"🏃","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-runner-3d/","description":"Fast-paced synthwave 3-lane obstacle runner with jump mechanics and power-ups.","tech":["Canvas 3D","Perspective Math","Endless"],"badgeClass":"btn-runner"},{"id":"cyber-shuriken","name":"Cyber Shuriken Neo","icon":"🎯","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-shuriken/","description":"Rhythmic knife throwing into rotating boss matrices with harmonic chimes.","tech":["Canvas 2D","Rotational Math","Boss Waves"],"badgeClass":"btn-shuriken"},{"id":"flappy-cyber-droid","name":"Flappy Cyber Droid","icon":"🐦","category":"arcade","unit":"GATES","url":"https://marcuscaiado.github.io/flappy-cyber-droid/","description":"Addictive neon flapper arcade game featuring a hovering cyber-droid, laser gates & energy crystals.","tech":["Canvas 2D","One-Tap Flap","Laser Gates"],"badgeClass":"btn-droid"},{"id":"street-fighter-2","name":"Street Fighter II Turbo","icon":"🥊","category":"action","unit":"WINS","url":"https://marcuscaiado.github.io/street-fighter-2/","description":"Authentic Capcom arcade fighting! All 12 fighters, Turbo speed modes, Hadoukens, Shoryukens, and 60 FPS WebAssembly emulation.","tech":["WASM EmulatorJS","12 Fighters","Turbo Mode"],"badgeClass":"btn-fighter"},{"id":"super-mario","name":"Super Mario World","icon":"🍄","category":"retro","unit":"EXITS","url":"https://marcuscaiado.github.io/super-mario/","description":"The legendary Super Nintendo masterpiece! Ride Yoshi, soar with the magic cape, explore Dinosaur Land, and run in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Yoshi & Cape","96 Exits"],"badgeClass":"btn-mario"},{"id":"super-bomberman","name":"Super Bomberman","icon":"💣","category":"retro","unit":"WINS","url":"https://marcuscaiado.github.io/super-bomberman/","description":"The ultimate explosive party battle! Drop bombs, collect powerups, blast soft blocks, and battle across arenas in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Hudson Soft","Arena Battle"],"badgeClass":"btn-bomberman"},{"id":"gta-2","name":"Grand Theft Auto 2","icon":"🚗","category":"action","unit":"RESPECT","url":"https://marcuscaiado.github.io/gta-2/","description":"Rockstar's legendary top-down crime epic! Steal cars, outrun police, answer payphones, and rule the city in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Rockstar Games","Open World"],"badgeClass":"btn-gta"},{"id":"classic-doom","name":"Classic DOOM","icon":"🔥","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/classic-doom/","description":"The father of FPS! Rip and tear through phobos base with shotgun, chainsaw, rocket launcher and BFG9000 in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","id Software","FPS 60 FPS"],"badgeClass":"btn-doom"},{"id":"classic-pacman","name":"Pac-Man (1980 Classic Arcade)","icon":"🟡","category":"retro","unit":"PTS","url":"games/pacman/index.html","description":"The immortal 1980 Namco arcade classic! Chomp dots, dodge Blinky, Pinky, Inky & Clyde, grab Power Pellets and rack up high scores.","tech":["Canvas 2D","Namco 1980","Authentic Sound"],"badgeClass":"btn-pacman"},{"id":"sonic1","name":"Sonic The Hedgehog","icon":"🦔","category":"retro","unit":"RINGS","url":"games/sonic1/index.html","description":"Sega's supersonic blue blur! Blast through Green Hill Zone, collect gold rings and defeat Dr. Robotnik in 60 FPS WebAssembly.","tech":["WASM Sega Genesis","Sonic Team","60 FPS"],"badgeClass":"btn-sonic"},{"id":"sonic2","name":"Sonic The Hedgehog 2","icon":"🦊","category":"retro","unit":"RINGS","url":"games/sonic2/index.html","description":"The peak of 16-bit speed! Introducing Tails, the legendary Spin Dash Turbo, Chemical Plant Zone, and Super Sonic.","tech":["WASM Sega Genesis","Spin Dash","Sonic & Tails"],"badgeClass":"btn-sonic2"},{"id":"fzero","name":"F-Zero","icon":"🏎️","category":"retro","unit":"PTS","url":"games/fzero/index.html","description":"Nintendo's groundbreaking 1990 futuristic 400+ km/h Mode-7 hovercraft racer with Captain Falcon & the Blue Falcon.","tech":["WASM SNES Mode-7","Nintendo EAD","60 FPS"],"badgeClass":"btn-fzero"},{"id":"mk2","name":"Mortal Kombat II","icon":"🐉","category":"action","unit":"WINS","url":"games/mk2/index.html","description":"Midway's legendary arcade fighting sensation! Scorpion, Sub-Zero, Liu Kang, Shang Tsung, brutal Fatalities & Babalities.","tech":["WASM Sega Genesis","Midway Arcade","Fatalities"],"badgeClass":"btn-mk2"},{"id":"megaman2","name":"Mega Man 2","icon":"🤖","category":"retro","unit":"BOSSES","url":"games/megaman2/index.html","description":"Capcom's 8-bit platforming masterpiece! 8 Robot Masters, Metal Blade, Dr. Wily's Castle and the greatest NES soundtrack ever.","tech":["WASM NES","Capcom 1988","Chiptune Classic"],"badgeClass":"btn-megaman"},{"id":"outrun","name":"OutRun","icon":"🌴","category":"retro","unit":"CHECKPOINTS","url":"games/outrun/index.html","description":"Yu Suzuki's ultimate arcade driving fantasy! Cruise in the red Ferrari Testarossa with Magical Sound Shower on the radio.","tech":["WASM Sega Genesis","Yu Suzuki","Synthwave Classic"],"badgeClass":"btn-outrun"},{"id":"sor2","name":"Streets of Rage 2","icon":"💥","category":"action","unit":"KO","url":"games/sor2/index.html","description":"The crowned king of 90s beat-'em-ups! Axel, Blaze, Skate and Max brawl to Yuzo Koshiro's ground-shaking club house soundtrack.","tech":["WASM Sega Genesis","Yuzo Koshiro","4 Brawlers"],"badgeClass":"btn-sor2"},{"id":"topgear","name":"Top Gear","icon":"🏁","category":"retro","unit":"PTS","url":"games/topgear/index.html","description":"The sacred arcade racing holy grail! Hit the Nitro boost, screech around hairpin turns and blast Barry Leitch's immortal chiptune beats.","tech":["WASM SNES","Gremlin Graphics","Nitro Turbo"],"badgeClass":"btn-topgear"},{"id":"castlevania4","name":"Super Castlevania IV","icon":"🦇","category":"action","unit":"HEARTS","url":"games/castlevania4/index.html","description":"Konami's gothic 16-bit tour de force! 8-way directional whip swinging, rotating rooms, Mode-7 chandeliers and Dracula's legions.","tech":["WASM SNES","Konami 1991","8-Way Whip"],"badgeClass":"btn-castlevania"},{"id":"mslug","name":"Metal Slug (1996)","icon":"💥","category":"action","unit":"PTS","url":"games/mslug/index.html","description":"The immortal SNK Neo-Geo arcade run-and-gun! Blast General Morden's rebel forces with SV-001 tank, heavy machine gun, rocket launcher and rescue POWs.","tech":["WASM Neo-Geo","SNK Arcade","SV-001 Tank"],"badgeClass":"btn-mslug"},{"id":"mslugx","name":"Metal Slug X","icon":"💣","category":"action","unit":"PTS","url":"games/mslugx/index.html","description":"The super-upgraded Neo-Geo definitive edition! Laser guns, Iron Lizard, Super Grenades, alien invaders, mummies, and zero slowdowns at silky 60 FPS.","tech":["WASM Neo-Geo","SNK Arcade","Definitive Edition"],"badgeClass":"btn-mslugx"}]`);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qo="182",Fh=0,Ec=1,Oh=2,yr=1,kh=2,Ss=3,Fn=0,zt=1,At=2,In=0,Xi=1,Tc=2,wc=3,Ac=4,Bh=5,hi=100,zh=101,Gh=102,Hh=103,Vh=104,Wh=200,Xh=201,qh=202,Yh=203,Va=204,Wa=205,jh=206,$h=207,Kh=208,Zh=209,Jh=210,Qh=211,eu=212,tu=213,nu=214,Xa=0,qa=1,Ya=2,ji=3,ja=4,$a=5,Ka=6,Za=7,Ql=0,iu=1,su=2,yn=0,ed=1,td=2,nd=3,id=4,sd=5,rd=6,ad=7,od=300,xi=301,$i=302,Ja=303,Qa=304,Fr=306,Rs=1e3,Dn=1001,eo=1002,Rt=1003,ru=1004,$s=1005,mt=1006,jr=1007,fi=1008,qt=1009,cd=1010,ld=1011,Cs=1012,Yo=1013,Mn=1014,_n=1015,On=1016,jo=1017,$o=1018,Ps=1020,dd=35902,hd=35899,ud=1021,fd=1022,cn=1023,kn=1026,pi=1027,pd=1028,Ko=1029,Ki=1030,Zo=1031,Jo=1033,Sr=33776,Mr=33777,br=33778,Er=33779,to=35840,no=35841,io=35842,so=35843,ro=36196,ao=37492,oo=37496,co=37488,lo=37489,ho=37490,uo=37491,fo=37808,po=37809,mo=37810,go=37811,_o=37812,xo=37813,vo=37814,yo=37815,So=37816,Mo=37817,bo=37818,Eo=37819,To=37820,wo=37821,Ao=36492,Ro=36494,Co=36495,Po=36283,Lo=36284,Do=36285,Io=36286,au=3200,md=0,ou=1,Yn="",Zt="srgb",Zi="srgb-linear",Rr="linear",rt="srgb",Ei=7680,Rc=519,cu=512,lu=513,du=514,Qo=515,hu=516,uu=517,ec=518,fu=519,Uo=35044,Cc="300 es",xn=2e3,Cr=2001;function gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pu(){const i=Pr("canvas");return i.style.display="block",i}const Pc={};function Lr(...i){const e="THREE."+i.shift();console.log(e,...i)}function Be(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ze(...i){const e="THREE."+i.shift();console.error(e,...i)}function Ls(...i){const e=i.join(" ");e in Pc||(Pc[e]=!0,Be(...i))}function mu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,No=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function gu(i,e){return(i%e+e)%e}function Kr(i,e,t){return(1-t)*i+t*e}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);p=Math.sin(p*v)/M,o=Math.sin(o*v)/M,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+_*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+_*o;const v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zr.copy(this).projectOnVector(e),this.sub(Zr)}reflect(e){return this.sub(Zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new W,Lc=new Gs;class Ge{constructor(e,t,n,s,r,a,o,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],M=s[4],E=s[7],S=s[2],w=s[5],C=s[8];return r[0]=a*_+o*v+c*S,r[3]=a*m+o*M+c*w,r[6]=a*p+o*E+c*C,r[1]=l*_+h*v+d*S,r[4]=l*m+h*M+d*w,r[7]=l*p+h*E+d*C,r[2]=u*_+f*v+g*S,r[5]=u*m+f*M+g*w,r[8]=u*p+f*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jr.makeScale(e,t)),this}rotate(e){return this.premultiply(Jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new Ge,Dc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _u(){const i={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zi]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:Dc,fromXYZ:Ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Dc,fromXYZ:Ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}const Qe=_u();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class xu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=Pr("canvas")),Ti.width=e.width,Ti.height=e.height;const s=Ti.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vu=0;class tc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qr(s[a].image)):r.push(Qr(s[a]))}else r=Qr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let yu=0;const ea=new W;class Lt extends is{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Dn,s=Dn,r=mt,a=fi,o=cn,c=qt,l=Lt.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Kn(),this.name="",this.source=new tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=od;Lt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,E=(f+1)/2,S=(p+1)/2,w=(h+u)/4,C=(d+_)/4,P=(g+m)/4;return M>E&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=C/n):E>S?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=P/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Su extends is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Lt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new tc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Su{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _d extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mu extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Zs.subVectors(this.max,cs),wi.subVectors(e.a,cs),Ai.subVectors(e.b,cs),Ri.subVectors(e.c,cs),zn.subVectors(Ai,wi),Gn.subVectors(Ri,Ai),ii.subVectors(wi,Ri);let t=[0,-zn.z,zn.y,0,-Gn.z,Gn.y,0,-ii.z,ii.y,zn.z,0,-zn.x,Gn.z,0,-Gn.x,ii.z,0,-ii.x,-zn.y,zn.x,0,-Gn.y,Gn.x,0,-ii.y,ii.x,0];return!ta(t,wi,Ai,Ri,Zs)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,wi,Ai,Ri,Zs))?!1:(Js.crossVectors(zn,Gn),t=[Js.x,Js.y,Js.z],ta(t,wi,Ai,Ri,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wn=[new W,new W,new W,new W,new W,new W,new W,new W],rn=new W,Ks=new Hs,wi=new W,Ai=new W,Ri=new W,zn=new W,Gn=new W,ii=new W,cs=new W,Zs=new W,Js=new W,si=new W;function ta(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),c=e.dot(si),l=t.dot(si),h=n.dot(si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const bu=new Hs,ls=new W,na=new W;class nc{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(na)),this.expandByPoint(ls.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const An=new W,ia=new W,Qs=new W,Hn=new W,sa=new W,er=new W,ra=new W;class xd{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ia.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(ia);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=Hn.dot(this.direction),c=-Hn.dot(Qs),l=Hn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ia).addScaledVector(Qs,u),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,r){sa.subVectors(t,e),er.subVectors(n,e),ra.crossVectors(sa,er);let a=this.direction.dot(ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);const c=o*this.direction.dot(er.crossVectors(Hn,er));if(c<0)return null;const l=o*this.direction.dot(sa.cross(Hn));if(l<0||c+l>a)return null;const h=-o*Hn.dot(ra);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,g,_,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,_,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ci.setFromMatrixColumn(e,0).length(),r=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eu,e,Tu)}lookAt(e,t,n){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Vn.crossVectors(n,Vt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Vn.crossVectors(n,Vt)),Vn.normalize(),tr.crossVectors(Vt,Vn),s[0]=Vn.x,s[4]=tr.x,s[8]=Vt.x,s[1]=Vn.y,s[5]=tr.y,s[9]=Vt.y,s[2]=Vn.z,s[6]=tr.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],M=n[7],E=n[11],S=n[15],w=s[0],C=s[4],P=s[8],y=s[12],T=s[1],D=s[5],z=s[9],B=s[13],A=s[2],L=s[6],I=s[10],N=s[14],V=s[3],ee=s[7],te=s[11],U=s[15];return r[0]=a*w+o*T+c*A+l*V,r[4]=a*C+o*D+c*L+l*ee,r[8]=a*P+o*z+c*I+l*te,r[12]=a*y+o*B+c*N+l*U,r[1]=h*w+d*T+u*A+f*V,r[5]=h*C+d*D+u*L+f*ee,r[9]=h*P+d*z+u*I+f*te,r[13]=h*y+d*B+u*N+f*U,r[2]=g*w+_*T+m*A+p*V,r[6]=g*C+_*D+m*L+p*ee,r[10]=g*P+_*z+m*I+p*te,r[14]=g*y+_*B+m*N+p*U,r[3]=v*w+M*T+E*A+S*V,r[7]=v*C+M*D+E*L+S*ee,r[11]=v*P+M*z+E*I+S*te,r[15]=v*y+M*B+E*N+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],v=c*f-l*u,M=o*f-l*d,E=o*u-c*d,S=a*f-l*h,w=a*u-c*h,C=a*d-o*h;return t*(_*v-m*M+p*E)-n*(g*v-m*S+p*w)+s*(g*M-_*S+p*C)-r*(g*E-_*w+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=d*m*l-_*u*l+_*c*f-o*m*f-d*c*p+o*u*p,M=g*u*l-h*m*l-g*c*f+a*m*f+h*c*p-a*u*p,E=h*_*l-g*d*l+g*o*f-a*_*f-h*o*p+a*d*p,S=g*d*c-h*_*c-g*o*u+a*_*u+h*o*m-a*d*m,w=t*v+n*M+s*E+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=v*C,e[1]=(_*u*r-d*m*r-_*s*f+n*m*f+d*s*p-n*u*p)*C,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*C,e[3]=(d*c*r-o*u*r-d*s*l+n*u*l+o*s*f-n*c*f)*C,e[4]=M*C,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*C,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*C,e[7]=(a*u*r-h*c*r+h*s*l-t*u*l-a*s*f+t*c*f)*C,e[8]=E*C,e[9]=(g*d*r-h*_*r-g*n*f+t*_*f+h*n*p-t*d*p)*C,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*f-t*o*f)*C,e[12]=S*C,e[13]=(h*_*s-g*d*s+g*n*u-t*_*u-h*n*m+t*d*m)*C,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*C,e[15]=(a*d*s-h*o*s+h*n*c-t*d*c-a*n*u+t*o*u)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,v=c*l,M=c*h,E=c*d,S=n.x,w=n.y,C=n.z;return s[0]=(1-(_+p))*S,s[1]=(f+E)*S,s[2]=(g-M)*S,s[3]=0,s[4]=(f-E)*w,s[5]=(1-(u+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+M)*C,s[9]=(m-v)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Ci.set(s[0],s[1],s[2]).length();const a=Ci.set(s[4],s[5],s[6]).length(),o=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),an.copy(this);const l=1/r,h=1/a,d=1/o;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=xn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===xn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Cr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=xn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===xn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Cr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ci=new W,an=new gt,Eu=new W(0,0,0),Tu=new W(1,1,1),Vn=new W,tr=new W,Vt=new W,Uc=new gt,Nc=new Gs;class bn{constructor(e=0,t=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wu=0;const Fc=new W,Pi=new Gs,Rn=new gt,nr=new W,ds=new W,Au=new W,Ru=new Gs,Oc=new W(1,0,0),kc=new W(0,1,0),Bc=new W(0,0,1),zc={type:"added"},Cu={type:"removed"},Li={type:"childadded",child:null},aa={type:"childremoved",child:null};class wt extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new W,t=new bn,n=new Gs,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ge}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(ds,nr,this.up):Rn.lookAt(nr,ds,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Rn),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),Li.child=e,this.dispatchEvent(Li),Li.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cu),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,Au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new W(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new W,Cn=new W,oa=new W,Pn=new W,Di=new W,Ii=new W,Gc=new W,ca=new W,la=new W,da=new W,ha=new St,ua=new St,fa=new St;class Jt{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Cn.subVectors(n,t),oa.subVectors(e,t);const a=on.dot(on),o=on.dot(Cn),c=on.dot(oa),l=Cn.dot(Cn),h=Cn.dot(oa),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ha.setScalar(0),ua.setScalar(0),fa.setScalar(0),ha.fromBufferAttribute(e,t),ua.fromBufferAttribute(e,n),fa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ha,r.x),a.addScaledVector(ua,r.y),a.addScaledVector(fa,r.z),a}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Cn.subVectors(e,t),on.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),on.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Di.subVectors(s,n),Ii.subVectors(r,n),ca.subVectors(e,n);const c=Di.dot(ca),l=Ii.dot(ca);if(c<=0&&l<=0)return t.copy(n);la.subVectors(e,s);const h=Di.dot(la),d=Ii.dot(la);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Di,a);da.subVectors(e,r);const f=Di.dot(da),g=Ii.dot(da);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ii,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Gc.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Gc,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function pa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=gu(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=pa(a,r,e+1/3),this.g=pa(a,r,e),this.b=pa(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Qe.workingToColorSpace(Pt.copy(this),e),Math.round($e(Pt.r*255,0,255))*65536+Math.round($e(Pt.g*255,0,255))*256+Math.round($e(Pt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,s=Pt.g,r=Pt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Zt){Qe.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,s=Pt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(ir);const n=Kr(Wn.h,ir.h,t),s=Kr(Wn.s,ir.s,t),r=Kr(Wn.l,ir.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Ke;Ke.NAMES=vd;let Pu=0;class ss extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Xi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Wa,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dt extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new W,sr=new He;let Lu=0;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uo,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uo&&(e.usage=this.usage),e}}class yd extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sd extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Du=0;const Kt=new gt,ma=new wt,Ui=new W,Wt=new Hs,hs=new Hs,Tt=new W;class Ot extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Sd:yd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Wt.min,hs.min),Wt.expandByPoint(Tt),Tt.addVectors(Wt.max,hs.max),Wt.expandByPoint(Tt)):(Wt.expandByPoint(hs.min),Wt.expandByPoint(hs.max))}Wt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Tt.fromBufferAttribute(o,l),c&&(Ui.fromBufferAttribute(e,l),Tt.add(Ui)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new W,c[P]=new W;const l=new W,h=new W,d=new W,u=new He,f=new He,g=new He,_=new W,m=new W;function p(P,y,T){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,T),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,T),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[P].add(_),o[y].add(_),o[T].add(_),c[P].add(m),c[y].add(m),c[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,y=v.length;P<y;++P){const T=v[P],D=T.start,z=T.count;for(let B=D,A=D+z;B<A;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new W,E=new W,S=new W,w=new W;function C(P){S.fromBufferAttribute(s,P),w.copy(S);const y=o[P];M.copy(y),M.sub(S.multiplyScalar(S.dot(y))).normalize(),E.crossVectors(w,y);const D=E.dot(c[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,D)}for(let P=0,y=v.length;P<y;++P){const T=v[P],D=T.start,z=T.count;for(let B=D,A=D+z;B<A;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new W,r=new W,a=new W,o=new W,c=new W,l=new W,h=new W,d=new W;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new ln(u,h,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hc=new gt,ri=new xd,rr=new nc,Vc=new W,ar=new W,or=new W,cr=new W,ga=new W,lr=new W,Wc=new W,dr=new W;class ye extends wt{constructor(e=new Ot,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(ga.fromBufferAttribute(d,e),a?lr.addScaledVector(ga,h):lr.addScaledVector(ga.sub(t),h))}t.add(lr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(rr.containsPoint(ri.origin)===!1&&(ri.intersectSphere(rr,Vc)===null||ri.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Hc.copy(r).invert(),ri.copy(e.ray).applyMatrix4(Hc),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=v,S=M;E<S;E+=3){const w=o.getX(E),C=o.getX(E+1),P=o.getX(E+2);s=hr(this,p,e,n,l,h,d,w,C,P),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),M=o.getX(m+1),E=o.getX(m+2);s=hr(this,a,e,n,l,h,d,v,M,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let E=v,S=M;E<S;E+=3){const w=E,C=E+1,P=E+2;s=hr(this,p,e,n,l,h,d,w,C,P),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,M=m+1,E=m+2;s=hr(this,a,e,n,l,h,d,v,M,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Iu(i,e,t,n,s,r,a,o){let c;if(e.side===zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Fn,o),c===null)return null;dr.copy(o),dr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(dr);return l<t.near||l>t.far?null:{distance:l,point:dr.clone(),object:i}}function hr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ar),i.getVertexPosition(c,or),i.getVertexPosition(l,cr);const h=Iu(i,e,t,n,ar,or,cr,Wc);if(h){const d=new W;Jt.getBarycoord(Wc,ar,or,cr,d),s&&(h.uv=Jt.getInterpolatedAttribute(s,o,c,l,d,new He)),r&&(h.uv1=Jt.getInterpolatedAttribute(r,o,c,l,d,new He)),a&&(h.normal=Jt.getInterpolatedAttribute(a,o,c,l,d,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new W,materialIndex:0};Jt.getNormal(ar,or,cr,u.normal),h.face=u,h.barycoord=d}return h}class at extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function g(_,m,p,v,M,E,S,w,C,P,y){const T=E/C,D=S/P,z=E/2,B=S/2,A=w/2,L=C+1,I=P+1;let N=0,V=0;const ee=new W;for(let te=0;te<I;te++){const U=te*D-B;for(let H=0;H<L;H++){const re=H*T-z;ee[_]=re*v,ee[m]=U*M,ee[p]=A,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=w>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(H/C),d.push(1-te/P),N+=1}}for(let te=0;te<P;te++)for(let U=0;U<C;U++){const H=u+U+L*te,re=u+U+L*(te+1),be=u+(U+1)+L*(te+1),Ee=u+(U+1)+L*te;c.push(H,re,Ee),c.push(re,be,Ee),V+=6}o.addGroup(f,V,y),f+=V,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=Ji(i[t]);for(const s in n)e[s]=n[s]}return e}function Uu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Md(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Nu={clone:Ji,merge:Nt};var Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Uu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bd extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new W,Xc=new He,qc=new He;class Xt extends bd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=No*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return No*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,qc),t.subVectors(qc,Xc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Fi=1;class ku extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xt(Ni,Fi,e,t);s.layers=this.layers,this.add(s);const r=new Xt(Ni,Fi,e,t);r.layers=this.layers,this.add(r);const a=new Xt(Ni,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Ni,Fi,e,t);o.layers=this.layers,this.add(o);const c=new Xt(Ni,Fi,e,t);c.layers=this.layers,this.add(c);const l=new Xt(Ni,Fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ed extends Lt{constructor(e=[],t=xi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Td extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ed(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new at(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:In});r.uniforms.tEquirect.value=t;const a=new ye(s,r),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=mt),new ku(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class vn extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bu={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=n}clone(){return new sc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zu extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uo,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new W;class Dr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qi extends ss{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Oi;const us=new W,ki=new W,Bi=new W,zi=new He,fs=new He,wd=new gt,ur=new W,ps=new W,fr=new W,Yc=new He,xa=new He,jc=new He;class Ds extends wt{constructor(e=new Qi){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new Ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gu(t,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new Dr(n,3,0,!1)),Oi.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=Oi,this.material=e,this.center=new He(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),wd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Bi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;pr(ur.set(-.5,-.5,0),Bi,a,ki,s,r),pr(ps.set(.5,-.5,0),Bi,a,ki,s,r),pr(fr.set(.5,.5,0),Bi,a,ki,s,r),Yc.set(0,0),xa.set(1,0),jc.set(1,1);let o=e.ray.intersectTriangle(ur,ps,fr,!1,us);if(o===null&&(pr(ps.set(-.5,.5,0),Bi,a,ki,s,r),xa.set(0,1),o=e.ray.intersectTriangle(ur,fr,ps,!1,us),o===null))return;const c=e.ray.origin.distanceTo(us);c<e.near||c>e.far||t.push({distance:c,point:us.clone(),uv:Jt.getInterpolation(us,ur,ps,fr,Yc,xa,jc,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pr(i,e,t,n,s,r){zi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(fs.x=r*zi.x-s*zi.y,fs.y=s*zi.x+r*zi.y):fs.copy(zi),i.copy(e),i.x+=fs.x,i.y+=fs.y,i.applyMatrix4(wd)}class Hu extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Rt,h=Rt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const va=new W,Vu=new W,Wu=new Ge;class di{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=va.subVectors(n,t).cross(Vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wu.getNormalMatrix(e),s=this.coplanarPoint(va).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new nc,Xu=new He(.5,.5),mr=new W;class rc{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,a=new di){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],M=r[13],E=r[14],S=r[15];if(s[0].setComponents(l-a,f-h,p-g,S-v).normalize(),s[1].setComponents(l+a,f+h,p+g,S+v).normalize(),s[2].setComponents(l+o,f+d,p+_,S+M).normalize(),s[3].setComponents(l-o,f-d,p-_,S-M).normalize(),n)s[4].setComponents(c,u,m,E).normalize(),s[5].setComponents(l-c,f-u,p-m,S-E).normalize();else if(s[4].setComponents(l-c,f-u,p-m,S-E).normalize(),t===xn)s[5].setComponents(l+c,f+u,p+m,S+E).normalize();else if(t===Cr)s[5].setComponents(c,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=Xu.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(mr.x=s.normal.x>0?e.max.x:e.min.x,mr.y=s.normal.y>0?e.max.y:e.min.y,mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tn extends Lt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Is extends Lt{constructor(e,t,n=Mn,s,r,a,o=Rt,c=Rt,l,h=kn,d=1){if(h!==kn&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qu extends Is{constructor(e,t=Mn,n=xi,s,r,a=Rt,o=Rt,c,l=kn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ad extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends Ot{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new W,h=new He;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yt extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(f,2));function v(){const E=new W,S=new W;let w=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const y=[],T=P/r,D=T*(t-e)+e;for(let z=0;z<=s;z++){const B=z/s,A=B*c+o,L=Math.sin(A),I=Math.cos(A);S.x=D*L,S.y=-T*n+m,S.z=D*I,d.push(S.x,S.y,S.z),E.set(L,C,I).normalize(),u.push(E.x,E.y,E.z),f.push(B,1-T),y.push(g++)}_.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){const T=_[y][P],D=_[y+1][P],z=_[y+1][P+1],B=_[y][P+1];(e>0||y!==0)&&(h.push(T,D,B),w+=3),(t>0||y!==r-1)&&(h.push(D,z,B),w+=3)}l.addGroup(p,w,0),p+=w}function M(E){const S=g,w=new He,C=new W;let P=0;const y=E===!0?e:t,T=E===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*T,0),u.push(0,T,0),f.push(.5,.5),g++;const D=g;for(let z=0;z<=s;z++){const A=z/s*c+o,L=Math.cos(A),I=Math.sin(A);C.x=y*I,C.y=m*T,C.z=y*L,d.push(C.x,C.y,C.z),u.push(0,T,0),w.x=L*.5+.5,w.y=I*.5*T+.5,f.push(w.x,w.y),g++}for(let z=0;z<s;z++){const B=S+z,A=D+z;E===!0?h.push(A,A+1,B):h.push(A+1,A,B),P+=3}l.addGroup(p,P,E===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nn extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*u-a;for(let M=0;M<l;M++){const E=M*d-r;g.push(E,-v,0),_.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const M=v+l*p,E=v+l*(p+1),S=v+1+l*(p+1),w=v+1+l*p;f.push(M,E,w),f.push(E,S,w)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qn extends Ot{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let d=e;const u=(t-e)/s,f=new W,g=new He;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,M=v,E=v+n+1,S=v+n+2,w=v+1;o.push(M,E,w),o.push(E,S,w)}}this.setIndex(o),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vi extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new W,u=new W,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],M=p/n;let E=0;p===0&&a===0?E=.5/t:p===n&&c===Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){const w=S/t;d.x=-e*Math.cos(s+w*r)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(s+w*r)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+E,1-M),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const M=h[p][v+1],E=h[p][v],S=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&f.push(M,E,w),(p!==n-1||c<Math.PI)&&f.push(E,S,w)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ac extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new W,d=new W,u=new W;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;a.push(_,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yu extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xt extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ju extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $u extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kr extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ku extends kr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ya=new gt,$c=new W,Kc=new W;class Rd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),Kc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kc),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zu extends Rd{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}}class Sa extends kr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class oc extends bd{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ju extends Rd{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zc extends kr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Ju}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Qu extends kr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ef extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Jc=new gt;class nf{constructor(e,t,n=0,s=1/0){this.ray=new xd(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jc),this}intersectObject(e,t=!0,n=[]){return Fo(e,this,n,t),n.sort(Qc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fo(e[s],this,n,t);return n.sort(Qc),n}}function Qc(i,e){return i.distance-e.distance}function Fo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Fo(r[a],e,t,!0)}}function el(i,e,t,n){const s=sf(n);switch(t){case ud:return i*e;case pd:return i*e/s.components*s.byteLength;case Ko:return i*e/s.components*s.byteLength;case Ki:return i*e*2/s.components*s.byteLength;case Zo:return i*e*2/s.components*s.byteLength;case fd:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case Jo:return i*e*4/s.components*s.byteLength;case Sr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:case so:return Math.max(i,16)*Math.max(e,8)/4;case to:case io:return Math.max(i,8)*Math.max(e,8)/2;case ro:case ao:case co:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ao:case Ro:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Po:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Do:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sf(i){switch(i){case qt:case cd:return{byteLength:1,components:1};case Cs:case ld:case On:return{byteLength:2,components:1};case jo:case $o:return{byteLength:2,components:4};case Mn:case Yo:case _n:return{byteLength:4,components:1};case dd:case hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function rf(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
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
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
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
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vf=`#ifdef USE_IRIDESCENCE
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
#endif`,yf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cf=`#define PI 3.141592653589793
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
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
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
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
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
#endif`,sp=`uniform sampler2D dfgLUT;
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
}`,rp=`
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mp=`#if defined( USE_POINTS_UV )
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
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wp=`float getShadowMask() {
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
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lm=`varying vec3 vWorldDirection;
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
}`,hm=`#include <common>
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
}`,um=`#if DEPTH_PACKING == 3200
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
}`,fm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
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
}`,xm=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,ym=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,Mm=`#define LAMBERT
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
}`,bm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,Tm=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Am=`#define PHONG
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Dm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Fm=`uniform vec3 color;
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
}`,Om=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:cf,alphamap_pars_fragment:lf,alphatest_fragment:df,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:ff,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:xf,iridescence_fragment:vf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Ef,color_fragment:Tf,color_pars_fragment:wf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Df,displacementmap_vertex:If,emissivemap_fragment:Uf,emissivemap_pars_fragment:Nf,colorspace_fragment:Ff,colorspace_pars_fragment:Of,envmap_fragment:kf,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:Gf,envmap_physical_pars_fragment:Jf,envmap_vertex:Hf,fog_vertex:Vf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:jf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Kf,lights_pars_begin:Zf,lights_toon_fragment:Qf,lights_toon_pars_fragment:ep,lights_phong_fragment:tp,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:ap,lights_fragment_end:op,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:_p,morphinstance_vertex:xp,morphcolor_vertex:vp,morphnormal_vertex:yp,morphtarget_pars_vertex:Sp,morphtarget_vertex:Mp,normal_fragment_begin:bp,normal_fragment_maps:Ep,normal_pars_fragment:Tp,normal_pars_vertex:wp,normal_vertex:Ap,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Dp,opaque_fragment:Ip,packing:Up,premultiplied_alpha_fragment:Np,project_vertex:Fp,dithering_fragment:Op,dithering_pars_fragment:kp,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:Yp,skinnormal_vertex:jp,specularmap_fragment:$p,specularmap_pars_fragment:Kp,tonemapping_fragment:Zp,tonemapping_pars_fragment:Jp,transmission_fragment:Qp,transmission_pars_fragment:em,uv_pars_fragment:tm,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:cm,cube_vert:lm,cube_frag:dm,depth_vert:hm,depth_frag:um,distance_vert:fm,distance_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:_m,linedashed_frag:xm,meshbasic_vert:vm,meshbasic_frag:ym,meshlambert_vert:Sm,meshlambert_frag:Mm,meshmatcap_vert:bm,meshmatcap_frag:Em,meshnormal_vert:Tm,meshnormal_frag:wm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Im,points_frag:Um,shadow_vert:Nm,shadow_frag:Fm,sprite_vert:Om,sprite_frag:km},xe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mn={basic:{uniforms:Nt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Nt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Nt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Nt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Nt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Nt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Nt([xe.points,xe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Nt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Nt([xe.common,xe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Nt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Nt([xe.sprite,xe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Nt([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Nt([xe.lights,xe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};mn.physical={uniforms:Nt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const gr={r:0,b:0,g:0},oi=new bn,Bm=new gt;function zm(i,e,t,n,s,r,a){const o=new Ke(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?t:e).get(E)),E}function _(M){let E=!1;const S=g(M);S===null?p(o,c):S&&S.isColor&&(p(S,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,E){const S=g(E);S&&(S.isCubeTexture||S.mapping===Fr)?(h===void 0&&(h=new ye(new at(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ji(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),oi.copy(E.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(oi)),h.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,(d!==S||u!==S.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ye(new nn(2,2),new En({name:"BackgroundMaterial",uniforms:Ji(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,u=S.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,E){M.getRGB(gr,Md(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,E,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),c=E,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m,dispose:v}}function Gm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(T,D,z,B,A){let L=!1;const I=d(B,z,D);r!==I&&(r=I,l(r.object)),L=f(T,B,z,A),L&&g(T,B,z,A),A!==null&&e.update(A,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,E(T,D,z,B),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function d(T,D,z){const B=z.wireframe===!0;let A=n[T.id];A===void 0&&(A={},n[T.id]=A);let L=A[D.id];L===void 0&&(L={},A[D.id]=L);let I=L[B];return I===void 0&&(I=u(c()),L[B]=I),I}function u(T){const D=[],z=[],B=[];for(let A=0;A<t;A++)D[A]=0,z[A]=0,B[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:B,object:T,attributes:{},index:null}}function f(T,D,z,B){const A=r.attributes,L=D.attributes;let I=0;const N=z.getAttributes();for(const V in N)if(N[V].location>=0){const te=A[V];let U=L[V];if(U===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(U=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(U=T.instanceColor)),te===void 0||te.attribute!==U||U&&te.data!==U.data)return!0;I++}return r.attributesNum!==I||r.index!==B}function g(T,D,z,B){const A={},L=D.attributes;let I=0;const N=z.getAttributes();for(const V in N)if(N[V].location>=0){let te=L[V];te===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(te=T.instanceColor));const U={};U.attribute=te,te&&te.data&&(U.data=te.data),A[V]=U,I++}r.attributes=A,r.attributesNum=I,r.index=B}function _(){const T=r.newAttributes;for(let D=0,z=T.length;D<z;D++)T[D]=0}function m(T){p(T,0)}function p(T,D){const z=r.newAttributes,B=r.enabledAttributes,A=r.attributeDivisors;z[T]=1,B[T]===0&&(i.enableVertexAttribArray(T),B[T]=1),A[T]!==D&&(i.vertexAttribDivisor(T,D),A[T]=D)}function v(){const T=r.newAttributes,D=r.enabledAttributes;for(let z=0,B=D.length;z<B;z++)D[z]!==T[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function M(T,D,z,B,A,L,I){I===!0?i.vertexAttribIPointer(T,D,z,A,L):i.vertexAttribPointer(T,D,z,B,A,L)}function E(T,D,z,B){_();const A=B.attributes,L=z.getAttributes(),I=D.defaultAttributeValues;for(const N in L){const V=L[N];if(V.location>=0){let ee=A[N];if(ee===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),ee!==void 0){const te=ee.normalized,U=ee.itemSize,H=e.get(ee);if(H===void 0)continue;const re=H.buffer,be=H.type,Ee=H.bytesPerElement,$=be===i.INT||be===i.UNSIGNED_INT||ee.gpuType===Yo;if(ee.isInterleavedBufferAttribute){const Q=ee.data,me=Q.stride,Ue=ee.offset;if(Q.isInstancedInterleavedBuffer){for(let ue=0;ue<V.locationSize;ue++)p(V.location+ue,Q.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<V.locationSize;ue++)m(V.location+ue);i.bindBuffer(i.ARRAY_BUFFER,re);for(let ue=0;ue<V.locationSize;ue++)M(V.location+ue,U/V.locationSize,be,te,me*Ee,(Ue+U/V.locationSize*ue)*Ee,$)}else{if(ee.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,ee.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Q=0;Q<V.locationSize;Q++)M(V.location+Q,U/V.locationSize,be,te,U*Ee,U/V.locationSize*Q*Ee,$)}}else if(I!==void 0){const te=I[N];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(V.location,te);break;case 3:i.vertexAttrib3fv(V.location,te);break;case 4:i.vertexAttrib4fv(V.location,te);break;default:i.vertexAttrib1fv(V.location,te)}}}}v()}function S(){P();for(const T in n){const D=n[T];for(const z in D){const B=D[z];for(const A in B)h(B[A].object),delete B[A];delete D[z]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;const D=n[T.id];for(const z in D){const B=D[z];for(const A in B)h(B[A].object),delete B[A];delete D[z]}delete n[T.id]}function C(T){for(const D in n){const z=n[D];if(z[T.id]===void 0)continue;const B=z[T.id];for(const A in B)h(B[A].object),delete B[A];delete z[T.id]}}function P(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Hm(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Vm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==cn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==qt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_n&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Be("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:E,maxSamples:S,samples:w}}function Wm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new di,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,M=v*4;let E=p.clippingState||null;c.value=E,E=h(g,u,M,f);for(let S=0;S!==M;++S)E[S]=t[S];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=f;M!==_;++M,E+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Xm(i){let e=new WeakMap;function t(a,o){return o===Ja?a.mapping=xi:o===Qa&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ja||o===Qa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Td(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const jn=4,tl=[.125,.215,.35,.446,.526,.582],ui=20,qm=256,ms=new oc,nl=new Ke;let Ma=null,ba=0,Ea=0,Ta=!1;const Ym=new W;class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Ym}=r;Ma=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ma,ba,Ea),this._renderer.xr.enabled=Ta,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ma=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:On,format:cn,colorSpace:Zi,depthBuffer:!1},s=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jm(r)),this._blurMaterial=Km(r,e,t),this._ggxMaterial=$m(r,e,t)}return s}_compileMaterial(e){const t=new ye(new Ot,e);this._renderer.compile(t,ms)}_sceneToCubeUV(e,t,n,s,r){const c=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(nl),d.toneMapping=yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ye(new at,new dt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(nl),p=!0);for(let M=0;M<6;M++){const E=M%3;E===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):E===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const S=this._cubeSize;Gi(s,E*S,M>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(_,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===xi||e.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Gi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-jn?n-g+jn:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Gi(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,ms),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Gi(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,ms)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=l;const u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ui;m>ui&&Be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const p=[];let v=0;for(let C=0;C<ui;++C){const P=C/_,y=Math.exp(-P*P/2);p.push(y),C===0?v+=y:C<m&&(v+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const E=this._sizeLods[s],S=3*E*(s>M-jn?s-M+jn:0),w=4*(this._cubeSize-E);Gi(t,S,w,3*E,2*E),c.setRenderTarget(t),c.render(d,ms)}}function jm(i){const e=[],t=[],n=[];let s=i;const r=i-jn+1+tl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-jn?c=tl[a-i+jn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),M=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,P=w>2?0:-1,y=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(y,_*g*w),M.set(u,m*g*w);const T=[w,w,w,w,w,w];E.set(T,p*g*w)}const S=new Ot;S.setAttribute("position",new ln(v,_)),S.setAttribute("uv",new ln(M,m)),S.setAttribute("faceIndex",new ln(E,p)),n.push(new ye(S,null)),s>jn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function sl(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function $m(i,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Km(i,e,t){const n=new Float32Array(ui),s=new W(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Br(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function rl(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function al(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Br(){return`

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
	`}function Zm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ja||c===Qa,h=c===xi||c===$i;if(l||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new il(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new il(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Jm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ls("WebGLRenderer: "+n+" extension not supported."),s}}}function Qm(i,e,t,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let M=0,E=v.length;M<E;M+=3){const S=v[M+0],w=v[M+1],C=v[M+2];u.push(S,w,w,C,C,S)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,E=v.length/3-1;M<E;M+=3){const S=M+0,w=M+1,C=M+2;u.push(S,w,w,C,C,S)}}else return;const m=new(gd(u)?Sd:yd)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function eg(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function tg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ng(i,e,t){const n=new WeakMap,s=new St;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let E=o.attributes.position.count*M,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*S*4*d),C=new _d(w,E,S,d);C.type=_n,C.needsUpdate=!0;const P=M*4;for(let T=0;T<d;T++){const D=m[T],z=p[T],B=v[T],A=E*S*4*T;for(let L=0;L<D.count;L++){const I=L*P;f===!0&&(s.fromBufferAttribute(D,L),w[A+I+0]=s.x,w[A+I+1]=s.y,w[A+I+2]=s.z,w[A+I+3]=0),g===!0&&(s.fromBufferAttribute(z,L),w[A+I+4]=s.x,w[A+I+5]=s.y,w[A+I+6]=s.z,w[A+I+7]=0),_===!0&&(s.fromBufferAttribute(B,L),w[A+I+8]=s.x,w[A+I+9]=s.y,w[A+I+10]=s.z,w[A+I+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new He(E,S)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ig(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const sg={[ed]:"LINEAR_TONE_MAPPING",[td]:"REINHARD_TONE_MAPPING",[nd]:"CINEON_TONE_MAPPING",[id]:"ACES_FILMIC_TONE_MAPPING",[rd]:"AGX_TONE_MAPPING",[ad]:"NEUTRAL_TONE_MAPPING",[sd]:"CUSTOM_TONE_MAPPING"};function rg(i,e,t,n,s){const r=new Sn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Sn(e,t,{type:On,depthBuffer:!1,stencilBuffer:!1}),o=new Ot;o.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _t([0,2,0,0,2,0],2));const c=new Yu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new ye(o,c),h=new oc(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(v,M){r.setSize(v,M),a.setSize(v,M);for(let E=0;E<m.length;E++){const S=m[E];S.setSize&&S.setSize(v,M)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const M=r.width,E=r.height;for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(M,E)}},this.begin=function(v,M){if(f||v.toneMapping===yn&&m.length===0)return!1;if(_=M,M!==null){const E=M.width,S=M.height;(r.width!==E||r.height!==S)&&this.setSize(E,S)}return p===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=yn,!0},this.hasRenderPass=function(){return p},this.end=function(v,M){v.toneMapping=g,f=!0;let E=r,S=a;for(let w=0;w<m.length;w++){const C=m[w];if(C.enabled!==!1&&(C.render(v,S,E,M),C.needsSwap!==!1)){const P=E;E=S,S=P}}if(d!==v.outputColorSpace||u!==v.toneMapping){d=v.outputColorSpace,u=v.toneMapping,c.defines={},Qe.getTransfer(d)===rt&&(c.defines.SRGB_TRANSFER="");const w=sg[u];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(_),v.render(l,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Pd=new Lt,Oo=new Is(1,1),Ld=new _d,Dd=new Mu,Id=new Ed,ol=[],cl=[],ll=new Float32Array(16),dl=new Float32Array(9),hl=new Float32Array(4);function rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ol[s];if(r===void 0&&(r=new Float32Array(s),ol[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zr(i,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function dg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;hl.set(n),i.uniformMatrix2fv(this.addr,!1,hl),Et(t,n)}}function hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;dl.set(n),i.uniformMatrix3fv(this.addr,!1,dl),Et(t,n)}}function ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),Et(t,n)}}function fg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function _g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function Sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oo.compareFunction=t.isReversedDepthBuffer()?ec:Qo,r=Oo):r=Pd,t.setTexture2D(e||r,s)}function Mg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dd,s)}function bg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Id,s)}function Eg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ld,s)}function Tg(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return cg;case 35666:return lg;case 35674:return dg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return vg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Eg}}function wg(i,e){i.uniform1fv(this.addr,e)}function Ag(i,e){const t=rs(e,this.size,2);i.uniform2fv(this.addr,t)}function Rg(i,e){const t=rs(e,this.size,3);i.uniform3fv(this.addr,t)}function Cg(i,e){const t=rs(e,this.size,4);i.uniform4fv(this.addr,t)}function Pg(i,e){const t=rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lg(i,e){const t=rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dg(i,e){const t=rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ig(i,e){i.uniform1iv(this.addr,e)}function Ug(i,e){i.uniform2iv(this.addr,e)}function Ng(i,e){i.uniform3iv(this.addr,e)}function Fg(i,e){i.uniform4iv(this.addr,e)}function Og(i,e){i.uniform1uiv(this.addr,e)}function kg(i,e){i.uniform2uiv(this.addr,e)}function Bg(i,e){i.uniform3uiv(this.addr,e)}function zg(i,e){i.uniform4uiv(this.addr,e)}function Gg(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Oo:a=Pd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Hg(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Dd,r[a])}function Vg(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Id,r[a])}function Wg(i,e,t){const n=this.cache,s=e.length,r=zr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ld,r[a])}function Xg(i){switch(i){case 5126:return wg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ig;case 35667:case 35671:return Ug;case 35668:case 35672:return Ng;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return kg;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Wg}}class qg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tg(t.type)}}class Yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}}class jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function ul(i,e){i.seq.push(e),i.map[e.id]=e}function $g(i,e,t){const n=i.name,s=n.length;for(wa.lastIndex=0;;){const r=wa.exec(n),a=wa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ul(t,l===void 0?new qg(o,i,e):new Yg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new jg(o),ul(t,d)),t=d}}}class Tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);$g(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function fl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kg=37297;let Zg=0;function Jg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const pl=new Ge;function Qg(i){Qe._getMatrix(pl,Qe.workingColorSpace,i);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Rr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ml(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Jg(i.getShaderSource(e),o)}else return r}function e0(i,e){const t=Qg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const t0={[ed]:"Linear",[td]:"Reinhard",[nd]:"Cineon",[id]:"ACESFilmic",[rd]:"AgX",[ad]:"Neutral",[sd]:"Custom"};function n0(i,e){const t=t0[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _r=new W;function i0(){Qe.getLuminanceCoefficients(_r);const i=_r.x.toFixed(4),e=_r.y.toFixed(4),t=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function r0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function a0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ms(i){return i!==""}function gl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(i){return i.replace(o0,l0)}const c0=new Map;function l0(i,e){let t=Ve[e];if(t===void 0){const n=c0.get(e);if(n!==void 0)t=Ve[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ko(t)}const d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(i){return i.replace(d0,h0)}function h0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const u0={[yr]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function f0(i){return u0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p0={[xi]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function m0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":p0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const g0={[$i]:"ENVMAP_MODE_REFRACTION"};function _0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":g0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const x0={[Ql]:"ENVMAP_BLENDING_MULTIPLY",[iu]:"ENVMAP_BLENDING_MIX",[su]:"ENVMAP_BLENDING_ADD"};function v0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x0[i.combine]||"ENVMAP_BLENDING_NONE"}function y0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function S0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=f0(t),l=m0(t),h=_0(t),d=v0(t),u=y0(t),f=s0(t),g=r0(r),_=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(m=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==yn?n0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,e0("linearToOutputTexel",t.outputColorSpace),i0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=ko(a),a=gl(a,t),a=_l(a,t),o=ko(o),o=gl(o,t),o=_l(o,t),a=xl(a),o=xl(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+a,E=v+p+o,S=fl(s,s.VERTEX_SHADER,M),w=fl(s,s.FRAGMENT_SHADER,E);s.attachShader(_,S),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(S)||"",A=s.getShaderInfoLog(w)||"",L=z.trim(),I=B.trim(),N=A.trim();let V=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,w);else{const te=ml(s,S,"vertex"),U=ml(s,w,"fragment");Ze("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+te+`
`+U)}else L!==""?Be("WebGLProgram: Program Info Log:",L):(I===""||N==="")&&(ee=!1);ee&&(D.diagnostics={runnable:V,programLog:L,vertexShader:{log:I,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(S),s.deleteShader(w),P=new Tr(s,_),y=a0(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(_,Kg)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let M0=0;class b0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new E0(e),t.set(e,n)),n}}class E0{constructor(e){this.id=M0++,this.code=e,this.usedTimes=0}}function T0(i,e,t,n,s,r,a){const o=new ic,c=new b0,l=new Set,h=[],d=new Map,u=s.logarithmicDepthBuffer;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,T,D,z,B){const A=z.fog,L=B.geometry,I=y.isMeshStandardMaterial?z.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||I),V=N&&N.mapping===Fr?N.image.height:null,ee=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&Be("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,U=te!==void 0?te.length:0;let H=0;L.morphAttributes.position!==void 0&&(H=1),L.morphAttributes.normal!==void 0&&(H=2),L.morphAttributes.color!==void 0&&(H=3);let re,be,Ee,$;if(ee){const it=mn[ee];re=it.vertexShader,be=it.fragmentShader}else re=y.vertexShader,be=y.fragmentShader,c.update(y),Ee=c.getVertexShaderID(y),$=c.getFragmentShaderID(y);const Q=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ue=B.isInstancedMesh===!0,ue=B.isBatchedMesh===!0,Ie=!!y.map,Je=!!y.matcap,Ne=!!N,Xe=!!y.aoMap,Pe=!!y.lightMap,Oe=!!y.bumpMap,tt=!!y.normalMap,F=!!y.displacementMap,ut=!!y.emissiveMap,Ye=!!y.metalnessMap,je=!!y.roughnessMap,we=y.anisotropy>0,R=y.clearcoat>0,x=y.dispersion>0,k=y.iridescence>0,J=y.sheen>0,K=y.transmission>0,j=we&&!!y.anisotropyMap,Me=R&&!!y.clearcoatMap,he=R&&!!y.clearcoatNormalMap,ne=R&&!!y.clearcoatRoughnessMap,le=k&&!!y.iridescenceMap,Z=k&&!!y.iridescenceThicknessMap,ae=J&&!!y.sheenColorMap,ie=J&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ce=!!y.specularColorMap,ze=!!y.specularIntensityMap,O=K&&!!y.transmissionMap,_e=K&&!!y.thicknessMap,de=!!y.gradientMap,Se=!!y.alphaMap,oe=y.alphaTest>0,se=!!y.alphaHash,pe=!!y.extensions;let ke=yn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ke=i.toneMapping);const ft={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:re,fragmentShader:be,defines:y.defines,customVertexShaderID:Ee,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ue,batchingColor:ue&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Zi,alphaToCoverage:!!y.alphaToCoverage,map:Ie,matcap:Je,envMap:Ne,envMapMode:Ne&&N.mapping,envMapCubeUVHeight:V,aoMap:Xe,lightMap:Pe,bumpMap:Oe,normalMap:tt,displacementMap:F,emissiveMap:ut,normalMapObjectSpace:tt&&y.normalMapType===ou,normalMapTangentSpace:tt&&y.normalMapType===md,metalnessMap:Ye,roughnessMap:je,anisotropy:we,anisotropyMap:j,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:he,clearcoatRoughnessMap:ne,dispersion:x,iridescence:k,iridescenceMap:le,iridescenceThicknessMap:Z,sheen:J,sheenColorMap:ae,sheenRoughnessMap:ie,specularMap:fe,specularColorMap:ce,specularIntensityMap:ze,transmission:K,transmissionMap:O,thicknessMap:_e,gradientMap:de,opaque:y.transparent===!1&&y.blending===Xi&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:oe,alphaHash:se,combine:y.combine,mapUv:Ie&&_(y.map.channel),aoMapUv:Xe&&_(y.aoMap.channel),lightMapUv:Pe&&_(y.lightMap.channel),bumpMapUv:Oe&&_(y.bumpMap.channel),normalMapUv:tt&&_(y.normalMap.channel),displacementMapUv:F&&_(y.displacementMap.channel),emissiveMapUv:ut&&_(y.emissiveMap.channel),metalnessMapUv:Ye&&_(y.metalnessMap.channel),roughnessMapUv:je&&_(y.roughnessMap.channel),anisotropyMapUv:j&&_(y.anisotropyMap.channel),clearcoatMapUv:Me&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(y.sheenRoughnessMap.channel),specularMapUv:fe&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:ze&&_(y.specularIntensityMap.channel),transmissionMapUv:O&&_(y.transmissionMap.channel),thicknessMapUv:_e&&_(y.thicknessMap.channel),alphaMapUv:Se&&_(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(tt||we),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!L.attributes.uv&&(Ie||Se),fog:!!A,useFog:y.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:B.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:H,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ie&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:ut&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===At,flipSided:y.side===zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:pe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&y.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)T.push(D),T.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(T,y),M(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){const T=g[y.type];let D;if(T){const z=mn[T];D=Nu.clone(z.uniforms)}else D=y.uniforms;return D}function S(y,T){let D=d.get(T);return D!==void 0?++D.usedTimes:(D=new S0(i,T,y,r),h.push(D),d.set(T,D)),D}function w(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),d.delete(y.cacheKey),y.destroy()}}function C(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:S,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:P}}function w0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function A0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,f,g,_,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||A0),n.length>1&&n.sort(u||yl),s.length>1&&s.sort(u||yl)}function h(){for(let d=e,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function R0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Sl,i.set(n,[a])):s>=r.length?(a=new Sl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function C0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ke};break;case"SpotLight":t={position:new W,direction:new W,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function P0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let L0=0;function D0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function I0(i){const e=new C0,t=P0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);const s=new W,r=new gt,a=new gt;function o(l){let h=0,d=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,M=0,E=0,S=0,w=0,C=0;l.sort(D0);for(let y=0,T=l.length;y<T;y++){const D=l[y],z=D.color,B=D.intensity,A=D.distance;let L=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ki?L=D.shadow.map.texture:L=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*B,d+=z.g*B,u+=z.b*B;else if(D.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(D.sh.coefficients[I],B);C++}else if(D.isDirectionalLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const N=D.shadow,V=t.get(D);V.shadowIntensity=N.intensity,V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=D.shadow.matrix,v++}n.directional[f]=I,f++}else if(D.isSpotLight){const I=e.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(z).multiplyScalar(B),I.distance=A,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,n.spot[_]=I;const N=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,N.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=N.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=N.intensity,V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=L,E++}_++}else if(D.isRectAreaLight){const I=e.get(D);I.color.copy(z).multiplyScalar(B),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=I,m++}else if(D.isPointLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),I.distance=D.distance,I.decay=D.decay,D.castShadow){const N=D.shadow,V=t.get(D);V.shadowIntensity=N.intensity,V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,V.shadowCameraNear=N.camera.near,V.shadowCameraFar=N.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=I,g++}else if(D.isHemisphereLight){const I=e.get(D);I.skyColor.copy(D.color).multiplyScalar(B),I.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=I,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==E||P.numSpotMaps!==S||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=E,P.numSpotMaps=S,P.numLightProbes=C,n.version=L0++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(M.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Ml(i){const e=new I0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function U0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ml(i),e.set(s,[o])):r>=a.length?(o=new Ml(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
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
}`,O0=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],k0=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],bl=new gt,gs=new W,Aa=new W;function B0(i,e,t){let n=new rc;const s=new He,r=new He,a=new St,o=new ju,c=new $u,l={},h=t.maxTextureSize,d={[Fn]:zt,[zt]:Fn,[At]:At},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:N0,fragmentShader:F0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ye(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yr;let p=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===kh&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=yr);const y=i.getRenderTarget(),T=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(In),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==this.type;B&&C.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(L=>L.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,L=w.length;A<L;A++){const I=w[A],N=I.shadow;if(N===void 0){Be("WebGLShadowMap:",I,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const V=N.getFrameExtents();if(s.multiply(V),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,N.mapSize.y=r.y)),N.map===null||B===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Ss){if(I.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Sn(s.x,s.y,{format:Ki,type:On,minFilter:mt,magFilter:mt,generateMipmaps:!1}),N.map.texture.name=I.name+".shadowMap",N.map.depthTexture=new Is(s.x,s.y,_n),N.map.depthTexture.name=I.name+".shadowMapDepth",N.map.depthTexture.format=kn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Rt,N.map.depthTexture.magFilter=Rt}else{I.isPointLight?(N.map=new Td(s.x),N.map.depthTexture=new qu(s.x,Mn)):(N.map=new Sn(s.x,s.y),N.map.depthTexture=new Is(s.x,s.y,Mn)),N.map.depthTexture.name=I.name+".shadowMap",N.map.depthTexture.format=kn;const te=i.state.buffers.depth.getReversed();this.type===yr?(N.map.depthTexture.compareFunction=te?ec:Qo,N.map.depthTexture.minFilter=mt,N.map.depthTexture.magFilter=mt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Rt,N.map.depthTexture.magFilter=Rt)}N.camera.updateProjectionMatrix()}const ee=N.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<ee;te++){if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,te),i.clear();else{te===0&&(i.setRenderTarget(N.map),i.clear());const U=N.getViewport(te);a.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),z.viewport(a)}if(I.isPointLight){const U=N.camera,H=N.matrix,re=I.distance||U.far;re!==U.far&&(U.far=re,U.updateProjectionMatrix()),gs.setFromMatrixPosition(I.matrixWorld),U.position.copy(gs),Aa.copy(U.position),Aa.add(O0[te]),U.up.copy(k0[te]),U.lookAt(Aa),U.updateMatrixWorld(),H.makeTranslation(-gs.x,-gs.y,-gs.z),bl.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),N._frustum.setFromProjectionMatrix(bl,U.coordinateSystem,U.reversedDepth)}else N.updateMatrices(I);n=N.getFrustum(),E(C,P,N.camera,I,this.type)}N.isPointLightShadow!==!0&&this.type===Ss&&v(N,P),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,T,D)};function v(w,C){const P=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Sn(s.x,s.y,{format:Ki,type:On})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,P,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function M(w,C,P,y){let T=null;const D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)T=D;else if(T=P.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=T.uuid,B=C.uuid;let A=l[z];A===void 0&&(A={},l[z]=A);let L=A[B];L===void 0&&(L=T.clone(),A[B]=L,C.addEventListener("dispose",S)),T=L}if(T.visible=C.visible,T.wireframe=C.wireframe,y===Ss?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:d[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=i.properties.get(T);z.light=P}return T}function E(w,C,P,y,T){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Ss)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const B=e.update(w),A=w.material;if(Array.isArray(A)){const L=B.groups;for(let I=0,N=L.length;I<N;I++){const V=L[I],ee=A[V.materialIndex];if(ee&&ee.visible){const te=M(w,ee,y,T);w.onBeforeShadow(i,w,C,P,B,te,V),i.renderBufferDirect(P,null,B,te,w,V),w.onAfterShadow(i,w,C,P,B,te,V)}}}else if(A.visible){const L=M(w,A,y,T);w.onBeforeShadow(i,w,C,P,B,L,null),i.renderBufferDirect(P,null,B,L,w,null),w.onAfterShadow(i,w,C,P,B,L,null)}}const z=w.children;for(let B=0,A=z.length;B<A;B++)E(z[B],C,P,y,T)}function S(w){w.target.removeEventListener("dispose",S);for(const P in l){const y=l[P],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const z0={[Xa]:qa,[Ya]:Ka,[ja]:Za,[ji]:$a,[qa]:Xa,[Ka]:Ya,[Za]:ja,[$a]:ji};function G0(i,e){function t(){let O=!1;const _e=new St;let de=null;const Se=new St(0,0,0,0);return{setMask:function(oe){de!==oe&&!O&&(i.colorMask(oe,oe,oe,oe),de=oe)},setLocked:function(oe){O=oe},setClear:function(oe,se,pe,ke,ft){ft===!0&&(oe*=ke,se*=ke,pe*=ke),_e.set(oe,se,pe,ke),Se.equals(_e)===!1&&(i.clearColor(oe,se,pe,ke),Se.copy(_e))},reset:function(){O=!1,de=null,Se.set(-1,0,0,0)}}}function n(){let O=!1,_e=!1,de=null,Se=null,oe=null;return{setReversed:function(se){if(_e!==se){const pe=e.get("EXT_clip_control");se?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),_e=se;const ke=oe;oe=null,this.setClear(ke)}},getReversed:function(){return _e},setTest:function(se){se?Q(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(se){de!==se&&!O&&(i.depthMask(se),de=se)},setFunc:function(se){if(_e&&(se=z0[se]),Se!==se){switch(se){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=se}},setLocked:function(se){O=se},setClear:function(se){oe!==se&&(_e&&(se=1-se),i.clearDepth(se),oe=se)},reset:function(){O=!1,de=null,Se=null,oe=null,_e=!1}}}function s(){let O=!1,_e=null,de=null,Se=null,oe=null,se=null,pe=null,ke=null,ft=null;return{setTest:function(it){O||(it?Q(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(it){_e!==it&&!O&&(i.stencilMask(it),_e=it)},setFunc:function(it,fn,Tn){(de!==it||Se!==fn||oe!==Tn)&&(i.stencilFunc(it,fn,Tn),de=it,Se=fn,oe=Tn)},setOp:function(it,fn,Tn){(se!==it||pe!==fn||ke!==Tn)&&(i.stencilOp(it,fn,Tn),se=it,pe=fn,ke=Tn)},setLocked:function(it){O=it},setClear:function(it){ft!==it&&(i.clearStencil(it),ft=it)},reset:function(){O=!1,_e=null,de=null,Se=null,oe=null,se=null,pe=null,ke=null,ft=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,E=null,S=null,w=null,C=new Ke(0,0,0),P=0,y=!1,T=null,D=null,z=null,B=null,A=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,N=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(V)[1]),I=N>=1):V.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),I=N>=2);let ee=null,te={};const U=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),re=new St().fromArray(U),be=new St().fromArray(H);function Ee(O,_e,de,Se){const oe=new Uint8Array(4),se=i.createTexture();i.bindTexture(O,se),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<de;pe++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(_e+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return se}const $={};$[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ji),Oe(!1),tt(Ec),Q(i.CULL_FACE),Xe(In);function Q(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function me(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ue(O,_e){return d[O]!==_e?(i.bindFramebuffer(O,_e),d[O]=_e,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=_e),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function ue(O,_e){let de=f,Se=!1;if(O){de=u.get(_e),de===void 0&&(de=[],u.set(_e,de));const oe=O.textures;if(de.length!==oe.length||de[0]!==i.COLOR_ATTACHMENT0){for(let se=0,pe=oe.length;se<pe;se++)de[se]=i.COLOR_ATTACHMENT0+se;de.length=oe.length,Se=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Se=!0);Se&&i.drawBuffers(de)}function Ie(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const Je={[hi]:i.FUNC_ADD,[zh]:i.FUNC_SUBTRACT,[Gh]:i.FUNC_REVERSE_SUBTRACT};Je[Hh]=i.MIN,Je[Vh]=i.MAX;const Ne={[Wh]:i.ZERO,[Xh]:i.ONE,[qh]:i.SRC_COLOR,[Va]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Kh]:i.DST_COLOR,[jh]:i.DST_ALPHA,[Yh]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[Zh]:i.ONE_MINUS_DST_COLOR,[$h]:i.ONE_MINUS_DST_ALPHA,[Qh]:i.CONSTANT_COLOR,[eu]:i.ONE_MINUS_CONSTANT_COLOR,[tu]:i.CONSTANT_ALPHA,[nu]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(O,_e,de,Se,oe,se,pe,ke,ft,it){if(O===In){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),O!==Bh){if(O!==m||it!==y){if((p!==hi||E!==hi)&&(i.blendEquation(i.FUNC_ADD),p=hi,E=hi),it)switch(O){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",O);break}else switch(O){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wc:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",O);break}v=null,M=null,S=null,w=null,C.set(0,0,0),P=0,m=O,y=it}return}oe=oe||_e,se=se||de,pe=pe||Se,(_e!==p||oe!==E)&&(i.blendEquationSeparate(Je[_e],Je[oe]),p=_e,E=oe),(de!==v||Se!==M||se!==S||pe!==w)&&(i.blendFuncSeparate(Ne[de],Ne[Se],Ne[se],Ne[pe]),v=de,M=Se,S=se,w=pe),(ke.equals(C)===!1||ft!==P)&&(i.blendColor(ke.r,ke.g,ke.b,ft),C.copy(ke),P=ft),m=O,y=!1}function Pe(O,_e){O.side===At?me(i.CULL_FACE):Q(i.CULL_FACE);let de=O.side===zt;_e&&(de=!de),Oe(de),O.blending===Xi&&O.transparent===!1?Xe(In):Xe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Se=O.stencilWrite;o.setTest(Se),Se&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ut(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(O){T!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),T=O)}function tt(O){O!==Fh?(Q(i.CULL_FACE),O!==D&&(O===Ec?i.cullFace(i.BACK):O===Oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),D=O}function F(O){O!==z&&(I&&i.lineWidth(O),z=O)}function ut(O,_e,de){O?(Q(i.POLYGON_OFFSET_FILL),(B!==_e||A!==de)&&(i.polygonOffset(_e,de),B=_e,A=de)):me(i.POLYGON_OFFSET_FILL)}function Ye(O){O?Q(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function je(O){O===void 0&&(O=i.TEXTURE0+L-1),ee!==O&&(i.activeTexture(O),ee=O)}function we(O,_e,de){de===void 0&&(ee===null?de=i.TEXTURE0+L-1:de=ee);let Se=te[de];Se===void 0&&(Se={type:void 0,texture:void 0},te[de]=Se),(Se.type!==O||Se.texture!==_e)&&(ee!==de&&(i.activeTexture(de),ee=de),i.bindTexture(O,_e||$[O]),Se.type=O,Se.texture=_e)}function R(){const O=te[ee];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function J(){try{i.texSubImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function K(){try{i.texSubImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function he(){try{i.texStorage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function ne(){try{i.texStorage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function le(){try{i.texImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function Z(){try{i.texImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function ae(O){re.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),re.copy(O))}function ie(O){be.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),be.copy(O))}function fe(O,_e){let de=l.get(_e);de===void 0&&(de=new WeakMap,l.set(_e,de));let Se=de.get(O);Se===void 0&&(Se=i.getUniformBlockIndex(_e,O.name),de.set(O,Se))}function ce(O,_e){const Se=l.get(_e).get(O);c.get(_e)!==Se&&(i.uniformBlockBinding(_e,Se,O.__bindingPointIndex),c.set(_e,Se))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,te={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,M=null,E=null,S=null,w=null,C=new Ke(0,0,0),P=0,y=!1,T=null,D=null,z=null,B=null,A=null,re.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:me,bindFramebuffer:Ue,drawBuffers:ue,useProgram:Ie,setBlending:Xe,setMaterial:Pe,setFlipSided:Oe,setCullFace:tt,setLineWidth:F,setPolygonOffset:ut,setScissorTest:Ye,activeTexture:je,bindTexture:we,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:le,texImage3D:Z,updateUBOMapping:fe,uniformBlockBinding:ce,texStorage2D:he,texStorage3D:ne,texSubImage2D:J,texSubImage3D:K,compressedTexSubImage2D:j,compressedTexSubImage3D:Me,scissor:ae,viewport:ie,reset:ze}}function H0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return f?new OffscreenCanvas(R,x):Pr("canvas")}function _(R,x,k){let J=1;const K=we(R);if((K.width>k||K.height>k)&&(J=k/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(J*K.width),Me=Math.floor(J*K.height);d===void 0&&(d=g(j,Me));const he=x?g(j,Me):d;return he.width=j,he.height=Me,he.getContext("2d").drawImage(R,0,0,j,Me),Be("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+Me+")."),he}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,x,k,J,K=!1){if(R!==null){if(i[R]!==void 0)return i[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=x;if(x===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),x===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){const Me=K?Rr:Qe.getTransfer(J);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=Me===rt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(R,x){let k;return R?x===null||x===Mn||x===Ps?k=i.DEPTH24_STENCIL8:x===_n?k=i.DEPTH32F_STENCIL8:x===Cs&&(k=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mn||x===Ps?k=i.DEPTH_COMPONENT24:x===_n?k=i.DEPTH_COMPONENT32F:x===Cs&&(k=i.DEPTH_COMPONENT16),k}function S(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Rt&&R.minFilter!==mt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),P(x),x.isVideoTexture&&h.delete(x)}function C(R){const x=R.target;x.removeEventListener("dispose",C),T(x)}function P(R){const x=n.get(R);if(x.__webglInit===void 0)return;const k=R.source,J=u.get(k);if(J){const K=J[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(R),Object.keys(J).length===0&&u.delete(k)}n.remove(R)}function y(R){const x=n.get(R);i.deleteTexture(x.__webglTexture);const k=R.source,J=u.get(k);delete J[x.__cacheKey],a.memory.textures--}function T(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let K=0;K<x.__webglFramebuffer[J].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[J][K]);else i.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)i.deleteFramebuffer(x.__webglFramebuffer[J]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=R.textures;for(let J=0,K=k.length;J<K;J++){const j=n.get(k[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(R)}let D=0;function z(){D=0}function B(){const R=D;return R>=s.maxTextures&&Be("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function A(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function L(R,x){const k=n.get(R);if(R.isVideoTexture&&Ye(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const J=R.image;if(J===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,R,x);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function I(R,x){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){$(k,R,x);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function N(R,x){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){$(k,R,x);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function V(R,x){const k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Q(k,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}const ee={[Rs]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},te={[Rt]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[mt]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},U={[cu]:i.NEVER,[fu]:i.ALWAYS,[lu]:i.LESS,[Qo]:i.LEQUAL,[du]:i.EQUAL,[ec]:i.GEQUAL,[hu]:i.GREATER,[uu]:i.NOTEQUAL};function H(R,x){if(x.type===_n&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===mt||x.magFilter===jr||x.magFilter===$s||x.magFilter===fi||x.minFilter===mt||x.minFilter===jr||x.minFilter===$s||x.minFilter===fi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ee[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ee[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ee[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,te[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,te[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,U[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rt||x.minFilter!==$s&&x.minFilter!==fi||x.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function re(R,x){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const J=x.source;let K=u.get(J);K===void 0&&(K={},u.set(J,K));const j=A(x);if(j!==R.__cacheKey){K[j]===void 0&&(K[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[j].usedTimes++;const Me=K[R.__cacheKey];Me!==void 0&&(K[R.__cacheKey].usedTimes--,Me.usedTimes===0&&y(x)),R.__cacheKey=j,R.__webglTexture=K[j].texture}return k}function be(R,x,k){return Math.floor(Math.floor(R/k)/x)}function Ee(R,x,k,J){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,k,J,x.data);else{j.sort((Z,ae)=>Z.start-ae.start);let Me=0;for(let Z=1;Z<j.length;Z++){const ae=j[Me],ie=j[Z],fe=ae.start+ae.count,ce=be(ie.start,x.width,4),ze=be(ae.start,x.width,4);ie.start<=fe+1&&ce===ze&&be(ie.start+ie.count-1,x.width,4)===ce?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++Me,j[Me]=ie)}j.length=Me+1;const he=i.getParameter(i.UNPACK_ROW_LENGTH),ne=i.getParameter(i.UNPACK_SKIP_PIXELS),le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Z=0,ae=j.length;Z<ae;Z++){const ie=j[Z],fe=Math.floor(ie.start/4),ce=Math.ceil(ie.count/4),ze=fe%x.width,O=Math.floor(fe/x.width),_e=ce,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,ze,O,_e,de,k,J,x.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function $(R,x,k){let J=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=i.TEXTURE_3D);const K=re(R,x),j=x.source;t.bindTexture(J,R.__webglTexture,i.TEXTURE0+k);const Me=n.get(j);if(j.version!==Me.__version||K===!0){t.activeTexture(i.TEXTURE0+k);const he=Qe.getPrimaries(Qe.workingColorSpace),ne=x.colorSpace===Yn?null:Qe.getPrimaries(x.colorSpace),le=x.colorSpace===Yn||he===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Z=_(x.image,!1,s.maxTextureSize);Z=je(x,Z);const ae=r.convert(x.format,x.colorSpace),ie=r.convert(x.type);let fe=M(x.internalFormat,ae,ie,x.colorSpace,x.isVideoTexture);H(J,x);let ce;const ze=x.mipmaps,O=x.isVideoTexture!==!0,_e=Me.__version===void 0||K===!0,de=j.dataReady,Se=S(x,Z);if(x.isDepthTexture)fe=E(x.format===pi,x.type),_e&&(O?t.texStorage2D(i.TEXTURE_2D,1,fe,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,fe,Z.width,Z.height,0,ae,ie,null));else if(x.isDataTexture)if(ze.length>0){O&&_e&&t.texStorage2D(i.TEXTURE_2D,Se,fe,ze[0].width,ze[0].height);for(let oe=0,se=ze.length;oe<se;oe++)ce=ze[oe],O?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ce.width,ce.height,ae,ie,ce.data):t.texImage2D(i.TEXTURE_2D,oe,fe,ce.width,ce.height,0,ae,ie,ce.data);x.generateMipmaps=!1}else O?(_e&&t.texStorage2D(i.TEXTURE_2D,Se,fe,Z.width,Z.height),de&&Ee(x,Z,ae,ie)):t.texImage2D(i.TEXTURE_2D,0,fe,Z.width,Z.height,0,ae,ie,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,fe,ze[0].width,ze[0].height,Z.depth);for(let oe=0,se=ze.length;oe<se;oe++)if(ce=ze[oe],x.format!==cn)if(ae!==null)if(O){if(de)if(x.layerUpdates.size>0){const pe=el(ce.width,ce.height,x.format,x.type);for(const ke of x.layerUpdates){const ft=ce.data.subarray(ke*pe/ce.data.BYTES_PER_ELEMENT,(ke+1)*pe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,ke,ce.width,ce.height,1,ae,ft)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ce.width,ce.height,Z.depth,ae,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,fe,ce.width,ce.height,Z.depth,0,ce.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ce.width,ce.height,Z.depth,ae,ie,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,fe,ce.width,ce.height,Z.depth,0,ae,ie,ce.data)}else{O&&_e&&t.texStorage2D(i.TEXTURE_2D,Se,fe,ze[0].width,ze[0].height);for(let oe=0,se=ze.length;oe<se;oe++)ce=ze[oe],x.format!==cn?ae!==null?O?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,fe,ce.width,ce.height,0,ce.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ce.width,ce.height,ae,ie,ce.data):t.texImage2D(i.TEXTURE_2D,oe,fe,ce.width,ce.height,0,ae,ie,ce.data)}else if(x.isDataArrayTexture)if(O){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,fe,Z.width,Z.height,Z.depth),de)if(x.layerUpdates.size>0){const oe=el(Z.width,Z.height,x.format,x.type);for(const se of x.layerUpdates){const pe=Z.data.subarray(se*oe/Z.data.BYTES_PER_ELEMENT,(se+1)*oe/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,Z.width,Z.height,1,ae,ie,pe)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ae,ie,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,Z.width,Z.height,Z.depth,0,ae,ie,Z.data);else if(x.isData3DTexture)O?(_e&&t.texStorage3D(i.TEXTURE_3D,Se,fe,Z.width,Z.height,Z.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ae,ie,Z.data)):t.texImage3D(i.TEXTURE_3D,0,fe,Z.width,Z.height,Z.depth,0,ae,ie,Z.data);else if(x.isFramebufferTexture){if(_e)if(O)t.texStorage2D(i.TEXTURE_2D,Se,fe,Z.width,Z.height);else{let oe=Z.width,se=Z.height;for(let pe=0;pe<Se;pe++)t.texImage2D(i.TEXTURE_2D,pe,fe,oe,se,0,ae,ie,null),oe>>=1,se>>=1}}else if(ze.length>0){if(O&&_e){const oe=we(ze[0]);t.texStorage2D(i.TEXTURE_2D,Se,fe,oe.width,oe.height)}for(let oe=0,se=ze.length;oe<se;oe++)ce=ze[oe],O?de&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ae,ie,ce):t.texImage2D(i.TEXTURE_2D,oe,fe,ae,ie,ce);x.generateMipmaps=!1}else if(O){if(_e){const oe=we(Z);t.texStorage2D(i.TEXTURE_2D,Se,fe,oe.width,oe.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ie,Z)}else t.texImage2D(i.TEXTURE_2D,0,fe,ae,ie,Z);m(x)&&p(J),Me.__version=j.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Q(R,x,k){if(x.image.length!==6)return;const J=re(R,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const j=n.get(K);if(K.version!==j.__version||J===!0){t.activeTexture(i.TEXTURE0+k);const Me=Qe.getPrimaries(Qe.workingColorSpace),he=x.colorSpace===Yn?null:Qe.getPrimaries(x.colorSpace),ne=x.colorSpace===Yn||Me===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,Z=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let se=0;se<6;se++)!le&&!Z?ae[se]=_(x.image[se],!0,s.maxCubemapSize):ae[se]=Z?x.image[se].image:x.image[se],ae[se]=je(x,ae[se]);const ie=ae[0],fe=r.convert(x.format,x.colorSpace),ce=r.convert(x.type),ze=M(x.internalFormat,fe,ce,x.colorSpace),O=x.isVideoTexture!==!0,_e=j.__version===void 0||J===!0,de=K.dataReady;let Se=S(x,ie);H(i.TEXTURE_CUBE_MAP,x);let oe;if(le){O&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,ze,ie.width,ie.height);for(let se=0;se<6;se++){oe=ae[se].mipmaps;for(let pe=0;pe<oe.length;pe++){const ke=oe[pe];x.format!==cn?fe!==null?O?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,0,0,ke.width,ke.height,fe,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,ze,ke.width,ke.height,0,ke.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,0,0,ke.width,ke.height,fe,ce,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe,ze,ke.width,ke.height,0,fe,ce,ke.data)}}}else{if(oe=x.mipmaps,O&&_e){oe.length>0&&Se++;const se=we(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,ze,se.width,se.height)}for(let se=0;se<6;se++)if(Z){O?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ae[se].width,ae[se].height,fe,ce,ae[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,ae[se].width,ae[se].height,0,fe,ce,ae[se].data);for(let pe=0;pe<oe.length;pe++){const ft=oe[pe].image[se].image;O?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,0,0,ft.width,ft.height,fe,ce,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,ze,ft.width,ft.height,0,fe,ce,ft.data)}}else{O?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,fe,ce,ae[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ze,fe,ce,ae[se]);for(let pe=0;pe<oe.length;pe++){const ke=oe[pe];O?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,0,0,fe,ce,ke.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,pe+1,ze,fe,ce,ke.image[se])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),j.__version=K.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function me(R,x,k,J,K,j){const Me=r.convert(k.format,k.colorSpace),he=r.convert(k.type),ne=M(k.internalFormat,Me,he,k.colorSpace),le=n.get(x),Z=n.get(k);if(Z.__renderTarget=x,!le.__hasExternalTextures){const ae=Math.max(1,x.width>>j),ie=Math.max(1,x.height>>j);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,j,ne,ae,ie,x.depth,0,Me,he,null):t.texImage2D(K,j,ne,ae,ie,0,Me,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,K,Z.__webglTexture,0,F(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,K,Z.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(R,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){const J=x.depthTexture,K=J&&J.isDepthTexture?J.type:null,j=E(x.stencilBuffer,K),Me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F(x),j,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,F(x),j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,R)}else{const J=x.textures;for(let K=0;K<J.length;K++){const j=J[K],Me=r.convert(j.format,j.colorSpace),he=r.convert(j.type),ne=M(j.internalFormat,Me,he,j.colorSpace);ut(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F(x),ne,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,F(x),ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(R,x,k){const J=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),H(i.TEXTURE_CUBE_MAP,x.depthTexture);const le=r.convert(x.depthTexture.format),Z=r.convert(x.depthTexture.type);let ae;x.depthTexture.format===kn?ae=i.DEPTH_COMPONENT24:x.depthTexture.format===pi&&(ae=i.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ae,x.width,x.height,0,le,Z,null)}}else L(x.depthTexture,0);const j=K.__webglTexture,Me=F(x),he=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ne=x.depthTexture.format===pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===kn)ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,he,j,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,ne,he,j,0);else if(x.depthTexture.format===pi)ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,he,j,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,ne,he,j,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const x=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=J}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let J=0;J<6;J++)ue(x.__webglFramebuffer[J],R,J);else{const J=R.texture.mipmaps;J&&J.length>0?ue(x.__webglFramebuffer[0],R,0):ue(x.__webglFramebuffer,R,0)}else if(k){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=i.createRenderbuffer(),Ue(x.__webglDepthbuffer[J],R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,j)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ue(x.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(R,x,k){const J=n.get(R);x!==void 0&&me(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ie(R)}function Ne(R){const x=R.texture,k=n.get(R),J=n.get(x);R.addEventListener("dispose",C);const K=R.textures,j=R.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,a.memory.textures++),j){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let ne=0;ne<x.mipmaps.length;ne++)k.__webglFramebuffer[he][ne]=i.createFramebuffer()}else k.__webglFramebuffer[he]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)k.__webglFramebuffer[he]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Me)for(let he=0,ne=K.length;he<ne;he++){const le=n.get(K[he]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ut(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<K.length;he++){const ne=K[he];k.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const le=r.convert(ne.format,ne.colorSpace),Z=r.convert(ne.type),ae=M(ne.internalFormat,le,Z,ne.colorSpace,R.isXRRenderTarget===!0),ie=F(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,ae,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,k.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),H(i.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)me(k.__webglFramebuffer[he][ne],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ne);else me(k.__webglFramebuffer[he],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let he=0,ne=K.length;he<ne;he++){const le=K[he],Z=n.get(le);let ae=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),H(ae,le),me(k.__webglFramebuffer,R,le,i.COLOR_ATTACHMENT0+he,ae,0),m(le)&&p(ae)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,J.__webglTexture),H(he,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)me(k.__webglFramebuffer[ne],R,x,i.COLOR_ATTACHMENT0,he,ne);else me(k.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,he,0);m(x)&&p(he),t.unbindTexture()}R.depthBuffer&&Ie(R)}function Xe(R){const x=R.textures;for(let k=0,J=x.length;k<J;k++){const K=x[k];if(m(K)){const j=v(R),Me=n.get(K).__webglTexture;t.bindTexture(j,Me),p(j),t.unbindTexture()}}}const Pe=[],Oe=[];function tt(R){if(R.samples>0){if(ut(R)===!1){const x=R.textures,k=R.width,J=R.height;let K=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(R),he=x.length>1;if(he)for(let le=0;le<x.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ne=R.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let le=0;le<x.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[le]);const Z=n.get(x[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,K,i.NEAREST),c===!0&&(Pe.length=0,Oe.length=0,Pe.push(i.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pe.push(j),Oe.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let le=0;le<x.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,Me.__webglColorRenderbuffer[le]);const Z=n.get(x[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function F(R){return Math.min(s.maxSamples,R.samples)}function ut(R){const x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ye(R){const x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function je(R,x){const k=R.colorSpace,J=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Zi&&k!==Yn&&(Qe.getTransfer(k)===rt?(J!==cn||K!==qt)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),x}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=L,this.setTexture2DArray=I,this.setTexture3D=N,this.setTextureCube=V,this.rebindTextures=Je,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function V0(i,e){function t(n,s=Yn){let r;const a=Qe.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cd)return i.BYTE;if(n===ld)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Yo)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===ud)return i.ALPHA;if(n===fd)return i.RGB;if(n===cn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===pi)return i.DEPTH_STENCIL;if(n===pd)return i.RED;if(n===Ko)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Zo)return i.RG_INTEGER;if(n===Jo)return i.RGBA_INTEGER;if(n===Sr||n===Mr||n===br||n===Er)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===no||n===io||n===so)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===ao||n===oo||n===co||n===lo||n===ho||n===uo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ro||n===ao)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===co)return r.COMPRESSED_R11_EAC;if(n===lo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ho)return r.COMPRESSED_RG11_EAC;if(n===uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===yo||n===So||n===Mo||n===bo||n===Eo||n===To||n===wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===po)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===go)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===Ro||n===Co)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Po||n===Lo||n===Do||n===Io)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const W0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
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

}`;class q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ad(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:W0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ye(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends is{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new q0,p={},v=t.getContextAttributes();let M=null,E=null;const S=[],w=[],C=new He;let P=null;const y=new Xt;y.viewport=new St;const T=new Xt;T.viewport=new St;const D=[y,T],z=new ef;let B=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=S[$];return Q===void 0&&(Q=new _a,S[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=S[$];return Q===void 0&&(Q=new _a,S[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=S[$];return Q===void 0&&(Q=new _a,S[$]=Q),Q.getHandSpace()};function L($){const Q=w.indexOf($.inputSource);if(Q===-1)return;const me=S[Q];me!==void 0&&(me.update($.inputSource,$.frame,l||a),me.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",N);for(let $=0;$<S.length;$++){const Q=w[$];Q!==null&&(w[$]=null,S[$].disconnect(Q))}B=null,A=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(M),f=null,u=null,d=null,s=null,E=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",I),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=v.stencil?pi:kn,Ue=v.stencil?Ps:Mn);const Ie={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ie),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Sn(u.textureWidth,u.textureHeight,{format:cn,type:qt,depthTexture:new Is(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Sn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N($){for(let Q=0;Q<$.removed.length;Q++){const me=$.removed[Q],Ue=w.indexOf(me);Ue>=0&&(w[Ue]=null,S[Ue].disconnect(me))}for(let Q=0;Q<$.added.length;Q++){const me=$.added[Q];let Ue=w.indexOf(me);if(Ue===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=w.length){w.push(me),Ue=Ie;break}else if(w[Ie]===null){w[Ie]=me,Ue=Ie;break}if(Ue===-1)break}const ue=S[Ue];ue&&ue.connect(me)}}const V=new W,ee=new W;function te($,Q,me){V.setFromMatrixPosition(Q.matrixWorld),ee.setFromMatrixPosition(me.matrixWorld);const Ue=V.distanceTo(ee),ue=Q.projectionMatrix.elements,Ie=me.projectionMatrix.elements,Je=ue[14]/(ue[10]-1),Ne=ue[14]/(ue[10]+1),Xe=(ue[9]+1)/ue[5],Pe=(ue[9]-1)/ue[5],Oe=(ue[8]-1)/ue[0],tt=(Ie[8]+1)/Ie[0],F=Je*Oe,ut=Je*tt,Ye=Ue/(-Oe+tt),je=Ye*-Oe;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(je),$.translateZ(Ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ue[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const we=Je+Ye,R=Ne+Ye,x=F-je,k=ut+(Ue-je),J=Xe*Ne/R*we,K=Pe*Ne/R*we;$.projectionMatrix.makePerspective(x,k,J,K,we,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function U($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,me=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(me=m.depthFar)),z.near=T.near=y.near=Q,z.far=T.far=y.far=me,(B!==z.near||A!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),B=z.near,A=z.far),z.layers.mask=$.layers.mask|6,y.layers.mask=z.layers.mask&3,T.layers.mask=z.layers.mask&5;const Ue=$.parent,ue=z.cameras;U(z,Ue);for(let Ie=0;Ie<ue.length;Ie++)U(ue[Ie],Ue);ue.length===2?te(z,y,T):z.projectionMatrix.copy(y.projectionMatrix),H($,z,Ue)};function H($,Q,me){me===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=No*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return p[$]};let re=null;function be($,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Ue=!1;me.length!==z.cameras.length&&(z.cameras.length=0,Ue=!0);for(let Ne=0;Ne<me.length;Ne++){const Xe=me[Ne];let Pe=null;if(f!==null)Pe=f.getViewport(Xe);else{const tt=d.getViewSubImage(u,Xe);Pe=tt.viewport,Ne===0&&(e.setRenderTargetTextures(E,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(E))}let Oe=D[Ne];Oe===void 0&&(Oe=new Xt,Oe.layers.enable(Ne),Oe.viewport=new St,D[Ne]=Oe),Oe.matrix.fromArray(Xe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Xe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Ne===0&&(z.matrix.copy(Oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ue===!0&&z.cameras.push(Oe)}const ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Ne=d.getDepthInformation(me[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,s.renderState)}if(ue&&ue.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ne=0;Ne<me.length;Ne++){const Xe=me[Ne].camera;if(Xe){let Pe=p[Xe];Pe||(Pe=new Ad,p[Xe]=Pe);const Oe=d.getCameraImage(Xe);Pe.sourceTexture=Oe}}}}for(let me=0;me<S.length;me++){const Ue=w[me],ue=S[me];Ue!==null&&ue!==void 0&&ue.update(Ue,Q,l||a)}re&&re($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ee=new Cd;Ee.setAnimationLoop(be),this.setAnimationLoop=function($){re=$},this.dispose=function(){}}}const ci=new bn,j0=new gt;function $0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Md(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),M=v.envMap,E=v.envMapRotation;M&&(m.envMap.value=M,ci.copy(E),ci.x*=-1,ci.y*=-1,ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(j0.makeRotationFromEuler(ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function K0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const E=M.program;n.uniformBlockBinding(v,E)}function l(v,M){let E=s[v.id];E===void 0&&(g(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",m));const S=M.program;n.updateUBOMapping(v,S);const w=e.render.frame;r[v.id]!==w&&(u(v),r[v.id]=w)}function h(v){const M=d();v.__bindingPointIndex=M;const E=i.createBuffer(),S=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const M=s[v.id],E=v.uniforms,S=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,C=E.length;w<C;w++){const P=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,T=P.length;y<T;y++){const D=P[y];if(f(D,w,y,S)===!0){const z=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let A=0;for(let L=0;L<B.length;L++){const I=B[L],N=_(I);typeof I=="number"||typeof I=="boolean"?(D.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,z+A,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=0,D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=0,D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=0):(I.toArray(D.__data,A),A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,E,S){const w=v.value,C=M+"_"+E;if(S[C]===void 0)return typeof w=="number"||typeof w=="boolean"?S[C]=w:S[C]=w.clone(),!0;{const P=S[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return S[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(v){const M=v.uniforms;let E=0;const S=16;for(let C=0,P=M.length;C<P;C++){const y=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,D=y.length;T<D;T++){const z=y[T],B=Array.isArray(z.value)?z.value:[z.value];for(let A=0,L=B.length;A<L;A++){const I=B[A],N=_(I),V=E%S,ee=V%N.boundary,te=V+ee;E+=ee,te!==0&&S-te<N.storage&&(E+=S-te),z.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=N.storage}}}const w=E%S;return w>0&&(E+=S-w),v.__size=E,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}const Z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pn=null;function J0(){return pn===null&&(pn=new Hu(Z0,16,16,Ki,On),pn.name="DFG_LUT",pn.minFilter=mt,pn.magFilter=mt,pn.wrapS=Dn,pn.wrapT=Dn,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class Q0{constructor(e={}){const{canvas:t=pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=qt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([Jo,Zo,Ko]),p=new Set([qt,Mn,Cs,Ps,jo,$o]),v=new Uint32Array(4),M=new Int32Array(4);let E=null,S=null;const w=[],C=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let T=!1;this._outputColorSpace=Zt;let D=0,z=0,B=null,A=-1,L=null;const I=new St,N=new St;let V=null;const ee=new Ke(0);let te=0,U=t.width,H=t.height,re=1,be=null,Ee=null;const $=new St(0,0,U,H),Q=new St(0,0,U,H);let me=!1;const Ue=new rc;let ue=!1,Ie=!1;const Je=new gt,Ne=new W,Xe=new St,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function tt(){return B===null?re:1}let F=n;function ut(b,G){return t.getContext(b,G)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qo}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",it,!1),F===null){const G="webgl2";if(F=ut(G,b),F===null)throw ut(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ze("WebGLRenderer: "+b.message),b}let Ye,je,we,R,x,k,J,K,j,Me,he,ne,le,Z,ae,ie,fe,ce,ze,O,_e,de,Se,oe;function se(){Ye=new Jm(F),Ye.init(),de=new V0(F,Ye),je=new Vm(F,Ye,e,de),we=new G0(F,Ye),je.reversedDepthBuffer&&u&&we.buffers.depth.setReversed(!0),R=new tg(F),x=new w0,k=new H0(F,Ye,we,x,je,de,R),J=new Xm(y),K=new Zm(y),j=new rf(F),Se=new Gm(F,j),Me=new Qm(F,j,R,Se),he=new ig(F,Me,j,R),ze=new ng(F,je,k),ie=new Wm(x),ne=new T0(y,J,K,Ye,je,Se,ie),le=new $0(y,x),Z=new R0,ae=new U0(Ye),ce=new zm(y,J,K,we,he,g,c),fe=new B0(y,he,je),oe=new K0(F,R,je,we),O=new Hm(F,Ye,R),_e=new eg(F,Ye,R),R.programs=ne.programs,y.capabilities=je,y.extensions=Ye,y.properties=x,y.renderLists=Z,y.shadowMap=fe,y.state=we,y.info=R}se(),_!==qt&&(P=new rg(_,t.width,t.height,s,r));const pe=new Y0(y,F);this.xr=pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(b){b!==void 0&&(re=b,this.setSize(U,H,!1))},this.getSize=function(b){return b.set(U,H)},this.setSize=function(b,G,Y=!0){if(pe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,H=G,t.width=Math.floor(b*re),t.height=Math.floor(G*re),Y===!0&&(t.style.width=b+"px",t.style.height=G+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(U*re,H*re).floor()},this.setDrawingBufferSize=function(b,G,Y){U=b,H=G,re=Y,t.width=Math.floor(b*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,b,G)},this.setEffects=function(b){if(_===qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let G=0;G<b.length;G++)if(b[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,G,Y,q){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,G,Y,q),we.viewport(I.copy($).multiplyScalar(re).round())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,G,Y,q){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,G,Y,q),we.scissor(N.copy(Q).multiplyScalar(re).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(b){we.setScissorTest(me=b)},this.setOpaqueSort=function(b){be=b},this.setTransparentSort=function(b){Ee=b},this.getClearColor=function(b){return b.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(b=!0,G=!0,Y=!0){let q=0;if(b){let X=!1;if(B!==null){const ge=B.texture.format;X=m.has(ge)}if(X){const ge=B.texture.type,Te=p.has(ge),ve=ce.getClearColor(),Ae=ce.getClearAlpha(),Ce=ve.r,Fe=ve.g,Le=ve.b;Te?(v[0]=Ce,v[1]=Fe,v[2]=Le,v[3]=Ae,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=Ce,M[1]=Fe,M[2]=Le,M[3]=Ae,F.clearBufferiv(F.COLOR,0,M))}else q|=F.COLOR_BUFFER_BIT}G&&(q|=F.DEPTH_BUFFER_BIT),Y&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",it,!1),ce.dispose(),Z.dispose(),ae.dispose(),x.dispose(),J.dispose(),K.dispose(),he.dispose(),Se.dispose(),oe.dispose(),ne.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",gc),pe.removeEventListener("sessionend",_c),ti.stop()};function ke(b){b.preventDefault(),Lr("WebGLRenderer: Context Lost."),T=!0}function ft(){Lr("WebGLRenderer: Context Restored."),T=!1;const b=R.autoReset,G=fe.enabled,Y=fe.autoUpdate,q=fe.needsUpdate,X=fe.type;se(),R.autoReset=b,fe.enabled=G,fe.autoUpdate=Y,fe.needsUpdate=q,fe.type=X}function it(b){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fn(b){const G=b.target;G.removeEventListener("dispose",fn),Tn(G)}function Tn(b){Eh(b),x.remove(b)}function Eh(b){const G=x.get(b).programs;G!==void 0&&(G.forEach(function(Y){ne.releaseProgram(Y)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,Y,q,X,ge){G===null&&(G=Pe);const Te=X.isMesh&&X.matrixWorld.determinant()<0,ve=wh(b,G,Y,q,X);we.setMaterial(q,Te);let Ae=Y.index,Ce=1;if(q.wireframe===!0){if(Ae=Me.getWireframeAttribute(Y),Ae===void 0)return;Ce=2}const Fe=Y.drawRange,Le=Y.attributes.position;let qe=Fe.start*Ce,ct=(Fe.start+Fe.count)*Ce;ge!==null&&(qe=Math.max(qe,ge.start*Ce),ct=Math.min(ct,(ge.start+ge.count)*Ce)),Ae!==null?(qe=Math.max(qe,0),ct=Math.min(ct,Ae.count)):Le!=null&&(qe=Math.max(qe,0),ct=Math.min(ct,Le.count));const vt=ct-qe;if(vt<0||vt===1/0)return;Se.setup(X,q,ve,Y,Ae);let yt,ht=O;if(Ae!==null&&(yt=j.get(Ae),ht=_e,ht.setIndex(yt)),X.isMesh)q.wireframe===!0?(we.setLineWidth(q.wireframeLinewidth*tt()),ht.setMode(F.LINES)):ht.setMode(F.TRIANGLES);else if(X.isLine){let De=q.linewidth;De===void 0&&(De=1),we.setLineWidth(De*tt()),X.isLineSegments?ht.setMode(F.LINES):X.isLineLoop?ht.setMode(F.LINE_LOOP):ht.setMode(F.LINE_STRIP)}else X.isPoints?ht.setMode(F.POINTS):X.isSprite&&ht.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ls("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ht.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const De=X._multiDrawStarts,st=X._multiDrawCounts,et=X._multiDrawCount,Gt=Ae?j.get(Ae).bytesPerElement:1,bi=x.get(q).currentProgram.getUniforms();for(let Ht=0;Ht<et;Ht++)bi.setValue(F,"_gl_DrawID",Ht),ht.render(De[Ht]/Gt,st[Ht])}else if(X.isInstancedMesh)ht.renderInstances(qe,vt,X.count);else if(Y.isInstancedBufferGeometry){const De=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,st=Math.min(Y.instanceCount,De);ht.renderInstances(qe,vt,st)}else ht.render(qe,vt)};function mc(b,G,Y){b.transparent===!0&&b.side===At&&b.forceSinglePass===!1?(b.side=zt,b.needsUpdate=!0,Ys(b,G,Y),b.side=Fn,b.needsUpdate=!0,Ys(b,G,Y),b.side=At):Ys(b,G,Y)}this.compile=function(b,G,Y=null){Y===null&&(Y=b),S=ae.get(Y),S.init(G),C.push(S),Y.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),b!==Y&&b.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights();const q=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Te=0;Te<ge.length;Te++){const ve=ge[Te];mc(ve,Y,X),q.add(ve)}else mc(ge,Y,X),q.add(ge)}),S=C.pop(),q},this.compileAsync=function(b,G,Y=null){const q=this.compile(b,G,Y);return new Promise(X=>{function ge(){if(q.forEach(function(Te){x.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){X(b);return}setTimeout(ge,10)}Ye.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Xr=null;function Th(b){Xr&&Xr(b)}function gc(){ti.stop()}function _c(){ti.start()}const ti=new Cd;ti.setAnimationLoop(Th),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){Xr=b,pe.setAnimationLoop(b),b===null?ti.stop():ti.start()},pe.addEventListener("sessionstart",gc),pe.addEventListener("sessionend",_c),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const Y=pe.enabled===!0&&pe.isPresenting===!0,q=P!==null&&(B===null||Y)&&P.begin(y,B);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,G,B),S=ae.get(b,C.length),S.init(G),C.push(S),Je.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ue.setFromProjectionMatrix(Je,xn,G.reversedDepth),Ie=this.localClippingEnabled,ue=ie.init(this.clippingPlanes,Ie),E=Z.get(b,w.length),E.init(),w.push(E),pe.enabled===!0&&pe.isPresenting===!0){const Te=y.xr.getDepthSensingMesh();Te!==null&&qr(Te,G,-1/0,y.sortObjects)}qr(b,G,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(be,Ee),Oe=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Oe&&ce.addToRenderList(E,b),this.info.render.frame++,ue===!0&&ie.beginShadows();const X=S.state.shadowsArray;if(fe.render(X,b,G),ue===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&P.hasRenderPass())===!1){const Te=E.opaque,ve=E.transmissive;if(S.setupLights(),G.isArrayCamera){const Ae=G.cameras;if(ve.length>0)for(let Ce=0,Fe=Ae.length;Ce<Fe;Ce++){const Le=Ae[Ce];vc(Te,ve,b,Le)}Oe&&ce.render(b);for(let Ce=0,Fe=Ae.length;Ce<Fe;Ce++){const Le=Ae[Ce];xc(E,b,Le,Le.viewport)}}else ve.length>0&&vc(Te,ve,b,G),Oe&&ce.render(b),xc(E,b,G)}B!==null&&z===0&&(k.updateMultisampleRenderTarget(B),k.updateRenderTargetMipmap(B)),q&&P.end(y),b.isScene===!0&&b.onAfterRender(y,b,G),Se.resetDefaultState(),A=-1,L=null,C.pop(),C.length>0?(S=C[C.length-1],ue===!0&&ie.setGlobalState(y.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function qr(b,G,Y,q){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){q&&Xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Je);const Te=he.update(b),ve=b.material;ve.visible&&E.push(b,Te,ve,Y,Xe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const Te=he.update(b),ve=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xe.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Xe.copy(Te.boundingSphere.center)),Xe.applyMatrix4(b.matrixWorld).applyMatrix4(Je)),Array.isArray(ve)){const Ae=Te.groups;for(let Ce=0,Fe=Ae.length;Ce<Fe;Ce++){const Le=Ae[Ce],qe=ve[Le.materialIndex];qe&&qe.visible&&E.push(b,Te,qe,Y,Xe.z,Le)}}else ve.visible&&E.push(b,Te,ve,Y,Xe.z,null)}}const ge=b.children;for(let Te=0,ve=ge.length;Te<ve;Te++)qr(ge[Te],G,Y,q)}function xc(b,G,Y,q){const{opaque:X,transmissive:ge,transparent:Te}=b;S.setupLightsView(Y),ue===!0&&ie.setGlobalState(y.clippingPlanes,Y),q&&we.viewport(I.copy(q)),X.length>0&&qs(X,G,Y),ge.length>0&&qs(ge,G,Y),Te.length>0&&qs(Te,G,Y),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function vc(b,G,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){const qe=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new Sn(1,1,{generateMipmaps:!0,type:qe?On:qt,minFilter:fi,samples:je.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const ge=S.state.transmissionRenderTarget[q.id],Te=q.viewport||I;ge.setSize(Te.z*y.transmissionResolutionScale,Te.w*y.transmissionResolutionScale);const ve=y.getRenderTarget(),Ae=y.getActiveCubeFace(),Ce=y.getActiveMipmapLevel();y.setRenderTarget(ge),y.getClearColor(ee),te=y.getClearAlpha(),te<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&ce.render(Y);const Fe=y.toneMapping;y.toneMapping=yn;const Le=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),ue===!0&&ie.setGlobalState(y.clippingPlanes,q),qs(b,Y,q),k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ct=0,vt=G.length;ct<vt;ct++){const yt=G[ct],{object:ht,geometry:De,material:st,group:et}=yt;if(st.side===At&&ht.layers.test(q.layers)){const Gt=st.side;st.side=zt,st.needsUpdate=!0,yc(ht,Y,q,De,st,et),st.side=Gt,st.needsUpdate=!0,qe=!0}}qe===!0&&(k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge))}y.setRenderTarget(ve,Ae,Ce),y.setClearColor(ee,te),Le!==void 0&&(q.viewport=Le),y.toneMapping=Fe}function qs(b,G,Y){const q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ge=b.length;X<ge;X++){const Te=b[X],{object:ve,geometry:Ae,group:Ce}=Te;let Fe=Te.material;Fe.allowOverride===!0&&q!==null&&(Fe=q),ve.layers.test(Y.layers)&&yc(ve,G,Y,Ae,Fe,Ce)}}function yc(b,G,Y,q,X,ge){b.onBeforeRender(y,G,Y,q,X,ge),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(y,G,Y,q,b,ge),X.transparent===!0&&X.side===At&&X.forceSinglePass===!1?(X.side=zt,X.needsUpdate=!0,y.renderBufferDirect(Y,G,q,X,b,ge),X.side=Fn,X.needsUpdate=!0,y.renderBufferDirect(Y,G,q,X,b,ge),X.side=At):y.renderBufferDirect(Y,G,q,X,b,ge),b.onAfterRender(y,G,Y,q,X,ge)}function Ys(b,G,Y){G.isScene!==!0&&(G=Pe);const q=x.get(b),X=S.state.lights,ge=S.state.shadowsArray,Te=X.state.version,ve=ne.getParameters(b,X.state,ge,G,Y),Ae=ne.getProgramCacheKey(ve);let Ce=q.programs;q.environment=b.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(b.isMeshStandardMaterial?K:J).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,Ce===void 0&&(b.addEventListener("dispose",fn),Ce=new Map,q.programs=Ce);let Fe=Ce.get(Ae);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===Te)return Mc(b,ve),Fe}else ve.uniforms=ne.getUniforms(b),b.onBeforeCompile(ve,y),Fe=ne.acquireProgram(ve,Ae),Ce.set(Ae,Fe),q.uniforms=ve.uniforms;const Le=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=ie.uniform),Mc(b,ve),q.needsLights=Rh(b),q.lightsStateVersion=Te,q.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMap.value=X.state.directionalShadowMap,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotShadowMap.value=X.state.spotShadowMap,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMap.value=X.state.pointShadowMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function Sc(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=Tr.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function Mc(b,G){const Y=x.get(b);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function wh(b,G,Y,q,X){G.isScene!==!0&&(G=Pe),k.resetTextureUnits();const ge=G.fog,Te=q.isMeshStandardMaterial?G.environment:null,ve=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Zi,Ae=(q.isMeshStandardMaterial?K:J).get(q.envMap||Te),Ce=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!Y.morphAttributes.position,qe=!!Y.morphAttributes.normal,ct=!!Y.morphAttributes.color;let vt=yn;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(vt=y.toneMapping);const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=yt!==void 0?yt.length:0,De=x.get(q),st=S.state.lights;if(ue===!0&&(Ie===!0||b!==L)){const Dt=b===L&&q.id===A;ie.setState(q,b,Dt)}let et=!1;q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==st.state.version||De.outputColorSpace!==ve||X.isBatchedMesh&&De.batching===!1||!X.isBatchedMesh&&De.batching===!0||X.isBatchedMesh&&De.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&De.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&De.instancing===!1||!X.isInstancedMesh&&De.instancing===!0||X.isSkinnedMesh&&De.skinning===!1||!X.isSkinnedMesh&&De.skinning===!0||X.isInstancedMesh&&De.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&De.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&De.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&De.instancingMorph===!1&&X.morphTexture!==null||De.envMap!==Ae||q.fog===!0&&De.fog!==ge||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Ce||De.vertexTangents!==Fe||De.morphTargets!==Le||De.morphNormals!==qe||De.morphColors!==ct||De.toneMapping!==vt||De.morphTargetsCount!==ht)&&(et=!0):(et=!0,De.__version=q.version);let Gt=De.currentProgram;et===!0&&(Gt=Ys(q,G,X));let bi=!1,Ht=!1,os=!1;const pt=Gt.getUniforms(),kt=De.uniforms;if(we.useProgram(Gt.program)&&(bi=!0,Ht=!0,os=!0),q.id!==A&&(A=q.id,Ht=!0),bi||L!==b){we.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pt.setValue(F,"projectionMatrix",b.projectionMatrix),pt.setValue(F,"viewMatrix",b.matrixWorldInverse);const Bt=pt.map.cameraPosition;Bt!==void 0&&Bt.setValue(F,Ne.setFromMatrixPosition(b.matrixWorld)),je.logarithmicDepthBuffer&&pt.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,Ht=!0,os=!0)}if(De.needsLights&&(st.state.directionalShadowMap.length>0&&pt.setValue(F,"directionalShadowMap",st.state.directionalShadowMap,k),st.state.spotShadowMap.length>0&&pt.setValue(F,"spotShadowMap",st.state.spotShadowMap,k),st.state.pointShadowMap.length>0&&pt.setValue(F,"pointShadowMap",st.state.pointShadowMap,k)),X.isSkinnedMesh){pt.setOptional(F,X,"bindMatrix"),pt.setOptional(F,X,"bindMatrixInverse");const Dt=X.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),pt.setValue(F,"boneTexture",Dt.boneTexture,k))}X.isBatchedMesh&&(pt.setOptional(F,X,"batchingTexture"),pt.setValue(F,"batchingTexture",X._matricesTexture,k),pt.setOptional(F,X,"batchingIdTexture"),pt.setValue(F,"batchingIdTexture",X._indirectTexture,k),pt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(F,"batchingColorTexture",X._colorsTexture,k));const $t=Y.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ze.update(X,Y,Gt),(Ht||De.receiveShadow!==X.receiveShadow)&&(De.receiveShadow=X.receiveShadow,pt.setValue(F,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(kt.envMap.value=Ae,kt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(kt.envMapIntensity.value=G.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=J0()),Ht&&(pt.setValue(F,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&Ah(kt,os),ge&&q.fog===!0&&le.refreshFogUniforms(kt,ge),le.refreshMaterialUniforms(kt,q,re,H,S.state.transmissionRenderTarget[b.id]),Tr.upload(F,Sc(De),kt,k)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Tr.upload(F,Sc(De),kt,k),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(F,"center",X.center),pt.setValue(F,"modelViewMatrix",X.modelViewMatrix),pt.setValue(F,"normalMatrix",X.normalMatrix),pt.setValue(F,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Dt=q.uniformsGroups;for(let Bt=0,Yr=Dt.length;Bt<Yr;Bt++){const ni=Dt[Bt];oe.update(ni,Gt),oe.bind(ni,Gt)}}return Gt}function Ah(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Rh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,G,Y){const q=x.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=G,x.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,G){const Y=x.get(b);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};const Ch=F.createFramebuffer();this.setRenderTarget=function(b,G=0,Y=0){B=b,D=G,z=Y;let q=null,X=!1,ge=!1;if(b){const ve=x.get(b);if(ve.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),I.copy(b.viewport),N.copy(b.scissor),V=b.scissorTest,we.viewport(I),we.scissor(N),we.setScissorTest(V),A=-1;return}else if(ve.__webglFramebuffer===void 0)k.setupRenderTarget(b);else if(ve.__hasExternalTextures)k.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(ve.__boundDepthTexture!==Fe){if(Fe!==null&&x.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(b)}}const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ge=!0);const Ce=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ce[G])?q=Ce[G][Y]:q=Ce[G],X=!0):b.samples>0&&k.useMultisampledRTT(b)===!1?q=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Ce)?q=Ce[Y]:q=Ce,I.copy(b.viewport),N.copy(b.scissor),V=b.scissorTest}else I.copy($).multiplyScalar(re).floor(),N.copy(Q).multiplyScalar(re).floor(),V=me;if(Y!==0&&(q=Ch),we.bindFramebuffer(F.FRAMEBUFFER,q)&&we.drawBuffers(b,q),we.viewport(I),we.scissor(N),we.setScissorTest(V),X){const ve=x.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,ve.__webglTexture,Y)}else if(ge){const ve=G;for(let Ae=0;Ae<b.textures.length;Ae++){const Ce=x.get(b.textures[Ae]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,Y,ve)}}else if(b!==null&&Y!==0){const ve=x.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,Y)}A=-1},this.readRenderTargetPixels=function(b,G,Y,q,X,ge,Te,ve=0){if(!(b&&b.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){we.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const Ce=b.textures[ve],Fe=Ce.format,Le=Ce.type;if(!je.textureFormatReadable(Fe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Le)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-q&&Y>=0&&Y<=b.height-X&&(b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve),F.readPixels(G,Y,q,X,de.convert(Fe),de.convert(Le),ge))}finally{const Ce=B!==null?x.get(B).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(b,G,Y,q,X,ge,Te,ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae)if(G>=0&&G<=b.width-q&&Y>=0&&Y<=b.height-X){we.bindFramebuffer(F.FRAMEBUFFER,Ae);const Ce=b.textures[ve],Fe=Ce.format,Le=Ce.type;if(!je.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve),F.readPixels(G,Y,q,X,de.convert(Fe),de.convert(Le),0);const ct=B!==null?x.get(B).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,ct);const vt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await mu(F,vt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.deleteBuffer(qe),F.deleteSync(vt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,G=null,Y=0){const q=Math.pow(2,-Y),X=Math.floor(b.image.width*q),ge=Math.floor(b.image.height*q),Te=G!==null?G.x:0,ve=G!==null?G.y:0;k.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Te,ve,X,ge),we.unbindTexture()};const Ph=F.createFramebuffer(),Lh=F.createFramebuffer();this.copyTextureToTexture=function(b,G,Y=null,q=null,X=0,ge=null){ge===null&&(X!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=X,X=0):ge=0);let Te,ve,Ae,Ce,Fe,Le,qe,ct,vt;const yt=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(Y!==null)Te=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Ce=Y.min.x,Fe=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{const $t=Math.pow(2,-X);Te=Math.floor(yt.width*$t),ve=Math.floor(yt.height*$t),b.isDataArrayTexture?Ae=yt.depth:b.isData3DTexture?Ae=Math.floor(yt.depth*$t):Ae=1,Ce=0,Fe=0,Le=0}q!==null?(qe=q.x,ct=q.y,vt=q.z):(qe=0,ct=0,vt=0);const ht=de.convert(G.format),De=de.convert(G.type);let st;G.isData3DTexture?(k.setTexture3D(G,0),st=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(k.setTexture2DArray(G,0),st=F.TEXTURE_2D_ARRAY):(k.setTexture2D(G,0),st=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const et=F.getParameter(F.UNPACK_ROW_LENGTH),Gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bi=F.getParameter(F.UNPACK_SKIP_PIXELS),Ht=F.getParameter(F.UNPACK_SKIP_ROWS),os=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le);const pt=b.isDataArrayTexture||b.isData3DTexture,kt=G.isDataArrayTexture||G.isData3DTexture;if(b.isDepthTexture){const $t=x.get(b),Dt=x.get(G),Bt=x.get($t.__renderTarget),Yr=x.get(Dt.__renderTarget);we.bindFramebuffer(F.READ_FRAMEBUFFER,Bt.__webglFramebuffer),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let ni=0;ni<Ae;ni++)pt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,x.get(b).__webglTexture,X,Le+ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,x.get(G).__webglTexture,ge,vt+ni)),F.blitFramebuffer(Ce,Fe,Te,ve,qe,ct,Te,ve,F.DEPTH_BUFFER_BIT,F.NEAREST);we.bindFramebuffer(F.READ_FRAMEBUFFER,null),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||x.has(b)){const $t=x.get(b),Dt=x.get(G);we.bindFramebuffer(F.READ_FRAMEBUFFER,Ph),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,Lh);for(let Bt=0;Bt<Ae;Bt++)pt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.__webglTexture,X,Le+Bt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$t.__webglTexture,X),kt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.__webglTexture,ge,vt+Bt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dt.__webglTexture,ge),X!==0?F.blitFramebuffer(Ce,Fe,Te,ve,qe,ct,Te,ve,F.COLOR_BUFFER_BIT,F.NEAREST):kt?F.copyTexSubImage3D(st,ge,qe,ct,vt+Bt,Ce,Fe,Te,ve):F.copyTexSubImage2D(st,ge,qe,ct,Ce,Fe,Te,ve);we.bindFramebuffer(F.READ_FRAMEBUFFER,null),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else kt?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(st,ge,qe,ct,vt,Te,ve,Ae,ht,De,yt.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(st,ge,qe,ct,vt,Te,ve,Ae,ht,yt.data):F.texSubImage3D(st,ge,qe,ct,vt,Te,ve,Ae,ht,De,yt):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,qe,ct,Te,ve,ht,De,yt.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,qe,ct,yt.width,yt.height,ht,yt.data):F.texSubImage2D(F.TEXTURE_2D,ge,qe,ct,Te,ve,ht,De,yt);F.pixelStorei(F.UNPACK_ROW_LENGTH,et),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ht),F.pixelStorei(F.UNPACK_SKIP_IMAGES,os),ge===0&&G.generateMipmaps&&F.generateMipmap(st),we.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&k.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?k.setTextureCube(b,0):b.isData3DTexture?k.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?k.setTexture2DArray(b,0):k.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){D=0,z=0,B=null,we.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}let Hi=null;function Vs(){if(!Hi){const i=window.AudioContext||window.webkitAudioContext;i&&(Hi=new i)}return Hi&&Hi.state==="suspended"&&Hi.resume().catch(()=>{}),Hi}function Ud(){try{const i=Vs();if(!i)return;const e=i.createOscillator(),t=i.createGain();e.type="sine",e.frequency.setValueAtTime(95+Math.random()*20,i.currentTime),e.frequency.exponentialRampToValueAtTime(35,i.currentTime+.08),t.gain.setValueAtTime(.06,i.currentTime),t.gain.exponentialRampToValueAtTime(.001,i.currentTime+.08),e.connect(t),t.connect(i.destination),e.start(),e.stop(i.currentTime+.08)}catch{}}function Nd(){try{const i=Vs();if(!i)return;const e=i.createOscillator(),t=i.createGain();e.type="triangle",e.frequency.setValueAtTime(1850,i.currentTime),e.frequency.exponentialRampToValueAtTime(2450,i.currentTime+.12),t.gain.setValueAtTime(.18,i.currentTime),t.gain.exponentialRampToValueAtTime(.001,i.currentTime+.28),e.connect(t),t.connect(i.destination),e.start(i.currentTime),e.stop(i.currentTime+.28),[523.25,659.25,783.99,1046.5].forEach((a,o)=>{const c=i.createOscillator(),l=i.createGain();c.type="sine",c.frequency.setValueAtTime(a,i.currentTime);const h=i.currentTime+o*.05;l.gain.setValueAtTime(0,h),l.gain.linearRampToValueAtTime(.16,h+.02),l.gain.exponentialRampToValueAtTime(1e-4,h+.5),c.connect(l),l.connect(i.destination),c.start(h),c.stop(h+.55)});const s=i.createOscillator(),r=i.createGain();s.type="sine",s.frequency.setValueAtTime(110,i.currentTime+.12),s.frequency.exponentialRampToValueAtTime(42,i.currentTime+.45),r.gain.setValueAtTime(.26,i.currentTime+.12),r.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+.45),s.connect(r),r.connect(i.destination),s.start(i.currentTime+.12),s.stop(i.currentTime+.45)}catch{}}function e_(){try{const i=Vs();if(!i)return;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{const s=i.createOscillator(),r=i.createGain();s.type="triangle",s.frequency.setValueAtTime(t,i.currentTime);const a=i.currentTime+n*.055;r.gain.setValueAtTime(0,a),r.gain.linearRampToValueAtTime(.18,a+.015),r.gain.exponentialRampToValueAtTime(1e-4,a+.45),s.connect(r),r.connect(i.destination),s.start(a),s.stop(a+.5)})}catch{}}function Fd(){try{const i=Vs();if(!i)return;const e=i.createOscillator(),t=i.createGain();e.type="triangle",e.frequency.setValueAtTime(440,i.currentTime),e.frequency.exponentialRampToValueAtTime(880,i.currentTime+.15),t.gain.setValueAtTime(.08,i.currentTime),t.gain.exponentialRampToValueAtTime(.001,i.currentTime+.18),e.connect(t),t.connect(i.destination),e.start(),e.stop(i.currentTime+.18)}catch{}}function Od(){try{const i=Vs();if(!i)return;const e=i.createOscillator(),t=i.createGain();e.type="sine",e.frequency.setValueAtTime(600,i.currentTime),e.frequency.exponentialRampToValueAtTime(150,i.currentTime+.25),t.gain.setValueAtTime(.12,i.currentTime),t.gain.exponentialRampToValueAtTime(.001,i.currentTime+.25),e.connect(t),t.connect(i.destination),e.start(),e.stop(i.currentTime+.25)}catch{}}const Bo=Object.freeze(Object.defineProperty({__proto__:null,playCabinetExit:Od,playCabinetHighlight:Fd,playCoinDrop:Nd,playDopamineChime:e_,playFootstep:Ud},Symbol.toStringTag,{value:"Module"}));class t_{constructor(e,t=null){this.scene=e,this.identity=t||{tag:"MARC1",color:62975,colorHex:"#00f5ff"},this.tag=(this.identity.tag||"MARC1").slice(0,5).toUpperCase(),this.colorNum=this.identity.color||62975,this.colorHex=this.identity.colorHex||"#00f5ff",this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetRotation=Math.PI,this.speed=7.5,this.radius=.45,this.velocityY=0,this.gravity=-26,this.jumpStrength=8.5,this.isGrounded=!0,this.isMoving=!1,this.walkCycle=0,this.footstepTimer=0,this.keys={forward:!1,backward:!1,left:!1,right:!1},this.joystickVector={x:0,y:0},this.navTarget=null,this.createAvatarMesh(),this.createNameTagSprite(),this.createSpeechBubbleSprite(),this.bindKeyboard()}resetMovement(){this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1,this.isMoving=!1}setIdentity(e){e&&(this.identity=e,this.tag=(e.tag||"MARC1").slice(0,5).toUpperCase(),this.colorNum=e.color||62975,this.colorHex=e.colorHex||"#00f5ff",this.torso&&this.torso.material.color.setHex(this.colorNum),this.leftFoot&&this.leftFoot.material.color.setHex(this.colorNum),this.rightFoot&&this.rightFoot.material.color.setHex(this.colorNum),this.nameSprite&&(this.group.remove(this.nameSprite),this.createNameTagSprite()))}createNameTagSprite(){const e=document.createElement("canvas");e.width=320,e.height=110;const t=e.getContext("2d");t.fillStyle="rgba(8, 9, 16, 0.88)",t.strokeStyle=this.colorHex,t.lineWidth=4,t.beginPath(),t.roundRect(10,10,e.width-20,e.height-20,24),t.fill(),t.stroke(),t.font='bold 36px "Press Start 2P", monospace, sans-serif',t.fillStyle="#ffd32a",t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ffd32a",t.shadowBlur=8,t.fillText(this.tag,e.width/2,42),t.shadowBlur=0,t.font='bold 16px "Outfit", sans-serif',t.fillStyle=this.colorHex,t.fillText("VOCÊ",e.width/2,78);const n=new tn(e),s=new Qi({map:n,transparent:!0,depthTest:!1});this.nameSprite=new Ds(s),this.nameSprite.position.set(0,2.35,0),this.nameSprite.scale.set(1.6,.55,1),this.group.add(this.nameSprite)}createSpeechBubbleSprite(){const e=document.createElement("canvas");e.width=384,e.height=140,this.bubbleCanvas=e,this.bubbleCtx=e.getContext("2d"),this.bubbleTexture=new tn(e),this.bubbleTexture.minFilter=mt;const t=new Qi({map:this.bubbleTexture,transparent:!0,depthTest:!1});this.speechSprite=new Ds(t),this.speechSprite.position.set(0,3.1,0),this.speechSprite.scale.set(2.2,.8,1),this.speechSprite.visible=!1,this.speechTimer=0,this.group.add(this.speechSprite)}showSpeechBubble(e){if(!e||!this.speechSprite)return;const t=this.bubbleCtx,n=this.bubbleCanvas.width,s=this.bubbleCanvas.height;t.clearRect(0,0,n,s),t.fillStyle="rgba(8, 12, 28, 0.94)",t.strokeStyle=this.colorHex||"#00f5ff",t.lineWidth=4,t.beginPath(),t.roundRect(10,10,n-20,s-36,18),t.fill(),t.stroke(),t.beginPath(),t.moveTo(n/2-14,s-26),t.lineTo(n/2,s-6),t.lineTo(n/2+14,s-26),t.closePath(),t.fill(),t.stroke(),t.fillStyle="rgba(8, 12, 28, 0.94)",t.fillRect(n/2-12,s-28,24,6),t.fillStyle="#ffffff",t.font='bold 22px "Outfit", "Segoe UI", sans-serif',t.textAlign="center",t.textBaseline="middle";const r=22,a=e.trim();if(a.length<=r)t.fillText(a,n/2,(s-36)/2+10);else{let o=a.lastIndexOf(" ",r);(o===-1||o<8)&&(o=r);const c=a.substring(0,o).trim(),l=a.substring(o,o+r).trim();t.fillText(c,n/2,34),t.fillText(l+(a.length>o+r?"...":""),n/2,64)}this.bubbleTexture.needsUpdate=!0,this.speechSprite.visible=!0,this.speechTimer=5}setNavigationTarget(e,t,n=null){this.navTarget={x:e,z:t,onArrival:n}}clearNavigationTarget(){this.navTarget=null}createAvatarMesh(){this.group=new vn,this.group.position.set(this.x,this.y,this.z);const e=new Yt(.38,.32,.8,16),t=new xt({color:this.colorNum,roughness:.3,metalness:.2});this.torso=new ye(e,t),this.torso.position.y=.85,this.group.add(this.torso);const n=new at(.04,.78,.05),s=new dt({color:16711807}),r=new ye(n,s);r.position.set(0,.85,.35),this.group.add(r);const a=new vi(.42,24,24),o=new xt({color:16777215,roughness:.2,metalness:.1});this.head=new ye(a,o),this.head.position.y=1.55,this.group.add(this.head),this.visorCanvas=document.createElement("canvas"),this.visorCanvas.width=256,this.visorCanvas.height=128,this.visorCtx=this.visorCanvas.getContext("2d"),this.renderVisorEyes(!1),this.visorTex=new tn(this.visorCanvas),this.visorTex.needsUpdate=!0;const c=new dt({map:this.visorTex,transparent:!0}),l=new Yt(.43,.43,.3,16,1,!1,Math.PI*.15,Math.PI*.7);this.visorMesh=new ye(l,c),this.visorMesh.position.set(0,1.55,.02),this.visorMesh.rotation.y=-Math.PI/2,this.group.add(this.visorMesh);const h=new at(.42,.5,.22),d=new xt({color:1712440,roughness:.4,metalness:.6}),u=new ye(h,d);u.position.set(0,.9,-.36),this.group.add(u);const f=new Yt(.06,.04,.12,12),g=new dt({color:62975}),_=new ye(f,g);_.position.set(-.12,.6,-.36);const m=new ye(f,g);m.position.set(.12,.6,-.36),this.group.add(_),this.group.add(m);const p=new vi(.14,12,12),v=new xt({color:this.colorNum,roughness:.3});this.leftFoot=new ye(p,v),this.leftFoot.position.set(-.2,.14,0),this.group.add(this.leftFoot),this.rightFoot=new ye(p,v),this.rightFoot.position.set(.2,.14,0),this.group.add(this.rightFoot);const M=new Or(.55,24),E=new dt({color:0,transparent:!0,opacity:.45});this.shadow=new ye(M,E),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.02,this.group.add(this.shadow),this.scene.add(this.group)}renderVisorEyes(e){const t=this.visorCtx;t.clearRect(0,0,256,128),t.fillStyle="#060814",t.fillRect(0,0,256,128),t.fillStyle=this.colorHex,t.shadowColor=this.colorHex,t.shadowBlur=12,e?(t.lineWidth=6,t.strokeStyle=this.colorHex,t.beginPath(),t.arc(85,64,22,.2,Math.PI-.2,!1),t.stroke(),t.beginPath(),t.arc(171,64,22,.2,Math.PI-.2,!1),t.stroke()):(t.beginPath(),t.ellipse(85,60,20,26,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(171,60,20,26,0,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.shadowBlur=0,t.beginPath(),t.arc(90,52,7,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(176,52,7,0,Math.PI*2),t.fill())}bindKeyboard(){window.addEventListener("keydown",e=>{var t,n;if(window.__arcadeOverlayOpen||((t=document.activeElement)==null?void 0:t.tagName)==="INPUT"||((n=document.activeElement)==null?void 0:n.tagName)==="TEXTAREA"){this.resetMovement();return}["ArrowUp","KeyW"].includes(e.code)&&(this.keys.forward=!0),["ArrowDown","KeyS"].includes(e.code)&&(this.keys.backward=!0),["ArrowLeft","KeyA"].includes(e.code)&&(this.keys.left=!0),["ArrowRight","KeyD"].includes(e.code)&&(this.keys.right=!0),e.code==="Space"&&this.isGrounded&&(this.velocityY=this.jumpStrength,this.isGrounded=!1)}),window.addEventListener("keyup",e=>{["ArrowUp","KeyW"].includes(e.code)&&(this.keys.forward=!1),["ArrowDown","KeyS"].includes(e.code)&&(this.keys.backward=!1),["ArrowLeft","KeyA"].includes(e.code)&&(this.keys.left=!1),["ArrowRight","KeyD"].includes(e.code)&&(this.keys.right=!1)})}setJoystickVector(e,t){this.joystickVector.x=e,this.joystickVector.y=t}update(e,t,n,s=null){let r=0,a=0;if(this.keys.forward&&(a-=1),this.keys.backward&&(a+=1),this.keys.left&&(r-=1),this.keys.right&&(r+=1),(Math.abs(this.joystickVector.x)>.1||Math.abs(this.joystickVector.y)>.1)&&(r+=this.joystickVector.x,a+=this.joystickVector.y),Math.hypot(r,a)>.01)this.navTarget=null;else if(this.navTarget){const u=this.navTarget.x-this.x,f=this.navTarget.z-this.z,g=Math.hypot(u,f);if(g<.35){const _=this.navTarget.onArrival;this.navTarget=null,_&&_()}else r=u/g,a=f/g}const c=Math.hypot(r,a);if(c>.01){r/=c,a/=c,this.isMoving=!0,this.targetRotation=Math.atan2(r,a);const u=this.speed*e,f=this.x+r*u,g=this.z+a*u;let _=!0;if(t&&(f-this.radius<t.minX||f+this.radius>t.maxX)&&(_=!1),n&&_){for(const p of n)if(p.collider&&p.collider.intersectsSphere(new W(f,0,this.z),this.radius)){_=!1;break}}_&&(this.x=f);let m=!0;if(t&&(g-this.radius<t.minZ||g+this.radius>t.maxZ)&&(m=!1),n&&m){for(const p of n)if(p.collider&&p.collider.intersectsSphere(new W(this.x,0,g),this.radius)){m=!1;break}}m&&(this.z=g),this.walkCycle+=e*14,this.footstepTimer+=e,this.footstepTimer>.28&&(Ud(),this.footstepTimer=0)}else this.isMoving=!1,this.walkCycle=0;let l=this.targetRotation-this.rotation;for(;l<-Math.PI;)l+=Math.PI*2;for(;l>Math.PI;)l-=Math.PI*2;if(this.rotation+=l*.25,this.isGrounded||(this.velocityY+=this.gravity*e,this.y+=this.velocityY*e,this.y<=0&&(this.y=0,this.velocityY=0,this.isGrounded=!0)),this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.rotation,this.shadow){const u=Math.max(.35,1-this.y*.25);this.shadow.scale.set(u,u,u),this.shadow.position.y=.02-this.y}this.isGrounded?this.isMoving?(this.leftFoot.position.y=0,this.rightFoot.position.y=0,this.leftFoot.position.z=Math.sin(this.walkCycle)*.22,this.rightFoot.position.z=-Math.sin(this.walkCycle)*.22,this.torso.rotation.z=0):(this.leftFoot.position.y=0,this.rightFoot.position.y=0,this.leftFoot.position.z=0,this.rightFoot.position.z=0,this.torso.rotation.z=0):(this.leftFoot.position.y=.08,this.rightFoot.position.y=.08,this.leftFoot.position.z=-.08,this.rightFoot.position.z=.08,this.torso.rotation.z=0);const h=performance.now()*.001,d=Math.sin(h*1.5)>.94;this.lastBlinkState!==d&&(this.lastBlinkState=d,this.renderVisorEyes(d),this.visorTex.needsUpdate=!0),this.nameSprite&&s&&this.nameSprite.quaternion.copy(s.quaternion),this.speechSprite&&this.speechSprite.visible&&(s&&this.speechSprite.quaternion.copy(s.quaternion),this.speechTimer-=e,this.speechTimer<=0&&(this.speechSprite.visible=!1))}}const El=[{primary:62975,secondary:7940298,accent:16711807},{primary:16711807,secondary:62975,accent:16765738},{primary:393121,secondary:62975,accent:16711807},{primary:16765738,secondary:16711807,accent:62975},{primary:7940298,secondary:62975,accent:393121}];function n_(i,e){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,512,128);s.addColorStop(0,"#0a0d24"),s.addColorStop(.5,"#191f48"),s.addColorStop(1,"#0a0d24"),n.fillStyle=s,n.fillRect(0,0,512,128),n.strokeStyle="#"+e.secondary.toString(16).padStart(6,"0"),n.lineWidth=4,n.strokeRect(6,6,500,116),n.strokeStyle="#"+e.primary.toString(16).padStart(6,"0"),n.lineWidth=2,n.strokeRect(12,12,488,104),n.fillStyle="#ffffff",n.font='bold 36px "Segoe UI", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),n.shadowBlur=15;const r=`${i.icon||"🎮"} ${(i.name||"ARCADE").toUpperCase()}`;n.fillText(r,256,54),n.font="bold 16px monospace",n.fillStyle="#"+e.accent.toString(16).padStart(6,"0"),n.shadowBlur=8,n.fillText(`• ${i.category?i.category.toUpperCase():"CLASSIC ARCADE"} •`,256,96);const a=new tn(t);return a.minFilter=mt,a.needsUpdate=!0,a}function i_(i,e){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),s=(i.category||"").toLowerCase(),r=(i.id||"").toLowerCase(),a=s==="sports"||r.includes("gear")||r.includes("fzero")||r.includes("outrun")||r.includes("racer")||r.includes("runner"),o=s==="action"||r.includes("slug")||r.includes("fighter")||r.includes("mk2")||r.includes("sor2")||r.includes("shuriken")||r.includes("katana"),c=r.includes("pacman"),l=d=>{if(n.fillStyle="#060a1e",n.fillRect(0,0,512,512),a){const f=n.createLinearGradient(0,0,0,260);f.addColorStop(0,"#0d0826"),f.addColorStop(1,"#3b1443"),n.fillStyle=f,n.fillRect(0,0,512,260),n.fillStyle="#ff007f",n.beginPath(),n.moveTo(0,260),n.lineTo(80,210),n.lineTo(160,260),n.lineTo(260,190),n.lineTo(370,260),n.lineTo(440,220),n.lineTo(512,260),n.fill(),n.fillStyle="#111322",n.fillRect(0,260,512,252);const g=d*260;for(let m=0;m<7;m++){const p=(m*38+g)%252,v=260+p,M=40+p/252*220;n.fillStyle=Math.floor((p+g*.2)/36)%2===0?"#ff007f":"#00f5ff",n.fillRect(256-M/2,v,M,8+p/252*8)}n.fillStyle="#ffd32a",n.shadowColor="#ffd32a",n.shadowBlur=12;const _=256+Math.sin(d*3)*60;n.fillRect(_-22,430,44,24),n.fillStyle="#ff007f",n.fillRect(_-16,444,32,8),n.shadowBlur=0}else if(o){n.strokeStyle="rgba(255, 0, 127, 0.25)",n.lineWidth=2;for(let _=0;_<512;_+=40)n.beginPath(),n.moveTo(_,0),n.lineTo(_,512),n.stroke();n.fillStyle="rgba(0, 0, 0, 0.7)",n.fillRect(30,80,200,20),n.fillRect(282,80,200,20);const f=190-(Math.sin(d*2)*.5+.5)*60,g=190-(Math.cos(d*2.5)*.5+.5)*80;n.fillStyle="#05ffa1",n.fillRect(35,84,f,12),n.fillStyle="#ff007f",n.fillRect(287,84,g,12),n.font='bold 22px "Press Start 2P", monospace',n.fillStyle="#ffd32a",n.textAlign="center",n.shadowColor="#ffd32a",n.shadowBlur=10,n.fillText(Math.floor(d*3)%2===0?"FIGHT!":"VS",256,96),n.shadowBlur=0}else if(c){n.strokeStyle="#0066ff",n.lineWidth=4,n.strokeRect(50,80,412,140),n.strokeRect(100,120,120,60),n.strokeRect(292,120,120,60),n.fillStyle="#ffb8ae";for(let _=80;_<=430;_+=32)n.beginPath(),n.arc(_,100,4,0,Math.PI*2),n.fill();const f=70+d*90%360,g=(Math.sin(d*18)*.5+.5)*.35;n.fillStyle="#ffd32a",n.beginPath(),n.arc(f,100,16,g*Math.PI,(2-g)*Math.PI),n.lineTo(f,100),n.fill()}else{n.strokeStyle="rgba(0, 245, 255, 0.2)",n.lineWidth=2;const f=d*30%32;for(let g=f;g<512;g+=32)n.beginPath(),n.moveTo(0,g),n.lineTo(512,g),n.stroke();for(let g=0;g<512;g+=32)n.beginPath(),n.moveTo(g,0),n.lineTo(g,512),n.stroke()}n.fillStyle="rgba(255, 0, 127, 0.4)",n.fillRect(100,24,312,34),n.strokeStyle="#ff007f",n.lineWidth=2,n.strokeRect(100,24,312,34),n.fillStyle="#ffffff",n.font='bold 15px "Press Start 2P", monospace, sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText("★ ARCADE CLASSIC ★",256,41);const u=1+Math.sin(d*4)*.1;n.save(),n.translate(256,185),n.scale(u,u),n.font="72px sans-serif",n.textAlign="center",n.textBaseline="middle",n.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),n.shadowBlur=24,n.fillText(i.icon||"🎮",0,0),n.restore(),n.font='bold 27px "Outfit", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),n.shadowBlur=16,n.fillStyle="#ffffff",n.fillText((i.name||"ARCADE GAME").toUpperCase(),256,280),n.font="bold 15px monospace",n.fillStyle="#ffd32a",n.shadowColor="#ffd32a",n.shadowBlur=8,n.fillText(`• ${(i.category||"ACTION").toUpperCase()} • 60 FPS •`,256,325),Math.floor(d*2.8)%2===0&&(n.fillStyle="#"+e.primary.toString(16).padStart(6,"0"),n.font="bold 22px monospace",n.shadowColor="#"+e.accent.toString(16).padStart(6,"0"),n.shadowBlur=16,n.fillText("▶ PRESS [ENTER] TO PLAY ◀",256,405),n.font="14px monospace",n.fillStyle="#94a3b8",n.shadowBlur=0,n.fillText("INSERT 1 COIN (25¢)",256,436)),n.fillStyle="rgba(0, 0, 0, 0.28)";for(let f=0;f<512;f+=4)n.fillRect(0,f,512,2);n.strokeStyle="#"+e.primary.toString(16).padStart(6,"0"),n.lineWidth=8,n.strokeRect(4,4,504,504),h.needsUpdate=!0},h=new tn(t);return h.minFilter=mt,l(0),{texture:h,update:l}}function s_(){const i=document.createElement("canvas");i.width=512,i.height=128;const e=i.getContext("2d"),t=new tn(i);t.minFilter=mt;const n=new Qi({map:t,transparent:!0,depthTest:!1}),s=new Ds(n);return s.scale.set(2.4,.6,1),s.position.set(0,3.65,.45),s.visible=!1,{sprite:s,setPlayer:a=>{if(!a){s.visible=!1;return}e.clearRect(0,0,512,128),e.fillStyle="rgba(6, 10, 25, 0.92)",e.strokeStyle="#05ffa1",e.lineWidth=5,e.beginPath(),e.roundRect(14,14,484,100,24),e.fill(),e.stroke(),e.font='bold 30px "Outfit", "Segoe UI", sans-serif',e.fillStyle="#05ffa1",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#05ffa1",e.shadowBlur=14,e.fillText(`🕹️ [${a.toUpperCase()}] JOGANDO`,256,64),t.needsUpdate=!0,s.visible=!0}}}function r_(i,e,t=0){const n=new vn;n.position.set(e.x,0,e.z),n.rotation.y=t;let s=0;for(let K=0;K<(i.id||"").length;K++)s=(s<<5)-s+i.id.charCodeAt(K);let r=El[Math.abs(s)%El.length];i.id==="street-fighter-2"&&(r={primary:16726832,secondary:26367,accent:16765738}),i.id==="super-mario"&&(r={primary:15017249,secondary:4436039,accent:16502784}),i.id==="super-bomberman"&&(r={primary:28908,secondary:16777215,accent:16729943}),i.id==="gta-2"&&(r={primary:16765738,secondary:26367,accent:16726072}),i.id==="classic-doom"&&(r={primary:16726072,secondary:16752410,accent:16765738}),i.id==="classic-pacman"&&(r={primary:16765738,secondary:26367,accent:16777215});const a=new xt({color:1975357,roughness:.4,metalness:.3}),o=new xt({color:r.primary,roughness:.3,metalness:.4}),c=new dt({color:r.primary}),l=new at(1.6,1.4,1.3),h=new ye(l,a);h.position.set(0,.7,0),n.add(h);const d=new nn(.7,.8),u=new xt({color:790304,roughness:.5,metalness:.7}),f=new ye(d,u);f.position.set(0,.75,.66),n.add(f);const g=new at(.14,.1,.04),_=new dt({color:16755200}),m=new ye(g,_);m.position.set(-.16,.9,.68);const p=new ye(g,_);p.position.set(.16,.9,.68),n.add(m),n.add(p);const v=new at(1.65,.22,.7),M=new xt({color:1316907,roughness:.3,metalness:.4}),E=new ye(v,M);E.position.set(0,1.4,.48),E.rotation.x=.22,n.add(E);const S=new Yt(.02,.02,.14),w=new xt({color:13421772,metalness:.9}),C=new vi(.05,12,12),P=new dt({color:r.accent}),y=new ye(S,w);y.position.set(-.35,1.55,.48);const T=new ye(C,P);T.position.set(-.35,1.63,.48),n.add(y),n.add(T);const D=new Yt(.035,.035,.03,10),z=[62975,16711807,16765738,393121];for(let K=0;K<2;K++)for(let j=0;j<3;j++){const Me=new dt({color:z[(K*3+j)%z.length]}),he=new ye(D,Me);he.position.set(.12+j*.1,1.48-K*.06,.54-K*.08),n.add(he)}const B=new at(1.6,1.3,1.1),A=new ye(B,a);A.position.set(0,2.1,-.05),n.add(A);const L=new at(1.4,1,.08),I=new xt({color:527128,roughness:.8}),N=new ye(L,I);N.position.set(0,2.15,.46),N.rotation.x=-.25,n.add(N);const{texture:V,update:ee}=i_(i,r),te=new nn(1.22,.88),U=new dt({map:V}),H=new ye(te,U);H.position.set(0,2.15,.51),H.rotation.x=-.25,n.add(H);const re=new at(1.65,.6,.85),be=new ye(re,a);be.position.set(0,3,.2),n.add(be);const Ee=n_(i,r),$=new dt({map:Ee}),Q=new nn(1.58,.52),me=new ye(Q,$);me.position.set(0,3.02,.64),me.rotation.x=-.08,n.add(me);const Ue=new at(1.68,.05,.05),ue=new ye(Ue,c);ue.position.set(0,3.3,.66);const Ie=new ye(Ue,c);Ie.position.set(0,2.74,.62),n.add(ue),n.add(Ie);const Je=new at(.06,2.7,1.25),Ne=new ye(Je,o);Ne.position.set(-.82,1.7,.05);const Xe=new ye(Je,o);Xe.position.set(.82,1.7,.05),n.add(Ne),n.add(Xe);const Pe=new Qn(1.2,1.45,32),Oe=new dt({color:r.primary,side:At,transparent:!0,opacity:.35}),tt=new ye(Pe,Oe);tt.rotation.x=-Math.PI/2,tt.position.set(0,.03,.8),n.add(tt);const F=s_();n.add(F.sprite);const ut=Math.sin(t)*2.2,Ye=Math.cos(t)*2.2,je=e.x+ut,we=e.z+Ye,R=Math.abs(Math.sin(t))>.5,x=R?.65:.78,k=R?.78:.65,J={minX:e.x-x,maxX:e.x+x,minZ:e.z-k,maxZ:e.z+k};return{game:i,group:n,theme:r,screenMesh:H,marqueeFace:me,floorGlow:tt,occupancyBadge:F,occupiedBy:null,standSpot:{x:je,z:we},position:{x:e.x,z:e.z},rotationY:t,collisionBox:J,isHovered:!1,_lastFrame:0,setOccupiedBy(K){this.occupiedBy=K,this.occupancyBadge.setPlayer(K)},clearOccupied(){this.occupiedBy=null,this.occupancyBadge.setPlayer(null)},update(K,j){if(this.occupiedBy&&this.occupancyBadge.sprite.visible&&(this.occupancyBadge.sprite.position.y=3.65+Math.sin(K*3.5)*.06),j&&!this.isHovered&&!this.occupiedBy){const Me=this.position.x-j.x,he=this.position.z-j.z;if(Me*Me+he*he>72.25){tt.material.opacity=.25;return}}if(this.isHovered||this.occupiedBy)ee(K),tt.material.opacity=.7+Math.sin(K*6)*.25;else{const Me=Math.floor(K*12);this._lastFrame!==Me&&(this._lastFrame=Me,ee(K)),tt.material.opacity=.35}}}}class a_{constructor(){this.catalog=null,this.tracks=[],this.artists=[],this.currentIndex=0,this.isPlaying=!1,this.isDucked=!1,this.volume=.75,this.duckMultiplier=1,this.duckInterval=null,this.subscribers=new Set,this.unlocked=!1,this.audioElement=new Audio,this.audioElement.preload="auto",this.audioElement.volume=this.volume,this.currentTrackTime=0,this.tickerInterval=null,this.bindAudioEvents()}bindAudioEvents(){this.audioElement.addEventListener("ended",()=>{this.next()}),this.audioElement.addEventListener("timeupdate",()=>{isNaN(this.audioElement.currentTime)||(this.currentTrackTime=this.audioElement.currentTime)}),this.audioElement.addEventListener("play",()=>{this.isPlaying=!0,this.notify()}),this.audioElement.addEventListener("pause",()=>{this.isPlaying=!1,this.notify()}),this.audioElement.addEventListener("error",e=>{console.warn("Audio playback error on current track:",e,this.audioElement.error),this.isPlaying=!1,this.notify()})}resolveUrl(e){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const t=e.replace(/^(\.\/|\/)/,"");try{return new URL(t,window.location.href).href}catch{return t}}async init(){const e=await this.loadCatalog();return e&&(this.catalog=e,this.tracks=(e.tracks||[]).map(t=>({...t,resolvedAudioUrl:this.resolveUrl(t.audioUrl)})),this.artists=e.artists||[]),this.tracks.length>0&&!this.audioElement.src&&(this.audioElement.src=this.tracks[0].resolvedAudioUrl,this.audioElement.load()),this.startTicker(),this.notify(),this}async loadCatalog(){const e=[new URL("music/catalog.json",window.location.href).href,"./music/catalog.json","/music/catalog.json"];for(const t of e)try{const n=await fetch(t);if(n.ok){const s=await n.json();if(s&&s.tracks&&s.tracks.length>0)return s}}catch{}return console.warn("Could not locate catalog.json in any fallback path"),null}getCurrentTrack(){return this.tracks.length?this.tracks[this.currentIndex]:null}async playTrack(e){if(!this.tracks.length)return;e<0&&(e=this.tracks.length-1),e>=this.tracks.length&&(e=0),this.currentIndex=e;const t=this.getCurrentTrack();if(!t)return;this.currentTrackTime=0;const n=t.resolvedAudioUrl||this.resolveUrl(t.audioUrl);this.audioElement.src!==n&&(this.audioElement.src=n,this.audioElement.load()),this.applyVolume();try{await this.audioElement.play(),this.isPlaying=!0,this.unlocked=!0,this.notify()}catch(s){console.warn("Audio play() error or user gesture required:",s),this.isPlaying=!1,this.notify()}}async togglePlay(){if(this.tracks.length)if(this.isPlaying)this.pause();else{const e=this.getCurrentTrack(),t=(e==null?void 0:e.resolvedAudioUrl)||this.resolveUrl(e==null?void 0:e.audioUrl);(!this.audioElement.src||this.audioElement.src.endsWith("/")||this.audioElement.src==="about:blank")&&t&&(this.audioElement.src=t,this.audioElement.load()),this.applyVolume();try{await this.audioElement.play(),this.isPlaying=!0,this.unlocked=!0,this.notify()}catch(n){console.warn("Audio play() error:",n),this.playTrack(this.currentIndex)}}}pause(){this.isPlaying=!1,this.audioElement.pause(),this.notify()}next(){const e=(this.currentIndex+1)%(this.tracks.length||1);this.playTrack(e)}prev(){const e=(this.currentIndex-1+(this.tracks.length||1))%(this.tracks.length||1);this.playTrack(e)}applyVolume(){const e=this.volume*this.duckMultiplier;this.audioElement.volume=Math.max(0,Math.min(1,e))}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.applyVolume(),this.notify()}duck(e){this.isDucked=e;const t=e?.12:1;this.duckInterval&&clearInterval(this.duckInterval);const n=e?-.1:.1;this.duckInterval=setInterval(()=>{Math.abs(this.duckMultiplier-t)<.1?(this.duckMultiplier=t,this.applyVolume(),clearInterval(this.duckInterval),this.duckInterval=null):(this.duckMultiplier+=n,this.applyVolume())},25)}unlockAndPlay(){this.unlocked||(this.unlocked=!0,this.isPlaying||this.playTrack(this.currentIndex))}getFrequencyData(e){var r;if(!this.isPlaying){e.fill(0);return}const t=performance.now()/1e3,n=((r=this.getCurrentTrack())==null?void 0:r.bpm)||132,s=t*(n/60)%1;for(let a=0;a<e.length;a++){const o=Math.sin(t*8+a*.5),c=Math.pow(Math.sin(s*Math.PI),2),l=Math.max(.08,c*.65+(o*.5+.5)*.35);e[a]=Math.floor(l*255*(this.isDucked?.2:1))}}startTicker(){this.tickerInterval&&clearInterval(this.tickerInterval),this.tickerInterval=setInterval(()=>{this.isPlaying&&(isNaN(this.audioElement.currentTime)||(this.currentTrackTime=this.audioElement.currentTime),this.notify("time"))},250)}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notify(e="state"){const t=this.getCurrentTrack(),n=this.audioElement&&this.audioElement.duration&&!isNaN(this.audioElement.duration)&&this.audioElement.duration>0?this.audioElement.duration:t&&t.durationSec||150,s={type:e,isPlaying:this.isPlaying,currentTrack:t,currentIndex:this.currentIndex,currentTime:this.currentTrackTime,duration:n,volume:this.volume,isDucked:this.isDucked,isProcedural:!1};this.subscribers.forEach(r=>{try{r(s)}catch(a){console.error(a)}})}}const We=new a_;typeof window<"u"&&(window.__MUSIC_MANAGER__=We);function o_(){const i=document.createElement("canvas");i.width=512,i.height=512;const e=i.getContext("2d"),t=new tn(i);t.minFilter=mt;const n=new Uint8Array(32);return{texture:t,render:(r,a)=>{e.clearRect(0,0,512,512);const o=e.createLinearGradient(0,0,0,512);o.addColorStop(0,"#0a091d"),o.addColorStop(.5,"#151336"),o.addColorStop(1,"#080718"),e.fillStyle=o,e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.12)",e.lineWidth=1;for(let v=0;v<512;v+=32)e.beginPath(),e.moveTo(0,v),e.lineTo(512,v),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.35)",e.fillRect(80,28,352,34),e.strokeStyle="#ff007f",e.lineWidth=2,e.strokeRect(80,28,352,34),e.fillStyle="#ffffff",e.font='bold 15px "Press Start 2P", monospace, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("★ GAME SOUNDTRACKS ★",256,45);const c=We.getCurrentTrack(),l=We.isPlaying;e.fillStyle="#00f5ff",e.font='bold 22px "Outfit", Arial, sans-serif',e.shadowColor="#00f5ff",e.shadowBlur=12;const h=c?c.title:"ARCADE CLASSICS FM";e.fillText(h,256,105),e.fillStyle="#ffd32a",e.font="16px monospace",e.shadowColor="#ffd32a",e.shadowBlur=8;const d=c?`${c.artistName} • ${c.game||"ORIGINAL OST"}`:"TRILHAS DOS FLIPERAMAS";e.fillText(d,256,138),We.getFrequencyData(n);const u=20,f=16,g=6,_=(512-(u*(f+g)-g))/2,m=320,p=120;for(let v=0;v<u;v++){let M=n[v%n.length]/255;(!l||M<.05)&&(M=.15+.12*Math.sin(r*3+v*.4));const E=Math.max(6,M*p),S=_+v*(f+g),w=m-E,C=e.createLinearGradient(0,m,0,m-p);C.addColorStop(0,"#00f5ff"),C.addColorStop(.6,"#ff007f"),C.addColorStop(1,"#ffd32a"),e.fillStyle=C,e.shadowColor="#ff007f",e.shadowBlur=8,e.fillRect(S,w,f,E),e.fillStyle="#ffffff",e.fillRect(S,w-4,f,3)}e.strokeStyle="#00f5ff",e.lineWidth=2,e.beginPath(),e.moveTo(_-10,m+2),e.lineTo(_+u*(f+g)+4,m+2),e.stroke(),e.shadowBlur=0,l?(e.fillStyle="#05ffa1",e.font="bold 16px monospace",e.fillText("● EM REPRODUÇÃO [SPACE = MENU]",256,380)):(e.fillStyle="#ff007f",e.font="bold 16px monospace",e.fillText("■ EM ESPERA [SPACE = ABRIR]",256,380)),(Math.floor(r*2.5)%2===0||a)&&(e.fillStyle="#00f5ff",e.font="bold 20px monospace",e.shadowColor="#00f5ff",e.shadowBlur=14,e.fillText("▶ PRESSIONE [ESPAÇO] PARA OUVIR ◀",256,435)),e.fillStyle="rgba(0, 0, 0, 0.28)";for(let v=0;v<512;v+=4)e.fillRect(0,v,512,2);e.strokeStyle=a?"#00f5ff":"#ff007f",e.lineWidth=8,e.strokeRect(4,4,504,504),t.needsUpdate=!0}}}function c_(){const i=document.createElement("canvas");i.width=512,i.height=160;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,512,160);t.addColorStop(0,"#0c0721"),t.addColorStop(.5,"#220b38"),t.addColorStop(1,"#0c0721"),e.fillStyle=t,e.fillRect(0,0,512,160),e.strokeStyle="#ff007f",e.lineWidth=5,e.strokeRect(6,6,500,148),e.strokeStyle="#00f5ff",e.lineWidth=2,e.strokeRect(12,12,488,136),e.fillStyle="#ffffff",e.font='bold 36px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#00f5ff",e.shadowBlur=20,e.fillText("📻 RETRO ARCADE JUKEBOX",256,65),e.font="bold 16px monospace",e.fillStyle="#ffd32a",e.shadowColor="#ff007f",e.shadowBlur=10,e.fillText("• TRILHAS SONORAS CLÁSSICAS DOS JOGOS •",256,115);const n=new tn(i);return n.needsUpdate=!0,n}function l_(i,e=0){const t=new vn;t.position.set(i.x,0,i.z),t.rotation.y=e;const n=new xt({color:1249576,roughness:.35,metalness:.6}),s=new xt({color:15658734,roughness:.1,metalness:.95}),r=new dt({color:62975}),a=new dt({color:16711807});new dt({color:16765738});const o=new at(1.8,1.3,1.2),c=new ye(o,n);c.position.set(0,.65,0),t.add(c);for(let Ne=0;Ne<7;Ne++){const Xe=new at(1.3,.04,.05),Pe=new ye(Xe,s);Pe.position.set(0,.4+Ne*.12,.61),t.add(Pe)}const l=new Yt(.08,.08,3.2,16),h=new ye(l,r);h.position.set(-.95,1.6,.3),t.add(h);const d=new ye(l,a);d.position.set(.95,1.6,.3),t.add(d);const u=new at(1.85,.2,.7),f=new xt({color:1709624,roughness:.2,metalness:.7}),g=new ye(u,f);g.position.set(0,1.35,.45),g.rotation.x=.2,t.add(g);const _=new vn;_.position.set(0,1.65,.45),t.add(_);const m=new Yt(.32,.32,.02,32),p=new xt({color:1118481,roughness:.2,metalness:.8}),v=new ye(m,p);_.add(v);const M=new Qn(.12,.3,32),E=new dt({color:62975,side:At}),S=new ye(M,E);S.rotation.x=-Math.PI/2,S.position.y=.015,_.add(S);const w=new Qn(0,.1,32),C=new dt({color:16711807,side:At}),P=new ye(w,C);P.rotation.x=-Math.PI/2,P.position.y=.016,_.add(P);const y=new at(1.8,1.3,1.1),T=new ye(y,n);T.position.set(0,2.1,-.05),t.add(T);const D=new at(1.5,1.05,.08),z=new xt({color:591639,roughness:.7}),B=new ye(D,z);B.position.set(0,2.15,.46),B.rotation.x=-.25,t.add(B);const{texture:A,render:L}=o_(),I=new nn(1.4,.95),N=new dt({map:A,toneMapped:!1}),V=new ye(I,N);V.position.set(0,2.15,.51),V.rotation.x=-.25,t.add(V);const ee=new Yt(.9,.9,1,32,1,!1,0,Math.PI),te=new ye(ee,n);te.rotation.z=Math.PI/2,te.rotation.y=-Math.PI/2,te.position.set(0,2.8,-.05),t.add(te);const U=new ac(.88,.05,16,32,Math.PI),H=new ye(U,r);H.position.set(0,2.8,.4),t.add(H);const re=c_();new at(1.7,.45,.1);const be=new ye(new nn(1.68,.42),new dt({map:re,toneMapped:!1}));be.position.set(0,3.12,.46),t.add(be);const Ee=new nn(3.6,3.6),$=new dt({color:62975,transparent:!0,opacity:.45,side:At}),Q=new ye(Ee,$);Q.rotation.x=-Math.PI/2,Q.position.set(0,.03,.6),t.add(Q);const me=2,Ue=i.x+Math.sin(e)*me,ue=i.z+Math.cos(e)*me,Ie={minX:i.x-.95,maxX:i.x+.95,minZ:i.z-.7,maxZ:i.z+.7};return{game:{id:"phase-ai-jukebox",name:"Retro Arcade Jukebox",icon:"📻",category:"music",description:"Ouça as trilhas sonoras clássicas de Street Fighter II, Mario, Sonic, OutRun, GTA 2, Streets of Rage, Doom e Mega Man!",isJukebox:!0},group:t,screenMesh:V,marqueeFace:be,floorGlow:Q,standSpot:{x:Ue,z:ue},position:{x:i.x,z:i.z},rotationY:e,collisionBox:Ie,isHovered:!1,isJukebox:!0,update(Ne){L(Ne,this.isHovered),We.isPlaying?_.rotation.y+=.04:_.rotation.y+=.005,this.isHovered?(Q.material.opacity=.75+Math.sin(Ne*6)*.2,H.material.color.setHex(Math.floor(Ne*3)%2===0?62975:16711807)):Q.material.opacity=.4+Math.sin(Ne*2)*.15}}}function d_(){const i=document.createElement("canvas");i.width=512,i.height=512;const e=i.getContext("2d");e.fillStyle="#10142e",e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.28)",e.lineWidth=2;for(let n=0;n<512;n+=64)e.beginPath(),e.moveTo(n,0),e.lineTo(n,512),e.stroke();for(let n=0;n<512;n+=64)e.beginPath(),e.moveTo(0,n),e.lineTo(512,n),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.45)";for(let n=32;n<512;n+=64)for(let s=32;s<512;s+=64)e.beginPath(),e.arc(n,s,5,0,Math.PI*2),e.fill();const t=new tn(i);return t.wrapS=Rs,t.wrapT=Rs,t.repeat.set(12,16),t.needsUpdate=!0,t}function Vi(i,e,t,n="#00f5ff",s="#ff007f"){const r=document.createElement("canvas");r.width=1024,r.height=256;const a=r.getContext("2d");a.fillStyle="transparent",a.fillRect(0,0,1024,256),a.font='bold 72px "Segoe UI", sans-serif',a.textAlign="center",a.textBaseline="middle",a.shadowColor=s,a.shadowBlur=30,a.fillStyle=n,a.fillText(i,512,128);const o=new tn(r);o.needsUpdate=!0;const c=new dt({map:o,transparent:!0,side:At});return new ye(new nn(e,t),c)}function h_(i,e){const t={minX:-23.5,maxX:23.5,minZ:-29,maxZ:18},n=new vn;i.add(n);const s=new Qu(16777215,2.4);n.add(s);const r=new Ku(62975,16711807,2.2);n.add(r);const a=new Zc(16777215,2.2);a.position.set(10,25,20),n.add(a);const o=new Zc(62975,1.8);o.position.set(-15,20,-15),n.add(o);const c=new Sa(62975,3.5,60,0);c.position.set(0,8,0),n.add(c);const l=new Sa(16711807,3.2,60,0);l.position.set(-15,7,-10),n.add(l);const h=new Sa(16765738,3.2,60,0);h.position.set(15,7,-10),n.add(h);const d=d_(),u=new nn(50,76),f=new xt({map:d,roughness:.5,metalness:.2}),g=new ye(u,f);g.rotation.x=-Math.PI/2,g.position.set(0,0,4),n.add(g);const _=new Yt(10.5,10.5,.08,36),m=new xt({color:1581122,roughness:.3,metalness:.5}),p=new ye(_,m);p.position.set(0,.04,-2.5),n.add(p);const v=new Qn(10.2,10.5,36),M=new dt({color:62975,side:At}),E=new ye(v,M);E.rotation.x=-Math.PI/2,E.position.set(0,.09,-2.5),n.add(E);const S=new Qn(1.2,1.8,24),w=new dt({color:16711807,side:At}),C=new ye(S,w);C.rotation.x=-Math.PI/2,C.position.set(0,.1,-2.5),n.add(C);const P=new xt({color:1448494,roughness:.5,metalness:.3,side:Fn}),y=new ye(new at(50,10,1),P);y.position.set(0,5,-30),n.add(y);const T=new ye(new at(50,10,1),P);T.position.set(0,5,40),n.add(T);const D=new ye(new at(1,10,72),P);D.position.set(-24.5,5,4),n.add(D);const z=new ye(new at(1,10,72),P);z.position.set(24.5,5,4),n.add(z);const B=(be,Ee,$,Q,me,Ue)=>{const ue=me?new at(.12,.12,Q):new at(Q,.12,.12),Ie=new dt({color:Ue}),Je=new ye(ue,Ie);Je.position.set(be,Ee,$),n.add(Je)};B(0,4.2,-29.4,48,!1,62975),B(0,7.8,-29.4,48,!1,16711807),B(-23.9,4.2,4,68,!0,393121),B(23.9,4.2,4,68,!0,16765738);const A=Vi("⚡ NOPEX VIRTUAL ARCADE ⚡",24,6,"#00f5ff","#ff007f");A.position.set(0,8.2,-29.2),n.add(A);const L=Vi("🌟 SPOTLIGHT MEGAHITS",10,2.5,"#ffd32a","#ff007f");L.position.set(0,6.5,-3.5),n.add(L);const I=Vi("⚔️ ACTION & FIGHTING ALLEY",14,2.5,"#ff007f","#00f5ff");I.position.set(-18.5,6.5,-3.5),I.rotation.y=Math.PI/2,n.add(I);const N=Vi("🕹️ RETRO VAULT & 16-BIT LEGENDS",15,2.5,"#7928ca","#00f5ff");N.position.set(0,6.5,-25.5),n.add(N);const V=Vi("🏎️ SPEEDWAY & RACING",12,2.5,"#ff3838","#ffd32a");V.position.set(11.5,6.5,-10),V.rotation.y=-Math.PI/2,n.add(V);const ee=Vi("🎱 SPORTS & CASUAL ARCADE",12,2.5,"#05ffa1","#ffd32a");ee.position.set(20,6.5,-5),ee.rotation.y=-Math.PI/2,n.add(ee);const te={};e.forEach(be=>{te[be.id]=be});const U=[],H=(be,Ee,$)=>{const Q=te[be]||e[U.length%e.length],me=r_(Q,Ee,$);n.add(me.group),U.push(me)};H("classic-doom",{x:-5.4,z:5},0),H("classic-pacman",{x:-1.8,z:5},0),H("neon-tetris-3d",{x:1.8,z:5},0);const re=l_({x:5.4,z:5},0);return n.add(re.group),U.push(re),H("geometricsurvivor",{x:0,z:-10},0),H("cyber-pong-3d",{x:0,z:2.5},Math.PI),H("neon-viper",{x:-6.5,z:-3.5},Math.PI/2),H("cute-mini-golf",{x:6.5,z:-3.5},-Math.PI/2),H("street-fighter-2",{x:-19.5,z:-24.5},Math.PI/2),H("mk2",{x:-19.5,z:-21},Math.PI/2),H("sor2",{x:-19.5,z:-17.5},Math.PI/2),H("mslug",{x:-19.5,z:-14},Math.PI/2),H("mslugx",{x:-19.5,z:-10.5},Math.PI/2),H("gta-2",{x:-19.5,z:-7},Math.PI/2),H("neon-katana-slash",{x:-19.5,z:-3.5},Math.PI/2),H("stickman-fps-arcade",{x:-19.5,z:0},Math.PI/2),H("castlevania4",{x:-19.5,z:3.5},Math.PI/2),H("sky-ace-1944",{x:-19.5,z:7},Math.PI/2),H("asteroid-blitz",{x:-19.5,z:10.5},Math.PI/2),H("cyber-shuriken",{x:-19.5,z:14},Math.PI/2),H("sonic1",{x:-11.4,z:-26.5},0),H("sonic2",{x:-7.6,z:-26.5},0),H("megaman2",{x:-3.8,z:-26.5},0),H("super-mario",{x:0,z:-26.5},0),H("super-bomberman",{x:3.8,z:-26.5},0),H("neon-stack-3d",{x:7.6,z:-26.5},0),H("neon-orbit-drift",{x:11.4,z:-26.5},0),H("topgear",{x:11.5,z:-20},-Math.PI/2),H("fzero",{x:11.5,z:-15},-Math.PI/2),H("outrun",{x:11.5,z:-10},-Math.PI/2),H("neon-drift-racer",{x:11.5,z:-5},-Math.PI/2),H("cyber-runner-3d",{x:11.5,z:0},-Math.PI/2),H("kawaii-8ball-pool",{x:20.5,z:-20},-Math.PI/2),H("neon-pachinko-pop",{x:20.5,z:-15},-Math.PI/2),H("neon-archery-master",{x:20.5,z:-10},-Math.PI/2),H("brick-breaker-fx",{x:20.5,z:-5},-Math.PI/2),H("neon-drop-2048",{x:20.5,z:0},-Math.PI/2),H("cyber-pinball-fx",{x:20.5,z:5},-Math.PI/2),H("flappy-cyber-droid",{x:20.5,z:10},-Math.PI/2),{roomBounds:t,cabinets:U,worldGroup:n,floorMesh:g,update(be,Ee){U.forEach($=>$.update(be,Ee)),E.material.opacity=.8+Math.sin(be*4)*.2}}}class u_{constructor(e,t,n=null){this.cabinets=e,this.onPlayGame=t,this.onDiscoverCabinet=n,this.activeCabinet=null,this.lastHoveredCab=null,this.promptEl=document.getElementById("arcade-3d-prompt"),this.promptTitle=document.getElementById("arcade-prompt-title"),this.promptDesc=document.getElementById("arcade-prompt-desc"),this.promptRecord=document.getElementById("arcade-prompt-record"),this.actionBtn=document.getElementById("arcade-action-btn"),this.playBtn=document.getElementById("arcade-hologram-play-btn"),this.bindInputs()}bindInputs(){window.addEventListener("keydown",e=>{document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA")||window.__arcadeOverlayOpen||(e.code==="Enter"||e.code==="KeyE")&&this.activeCabinet&&(e.preventDefault(),this.triggerPlay())}),this.actionBtn&&this.actionBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay()}),this.playBtn&&this.playBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay()}),this.promptEl&&this.promptEl.addEventListener("click",e=>{e.target.tagName!=="BUTTON"&&this.activeCabinet&&this.triggerPlay()})}triggerPlay(){this.activeCabinet&&this.onPlayGame&&this.onPlayGame(this.activeCabinet.game,this.activeCabinet)}update(e){let t=null,n=1/0;for(const s of this.cabinets){s.isHovered=!1;const r=Math.hypot(e.x-s.standSpot.x,e.z-s.standSpot.z);r<3.8&&r<n&&(n=r,t=s)}t?(t.isHovered=!0,this.activeCabinet=t,this.lastHoveredCab!==t&&(Fd(),this.lastHoveredCab=t,this.renderHologram(t.game),this.onDiscoverCabinet&&this.onDiscoverCabinet(t.game.id)),this.promptEl&&this.promptEl.classList.add("visible"),this.actionBtn&&this.actionBtn.classList.add("visible")):(this.activeCabinet=null,this.lastHoveredCab=null,this.promptEl&&this.promptEl.classList.remove("visible"),this.actionBtn&&this.actionBtn.classList.remove("visible"))}renderHologram(e){if(this.promptTitle&&(this.promptTitle.innerHTML=`${e.icon||"🎮"} ${e.name||"ARCADE GAME"}`),this.promptDesc&&(e.isJukebox?this.promptDesc.textContent=e.description||"Pressione [E] ou [ENTER] para abrir o Jukebox de trilhas clássicas.":this.promptDesc.textContent=e.description||"Pressione [ENTER] ou [E] para entrar na máquina e jogar."),this.promptRecord)if(e.isJukebox)this.promptRecord.innerHTML="🎵 <strong>RETRO ARCADE JUKEBOX</strong> • 15 Trilhas Clássicas dos Jogos";else{const t=window.__ARCADE_LEADERBOARDS__&&window.__ARCADE_LEADERBOARDS__[e.id];t&&t.topScore?this.promptRecord.innerHTML=`🏆 Recorde Mundial: <strong>${t.topScore.toLocaleString()} ${e.unit||"PTS"}</strong> [${t.topPilot||"MRC"}]`:this.promptRecord.innerHTML=`⚡ 60 FPS Instantâneo • <strong>${(e.category||"ACTION").toUpperCase()}</strong>`}this.playBtn&&(e.isJukebox?this.playBtn.innerHTML='<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">J</kbd> PARA OUVIR</span> ➔':this.playBtn.innerHTML='<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">ENTER</kbd> PARA JOGAR</span> ➔'),this.actionBtn&&(e.isJukebox?this.actionBtn.innerHTML="<span>OUVIR</span> 📻":this.actionBtn.innerHTML="<span>JOGAR</span> 🕹️")}}class f_{constructor(e){this.onCloseCallback=e,this.overlay=document.getElementById("arcade-game-overlay"),this.iframe=document.getElementById("arcade-game-iframe"),this.titleEl=document.getElementById("arcade-overlay-title"),this.closeBtn=document.getElementById("arcade-overlay-back"),this.fullscreenBtn=document.getElementById("arcade-overlay-fullscreen"),this.reloadBtn=document.getElementById("arcade-overlay-reload"),this.isOpen=!1,this.activeGame=null,this.bindEvents()}bindEvents(){this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):this.overlay.requestFullscreen().catch(()=>{})}),this.reloadBtn&&this.reloadBtn.addEventListener("click",()=>{this.iframe&&this.activeGame&&(this.iframe.src=this.activeGame.url)}),window.addEventListener("message",e=>{e.data&&(e.data.type==="CLOSE_ARCADE_GAME"||e.data.type==="ARCADE_CLOSE"||e.data.type==="ARCADE_EXIT"||e.data==="closeArcade"||e.data==="escape")&&this.close()}),window.addEventListener("keydown",e=>{if(e.key==="Escape"&&this.isOpen){e.preventDefault(),e.stopPropagation(),this.close();return}if(this.isOpen&&this.iframe&&this.iframe.contentWindow&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","W","a","A","s","S","d","D"," ","Enter"].includes(e.key))try{this.iframe.contentWindow.postMessage({type:"ARCADE_KEY_DOWN",key:e.key,code:e.code},"*"),this.iframe.contentWindow.dispatchEvent(new KeyboardEvent("keydown",{key:e.key,code:e.code,bubbles:!0}))}catch{}},!0)}attachIframeEscape(){if(this.iframe)try{const e=this.iframe.contentWindow,t=this.iframe.contentDocument||(e==null?void 0:e.document),n=s=>{(s.key==="Escape"||s.code==="Escape"||s.keyCode===27)&&(s.preventDefault(),s.stopPropagation(),this.close())};e&&(e.removeEventListener("keydown",n,!0),e.addEventListener("keydown",n,!0)),t&&(t.removeEventListener("keydown",n,!0),t.addEventListener("keydown",n,!0))}catch{}}open(e){this.isOpen=!0,window.__arcadeOverlayOpen=!0,document.exitPointerLock&&document.exitPointerLock(),this.activeGame=e,Nd(),We.duck(!0),this.titleEl&&(this.titleEl.innerHTML=`${e.icon||"🎮"} ${e.name||"JOGO"}`),this.iframe&&(this.iframe.src=e.url,this.iframe.onload=()=>{try{this.iframe.focus(),this.iframe.contentWindow&&this.iframe.contentWindow.focus(),this.attachIframeEscape()}catch{}},setTimeout(()=>this.attachIframeEscape(),150),setTimeout(()=>this.attachIframeEscape(),600),setTimeout(()=>this.attachIframeEscape(),1500)),this.overlay&&(this.overlay.style.display="flex",setTimeout(()=>{this.overlay.classList.add("active");try{this.iframe&&(this.iframe.focus(),this.iframe.contentWindow&&this.iframe.contentWindow.focus(),this.attachIframeEscape())}catch{}},100))}close(){this.isOpen&&(this.isOpen=!1,window.__arcadeOverlayOpen=!1,document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),Od(),We.duck(!1),this.overlay&&(this.overlay.classList.remove("active"),setTimeout(()=>{this.overlay.style.display="none",this.iframe&&(this.iframe.src="about:blank")},250)),this.onCloseCallback&&this.onCloseCallback())}}class p_{constructor(){this.tickerEl=null,this.createBanner()}createBanner(){let e=document.getElementById("mp-score-ticker");e&&e.remove(),e=document.createElement("div"),e.id="mp-score-ticker",e.style.cssText=`
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
    `,document.body.appendChild(e),this.tickerEl=e}showRecord(e,t,n){if(!this.tickerEl)return;const s=typeof n=="number"?n.toLocaleString("pt-BR"):n;this.tickerEl.innerHTML=`
      <span style="font-size: 16px;">🏆</span>
      <span>NOVO RECORDE: <strong>${e}</strong> MARCOU <strong>${s} PTS</strong> EM ${t.toUpperCase()}!</span>
      <span style="font-size: 16px;">🔥</span>
    `,this.tickerEl.style.transform="translateX(-50%) translateY(0)",this.playFanfareAudio(),this.hideTimeout&&clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(()=>{this.tickerEl.style.transform="translateX(-50%) translateY(-100px)"},6e3)}playFanfareAudio(){try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;t.state==="suspended"&&t.resume(),[523.25,659.25,783.99,1046.5].forEach((s,r)=>{const a=t.createOscillator(),o=t.createGain();a.type="triangle",a.frequency.setValueAtTime(s,t.currentTime+r*.1),o.gain.setValueAtTime(.2,t.currentTime+r*.1),o.gain.exponentialRampToValueAtTime(.01,t.currentTime+r*.1+.3),a.connect(o),o.connect(t.destination),a.start(t.currentTime+r*.1),a.stop(t.currentTime+r*.1+.3)})}catch{}}}/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const cc=Object.freeze,Zn=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Ws=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,kd=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Bd=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,m_=cc({p:Zn,n:Ws,h:1n,a:0n,b:7n,Gx:kd,Gy:Bd}),dn=32,Tl=i=>i instanceof Uint8Array||ArrayBuffer.isView(i)&&i.constructor.name==="Uint8Array"&&i.BYTES_PER_ELEMENT===1,sn=(i,e,t="")=>{if(Tl(i)&&(e===void 0||i.length===e))return i;const n=Tl(i),s=e!==void 0?` of length ${e}`:"",r=n?`length=${i.length}`:`type=${typeof i}`,a=(t?`"${t}" `:"")+"expected Uint8Array"+s+", got "+r;throw n?new RangeError(a):new TypeError(a)},g_=i=>Uint8Array.from(i),__=(i,e,t)=>g_(sn(i,t,e)),zd=(i,e)=>i.toString(16).padStart(e,"0"),Gd=i=>{let e="";for(const t of sn(i))e+=zd(t,2);return e},Hd=i=>{const e="hex invalid";if(typeof i!="string")throw new TypeError(e);if(i.length%2||!/^[\da-f]*$/i.test(i))throw new RangeError(e);const t=new Uint8Array(i.length/2);for(let n=0,s=0;n<t.length;n++,s+=2){const r=i.charCodeAt(s),a=i.charCodeAt(s+1);t[n]=((r&15)+(r>>6)*9)*16+(a&15)+(a>>6)*9}return t},wl=()=>{var e;const i=(e=globalThis==null?void 0:globalThis.crypto)==null?void 0:e.subtle;if(i)return i;throw new Error("crypto.subtle must be defined, consider polyfill")},es=(...i)=>{let e=0;for(const s of i)e+=sn(s).length;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.length;return t},lc=(i=dn)=>{const e=globalThis==null?void 0:globalThis.crypto;if(typeof(e==null?void 0:e.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(i))},x_=BigInt,Xs=(i,e,t,n="bad number: out of range")=>{if(typeof i!="bigint")throw new TypeError(n);if(e<=i&&i<t)return i;throw new RangeError(n)},Re=(i,e=Zn)=>(i%=e)>=0n?i:e+i,Gr=i=>Re(i,Ws),v_=(i,e)=>{if(i===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Re(i,e),n=e,s=0n,r=1n;for(;t!==0n;){const o=n/t,c=n-t*o,l=s-r*o;n=t,t=c,s=r,r=l}if(n!==1n)throw new Error("invert: does not exist");return Re(s,e)},Vd=i=>{const e=b_[i];if(typeof e!="function")throw new Error("hashes."+i+" not set");return e},Al=(i,e,t)=>sn(Vd(i)(e,t),dn,"digest"),Rl=async(i,e,t)=>sn(await Vd(i)(e,t),dn,"digest"),Ra=i=>{if(i instanceof ei)return i;throw new TypeError("Point expected")},Ca="bad point: not on curve",Wd=i=>Re(Re(i*i)*i+7n),Cl=i=>Xs(i,0n,Zn),Es=i=>Xs(i,1n,Zn),Xd=i=>Xs(i,1n,Ws),Hr=i=>!(i&1n),y_=i=>Uint8Array.of(Hr(i)?2:3),qd=i=>{const e=Wd(Es(i));let t=1n;for(let n=e,s=(Zn+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*n%Zn),n=n*n%Zn;if(Re(t*t)!==e)throw new Error("sqrt invalid");return new ei(i,Hr(t)?t:Re(-t),1n)},Ln=class Ln{constructor(e,t,n){It(this,"X");It(this,"Y");It(this,"Z");this.X=Cl(e),this.Y=Es(t),this.Z=Cl(n),cc(this)}static CURVE(){return m_}static fromAffine(e){const{x:t,y:n}=e;return t===0n&&n===0n?Ts:new Ln(t,n,1n)}static fromBytes(e){sn(e);const t=e.length,n=e[0],s=Ir(e,1,33);try{if(t===33&&(n===2||n===3)){const r=qd(s);return n===3?r.negate():r}if(t===65&&n===4)return new Ln(s,Ir(e,33,65),1n).assertValidity()}catch{throw new Error(Ca)}throw new Error(Ca)}static fromHex(e){return Ln.fromBytes(Hd(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:n,Z:s}=this,{X:r,Y:a,Z:o}=Ra(e);return Re(t*o)===Re(r*s)&&Re(n*o)===Re(a*s)}is0(){return this.Z===0n}negate(){return new Ln(this.X,Re(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:n,Z:s}=this,{X:r,Y:a,Z:o}=Ra(e),c=0n,l=7n;let h=0n,d=0n,u=0n;const f=Re(l*3n);let g=Re(t*r),_=Re(n*a),m=Re(s*o),p=Re(t+n),v=Re(r+a);p=Re(p*v),v=Re(g+_),p=Re(p-v),v=Re(t+s);let M=Re(r+o);return v=Re(v*M),M=Re(g+m),v=Re(v-M),M=Re(n+s),h=Re(a+o),M=Re(M*h),h=Re(_+m),M=Re(M-h),u=Re(c*v),h=Re(f*m),u=Re(h+u),h=Re(_-u),u=Re(_+u),d=Re(h*u),_=Re(g+g),_=Re(_+g),m=Re(c*m),v=Re(f*v),_=Re(_+m),m=Re(g-m),m=Re(c*m),v=Re(v+m),g=Re(_*v),d=Re(d+g),g=Re(M*v),h=Re(p*h),h=Re(h-g),g=Re(p*_),u=Re(M*u),u=Re(u+g),new Ln(h,d,u)}subtract(e){return this.add(Ra(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Ts;if(Xd(e),e===1n)return this;if(this.equals(yi))return L_(e).p;let n=Ts,s=yi,r=this;for(let a=0;t?a<256:e>0n;a++)e&1n?n=n.add(r):t&&(s=s.add(r)),r=r.double(),e>>=1n;return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:n}=this;if(n===0n)return{x:0n,y:0n};if(n===1n)return{x:e,y:t};const s=v_(n,Zn);if(Re(n*s)!==1n)throw new Error("inverse invalid");return{x:Re(e*s),y:Re(t*s)}}assertValidity(){const{x:e,y:t}=this.toAffine();if(Es(e),Es(t),Re(t*t)!==Wd(e))throw new Error(Ca);return this}toBytes(e=!0){const{x:t,y:n}=this.assertValidity().toAffine(),s=Bn(t);return e?es(y_(n),s):es(Uint8Array.of(4),s,Bn(n))}toHex(e){return Gd(this.toBytes(e))}};It(Ln,"BASE"),It(Ln,"ZERO");let ei=Ln;const yi=new ei(kd,Bd,1n),Ts=new ei(0n,1n,0n);ei.BASE=yi;ei.ZERO=Ts;const S_=(i,e,t)=>yi.multiply(e,!1).add(i.multiply(t,!1)).assertValidity(),Si=i=>x_("0x"+(Gd(i)||"0")),Ir=(i,e,t)=>Si(i.subarray(e,t)),Bn=i=>Hd(zd(Xs(i,0n,2n**256n),dn*2)),M_=i=>{const e=Si(sn(i,dn,"secret key"));return Xs(e,1n,Ws,"invalid secret key: outside of range")},Pl="SHA-256",b_={hmacSha256Async:async(i,e)=>{const t=wl(),n=await t.importKey("raw",i,{name:"HMAC",hash:Pl},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",n,e))},hmacSha256:void 0,sha256Async:async i=>new Uint8Array(await wl().digest(Pl,i)),sha256:void 0},E_=i=>{if(i=i===void 0?lc(48):i,sn(i),i.length<48||i.length>1024)throw new RangeError("expected 48-1024b");const e=Re(Si(i),Ws-1n);return Bn(e+1n)},T_=i=>e=>{const t=E_(e);return{secretKey:t,publicKey:i(t)}},Yd=i=>Uint8Array.from("BIP0340/"+i,e=>e.charCodeAt(0)),zo=(i,...e)=>{const t=Al("sha256",Yd(i));return Al("sha256",es(t,t,...e))},Go=(i,...e)=>Rl("sha256Async",Yd(i)).then(t=>Rl("sha256Async",es(t,t,...e))),dc=i=>{const e=M_(i),t=yi.multiply(e),{x:n,y:s}=t.assertValidity().toAffine(),r=Hr(s)?e:Gr(-e),a=Bn(n);return{d:r,px:a}},hc=i=>Gr(Si(i)),jd=(...i)=>hc(zo("challenge",...i)),$d=async(...i)=>hc(await Go("challenge",...i)),Kd=i=>dc(i).px,w_=T_(Kd),Zd=(i,e,t)=>{const n=__(i,"message"),{px:s,d:r}=dc(e);return{m:n,px:s,d:r,a:sn(t,dn)}},Jd=i=>{const e=hc(i);if(e===0n)throw new Error("sign failed: k is zero");const{px:t,d:n}=dc(Bn(e));return{rx:t,k:n}},Qd=(i,e,t,n)=>es(e,Bn(Gr(i+t*n))),eh="invalid signature produced",A_=(i,e,t=lc(dn))=>{const{m:n,px:s,d:r,a}=Zd(i,e,t),o=Bn(r^Si(zo("aux",a))),{rx:c,k:l}=Jd(zo("nonce",o,s,n)),h=Qd(l,c,jd(c,s,n),r);if(!nh(h,n,s))throw new Error(eh);return h},R_=async(i,e,t=lc(dn))=>{const{m:n,px:s,d:r,a}=Zd(i,e,t),o=Bn(r^Si(await Go("aux",a))),{rx:c,k:l}=Jd(await Go("nonce",o,s,n)),h=Qd(l,c,await $d(c,s,n),r);if(!await ih(h,n,s))throw new Error(eh);return h},C_=(i,e)=>i instanceof Promise?i.then(e):e(i),th=(i,e,t,n)=>{const s=sn(i,64,"signature"),r=sn(e,void 0,"message"),a=sn(t,dn,"publicKey");let o,c,l,h;try{const d=Si(a);o=qd(d),c=Es(Ir(s,0,dn)),l=Xd(Ir(s,dn,64)),h=es(Bn(c),a,r)}catch{return!1}return C_(n(h),d=>{try{const{x:u,y:f}=S_(o,l,Gr(-d)).toAffine();return!(!Hr(f)||u!==c)}catch{return!1}})},nh=(i,e,t)=>th(i,e,t,jd),ih=async(i,e,t)=>th(i,e,t,$d),sh=cc({keygen:w_,getPublicKey:Kd,sign:A_,verify:nh,signAsync:R_,verifyAsync:ih}),P_=()=>{const i=[];let e=yi,t=e;for(let n=0;n<33;n++){t=e,i.push(t);for(let s=1;s<128;s++)t=t.add(e),i.push(t);e=t.double()}return i};let Ll;const Dl=(i,e)=>{const t=e.negate();return i?t:e},L_=i=>{const e=Ll||(Ll=P_());let t=Ts,n=yi;for(let s=0;s<33;s++){let r=Number(i&255n);i>>=8n,r>128&&(r-=256,i+=1n);const a=s*128,o=a+Math.abs(r)-1,c=s%2!==0,l=r<0;r===0?n=n.add(Dl(c,e[a])):t=t.add(Dl(l,e[o]))}if(i!==0n)throw new Error("invalid wnaf");return{p:t,f:n}},{floor:Ho,min:D_,sin:I_}=Math,un="Trystero",Us=(i,e)=>Array(i).fill(void 0).map(e),U_="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",as=i=>Us(i,()=>U_[Ho(Math.random()*62)]??"").join(""),hn=as(20),Mi=Promise.all.bind(Promise),rh=typeof window<"u",{entries:gi,fromEntries:ah,keys:Qt,values:Yi}=Object,Ft=()=>{},oh="candidate",ot=i=>(i!==null&&clearTimeout(i),null),nt=i=>new Error(`${un}: ${i}`),ts=(i,e)=>i instanceof Error&&i.message?i.message:typeof i=="string"&&i?i:jt(i??e),$n=(i,e)=>i instanceof Error?i:nt(ts(i,e)),N_=new TextEncoder,F_=new TextDecoder,Jn=i=>N_.encode(i),mi=i=>F_.decode(i),Ns=i=>i.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Fs=(...i)=>i.join("@"),O_=(i,e)=>{const t=[...i],n=()=>{const r=I_(e++)*1e4;return r-Ho(r)};let s=t.length;for(;s;){const r=Ho(n()*s--),a=t[s];t[s]=t[r],t[r]=a}return t},k_=(i,e,t,n=!1)=>{var s,r;return((s=i.relayConfig)==null?void 0:s.urls)||(n?O_(e,ch(i.appId)):e).slice(0,((r=i.relayConfig)==null?void 0:r.redundancy)??t)},jt=JSON.stringify,ns=i=>{try{return JSON.parse(i)}catch{throw nt(`failed to parse JSON: ${i}`)}},ch=(i,e=Number.MAX_SAFE_INTEGER)=>i.split("").reduce((t,n)=>t+n.charCodeAt(0),0)%e,Il=3333,Ul=6e4,_s={};let ws=null,As=null;const B_=()=>{ws||(ws=new Promise(i=>{As=i}).finally(()=>{As=null,ws=null}))},z_=()=>{As==null||As()},G_=(i,e,t)=>{const n={};let s=!1,r=!1,a,o=Ft;n.isClosed=!1,n.ready=new Promise(l=>o=l);const c=()=>{if(n.isClosed)return;a=void 0,r=!1;const l=new WebSocket(i);l.onclose=()=>{if(n.isClosed||r)return;if(r=!0,ws){ws.then(c);return}const h=_s[i]??(_s[i]=Il);if(h>=Ul){n.isClosed=!0;return}a=setTimeout(c,Math.random()*h),_s[i]=D_(h*2,Ul)},l.onmessage=h=>e(String(h.data)),n.socket=l,n.url=l.url,l.onopen=()=>{const h=s;s=!0,o(n),_s[i]=Il,h&&(t==null||t())},n.send=h=>{l.readyState===1&&l.send(h)}};return n.close=()=>{n.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),n.socket.close()},c(),n},H_=i=>{const e={},t=new WeakMap,n=a=>{const o=t.get(a);if(!o)throw nt("relay bookkeeping missing registration for relay client");return o},s=()=>{const a={},o=c=>a[c]??(a[c]={});return{forKey:o,forRelay:c=>o(n(c))}},r=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>{const c=e[a];return c||r(a,o())},keyOf:n,scoped:s,getSockets:()=>ah(gi(e).flatMap(([a,o])=>{const c=i(o);return c?[[a,c]]:[]}))}},V_=()=>{if(rh){const i=new AbortController;return addEventListener("online",z_,{signal:i.signal}),addEventListener("offline",B_,{signal:i.signal}),()=>i.abort()}return Ft},uc="AES-GCM",Pa={},W_=i=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(i)))),X_=i=>{const e=atob(i);return new Uint8Array(e.length).map((t,n)=>e.charCodeAt(n)).buffer},Vr=async(i,e)=>new Uint8Array(await crypto.subtle.digest(i,Jn(e))),Os=async i=>Pa[i]??(Pa[i]=Array.from(await Vr("SHA-1",i)).map(e=>e.toString(36)).join("")),q_=async(i,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Jn(`${i}:${e}:${t}`)),{name:uc},!1,["encrypt","decrypt"]),Y_=async(i,e)=>Ns(await Vr("SHA-256",`${un}:${i}:${e}`)),lh="$",dh=",",j_=async(i,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(dh)+lh+W_(await crypto.subtle.encrypt({name:uc,iv:t},await i,Jn(e)))},$_=async(i,e)=>{const[t,n]=e.split(lh);return mi(await crypto.subtle.decrypt({name:uc,iv:new Uint8Array((t==null?void 0:t.split(dh).map(Number))??[])},await i,X_(n??"")))},fc=57333,K_=18e4,Z_=20;var J_=class{constructor(i){It(this,"makeOffer");It(this,"pool",[]);It(this,"pooled",new Set);It(this,"leased",new Map);It(this,"recycling",new Set);It(this,"cleanupTimer",null);It(this,"active",!1);this.makeOffer=i}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Us(Z_,this.makeOffer).forEach(i=>this.push(i)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(i=>i.isDead?(this.pooled.delete(i),!1):!0)},fc)}push(i){i.isDead||this.pooled.has(i)||this.leased.has(i)||(this.pool.push(i),this.pooled.add(i))}shift(i){const e=[];for(;e.length<i&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(i){const e=this.leased.get(i);e&&(ot(e),this.leased.delete(i))}recycle(i){if(!(i.isDead||this.recycling.has(i))){if(i.connection.remoteDescription){i.destroy();return}if(!this.active){i.destroy();return}this.recycling.add(i),i.setHandlers({connect:Ft,close:Ft,error:Ft}),i.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||i.isDead||!this.active){i.destroy();return}this.push(i)}).catch(()=>i.destroy()).finally(()=>this.recycling.delete(i))}}reclaimLeased(i){const e=this.leased.get(i);e&&(ot(e),this.leased.delete(i),this.recycle(i))}lease(i){this.claimLeased(i),this.leased.set(i,setTimeout(()=>{this.leased.delete(i),this.recycle(i)},K_))}checkout(i,e,t){const n=this.shift(i),s=Math.max(0,i-n.length);s>0&&n.push(...Us(s,this.makeOffer));const r=async(a,o=!1)=>{try{const c=await t(a);return e?(this.lease(a),{peer:a,offer:c,claim:()=>this.claimLeased(a),reclaim:()=>this.reclaimLeased(a)}):{peer:a,offer:c}}catch(c){if(this.claimLeased(a),this.pooled.delete(a),a.destroy(),!o)return r(this.makeOffer(),!0);throw c}};return Mi(n.map(a=>r(a)))}getOffers(i,e){return this.checkout(i,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(i=>i.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((i,e)=>{ot(i),e.destroy()}),this.leased.clear(),this.recycling.forEach(i=>i.destroy()),this.recycling.clear()}};const La=nt("incorrect password for overlapping room"),Q_=(i,e,t)=>{const n=a=>Vr("SHA-256",`${a}:${i}:${e}:${t}`).then(Ns),s=async(a,o,c)=>{if(!i)return;if(c){const h=as(36);await a({__trystero_pw:"challenge",c:h});const{data:d}=await o();if(!d||typeof d!="object"||d.__trystero_pw!=="response"||typeof d.h!="string")throw La;const u=await n(h);if(d.h!==u)throw La;return}const{data:l}=await o();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw La;await a({__trystero_pw:"response",h:await n(l.c)})};return{run:s,compose:a=>i||a?async(o,c,l,h)=>{await s(c,l,h),await(a==null?void 0:a(o,c,l,h))}:void 0}},ex=i=>{const e=ts(i,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},tx=({onPeerHandshake:i,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:n,sendHandshakeReady:s,onActivate:r,onFailure:a})=>{const o={},c=(d,u)=>{const f=o[d];!f||u&&f.peer!==u||f.isActive||!f.didLocalHandshakePass||!f.didReceiveRemoteReady||(f.isActive=!0,f.handshakeTimer=ot(f.handshakeTimer),r(d,f.peer))},l=(d,u,f)=>{const g=o[d];if(!g||g.peer!==u)return;const _=ex(f);e==null||e(d,_),a(d,u,nt(_))},h=(d,u)=>{const f=o[d];!f||f.peer!==u||f.isActive||(f.didLocalHandshakePass=!0,s("",d).catch(g=>l(d,u,nt(`failed sending handshake readiness: ${ts(g,"unknown send failure")}`))),c(d,u))};return{addPeer:(d,u)=>{o[d]={peer:u,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(d,u)=>{const f=o[d];f&&(f.handshakeTimer=ot(f.handshakeTimer),f.pendingHandshakePayloads.length=0,f.handshakeWaiters.splice(0).forEach(g=>g.reject(u)),delete o[d])},canReceiveFromPeer:(d,u)=>{const f=o[d];return!!(f&&(f.isActive||u))},start:(d,u)=>{const f=o[d];if(!f||f.peer!==u)return;f.handshakeTimer=setTimeout(()=>l(d,u,nt(`handshake timed out after ${t}ms`)),t);const g=async(p,v)=>{await n(p,d,v)},_=()=>new Promise((p,v)=>{const M=o[d];if(!M||M.peer!==u){v(nt("peer disconnected during handshake"));return}const E=M.pendingHandshakePayloads.shift();if(E){p(E);return}M.handshakeWaiters.push({resolve:p,reject:S=>v(S)})}),m=hn<d;Promise.resolve(i==null?void 0:i(d,g,_,m)).then(()=>h(d,u)).catch(p=>l(d,u,$n(p,"handshake failed")))},receiveHandshakeData:(d,u,f)=>{const g=o[u];if(!g||g.isActive)return;const _=f===void 0?{data:d}:{data:d,metadata:f},m=g.handshakeWaiters.shift();if(m){m.resolve(_);return}g.pendingHandshakePayloads.push(_)},receiveHandshakeReady:d=>{const u=o[d];!u||u.isActive||(u.didReceiveRemoteReady=!0,c(d))}}},nx=15e3,ix=5e3,Nl="icegatheringstatechange",sx="iceconnectionstatechange",xs="offer",rx="answer",ax=/out of range/i,Fl=i=>i.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var Ol=(i,{trickleIce:e,rtcConfig:t,rtcPolyfill:n,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{const a=new(n??RTCPeerConnection)({iceServers:ox.concat(s??[]),...t}),o={},c=[],l=[],h=e!==!1,d=[],u=[];let f=!1,g=!1,_=null,m=null,p=!1;const v=()=>m=ot(m),M=()=>{var U;p||(p=!0,v(),(U=o.close)==null||U.call(o))},E=U=>{o.signal?o.signal(U):c.push(U)},S=U=>{const H=o.signal;o.signal=re=>{H==null||H(re),U(re)},c.length>0&&c.splice(0).forEach(re=>{var be;return(be=o.signal)==null?void 0:be.call(o,re)})},w=U=>r?Fl(U):U,C=U=>{if(!r||typeof U.candidate!="string")return U;const H=Fl(U.candidate);return H===U.candidate?U:{...U,candidate:H}},P=U=>{var H,re;return{type:((H=U.localDescription)==null?void 0:H.type)??xs,sdp:w(((re=U.localDescription)==null?void 0:re.sdp)??"")}},y=()=>{var H,re;const U=(H=a.remoteDescription)==null?void 0:H.sdp;return U?((re=U.match(/a=ice-ufrag:([^\s]+)/))==null?void 0:re[1])??null:null},T=()=>{var U,H;return(((H=(U=a.remoteDescription)==null?void 0:U.sdp)==null?void 0:H.match(/^m=/gm))??[]).length},D=U=>{if(!a.remoteDescription)return!1;const H=T();if(typeof U.sdpMLineIndex=="number"&&H>0&&U.sdpMLineIndex>=H)return!1;const re=y();return!(re&&U.usernameFragment&&U.usernameFragment!==re)},z=async U=>{try{return await a.addIceCandidate(U),!0}catch(H){if(H instanceof Error&&ax.test(H.message)&&typeof U.sdpMLineIndex=="number")return!1;throw H}},B=async()=>{if(!a.remoteDescription||d.length===0)return;const U=d.splice(0),H=[];for(const re of U){if(!D(re)){H.push(re);continue}await z(re)||H.push(re)}H.length>0&&d.push(...H)},A=async U=>{if(D(U)){await z(U)||d.push(U);return}d.push(U)},L=U=>{U.binaryType="arraybuffer",U.bufferedAmountLowThreshold=65535,U.onmessage=H=>{const re=H.data;o.data?o.data(re):l.push(re)},U.onopen=()=>{var H;return(H=o.connect)==null?void 0:H.call(o)},U.onclose=M,U.onerror=({error:H})=>{var re;return(re=o.error)==null?void 0:re.call(o,$n(H,"data channel error"))}},I=async U=>{let H=null;try{await Promise.race([new Promise(re=>{const be=()=>{U.iceGatheringState==="complete"&&(U.removeEventListener(Nl,be),re())};U.addEventListener(Nl,be),be()}),new Promise(re=>{H=setTimeout(re,nx)})])}finally{ot(H)}return P(U)},N=async()=>{const U=h?P(a):await I(a);return E(U),U};i?(_=a.createDataChannel("data"),L(_)):a.ondatachannel=({channel:U})=>{_=U,L(U)};const V=async(U=!1)=>{var H,re;if(a.connectionState!=="closed")try{return f=!0,U&&(a.signalingState!=="stable"&&a.signalingState!=="closed"&&((H=a.localDescription)==null?void 0:H.type)===xs&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(U?await a.createOffer({iceRestart:!0}):void 0),await N()}catch(be){(re=o.error)==null||re.call(o,$n(be,"failed to create local offer"))}finally{f=!1}};a.onnegotiationneeded=async()=>V(!1),a.onicecandidate=({candidate:U})=>{if(!h||!U)return;const H=C(typeof U.toJSON=="function"?U.toJSON():{candidate:U.candidate,sdpMid:U.sdpMid,sdpMLineIndex:U.sdpMLineIndex,usernameFragment:U.usernameFragment});E({type:oh,sdp:JSON.stringify(H)})};const ee=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){M();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){v();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&M()},ix));return}};a.onconnectionstatechange=ee,a.addEventListener(sx,ee),a.ontrack=U=>{var re,be;const H=U.streams[0];if(H){if(!o.track&&!o.stream){u.push({track:U.track,stream:H});return}(re=o.track)==null||re.call(o,U.track,H),(be=o.stream)==null||be.call(o,H)}},a.onremovestream=U=>{var H;return(H=o.stream)==null?void 0:H.call(o,U.stream)};const te=i?new Promise(U=>S(H=>{H.type===xs&&U(H)})):Promise.resolve();return i&&queueMicrotask(()=>{var U;!f&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&((U=a.onnegotiationneeded)==null||U.call(a,new Event("negotiationneeded")))}),{created:Date.now(),connection:a,get channel(){return _},get isDead(){return a.connectionState==="closed"},getOffer:async(U=!1)=>{var H;if(i)return U?V(!0):((H=a.localDescription)==null?void 0:H.type)===xs?h?P(a):I(a):te},async signal(U){var H,re,be;if(U.type==="candidate"){try{const Ee=JSON.parse(U.sdp);Ee&&typeof Ee=="object"&&await A(C(Ee))}catch(Ee){(H=o.error)==null||H.call(o,$n(Ee,"failed to parse remote candidate"))}return}if(!((_==null?void 0:_.readyState)==="open"&&!((re=U.sdp)!=null&&re.includes("a=rtpmap"))))try{const Ee={...U,sdp:w(U.sdp)};if(U.type===xs){if(f||a.signalingState!=="stable"&&!g){if(i)return;await Mi([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(Ee)])}else await a.setRemoteDescription(Ee);return await B(),await a.setLocalDescription(),await N()}if(U.type===rx){g=!0;try{await a.setRemoteDescription(Ee),await B()}finally{g=!1}}}catch(Ee){(be=o.error)==null||be.call(o,$n(Ee,"failed to apply remote signal"))}},sendData:U=>_==null?void 0:_.send(U),destroy:()=>{v(),_==null||_.close(),a.close(),f=!1,g=!1,M()},setHandlers:U=>{const{signal:H,...re}=U;Object.assign(o,re),o.data&&l.length>0&&l.splice(0).forEach(be=>{var Ee;return(Ee=o.data)==null?void 0:Ee.call(o,be)}),H&&S(H),(o.track||o.stream)&&u.length>0&&u.splice(0).forEach(({track:be,stream:Ee})=>{var $,Q;($=o.track)==null||$.call(o,be,Ee),(Q=o.stream)==null||Q.call(o,Ee)})},offerPromise:te,addStream:U=>U.getTracks().forEach(H=>a.addTrack(H,U)),removeStream:U=>a.getSenders().filter(H=>H.track&&U.getTracks().includes(H.track)).forEach(H=>a.removeTrack(H)),addTrack:(U,H)=>a.addTrack(U,H),removeTrack:U=>{const H=a.getSenders().find(re=>re.track===U);H&&a.removeTrack(H)},replaceTrack:(U,H)=>{const re=a.getSenders().find(be=>be.track===U);if(re)return re.replaceTrack(H)}}};const ox=[...Us(3,(i,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(i=>({urls:i})),cx=Object.getPrototypeOf(Uint8Array),Da=32,lx=0,Ia=32,kl=34,Ua=35,wr=36,li=16*2**10-wr,vs=255,dx=65535,Bl="bufferedamountlow",zl="close",Gl="error",hx=1e4,ux=i=>i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength),fx=(i,e=hx)=>i.readyState!=="open"||i.bufferedAmount<=i.bufferedAmountLowThreshold?Promise.resolve(i.readyState==="open"):new Promise(t=>{let n=!1,s=null;const r=c=>{n||(n=!0,i.removeEventListener(Bl,a),i.removeEventListener(zl,o),i.removeEventListener(Gl,o),ot(s),t(c))},a=()=>r(!0),o=()=>r(!1);if(i.addEventListener(Bl,a),i.addEventListener(zl,o),i.addEventListener(Gl,o),s=setTimeout(()=>r(!1),e),i.readyState!=="open"){r(!1);return}i.bufferedAmount<=i.bufferedAmountLowThreshold&&r(!0)}),px=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:n})=>{const s={},r={},a={},o={},c=(d,u,{includePending:f=!1}={})=>(d?Array.isArray(d)?d:[d]:e(f)).flatMap(g=>{const _=i(g,f);return _?[Promise.resolve(u(g,_))]:(console.warn(`${un}: no peer with id ${g} found`),[])});return{makeInternalAction:(d,u={})=>{const f=r[d];if(s[d]&&f){const v=s[d].options;if(v.sendToPending!==!!u.sendToPending||v.receiveWhilePending!==!!u.receiveWhilePending)throw nt(`action type "${d}" cannot be redefined`);return f}if(!d)throw nt("action type argument is required");const g=Jn(d);if(g.byteLength>Da)throw nt(`action type string "${d}" (${g.byteLength}b) exceeds byte limit (${Da}). Hint: choose a shorter name.`);const _={sendToPending:!!u.sendToPending,receiveWhilePending:!!u.receiveWhilePending},m=new Uint8Array(Da);m.set(g);let p=0;return s[d]={onComplete:Ft,onProgress:Ft,setOnComplete:v=>{s[d].onComplete=v;const M=o[d];M!=null&&M.length&&(delete o[d],M.forEach(({payload:E,peerId:S,metadata:w})=>v(E,S,w)))},setOnProgress:v=>{s[d].onProgress=v},send:async(v,M,E,S,w)=>{n(w);const C=typeof v;if(C==="undefined")throw nt("action data cannot be undefined");const P=C!=="string",y=v instanceof Blob,T=y||v instanceof ArrayBuffer||v instanceof cx,D=E!==void 0,z=T?ux(y?await v.arrayBuffer():v):Jn(P?jt(v):v),B=D?Jn(jt(E)):null,A=Math.ceil(z.byteLength/li)+(D?1:0)||1,L=Us(A,(I,N)=>{const V=N===A-1,ee=!!(D&&N===0),te=new Uint8Array(wr+(ee?(B==null?void 0:B.byteLength)??0:V?z.byteLength-li*(A-(D?2:1)):li));return te.set(m),te.set([p>>8,p&vs],Ia),te.set([Number(V)|Number(ee)<<1|Number(T)<<2|Number(P)<<3],kl),te.set([Math.round((N+1)/A*vs)],Ua),te.set(D?ee?B??new Uint8Array:z.subarray((N-1)*li,N*li):z.subarray(N*li,(N+1)*li),wr),te});return p=p+1&dx,await Mi(c(M,async(I,N)=>{const{channel:V}=N;let ee=0;for(;ee<A;){n(w);const te=L[ee];if(!te)break;if(V&&V.bufferedAmount>V.bufferedAmountLowThreshold){const re=await fx(V);if(n(w),!re)break}const U=i(I,_.sendToPending);if(!U||U!==N)break;N.sendData(te),ee++;const H=te[Ua]??vs;S==null||S(H/vs,I,E)}},{includePending:_.sendToPending})),[]},options:_},r[d]={send:s[d].send,onMessage:s[d].setOnComplete,onProgress:s[d].setOnProgress}},handleData:(d,u)=>{var D,z;const f=new Uint8Array(u),g=mi(f.subarray(lx,Ia)).replaceAll("\0",""),_=s[g];if(!t(d,!!(_!=null&&_.options.receiveWhilePending)))return;const m=(f[Ia]??0)<<8|(f[33]??0),p=f[kl]??0,v=f[Ua]??0,M=f.subarray(wr),E=!!(p&1),S=!!(p&2),w=!!(p&4),C=!!(p&8);a[d]??(a[d]={}),(D=a[d])[g]??(D[g]={});const P=(z=a[d][g])[m]??(z[m]={chunks:[]});if(S?P.meta=ns(mi(M)):P.chunks.push(M),_==null||_.onProgress(v/vs,d,P.meta),!E)return;const y=new Uint8Array(P.chunks.reduce((B,A)=>B+A.byteLength,0));P.chunks.reduce((B,A)=>(y.set(A,B),B+A.byteLength),0),delete a[d][g][m];const T=w?y:C?ns(mi(y)):mi(y);if(_){_.onComplete(T,d,P.meta);return}(o[g]??(o[g]=[])).push({payload:T,peerId:d,...P.meta===void 0?{}:{metadata:P.meta}})},clearPeer:d=>{delete a[d]}}},mx=500,Wi=(i,e)=>{const t=nt(e);return t.kind=i,t.name=i==="aborted"?"AbortError":t.name,t},Na=i=>{if(i!=null&&i.aborted)throw Wi("aborted","operation aborted")},Hl=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...Object.hasOwn(i,"m")?{m:i.m}:{}}:null,gx=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.r=="string"?{r:i.r,...typeof i.e=="string"?{e:i.e}:{}}:null,xr=(i,e)=>e===void 0?i:{...i,metadata:e},_x=({getPeer:i,getPeerIds:e,canReceiveFromPeer:t})=>{const n={},s={},r=px({getPeer:i,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Na}),a=r.makeInternalAction,o=r.handleData,c=f=>{const g=s[f];g&&(ot(g.timer),g.signal&&g.abortHandler&&g.signal.removeEventListener("abort",g.abortHandler),delete s[f])},l=(f,g)=>{gi(s).forEach(([_,m])=>{m.peerId===f&&(c(_),m.reject(g))})},h=(f,g)=>{r.clearPeer(f),l(f,Wi("disconnected",ts(g,"peer disconnected")))},d=a("@_response");return d.onMessage((f,g,_)=>{const m=gx(_);if(!m)return;const p=s[m.r];if(!(!p||p.peerId!==g)){if(c(m.r),m.e!==void 0){p.reject(Wi("rejected",m.e));return}p.resolve(f)}}),{makeAction:(f,g)=>{if(g&&"onRequest"in g&&g.kind!=="request")throw nt('request actions must use kind: "request"');const _=(g==null?void 0:g.kind)??"message",m=a(f),p=n[f];if(p){if(p.kind!==_)throw nt(`action type "${f}" cannot be redefined`);return p.action}const v={kind:_,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:(g==null?void 0:g.onReceiveProgress)??null},M=(A,L)=>A?(I,N)=>A(I,xr({peerId:N},L)):void 0,E=A=>{v.onReceiveProgress=A},S=(A,L,I)=>{var V;const N=v.kind==="request"?Hl(I):null;(V=v.onReceiveProgress)==null||V.call(v,A,xr({peerId:L},N?N.m:I))};if(m.onProgress(S),_==="message"){let A=(g==null?void 0:g.onMessage)??null;const L=()=>{if(!A)return;const N=A;v.pendingMessages.splice(0).forEach(({payload:V,peerId:ee,metadata:te})=>{Promise.resolve().then(()=>N(V,xr({peerId:ee},te))).catch(U=>console.error(`${un} action handler error:`,U))})},I={send:async(N,V={})=>{await m.send(N,V.target,V.metadata,M(V.onProgress,V.metadata),V.signal)},get onMessage(){return A},set onMessage(N){A=N,L()},get onReceiveProgress(){return v.onReceiveProgress},set onReceiveProgress(N){E(N)}};return m.onMessage((N,V,ee)=>{if(!A){v.pendingMessages.push(ee===void 0?{payload:N,peerId:V}:{payload:N,peerId:V,metadata:ee});return}const te=A;Promise.resolve().then(()=>te(N,xr({peerId:V},ee))).catch(U=>console.error(`${un} action handler error:`,U))}),v.action=I,n[f]=v,L(),I}let w=(g==null?void 0:g.onRequest)??null;const C=A=>{ot(A.timer);const L=v.pendingRequests.indexOf(A);L>-1&&v.pendingRequests.splice(L,1)},P=(A,L,I)=>{d.send(null,A,{r:L,e:ts(I,"request failed")})},y=(A,L)=>{C(A),Promise.resolve().then(()=>L(A.payload,{peerId:A.peerId,...A.metadata===void 0?{}:{metadata:A.metadata},signal:A.controller.signal})).then(async I=>{if(I===void 0)throw nt("request handler returned undefined");await d.send(I,A.peerId,{r:A.requestId})}).catch(I=>P(A.peerId,A.requestId,I)).finally(()=>A.controller.abort())},T=()=>{w&&v.pendingRequests.slice().forEach(A=>y(A,w))},D=(A,L,I,N)=>{if(w){const ee={payload:A,peerId:L,...I===void 0?{}:{metadata:I},requestId:N,controller:new AbortController,timer:null};y(ee,w);return}const V={payload:A,peerId:L,...I===void 0?{}:{metadata:I},requestId:N,controller:new AbortController,timer:setTimeout(()=>{C(V),V.controller.abort(),P(L,N,"request handler unavailable")},mx)};v.pendingRequests.push(V)},z=async(A,L)=>{const{target:I,metadata:N,onProgress:V,signal:ee,timeoutMs:te}=L;if(Na(ee),!i(I,!1))throw Wi("disconnected",`no active peer with id ${I}`);const U=as(20),H=new Promise((re,be)=>{const Ee={peerId:I,resolve:re,reject:be,timer:null,...ee===void 0?{}:{signal:ee}},$=()=>{c(U),be(Wi("aborted","operation aborted"))};ee&&(Ee.abortHandler=$,ee.addEventListener("abort",$,{once:!0})),s[U]=Ee}).catch(re=>{throw re});try{await m.send(A,I,N===void 0?{r:U}:{r:U,m:N},M(V,N),ee);const re=s[U];return re&&te!==void 0&&(re.timer=setTimeout(()=>{c(U),re.reject(Wi("timeout","request timed out"))},te)),await H}catch(re){throw c(U),re}},B={request:z,requestMany:async(A,L)=>(Na(L.signal),await Mi(L.targets.map(async I=>{var N,V;try{const ee={peerId:I,status:"fulfilled",value:await z(A,{target:I,...L.metadata===void 0?{}:{metadata:L.metadata},...L.timeoutMs===void 0?{}:{timeoutMs:L.timeoutMs},...L.onProgress===void 0?{}:{onProgress:L.onProgress},...L.signal===void 0?{}:{signal:L.signal}})};return(N=L.onResult)==null||N.call(L,ee),ee}catch(ee){const te=$n(ee,"request failed");if(te.kind==="aborted"||!te.kind)throw te;const U=te.kind==="timeout"?{peerId:I,status:"timeout"}:te.kind==="disconnected"?{peerId:I,status:"disconnected"}:{peerId:I,status:"rejected",error:te};return(V=L.onResult)==null||V.call(L,U),U}}))),get onRequest(){return w},set onRequest(A){w=A,T()},get onReceiveProgress(){return v.onReceiveProgress},set onReceiveProgress(A){E(A)}};return m.onMessage((A,L,I)=>{const N=Hl(I);N&&D(A,L,N.m,N.r)}),v.action=B,n[f]=v,T(),B},makeInternalAction:a,handleData:o,clearPeer:h}},Vl=i=>i&&typeof i=="object"&&!Array.isArray(i)&&typeof i.k=="string"?{key:i.k,...typeof i.s=="string"?{streamId:i.s}:{},...typeof i.t=="string"?{trackId:i.t}:{},...Object.hasOwn(i,"m")?{metadata:i.m}:{}}:null,Wl=i=>e=>{let t=i.get(e);return t||(t=as(20),i.set(e,t)),t},hh=()=>{const i=new WeakMap,e=new WeakMap,t=new Map,n=new Map,s=new Map,r=new Map;return{getStreamKey:Wl(i),getTrackKey:Wl(e),rememberRemoteStream:(a,o,c)=>{t.set(a,o),c&&n.set(c,o)},getRemoteStream:(a,o)=>t.get(a)??(o?n.get(o):void 0),rememberRemoteTrack:(a,o,c,l,h)=>{const d={track:o,stream:c};s.set(a,d),l&&r.set(l,d),h&&n.set(h,c)},getRemoteTrack:(a,o)=>s.get(a)??(o?r.get(o):void 0),clearRemote:()=>{t.clear(),n.clear(),s.clear(),r.clear()}}},xx=({iterate:i,isActive:e,getSharedMediaPeer:t})=>{const n={},s={},r=hh(),a={onPeerStream:null,onPeerTrack:null},o=(h,d,u,f)=>{var g,_,m;e(h)&&((_=(g=t(h))==null?void 0:g.__trysteroMedia)==null||_.rememberRemoteStream(d,u,typeof u.id=="string"?u.id:void 0),(m=a.onPeerStream)==null||m.call(a,u,h,f))},c=(h,d,u,f,g)=>{var _,m,p;e(h)&&((m=(_=t(h))==null?void 0:_.__trysteroMedia)==null||m.rememberRemoteTrack(d,u,f,typeof u.id=="string"?u.id:void 0,typeof f.id=="string"?f.id:void 0),(p=a.onPeerTrack)==null||p.call(a,u,f,h,g))},l=(h,d,u,f,g,_={})=>{const m={k:d,..._,...u===void 0?{}:{m:u}};return i(h,async(p,v)=>{await f(m,p),g(v)})};return{addStream:(h,d,u)=>l(d.target,r.getStreamKey(h),d.metadata,u,f=>f.addStream(h),{s:h.id}),removeStream:(h,d)=>{i(d,(u,f)=>f.removeStream(h))},addTrack:(h,d,u,f)=>l(u.target,r.getTrackKey(h),u.metadata,f,g=>g.addTrack(h,d),{s:d.id,t:h.id}),removeTrack:(h,d)=>{i(d,(u,f)=>f.removeTrack(h))},replaceTrack:(h,d,u,f)=>l(u.target,r.getTrackKey(d),u.metadata,f,g=>g.replaceTrack(h,d),{t:h.id}),receiveStreamMeta:(h,d)=>{var g,_;if(!e(d))return;const u=Vl(h);if(!u)return;const f=(_=(g=t(d))==null?void 0:g.__trysteroMedia)==null?void 0:_.getRemoteStream(u.key,u.streamId);if(f){o(d,u.key,f,u.metadata);return}(n[d]??(n[d]=[])).push(u)},receiveTrackMeta:(h,d)=>{var g,_;if(!e(d))return;const u=Vl(h);if(!u)return;const f=(_=(g=t(d))==null?void 0:g.__trysteroMedia)==null?void 0:_.getRemoteTrack(u.key,u.trackId);if(f){c(d,u.key,f.track,f.stream,u.metadata);return}(s[d]??(s[d]=[])).push(u)},receiveRemoteStream:(h,d)=>{var f;if(!e(h))return;const u=(f=n[h])==null?void 0:f.shift();u&&o(h,u.key,d,u.metadata)},receiveRemoteTrack:(h,d,u)=>{var g;if(!e(h))return;const f=(g=s[h])==null?void 0:g.shift();f&&c(h,f.key,d,u,f.metadata)},clearPeer:h=>{delete n[h],delete s[h]},get onPeerStream(){return a.onPeerStream},set onPeerStream(h){a.onPeerStream=h},get onPeerTrack(){return a.onPeerTrack},set onPeerTrack(h){a.onPeerTrack=h}}},Xl="beforeunload",vx=1e4,qn=i=>"@_"+i,bs=new Set,ql=()=>bs.forEach(i=>i()),yx=i=>(bs.add(i),bs.size===1&&addEventListener(Xl,ql),()=>{bs.delete(i),bs.size||removeEventListener(Xl,ql)});var Sx=(i,e,t,{onPeerHandshake:n,onHandshakeError:s,handshakeTimeoutMs:r=vx,isPassive:a=!1}={})=>{const o={},c={},l={},h={onPeerJoin:null,onPeerLeave:null};let d=Ft,u=null;const f=(A,L,{includePending:I=!1}={})=>(A?Array.isArray(A)?A:[A]:Qt(I?o:c)).flatMap(N=>{const V=I?o[N]:c[N];return V?[Promise.resolve(L(N,V))]:(console.warn(`${un}: no peer with id ${N} found`),[])}),g=xx({iterate:(A,L)=>f(A,(I,N)=>L(I,N)),isActive:A=>!!c[A],getSharedMediaPeer:A=>o[A]??null}),_=_x({getPeer:(A,L)=>(L?o:c)[A],getPeerIds:A=>Qt(A?o:c),canReceiveFromPeer:(A,L)=>!!(u!=null&&u.canReceiveFromPeer(A,L))}),m=_.makeInternalAction,p=_.handleData,v=_.makeAction,M=(A,L=nt("peer disconnected"))=>{var N;const I=$n(L,"peer disconnected");u==null||u.clearPeer(A,I),delete o[A],delete c[A],_.clearPeer(A,I),(N=l[A])==null||N.splice(0).forEach(V=>V.reject(I)),delete l[A],g.clearPeer(A)},E=(A,L,I)=>{var ee;const N=o[A];if(!N||L&&N!==L)return;const V=!!c[A];M(A,I),N.destroy(),V&&((ee=h.onPeerLeave)==null||ee.call(h,A)),e(A)},S=async()=>{await D.send(""),await new Promise(A=>setTimeout(A,99)),gi(o).forEach(([A,L])=>{L.destroy(),M(A,nt("room left"))}),d(),t()},w=m(qn("ping")),C=m(qn("pong")),P=m(qn("signal")),y=m(qn("stream")),T=m(qn("track")),D=m(qn("leave"),{sendToPending:!0,receiveWhilePending:!0}),z=m(qn("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),B=m(qn("hsready"),{sendToPending:!0,receiveWhilePending:!0});return u=tx({...n===void 0?{}:{onPeerHandshake:n},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:z.send,sendHandshakeReady:B.send,onActivate:(A,L)=>{var I;c[A]=L,(I=h.onPeerJoin)==null||I.call(h,A)},onFailure:(A,L,I)=>E(A,L,I)}),w.onMessage((A,L)=>C.send("",L)),C.onMessage((A,L)=>{var N;const I=l[L];(N=I==null?void 0:I.shift())==null||N.resolve(),I&&!I.length&&delete l[L]}),P.onMessage((A,L)=>{var I;c[L]&&((I=o[L])==null||I.signal(A))}),y.onMessage((A,L)=>g.receiveStreamMeta(A,L)),T.onMessage((A,L)=>g.receiveTrackMeta(A,L)),D.onMessage((A,L)=>E(L,void 0,nt("peer left room"))),z.onMessage((A,L,I)=>u==null?void 0:u.receiveHandshakeData(A,L,I)),B.onMessage((A,L)=>u==null?void 0:u.receiveHandshakeReady(L)),i((A,L)=>{const I=o[L];if(I){if(I===A)return;I.destroy(),M(L,nt("peer replaced"))}o[L]=A,u==null||u.addPeer(L,A),A.setHandlers({data:N=>p(L,N),stream:N=>g.receiveRemoteStream(L,N),track:(N,V)=>g.receiveRemoteTrack(L,N,V),signal:N=>{c[L]&&P.send(N,L)},close:()=>E(L,A,nt("peer disconnected")),error:N=>{console.error(`${un} peer error:`,N),E(L,A,N)}}),u==null||u.start(L,A)}),rh&&(d=yx(()=>S().catch(Ft))),{makeAction:v,leave:S,ping:async A=>{if(!c[A])throw nt(`no active peer with id ${A}`);const L=Date.now();return await new Promise((I,N)=>{const V=l[A]??(l[A]=[]),ee=()=>{const U=l[A];if(!U)return;const H=U.indexOf(te);H>-1&&U.splice(H,1),U.length||delete l[A]},te={resolve:()=>{ee(),I()},reject:U=>{ee(),N(U)}};V.push(te),w.send("",A).catch(U=>te.reject($n(U,"peer disconnected")))}),Date.now()-L},isPassive:()=>a,getPeers:()=>ah(gi(c).map(([A,L])=>[A,L.connection])),addStream:(A,L={})=>g.addStream(A,L,y.send),removeStream:(A,L={})=>{g.removeStream(A,L.target)},addTrack:(A,L,I={})=>g.addTrack(A,L,I,T.send),removeTrack:(A,L={})=>{g.removeTrack(A,L.target)},replaceTrack:(A,L,I={})=>g.replaceTrack(A,L,I,T.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(A){h.onPeerJoin=A,A&&Qt(c).forEach(L=>A(L))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(A){h.onPeerLeave=A},get onPeerStream(){return g.onPeerStream},set onPeerStream(A){g.onPeerStream=A},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(A){g.onPeerTrack=A}}};const uh=1,fh=2,Yl=(i,e)=>{const t=Jn(i),n=new Uint8Array(3+t.byteLength+e.byteLength);return n[0]=uh,n[1]=t.byteLength>>>8&255,n[2]=t.byteLength&255,n.set(t,3),n.set(e,3+t.byteLength),n},Mx=(i,e)=>{const t=Jn(i),n=new Uint8Array(4+t.byteLength);return n[0]=fh,n[1]=Number(e),n[2]=t.byteLength>>>8&255,n[3]=t.byteLength&255,n.set(t,4),n},bx=i=>{const e=new Uint8Array(i);if(e.byteLength<3)return null;if(e[0]===uh){const s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:mi(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==fh||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),n=4+t;return t<=0||e.byteLength<n?null:{type:"presence",roomToken:mi(e.subarray(4,n)),isPresent:e[1]===1}},ph=i=>{const{connection:e,channel:t}=i;return i.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||(t==null?void 0:t.readyState)==="closing"||(t==null?void 0:t.readyState)==="closed"},Ex=i=>{if(ph(i))return"stale";const{channel:e}=i;return!e||e.readyState!=="open"?"transient":"live"};var Tx=class{constructor(){It(this,"byApp",{});It(this,"roomPresenceHandlers",{})}getMap(i){var e;return(e=this.byApp)[i]??(e[i]={})}get(i,e){var t;return(t=this.byApp[i])==null?void 0:t[e]}isPeerStale(i){return ph(i)}getHealth(i){return this.isPeerStale(i)?"stale":"live"}setRoomPresenceHandler(i,e){return this.roomPresenceHandlers[i]=e,()=>{this.roomPresenceHandlers[i]===e&&delete this.roomPresenceHandlers[i]}}sendRoomPresence(i,e,t){i.isClosing||i.peer.isDead||i.peer.sendData(Mx(e,t))}clear(i,e,{destroyPeer:t}){const n=this.byApp[i],s=n==null?void 0:n[e];if(!s||s.isClosing)return;s.idleTimer=ot(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();const r=Yi(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete n[e],r.forEach(a=>{var o,c;(c=(o=a.handlers).close)==null||c.call(o),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),Qt(n).length===0&&delete this.byApp[i]}register(i,e,t,n){const s=this.getMap(i),r=s[e];if(r){if(r.idleTimer=ot(r.idleTimer),r.peer===t)return r;this.clear(i,e,{destroyPeer:!0})}const a={appId:i,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:hh(),idleMs:n,isClosing:!1};return t.setHandlers({data:o=>this.dispatchData(a,o),signal:o=>this.dispatchSignal(a,o),close:()=>this.clear(i,e,{destroyPeer:!1}),error:o=>{console.error(`${un} peer error:`,o),this.clear(i,e,{destroyPeer:!1})},track:(o,c)=>this.dispatchTrack(a,o,c)}),s[e]=a,a}bind(i,e,t,{onDetach:n}){const s=t.bindings[i];if(s)return t.idleTimer=ot(t.idleTimer),{proxy:s.proxy,isNew:!1};const r={roomId:i,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Ft,proxy:{}},a=()=>{t.bindings[i]&&(this.pruneRoomOwnership(t,i),delete t.bindings[i],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===i&&(t.controlRoomId=Qt(t.bindings)[0]??null),n(),this.scheduleIdleTimer(t))},o={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!r.roomToken){r.pendingSendData.push(c);return}t.peer.sendData(Yl(r.roomToken,c))},destroy:()=>a(),setHandlers:c=>{const{signal:l,...h}=c;Object.assign(r.handlers,h),l&&(r.handlers.signal=l),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(i),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(i),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const h=t.trackOwners.get(c)??{stream:l,rooms:new Set},d=h.rooms.size===0;return h.stream=l,h.rooms.add(i),t.trackOwners.set(c,h),d?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(u=>u.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(i),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const h=t.trackOwners.get(c);if(h){t.trackOwners.delete(c);const d=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(u=>d.rooms.add(u)),t.trackOwners.set(l,d)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return r.proxy=o,r.detach=a,t.bindings[i]=r,t.controlRoomId??(t.controlRoomId=i),t.idleTimer=ot(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[i]!==r)return;r.roomToken=c,t.bindingsByToken[c]=r;const l=t.pendingDataByToken.get(c);l!=null&&l.length&&(r.pendingData.push(...l),t.pendingDataByToken.delete(c)),r.pendingSendData.splice(0).forEach(h=>t.peer.sendData(Yl(c,h))),this.flushBindingQueues(r)}),{proxy:o,isNew:!0}}pruneRoomOwnership(i,e){i.streamOwners.forEach((t,n)=>{t.delete(e),t.size===0&&(i.streamOwners.delete(n),i.peer.removeStream(n))}),i.trackOwners.forEach((t,n)=>{t.rooms.delete(e),t.rooms.size===0&&(i.trackOwners.delete(n),i.peer.removeTrack(n))})}scheduleIdleTimer(i){i.isClosing||Qt(i.bindings).length>0||(i.idleTimer=ot(i.idleTimer),i.idleTimer=setTimeout(()=>{var t;const e=(t=this.byApp[i.appId])==null?void 0:t[i.peerId];!e||Qt(e.bindings).length>0||this.clear(i.appId,i.peerId,{destroyPeer:!0})},i.idleMs))}getSignalBinding(i){if(i.controlRoomId){const t=i.bindings[i.controlRoomId];if(t!=null&&t.handlers.signal)return t}const e=Yi(i.bindings).find(t=>!!t.handlers.signal);return e?(i.controlRoomId=e.roomId,e):null}flushBindingQueues(i){const{handlers:e}=i;e.data&&i.pendingData.length>0&&i.pendingData.splice(0).forEach(t=>{var n;return(n=e.data)==null?void 0:n.call(e,t)}),(e.track||e.stream)&&i.pendingTracks.length&&i.pendingTracks.splice(0).forEach(({track:t,stream:n})=>{var s,r;(s=e.track)==null||s.call(e,t,n),(r=e.stream)==null||r.call(e,n)})}dispatchData(i,e){var s,r;const t=bx(e);if(!t)return;if(t.type==="presence"){t.isPresent?i.remoteRoomTokens.add(t.roomToken):i.remoteRoomTokens.delete(t.roomToken),(r=(s=this.roomPresenceHandlers)[i.appId])==null||r.call(s,i.peerId,t.roomToken,t.isPresent);return}const n=i.bindingsByToken[t.roomToken];if(!n){const a=i.pendingDataByToken.get(t.roomToken)??[];a.push(t.payload),i.pendingDataByToken.set(t.roomToken,a);return}n.handlers.data?n.handlers.data(t.payload):n.pendingData.push(t.payload)}dispatchSignal(i,e){var t,n,s;(s=(t=this.getSignalBinding(i))==null?void 0:(n=t.handlers).signal)==null||s.call(n,e)}dispatchTrack(i,e,t){Yi(i.bindings).forEach(n=>{var s,r,a,o;if(n.handlers.track||n.handlers.stream){(r=(s=n.handlers).track)==null||r.call(s,e,t),(o=(a=n.handlers).stream)==null||o.call(a,t);return}n.pendingTracks.push({track:e,stream:t})})}};const wx=23333,Ax=12,Rx=7533,Cx=23333,Vo="__legacy__",Ur="offer-placeholder",Px=["offer","answer","candidate"],Lx=i=>{if(typeof i=="string")try{const e=ns(i);return e&&typeof e=="object"?e:null}catch{return null}return i&&typeof i=="object"?i:null},ys=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,Dx=i=>Px.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),mh=(i,e,t,n,s,r)=>{i.toCipher(e).then(a=>{i.isLeaving()||!r()||n(t,jt(s(a.sdp)))})},Ix=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),Ux=i=>{var e;return[...i.turnConfig??[],...((e=i.rtcConfig)==null?void 0:e.iceServers)??[]].some(({urls:t})=>(Array.isArray(t)?t:[t]).some(n=>/^turns?:/i.test(n)))},Nx=(i,e)=>`could not connect to peer ${i} after exchanging SDP; ${Ux(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Wr=(i,e,t)=>{var n;i.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,(n=i.onJoinError)==null||n.call(i,{error:Nx(t,i.config),appId:i.appId,peerId:t,roomId:i.roomId}))},ks=(i,e)=>i[e]??(i[e]=Ix()),en=i=>{i.connectedPeer?i.status="connected":i.answeringPeer?i.status="answering":i.offerPeer||i.offerRelays.some(Boolean)?i.status="offering":i.status="idle"},Ar=(i,e)=>{i.answeringPeer===e&&(i.answeringExpiryTimer=ot(i.answeringExpiryTimer),i.answeringPeer=null,i.answerSent=!1,en(i))},Wo=(i,e,t)=>{i.connectedPeer&&(i.connectedPeer.isDead||i.connectedPeer.destroy(),i.connectedPeer=null,i.connectedPeerUnhealthySinceMs=null,en(i))},pc=(i,e)=>{i.offerRelayTimers[e]=ot(i.offerRelayTimers[e]),i.offerRelays[e]&&(i.offerRelays[e]=void 0,en(i))},jl=(i,e)=>{(i==null?void 0:i.offerRelays[e])===Ur&&pc(i,e)},Fx=i=>{if(i.isDead||i.connection.connectionState==="closed")return!0;try{return!!i.connection.remoteDescription}catch{return!0}},Bs=(i,e)=>{const t=i.offerAnswered;i.offerExpiryTimer=ot(i.offerExpiryTimer),i.offerInitPromise=null,i.offerRelays.forEach((n,s)=>pc(i,s)),i.offerRelays=[],i.offerSignalRelays=[],i.offerRelayTimers=[],i.offerSignalBacklog=[],i.offerPeer&&i.offerPeer!==i.connectedPeer&&(t||Fx(i.offerPeer)?i.offerPeer.isDead||i.offerPeer.destroy():e.recycle(i.offerPeer)),i.offerPeer=null,i.offerId=null,i.offerSdp=null,i.offerAnswered=!1,i.connectionErrorReported=!1,en(i)},Ox=(i,e,t,n)=>{ot(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const s=i.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==n||(s.answerSent&&Wr(i,s,t),n.destroy(),Ar(s,n),i.checkDeactivate())},Cx)},kx=async(i,e,t)=>{const n=t?[t,Vo]:[Vo];for(const s of n){const r=i.pendingCandidates[s];if(r!=null&&r.length){delete i.pendingCandidates[s];for(const a of r)await e.signal(a)}}},gh=(i,e,t,n=fc)=>{ot(e.offerExpiryTimer);const s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const r=i.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&Wr(i,r,t),Bs(r,i.offerPool),i.checkDeactivate())},n)},Bx=(i,e,t,n)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const s=(await i.offerPool.checkout(1,!1,i.encryptOffer))[0];if(!s)throw nt("failed to allocate offer peer");const{peer:r,offer:a}=s;e.offerPeer=r,e.offerId=as(Ax),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],en(e);const o=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&Wr(i,e,t),Bs(e,i.offerPool)),i.disconnectPeer(r,t),i.checkDeactivate()};return r.setHandlers({connect:()=>i.connectPeer(r,t,n),signal:c=>{e.offerPeer===r&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l==null?void 0:l(c)))},close:o,error:o}),gh(i,e,t),{peer:r,offer:a,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),zx=async(i,e,t,n,s)=>{if(n){i.attachSharedPeerToRoom(t,n);return}const r=i.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){jl(r,e);return}if(r.offerRelays[e]!==Ur)return;const[a,o]=await Mi([Os(Fs(i.rootTopicPlaintext,t)),Bx(i,r,t,e)]);if(i.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==Ur){jl(r,e);return}r.offerRelayTimers[e]=ot(r.offerRelayTimers[e]),r.offerRelays[e]=!0,en(r),r.offerRelayTimers[e]=setTimeout(()=>Wx(i,t,e),(i.announceIntervals[e]??i.announceIntervalMs)*.9);let c=!1;r.offerSignalRelays[e]=l=>{c&&(i.isLeaving()||r.connectedPeer||r.offerPeer!==o.peer||r.offerId!==o.offerId||l.type!=="candidate"||mh(i,l,a,s,h=>({peerId:hn,offerId:o.offerId,candidate:h,...i.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===o.peer&&r.offerId===o.offerId))},s(a,jt({peerId:hn,offerId:o.offerId,offer:o.offer,...i.isPassive?{passive:!0}:{}})),c=!0,r.offerSignalBacklog.forEach(l=>{var h,d;return(d=(h=r.offerSignalRelays)[e])==null?void 0:d.call(h,l)})},Gx=async(i,e,t,n,s,r,a)=>{var f;const o=ks(i.peerStates,t);if(o.answeringPeer||o.offerAnswered)return;const c=!!(o.offerPeer||o.offerRelays.some(Boolean));if((c||r)&&hn<t)return;c&&Bs(o,i.offerPool);const l=i.initPeer(!1,i.config);o.answeringPeer=l,o.answerSent=!1,o.connectionErrorReported=!1,Ox(i,o,t,l),en(o);const h=()=>{o.answeringPeer===l&&!o.connectedPeer&&o.answerSent&&Wr(i,o,t),Ar(o,l),i.disconnectPeer(l,t),i.checkDeactivate()};l.setHandlers({connect:()=>i.connectPeer(l,t,e),close:h,error:h});let d;try{d=await i.toPlain({type:"offer",sdp:n})}catch{Ar(o,l),(f=i.onJoinError)==null||f.call(i,{error:"incorrect room password when decrypting offer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(l.isDead){Ar(o,l);return}const u=await Os(Fs(i.rootTopicPlaintext,t));i.isLeaving()||(l.setHandlers({signal:g=>{i.isLeaving()||o.answeringPeer!==l||l.isDead||g.type!=="answer"&&g.type!=="candidate"||mh(i,g,u,a,_=>{const m={peerId:hn};return g.type==="answer"?(o.answerSent=!0,m.answer=_):m.candidate=_,s&&(m.offerId=s),i.isPassive&&(m.passive=!0),m},()=>o.answeringPeer===l&&!l.isDead)}}),await l.signal(d),await kx(o,l,s))},Hx=async(i,e,t,n,s)=>{var d;let r;try{r=await i.toPlain({type:oh,sdp:t})}catch{return}const a=ks(i.peerStates,e),o=n&&(a!=null&&a.offerPeer)&&a.offerId===n?a.offerPeer:null,c=(a==null?void 0:a.answeringPeer)??null,l=!n&&(a!=null&&a.offerPeer)?a.offerPeer:null,h=s&&!s.isDead?s:o??c??l;if(!h||h.isDead){const u=n??Vo;((d=a.pendingCandidates)[u]??(d[u]=[])).push(r);return}h.signal(r)},Vx=async(i,e,t,n,s,r)=>{var o;let a;try{a=await i.toPlain({type:"answer",sdp:n})}catch{(o=i.onJoinError)==null||o.call(i,{error:"incorrect room password when decrypting answer",appId:i.appId,peerId:t,roomId:i.roomId});return}if(r)i.offerPool.claimLeased(r),r.setHandlers({connect:()=>i.connectPeer(r,t,e),close:()=>i.disconnectPeer(r,t)}),r.signal(a);else{const c=i.peerStates[t];if(!c||!c.offerPeer||c.offerAnswered||s&&c.offerId&&s!==c.offerId||c.offerPeer.isDead)return;c.offerAnswered=!0,gh(i,c,t,wx),c.offerPeer.signal(a)}},Wx=(i,e,t)=>{const n=i.peerStates[e];!n||n.connectedPeer||n.offerRelays[t]&&(pc(n,t),i.checkDeactivate())},Xx=i=>e=>async(t,n,s)=>{var E;if(i.isLeaving())return;const r=Lx(n);if(!r||Dx(r))return;const a=ys(r,"peerId")??"",o=ys(r,"offer"),c=ys(r,"answer"),l=ys(r,"candidate"),h=ys(r,"offerId"),d=r.peer,u=r.hasOutgoingOffer===!0,f=r.passive===!0;if(!a||a===hn)return;const[g,_]=await Mi([i.rootTopicP,i.selfTopicP]);if(i.isLeaving()||t!==g&&t!==_||i.isPassive&&f||(i.isPassive&&!i.isActive&&!c&&!l&&(i.isActive=!0,(E=i.requeueAnnounce)==null||E.call(i)),i.isPassive&&!i.isActive))return;const m=i.peerStates[a],p=m==null?void 0:m.connectedPeer;if(p&&m){const S=Ex(p);if(S==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(S==="stale")Wo(m);else{const w=Date.now(),C=m.connectedPeerUnhealthySinceMs??w;if(m.connectedPeerUnhealthySinceMs=C,w-C<Rx)return;Wo(m)}}let v=i.sharedPeers.get(i.appId,a);v&&i.sharedPeers.getHealth(v.peer)==="stale"&&(i.sharedPeers.clear(i.appId,a,{destroyPeer:!0}),v=void 0);const M=!!(a&&!o&&!c&&!l);if(M&&!v){const S=ks(i.peerStates,a),w=hn<a;if(S.answeringPeer||S.connectedPeer||S.offerAnswered)return;if(!w&&!S.offerPeer){const C=await Os(Fs(i.rootTopicPlaintext,a));!i.isLeaving()&&!S.connectedPeer&&s(C,jt({peerId:hn}));return}if(S.offerRelays[e])return;S.offerRelays[e]=Ur,en(S)}if(v&&(o||c||l)){if(v.bindings[i.roomId])return;i.attachSharedPeerToRoom(a,v);return}if(M)return zx(i,e,a,v,s);if(o)return Gx(i,e,a,o,h,u,s);if(l)return Hx(i,a,l,h,d);if(c)return Vx(i,e,a,c,h,d)},vr=5333,qx=[233,533,1333],Yx=7533,jx=123333;var $x=({init:i,subscribe:e,announce:t,deactivate:n})=>{const s={},r={},a={},o={},c=new Tx,l=()=>Yi(s).some(S=>Qt(S).length>0),h=S=>r[S]??(r[S]={}),d=S=>a[S]??(a[S]={}),u=(S,w,C)=>{c.getHealth(S.peer)==="live"&&c.sendRoomPresence(S,w,C)},f=(S,w)=>{gi(r[S]??{}).forEach(([C,P])=>{if(!P.shouldAdvertise())return;const{roomToken:y,roomTokenPromise:T}=P;if(y){u(w,y,!0);return}T.then(D=>{var z;((z=r[S])==null?void 0:z[C])===P&&P.roomToken===D&&(c.get(S,w.peerId)!==w||w.isClosing||P.shouldAdvertise()&&u(w,D,!0))})})},g=(S,w,C)=>Yi(c.getMap(S)).forEach(P=>u(P,w,C)),_=S=>{o[S]||(o[S]=c.setRoomPresenceHandler(S,(w,C,P)=>{var D,z,B;if(!P)return;const y=c.get(S,w),T=(D=a[S])==null?void 0:D[C];!y||!T||(B=(z=r[S])==null?void 0:z[T])==null||B.attachSharedPeerToRoom(w,y)}))},m=S=>{var w;s[S]&&Qt(s[S]).length>0||((w=o[S])==null||w.call(o),delete o[S],delete r[S],delete a[S])};let p=!1,v=[],M=null,E=Ft;return(S,w,C)=>{var Me,he;if(!S)throw nt("requires a config map as the first argument");if(C&&typeof C!="object")throw nt("third argument must be a callbacks object");const{appId:P}=S,y=C==null?void 0:C.onJoinError,T=C==null?void 0:C.onPeerHandshake,D=C==null?void 0:C.handshakeTimeoutMs;if(!P)throw nt("config map is missing appId field");if(!w)throw nt("roomId argument required");if(D!==void 0&&(!Number.isFinite(D)||D<=0))throw nt("handshakeTimeoutMs must be a positive number");if((Me=s[P])!=null&&Me[w])return s[P][w];_(P);const z=Fs(un,P,w),B=Os(z),A=Os(Fs(z,hn)),L=q_(S.password??"",P,w),I=Y_(P,w),N=S._test_only_sharedPeerIdleMs??jx;let V=!1;const ee=ne=>async le=>({type:le.type,sdp:await ne(L,le.sdp)}),te=ee($_),U=ee(j_),H=c.getMap(P),re=()=>Ol(!0,S);let be=!1;M||(M=new J_(re));const Ee=M,$=async ne=>{const le=await ne.getOffer(Date.now()-ne.created>fc);if(!le||le.type!=="offer")throw nt("failed to get offer for peer");return(await U(le)).sdp},Q=(ne,le)=>{const Z=ks(Pe.peerStates,ne);Z.answeringExpiryTimer=ot(Z.answeringExpiryTimer),Z.answeringPeer=null;const{proxy:ae,isNew:ie}=c.bind(w,I,le,{onDetach:()=>{const fe=Pe.peerStates[ne];(fe==null?void 0:fe.connectedPeer)===le.peer&&(fe.connectedPeer=null,fe.connectedPeerUnhealthySinceMs=null,en(fe))}});Z.connectedPeer=le.peer,Z.connectedPeerUnhealthySinceMs=null,en(Z),ie&&R(ae,ne),Bs(Z,Ee)},me=(ne,le,Z)=>{if(V){ne.destroy();return}const ae=ks(Pe.peerStates,le);if(ae.connectedPeer){const ce=H[le];if(ce&&ae.connectedPeer===ce.peer&&ce.bindings[w])return;ae.connectedPeer!==ne&&!ne.isDead&&ne.destroy();return}let ie=H[le];if(ie&&c.getHealth(ie.peer)==="stale"&&(c.clear(P,le,{destroyPeer:!0}),ie=void 0),ie&&ie.peer!==ne){ne.isDead||ne.destroy(),Q(le,ie);return}const fe=!ie;ie||(ie=c.register(P,le,ne,N)),Q(le,ie),fe&&f(P,ie)},Ue=(ne,le)=>{var ae;if(V)return;const Z=Pe.peerStates[le];(Z==null?void 0:Z.connectedPeer)===ne&&(Wo(Z),Xe(),!ue&&be&&((ae=Pe.requeueAnnounce)==null||ae.call(Pe)))},ue=!!S.passive;let Ie=null,Je,Ne=Ft;const Xe=()=>{if(!ue||!Pe.isActive)return;let ne=!1;gi(Pe.peerStates).forEach(([le,Z])=>{Z.connectedPeer||Z.answeringPeer||Z.offerInitPromise||Z.offerPeer||Z.offerRelays.some(Boolean)?ne=!0:Z.status==="idle"&&delete Pe.peerStates[le]}),ne||(Pe.isActive=!1,Je=ot(Je),je.forEach(ot),je.length=0,Ne(),Ie!=null&&Ie.roomToken&&g(P,Ie.roomToken,!1))},Pe={appId:P,roomId:w,config:S,peerStates:{},rootTopicPlaintext:z,rootTopicP:B,selfTopicP:A,toPlain:te,toCipher:U,isLeaving:()=>V,isPassive:ue,isActive:!ue,onJoinError:y,sharedPeers:c,offerPool:Ee,encryptOffer:$,initPeer:Ol,connectPeer:me,disconnectPeer:Ue,attachSharedPeerToRoom:Q,checkDeactivate:Xe,announceIntervals:[],announceIntervalMs:vr},Oe={config:S,appId:P,roomId:w,isPassive:ue},tt=Xx(Pe);if(!p){const ne=i(S);v=(Array.isArray(ne)?ne:[ne]).map(le=>Promise.resolve(le)),p=!0,E=(he=S.relayConfig)!=null&&he.manualReconnection?Ft:V_()}!ue&&!Ee.isActive&&Ee.warmup(),Pe.announceIntervals=v.map(()=>vr);const F=v.map(()=>vr),ut=v.map(()=>0),Ye=v.map(()=>0),je=[],we=v.map(async(ne,le)=>e(await ne,await B,await A,tt(le),Z=>Ee.getOffers(Z,$),Oe));Mi([B,A]).then(([ne,le])=>{if(V)return;const Z=async(ae,ie)=>{var de;if(V||ue&&!Pe.isActive)return;const fe=ue?{passive:!0}:void 0;let ce;try{ce=await t(ae,ne,le,fe,Oe),Ye[ie]=0}catch(Se){const oe=Ye[ie]??0;oe===0&&((de=S.relayConfig)==null?void 0:de.warnOnRelayFailure)!==!1&&console.warn(`${un}: announce failed - ${ts(Se,"")}`),Ye[ie]=oe+1}if(V||ue&&!Pe.isActive||ce&&typeof ce!="number"&&"stopAnnouncing"in ce)return;typeof ce=="number"?(Pe.announceIntervals[ie]=ce,F[ie]=ce):ce&&(F[ie]=ce.nextAnnounceMs,be||(be=ce.reannounceOnDisconnect===!0));const ze=ut[ie]??0;ut[ie]=ze+1;const O=F[ie]??vr,_e=qx[ze];je[ie]=setTimeout(()=>{Z(ae,ie)},typeof _e=="number"?Math.min(O,_e):O)};Ne=()=>{n&&v.forEach(async ae=>{const ie=await ae;V||n(ie,ne,le,Oe)})},Pe.requeueAnnounce=()=>{je.forEach(ot),je.length=0,Je=ot(Je),Ee.isActive||Ee.warmup(),Ie!=null&&Ie.roomToken&&g(P,Ie.roomToken,!0),Je=setTimeout(Xe,Yx),v.forEach(async(ae,ie)=>{const fe=await ae;fe&&!V&&(ut[ie]=0,Z(fe,ie))})},we.forEach(async(ae,ie)=>{if(await ae,V)return;const fe=await v[ie];fe&&!V&&(!ue||Pe.isActive)&&Z(fe,ie)})});let R=Ft;const{compose:x}=Q_(S.password??"",P,w),k=x(T),J={...k?{onPeerHandshake:k}:{},...D===void 0?{}:{handshakeTimeoutMs:D},isPassive:ue,onHandshakeError:(ne,le)=>y==null?void 0:y({error:le.replace(/^handshake failed: /,""),appId:P,peerId:ne,roomId:w})};s[P]??(s[P]={});const K=h(P),j=Sx(ne=>R=ne,ne=>{if(V)return;const le=Pe.peerStates[ne];le!=null&&le.connectedPeer&&(le.connectedPeer=null,en(le),Xe())},()=>{var le,Z;V=!0,R=Ft;const ne=(le=r[P])==null?void 0:le[w];ne!=null&&ne.roomToken&&(g(P,ne.roomToken,!1),(Z=a[P])==null||delete Z[ne.roomToken],a[P]&&!Qt(a[P]).length&&delete a[P]),r[P]&&(delete r[P][w],Qt(r[P]).length||delete r[P]),gi(Pe.peerStates).forEach(([ae,ie])=>{if(ie.answeringExpiryTimer=ot(ie.answeringExpiryTimer),ie.connectedPeer&&!ie.connectedPeer.isDead){const fe=H[ae];(!fe||fe.peer!==ie.connectedPeer)&&ie.connectedPeer.destroy()}ie.answeringPeer&&!ie.answeringPeer.isDead&&ie.answeringPeer.destroy(),Bs(ie,Ee),ie.connectedPeer=null,ie.answeringPeer=null,en(ie)}),s[P]&&(delete s[P][w],Qt(s[P]).length===0&&delete s[P]),je.forEach(ot),Je=ot(Je),we.forEach(async ae=>{(await ae)()}),!l()&&(p=!1,Ee.destroy(),M=null,E(),m(P))},J);return Ie={roomToken:null,roomTokenPromise:I,attachSharedPeerToRoom:Q,shouldAdvertise:()=>!ue||Pe.isActive},K[w]=Ie,I.then(ne=>{var Z;const le=Ie;!le||V||((Z=r[P])==null?void 0:Z[w])!==le||(le.roomToken=ne,d(P)[ne]=w,Yi(H).forEach(ae=>{ae.remoteRoomTokens.has(ne)&&Q(ae.peerId,ae)}),(!ue||Pe.isActive)&&g(P,ne,!0))}),s[P][w]=j}};const Kx=["offer","answer","candidate"],Zx=6e4,Jx=i=>{if(typeof i=="string")try{const e=ns(i);return e&&typeof e=="object"?e:null}catch{return null}return i},Fa=(i,e)=>typeof i[e]=="string"&&i[e]?i[e]:void 0,Qx=i=>Kx.some(e=>e in i&&(typeof i[e]!="string"||i[e]==="")),ev=i=>{const e=Jx(i);if(!e||Qx(e))return!1;const t=Fa(e,"peerId");return!!(t&&t!==hn&&e.passive!==!0&&!Fa(e,"answer")&&!Fa(e,"candidate"))},Oa=i=>{if(!i)throw nt("topic strategy missing room context");return i},$l=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n}),ka=(i,e,t,n)=>({kind:e,appId:i.appId,roomId:i.roomId,rootTopic:t,selfTopic:n});var tv=({steadyAnnounceIntervalMs:i=Zx,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:n,publishTopic:s,unpublishTopic:r})=>$x({init:t,subscribe:async(a,o,c,l,h,d)=>{const u=Oa(d),f=(S,w)=>void s(a,S,w,ka(u,"signal",o,c));let g=null,_=!1,m=null,p=!1;const v=S=>{_||(_=!0,S())},M=()=>(m||(m=Promise.resolve(n(a,c,(S,w)=>{p||l(S,w,f)},$l(u,"self",o,c))).then(S=>{g=S,p&&v(S)})),m);u.isPassive||await M();const E=await n(a,o,async(S,w)=>{p||(u.isPassive&&ev(w)&&await M(),p||await l(S,w,f))},$l(u,"root",o,c));return()=>{p=!0,g&&v(g),E()}},announce:async(a,o,c,l,h)=>{const d=Oa(h),u=await s(a,o,jt({peerId:hn,...l}),ka(d,"announce",o,c));return typeof u=="number"||u!==void 0&&"stopAnnouncing"in u?u:{nextAnnounceMs:(u==null?void 0:u.nextAnnounceMs)??i,reannounceOnDisconnect:(u==null?void 0:u.reannounceOnDisconnect)??e}},...r?{deactivate:(a,o,c,l)=>{const h=Oa(l);return r(a,o,ka(h,"announce",o,c))}}:{}});const nv=H_(i=>i.socket),iv=5,_h="x",xh="EVENT",{secretKey:sv,publicKey:rv}=sh.keygen(),av=Ns(rv),ov={},cv={},Ba={},Kl=250,Nr=6e4,lv=15*6e4,dv=5333,zs=new WeakMap,Xo=new WeakSet,_i=new WeakMap,Zl=i=>{const e=zs.get(i),t=Math.min(e!=null&&e.delayMs?Math.max(Nr,e.delayMs*2):Nr,lv);return zs.set(i,{delayMs:t,untilMs:Date.now()+t}),t},hv=i=>{const e=zs.get(i);if(!e)return 0;const t=e.untilMs-Date.now();return t>0?t:0},za=i=>({nextAnnounceMs:i}),uv={stopAnnouncing:!0},fv=i=>{var t;if(Xo.has(i))return!1;const e=_i.get(i);return e&&(clearTimeout(e.timer),_i.delete(i)),Xo.add(i),zs.delete(i),(t=i.close)==null||t.call(i),!0},pv=(i,e)=>{const t=_i.get(i);t&&(clearTimeout(t.timer),t.eventIds.add(e));const n=(t==null?void 0:t.eventIds)??new Set([e]),s=setTimeout(()=>{_i.delete(i)},dv);_i.set(i,{eventIds:n,timer:s})},mv=(i,e)=>{const t=_i.get(i);return t!=null&&t.eventIds.has(e)?(clearTimeout(t.timer),_i.delete(i),!0):!1},vh=()=>Math.floor(Date.now()/1e3),yh=i=>Ba[i]??(Ba[i]=ch(i,1e4)+2e4),gv=async(i,e)=>{const t={kind:yh(i),tags:[[_h,i]],created_at:vh(),content:e,pubkey:av},n=await Vr("SHA-256",jt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return jt([xh,{...t,id:Ns(n),sig:Ns(await sh.signAsync(n,sv))}])},Nn={},Sh=i=>{i.flushWaiters.forEach(e=>e()),i.flushWaiters.clear()},_v=(i,e,t)=>{var s;const n=Nn[s=i.url]??(Nn[s]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});n.topics.set(e,t),Mh(i,n)},xv=(i,e)=>{const t=Nn[i.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),Sh(t),t.subIds.forEach(n=>i.send(jt(["CLOSE",n]))),delete Nn[i.url]):Mh(i,t))},Mh=(i,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{bh(i)}finally{Sh(e)}},0))},vv=i=>{const e=Nn[i.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},bh=i=>{const e=Nn[i.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],n=[],s=vh();for(let r=0;r<t.length;r+=Kl)n.push(t.slice(r,r+Kl));for(;e.subIds.length>n.length;){const r=e.subIds.pop();r&&i.send(jt(["CLOSE",r]))}n.forEach((r,a)=>{var c;const o=(c=e.subIds)[a]??(c[a]=as(64));i.send(jt(["REQ",o,{kinds:[...new Set(r.map(yh))],since:s,"#x":r}]))})},yv=i=>{const e=Nn[i.url];e&&e.topics.size>0&&bh(i)},Sv=tv({init:i=>k_(i,Mv,iv,!0).map(e=>{const t=nv.register(e,()=>G_(e,n=>{var c,l;const[s,r,a,o]=ns(n);if(s!==xh){const h=`${un}: relay failure from ${t.url} - `,d=s==="CLOSED"&&typeof a=="string"?a:o,u=s==="OK"&&a===!1,f=u&&(d==null?void 0:d.startsWith("rate-limited:")),g=u&&(d==null?void 0:d.startsWith("duplicate:")),_=s==="CLOSED"||u&&!f&&!g,m=s==="OK"&&mv(t,r);if(_&&!fv(t))return;f?Zl(t):m&&zs.delete(t),!g&&((c=i.relayConfig)==null?void 0:c.warnOnRelayFailure)!==!1&&(s==="NOTICE"?console.warn(h+r):(u||s==="CLOSED")&&console.warn(h+d));return}if(a&&typeof a=="object"&&"content"in a){const{content:h}=a,d=cv[r];if(d){d(ov[r]??"",h);return}const u=Nn[t.url];if(u!=null&&u.subIds.includes(r)&&a.tags){const f=a.tags.find(g=>g[0]===_h);f!=null&&f[1]&&((l=u.topics.get(f[1]))==null||l(f[1],h))}}},()=>yv(t)));return t.ready}),subscribeTopic:(i,e,t,n)=>{_v(i,e,(a,o)=>void t(a,o));const r=()=>{xv(i,e)};return n.kind==="root"?vv(i).then(()=>r):r},publishTopic:async(i,e,t,n)=>{if(Xo.has(i)||i.isClosed)return n.kind==="announce"?uv:void 0;if(n.kind==="announce"){const o=hv(i);if(o>0)return za(Math.max(Nr,o))}const s=await gv(e,typeof t=="string"?t:jt(t)),r=i.socket.readyState===1;if(i.send(s),n.kind!=="announce")return;if(!r)return za(Zl(i));const a=ns(s)[1].id;return pv(i,a),za(Nr)}}),Mv=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(i=>"wss://"+i);class bv{constructor(e,t,n="P2",s="#00f5ff"){this.scene=e,this.peerId=t,this.tag=(n||"P2").slice(0,5).toUpperCase(),this.colorHex=s,this.colorNum=parseInt(s.replace("#","0x"),16)||62975,this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetPosition=new W(0,0,7.5),this.targetRotation=Math.PI,this.isMoving=!1,this.walkCycle=0,this.statusText="ONLINE",this.lastActiveTime=Date.now(),this.createAvatarMesh(),this.createNameTagSprite(),this.createSpeechBubbleSprite()}createAvatarMesh(){this.group=new vn,this.group.position.set(this.x,this.y,this.z);const e=new Yt(.38,.32,.8,16),t=new xt({color:this.colorNum,roughness:.3,metalness:.3,emissive:this.colorNum,emissiveIntensity:.15});this.torso=new ye(e,t),this.torso.position.y=.85,this.group.add(this.torso);const n=new at(.04,.78,.05),s=new dt({color:16777215}),r=new ye(n,s);r.position.set(0,.85,.35),this.group.add(r);const a=new vi(.42,24,24),o=new xt({color:1711406,roughness:.2,metalness:.8});this.helmet=new ye(a,o),this.helmet.position.y=1.6,this.group.add(this.helmet);const c=new vi(.36,24,16,0,Math.PI*2,0,Math.PI*.45),l=new xt({color:this.colorNum,roughness:.1,metalness:.9,emissive:this.colorNum,emissiveIntensity:.3}),h=new ye(c,l);h.rotation.x=Math.PI*.5,h.position.set(0,1.6,.12),this.group.add(h);const d=new Yt(.12,.1,.65,12),u=new xt({color:658454,roughness:.5});this.leftLeg=new ye(d,u),this.leftLeg.position.set(-.18,.35,0),this.group.add(this.leftLeg),this.rightLeg=new ye(d,u),this.rightLeg.position.set(.18,.35,0),this.group.add(this.rightLeg);const f=new at(.18,.16,.28),g=new xt({color:this.colorNum,roughness:.3}),_=new ye(f,g);_.position.set(0,-.28,.05),this.leftLeg.add(_);const m=new ye(f,g);m.position.set(0,-.28,.05),this.rightLeg.add(m);const p=new Or(.55,16),v=new dt({color:0,transparent:!0,opacity:.4}),M=new ye(p,v);M.rotation.x=-Math.PI*.5,M.position.y=.02,this.group.add(M),this.scene.add(this.group)}createNameTagSprite(){const e=document.createElement("canvas");e.width=320,e.height=110,this.nameCanvas=e,this.nameCtx=e.getContext("2d"),this.renderNameTagCanvas();const t=new tn(e);t.minFilter=mt,t.magFilter=mt,this.nameTexture=t;const n=new Qi({map:t,transparent:!0,depthTest:!1});this.nameSprite=new Ds(n),this.nameSprite.position.set(0,2.35,0),this.nameSprite.scale.set(1.6,.55,1),this.group.add(this.nameSprite)}renderNameTagCanvas(){const e=this.nameCtx,t=this.nameCanvas.width,n=this.nameCanvas.height;e.clearRect(0,0,t,n),e.fillStyle="rgba(8, 9, 16, 0.88)",e.strokeStyle=this.colorHex,e.lineWidth=4;const s=24;e.beginPath(),e.roundRect(10,10,t-20,n-20,s),e.fill(),e.stroke(),e.font='bold 36px "Press Start 2P", monospace, sans-serif',e.fillStyle="#ffd32a",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffd32a",e.shadowBlur=8,e.fillText(this.tag,t/2,42),e.shadowBlur=0,e.font='bold 16px "Outfit", sans-serif',e.fillStyle=this.colorHex,e.fillText(this.statusText,t/2,78),this.nameTexture&&(this.nameTexture.needsUpdate=!0)}createSpeechBubbleSprite(){const e=document.createElement("canvas");e.width=384,e.height=140,this.bubbleCanvas=e,this.bubbleCtx=e.getContext("2d"),this.bubbleTexture=new tn(e),this.bubbleTexture.minFilter=mt;const t=new Qi({map:this.bubbleTexture,transparent:!0,depthTest:!1});this.speechSprite=new Ds(t),this.speechSprite.position.set(0,3.1,0),this.speechSprite.scale.set(2.2,.8,1),this.speechSprite.visible=!1,this.speechTimer=0,this.group.add(this.speechSprite)}showSpeechBubble(e){if(!e||!this.speechSprite)return;const t=this.bubbleCtx,n=this.bubbleCanvas.width,s=this.bubbleCanvas.height;t.clearRect(0,0,n,s),t.fillStyle="rgba(8, 12, 28, 0.94)",t.strokeStyle=this.colorHex||"#00f5ff",t.lineWidth=4,t.beginPath(),t.roundRect(10,10,n-20,s-36,18),t.fill(),t.stroke(),t.beginPath(),t.moveTo(n/2-14,s-26),t.lineTo(n/2,s-6),t.lineTo(n/2+14,s-26),t.closePath(),t.fill(),t.stroke(),t.fillStyle="rgba(8, 12, 28, 0.94)",t.fillRect(n/2-12,s-28,24,6),t.fillStyle="#ffffff",t.font='bold 22px "Outfit", "Segoe UI", sans-serif',t.textAlign="center",t.textBaseline="middle";const r=22,a=e.trim();if(a.length<=r)t.fillText(a,n/2,(s-36)/2+10);else{let o=a.lastIndexOf(" ",r);(o===-1||o<8)&&(o=r);const c=a.substring(0,o).trim(),l=a.substring(o,o+r).trim();t.fillText(c,n/2,34),t.fillText(l+(a.length>o+r?"...":""),n/2,64)}this.bubbleTexture.needsUpdate=!0,this.speechSprite.visible=!0,this.speechTimer=5}setTelemetry(e,t,n,s,r=0){this.targetPosition.set(e,r,t),this.targetRotation=n,this.isMoving=!!s,this.lastActiveTime=Date.now()}setActivity(e){this.statusText=e.slice(0,14).toUpperCase(),this.renderNameTagCanvas()}update(e,t){if(!this.group)return;const n=Math.min(1,1-Math.exp(-14*e));this.group.position.lerp(this.targetPosition,n);let s=this.targetRotation-this.group.rotation.y;for(;s<-Math.PI;)s+=Math.PI*2;for(;s>Math.PI;)s-=Math.PI*2;if(this.group.rotation.y+=s*n,this.isMoving){this.walkCycle+=e*10;const r=Math.sin(this.walkCycle)*.45;this.leftLeg.rotation.x=r,this.rightLeg.rotation.x=-r,this.torso.position.y=.85+Math.abs(Math.sin(this.walkCycle*2))*.04,this.helmet.position.y=1.6+Math.abs(Math.sin(this.walkCycle*2))*.04}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.torso.position.y=.85,this.helmet.position.y=1.6;this.nameSprite&&t&&this.nameSprite.quaternion.copy(t.quaternion),this.speechSprite&&this.speechSprite.visible&&(t&&this.speechSprite.quaternion.copy(t.quaternion),this.speechTimer-=e,this.speechTimer<=0&&(this.speechSprite.visible=!1))}dispose(){this.group&&this.scene&&(this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))}}class Ev{constructor(e,t,n){this.scene=e,this.identity=t,this.scoreTicker=n,this.peers=new Map,this.room=null,this.posAction=null,this.idAction=null,this.actAction=null,this.scoreAction=null,this.chatAction=null,this.onCabinetOccupancyChange=null,this.lastBroadcastTime=0,this.lastSentX=null,this.lastSentY=null,this.lastSentZ=null,this.lastSentRot=null,this.lastSentMoving=null,this.heartbeatTimer=null,this.hudEl=null,this.createHud(),this.connect()}createHud(){let e=document.getElementById("mp-network-hud");e&&e.remove();const t=document.getElementById("mp-hud-mount");if(t){t.innerHTML=`
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
    `,document.body.appendChild(e),this.hudEl=e}updateHudCount(){const e=document.getElementById("mp-count-text");if(e){const t=this.peers.size+1;e.textContent=`${t}/10 ONLINE`}}connect(){try{const e={appId:"nopex-arcade-webrtc-v1",relayUrls:["wss://nos.lol","wss://relay.damus.io","wss://relay.primal.net","wss://purplerelay.com"],rtcConfig:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}},t="nopex-main-hub";this.room=Sv(e,t),this.posAction=this.room.makeAction("pos"),this.idAction=this.room.makeAction("id"),this.actAction=this.room.makeAction("act"),this.scoreAction=this.room.makeAction("score"),this.chatAction=this.room.makeAction("chat"),this.room.onPeerJoin=n=>{console.log(`[WebRTC] Peer connected: ${n}`),this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:n}),this.updateHudCount()},this.room.onPeerLeave=n=>{console.log(`[WebRTC] Peer disconnected: ${n}`);const s=this.peers.get(n);s&&(s.dispose(),this.peers.delete(n)),this.onCabinetOccupancyChange&&this.onCabinetOccupancyChange(n,null,null,!1),this.updateHudCount()},this.idAction.onMessage=(n,{peerId:s})=>{if(!(!n||!n.tag))if(this.peers.has(s)){const r=this.peers.get(s);(r.tag!==n.tag||r.colorHex!==n.colorHex)&&(r.tag=n.tag.slice(0,5).toUpperCase(),r.colorHex=n.colorHex||"#00f5ff",r.renderNameTagCanvas())}else{if(this.peers.size>=9)return;const r=new bv(this.scene,s,n.tag,n.colorHex);this.peers.set(s,r),this.updateHudCount(),this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:s})}},this.posAction.onMessage=(n,{peerId:s})=>{if(!n)return;const r=this.peers.get(s);r?r.setTelemetry(n.x,n.z,n.r,n.m,n.y||0):this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:s})},this.actAction.onMessage=(n,{peerId:s})=>{if(!n)return;const r=this.peers.get(s);if(r&&r.setActivity(n.status||"ONLINE"),this.onCabinetOccupancyChange){const a=r&&r.tag||n.tag||"P2";this.onCabinetOccupancyChange(s,a,n.gameId,!!n.playing)}},this.scoreAction.onMessage=n=>{n&&this.scoreTicker&&this.scoreTicker.showRecord(n.player,n.game,n.score)},this.chatAction.onMessage=(n,{peerId:s})=>{if(!n||!n.text)return;const r=this.peers.get(s),a=n.tag||(r?r.tag:"P2"),o=n.colorHex||(r?r.colorHex:"#00f5ff");r&&r.showSpeechBubble(n.text),window.dispatchEvent(new CustomEvent("arcade-chat-received",{detail:{peerId:s,tag:a,text:n.text,colorHex:o}}))},this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>{this.idAction&&this.identity&&this.broadcastIdentity()},2500)}catch(e){console.warn("[WebRTC] Connection failed, operating in offline hub mode:",e)}}broadcastIdentity(){!this.idAction||!this.identity||this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex})}broadcastLocalPosition(e,t,n,s,r=0){if(!this.posAction)return;const a=performance.now();if(a-this.lastBroadcastTime<50)return;const o=this.lastSentX!==null?Math.abs(e-this.lastSentX):999,c=this.lastSentY!==null?Math.abs(r-this.lastSentY):999,l=this.lastSentZ!==null?Math.abs(t-this.lastSentZ):999,h=this.lastSentRot!==null?Math.abs(n-this.lastSentRot):999,d=s!==this.lastSentMoving;o<.02&&c<.02&&l<.02&&h<.03&&!d&&a-this.lastBroadcastTime<1500||(this.lastBroadcastTime=a,this.lastSentX=e,this.lastSentY=r,this.lastSentZ=t,this.lastSentRot=n,this.lastSentMoving=s,this.posAction.send({x:Math.round(e*100)/100,y:Math.round(r*100)/100,z:Math.round(t*100)/100,r:Math.round(n*100)/100,m:!!s}))}broadcastActivity(e){this.actAction&&this.actAction.send({status:e})}broadcastPlayingGame(e,t){this.actAction&&this.actAction.send({status:t?"PLAYING":"ONLINE",gameId:e||null,playing:!!t,tag:this.identity?this.identity.tag:"P1"})}broadcastChat(e){!this.chatAction||!e||this.chatAction.send({text:e.slice(0,140),tag:this.identity?this.identity.tag:"P1",colorHex:this.identity?this.identity.colorHex:"#00f5ff"})}broadcastHighScore(e,t){this.scoreAction&&(this.scoreAction.send({player:this.identity.tag,game:e,score:t,time:Date.now()}),this.scoreTicker&&this.scoreTicker.showRecord(this.identity.tag,e,t))}update(e,t){this.peers.forEach(n=>{n.update(e,t)})}}class Tv{constructor(){this.modalEl=document.getElementById("arcade-jukebox-modal"),this.isOpen=!1,this.selectedArtistId="all",this.showLyrics=!1,this.renderSkeleton(),this.bindEvents(),We.subscribe(e=>this.onMusicStateUpdate(e))}renderSkeleton(){this.modalEl&&(this.modalEl.innerHTML=`
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
    `,this.initCanvasVisualizer())}initCanvasVisualizer(){if(this.canvas=document.getElementById("dock-canvas"),!this.canvas)return;this.ctx=this.canvas.getContext("2d"),this.freqData=new Uint8Array(16);const e=()=>{if(this.isOpen&&this.ctx){this.ctx.clearRect(0,0,60,24),We.getFrequencyData(this.freqData);for(let t=0;t<8;t++){const n=this.freqData[t]/255,s=Math.max(3,n*22);this.ctx.fillStyle=t%2===0?"#00f5ff":"#ff007f",this.ctx.fillRect(t*7+2,24-s,5,s)}}requestAnimationFrame(e)};requestAnimationFrame(e)}bindEvents(){const e=document.getElementById("jukebox-close-btn"),t=document.getElementById("jukebox-backdrop"),n=document.getElementById("dock-play"),s=document.getElementById("dock-prev"),r=document.getElementById("dock-next"),a=document.getElementById("dock-vol-slider"),o=document.getElementById("dock-lyrics-toggle"),c=document.getElementById("lyrics-close-btn");e&&e.addEventListener("click",()=>this.close()),t&&t.addEventListener("click",()=>this.close()),n&&n.addEventListener("click",()=>We.togglePlay()),s&&s.addEventListener("click",()=>We.prev()),r&&r.addEventListener("click",()=>We.next()),a&&a.addEventListener("input",l=>{We.setVolume(parseFloat(l.target.value))}),o&&o.addEventListener("click",()=>{this.showLyrics=!this.showLyrics,this.updateLyricsPanel()}),c&&c.addEventListener("click",()=>{this.showLyrics=!1,this.updateLyricsPanel()}),window.addEventListener("keydown",l=>{this.isOpen&&(l.key==="Escape"?(l.preventDefault(),this.close()):l.code==="Space"&&l.target.tagName!=="INPUT"&&(l.preventDefault(),We.togglePlay()))})}open(){this.isOpen=!0,this.modalEl&&(this.modalEl.style.display="flex",setTimeout(()=>this.modalEl.classList.add("active"),10)),this.populateTabs(),this.renderTracks(),this.onMusicStateUpdate({isPlaying:We.isPlaying,currentTrack:We.getCurrentTrack(),currentTime:We.currentTrackTime,duration:We.getCurrentTrack()&&We.getCurrentTrack().durationSec||140})}close(){this.isOpen=!1,this.modalEl&&(this.modalEl.classList.remove("active"),setTimeout(()=>{this.modalEl.style.display="none"},250))}populateTabs(){const e=document.getElementById("jukebox-artist-tabs");if(!e||!We.artists.length)return;let t=`<button class="juke-tab ${this.selectedArtistId==="all"?"active":""}" data-artist="all">🎵 Todas as Músicas</button>`;We.artists.forEach(n=>{const s=this.selectedArtistId===n.id?"active":"";t+=`
        <button class="juke-tab ${s}" data-artist="${n.id}">
          <img src="${n.avatar}" class="tab-avatar" alt="" onerror="this.style.display='none'" />
          ${n.name}
        </button>
      `}),e.innerHTML=t,e.querySelectorAll(".juke-tab").forEach(n=>{n.addEventListener("click",s=>{this.selectedArtistId=n.getAttribute("data-artist"),e.querySelectorAll(".juke-tab").forEach(r=>r.classList.remove("active")),n.classList.add("active"),this.renderTracks()})})}renderTracks(){const e=document.getElementById("jukebox-track-container");if(!e)return;const t=We.tracks.filter(s=>this.selectedArtistId==="all"?!0:s.artistId===this.selectedArtistId);if(!t.length){e.innerHTML='<div class="juke-empty">Nenhuma faixa encontrada neste filtro.</div>';return}const n=We.getCurrentTrack();e.innerHTML=t.map(s=>{const r=n&&n.id===s.id,a=r&&We.isPlaying;return`
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
      `}).join(""),e.querySelectorAll(".juke-track-card").forEach(s=>{s.addEventListener("click",r=>{const a=s.getAttribute("data-id"),o=We.tracks.findIndex(c=>c.id===a);o!==-1&&(We.currentIndex===o&&We.isPlaying?We.togglePlay():We.playTrack(o))})})}onMusicStateUpdate(e){const t=document.getElementById("dock-play"),n=document.getElementById("dock-cover"),s=document.getElementById("dock-title"),r=document.getElementById("dock-artist"),a=document.getElementById("dock-time-cur"),o=document.getElementById("dock-time-dur"),c=document.getElementById("dock-progress-bar");if(t&&(t.innerHTML=e.isPlaying?"⏸":"▶"),e.currentTrack&&(n&&(n.src=e.currentTrack.cover),s&&(s.textContent=e.currentTrack.title),r&&(r.textContent=`${e.currentTrack.artistName} • ${e.currentTrack.synthStyle||"AI Synth"}`)),a&&e.currentTime!==void 0&&(a.textContent=this.formatSeconds(e.currentTime)),o&&e.duration!==void 0&&(o.textContent=this.formatSeconds(e.duration)),c&&e.duration){const l=Math.min(100,e.currentTime/e.duration*100);c.style.width=`${l}%`}e.type==="state"&&(this.renderTracks(),this.updateLyricsPanel())}updateLyricsPanel(){const e=document.getElementById("jukebox-lyrics-panel"),t=document.getElementById("jukebox-lyrics-content");if(!e||!t)return;if(!this.showLyrics){e.style.display="none";return}e.style.display="flex";const n=We.getCurrentTrack();n&&n.lyrics&&n.lyrics.length?t.innerHTML=n.lyrics.map(s=>`
        <div class="lyrics-line">
          <span class="lyrics-time">[${this.formatSeconds(s.time)}]</span>
          <span class="lyrics-text">${s.text}</span>
        </div>
      `).join(""):t.innerHTML='<div class="lyrics-empty">Nenhuma letra sincronizada para esta faixa instrumental.</div>'}formatSeconds(e){(isNaN(e)||e<0)&&(e=0);const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n<10?"0":""}${n}`}}class wv{constructor(e){this.onOpenJukeboxModal=e,this.hudContainer=document.getElementById("arcade-music-hud"),this.tickerEl=document.getElementById("music-hud-ticker"),this.playBtn=document.getElementById("music-hud-play"),this.prevBtn=document.getElementById("music-hud-prev"),this.nextBtn=document.getElementById("music-hud-next"),this.expandBtn=document.getElementById("music-hud-expand"),this.volBtn=document.getElementById("music-hud-vol"),this.bars=document.querySelectorAll(".hud-eq-bar"),this.isMuted=!1,this.prevVolume=.7,this.bindEvents(),We.subscribe(t=>this.update(t))}bindEvents(){this.playBtn&&this.playBtn.addEventListener("click",e=>{e.stopPropagation(),We.togglePlay()}),this.prevBtn&&this.prevBtn.addEventListener("click",e=>{e.stopPropagation(),We.prev()}),this.nextBtn&&this.nextBtn.addEventListener("click",e=>{e.stopPropagation(),We.next()}),this.expandBtn&&this.expandBtn.addEventListener("click",e=>{e.stopPropagation(),this.onOpenJukeboxModal&&this.onOpenJukeboxModal()}),this.tickerEl&&this.tickerEl.addEventListener("click",e=>{e.stopPropagation(),this.onOpenJukeboxModal&&this.onOpenJukeboxModal()}),this.volBtn&&this.volBtn.addEventListener("click",e=>{e.stopPropagation(),this.isMuted?(this.isMuted=!1,We.setVolume(this.prevVolume||.7),this.volBtn.textContent="🔊"):(this.isMuted=!0,this.prevVolume=We.volume,We.setVolume(0),this.volBtn.textContent="🔇")})}update(e){if(this.playBtn&&(this.playBtn.innerHTML=e.isPlaying?"⏸":"▶",this.playBtn.setAttribute("title",e.isPlaying?"Pausar":"Tocar")),this.tickerEl&&e.currentTrack){const n=e.isProcedural?" [SYNTH AI]":"";this.tickerEl.innerHTML=`🎵 <strong>${e.currentTrack.artistName}</strong> — ${e.currentTrack.title}${n}`}const t=document.getElementById("music-hud-eq");t&&(e.isPlaying&&!e.isDucked?t.classList.add("dancing"):t.classList.remove("dancing"))}}class Av{constructor(e,t,n=null){this.container=e,this.gamesManifest=t,this.identity=n,this.isRunning=!1,this.isZoomingIn=!1,this.zoomTarget=null,this.zoomProgress=0,this.initScene(),this.initWorld(),this.initPlayer(),this.initTokens(),this.initInteraction(),this.initOverlay(),this.initJukebox(),this.initNetwork(),this.initPointerLock(),this.initChatDock(),this.initMobileControls(),this.initTapToWalk(),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>{setTimeout(()=>this.onResize(),150)})}initScene(){this.scene=new zu,this.scene.background=new Ke(856619),this.scene.fog=new sc(856619,40,95);const e=this.container.clientWidth||window.innerWidth||1280,t=this.container.clientHeight||window.innerHeight||720;this.camera=new Xt(52,e/t,.1,200),this.camera.position.set(0,4.2,13.5),this.renderer=new Q0({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),this.container.appendChild(this.renderer.domElement),this.clock=new tf,this.raycaster=new nf;const n=new Qn(.5,.75,32),s=new dt({color:62975,side:At,transparent:!0,opacity:0});this.destinationRing=new ye(n,s),this.destinationRing.rotation.x=-Math.PI/2,this.destinationRing.position.set(0,.05,0),this.scene.add(this.destinationRing),this.destinationPulse=0}initWorld(){this.world=h_(this.scene,this.gamesManifest)}initPlayer(){this.player=new t_(this.scene,this.identity)}initTokens(){let e=parseInt(localStorage.getItem("arcade_tokens"),10);(isNaN(e)||e<=0)&&(e=25),this.tokens=e;try{this.discoveredCabinets=new Set(JSON.parse(localStorage.getItem("arcade_discovered")||"[]"))}catch{this.discoveredCabinets=new Set}this.updateTokensDisplay()}updateTokensDisplay(){const e=document.getElementById("arcade-tokens-val");e&&(e.textContent=this.tokens),localStorage.setItem("arcade_tokens",String(this.tokens))}spendToken(){this.tokens>0?this.tokens-=1:this.tokens=5,this.updateTokensDisplay(),Ha(()=>Promise.resolve().then(()=>Bo),void 0,import.meta.url).then(e=>{var t;return(t=e.playCoinDrop)==null?void 0:t.call(e)})}awardExplorationToken(e){if(e&&!this.discoveredCabinets.has(e)){this.discoveredCabinets.add(e);try{localStorage.setItem("arcade_discovered",JSON.stringify([...this.discoveredCabinets]))}catch{}this.tokens+=2,this.updateTokensDisplay()}}initInteraction(){this.interaction=new u_(this.world.cabinets,(e,t)=>this.launchGame(e,t),e=>this.awardExplorationToken(e))}initOverlay(){this.overlay=new f_(()=>{this.isZoomingIn=!1,this.zoomProgress=0,this.clock.getDelta(),this.zoomTarget&&(this.zoomTarget.clearOccupied(),this.zoomTarget=null),this.network&&(this.network.broadcastActivity("ONLINE"),this.network.broadcastPlayingGame(null,!1))})}initJukebox(){this.jukeboxModal=new Tv,this.musicHud=new wv(()=>this.openJukebox()),We.init()}openJukebox(){var e;document.pointerLockElement&&((e=document.exitPointerLock)==null||e.call(document)),this.jukeboxModal&&(Ha(()=>Promise.resolve().then(()=>Bo),void 0,import.meta.url).then(t=>{var n;return(n=t.playDopamineChime)==null?void 0:n.call(t)}),this.jukeboxModal.open())}initNetwork(){this.scoreTicker=new p_,this.network=new Ev(this.scene,this.identity||{tag:"MARC1",color:62975,colorHex:"#00f5ff"},this.scoreTicker),window.__ARCADE_NETWORK__=this.network,this.network.onCabinetOccupancyChange=(e,t,n,s)=>{if(s&&n){const r=this.world.cabinets.find(a=>a.game.id===n);r&&r.setOccupiedBy(t)}else this.world.cabinets.forEach(r=>{r.occupiedBy===t&&r.clearOccupied()})}}initPointerLock(){const e=this.renderer.domElement;this.isPointerLocked=!1,this.camPitch=0,e.addEventListener("click",t=>{document.body.classList.contains("touch-device")||"ontouchstart"in window||window.__arcadeOverlayOpen||this.overlay&&this.overlay.isOpen||this.jukeboxModal&&this.jukeboxModal.isOpen||t.target.closest&&t.target.closest(".nopex-hud-header, .arcade-music-hud, .arcade-commands-dock, .arcade-hologram-card, .arcade-jukebox-modal, #arcade-chat-dock")||document.pointerLockElement!==e&&e.requestPointerLock&&e.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===e}),document.addEventListener("mousemove",t=>{if(!this.isPointerLocked||window.__arcadeOverlayOpen||this.overlay&&this.overlay.isOpen)return;const n=t.movementX||0,s=t.movementY||0;this.player.rotation-=n*.0032,this.player.targetRotation=this.player.rotation,this.camPitch=Math.max(-.2,Math.min(.35,(this.camPitch||0)-s*.0018))})}initChatDock(){const e=document.getElementById("arcade-chat-dock"),t=document.getElementById("arcade-chat-messages"),n=document.getElementById("arcade-chat-input"),s=document.getElementById("arcade-chat-send"),r=document.getElementById("mobile-chat-toggle");this.chatDock=e,this.chatMessagesEl=t,this.chatInput=n;const a=()=>{var h,d;if(!n)return;const o=n.value.trim();if(!o)return;n.value="";const c=((h=this.identity)==null?void 0:h.tag)||"VOCÊ",l=((d=this.identity)==null?void 0:d.colorHex)||"#00f5ff";this.player.showSpeechBubble(o),this.network&&this.network.broadcastChat(o),this.appendChatMessage(c,o,l,!0),n.blur()};s&&s.addEventListener("click",o=>{o.preventDefault(),a()}),n&&n.addEventListener("keydown",o=>{o.stopPropagation(),o.key==="Enter"?(o.preventDefault(),a()):o.key==="Escape"&&n.blur()}),r&&e&&r.addEventListener("click",()=>{e.classList.toggle("active"),e.classList.contains("active")&&n&&n.focus()}),window.addEventListener("keydown",o=>{var c;window.__arcadeOverlayOpen||document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA")||o.code==="KeyC"&&(o.preventDefault(),document.pointerLockElement&&((c=document.exitPointerLock)==null||c.call(document)),e&&e.classList.add("active"),n&&(n.focus(),n.select()))}),window.addEventListener("arcade-chat-received",o=>{const c=o.detail;c&&this.appendChatMessage(c.tag||"P2",c.text,c.colorHex||"#ff007f",!1)})}appendChatMessage(e,t,n,s=!1){if(!this.chatMessagesEl)return;const r=document.createElement("div");r.className=`chat-msg-row ${s?"msg-self":""}`;const a=document.createElement("span");a.className="chat-msg-tag",a.textContent=`[${e}]: `,a.style.color=n||"#00f5ff";const o=document.createElement("span");for(o.className="chat-msg-text",o.textContent=t,r.appendChild(a),r.appendChild(o),this.chatMessagesEl.appendChild(r);this.chatMessagesEl.children.length>25;)this.chatMessagesEl.removeChild(this.chatMessagesEl.firstChild);this.chatMessagesEl.scrollTop=this.chatMessagesEl.scrollHeight,this.chatDock&&(this.chatDock.classList.add("active"),clearTimeout(this._chatHideTimer),this._chatHideTimer=setTimeout(()=>{document.activeElement!==this.chatInput&&this.chatDock.classList.remove("active")},7e3))}setPlayerIdentity(e){this.identity=e,this.player&&this.player.setIdentity(e),this.network&&(this.network.identity=e,this.network.broadcastIdentity())}launchGame(e,t){var n;if(t&&t.isJukebox){this.openJukebox();return}document.pointerLockElement&&((n=document.exitPointerLock)==null||n.call(document)),this.spendToken(),this.isZoomingIn=!0,this.zoomTarget=t,this.zoomProgress=0,t&&t.setOccupiedBy(this.identity?this.identity.tag:"VOCÊ"),this.network&&(this.network.broadcastActivity(e.title||e.name),this.network.broadcastPlayingGame(e.id,!0)),setTimeout(()=>{this.overlay.open(e)},550)}teleportToCabinet(e){const t=this.world.cabinets.find(n=>n.game.id===e);t&&(this.player.clearNavigationTarget(),this.player.x=t.standSpot.x,this.player.z=t.standSpot.z,this.player.rotation=t.rotationY+Math.PI,this.player.targetRotation=this.player.rotation,this.interaction.update(this.player))}showDestinationPulse(e,t){this.destinationRing.position.set(e,.04,t),this.destinationRing.scale.set(.6,.6,.6),this.destinationRing.material.opacity=.9,this.destinationPulse=1}initTapToWalk(){let e=0,t=0,n=0;const s=o=>{e=performance.now(),t=o.clientX,n=o.clientY},r=o=>{const c=performance.now()-e,l=Math.abs(o.clientX-t),h=Math.abs(o.clientY-n);if(c>380||l>20||h>20||o.target.closest(".nopex-hud-header, .arcade-mobile-joystick, .arcade-mobile-dpad, .arcade-mobile-action-btn, .arcade-hologram-card, .arcade-game-overlay, .mobile-teleport-drawer"))return;const u=this.renderer.domElement.getBoundingClientRect(),f=(o.clientX-u.left)/u.width*2-1,g=-((o.clientY-u.top)/u.height)*2+1;this.raycaster.setFromCamera({x:f,y:g},this.camera);let _=null,m=1/0;for(const p of this.world.cabinets){const v=this.raycaster.intersectObjects(p.group.children,!0);v.length>0&&v[0].distance<m&&(m=v[0].distance,_=p)}if(_){this.showDestinationPulse(_.standSpot.x,_.standSpot.z),this.player.setNavigationTarget(_.standSpot.x,_.standSpot.z,()=>{this.interaction.update(this.player)});return}if(this.world.floorMesh){const p=this.raycaster.intersectObject(this.world.floorMesh);if(p.length>0){const v=p[0].point,M=this.world.roomBounds,E=Math.max(M.minX+.5,Math.min(M.maxX-.5,v.x)),S=Math.max(M.minZ+.5,Math.min(M.maxZ-.5,v.z));this.showDestinationPulse(E,S),this.player.setNavigationTarget(E,S,()=>{this.interaction.update(this.player)})}}},a=this.renderer.domElement;a.addEventListener("pointerdown",s),a.addEventListener("pointerup",r)}initMobileControls(){("ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches)&&document.body.classList.add("touch-device");const t=document.getElementById("arcade-joystick"),n=document.getElementById("joystick-thumb");if(!t||!n)return;let s=null,r=0,a=0;const o=45,c=t.querySelector(".arrow-up"),l=t.querySelector(".arrow-down"),h=t.querySelector(".arrow-left"),d=t.querySelector(".arrow-right"),u=(p,v)=>{c&&c.classList.toggle("active",v<-12),l&&l.classList.toggle("active",v>12),h&&h.classList.toggle("active",p<-12),d&&d.classList.toggle("active",p>12)},f=p=>{if(!(this.overlay&&this.overlay.isOpen))for(let v=0;v<p.changedTouches.length;v++){const M=p.changedTouches[v],E=t.getBoundingClientRect(),S=M.clientX>=E.left&&M.clientX<=E.right&&M.clientY>=E.top&&M.clientY<=E.bottom,w=M.clientX<=window.innerWidth*.55&&M.clientY>=window.innerHeight*.4;if(s===null&&(S||w)){if(M.target&&M.target.closest&&M.target.closest(".nopex-hud-header, .mobile-teleport-drawer, .arcade-mobile-action-btn, #arcade-game-overlay"))continue;p.preventDefault(),s=M.identifier,S?(r=E.left+E.width/2,a=E.top+E.height/2):(r=M.clientX,a=M.clientY,t.style.left=`${Math.max(12,Math.min(window.innerWidth-130,r-E.width/2))}px`,t.style.bottom=`${Math.max(12,Math.min(window.innerHeight-130,window.innerHeight-a-E.height/2))}px`),t.classList.add("active"),this.player.clearNavigationTarget();break}}},g=p=>{if(s!==null)for(let v=0;v<p.changedTouches.length;v++){const M=p.changedTouches[v];if(M.identifier===s){p.preventDefault();let E=M.clientX-r,S=M.clientY-a;const w=Math.hypot(E,S);w>o&&(E=E/w*o,S=S/w*o),n.style.transform=`translate(${E}px, ${S}px)`,u(E,S),this.player.setJoystickVector(E/o,S/o);break}}},_=p=>{for(let v=0;v<p.changedTouches.length;v++)if(p.changedTouches[v].identifier===s){s=null,n.style.transform="translate(0px, 0px)",t.classList.remove("active"),u(0,0),this.player.setJoystickVector(0,0);break}};window.addEventListener("touchstart",f,{passive:!1}),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",_),window.addEventListener("touchcancel",_),[{id:"dpad-up",vx:0,vy:-1},{id:"dpad-down",vx:0,vy:1},{id:"dpad-left",vx:-1,vy:0},{id:"dpad-right",vx:1,vy:0}].forEach(({id:p,vx:v,vy:M})=>{const E=document.getElementById(p);if(!E)return;const S=C=>{C.preventDefault(),this.player.clearNavigationTarget(),this.player.setJoystickVector(v,M),E.classList.add("pressed")},w=C=>{C.preventDefault(),this.player.setJoystickVector(0,0),E.classList.remove("pressed")};E.addEventListener("pointerdown",S),E.addEventListener("pointerup",w),E.addEventListener("pointerleave",w),E.addEventListener("pointercancel",w)})}onResize(){if(!this.container||!this.renderer||!this.camera)return;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25))}start(){this.isRunning||(this.isRunning=!0,this.clock.start(),this.onResize(),this.animate())}stop(){this.isRunning=!1}animate(){if(!this.isRunning)return;requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.1);if(this.overlay&&this.overlay.isOpen){this.network&&this.network.update(e,this.camera);return}const t=this.clock.getElapsedTime();if(this.world.update(t,this.player),this.destinationPulse>0){this.destinationPulse-=e*1.6;const n=.6+(1-Math.max(0,this.destinationPulse))*.9;this.destinationRing.scale.set(n,n,n),this.destinationRing.material.opacity=Math.max(0,this.destinationPulse)*.9,this.destinationPulse<=0&&(this.destinationRing.material.opacity=0)}if(this.player.update(e,this.world.roomBounds,this.world.cabinets,this.camera),this.interaction.update(this.player),this.network&&(this.network.broadcastLocalPosition(this.player.x,this.player.z,this.player.rotation,this.player.isMoving,this.player.y),this.network.update(e,this.camera)),this.isZoomingIn&&this.zoomTarget){const n=this.zoomTarget,s=n.rotationY,r=n.position.x+Math.sin(s)*.51,a=2.15,o=n.position.z+Math.cos(s)*.51,c=new W(r,a,o),l=Math.sin(s)*.975,h=.22,d=Math.cos(s)*.975,u=new W(r+l*1.35,a+h*1.35,o+d*1.35);this.camera.position.lerp(u,.16),this.camera.lookAt(c)}else{const n=this.camPitch||0,s=this.player.x,r=4+n*2.2,a=Math.min(26,this.player.z+6.2);this.camera.position.x+=(s-this.camera.position.x)*.14,this.camera.position.y+=(r-this.camera.position.y)*.14,this.camera.position.z+=(a-this.camera.position.z)*.14,this.camLookTarget||(this.camLookTarget=new W(this.player.x,1.4,this.player.z-1.2)),this.camLookTarget.x+=(this.player.x-this.camLookTarget.x)*.14,this.camLookTarget.y=1.4+n*3.5,this.camLookTarget.z+=(this.player.z-1.2-this.camLookTarget.z)*.14,this.camera.lookAt(this.camLookTarget)}this.renderer.render(this.scene,this.camera)}}const Ga=[{name:"Cyan",hex:"#00f5ff",num:62975,accent:"#ffffff"},{name:"Magenta",hex:"#ff007f",num:16711807,accent:"#00f5ff"},{name:"Ouro",hex:"#ffd32a",num:16765738,accent:"#ff3838"},{name:"Esmeralda",hex:"#00ff88",num:65416,accent:"#00ffff"},{name:"Roxo",hex:"#a55eea",num:10837738,accent:"#ffd32a"},{name:"Rubi",hex:"#ff3838",num:16726072,accent:"#ffd32a"}];class Rv{constructor(e){this.onReady=e,this.tag=localStorage.getItem("ARCADE_MP_TAG")||"MARC1",this.colorHex=localStorage.getItem("ARCADE_MP_COLOR")||"#00f5ff",this.modalEl=null,this.createModal(),this.tag&&this.tag.length>=2?setTimeout(()=>{this.onReady&&this.onReady(this.getIdentity())},100):this.showModal()}getIdentity(){const e=Ga.find(t=>t.hex.toLowerCase()===this.colorHex.toLowerCase())||Ga[0];return{tag:(this.tag||"MARC1").slice(0,5).toUpperCase(),color:e.num,colorHex:e.hex,accent:e.accent}}createModal(){const e=document.getElementById("mp-identity-modal");e&&e.remove();const t=document.createElement("div");t.id="mp-identity-modal",t.style.cssText=`
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
    `;const n=document.createElement("div");n.style.cssText=`
      background: linear-gradient(145deg, #101222, #070811);
      border: 2px solid #00f5ff;
      border-radius: 16px;
      padding: 24px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 0 35px rgba(0, 245, 255, 0.4), inset 0 0 20px rgba(0, 245, 255, 0.1);
      text-align: center;
      color: #fff;
    `,n.innerHTML=`
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
          ${Ga.map(c=>`
            <div class="color-swatch" data-hex="${c.hex}" title="${c.name}" style="
              height: 36px;
              background: ${c.hex};
              border-radius: 8px;
              cursor: pointer;
              border: 3px solid ${c.hex.toLowerCase()===this.colorHex.toLowerCase()?"#fff":"transparent"};
              box-shadow: ${c.hex.toLowerCase()===this.colorHex.toLowerCase()?"0 0 12px "+c.hex:"none"};
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
    `,t.appendChild(n),document.body.appendChild(t),this.modalEl=t;const s=n.querySelector("#mp-tag-input");s.addEventListener("input",c=>{s.value=s.value.replace(/[^a-zA-Z0-9]/g,"").slice(0,5).toUpperCase()});const r=n.querySelectorAll(".color-swatch");r.forEach(c=>{c.addEventListener("click",()=>{this.colorHex=c.getAttribute("data-hex"),r.forEach(l=>{const h=l.getAttribute("data-hex")===this.colorHex;l.style.border=h?"3px solid #fff":"transparent",l.style.boxShadow=h?"0 0 12px "+this.colorHex:"none"})})});const a=n.querySelector("#mp-modal-err");n.querySelector("#mp-enter-btn").addEventListener("click",()=>{const c=s.value.trim().toUpperCase();if(!c||c.length<2){a&&(a.textContent="⚠️ Digite uma TAG com pelo menos 2 letras!",a.style.display="block"),s.focus();return}a&&(a.style.display="none"),this.tag=c,localStorage.setItem("ARCADE_MP_TAG",this.tag),localStorage.setItem("ARCADE_MP_COLOR",this.colorHex),this.hideModal(),this.onReady&&this.onReady(this.getIdentity())}),window.addEventListener("keydown",c=>{c.key==="Escape"&&this.modalEl&&this.modalEl.style.display==="flex"&&this.tag&&this.tag.length>=2&&this.hideModal()})}showModal(){this.modalEl&&(this.modalEl.style.display="flex")}hideModal(){this.modalEl&&(this.modalEl.style.display="none")}}const Cv="https://gist.githubusercontent.com/marcuscaiado/a238a8db5b064579413c7a54aba6c840/raw/marcus-arcade-leaderboard.json";function Jl(){const i=document.getElementById("arcade-3d-canvas-container"),e=document.getElementById("webgl-error");if(!i){console.error("Missing #arcade-3d-canvas-container");return}let t=null;const n=new Rv(d=>{if(t)t.setPlayerIdentity(d);else try{t=new Av(i,js,d),t.start(),window.__ARCADE_ENGINE__=t,window.__MUSIC_MANAGER__=We;const u=()=>{We.unlockAndPlay()};window.addEventListener("pointerdown",u,{once:!0}),window.addEventListener("keydown",u,{once:!0}),window.addEventListener("touchstart",u,{once:!0}),u()}catch(u){console.error("Fatal WebGL / Three.js Initialization Error:",u),e&&(e.style.display="block",e.textContent="Erro ao inicializar 3D: "+u.message)}}),s=document.getElementById("arcade-tag-btn");if(s&&s.addEventListener("click",d=>{d.stopPropagation(),n.showModal()}),window.addEventListener("keydown",d=>{if(!(d.target&&(d.target.tagName==="INPUT"||d.target.tagName==="TEXTAREA"||d.target.tagName==="SELECT"))){if(d.code==="KeyT"&&!d.ctrlKey&&!d.altKey&&!d.metaKey){const u=document.getElementById("arcade-game-overlay");(!u||u.style.display==="none")&&n.showModal()}if(d.code==="KeyJ"&&!d.ctrlKey&&!d.altKey&&!d.metaKey){const u=document.getElementById("arcade-game-overlay");(!u||u.style.display==="none")&&t&&t.jukeboxModal&&t.jukeboxModal.open()}}}),window.ArcadeLeaderboard&&window.ArcadeLeaderboard.submitScore){const d=window.ArcadeLeaderboard.submitScore.bind(window.ArcadeLeaderboard);window.ArcadeLeaderboard.submitScore=function(u,f){const g=d(u,f);if(window.__ARCADE_NETWORK__){const _=js.find(p=>p.id===u),m=_?_.title:u;window.__ARCADE_NETWORK__.broadcastHighScore(m,f)}return g}}window.addEventListener("message",d=>{if(d.data&&(d.data.type==="ARCADE_SCORE"||d.data.type==="GAME_SCORE")&&d.data.score&&window.__ARCADE_NETWORK__){const u=js.find(g=>g.id===d.data.gameId),f=u&&u.title||d.data.gameTitle||"Arcade Game";window.__ARCADE_NETWORK__.broadcastHighScore(f,Number(d.data.score))}});const r=document.getElementById("teleport-select");r&&r.addEventListener("change",d=>{const u=d.target.value;u&&t&&(Ha(()=>Promise.resolve().then(()=>Bo),void 0,import.meta.url).then(f=>f.playDopamineChime()),t.teleportToCabinet(u),r.blur())});const a=document.getElementById("arcade-ctrl-toggle"),o=document.getElementById("arcade-joystick"),c=document.getElementById("arcade-dpad");let l="joystick";a&&o&&c&&a.addEventListener("click",d=>{d.stopPropagation(),l==="joystick"?(l="dpad",o.style.display="none",c.style.display="flex",a.innerHTML="<span>🕹️ JOYSTICK</span>"):(l="joystick",o.style.display="block",c.style.display="none",a.innerHTML="<span>🎮 D-PAD</span>")});async function h(){window.__ARCADE_LEADERBOARDS__=window.__ARCADE_LEADERBOARDS__||{};try{const d=await fetch(`${Cv}?_t=${Date.now()}`);if(d.ok){const u=await d.json();js.forEach(f=>{let g=[];try{g=JSON.parse(localStorage.getItem(`arcade_lb_${f.id}`)||"[]")}catch{}const m=[...u[f.id]||[],...g].filter(v=>v&&v.name&&v.score);m.sort((v,M)=>M.score-v.score);const p=m[0];p&&(window.__ARCADE_LEADERBOARDS__[f.id]={topScore:p.score,topPilot:String(p.name).replace(/[^a-zA-Z0-9]/g,"").toUpperCase().substring(0,3)||"MRC"})})}}catch(d){console.warn("Could not sync cloud records:",d)}}h()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Jl):Jl();
