var name = prompt("what is you name?")
console.log(name)

alert("welcome to the MoviesWorld website " + name)

var favmovie = prompt("what is your favGenre of movies : action,romance,drama,comedy,all types")

if (favmovie == null) {
  alert("please input your favgenre")

  var favmovie = prompt("what is your favGenre of movies : action,romance,drama,comedy,all types")
}
else {
  alert("that is good ")

}

var movie = prompt("what are watch from these movies :the old gaurd,joker,6 underground,luca")
var time = prompt("how many time you watch it?")
if (time >= 1 && time <= 10) {
  alert("that is great! ,it should be a nice one")
}
var x = prompt("how many times do you want see movie world in this website ")

for (var i = 0; i < x; i++) { document.write("<h3>" + "movie" + "</h3>") }
{ alert("it is a joke!") }


