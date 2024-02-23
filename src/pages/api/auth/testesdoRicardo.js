import { checkEmail, createUser } from "@/pages/services/signup"

export default async function handler(req, res) {
    
    const cenas = await createUser("fabio123", "123456")
    console.log(cenas)
    /* res.json({cenas}) */
}