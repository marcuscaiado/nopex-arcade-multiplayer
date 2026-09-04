var Du=Object.defineProperty;var Iu=(n,e,t)=>e in n?Du(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var It=(n,e,t)=>Iu(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Uu="modulepreload",Nu=function(n,e){return new URL(n,e).href},yc={},Kl=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=a(t.map(h=>{if(h=Nu(h,i),h in yc)return;yc[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const m=o[_];if(m.href===h&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":Uu,d||(g.as="script"),g.crossOrigin="",g.href=h,l&&g.setAttribute("nonce",l),document.head.appendChild(g),d)return new Promise((_,m)=>{g.addEventListener("load",_),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},qr=JSON.parse(`[{"id":"neon-orbit-drift","name":"Neon Orbit Drift","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-orbit-drift/","description":"One-tap gravitational slingshot runner with harmonic chords & orbital drift physics.","tech":["Canvas 2D","Web Audio Synth","Physics"],"badgeClass":"btn-orbit"},{"id":"cyber-pinball-fx","name":"Cyber Pinball FX","icon":"⚡","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pinball-fx/","description":"High-speed neon arcade pinball table with multi-bumpers, chime feedback & dual flippers.","tech":["Canvas 2D","Bumper Physics","Audio FX"],"badgeClass":"btn-pinball"},{"id":"neon-katana-slash","name":"Neon Katana Slash (Fruit Ninja)","icon":"🍉","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/neon-katana-slash/","description":"Super juicy Fruit Ninja blade slicer! Swipe glowing blade trails to slice flying fruits and build massive combos.","tech":["Canvas 2D","Swipe Slicer","Fruit Combos"],"badgeClass":"btn-katana"},{"id":"cute-mini-golf","name":"Cute Mini Golf 3D","icon":"⛳","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cute-mini-golf/","description":"Nintendo-style mini golf with 3 kawaii golfers, 3D animated putters & authentic cup suction.","tech":["Three.js 3D","Cannon-es","Web Audio"],"badgeClass":"btn-golf"},{"id":"kawaii-8ball-pool","name":"Kawaii 8-Ball Pool","icon":"🎱","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/kawaii-8ball-pool/","description":"Super cute 8-ball pool where every ball has an animated kawaii face with squish physics.","tech":["Canvas 2D","2-Player","Squish Physics"],"badgeClass":"btn-pool"},{"id":"stickman-fps-arcade","name":"Stickman FPS Arcade","icon":"🔫","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/stickman-fps-arcade/","description":"Retro stationary bunker shooter with 5 weapons, shop upgrades and wave defense.","tech":["Canvas 2D","Shop Upgrades","Web Audio"],"badgeClass":"btn-fps"},{"id":"geometricsurvivor","name":"Geometric Survivor 3D","icon":"⚔️","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/geometricsurvivor/","description":"Megabonk-style 3D cartoon survivor on a floating island! 3 heroes (Sir Bonk, Pippin & Sparky), healing hearts, invincibility & speed buffs.","tech":["Three.js 3D","3 Heroes","Vampire Upgrades"],"badgeClass":"btn-geo"},{"id":"neon-drift-racer","name":"Neon Drift Racer","icon":"🏎️","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drift-racer/","description":"High-speed synthwave pseudo-3D highway racer with nitro boost and touch controls.","tech":["Canvas 3D Projection","Nitro System","Retro"],"badgeClass":"btn-racer"},{"id":"cyber-pong-3d","name":"Kawaii Table Tennis 3D","icon":"🏓","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-pong-3d/","description":"Super cute 3D table tennis with Kawaii eye paddles, generous hitboxes, 1-to-1 mouse controls, bouncy ball physics & sweet audio FX.","tech":["Three.js 3D","Paddle Physics","Cute Audio"],"badgeClass":"btn-pong"},{"id":"neon-viper","name":"Neon Viper 3D","icon":"🐍","category":"arcade","unit":"MASS","url":"https://marcuscaiado.github.io/neon-viper/","description":"3D Snake.io cyber arena with 8 3D skins, 10+ smart AI bots, radar minimap, nitro boost & safe body coiling.","tech":["Three.js 3D","Snake.io Physics","8 Skins"],"badgeClass":"btn-viper"},{"id":"brick-breaker-fx","name":"Brick Breaker FX","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/brick-breaker-fx/","description":"Juice-packed neon breakout arcade game with multi-ball power-ups, paddle expansion & shatter physics.","tech":["Canvas 2D","Multi-Ball","Power-Ups"],"badgeClass":"btn-brick"},{"id":"sky-ace-1944","name":"Sky Ace 1944","icon":"🛩️","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/sky-ace-1944/","description":"Vertical retro WWII bullet-hell shooter with mega bombs, shields & quad spread.","tech":["Canvas 2D","Bullet Patterns","Boss Battles"],"badgeClass":"btn-sky"},{"id":"neon-drop-2048","name":"Neon Drop 2048","icon":"🧩","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-drop-2048/","description":"Physics merge puzzle with glowing bouncy 2048 balls and satisfying pop chain reactions.","tech":["Canvas 2D","Circle Physics","Suika Merge"],"badgeClass":"btn-drop"},{"id":"asteroid-blitz","name":"Asteroid Blitz","icon":"🛸","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/asteroid-blitz/","description":"Classic vector space shooter with inertia physics, hyperspace warp & splitting rocks.","tech":["Canvas 2D Vector","Inertia Physics","Retro"],"badgeClass":"btn-asteroid"},{"id":"neon-tetris-3d","name":"Neon Cyber Tetris 3D","icon":"🧱","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-tetris-3d/","description":"Tetris Effect-style 3D falling tetrominoes in a holographic cyber matrix with laser line clears and popping glowing graphics.","tech":["Three.js 3D","Ghost Projection","Synth Audio","SRS Rotation"],"badgeClass":"btn-tetris"},{"id":"neon-archery-master","name":"Neon Archery Master","icon":"🎯","category":"sports","unit":"PTS","url":"https://marcuscaiado.github.io/neon-archery-master/","description":"Precision bow archery with trajectory prediction, crosswinds & holographic targets.","tech":["Canvas 2D","Ballistics Math","Wind Physics"],"badgeClass":"btn-archery"},{"id":"neon-stack-3d","name":"Neon Stack Harmony 3D","icon":"🌌","category":"arcade","unit":"SLABS","url":"https://marcuscaiado.github.io/neon-stack-3d/","description":"3D block slicing tower stacking with soothing pentatonic synth chords.","tech":["Three.js 3D","Web Audio","Slicing Math"],"badgeClass":"btn-stack"},{"id":"neon-pachinko-pop","name":"Neon Pachinko Pop","icon":"🔮","category":"arcade","unit":"PTS","url":"https://marcuscaiado.github.io/neon-pachinko-pop/","description":"Peggle-style bouncy pachinko drop with jackpot buckets and neon bumpers.","tech":["Canvas 2D","Peg Physics","Jackpot Zones"],"badgeClass":"btn-pachinko"},{"id":"cyber-runner-3d","name":"Cyber Runner 3D","icon":"🏃","category":"retro","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-runner-3d/","description":"Fast-paced synthwave 3-lane obstacle runner with jump mechanics and power-ups.","tech":["Canvas 3D","Perspective Math","Endless"],"badgeClass":"btn-runner"},{"id":"cyber-shuriken","name":"Cyber Shuriken Neo","icon":"🎯","category":"action","unit":"PTS","url":"https://marcuscaiado.github.io/cyber-shuriken/","description":"Rhythmic knife throwing into rotating boss matrices with harmonic chimes.","tech":["Canvas 2D","Rotational Math","Boss Waves"],"badgeClass":"btn-shuriken"},{"id":"flappy-cyber-droid","name":"Flappy Cyber Droid","icon":"🐦","category":"arcade","unit":"GATES","url":"https://marcuscaiado.github.io/flappy-cyber-droid/","description":"Addictive neon flapper arcade game featuring a hovering cyber-droid, laser gates & energy crystals.","tech":["Canvas 2D","One-Tap Flap","Laser Gates"],"badgeClass":"btn-droid"},{"id":"street-fighter-2","name":"Street Fighter II Turbo","icon":"🥊","category":"action","unit":"WINS","url":"https://marcuscaiado.github.io/street-fighter-2/","description":"Authentic Capcom arcade fighting! All 12 fighters, Turbo speed modes, Hadoukens, Shoryukens, and 60 FPS WebAssembly emulation.","tech":["WASM EmulatorJS","12 Fighters","Turbo Mode"],"badgeClass":"btn-fighter"},{"id":"super-mario","name":"Super Mario World","icon":"🍄","category":"retro","unit":"EXITS","url":"https://marcuscaiado.github.io/super-mario/","description":"The legendary Super Nintendo masterpiece! Ride Yoshi, soar with the magic cape, explore Dinosaur Land, and run in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Yoshi & Cape","96 Exits"],"badgeClass":"btn-mario"},{"id":"super-bomberman","name":"Super Bomberman","icon":"💣","category":"retro","unit":"WINS","url":"https://marcuscaiado.github.io/super-bomberman/","description":"The ultimate explosive party battle! Drop bombs, collect powerups, blast soft blocks, and battle across arenas in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Hudson Soft","Arena Battle"],"badgeClass":"btn-bomberman"},{"id":"gta-2","name":"Grand Theft Auto 2","icon":"🚗","category":"action","unit":"RESPECT","url":"https://marcuscaiado.github.io/gta-2/","description":"Rockstar's legendary top-down crime epic! Steal cars, outrun police, answer payphones, and rule the city in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","Rockstar Games","Open World"],"badgeClass":"btn-gta"},{"id":"classic-doom","name":"Classic DOOM","icon":"🔥","category":"action","unit":"KILLS","url":"https://marcuscaiado.github.io/classic-doom/","description":"The father of FPS! Rip and tear through phobos base with shotgun, chainsaw, rocket launcher and BFG9000 in 60 FPS WebAssembly.","tech":["WASM EmulatorJS","id Software","FPS 60 FPS"],"badgeClass":"btn-doom"},{"id":"classic-pacman","name":"Pac-Man (1980 Classic Arcade)","icon":"🟡","category":"retro","unit":"PTS","url":"games/pacman/index.html","description":"The immortal 1980 Namco arcade classic! Chomp dots, dodge Blinky, Pinky, Inky & Clyde, grab Power Pellets and rack up high scores.","tech":["Canvas 2D","Namco 1980","Authentic Sound"],"badgeClass":"btn-pacman"},{"id":"sonic1","name":"Sonic The Hedgehog","icon":"🦔","category":"retro","unit":"RINGS","url":"games/sonic1/index.html","description":"Sega's supersonic blue blur! Blast through Green Hill Zone, collect gold rings and defeat Dr. Robotnik in 60 FPS WebAssembly.","tech":["WASM Sega Genesis","Sonic Team","60 FPS"],"badgeClass":"btn-sonic"},{"id":"sonic2","name":"Sonic The Hedgehog 2","icon":"🦊","category":"retro","unit":"RINGS","url":"games/sonic2/index.html","description":"The peak of 16-bit speed! Introducing Tails, the legendary Spin Dash Turbo, Chemical Plant Zone, and Super Sonic.","tech":["WASM Sega Genesis","Spin Dash","Sonic & Tails"],"badgeClass":"btn-sonic2"},{"id":"fzero","name":"F-Zero","icon":"🏎️","category":"retro","unit":"PTS","url":"games/fzero/index.html","description":"Nintendo's groundbreaking 1990 futuristic 400+ km/h Mode-7 hovercraft racer with Captain Falcon & the Blue Falcon.","tech":["WASM SNES Mode-7","Nintendo EAD","60 FPS"],"badgeClass":"btn-fzero"},{"id":"mk2","name":"Mortal Kombat II","icon":"🐉","category":"action","unit":"WINS","url":"games/mk2/index.html","description":"Midway's legendary arcade fighting sensation! Scorpion, Sub-Zero, Liu Kang, Shang Tsung, brutal Fatalities & Babalities.","tech":["WASM Sega Genesis","Midway Arcade","Fatalities"],"badgeClass":"btn-mk2"},{"id":"megaman2","name":"Mega Man 2","icon":"🤖","category":"retro","unit":"BOSSES","url":"games/megaman2/index.html","description":"Capcom's 8-bit platforming masterpiece! 8 Robot Masters, Metal Blade, Dr. Wily's Castle and the greatest NES soundtrack ever.","tech":["WASM NES","Capcom 1988","Chiptune Classic"],"badgeClass":"btn-megaman"},{"id":"outrun","name":"OutRun","icon":"🌴","category":"retro","unit":"CHECKPOINTS","url":"games/outrun/index.html","description":"Yu Suzuki's ultimate arcade driving fantasy! Cruise in the red Ferrari Testarossa with Magical Sound Shower on the radio.","tech":["WASM Sega Genesis","Yu Suzuki","Synthwave Classic"],"badgeClass":"btn-outrun"},{"id":"sor2","name":"Streets of Rage 2","icon":"💥","category":"action","unit":"KO","url":"games/sor2/index.html","description":"The crowned king of 90s beat-'em-ups! Axel, Blaze, Skate and Max brawl to Yuzo Koshiro's ground-shaking club house soundtrack.","tech":["WASM Sega Genesis","Yuzo Koshiro","4 Brawlers"],"badgeClass":"btn-sor2"},{"id":"topgear","name":"Top Gear","icon":"🏁","category":"retro","unit":"PTS","url":"games/topgear/index.html","description":"The sacred arcade racing holy grail! Hit the Nitro boost, screech around hairpin turns and blast Barry Leitch's immortal chiptune beats.","tech":["WASM SNES","Gremlin Graphics","Nitro Turbo"],"badgeClass":"btn-topgear"},{"id":"castlevania4","name":"Super Castlevania IV","icon":"🦇","category":"action","unit":"HEARTS","url":"games/castlevania4/index.html","description":"Konami's gothic 16-bit tour de force! 8-way directional whip swinging, rotating rooms, Mode-7 chandeliers and Dracula's legions.","tech":["WASM SNES","Konami 1991","8-Way Whip"],"badgeClass":"btn-castlevania"},{"id":"mslug","name":"Metal Slug (1996)","icon":"💥","category":"action","unit":"PTS","url":"games/mslug/index.html","description":"The immortal SNK Neo-Geo arcade run-and-gun! Blast General Morden's rebel forces with SV-001 tank, heavy machine gun, rocket launcher and rescue POWs.","tech":["WASM Neo-Geo","SNK Arcade","SV-001 Tank"],"badgeClass":"btn-mslug"},{"id":"mslugx","name":"Metal Slug X","icon":"💣","category":"action","unit":"PTS","url":"games/mslugx/index.html","description":"The super-upgraded Neo-Geo definitive edition! Laser guns, Iron Lizard, Super Grenades, alien invaders, mummies, and zero slowdowns at silky 60 FPS.","tech":["WASM Neo-Geo","SNK Arcade","Definitive Edition"],"badgeClass":"btn-mslugx"}]`);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ho="182",Fu=0,Sc=1,Ou=2,xs=1,ku=2,yr=3,Nn=0,zt=1,At=2,Dn=0,Xi=1,Mc=2,bc=3,Ec=4,Bu=5,ui=100,zu=101,Gu=102,Hu=103,Vu=104,Wu=200,Xu=201,qu=202,Yu=203,za=204,Ga=205,ju=206,$u=207,Ku=208,Zu=209,Ju=210,Qu=211,eh=212,th=213,nh=214,Ha=0,Va=1,Wa=2,ji=3,Xa=4,qa=5,Ya=6,ja=7,Zl=0,ih=1,rh=2,vn=0,Jl=1,Ql=2,ed=3,td=4,nd=5,id=6,rd=7,sd=300,xi=301,$i=302,$a=303,Ka=304,Us=306,Ar=1e3,Ln=1001,Za=1002,Rt=1003,sh=1004,Yr=1005,St=1006,qs=1007,fi=1008,qt=1009,ad=1010,od=1011,Rr=1012,Vo=1013,Sn=1014,gn=1015,Fn=1016,Wo=1017,Xo=1018,Cr=1020,cd=35902,ld=35899,dd=1021,ud=1022,on=1023,On=1026,pi=1027,hd=1028,qo=1029,Ki=1030,Yo=1031,jo=1033,vs=33776,ys=33777,Ss=33778,Ms=33779,Ja=35840,Qa=35841,eo=35842,to=35843,no=36196,io=37492,ro=37496,so=37488,ao=37489,oo=37490,co=37491,lo=37808,uo=37809,ho=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,xo=37816,vo=37817,yo=37818,So=37819,Mo=37820,bo=37821,Eo=36492,To=36494,wo=36495,Ao=36283,Ro=36284,Co=36285,Po=36286,ah=3200,fd=0,oh=1,Yn="",Zt="srgb",Zi="srgb-linear",ws="linear",st="srgb",Ei=7680,Tc=519,ch=512,lh=513,dh=514,$o=515,uh=516,hh=517,Ko=518,fh=519,Lo=35044,wc="300 es",_n=2e3,As=2001;function pd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ph(){const n=Rs("canvas");return n.style.display="block",n}const Ac={};function Cs(...n){const e="THREE."+n.shift();console.log(e,...n)}function Be(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Ze(...n){const e="THREE."+n.shift();console.error(e,...n)}function Pr(...n){const e=n.join(" ");e in Ac||(Ac[e]=!0,Be(...n))}function mh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,Do=180/Math.PI;function Kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function gh(n,e){return(n%e+e)%e}function js(n,e,t){return(1-t)*n+t*e}function mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],d=i[r+3],u=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o>=1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=c*u+l*p+h*g+d*_;m<0&&(u=-u,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){const v=Math.acos(m),b=Math.sin(v);f=Math.sin(f*v)/b,o=Math.sin(o*v)/b,c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+_*o}else{c=c*f+u*o,l=l*f+p*o,h=h*f+g*o,d=d*f+_*o;const v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*d+c*p-l*u,e[t+1]=c*g+h*u+l*d-o*p,e[t+2]=l*g+h*p+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),d=o(s/2),u=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $s.copy(this).projectOnVector(e),this.sub($s)}reflect(e){return this.sub($s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new W,Rc=new Br;class Ge{constructor(e,t,i,r,s,a,o,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],v=r[1],b=r[4],E=r[7],S=r[2],w=r[5],C=r[8];return s[0]=a*_+o*v+c*S,s[3]=a*m+o*b+c*w,s[6]=a*f+o*E+c*C,s[1]=l*_+h*v+d*S,s[4]=l*m+h*b+d*w,s[7]=l*f+h*E+d*C,s[2]=u*_+p*v+g*S,s[5]=u*m+p*b+g*w,s[8]=u*f+p*E+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,g=t*d+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=u*_,e[4]=(h*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ks.makeScale(e,t)),this}rotate(e){return this.premultiply(Ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new Ge,Cc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _h(){const n={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=In(r.r),r.g=In(r.g),r.b=In(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?ws:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zi]:{primaries:e,whitePoint:i,transfer:ws,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}const Qe=_h();function In(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ti;class xh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ti===void 0&&(Ti=Rs("canvas")),Ti.width=e.width,Ti.height=e.height;const r=Ti.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ti}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=In(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(In(t[i]/255)*255):t[i]=In(t[i]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vh=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zs(r[a].image)):s.push(Zs(r[a]))}else s=Zs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Zs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let yh=0;const Js=new W;class Lt extends nr{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Ln,r=Ln,s=St,a=fi,o=on,c=qt,l=Lt.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Kn(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Js).x}get height(){return this.source.getSize(Js).y}get depth(){return this.source.getSize(Js).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=sd;Lt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,E=(p+1)/2,S=(f+1)/2,w=(h+u)/4,C=(d+_)/4,P=(g+m)/4;return b>E&&b>S?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=w/i,s=C/i):E>S?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=P/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=C/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sh extends nr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Lt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Sh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class md extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mh extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,rn):rn.fromBufferAttribute(s,a),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),$r.subVectors(this.max,or),wi.subVectors(e.a,or),Ai.subVectors(e.b,or),Ri.subVectors(e.c,or),zn.subVectors(Ai,wi),Gn.subVectors(Ri,Ai),ii.subVectors(wi,Ri);let t=[0,-zn.z,zn.y,0,-Gn.z,Gn.y,0,-ii.z,ii.y,zn.z,0,-zn.x,Gn.z,0,-Gn.x,ii.z,0,-ii.x,-zn.y,zn.x,0,-Gn.y,Gn.x,0,-ii.y,ii.x,0];return!Qs(t,wi,Ai,Ri,$r)||(t=[1,0,0,0,1,0,0,0,1],!Qs(t,wi,Ai,Ri,$r))?!1:(Kr.crossVectors(zn,Gn),t=[Kr.x,Kr.y,Kr.z],Qs(t,wi,Ai,Ri,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tn=[new W,new W,new W,new W,new W,new W,new W,new W],rn=new W,jr=new zr,wi=new W,Ai=new W,Ri=new W,zn=new W,Gn=new W,ii=new W,or=new W,$r=new W,Kr=new W,ri=new W;function Qs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ri.fromArray(n,s);const o=r.x*Math.abs(ri.x)+r.y*Math.abs(ri.y)+r.z*Math.abs(ri.z),c=e.dot(ri),l=t.dot(ri),h=i.dot(ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const bh=new zr,cr=new W,ea=new W;class Jo{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(cr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(ea)),this.expandByPoint(cr.copy(e.center).sub(ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wn=new W,ta=new W,Zr=new W,Hn=new W,na=new W,Jr=new W,ia=new W;class gd{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ta.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(ta);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Hn.dot(this.direction),c=-Hn.dot(Zr),l=Hn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ta).addScaledVector(Zr,u),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),r=wn.dot(wn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,r,s){na.subVectors(t,e),Jr.subVectors(i,e),ia.crossVectors(na,Jr);let a=this.direction.dot(ia),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);const c=o*this.direction.dot(Jr.crossVectors(Hn,Jr));if(c<0)return null;const l=o*this.direction.dot(na.cross(Hn));if(l<0||c+l>a)return null;const h=-o*Hn.dot(ia);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,a,o,c,l,h,d,u,p,g,_,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,d,u,p,g,_,m)}set(e,t,i,r,s,a,o,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;t[0]=u+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=g*l-p,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eh,e,Th)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Vn.crossVectors(i,Vt),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Vn.crossVectors(i,Vt)),Vn.normalize(),Qr.crossVectors(Vt,Vn),r[0]=Vn.x,r[4]=Qr.x,r[8]=Vt.x,r[1]=Vn.y,r[5]=Qr.y,r[9]=Vt.y,r[2]=Vn.z,r[6]=Qr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],b=i[7],E=i[11],S=i[15],w=r[0],C=r[4],P=r[8],y=r[12],T=r[1],D=r[5],z=r[9],B=r[13],A=r[2],L=r[6],I=r[10],N=r[14],V=r[3],Q=r[7],ee=r[11],U=r[15];return s[0]=a*w+o*T+c*A+l*V,s[4]=a*C+o*D+c*L+l*Q,s[8]=a*P+o*z+c*I+l*ee,s[12]=a*y+o*B+c*N+l*U,s[1]=h*w+d*T+u*A+p*V,s[5]=h*C+d*D+u*L+p*Q,s[9]=h*P+d*z+u*I+p*ee,s[13]=h*y+d*B+u*N+p*U,s[2]=g*w+_*T+m*A+f*V,s[6]=g*C+_*D+m*L+f*Q,s[10]=g*P+_*z+m*I+f*ee,s[14]=g*y+_*B+m*N+f*U,s[3]=v*w+b*T+E*A+S*V,s[7]=v*C+b*D+E*L+S*Q,s[11]=v*P+b*z+E*I+S*ee,s[15]=v*y+b*B+E*N+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15],v=c*p-l*u,b=o*p-l*d,E=o*u-c*d,S=a*p-l*h,w=a*u-c*h,C=a*d-o*h;return t*(_*v-m*b+f*E)-i*(g*v-m*S+f*w)+r*(g*b-_*S+f*C)-s*(g*E-_*w+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=d*m*l-_*u*l+_*c*p-o*m*p-d*c*f+o*u*f,b=g*u*l-h*m*l-g*c*p+a*m*p+h*c*f-a*u*f,E=h*_*l-g*d*l+g*o*p-a*_*p-h*o*f+a*d*f,S=g*d*c-h*_*c-g*o*u+a*_*u+h*o*m-a*d*m,w=t*v+i*b+r*E+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=v*C,e[1]=(_*u*s-d*m*s-_*r*p+i*m*p+d*r*f-i*u*f)*C,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*f+i*c*f)*C,e[3]=(d*c*s-o*u*s-d*r*l+i*u*l+o*r*p-i*c*p)*C,e[4]=b*C,e[5]=(h*m*s-g*u*s+g*r*p-t*m*p-h*r*f+t*u*f)*C,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*f-t*c*f)*C,e[7]=(a*u*s-h*c*s+h*r*l-t*u*l-a*r*p+t*c*p)*C,e[8]=E*C,e[9]=(g*d*s-h*_*s-g*i*p+t*_*p+h*i*f-t*d*f)*C,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*f+t*o*f)*C,e[11]=(h*o*s-a*d*s-h*i*l+t*d*l+a*i*p-t*o*p)*C,e[12]=S*C,e[13]=(h*_*r-g*d*r+g*i*u-t*_*u-h*i*m+t*d*m)*C,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*C,e[15]=(a*d*r-h*o*r+h*i*c-t*d*c-a*i*u+t*o*u)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,g=s*d,_=a*h,m=a*d,f=o*d,v=c*l,b=c*h,E=c*d,S=i.x,w=i.y,C=i.z;return r[0]=(1-(_+f))*S,r[1]=(p+E)*S,r[2]=(g-b)*S,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(u+f))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+b)*C,r[9]=(m-v)*C,r[10]=(1-(u+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Ci.set(r[0],r[1],r[2]).length();const a=Ci.set(r[4],r[5],r[6]).length(),o=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),sn.copy(this);const l=1/s,h=1/a,d=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,t.setFromRotationMatrix(sn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=_n,c=!1){const l=this.elements,h=2*s/(t-e),d=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===_n)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===As)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=_n,c=!1){const l=this.elements,h=2/(t-e),d=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===_n)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===As)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ci=new W,sn=new mt,Eh=new W(0,0,0),Th=new W(1,1,1),Vn=new W,Qr=new W,Vt=new W,Lc=new mt,Dc=new Br;class Mn{constructor(e=0,t=0,i=0,r=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wh=0;const Ic=new W,Pi=new Br,An=new mt,es=new W,lr=new W,Ah=new W,Rh=new Br,Uc=new W(1,0,0),Nc=new W(0,1,0),Fc=new W(0,0,1),Oc={type:"added"},Ch={type:"removed"},Li={type:"childadded",child:null},ra={type:"childremoved",child:null};class wt extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new W,t=new Mn,i=new Br,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ge}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis(Uc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Ic.copy(e).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?es.copy(e):es.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(lr,es,this.up):An.lookAt(es,lr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(An),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oc),Li.child=e,this.dispatchEvent(Li),Li.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ch),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oc),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new W(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new W,Rn=new W,sa=new W,Cn=new W,Di=new W,Ii=new W,kc=new W,aa=new W,oa=new W,ca=new W,la=new yt,da=new yt,ua=new yt;class Jt{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),Rn.subVectors(i,t),sa.subVectors(e,t);const a=an.dot(an),o=an.dot(Rn),c=an.dot(sa),l=Rn.dot(Rn),h=Rn.dot(sa),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Cn.x),c.addScaledVector(a,Cn.y),c.addScaledVector(o,Cn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return la.setScalar(0),da.setScalar(0),ua.setScalar(0),la.fromBufferAttribute(e,t),da.fromBufferAttribute(e,i),ua.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(la,s.x),a.addScaledVector(da,s.y),a.addScaledVector(ua,s.z),a}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),Rn.subVectors(e,t),an.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Di.subVectors(r,i),Ii.subVectors(s,i),aa.subVectors(e,i);const c=Di.dot(aa),l=Ii.dot(aa);if(c<=0&&l<=0)return t.copy(i);oa.subVectors(e,r);const h=Di.dot(oa),d=Ii.dot(oa);if(h>=0&&d<=h)return t.copy(r);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Di,a);ca.subVectors(e,s);const p=Di.dot(ca),g=Ii.dot(ca);if(g>=0&&p<=g)return t.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ii,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return kc.subVectors(s,r),o=(d-h)/(d-h+(p-g)),t.copy(r).addScaledVector(kc,o);const f=1/(m+_+u);return a=_*f,o=u*f,t.copy(i).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},ts={h:0,s:0,l:0};function ha(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=gh(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ha(a,s,e+1/3),this.g=ha(a,s,e),this.b=ha(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Qe.workingToColorSpace(Pt.copy(this),e),Math.round($e(Pt.r*255,0,255))*65536+Math.round($e(Pt.g*255,0,255))*256+Math.round($e(Pt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Zt){Qe.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(ts);const i=js(Wn.h,ts.h,t),r=js(Wn.s,ts.s,t),s=js(Wn.l,ts.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Ke;Ke.NAMES=_d;let Ph=0;class ir extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Xi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ga,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==Nn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==za&&(i.blendSrc=this.blendSrc),this.blendDst!==Ga&&(i.blendDst=this.blendDst),this.blendEquation!==ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dt extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new W,ns=new He;let Lh=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lo,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lo&&(e.usage=this.usage),e}}class xd extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vd extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gt extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dh=0;const Kt=new mt,fa=new wt,Ui=new W,Wt=new zr,dr=new zr,Tt=new W;class Ot extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?vd:xd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Wt.min,dr.min),Wt.expandByPoint(Tt),Tt.addVectors(Wt.max,dr.max),Wt.expandByPoint(Tt)):(Wt.expandByPoint(dr.min),Wt.expandByPoint(dr.max))}Wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Tt.fromBufferAttribute(o,l),c&&(Ui.fromBufferAttribute(e,l),Tt.add(Ui)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new W,c[P]=new W;const l=new W,h=new W,d=new W,u=new He,p=new He,g=new He,_=new W,m=new W;function f(P,y,T){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,T),u.fromBufferAttribute(s,P),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,T),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[P].add(_),o[y].add(_),o[T].add(_),c[P].add(m),c[y].add(m),c[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,y=v.length;P<y;++P){const T=v[P],D=T.start,z=T.count;for(let B=D,A=D+z;B<A;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const b=new W,E=new W,S=new W,w=new W;function C(P){S.fromBufferAttribute(r,P),w.copy(S);const y=o[P];b.copy(y),b.sub(S.multiplyScalar(S.dot(y))).normalize(),E.crossVectors(w,y);const D=E.dot(c[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,D)}for(let P=0,y=v.length;P<y;++P){const T=v[P],D=T.start,z=T.count;for(let B=D,A=D+z;B<A;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new W,s=new W,a=new W,o=new W,c=new W,l=new W,h=new W,d=new W;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new cn(u,h,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bc=new mt,si=new gd,is=new Jo,zc=new W,rs=new W,ss=new W,as=new W,pa=new W,os=new W,Gc=new W,cs=new W;class ye extends wt{constructor(e=new Ot,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){os.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(pa.fromBufferAttribute(d,e),a?os.addScaledVector(pa,h):os.addScaledVector(pa.sub(t),h))}t.add(os)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(is.containsPoint(si.origin)===!1&&(si.intersectSphere(is,zc)===null||si.origin.distanceToSquared(zc)>(e.far-e.near)**2))&&(Bc.copy(s).invert(),si.copy(e.ray).applyMatrix4(Bc),!(i.boundingBox!==null&&si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,S=b;E<S;E+=3){const w=o.getX(E),C=o.getX(E+1),P=o.getX(E+2);r=ls(this,f,e,i,l,h,d,w,C,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);r=ls(this,a,e,i,l,h,d,v,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,S=b;E<S;E+=3){const w=E,C=E+1,P=E+2;r=ls(this,f,e,i,l,h,d,w,C,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,b=m+1,E=m+2;r=ls(this,a,e,i,l,h,d,v,b,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ih(n,e,t,i,r,s,a,o){let c;if(e.side===zt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Nn,o),c===null)return null;cs.copy(o),cs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(cs);return l<t.near||l>t.far?null:{distance:l,point:cs.clone(),object:n}}function ls(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,rs),n.getVertexPosition(c,ss),n.getVertexPosition(l,as);const h=Ih(n,e,t,i,rs,ss,as,Gc);if(h){const d=new W;Jt.getBarycoord(Gc,rs,ss,as,d),r&&(h.uv=Jt.getInterpolatedAttribute(r,o,c,l,d,new He)),s&&(h.uv1=Jt.getInterpolatedAttribute(s,o,c,l,d,new He)),a&&(h.normal=Jt.getInterpolatedAttribute(a,o,c,l,d,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new W,materialIndex:0};Jt.getNormal(rs,ss,as,u.normal),h.face=u,h.barycoord=d}return h}class at extends Ot{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(_,m,f,v,b,E,S,w,C,P,y){const T=E/C,D=S/P,z=E/2,B=S/2,A=w/2,L=C+1,I=P+1;let N=0,V=0;const Q=new W;for(let ee=0;ee<I;ee++){const U=ee*D-B;for(let H=0;H<L;H++){const se=H*T-z;Q[_]=se*v,Q[m]=U*b,Q[f]=A,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[f]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(H/C),d.push(1-ee/P),N+=1}}for(let ee=0;ee<P;ee++)for(let U=0;U<C;U++){const H=u+U+L*ee,se=u+U+L*(ee+1),Me=u+(U+1)+L*(ee+1),Ee=u+(U+1)+L*ee;c.push(H,se,Ee),c.push(se,Me,Ee),V+=6}o.addGroup(p,V,y),p+=V,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=Ji(n[t]);for(const r in i)e[r]=i[r]}return e}function Uh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Nh={clone:Ji,merge:Nt};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sd extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new W,Hc=new He,Vc=new He;class Xt extends Sd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Do*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Hc,Vc),t.subVectors(Vc,Hc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Fi=1;class kh extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(Ni,Fi,e,t);r.layers=this.layers,this.add(r);const s=new Xt(Ni,Fi,e,t);s.layers=this.layers,this.add(s);const a=new Xt(Ni,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(Ni,Fi,e,t);o.layers=this.layers,this.add(o);const c=new Xt(Ni,Fi,e,t);c.layers=this.layers,this.add(c);const l=new Xt(Ni,Fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===As)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Md extends Lt{constructor(e=[],t=xi,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bd extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Md(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new at(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Dn});s.uniforms.tEquirect.value=t;const a=new ye(r,s),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=St),new kh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class xn extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bh={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ec{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=i}clone(){return new ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zh extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lo,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new W;class Ps{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Cs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ps(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Cs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tc extends ir{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Oi;const ur=new W,ki=new W,Bi=new W,zi=new He,hr=new He,Ed=new mt,ds=new W,fr=new W,us=new W,Wc=new He,ga=new He,Xc=new He;class Td extends wt{constructor(e=new tc){if(super(),this.isSprite=!0,this.type="Sprite",Oi===void 0){Oi=new Ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Gh(t,5);Oi.setIndex([0,1,2,0,2,3]),Oi.setAttribute("position",new Ps(i,3,0,!1)),Oi.setAttribute("uv",new Ps(i,2,3,!1))}this.geometry=Oi,this.material=e,this.center=new He(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),Ed.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Bi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;hs(ds.set(-.5,-.5,0),Bi,a,ki,r,s),hs(fr.set(.5,-.5,0),Bi,a,ki,r,s),hs(us.set(.5,.5,0),Bi,a,ki,r,s),Wc.set(0,0),ga.set(1,0),Xc.set(1,1);let o=e.ray.intersectTriangle(ds,fr,us,!1,ur);if(o===null&&(hs(fr.set(-.5,.5,0),Bi,a,ki,r,s),ga.set(0,1),o=e.ray.intersectTriangle(ds,us,fr,!1,ur),o===null))return;const c=e.ray.origin.distanceTo(ur);c<e.near||c>e.far||t.push({distance:c,point:ur.clone(),uv:Jt.getInterpolation(ur,ds,fr,us,Wc,ga,Xc,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function hs(n,e,t,i,r,s){zi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(hr.x=s*zi.x-r*zi.y,hr.y=r*zi.x+s*zi.y):hr.copy(zi),n.copy(e),n.x+=hr.x,n.y+=hr.y,n.applyMatrix4(Ed)}class Hh extends Lt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Rt,h=Rt,d,u){super(null,a,o,c,l,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _a=new W,Vh=new W,Wh=new Ge;class di{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_a.subVectors(i,t).cross(Vh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_a),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wh.getNormalMatrix(e),r=this.coplanarPoint(_a).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Jo,Xh=new He(.5,.5),fs=new W;class nc{constructor(e=new di,t=new di,i=new di,r=new di,s=new di,a=new di){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],p=s[7],g=s[8],_=s[9],m=s[10],f=s[11],v=s[12],b=s[13],E=s[14],S=s[15];if(r[0].setComponents(l-a,p-h,f-g,S-v).normalize(),r[1].setComponents(l+a,p+h,f+g,S+v).normalize(),r[2].setComponents(l+o,p+d,f+_,S+b).normalize(),r[3].setComponents(l-o,p-d,f-_,S-b).normalize(),i)r[4].setComponents(c,u,m,E).normalize(),r[5].setComponents(l-c,p-u,f-m,S-E).normalize();else if(r[4].setComponents(l-c,p-u,f-m,S-E).normalize(),t===_n)r[5].setComponents(l+c,p+u,f+m,S+E).normalize();else if(t===As)r[5].setComponents(c,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=Xh.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fs.x=r.normal.x>0?e.max.x:e.min.x,fs.y=r.normal.y>0?e.max.y:e.min.y,fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kn extends Lt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lr extends Lt{constructor(e,t,i=Sn,r,s,a,o=Rt,c=Rt,l,h=On,d=1){if(h!==On&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qh extends Lr{constructor(e,t=Sn,i=xi,r,s,a=Rt,o=Rt,c,l=On){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wd extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ns extends Ot{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new W,h=new He;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=i+d/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yt extends Ot{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=i/2;let f=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(p,2));function v(){const E=new W,S=new W;let w=0;const C=(t-e)/i;for(let P=0;P<=s;P++){const y=[],T=P/s,D=T*(t-e)+e;for(let z=0;z<=r;z++){const B=z/r,A=B*c+o,L=Math.sin(A),I=Math.cos(A);S.x=D*L,S.y=-T*i+m,S.z=D*I,d.push(S.x,S.y,S.z),E.set(L,C,I).normalize(),u.push(E.x,E.y,E.z),p.push(B,1-T),y.push(g++)}_.push(y)}for(let P=0;P<r;P++)for(let y=0;y<s;y++){const T=_[y][P],D=_[y+1][P],z=_[y+1][P+1],B=_[y][P+1];(e>0||y!==0)&&(h.push(T,D,B),w+=3),(t>0||y!==s-1)&&(h.push(D,z,B),w+=3)}l.addGroup(f,w,0),f+=w}function b(E){const S=g,w=new He,C=new W;let P=0;const y=E===!0?e:t,T=E===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,m*T,0),u.push(0,T,0),p.push(.5,.5),g++;const D=g;for(let z=0;z<=r;z++){const A=z/r*c+o,L=Math.cos(A),I=Math.sin(A);C.x=y*I,C.y=m*T,C.z=y*L,d.push(C.x,C.y,C.z),u.push(0,T,0),w.x=L*.5+.5,w.y=I*.5*T+.5,p.push(w.x,w.y),g++}for(let z=0;z<r;z++){const B=S+z,A=D+z;E===!0?h.push(A,A+1,B):h.push(A+1,A,B),P+=3}l.addGroup(f,P,E===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tn extends Ot{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,d=e/o,u=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*u-a;for(let b=0;b<l;b++){const E=b*d-s;g.push(E,-v,0),_.push(0,0,1),m.push(b/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){const b=v+l*f,E=v+l*(f+1),S=v+1+l*(f+1),w=v+1+l*f;p.push(b,E,w),p.push(E,S,w)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qn extends Ot{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],h=[];let d=e;const u=(t-e)/r,p=new W,g=new He;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const f=s+m/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<r;_++){const m=_*(i+1);for(let f=0;f<i;f++){const v=f+m,b=v,E=v+i+1,S=v+i+2,w=v+1;o.push(b,E,w),o.push(E,S,w)}}this.setIndex(o),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vi extends Ot{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new W,u=new W,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const v=[],b=f/i;let E=0;f===0&&a===0?E=.5/t:f===i&&c===Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){const w=S/t;d.x=-e*Math.cos(r+w*s)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(r+w*s)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+E,1-b),v.push(l++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const b=h[f][v+1],E=h[f][v],S=h[f+1][v],w=h[f+1][v+1];(f!==0||a>0)&&p.push(b,E,w),(f!==i-1||c<Math.PI)&&p.push(E,S,w)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ic extends Ot{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new W,d=new W,u=new W;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/r),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,v=(r+1)*p+g;a.push(_,m,v),a.push(m,f,v)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yh extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _t extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jh extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $h extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fs extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Kh extends Fs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xa=new mt,qc=new W,Yc=new W;class Ad{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nc,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(qc),Yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yc),t.updateMatrixWorld(),xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zh extends Ad{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}}class va extends Fs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Zh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class rc extends Sd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jh extends Ad{constructor(){super(new rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jc extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Jh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Qh extends Fs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ef extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const $c=new mt;class nf{constructor(e,t,i=0,r=1/0){this.ray=new gd(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $c.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($c),this}intersectObject(e,t=!0,i=[]){return Io(e,this,i,t),i.sort(Kc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Io(e[r],this,i,t);return i.sort(Kc),i}}function Kc(n,e){return n.distance-e.distance}function Io(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Io(s[a],e,t,!0)}}function Zc(n,e,t,i){const r=rf(i);switch(t){case dd:return n*e;case hd:return n*e/r.components*r.byteLength;case qo:return n*e/r.components*r.byteLength;case Ki:return n*e*2/r.components*r.byteLength;case Yo:return n*e*2/r.components*r.byteLength;case ud:return n*e*3/r.components*r.byteLength;case on:return n*e*4/r.components*r.byteLength;case jo:return n*e*4/r.components*r.byteLength;case vs:case ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ss:case Ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:case to:return Math.max(n,16)*Math.max(e,8)/4;case Ja:case eo:return Math.max(n,8)*Math.max(e,8)/2;case no:case io:case so:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case oo:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eo:case To:case wo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ao:case Ro:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Co:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rf(n){switch(n){case qt:case ad:return{byteLength:1,components:1};case Rr:case od:case Fn:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case Sn:case Vo:case gn:return{byteLength:4,components:1};case cd:case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sf(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var af=`#ifdef USE_ALPHAHASH
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
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hf=`#ifdef USE_AOMAP
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
#endif`,rp=`uniform sampler2D dfgLUT;
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
}`,sp=`
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
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
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
#endif`,rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
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
}`,hm=`#if DEPTH_PACKING == 3200
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
}`,Ve={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:cf,alphamap_pars_fragment:lf,alphatest_fragment:df,alphatest_pars_fragment:uf,aomap_fragment:hf,aomap_pars_fragment:ff,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:xf,iridescence_fragment:vf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Ef,color_fragment:Tf,color_pars_fragment:wf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Df,displacementmap_vertex:If,emissivemap_fragment:Uf,emissivemap_pars_fragment:Nf,colorspace_fragment:Ff,colorspace_pars_fragment:Of,envmap_fragment:kf,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:Gf,envmap_physical_pars_fragment:Jf,envmap_vertex:Hf,fog_vertex:Vf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:jf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Kf,lights_pars_begin:Zf,lights_toon_fragment:Qf,lights_toon_pars_fragment:ep,lights_phong_fragment:tp,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:rp,lights_fragment_begin:sp,lights_fragment_maps:ap,lights_fragment_end:op,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:up,map_fragment:hp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:_p,morphinstance_vertex:xp,morphcolor_vertex:vp,morphnormal_vertex:yp,morphtarget_pars_vertex:Sp,morphtarget_vertex:Mp,normal_fragment_begin:bp,normal_fragment_maps:Ep,normal_pars_fragment:Tp,normal_pars_vertex:wp,normal_vertex:Ap,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Dp,opaque_fragment:Ip,packing:Up,premultiplied_alpha_fragment:Np,project_vertex:Fp,dithering_fragment:Op,dithering_pars_fragment:kp,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:Yp,skinnormal_vertex:jp,specularmap_fragment:$p,specularmap_pars_fragment:Kp,tonemapping_fragment:Zp,tonemapping_pars_fragment:Jp,transmission_fragment:Qp,transmission_pars_fragment:em,uv_pars_fragment:tm,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:rm,background_vert:sm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:cm,cube_vert:lm,cube_frag:dm,depth_vert:um,depth_frag:hm,distance_vert:fm,distance_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:_m,linedashed_frag:xm,meshbasic_vert:vm,meshbasic_frag:ym,meshlambert_vert:Sm,meshlambert_frag:Mm,meshmatcap_vert:bm,meshmatcap_frag:Em,meshnormal_vert:Tm,meshnormal_frag:wm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Im,points_frag:Um,shadow_vert:Nm,shadow_frag:Fm,sprite_vert:Om,sprite_frag:km},xe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},pn={basic:{uniforms:Nt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Nt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Nt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Nt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Nt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Nt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Nt([xe.points,xe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Nt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Nt([xe.common,xe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Nt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Nt([xe.sprite,xe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Nt([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Nt([xe.lights,xe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};pn.physical={uniforms:Nt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ps={r:0,b:0,g:0},oi=new Mn,Bm=new mt;function zm(n,e,t,i,r,s,a){const o=new Ke(0);let c=s===!0?0:1,l,h,d=null,u=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function _(b){let E=!1;const S=g(b);S===null?f(o,c):S&&S.isColor&&(f(S,1),E=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){const S=g(E);S&&(S.isCubeTexture||S.mapping===Us)?(h===void 0&&(h=new ye(new at(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Ji(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),oi.copy(E.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(oi)),h.material.toneMapped=Qe.getTransfer(S.colorSpace)!==st,(d!==S||u!==S.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=S,u=S.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ye(new tn(2,2),new bn({name:"BackgroundMaterial",uniforms:Ji(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,u=S.version,p=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,E){b.getRGB(ps,yd(n)),i.buffers.color.setClear(ps.r,ps.g,ps.b,E,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),c=E,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(o,c)},render:_,addToRenderList:m,dispose:v}}function Gm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(T,D,z,B,A){let L=!1;const I=d(B,z,D);s!==I&&(s=I,l(s.object)),L=p(T,B,z,A),L&&g(T,B,z,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,E(T,D,z,B),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return n.createVertexArray()}function l(T){return n.bindVertexArray(T)}function h(T){return n.deleteVertexArray(T)}function d(T,D,z){const B=z.wireframe===!0;let A=i[T.id];A===void 0&&(A={},i[T.id]=A);let L=A[D.id];L===void 0&&(L={},A[D.id]=L);let I=L[B];return I===void 0&&(I=u(c()),L[B]=I),I}function u(T){const D=[],z=[],B=[];for(let A=0;A<t;A++)D[A]=0,z[A]=0,B[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:B,object:T,attributes:{},index:null}}function p(T,D,z,B){const A=s.attributes,L=D.attributes;let I=0;const N=z.getAttributes();for(const V in N)if(N[V].location>=0){const ee=A[V];let U=L[V];if(U===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(U=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(U=T.instanceColor)),ee===void 0||ee.attribute!==U||U&&ee.data!==U.data)return!0;I++}return s.attributesNum!==I||s.index!==B}function g(T,D,z,B){const A={},L=D.attributes;let I=0;const N=z.getAttributes();for(const V in N)if(N[V].location>=0){let ee=L[V];ee===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor));const U={};U.attribute=ee,ee&&ee.data&&(U.data=ee.data),A[V]=U,I++}s.attributes=A,s.attributesNum=I,s.index=B}function _(){const T=s.newAttributes;for(let D=0,z=T.length;D<z;D++)T[D]=0}function m(T){f(T,0)}function f(T,D){const z=s.newAttributes,B=s.enabledAttributes,A=s.attributeDivisors;z[T]=1,B[T]===0&&(n.enableVertexAttribArray(T),B[T]=1),A[T]!==D&&(n.vertexAttribDivisor(T,D),A[T]=D)}function v(){const T=s.newAttributes,D=s.enabledAttributes;for(let z=0,B=D.length;z<B;z++)D[z]!==T[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function b(T,D,z,B,A,L,I){I===!0?n.vertexAttribIPointer(T,D,z,A,L):n.vertexAttribPointer(T,D,z,B,A,L)}function E(T,D,z,B){_();const A=B.attributes,L=z.getAttributes(),I=D.defaultAttributeValues;for(const N in L){const V=L[N];if(V.location>=0){let Q=A[N];if(Q===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){const ee=Q.normalized,U=Q.itemSize,H=e.get(Q);if(H===void 0)continue;const se=H.buffer,Me=H.type,Ee=H.bytesPerElement,K=Me===n.INT||Me===n.UNSIGNED_INT||Q.gpuType===Vo;if(Q.isInterleavedBufferAttribute){const J=Q.data,me=J.stride,Ue=Q.offset;if(J.isInstancedInterleavedBuffer){for(let he=0;he<V.locationSize;he++)f(V.location+he,J.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<V.locationSize;he++)m(V.location+he);n.bindBuffer(n.ARRAY_BUFFER,se);for(let he=0;he<V.locationSize;he++)b(V.location+he,U/V.locationSize,Me,ee,me*Ee,(Ue+U/V.locationSize*he)*Ee,K)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)f(V.location+J,Q.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<V.locationSize;J++)m(V.location+J);n.bindBuffer(n.ARRAY_BUFFER,se);for(let J=0;J<V.locationSize;J++)b(V.location+J,U/V.locationSize,Me,ee,U*Ee,U/V.locationSize*J*Ee,K)}}else if(I!==void 0){const ee=I[N];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(V.location,ee);break;case 3:n.vertexAttrib3fv(V.location,ee);break;case 4:n.vertexAttrib4fv(V.location,ee);break;default:n.vertexAttrib1fv(V.location,ee)}}}}v()}function S(){P();for(const T in i){const D=i[T];for(const z in D){const B=D[z];for(const A in B)h(B[A].object),delete B[A];delete D[z]}delete i[T]}}function w(T){if(i[T.id]===void 0)return;const D=i[T.id];for(const z in D){const B=D[z];for(const A in B)h(B[A].object),delete B[A];delete D[z]}delete i[T.id]}function C(T){for(const D in i){const z=i[D];if(z[T.id]===void 0)continue;const B=z[T.id];for(const A in B)h(B[A].object),delete B[A];delete z[T.id]}}function P(){y(),a=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Hm(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function c(l,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Vm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==on&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==qt&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gn&&!P)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Be("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:E,maxSamples:S,samples:w}}function Wm(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new di,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{const v=s?0:i,b=v*4;let E=f.clippingState||null;c.value=E,E=h(g,u,b,p);for(let S=0;S!==b;++S)E[S]=t[S];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,E=p;b!==_;++b,E+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Xm(n){let e=new WeakMap;function t(a,o){return o===$a?a.mapping=xi:o===Ka&&(a.mapping=$i),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===$a||o===Ka)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new bd(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const jn=4,Jc=[.125,.215,.35,.446,.526,.582],hi=20,qm=256,pr=new rc,Qc=new Ke;let ya=null,Sa=0,Ma=0,ba=!1;const Ym=new W;class el{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Ym}=s;ya=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,Sa,Ma),this._renderer.xr.enabled=ba,e.scissorTest=!1,Gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:Fn,format:on,colorSpace:Zi,depthBuffer:!1},r=tl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jm(s)),this._blurMaterial=Km(s,e,t),this._ggxMaterial=$m(s,e,t)}return r}_compileMaterial(e){const t=new ye(new Ot,e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,i,r,s){const c=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Qc),d.toneMapping=vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ye(new at,new dt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(Qc),f=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):E===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));const S=this._cubeSize;Gi(r,E*S,b>2?S:0,S,S),d.setRenderTarget(r),f&&d.render(_,c),d.render(e,c)}d.toneMapping=p,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xi||e.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Gi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,p=d*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-jn?i-g+jn:0),f=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Gi(s,m,f,3*_,2*_),r.setRenderTarget(s),r.render(o,pr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Gi(e,m,f,3*_,2*_),r.setRenderTarget(e),r.render(o,pr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[r];d.material=l;const u=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):hi;m>hi&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const f=[];let v=0;for(let C=0;C<hi;++C){const P=C/_,y=Math.exp(-P*P/2);f.push(y),C===0?v+=y:C<m&&(v+=2*y)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-i;const E=this._sizeLods[r],S=3*E*(r>b-jn?r-b+jn:0),w=4*(this._cubeSize-E);Gi(t,S,w,3*E,2*E),c.setRenderTarget(t),c.render(d,pr)}}function jm(n){const e=[],t=[],i=[];let r=n;const s=n-jn+1+Jc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-jn?c=Jc[a-n+jn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),b=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,P=w>2?0:-1,y=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(y,_*g*w),b.set(u,m*g*w);const T=[w,w,w,w,w,w];E.set(T,f*g*w)}const S=new Ot;S.setAttribute("position",new cn(v,_)),S.setAttribute("uv",new cn(b,m)),S.setAttribute("faceIndex",new cn(E,f)),i.push(new ye(S,null)),r>jn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function tl(n,e,t){const i=new yn(n,e,t);return i.texture.mapping=Us,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $m(n,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Os(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Km(n,e,t){const i=new Float32Array(hi),r=new W(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Os(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function nl(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Os(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function il(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Os(){return`

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
	`}function Zm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===$a||c===Ka,h=c===xi||c===$i;if(l||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new el(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new el(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Jm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Pr("WebGLRenderer: "+i+" extension not supported."),r}}}function Qm(n,e,t,i){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let b=0,E=v.length;b<E;b+=3){const S=v[b+0],w=v[b+1],C=v[b+2];u.push(S,w,w,C,C,S)}}else if(g!==void 0){const v=g.array;_=g.version;for(let b=0,E=v.length/3-1;b<E;b+=3){const S=b+0,w=b+1,C=b+2;u.push(S,w,w,C,C,S)}}else return;const m=new(pd(u)?vd:xd)(u,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function eg(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,p){n.drawElements(i,p,s,u*a),t.update(p,i,1)}function l(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,u*a,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function tg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ng(n,e,t){const i=new WeakMap,r=new yt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let E=o.attributes.position.count*b,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*S*4*d),C=new md(w,E,S,d);C.type=gn,C.needsUpdate=!0;const P=b*4;for(let T=0;T<d;T++){const D=m[T],z=f[T],B=v[T],A=E*S*4*T;for(let L=0;L<D.count;L++){const I=L*P;p===!0&&(r.fromBufferAttribute(D,L),w[A+I+0]=r.x,w[A+I+1]=r.y,w[A+I+2]=r.z,w[A+I+3]=0),g===!0&&(r.fromBufferAttribute(z,L),w[A+I+4]=r.x,w[A+I+5]=r.y,w[A+I+6]=r.z,w[A+I+7]=0),_===!0&&(r.fromBufferAttribute(B,L),w[A+I+8]=r.x,w[A+I+9]=r.y,w[A+I+10]=r.z,w[A+I+11]=B.itemSize===4?r.w:1)}}u={count:d,texture:C,size:new He(E,S)},i.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function ig(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const rg={[Jl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[ed]:"CINEON_TONE_MAPPING",[td]:"ACES_FILMIC_TONE_MAPPING",[id]:"AGX_TONE_MAPPING",[rd]:"NEUTRAL_TONE_MAPPING",[nd]:"CUSTOM_TONE_MAPPING"};function sg(n,e,t,i,r){const s=new yn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new yn(e,t,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),o=new Ot;o.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new gt([0,2,0,0,2,0],2));const c=new Yh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new ye(o,c),h=new rc(-1,1,1,-1,0,1);let d=null,u=null,p=!1,g,_=null,m=[],f=!1;this.setSize=function(v,b){s.setSize(v,b),a.setSize(v,b);for(let E=0;E<m.length;E++){const S=m[E];S.setSize&&S.setSize(v,b)}},this.setEffects=function(v){m=v,f=m.length>0&&m[0].isRenderPass===!0;const b=s.width,E=s.height;for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(b,E)}},this.begin=function(v,b){if(p||v.toneMapping===vn&&m.length===0)return!1;if(_=b,b!==null){const E=b.width,S=b.height;(s.width!==E||s.height!==S)&&this.setSize(E,S)}return f===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=vn,!0},this.hasRenderPass=function(){return f},this.end=function(v,b){v.toneMapping=g,p=!0;let E=s,S=a;for(let w=0;w<m.length;w++){const C=m[w];if(C.enabled!==!1&&(C.render(v,S,E,b),C.needsSwap!==!1)){const P=E;E=S,S=P}}if(d!==v.outputColorSpace||u!==v.toneMapping){d=v.outputColorSpace,u=v.toneMapping,c.defines={},Qe.getTransfer(d)===st&&(c.defines.SRGB_TRANSFER="");const w=rg[u];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(_),v.render(l,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Cd=new Lt,Uo=new Lr(1,1),Pd=new md,Ld=new Mh,Dd=new Md,rl=[],sl=[],al=new Float32Array(16),ol=new Float32Array(9),cl=new Float32Array(4);function rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=rl[r];if(s===void 0&&(s=new Float32Array(r),rl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ks(n,e){let t=sl[e];t===void 0&&(t=new Int32Array(e),sl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ag(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;cl.set(i),n.uniformMatrix2fv(this.addr,!1,cl),Et(t,i)}}function ug(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;ol.set(i),n.uniformMatrix3fv(this.addr,!1,ol),Et(t,i)}}function hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,i))return;al.set(i),n.uniformMatrix4fv(this.addr,!1,al),Et(t,i)}}function fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function _g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function Sg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Uo.compareFunction=t.isReversedDepthBuffer()?Ko:$o,s=Uo):s=Cd,t.setTexture2D(e||s,r)}function Mg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ld,r)}function bg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Dd,r)}function Eg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pd,r)}function Tg(n){switch(n){case 5126:return ag;case 35664:return og;case 35665:return cg;case 35666:return lg;case 35674:return dg;case 35675:return ug;case 35676:return hg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return vg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Eg}}function wg(n,e){n.uniform1fv(this.addr,e)}function Ag(n,e){const t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Rg(n,e){const t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function Cg(n,e){const t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Pg(n,e){const t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Lg(n,e){const t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dg(n,e){const t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ig(n,e){n.uniform1iv(this.addr,e)}function Ug(n,e){n.uniform2iv(this.addr,e)}function Ng(n,e){n.uniform3iv(this.addr,e)}function Fg(n,e){n.uniform4iv(this.addr,e)}function Og(n,e){n.uniform1uiv(this.addr,e)}function kg(n,e){n.uniform2uiv(this.addr,e)}function Bg(n,e){n.uniform3uiv(this.addr,e)}function zg(n,e){n.uniform4uiv(this.addr,e)}function Gg(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Uo:a=Cd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Hg(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ld,s[a])}function Vg(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Dd,s[a])}function Wg(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Pd,s[a])}function Xg(n){switch(n){case 5126:return wg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ig;case 35667:case 35671:return Ug;case 35668:case 35672:return Ng;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return kg;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Wg}}class qg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tg(t.type)}}class Yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}}class jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ea=/(\w+)(\])?(\[|\.)?/g;function ll(n,e){n.seq.push(e),n.map[e.id]=e}function $g(n,e,t){const i=n.name,r=i.length;for(Ea.lastIndex=0;;){const s=Ea.exec(i),a=Ea.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ll(t,l===void 0?new qg(o,n,e):new Yg(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new jg(o),ll(t,d)),t=d}}}class bs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);$g(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function dl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Kg=37297;let Zg=0;function Jg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ul=new Ge;function Qg(n){Qe._getMatrix(ul,Qe.workingColorSpace,n);const e=`mat3( ${ul.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case ws:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Jg(n.getShaderSource(e),o)}else return s}function e0(n,e){const t=Qg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const t0={[Jl]:"Linear",[Ql]:"Reinhard",[ed]:"Cineon",[td]:"ACESFilmic",[id]:"AgX",[rd]:"Neutral",[nd]:"Custom"};function n0(n,e){const t=t0[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ms=new W;function i0(){Qe.getLuminanceCoefficients(ms);const n=ms.x.toFixed(4),e=ms.y.toFixed(4),t=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function s0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Sr(n){return n!==""}function fl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(n){return n.replace(o0,l0)}const c0=new Map;function l0(n,e){let t=Ve[e];if(t===void 0){const i=c0.get(e);if(i!==void 0)t=Ve[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return No(t)}const d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(n){return n.replace(d0,u0)}function u0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const h0={[xs]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function f0(n){return h0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p0={[xi]:"ENVMAP_TYPE_CUBE",[$i]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE_UV"};function m0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":p0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const g0={[$i]:"ENVMAP_MODE_REFRACTION"};function _0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":g0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const x0={[Zl]:"ENVMAP_BLENDING_MULTIPLY",[ih]:"ENVMAP_BLENDING_MIX",[rh]:"ENVMAP_BLENDING_ADD"};function v0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":x0[n.combine]||"ENVMAP_BLENDING_NONE"}function y0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function S0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=f0(t),l=m0(t),h=_0(t),d=v0(t),u=y0(t),p=r0(t),g=s0(s),_=r.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sr).join(`
`),f.length>0&&(f+=`
`)):(m=[gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),f=[gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==vn?n0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,e0("linearToOutputTexel",t.outputColorSpace),i0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=No(a),a=fl(a,t),a=pl(a,t),o=No(o),o=fl(o,t),o=pl(o,t),a=ml(a),o=ml(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=v+m+a,E=v+f+o,S=dl(r,r.VERTEX_SHADER,b),w=dl(r,r.FRAGMENT_SHADER,E);r.attachShader(_,S),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(D){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_)||"",B=r.getShaderInfoLog(S)||"",A=r.getShaderInfoLog(w)||"",L=z.trim(),I=B.trim(),N=A.trim();let V=!0,Q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,S,w);else{const ee=hl(r,S,"vertex"),U=hl(r,w,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+ee+`
`+U)}else L!==""?Be("WebGLProgram: Program Info Log:",L):(I===""||N==="")&&(Q=!1);Q&&(D.diagnostics={runnable:V,programLog:L,vertexShader:{log:I,prefix:m},fragmentShader:{log:N,prefix:f}})}r.deleteShader(S),r.deleteShader(w),P=new bs(r,_),y=a0(r,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,Kg)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let M0=0;class b0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new E0(e),t.set(e,i)),i}}class E0{constructor(e){this.id=M0++,this.code=e,this.usedTimes=0}}function T0(n,e,t,i,r,s,a){const o=new Qo,c=new b0,l=new Set,h=[],d=new Map,u=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,T,D,z,B){const A=z.fog,L=B.geometry,I=y.isMeshStandardMaterial?z.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||I),V=N&&N.mapping===Us?N.image.height:null,Q=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&Be("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ee=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,U=ee!==void 0?ee.length:0;let H=0;L.morphAttributes.position!==void 0&&(H=1),L.morphAttributes.normal!==void 0&&(H=2),L.morphAttributes.color!==void 0&&(H=3);let se,Me,Ee,K;if(Q){const it=pn[Q];se=it.vertexShader,Me=it.fragmentShader}else se=y.vertexShader,Me=y.fragmentShader,c.update(y),Ee=c.getVertexShaderID(y),K=c.getFragmentShaderID(y);const J=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ue=B.isInstancedMesh===!0,he=B.isBatchedMesh===!0,Ie=!!y.map,Je=!!y.matcap,Ne=!!N,Xe=!!y.aoMap,Pe=!!y.lightMap,Oe=!!y.bumpMap,nt=!!y.normalMap,F=!!y.displacementMap,ht=!!y.emissiveMap,Ye=!!y.metalnessMap,je=!!y.roughnessMap,we=y.anisotropy>0,R=y.clearcoat>0,x=y.dispersion>0,k=y.iridescence>0,j=y.sheen>0,te=y.transmission>0,$=we&&!!y.anisotropyMap,be=R&&!!y.clearcoatMap,ue=R&&!!y.clearcoatNormalMap,ne=R&&!!y.clearcoatRoughnessMap,le=k&&!!y.iridescenceMap,Z=k&&!!y.iridescenceThicknessMap,ae=j&&!!y.sheenColorMap,ie=j&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ce=!!y.specularColorMap,ze=!!y.specularIntensityMap,O=te&&!!y.transmissionMap,_e=te&&!!y.thicknessMap,de=!!y.gradientMap,Se=!!y.alphaMap,oe=y.alphaTest>0,re=!!y.alphaHash,pe=!!y.extensions;let ke=vn;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ke=n.toneMapping);const ft={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:se,fragmentShader:Me,defines:y.defines,customVertexShaderID:Ee,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:he,batchingColor:he&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Zi,alphaToCoverage:!!y.alphaToCoverage,map:Ie,matcap:Je,envMap:Ne,envMapMode:Ne&&N.mapping,envMapCubeUVHeight:V,aoMap:Xe,lightMap:Pe,bumpMap:Oe,normalMap:nt,displacementMap:F,emissiveMap:ht,normalMapObjectSpace:nt&&y.normalMapType===oh,normalMapTangentSpace:nt&&y.normalMapType===fd,metalnessMap:Ye,roughnessMap:je,anisotropy:we,anisotropyMap:$,clearcoat:R,clearcoatMap:be,clearcoatNormalMap:ue,clearcoatRoughnessMap:ne,dispersion:x,iridescence:k,iridescenceMap:le,iridescenceThicknessMap:Z,sheen:j,sheenColorMap:ae,sheenRoughnessMap:ie,specularMap:fe,specularColorMap:ce,specularIntensityMap:ze,transmission:te,transmissionMap:O,thicknessMap:_e,gradientMap:de,opaque:y.transparent===!1&&y.blending===Xi&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:oe,alphaHash:re,combine:y.combine,mapUv:Ie&&_(y.map.channel),aoMapUv:Xe&&_(y.aoMap.channel),lightMapUv:Pe&&_(y.lightMap.channel),bumpMapUv:Oe&&_(y.bumpMap.channel),normalMapUv:nt&&_(y.normalMap.channel),displacementMapUv:F&&_(y.displacementMap.channel),emissiveMapUv:ht&&_(y.emissiveMap.channel),metalnessMapUv:Ye&&_(y.metalnessMap.channel),roughnessMapUv:je&&_(y.roughnessMap.channel),anisotropyMapUv:$&&_(y.anisotropyMap.channel),clearcoatMapUv:be&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ie&&_(y.sheenRoughnessMap.channel),specularMapUv:fe&&_(y.specularMap.channel),specularColorMapUv:ce&&_(y.specularColorMap.channel),specularIntensityMapUv:ze&&_(y.specularIntensityMap.channel),transmissionMapUv:O&&_(y.transmissionMap.channel),thicknessMapUv:_e&&_(y.thicknessMap.channel),alphaMapUv:Se&&_(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(nt||we),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!L.attributes.uv&&(Ie||Se),fog:!!A,useFog:y.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:B.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:H,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ie&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:ht&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===At,flipSided:y.side===zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:pe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&y.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function f(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)T.push(D),T.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(v(T,y),b(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){const T=g[y.type];let D;if(T){const z=pn[T];D=Nh.clone(z.uniforms)}else D=y.uniforms;return D}function S(y,T){let D=d.get(T);return D!==void 0?++D.usedTimes:(D=new S0(n,T,y,s),h.push(D),d.set(T,D)),D}function w(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),d.delete(y.cacheKey),y.destroy()}}function C(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:S,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:P}}function w0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function A0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _l(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,u,p,g,_,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,u){t.length>1&&t.sort(d||A0),i.length>1&&i.sort(u||_l),r.length>1&&r.sort(u||_l)}function h(){for(let d=e,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function R0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new xl,n.set(i,[a])):r>=s.length?(a=new xl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function C0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ke};break;case"SpotLight":t={position:new W,direction:new W,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function P0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let L0=0;function D0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function I0(n){const e=new C0,t=P0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);const r=new W,s=new mt,a=new mt;function o(l){let h=0,d=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,b=0,E=0,S=0,w=0,C=0;l.sort(D0);for(let y=0,T=l.length;y<T;y++){const D=l[y],z=D.color,B=D.intensity,A=D.distance;let L=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ki?L=D.shadow.map.texture:L=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*B,d+=z.g*B,u+=z.b*B;else if(D.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(D.sh.coefficients[I],B);C++}else if(D.isDirectionalLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const N=D.shadow,V=t.get(D);V.shadowIntensity=N.intensity,V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=L,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=I,p++}else if(D.isSpotLight){const I=e.get(D);I.position.setFromMatrixPosition(D.matrixWorld),I.color.copy(z).multiplyScalar(B),I.distance=A,I.coneCos=Math.cos(D.angle),I.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),I.decay=D.decay,i.spot[_]=I;const N=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,N.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=N.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=N.intensity,V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=L,E++}_++}else if(D.isRectAreaLight){const I=e.get(D);I.color.copy(z).multiplyScalar(B),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=I,m++}else if(D.isPointLight){const I=e.get(D);if(I.color.copy(D.color).multiplyScalar(D.intensity),I.distance=D.distance,I.decay=D.decay,D.castShadow){const N=D.shadow,V=t.get(D);V.shadowIntensity=N.intensity,V.shadowBias=N.bias,V.shadowNormalBias=N.normalBias,V.shadowRadius=N.radius,V.shadowMapSize=N.mapSize,V.shadowCameraNear=N.camera.near,V.shadowCameraFar=N.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=I,g++}else if(D.isHemisphereLight){const I=e.get(D);I.skyColor.copy(D.color).multiplyScalar(B),I.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[f]=I,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==b||P.numSpotShadows!==E||P.numSpotMaps!==S||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+S-w,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=b,P.numSpotShadows=E,P.numSpotMaps=S,P.numLightProbes=C,i.version=L0++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){const b=l[f];if(b.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function vl(n){const e=new I0(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function U0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vl(n),e.set(r,[o])):s>=a.length?(o=new vl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const N0=`void main() {
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
}`,O0=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],k0=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],yl=new mt,mr=new W,Ta=new W;function B0(n,e,t){let i=new nc;const r=new He,s=new He,a=new yt,o=new jh,c=new $h,l={},h=t.maxTextureSize,d={[Nn]:zt,[zt]:Nn,[At]:At},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:N0,fragmentShader:F0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ye(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let f=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===ku&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=xs);const y=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Dn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=f!==this.type;B&&C.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(L=>L.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,L=w.length;A<L;A++){const I=w[A],N=I.shadow;if(N===void 0){Be("WebGLShadowMap:",I,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const V=N.getFrameExtents();if(r.multiply(V),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/V.x),r.x=s.x*V.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/V.y),r.y=s.y*V.y,N.mapSize.y=s.y)),N.map===null||B===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===yr){if(I.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new yn(r.x,r.y,{format:Ki,type:Fn,minFilter:St,magFilter:St,generateMipmaps:!1}),N.map.texture.name=I.name+".shadowMap",N.map.depthTexture=new Lr(r.x,r.y,gn),N.map.depthTexture.name=I.name+".shadowMapDepth",N.map.depthTexture.format=On,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Rt,N.map.depthTexture.magFilter=Rt}else{I.isPointLight?(N.map=new bd(r.x),N.map.depthTexture=new qh(r.x,Sn)):(N.map=new yn(r.x,r.y),N.map.depthTexture=new Lr(r.x,r.y,Sn)),N.map.depthTexture.name=I.name+".shadowMap",N.map.depthTexture.format=On;const ee=n.state.buffers.depth.getReversed();this.type===xs?(N.map.depthTexture.compareFunction=ee?Ko:$o,N.map.depthTexture.minFilter=St,N.map.depthTexture.magFilter=St):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Rt,N.map.depthTexture.magFilter=Rt)}N.camera.updateProjectionMatrix()}const Q=N.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<Q;ee++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,ee),n.clear();else{ee===0&&(n.setRenderTarget(N.map),n.clear());const U=N.getViewport(ee);a.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),z.viewport(a)}if(I.isPointLight){const U=N.camera,H=N.matrix,se=I.distance||U.far;se!==U.far&&(U.far=se,U.updateProjectionMatrix()),mr.setFromMatrixPosition(I.matrixWorld),U.position.copy(mr),Ta.copy(U.position),Ta.add(O0[ee]),U.up.copy(k0[ee]),U.lookAt(Ta),U.updateMatrixWorld(),H.makeTranslation(-mr.x,-mr.y,-mr.z),yl.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),N._frustum.setFromProjectionMatrix(yl,U.coordinateSystem,U.reversedDepth)}else N.updateMatrices(I);i=N.getFrustum(),E(C,P,N.camera,I,this.type)}N.isPointLightShadow!==!0&&this.type===yr&&v(N,P),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,T,D)};function v(w,C){const P=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yn(r.x,r.y,{format:Ki,type:Fn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,P,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,P,p,_,null)}function b(w,C,P,y){let T=null;const D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)T=D;else if(T=P.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=T.uuid,B=C.uuid;let A=l[z];A===void 0&&(A={},l[z]=A);let L=A[B];L===void 0&&(L=T.clone(),A[B]=L,C.addEventListener("dispose",S)),T=L}if(T.visible=C.visible,T.wireframe=C.wireframe,y===yr?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:d[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=n.properties.get(T);z.light=P}return T}function E(w,C,P,y,T){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===yr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const B=e.update(w),A=w.material;if(Array.isArray(A)){const L=B.groups;for(let I=0,N=L.length;I<N;I++){const V=L[I],Q=A[V.materialIndex];if(Q&&Q.visible){const ee=b(w,Q,y,T);w.onBeforeShadow(n,w,C,P,B,ee,V),n.renderBufferDirect(P,null,B,ee,w,V),w.onAfterShadow(n,w,C,P,B,ee,V)}}}else if(A.visible){const L=b(w,A,y,T);w.onBeforeShadow(n,w,C,P,B,L,null),n.renderBufferDirect(P,null,B,L,w,null),w.onAfterShadow(n,w,C,P,B,L,null)}}const z=w.children;for(let B=0,A=z.length;B<A;B++)E(z[B],C,P,y,T)}function S(w){w.target.removeEventListener("dispose",S);for(const P in l){const y=l[P],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const z0={[Ha]:Va,[Wa]:Ya,[Xa]:ja,[ji]:qa,[Va]:Ha,[Ya]:Wa,[ja]:Xa,[qa]:ji};function G0(n,e){function t(){let O=!1;const _e=new yt;let de=null;const Se=new yt(0,0,0,0);return{setMask:function(oe){de!==oe&&!O&&(n.colorMask(oe,oe,oe,oe),de=oe)},setLocked:function(oe){O=oe},setClear:function(oe,re,pe,ke,ft){ft===!0&&(oe*=ke,re*=ke,pe*=ke),_e.set(oe,re,pe,ke),Se.equals(_e)===!1&&(n.clearColor(oe,re,pe,ke),Se.copy(_e))},reset:function(){O=!1,de=null,Se.set(-1,0,0,0)}}}function i(){let O=!1,_e=!1,de=null,Se=null,oe=null;return{setReversed:function(re){if(_e!==re){const pe=e.get("EXT_clip_control");re?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),_e=re;const ke=oe;oe=null,this.setClear(ke)}},getReversed:function(){return _e},setTest:function(re){re?J(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(re){de!==re&&!O&&(n.depthMask(re),de=re)},setFunc:function(re){if(_e&&(re=z0[re]),Se!==re){switch(re){case Ha:n.depthFunc(n.NEVER);break;case Va:n.depthFunc(n.ALWAYS);break;case Wa:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case Xa:n.depthFunc(n.EQUAL);break;case qa:n.depthFunc(n.GEQUAL);break;case Ya:n.depthFunc(n.GREATER);break;case ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=re}},setLocked:function(re){O=re},setClear:function(re){oe!==re&&(_e&&(re=1-re),n.clearDepth(re),oe=re)},reset:function(){O=!1,de=null,Se=null,oe=null,_e=!1}}}function r(){let O=!1,_e=null,de=null,Se=null,oe=null,re=null,pe=null,ke=null,ft=null;return{setTest:function(it){O||(it?J(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(it){_e!==it&&!O&&(n.stencilMask(it),_e=it)},setFunc:function(it,hn,En){(de!==it||Se!==hn||oe!==En)&&(n.stencilFunc(it,hn,En),de=it,Se=hn,oe=En)},setOp:function(it,hn,En){(re!==it||pe!==hn||ke!==En)&&(n.stencilOp(it,hn,En),re=it,pe=hn,ke=En)},setLocked:function(it){O=it},setClear:function(it){ft!==it&&(n.clearStencil(it),ft=it)},reset:function(){O=!1,_e=null,de=null,Se=null,oe=null,re=null,pe=null,ke=null,ft=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,b=null,E=null,S=null,w=null,C=new Ke(0,0,0),P=0,y=!1,T=null,D=null,z=null,B=null,A=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,N=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(V)[1]),I=N>=1):V.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),I=N>=2);let Q=null,ee={};const U=n.getParameter(n.SCISSOR_BOX),H=n.getParameter(n.VIEWPORT),se=new yt().fromArray(U),Me=new yt().fromArray(H);function Ee(O,_e,de,Se){const oe=new Uint8Array(4),re=n.createTexture();n.bindTexture(O,re),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<de;pe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(_e+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return re}const K={};K[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(ji),Oe(!1),nt(Sc),J(n.CULL_FACE),Xe(Dn);function J(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function me(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Ue(O,_e){return d[O]!==_e?(n.bindFramebuffer(O,_e),d[O]=_e,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_e),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function he(O,_e){let de=p,Se=!1;if(O){de=u.get(_e),de===void 0&&(de=[],u.set(_e,de));const oe=O.textures;if(de.length!==oe.length||de[0]!==n.COLOR_ATTACHMENT0){for(let re=0,pe=oe.length;re<pe;re++)de[re]=n.COLOR_ATTACHMENT0+re;de.length=oe.length,Se=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Se=!0);Se&&n.drawBuffers(de)}function Ie(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const Je={[ui]:n.FUNC_ADD,[zu]:n.FUNC_SUBTRACT,[Gu]:n.FUNC_REVERSE_SUBTRACT};Je[Hu]=n.MIN,Je[Vu]=n.MAX;const Ne={[Wu]:n.ZERO,[Xu]:n.ONE,[qu]:n.SRC_COLOR,[za]:n.SRC_ALPHA,[Ju]:n.SRC_ALPHA_SATURATE,[Ku]:n.DST_COLOR,[ju]:n.DST_ALPHA,[Yu]:n.ONE_MINUS_SRC_COLOR,[Ga]:n.ONE_MINUS_SRC_ALPHA,[Zu]:n.ONE_MINUS_DST_COLOR,[$u]:n.ONE_MINUS_DST_ALPHA,[Qu]:n.CONSTANT_COLOR,[eh]:n.ONE_MINUS_CONSTANT_COLOR,[th]:n.CONSTANT_ALPHA,[nh]:n.ONE_MINUS_CONSTANT_ALPHA};function Xe(O,_e,de,Se,oe,re,pe,ke,ft,it){if(O===Dn){_===!0&&(me(n.BLEND),_=!1);return}if(_===!1&&(J(n.BLEND),_=!0),O!==Bu){if(O!==m||it!==y){if((f!==ui||E!==ui)&&(n.blendEquation(n.FUNC_ADD),f=ui,E=ui),it)switch(O){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFunc(n.ONE,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",O);break}else switch(O){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bc:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",O);break}v=null,b=null,S=null,w=null,C.set(0,0,0),P=0,m=O,y=it}return}oe=oe||_e,re=re||de,pe=pe||Se,(_e!==f||oe!==E)&&(n.blendEquationSeparate(Je[_e],Je[oe]),f=_e,E=oe),(de!==v||Se!==b||re!==S||pe!==w)&&(n.blendFuncSeparate(Ne[de],Ne[Se],Ne[re],Ne[pe]),v=de,b=Se,S=re,w=pe),(ke.equals(C)===!1||ft!==P)&&(n.blendColor(ke.r,ke.g,ke.b,ft),C.copy(ke),P=ft),m=O,y=!1}function Pe(O,_e){O.side===At?me(n.CULL_FACE):J(n.CULL_FACE);let de=O.side===zt;_e&&(de=!de),Oe(de),O.blending===Xi&&O.transparent===!1?Xe(Dn):Xe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const Se=O.stencilWrite;o.setTest(Se),Se&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(O){T!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),T=O)}function nt(O){O!==Fu?(J(n.CULL_FACE),O!==D&&(O===Sc?n.cullFace(n.BACK):O===Ou?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),D=O}function F(O){O!==z&&(I&&n.lineWidth(O),z=O)}function ht(O,_e,de){O?(J(n.POLYGON_OFFSET_FILL),(B!==_e||A!==de)&&(n.polygonOffset(_e,de),B=_e,A=de)):me(n.POLYGON_OFFSET_FILL)}function Ye(O){O?J(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function je(O){O===void 0&&(O=n.TEXTURE0+L-1),Q!==O&&(n.activeTexture(O),Q=O)}function we(O,_e,de){de===void 0&&(Q===null?de=n.TEXTURE0+L-1:de=Q);let Se=ee[de];Se===void 0&&(Se={type:void 0,texture:void 0},ee[de]=Se),(Se.type!==O||Se.texture!==_e)&&(Q!==de&&(n.activeTexture(de),Q=de),n.bindTexture(O,_e||K[O]),Se.type=O,Se.texture=_e)}function R(){const O=ee[Q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function j(){try{n.texSubImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function te(){try{n.texSubImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function ue(){try{n.texStorage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function ne(){try{n.texStorage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function le(){try{n.texImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function Z(){try{n.texImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function ae(O){se.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),se.copy(O))}function ie(O){Me.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Me.copy(O))}function fe(O,_e){let de=l.get(_e);de===void 0&&(de=new WeakMap,l.set(_e,de));let Se=de.get(O);Se===void 0&&(Se=n.getUniformBlockIndex(_e,O.name),de.set(O,Se))}function ce(O,_e){const Se=l.get(_e).get(O);c.get(_e)!==Se&&(n.uniformBlockBinding(_e,Se,O.__bindingPointIndex),c.set(_e,Se))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,ee={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,b=null,E=null,S=null,w=null,C=new Ke(0,0,0),P=0,y=!1,T=null,D=null,z=null,B=null,A=null,se.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:me,bindFramebuffer:Ue,drawBuffers:he,useProgram:Ie,setBlending:Xe,setMaterial:Pe,setFlipSided:Oe,setCullFace:nt,setLineWidth:F,setPolygonOffset:ht,setScissorTest:Ye,activeTexture:je,bindTexture:we,unbindTexture:R,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:le,texImage3D:Z,updateUBOMapping:fe,uniformBlockBinding:ce,texStorage2D:ue,texStorage3D:ne,texSubImage2D:j,texSubImage3D:te,compressedTexSubImage2D:$,compressedTexSubImage3D:be,scissor:ae,viewport:ie,reset:ze}}function H0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return p?new OffscreenCanvas(R,x):Rs("canvas")}function _(R,x,k){let j=1;const te=we(R);if((te.width>k||te.height>k)&&(j=k/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(j*te.width),be=Math.floor(j*te.height);d===void 0&&(d=g($,be));const ue=x?g($,be):d;return ue.width=$,ue.height=be,ue.getContext("2d").drawImage(R,0,0,$,be),Be("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+be+")."),ue}else return"data"in R&&Be("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){n.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,x,k,j,te=!1){if(R!==null){if(n[R]!==void 0)return n[R];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=x;if(x===n.RED&&(k===n.FLOAT&&($=n.R32F),k===n.HALF_FLOAT&&($=n.R16F),k===n.UNSIGNED_BYTE&&($=n.R8)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.R8UI),k===n.UNSIGNED_SHORT&&($=n.R16UI),k===n.UNSIGNED_INT&&($=n.R32UI),k===n.BYTE&&($=n.R8I),k===n.SHORT&&($=n.R16I),k===n.INT&&($=n.R32I)),x===n.RG&&(k===n.FLOAT&&($=n.RG32F),k===n.HALF_FLOAT&&($=n.RG16F),k===n.UNSIGNED_BYTE&&($=n.RG8)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RG8UI),k===n.UNSIGNED_SHORT&&($=n.RG16UI),k===n.UNSIGNED_INT&&($=n.RG32UI),k===n.BYTE&&($=n.RG8I),k===n.SHORT&&($=n.RG16I),k===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGB8UI),k===n.UNSIGNED_SHORT&&($=n.RGB16UI),k===n.UNSIGNED_INT&&($=n.RGB32UI),k===n.BYTE&&($=n.RGB8I),k===n.SHORT&&($=n.RGB16I),k===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGBA8UI),k===n.UNSIGNED_SHORT&&($=n.RGBA16UI),k===n.UNSIGNED_INT&&($=n.RGBA32UI),k===n.BYTE&&($=n.RGBA8I),k===n.SHORT&&($=n.RGBA16I),k===n.INT&&($=n.RGBA32I)),x===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),x===n.RGBA){const be=te?ws:Qe.getTransfer(j);k===n.FLOAT&&($=n.RGBA32F),k===n.HALF_FLOAT&&($=n.RGBA16F),k===n.UNSIGNED_BYTE&&($=be===st?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function E(R,x){let k;return R?x===null||x===Sn||x===Cr?k=n.DEPTH24_STENCIL8:x===gn?k=n.DEPTH32F_STENCIL8:x===Rr&&(k=n.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Sn||x===Cr?k=n.DEPTH_COMPONENT24:x===gn?k=n.DEPTH_COMPONENT32F:x===Rr&&(k=n.DEPTH_COMPONENT16),k}function S(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Rt&&R.minFilter!==St?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),P(x),x.isVideoTexture&&h.delete(x)}function C(R){const x=R.target;x.removeEventListener("dispose",C),T(x)}function P(R){const x=i.get(R);if(x.__webglInit===void 0)return;const k=R.source,j=u.get(k);if(j){const te=j[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(R),Object.keys(j).length===0&&u.delete(k)}i.remove(R)}function y(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const k=R.source,j=u.get(k);delete j[x.__cacheKey],a.memory.textures--}function T(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let te=0;te<x.__webglFramebuffer[j].length;te++)n.deleteFramebuffer(x.__webglFramebuffer[j][te]);else n.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)n.deleteFramebuffer(x.__webglFramebuffer[j]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=R.textures;for(let j=0,te=k.length;j<te;j++){const $=i.get(k[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(k[j])}i.remove(R)}let D=0;function z(){D=0}function B(){const R=D;return R>=r.maxTextures&&Be("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function A(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function L(R,x){const k=i.get(R);if(R.isVideoTexture&&Ye(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const j=R.image;if(j===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,R,x);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function I(R,x){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){K(k,R,x);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function N(R,x){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){K(k,R,x);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function V(R,x){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){J(k,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const Q={[Ar]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[Za]:n.MIRRORED_REPEAT},ee={[Rt]:n.NEAREST,[sh]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[St]:n.LINEAR,[qs]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},U={[ch]:n.NEVER,[fh]:n.ALWAYS,[lh]:n.LESS,[$o]:n.LEQUAL,[dh]:n.EQUAL,[Ko]:n.GEQUAL,[uh]:n.GREATER,[hh]:n.NOTEQUAL};function H(R,x){if(x.type===gn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===St||x.magFilter===qs||x.magFilter===Yr||x.magFilter===fi||x.minFilter===St||x.minFilter===qs||x.minFilter===Yr||x.minFilter===fi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Q[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Q[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Q[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ee[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ee[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,U[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rt||x.minFilter!==Yr&&x.minFilter!==fi||x.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function se(R,x){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const j=x.source;let te=u.get(j);te===void 0&&(te={},u.set(j,te));const $=A(x);if($!==R.__cacheKey){te[$]===void 0&&(te[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),te[$].usedTimes++;const be=te[R.__cacheKey];be!==void 0&&(te[R.__cacheKey].usedTimes--,be.usedTimes===0&&y(x)),R.__cacheKey=$,R.__webglTexture=te[$].texture}return k}function Me(R,x,k){return Math.floor(Math.floor(R/k)/x)}function Ee(R,x,k,j){const $=R.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,k,j,x.data);else{$.sort((Z,ae)=>Z.start-ae.start);let be=0;for(let Z=1;Z<$.length;Z++){const ae=$[be],ie=$[Z],fe=ae.start+ae.count,ce=Me(ie.start,x.width,4),ze=Me(ae.start,x.width,4);ie.start<=fe+1&&ce===ze&&Me(ie.start+ie.count-1,x.width,4)===ce?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++be,$[be]=ie)}$.length=be+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),ne=n.getParameter(n.UNPACK_SKIP_PIXELS),le=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Z=0,ae=$.length;Z<ae;Z++){const ie=$[Z],fe=Math.floor(ie.start/4),ce=Math.ceil(ie.count/4),ze=fe%x.width,O=Math.floor(fe/x.width),_e=ce,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,ze,O,_e,de,k,j,x.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function K(R,x,k){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);const te=se(R,x),$=x.source;t.bindTexture(j,R.__webglTexture,n.TEXTURE0+k);const be=i.get($);if($.version!==be.__version||te===!0){t.activeTexture(n.TEXTURE0+k);const ue=Qe.getPrimaries(Qe.workingColorSpace),ne=x.colorSpace===Yn?null:Qe.getPrimaries(x.colorSpace),le=x.colorSpace===Yn||ue===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Z=_(x.image,!1,r.maxTextureSize);Z=je(x,Z);const ae=s.convert(x.format,x.colorSpace),ie=s.convert(x.type);let fe=b(x.internalFormat,ae,ie,x.colorSpace,x.isVideoTexture);H(j,x);let ce;const ze=x.mipmaps,O=x.isVideoTexture!==!0,_e=be.__version===void 0||te===!0,de=$.dataReady,Se=S(x,Z);if(x.isDepthTexture)fe=E(x.format===pi,x.type),_e&&(O?t.texStorage2D(n.TEXTURE_2D,1,fe,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,fe,Z.width,Z.height,0,ae,ie,null));else if(x.isDataTexture)if(ze.length>0){O&&_e&&t.texStorage2D(n.TEXTURE_2D,Se,fe,ze[0].width,ze[0].height);for(let oe=0,re=ze.length;oe<re;oe++)ce=ze[oe],O?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ce.width,ce.height,ae,ie,ce.data):t.texImage2D(n.TEXTURE_2D,oe,fe,ce.width,ce.height,0,ae,ie,ce.data);x.generateMipmaps=!1}else O?(_e&&t.texStorage2D(n.TEXTURE_2D,Se,fe,Z.width,Z.height),de&&Ee(x,Z,ae,ie)):t.texImage2D(n.TEXTURE_2D,0,fe,Z.width,Z.height,0,ae,ie,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,fe,ze[0].width,ze[0].height,Z.depth);for(let oe=0,re=ze.length;oe<re;oe++)if(ce=ze[oe],x.format!==on)if(ae!==null)if(O){if(de)if(x.layerUpdates.size>0){const pe=Zc(ce.width,ce.height,x.format,x.type);for(const ke of x.layerUpdates){const ft=ce.data.subarray(ke*pe/ce.data.BYTES_PER_ELEMENT,(ke+1)*pe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,ke,ce.width,ce.height,1,ae,ft)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ce.width,ce.height,Z.depth,ae,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,fe,ce.width,ce.height,Z.depth,0,ce.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ce.width,ce.height,Z.depth,ae,ie,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,fe,ce.width,ce.height,Z.depth,0,ae,ie,ce.data)}else{O&&_e&&t.texStorage2D(n.TEXTURE_2D,Se,fe,ze[0].width,ze[0].height);for(let oe=0,re=ze.length;oe<re;oe++)ce=ze[oe],x.format!==on?ae!==null?O?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,fe,ce.width,ce.height,0,ce.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ce.width,ce.height,ae,ie,ce.data):t.texImage2D(n.TEXTURE_2D,oe,fe,ce.width,ce.height,0,ae,ie,ce.data)}else if(x.isDataArrayTexture)if(O){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,fe,Z.width,Z.height,Z.depth),de)if(x.layerUpdates.size>0){const oe=Zc(Z.width,Z.height,x.format,x.type);for(const re of x.layerUpdates){const pe=Z.data.subarray(re*oe/Z.data.BYTES_PER_ELEMENT,(re+1)*oe/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,Z.width,Z.height,1,ae,ie,pe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ae,ie,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,Z.width,Z.height,Z.depth,0,ae,ie,Z.data);else if(x.isData3DTexture)O?(_e&&t.texStorage3D(n.TEXTURE_3D,Se,fe,Z.width,Z.height,Z.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ae,ie,Z.data)):t.texImage3D(n.TEXTURE_3D,0,fe,Z.width,Z.height,Z.depth,0,ae,ie,Z.data);else if(x.isFramebufferTexture){if(_e)if(O)t.texStorage2D(n.TEXTURE_2D,Se,fe,Z.width,Z.height);else{let oe=Z.width,re=Z.height;for(let pe=0;pe<Se;pe++)t.texImage2D(n.TEXTURE_2D,pe,fe,oe,re,0,ae,ie,null),oe>>=1,re>>=1}}else if(ze.length>0){if(O&&_e){const oe=we(ze[0]);t.texStorage2D(n.TEXTURE_2D,Se,fe,oe.width,oe.height)}for(let oe=0,re=ze.length;oe<re;oe++)ce=ze[oe],O?de&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ae,ie,ce):t.texImage2D(n.TEXTURE_2D,oe,fe,ae,ie,ce);x.generateMipmaps=!1}else if(O){if(_e){const oe=we(Z);t.texStorage2D(n.TEXTURE_2D,Se,fe,oe.width,oe.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,ie,Z)}else t.texImage2D(n.TEXTURE_2D,0,fe,ae,ie,Z);m(x)&&f(j),be.__version=$.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function J(R,x,k){if(x.image.length!==6)return;const j=se(R,x),te=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const $=i.get(te);if(te.version!==$.__version||j===!0){t.activeTexture(n.TEXTURE0+k);const be=Qe.getPrimaries(Qe.workingColorSpace),ue=x.colorSpace===Yn?null:Qe.getPrimaries(x.colorSpace),ne=x.colorSpace===Yn||be===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const le=x.isCompressedTexture||x.image[0].isCompressedTexture,Z=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let re=0;re<6;re++)!le&&!Z?ae[re]=_(x.image[re],!0,r.maxCubemapSize):ae[re]=Z?x.image[re].image:x.image[re],ae[re]=je(x,ae[re]);const ie=ae[0],fe=s.convert(x.format,x.colorSpace),ce=s.convert(x.type),ze=b(x.internalFormat,fe,ce,x.colorSpace),O=x.isVideoTexture!==!0,_e=$.__version===void 0||j===!0,de=te.dataReady;let Se=S(x,ie);H(n.TEXTURE_CUBE_MAP,x);let oe;if(le){O&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,ze,ie.width,ie.height);for(let re=0;re<6;re++){oe=ae[re].mipmaps;for(let pe=0;pe<oe.length;pe++){const ke=oe[pe];x.format!==on?fe!==null?O?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,0,0,ke.width,ke.height,fe,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,ze,ke.width,ke.height,0,ke.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,0,0,ke.width,ke.height,fe,ce,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,ze,ke.width,ke.height,0,fe,ce,ke.data)}}}else{if(oe=x.mipmaps,O&&_e){oe.length>0&&Se++;const re=we(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,ze,re.width,re.height)}for(let re=0;re<6;re++)if(Z){O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ae[re].width,ae[re].height,fe,ce,ae[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,ae[re].width,ae[re].height,0,fe,ce,ae[re].data);for(let pe=0;pe<oe.length;pe++){const ft=oe[pe].image[re].image;O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,0,0,ft.width,ft.height,fe,ce,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,ze,ft.width,ft.height,0,fe,ce,ft.data)}}else{O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,fe,ce,ae[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,fe,ce,ae[re]);for(let pe=0;pe<oe.length;pe++){const ke=oe[pe];O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,0,0,fe,ce,ke.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,ze,fe,ce,ke.image[re])}}}m(x)&&f(n.TEXTURE_CUBE_MAP),$.__version=te.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function me(R,x,k,j,te,$){const be=s.convert(k.format,k.colorSpace),ue=s.convert(k.type),ne=b(k.internalFormat,be,ue,k.colorSpace),le=i.get(x),Z=i.get(k);if(Z.__renderTarget=x,!le.__hasExternalTextures){const ae=Math.max(1,x.width>>$),ie=Math.max(1,x.height>>$);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,$,ne,ae,ie,x.depth,0,be,ue,null):t.texImage2D(te,$,ne,ae,ie,0,be,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ht(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,te,Z.__webglTexture,0,F(x)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,te,Z.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(R,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const j=x.depthTexture,te=j&&j.isDepthTexture?j.type:null,$=E(x.stencilBuffer,te),be=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ht(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(x),$,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(x),$,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,R)}else{const j=x.textures;for(let te=0;te<j.length;te++){const $=j[te],be=s.convert($.format,$.colorSpace),ue=s.convert($.type),ne=b($.internalFormat,be,ue,$.colorSpace);ht(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F(x),ne,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,F(x),ne,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ne,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(R,x,k){const j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(x.depthTexture);if(te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(te.__webglInit===void 0&&(te.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),H(n.TEXTURE_CUBE_MAP,x.depthTexture);const le=s.convert(x.depthTexture.format),Z=s.convert(x.depthTexture.type);let ae;x.depthTexture.format===On?ae=n.DEPTH_COMPONENT24:x.depthTexture.format===pi&&(ae=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ae,x.width,x.height,0,le,Z,null)}}else L(x.depthTexture,0);const $=te.__webglTexture,be=F(x),ue=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,ne=x.depthTexture.format===pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===On)ht(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ue,$,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,ne,ue,$,0);else if(x.depthTexture.format===pi)ht(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ue,$,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,ne,ue,$,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const x=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=j}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let j=0;j<6;j++)he(x.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?he(x.__webglFramebuffer[0],R,0):he(x.__webglFramebuffer,R,0)}else if(k){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=n.createRenderbuffer(),Ue(x.__webglDepthbuffer[j],R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ue(x.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(R,x,k){const j=i.get(R);x!==void 0&&me(j.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ie(R)}function Ne(R){const x=R.texture,k=i.get(R),j=i.get(x);R.addEventListener("dispose",C);const te=R.textures,$=R.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let ne=0;ne<x.mipmaps.length;ne++)k.__webglFramebuffer[ue][ne]=n.createFramebuffer()}else k.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)k.__webglFramebuffer[ue]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(be)for(let ue=0,ne=te.length;ue<ne;ue++){const le=i.get(te[ue]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&ht(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const ne=te[ue];k.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const le=s.convert(ne.format,ne.colorSpace),Z=s.convert(ne.type),ae=b(ne.internalFormat,le,Z,ne.colorSpace,R.isXRRenderTarget===!0),ie=F(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),H(n.TEXTURE_CUBE_MAP,x);for(let ue=0;ue<6;ue++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)me(k.__webglFramebuffer[ue][ne],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ne);else me(k.__webglFramebuffer[ue],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ue=0,ne=te.length;ue<ne;ue++){const le=te[ue],Z=i.get(le);let ae=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),H(ae,le),me(k.__webglFramebuffer,R,le,n.COLOR_ATTACHMENT0+ue,ae,0),m(le)&&f(ae)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,j.__webglTexture),H(ue,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)me(k.__webglFramebuffer[ne],R,x,n.COLOR_ATTACHMENT0,ue,ne);else me(k.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,ue,0);m(x)&&f(ue),t.unbindTexture()}R.depthBuffer&&Ie(R)}function Xe(R){const x=R.textures;for(let k=0,j=x.length;k<j;k++){const te=x[k];if(m(te)){const $=v(R),be=i.get(te).__webglTexture;t.bindTexture($,be),f($),t.unbindTexture()}}}const Pe=[],Oe=[];function nt(R){if(R.samples>0){if(ht(R)===!1){const x=R.textures,k=R.width,j=R.height;let te=n.COLOR_BUFFER_BIT;const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(R),ue=x.length>1;if(ue)for(let le=0;le<x.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ne=R.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let le=0;le<x.length;le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[le]);const Z=i.get(x[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,k,j,0,0,k,j,te,n.NEAREST),c===!0&&(Pe.length=0,Oe.length=0,Pe.push(n.COLOR_ATTACHMENT0+le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pe.push($),Oe.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let le=0;le<x.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,be.__webglColorRenderbuffer[le]);const Z=i.get(x[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function F(R){return Math.min(r.maxSamples,R.samples)}function ht(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ye(R){const x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function je(R,x){const k=R.colorSpace,j=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Zi&&k!==Yn&&(Qe.getTransfer(k)===st?(j!==on||te!==qt)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",k)),x}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=L,this.setTexture2DArray=I,this.setTexture3D=N,this.setTextureCube=V,this.rebindTextures=Je,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function V0(n,e){function t(i,r=Yn){let s;const a=Qe.getTransfer(r);if(i===qt)return n.UNSIGNED_BYTE;if(i===Wo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ld)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ad)return n.BYTE;if(i===od)return n.SHORT;if(i===Rr)return n.UNSIGNED_SHORT;if(i===Vo)return n.INT;if(i===Sn)return n.UNSIGNED_INT;if(i===gn)return n.FLOAT;if(i===Fn)return n.HALF_FLOAT;if(i===dd)return n.ALPHA;if(i===ud)return n.RGB;if(i===on)return n.RGBA;if(i===On)return n.DEPTH_COMPONENT;if(i===pi)return n.DEPTH_STENCIL;if(i===hd)return n.RED;if(i===qo)return n.RED_INTEGER;if(i===Ki)return n.RG;if(i===Yo)return n.RG_INTEGER;if(i===jo)return n.RGBA_INTEGER;if(i===vs||i===ys||i===Ss||i===Ms)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ss)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ja||i===Qa||i===eo||i===to)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===to)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===no||i===io||i===ro||i===so||i===ao||i===oo||i===co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===no||i===io)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ro)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===so)return s.COMPRESSED_R11_EAC;if(i===ao)return s.COMPRESSED_SIGNED_R11_EAC;if(i===oo)return s.COMPRESSED_RG11_EAC;if(i===co)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lo||i===uo||i===ho||i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===vo||i===yo||i===So||i===Mo||i===bo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ho)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===po)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===go)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_o)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===So)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bo)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===To||i===wo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eo)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===To)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ao||i===Ro||i===Co||i===Po)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ao)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ro)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Co)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Po)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const W0=`
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

}`;class q0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:W0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ye(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends nr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new q0,f={},v=t.getContextAttributes();let b=null,E=null;const S=[],w=[],C=new He;let P=null;const y=new Xt;y.viewport=new yt;const T=new Xt;T.viewport=new yt;const D=[y,T],z=new ef;let B=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=S[K];return J===void 0&&(J=new ma,S[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=S[K];return J===void 0&&(J=new ma,S[K]=J),J.getGripSpace()},this.getHand=function(K){let J=S[K];return J===void 0&&(J=new ma,S[K]=J),J.getHandSpace()};function L(K){const J=w.indexOf(K.inputSource);if(J===-1)return;const me=S[J];me!==void 0&&(me.update(K.inputSource,K.frame,l||a),me.dispatchEvent({type:K.type,data:K.inputSource}))}function I(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",N);for(let K=0;K<S.length;K++){const J=w[K];J!==null&&(w[K]=null,S[K].disconnect(J))}B=null,A=null,m.reset();for(const K in f)delete f[K];e.setRenderTarget(b),p=null,u=null,d=null,r=null,E=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",I),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=v.stencil?pi:On,Ue=v.stencil?Cr:Sn);const Ie={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ie),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new yn(u.textureWidth,u.textureHeight,{format:on,type:qt,depthTexture:new Lr(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new yn(p.framebufferWidth,p.framebufferHeight,{format:on,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(K){for(let J=0;J<K.removed.length;J++){const me=K.removed[J],Ue=w.indexOf(me);Ue>=0&&(w[Ue]=null,S[Ue].disconnect(me))}for(let J=0;J<K.added.length;J++){const me=K.added[J];let Ue=w.indexOf(me);if(Ue===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=w.length){w.push(me),Ue=Ie;break}else if(w[Ie]===null){w[Ie]=me,Ue=Ie;break}if(Ue===-1)break}const he=S[Ue];he&&he.connect(me)}}const V=new W,Q=new W;function ee(K,J,me){V.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const Ue=V.distanceTo(Q),he=J.projectionMatrix.elements,Ie=me.projectionMatrix.elements,Je=he[14]/(he[10]-1),Ne=he[14]/(he[10]+1),Xe=(he[9]+1)/he[5],Pe=(he[9]-1)/he[5],Oe=(he[8]-1)/he[0],nt=(Ie[8]+1)/Ie[0],F=Je*Oe,ht=Je*nt,Ye=Ue/(-Oe+nt),je=Ye*-Oe;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(je),K.translateZ(Ye),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),he[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const we=Je+Ye,R=Ne+Ye,x=F-je,k=ht+(Ue-je),j=Xe*Ne/R*we,te=Pe*Ne/R*we;K.projectionMatrix.makePerspective(x,k,j,te,we,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function U(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let J=K.near,me=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(me=m.depthFar)),z.near=T.near=y.near=J,z.far=T.far=y.far=me,(B!==z.near||A!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),B=z.near,A=z.far),z.layers.mask=K.layers.mask|6,y.layers.mask=z.layers.mask&3,T.layers.mask=z.layers.mask&5;const Ue=K.parent,he=z.cameras;U(z,Ue);for(let Ie=0;Ie<he.length;Ie++)U(he[Ie],Ue);he.length===2?ee(z,y,T):z.projectionMatrix.copy(y.projectionMatrix),H(K,z,Ue)};function H(K,J,me){me===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Do*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(K){return f[K]};let se=null;function Me(K,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const me=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ue=!1;me.length!==z.cameras.length&&(z.cameras.length=0,Ue=!0);for(let Ne=0;Ne<me.length;Ne++){const Xe=me[Ne];let Pe=null;if(p!==null)Pe=p.getViewport(Xe);else{const nt=d.getViewSubImage(u,Xe);Pe=nt.viewport,Ne===0&&(e.setRenderTargetTextures(E,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(E))}let Oe=D[Ne];Oe===void 0&&(Oe=new Xt,Oe.layers.enable(Ne),Oe.viewport=new yt,D[Ne]=Oe),Oe.matrix.fromArray(Xe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Xe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Ne===0&&(z.matrix.copy(Oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ue===!0&&z.cameras.push(Oe)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const Ne=d.getDepthInformation(me[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,r.renderState)}if(he&&he.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Ne=0;Ne<me.length;Ne++){const Xe=me[Ne].camera;if(Xe){let Pe=f[Xe];Pe||(Pe=new wd,f[Xe]=Pe);const Oe=d.getCameraImage(Xe);Pe.sourceTexture=Oe}}}}for(let me=0;me<S.length;me++){const Ue=w[me],he=S[me];Ue!==null&&he!==void 0&&he.update(Ue,J,l||a)}se&&se(K,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ee=new Rd;Ee.setAnimationLoop(Me),this.setAnimationLoop=function(K){se=K},this.dispose=function(){}}}const ci=new Mn,j0=new mt;function $0(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,yd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,b,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,v,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),b=v.envMap,E=v.envMapRotation;b&&(m.envMap.value=b,ci.copy(E),ci.x*=-1,ci.y*=-1,ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(j0.makeRotationFromEuler(ci)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function K0(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const E=b.program;i.uniformBlockBinding(v,E)}function l(v,b){let E=r[v.id];E===void 0&&(g(v),E=h(v),r[v.id]=E,v.addEventListener("dispose",m));const S=b.program;i.updateUBOMapping(v,S);const w=e.render.frame;s[v.id]!==w&&(u(v),s[v.id]=w)}function h(v){const b=d();v.__bindingPointIndex=b;const E=n.createBuffer(),S=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,S,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=r[v.id],E=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let w=0,C=E.length;w<C;w++){const P=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,T=P.length;y<T;y++){const D=P[y];if(p(D,w,y,S)===!0){const z=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let A=0;for(let L=0;L<B.length;L++){const I=B[L],N=_(I);typeof I=="number"||typeof I=="boolean"?(D.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,z+A,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=0,D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=0,D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=0):(I.toArray(D.__data,A),A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,b,E,S){const w=v.value,C=b+"_"+E;if(S[C]===void 0)return typeof w=="number"||typeof w=="boolean"?S[C]=w:S[C]=w.clone(),!0;{const P=S[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return S[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(v){const b=v.uniforms;let E=0;const S=16;for(let C=0,P=b.length;C<P;C++){const y=Array.isArray(b[C])?b[C]:[b[C]];for(let T=0,D=y.length;T<D;T++){const z=y[T],B=Array.isArray(z.value)?z.value:[z.value];for(let A=0,L=B.length;A<L;A++){const I=B[A],N=_(I),V=E%S,Q=V%N.boundary,ee=V+Q;E+=Q,ee!==0&&S-ee<N.storage&&(E+=S-ee),z.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=N.storage}}}const w=E%S;return w>0&&(E+=S-w),v.__size=E,v.__cache={},this}function _(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}const Z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fn=null;function J0(){return fn===null&&(fn=new Hh(Z0,16,16,Ki,Fn),fn.name="DFG_LUT",fn.minFilter=St,fn.magFilter=St,fn.wrapS=Ln,fn.wrapT=Ln,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}class Q0{constructor(e={}){const{canvas:t=ph(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=qt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=p,m=new Set([jo,Yo,qo]),f=new Set([qt,Sn,Rr,Cr,Wo,Xo]),v=new Uint32Array(4),b=new Int32Array(4);let E=null,S=null;const w=[],C=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let T=!1;this._outputColorSpace=Zt;let D=0,z=0,B=null,A=-1,L=null;const I=new yt,N=new yt;let V=null;const Q=new Ke(0);let ee=0,U=t.width,H=t.height,se=1,Me=null,Ee=null;const K=new yt(0,0,U,H),J=new yt(0,0,U,H);let me=!1;const Ue=new nc;let he=!1,Ie=!1;const Je=new mt,Ne=new W,Xe=new yt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function nt(){return B===null?se:1}let F=i;function ht(M,G){return t.getContext(M,G)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ho}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",it,!1),F===null){const G="webgl2";if(F=ht(G,M),F===null)throw ht(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ze("WebGLRenderer: "+M.message),M}let Ye,je,we,R,x,k,j,te,$,be,ue,ne,le,Z,ae,ie,fe,ce,ze,O,_e,de,Se,oe;function re(){Ye=new Jm(F),Ye.init(),de=new V0(F,Ye),je=new Vm(F,Ye,e,de),we=new G0(F,Ye),je.reversedDepthBuffer&&u&&we.buffers.depth.setReversed(!0),R=new tg(F),x=new w0,k=new H0(F,Ye,we,x,je,de,R),j=new Xm(y),te=new Zm(y),$=new sf(F),Se=new Gm(F,$),be=new Qm(F,$,R,Se),ue=new ig(F,be,$,R),ze=new ng(F,je,k),ie=new Wm(x),ne=new T0(y,j,te,Ye,je,Se,ie),le=new $0(y,x),Z=new R0,ae=new U0(Ye),ce=new zm(y,j,te,we,ue,g,c),fe=new B0(y,ue,je),oe=new K0(F,R,je,we),O=new Hm(F,Ye,R),_e=new eg(F,Ye,R),R.programs=ne.programs,y.capabilities=je,y.extensions=Ye,y.properties=x,y.renderLists=Z,y.shadowMap=fe,y.state=we,y.info=R}re(),_!==qt&&(P=new sg(_,t.width,t.height,r,s));const pe=new Y0(y,F);this.xr=pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(M){M!==void 0&&(se=M,this.setSize(U,H,!1))},this.getSize=function(M){return M.set(U,H)},this.setSize=function(M,G,Y=!0){if(pe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}U=M,H=G,t.width=Math.floor(M*se),t.height=Math.floor(G*se),Y===!0&&(t.style.width=M+"px",t.style.height=G+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,M,G)},this.getDrawingBufferSize=function(M){return M.set(U*se,H*se).floor()},this.setDrawingBufferSize=function(M,G,Y){U=M,H=G,se=Y,t.width=Math.floor(M*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,M,G)},this.setEffects=function(M){if(_===qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let G=0;G<M.length;G++)if(M[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,G,Y,q){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,G,Y,q),we.viewport(I.copy(K).multiplyScalar(se).round())},this.getScissor=function(M){return M.copy(J)},this.setScissor=function(M,G,Y,q){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,G,Y,q),we.scissor(N.copy(J).multiplyScalar(se).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(M){we.setScissorTest(me=M)},this.setOpaqueSort=function(M){Me=M},this.setTransparentSort=function(M){Ee=M},this.getClearColor=function(M){return M.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(M=!0,G=!0,Y=!0){let q=0;if(M){let X=!1;if(B!==null){const ge=B.texture.format;X=m.has(ge)}if(X){const ge=B.texture.type,Te=f.has(ge),ve=ce.getClearColor(),Ae=ce.getClearAlpha(),Ce=ve.r,Fe=ve.g,Le=ve.b;Te?(v[0]=Ce,v[1]=Fe,v[2]=Le,v[3]=Ae,F.clearBufferuiv(F.COLOR,0,v)):(b[0]=Ce,b[1]=Fe,b[2]=Le,b[3]=Ae,F.clearBufferiv(F.COLOR,0,b))}else q|=F.COLOR_BUFFER_BIT}G&&(q|=F.DEPTH_BUFFER_BIT),Y&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",it,!1),ce.dispose(),Z.dispose(),ae.dispose(),x.dispose(),j.dispose(),te.dispose(),ue.dispose(),Se.dispose(),oe.dispose(),ne.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",fc),pe.removeEventListener("sessionend",pc),ti.stop()};function ke(M){M.preventDefault(),Cs("WebGLRenderer: Context Lost."),T=!0}function ft(){Cs("WebGLRenderer: Context Restored."),T=!1;const M=R.autoReset,G=fe.enabled,Y=fe.autoUpdate,q=fe.needsUpdate,X=fe.type;re(),R.autoReset=M,fe.enabled=G,fe.autoUpdate=Y,fe.needsUpdate=q,fe.type=X}function it(M){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function hn(M){const G=M.target;G.removeEventListener("dispose",hn),En(G)}function En(M){Eu(M),x.remove(M)}function Eu(M){const G=x.get(M).programs;G!==void 0&&(G.forEach(function(Y){ne.releaseProgram(Y)}),M.isShaderMaterial&&ne.releaseShaderCache(M))}this.renderBufferDirect=function(M,G,Y,q,X,ge){G===null&&(G=Pe);const Te=X.isMesh&&X.matrixWorld.determinant()<0,ve=wu(M,G,Y,q,X);we.setMaterial(q,Te);let Ae=Y.index,Ce=1;if(q.wireframe===!0){if(Ae=be.getWireframeAttribute(Y),Ae===void 0)return;Ce=2}const Fe=Y.drawRange,Le=Y.attributes.position;let qe=Fe.start*Ce,ct=(Fe.start+Fe.count)*Ce;ge!==null&&(qe=Math.max(qe,ge.start*Ce),ct=Math.min(ct,(ge.start+ge.count)*Ce)),Ae!==null?(qe=Math.max(qe,0),ct=Math.min(ct,Ae.count)):Le!=null&&(qe=Math.max(qe,0),ct=Math.min(ct,Le.count));const xt=ct-qe;if(xt<0||xt===1/0)return;Se.setup(X,q,ve,Y,Ae);let vt,ut=O;if(Ae!==null&&(vt=$.get(Ae),ut=_e,ut.setIndex(vt)),X.isMesh)q.wireframe===!0?(we.setLineWidth(q.wireframeLinewidth*nt()),ut.setMode(F.LINES)):ut.setMode(F.TRIANGLES);else if(X.isLine){let De=q.linewidth;De===void 0&&(De=1),we.setLineWidth(De*nt()),X.isLineSegments?ut.setMode(F.LINES):X.isLineLoop?ut.setMode(F.LINE_LOOP):ut.setMode(F.LINE_STRIP)}else X.isPoints?ut.setMode(F.POINTS):X.isSprite&&ut.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Pr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const De=X._multiDrawStarts,rt=X._multiDrawCounts,et=X._multiDrawCount,Gt=Ae?$.get(Ae).bytesPerElement:1,bi=x.get(q).currentProgram.getUniforms();for(let Ht=0;Ht<et;Ht++)bi.setValue(F,"_gl_DrawID",Ht),ut.render(De[Ht]/Gt,rt[Ht])}else if(X.isInstancedMesh)ut.renderInstances(qe,xt,X.count);else if(Y.isInstancedBufferGeometry){const De=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,rt=Math.min(Y.instanceCount,De);ut.renderInstances(qe,xt,rt)}else ut.render(qe,xt)};function hc(M,G,Y){M.transparent===!0&&M.side===At&&M.forceSinglePass===!1?(M.side=zt,M.needsUpdate=!0,Xr(M,G,Y),M.side=Nn,M.needsUpdate=!0,Xr(M,G,Y),M.side=At):Xr(M,G,Y)}this.compile=function(M,G,Y=null){Y===null&&(Y=M),S=ae.get(Y),S.init(G),C.push(S),Y.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),M!==Y&&M.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(S.pushLight(X),X.castShadow&&S.pushShadow(X))}),S.setupLights();const q=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Te=0;Te<ge.length;Te++){const ve=ge[Te];hc(ve,Y,X),q.add(ve)}else hc(ge,Y,X),q.add(ge)}),S=C.pop(),q},this.compileAsync=function(M,G,Y=null){const q=this.compile(M,G,Y);return new Promise(X=>{function ge(){if(q.forEach(function(Te){x.get(Te).currentProgram.isReady()&&q.delete(Te)}),q.size===0){X(M);return}setTimeout(ge,10)}Ye.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Vs=null;function Tu(M){Vs&&Vs(M)}function fc(){ti.stop()}function pc(){ti.start()}const ti=new Rd;ti.setAnimationLoop(Tu),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(M){Vs=M,pe.setAnimationLoop(M),M===null?ti.stop():ti.start()},pe.addEventListener("sessionstart",fc),pe.addEventListener("sessionend",pc),this.render=function(M,G){if(G!==void 0&&G.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const Y=pe.enabled===!0&&pe.isPresenting===!0,q=P!==null&&(B===null||Y)&&P.begin(y,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(G),G=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,G,B),S=ae.get(M,C.length),S.init(G),C.push(S),Je.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ue.setFromProjectionMatrix(Je,_n,G.reversedDepth),Ie=this.localClippingEnabled,he=ie.init(this.clippingPlanes,Ie),E=Z.get(M,w.length),E.init(),w.push(E),pe.enabled===!0&&pe.isPresenting===!0){const Te=y.xr.getDepthSensingMesh();Te!==null&&Ws(Te,G,-1/0,y.sortObjects)}Ws(M,G,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(Me,Ee),Oe=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Oe&&ce.addToRenderList(E,M),this.info.render.frame++,he===!0&&ie.beginShadows();const X=S.state.shadowsArray;if(fe.render(X,M,G),he===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&P.hasRenderPass())===!1){const Te=E.opaque,ve=E.transmissive;if(S.setupLights(),G.isArrayCamera){const Ae=G.cameras;if(ve.length>0)for(let Ce=0,Fe=Ae.length;Ce<Fe;Ce++){const Le=Ae[Ce];gc(Te,ve,M,Le)}Oe&&ce.render(M);for(let Ce=0,Fe=Ae.length;Ce<Fe;Ce++){const Le=Ae[Ce];mc(E,M,Le,Le.viewport)}}else ve.length>0&&gc(Te,ve,M,G),Oe&&ce.render(M),mc(E,M,G)}B!==null&&z===0&&(k.updateMultisampleRenderTarget(B),k.updateRenderTargetMipmap(B)),q&&P.end(y),M.isScene===!0&&M.onAfterRender(y,M,G),Se.resetDefaultState(),A=-1,L=null,C.pop(),C.length>0?(S=C[C.length-1],he===!0&&ie.setGlobalState(y.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function Ws(M,G,Y,q){if(M.visible===!1)return;if(M.layers.test(G.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(G);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ue.intersectsSprite(M)){q&&Xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Je);const Te=ue.update(M),ve=M.material;ve.visible&&E.push(M,Te,ve,Y,Xe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ue.intersectsObject(M))){const Te=ue.update(M),ve=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Xe.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Xe.copy(Te.boundingSphere.center)),Xe.applyMatrix4(M.matrixWorld).applyMatrix4(Je)),Array.isArray(ve)){const Ae=Te.groups;for(let Ce=0,Fe=Ae.length;Ce<Fe;Ce++){const Le=Ae[Ce],qe=ve[Le.materialIndex];qe&&qe.visible&&E.push(M,Te,qe,Y,Xe.z,Le)}}else ve.visible&&E.push(M,Te,ve,Y,Xe.z,null)}}const ge=M.children;for(let Te=0,ve=ge.length;Te<ve;Te++)Ws(ge[Te],G,Y,q)}function mc(M,G,Y,q){const{opaque:X,transmissive:ge,transparent:Te}=M;S.setupLightsView(Y),he===!0&&ie.setGlobalState(y.clippingPlanes,Y),q&&we.viewport(I.copy(q)),X.length>0&&Wr(X,G,Y),ge.length>0&&Wr(ge,G,Y),Te.length>0&&Wr(Te,G,Y),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function gc(M,G,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){const qe=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new yn(1,1,{generateMipmaps:!0,type:qe?Fn:qt,minFilter:fi,samples:je.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const ge=S.state.transmissionRenderTarget[q.id],Te=q.viewport||I;ge.setSize(Te.z*y.transmissionResolutionScale,Te.w*y.transmissionResolutionScale);const ve=y.getRenderTarget(),Ae=y.getActiveCubeFace(),Ce=y.getActiveMipmapLevel();y.setRenderTarget(ge),y.getClearColor(Q),ee=y.getClearAlpha(),ee<1&&y.setClearColor(16777215,.5),y.clear(),Oe&&ce.render(Y);const Fe=y.toneMapping;y.toneMapping=vn;const Le=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),he===!0&&ie.setGlobalState(y.clippingPlanes,q),Wr(M,Y,q),k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ct=0,xt=G.length;ct<xt;ct++){const vt=G[ct],{object:ut,geometry:De,material:rt,group:et}=vt;if(rt.side===At&&ut.layers.test(q.layers)){const Gt=rt.side;rt.side=zt,rt.needsUpdate=!0,_c(ut,Y,q,De,rt,et),rt.side=Gt,rt.needsUpdate=!0,qe=!0}}qe===!0&&(k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge))}y.setRenderTarget(ve,Ae,Ce),y.setClearColor(Q,ee),Le!==void 0&&(q.viewport=Le),y.toneMapping=Fe}function Wr(M,G,Y){const q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ge=M.length;X<ge;X++){const Te=M[X],{object:ve,geometry:Ae,group:Ce}=Te;let Fe=Te.material;Fe.allowOverride===!0&&q!==null&&(Fe=q),ve.layers.test(Y.layers)&&_c(ve,G,Y,Ae,Fe,Ce)}}function _c(M,G,Y,q,X,ge){M.onBeforeRender(y,G,Y,q,X,ge),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(y,G,Y,q,M,ge),X.transparent===!0&&X.side===At&&X.forceSinglePass===!1?(X.side=zt,X.needsUpdate=!0,y.renderBufferDirect(Y,G,q,X,M,ge),X.side=Nn,X.needsUpdate=!0,y.renderBufferDirect(Y,G,q,X,M,ge),X.side=At):y.renderBufferDirect(Y,G,q,X,M,ge),M.onAfterRender(y,G,Y,q,X,ge)}function Xr(M,G,Y){G.isScene!==!0&&(G=Pe);const q=x.get(M),X=S.state.lights,ge=S.state.shadowsArray,Te=X.state.version,ve=ne.getParameters(M,X.state,ge,G,Y),Ae=ne.getProgramCacheKey(ve);let Ce=q.programs;q.environment=M.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(M.isMeshStandardMaterial?te:j).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?G.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",hn),Ce=new Map,q.programs=Ce);let Fe=Ce.get(Ae);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===Te)return vc(M,ve),Fe}else ve.uniforms=ne.getUniforms(M),M.onBeforeCompile(ve,y),Fe=ne.acquireProgram(ve,Ae),Ce.set(Ae,Fe),q.uniforms=ve.uniforms;const Le=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ie.uniform),vc(M,ve),q.needsLights=Ru(M),q.lightsStateVersion=Te,q.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMap.value=X.state.directionalShadowMap,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotShadowMap.value=X.state.spotShadowMap,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMap.value=X.state.pointShadowMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function xc(M){if(M.uniformsList===null){const G=M.currentProgram.getUniforms();M.uniformsList=bs.seqWithValue(G.seq,M.uniforms)}return M.uniformsList}function vc(M,G){const Y=x.get(M);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function wu(M,G,Y,q,X){G.isScene!==!0&&(G=Pe),k.resetTextureUnits();const ge=G.fog,Te=q.isMeshStandardMaterial?G.environment:null,ve=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Zi,Ae=(q.isMeshStandardMaterial?te:j).get(q.envMap||Te),Ce=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!Y.morphAttributes.position,qe=!!Y.morphAttributes.normal,ct=!!Y.morphAttributes.color;let xt=vn;q.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(xt=y.toneMapping);const vt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ut=vt!==void 0?vt.length:0,De=x.get(q),rt=S.state.lights;if(he===!0&&(Ie===!0||M!==L)){const Dt=M===L&&q.id===A;ie.setState(q,M,Dt)}let et=!1;q.version===De.__version?(De.needsLights&&De.lightsStateVersion!==rt.state.version||De.outputColorSpace!==ve||X.isBatchedMesh&&De.batching===!1||!X.isBatchedMesh&&De.batching===!0||X.isBatchedMesh&&De.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&De.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&De.instancing===!1||!X.isInstancedMesh&&De.instancing===!0||X.isSkinnedMesh&&De.skinning===!1||!X.isSkinnedMesh&&De.skinning===!0||X.isInstancedMesh&&De.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&De.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&De.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&De.instancingMorph===!1&&X.morphTexture!==null||De.envMap!==Ae||q.fog===!0&&De.fog!==ge||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Ce||De.vertexTangents!==Fe||De.morphTargets!==Le||De.morphNormals!==qe||De.morphColors!==ct||De.toneMapping!==xt||De.morphTargetsCount!==ut)&&(et=!0):(et=!0,De.__version=q.version);let Gt=De.currentProgram;et===!0&&(Gt=Xr(q,G,X));let bi=!1,Ht=!1,ar=!1;const pt=Gt.getUniforms(),kt=De.uniforms;if(we.useProgram(Gt.program)&&(bi=!0,Ht=!0,ar=!0),q.id!==A&&(A=q.id,Ht=!0),bi||L!==M){we.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(F,"projectionMatrix",M.projectionMatrix),pt.setValue(F,"viewMatrix",M.matrixWorldInverse);const Bt=pt.map.cameraPosition;Bt!==void 0&&Bt.setValue(F,Ne.setFromMatrixPosition(M.matrixWorld)),je.logarithmicDepthBuffer&&pt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),L!==M&&(L=M,Ht=!0,ar=!0)}if(De.needsLights&&(rt.state.directionalShadowMap.length>0&&pt.setValue(F,"directionalShadowMap",rt.state.directionalShadowMap,k),rt.state.spotShadowMap.length>0&&pt.setValue(F,"spotShadowMap",rt.state.spotShadowMap,k),rt.state.pointShadowMap.length>0&&pt.setValue(F,"pointShadowMap",rt.state.pointShadowMap,k)),X.isSkinnedMesh){pt.setOptional(F,X,"bindMatrix"),pt.setOptional(F,X,"bindMatrixInverse");const Dt=X.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),pt.setValue(F,"boneTexture",Dt.boneTexture,k))}X.isBatchedMesh&&(pt.setOptional(F,X,"batchingTexture"),pt.setValue(F,"batchingTexture",X._matricesTexture,k),pt.setOptional(F,X,"batchingIdTexture"),pt.setValue(F,"batchingIdTexture",X._indirectTexture,k),pt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(F,"batchingColorTexture",X._colorsTexture,k));const $t=Y.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&ze.update(X,Y,Gt),(Ht||De.receiveShadow!==X.receiveShadow)&&(De.receiveShadow=X.receiveShadow,pt.setValue(F,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(kt.envMap.value=Ae,kt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&G.environment!==null&&(kt.envMapIntensity.value=G.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=J0()),Ht&&(pt.setValue(F,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&Au(kt,ar),ge&&q.fog===!0&&le.refreshFogUniforms(kt,ge),le.refreshMaterialUniforms(kt,q,se,H,S.state.transmissionRenderTarget[M.id]),bs.upload(F,xc(De),kt,k)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(bs.upload(F,xc(De),kt,k),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(F,"center",X.center),pt.setValue(F,"modelViewMatrix",X.modelViewMatrix),pt.setValue(F,"normalMatrix",X.normalMatrix),pt.setValue(F,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Dt=q.uniformsGroups;for(let Bt=0,Xs=Dt.length;Bt<Xs;Bt++){const ni=Dt[Bt];oe.update(ni,Gt),oe.bind(ni,Gt)}}return Gt}function Au(M,G){M.ambientLightColor.needsUpdate=G,M.lightProbe.needsUpdate=G,M.directionalLights.needsUpdate=G,M.directionalLightShadows.needsUpdate=G,M.pointLights.needsUpdate=G,M.pointLightShadows.needsUpdate=G,M.spotLights.needsUpdate=G,M.spotLightShadows.needsUpdate=G,M.rectAreaLights.needsUpdate=G,M.hemisphereLights.needsUpdate=G}function Ru(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,G,Y){const q=x.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),x.get(M.texture).__webglTexture=G,x.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,G){const Y=x.get(M);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0};const Cu=F.createFramebuffer();this.setRenderTarget=function(M,G=0,Y=0){B=M,D=G,z=Y;let q=null,X=!1,ge=!1;if(M){const ve=x.get(M);if(ve.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),I.copy(M.viewport),N.copy(M.scissor),V=M.scissorTest,we.viewport(I),we.scissor(N),we.setScissorTest(V),A=-1;return}else if(ve.__webglFramebuffer===void 0)k.setupRenderTarget(M);else if(ve.__hasExternalTextures)k.rebindTextures(M,x.get(M.texture).__webglTexture,x.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Fe=M.depthTexture;if(ve.__boundDepthTexture!==Fe){if(Fe!==null&&x.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ge=!0);const Ce=x.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[G])?q=Ce[G][Y]:q=Ce[G],X=!0):M.samples>0&&k.useMultisampledRTT(M)===!1?q=x.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?q=Ce[Y]:q=Ce,I.copy(M.viewport),N.copy(M.scissor),V=M.scissorTest}else I.copy(K).multiplyScalar(se).floor(),N.copy(J).multiplyScalar(se).floor(),V=me;if(Y!==0&&(q=Cu),we.bindFramebuffer(F.FRAMEBUFFER,q)&&we.drawBuffers(M,q),we.viewport(I),we.scissor(N),we.setScissorTest(V),X){const ve=x.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,ve.__webglTexture,Y)}else if(ge){const ve=G;for(let Ae=0;Ae<M.textures.length;Ae++){const Ce=x.get(M.textures[Ae]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,Y,ve)}}else if(M!==null&&Y!==0){const ve=x.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,Y)}A=-1},this.readRenderTargetPixels=function(M,G,Y,q,X,ge,Te,ve=0){if(!(M&&M.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){we.bindFramebuffer(F.FRAMEBUFFER,Ae);try{const Ce=M.textures[ve],Fe=Ce.format,Le=Ce.type;if(!je.textureFormatReadable(Fe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Le)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=M.width-q&&Y>=0&&Y<=M.height-X&&(M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve),F.readPixels(G,Y,q,X,de.convert(Fe),de.convert(Le),ge))}finally{const Ce=B!==null?x.get(B).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,G,Y,q,X,ge,Te,ve=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae)if(G>=0&&G<=M.width-q&&Y>=0&&Y<=M.height-X){we.bindFramebuffer(F.FRAMEBUFFER,Ae);const Ce=M.textures[ve],Fe=Ce.format,Le=Ce.type;if(!je.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve),F.readPixels(G,Y,q,X,de.convert(Fe),de.convert(Le),0);const ct=B!==null?x.get(B).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,ct);const xt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await mh(F,xt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.deleteBuffer(qe),F.deleteSync(xt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,G=null,Y=0){const q=Math.pow(2,-Y),X=Math.floor(M.image.width*q),ge=Math.floor(M.image.height*q),Te=G!==null?G.x:0,ve=G!==null?G.y:0;k.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Te,ve,X,ge),we.unbindTexture()};const Pu=F.createFramebuffer(),Lu=F.createFramebuffer();this.copyTextureToTexture=function(M,G,Y=null,q=null,X=0,ge=null){ge===null&&(X!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=X,X=0):ge=0);let Te,ve,Ae,Ce,Fe,Le,qe,ct,xt;const vt=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(Y!==null)Te=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Ce=Y.min.x,Fe=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{const $t=Math.pow(2,-X);Te=Math.floor(vt.width*$t),ve=Math.floor(vt.height*$t),M.isDataArrayTexture?Ae=vt.depth:M.isData3DTexture?Ae=Math.floor(vt.depth*$t):Ae=1,Ce=0,Fe=0,Le=0}q!==null?(qe=q.x,ct=q.y,xt=q.z):(qe=0,ct=0,xt=0);const ut=de.convert(G.format),De=de.convert(G.type);let rt;G.isData3DTexture?(k.setTexture3D(G,0),rt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(k.setTexture2DArray(G,0),rt=F.TEXTURE_2D_ARRAY):(k.setTexture2D(G,0),rt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const et=F.getParameter(F.UNPACK_ROW_LENGTH),Gt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),bi=F.getParameter(F.UNPACK_SKIP_PIXELS),Ht=F.getParameter(F.UNPACK_SKIP_ROWS),ar=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,vt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le);const pt=M.isDataArrayTexture||M.isData3DTexture,kt=G.isDataArrayTexture||G.isData3DTexture;if(M.isDepthTexture){const $t=x.get(M),Dt=x.get(G),Bt=x.get($t.__renderTarget),Xs=x.get(Dt.__renderTarget);we.bindFramebuffer(F.READ_FRAMEBUFFER,Bt.__webglFramebuffer),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let ni=0;ni<Ae;ni++)pt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,x.get(M).__webglTexture,X,Le+ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,x.get(G).__webglTexture,ge,xt+ni)),F.blitFramebuffer(Ce,Fe,Te,ve,qe,ct,Te,ve,F.DEPTH_BUFFER_BIT,F.NEAREST);we.bindFramebuffer(F.READ_FRAMEBUFFER,null),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||x.has(M)){const $t=x.get(M),Dt=x.get(G);we.bindFramebuffer(F.READ_FRAMEBUFFER,Pu),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,Lu);for(let Bt=0;Bt<Ae;Bt++)pt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.__webglTexture,X,Le+Bt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$t.__webglTexture,X),kt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.__webglTexture,ge,xt+Bt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dt.__webglTexture,ge),X!==0?F.blitFramebuffer(Ce,Fe,Te,ve,qe,ct,Te,ve,F.COLOR_BUFFER_BIT,F.NEAREST):kt?F.copyTexSubImage3D(rt,ge,qe,ct,xt+Bt,Ce,Fe,Te,ve):F.copyTexSubImage2D(rt,ge,qe,ct,Ce,Fe,Te,ve);we.bindFramebuffer(F.READ_FRAMEBUFFER,null),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else kt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(rt,ge,qe,ct,xt,Te,ve,Ae,ut,De,vt.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(rt,ge,qe,ct,xt,Te,ve,Ae,ut,vt.data):F.texSubImage3D(rt,ge,qe,ct,xt,Te,ve,Ae,ut,De,vt):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,qe,ct,Te,ve,ut,De,vt.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,qe,ct,vt.width,vt.height,ut,vt.data):F.texSubImage2D(F.TEXTURE_2D,ge,qe,ct,Te,ve,ut,De,vt);F.pixelStorei(F.UNPACK_ROW_LENGTH,et),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Gt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,bi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ht),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ar),ge===0&&G.generateMipmaps&&F.generateMipmap(rt),we.unbindTexture()},this.initRenderTarget=function(M){x.get(M).__webglFramebuffer===void 0&&k.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?k.setTextureCube(M,0):M.isData3DTexture?k.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?k.setTexture2DArray(M,0):k.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){D=0,z=0,B=null,we.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}let Hi=null;function Gr(){if(!Hi){const n=window.AudioContext||window.webkitAudioContext;n&&(Hi=new n)}return Hi&&Hi.state==="suspended"&&Hi.resume().catch(()=>{}),Hi}function Id(){try{const n=Gr();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="sine",e.frequency.setValueAtTime(95+Math.random()*20,n.currentTime),e.frequency.exponentialRampToValueAtTime(35,n.currentTime+.08),t.gain.setValueAtTime(.06,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.08),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.08)}catch{}}function Ud(){try{const n=Gr();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="triangle",e.frequency.setValueAtTime(1850,n.currentTime),e.frequency.exponentialRampToValueAtTime(2450,n.currentTime+.12),t.gain.setValueAtTime(.18,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.28),e.connect(t),t.connect(n.destination),e.start(n.currentTime),e.stop(n.currentTime+.28),[523.25,659.25,783.99,1046.5].forEach((a,o)=>{const c=n.createOscillator(),l=n.createGain();c.type="sine",c.frequency.setValueAtTime(a,n.currentTime);const h=n.currentTime+o*.05;l.gain.setValueAtTime(0,h),l.gain.linearRampToValueAtTime(.16,h+.02),l.gain.exponentialRampToValueAtTime(1e-4,h+.5),c.connect(l),l.connect(n.destination),c.start(h),c.stop(h+.55)});const r=n.createOscillator(),s=n.createGain();r.type="sine",r.frequency.setValueAtTime(110,n.currentTime+.12),r.frequency.exponentialRampToValueAtTime(42,n.currentTime+.45),s.gain.setValueAtTime(.26,n.currentTime+.12),s.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.45),r.connect(s),s.connect(n.destination),r.start(n.currentTime+.12),r.stop(n.currentTime+.45)}catch{}}function e_(){try{const n=Gr();if(!n)return;[523.25,659.25,783.99,1046.5].forEach((t,i)=>{const r=n.createOscillator(),s=n.createGain();r.type="triangle",r.frequency.setValueAtTime(t,n.currentTime);const a=n.currentTime+i*.055;s.gain.setValueAtTime(0,a),s.gain.linearRampToValueAtTime(.18,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.45),r.connect(s),s.connect(n.destination),r.start(a),r.stop(a+.5)})}catch{}}function Nd(){try{const n=Gr();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="triangle",e.frequency.setValueAtTime(440,n.currentTime),e.frequency.exponentialRampToValueAtTime(880,n.currentTime+.15),t.gain.setValueAtTime(.08,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.18),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.18)}catch{}}function Fd(){try{const n=Gr();if(!n)return;const e=n.createOscillator(),t=n.createGain();e.type="sine",e.frequency.setValueAtTime(600,n.currentTime),e.frequency.exponentialRampToValueAtTime(150,n.currentTime+.25),t.gain.setValueAtTime(.12,n.currentTime),t.gain.exponentialRampToValueAtTime(.001,n.currentTime+.25),e.connect(t),t.connect(n.destination),e.start(),e.stop(n.currentTime+.25)}catch{}}const Od=Object.freeze(Object.defineProperty({__proto__:null,playCabinetExit:Fd,playCabinetHighlight:Nd,playCoinDrop:Ud,playDopamineChime:e_,playFootstep:Id},Symbol.toStringTag,{value:"Module"}));class t_{constructor(e,t=null){this.scene=e,this.identity=t||{tag:"MARC1",color:62975,colorHex:"#00f5ff"},this.tag=(this.identity.tag||"MARC1").slice(0,5).toUpperCase(),this.colorNum=this.identity.color||62975,this.colorHex=this.identity.colorHex||"#00f5ff",this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetRotation=Math.PI,this.speed=7.5,this.radius=.45,this.velocityY=0,this.gravity=-26,this.jumpStrength=8.5,this.isGrounded=!0,this.isMoving=!1,this.walkCycle=0,this.footstepTimer=0,this.keys={forward:!1,backward:!1,left:!1,right:!1},this.joystickVector={x:0,y:0},this.navTarget=null,this.createAvatarMesh(),this.createNameTagSprite(),this.bindKeyboard()}setIdentity(e){e&&(this.identity=e,this.tag=(e.tag||"MARC1").slice(0,5).toUpperCase(),this.colorNum=e.color||62975,this.colorHex=e.colorHex||"#00f5ff",this.torso&&this.torso.material.color.setHex(this.colorNum),this.leftFoot&&this.leftFoot.material.color.setHex(this.colorNum),this.rightFoot&&this.rightFoot.material.color.setHex(this.colorNum),this.nameSprite&&(this.group.remove(this.nameSprite),this.createNameTagSprite()))}createNameTagSprite(){const e=document.createElement("canvas");e.width=320,e.height=110;const t=e.getContext("2d");t.fillStyle="rgba(8, 9, 16, 0.88)",t.strokeStyle=this.colorHex,t.lineWidth=4,t.beginPath(),t.roundRect(10,10,e.width-20,e.height-20,24),t.fill(),t.stroke(),t.font='bold 36px "Press Start 2P", monospace, sans-serif',t.fillStyle="#ffd32a",t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ffd32a",t.shadowBlur=8,t.fillText(this.tag,e.width/2,42),t.shadowBlur=0,t.font='bold 16px "Outfit", sans-serif',t.fillStyle=this.colorHex,t.fillText("VOCÊ",e.width/2,78);const i=new kn(e),r=new tc({map:i,transparent:!0,depthTest:!1});this.nameSprite=new Td(r),this.nameSprite.position.set(0,2.35,0),this.nameSprite.scale.set(1.6,.55,1),this.group.add(this.nameSprite)}setNavigationTarget(e,t,i=null){this.navTarget={x:e,z:t,onArrival:i}}clearNavigationTarget(){this.navTarget=null}createAvatarMesh(){this.group=new xn,this.group.position.set(this.x,this.y,this.z);const e=new Yt(.38,.32,.8,16),t=new _t({color:this.colorNum,roughness:.3,metalness:.2});this.torso=new ye(e,t),this.torso.position.y=.85,this.group.add(this.torso);const i=new at(.04,.78,.05),r=new dt({color:16711807}),s=new ye(i,r);s.position.set(0,.85,.35),this.group.add(s);const a=new vi(.42,24,24),o=new _t({color:16777215,roughness:.2,metalness:.1});this.head=new ye(a,o),this.head.position.y=1.55,this.group.add(this.head),this.visorCanvas=document.createElement("canvas"),this.visorCanvas.width=256,this.visorCanvas.height=128,this.visorCtx=this.visorCanvas.getContext("2d"),this.renderVisorEyes(!1),this.visorTex=new kn(this.visorCanvas),this.visorTex.needsUpdate=!0;const c=new dt({map:this.visorTex,transparent:!0}),l=new Yt(.43,.43,.3,16,1,!1,Math.PI*.15,Math.PI*.7);this.visorMesh=new ye(l,c),this.visorMesh.position.set(0,1.55,.02),this.visorMesh.rotation.y=-Math.PI/2,this.group.add(this.visorMesh);const h=new at(.42,.5,.22),d=new _t({color:1712440,roughness:.4,metalness:.6}),u=new ye(h,d);u.position.set(0,.9,-.36),this.group.add(u);const p=new Yt(.06,.04,.12,12),g=new dt({color:62975}),_=new ye(p,g);_.position.set(-.12,.6,-.36);const m=new ye(p,g);m.position.set(.12,.6,-.36),this.group.add(_),this.group.add(m);const f=new vi(.14,12,12),v=new _t({color:this.colorNum,roughness:.3});this.leftFoot=new ye(f,v),this.leftFoot.position.set(-.2,.14,0),this.group.add(this.leftFoot),this.rightFoot=new ye(f,v),this.rightFoot.position.set(.2,.14,0),this.group.add(this.rightFoot);const b=new Ns(.55,24),E=new dt({color:0,transparent:!0,opacity:.45});this.shadow=new ye(b,E),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.02,this.group.add(this.shadow),this.scene.add(this.group)}renderVisorEyes(e){const t=this.visorCtx;t.clearRect(0,0,256,128),t.fillStyle="#060814",t.fillRect(0,0,256,128),t.fillStyle=this.colorHex,t.shadowColor=this.colorHex,t.shadowBlur=12,e?(t.lineWidth=6,t.strokeStyle=this.colorHex,t.beginPath(),t.arc(85,64,22,.2,Math.PI-.2,!1),t.stroke(),t.beginPath(),t.arc(171,64,22,.2,Math.PI-.2,!1),t.stroke()):(t.beginPath(),t.ellipse(85,60,20,26,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(171,60,20,26,0,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.shadowBlur=0,t.beginPath(),t.arc(90,52,7,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(176,52,7,0,Math.PI*2),t.fill())}bindKeyboard(){window.addEventListener("keydown",e=>{["ArrowUp","KeyW"].includes(e.code)&&(this.keys.forward=!0),["ArrowDown","KeyS"].includes(e.code)&&(this.keys.backward=!0),["ArrowLeft","KeyA"].includes(e.code)&&(this.keys.left=!0),["ArrowRight","KeyD"].includes(e.code)&&(this.keys.right=!0),e.code==="Space"&&this.isGrounded&&(this.velocityY=this.jumpStrength,this.isGrounded=!1)}),window.addEventListener("keyup",e=>{["ArrowUp","KeyW"].includes(e.code)&&(this.keys.forward=!1),["ArrowDown","KeyS"].includes(e.code)&&(this.keys.backward=!1),["ArrowLeft","KeyA"].includes(e.code)&&(this.keys.left=!1),["ArrowRight","KeyD"].includes(e.code)&&(this.keys.right=!1)})}setJoystickVector(e,t){this.joystickVector.x=e,this.joystickVector.y=t}update(e,t,i,r=null){let s=0,a=0;if(this.keys.forward&&(a-=1),this.keys.backward&&(a+=1),this.keys.left&&(s-=1),this.keys.right&&(s+=1),(Math.abs(this.joystickVector.x)>.1||Math.abs(this.joystickVector.y)>.1)&&(s+=this.joystickVector.x,a+=this.joystickVector.y),Math.hypot(s,a)>.01)this.navTarget=null;else if(this.navTarget){const u=this.navTarget.x-this.x,p=this.navTarget.z-this.z,g=Math.hypot(u,p);if(g<.35){const _=this.navTarget.onArrival;this.navTarget=null,_&&_()}else s=u/g,a=p/g}const c=Math.hypot(s,a);if(c>.01){s/=c,a/=c,this.isMoving=!0,this.targetRotation=Math.atan2(s,a);const u=this.speed*e,p=this.x+s*u,g=this.z+a*u;let _=!0;if(t&&(p-this.radius<t.minX||p+this.radius>t.maxX)&&(_=!1),i&&_){for(const f of i)if(f.collider&&f.collider.intersectsSphere(new W(p,0,this.z),this.radius)){_=!1;break}}_&&(this.x=p);let m=!0;if(t&&(g-this.radius<t.minZ||g+this.radius>t.maxZ)&&(m=!1),i&&m){for(const f of i)if(f.collider&&f.collider.intersectsSphere(new W(this.x,0,g),this.radius)){m=!1;break}}m&&(this.z=g),this.walkCycle+=e*14,this.footstepTimer+=e,this.footstepTimer>.28&&(Id(),this.footstepTimer=0)}else this.isMoving=!1,this.walkCycle=0;let l=this.targetRotation-this.rotation;for(;l<-Math.PI;)l+=Math.PI*2;for(;l>Math.PI;)l-=Math.PI*2;if(this.rotation+=l*.25,this.isGrounded||(this.velocityY+=this.gravity*e,this.y+=this.velocityY*e,this.y<=0&&(this.y=0,this.velocityY=0,this.isGrounded=!0)),this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.rotation,this.shadow){const u=Math.max(.35,1-this.y*.25);this.shadow.scale.set(u,u,u),this.shadow.position.y=.02-this.y}this.isGrounded?this.isMoving?(this.leftFoot.position.y=0,this.rightFoot.position.y=0,this.leftFoot.position.z=Math.sin(this.walkCycle)*.22,this.rightFoot.position.z=-Math.sin(this.walkCycle)*.22,this.torso.rotation.z=0):(this.leftFoot.position.y=0,this.rightFoot.position.y=0,this.leftFoot.position.z=0,this.rightFoot.position.z=0,this.torso.rotation.z=0):(this.leftFoot.position.y=.08,this.rightFoot.position.y=.08,this.leftFoot.position.z=-.08,this.rightFoot.position.z=.08,this.torso.rotation.z=0);const h=performance.now()*.001,d=Math.sin(h*1.5)>.94;this.lastBlinkState!==d&&(this.lastBlinkState=d,this.renderVisorEyes(d),this.visorTex.needsUpdate=!0),this.nameSprite&&r&&this.nameSprite.quaternion.copy(r.quaternion)}}const Sl=[{primary:62975,secondary:7940298,accent:16711807},{primary:16711807,secondary:62975,accent:16765738},{primary:393121,secondary:62975,accent:16711807},{primary:16765738,secondary:16711807,accent:62975},{primary:7940298,secondary:62975,accent:393121}];function n_(n,e){const t=document.createElement("canvas");t.width=512,t.height=128;const i=t.getContext("2d"),r=i.createLinearGradient(0,0,512,128);r.addColorStop(0,"#0a0d24"),r.addColorStop(.5,"#191f48"),r.addColorStop(1,"#0a0d24"),i.fillStyle=r,i.fillRect(0,0,512,128),i.strokeStyle="#"+e.secondary.toString(16).padStart(6,"0"),i.lineWidth=4,i.strokeRect(6,6,500,116),i.strokeStyle="#"+e.primary.toString(16).padStart(6,"0"),i.lineWidth=2,i.strokeRect(12,12,488,104),i.fillStyle="#ffffff",i.font='bold 36px "Segoe UI", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),i.shadowBlur=15;const s=`${n.icon||"🎮"} ${(n.name||"ARCADE").toUpperCase()}`;i.fillText(s,256,54),i.font="bold 16px monospace",i.fillStyle="#"+e.accent.toString(16).padStart(6,"0"),i.shadowBlur=8,i.fillText(`• ${n.category?n.category.toUpperCase():"CLASSIC ARCADE"} •`,256,96);const a=new kn(t);return a.minFilter=St,a.needsUpdate=!0,a}function i_(n,e){const t=document.createElement("canvas");t.width=512,t.height=512;const i=t.getContext("2d"),r=a=>{i.fillStyle="#060a1e",i.fillRect(0,0,512,512),i.strokeStyle="rgba(0, 245, 255, 0.2)",i.lineWidth=2;const o=a*30%32;for(let l=o;l<512;l+=32)i.beginPath(),i.moveTo(0,l),i.lineTo(512,l),i.stroke();for(let l=0;l<512;l+=32)i.beginPath(),i.moveTo(l,0),i.lineTo(l,512),i.stroke();i.fillStyle="rgba(255, 0, 127, 0.4)",i.fillRect(100,35,312,36),i.strokeStyle="#ff007f",i.lineWidth=2,i.strokeRect(100,35,312,36),i.fillStyle="#ffffff",i.font='bold 16px "Press Start 2P", monospace, sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText("★ ARCADE CLASSIC ★",256,53);const c=1+Math.sin(a*3.5)*.08;i.save(),i.translate(256,160),i.scale(c,c),i.font="76px sans-serif",i.textAlign="center",i.textBaseline="middle",i.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),i.shadowBlur=24,i.fillText(n.icon||"🎮",0,0),i.restore(),i.font='bold 28px "Outfit", Arial, sans-serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor="#"+e.primary.toString(16).padStart(6,"0"),i.shadowBlur=18,i.fillStyle="#ffffff",i.fillText((n.name||"ARCADE GAME").toUpperCase(),256,260),i.font="bold 16px monospace",i.fillStyle="#ffd32a",i.shadowColor="#ffd32a",i.shadowBlur=10,i.fillText(`• ${(n.category||"ACTION").toUpperCase()} • 60 FPS •`,256,310),Math.floor(a*2.5)%2===0&&(i.fillStyle="#"+e.primary.toString(16).padStart(6,"0"),i.font="bold 22px monospace",i.shadowColor="#"+e.accent.toString(16).padStart(6,"0"),i.shadowBlur=16,i.fillText("▶ PRESS [ENTER/E] TO PLAY ◀",256,410),i.font="14px monospace",i.fillStyle="#94a3b8",i.shadowBlur=0,i.fillText("INSERT 1 COIN (25¢)",256,442)),i.fillStyle="rgba(0, 0, 0, 0.28)";for(let l=0;l<512;l+=4)i.fillRect(0,l,512,2);i.strokeStyle="#"+e.primary.toString(16).padStart(6,"0"),i.lineWidth=8,i.strokeRect(4,4,504,504),s.needsUpdate=!0},s=new kn(t);return s.minFilter=St,r(0),{texture:s,update:r}}function r_(n,e,t=0){const i=new xn;i.position.set(e.x,0,e.z),i.rotation.y=t;let r=0;for(let j=0;j<(n.id||"").length;j++)r=(r<<5)-r+n.id.charCodeAt(j);let s=Sl[Math.abs(r)%Sl.length];n.id==="street-fighter-2"&&(s={primary:16726832,secondary:26367,accent:16765738}),n.id==="super-mario"&&(s={primary:15017249,secondary:4436039,accent:16502784}),n.id==="super-bomberman"&&(s={primary:28908,secondary:16777215,accent:16729943}),n.id==="gta-2"&&(s={primary:16765738,secondary:26367,accent:16726072}),n.id==="classic-doom"&&(s={primary:16726072,secondary:16752410,accent:16765738}),n.id==="classic-pacman"&&(s={primary:16765738,secondary:26367,accent:16777215});const a=new _t({color:1975357,roughness:.4,metalness:.3}),o=new _t({color:s.primary,roughness:.3,metalness:.4}),c=new dt({color:s.primary}),l=new at(1.6,1.4,1.3),h=new ye(l,a);h.position.set(0,.7,0),i.add(h);const d=new tn(.7,.8),u=new _t({color:790304,roughness:.5,metalness:.7}),p=new ye(d,u);p.position.set(0,.75,.66),i.add(p);const g=new at(.14,.1,.04),_=new dt({color:16755200}),m=new ye(g,_);m.position.set(-.16,.9,.68);const f=new ye(g,_);f.position.set(.16,.9,.68),i.add(m),i.add(f);const v=new at(1.65,.22,.7),b=new _t({color:1316907,roughness:.3,metalness:.4}),E=new ye(v,b);E.position.set(0,1.4,.48),E.rotation.x=.22,i.add(E);const S=new Yt(.02,.02,.14),w=new _t({color:13421772,metalness:.9}),C=new vi(.05,12,12),P=new dt({color:s.accent}),y=new ye(S,w);y.position.set(-.35,1.55,.48);const T=new ye(C,P);T.position.set(-.35,1.63,.48),i.add(y),i.add(T);const D=new Yt(.035,.035,.03,10),z=[62975,16711807,16765738,393121];for(let j=0;j<2;j++)for(let te=0;te<3;te++){const $=new dt({color:z[(j*3+te)%z.length]}),be=new ye(D,$);be.position.set(.12+te*.1,1.48-j*.06,.54-j*.08),i.add(be)}const B=new at(1.6,1.3,1.1),A=new ye(B,a);A.position.set(0,2.1,-.05),i.add(A);const L=new at(1.4,1,.08),I=new _t({color:527128,roughness:.8}),N=new ye(L,I);N.position.set(0,2.15,.46),N.rotation.x=-.25,i.add(N);const{texture:V,update:Q}=i_(n,s),ee=new tn(1.22,.88),U=new dt({map:V}),H=new ye(ee,U);H.position.set(0,2.15,.51),H.rotation.x=-.25,i.add(H);const se=new at(1.65,.6,.85),Me=new ye(se,a);Me.position.set(0,3,.2),i.add(Me);const Ee=n_(n,s),K=new dt({map:Ee}),J=new tn(1.58,.52),me=new ye(J,K);me.position.set(0,3.02,.64),me.rotation.x=-.08,i.add(me);const Ue=new at(1.68,.05,.05),he=new ye(Ue,c);he.position.set(0,3.3,.66);const Ie=new ye(Ue,c);Ie.position.set(0,2.74,.62),i.add(he),i.add(Ie);const Je=new at(.06,2.7,1.25),Ne=new ye(Je,o);Ne.position.set(-.82,1.7,.05);const Xe=new ye(Je,o);Xe.position.set(.82,1.7,.05),i.add(Ne),i.add(Xe);const Pe=new Qn(1.2,1.45,32),Oe=new dt({color:s.primary,side:At,transparent:!0,opacity:.35}),nt=new ye(Pe,Oe);nt.rotation.x=-Math.PI/2,nt.position.set(0,.03,.8),i.add(nt);const F=Math.sin(t)*2.2,ht=Math.cos(t)*2.2,Ye=e.x+F,je=e.z+ht,we=Math.abs(Math.sin(t))>.5,R=we?.65:.78,x=we?.78:.65,k={minX:e.x-R,maxX:e.x+R,minZ:e.z-x,maxZ:e.z+x};return{game:n,group:i,theme:s,screenMesh:H,marqueeFace:me,floorGlow:nt,standSpot:{x:Ye,z:je},position:{x:e.x,z:e.z},rotationY:t,collisionBox:k,isHovered:!1,_lastFrame:0,update(j,te){if(this.isHovered)Q(j),nt.material.opacity=.7+Math.sin(j*6)*.25;else{if(te){const be=te.x-e.x,ue=te.z-e.z;if(be*be+ue*ue>144)return}const $=Math.floor(j*1.5);this._lastFrame!==$&&(this._lastFrame=$,Q(j)),nt.material.opacity=.3}}}}class s_{constructor(){this.catalog=null,this.tracks=[],this.artists=[],this.currentIndex=0,this.isPlaying=!1,this.isDucked=!1,this.volume=.75,this.duckMultiplier=1,this.duckInterval=null,this.subscribers=new Set,this.unlocked=!1,this.audioElement=new Audio,this.audioElement.preload="auto",this.audioElement.volume=this.volume,this.currentTrackTime=0,this.tickerInterval=null,this.bindAudioEvents()}bindAudioEvents(){this.audioElement.addEventListener("ended",()=>{this.next()}),this.audioElement.addEventListener("timeupdate",()=>{isNaN(this.audioElement.currentTime)||(this.currentTrackTime=this.audioElement.currentTime)}),this.audioElement.addEventListener("play",()=>{this.isPlaying=!0,this.notify()}),this.audioElement.addEventListener("pause",()=>{this.isPlaying=!1,this.notify()}),this.audioElement.addEventListener("error",e=>{console.warn("Audio playback error on current track:",e,this.audioElement.error),this.isPlaying=!1,this.notify()})}resolveUrl(e){if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;const t=e.replace(/^(\.\/|\/)/,"");try{return new URL(t,window.location.href).href}catch{return t}}async init(){const e=await this.loadCatalog();return e&&(this.catalog=e,this.tracks=(e.tracks||[]).map(t=>({...t,resolvedAudioUrl:this.resolveUrl(t.audioUrl)})),this.artists=e.artists||[]),this.tracks.length>0&&!this.audioElement.src&&(this.audioElement.src=this.tracks[0].resolvedAudioUrl,this.audioElement.load()),this.startTicker(),this.notify(),this}async loadCatalog(){const e=[new URL("music/catalog.json",window.location.href).href,"./music/catalog.json","/music/catalog.json"];for(const t of e)try{const i=await fetch(t);if(i.ok){const r=await i.json();if(r&&r.tracks&&r.tracks.length>0)return r}}catch{}return console.warn("Could not locate catalog.json in any fallback path"),null}getCurrentTrack(){return this.tracks.length?this.tracks[this.currentIndex]:null}async playTrack(e){if(!this.tracks.length)return;e<0&&(e=this.tracks.length-1),e>=this.tracks.length&&(e=0),this.currentIndex=e;const t=this.getCurrentTrack();if(!t)return;this.currentTrackTime=0;const i=t.resolvedAudioUrl||this.resolveUrl(t.audioUrl);this.audioElement.src!==i&&(this.audioElement.src=i,this.audioElement.load()),this.applyVolume();try{await this.audioElement.play(),this.isPlaying=!0,this.unlocked=!0,this.notify()}catch(r){console.warn("Audio play() error or user gesture required:",r),this.isPlaying=!1,this.notify()}}async togglePlay(){if(this.tracks.length)if(this.isPlaying)this.pause();else{const e=this.getCurrentTrack(),t=(e==null?void 0:e.resolvedAudioUrl)||this.resolveUrl(e==null?void 0:e.audioUrl);(!this.audioElement.src||this.audioElement.src.endsWith("/")||this.audioElement.src==="about:blank")&&t&&(this.audioElement.src=t,this.audioElement.load()),this.applyVolume();try{await this.audioElement.play(),this.isPlaying=!0,this.unlocked=!0,this.notify()}catch(i){console.warn("Audio play() error:",i),this.playTrack(this.currentIndex)}}}pause(){this.isPlaying=!1,this.audioElement.pause(),this.notify()}next(){const e=(this.currentIndex+1)%(this.tracks.length||1);this.playTrack(e)}prev(){const e=(this.currentIndex-1+(this.tracks.length||1))%(this.tracks.length||1);this.playTrack(e)}applyVolume(){const e=this.volume*this.duckMultiplier;this.audioElement.volume=Math.max(0,Math.min(1,e))}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.applyVolume(),this.notify()}duck(e){this.isDucked=e;const t=e?.12:1;this.duckInterval&&clearInterval(this.duckInterval);const i=e?-.1:.1;this.duckInterval=setInterval(()=>{Math.abs(this.duckMultiplier-t)<.1?(this.duckMultiplier=t,this.applyVolume(),clearInterval(this.duckInterval),this.duckInterval=null):(this.duckMultiplier+=i,this.applyVolume())},25)}unlockAndPlay(){this.unlocked||(this.unlocked=!0,this.isPlaying||this.playTrack(this.currentIndex))}getFrequencyData(e){var s;if(!this.isPlaying){e.fill(0);return}const t=performance.now()/1e3,i=((s=this.getCurrentTrack())==null?void 0:s.bpm)||132,r=t*(i/60)%1;for(let a=0;a<e.length;a++){const o=Math.sin(t*8+a*.5),c=Math.pow(Math.sin(r*Math.PI),2),l=Math.max(.08,c*.65+(o*.5+.5)*.35);e[a]=Math.floor(l*255*(this.isDucked?.2:1))}}startTicker(){this.tickerInterval&&clearInterval(this.tickerInterval),this.tickerInterval=setInterval(()=>{this.isPlaying&&(isNaN(this.audioElement.currentTime)||(this.currentTrackTime=this.audioElement.currentTime),this.notify("time"))},250)}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notify(e="state"){const t=this.getCurrentTrack(),i=this.audioElement&&this.audioElement.duration&&!isNaN(this.audioElement.duration)&&this.audioElement.duration>0?this.audioElement.duration:t&&t.durationSec||150,r={type:e,isPlaying:this.isPlaying,currentTrack:t,currentIndex:this.currentIndex,currentTime:this.currentTrackTime,duration:i,volume:this.volume,isDucked:this.isDucked,isProcedural:!1};this.subscribers.forEach(s=>{try{s(r)}catch(a){console.error(a)}})}}const We=new s_;typeof window<"u"&&(window.__MUSIC_MANAGER__=We);function a_(){const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d"),t=new kn(n);t.minFilter=St;const i=new Uint8Array(32);return{texture:t,render:(s,a)=>{e.clearRect(0,0,512,512);const o=e.createLinearGradient(0,0,0,512);o.addColorStop(0,"#0a091d"),o.addColorStop(.5,"#151336"),o.addColorStop(1,"#080718"),e.fillStyle=o,e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.12)",e.lineWidth=1;for(let v=0;v<512;v+=32)e.beginPath(),e.moveTo(0,v),e.lineTo(512,v),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.35)",e.fillRect(80,28,352,34),e.strokeStyle="#ff007f",e.lineWidth=2,e.strokeRect(80,28,352,34),e.fillStyle="#ffffff",e.font='bold 15px "Press Start 2P", monospace, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("★ GAME SOUNDTRACKS ★",256,45);const c=We.getCurrentTrack(),l=We.isPlaying;e.fillStyle="#00f5ff",e.font='bold 22px "Outfit", Arial, sans-serif',e.shadowColor="#00f5ff",e.shadowBlur=12;const h=c?c.title:"ARCADE CLASSICS FM";e.fillText(h,256,105),e.fillStyle="#ffd32a",e.font="16px monospace",e.shadowColor="#ffd32a",e.shadowBlur=8;const d=c?`${c.artistName} • ${c.game||"ORIGINAL OST"}`:"TRILHAS DOS FLIPERAMAS";e.fillText(d,256,138),We.getFrequencyData(i);const u=20,p=16,g=6,_=(512-(u*(p+g)-g))/2,m=320,f=120;for(let v=0;v<u;v++){let b=i[v%i.length]/255;(!l||b<.05)&&(b=.15+.12*Math.sin(s*3+v*.4));const E=Math.max(6,b*f),S=_+v*(p+g),w=m-E,C=e.createLinearGradient(0,m,0,m-f);C.addColorStop(0,"#00f5ff"),C.addColorStop(.6,"#ff007f"),C.addColorStop(1,"#ffd32a"),e.fillStyle=C,e.shadowColor="#ff007f",e.shadowBlur=8,e.fillRect(S,w,p,E),e.fillStyle="#ffffff",e.fillRect(S,w-4,p,3)}e.strokeStyle="#00f5ff",e.lineWidth=2,e.beginPath(),e.moveTo(_-10,m+2),e.lineTo(_+u*(p+g)+4,m+2),e.stroke(),e.shadowBlur=0,l?(e.fillStyle="#05ffa1",e.font="bold 16px monospace",e.fillText("● EM REPRODUÇÃO [SPACE = MENU]",256,380)):(e.fillStyle="#ff007f",e.font="bold 16px monospace",e.fillText("■ EM ESPERA [SPACE = ABRIR]",256,380)),(Math.floor(s*2.5)%2===0||a)&&(e.fillStyle="#00f5ff",e.font="bold 20px monospace",e.shadowColor="#00f5ff",e.shadowBlur=14,e.fillText("▶ PRESSIONE [ESPAÇO] PARA OUVIR ◀",256,435)),e.fillStyle="rgba(0, 0, 0, 0.28)";for(let v=0;v<512;v+=4)e.fillRect(0,v,512,2);e.strokeStyle=a?"#00f5ff":"#ff007f",e.lineWidth=8,e.strokeRect(4,4,504,504),t.needsUpdate=!0}}}function o_(){const n=document.createElement("canvas");n.width=512,n.height=160;const e=n.getContext("2d"),t=e.createLinearGradient(0,0,512,160);t.addColorStop(0,"#0c0721"),t.addColorStop(.5,"#220b38"),t.addColorStop(1,"#0c0721"),e.fillStyle=t,e.fillRect(0,0,512,160),e.strokeStyle="#ff007f",e.lineWidth=5,e.strokeRect(6,6,500,148),e.strokeStyle="#00f5ff",e.lineWidth=2,e.strokeRect(12,12,488,136),e.fillStyle="#ffffff",e.font='bold 36px "Segoe UI", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#00f5ff",e.shadowBlur=20,e.fillText("📻 RETRO ARCADE JUKEBOX",256,65),e.font="bold 16px monospace",e.fillStyle="#ffd32a",e.shadowColor="#ff007f",e.shadowBlur=10,e.fillText("• TRILHAS SONORAS CLÁSSICAS DOS JOGOS •",256,115);const i=new kn(n);return i.needsUpdate=!0,i}function c_(n,e=0){const t=new xn;t.position.set(n.x,0,n.z),t.rotation.y=e;const i=new _t({color:1249576,roughness:.35,metalness:.6}),r=new _t({color:15658734,roughness:.1,metalness:.95}),s=new dt({color:62975}),a=new dt({color:16711807});new dt({color:16765738});const o=new at(1.8,1.3,1.2),c=new ye(o,i);c.position.set(0,.65,0),t.add(c);for(let Ne=0;Ne<7;Ne++){const Xe=new at(1.3,.04,.05),Pe=new ye(Xe,r);Pe.position.set(0,.4+Ne*.12,.61),t.add(Pe)}const l=new Yt(.08,.08,3.2,16),h=new ye(l,s);h.position.set(-.95,1.6,.3),t.add(h);const d=new ye(l,a);d.position.set(.95,1.6,.3),t.add(d);const u=new at(1.85,.2,.7),p=new _t({color:1709624,roughness:.2,metalness:.7}),g=new ye(u,p);g.position.set(0,1.35,.45),g.rotation.x=.2,t.add(g);const _=new xn;_.position.set(0,1.65,.45),t.add(_);const m=new Yt(.32,.32,.02,32),f=new _t({color:1118481,roughness:.2,metalness:.8}),v=new ye(m,f);_.add(v);const b=new Qn(.12,.3,32),E=new dt({color:62975,side:At}),S=new ye(b,E);S.rotation.x=-Math.PI/2,S.position.y=.015,_.add(S);const w=new Qn(0,.1,32),C=new dt({color:16711807,side:At}),P=new ye(w,C);P.rotation.x=-Math.PI/2,P.position.y=.016,_.add(P);const y=new at(1.8,1.3,1.1),T=new ye(y,i);T.position.set(0,2.1,-.05),t.add(T);const D=new at(1.5,1.05,.08),z=new _t({color:591639,roughness:.7}),B=new ye(D,z);B.position.set(0,2.15,.46),B.rotation.x=-.25,t.add(B);const{texture:A,render:L}=a_(),I=new tn(1.4,.95),N=new dt({map:A,toneMapped:!1}),V=new ye(I,N);V.position.set(0,2.15,.51),V.rotation.x=-.25,t.add(V);const Q=new Yt(.9,.9,1,32,1,!1,0,Math.PI),ee=new ye(Q,i);ee.rotation.z=Math.PI/2,ee.rotation.y=-Math.PI/2,ee.position.set(0,2.8,-.05),t.add(ee);const U=new ic(.88,.05,16,32,Math.PI),H=new ye(U,s);H.position.set(0,2.8,.4),t.add(H);const se=o_();new at(1.7,.45,.1);const Me=new ye(new tn(1.68,.42),new dt({map:se,toneMapped:!1}));Me.position.set(0,3.12,.46),t.add(Me);const Ee=new tn(3.6,3.6),K=new dt({color:62975,transparent:!0,opacity:.45,side:At}),J=new ye(Ee,K);J.rotation.x=-Math.PI/2,J.position.set(0,.03,.6),t.add(J);const me=2,Ue=n.x+Math.sin(e)*me,he=n.z+Math.cos(e)*me,Ie={minX:n.x-.95,maxX:n.x+.95,minZ:n.z-.7,maxZ:n.z+.7};return{game:{id:"phase-ai-jukebox",name:"Retro Arcade Jukebox",icon:"📻",category:"music",description:"Ouça as trilhas sonoras clássicas de Street Fighter II, Mario, Sonic, OutRun, GTA 2, Streets of Rage, Doom e Mega Man!",isJukebox:!0},group:t,screenMesh:V,marqueeFace:Me,floorGlow:J,standSpot:{x:Ue,z:he},position:{x:n.x,z:n.z},rotationY:e,collisionBox:Ie,isHovered:!1,isJukebox:!0,update(Ne){L(Ne,this.isHovered),We.isPlaying?_.rotation.y+=.04:_.rotation.y+=.005,this.isHovered?(J.material.opacity=.75+Math.sin(Ne*6)*.2,H.material.color.setHex(Math.floor(Ne*3)%2===0?62975:16711807)):J.material.opacity=.4+Math.sin(Ne*2)*.15}}}function l_(){const n=document.createElement("canvas");n.width=512,n.height=512;const e=n.getContext("2d");e.fillStyle="#10142e",e.fillRect(0,0,512,512),e.strokeStyle="rgba(0, 245, 255, 0.28)",e.lineWidth=2;for(let i=0;i<512;i+=64)e.beginPath(),e.moveTo(i,0),e.lineTo(i,512),e.stroke();for(let i=0;i<512;i+=64)e.beginPath(),e.moveTo(0,i),e.lineTo(512,i),e.stroke();e.fillStyle="rgba(255, 0, 127, 0.45)";for(let i=32;i<512;i+=64)for(let r=32;r<512;r+=64)e.beginPath(),e.arc(i,r,5,0,Math.PI*2),e.fill();const t=new kn(n);return t.wrapS=Ar,t.wrapT=Ar,t.repeat.set(12,16),t.needsUpdate=!0,t}function Vi(n,e,t,i="#00f5ff",r="#ff007f"){const s=document.createElement("canvas");s.width=1024,s.height=256;const a=s.getContext("2d");a.fillStyle="transparent",a.fillRect(0,0,1024,256),a.font='bold 72px "Segoe UI", sans-serif',a.textAlign="center",a.textBaseline="middle",a.shadowColor=r,a.shadowBlur=30,a.fillStyle=i,a.fillText(n,512,128);const o=new kn(s);o.needsUpdate=!0;const c=new dt({map:o,transparent:!0,side:At});return new ye(new tn(e,t),c)}function d_(n,e){const t={minX:-23.5,maxX:23.5,minZ:-29,maxZ:18},i=new xn;n.add(i);const r=new Qh(16777215,2.4);i.add(r);const s=new Kh(62975,16711807,2.2);i.add(s);const a=new jc(16777215,2.2);a.position.set(10,25,20),i.add(a);const o=new jc(62975,1.8);o.position.set(-15,20,-15),i.add(o);const c=new va(62975,3.5,60,0);c.position.set(0,8,0),i.add(c);const l=new va(16711807,3.2,60,0);l.position.set(-15,7,-10),i.add(l);const h=new va(16765738,3.2,60,0);h.position.set(15,7,-10),i.add(h);const d=l_(),u=new tn(50,76),p=new _t({map:d,roughness:.5,metalness:.2}),g=new ye(u,p);g.rotation.x=-Math.PI/2,g.position.set(0,0,4),i.add(g);const _=new Yt(10.5,10.5,.08,36),m=new _t({color:1581122,roughness:.3,metalness:.5}),f=new ye(_,m);f.position.set(0,.04,-2.5),i.add(f);const v=new Qn(10.2,10.5,36),b=new dt({color:62975,side:At}),E=new ye(v,b);E.rotation.x=-Math.PI/2,E.position.set(0,.09,-2.5),i.add(E);const S=new Qn(1.2,1.8,24),w=new dt({color:16711807,side:At}),C=new ye(S,w);C.rotation.x=-Math.PI/2,C.position.set(0,.1,-2.5),i.add(C);const P=new _t({color:1448494,roughness:.5,metalness:.3,side:Nn}),y=new ye(new at(50,10,1),P);y.position.set(0,5,-30),i.add(y);const T=new ye(new at(50,10,1),P);T.position.set(0,5,40),i.add(T);const D=new ye(new at(1,10,72),P);D.position.set(-24.5,5,4),i.add(D);const z=new ye(new at(1,10,72),P);z.position.set(24.5,5,4),i.add(z);const B=(Me,Ee,K,J,me,Ue)=>{const he=me?new at(.12,.12,J):new at(J,.12,.12),Ie=new dt({color:Ue}),Je=new ye(he,Ie);Je.position.set(Me,Ee,K),i.add(Je)};B(0,4.2,-29.4,48,!1,62975),B(0,7.8,-29.4,48,!1,16711807),B(-23.9,4.2,4,68,!0,393121),B(23.9,4.2,4,68,!0,16765738);const A=Vi("⚡ NOPEX VIRTUAL ARCADE ⚡",24,6,"#00f5ff","#ff007f");A.position.set(0,8.2,-29.2),i.add(A);const L=Vi("🌟 SPOTLIGHT MEGAHITS",10,2.5,"#ffd32a","#ff007f");L.position.set(0,6.5,-3.5),i.add(L);const I=Vi("⚔️ ACTION & FIGHTING ALLEY",14,2.5,"#ff007f","#00f5ff");I.position.set(-18.5,6.5,-3.5),I.rotation.y=Math.PI/2,i.add(I);const N=Vi("🕹️ RETRO VAULT & 16-BIT LEGENDS",15,2.5,"#7928ca","#00f5ff");N.position.set(0,6.5,-25.5),i.add(N);const V=Vi("🏎️ SPEEDWAY & RACING",12,2.5,"#ff3838","#ffd32a");V.position.set(11.5,6.5,-10),V.rotation.y=-Math.PI/2,i.add(V);const Q=Vi("🎱 SPORTS & CASUAL ARCADE",12,2.5,"#05ffa1","#ffd32a");Q.position.set(20,6.5,-5),Q.rotation.y=-Math.PI/2,i.add(Q);const ee={};e.forEach(Me=>{ee[Me.id]=Me});const U=[],H=(Me,Ee,K)=>{const J=ee[Me]||e[U.length%e.length],me=r_(J,Ee,K);i.add(me.group),U.push(me)};H("classic-doom",{x:-5.4,z:5},0),H("classic-pacman",{x:-1.8,z:5},0),H("neon-tetris-3d",{x:1.8,z:5},0);const se=c_({x:5.4,z:5},0);return i.add(se.group),U.push(se),H("geometricsurvivor",{x:0,z:-10},0),H("cyber-pong-3d",{x:0,z:2.5},Math.PI),H("neon-viper",{x:-6.5,z:-3.5},Math.PI/2),H("cute-mini-golf",{x:6.5,z:-3.5},-Math.PI/2),H("street-fighter-2",{x:-19.5,z:-24.5},Math.PI/2),H("mk2",{x:-19.5,z:-21},Math.PI/2),H("sor2",{x:-19.5,z:-17.5},Math.PI/2),H("mslug",{x:-19.5,z:-14},Math.PI/2),H("mslugx",{x:-19.5,z:-10.5},Math.PI/2),H("gta-2",{x:-19.5,z:-7},Math.PI/2),H("neon-katana-slash",{x:-19.5,z:-3.5},Math.PI/2),H("stickman-fps-arcade",{x:-19.5,z:0},Math.PI/2),H("castlevania4",{x:-19.5,z:3.5},Math.PI/2),H("sky-ace-1944",{x:-19.5,z:7},Math.PI/2),H("asteroid-blitz",{x:-19.5,z:10.5},Math.PI/2),H("cyber-shuriken",{x:-19.5,z:14},Math.PI/2),H("sonic1",{x:-11.4,z:-26.5},0),H("sonic2",{x:-7.6,z:-26.5},0),H("megaman2",{x:-3.8,z:-26.5},0),H("super-mario",{x:0,z:-26.5},0),H("super-bomberman",{x:3.8,z:-26.5},0),H("neon-stack-3d",{x:7.6,z:-26.5},0),H("neon-orbit-drift",{x:11.4,z:-26.5},0),H("topgear",{x:11.5,z:-20},-Math.PI/2),H("fzero",{x:11.5,z:-15},-Math.PI/2),H("outrun",{x:11.5,z:-10},-Math.PI/2),H("neon-drift-racer",{x:11.5,z:-5},-Math.PI/2),H("cyber-runner-3d",{x:11.5,z:0},-Math.PI/2),H("kawaii-8ball-pool",{x:20.5,z:-20},-Math.PI/2),H("neon-pachinko-pop",{x:20.5,z:-15},-Math.PI/2),H("neon-archery-master",{x:20.5,z:-10},-Math.PI/2),H("brick-breaker-fx",{x:20.5,z:-5},-Math.PI/2),H("neon-drop-2048",{x:20.5,z:0},-Math.PI/2),H("cyber-pinball-fx",{x:20.5,z:5},-Math.PI/2),H("flappy-cyber-droid",{x:20.5,z:10},-Math.PI/2),{roomBounds:t,cabinets:U,worldGroup:i,floorMesh:g,update(Me,Ee){U.forEach(K=>K.update(Me,Ee)),E.material.opacity=.8+Math.sin(Me*4)*.2}}}class u_{constructor(e,t){this.cabinets=e,this.onPlayGame=t,this.activeCabinet=null,this.lastHoveredCab=null,this.promptEl=document.getElementById("arcade-3d-prompt"),this.promptTitle=document.getElementById("arcade-prompt-title"),this.promptDesc=document.getElementById("arcade-prompt-desc"),this.promptRecord=document.getElementById("arcade-prompt-record"),this.actionBtn=document.getElementById("arcade-action-btn"),this.playBtn=document.getElementById("arcade-hologram-play-btn"),this.bindInputs()}bindInputs(){window.addEventListener("keydown",e=>{(e.code==="Enter"||e.code==="KeyE")&&this.activeCabinet&&(e.preventDefault(),this.triggerPlay())}),this.actionBtn&&this.actionBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay()}),this.playBtn&&this.playBtn.addEventListener("click",()=>{this.activeCabinet&&this.triggerPlay()}),this.promptEl&&this.promptEl.addEventListener("click",e=>{e.target.tagName!=="BUTTON"&&this.activeCabinet&&this.triggerPlay()})}triggerPlay(){this.activeCabinet&&this.onPlayGame&&this.onPlayGame(this.activeCabinet.game,this.activeCabinet)}update(e){let t=null,i=1/0;for(const r of this.cabinets){r.isHovered=!1;const s=Math.hypot(e.x-r.standSpot.x,e.z-r.standSpot.z);s<3.8&&s<i&&(i=s,t=r)}t?(t.isHovered=!0,this.activeCabinet=t,this.lastHoveredCab!==t&&(Nd(),this.lastHoveredCab=t,this.renderHologram(t.game)),this.promptEl&&this.promptEl.classList.add("visible"),this.actionBtn&&this.actionBtn.classList.add("visible")):(this.activeCabinet=null,this.lastHoveredCab=null,this.promptEl&&this.promptEl.classList.remove("visible"),this.actionBtn&&this.actionBtn.classList.remove("visible"))}renderHologram(e){if(this.promptTitle&&(this.promptTitle.innerHTML=`${e.icon||"🎮"} ${e.name||"ARCADE GAME"}`),this.promptDesc&&(e.isJukebox?this.promptDesc.textContent=e.description||"Pressione [E] ou [ENTER] para abrir o Jukebox de trilhas clássicas.":this.promptDesc.textContent=e.description||"Pressione [ENTER] ou [E] para entrar na máquina e jogar."),this.promptRecord)if(e.isJukebox)this.promptRecord.innerHTML="🎵 <strong>RETRO ARCADE JUKEBOX</strong> • 15 Trilhas Clássicas dos Jogos";else{const t=window.__ARCADE_LEADERBOARDS__&&window.__ARCADE_LEADERBOARDS__[e.id];t&&t.topScore?this.promptRecord.innerHTML=`🏆 Recorde Mundial: <strong>${t.topScore.toLocaleString()} ${e.unit||"PTS"}</strong> [${t.topPilot||"MRC"}]`:this.promptRecord.innerHTML=`⚡ 60 FPS Instantâneo • <strong>${(e.category||"ACTION").toUpperCase()}</strong>`}this.playBtn&&(e.isJukebox?this.playBtn.innerHTML='<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">J</kbd> PARA OUVIR</span> ➔':this.playBtn.innerHTML='<span>PRESSIONE <kbd class="kbd-action">E</kbd> OU <kbd class="kbd-action">ENTER</kbd> PARA JOGAR</span> ➔'),this.actionBtn&&(e.isJukebox?this.actionBtn.innerHTML="<span>OUVIR</span> 📻":this.actionBtn.innerHTML="<span>JOGAR</span> 🕹️")}}class h_{constructor(e){this.onCloseCallback=e,this.overlay=document.getElementById("arcade-game-overlay"),this.iframe=document.getElementById("arcade-game-iframe"),this.titleEl=document.getElementById("arcade-overlay-title"),this.closeBtn=document.getElementById("arcade-overlay-back"),this.fullscreenBtn=document.getElementById("arcade-overlay-fullscreen"),this.reloadBtn=document.getElementById("arcade-overlay-reload"),this.isOpen=!1,this.activeGame=null,this.bindEvents()}bindEvents(){this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.close()),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):this.overlay.requestFullscreen().catch(()=>{})}),this.reloadBtn&&this.reloadBtn.addEventListener("click",()=>{this.iframe&&this.activeGame&&(this.iframe.src=this.activeGame.url)}),window.addEventListener("message",e=>{e.data&&(e.data.type==="CLOSE_ARCADE_GAME"||e.data.type==="ARCADE_CLOSE"||e.data.type==="ARCADE_EXIT"||e.data==="closeArcade"||e.data==="escape")&&this.close()}),window.addEventListener("keydown",e=>{if(e.key==="Escape"&&this.isOpen){e.preventDefault(),e.stopPropagation(),this.close();return}if(this.isOpen&&this.iframe&&this.iframe.contentWindow&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","W","a","A","s","S","d","D"," ","Enter"].includes(e.key))try{this.iframe.contentWindow.postMessage({type:"ARCADE_KEY_DOWN",key:e.key,code:e.code},"*"),this.iframe.contentWindow.dispatchEvent(new KeyboardEvent("keydown",{key:e.key,code:e.code,bubbles:!0}))}catch{}},!0)}attachIframeEscape(){if(this.iframe)try{const e=this.iframe.contentWindow,t=this.iframe.contentDocument||(e==null?void 0:e.document),i=r=>{(r.key==="Escape"||r.code==="Escape"||r.keyCode===27)&&(r.preventDefault(),r.stopPropagation(),this.close())};e&&(e.removeEventListener("keydown",i,!0),e.addEventListener("keydown",i,!0)),t&&(t.removeEventListener("keydown",i,!0),t.addEventListener("keydown",i,!0))}catch{}}open(e){this.isOpen=!0,this.activeGame=e,Ud(),We.duck(!0),this.titleEl&&(this.titleEl.innerHTML=`${e.icon||"🎮"} ${e.name||"JOGO"}`),this.iframe&&(this.iframe.src=e.url,this.iframe.onload=()=>{try{this.iframe.focus(),this.iframe.contentWindow&&this.iframe.contentWindow.focus(),this.attachIframeEscape()}catch{}},setTimeout(()=>this.attachIframeEscape(),150),setTimeout(()=>this.attachIframeEscape(),600),setTimeout(()=>this.attachIframeEscape(),1500)),this.overlay&&(this.overlay.style.display="flex",setTimeout(()=>{this.overlay.classList.add("active");try{this.iframe&&(this.iframe.focus(),this.iframe.contentWindow&&this.iframe.contentWindow.focus(),this.attachIframeEscape())}catch{}},100))}close(){this.isOpen&&(this.isOpen=!1,document.fullscreenElement&&document.exitFullscreen().catch(()=>{}),Fd(),We.duck(!1),this.overlay&&(this.overlay.classList.remove("active"),setTimeout(()=>{this.overlay.style.display="none",this.iframe&&(this.iframe.src="about:blank")},250)),this.onCloseCallback&&this.onCloseCallback())}}class f_{constructor(){this.tickerEl=null,this.createBanner()}createBanner(){let e=document.getElementById("mp-score-ticker");e&&e.remove(),e=document.createElement("div"),e.id="mp-score-ticker",e.style.cssText=`
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
    `,this.tickerEl.style.transform="translateX(-50%) translateY(0)",this.playFanfareAudio(),this.hideTimeout&&clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(()=>{this.tickerEl.style.transform="translateX(-50%) translateY(-100px)"},6e3)}playFanfareAudio(){try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;t.state==="suspended"&&t.resume(),[523.25,659.25,783.99,1046.5].forEach((r,s)=>{const a=t.createOscillator(),o=t.createGain();a.type="triangle",a.frequency.setValueAtTime(r,t.currentTime+s*.1),o.gain.setValueAtTime(.2,t.currentTime+s*.1),o.gain.exponentialRampToValueAtTime(.01,t.currentTime+s*.1+.3),a.connect(o),o.connect(t.destination),a.start(t.currentTime+s*.1),a.stop(t.currentTime+s*.1+.3)})}catch{}}}/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const sc=Object.freeze,Zn=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Hr=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,kd=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Bd=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,p_=sc({p:Zn,n:Hr,h:1n,a:0n,b:7n,Gx:kd,Gy:Bd}),ln=32,Ml=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,nn=(n,e,t="")=>{if(Ml(n)&&(e===void 0||n.length===e))return n;const i=Ml(n),r=e!==void 0?` of length ${e}`:"",s=i?`length=${n.length}`:`type=${typeof n}`,a=(t?`"${t}" `:"")+"expected Uint8Array"+r+", got "+s;throw i?new RangeError(a):new TypeError(a)},m_=n=>Uint8Array.from(n),g_=(n,e,t)=>m_(nn(n,t,e)),zd=(n,e)=>n.toString(16).padStart(e,"0"),Gd=n=>{let e="";for(const t of nn(n))e+=zd(t,2);return e},Hd=n=>{const e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);const t=new Uint8Array(n.length/2);for(let i=0,r=0;i<t.length;i++,r+=2){const s=n.charCodeAt(r),a=n.charCodeAt(r+1);t[i]=((s&15)+(s>>6)*9)*16+(a&15)+(a>>6)*9}return t},bl=()=>{var e;const n=(e=globalThis==null?void 0:globalThis.crypto)==null?void 0:e.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},Qi=(...n)=>{let e=0;for(const r of n)e+=nn(r).length;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.length;return t},ac=(n=ln)=>{const e=globalThis==null?void 0:globalThis.crypto;if(typeof(e==null?void 0:e.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},__=BigInt,Vr=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},Re=(n,e=Zn)=>(n%=e)>=0n?n:e+n,Bs=n=>Re(n,Hr),x_=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Re(n,e),i=e,r=0n,s=1n;for(;t!==0n;){const o=i/t,c=i-t*o,l=r-s*o;i=t,t=c,r=s,s=l}if(i!==1n)throw new Error("invert: does not exist");return Re(r,e)},Vd=n=>{const e=M_[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},El=(n,e,t)=>nn(Vd(n)(e,t),ln,"digest"),Tl=async(n,e,t)=>nn(await Vd(n)(e,t),ln,"digest"),wa=n=>{if(n instanceof ei)return n;throw new TypeError("Point expected")},Aa="bad point: not on curve",Wd=n=>Re(Re(n*n)*n+7n),wl=n=>Vr(n,0n,Zn),br=n=>Vr(n,1n,Zn),Xd=n=>Vr(n,1n,Hr),zs=n=>!(n&1n),v_=n=>Uint8Array.of(zs(n)?2:3),qd=n=>{const e=Wd(br(n));let t=1n;for(let i=e,r=(Zn+1n)/4n;r>0n;r>>=1n)r&1n&&(t=t*i%Zn),i=i*i%Zn;if(Re(t*t)!==e)throw new Error("sqrt invalid");return new ei(n,zs(t)?t:Re(-t),1n)},Pn=class Pn{constructor(e,t,i){It(this,"X");It(this,"Y");It(this,"Z");this.X=wl(e),this.Y=br(t),this.Z=wl(i),sc(this)}static CURVE(){return p_}static fromAffine(e){const{x:t,y:i}=e;return t===0n&&i===0n?Er:new Pn(t,i,1n)}static fromBytes(e){nn(e);const t=e.length,i=e[0],r=Ls(e,1,33);try{if(t===33&&(i===2||i===3)){const s=qd(r);return i===3?s.negate():s}if(t===65&&i===4)return new Pn(r,Ls(e,33,65),1n).assertValidity()}catch{throw new Error(Aa)}throw new Error(Aa)}static fromHex(e){return Pn.fromBytes(Hd(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=wa(e);return Re(t*o)===Re(s*r)&&Re(i*o)===Re(a*r)}is0(){return this.Z===0n}negate(){return new Pn(this.X,Re(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=wa(e),c=0n,l=7n;let h=0n,d=0n,u=0n;const p=Re(l*3n);let g=Re(t*s),_=Re(i*a),m=Re(r*o),f=Re(t+i),v=Re(s+a);f=Re(f*v),v=Re(g+_),f=Re(f-v),v=Re(t+r);let b=Re(s+o);return v=Re(v*b),b=Re(g+m),v=Re(v-b),b=Re(i+r),h=Re(a+o),b=Re(b*h),h=Re(_+m),b=Re(b-h),u=Re(c*v),h=Re(p*m),u=Re(h+u),h=Re(_-u),u=Re(_+u),d=Re(h*u),_=Re(g+g),_=Re(_+g),m=Re(c*m),v=Re(p*v),_=Re(_+m),m=Re(g-m),m=Re(c*m),v=Re(v+m),g=Re(_*v),d=Re(d+g),g=Re(b*v),h=Re(f*h),h=Re(h-g),g=Re(f*_),u=Re(b*u),u=Re(u+g),new Pn(h,d,u)}subtract(e){return this.add(wa(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Er;if(Xd(e),e===1n)return this;if(this.equals(yi))return P_(e).p;let i=Er,r=yi,s=this;for(let a=0;t?a<256:e>0n;a++)e&1n?i=i.add(s):t&&(r=r.add(s)),s=s.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};const r=x_(i,Zn);if(Re(i*r)!==1n)throw new Error("inverse invalid");return{x:Re(e*r),y:Re(t*r)}}assertValidity(){const{x:e,y:t}=this.toAffine();if(br(e),br(t),Re(t*t)!==Wd(e))throw new Error(Aa);return this}toBytes(e=!0){const{x:t,y:i}=this.assertValidity().toAffine(),r=Bn(t);return e?Qi(v_(i),r):Qi(Uint8Array.of(4),r,Bn(i))}toHex(e){return Gd(this.toBytes(e))}};It(Pn,"BASE"),It(Pn,"ZERO");let ei=Pn;const yi=new ei(kd,Bd,1n),Er=new ei(0n,1n,0n);ei.BASE=yi;ei.ZERO=Er;const y_=(n,e,t)=>yi.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),Si=n=>__("0x"+(Gd(n)||"0")),Ls=(n,e,t)=>Si(n.subarray(e,t)),Bn=n=>Hd(zd(Vr(n,0n,2n**256n),ln*2)),S_=n=>{const e=Si(nn(n,ln,"secret key"));return Vr(e,1n,Hr,"invalid secret key: outside of range")},Al="SHA-256",M_={hmacSha256Async:async(n,e)=>{const t=bl(),i=await t.importKey("raw",n,{name:"HMAC",hash:Al},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await bl().digest(Al,n)),sha256:void 0},b_=n=>{if(n=n===void 0?ac(48):n,nn(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");const e=Re(Si(n),Hr-1n);return Bn(e+1n)},E_=n=>e=>{const t=b_(e);return{secretKey:t,publicKey:n(t)}},Yd=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),Fo=(n,...e)=>{const t=El("sha256",Yd(n));return El("sha256",Qi(t,t,...e))},Oo=(n,...e)=>Tl("sha256Async",Yd(n)).then(t=>Tl("sha256Async",Qi(t,t,...e))),oc=n=>{const e=S_(n),t=yi.multiply(e),{x:i,y:r}=t.assertValidity().toAffine(),s=zs(r)?e:Bs(-e),a=Bn(i);return{d:s,px:a}},cc=n=>Bs(Si(n)),jd=(...n)=>cc(Fo("challenge",...n)),$d=async(...n)=>cc(await Oo("challenge",...n)),Kd=n=>oc(n).px,T_=E_(Kd),Zd=(n,e,t)=>{const i=g_(n,"message"),{px:r,d:s}=oc(e);return{m:i,px:r,d:s,a:nn(t,ln)}},Jd=n=>{const e=cc(n);if(e===0n)throw new Error("sign failed: k is zero");const{px:t,d:i}=oc(Bn(e));return{rx:t,k:i}},Qd=(n,e,t,i)=>Qi(e,Bn(Bs(n+t*i))),eu="invalid signature produced",w_=(n,e,t=ac(ln))=>{const{m:i,px:r,d:s,a}=Zd(n,e,t),o=Bn(s^Si(Fo("aux",a))),{rx:c,k:l}=Jd(Fo("nonce",o,r,i)),h=Qd(l,c,jd(c,r,i),s);if(!nu(h,i,r))throw new Error(eu);return h},A_=async(n,e,t=ac(ln))=>{const{m:i,px:r,d:s,a}=Zd(n,e,t),o=Bn(s^Si(await Oo("aux",a))),{rx:c,k:l}=Jd(await Oo("nonce",o,r,i)),h=Qd(l,c,await $d(c,r,i),s);if(!await iu(h,i,r))throw new Error(eu);return h},R_=(n,e)=>n instanceof Promise?n.then(e):e(n),tu=(n,e,t,i)=>{const r=nn(n,64,"signature"),s=nn(e,void 0,"message"),a=nn(t,ln,"publicKey");let o,c,l,h;try{const d=Si(a);o=qd(d),c=br(Ls(r,0,ln)),l=Xd(Ls(r,ln,64)),h=Qi(Bn(c),a,s)}catch{return!1}return R_(i(h),d=>{try{const{x:u,y:p}=y_(o,l,Bs(-d)).toAffine();return!(!zs(p)||u!==c)}catch{return!1}})},nu=(n,e,t)=>tu(n,e,t,jd),iu=async(n,e,t)=>tu(n,e,t,$d),ru=sc({keygen:T_,getPublicKey:Kd,sign:w_,verify:nu,signAsync:A_,verifyAsync:iu}),C_=()=>{const n=[];let e=yi,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let r=1;r<128;r++)t=t.add(e),n.push(t);e=t.double()}return n};let Rl;const Cl=(n,e)=>{const t=e.negate();return n?t:e},P_=n=>{const e=Rl||(Rl=C_());let t=Er,i=yi;for(let r=0;r<33;r++){let s=Number(n&255n);n>>=8n,s>128&&(s-=256,n+=1n);const a=r*128,o=a+Math.abs(s)-1,c=r%2!==0,l=s<0;s===0?i=i.add(Cl(c,e[a])):t=t.add(Cl(l,e[o]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}},{floor:ko,min:L_,sin:D_}=Math,un="Trystero",Dr=(n,e)=>Array(n).fill(void 0).map(e),I_="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",sr=n=>Dr(n,()=>I_[ko(Math.random()*62)]??"").join(""),dn=sr(20),Mi=Promise.all.bind(Promise),su=typeof window<"u",{entries:gi,fromEntries:au,keys:Qt,values:Yi}=Object,Ft=()=>{},ou="candidate",ot=n=>(n!==null&&clearTimeout(n),null),tt=n=>new Error(`${un}: ${n}`),er=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:jt(n??e),$n=(n,e)=>n instanceof Error?n:tt(er(n,e)),U_=new TextEncoder,N_=new TextDecoder,Jn=n=>U_.encode(n),mi=n=>N_.decode(n),Ir=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Ur=(...n)=>n.join("@"),F_=(n,e)=>{const t=[...n],i=()=>{const s=D_(e++)*1e4;return s-ko(s)};let r=t.length;for(;r;){const s=ko(i()*r--),a=t[r];t[r]=t[s],t[s]=a}return t},O_=(n,e,t,i=!1)=>{var r,s;return((r=n.relayConfig)==null?void 0:r.urls)||(i?F_(e,cu(n.appId)):e).slice(0,((s=n.relayConfig)==null?void 0:s.redundancy)??t)},jt=JSON.stringify,tr=n=>{try{return JSON.parse(n)}catch{throw tt(`failed to parse JSON: ${n}`)}},cu=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,Pl=3333,Ll=6e4,gr={};let Tr=null,wr=null;const k_=()=>{Tr||(Tr=new Promise(n=>{wr=n}).finally(()=>{wr=null,Tr=null}))},B_=()=>{wr==null||wr()},z_=(n,e,t)=>{const i={};let r=!1,s=!1,a,o=Ft;i.isClosed=!1,i.ready=new Promise(l=>o=l);const c=()=>{if(i.isClosed)return;a=void 0,s=!1;const l=new WebSocket(n);l.onclose=()=>{if(i.isClosed||s)return;if(s=!0,Tr){Tr.then(c);return}const h=gr[n]??(gr[n]=Pl);if(h>=Ll){i.isClosed=!0;return}a=setTimeout(c,Math.random()*h),gr[n]=L_(h*2,Ll)},l.onmessage=h=>e(String(h.data)),i.socket=l,i.url=l.url,l.onopen=()=>{const h=r;r=!0,o(i),gr[n]=Pl,h&&(t==null||t())},i.send=h=>{l.readyState===1&&l.send(h)}};return i.close=()=>{i.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),i.socket.close()},c(),i},G_=n=>{const e={},t=new WeakMap,i=a=>{const o=t.get(a);if(!o)throw tt("relay bookkeeping missing registration for relay client");return o},r=()=>{const a={},o=c=>a[c]??(a[c]={});return{forKey:o,forRelay:c=>o(i(c))}},s=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>{const c=e[a];return c||s(a,o())},keyOf:i,scoped:r,getSockets:()=>au(gi(e).flatMap(([a,o])=>{const c=n(o);return c?[[a,c]]:[]}))}},H_=()=>{if(su){const n=new AbortController;return addEventListener("online",B_,{signal:n.signal}),addEventListener("offline",k_,{signal:n.signal}),()=>n.abort()}return Ft},lc="AES-GCM",Ra={},V_=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),W_=n=>{const e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},Gs=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,Jn(e))),Nr=async n=>Ra[n]??(Ra[n]=Array.from(await Gs("SHA-1",n)).map(e=>e.toString(36)).join("")),X_=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Jn(`${n}:${e}:${t}`)),{name:lc},!1,["encrypt","decrypt"]),q_=async(n,e)=>Ir(await Gs("SHA-256",`${un}:${n}:${e}`)),lu="$",du=",",Y_=async(n,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(du)+lu+V_(await crypto.subtle.encrypt({name:lc,iv:t},await n,Jn(e)))},j_=async(n,e)=>{const[t,i]=e.split(lu);return mi(await crypto.subtle.decrypt({name:lc,iv:new Uint8Array((t==null?void 0:t.split(du).map(Number))??[])},await n,W_(i??"")))},dc=57333,$_=18e4,K_=20;var Z_=class{constructor(n){It(this,"makeOffer");It(this,"pool",[]);It(this,"pooled",new Set);It(this,"leased",new Map);It(this,"recycling",new Set);It(this,"cleanupTimer",null);It(this,"active",!1);this.makeOffer=n}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Dr(K_,this.makeOffer).forEach(n=>this.push(n)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(n=>n.isDead?(this.pooled.delete(n),!1):!0)},dc)}push(n){n.isDead||this.pooled.has(n)||this.leased.has(n)||(this.pool.push(n),this.pooled.add(n))}shift(n){const e=[];for(;e.length<n&&this.pool.length>0;){const t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(n){const e=this.leased.get(n);e&&(ot(e),this.leased.delete(n))}recycle(n){if(!(n.isDead||this.recycling.has(n))){if(n.connection.remoteDescription){n.destroy();return}if(!this.active){n.destroy();return}this.recycling.add(n),n.setHandlers({connect:Ft,close:Ft,error:Ft}),n.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||n.isDead||!this.active){n.destroy();return}this.push(n)}).catch(()=>n.destroy()).finally(()=>this.recycling.delete(n))}}reclaimLeased(n){const e=this.leased.get(n);e&&(ot(e),this.leased.delete(n),this.recycle(n))}lease(n){this.claimLeased(n),this.leased.set(n,setTimeout(()=>{this.leased.delete(n),this.recycle(n)},$_))}checkout(n,e,t){const i=this.shift(n),r=Math.max(0,n-i.length);r>0&&i.push(...Dr(r,this.makeOffer));const s=async(a,o=!1)=>{try{const c=await t(a);return e?(this.lease(a),{peer:a,offer:c,claim:()=>this.claimLeased(a),reclaim:()=>this.reclaimLeased(a)}):{peer:a,offer:c}}catch(c){if(this.claimLeased(a),this.pooled.delete(a),a.destroy(),!o)return s(this.makeOffer(),!0);throw c}};return Mi(i.map(a=>s(a)))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(n=>n.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((n,e)=>{ot(n),e.destroy()}),this.leased.clear(),this.recycling.forEach(n=>n.destroy()),this.recycling.clear()}};const Ca=tt("incorrect password for overlapping room"),J_=(n,e,t)=>{const i=a=>Gs("SHA-256",`${a}:${n}:${e}:${t}`).then(Ir),r=async(a,o,c)=>{if(!n)return;if(c){const h=sr(36);await a({__trystero_pw:"challenge",c:h});const{data:d}=await o();if(!d||typeof d!="object"||d.__trystero_pw!=="response"||typeof d.h!="string")throw Ca;const u=await i(h);if(d.h!==u)throw Ca;return}const{data:l}=await o();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw Ca;await a({__trystero_pw:"response",h:await i(l.c)})};return{run:r,compose:a=>n||a?async(o,c,l,h)=>{await r(c,l,h),await(a==null?void 0:a(o,c,l,h))}:void 0}},Q_=n=>{const e=er(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},ex=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:r,onActivate:s,onFailure:a})=>{const o={},c=(d,u)=>{const p=o[d];!p||u&&p.peer!==u||p.isActive||!p.didLocalHandshakePass||!p.didReceiveRemoteReady||(p.isActive=!0,p.handshakeTimer=ot(p.handshakeTimer),s(d,p.peer))},l=(d,u,p)=>{const g=o[d];if(!g||g.peer!==u)return;const _=Q_(p);e==null||e(d,_),a(d,u,tt(_))},h=(d,u)=>{const p=o[d];!p||p.peer!==u||p.isActive||(p.didLocalHandshakePass=!0,r("",d).catch(g=>l(d,u,tt(`failed sending handshake readiness: ${er(g,"unknown send failure")}`))),c(d,u))};return{addPeer:(d,u)=>{o[d]={peer:u,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(d,u)=>{const p=o[d];p&&(p.handshakeTimer=ot(p.handshakeTimer),p.pendingHandshakePayloads.length=0,p.handshakeWaiters.splice(0).forEach(g=>g.reject(u)),delete o[d])},canReceiveFromPeer:(d,u)=>{const p=o[d];return!!(p&&(p.isActive||u))},start:(d,u)=>{const p=o[d];if(!p||p.peer!==u)return;p.handshakeTimer=setTimeout(()=>l(d,u,tt(`handshake timed out after ${t}ms`)),t);const g=async(f,v)=>{await i(f,d,v)},_=()=>new Promise((f,v)=>{const b=o[d];if(!b||b.peer!==u){v(tt("peer disconnected during handshake"));return}const E=b.pendingHandshakePayloads.shift();if(E){f(E);return}b.handshakeWaiters.push({resolve:f,reject:S=>v(S)})}),m=dn<d;Promise.resolve(n==null?void 0:n(d,g,_,m)).then(()=>h(d,u)).catch(f=>l(d,u,$n(f,"handshake failed")))},receiveHandshakeData:(d,u,p)=>{const g=o[u];if(!g||g.isActive)return;const _=p===void 0?{data:d}:{data:d,metadata:p},m=g.handshakeWaiters.shift();if(m){m.resolve(_);return}g.pendingHandshakePayloads.push(_)},receiveHandshakeReady:d=>{const u=o[d];!u||u.isActive||(u.didReceiveRemoteReady=!0,c(d))}}},tx=15e3,nx=5e3,Dl="icegatheringstatechange",ix="iceconnectionstatechange",_r="offer",rx="answer",sx=/out of range/i,Il=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var Ul=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:r,_test_only_mdnsHostFallbackToLoopback:s})=>{const a=new(i??RTCPeerConnection)({iceServers:ax.concat(r??[]),...t}),o={},c=[],l=[],h=e!==!1,d=[],u=[];let p=!1,g=!1,_=null,m=null,f=!1;const v=()=>m=ot(m),b=()=>{var U;f||(f=!0,v(),(U=o.close)==null||U.call(o))},E=U=>{o.signal?o.signal(U):c.push(U)},S=U=>{const H=o.signal;o.signal=se=>{H==null||H(se),U(se)},c.length>0&&c.splice(0).forEach(se=>{var Me;return(Me=o.signal)==null?void 0:Me.call(o,se)})},w=U=>s?Il(U):U,C=U=>{if(!s||typeof U.candidate!="string")return U;const H=Il(U.candidate);return H===U.candidate?U:{...U,candidate:H}},P=U=>{var H,se;return{type:((H=U.localDescription)==null?void 0:H.type)??_r,sdp:w(((se=U.localDescription)==null?void 0:se.sdp)??"")}},y=()=>{var H,se;const U=(H=a.remoteDescription)==null?void 0:H.sdp;return U?((se=U.match(/a=ice-ufrag:([^\s]+)/))==null?void 0:se[1])??null:null},T=()=>{var U,H;return(((H=(U=a.remoteDescription)==null?void 0:U.sdp)==null?void 0:H.match(/^m=/gm))??[]).length},D=U=>{if(!a.remoteDescription)return!1;const H=T();if(typeof U.sdpMLineIndex=="number"&&H>0&&U.sdpMLineIndex>=H)return!1;const se=y();return!(se&&U.usernameFragment&&U.usernameFragment!==se)},z=async U=>{try{return await a.addIceCandidate(U),!0}catch(H){if(H instanceof Error&&sx.test(H.message)&&typeof U.sdpMLineIndex=="number")return!1;throw H}},B=async()=>{if(!a.remoteDescription||d.length===0)return;const U=d.splice(0),H=[];for(const se of U){if(!D(se)){H.push(se);continue}await z(se)||H.push(se)}H.length>0&&d.push(...H)},A=async U=>{if(D(U)){await z(U)||d.push(U);return}d.push(U)},L=U=>{U.binaryType="arraybuffer",U.bufferedAmountLowThreshold=65535,U.onmessage=H=>{const se=H.data;o.data?o.data(se):l.push(se)},U.onopen=()=>{var H;return(H=o.connect)==null?void 0:H.call(o)},U.onclose=b,U.onerror=({error:H})=>{var se;return(se=o.error)==null?void 0:se.call(o,$n(H,"data channel error"))}},I=async U=>{let H=null;try{await Promise.race([new Promise(se=>{const Me=()=>{U.iceGatheringState==="complete"&&(U.removeEventListener(Dl,Me),se())};U.addEventListener(Dl,Me),Me()}),new Promise(se=>{H=setTimeout(se,tx)})])}finally{ot(H)}return P(U)},N=async()=>{const U=h?P(a):await I(a);return E(U),U};n?(_=a.createDataChannel("data"),L(_)):a.ondatachannel=({channel:U})=>{_=U,L(U)};const V=async(U=!1)=>{var H,se;if(a.connectionState!=="closed")try{return p=!0,U&&(a.signalingState!=="stable"&&a.signalingState!=="closed"&&((H=a.localDescription)==null?void 0:H.type)===_r&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(U?await a.createOffer({iceRestart:!0}):void 0),await N()}catch(Me){(se=o.error)==null||se.call(o,$n(Me,"failed to create local offer"))}finally{p=!1}};a.onnegotiationneeded=async()=>V(!1),a.onicecandidate=({candidate:U})=>{if(!h||!U)return;const H=C(typeof U.toJSON=="function"?U.toJSON():{candidate:U.candidate,sdpMid:U.sdpMid,sdpMLineIndex:U.sdpMLineIndex,usernameFragment:U.usernameFragment});E({type:ou,sdp:JSON.stringify(H)})};const Q=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){b();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){v();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&b()},nx));return}};a.onconnectionstatechange=Q,a.addEventListener(ix,Q),a.ontrack=U=>{var se,Me;const H=U.streams[0];if(H){if(!o.track&&!o.stream){u.push({track:U.track,stream:H});return}(se=o.track)==null||se.call(o,U.track,H),(Me=o.stream)==null||Me.call(o,H)}},a.onremovestream=U=>{var H;return(H=o.stream)==null?void 0:H.call(o,U.stream)};const ee=n?new Promise(U=>S(H=>{H.type===_r&&U(H)})):Promise.resolve();return n&&queueMicrotask(()=>{var U;!p&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&((U=a.onnegotiationneeded)==null||U.call(a,new Event("negotiationneeded")))}),{created:Date.now(),connection:a,get channel(){return _},get isDead(){return a.connectionState==="closed"},getOffer:async(U=!1)=>{var H;if(n)return U?V(!0):((H=a.localDescription)==null?void 0:H.type)===_r?h?P(a):I(a):ee},async signal(U){var H,se,Me;if(U.type==="candidate"){try{const Ee=JSON.parse(U.sdp);Ee&&typeof Ee=="object"&&await A(C(Ee))}catch(Ee){(H=o.error)==null||H.call(o,$n(Ee,"failed to parse remote candidate"))}return}if(!((_==null?void 0:_.readyState)==="open"&&!((se=U.sdp)!=null&&se.includes("a=rtpmap"))))try{const Ee={...U,sdp:w(U.sdp)};if(U.type===_r){if(p||a.signalingState!=="stable"&&!g){if(n)return;await Mi([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(Ee)])}else await a.setRemoteDescription(Ee);return await B(),await a.setLocalDescription(),await N()}if(U.type===rx){g=!0;try{await a.setRemoteDescription(Ee),await B()}finally{g=!1}}}catch(Ee){(Me=o.error)==null||Me.call(o,$n(Ee,"failed to apply remote signal"))}},sendData:U=>_==null?void 0:_.send(U),destroy:()=>{v(),_==null||_.close(),a.close(),p=!1,g=!1,b()},setHandlers:U=>{const{signal:H,...se}=U;Object.assign(o,se),o.data&&l.length>0&&l.splice(0).forEach(Me=>{var Ee;return(Ee=o.data)==null?void 0:Ee.call(o,Me)}),H&&S(H),(o.track||o.stream)&&u.length>0&&u.splice(0).forEach(({track:Me,stream:Ee})=>{var K,J;(K=o.track)==null||K.call(o,Me,Ee),(J=o.stream)==null||J.call(o,Ee)})},offerPromise:ee,addStream:U=>U.getTracks().forEach(H=>a.addTrack(H,U)),removeStream:U=>a.getSenders().filter(H=>H.track&&U.getTracks().includes(H.track)).forEach(H=>a.removeTrack(H)),addTrack:(U,H)=>a.addTrack(U,H),removeTrack:U=>{const H=a.getSenders().find(se=>se.track===U);H&&a.removeTrack(H)},replaceTrack:(U,H)=>{const se=a.getSenders().find(Me=>Me.track===U);if(se)return se.replaceTrack(H)}}};const ax=[...Dr(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n})),ox=Object.getPrototypeOf(Uint8Array),Pa=32,cx=0,La=32,Nl=34,Da=35,Es=36,li=16*2**10-Es,xr=255,lx=65535,Fl="bufferedamountlow",Ol="close",kl="error",dx=1e4,ux=n=>n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength),hx=(n,e=dx)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(t=>{let i=!1,r=null;const s=c=>{i||(i=!0,n.removeEventListener(Fl,a),n.removeEventListener(Ol,o),n.removeEventListener(kl,o),ot(r),t(c))},a=()=>s(!0),o=()=>s(!1);if(n.addEventListener(Fl,a),n.addEventListener(Ol,o),n.addEventListener(kl,o),r=setTimeout(()=>s(!1),e),n.readyState!=="open"){s(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&s(!0)}),fx=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:i})=>{const r={},s={},a={},o={},c=(d,u,{includePending:p=!1}={})=>(d?Array.isArray(d)?d:[d]:e(p)).flatMap(g=>{const _=n(g,p);return _?[Promise.resolve(u(g,_))]:(console.warn(`${un}: no peer with id ${g} found`),[])});return{makeInternalAction:(d,u={})=>{const p=s[d];if(r[d]&&p){const v=r[d].options;if(v.sendToPending!==!!u.sendToPending||v.receiveWhilePending!==!!u.receiveWhilePending)throw tt(`action type "${d}" cannot be redefined`);return p}if(!d)throw tt("action type argument is required");const g=Jn(d);if(g.byteLength>Pa)throw tt(`action type string "${d}" (${g.byteLength}b) exceeds byte limit (${Pa}). Hint: choose a shorter name.`);const _={sendToPending:!!u.sendToPending,receiveWhilePending:!!u.receiveWhilePending},m=new Uint8Array(Pa);m.set(g);let f=0;return r[d]={onComplete:Ft,onProgress:Ft,setOnComplete:v=>{r[d].onComplete=v;const b=o[d];b!=null&&b.length&&(delete o[d],b.forEach(({payload:E,peerId:S,metadata:w})=>v(E,S,w)))},setOnProgress:v=>{r[d].onProgress=v},send:async(v,b,E,S,w)=>{i(w);const C=typeof v;if(C==="undefined")throw tt("action data cannot be undefined");const P=C!=="string",y=v instanceof Blob,T=y||v instanceof ArrayBuffer||v instanceof ox,D=E!==void 0,z=T?ux(y?await v.arrayBuffer():v):Jn(P?jt(v):v),B=D?Jn(jt(E)):null,A=Math.ceil(z.byteLength/li)+(D?1:0)||1,L=Dr(A,(I,N)=>{const V=N===A-1,Q=!!(D&&N===0),ee=new Uint8Array(Es+(Q?(B==null?void 0:B.byteLength)??0:V?z.byteLength-li*(A-(D?2:1)):li));return ee.set(m),ee.set([f>>8,f&xr],La),ee.set([Number(V)|Number(Q)<<1|Number(T)<<2|Number(P)<<3],Nl),ee.set([Math.round((N+1)/A*xr)],Da),ee.set(D?Q?B??new Uint8Array:z.subarray((N-1)*li,N*li):z.subarray(N*li,(N+1)*li),Es),ee});return f=f+1&lx,await Mi(c(b,async(I,N)=>{const{channel:V}=N;let Q=0;for(;Q<A;){i(w);const ee=L[Q];if(!ee)break;if(V&&V.bufferedAmount>V.bufferedAmountLowThreshold){const se=await hx(V);if(i(w),!se)break}const U=n(I,_.sendToPending);if(!U||U!==N)break;N.sendData(ee),Q++;const H=ee[Da]??xr;S==null||S(H/xr,I,E)}},{includePending:_.sendToPending})),[]},options:_},s[d]={send:r[d].send,onMessage:r[d].setOnComplete,onProgress:r[d].setOnProgress}},handleData:(d,u)=>{var D,z;const p=new Uint8Array(u),g=mi(p.subarray(cx,La)).replaceAll("\0",""),_=r[g];if(!t(d,!!(_!=null&&_.options.receiveWhilePending)))return;const m=(p[La]??0)<<8|(p[33]??0),f=p[Nl]??0,v=p[Da]??0,b=p.subarray(Es),E=!!(f&1),S=!!(f&2),w=!!(f&4),C=!!(f&8);a[d]??(a[d]={}),(D=a[d])[g]??(D[g]={});const P=(z=a[d][g])[m]??(z[m]={chunks:[]});if(S?P.meta=tr(mi(b)):P.chunks.push(b),_==null||_.onProgress(v/xr,d,P.meta),!E)return;const y=new Uint8Array(P.chunks.reduce((B,A)=>B+A.byteLength,0));P.chunks.reduce((B,A)=>(y.set(A,B),B+A.byteLength),0),delete a[d][g][m];const T=w?y:C?tr(mi(y)):mi(y);if(_){_.onComplete(T,d,P.meta);return}(o[g]??(o[g]=[])).push({payload:T,peerId:d,...P.meta===void 0?{}:{metadata:P.meta}})},clearPeer:d=>{delete a[d]}}},px=500,Wi=(n,e)=>{const t=tt(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},Ia=n=>{if(n!=null&&n.aborted)throw Wi("aborted","operation aborted")},Bl=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...Object.hasOwn(n,"m")?{m:n.m}:{}}:null,mx=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...typeof n.e=="string"?{e:n.e}:{}}:null,gs=(n,e)=>e===void 0?n:{...n,metadata:e},gx=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t})=>{const i={},r={},s=fx({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Ia}),a=s.makeInternalAction,o=s.handleData,c=p=>{const g=r[p];g&&(ot(g.timer),g.signal&&g.abortHandler&&g.signal.removeEventListener("abort",g.abortHandler),delete r[p])},l=(p,g)=>{gi(r).forEach(([_,m])=>{m.peerId===p&&(c(_),m.reject(g))})},h=(p,g)=>{s.clearPeer(p),l(p,Wi("disconnected",er(g,"peer disconnected")))},d=a("@_response");return d.onMessage((p,g,_)=>{const m=mx(_);if(!m)return;const f=r[m.r];if(!(!f||f.peerId!==g)){if(c(m.r),m.e!==void 0){f.reject(Wi("rejected",m.e));return}f.resolve(p)}}),{makeAction:(p,g)=>{if(g&&"onRequest"in g&&g.kind!=="request")throw tt('request actions must use kind: "request"');const _=(g==null?void 0:g.kind)??"message",m=a(p),f=i[p];if(f){if(f.kind!==_)throw tt(`action type "${p}" cannot be redefined`);return f.action}const v={kind:_,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:(g==null?void 0:g.onReceiveProgress)??null},b=(A,L)=>A?(I,N)=>A(I,gs({peerId:N},L)):void 0,E=A=>{v.onReceiveProgress=A},S=(A,L,I)=>{var V;const N=v.kind==="request"?Bl(I):null;(V=v.onReceiveProgress)==null||V.call(v,A,gs({peerId:L},N?N.m:I))};if(m.onProgress(S),_==="message"){let A=(g==null?void 0:g.onMessage)??null;const L=()=>{if(!A)return;const N=A;v.pendingMessages.splice(0).forEach(({payload:V,peerId:Q,metadata:ee})=>{Promise.resolve().then(()=>N(V,gs({peerId:Q},ee))).catch(U=>console.error(`${un} action handler error:`,U))})},I={send:async(N,V={})=>{await m.send(N,V.target,V.metadata,b(V.onProgress,V.metadata),V.signal)},get onMessage(){return A},set onMessage(N){A=N,L()},get onReceiveProgress(){return v.onReceiveProgress},set onReceiveProgress(N){E(N)}};return m.onMessage((N,V,Q)=>{if(!A){v.pendingMessages.push(Q===void 0?{payload:N,peerId:V}:{payload:N,peerId:V,metadata:Q});return}const ee=A;Promise.resolve().then(()=>ee(N,gs({peerId:V},Q))).catch(U=>console.error(`${un} action handler error:`,U))}),v.action=I,i[p]=v,L(),I}let w=(g==null?void 0:g.onRequest)??null;const C=A=>{ot(A.timer);const L=v.pendingRequests.indexOf(A);L>-1&&v.pendingRequests.splice(L,1)},P=(A,L,I)=>{d.send(null,A,{r:L,e:er(I,"request failed")})},y=(A,L)=>{C(A),Promise.resolve().then(()=>L(A.payload,{peerId:A.peerId,...A.metadata===void 0?{}:{metadata:A.metadata},signal:A.controller.signal})).then(async I=>{if(I===void 0)throw tt("request handler returned undefined");await d.send(I,A.peerId,{r:A.requestId})}).catch(I=>P(A.peerId,A.requestId,I)).finally(()=>A.controller.abort())},T=()=>{w&&v.pendingRequests.slice().forEach(A=>y(A,w))},D=(A,L,I,N)=>{if(w){const Q={payload:A,peerId:L,...I===void 0?{}:{metadata:I},requestId:N,controller:new AbortController,timer:null};y(Q,w);return}const V={payload:A,peerId:L,...I===void 0?{}:{metadata:I},requestId:N,controller:new AbortController,timer:setTimeout(()=>{C(V),V.controller.abort(),P(L,N,"request handler unavailable")},px)};v.pendingRequests.push(V)},z=async(A,L)=>{const{target:I,metadata:N,onProgress:V,signal:Q,timeoutMs:ee}=L;if(Ia(Q),!n(I,!1))throw Wi("disconnected",`no active peer with id ${I}`);const U=sr(20),H=new Promise((se,Me)=>{const Ee={peerId:I,resolve:se,reject:Me,timer:null,...Q===void 0?{}:{signal:Q}},K=()=>{c(U),Me(Wi("aborted","operation aborted"))};Q&&(Ee.abortHandler=K,Q.addEventListener("abort",K,{once:!0})),r[U]=Ee}).catch(se=>{throw se});try{await m.send(A,I,N===void 0?{r:U}:{r:U,m:N},b(V,N),Q);const se=r[U];return se&&ee!==void 0&&(se.timer=setTimeout(()=>{c(U),se.reject(Wi("timeout","request timed out"))},ee)),await H}catch(se){throw c(U),se}},B={request:z,requestMany:async(A,L)=>(Ia(L.signal),await Mi(L.targets.map(async I=>{var N,V;try{const Q={peerId:I,status:"fulfilled",value:await z(A,{target:I,...L.metadata===void 0?{}:{metadata:L.metadata},...L.timeoutMs===void 0?{}:{timeoutMs:L.timeoutMs},...L.onProgress===void 0?{}:{onProgress:L.onProgress},...L.signal===void 0?{}:{signal:L.signal}})};return(N=L.onResult)==null||N.call(L,Q),Q}catch(Q){const ee=$n(Q,"request failed");if(ee.kind==="aborted"||!ee.kind)throw ee;const U=ee.kind==="timeout"?{peerId:I,status:"timeout"}:ee.kind==="disconnected"?{peerId:I,status:"disconnected"}:{peerId:I,status:"rejected",error:ee};return(V=L.onResult)==null||V.call(L,U),U}}))),get onRequest(){return w},set onRequest(A){w=A,T()},get onReceiveProgress(){return v.onReceiveProgress},set onReceiveProgress(A){E(A)}};return m.onMessage((A,L,I)=>{const N=Bl(I);N&&D(A,L,N.m,N.r)}),v.action=B,i[p]=v,T(),B},makeInternalAction:a,handleData:o,clearPeer:h}},zl=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,Gl=n=>e=>{let t=n.get(e);return t||(t=sr(20),n.set(e,t)),t},uu=()=>{const n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,r=new Map,s=new Map;return{getStreamKey:Gl(n),getTrackKey:Gl(e),rememberRemoteStream:(a,o,c)=>{t.set(a,o),c&&i.set(c,o)},getRemoteStream:(a,o)=>t.get(a)??(o?i.get(o):void 0),rememberRemoteTrack:(a,o,c,l,h)=>{const d={track:o,stream:c};r.set(a,d),l&&s.set(l,d),h&&i.set(h,c)},getRemoteTrack:(a,o)=>r.get(a)??(o?s.get(o):void 0),clearRemote:()=>{t.clear(),i.clear(),r.clear(),s.clear()}}},_x=({iterate:n,isActive:e,getSharedMediaPeer:t})=>{const i={},r={},s=uu(),a={onPeerStream:null,onPeerTrack:null},o=(h,d,u,p)=>{var g,_,m;e(h)&&((_=(g=t(h))==null?void 0:g.__trysteroMedia)==null||_.rememberRemoteStream(d,u,typeof u.id=="string"?u.id:void 0),(m=a.onPeerStream)==null||m.call(a,u,h,p))},c=(h,d,u,p,g)=>{var _,m,f;e(h)&&((m=(_=t(h))==null?void 0:_.__trysteroMedia)==null||m.rememberRemoteTrack(d,u,p,typeof u.id=="string"?u.id:void 0,typeof p.id=="string"?p.id:void 0),(f=a.onPeerTrack)==null||f.call(a,u,p,h,g))},l=(h,d,u,p,g,_={})=>{const m={k:d,..._,...u===void 0?{}:{m:u}};return n(h,async(f,v)=>{await p(m,f),g(v)})};return{addStream:(h,d,u)=>l(d.target,s.getStreamKey(h),d.metadata,u,p=>p.addStream(h),{s:h.id}),removeStream:(h,d)=>{n(d,(u,p)=>p.removeStream(h))},addTrack:(h,d,u,p)=>l(u.target,s.getTrackKey(h),u.metadata,p,g=>g.addTrack(h,d),{s:d.id,t:h.id}),removeTrack:(h,d)=>{n(d,(u,p)=>p.removeTrack(h))},replaceTrack:(h,d,u,p)=>l(u.target,s.getTrackKey(d),u.metadata,p,g=>g.replaceTrack(h,d),{t:h.id}),receiveStreamMeta:(h,d)=>{var g,_;if(!e(d))return;const u=zl(h);if(!u)return;const p=(_=(g=t(d))==null?void 0:g.__trysteroMedia)==null?void 0:_.getRemoteStream(u.key,u.streamId);if(p){o(d,u.key,p,u.metadata);return}(i[d]??(i[d]=[])).push(u)},receiveTrackMeta:(h,d)=>{var g,_;if(!e(d))return;const u=zl(h);if(!u)return;const p=(_=(g=t(d))==null?void 0:g.__trysteroMedia)==null?void 0:_.getRemoteTrack(u.key,u.trackId);if(p){c(d,u.key,p.track,p.stream,u.metadata);return}(r[d]??(r[d]=[])).push(u)},receiveRemoteStream:(h,d)=>{var p;if(!e(h))return;const u=(p=i[h])==null?void 0:p.shift();u&&o(h,u.key,d,u.metadata)},receiveRemoteTrack:(h,d,u)=>{var g;if(!e(h))return;const p=(g=r[h])==null?void 0:g.shift();p&&c(h,p.key,d,u,p.metadata)},clearPeer:h=>{delete i[h],delete r[h]},get onPeerStream(){return a.onPeerStream},set onPeerStream(h){a.onPeerStream=h},get onPeerTrack(){return a.onPeerTrack},set onPeerTrack(h){a.onPeerTrack=h}}},Hl="beforeunload",xx=1e4,qn=n=>"@_"+n,Mr=new Set,Vl=()=>Mr.forEach(n=>n()),vx=n=>(Mr.add(n),Mr.size===1&&addEventListener(Hl,Vl),()=>{Mr.delete(n),Mr.size||removeEventListener(Hl,Vl)});var yx=(n,e,t,{onPeerHandshake:i,onHandshakeError:r,handshakeTimeoutMs:s=xx,isPassive:a=!1}={})=>{const o={},c={},l={},h={onPeerJoin:null,onPeerLeave:null};let d=Ft,u=null;const p=(A,L,{includePending:I=!1}={})=>(A?Array.isArray(A)?A:[A]:Qt(I?o:c)).flatMap(N=>{const V=I?o[N]:c[N];return V?[Promise.resolve(L(N,V))]:(console.warn(`${un}: no peer with id ${N} found`),[])}),g=_x({iterate:(A,L)=>p(A,(I,N)=>L(I,N)),isActive:A=>!!c[A],getSharedMediaPeer:A=>o[A]??null}),_=gx({getPeer:(A,L)=>(L?o:c)[A],getPeerIds:A=>Qt(A?o:c),canReceiveFromPeer:(A,L)=>!!(u!=null&&u.canReceiveFromPeer(A,L))}),m=_.makeInternalAction,f=_.handleData,v=_.makeAction,b=(A,L=tt("peer disconnected"))=>{var N;const I=$n(L,"peer disconnected");u==null||u.clearPeer(A,I),delete o[A],delete c[A],_.clearPeer(A,I),(N=l[A])==null||N.splice(0).forEach(V=>V.reject(I)),delete l[A],g.clearPeer(A)},E=(A,L,I)=>{var Q;const N=o[A];if(!N||L&&N!==L)return;const V=!!c[A];b(A,I),N.destroy(),V&&((Q=h.onPeerLeave)==null||Q.call(h,A)),e(A)},S=async()=>{await D.send(""),await new Promise(A=>setTimeout(A,99)),gi(o).forEach(([A,L])=>{L.destroy(),b(A,tt("room left"))}),d(),t()},w=m(qn("ping")),C=m(qn("pong")),P=m(qn("signal")),y=m(qn("stream")),T=m(qn("track")),D=m(qn("leave"),{sendToPending:!0,receiveWhilePending:!0}),z=m(qn("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),B=m(qn("hsready"),{sendToPending:!0,receiveWhilePending:!0});return u=ex({...i===void 0?{}:{onPeerHandshake:i},...r===void 0?{}:{onHandshakeError:r},handshakeTimeoutMs:s,sendHandshakeData:z.send,sendHandshakeReady:B.send,onActivate:(A,L)=>{var I;c[A]=L,(I=h.onPeerJoin)==null||I.call(h,A)},onFailure:(A,L,I)=>E(A,L,I)}),w.onMessage((A,L)=>C.send("",L)),C.onMessage((A,L)=>{var N;const I=l[L];(N=I==null?void 0:I.shift())==null||N.resolve(),I&&!I.length&&delete l[L]}),P.onMessage((A,L)=>{var I;c[L]&&((I=o[L])==null||I.signal(A))}),y.onMessage((A,L)=>g.receiveStreamMeta(A,L)),T.onMessage((A,L)=>g.receiveTrackMeta(A,L)),D.onMessage((A,L)=>E(L,void 0,tt("peer left room"))),z.onMessage((A,L,I)=>u==null?void 0:u.receiveHandshakeData(A,L,I)),B.onMessage((A,L)=>u==null?void 0:u.receiveHandshakeReady(L)),n((A,L)=>{const I=o[L];if(I){if(I===A)return;I.destroy(),b(L,tt("peer replaced"))}o[L]=A,u==null||u.addPeer(L,A),A.setHandlers({data:N=>f(L,N),stream:N=>g.receiveRemoteStream(L,N),track:(N,V)=>g.receiveRemoteTrack(L,N,V),signal:N=>{c[L]&&P.send(N,L)},close:()=>E(L,A,tt("peer disconnected")),error:N=>{console.error(`${un} peer error:`,N),E(L,A,N)}}),u==null||u.start(L,A)}),su&&(d=vx(()=>S().catch(Ft))),{makeAction:v,leave:S,ping:async A=>{if(!c[A])throw tt(`no active peer with id ${A}`);const L=Date.now();return await new Promise((I,N)=>{const V=l[A]??(l[A]=[]),Q=()=>{const U=l[A];if(!U)return;const H=U.indexOf(ee);H>-1&&U.splice(H,1),U.length||delete l[A]},ee={resolve:()=>{Q(),I()},reject:U=>{Q(),N(U)}};V.push(ee),w.send("",A).catch(U=>ee.reject($n(U,"peer disconnected")))}),Date.now()-L},isPassive:()=>a,getPeers:()=>au(gi(c).map(([A,L])=>[A,L.connection])),addStream:(A,L={})=>g.addStream(A,L,y.send),removeStream:(A,L={})=>{g.removeStream(A,L.target)},addTrack:(A,L,I={})=>g.addTrack(A,L,I,T.send),removeTrack:(A,L={})=>{g.removeTrack(A,L.target)},replaceTrack:(A,L,I={})=>g.replaceTrack(A,L,I,T.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(A){h.onPeerJoin=A,A&&Qt(c).forEach(L=>A(L))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(A){h.onPeerLeave=A},get onPeerStream(){return g.onPeerStream},set onPeerStream(A){g.onPeerStream=A},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(A){g.onPeerTrack=A}}};const hu=1,fu=2,Wl=(n,e)=>{const t=Jn(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=hu,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},Sx=(n,e)=>{const t=Jn(n),i=new Uint8Array(4+t.byteLength);return i[0]=fu,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},Mx=n=>{const e=new Uint8Array(n);if(e.byteLength<3)return null;if(e[0]===hu){const r=(e[1]??0)<<8|(e[2]??0),s=3+r;return r<=0||e.byteLength<s?null:{type:"room",roomToken:mi(e.subarray(3,s)),payload:e.subarray(s).slice().buffer}}if(e[0]!==fu||e.byteLength<4)return null;const t=(e[2]??0)<<8|(e[3]??0),i=4+t;return t<=0||e.byteLength<i?null:{type:"presence",roomToken:mi(e.subarray(4,i)),isPresent:e[1]===1}},pu=n=>{const{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||(t==null?void 0:t.readyState)==="closing"||(t==null?void 0:t.readyState)==="closed"},bx=n=>{if(pu(n))return"stale";const{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"};var Ex=class{constructor(){It(this,"byApp",{});It(this,"roomPresenceHandlers",{})}getMap(n){var e;return(e=this.byApp)[n]??(e[n]={})}get(n,e){var t;return(t=this.byApp[n])==null?void 0:t[e]}isPeerStale(n){return pu(n)}getHealth(n){return this.isPeerStale(n)?"stale":"live"}setRoomPresenceHandler(n,e){return this.roomPresenceHandlers[n]=e,()=>{this.roomPresenceHandlers[n]===e&&delete this.roomPresenceHandlers[n]}}sendRoomPresence(n,e,t){n.isClosing||n.peer.isDead||n.peer.sendData(Sx(e,t))}clear(n,e,{destroyPeer:t}){const i=this.byApp[n],r=i==null?void 0:i[e];if(!r||r.isClosing)return;r.idleTimer=ot(r.idleTimer),r.isClosing=!0,t&&!r.peer.isDead&&r.peer.destroy();const s=Yi(r.bindings);r.bindings={},r.bindingsByToken={},r.controlRoomId=null,delete i[e],s.forEach(a=>{var o,c;(c=(o=a.handlers).close)==null||c.call(o),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),r.media.clearRemote(),r.pendingDataByToken.clear(),r.remoteRoomTokens.clear(),Qt(i).length===0&&delete this.byApp[n]}register(n,e,t,i){const r=this.getMap(n),s=r[e];if(s){if(s.idleTimer=ot(s.idleTimer),s.peer===t)return s;this.clear(n,e,{destroyPeer:!0})}const a={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:uu(),idleMs:i,isClosing:!1};return t.setHandlers({data:o=>this.dispatchData(a,o),signal:o=>this.dispatchSignal(a,o),close:()=>this.clear(n,e,{destroyPeer:!1}),error:o=>{console.error(`${un} peer error:`,o),this.clear(n,e,{destroyPeer:!1})},track:(o,c)=>this.dispatchTrack(a,o,c)}),r[e]=a,a}bind(n,e,t,{onDetach:i}){const r=t.bindings[n];if(r)return t.idleTimer=ot(t.idleTimer),{proxy:r.proxy,isNew:!1};const s={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Ft,proxy:{}},a=()=>{t.bindings[n]&&(this.pruneRoomOwnership(t,n),delete t.bindings[n],s.roomToken&&t.bindingsByToken[s.roomToken]===s&&delete t.bindingsByToken[s.roomToken],t.controlRoomId===n&&(t.controlRoomId=Qt(t.bindings)[0]??null),i(),this.scheduleIdleTimer(t))},o={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!s.roomToken){s.pendingSendData.push(c);return}t.peer.sendData(Wl(s.roomToken,c))},destroy:()=>a(),setHandlers:c=>{const{signal:l,...h}=c;Object.assign(s.handlers,h),l&&(s.handlers.signal=l),this.flushBindingQueues(s)},offerPromise:t.peer.offerPromise,addStream:c=>{const l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(n),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>{const l=t.streamOwners.get(c);l&&(l.delete(n),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{const h=t.trackOwners.get(c)??{stream:l,rooms:new Set},d=h.rooms.size===0;return h.stream=l,h.rooms.add(n),t.trackOwners.set(c,h),d?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(u=>u.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{const l=t.trackOwners.get(c);l&&(l.rooms.delete(n),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{const h=t.trackOwners.get(c);if(h){t.trackOwners.delete(c);const d=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(u=>d.rooms.add(u)),t.trackOwners.set(l,d)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return s.proxy=o,s.detach=a,t.bindings[n]=s,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=ot(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[n]!==s)return;s.roomToken=c,t.bindingsByToken[c]=s;const l=t.pendingDataByToken.get(c);l!=null&&l.length&&(s.pendingData.push(...l),t.pendingDataByToken.delete(c)),s.pendingSendData.splice(0).forEach(h=>t.peer.sendData(Wl(c,h))),this.flushBindingQueues(s)}),{proxy:o,isNew:!0}}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>{t.delete(e),t.size===0&&(n.streamOwners.delete(i),n.peer.removeStream(i))}),n.trackOwners.forEach((t,i)=>{t.rooms.delete(e),t.rooms.size===0&&(n.trackOwners.delete(i),n.peer.removeTrack(i))})}scheduleIdleTimer(n){n.isClosing||Qt(n.bindings).length>0||(n.idleTimer=ot(n.idleTimer),n.idleTimer=setTimeout(()=>{var t;const e=(t=this.byApp[n.appId])==null?void 0:t[n.peerId];!e||Qt(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){const t=n.bindings[n.controlRoomId];if(t!=null&&t.handlers.signal)return t}const e=Yi(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n){const{handlers:e}=n;e.data&&n.pendingData.length>0&&n.pendingData.splice(0).forEach(t=>{var i;return(i=e.data)==null?void 0:i.call(e,t)}),(e.track||e.stream)&&n.pendingTracks.length&&n.pendingTracks.splice(0).forEach(({track:t,stream:i})=>{var r,s;(r=e.track)==null||r.call(e,t,i),(s=e.stream)==null||s.call(e,i)})}dispatchData(n,e){var r,s;const t=Mx(e);if(!t)return;if(t.type==="presence"){t.isPresent?n.remoteRoomTokens.add(t.roomToken):n.remoteRoomTokens.delete(t.roomToken),(s=(r=this.roomPresenceHandlers)[n.appId])==null||s.call(r,n.peerId,t.roomToken,t.isPresent);return}const i=n.bindingsByToken[t.roomToken];if(!i){const a=n.pendingDataByToken.get(t.roomToken)??[];a.push(t.payload),n.pendingDataByToken.set(t.roomToken,a);return}i.handlers.data?i.handlers.data(t.payload):i.pendingData.push(t.payload)}dispatchSignal(n,e){var t,i,r;(r=(t=this.getSignalBinding(n))==null?void 0:(i=t.handlers).signal)==null||r.call(i,e)}dispatchTrack(n,e,t){Yi(n.bindings).forEach(i=>{var r,s,a,o;if(i.handlers.track||i.handlers.stream){(s=(r=i.handlers).track)==null||s.call(r,e,t),(o=(a=i.handlers).stream)==null||o.call(a,t);return}i.pendingTracks.push({track:e,stream:t})})}};const Tx=23333,wx=12,Ax=7533,Rx=23333,Bo="__legacy__",Ds="offer-placeholder",Cx=["offer","answer","candidate"],Px=n=>{if(typeof n=="string")try{const e=tr(n);return e&&typeof e=="object"?e:null}catch{return null}return n&&typeof n=="object"?n:null},vr=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,Lx=n=>Cx.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),mu=(n,e,t,i,r,s)=>{n.toCipher(e).then(a=>{n.isLeaving()||!s()||i(t,jt(r(a.sdp)))})},Dx=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),Ix=n=>{var e;return[...n.turnConfig??[],...((e=n.rtcConfig)==null?void 0:e.iceServers)??[]].some(({urls:t})=>(Array.isArray(t)?t:[t]).some(i=>/^turns?:/i.test(i)))},Ux=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${Ix(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Hs=(n,e,t)=>{var i;n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,(i=n.onJoinError)==null||i.call(n,{error:Ux(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},Fr=(n,e)=>n[e]??(n[e]=Dx()),en=n=>{n.connectedPeer?n.status="connected":n.answeringPeer?n.status="answering":n.offerPeer||n.offerRelays.some(Boolean)?n.status="offering":n.status="idle"},Ts=(n,e)=>{n.answeringPeer===e&&(n.answeringExpiryTimer=ot(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,en(n))},zo=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,en(n))},uc=(n,e)=>{n.offerRelayTimers[e]=ot(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0,en(n))},Xl=(n,e)=>{(n==null?void 0:n.offerRelays[e])===Ds&&uc(n,e)},Nx=n=>{if(n.isDead||n.connection.connectionState==="closed")return!0;try{return!!n.connection.remoteDescription}catch{return!0}},Or=(n,e)=>{const t=n.offerAnswered;n.offerExpiryTimer=ot(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((i,r)=>uc(n,r)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(t||Nx(n.offerPeer)?n.offerPeer.isDead||n.offerPeer.destroy():e.recycle(n.offerPeer)),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1,en(n)},Fx=(n,e,t,i)=>{ot(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const r=n.peerStates[t];!r||r.connectedPeer||r.answeringPeer!==i||(r.answerSent&&Hs(n,r,t),i.destroy(),Ts(r,i),n.checkDeactivate())},Rx)},Ox=async(n,e,t)=>{const i=t?[t,Bo]:[Bo];for(const r of i){const s=n.pendingCandidates[r];if(s!=null&&s.length){delete n.pendingCandidates[r];for(const a of s)await e.signal(a)}}},gu=(n,e,t,i=dc)=>{ot(e.offerExpiryTimer);const r=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const s=n.peerStates[t];!s||s.connectedPeer||s.offerId!==r||(s.offerAnswered&&Hs(n,s,t),Or(s,n.offerPool),n.checkDeactivate())},i)},kx=(n,e,t,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{const r=(await n.offerPool.checkout(1,!1,n.encryptOffer))[0];if(!r)throw tt("failed to allocate offer peer");const{peer:s,offer:a}=r;e.offerPeer=s,e.offerId=sr(wx),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],en(e);const o=()=>{e.offerPeer===s&&!e.connectedPeer&&(e.offerAnswered&&Hs(n,e,t),Or(e,n.offerPool)),n.disconnectPeer(s,t),n.checkDeactivate()};return s.setHandlers({connect:()=>n.connectPeer(s,t,i),signal:c=>{e.offerPeer===s&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l==null?void 0:l(c)))},close:o,error:o}),gu(n,e,t),{peer:s,offer:a,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),Bx=async(n,e,t,i,r)=>{if(i){n.attachSharedPeerToRoom(t,i);return}const s=n.peerStates[t];if(!s||s.connectedPeer||s.answeringPeer||s.offerAnswered){Xl(s,e);return}if(s.offerRelays[e]!==Ds)return;const[a,o]=await Mi([Nr(Ur(n.rootTopicPlaintext,t)),kx(n,s,t,e)]);if(n.isLeaving())return;if(s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerRelays[e]!==Ds){Xl(s,e);return}s.offerRelayTimers[e]=ot(s.offerRelayTimers[e]),s.offerRelays[e]=!0,en(s),s.offerRelayTimers[e]=setTimeout(()=>Vx(n,t,e),(n.announceIntervals[e]??n.announceIntervalMs)*.9);let c=!1;s.offerSignalRelays[e]=l=>{c&&(n.isLeaving()||s.connectedPeer||s.offerPeer!==o.peer||s.offerId!==o.offerId||l.type!=="candidate"||mu(n,l,a,r,h=>({peerId:dn,offerId:o.offerId,candidate:h,...n.isPassive?{passive:!0}:{}}),()=>!s.connectedPeer&&s.offerPeer===o.peer&&s.offerId===o.offerId))},r(a,jt({peerId:dn,offerId:o.offerId,offer:o.offer,...n.isPassive?{passive:!0}:{}})),c=!0,s.offerSignalBacklog.forEach(l=>{var h,d;return(d=(h=s.offerSignalRelays)[e])==null?void 0:d.call(h,l)})},zx=async(n,e,t,i,r,s,a)=>{var p;const o=Fr(n.peerStates,t);if(o.answeringPeer||o.offerAnswered)return;const c=!!(o.offerPeer||o.offerRelays.some(Boolean));if((c||s)&&dn<t)return;c&&Or(o,n.offerPool);const l=n.initPeer(!1,n.config);o.answeringPeer=l,o.answerSent=!1,o.connectionErrorReported=!1,Fx(n,o,t,l),en(o);const h=()=>{o.answeringPeer===l&&!o.connectedPeer&&o.answerSent&&Hs(n,o,t),Ts(o,l),n.disconnectPeer(l,t),n.checkDeactivate()};l.setHandlers({connect:()=>n.connectPeer(l,t,e),close:h,error:h});let d;try{d=await n.toPlain({type:"offer",sdp:i})}catch{Ts(o,l),(p=n.onJoinError)==null||p.call(n,{error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(l.isDead){Ts(o,l);return}const u=await Nr(Ur(n.rootTopicPlaintext,t));n.isLeaving()||(l.setHandlers({signal:g=>{n.isLeaving()||o.answeringPeer!==l||l.isDead||g.type!=="answer"&&g.type!=="candidate"||mu(n,g,u,a,_=>{const m={peerId:dn};return g.type==="answer"?(o.answerSent=!0,m.answer=_):m.candidate=_,r&&(m.offerId=r),n.isPassive&&(m.passive=!0),m},()=>o.answeringPeer===l&&!l.isDead)}}),await l.signal(d),await Ox(o,l,r))},Gx=async(n,e,t,i,r)=>{var d;let s;try{s=await n.toPlain({type:ou,sdp:t})}catch{return}const a=Fr(n.peerStates,e),o=i&&(a!=null&&a.offerPeer)&&a.offerId===i?a.offerPeer:null,c=(a==null?void 0:a.answeringPeer)??null,l=!i&&(a!=null&&a.offerPeer)?a.offerPeer:null,h=r&&!r.isDead?r:o??c??l;if(!h||h.isDead){const u=i??Bo;((d=a.pendingCandidates)[u]??(d[u]=[])).push(s);return}h.signal(s)},Hx=async(n,e,t,i,r,s)=>{var o;let a;try{a=await n.toPlain({type:"answer",sdp:i})}catch{(o=n.onJoinError)==null||o.call(n,{error:"incorrect room password when decrypting answer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(s)n.offerPool.claimLeased(s),s.setHandlers({connect:()=>n.connectPeer(s,t,e),close:()=>n.disconnectPeer(s,t)}),s.signal(a);else{const c=n.peerStates[t];if(!c||!c.offerPeer||c.offerAnswered||r&&c.offerId&&r!==c.offerId||c.offerPeer.isDead)return;c.offerAnswered=!0,gu(n,c,t,Tx),c.offerPeer.signal(a)}},Vx=(n,e,t)=>{const i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(uc(i,t),n.checkDeactivate())},Wx=n=>e=>async(t,i,r)=>{var E;if(n.isLeaving())return;const s=Px(i);if(!s||Lx(s))return;const a=vr(s,"peerId")??"",o=vr(s,"offer"),c=vr(s,"answer"),l=vr(s,"candidate"),h=vr(s,"offerId"),d=s.peer,u=s.hasOutgoingOffer===!0,p=s.passive===!0;if(!a||a===dn)return;const[g,_]=await Mi([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==g&&t!==_||n.isPassive&&p||(n.isPassive&&!n.isActive&&!c&&!l&&(n.isActive=!0,(E=n.requeueAnnounce)==null||E.call(n)),n.isPassive&&!n.isActive))return;const m=n.peerStates[a],f=m==null?void 0:m.connectedPeer;if(f&&m){const S=bx(f);if(S==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(S==="stale")zo(m);else{const w=Date.now(),C=m.connectedPeerUnhealthySinceMs??w;if(m.connectedPeerUnhealthySinceMs=C,w-C<Ax)return;zo(m)}}let v=n.sharedPeers.get(n.appId,a);v&&n.sharedPeers.getHealth(v.peer)==="stale"&&(n.sharedPeers.clear(n.appId,a,{destroyPeer:!0}),v=void 0);const b=!!(a&&!o&&!c&&!l);if(b&&!v){const S=Fr(n.peerStates,a),w=dn<a;if(S.answeringPeer||S.connectedPeer||S.offerAnswered)return;if(!w&&!S.offerPeer){const C=await Nr(Ur(n.rootTopicPlaintext,a));!n.isLeaving()&&!S.connectedPeer&&r(C,jt({peerId:dn}));return}if(S.offerRelays[e])return;S.offerRelays[e]=Ds,en(S)}if(v&&(o||c||l)){if(v.bindings[n.roomId])return;n.attachSharedPeerToRoom(a,v);return}if(b)return Bx(n,e,a,v,r);if(o)return zx(n,e,a,o,h,u,r);if(l)return Gx(n,a,l,h,d);if(c)return Hx(n,e,a,c,h,d)},_s=5333,Xx=[233,533,1333],qx=7533,Yx=123333;var jx=({init:n,subscribe:e,announce:t,deactivate:i})=>{const r={},s={},a={},o={},c=new Ex,l=()=>Yi(r).some(S=>Qt(S).length>0),h=S=>s[S]??(s[S]={}),d=S=>a[S]??(a[S]={}),u=(S,w,C)=>{c.getHealth(S.peer)==="live"&&c.sendRoomPresence(S,w,C)},p=(S,w)=>{gi(s[S]??{}).forEach(([C,P])=>{if(!P.shouldAdvertise())return;const{roomToken:y,roomTokenPromise:T}=P;if(y){u(w,y,!0);return}T.then(D=>{var z;((z=s[S])==null?void 0:z[C])===P&&P.roomToken===D&&(c.get(S,w.peerId)!==w||w.isClosing||P.shouldAdvertise()&&u(w,D,!0))})})},g=(S,w,C)=>Yi(c.getMap(S)).forEach(P=>u(P,w,C)),_=S=>{o[S]||(o[S]=c.setRoomPresenceHandler(S,(w,C,P)=>{var D,z,B;if(!P)return;const y=c.get(S,w),T=(D=a[S])==null?void 0:D[C];!y||!T||(B=(z=s[S])==null?void 0:z[T])==null||B.attachSharedPeerToRoom(w,y)}))},m=S=>{var w;r[S]&&Qt(r[S]).length>0||((w=o[S])==null||w.call(o),delete o[S],delete s[S],delete a[S])};let f=!1,v=[],b=null,E=Ft;return(S,w,C)=>{var be,ue;if(!S)throw tt("requires a config map as the first argument");if(C&&typeof C!="object")throw tt("third argument must be a callbacks object");const{appId:P}=S,y=C==null?void 0:C.onJoinError,T=C==null?void 0:C.onPeerHandshake,D=C==null?void 0:C.handshakeTimeoutMs;if(!P)throw tt("config map is missing appId field");if(!w)throw tt("roomId argument required");if(D!==void 0&&(!Number.isFinite(D)||D<=0))throw tt("handshakeTimeoutMs must be a positive number");if((be=r[P])!=null&&be[w])return r[P][w];_(P);const z=Ur(un,P,w),B=Nr(z),A=Nr(Ur(z,dn)),L=X_(S.password??"",P,w),I=q_(P,w),N=S._test_only_sharedPeerIdleMs??Yx;let V=!1;const Q=ne=>async le=>({type:le.type,sdp:await ne(L,le.sdp)}),ee=Q(j_),U=Q(Y_),H=c.getMap(P),se=()=>Ul(!0,S);let Me=!1;b||(b=new Z_(se));const Ee=b,K=async ne=>{const le=await ne.getOffer(Date.now()-ne.created>dc);if(!le||le.type!=="offer")throw tt("failed to get offer for peer");return(await U(le)).sdp},J=(ne,le)=>{const Z=Fr(Pe.peerStates,ne);Z.answeringExpiryTimer=ot(Z.answeringExpiryTimer),Z.answeringPeer=null;const{proxy:ae,isNew:ie}=c.bind(w,I,le,{onDetach:()=>{const fe=Pe.peerStates[ne];(fe==null?void 0:fe.connectedPeer)===le.peer&&(fe.connectedPeer=null,fe.connectedPeerUnhealthySinceMs=null,en(fe))}});Z.connectedPeer=le.peer,Z.connectedPeerUnhealthySinceMs=null,en(Z),ie&&R(ae,ne),Or(Z,Ee)},me=(ne,le,Z)=>{if(V){ne.destroy();return}const ae=Fr(Pe.peerStates,le);if(ae.connectedPeer){const ce=H[le];if(ce&&ae.connectedPeer===ce.peer&&ce.bindings[w])return;ae.connectedPeer!==ne&&!ne.isDead&&ne.destroy();return}let ie=H[le];if(ie&&c.getHealth(ie.peer)==="stale"&&(c.clear(P,le,{destroyPeer:!0}),ie=void 0),ie&&ie.peer!==ne){ne.isDead||ne.destroy(),J(le,ie);return}const fe=!ie;ie||(ie=c.register(P,le,ne,N)),J(le,ie),fe&&p(P,ie)},Ue=(ne,le)=>{var ae;if(V)return;const Z=Pe.peerStates[le];(Z==null?void 0:Z.connectedPeer)===ne&&(zo(Z),Xe(),!he&&Me&&((ae=Pe.requeueAnnounce)==null||ae.call(Pe)))},he=!!S.passive;let Ie=null,Je,Ne=Ft;const Xe=()=>{if(!he||!Pe.isActive)return;let ne=!1;gi(Pe.peerStates).forEach(([le,Z])=>{Z.connectedPeer||Z.answeringPeer||Z.offerInitPromise||Z.offerPeer||Z.offerRelays.some(Boolean)?ne=!0:Z.status==="idle"&&delete Pe.peerStates[le]}),ne||(Pe.isActive=!1,Je=ot(Je),je.forEach(ot),je.length=0,Ne(),Ie!=null&&Ie.roomToken&&g(P,Ie.roomToken,!1))},Pe={appId:P,roomId:w,config:S,peerStates:{},rootTopicPlaintext:z,rootTopicP:B,selfTopicP:A,toPlain:ee,toCipher:U,isLeaving:()=>V,isPassive:he,isActive:!he,onJoinError:y,sharedPeers:c,offerPool:Ee,encryptOffer:K,initPeer:Ul,connectPeer:me,disconnectPeer:Ue,attachSharedPeerToRoom:J,checkDeactivate:Xe,announceIntervals:[],announceIntervalMs:_s},Oe={config:S,appId:P,roomId:w,isPassive:he},nt=Wx(Pe);if(!f){const ne=n(S);v=(Array.isArray(ne)?ne:[ne]).map(le=>Promise.resolve(le)),f=!0,E=(ue=S.relayConfig)!=null&&ue.manualReconnection?Ft:H_()}!he&&!Ee.isActive&&Ee.warmup(),Pe.announceIntervals=v.map(()=>_s);const F=v.map(()=>_s),ht=v.map(()=>0),Ye=v.map(()=>0),je=[],we=v.map(async(ne,le)=>e(await ne,await B,await A,nt(le),Z=>Ee.getOffers(Z,K),Oe));Mi([B,A]).then(([ne,le])=>{if(V)return;const Z=async(ae,ie)=>{var de;if(V||he&&!Pe.isActive)return;const fe=he?{passive:!0}:void 0;let ce;try{ce=await t(ae,ne,le,fe,Oe),Ye[ie]=0}catch(Se){const oe=Ye[ie]??0;oe===0&&((de=S.relayConfig)==null?void 0:de.warnOnRelayFailure)!==!1&&console.warn(`${un}: announce failed - ${er(Se,"")}`),Ye[ie]=oe+1}if(V||he&&!Pe.isActive||ce&&typeof ce!="number"&&"stopAnnouncing"in ce)return;typeof ce=="number"?(Pe.announceIntervals[ie]=ce,F[ie]=ce):ce&&(F[ie]=ce.nextAnnounceMs,Me||(Me=ce.reannounceOnDisconnect===!0));const ze=ht[ie]??0;ht[ie]=ze+1;const O=F[ie]??_s,_e=Xx[ze];je[ie]=setTimeout(()=>{Z(ae,ie)},typeof _e=="number"?Math.min(O,_e):O)};Ne=()=>{i&&v.forEach(async ae=>{const ie=await ae;V||i(ie,ne,le,Oe)})},Pe.requeueAnnounce=()=>{je.forEach(ot),je.length=0,Je=ot(Je),Ee.isActive||Ee.warmup(),Ie!=null&&Ie.roomToken&&g(P,Ie.roomToken,!0),Je=setTimeout(Xe,qx),v.forEach(async(ae,ie)=>{const fe=await ae;fe&&!V&&(ht[ie]=0,Z(fe,ie))})},we.forEach(async(ae,ie)=>{if(await ae,V)return;const fe=await v[ie];fe&&!V&&(!he||Pe.isActive)&&Z(fe,ie)})});let R=Ft;const{compose:x}=J_(S.password??"",P,w),k=x(T),j={...k?{onPeerHandshake:k}:{},...D===void 0?{}:{handshakeTimeoutMs:D},isPassive:he,onHandshakeError:(ne,le)=>y==null?void 0:y({error:le.replace(/^handshake failed: /,""),appId:P,peerId:ne,roomId:w})};r[P]??(r[P]={});const te=h(P),$=yx(ne=>R=ne,ne=>{if(V)return;const le=Pe.peerStates[ne];le!=null&&le.connectedPeer&&(le.connectedPeer=null,en(le),Xe())},()=>{var le,Z;V=!0,R=Ft;const ne=(le=s[P])==null?void 0:le[w];ne!=null&&ne.roomToken&&(g(P,ne.roomToken,!1),(Z=a[P])==null||delete Z[ne.roomToken],a[P]&&!Qt(a[P]).length&&delete a[P]),s[P]&&(delete s[P][w],Qt(s[P]).length||delete s[P]),gi(Pe.peerStates).forEach(([ae,ie])=>{if(ie.answeringExpiryTimer=ot(ie.answeringExpiryTimer),ie.connectedPeer&&!ie.connectedPeer.isDead){const fe=H[ae];(!fe||fe.peer!==ie.connectedPeer)&&ie.connectedPeer.destroy()}ie.answeringPeer&&!ie.answeringPeer.isDead&&ie.answeringPeer.destroy(),Or(ie,Ee),ie.connectedPeer=null,ie.answeringPeer=null,en(ie)}),r[P]&&(delete r[P][w],Qt(r[P]).length===0&&delete r[P]),je.forEach(ot),Je=ot(Je),we.forEach(async ae=>{(await ae)()}),!l()&&(f=!1,Ee.destroy(),b=null,E(),m(P))},j);return Ie={roomToken:null,roomTokenPromise:I,attachSharedPeerToRoom:J,shouldAdvertise:()=>!he||Pe.isActive},te[w]=Ie,I.then(ne=>{var Z;const le=Ie;!le||V||((Z=s[P])==null?void 0:Z[w])!==le||(le.roomToken=ne,d(P)[ne]=w,Yi(H).forEach(ae=>{ae.remoteRoomTokens.has(ne)&&J(ae.peerId,ae)}),(!he||Pe.isActive)&&g(P,ne,!0))}),r[P][w]=$}};const $x=["offer","answer","candidate"],Kx=6e4,Zx=n=>{if(typeof n=="string")try{const e=tr(n);return e&&typeof e=="object"?e:null}catch{return null}return n},Ua=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,Jx=n=>$x.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),Qx=n=>{const e=Zx(n);if(!e||Jx(e))return!1;const t=Ua(e,"peerId");return!!(t&&t!==dn&&e.passive!==!0&&!Ua(e,"answer")&&!Ua(e,"candidate"))},Na=n=>{if(!n)throw tt("topic strategy missing room context");return n},ql=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),Fa=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i});var ev=({steadyAnnounceIntervalMs:n=Kx,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:r,unpublishTopic:s})=>jx({init:t,subscribe:async(a,o,c,l,h,d)=>{const u=Na(d),p=(S,w)=>void r(a,S,w,Fa(u,"signal",o,c));let g=null,_=!1,m=null,f=!1;const v=S=>{_||(_=!0,S())},b=()=>(m||(m=Promise.resolve(i(a,c,(S,w)=>{f||l(S,w,p)},ql(u,"self",o,c))).then(S=>{g=S,f&&v(S)})),m);u.isPassive||await b();const E=await i(a,o,async(S,w)=>{f||(u.isPassive&&Qx(w)&&await b(),f||await l(S,w,p))},ql(u,"root",o,c));return()=>{f=!0,g&&v(g),E()}},announce:async(a,o,c,l,h)=>{const d=Na(h),u=await r(a,o,jt({peerId:dn,...l}),Fa(d,"announce",o,c));return typeof u=="number"||u!==void 0&&"stopAnnouncing"in u?u:{nextAnnounceMs:(u==null?void 0:u.nextAnnounceMs)??n,reannounceOnDisconnect:(u==null?void 0:u.reannounceOnDisconnect)??e}},...s?{deactivate:(a,o,c,l)=>{const h=Na(l);return s(a,o,Fa(h,"announce",o,c))}}:{}});const tv=G_(n=>n.socket),nv=5,_u="x",xu="EVENT",{secretKey:iv,publicKey:rv}=ru.keygen(),sv=Ir(rv),av={},ov={},Oa={},Yl=250,Is=6e4,cv=15*6e4,lv=5333,kr=new WeakMap,Go=new WeakSet,_i=new WeakMap,jl=n=>{const e=kr.get(n),t=Math.min(e!=null&&e.delayMs?Math.max(Is,e.delayMs*2):Is,cv);return kr.set(n,{delayMs:t,untilMs:Date.now()+t}),t},dv=n=>{const e=kr.get(n);if(!e)return 0;const t=e.untilMs-Date.now();return t>0?t:0},ka=n=>({nextAnnounceMs:n}),uv={stopAnnouncing:!0},hv=n=>{var t;if(Go.has(n))return!1;const e=_i.get(n);return e&&(clearTimeout(e.timer),_i.delete(n)),Go.add(n),kr.delete(n),(t=n.close)==null||t.call(n),!0},fv=(n,e)=>{const t=_i.get(n);t&&(clearTimeout(t.timer),t.eventIds.add(e));const i=(t==null?void 0:t.eventIds)??new Set([e]),r=setTimeout(()=>{_i.delete(n)},lv);_i.set(n,{eventIds:i,timer:r})},pv=(n,e)=>{const t=_i.get(n);return t!=null&&t.eventIds.has(e)?(clearTimeout(t.timer),_i.delete(n),!0):!1},vu=()=>Math.floor(Date.now()/1e3),yu=n=>Oa[n]??(Oa[n]=cu(n,1e4)+2e4),mv=async(n,e)=>{const t={kind:yu(n),tags:[[_u,n]],created_at:vu(),content:e,pubkey:sv},i=await Gs("SHA-256",jt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return jt([xu,{...t,id:Ir(i),sig:Ir(await ru.signAsync(i,iv))}])},Un={},Su=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},gv=(n,e,t)=>{var r;const i=Un[r=n.url]??(Un[r]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});i.topics.set(e,t),Mu(n,i)},_v=(n,e)=>{const t=Un[n.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),Su(t),t.subIds.forEach(i=>n.send(jt(["CLOSE",i]))),delete Un[n.url]):Mu(n,t))},Mu=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{bu(n)}finally{Su(e)}},0))},xv=n=>{const e=Un[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},bu=n=>{const e=Un[n.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],i=[],r=vu();for(let s=0;s<t.length;s+=Yl)i.push(t.slice(s,s+Yl));for(;e.subIds.length>i.length;){const s=e.subIds.pop();s&&n.send(jt(["CLOSE",s]))}i.forEach((s,a)=>{var c;const o=(c=e.subIds)[a]??(c[a]=sr(64));n.send(jt(["REQ",o,{kinds:[...new Set(s.map(yu))],since:r,"#x":s}]))})},vv=n=>{const e=Un[n.url];e&&e.topics.size>0&&bu(n)},yv=ev({init:n=>O_(n,Sv,nv,!0).map(e=>{const t=tv.register(e,()=>z_(e,i=>{var c,l;const[r,s,a,o]=tr(i);if(r!==xu){const h=`${un}: relay failure from ${t.url} - `,d=r==="CLOSED"&&typeof a=="string"?a:o,u=r==="OK"&&a===!1,p=u&&(d==null?void 0:d.startsWith("rate-limited:")),g=u&&(d==null?void 0:d.startsWith("duplicate:")),_=r==="CLOSED"||u&&!p&&!g,m=r==="OK"&&pv(t,s);if(_&&!hv(t))return;p?jl(t):m&&kr.delete(t),!g&&((c=n.relayConfig)==null?void 0:c.warnOnRelayFailure)!==!1&&(r==="NOTICE"?console.warn(h+s):(u||r==="CLOSED")&&console.warn(h+d));return}if(a&&typeof a=="object"&&"content"in a){const{content:h}=a,d=ov[s];if(d){d(av[s]??"",h);return}const u=Un[t.url];if(u!=null&&u.subIds.includes(s)&&a.tags){const p=a.tags.find(g=>g[0]===_u);p!=null&&p[1]&&((l=u.topics.get(p[1]))==null||l(p[1],h))}}},()=>vv(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{gv(n,e,(a,o)=>void t(a,o));const s=()=>{_v(n,e)};return i.kind==="root"?xv(n).then(()=>s):s},publishTopic:async(n,e,t,i)=>{if(Go.has(n)||n.isClosed)return i.kind==="announce"?uv:void 0;if(i.kind==="announce"){const o=dv(n);if(o>0)return ka(Math.max(Is,o))}const r=await mv(e,typeof t=="string"?t:jt(t)),s=n.socket.readyState===1;if(n.send(r),i.kind!=="announce")return;if(!s)return ka(jl(n));const a=tr(r)[1].id;return fv(n,a),ka(Is)}}),Sv=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(n=>"wss://"+n);class Mv{constructor(e,t,i="P2",r="#00f5ff"){this.scene=e,this.peerId=t,this.tag=(i||"P2").slice(0,5).toUpperCase(),this.colorHex=r,this.colorNum=parseInt(r.replace("#","0x"),16)||62975,this.x=0,this.y=0,this.z=7.5,this.rotation=Math.PI,this.targetPosition=new W(0,0,7.5),this.targetRotation=Math.PI,this.isMoving=!1,this.walkCycle=0,this.statusText="ONLINE",this.lastActiveTime=Date.now(),this.createAvatarMesh(),this.createNameTagSprite()}createAvatarMesh(){this.group=new xn,this.group.position.set(this.x,this.y,this.z);const e=new Yt(.38,.32,.8,16),t=new _t({color:this.colorNum,roughness:.3,metalness:.3,emissive:this.colorNum,emissiveIntensity:.15});this.torso=new ye(e,t),this.torso.position.y=.85,this.group.add(this.torso);const i=new at(.04,.78,.05),r=new dt({color:16777215}),s=new ye(i,r);s.position.set(0,.85,.35),this.group.add(s);const a=new vi(.42,24,24),o=new _t({color:1711406,roughness:.2,metalness:.8});this.helmet=new ye(a,o),this.helmet.position.y=1.6,this.group.add(this.helmet);const c=new vi(.36,24,16,0,Math.PI*2,0,Math.PI*.45),l=new _t({color:this.colorNum,roughness:.1,metalness:.9,emissive:this.colorNum,emissiveIntensity:.3}),h=new ye(c,l);h.rotation.x=Math.PI*.5,h.position.set(0,1.6,.12),this.group.add(h);const d=new Yt(.12,.1,.65,12),u=new _t({color:658454,roughness:.5});this.leftLeg=new ye(d,u),this.leftLeg.position.set(-.18,.35,0),this.group.add(this.leftLeg),this.rightLeg=new ye(d,u),this.rightLeg.position.set(.18,.35,0),this.group.add(this.rightLeg);const p=new at(.18,.16,.28),g=new _t({color:this.colorNum,roughness:.3}),_=new ye(p,g);_.position.set(0,-.28,.05),this.leftLeg.add(_);const m=new ye(p,g);m.position.set(0,-.28,.05),this.rightLeg.add(m);const f=new Ns(.55,16),v=new dt({color:0,transparent:!0,opacity:.4}),b=new ye(f,v);b.rotation.x=-Math.PI*.5,b.position.y=.02,this.group.add(b),this.scene.add(this.group)}createNameTagSprite(){const e=document.createElement("canvas");e.width=320,e.height=110,this.nameCanvas=e,this.nameCtx=e.getContext("2d"),this.renderNameTagCanvas();const t=new kn(e);t.minFilter=St,t.magFilter=St,this.nameTexture=t;const i=new tc({map:t,transparent:!0,depthTest:!1});this.nameSprite=new Td(i),this.nameSprite.position.set(0,2.35,0),this.nameSprite.scale.set(1.6,.55,1),this.group.add(this.nameSprite)}renderNameTagCanvas(){const e=this.nameCtx,t=this.nameCanvas.width,i=this.nameCanvas.height;e.clearRect(0,0,t,i),e.fillStyle="rgba(8, 9, 16, 0.88)",e.strokeStyle=this.colorHex,e.lineWidth=4;const r=24;e.beginPath(),e.roundRect(10,10,t-20,i-20,r),e.fill(),e.stroke(),e.font='bold 36px "Press Start 2P", monospace, sans-serif',e.fillStyle="#ffd32a",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffd32a",e.shadowBlur=8,e.fillText(this.tag,t/2,42),e.shadowBlur=0,e.font='bold 16px "Outfit", sans-serif',e.fillStyle=this.colorHex,e.fillText(this.statusText,t/2,78),this.nameTexture&&(this.nameTexture.needsUpdate=!0)}setTelemetry(e,t,i,r,s=0){this.targetPosition.set(e,s,t),this.targetRotation=i,this.isMoving=!!r,this.lastActiveTime=Date.now()}setActivity(e){this.statusText=e.slice(0,14).toUpperCase(),this.renderNameTagCanvas()}update(e,t){if(!this.group)return;const i=Math.min(1,1-Math.exp(-14*e));this.group.position.lerp(this.targetPosition,i);let r=this.targetRotation-this.group.rotation.y;for(;r<-Math.PI;)r+=Math.PI*2;for(;r>Math.PI;)r-=Math.PI*2;if(this.group.rotation.y+=r*i,this.isMoving){this.walkCycle+=e*10;const s=Math.sin(this.walkCycle)*.45;this.leftLeg.rotation.x=s,this.rightLeg.rotation.x=-s,this.torso.position.y=.85+Math.abs(Math.sin(this.walkCycle*2))*.04,this.helmet.position.y=1.6+Math.abs(Math.sin(this.walkCycle*2))*.04}else this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.torso.position.y=.85,this.helmet.position.y=1.6;this.nameSprite&&t&&this.nameSprite.quaternion.copy(t.quaternion)}dispose(){this.group&&this.scene&&(this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))}}class bv{constructor(e,t,i){this.scene=e,this.identity=t,this.scoreTicker=i,this.peers=new Map,this.room=null,this.posAction=null,this.idAction=null,this.actAction=null,this.scoreAction=null,this.lastBroadcastTime=0,this.lastSentX=null,this.lastSentY=null,this.lastSentZ=null,this.lastSentRot=null,this.lastSentMoving=null,this.heartbeatTimer=null,this.hudEl=null,this.createHud(),this.connect()}createHud(){let e=document.getElementById("mp-network-hud");e&&e.remove();const t=document.getElementById("mp-hud-mount");if(t){t.innerHTML=`
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
    `,document.body.appendChild(e),this.hudEl=e}updateHudCount(){const e=document.getElementById("mp-count-text");if(e){const t=this.peers.size+1;e.textContent=`${t}/10 ONLINE`}}connect(){try{const e={appId:"nopex-arcade-webrtc-v1",relayUrls:["wss://nos.lol","wss://relay.damus.io","wss://relay.primal.net","wss://purplerelay.com"],rtcConfig:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}},t="nopex-main-hub";this.room=yv(e,t),this.posAction=this.room.makeAction("pos"),this.idAction=this.room.makeAction("id"),this.actAction=this.room.makeAction("act"),this.scoreAction=this.room.makeAction("score"),this.room.onPeerJoin=i=>{console.log(`[WebRTC] Peer connected: ${i}`),this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:i}),this.updateHudCount()},this.room.onPeerLeave=i=>{console.log(`[WebRTC] Peer disconnected: ${i}`);const r=this.peers.get(i);r&&(r.dispose(),this.peers.delete(i)),this.updateHudCount()},this.idAction.onMessage=(i,{peerId:r})=>{if(!(!i||!i.tag))if(this.peers.has(r)){const s=this.peers.get(r);(s.tag!==i.tag||s.colorHex!==i.colorHex)&&(s.tag=i.tag.slice(0,5).toUpperCase(),s.colorHex=i.colorHex||"#00f5ff",s.renderNameTagCanvas())}else{if(this.peers.size>=9)return;const s=new Mv(this.scene,r,i.tag,i.colorHex);this.peers.set(r,s),this.updateHudCount(),this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:r})}},this.posAction.onMessage=(i,{peerId:r})=>{if(!i)return;const s=this.peers.get(r);s?s.setTelemetry(i.x,i.z,i.r,i.m,i.y||0):this.idAction&&this.identity&&this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex},{target:r})},this.actAction.onMessage=(i,{peerId:r})=>{if(!i)return;const s=this.peers.get(r);s&&s.setActivity(i.status||"ONLINE")},this.scoreAction.onMessage=i=>{i&&this.scoreTicker&&this.scoreTicker.showRecord(i.player,i.game,i.score)},this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>{this.idAction&&this.identity&&this.broadcastIdentity()},2500)}catch(e){console.warn("[WebRTC] Connection failed, operating in offline hub mode:",e)}}broadcastIdentity(){!this.idAction||!this.identity||this.idAction.send({tag:this.identity.tag,colorHex:this.identity.colorHex})}broadcastLocalPosition(e,t,i,r,s=0){if(!this.posAction)return;const a=performance.now();if(a-this.lastBroadcastTime<50)return;const o=this.lastSentX!==null?Math.abs(e-this.lastSentX):999,c=this.lastSentY!==null?Math.abs(s-this.lastSentY):999,l=this.lastSentZ!==null?Math.abs(t-this.lastSentZ):999,h=this.lastSentRot!==null?Math.abs(i-this.lastSentRot):999,d=r!==this.lastSentMoving;o<.02&&c<.02&&l<.02&&h<.03&&!d&&a-this.lastBroadcastTime<1500||(this.lastBroadcastTime=a,this.lastSentX=e,this.lastSentY=s,this.lastSentZ=t,this.lastSentRot=i,this.lastSentMoving=r,this.posAction.send({x:Math.round(e*100)/100,y:Math.round(s*100)/100,z:Math.round(t*100)/100,r:Math.round(i*100)/100,m:!!r}))}broadcastActivity(e){this.actAction&&this.actAction.send({status:e})}broadcastHighScore(e,t){this.scoreAction&&(this.scoreAction.send({player:this.identity.tag,game:e,score:t,time:Date.now()}),this.scoreTicker&&this.scoreTicker.showRecord(this.identity.tag,e,t))}update(e,t){this.peers.forEach(i=>{i.update(e,t)})}}class Ev{constructor(){this.modalEl=document.getElementById("arcade-jukebox-modal"),this.isOpen=!1,this.selectedArtistId="all",this.showLyrics=!1,this.renderSkeleton(),this.bindEvents(),We.subscribe(e=>this.onMusicStateUpdate(e))}renderSkeleton(){this.modalEl&&(this.modalEl.innerHTML=`
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
    `,this.initCanvasVisualizer())}initCanvasVisualizer(){if(this.canvas=document.getElementById("dock-canvas"),!this.canvas)return;this.ctx=this.canvas.getContext("2d"),this.freqData=new Uint8Array(16);const e=()=>{if(this.isOpen&&this.ctx){this.ctx.clearRect(0,0,60,24),We.getFrequencyData(this.freqData);for(let t=0;t<8;t++){const i=this.freqData[t]/255,r=Math.max(3,i*22);this.ctx.fillStyle=t%2===0?"#00f5ff":"#ff007f",this.ctx.fillRect(t*7+2,24-r,5,r)}}requestAnimationFrame(e)};requestAnimationFrame(e)}bindEvents(){const e=document.getElementById("jukebox-close-btn"),t=document.getElementById("jukebox-backdrop"),i=document.getElementById("dock-play"),r=document.getElementById("dock-prev"),s=document.getElementById("dock-next"),a=document.getElementById("dock-vol-slider"),o=document.getElementById("dock-lyrics-toggle"),c=document.getElementById("lyrics-close-btn");e&&e.addEventListener("click",()=>this.close()),t&&t.addEventListener("click",()=>this.close()),i&&i.addEventListener("click",()=>We.togglePlay()),r&&r.addEventListener("click",()=>We.prev()),s&&s.addEventListener("click",()=>We.next()),a&&a.addEventListener("input",l=>{We.setVolume(parseFloat(l.target.value))}),o&&o.addEventListener("click",()=>{this.showLyrics=!this.showLyrics,this.updateLyricsPanel()}),c&&c.addEventListener("click",()=>{this.showLyrics=!1,this.updateLyricsPanel()}),window.addEventListener("keydown",l=>{this.isOpen&&(l.key==="Escape"?(l.preventDefault(),this.close()):l.code==="Space"&&l.target.tagName!=="INPUT"&&(l.preventDefault(),We.togglePlay()))})}open(){this.isOpen=!0,this.modalEl&&(this.modalEl.style.display="flex",setTimeout(()=>this.modalEl.classList.add("active"),10)),this.populateTabs(),this.renderTracks(),this.onMusicStateUpdate({isPlaying:We.isPlaying,currentTrack:We.getCurrentTrack(),currentTime:We.currentTrackTime,duration:We.getCurrentTrack()&&We.getCurrentTrack().durationSec||140})}close(){this.isOpen=!1,this.modalEl&&(this.modalEl.classList.remove("active"),setTimeout(()=>{this.modalEl.style.display="none"},250))}populateTabs(){const e=document.getElementById("jukebox-artist-tabs");if(!e||!We.artists.length)return;let t=`<button class="juke-tab ${this.selectedArtistId==="all"?"active":""}" data-artist="all">🎵 Todas as Músicas</button>`;We.artists.forEach(i=>{const r=this.selectedArtistId===i.id?"active":"";t+=`
        <button class="juke-tab ${r}" data-artist="${i.id}">
          <img src="${i.avatar}" class="tab-avatar" alt="" onerror="this.style.display='none'" />
          ${i.name}
        </button>
      `}),e.innerHTML=t,e.querySelectorAll(".juke-tab").forEach(i=>{i.addEventListener("click",r=>{this.selectedArtistId=i.getAttribute("data-artist"),e.querySelectorAll(".juke-tab").forEach(s=>s.classList.remove("active")),i.classList.add("active"),this.renderTracks()})})}renderTracks(){const e=document.getElementById("jukebox-track-container");if(!e)return;const t=We.tracks.filter(r=>this.selectedArtistId==="all"?!0:r.artistId===this.selectedArtistId);if(!t.length){e.innerHTML='<div class="juke-empty">Nenhuma faixa encontrada neste filtro.</div>';return}const i=We.getCurrentTrack();e.innerHTML=t.map(r=>{const s=i&&i.id===r.id,a=s&&We.isPlaying;return`
        <div class="juke-track-card ${s?"now-active":""}" data-id="${r.id}">
          <div class="track-card-cover-wrap">
            <img src="${r.cover}" class="track-card-cover" alt="${r.title}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200'" />
            <button class="track-card-play-btn" data-track-id="${r.id}">
              ${a?"⏸":"▶"}
            </button>
          </div>
          <div class="track-card-info">
            <div class="track-card-title-row">
              <span class="track-card-title">${r.title}</span>
              ${s?'<span class="now-playing-badge">OUVINDO</span>':""}
            </div>
            <div class="track-card-artist">${r.artistName} • <span class="album-name">${r.album||"Single"}</span></div>
            <div class="track-card-meta">
              <span class="track-meta-badge">⚡ ${r.bpm||128} BPM</span>
              <span class="track-meta-plays">▶ ${r.plays||"1M"}</span>
              <span class="track-meta-time">⏱ ${r.duration||"2:15"}</span>
            </div>
          </div>
        </div>
      `}).join(""),e.querySelectorAll(".juke-track-card").forEach(r=>{r.addEventListener("click",s=>{const a=r.getAttribute("data-id"),o=We.tracks.findIndex(c=>c.id===a);o!==-1&&(We.currentIndex===o&&We.isPlaying?We.togglePlay():We.playTrack(o))})})}onMusicStateUpdate(e){const t=document.getElementById("dock-play"),i=document.getElementById("dock-cover"),r=document.getElementById("dock-title"),s=document.getElementById("dock-artist"),a=document.getElementById("dock-time-cur"),o=document.getElementById("dock-time-dur"),c=document.getElementById("dock-progress-bar");if(t&&(t.innerHTML=e.isPlaying?"⏸":"▶"),e.currentTrack&&(i&&(i.src=e.currentTrack.cover),r&&(r.textContent=e.currentTrack.title),s&&(s.textContent=`${e.currentTrack.artistName} • ${e.currentTrack.synthStyle||"AI Synth"}`)),a&&e.currentTime!==void 0&&(a.textContent=this.formatSeconds(e.currentTime)),o&&e.duration!==void 0&&(o.textContent=this.formatSeconds(e.duration)),c&&e.duration){const l=Math.min(100,e.currentTime/e.duration*100);c.style.width=`${l}%`}e.type==="state"&&(this.renderTracks(),this.updateLyricsPanel())}updateLyricsPanel(){const e=document.getElementById("jukebox-lyrics-panel"),t=document.getElementById("jukebox-lyrics-content");if(!e||!t)return;if(!this.showLyrics){e.style.display="none";return}e.style.display="flex";const i=We.getCurrentTrack();i&&i.lyrics&&i.lyrics.length?t.innerHTML=i.lyrics.map(r=>`
        <div class="lyrics-line">
          <span class="lyrics-time">[${this.formatSeconds(r.time)}]</span>
          <span class="lyrics-text">${r.text}</span>
        </div>
      `).join(""):t.innerHTML='<div class="lyrics-empty">Nenhuma letra sincronizada para esta faixa instrumental.</div>'}formatSeconds(e){(isNaN(e)||e<0)&&(e=0);const t=Math.floor(e/60),i=Math.floor(e%60);return`${t}:${i<10?"0":""}${i}`}}class Tv{constructor(e){this.onOpenJukeboxModal=e,this.hudContainer=document.getElementById("arcade-music-hud"),this.tickerEl=document.getElementById("music-hud-ticker"),this.playBtn=document.getElementById("music-hud-play"),this.prevBtn=document.getElementById("music-hud-prev"),this.nextBtn=document.getElementById("music-hud-next"),this.expandBtn=document.getElementById("music-hud-expand"),this.volBtn=document.getElementById("music-hud-vol"),this.bars=document.querySelectorAll(".hud-eq-bar"),this.isMuted=!1,this.prevVolume=.7,this.bindEvents(),We.subscribe(t=>this.update(t))}bindEvents(){this.playBtn&&this.playBtn.addEventListener("click",e=>{e.stopPropagation(),We.togglePlay()}),this.prevBtn&&this.prevBtn.addEventListener("click",e=>{e.stopPropagation(),We.prev()}),this.nextBtn&&this.nextBtn.addEventListener("click",e=>{e.stopPropagation(),We.next()}),this.expandBtn&&this.expandBtn.addEventListener("click",e=>{e.stopPropagation(),this.onOpenJukeboxModal&&this.onOpenJukeboxModal()}),this.tickerEl&&this.tickerEl.addEventListener("click",e=>{e.stopPropagation(),this.onOpenJukeboxModal&&this.onOpenJukeboxModal()}),this.volBtn&&this.volBtn.addEventListener("click",e=>{e.stopPropagation(),this.isMuted?(this.isMuted=!1,We.setVolume(this.prevVolume||.7),this.volBtn.textContent="🔊"):(this.isMuted=!0,this.prevVolume=We.volume,We.setVolume(0),this.volBtn.textContent="🔇")})}update(e){if(this.playBtn&&(this.playBtn.innerHTML=e.isPlaying?"⏸":"▶",this.playBtn.setAttribute("title",e.isPlaying?"Pausar":"Tocar")),this.tickerEl&&e.currentTrack){const i=e.isProcedural?" [SYNTH AI]":"";this.tickerEl.innerHTML=`🎵 <strong>${e.currentTrack.artistName}</strong> — ${e.currentTrack.title}${i}`}const t=document.getElementById("music-hud-eq");t&&(e.isPlaying&&!e.isDucked?t.classList.add("dancing"):t.classList.remove("dancing"))}}class wv{constructor(e,t,i=null){this.container=e,this.gamesManifest=t,this.identity=i,this.isRunning=!1,this.isZoomingIn=!1,this.zoomTarget=null,this.zoomProgress=0,this.initScene(),this.initWorld(),this.initPlayer(),this.initInteraction(),this.initOverlay(),this.initJukebox(),this.initNetwork(),this.initMobileControls(),this.initTapToWalk(),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>{setTimeout(()=>this.onResize(),150)})}initScene(){this.scene=new zh,this.scene.background=new Ke(856619),this.scene.fog=new ec(856619,40,95);const e=this.container.clientWidth||window.innerWidth||1280,t=this.container.clientHeight||window.innerHeight||720;this.camera=new Xt(52,e/t,.1,200),this.camera.position.set(0,4.2,13.5),this.renderer=new Q0({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),this.container.appendChild(this.renderer.domElement),this.clock=new tf,this.raycaster=new nf;const i=new Qn(.5,.75,32),r=new dt({color:62975,side:At,transparent:!0,opacity:0});this.destinationRing=new ye(i,r),this.destinationRing.rotation.x=-Math.PI/2,this.destinationRing.position.set(0,.05,0),this.scene.add(this.destinationRing),this.destinationPulse=0}initWorld(){this.world=d_(this.scene,this.gamesManifest)}initPlayer(){this.player=new t_(this.scene,this.identity)}initInteraction(){this.interaction=new u_(this.world.cabinets,(e,t)=>{this.launchGame(e,t)})}initOverlay(){this.overlay=new h_(()=>{this.isZoomingIn=!1,this.zoomTarget=null,this.zoomProgress=0,this.clock.getDelta(),this.network&&this.network.broadcastActivity("ONLINE")})}initJukebox(){this.jukeboxModal=new Ev,this.musicHud=new Tv(()=>this.openJukebox()),We.init()}openJukebox(){this.jukeboxModal&&(Kl(()=>Promise.resolve().then(()=>Od),void 0,import.meta.url).then(e=>{var t;return(t=e.playDopamineChime)==null?void 0:t.call(e)}),this.jukeboxModal.open())}initNetwork(){this.scoreTicker=new f_,this.network=new bv(this.scene,this.identity||{tag:"MARC1",color:62975,colorHex:"#00f5ff"},this.scoreTicker),window.__ARCADE_NETWORK__=this.network}setPlayerIdentity(e){this.identity=e,this.player&&this.player.setIdentity(e),this.network&&(this.network.identity=e,this.network.broadcastIdentity())}launchGame(e,t){if(t&&t.isJukebox){this.openJukebox();return}this.isZoomingIn=!0,this.zoomTarget=t,this.zoomProgress=0,this.network&&this.network.broadcastActivity(e.title),setTimeout(()=>{this.overlay.open(e)},550)}teleportToCabinet(e){const t=this.world.cabinets.find(i=>i.game.id===e);t&&(this.player.clearNavigationTarget(),this.player.x=t.standSpot.x,this.player.z=t.standSpot.z,this.player.rotation=t.rotationY+Math.PI,this.player.targetRotation=this.player.rotation,this.interaction.update(this.player))}showDestinationPulse(e,t){this.destinationRing.position.set(e,.04,t),this.destinationRing.scale.set(.6,.6,.6),this.destinationRing.material.opacity=.9,this.destinationPulse=1}initTapToWalk(){let e=0,t=0,i=0;const r=o=>{e=performance.now(),t=o.clientX,i=o.clientY},s=o=>{const c=performance.now()-e,l=Math.abs(o.clientX-t),h=Math.abs(o.clientY-i);if(c>380||l>20||h>20||o.target.closest(".nopex-hud-header, .arcade-mobile-joystick, .arcade-mobile-dpad, .arcade-mobile-action-btn, .arcade-hologram-card, .arcade-game-overlay, .mobile-teleport-drawer"))return;const u=this.renderer.domElement.getBoundingClientRect(),p=(o.clientX-u.left)/u.width*2-1,g=-((o.clientY-u.top)/u.height)*2+1;this.raycaster.setFromCamera({x:p,y:g},this.camera);let _=null,m=1/0;for(const f of this.world.cabinets){const v=this.raycaster.intersectObjects(f.group.children,!0);v.length>0&&v[0].distance<m&&(m=v[0].distance,_=f)}if(_){this.showDestinationPulse(_.standSpot.x,_.standSpot.z),this.player.setNavigationTarget(_.standSpot.x,_.standSpot.z,()=>{this.interaction.update(this.player)});return}if(this.world.floorMesh){const f=this.raycaster.intersectObject(this.world.floorMesh);if(f.length>0){const v=f[0].point,b=this.world.roomBounds,E=Math.max(b.minX+.5,Math.min(b.maxX-.5,v.x)),S=Math.max(b.minZ+.5,Math.min(b.maxZ-.5,v.z));this.showDestinationPulse(E,S),this.player.setNavigationTarget(E,S,()=>{this.interaction.update(this.player)})}}},a=this.renderer.domElement;a.addEventListener("pointerdown",r),a.addEventListener("pointerup",s)}initMobileControls(){("ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches)&&document.body.classList.add("touch-device");const t=document.getElementById("arcade-joystick"),i=document.getElementById("joystick-thumb");if(!t||!i)return;let r=null,s=0,a=0;const o=45,c=t.querySelector(".arrow-up"),l=t.querySelector(".arrow-down"),h=t.querySelector(".arrow-left"),d=t.querySelector(".arrow-right"),u=(f,v)=>{c&&c.classList.toggle("active",v<-12),l&&l.classList.toggle("active",v>12),h&&h.classList.toggle("active",f<-12),d&&d.classList.toggle("active",f>12)},p=f=>{if(!(this.overlay&&this.overlay.isOpen))for(let v=0;v<f.changedTouches.length;v++){const b=f.changedTouches[v],E=t.getBoundingClientRect(),S=b.clientX>=E.left&&b.clientX<=E.right&&b.clientY>=E.top&&b.clientY<=E.bottom,w=b.clientX<=window.innerWidth*.55&&b.clientY>=window.innerHeight*.4;if(r===null&&(S||w)){if(b.target&&b.target.closest&&b.target.closest(".nopex-hud-header, .mobile-teleport-drawer, .arcade-mobile-action-btn, #arcade-game-overlay"))continue;f.preventDefault(),r=b.identifier,S?(s=E.left+E.width/2,a=E.top+E.height/2):(s=b.clientX,a=b.clientY,t.style.left=`${Math.max(12,Math.min(window.innerWidth-130,s-E.width/2))}px`,t.style.bottom=`${Math.max(12,Math.min(window.innerHeight-130,window.innerHeight-a-E.height/2))}px`),t.classList.add("active"),this.player.clearNavigationTarget();break}}},g=f=>{if(r!==null)for(let v=0;v<f.changedTouches.length;v++){const b=f.changedTouches[v];if(b.identifier===r){f.preventDefault();let E=b.clientX-s,S=b.clientY-a;const w=Math.hypot(E,S);w>o&&(E=E/w*o,S=S/w*o),i.style.transform=`translate(${E}px, ${S}px)`,u(E,S),this.player.setJoystickVector(E/o,S/o);break}}},_=f=>{for(let v=0;v<f.changedTouches.length;v++)if(f.changedTouches[v].identifier===r){r=null,i.style.transform="translate(0px, 0px)",t.classList.remove("active"),u(0,0),this.player.setJoystickVector(0,0);break}};window.addEventListener("touchstart",p,{passive:!1}),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",_),window.addEventListener("touchcancel",_),[{id:"dpad-up",vx:0,vy:-1},{id:"dpad-down",vx:0,vy:1},{id:"dpad-left",vx:-1,vy:0},{id:"dpad-right",vx:1,vy:0}].forEach(({id:f,vx:v,vy:b})=>{const E=document.getElementById(f);if(!E)return;const S=C=>{C.preventDefault(),this.player.clearNavigationTarget(),this.player.setJoystickVector(v,b),E.classList.add("pressed")},w=C=>{C.preventDefault(),this.player.setJoystickVector(0,0),E.classList.remove("pressed")};E.addEventListener("pointerdown",S),E.addEventListener("pointerup",w),E.addEventListener("pointerleave",w),E.addEventListener("pointercancel",w)})}onResize(){if(!this.container||!this.renderer||!this.camera)return;const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25))}start(){this.isRunning||(this.isRunning=!0,this.clock.start(),this.onResize(),this.animate())}stop(){this.isRunning=!1}animate(){if(!this.isRunning)return;requestAnimationFrame(()=>this.animate());const e=Math.min(this.clock.getDelta(),.1);if(this.overlay&&this.overlay.isOpen){this.network&&this.network.update(e,this.camera);return}const t=this.clock.getElapsedTime();if(this.world.update(t,this.player),this.destinationPulse>0){this.destinationPulse-=e*1.6;const i=.6+(1-Math.max(0,this.destinationPulse))*.9;this.destinationRing.scale.set(i,i,i),this.destinationRing.material.opacity=Math.max(0,this.destinationPulse)*.9,this.destinationPulse<=0&&(this.destinationRing.material.opacity=0)}if(this.player.update(e,this.world.roomBounds,this.world.cabinets,this.camera),this.interaction.update(this.player),this.network&&(this.network.broadcastLocalPosition(this.player.x,this.player.z,this.player.rotation,this.player.isMoving,this.player.y),this.network.update(e,this.camera)),this.isZoomingIn&&this.zoomTarget){const i=this.zoomTarget,r=i.rotationY,s=i.position.x+Math.sin(r)*.51,a=2.15,o=i.position.z+Math.cos(r)*.51,c=new W(s,a,o),l=Math.sin(r)*.975,h=.22,d=Math.cos(r)*.975,u=new W(s+l*1.35,a+h*1.35,o+d*1.35);this.camera.position.lerp(u,.16),this.camera.lookAt(c)}else{const i=this.player.x,r=4,s=Math.min(26,this.player.z+6.2);this.camera.position.x+=(i-this.camera.position.x)*.14,this.camera.position.y+=(r-this.camera.position.y)*.14,this.camera.position.z+=(s-this.camera.position.z)*.14,this.camLookTarget||(this.camLookTarget=new W(this.player.x,1.4,this.player.z-1.2)),this.camLookTarget.x+=(this.player.x-this.camLookTarget.x)*.14,this.camLookTarget.y=1.4,this.camLookTarget.z+=(this.player.z-1.2-this.camLookTarget.z)*.14,this.camera.lookAt(this.camLookTarget)}this.renderer.render(this.scene,this.camera)}}const Ba=[{name:"Cyan",hex:"#00f5ff",num:62975,accent:"#ffffff"},{name:"Magenta",hex:"#ff007f",num:16711807,accent:"#00f5ff"},{name:"Ouro",hex:"#ffd32a",num:16765738,accent:"#ff3838"},{name:"Esmeralda",hex:"#00ff88",num:65416,accent:"#00ffff"},{name:"Roxo",hex:"#a55eea",num:10837738,accent:"#ffd32a"},{name:"Rubi",hex:"#ff3838",num:16726072,accent:"#ffd32a"}];class Av{constructor(e){this.onReady=e,this.tag=localStorage.getItem("ARCADE_MP_TAG")||"MARC1",this.colorHex=localStorage.getItem("ARCADE_MP_COLOR")||"#00f5ff",this.modalEl=null,this.createModal(),this.tag&&this.tag.length>=2?setTimeout(()=>{this.onReady&&this.onReady(this.getIdentity())},100):this.showModal()}getIdentity(){const e=Ba.find(t=>t.hex.toLowerCase()===this.colorHex.toLowerCase())||Ba[0];return{tag:(this.tag||"MARC1").slice(0,5).toUpperCase(),color:e.num,colorHex:e.hex,accent:e.accent}}createModal(){const e=document.getElementById("mp-identity-modal");e&&e.remove();const t=document.createElement("div");t.id="mp-identity-modal",t.style.cssText=`
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
          ${Ba.map(c=>`
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
    `,t.appendChild(i),document.body.appendChild(t),this.modalEl=t;const r=i.querySelector("#mp-tag-input");r.addEventListener("input",c=>{r.value=r.value.replace(/[^a-zA-Z0-9]/g,"").slice(0,5).toUpperCase()});const s=i.querySelectorAll(".color-swatch");s.forEach(c=>{c.addEventListener("click",()=>{this.colorHex=c.getAttribute("data-hex"),s.forEach(l=>{const h=l.getAttribute("data-hex")===this.colorHex;l.style.border=h?"3px solid #fff":"transparent",l.style.boxShadow=h?"0 0 12px "+this.colorHex:"none"})})});const a=i.querySelector("#mp-modal-err");i.querySelector("#mp-enter-btn").addEventListener("click",()=>{const c=r.value.trim().toUpperCase();if(!c||c.length<2){a&&(a.textContent="⚠️ Digite uma TAG com pelo menos 2 letras!",a.style.display="block"),r.focus();return}a&&(a.style.display="none"),this.tag=c,localStorage.setItem("ARCADE_MP_TAG",this.tag),localStorage.setItem("ARCADE_MP_COLOR",this.colorHex),this.hideModal(),this.onReady&&this.onReady(this.getIdentity())}),window.addEventListener("keydown",c=>{c.key==="Escape"&&this.modalEl&&this.modalEl.style.display==="flex"&&this.tag&&this.tag.length>=2&&this.hideModal()})}showModal(){this.modalEl&&(this.modalEl.style.display="flex")}hideModal(){this.modalEl&&(this.modalEl.style.display="none")}}const Rv="https://gist.githubusercontent.com/marcuscaiado/a238a8db5b064579413c7a54aba6c840/raw/marcus-arcade-leaderboard.json";function $l(){const n=document.getElementById("arcade-3d-canvas-container"),e=document.getElementById("webgl-error");if(!n){console.error("Missing #arcade-3d-canvas-container");return}let t=null;const i=new Av(d=>{if(t)t.setPlayerIdentity(d);else try{t=new wv(n,qr,d),t.start(),window.__ARCADE_ENGINE__=t,window.__MUSIC_MANAGER__=We;const u=()=>{We.unlockAndPlay()};window.addEventListener("pointerdown",u,{once:!0}),window.addEventListener("keydown",u,{once:!0}),window.addEventListener("touchstart",u,{once:!0}),u()}catch(u){console.error("Fatal WebGL / Three.js Initialization Error:",u),e&&(e.style.display="block",e.textContent="Erro ao inicializar 3D: "+u.message)}}),r=document.getElementById("arcade-tag-btn");if(r&&r.addEventListener("click",d=>{d.stopPropagation(),i.showModal()}),window.addEventListener("keydown",d=>{if(!(d.target&&(d.target.tagName==="INPUT"||d.target.tagName==="TEXTAREA"||d.target.tagName==="SELECT"))){if(d.code==="KeyT"&&!d.ctrlKey&&!d.altKey&&!d.metaKey){const u=document.getElementById("arcade-game-overlay");(!u||u.style.display==="none")&&i.showModal()}if(d.code==="KeyJ"&&!d.ctrlKey&&!d.altKey&&!d.metaKey){const u=document.getElementById("arcade-game-overlay");(!u||u.style.display==="none")&&t&&t.jukeboxModal&&t.jukeboxModal.open()}}}),window.ArcadeLeaderboard&&window.ArcadeLeaderboard.submitScore){const d=window.ArcadeLeaderboard.submitScore.bind(window.ArcadeLeaderboard);window.ArcadeLeaderboard.submitScore=function(u,p){const g=d(u,p);if(window.__ARCADE_NETWORK__){const _=qr.find(f=>f.id===u),m=_?_.title:u;window.__ARCADE_NETWORK__.broadcastHighScore(m,p)}return g}}window.addEventListener("message",d=>{if(d.data&&(d.data.type==="ARCADE_SCORE"||d.data.type==="GAME_SCORE")&&d.data.score&&window.__ARCADE_NETWORK__){const u=qr.find(g=>g.id===d.data.gameId),p=u&&u.title||d.data.gameTitle||"Arcade Game";window.__ARCADE_NETWORK__.broadcastHighScore(p,Number(d.data.score))}});const s=document.getElementById("teleport-select");s&&s.addEventListener("change",d=>{const u=d.target.value;u&&t&&(Kl(()=>Promise.resolve().then(()=>Od),void 0,import.meta.url).then(p=>p.playDopamineChime()),t.teleportToCabinet(u),s.blur())});const a=document.getElementById("arcade-ctrl-toggle"),o=document.getElementById("arcade-joystick"),c=document.getElementById("arcade-dpad");let l="joystick";a&&o&&c&&a.addEventListener("click",d=>{d.stopPropagation(),l==="joystick"?(l="dpad",o.style.display="none",c.style.display="flex",a.innerHTML="<span>🕹️ JOYSTICK</span>"):(l="joystick",o.style.display="block",c.style.display="none",a.innerHTML="<span>🎮 D-PAD</span>")});async function h(){window.__ARCADE_LEADERBOARDS__=window.__ARCADE_LEADERBOARDS__||{};try{const d=await fetch(`${Rv}?_t=${Date.now()}`);if(d.ok){const u=await d.json();qr.forEach(p=>{let g=[];try{g=JSON.parse(localStorage.getItem(`arcade_lb_${p.id}`)||"[]")}catch{}const m=[...u[p.id]||[],...g].filter(v=>v&&v.name&&v.score);m.sort((v,b)=>b.score-v.score);const f=m[0];f&&(window.__ARCADE_LEADERBOARDS__[p.id]={topScore:f.score,topPilot:String(f.name).replace(/[^a-zA-Z0-9]/g,"").toUpperCase().substring(0,3)||"MRC"})})}}catch(d){console.warn("Could not sync cloud records:",d)}}h()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$l):$l();
