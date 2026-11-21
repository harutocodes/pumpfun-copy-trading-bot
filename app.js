// copy buttons for donate addresses, clipboard api needs https or localhost,
// github pages is https so we are fine
document.querySelectorAll("button[data-copy]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    navigator.clipboard.writeText(btn.dataset.copy).then(function () {
      btn.textContent = "copied";
      setTimeout(function () { btn.textContent = "copy"; }, 1200);
    }).catch(function () {
      btn.textContent = "select manually";
    });
  });
});
