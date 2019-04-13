(function () {
  if (!self.createImageBitmap) return false
  
  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
  const blob = fetch(webpData).then(r => r.blob())
  if(createImageBitmap(blob).then(() => true, () => false)) {
    let styleElement = document.createElement('style')
    styleElement.innerHTML = `
    .o-header::before {
      background: url(assets/86aa6506c4dd09c3b9539117187e7637.svg),url(assets/c00512cc37a81d43b54ff80dfc81a11e.svg),url(assets/c2d9111c39a4a96c384af5a9c4d74d6f.svg),url(assets/1d5a0fbfff7e519ebf6769e8ac281003.webp) !important; 
      background-repeat: no-repeat!important;
      background-position: -944px -230px, 1040px -420px, 480px 576px, center!important;
      background-size: auto, auto,auto, cover!important;
    }
    div[data-project='clockAnimated'] .c-desktop-img {
      background-image: url(assets/2fd535ceb1c4bc2c358eb595d311c662.webp)!important;
    }
    div[data-project='clockAnimated'] .c-mobile-img {
      background-image: url(assets/6361a264a81ba9c7e2a63566859dbcf2.webp)!important;
    }
    div[data-project='SW19'] .c-desktop-img {
      background-image: url(assets/63b1fffa723388168769f54c3fcffb62.webp)!important;
    }
    div[data-project='SW19'] .c-mobile-img {
      background-image: url(assets/b4517910e12a106b8764a511f944ff31.webp)!important;
    }
    
    `
    document.head.appendChild(styleElement)
  }
})()