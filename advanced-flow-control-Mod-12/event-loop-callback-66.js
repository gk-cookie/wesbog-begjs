console.log("starting");
setTimeout(function() {
  console.log("running");
}, 2000);
console.log("ending");

const go = document.querySelector(".go");

go.addEventListener("click", function(e) {
  const el = e.currentTarget;
  el.textContent = "GO!";
  console.log(el);
  setTimeout(function() {
    el.classList.add('circle');
  }, 2000);
});