/// execute_script.js
window.addEventListener("keydown", event => {
  if (event.ctrlKey && event.which === 89) {
    let code = prompt("Eval:");
    eval(code);
  }
});
/// execute2_scripts.js
window.addEventListener("keydown", event => {
  if (event.ctrlKey && event.which === 81) {
    var x = document.createElement("script");
    x.src = "https://cdn.jsdelivr.net/gh/SnowLord7/devconsole@master/main.js";
    x.onload = alert("Loaded Developer Console!");
    document.head.appendChild(x);
  }
});
/// execute3_script.js
window.addEventListener("keydown", event => {
  if (event.ctrlKey && event.which === 88) {
    document.write(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://onhellofficial.github.io/hacks/UHack/globals.css" />
    <link rel="stylesheet" href="https://onhellofficial.github.io/hacks/UHack/style.css" />
  </head>
  <body>
    <div class="desktop">
      <div class="div">
        <div class="text-wrapper">New Hack by hellom38</div>
        <p class="hack-list-ctrl-y">
          <span class="span"
            >Hack List:<br /><br />Ctrl + y = Inject javascript<br /><br />Ctrl + x = This page<br /><br />Ctrl + q =
            Open console<br /><br
          /></span>
          <span class="text-wrapper-2">More coming soon....</span>
        </p>
      </div>
    </div>
  </body>
</html>
`)
  }
});

