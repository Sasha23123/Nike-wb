let switchMode = document.getElementById('switchMode');

switchMode.onclick = function() {
      let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "main.css") {
        theme.href = "main-white.css";
    } else{
        theme.href = "main.css";
    }        
}