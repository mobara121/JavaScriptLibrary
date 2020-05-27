const jwt = require('jsonwebtoken');
const User = require('../db').import('../models/user');

module.exports = function(req, res, next){
    if(req.method == 'OPTIONS'){
        next()
    } else {
        var sessionToken = req.headers.authorization;//sessionToken variable was created
        console.log(sessionToken)//tokenが無事サーバーに送られたことの証跡としてconsoleする。
        if(!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.'});//403　tokenが表示されなかった場合
        else {
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => {//verifyメソッドで.envファイルで設定したsecretコードを使ってトークンのdecode
                if(decoded){
                    User.findOne({where: {id: decoded.id}}).then(user => {
                        req.user = user;
                        next()
                    },
                    function(){
                        res.status(401).send({error: 'Not authorized'});//401 -- no matching id
                    });
                } else {
                    res.status(400).send({error: 'Not authorized'}); //400 no value for decoded
                }
            });
        }
 }
}

