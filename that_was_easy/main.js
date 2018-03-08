function sayThatWasEasy() {
    var thatWasEasy = new Audio("bizzare.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);
