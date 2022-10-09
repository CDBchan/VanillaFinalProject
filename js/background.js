const images = [
  "https://wallpapers.com/images/hd/hd-desktop-waves-on-boulders-uv4se71dowhua21i.webp",
  "https://wallpapers.com/images/hd/fall-weather-sunset-cf10q213cauiieen.webp",
];

const pickedImageNumber = Math.floor(Math.random() * images.length);

document.body.style.backgroundImage = `url(${images[pickedImageNumber]})`;
document.body.style.backgroundRepeat = `no-repeat`;
document.body.style.backgroundSize = `cover`;
