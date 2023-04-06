$notify("hello, poeInQuanx!", "", ""); // 发送通知标题为 "hello, poeInQuanx!" 的通知

const requestBody = JSON.stringify($request.body); // 将请求体转换成字符串
const responseBody = JSON.stringify($response.body); // 将响应体转换成字符串

$notify("请求", "", requestBody); // 发送通知标题为 "请求"，内容为请求体的通知
$notify("响应", "", responseBody); // 发送通知标题为 "响应"，内容为响应体的通知