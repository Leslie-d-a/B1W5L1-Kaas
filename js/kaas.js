var answer;

alert("Voer bij deze antwoorden ja of nee in");

var answer = prompt("Is de kaas geel?");
answer = answer.toLowerCase();
if (answer == "ja") {
	var answer = prompt("Zitten er gaten in?");
	answer = answer.toLowerCase();
	if (answer == "ja") {
		var answer = prompt("Is de kaas belachelijk duur?");
		answer = answer.toLowerCase();
		if (answer == "ja") {
			alert("De kaas is: Emmenthaler");
		}
		else if (answer == "nee") {
			alert("De kaas is: Leerdammer");
		}
		else {
			alert ("U heeft geen ja of nee ingevoerd");
		}

	}
	else {
		var answer = prompt("Is de kaas zo hard als een steen?");
		answer = answer.toLowerCase();
		if (answer == "ja") {
			alert("De kaas is: Pamigiano Reggiano");
		}
		else if (answer == "nee") {
			alert("De kaas is: Goudse kaas");
		}
		else {
			alert ("U heeft geen ja of nee ingevoerd");
		}
	}
}
else if (answer == "nee") {
	var answer = prompt("Heeft de kaas blauwe schimmels?");
	answer = answer.toLowerCase();
	if (answer == "ja") {
		var answer = prompt("Heeft de kaas een korst?");
		answer = answer.toLowerCase();
		if (answer == "ja") {
			alert("De kaas is: Bleu de Rochbaron");
		}
		else if (answer == "nee") {
			alert("De kaas is: Foume d'Ambert");
		}
		else {
			alert ("U heeft geen ja of nee ingevoerd");
		}
	}
	else if (answer == "nee") {
		var answer = prompt("Heeft de kaas een korst?");
		answer = answer.toLowerCase();
		if (answer == "ja") {
			alert("De kaas is: Camembert");
		}
		else if (answer == "nee") {
			alert("De kaas is: Mozzarella");
		}
		else {
			alert ("U heeft geen ja of nee ingevoerd");
		}
	}
	else {
		alert ("U heeft geen ja of nee ingevoerd");
	}
}
else {
	alert ("U heeft geen ja of nee ingevoerd");
}