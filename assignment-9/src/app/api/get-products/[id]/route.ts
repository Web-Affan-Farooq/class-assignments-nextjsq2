import { NextRequest } from "next/server";
import Products from "../../../../../data/data.json";

interface Params {
    params:Promise<{id:string}>
}
export async function GET(req:NextRequest, {params}:Params) {
    const {id} = (await params);
    console.log(id);
    
    return Response.json(Products[Number(id)-1]);
}