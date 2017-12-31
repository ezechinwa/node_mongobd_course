const jwt = require('jsonwebtoken'); 
var data = {
    id : 10
};
var token = jwt.sign (data, 'IAMACHELSEAFAN');
var verify = jwt.verify(token, 'IAMACHELSEAFAN');
//jwt.verify
console.log(token);
console.log(verify);