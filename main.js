// ===== CLOUD PAINTING ANIMATION =====
(function cloudPainting() {
  const canvas = document.getElementById('cloudPaintingCanvas');
  if (!canvas) return;
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  const ctx = canvas.getContext('2d');
  let dots = Array.from({length: 100}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.18,
    dy: (Math.random() - 0.5) * 0.18,
    phase: Math.random() * Math.PI * 2
  }));
  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let d of dots) {
      d.x += d.dx + Math.sin(Date.now()/2000 + d.phase)*0.04;
      d.y += d.dy + Math.cos(Date.now()/2000 + d.phase)*0.04;
      if (d.x < 0 || d.x > canvas.width) d.dx *= -1;
      if (d.y < 0 || d.y > canvas.height) d.dy *= -1;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI*2);
      ctx.fillStyle = d.r > 2 ? 'rgba(212,175,55,0.13)' : 'rgba(192,192,192,0.10)';
      ctx.shadowColor = d.r > 2 ? '#D4AF37' : '#C0C0C0';
      ctx.shadowBlur = d.r > 2 ? 8 : 4;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

// ===== BRANCHES LAYER (SVG) - More Subtle =====
(function branchesLayer() {
  const svg = document.getElementById('branchesLayer');
  if (!svg) return;
  function resize() {
    svg.setAttribute('width', window.innerWidth);
    svg.setAttribute('height', window.innerHeight);
  }
  resize();
  window.addEventListener('resize', resize);
  function drawBranches() {
    svg.innerHTML = '';
    for (let i = 0; i < 4; i++) {
      let x1 = Math.random() * window.innerWidth;
      let y1 = Math.random() * window.innerHeight * 0.7 + window.innerHeight*0.2;
      let x2 = x1 + (Math.random()-0.5)*120;
      let y2 = y1 - Math.random()*80 - 20;
      let c1x = x1 + (Math.random()-0.5)*60;
      let c1y = y1 - Math.random()*40;
      let c2x = x2 + (Math.random()-0.5)*60;
      let c2y = y2 + Math.random()*40;
      let path = document.createElementNS('http://www.w3.org/2000/svg','path');
      path.setAttribute('d', `M${x1},${y1} C${c1x},${c1y} ${c2x},${c2y} ${x2},${y2}`);
      path.setAttribute('stroke', i%2===0 ? '#D4AF37' : '#C0C0C0');
      path.setAttribute('stroke-width', '0.8');
      path.setAttribute('fill', 'none');
      path.setAttribute('opacity', '0.08');
      svg.appendChild(path);
    }
  }
  drawBranches();
  setInterval(drawBranches, 12000);
})();

// ===== PORTFOLIO GRID & POEM MODAL =====
const paintings = [
  {
    title: 'Venus',
    image: 'paintings/Venus/Venus.jpg',
    description: 'Oil on canvas - The feminine figure emerges through cloud painting technique, exploring beauty, desire, and the subconscious.',
    poem: `Unchained

And why resist the sensation
The motion
The revolution
You
Laying in satin hair
And Gold meet the Silver
Smile, honey sweet
Voice, a perfect symphony
Oh The guarded deity within
The moment is here
I am here
You there
I can be free, you can be free
...
Venus, Desire free
Be free
Love does not come for free
But When its here
Its free to hold me dearly
Its free to hold you dearly`
  },
  {
    title: 'Blue',
    image: 'paintings/Blue/Blue.jpg',
    description: 'Oil on canvas - Mythic blue, Venus and Adonis, rebirth and memory.',
    poem: `And here I am, Venus,
Once Loved by you
Judged by Zeus
Rejected by Hades
I am Adonis
...
For Deities we are
You Venus,
I Adonis`
  },
  {
    title: 'Two In Mirror And Both In A Mirror',
    image: 'paintings/Golden-Two-Mirrored/TwoInMirrorAndBothInAMirror.jpg',
    description: 'Oil on canvas - Infinite reflection and duality, exploring the concept of consciousness and the self through mirrored imagery and recursive perception.',
    poem: `نام پرهیز
طلا چهره،
۲ در آینه و هر دو در آینه -
The golden room
The golden mask
The umber weight
The gold of you
The light of me
Both unnamed`
  },
  {
    title: 'Wanderers of Desert',
    image: 'paintings/WanderersOfDesert/WanderersofDesert.jpg',
    description: 'Oil on canvas - Figures traversing vast emptiness, exploring themes of journey, isolation, and the search for meaning in barren landscapes.',
    poem: `و ما گمگشتگان بیایبانیم
به نعره به خنده در می نوردیم
...
باید که بیابیم کیمیای بیابان`
  },
  {
    title: 'Peacock',
    image: 'paintings/Peacock/Peacock.jpg',
    description: 'Oil on canvas - Study in beauty and natural splendor, exploring themes of display, attraction, and the inherent beauty of the natural world.',
    poem: `In the garden of splendor
Where colors dance and fade
The peacock spreads its glory
In nature's grand parade

Each feather tells a story
Of beauty's endless quest
In this moment of wonder
We find our hearts at rest`
  }
];

const grid = document.getElementById('portfolioGrid');
paintings.forEach(p => {
  const item = document.createElement('div');
  item.className = 'artwork-item';
  item.innerHTML = `
    <div class="artwork-image"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>
    <h3 class="artwork-title">${p.title}</h3>
    <p class="artwork-description">${p.description}</p>
    <button class="read-poem-btn" onclick="showPoemModal(\`${p.poem.replace(/`/g, '\\`')}\`)">Read Poem</button>
  `;
  
  // Add click handler for full-size painting view to the entire card
  item.addEventListener('click', (e) => {
    // Don't trigger if clicking on the poem button
    if (!e.target.classList.contains('read-poem-btn')) {
      showPaintingModal(p);
    }
  });
  
  grid.appendChild(item);
});

// ===== ATELIER SECTION =====
const atelierImages = [
  {
    title: 'Comprehensive View',
    image: 'Atellier/Comprehensive.jpg',
    description: 'A comprehensive view of the atelier workspace, showing the creative environment where paintings come to life.'
  },
  {
    title: 'The Tiny Table',
    image: 'Atellier/theTinyTable.jpg',
    description: 'The intimate gathering space where interdisciplinary dialogue flourishes, embodying the philosophy of welcoming guests.'
  },
  {
    title: 'Studio Perspective',
    image: 'Atellier/view2.jpg',
    description: 'Another perspective of the studio space, highlighting the working environment and creative process.'
  }
];

const atelierGrid = document.getElementById('atelierGrid');
atelierImages.forEach(img => {
  const item = document.createElement('div');
  item.className = 'atelier-item';
  item.innerHTML = `
    <div class="atelier-image"><img src="${img.image}" alt="${img.title}" loading="lazy"></div>
    <h3 class="atelier-title">${img.title}</h3>
    <p class="atelier-description">${img.description}</p>
  `;
  atelierGrid.appendChild(item);
});

// ===== SCROLL ANIMATIONS FOR ATELIER =====
function handleScrollAnimations() {
  const atelierItems = document.querySelectorAll('.atelier-item');
  atelierItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
    
    if (isVisible) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// ===== POEM MODAL =====
window.showPoemModal = function(poem) {
  document.getElementById('poemModalContent').textContent = poem;
  document.getElementById('poemModal').classList.add('active');
};

document.getElementById('closePoemModal').onclick = function() {
  document.getElementById('poemModal').classList.remove('active');
};

// Close poem modal when clicking outside
document.getElementById('poemModal').onclick = function(e) {
  if (e.target === this) {
    this.classList.remove('active');
  }
};

// ===== FULL SIZE PAINTING MODAL =====
window.showPaintingModal = function(painting) {
  document.getElementById('paintingModalImage').src = painting.image;
  document.getElementById('paintingModalImage').alt = painting.title;
  document.getElementById('paintingModalTitle').textContent = painting.title;
  document.getElementById('paintingModalDescription').textContent = painting.description;
  document.getElementById('paintingModal').classList.add('active');
};

document.getElementById('closePaintingModal').onclick = function() {
  document.getElementById('paintingModal').classList.remove('active');
};

// Close painting modal when clicking outside
document.getElementById('paintingModal').onclick = function(e) {
  if (e.target === this) {
    this.classList.remove('active');
  }
};

// ===== LOGO ANIMATION =====
(function logoAnimation() {
  const logoGold = document.getElementById('logoGold');
  const logoSilver = document.getElementById('logoSilver');
  if (!logoGold || !logoSilver) return;
  
  function animateDuality() {
    const time = Date.now() / 3000;
    const distance = 15 + Math.sin(time) * 8;
    
    logoGold.setAttribute('cx', 100 - distance);
    logoSilver.setAttribute('cx', 100 + distance);
    
    logoGold.setAttribute('fill-opacity', 0.85 + Math.sin(time * 2) * 0.1);
    logoSilver.setAttribute('fill-opacity', 0.85 + Math.cos(time * 2) * 0.1);
    
    requestAnimationFrame(animateDuality);
  }
  animateDuality();
})();

// ===== CUSTOM CURSOR =====
(function customCursor() {
  const cursor = document.querySelector('.custom-cursor');
  if (!cursor) return;
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '0.6';
  });
  
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });
})(); 