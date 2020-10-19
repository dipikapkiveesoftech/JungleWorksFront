import { PROD_API } from "./common";

//KEY NAME MUST UNIQUE AND DO NOT CHANGE WIHTOUT ASKING !!
export const ENDPOINT = {
  GetRegionByCountry: `${PROD_API.UTILITY_MICROSERVICE}/api/Region/GetRegionByCountry`,
  VerifyEmail: `${PROD_API.LOGIN_MICROSERVICE}/api/account/VerifyEmail`,
  IsEmailExits: `${PROD_API.LOGIN_MICROSERVICE}/api/account/IsEmailExits`,
  CreateNewUser: `${PROD_API.LOGIN_MICROSERVICE}/api/account/CreateNewUser`,
  CreateNewUserBySNS: `${PROD_API.LOGIN_MICROSERVICE}/api/account/CreateNewUserBySNS`,
  CreateInquiry: `${PROD_API.LOGIN_MICROSERVICE}/api/Inquiry/CreateInquiry`,
  SocialLogin: `${PROD_API.LOGIN_MICROSERVICE}/api/SNSLogin/SocialLogin`,
  LoginJungleTalk: `${PROD_API.LOGIN_MICROSERVICE}/api/account/LoginJungleTalk`,
  GetOTPVerify: `${PROD_API.LOGIN_MICROSERVICE}/api/account/GetOTPVerify`,
  ResetJungleTalkPassword: `${PROD_API.LOGIN_MICROSERVICE}/api/account/ResetJungleTalkPassword`,
};
