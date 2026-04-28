const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const images = [
  { in: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\9d2082e1-767f-4065-b761-888cb68c6ba8\\elena_profile_1777394824600.png', out: 'public/profiles/elena.webp' },
  { in: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\9d2082e1-767f-4065-b761-888cb68c6ba8\\amara_profile_1777394841176.png', out: 'public/profiles/amara.webp' },
  { in: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\9d2082e1-767f-4065-b761-888cb68c6ba8\\julian_profile_1777394859720.png', out: 'public/profiles/julian.webp' },
  { in: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\9d2082e1-767f-4065-b761-888cb68c6ba8\\vikram_profile_1777394879607.png', out: 'public/profiles/vikram.webp' },
  { in: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\9d2082e1-767f-4065-b761-888cb68c6ba8\\sophie_profile_1777394898979.png', out: 'public/profiles/sophie.webp' },
  { in: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\9d2082e1-767f-4065-b761-888cb68c6ba8\\marcus_profile_1777394918025.png', out: 'public/profiles/marcus.webp' },
  { in: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\9d2082e1-767f-4065-b761-888cb68c6ba8\\abdul_samad_profile_1777396008120.png', out: 'public/profiles/abdul.webp' },
  { in: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\9d2082e1-767f-4065-b761-888cb68c6ba8\\sayyam_khan_profile_1777396028010.png', out: 'public/profiles/sayyam.webp' },
  { in: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\9d2082e1-767f-4065-b761-888cb68c6ba8\\shariz_ahmad_profile_1777396043618.png', out: 'public/profiles/shariz.webp' }
];

async function convert() {
  if (!fs.existsSync('public/profiles')) {
    fs.mkdirSync('public/profiles', { recursive: true });
  }

  for (const img of images) {
    try {
      await sharp(img.in)
        .webp({ quality: 80 })
        .toFile(img.out);
      console.log(`Converted ${img.in} to ${img.out}`);
    } catch (e) {
      console.error(`Error converting ${img.in}:`, e);
    }
  }
}

convert();
