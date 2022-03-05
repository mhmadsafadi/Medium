import * as yup from "yup";

export const SignupSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email('this field must be an email').required().trim(),
    password: yup.string().min(8, 'must be more than 8 charterer .').max(20,'max length is 20').required(),
}).required();

export const verfiyCodeSchema = yup.object({
    verifyEmail: yup.string().required()
}).required();

export const LoginSchema = yup.object({
    email: yup.string().email('this field must be an email').required().trim(),
    password: yup.string().min(8, 'must be more than 8 charterer .').max(20,'max length is 20').required(),
}).required();
