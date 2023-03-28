export default function myImageLoader({ src, width, quality }) {
  return `https://research.AbhijithGanesh.com/${src}?w=${width}&q=${quality || 75}`;
}
