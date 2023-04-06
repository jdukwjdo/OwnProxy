const requestBody = $request.body;
const responseBody = $response.body;

$notify("命中请求:", JSON.stringify($request.body.query), "");

$done();
