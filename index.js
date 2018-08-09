const  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay()

    {
      var  i; 
    for ( i = 0; i < musicians.length; i++){
    return "musicians[i] "  + "instruments[i]"
}
    
}
function theBeatlesPlay(musicians, instruments){
  var emptyArray = []
  for (let  i = 0; i < musicians.length ; i++){
    
 emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
    
  }
  return emptyArray; 
}
function johnLennonFacts(facts){
  let i = 0;
  while (i<facts.length ) {
      facts[i] += "!!!" 
    	i++; 
  }
    return facts;

}
function iLoveTheBeatles(number){
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    }while (number<15)
    return emptyArray;
  }