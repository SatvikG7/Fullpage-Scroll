const up = document.querySelector(".btn-1");
const c = document.querySelector(".currentPage");
const down = document.querySelector(".btn-3");
var i = 1;
c.innerHTML = i;
up.addEventListener("click", () => {
  if (i > 1) {
    window.location.href = "#page-" + (i - 1);
    i--;
    c.innerHTML = i;
  }
});
down.addEventListener("click", () => {
  if (i < nop) {
    window.location.href = "#page-" + (i + 1);
    i++;
    c.innerHTML = i;
  }
});
