// alert('hello');
// console.log('hello');
// let textdom = 'BOND JAMES1'; 
// document.getElementById("new").innerHTML = textdom;

//challenge 1: age in days
//ageInDays();

function ageInDays() {
    var birthYear = prompt('Which year were you born?');
    var ageInDays = (2020-birthYear)*365;
    //console.log(ageInDays);
    //return ageInDays;
    //document.getElementById("ageInDays").innerHTML = ageInDays;
    var h1 = document.createElement('h1');
    var textAns = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAns);
    h1.setAttribute('style', 'color:Orange');
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    try {
        document.getElementById('ageInDays').remove();
    } catch { }
}

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//challenge 3: Rock Paper Scissors

function rpsGame(yourChoice) {
    // console.log(yourChoice.src);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(Math.floor(Math.random()*3));
    console.log(humanChoice);
    console.log(botChoice);
    var results = decideWinner(humanChoice, botChoice);
    // console.log(results);
    // console.log(results[0]);
    var message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'] [number]
}

function decideWinner(humanChoice, botChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper':0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors':0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock':0}
    };
    var yourScore = rpsDatabase[humanChoice] [botChoice];
    var computerScore = rpsDatabase[botChoice] [humanChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0)
        return {'message':'You Lose', 'color': 'red'};
    else if (yourScore == 1)
        return {'message':'You Win!!', 'color': 'green'};
    else 
        return {'message':'You Tied', 'color': 'orange'};
}

function rpsFrontEnd(yourChoice_id, botChoice, message) {
    
    // rockclone.after(clone);
    // rockclone.after(clone);
    // rockclone.after(clone);

    var rock = document.getElementById('rock');
    rock.removeAttribute("onclick");

    var rockclone = rock.cloneNode(false);
    rockclone.id = 'rockans';
    // console.log(rockclone);

    var paper = document.getElementById('paper');
    paper.removeAttribute("onclick");

    var paperclone = paper.cloneNode(false);
    paperclone.id = 'paperans';
    // console.log(paperclone);

    var scissors = document.getElementById('scissors');
    scissors.removeAttribute("onclick");
    
    var sciclone = scissors.cloneNode(false);
    sciclone.id = 'scians';
    // console.log(sciclone); 
    
    //rock scissors: rock
    //scissors paper : scissors
    //paper rock: paper


    var imagesDatabase = {
        'rock' : rock,
        'paper' : paper,
        'scissors' : scissors
    }
    // console.log(yourChoice_id);
    // console.log(botChoice);
    // console.log(imagesDatabase[yourChoice_id]);
    // console.log(imagesDatabase[botChoice]);

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    var humandivchild = humanDiv.appendChild(imagesDatabase[yourChoice_id]);

    if (yourChoice_id == botChoice) {
        // console.log("In if");
        if (botChoice == 'rock')
            var botdivchild = botDiv.appendChild(rockclone);
        if (botChoice == 'paper')
            var botdivchild = botDiv.appendChild(paperclone);
        if (botChoice == 'scissors')
            var botdivchild = botDiv.appendChild(sciclone);   
        
    } else {
        // console.log("In else");
        var botdivchild = botDiv.appendChild(imagesDatabase[botChoice]);
    }
    


    // console.log(humandivchild);
    // console.log(botdivchild);
    
    document.getElementById('flex-box-rps-div').appendChild(humandivchild);
    
    var messageDiv = document.createElement('div');
    var msg = document.createElement('h5');
    
    var textmsg = document.createTextNode(message['message']);
    msg.setAttribute("style","color:"+message['color']+";");
    messageDiv.appendChild(msg).append(textmsg);

    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    
    document.getElementById('flex-box-rps-div').appendChild(botdivchild);

    // humanDiv.appendChild(imagesDatabase[yourChoice_id]);
    // console.log(messageDiv.appendChild(message['message']));
    // botDiv.appendChild(imagesDatabase[botChoice]);
    
    // humanDiv.innerHTML = "<img src='" + imagesDatabase[yourChoice_id] + "' height=100 width=100 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    // messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 20px; padding: 40px; '>" + message['message'] + "</h1>"
    // botDiv.innerHTML = "<img src='" + imagesDatabase[botChoice] + "' height=100 width=100 style='box-shadow: 0px 10px 50px rgba(243, 38, 233, 1);'>"

    // document.getElementById('flex-box-rps-div').appendChild(humanDiv.appendChild(imagesDatabase[yourChoice_id]));
    // document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    // document.getElementById('flex-box-rps-div').appendChild(botDiv.appendChild(imagesDatabase[botChoice]));

}




