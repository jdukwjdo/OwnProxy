/********************************


[Script]
^https:\/\/www\.quora\.com\/poe_api\/gql_POST url script-request-header https://raw.githubusercontent.com/jdukwjdo/OwnProxy/master/poe.js
^https:\/\/www\.quora\.com\/poe_api\/gql_POSTurl script-response-body https://raw.githubusercontent.com/jdukwjdo/OwnProxy/master/poe.js

[MITM]
hostname = www.quora.com
********************************/

const requestBody = $request.body;
const responseBody = $response.body;

console.log(JSON.stringify($request));
console.log(JSON.stringify($request.headers));
console.log($request.headers['X-APOLLO-OPERATION-NAME']);
console.log(JSON.stringify($request.headers['X-APOLLO-OPERATION-NAME']));
console.log(JSON.stringify($response.body));

$done();
