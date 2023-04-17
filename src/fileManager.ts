import fs from "fs"
import path from "path"
import { encode } from "punycode"

interface IpostReqData {
    content: string,
    name: string,
    extension: string,
    cb: (error?:string) => any
}

export function fileWrite (param: IpostReqData){
    const path =`./res/${param.name}.${param.extension}`
    fs.writeFile(path, param.content, {encoding:"utf-8"}, (error) => {
        if(error){ param.cb(error.message)}
        else{param.cb()}
    })
}

// export function fileWrite (param: IpostReqData){
//     const path =`./res/${param.name}.${param.extension}`
//     fs.writeFile(path, param.content, {encoding:"utf-8"}, (error) => {
//         if(error){ param.cb(error.message)}
//         else{param.cb()}
//     })
// }