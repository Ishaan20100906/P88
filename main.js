function addUsername() {
    player1name = document.getElementById("player1input").value;
    player2name = document.getElementById("player2input").value;
    localStorage.setItem("player1name", player1name);
    localStorage.setItem("player2name", player2name);
    window.location = "game_page1.html";
}



