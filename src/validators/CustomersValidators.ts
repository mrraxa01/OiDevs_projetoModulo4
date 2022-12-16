import { body, param } from "express-validator";

export const customerIdValidation = [
    param("id").notEmpty().isLength({min:10}).withMessage("Valid ID is required!"),
];

export const createCustomerValidations = [
    body("name").notEmpty().withMessage("Fied name is required!"),
    body("password").notEmpty().isLength({min: 6}).withMessage("Password: min 6 characters"),
    
];

export const updateCustomerValidations = [
    ...customerIdValidation,
    ...createCustomerValidations,
]