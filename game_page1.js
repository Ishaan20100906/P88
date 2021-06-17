player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player_1_score = 0;
player_2_score = 0;
document.getElementById("player1name").innerHTML = player1name + " : ";
document.getElementById("player2name").innerHTML = player2name + " : ";
document.getElementById("player1score").innerHTML = player_1_score;
document.getElementById("player2score").innerHTML = player_2_score;
document.getElementById("playerquestion").innerHTML = "Question turn - " + player1name;
document.getElementById("playeranswer").innerHTML = "Answer turn - " + player2name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn = "number1";
answer_turn = "number2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "number1")
        {
            update_player1_score = player_1_score + 1;
            document.getElementById("player1score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player_2_score + 1;
            document.getElementById("player2score").innerHTML = update_player2_score;
        }
        if(question_turn == "number1")
        {
            question_turn = "number2";
            document.getElementById("playerquestion").innerHTML = "Question turn - " + player2name;
        }
        else
        {
            question_turn = "number1";
            document.getElementById("playerquestion").innerHTML = "Question turn - " + player1name;
        }
        
        if(answer_turn == "number1")
        {
            answer_turn = "number2";
            document.getElementById("playeranswer").innerHTML = "Answer turn - " + player2name;
        }
        else
        {
            answer_turn = "number1";
            document.getElementById("playeranswer").innerHTML = "Answer turn - " + player1name;
        }
    }
}