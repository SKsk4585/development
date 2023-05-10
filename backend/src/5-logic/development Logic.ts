import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import { resonceNotFoundErrorModel } from "../4-models/errorModel";
import DevelopmentGroupModel from "../4-models/developmentGroupModel";




async function getaAllDevelopment():Promise<DevelopmentGroupModel[]>{
    const sql = `SELECT * FROM developmentgoup `
    const ampm = await dal.execute(sql)
    return ampm
}

// async function getaAllCategory():Promise<AmpmCategoryModel[]>{
//     const sql = `SELECT * FROM ampmcategory `
//     const ampm = await dal.execute(sql)
//     return ampm
// }

// async function getaAllCategoryByCategoryId (categoryId:number):Promise<AmpmStoreModel[]>{
//     const sql = `SELECT A.*, C.categoryName
//                  FROM ampmstore AS A JOIN ampmcategory AS C
//                  ON A.categoryId = C.categoryId
//                  WHERE A.categoryId = ${categoryId}`
//     const ampm = await dal.execute(sql)
//     return ampm
// }



// async function addProduct(product:AmpmStoreModel):Promise<AmpmStoreModel>{
//     const sql = `INSERT INTO ampmstore
//                 VALUES(DEFAULT,
//                         ${product.categoryId},
//                         "${product.productName}",
//                         "${product.timeOfReation}",
//                         "${product.timeOfExpiration}",
//                         ${product.price}                       
                        
//                         )`
//     const info:OkPacket = await dal.execute(sql)
//     product.ampmId = info.insertId
//     return product
// }


// async function deleteProduct(ampmId: number):Promise<void>{
//     const sql = `DELETE FROM ampmstore
//                  WHERE ampmId = ${ampmId}`;
                                
//     const info:OkPacket = await dal.execute(sql)
//     if(info.affectedRows === 0) throw new resonceNotFoundErrorModel(ampmId)
//     }


export default {
    getaAllDevelopment,
}