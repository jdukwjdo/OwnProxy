$notify("hello, poeInQuanx!", "", ""); // 发送通知标题为 "hello, poeInQuanx!" 的通知

const requestBody = JSON.stringify($request.body); // 将请求体转换成字符串
const responseBody = JSON.stringify($response.body); // 将响应体转换成字符串

const requestBodyStr = $request.body;
const responseBodyStr = $response.body;

const tag = requestBody && (requestBody.operationName && requestBody.operationName == "ChatViewQuery") || (requestBody.query && requestBody.query.indexOf("ChatViewQuery") != -1;
$notify("命中请求:" + tag);