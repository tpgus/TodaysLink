/* 
  common-utils.ts : 클라이언트와 서버에서 공통으로 사용하는 유틸 
*/
import Joi from "joi";

const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

export const idSchema = Joi.string()
  .min(5)
  .max(15)
  .alphanum()
  .required()
  .label("아이디");

export const passwordSchema = Joi.string()
  .min(8)
  .max(15)
  .pattern(new RegExp(passwordRegExp))
  .required()
  .label("패스워드");

export const emailSchema = Joi.string()
  .email({ tlds: false })
  .required()
  .label("이메일");
