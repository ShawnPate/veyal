const canvas = document.querySelector("#battlefield");
const context = canvas.getContext("2d");
const seedLabel = document.querySelector("#seed-label");
const sourceCount = document.querySelector("#source-count");
const simulationStatus = document.querySelector("#simulation-status");
const newMapButton = document.querySelector("#new-map");

const COLS = 90;
const ROWS = 54;
let currentSeed = 0;
let terrain = [];
let sources = [];

function mulberry32(seed) {
  return function random() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function smoothNoise(random, cols, rows) {
  const anchorCols = 10;
  const anchorRows = 7;
  const anchors = Array.from({ length: anchorRows }, () =>
    Array.from({ length: anchorCols }, () => random())
  );

  return Array.from({ length: rows }, (_, y) =>
    Array.from({ length: cols }, (_, x) => {
      const gx = x / (cols - 1) * (anchorCols - 1);
      const gy = y / (rows - 1) * (anchorRows - 1);
      const x0 = Math.floor(gx), y0 = Math.floor(gy);
      const x1 = Math.min(anchorCols - 1, x0 + 1);
      const y1 = Math.min(anchorRows - 1, y0 + 1);
      const tx = gx - x0, ty = gy - y0;
      const a = anchors[y0][x0] * (1 - tx) + anchors[y0][x1] * tx;
      const b = anchors[y1][x0] * (1 - tx) + anchors[y1][x1] * tx;
      const broad = a * (1 - ty) + b * ty;
      return broad * 0.78 + random() * 0.22;
    })
  );
}

function generateMap() {
  currentSeed = Math.floor(Math.random() * 0x7fffffff);
  const random = mulberry32(currentSeed);
  terrain = smoothNoise(random, COLS, ROWS);

  const sorted = terrain.flat().slice().sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const candidates = [];
  for (let y = 2; y < ROWS - 2; y++) {
    for (let x = 2; x < COLS - 2; x++) {
      if (terrain[y][x] >= median + 0.08) candidates.push({ x, y });
    }
  }

  sources = [];
  while (sources.length < 5 && candidates.length) {
    const candidate = candidates.splice(Math.floor(random() * candidates.length), 1)[0];
    if (sources.every(s => Math.hypot(s.x - candidate.x, s.y - candidate.y) > 12)) {
      sources.push(candidate);
    }
  }

  drawMap();
  seedLabel.textContent = `Seed: ${currentSeed}`;
  sourceCount.textContent = String(sources.length);
  simulationStatus.textContent = "Preview only";
}

function drawMap() {
  const cellWidth = canvas.width / COLS;
  const cellHeight = canvas.height / ROWS;
  const sorted = terrain.flat().slice().sort((a, b) => a - b);
  const low = sorted[Math.floor(sorted.length * 0.25)];
  const high = sorted[Math.floor(sorted.length * 0.8)];

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const value = terrain[y][x];
      let colour;
      if (value < low) {
        colour = "#173d3b";
      } else if (value < high) {
        const t = (value - low) / Math.max(0.001, high - low);
        colour = `rgb(${Math.round(35 + t * 32)}, ${Math.round(91 + t * 49)}, ${Math.round(68 + t * 20)})`;
      } else {
        colour = "#9ab88a";
      }
      context.fillStyle = colour;
      context.fillRect(x * cellWidth, y * cellHeight, Math.ceil(cellWidth), Math.ceil(cellHeight));
    }
  }

  for (const source of sources) {
    const px = (source.x + 0.5) * cellWidth;
    const py = (source.y + 0.5) * cellHeight;
    context.beginPath();
    context.arc(px, py, Math.min(cellWidth, cellHeight) * 0.7, 0, Math.PI * 2);
    context.fillStyle = "rgba(84, 255, 232, 0.22)";
    context.fill();
    context.beginPath();
    context.arc(px, py, Math.min(cellWidth, cellHeight) * 0.32, 0, Math.PI * 2);
    context.fillStyle = "#72f7e8";
    context.fill();
    context.strokeStyle = "#e3fffb";
    context.lineWidth = 1;
    context.stroke();
  }
}

newMapButton.addEventListener("click", generateMap);
generateMap();
