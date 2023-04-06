const requestBody = $request.body;
const responseBody = $response.body;

console.log(JSON.stringify($request.body));
console.log(JSON.stringify($response.body));

$done();
