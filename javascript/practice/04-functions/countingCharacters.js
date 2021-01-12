function countingCharacters(stringToCOunt) {
	console.log(stringToCOunt + " has " + stringToCOunt.length + " characters.")
}

function countingCharacters2(stringToCount, characterTofind) {
	var count = 0;
	for (var position =0; position< stringToCount.length;position++){
		if (stringToCount[position] == characterTofind){
			count++;
		}
	}
	console.log("String to search in: " + characterTofind);
    console.log("Character to find: " + characterTofind);
    console.log("Number of times the character appears: " + count);
}

function countingCharacters3(str,search) {
	var count = 0;
	var numChar = search.length;
	var lastIndex = str.length - numChar + 1;

	if (numChar > str.length) {
		count = 0;
	}

	else {
		for(var position = 0; position < lastIndex;position++){
			if(str.substring(position,position+numChar) == search) {
				count++;
			} 
		}
	}
	return count;

}