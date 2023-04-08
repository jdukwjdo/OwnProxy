/********************************


[Script]
^https:\/\/www\.quora\.com\/poe_api\/gql_POST url script-request-header https://raw.githubusercontent.com/jdukwjdo/OwnProxy/master/poe.js
^https:\/\/www\.quora\.com\/poe_api\/gql_POSTurl script-response-body https://raw.githubusercontent.com/jdukwjdo/OwnProxy/master/poe.js

[MITM]
hostname = www.quora.com
********************************/
const jdukwjdo = JSON.parse($response.body);
console.log(typeof jdukwjdo);
console.log(typeof $response.body);
console.log(jdukwjdo);

if('X-APOLLO-OPERATION-NAME' in $request.headers && $request.headers['X-APOLLO-OPERATION-NAME'] == 'ChatViewQuery'){
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['messageLimit']['canSend'] = true;
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['messageLimit']['dailyLimit'] = 1;
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['messageLimit']['numMessagesRemaining'] = null;
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['messageLimit']['monthlyLimit'] = null;
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['messageLimit']['dailyBalance'] = null;
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['messageLimit']['monthlyBalance'] = null;
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['messageLimit']['monthlyBalanceRefreshTime'] = null;
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['hasSuggestedReplies'] = false;
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['allowsUserCreation'] = true;
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['hasMultiplayerFeed'] = false;
  jdukwjdo['data']['chatOfBot']['defaultBotObject']['hasWelcomeTopics'] = false;
  console.log('reset poe botObject:'+ JSON.stringify(jdukwjdo));
  $done({body : JSON.stringify(jdukwjdo)});
}else{
  console.log('not hit uri: ' + $request);
  $done();
}
