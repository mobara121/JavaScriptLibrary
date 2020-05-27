module.exports = function(req, res, next){
    res.header('access-control-allow-origin', '*');//res.headerでサーバーがどのheadersをリクエストの中に許可するかを指定して呼ぶ。＊はwild-card、即ちなんでも（どこからでも）データベースとの交信を許可
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');//HTTPメソッド
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');//特定のheaderタイプ

    next();//これでmiddlewareにプロセスを続けるように指令。具体的にはリクエスト内のオブジェクトをサーバーのエンドポイントに渡す作業をする。
}