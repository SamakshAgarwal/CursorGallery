const images = document.getElementsByClassName("image");
let idx = 0,
  prevX = 0,
  prevY = 0;

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.zIndex = idx;

  image.style.display = "block";

  prevX = x;
  prevY = y;
};

const distanceFromLast = (x, y) => {
  return Math.hypot(x - prevX, y - prevY);
};

onmousemove = ({ clientX, clientY }) => {
  //   console.log(e.clientX);
  if (distanceFromLast(clientX, clientY) > 200) {
    let len = images.length;
    const head = images[idx % len],
      tail = images[(idx - 5) % len];
    activate(head, clientX, clientY);
    if (tail) tail.style.display = "none";
    idx++;
  }
};
