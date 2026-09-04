// Retro Cyberpunk Identity Modal for Nopex Arcade Multiplayer

export const COLOR_PALETTES = [
  { name: 'Cyan', hex: '#00f5ff', num: 0x00f5ff, accent: '#ffffff' },
  { name: 'Magenta', hex: '#ff007f', num: 0xff007f, accent: '#00f5ff' },
  { name: 'Ouro', hex: '#ffd32a', num: 0xffd32a, accent: '#ff3838' },
  { name: 'Esmeralda', hex: '#00ff88', num: 0x00ff88, accent: '#00ffff' },
  { name: 'Roxo', hex: '#a55eea', num: 0xa55eea, accent: '#ffd32a' },
  { name: 'Rubi', hex: '#ff3838', num: 0xff3838, accent: '#ffd32a' }
];

export class IdentityManager {
  constructor(onReady) {
    this.onReady = onReady;
    this.tag = localStorage.getItem('ARCADE_MP_TAG') || 'MARC1';
    this.colorHex = localStorage.getItem('ARCADE_MP_COLOR') || '#00f5ff';
    this.modalEl = null;

    this.createModal();
    if (this.tag && this.tag.length >= 2) {
      // Auto-ready if already stored
      setTimeout(() => {
        if (this.onReady) this.onReady(this.getIdentity());
      }, 100);
    } else {
      this.showModal();
    }
  }

  getIdentity() {
    const pal = COLOR_PALETTES.find(c => c.hex.toLowerCase() === this.colorHex.toLowerCase()) || COLOR_PALETTES[0];
    return {
      tag: (this.tag || 'MARC1').slice(0, 5).toUpperCase(),
      color: pal.num,
      colorHex: pal.hex,
      accent: pal.accent
    };
  }

  createModal() {
    const existing = document.getElementById('mp-identity-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'mp-identity-modal';
    overlay.style.cssText = `
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
    `;

    const box = document.createElement('div');
    box.style.cssText = `
      background: linear-gradient(145deg, #101222, #070811);
      border: 2px solid #00f5ff;
      border-radius: 16px;
      padding: 24px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 0 35px rgba(0, 245, 255, 0.4), inset 0 0 20px rgba(0, 245, 255, 0.1);
      text-align: center;
      color: #fff;
    `;

    box.innerHTML = `
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
          ${COLOR_PALETTES.map(p => `
            <div class="color-swatch" data-hex="${p.hex}" title="${p.name}" style="
              height: 36px;
              background: ${p.hex};
              border-radius: 8px;
              cursor: pointer;
              border: 3px solid ${p.hex.toLowerCase() === this.colorHex.toLowerCase() ? '#fff' : 'transparent'};
              box-shadow: ${p.hex.toLowerCase() === this.colorHex.toLowerCase() ? '0 0 12px ' + p.hex : 'none'};
              transition: transform 0.2s, box-shadow 0.2s;
            "></div>
          `).join('')}
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
    `;

    overlay.appendChild(box);
    document.body.appendChild(overlay);
    this.modalEl = overlay;

    // Events
    const tagInput = box.querySelector('#mp-tag-input');
    tagInput.addEventListener('input', (e) => {
      tagInput.value = tagInput.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 5).toUpperCase();
    });

    const swatches = box.querySelectorAll('.color-swatch');
    swatches.forEach(sw => {
      sw.addEventListener('click', () => {
        this.colorHex = sw.getAttribute('data-hex');
        swatches.forEach(s => {
          const isSel = s.getAttribute('data-hex') === this.colorHex;
          s.style.border = isSel ? '3px solid #fff' : 'transparent';
          s.style.boxShadow = isSel ? '0 0 12px ' + this.colorHex : 'none';
        });
      });
    });

    const errEl = box.querySelector('#mp-modal-err');
    const enterBtn = box.querySelector('#mp-enter-btn');
    enterBtn.addEventListener('click', () => {
      const val = tagInput.value.trim().toUpperCase();
      if (!val || val.length < 2) {
        if (errEl) {
          errEl.textContent = '⚠️ Digite uma TAG com pelo menos 2 letras!';
          errEl.style.display = 'block';
        }
        tagInput.focus();
        return;
      }
      if (errEl) errEl.style.display = 'none';
      this.tag = val;
      localStorage.setItem('ARCADE_MP_TAG', this.tag);
      localStorage.setItem('ARCADE_MP_COLOR', this.colorHex);
      this.hideModal();
      if (this.onReady) this.onReady(this.getIdentity());
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalEl && this.modalEl.style.display === 'flex') {
        if (this.tag && this.tag.length >= 2) {
          this.hideModal();
        }
      }
    });
  }

  showModal() {
    if (this.modalEl) this.modalEl.style.display = 'flex';
  }

  hideModal() {
    if (this.modalEl) this.modalEl.style.display = 'none';
  }
}
