# Hero Carousel Media Files

## Required Files

To complete the hero carousel, you need to add the following files:

### 1. Hero Video
- **Location**: `/public/videos/hero-video.mp4`
- **Recommended specs**:
  - Format: MP4 (H.264 codec)
  - Resolution: 1920x1080 or 1280x720
  - Duration: 10-30 seconds
  - File size: Under 5MB for fast loading
- **Content suggestions**:
  - Professional office environment
  - Tax professionals working
  - Happy clients
  - Dashboard/software interface

### 2. Hero Animation GIF
- **Location**: `/public/images/hero-animation.gif`
- **Recommended specs**:
  - Format: GIF or animated WebP
  - Resolution: 800x600 or similar
  - File size: Under 2MB
  - Loop: Infinite
- **Content suggestions**:
  - Step-by-step tax filing process
  - Document upload animation
  - Progress indicators
  - Dashboard interactions

## How to Add Files

1. Place your video file in: `public/videos/hero-video.mp4`
2. Place your GIF file in: `public/images/hero-animation.gif`
3. The carousel will automatically use these files

## Current Behavior

Until you add the actual files, the carousel will show:
- **Slide 1**: Static pricing card with animations
- **Slide 2**: Video placeholder with play button animation
- **Slide 3**: GIF placeholder with loading spinner

## Tips

- Keep file sizes small for fast loading
- Use compressed/optimized media
- Test on mobile devices for performance
- Consider using WebP format for better compression
