'use strict';

function calcAge(birthyear){
    const currentYear= 2024;
    const age = currentYear-birthyear;
    var millenial = false;
    function printAge() {
        const output=  `${firstName}, your age is ${age}, born in ${birthyear}`;
        console.log(output);
        
        if(birthyear>=1981 && birthyear<=1996){
            millenial=!millenial;
            const firstName='om';
            const str = `oh, and you're a millenial, ${firstName}`; 
            console.log(str);
        }
        console.log(millenial);
    }
    printAge();
}


const firstName = 'jvs';
calcAge(1996);