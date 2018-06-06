var data = [],
    values = {};
a = [];

function evaluar() {
    var words;
    words = document.getElementById('campoInput').value.trim();
    a = words.split(/\s/);
    var i = /(Dim)$/;
    var c1 = /(Const)\s([a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(integer|byte|type|short|word|longword|longint)\s(=)\s([0-9]+[0-9]*)$/;
    var c2 = /(Const)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(float)\s(=)\s(([0-9]+[0-9]*)+[.,]+[0-9])$/;
    var c3 = /(Const)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(char)\s(=)\s([a-zA-Z])$/;
    var p = /(Dim)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(as)\s(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)$/;
    var e1 = /(Dim)$/;
    var e2 = /(Dim)\s(as)\s(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)$/; // 
    var e3 = /(Dim)\s([_a-zA-Z]+[0-9a-zA-Z_]*)\s(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)$/;
    var e4 = /(integer|byte|float|type|bit|sbit|char|short|word|longword|longint)$/;
    var e5 = /(im|di|d|dm|Di|D|IM|DIM|DIm|DiM|dim|din|Din)$/;
    var e6 = /(cons|con|c|cinst|co|cpnst|C|Cons|Con|CON|Cinst|Cpnst|Co|const|onst)$/;
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
    var ee1 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s\+\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;
    var ee2 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s\-\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;
    var ee3 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s\*\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;
    var ee4 = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s([a-zA-Z]+[0-9a-zA-Z_]*)(\s(\/)\s([a-zA-Z]+[0-9a-zA-Z_]*))+$/;

    if (c1.test(words) == true) {
        Materialize.toast('Declaracion de Constante Valida', 2000);
        Materialize.toast('Valor de la constante ' + a[1] + ' = ' + a[5], 2000);
        data.push(values = {
            variable: a[1],
            resultado: parseFloat(a[5])
        });
        console.log(values);
        console.log(data);
    }
    if (c2.test(words) == true) {
        Materialize.toast('Declaracion de Constante Valida');
        Materialize.toast('Valor de la constante ' + a[1] + ' = ' + a[5]);
        data.push(values = {
            variable: a[1],
            resultado: parseFloat(a[5])
        });
        console.log(values["" + a[1]]);
        console.log(values);
        console.log(data);
    }
    if (c3.test(words) == true) {
        Materialize.toast('Declaracion de Constante Valida');
        Materialize.toast('Valor de la constante ' + a[1] + ' = ' + a[5]);
        data.push(values = {
            variable: a[1],
            resultado: a[5]
        });
        // values[""+a[1]]=a[5];
        console.log(values);
        console.log(data);
    }
    if (p.test(words) == true) {
        Materialize.toast('Declaracion Valida', 2000);
        if (i.test(a[0]) == true) {
            Materialize.toast('Se ha declarado una variable de tipo ' + a[3], 2000);
            data.push(values = {
                variable: a[1],
                resultado: parseInt(a[5])
            });
            console.log(values);
            console.log(data);
        }
    }
    if ((p.test(words) | c1.test(words) | c2.test(words)) == false) {
        Materialize.toast('Declaracion invalida', 2000);
        if (e23.test(words) == true) {
            console.log("ERROR:Valor de constante invalido para tipo de variable");
        }
        if (ee1.test(words) == true) {
            console.log("ERROR: Esta sumando variables no declaradas");
        }
        if (ee2.test(words) == true) {
            console.log("ERROR: Esta restando variables no declaradas");
        }
        if (ee3.test(words) == true) {
            console.log("ERROR: Esta multiplicando variables no declaradas");
        }
        if (ee4.test(words) == true) {
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
var operacion = /([a-zA-Z]+[0-9a-zA-Z_]*)\s(=)\s((\()*\s([0-9]+[0-9]*)|([a-zA-Z]+[0-9a-zA-Z_]*))(\s(\+|\-|\*|\/|(\*\*))\s(([0-9]+[0-9]*)|([a-zA-Z]+[0-9a-zA-Z_]*)\s)(\()*)+$/;
var c = /([a-zA-Z]\w*)/;
var pow = /(\^)/;

function operar() {
    var words;
    vars = [];
    words = document.getElementById('campoOperar').value.trim();
    a = words.split(/\s/);
    for (i in data) {
        var jsdec = "var " + data[i].variable + ";" + data[i].variable + "=" + data[i].resultado + ";";
        eval(jsdec);
        console.log(jsdec);
    }
    if (operacion.test(words) == true) {
        //Materialize.toast("Operacion Valida",2000);
    } else {
        //Materialize.toast("Operacion Invalida",2000);
    }
    for (i = 1; i <= a.length - 1; i++) {
        if (c.test(a[i]) == true) {
            for (j in data) {
                if (a[i] == data[j].variable) {
                    vars.push(a[i]);
                    console.log("Variable utilizada en la operacion = " + a[i]);
                    console.log(vars);
                }
                if (vars.indexOf(a[i]) < 0) {
                    console.log("La variable " + a[i] + " no ha sido declarada");
                }
            }
        }

    }
    // if(operacion.test(words)==true){
    //     if((/\^/).test(a[i])==true){
    //     a[i].replace(/\^/,"**");
    //     console.log("replaced");
    //     }
    // }
    console.log(words);
    var res = eval(words + ";");
    data.push(values = {
        variable: a[0],
        resultado: res
    });
    console.log("Resultado: " + a[0] + "=" + res);
    Materialize.toast("Resultado: " + a[0] + "=" + res, 2000);
}

function posfija() {
        var words, dato,dato2, e;
        words = document.getElementById('campoPosfijo').value.trim();
        e = words.split(/\s/);
        var c = /([a-zA-Z]\w*)/;
        var n=/\d/;
        var p = [];
        pila1 = [];
        signo = [];
        letras = [];
        var operador = /(\+|\-|\*|\/|\*\*)/;
        

        function PDP(d) {
            if (d == '+' || d == '-') {
                return 1;
            } else if (d == '*' || d == '/') {
                return 2;
            } else if (d == '**') {
                return 3;
            } else {
                return 0;
            }
        }

        function PFP(d) {
            if (d == '+' || '-') {
                return 1;
            } else if (d == '*' || d == '/') {
                return 2;
            } else {
                return 4;
            }
        }
        //console.log(e);
         


                console.log(e);
            for(var i=0;i<e.length;i++){
               // console.log(n.test(e[i])+""+e[i]);
                if(c.test(e[i])||n.test(e[i])){
                    console.log(e[i]+"");
                    p.push(e[i]);
                } else if(operador.test(e[i])){
                    dato=e[i];
                    dato2=pila1[pila1.length-1];
                    while(operador.test(dato2) && PDP(dato) <= PFP(dato2)&&pila1.length>0){
                        console.log(pila1[pila1.length-1]+"");
                        p.push(pila1.pop());
                        dato2=pila1[pila1.length-1];
                    }
                    pila1.push(dato);
                } else if(e[i]==="("){
                        pila1.push(e[i]);
                }else if(e[i]===")"){
                    while(pila1[pila1.length-1]!=="("){
                        console.log(pila1[pila1.length-1]+"");
                        let x=pila1.pop();
                        p.push(x);
                    }
                    pila1.pop();
                }
            }
            while(pila1.length>0){
                console.log(pila1[pila1.length-1]+"");
                p.push(pila1.pop());
            }  
            console.log(p);
            codigo(p);
    }

    function codigo(p, equal=false){
        let val=[], rs=1;
        var dato, e;
        for (i in data) {
            var jsdec = "var " + data[i].variable + ";" + data[i].variable + "=" + data[i].resultado + ";";
            eval(jsdec);
        }
        for(let i=0; i<p.length; i++){
            if(p[i]==='*'||p[i]==='+'||p[i]==='/'||p[i]==='-'){
                let ope=getOperador(p[i]);
                let value2= val.pop();
                let value1=val.pop();
                console.log(`${ope} ${value1} ${value2} R${rs}=${eval(`${value1}${p[i]}${value2}`)}`);
                val.push(`${eval(`${value1}${p[i]}${value2}`)}`);
                rs++;
            }else{
                val.push(p[i]);
                
                p.splice(i,1);
                i--;
            }
            if(equal){
                rs--;
                console.log(`STO R${rs} ${equal}`);
            }
        }
        function getOperador(str){
            var operadores={
                '+': 'ADD',
                '-': 'SUB',
                '/': 'DIV',
                '*': 'MUL'
            }
            for(var i in operadores){
                if(str===i){
                    return operadores[i];
                }
            }
            return null;
        }
}
    