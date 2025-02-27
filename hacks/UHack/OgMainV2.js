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
    document.write(`<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link rel="stylesheet" href="https://onhellofficial.github.io/hacks/UHack/globals.css" /> <link rel="stylesheet" href="https://onhellofficial.github.io/hacks/UHack/style.css" /> <title>Link Creator</title> </head><body> <div class="desktop"> <div class="div"> <div class="text-wrapper">New Hack by hellom38</div> <p class="hack-list-ctrl-y"> <span class="span" >Hack List:<br /><br />Ctrl + y = Inject javascript<br /><br />Ctrl + x = This page<br /><br />Ctrl + q = Open console<br /><br /></span> <span class="text-wrapper-2">More coming soon....</span> </p> <div class="container"> <h2>Link Creator</h2> <input type="text" id="HolderlinkInput" placeholder="Holder URL(Leave blank for current page)"> <br> <input type="text" id="linkInput" placeholder="Enter a URL"> <button onclick="openLink()">Go</button> </div> </div> </div> <script> function openLink() { let url = document.getElementById('linkInput').value; let holder_url = document.getElementById("HolderlinkInput").value; if (url) { if (!url.startsWith('http://') && !url.startsWith('https://')) { url = 'https://' + url; } if (holder_url) { var x = window.open(holder_url, '_blank'); x.document.write("<iframe src='"+ url + "' style='height: 100%; width: 100%;'>")} else { document.write("<iframe src='"+ url + "' style='height: 100%; width: 100%;'>") } } else { alert('Please enter a valid URL'); } } </script></body></html>`)
  }
});
