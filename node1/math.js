const Math = {};

function add(x1,x2){
    return x1+x2;
}
function sub(x1,x2){
    return x1-x2;
}
function mult(x1,x2){
    return x1*x2;
}
function div(x1,x2){
    if(x2==0){
        console.log('no se puede dividir');
    } 
    else{
        return x1/x2;
    }    
}
Math.add=add;
Math.sub=sub;
Math.div=div;
Math.mult=mult;

module.exports= Math;

/*exports.div = div;
exports.add = add;
exports.sub = sub;
exports.mult = mult;

funtion hello(name){
    console.log('hola ',name);
}
module.exports=hello;
*/