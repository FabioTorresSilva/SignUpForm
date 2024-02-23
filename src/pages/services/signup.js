const { findAccount, insertUserDataBase } = require("../data/signup")

async function checkEmail(email) {
   return await findAccount(email)
}

function checkPassword(password, passwordConfirmation) {

   console.log(password,passwordConfirmation)
      return password === passwordConfirmation
}

async function getId(email){
   const res = await findAccount(email)
   console.log(res._id.toString())
   return res._id.toString()
}

async function createUser(email, password){
   await insertUserDataBase(email,password)
}



module.exports = { checkEmail, checkPassword , getId , createUser}