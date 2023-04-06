$notify("hello, poeInQuanx!", "", ""); // 发送通知标题为 "hello, poeInQuanx!" 的通知

const requestBody = $request.body;
const responseBody = $response.body;

const tag = requestBody.query && requestBody.query.indexOf("ChatViewQuery") != -1;
$notify("命中请求:" + tag);

$done();