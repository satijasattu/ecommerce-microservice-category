import { Request, Response } from "express";
import { categoryList } from "../mockData/mockdata";

export const getCategoryDetailsForPostgres = (req:Request,res:Response)=>{
    res.status(200).json(categoryList)
};

export const getCaegoryDetailsForMongo = (req:Request,res:Response)=>{
    res.status(200).json(categoryList)
};
