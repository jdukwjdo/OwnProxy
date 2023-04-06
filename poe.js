/*************************************

项目名称：poe
下载地址：https://t.cn/A6Kfbf71
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
拦截地址：https://www.quora.com/poe_api/gql_POST

**************************************

[rewrite_local]

^https:\/\/www\.quora\.com\/poe_api\/gql_POST url script-response-body https://raw.githubusercontent.com/jdukwjdo/OwnProxy/master/poe.js
[mitm]

hostname = www.quora.com

*************************************/
magicJS.log($request.body);
var requestBody = $request.body;
if(requestBody && (requestBody.operationName && requestBody.operationName == "ChatViewQuery") || (requestBody.query && requestBody.query.indexOf("ChatViewQuery") != -1){
  var body = $response.body;
  var jdukwjdo = JSON.parse(body);
  jdukwjdo.data.chatOfBot.defaultBotObject.messageLimit = {
          "resetTime" : 1680739200000000,
          "canSend" : true,
          "shouldShowSubscriptionRationale" : false,
          "dailyLimit" : null,
          "numMessagesRemaining" : null,
          "monthlyLimit" : null,
          "dailyBalance" : null,
          "monthlyBalance" : null,
          "monthlyBalanceRefreshTime" : null,
          "__typename" : "MessageLimit",
          "shouldShowRemainingMessageCount" : false
        };
  jdukwjdo.data.chatOfBot.defaultBotObject.hasSuggestedReplies=false;
  $done({body : JSON.stringify(jdukwjdo)});
}else{
  $done({body : $response.body});
}



