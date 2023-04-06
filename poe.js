/********************************


[Script]
^https:\/\/www\.quora\.com\/poe_api\/gql_POST url script-request-header https://raw.githubusercontent.com/jdukwjdo/OwnProxy/master/poe.js
^https:\/\/www\.quora\.com\/poe_api\/gql_POSTurl script-response-body https://raw.githubusercontent.com/jdukwjdo/OwnProxy/master/poe.js

[MITM]
hostname = www.quora.com
********************************/
const jdukwjdo = $response.body;

console.log(JSON.stringify($request));
console.log(JSON.stringify($request.headers));
console.log($request.headers['X-APOLLO-OPERATION-NAME']);
console.log('X-APOLLO-OPERATION-NAME' in $request.headers);
console.log($response.body);

if('X-APOLLO-OPERATION-NAME' in $request.headers && $request.headers['X-APOLLO-OPERATION-NAME'] == 'ChatViewQuery'){
  $response.body['data']['chatOfBot']['defaultBotObject']['messageLimit']['canSend'] = true;
  $response.body['data']['chatOfBot']['defaultBotObject']['messageLimit']['dailyLimit'] = 1;
  $response.body['data']['chatOfBot']['defaultBotObject']['messageLimit']['numMessagesRemaining'] = null;
  $response.body['data']['chatOfBot']['defaultBotObject']['messageLimit']['monthlyLimit'] = null;
  $response.body['data']['chatOfBot']['defaultBotObject']['messageLimit']['dailyBalance'] = null;
  $response.body['data']['chatOfBot']['defaultBotObject']['messageLimit']['monthlyBalance'] = null;
  $response.body['data']['chatOfBot']['defaultBotObject']['messageLimit']['monthlyBalanceRefreshTime'] = null;
  $response.body['data']['chatOfBot']['defaultBotObject']['hasSuggestedReplies'] = false;
  $response.body['data']['chatOfBot']['defaultBotObject']['allowsUserCreation'] = true;
  $response.body['data']['chatOfBot']['defaultBotObject']['hasMultiplayerFeed'] = false;
  console.log('reset poe botObject:'+ JSON.stringify($response.body));
  $done({body : JSON.stringify($response.body)});
}else{
  console.log('not hit uri: ' + $request);
  $done();
}
