player1_name= localStorage.getItem("player1");
player2_name= localStorage.getItem("player2");

player1_score=0;
player2_score=0;

document.getElementById("player1_names").innerHTML = player1_name;
document.getElementById("player2_names").innerHTML = player2_name;

document.getElementById("playerquestion").innerHTML = "Question turn : "+ player1_name;
document.getElementById("playeranswer").innerHTML = "Answer turn : "+ player2_name;


function Send() {
    number1= document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer =parseInt(number1)* parseInt(number2);
    console.log("actual answer" + actual_answer);

    question_number = "<h4>" +number1 + "X" +number2+"<h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    Check_button = "<br><br><button class='btn-info' onclick='check()'>Check</button>";
row = question_number+input_box+Check_button;

document.getElementById("output").innerHTML=row;

document.getElementById("number1").value=" ";
document.getElementById("number2").value=" ";
    
};


question_turn =  "player1";
answer_turn = "player2";


function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){

        if(answer_turn == "player1")
        {

            update_player1_score= player1_score+1;
            document.getElementById("player1_scores").innerHTML = update_player1_score;
        }

        else
        {
            
            update_player2_score= player2_score+1;
            document.getElementById("player2_scores").innerHTML = update_player2_score;
        }

    }
    if(answer_turn=="player1"){
        answer_turn= "player2";
        document.getElementById("playeranswer").innerHTML= "Answer turn: " + player2_name;
    }

    else {
        answer_turn="player1";
        document.getElementById("playeranswer").innerHTML ="Answer turn: " +player1_name;
    }

    if(question_turn=="player2"){
        question_turn = "player1";
        document.getElementById("playerquestion").innerHTML="Question turn: "+ player1_name;
    
    }

    else{
        question_turn="player2";
        document.getElementById("playerquestion").innerHTML="Question turn: "+player2_name;
    }
}