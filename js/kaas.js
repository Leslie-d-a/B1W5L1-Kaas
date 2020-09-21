var answer;

alert("Voer bij deze antwoorden ja of nee in");

var answer = prompt("Is de kaas geel?");
if (answer == "ja") {
	var answer = prompt("Zitten er gaten in?");
	if (answer == "ja") {
		var answer = prompt("Is de kaas belachelijk duur?");
		if (answer == "ja") {
			alert("Emmenthaler");
		} else if (answer == "nee") {
			alert("Leerdammer");
		} else {
			alert ("U heeft geen ja of nee ingevoerd");
		}

	} else {
		var answer = prompt("Is de kaas zo hard als een steen?");
		if (answer == "ja") {
			alert("Pamigiano Reggiano");
		} else if (answer == "nee") {
			alert("Goudse kaas");
		} else {
			alert ("U heeft geen ja of nee ingevoerd");
		}
	}
} else if (answer == "nee") {
	var answer = prompt("Heeft de kaas blauwe schimmels?");
	if (answer == "ja") {
		var answer = prompt("Heeft de kaas een korst?");
		if (answer == "ja") {
			alert("Bleu de Rochbaron");
		} else if (answer == "nee") {
			alert("Foume d'Ambert");
		} else {
			alert ("U heeft geen ja of nee ingevoerd");
		}
	} else if (answer == "nee") {
		var answer = prompt("Heeft de kaas een korst?");
		if (answer == "ja") {
			alert("Camembert");
		} else if (answer == "nee") {
			alert("Mozzarella");
		} else {
			alert ("U heeft geen ja of nee ingevoerd");
		}
	} else {
		alert ("U heeft geen ja of nee ingevoerd");
	}
} else {
	alert ("U heeft geen ja of nee ingevoerd");
}