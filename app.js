

// var name =prompt("what is your name?")
// alert("welcome to the Moviesworld website " + name)

// while(favmovie != "action" && favmovie != "romance" &&favmovie!="comedy" && favmovie!= "drama" && favmovie !="all types")
// {
// var favmovie = prompt("what is your favGenre of movies : action,romance,drama,comedy,all types") }

// if (favmovie == null)
//   alert("please input your favgenre")

//   else {
//   alert("that is good ")
// }

// while(movie !="the old gaurd" && movie !="luca" && movie!="6 underground" && movie !="joker")
// {
// var movie = prompt("what are watch from these movies :the old gaurd,joker,6 underground,luca") }

// var time = prompt("how many time you watch it?")
// if (time >= 1 && time <= 10) {
//   alert("that is great! ,it should be a nice one")
// }
//   var x = prompt("how many times do you want see movie word in this website ")

// for (var i = 0; i < x; i++) { document.write("<h3>" + "movie" + "</h3>") }
// { alert("it is a joke!") }


var star = prompt("how many stars do you give our website to rate it ")
// for(var r=0;0<star;r++) {document.write ( "<h3>" + "good" + "</h3>" )+ " <img src='https://i.pinimg.com/564x/7e/28/89/7e288947c2c179f39398a72fdad19e0c.jpg' alt='stars'> "}



function dFun(num) {
  var output = ''
  for (var h = 0; h < num; h++) {
    console.log(output);
    output = output + "<img src='https://i.pinimg.com/564x/7e/28/89/7e288947c2c179f39398a72fdad19e0c.jpg' alt='stars'>"
  }

  return output;
}

document.write(dFun(star));

// function add (a,b)

//     return a + b;
// }

// // take input from the user
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// // calling function
// let result = add(number1,number2);

// // display the result
// console.log("The sum is " + result);