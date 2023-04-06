$notify("hello, poeInQuanx!", "", ""); // 发送通知标题为 "hello, poeInQuanx!" 的通知

const requestBody = $request.body;
const responseBody = $response.body;

# const tag = $request.body.query && $request.body.query.indexOf("ChatViewQuery") != -1;
$notify("命中请求:", "", $request.body);

$done();