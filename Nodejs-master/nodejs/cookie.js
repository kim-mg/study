var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
    var cookies = {};
    if (request.headers.cookie !== undefined){
        cookies = cookie.parse(request.headers.cookie);    
    }
    response.writeHead(200, {
        // 배열로 넣음으로써 여러 개를 입력할 수 있다.
        'Set-Cookie':[
            'yummy_cookie=choco', 'tasty_cookie=strawberry',
            // 쿠키를 브라우저가 종료해도 삭제하지 않는 시간
            `Permanent=cookies; Max-Age=${60*60*24*30}`,
            // https에서만 받을 수 있다.
            'Secure=Secure; Secure',
            // JavaScript로 불러올 수 없도록 한다.
            'HttpOnly=HttpOnly; HttpOnly',
            // 어느 Path에서 존재하도록 한다.
            'Path=Path; Path=/cookie',
            // 어느 Domain에서 존재하도록 한다.
            'Domain=Domain; Domain=o2.org'
        ]
    });
    response.end('Cookie!!');
}).listen(3000);