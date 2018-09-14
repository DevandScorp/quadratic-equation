module.exports = function solveEquation(equation) {
    // your implementation
    var arr = [];
    var coefficients = [];
    for(let i = 0;i<equation.length;++i){
        if((equation.charAt(i)==="+" || equation.charAt(i)==='-')){
            if(arr.length)coefficients.push(Number(arr.join("")));
            arr = [];
            arr.push(equation.charAt(i));
        }
        // else if(arr.length===0){
        //     arr.push(equation.charAt(i));
        // }
        if(!isNaN(equation.charAt(i)) && equation.charAt(i)!==" ")arr.push(equation.charAt(i));

        if(equation.charAt(i)==='^')i++;
    }
    coefficients.push(Number(arr.join("")));
    let D = Math.pow(coefficients[1],2)-4*coefficients[0]*coefficients[2];
    if(coefficients[0]>0)return [Math.round((-coefficients[1]-Math.sqrt(D))/(2*coefficients[0])),Math.round((-coefficients[1]+Math.sqrt(D))/(2*coefficients[0]))].sort((a,b)=>a>=b);
    else return [Math.round((-coefficients[1]+Math.sqrt(D))/(2*coefficients[0])),Math.round((-coefficients[1]-Math.sqrt(D))/(2*coefficients[0]))].sort((a,b)=>a>=b);
}
