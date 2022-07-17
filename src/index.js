module.exports = function reverse (n) {
   if(n < 0){
       n = Math.abs(n);
   }
    return n.toString().split('').reverse().join('') * Math.sign(n);
}
/*

z = reverse(-95034);
console.log(z)
*/
