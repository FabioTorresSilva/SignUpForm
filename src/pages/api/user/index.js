/* Neste endpoint deverás verificar o header: Authorization e verificar se existe alguma sessão com o token recebido nesse header. */
/* GET /api/user */
/* app.get('/check', (req, res) => {
    // Ler o token que vem do header "authorization" (vem no pedido, feito pelo frontend)
    const token = req.header("authorization")

    // Procurar uma sessão que tenha este token e ler o user
    const user = tokens.find(t => t.token === token)?.user;

    //Se o user não existe (token inválido)
    if (!user) {
        //A resposta é "Forbidden"
        return res.sendStatus(403)
    }
    res.json({ user });
})
 */

export default async function handler(req, res) {
    try {
        const token = req.header("Authorization")
        const user = tokens.find(t => t.token === token)?.email
        if (!token) {
            return res.status(403).json({ message: "A password introduzida é inválida!" });
        }
        
    } catch (err) {
        console.log(err);
    }
}
