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


//GET /api/user
// Neste endpoint deverás verificar o header: Authorization e verificar se existe alguma sessão com o token recebido nesse header.
//Se o token não for recebido, deverás responder com o estado 401 e com o conteúdo:
//{ "message": "Não foi enviado o token de autenticação!" }
//Se não existir uma sessão com o token recebido, deverás responder com o estado 403 e com o conteúdo:
//{ "message": "Não existe nenhuma sessão com o token indicado!" 
//Caso contrário, deverás enviar uma resposta com o estado 200 e com um objeto com 4 propriedades:
// _id - o id do utilizador;
// email - o email do utilizador;



export default async function handler(req, res) {
    try {
        const token = req.header("Authorization")
        if (!token) {
            return res.status(403).json({ message: "Não foi enviado o token de autenticação!" })
        }
        const user = tokens.find(t => t.token === token)?.email

    } catch (err) {
        console.log(err);
    }
}
