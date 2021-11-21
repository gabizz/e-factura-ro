import bcrypt from 'bcrypt'

export const passwordVerify =  (password, hash) =>  bcrypt.compare(password, hash).then( 
    r => { return r},
    err => { console.log("bcrypt err:", err); return false}
)
export const passwordCreate = pw => new Promise( (resolve,reject) => bcrypt.hash(pw,10, (err,res) => err ? reject(err) : resolve(res)))
//end promisify stuff


