/********************************


[Script]
http-request ^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/ script-path=https://raw.githubusercontent.com/jdukwjdo/OwnProxy/master/poe.js
http-response ^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/ requires-body=1,script-path=https://raw.githubusercontent.com/jdukwjdo/OwnProxy/master/poe.js

[MITM]
hostname = www.quora.com
********************************/

const requestBody = $request.body;
const responseBody = $response.body;

console.log(JSON.stringify($request));
console.log(JSON.stringify($response.body));

$done();
