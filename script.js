function processRating(obj) {
  let index = parseInt(obj.dataset.index);
  let status = parseInt(obj.dataset.status);
  if (status === 0) {
    for (let counter = index; counter >= 1; counter--) {
      let element = document.getElementById("star-" + counter);
      element.dataset.status = 1;
      element.classList.add("active");
    }
  } else {
    for (let counter = index; counter <= 5; counter++) {
      let element = document.getElementById("star-" + counter);
      element.dataset.status = 0;
      element.classList.remove("active");
    }
  }
}
