let selection = ""
let computer_selection = ""
let user_points_div = document.getElementById('user_points')
let computer_points_div = document.getElementById('computer_points')
let game_win_info = document.getElementById('game_win_info')
let user_points = 0
let computer_points = 0


function get_select(select_user){
    const computer_data = get_select_computer()
    game_win_info.innerHTML = ""
    if(select_user == 1){
        selection = "🖐"
    }else if(select_user == 2){
        selection = "👊"
    }else{
        selection = "✌"
    }
    if(computer_data == 1){
        computer_selection = "🖐"
    }else if(computer_data == 2){
        computer_selection = "👊"
    }else{
        computer_selection = "✌"
    }
    if(select_user == computer_data){
        game_win_info.innerHTML = `There is no winner, <b>it's a draw</b>`
    }else if(select_user == 1 && computer_data == 2){
        game_win_info.innerHTML = `The winner is the <b>Player</b> with ${selection}`
        up()
    }else if(select_user == 2 && computer_data == 1){
        game_win_info.innerHTML = `The winner is the <b>Computer</b> with ${computer_selection}` 
        cp()
    }else if(select_user == 1 && computer_data == 3){
        game_win_info.innerHTML = `The winner is the <b>Computer</b> with ${computer_selection}` 
        cp()
    }else if(select_user == 3 && computer_data == 1){
        game_win_info.innerHTML = `The winner is the <b>Player</b> with ${selection}` 
        up()
    }else if(select_user == 2 && computer_data == 3){
        game_win_info.innerHTML = `The winner is the <b>Player</b> with ${selection}` 
        up()
    }else if(select_user == 3 && computer_data == 2){
        game_win_info.innerHTML = `The winner is the <b>Computer</b> with ${computer_selection}` 
        cp()
    }

}


function cp(){
    computer_points ++
    computer_points_div. innerHTML = computer_points 
}
function up(){
    user_points ++
    user_points_div. innerHTML = user_points
}    
function get_select_computer(){
    var x = Math.random()
    var x_3 = x * 3
    var select_computer = Math.floor(x_3 + 1)
    return select_computer
}

function reset(){
    game_win_info.innerHTML = ""
    user_points = 0
    computer_points = 0
    user_points_div.innerHTML = user_points
    computer_points_div.innerHTML = user_points
}


