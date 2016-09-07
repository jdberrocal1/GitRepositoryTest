function sum(numList){
 	var result = 0;
 	numList.forEach(function(num){
 		result += num;
 	});
 
 	return result;
 }
 

 console.log(sum([1,2,3,4,5,6]));]//local otro cambio Carlos


function mayor(numList){
	var result = 0;
	numList.forEach(function(num){
		if(result < num){
			result = num;
		}
	});

	return result;
}
console.log(mayor([1,2,3,4,5]));


function multiplicacion(numList){
	/*Carlos Villafuerte Diaz*/
	var result = 1;
	for (var i numList.length - 1; i >= 0; i--) {
		result *= numList[i]
	};
	return result;
}

console.log(multiplicacion([1,2,3,4,5]));


function menor(numList){
        var result = numList[0];
        numList.forEach(function(num)
        {
                if (result>num)
                        result=num;
        });

        return result;
}

console.log(menor([1,2,3,4,5]));

