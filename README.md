# ⚡ Nopex Arcade 3D Multiplayer 🕹️

<p align="center">
  <img src="https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-00f5ff?style=for-the-badge&logo=github" alt="Live Demo" />
  <img src="https://img.shields.io/badge/WebGL-Three.js-ff007f?style=for-the-badge&logo=three.js" alt="Three.js" />
  <img src="https://img.shields.io/badge/Multiplayer-WebRTC%20P2P-05ffa1?style=for-the-badge&logo=webrtc" alt="WebRTC P2P" />
  <img src="https://img.shields.io/badge/Audio-Web%20Audio%20API-ffd32a?style=for-the-badge" alt="Web Audio API" />
  <img src="https://img.shields.io/badge/License-MIT-white?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <strong>Um fliperama synthwave 3D imersivo rodando 100% no navegador, combinando emulação retrô instantânea, multiplayer descentralizado WebRTC e modo camarote com transmissão ao vivo de gameplay.</strong>
</p>

<p align="center">
  🎮 <a href="https://marcuscaiado.github.io/nopex-arcade-multiplayer/"><strong>Jogar Agora no Navegador (Live Demo)</strong></a> • 📋 <a href="https://marcuscaiado.github.io/marcus-arcade/"><strong>Catálogo 2D Clássico</strong></a> • 🧠 <a href="TECH_REVIEW.md"><strong>Diagnóstico de Engenharia</strong></a>
</p>

---

## 🌟 Os 6 Pilares do Projeto

### 1. 🕹️ 38 Gabinetes 3D em 5 Alas Temáticas
Navegue livremente pelo salão 3D e aproxime-se de qualquer gabinete com telas CRT exibindo **loops pixelados autênticos de gameplay** a 24 FPS:
- 🌟 **Hall da Fama & Entrada:** Clássicos imortais, ação tática e labirintos icônicos.
- ⚔️ **Ação, Luta & Aventura:** Combate épico, pancadaria arcade dos anos 90 e tiroteio intenso.
- 🕹️ **Retro Vault (16-Bit & 8-Bit):** Plataformas lendárias, aventuras nostálgicas e desafios pixelados.
- 🏎️ **Speedway & Corrida:** Desafios de alta velocidade, drifting synthwave e pistas retrô.
- 🎱 **Esportes & Casual:** Sinuca física 3D, pinball com iluminação neon e minijogos de precisão.

### 2. 🌐 Multiplayer P2P Serverless (Até 10 Jogadores)
- **Tecnologia WebRTC Mesh:** Conexão direta entre navegadores sem servidores de jogo dedicados (sinalização via Nostr Relays).
- **Avatares 3D Personalizados:** Escolha sua TAG de 5 letras e cor neon com crachá flutuante no salão.
- **Telemetria Otimizada a 20 Hz:** Algoritmo de *dead-reckoning* com interpolação suave (*lerp*), reduzindo tráfego de dados e eliminando travamentos.
- **Chat Diegético:** Envie mensagens de texto que surgem como balões de fala flutuantes sobre a cabeça do seu avatar.

### 3. 🔴 Modo Espectador & Camarote 3D (<kbd>V</kbd>)
- **Transmissão P2P ao Vivo:** Quando um piloto entra em uma máquina, o canvas é capturado e transmitido via WebRTC para os demais jogadores na sala.
- **Espelhamento CRT Diegético:** O monitor do gabinete 3D no salão reproduz o gameplay ao vivo para quem estiver passando por perto, com badge `🔴 AO VIVO [PILOTO]`.
- **Câmera Cinematográfica Sobre os Ombros:** Aproxime-se e pressione <kbd>V</kbd> para posicionar a câmera logo atrás do piloto com enquadramento da tela e dock de **Torcida Rápida** (`🔥 GG!`, `💥 BOA!`, `👏 MANDOU BEM!`, `😱 CUIDADO!`).

### 4. 📻 Retro Arcade Jukebox Pavilion
- **15 Trilhas Clássicas:** Músicas icônicas sintetizadas em tempo real via Web Audio API.
- **HUD Integrado:** Player de mídia flutuante com equalizador visual animado e lyrics dinâmicas.

### 5. 🪙 Economia de Fichas & Recordes Mundiais
- **Fichas de Fliperama:** Comece com fichas virtuais e ganhe bônus ao descobrir e explorar novos gabinetes pelo saguão.
- **Leaderboards Sincronizados:** Disputa de recordes mundiais transmitidos em tempo real para os outros pilotos via ticker holográfico.

### 6. ⌨️ Dock Tátil & Saída Universal com <kbd>ESC</kbd>
- **Dock de Comandos Fixo:** Keycaps mecânicos translúcidos indicando cada atalho sem sobrepor o jogo.
- **Universal ESC Safe Exit:** Pressione <kbd>ESC</kbd> em qualquer jogo ou modo para fechar o overlay e retomar o controle do avatar instantaneamente.

---

## 🎮 Controles do Fliperama

| Tecla / Atalho | Ação |
| :---: | :--- |
| **`W` `A` `S` `D`** ou **Setas** | Andar pelo saguão 3D |
| **`ESPAÇO`** | Pular no salão |
| **`E`** ou **`ENTER`** | Inserir ficha e jogar máquina próxima |
| **`V`** | Assistir transmissão ao vivo da máquina (Modo Camarote) |
| **`ESC`** | Sair do jogo / Sair do camarote e voltar a andar |
| **`J`** | Abrir Jukebox de trilhas sonoras |
| **`T`** | Alterar sua TAG de piloto e cor neon |
| **`C`** | Abrir dock de bate-papo no saguão |

---

## 🚀 Como Executar Localmente

### Opção 1: Usando `pnpm` ou `npm`

```bash
# 1. Clone o repositório
git clone https://github.com/marcuscaiado/nopex-arcade-multiplayer.git
cd nopex-arcade-multiplayer

# 2. Instale as dependências
pnpm install
# ou: npm install

# 3. Inicie o servidor de desenvolvimento
pnpm dev
# ou: npm run dev
```

Abra no navegador em `http://localhost:5173`.

### Opção 2: Usando Docker (Zero-Config)

```bash
# Subir container de produção otimizado com Nginx
docker-compose up --build
```

Acesse em `http://localhost:8080`.

---

## 🏗️ Arquitetura do Projeto

```text
nopex-arcade-multiplayer/
├── src/
│   ├── arcade3d/
│   │   ├── engine.js            # Motor Three.js, animações e câmera cinematográfica
│   │   ├── cabinet.js           # Gabinetes 3D, telas CRT diegéticas e badges
│   │   ├── network.js           # Mesh WebRTC P2P (Trystero/Nostr), telemetria e streams
│   │   ├── play-overlay.js      # Gerenciador de iframes, emuladores e captura de vídeo
│   │   ├── watch-hud.js         # HUD do camarote de espectador e dock de torcida
│   │   ├── jukebox-modal.js     # Modal de áudio com equalizador e lista de trilhas
│   │   ├── interaction.js       # Detecção de proximidade e cartões holográficos
│   │   ├── player.js            # Avatar 3D, física de colisão e balões de fala
│   │   └── world.js             # Layout do salão synthwave, iluminação e zonas
│   ├── style.css                # Estilização cyberpunk neon e efeitos visuais
│   └── main.js                  # Ponto de entrada da aplicação
├── games/                       # Emuladores isolados (WASM/Canvas/WebGL)
├── Dockerfile                   # Build multi-stage com Node 20 e Nginx Alpine
├── docker-compose.yml           # Orquestração para deploy autônomo
├── TECH_REVIEW.md               # Diagnóstico técnico detalhado (Roadmap 10/10)
└── plan.md                      # Especificação arquitetural do Modo Espectador
```

---

## 📄 Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para obter mais informações.
