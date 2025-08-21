document.addEventListener("DOMContentLoaded", () => {
  renderBillboard();
  renderHalfpage();
  renderShowcaseCustom();
  renderShowcaseHTML5();
});

// Billboard 970x250
function renderBillboard() {
  const el = document.getElementById("billboard_container");
  if (!el) return;
  el.innerHTML = `
    <div style="width:970px;height:250px;margin:0 auto;background:#eee;display:flex;align-items:center;justify-content:center;">
      <a href="https://example.com" target="_blank" style="width:100%;height:100%;">
        <img src="https://placehold.co/970x250/png?text=Billboard" style="width:100%;height:100%;object-fit:cover;" />
      </a>
    </div>`;
}

// Halfpage 300x600
function renderHalfpage() {
  const el = document.getElementById("halfpage_container");
  if (!el) return;

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes slideIn { 0% { transform: translateX(350px); opacity:0; } 60% { transform: translateX(-20px); opacity:1; } 100% { transform: translateX(0); } }
    @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
    .halfpage-container { width:300px; height:600px; animation:slideIn 1s ease forwards; }
    .halfpage-container img { width:100%; height:100%; display:block; border:0; animation:bounce 2s infinite ease-in-out 1s; }
  `;
  document.head.appendChild(style);

  el.innerHTML = `
    <div class="halfpage-container">
      <a href="https://example.com" target="_blank">
        <img src="https://placehold.co/300x600.png?text=Halfpage" alt="Halfpage Ad"/>
      </a>
    </div>`;
}

// Showcase custom 
function renderShowcaseCustom() {
  const el = document.getElementById("showcase_container");
  if (!el) return;

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes rotateY { 0% { transform: rotateY(0deg); } 100% { transform: rotateY(360deg); } }
    .cube { width:100%; height:100%; position:relative; transform-style:preserve-3d; animation:rotateY 15s infinite linear; }
    .cube-face { position:absolute; width:100%; height:100%; backface-visibility:hidden; }
  `;
  document.head.appendChild(style);

  el.innerHTML = `
    <div style="width:300px;height:250px;perspective:1200px;overflow:hidden;box-shadow:0 5px 10px rgba(0,0,0,0.2);border-radius:4px;">
      <div class="cube">
        <div class="cube-face" style="transform:rotateY(0deg) translateZ(150px);">
          <img src="https://placehold.co/300x250/808080/000000/png?text=Showcase" style="width:100%;height:100%;object-fit:cover;" />
        </div>
        <div class="cube-face" style="transform:rotateY(90deg) translateZ(150px);">
          <img src="https://placehold.co/300x250/ffffff/000000/png?text=Showcase" style="width:100%;height:100%;object-fit:cover;" />
        </div>
        <div class="cube-face" style="transform:rotateY(180deg) translateZ(150px);">
          <img src="https://placehold.co/300x250/808080/000000/png?text=Showcase" style="width:100%;height:100%;object-fit:cover;" />
        </div>
        <div class="cube-face" style="transform:rotateY(270deg) translateZ(150px);">
          <img src="https://placehold.co/300x250/ffffff/000000/png?text=Showcase" style="width:100%;height:100%;object-fit:cover;" />
        </div>
      </div>
    </div>`;
}

// Showcase HTML5 300x250
function renderShowcaseHTML5() {
  const el = document.getElementById("showcase2_container");
  if (!el) return;

  // Tambahin CSS animasi
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes spin { 
      to { transform: rotate(360deg); } 
    }
    .showcase-html5 { 
      width:300px; 
      height:250px; 
      position:relative; 
      overflow:hidden; 
      border-radius:10px; 
      background:radial-gradient(120% 120% at 0% 0%, #0f172a 0%, #1e293b 40%, #0b1324 100%); 
      color:#fff;
      cursor:pointer;
    }
    .showcase-html5 .burst {
      position:absolute;
      width:420px; height:420px;
      left:-60px; top:-160px;
      opacity:.35; filter:blur(12px);
      background:conic-gradient(from 90deg, #60a5fa, #a78bfa, #f472b6, #60a5fa);
      mix-blend-mode:screen;
      animation:spin 14s linear infinite;
    }
  `;
  document.head.appendChild(style);

  el.innerHTML = `
    <a href="https://example.com" target="_blank" style="display:block;width:100%;height:100%;text-decoration:none;color:inherit;">
      <div class="showcase-html5">
        <div class="burst"></div>
        <h3 style="position:absolute;left:16px;top:22px;font-size:22px;font-weight:800;">Big Savings, Today Only</h3>
        <p style="position:absolute;left:16px;top:72px;font-size:13px;">Extra 30% off on selected items. Limited time!</p>
        <div style="position:absolute;right:8px;bottom:8px;width:170px;height:170px;border-radius:50%;background:rgba(255,255,255,.1);box-shadow:0 4px 18px rgba(59,130,246,.35);"></div>
        <div style="position:absolute;left:16px;bottom:18px;background:#facc15;color:#111;font-weight:800;font-size:13px;padding:10px 16px;border-radius:999px;">Shop Now</div>
      </div>
    </a>
  `;
}
