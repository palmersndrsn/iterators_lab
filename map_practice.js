var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
    return num * num;
};

var sqrRoot = function(num) {
    return Math.sqrt(num);
};

// No idea if this is right. I'm kinda confused. Can't figure out the syntax.

var sqrNumbers = map(square, myNumbers);
var absNumbers = map(sqrNumbers, sqrRoot);

return sqrNumbers
return absNumbers