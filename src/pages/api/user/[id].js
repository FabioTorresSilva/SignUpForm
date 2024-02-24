import { findAccount } from "@/pages/data/signup"
import { findToken, getUserToken } from "@/pages/services/tokens"
import { useParams } from "next/navigation"

export default async function handler(req, res) {
    try {
        const token = req.headers.authorization
        console.log(token)
        const userId = useParams() ? useParams().id : "Ola"
        console.log(userId.id)

        if (!token) {
            return res.status(403).json({ message: "Não foi enviado o token de autenticação!" })
        }

        const userToken = await getUserToken(userId)
        console.log(userToken)

        if (userToken !== token) {
            return res.status(403).json({ "message": "Não existe nenhuma sessão com o token indicado!" })
        }
        
        return res.status(200).json({ sameUser : (userToken===token) })
    } catch (err) {
        return res.status(500).json({"message": "service internal error"})
    }
}

