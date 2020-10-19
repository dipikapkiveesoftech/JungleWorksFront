export function GenerateRandomId(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const PROD_API = {
  SIMPLYMATCHING_MICROSERVICE:
    "https://jtxnhw9al8.execute-api.ap-northeast-2.amazonaws.com/Prod",
  AD_MICROSERVICE:
    "https://l7d0otb20l.execute-api.ap-northeast-2.amazonaws.com/Prod",
  BLOG_MICROSERVICE:
    "https://1dvbhix655.execute-api.ap-northeast-2.amazonaws.com/Prod",
  CAFE_MICROSERVICE:
    "https://ng6d8wcjgg.execute-api.ap-northeast-2.amazonaws.com/Prod",
  CHANNEL_MICROSERVICE:
    "https://tk55qebzsg.execute-api.ap-northeast-2.amazonaws.com/Prod",
  CHATTING_MICROSERVICE:
    "https://qhjblrm9o4.execute-api.ap-northeast-2.amazonaws.com/Prod",
  INVOICE_MICROSERVICE:
    "https://5g6g4oz80d.execute-api.ap-northeast-2.amazonaws.com/Prod",

  LOGIN_MICROSERVICE:
    "https://dxp2744brb.execute-api.ap-northeast-2.amazonaws.com/Prod",
  PAYMENT_MICROSERVICE:
    "https://50xc2x8030.execute-api.ap-northeast-2.amazonaws.com/Prod",
  POINTCARD_MICROSERVICE:
    "https://kcm8k098y2.execute-api.ap-northeast-2.amazonaws.com/Prod",
  PROJECT_MICROSERVICE:
    "https://ym4srb66gd.execute-api.ap-northeast-2.amazonaws.com/Prod",
  REGIONAL_ADMIN_MICROSERVICE:
    "https://0d3t7kmr6e.execute-api.ap-northeast-2.amazonaws.com/Prod",
  SHOP_MICROSERVICE:
    "https://3d10zgyhj9.execute-api.ap-northeast-2.amazonaws.com/Prod",
  SYSTEM_MICROSERVICE:
    "https://g5ssrk2397.execute-api.ap-northeast-2.amazonaws.com/Prod",
  USER_MICROSERVICE:
    "https://gyvhnepl3b.execute-api.ap-northeast-2.amazonaws.com/Prod",
  UTILITY_MICROSERVICE:
    "https://b5l9fginck.execute-api.ap-northeast-2.amazonaws.com/Prod",
  SETTING_MICROSERVICE:
    "https://jgflw6b7s5.execute-api.ap-northeast-2.amazonaws.com/Prod",
};
