const gallery = [
  {
    "src": "https://picsum.photos/id/10/500/350",
    "caption": "Mountain lake at dawn"
  },
  {
    "src": "https://picsum.photos/id/29/500/350",
    "caption": "Forest trail in autumn"
  },
  {
    "src": "https://picsum.photos/id/33/500/350",
    "caption": "City skyline at night"
  },
  {
    "src": "https://picsum.photos/id/42/500/350",
    "caption": "Desert dunes"
  },
  {
    "src": "https://picsum.photos/id/48/500/350",
    "caption": "Old stone bridge"
  },
  {
    "src": "https://picsum.photos/id/54/500/350",
    "caption": "Coastline cliffs"
  },
  {
    "src": "https://picsum.photos/id/64/500/350",
    "caption": "Snowy pine forest"
  },
  {
    "src": "https://picsum.photos/id/76/500/350",
    "caption": "Rolling green hills"
  },
  {
    "src": "https://picsum.photos/id/96/500/350",
    "caption": "Foggy harbor"
  }
]

const wrapper = document.getElementById("wrapper")
wrapper.style.display = "grid";
wrapper.style.gridTemplateColumns = "repeat(3, 1fr)";
wrapper.style.justifyItems = "center";

const popUp = document.getElementById("pop");

const elements = gallery.map((itm) => {
  const ele = document.createElement("div");
  const img = document.createElement("img")
  img.src = itm.src; 
  img.alt = itm.caption
  ele.appendChild(img)
  return ele;
});

let index = 0;

function popAppear(idx) {
  if (idx >= 0) {
    popUp.style.display = "flex";
    index = idx;
    view.innerHTML = "";
    const bigPic = document.createElement("img");
    bigPic.src = gallery[idx].src;
    bigPic.alt = gallery[idx].caption;
    const caption = document.createElement("p");
    caption.textContent = gallery[idx].caption;
    const close = document.createElement("button");
    close.textContent = "X";
    
    view.appendChild(caption);
    view.appendChild(bigPic);
    view.appendChild(close);
  }
}

wrapper.addEventListener("click", (event) => {
  popAppear(elements.indexOf(event.target));
});

popUp.addEventListener("click", (event) => {
  if (event.target.id === "leftButt") {
    index = index - 1;
    if (index < 0) {
      index = gallery.length - 1;
    }
    popAppear(index);
  } else if (event.target.id === "rightButt") {
    index = index + 1;
    if (index >= gallery.length) {
      index = 0;
    }
    popAppear(index);
  } else {
    popUp.style.display = "none";
  }
});

elements.forEach((itm) => {
  document.getElementById("wrapper").appendChild(itm);
});

