const express = require('express');
const app7 = express();

app7.use(function(req, res, next){
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;

    res.writeHead(300,{'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>Express 서버에서 응답한 결과</h1>');
    res.write('<div><p>User-Agent:${userAgent} </p></div>');
    res.write('<div><p>Param name: ${paramName} </p></div>');
    
    res.end();
});
app7.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});