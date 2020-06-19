var names=["priya","Jessica","Krishna","James","jishnu","Seetha","Latha","John","Joker","Neethu"];
for (var name in names){
	if (names[name].startsWith("J")||names[name].startsWith("j")){
		console.log("Good Bye "+names[name]);
	}
	else{
		console.log("Hello "+names[name]);
	}
}