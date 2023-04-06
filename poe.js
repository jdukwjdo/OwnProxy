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
console.log(JSON.stringify($response.body));

if('X-APOLLO-OPERATION-NAME' in $request.headers && $request.headers['X-APOLLO-OPERATION-NAME'] == 'ChatViewQuery'){
  jdukwjdo.data.chatOfBot.defaultBotObject.messageLimit.canSend = true;
  jdukwjdo.data.chatOfBot.defaultBotObject.messageLimit.dailyLimit = 1;
  jdukwjdo.data.chatOfBot.defaultBotObject.messageLimit.numMessagesRemaining = null;
  jdukwjdo.data.chatOfBot.defaultBotObject.messageLimit.monthlyLimit = null;
  jdukwjdo.data.chatOfBot.defaultBotObject.messageLimit.dailyBalance = null;
  jdukwjdo.data.chatOfBot.defaultBotObject.messageLimit.monthlyBalance = null;
  jdukwjdo.data.chatOfBot.defaultBotObject.messageLimit.monthlyBalanceRefreshTime = null;
  jdukwjdo.data.chatOfBot.defaultBotObject.hasSuggestedReplies = false;
  jdukwjdo.data.chatOfBot.defaultBotObject.allowsUserCreation = true;
  jdukwjdo.data.chatOfBot.defaultBotObject.hasMultiplayerFeed = false;
  console.log('reset poe botObject:'+ JSON.stringify(jdukwjdo));
  $done({body : JSON.stringify(jdukwjdo)});
}else{
  console.log('not hit uri: ' + $request);
  $done({body : $response.body});
}
