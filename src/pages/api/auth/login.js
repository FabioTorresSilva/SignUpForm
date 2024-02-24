    import { checkEmailPassword } from '@/pages/services/login';
    import { checkEmail } from '@/pages/services/signup';

    /* POST /api/auth/login */

    const { uuid } = require('uuidv4');

    const tokens = []   

    export default async function handler(req, res) {
        try {
            const { email, password } = req.query
            if (req.method === "POST") {
                if (checkEmail(email)) {
                    if (checkEmailPassword(password)) {
                        const tokenId = uuid()
                        tokens.push({ token: tokenId  , user: email }) //services
                        return res.status(200).json({ tokenId })
                    } else {
                        return res.status(401).json({ message: "A password introduzida é inválida!" });
                    }
                }
                return res.status(404).json({ message: "O utilizador não foi encontrado!" })
            }
        } catch (err) {
            console.log(err);
        }
    }