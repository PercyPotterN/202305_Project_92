function addUser() {
    P1N = document.getElementById("P1LG").value;
    P2N = document.getElementById("P2LG").value;

    localStorage.setItem("Player 1 Name", P1N);
    localStorage.setItem("Player 2 Name", P2N);

    window.location = "quiz_game_page.html";
}