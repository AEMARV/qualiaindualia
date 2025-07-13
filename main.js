// ===== CLOUD PAINTING CANVAS =====
(function cloudPainting() {
  const canvas = document.getElementById('cloudPaintingCanvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 0.01;
      
      if (particle.life > 0) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${particle.life * 0.3})`;
        ctx.fill();
      }
    });
    
    particles = particles.filter(p => p.life > 0);
    
    if (Math.random() < 0.02) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        life: 1
      });
    }
    
    requestAnimationFrame(animate);
  }
  
  resize();
  animate();
  window.addEventListener('resize', resize);
})();

// ===== BRANCHES LAYER =====
(function branchesLayer() {
  const svg = document.getElementById('branchesLayer');
  if (!svg) return;
  
  function resize() {
    svg.setAttribute('width', window.innerWidth);
    svg.setAttribute('height', window.innerHeight);
  }
  
  function drawBranches() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    let branchesHTML = '';
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const length = Math.random() * 100 + 50;
      const angle = Math.random() * Math.PI * 2;
      
      branchesHTML += `<line x1="${x}" y1="${y}" x2="${x + Math.cos(angle) * length}" y2="${y + Math.sin(angle) * length}" stroke="#D4AF37" stroke-width="1" opacity="0.1"/>`;
    }
    
    svg.innerHTML = branchesHTML;
  }
  
  resize();
  drawBranches();
  window.addEventListener('resize', () => {
    resize();
    drawBranches();
  });
  
  setInterval(drawBranches, 8000);
})();

// Painting data with actual folder structure and embedded poems
const paintings = [
  {
    id: 'blue',
    title: 'Blue',
    folder: 'Blue',
    description: 'Oil on canvas exploring the depths of blue and the mythology of Venus and Adonis.',
    hasPoem: true,
    poem: `And here I am, Venus,
Once Loved by you
Judged by Zeus
Rejected by Hades
I am Adonis

Last held by you
Lost in my blood
Lost in your tears
Last In your arms

And again,
In here I am, Venus
I am Adonis

Raised by Persephone
Born in the deepest of the blues
Veins colored with red,
the pomegranate seeds
Clayed by the dreams
Eyes forged from the broken blades of old gods
Soft in skin
Diamond within
Loved by you
Judged by Zeus
And now Zeus is not
Zeus is gone
And now Hades is not
Hades is gone
And now begins our time
I Adonis
You Venus

And with the last of your tear
With the wind
My name shattered, my name scattered
And with the last of my blood
you blended into the ocean,
into the sun
You blended into the moon
into the trees

Until my name was whispered
Until your face was seen
Until the wind told the secret
Your scent heard in the breeze
And the sun unraveled your face
And flora was there
And the graces danced
And you were reborn with me

For Deities we are,
Venus,
you and I,
I Adonis
And now I am
Found you once again
And I wont fear the serpent no more
And I wont hunt the boar no more
And I am here,
And Zeus and Hades are no more
And I am 
Once again born
In your form
you Venus
I Adonis
Heard your scent in the air
And I came back
And hades is no more
I Adonis
You Venus

And the favored breeze is upon us
And flora orantes our way
And time will be kind
and your scent will forever remain 

For Deities we are
You Venus,
I Adonis`
  },
  {
    id: 'golden-two-mirrored',
    title: 'Golden-Two-Mirrored',
    folder: 'Golden-Two-Mirrored',
    description: 'Oil on canvas exploring duality and reflection in golden tones.',
    hasPoem: true,
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
    id: 'one',
    title: 'One',
    folder: 'One',
    description: 'Oil on canvas exploring unity and singularity.',
    hasPoem: true,
    poem: `Dense
Uncracked
Untold

Cloaked
In armor of Gold

Leaned on unresolved
Redemptor of the false
False painted, As another color to be true,
The blind light on the unseen paradox

The one, the who that rejects the two
The mono, the uno
Left the duo,
Bending toward the Null

Shouted, I am the One, I as the 1
And I Reject the two as You, you the two.
No words, heard,
No echoes, the words forever did not resonate
Unfelt,
The one and the null
Left

رنگ ها فریبکار، و فریب ها زیبا

یگانه شیطان استوار ماند بر فراز صلیب و هرم و دیوار ها
و گاه لم داده بر گنبد ها
در کنج های دایره ها
در تاریک انتزاع
بی رنگ
و تاجش شد یگانه خدا

و صد ابد در جنگ
جنگ برای نا معنا
برای انتها به نا منتها`
  },
  {
    id: 'peacock',
    title: 'Peacock',
    folder: 'Peacock',
    description: 'Oil on canvas celebrating natural beauty and splendor.',
    hasPoem: false
  },
  {
    id: 'sealed',
    title: 'Sealed',
    folder: 'Sealed',
    description: 'Oil on canvas exploring containment and mystery.',
    hasPoem: false
  },
  {
    id: 'uno-eye',
    title: 'Uno-Eye',
    folder: 'Uno-Eye',
    description: 'Oil on canvas exploring vision and perception through multiple stages.',
    hasPoem: false
  },
  {
    id: 'veils-unveiled',
    title: 'VeilsUnveiled',
    folder: 'VeilsUnveiled',
    description: 'Oil on canvas exploring revelation and the unveiling of truth.',
    hasPoem: true,
    poem: `Veils Unveiled

Veils unveiled,
Who is out there?
Is there anyone behind or am I chasing the veiled absurd
Veils on veils
the anxious eternal search
And A glimpse of the sight of her
And she hides away
As soon as I find her

Veils on veils
Psyche laid in bed
A ruse, and a ruse to see all truth
Truth, as Bare, and Nude as her,
Bright, as the candle on the right side of her bed
And with the sight, cupid flew away
Veils fell on Veils

The Never ending story of a chase
Undestined
A wild dream for the sane and unsane
And the eventual question
Was I referencing you
When you reflected I?
Mirrors mirror each other?
The self reference?
Your face to face mine
Self reference, for you that only love all those who dont love themselves
And the paradox, do you love yourself?
A Russel reference.
For those that are the birth of the romance
The free rotations of truths in a sentence,
A wheel,
Revolution of the lovers, the poles
And "so it goes", and the wheel rolls
Kurt's refrence

Veils on Veils
Is the veil her
Or her behind the veil
And the chase, was destined
And you laid next to truth
And mosses uncovered your face
And you remained, embraced
Rebirth of the two
In the tomb of Emily's mind, Dickinson
A reference

Funny, one day
I saw with my eyes,
In one afternoon,
In my lifetime,
Finally Mars' spear
Was taken by venus
And she held the spear
A first,
In one glimpse, less than a second
Portrayed by a Roman
Stevie D'Ercole,
And I doubted,
Were they ever seperate?
Mars and Venus?
And I doubted
Are we the story tellers?
Meaning given and taken away
At will, in the dark depth of within
And the story retold to eye
After I had forgotten
All a new and all a surprise
Veils on Veils

And no, and no,
This story is true
And true meant True
Exists, the absolute
The grand piece

created? Veils on veils
discovered? Veils unveiled

In my trench, my heart is warm and the stars, distant but bright.
discovered, unveiled, embraced, I whisper to myself
And the wait always meant
For you, the companion to reason and every edge of every triangle and square. 
For you, that tiptoe behind the dark satin
And dance on the light waters
For you, covered by sights and sounds
And I
Still In the trench,
And time drips for you here
To come back in the shadow of the leaves of that tree
In refractions of the bright lights
In splashes of gold and green
In the somber world of the blue

For you,
You the unveiled True
Truth beauty, and beauty you
A keits reference
And I reference`
  },
  {
    id: 'venus',
    title: 'Venus',
    folder: 'Venus',
    description: 'Oil on canvas celebrating the feminine divine and beauty.',
    hasPoem: true,
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
And the key is to imagine What to do with free
Your guard is next to you
Surrounding you
Covering the lights
Covering the sounds
Covering the sense
Takes you away from kisses
Takes you away from the sights of desired
Breaks you away from embrace

In the name that is called security,
 in the name that is called body
In the name of ability

The self restraint
The guard, the crust
The fixed, the built
Carved stones and walls
Hard rocks
The mechanic, the mechanical language,
The mechanical dance, 
Mechanical dance of the lips,
Dance of the hands,
the mechanical push
The mechanics of action,
And spontaneous rejection and reaction
Hard rocks, hitting hard rocks. They shout no

In the name of body,
in the name of security
In the name of ability

Safe but no sensation
Safe but no perception
And Why resist the sensation
And sensation is soft,
And soft delays rejection, soft delays reaction
And in delay lives perception

soft is alive
And in alive lives creation

Venus is you, sensitive
Sensible, smile honey sweet
Voice a perfect symphony,
Tender in skin
Soft in all sensations,
For you and me
Venus is you within
Venus is you, the who that you is blind to
The who that mirrors never show to you
Venus in you
Venus is you

Empty the mind for a moment
No matter who I am
No matter what I am named
No matter how I look
No matter how I apear or apeared
I am me
You know me
You saw me in names
You saw me in memories
You deamt me
You tasted me in here and in there
You looked for me
This form and that
This land or not
Distant or not
And here is me
The crystal is in me
Soft in skin, diamond within
And Heres the juice of me
Now, how do you want to be
How do you want me to be

You tasted me in your first kisses
For a moment, so brief
You tasted me when you climbed that tree
You tasted me in the fresh breeze of the sea
Only you hold the key
To open the walls that held you from you and me
Only you hold the key, to see, to sense
To do, to break
Put the key in the lock
What do you do with free?
That is the key

And heres the fruit that is me
You knew the taste of me
How do you choose to be
How do you want me to be
What color you want to paint me
Blue?
Green?

Its time,
Desire free and tell me free
Do me free
Kiss my lips for free
Touch my hair for free
And Ill take your pain for free
the embrace is free
Venus, Desire free
Be free
Love does not come for free
But When its here
Its free to hold me dearly
Its free to hold you dearly`
  },
  {
    id: 'wanderers-of-desert',
    title: 'WanderersOfDesert',
    folder: 'WanderersOfDesert',
    description: 'Oil on canvas exploring journey and vastness through desert imagery.',
    hasPoem: true,
    poem: `و ما گمگشتگان بیایبانیم
به نعره به خنده در می نوردیم
و مقصد به اصل و وصل
و شنیدی سرود ما
مسطور به سکوت شبان

اینجا انجاست
که آب ز خاک به رنگ آینه زند بیرون
اینجا انجاست 
که بازتاب نفس نمی شود پیدا
اینجا آنجاست که جز آه شب نیست هیچ نوا
اینجا آنجاست
که تنها لا یتناهی، هست تعداد نهایت ها

و ما سرگردانان شبیم
قدم ها 
گاه سست
گاه رمین
هل داده به شنها
به نعره به خنده
گام به گام
به شن به شن
به شب
به شب
بیابندگان روح این صحرا

شنیدی سرود جنون ما
ما ملعبه ی ستاره گانیم و رمل و اسطرلاب
شگون به شگون
و رمز به رمز
مسحور خیال و مسطور به غبار 
و به جوی جنون که در ماست روان
جوییده ایم ماسه به ماسه،
آینه به آینه.
به استسقا

دل داده ایم به جام و به داد و به باده
سر به ستاره کشیدگان، ما مجانین بیابان
می بینیم رنگ گیاه به کور رنگ خیال
می بوییم به آهنگ عطش‌‌‌ عطر آبی آب
و به جنونی که بر ما بود روا
باید که بیابیم کیمیای بیابان`
  }
];

// Function to show embedded poem
function loadAndShowPoem(painting) {
  if (painting.poem) {
    showPoemModal(painting.poem);
  } else {
    showPoemModal('Poem not available.');
  }
}

// ===== POEM MODAL =====
window.showPoemModal = function(poem) {
  const modalContent = document.getElementById('poemModalContent');
  const modal = document.getElementById('poemModal');
  
  if (!modalContent || !modal) {
    console.error('Modal elements not found');
    return;
  }
  
  modalContent.textContent = poem;
  modal.classList.add('active');
};

// ===== FULL SIZE PAINTING MODAL =====
window.showPaintingModal = function(painting) {
  document.getElementById('paintingModalImage').src = `paintings/${painting.folder}/stage-final.jpg`;
  document.getElementById('paintingModalImage').alt = painting.title;
  document.getElementById('paintingModalTitle').textContent = painting.title;
  document.getElementById('paintingModalDescription').textContent = painting.description;
  document.getElementById('paintingModal').classList.add('active');
};

// ===== MAIN INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing portfolio...');
  
  // ===== PORTFOLIO GRID CREATION =====
  const grid = document.getElementById('portfolioGrid');
  console.log('Portfolio grid element:', grid);
  
  if (grid) {
    paintings.forEach(p => {
      const item = document.createElement('div');
      item.className = 'artwork-item';
      
      // Build the card HTML with conditional poem button
      let poemButtonHtml = '';
      if (p.hasPoem) {
        poemButtonHtml = '<button class="read-poem-btn">Read Poem</button>';
      }
      
      item.innerHTML = `
        <div class="artwork-image"><img src="paintings/${p.folder}/stage-final.jpg" alt="${p.title}" loading="lazy"></div>
        <h3 class="artwork-title">${p.title}</h3>
        <p class="artwork-description">${p.description}</p>
        ${poemButtonHtml}
      `;
      
      // Add click handler for full-size painting view to the entire card
      item.addEventListener('click', (e) => {
        // Don't trigger if clicking on the poem button
        if (!e.target.classList.contains('read-poem-btn')) {
          showPaintingModal(p);
        }
      });
      
      // Add poem button click handler if it exists
      const poemBtn = item.querySelector('.read-poem-btn');
      console.log(`Poem button for ${p.title}:`, poemBtn);
      if (poemBtn) {
        poemBtn.addEventListener('click', (e) => {
          console.log(`Poem button clicked for ${p.title}`);
          e.stopPropagation();
          loadAndShowPoem(p);
        });
      }
      
      grid.appendChild(item);
    });
  }

  // ===== ATELIER SECTION =====
  const atelierImages = [
    {
      title: 'Comprehensive View',
              image: 'optimized/Comprehensive.jpg',
      description: 'A comprehensive view of the atelier workspace, showing the creative environment where paintings come to life.'
    },
    {
      title: 'The Tiny Table',
              image: 'optimized/theTinyTable.jpg',
      description: 'The intimate gathering space where interdisciplinary dialogue flourishes, embodying the philosophy of welcoming guests.'
    },
    {
      title: 'Studio Perspective',
              image: 'optimized/view2.jpg',
      description: 'Another perspective of the studio space, highlighting the working environment and creative process.'
    }
  ];

  const atelierGrid = document.getElementById('atelierGrid');
  console.log('Atelier grid element:', atelierGrid);
  
  if (atelierGrid) {
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
  }

  // ===== MODAL EVENT LISTENERS =====
  document.getElementById('closePoemModal').onclick = function() {
    document.getElementById('poemModal').classList.remove('active');
  };

  document.getElementById('closePaintingModal').onclick = function() {
    document.getElementById('paintingModal').classList.remove('active');
  };

  // Close poem modal when clicking outside
  document.getElementById('poemModal').onclick = function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  };

  // Close painting modal when clicking outside
  document.getElementById('paintingModal').onclick = function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  };

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
  handleScrollAnimations(); // Initial check

  // ===== LOGO ANIMATION =====
  const logoGold = document.getElementById('logoGold');
  const logoSilver = document.getElementById('logoSilver');
  if (logoGold && logoSilver) {
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
  }

  // ===== CUSTOM CURSOR =====
  const cursor = document.querySelector('.custom-cursor');
  if (cursor) {
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
  }

  console.log('Portfolio initialization complete!');
}); 