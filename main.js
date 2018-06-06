var data=[],
values={};
function evaluar(){
	var words;
	a = [];
	var i = /(Dim)$/;
	var c1 = /(Const)\s([a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(integer|byte|type|short|word|longword|longint)\s(=)\s([0-9]+[0-9]*)$/; //Declaracion de integer
	//var c=/(Const)\s([a-zA-Z]+[0-9a-zA-Z_])\s(as)\s(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)\s(=)\s([0-9a-zA-Z])$/;
	var c2 = /(Const)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(float)\s(=)\s(([0-9]+[0-9]*)+[.,]+[0-9])$/; // Declaracion de float
	var c3 = /(Const)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(char)\s(=)\s([a-zA-Z])$/; //Declaracion de char
	var p = /(Dim)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)$/; // 	Declaracion de variable normal
	var sum = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))+$/;
	var resta = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))+$/;
	var mult = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\*\s([0-9]+[0-9]*))+$/;
	var fdiv = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s(\/)\s([0-9]+[0-9]*))$/;
	words = document.getElementById('campoInput').value.trim();
	var e1 = /(Dim)$/;
	var e2 = /(Dim)\s(as)\s(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)$/; // 
	var e3 = /(Dim)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)$/;
	var e4 = /(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)$/;
	var e5 = /(im|di|d|dm|Di|D|IM|DIM|DIm|DiM|dim|din|Din)$/;
	var e6 = /(cons|con|c|cinst|co|cpnst|C|Cons|Con|CON|Cinst|Cpnst|Co|const)$/;
	var e7 = /([0-9a-zA-Z_])$/;
	var e8 = /(Const)\s(as)\s(integer|byte|type|short|word|longword|longint)\s(=)\s([0-9])$/
	var e9 = /(Const)\s([a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(integer|byte|type|short|word|longword|longint)\s(=)\s([0-9]+[.,]+[0-9])$/;
	var e10 = /(as)$/;
	var e11 = /(Const)$/;
	var e12 = /(Const)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(char)\s(=)\s([0-9]+[.,]+[0-9]|([0-9]))$/;
	var e13 = /(Const)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(float)\s(=)\s([0-9])$/
	var e14 = /(=)$/;
	var e15 = /(Const)\s([a-zA-Z]+[0-9a-zA-Z_])\s(as)\s(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)\s([0-9]+[0-9]*)$/;
	var e16 = /([a-zA-Z]+[0-9a-zA-Z_]*)$/;
	var e17 = /([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)$/;
	var e18 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(integer|byte|type|short|word|longword|longint)\s(=)\s([0-9])$/; //int
	var e19 = /([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(float)\s(=)\s([0-9]+[.,]+[0-9]|[0-9])$/; //float
	var e20 = /([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(char)\s(=)\s([a-zA-Z])$/; //char
	var e21 = /([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(char)\s(=)\s([0-9]+[.,]+[0-9]|[0-9])$/
	var e22 = /(char)$/;
	var e23 = /(Const)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(float)\s(=)\s(([0-9]+[0-9]*))$/;
	var ee1= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s\+\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;
	var ee2= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s\-\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;
	var ee3= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s\*\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;
	var ee4= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s(\/)\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;
	a=words.split(/\s/);
	
	if (p.test(words) == false) {
		if (c1.test(words) == false) {
			if (c2.test(words) == false) {
				if (c3.test(words) == false) {
					if (sum.test(words) == false) {
						if (resta.test(words) == false) {
							if (mult.test(words) == false) {
								if (fdiv.test(words) == false) {
									console.log(a);
									alert('Declaracion Invalida');
									
									if(e23.test(words)==true){
										console.log("ERROR:Valor de constante invalido para tipo de variable");
									}
									if(ee1.test(words)==true){
										console.log("ERROR: Esta sumando variables no declaradas");
									}
									if(ee2.test(words)==true){
										console.log("ERROR: Esta restando variables no declaradas");
									}
									if(ee3.test(words)==true){
										console.log("ERROR: Esta multiplicando variables no declaradas");
									}
									if(ee4.test(words)==true){
										console.log("ERROR: Esta dividiendo variables no declaradas");
									}
									if (a[0].match(e16)) {
										if (a[0].match(e1)) {

											if (e2.test(words) == true) {
												console.log("ERROR:Declare nombre de la variable");
											}
											if (e3.test(words) == true) {
												console.log("ERROR:Falta el igualador as");
											}
											if (a[2] != "as") {
												console.log("ERROR:Falta el igualador as");
											}
											if (e4.test(a[3]) == false) {
												console.log("ERROR:Tipo de variable no valida");
											}
											if (e7.test(a[1]) == false) {
												console.log("ERROR: Caracter no valido en nombre de variable");
											}

										}
									}
									if (e17.test(words) == true) {
										console.log("ERROR: Falta un inicializar Dim/Const");
									}
									if (e18.test(words) == true) {
										console.log("ERROR: Falta un inicializar Dim/Const");
									}
									if (e19.test(words) == true) {
										console.log("ERROR: Falta un inicializar Dim/Const");
									}
									if (e20.test(words) == true) {
										console.log("ERROR: Falta un inicializar Dim/Const");
									}
									if (e21.test(words) == true && e11.test(a[0]) == false) {

										console.log("ERROR: Falta un inicializar Const");
									}
									if (a[0].match(e16)) {
										if (a[0].match(e5)) {
											if (e1.test(a[0]) == false) {
												console.log("ERROR: La manera correcta es Dim, corrijala en la posicion:" + a[0]);
											}
											if (e2.test(words) == true) {
												console.log("ERROR:Declare nombre de la variable");
											}
											if (e3.test(words) == true) {
												console.log("ERROR:Falta el igualador as");
											}
											if (e4.test(a[3]) == false) {
												console.log("ERROR:Tipo de variable no valida");
											}
											if (e7.test(a[1]) == false) {
												console.log("ERROR: Caracter no valido en nombre de variable");
											}
										}
									}
									if (a[0].match(e16)) {
										if (a[0].match(e11)) {
											if (e8.test(words) == true) {
												console.log("ERROR:Declare nombre de la variable");
											}
											if (e9.test(words) == true) {
												console.log("ERROR: Valor de constante invalido para tipo de variable");
											}
											if (e10.test(a[2]) == false) {
												console.log("ERROR:Falta el igualador as");
											}
											if (e7.test(a[1]) == false) {
												console.log("ERROR: Caracter no valido en nombre de variable");
											}
											if (e11.test(a[0]) == false) {
												console.log("ERROR: La manera correcta es Const, corrijala en la posicion:" + a[0]);
											}
											if (e4.test(a[3]) == false) {
												console.log("ERROR:Tipo de variable no valida");

											}
											if (e12.test(words) == true) {
												console.log("ERROR: Valor de constante invalido para tipo de variable");
											}
											if (e13.test(words) == true) {
												console.log("ERROR: Esta declarando como float una variable integer")
											}
											if (e14.test(a[4]) == false) {
												console.log("ERROR: Falta el signo de igualacion =");
											}
										}
									}
									if (a[0].match(e16)) {
										if (a[0].match(e6)) {
											if (e8.test(words) == true) {
												console.log("ERROR:Declare nombre de la variable");
											}
											if (e9.test(words) == true) {
												console.log("ERROR: Valor de constante invalido para tipo de variable");
											}
											if (e10.test(a[2]) == false) {
												console.log("ERROR:Falta el igualador as");
											}
											if (e7.test(a[1]) == false) {
												console.log("ERROR: Caracter no valido en nombre de variable");
											}
											if (e11.test(a[0]) == false) {
												console.log("ERROR: La manera correcta es Const, corrijala en la posicion:" + a[0]);
											}
											if (e4.test(a[3]) == false) {
												console.log("ERROR:Tipo de variable no valida");

											}
											if (e12.test(words) == true) {
												console.log("ERROR: Valor de constante invalido para tipo de variable");
											}
											if (e13.test(words) == true) {
												console.log("ERROR: Esta declarando como float una variable integer")
											}
											if (e14.test(a[4]) == false) {
												console.log("ERROR: Falta el signo de igualacion =");
											}

											if (a[0].match(e16)) {
												if (e14.test(a[1]) == false) {
													if (e6.test(a[0]) == false) {
														console.log("ERROR: falta el =")
													}
												}
											}
										}
									}

								}
							}
						}

					}
				}
			}
		}
	}
	if(p.test(words)==false){
		if(c1.test(words)==true){
			Materialize.toast('Declaracion de Constante Valida');
			Materialize.toast('Valor de la constante '+a[1]+' = '+a[5]);
			data.push(values={variable: a[1], resultado: parseInt(a[5])});
			// values[""+a[1]]=a[5];
			console.log(values);
			console.log(data);
		}
		if(c2.test(words)==true){
			Materialize.toast('Declaracion de Constante Valida');
			Materialize.toast('Valor de la constante '+a[1]+' = '+a[5]);
			data.push(values={variable: a[1], resultado: parseFloat(a[5])});
			// values[""+a[1]]=a[5];
			console.log(values[""+a[1]]);
			console.log(values);
			console.log(data);
		}
		if(c3.test(words)==true){
			Materialize.toast('Declaracion de Constante Valida');
			Materialize.toast('Valor de la constante '+a[1]+' = '+a[5]);
			data.push(values={variable: a[1], resultado: a[5]});
			// values[""+a[1]]=a[5];
			console.log(values);
			console.log(data);
		}				
	}	
	if(p.test(words)==true){
			Materialize.toast('Declaracion Valida');
			if(i.test(a[0])==true){
				Materialize.toast('Se ha declarado una variable de tipo '+a[3]);
				data.push(values={variable: a[1],resultado:parseInt(a[5])});
				console.log(values);
				console.log(data);
			}	
		}
}
function operar(){
	words= document.getElementById('campoOperar').value.trim();
	var sum= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))+$/;
	var resta=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))+$/;
	var mult=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\*\s([0-9]+[0-9]*))+$/;
	var fdiv= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)\s(\/)\s([0-9]+[0-9]*)$/;
	var pow=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)\s(\^)\s([0-9]+[0-9]*)$/;
	var sumvars=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s(\+)\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;
	var multvars=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s(\*)\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;
	var divvars=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)\s(\/)\s([a-zA-Z]+[0-9a-zA-Z_]*)$/;
	var restvars=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s(\-)\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;
	var powvars=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)\s(\^)\s([a-zA-Z]+[0-9a-zA-Z_]*)$/;
	var mix=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))(\s\-\s([0-9]+[0-9]*))+$/;
	var mix1=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))(\s(\+)\s([0-9]+[0-9]*))+$/;
	var mix2=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))(\s(\*)\s([0-9]+[0-9]*))+$/;
	var mix3=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))(\s(\/)\s([0-9]+[0-9]*))+$/;
	var mix4=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))(\s(\+)\s([0-9]+[0-9]*))+$/;
	var mix5=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))(\s(\/)\s([0-9]+[0-9]*))+$/;
	var mix6=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))(\s(\*)\s([0-9]+[0-9]*))+$/;
	var mix7=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\/\s([0-9]+[0-9]*))(\s(\+)\s([0-9]+[0-9]*))+$/;
	var mix8=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\*\s([0-9]+[0-9]*))(\s(\-)\s([0-9]+[0-9]*))+$/;
	var mix9=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\/\s([0-9]+[0-9]*))(\s(\-)\s([0-9]+[0-9]*))+$/;
	var mix10=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([0-9]+[0-9]*)(\s\*\s([0-9]+[0-9]*))(\s(\+)\s([0-9]+[0-9]*))+$/;
	var svn= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(([a-zA-Z]+[0-9a-zA-Z_]*)|([0-9]+[0-9]*))\s\+\s(([a-zA-Z]+[0-9a-zA-Z_]*)|([0-9]+[0-9]*))+/;
	var multvn= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(([a-zA-Z]+[0-9a-zA-Z_]*)|([0-9]+[0-9]*))\s\*\s(([a-zA-Z]+[0-9a-zA-Z_]*)|([0-9]+[0-9]*))+/;
	var par1= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))+$/
	var par2= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))+$/
	var par3= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\*\s([0-9]+[0-9]*))\s(\))+$/
	var par4= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\/\s([0-9]+[0-9]*))\s(\))+$/
	var par5= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par6= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par7= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))(\s\*\s([0-9]+[0-9]*))+$/
	var par8= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))(\s\*\s([0-9]+[0-9]*))+$/
	var par9= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))+$/
	var par10=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\/\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))+$/
	var par11= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))\s\/\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))+$/
	var par12= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))\s\/\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))+$/
	var par13 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\/\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))+$/
	var par14= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))+$/
	var par15=/([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))+$/
	var par16= /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))+$/
	var par17 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\/\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par18 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\/\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par19 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))\s\/\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par20 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))\s\/\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par21 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par22 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par23 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par24 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par25 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\*\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par26 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\*\s([0-9]+[0-9]*))\s(\))(\))(\s\/\s([0-9]+[0-9]*))+$/
	var par27 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))(\))(\s\*\s([0-9]+[0-9]*))+$/
	var par28 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\+\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))(\))(\s\*\s([0-9]+[0-9]*))+$/
	var par29 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s(\()(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))\s\*\s(\()\s([0-9]+[0-9]*)(\s\-\s([0-9]+[0-9]*))\s(\))(\))(\s\*\s([0-9]+[0-9]*))+$/

	a=words.split(/\s/);

	if((sum.test(words)|resta.test(words)|mult.test(words)|
	fdiv.test(words)|pow.test(words)|sumvars.test(words)|multvars.test(words)|divvars.test(words)|
	restvars.test(words)|powvars.test(words))|par1.test(words)|par2.test(words)|par3.test(words)|par4.test(words)|par5.test(words)|
	par6.test(words)|par7.test(words)|par8.test(words)|par9.test(words)|par10.test(words)
	|par11.test(words)|par12.test(words)|par13.test(words)|par14.test(words)||par15.test(words)||par16.test(words)|
	par18.test(words)| par17.test(words)|par19.test(words)|par20.test(words)|par21.test(words)
	|par22.test(words)|par23.test(words)|par24.test(words)|par25.test(words)|par26.test(words)|par27.test(words)|
	par28.test(words)|par29.test(words)==false){
		Materialize.toast('Declaracion Invalida');
	}
	if(par29.test(words)==true){
		var x =( (Number(a[3]) - Number(a[5])) * (Number(a[9]) - Number(a[11])) ) * Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par28.test(words)==true){
		var x =( (Number(a[3]) + Number(a[5])) * (Number(a[9]) - Number(a[11])) ) * Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par27.test(words)==true){
		var x =( (Number(a[3]) + Number(a[5])) * (Number(a[9]) + Number(a[11])) ) * Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par26.test(words)==true){
		var x =( (Number(a[3]) + Number(a[5])) * (Number(a[9]) * Number(a[11])) ) / Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par25.test(words)==true){
		var x =( (Number(a[3]) * Number(a[5])) * (Number(a[9]) + Number(a[11])) ) / Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par24.test(words)==true){
		var x =( (Number(a[3]) + Number(a[5])) * (Number(a[9]) + Number(a[11])) ) / Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par23.test(words)==true){
		var x =( (Number(a[3]) + Number(a[5])) * (Number(a[9]) - Number(a[11])) ) / Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par22.test(words)==true){
		var x =( (Number(a[3]) - Number(a[5])) * (Number(a[9]) + Number(a[11])) ) / Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par21.test(words)==true){
		var x =( (Number(a[3]) - Number(a[5])) * (Number(a[9]) - Number(a[11])) ) / Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}

	if(par20.test(words)==true){
		var x =( (Number(a[3]) - Number(a[5])) / (Number(a[9]) - Number(a[11])) ) / Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par19.test(words)==true){
		var x =( (Number(a[3]) - Number(a[5])) / (Number(a[9]) + Number(a[11])) ) / Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par17.test(words)==true){
		var x =( (Number(a[3]) + Number(a[5])) / (Number(a[9]) - Number(a[11])) ) / Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par18.test(words)==true){
		var x =( (Number(a[3]) + Number(a[5])) / (Number(a[9]) +Number(a[11])) ) / Number(a[14]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par16.test(words)==true){
		var x =(Number(a[3]) - Number(a[5])) * (Number(a[9]) +Number(a[11])) ;
		Materialize.toast("El resultado es: "+x);
	}
	if(par15.test(words)==true){
		var x =(Number(a[3]) - Number(a[5])) * (Number(a[9]) - Number(a[11])) ;
		Materialize.toast("El resultado es: "+x);
	}
	if(par14.test(words)==true){
		var x =(Number(a[3]) + Number(a[5])) * (Number(a[9]) - Number(a[11])) ;
		Materialize.toast("El resultado es: "+x);
	}
	if(par13.test(words)==true){
		var x =(Number(a[3]) + Number(a[5])) / (Number(a[9]) - Number(a[11])) ;
		Materialize.toast("El resultado es: "+x);
	}
	if(par12.test(words)==true){
		var x =(Number(a[3]) - Number(a[5])) / (Number(a[9]) - Number(a[11])) ;
		Materialize.toast("El resultado es: "+x);
	}
	if(par11.test(words)==true){
		var x =(Number(a[3]) - Number(a[5])) / (Number(a[9]) +Number(a[11])) ;
		Materialize.toast("El resultado es: "+x);
	}
	if(par10.test(words)==true){
		var x =(Number(a[3]) + Number(a[5])) / (Number(a[9]) +Number(a[11])) ;
		Materialize.toast("El resultado es: "+x);
	}
	if(par9.test(words)==true){
		var x =(Number(a[3]) + Number(a[5])) * (Number(a[9]) +Number(a[11])) ;
		Materialize.toast("El resultado es: "+x);
	}
	if(par8.test(words)==true){
		var x =(Number(a[3]) - Number(a[5])) * Number(a[8]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par7.test(words)==true){
		var x =(Number(a[3]) + Number(a[5])) * Number(a[8]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par6.test(words)==true){
		var x =(Number(a[3]) - Number(a[5])) / Number(a[8]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par5.test(words)==true){
		var x =(Number(a[3]) + Number(a[5])) / Number(a[8]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par1.test(words)==true){
		var x =Number(a[3]) + Number(a[5]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par2.test(words)==true){
		var x =Number(a[3]) - Number(a[5]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par3.test(words)==true){
		var x =Number(a[3]) * Number(a[5]);
		Materialize.toast("El resultado es: "+x);
	}
	if(par4.test(words)==true){
		var x =Number(a[3]) / Number(a[5]);
		Materialize.toast("El resultado es: "+x);
	}

	if(mix.test(words)==true){
		console.log(a);
		var x =Number(a[2]) + Number(a[4]) - Number(a[6]);
		Materialize.toast(x);
	}
	if(mix1.test(words)==true){
		//console.log("hello");
		var x =Number(a[2]) - Number(a[4]) + Number(a[6]);
		Materialize.toast(x);
	}
	if(mix2.test(words)==true){
		//console.log("hello");
		var x =Number(a[2]) + (Number(a[4]) * Number(a[6]));
		Materialize.toast(x);
	}
	if(mix3.test(words)==true){
		//console.log("hello");
		var x =Number(a[2]) + (Number(a[4]) / Number(a[6]));
		Materialize.toast(x);
	}
	if(mix5.test(words)==true){
		//console.log("hello");
		var x =Number(a[2]) -  (Number(a[4]) / Number(a[6]));
		Materialize.toast(x);
	}
	if(mix6.test(words)==true){
		//console.log("hello");
		var x =Number(a[2]) - (Number(a[4]) * Number(a[6]));
		Materialize.toast(x);
	}
	if(mix7.test(words)==true){
		//console.log("hello");
		var x =( Number(a[2]) / Number(a[4])) + Number(a[6]);
		Materialize.toast(x);
	}
	if(mix8.test(words)==true){
		//console.log("hello");
		var x =( Number(a[2]) * Number(a[4])) - Number(a[6]);
		Materialize.toast(x);
	}
	if(mix9.test(words)==true){
		//console.log("hello");
		var x =( Number(a[2]) / Number(a[4])) - Number(a[6]);
		Materialize.toast(x);
	}
	if(mix10.test(words)==true){
		//console.log("hello");
		var x =( Number(a[2]) * Number(a[4])) + Number(a[6]);
		Materialize.toast(x);
	}
	if(mult.test(words)==true){
		Materialize.toast('Acaba de realizar la operacion aritmetica multiplicacion');
		var x=1;
		for(i=2;i<=a.length-1;i+=2){
			x = x * Number(a[i]);
		}
		data.push(values={variable: a[0], resultado: x});
		console.log(values);
		console.log(data);
	}

	if(fdiv.test(words)==true){
		Materialize.toast('Acaba de realizar la operacion aritmetica division');
		var x= Number(a[2])/ Number (a[4]);
		data.push(values={variable: a[0], resultado: x});
		console.log(values);
	}
	if(pow.test(words)==true){
		Materialize.toast('Acaba de realizar la operacion aritmetica potencia');
		var x = Number(a[2]) ^ Number(a[4]);
		data.push(values={variable: a[0], resultado: x});
		console.log(values);
	}
	if(resta.test(words)==true){
		Materialize.toast('Acaba de realizar la operacion aritmetica resta');
			var x=0;
			var p;
			for(i=4; i<=a.length; i+=2){
			x = x + Number(a[i]);
			p= Number (a[2]) -x;
			}
		data.push(values={variable: a[0], resultado: p});
		console.log(values);
	}
	if(sum.test(words)==true){
		Materialize.toast('Acaba de realizar la operacion aritmetica suma');
		var x=0;
		for(i=2;i<=a.length-1;i+=2){
			x = x + Number(a[i]);
		}
		data.push(values={variable: a[0], resultado: x});
		Materialize.toast('Resultado : '+a[0] +'='+ x);
		console.log(values);
		console.log(data);
	}
//console.log(data);

	var c=/([a-zA-Z]\w*)/;
	/*
	for(i=1;i<=a.length-1;i++){
		if(c.test(a[i])==true){
			if(sumvars1.test(words)==true){
				for(j in data){
					if(a[i]==data[j].variable){
						Materialize.toast('Acaba de sumar variables');
						var x=0;
						for(i=2;i<=a.length-1;i+=2){
							x = x + Number(data[j].resultado);
						}
						data.push(data={values: a[0], resultado: x});
						Materialize.toast('Resultado : '+a[0] +'='+ x);
					}
				}	
			}
		}
	}
	*/
	for (i = 1; i <= a.length - 1; i++) {
		if (c.test(a[i]) == true) {
			if (sumvars.test(words) == true) {
				for (j in data) {
					if (a[i] == data[j].variable){
						var x= Number(data[j].resultado);
						}
					
					for (k in data ){
						var y= Number(data[k].resultado);
					}
	
				var z = x + y ;	
				console.log('Acaba de restar variables');
		data.push(data = { variable: a[0], resultado: z});
		Materialize.toast('Resultado : '+a[0] +'='+ z);
	}
	}
	}
	}
	

	for (i = 1; i <= a.length - 1; i++) {
		if (c.test(a[i]) == true) {
			if (multvars.test(words) == true) {
				for (j in data) {
					if (a[i] == data[j].variable){
						var x= Number(data[j].resultado);
						}
					
					for (k in data ){
						var y= Number(data[k].resultado);
					}
	
				var z = x * y ;	
				console.log('Acaba de restar variables');
		data.push(data = { variable: a[0], resultado: z});
		Materialize.toast('Resultado : '+a[0] +'='+ z);
	}
	}
	}
	}



for (i = 1; i <= a.length - 1; i++) {
	if (c.test(a[i]) == true) {
		if (divvars.test(words) == true) {
			for (j in data) {
				if (a[i] == data[j].variable){
					var x= Number(data[j].resultado);
					console.log('Acaba de dividir variables');
				}
				
				for (k in data ){
					var y= Number(data[k].resultado);
				}
			var z = x / y;	
	data.push(data = { variable: a[0], resultado: z});
	Materialize.toast('Resultado : '+a[0] +'='+ z);
}
}
}
}
for (i = 1; i <= a.length - 1; i++) {
	if (c.test(a[i]) == true) {
		if (restvars.test(words) == true) {
			for (j in data) {
				if (a[i] == data[j].variable){
					var x= Number(data[j].resultado);
					}
				
				for (k in data ){
					var y= Number(data[k].resultado);
				}

			var z = x - y ;	
			console.log('Acaba de restar variables');
	data.push(data = { variable: a[0], resultado: z});
	Materialize.toast('Resultado : '+a[0] +'='+ z);
}
}
}
}

if(svn.test(words)==true){
	if(mix.test(words)==false){
	var num=/([0-9]+[0-9]*)/;
	var x=0;
	for(i=1;i<=a.length-1;i++){
		if(c.test(a[i])==true){
			for(j in data){
				if(a[i]==data[j].variable){
					x += Number([data[j].resultado]);
					console.log(x);
				}
			}
		}
		if(num.test(a[i])){
			x+=Number(a[i]);
		}
	}
	data.push(values={variable:a[0], resultado: x});
	Materialize.toast("Ha sumado variables y constantes",2000);
	Materialize.toast('Resultado : '+a[0] +'='+ x,2000);
}
}
if(multvn.test(words)==true){
	var num=/([0-9]+[0-9]*)/;
	var x=1;
	for(i=1;i<=a.length-1;i++){
		if(c.test(a[i])==true){
			for(j in data){
				if(a[i]==data[j].variable){
					x = x * Number([data[j].resultado]);
				}
			}
		}
		if(num.test(a[i])){
			x = x*Number(a[i]);
		}
	}
	data.push(values={variable:a[0], resultado: x});
	Materialize.toast("Ha multiplicado variables y constantes",2000);
	Materialize.toast('Resultado : '+a[0] +'='+ x,2000);
}


}


