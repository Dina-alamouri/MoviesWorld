var name = prompt ("what is your name?")
console.log(name) 
alert("Welcome to the movieworld "  + name)

var favMovie = prompt("what is your favGenre from movies?              action,comedy,adventure,drama,romance,all of above")
 
  if (favMovie == null)
  
   {alert ("please input answer")}
 
 var favMovie = prompt("what is your favGenre from movies?              action,comedy,adventure,drama,romance,all of above") 
 
 var x = ("Great choice! You will find all kinds of movies you want on this website.") 
if (favMovie !=null)
{document.write ("<h4>" + x + "</h4>" )} 

var r = prompt("Approximately ,how many time have you watched the same movie? ")

if (r >= 1 && r <=10 ){
  alert("That is great , It sure is a nice movie")

 }

else{
   alert("that is so many times, you seem to be a top fan ")
}

var watch =prompt("what you have watched form these movies : the old guard,6 underground,joker,luca")


var time=prompt("how many times do you want to watch it again? ")

for(var i = 0 ; i < time; i++)
{

document.write("<div>" + "<h4>" + watch +"</h4>")


}
alert("Itis a joke!")

