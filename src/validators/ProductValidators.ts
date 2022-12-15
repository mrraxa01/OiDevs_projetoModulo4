import {body, param } from "express-validator"

export const productIdValidation = [
   
    param("id").notEmpty().withMessage("ID is required!").withMessage("ID is required!"),
];

export const createProductValidations = [
    
    body('description').notEmpty().withMessage('Field description is required!'),
    body("price").notEmpty().withMessage("Field price is required!"),
    body("stock").notEmpty().withMessage("Field stock is required!"),
];

export const updateProductValidations = [
    ... productIdValidation,
    ... createProductValidations,
];