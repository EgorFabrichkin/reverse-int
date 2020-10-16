module.exports = function reverse (n) {
    let arr = n.toString().split('');
    let num = [];
    for (let i = arr.length; i >= 0 ; i--) {
        num.push(arr[i]);
    }
    let result = parseInt(num.join(''));
    
    return result;
}