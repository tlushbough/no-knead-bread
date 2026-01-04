# How to Add Images to Your Website

## Quick Steps

### 1. Add Images to the `images/` Folder

Simply drag and drop your bread photos into:
```
no-knead-bread-site/images/
```

Name them like:
- `bread1.jpg`
- `bread2.jpg`
- `bread3.jpg`
- etc.

### 2. The Gallery is Already Set Up!

I've already updated [index.html](index.html#L119-L136) to display images from the `images/` folder.

The code looks for:
- `images/bread1.jpg`
- `images/bread2.jpg`
- `images/bread3.jpg`
- `images/bread4.jpg`
- `images/bread5.jpg`
- `images/bread6.jpg`

### 3. View Your Website

Open `index.html` in your browser and scroll to the Gallery section. Your images will appear!

## ✨ Gallery Features

### Click to View Full Size
- **Click any image** to open it in a full-screen lightbox
- **Navigate with arrow keys** (← →) or on-screen buttons
- **Press ESC** to close
- **Click outside** the image to close

### Image Display Best Practices
- **Full thumbnail view**: Images show completely without cropping (`object-fit: contain`)
- **Maintains aspect ratio**: No distortion, images keep their original proportions
- **Clean background**: Light background color fills empty space for portrait/landscape photos

## Image Tips

### Best Image Sizes
- **Square images work best** (1:1 aspect ratio)
- Recommended: 800x800px to 1200x1200px
- Format: JPG or PNG
- Keep file size under 500KB for fast loading

### How to Resize Images (Mac)

1. Open image in **Preview** app
2. Tools → Adjust Size
3. Set width to 1000px (height will adjust automatically if you check "Scale proportionally")
4. Save

### Adding More Images

To add more gallery items, edit [index.html](index.html):

```html
<div class="gallery-item">
    <img src="images/bread7.jpg" alt="Description of bread">
</div>
```

Just copy one of the existing `<div class="gallery-item">` blocks and change:
- The `src="images/FILENAME.jpg"`
- The `alt="Description"` text

## Adding Images to Recipe Cards

To replace recipe card placeholders, edit [index.html](index.html#L68-L105):

Find this:
```html
<div class="recipe-image-placeholder">
    <p>Classic White</p>
</div>
```

Replace with:
```html
<img src="images/classic-bread.jpg" alt="Classic white bread" style="width: 100%; height: 200px; object-fit: cover;">
```

## Adding Images to Shop Page

Same process for [shop.html](shop.html)! Replace:

```html
<div class="placeholder-img">
    <p>Starter Kit</p>
</div>
```

With:
```html
<img src="images/starter-kit.jpg" alt="Starter Kit Contents" style="width: 100%; height: 250px; object-fit: cover;">
```

## Free Stock Photos for Testing

If you don't have bread photos yet, try these free sites:
- [Unsplash](https://unsplash.com/s/photos/bread)
- [Pexels](https://www.pexels.com/search/bread/)
- [Pixabay](https://pixabay.com/images/search/bread/)

## Common Issues

### Images Don't Show
- ✅ Check file name matches exactly (case-sensitive!)
- ✅ Make sure images are in the `images/` folder
- ✅ Try refreshing the page (Cmd+R or Ctrl+R)

### Images Look Stretched
- The CSS uses `object-fit: cover` which crops images to fit
- Use square images for best results

### Images Load Slowly
- Resize images to be smaller (under 1MB each)
- Use JPG instead of PNG for photos
