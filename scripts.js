function buton(){
        var input = document.getElementById("text").value;
        document.getElementById("time").innerText = input
        document.getElementById("text").value = ""
        var p = document.getElementById("time");
        var ses = new Audio("tetris-theme.mp3");
        var zaman = input
        var inter = setInterval(function(){zaman--,document.getElementById("time").innerText = zaman},1000)
        setInterval(function(){if(zaman == -1){ses.play(),alert("zaman doldu!"),clearInterval(inter),zaman++,document.getElementById("time").innerText = ""}},1000)
        }
