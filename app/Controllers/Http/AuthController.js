'use strict'

class AuthController 
{
    async token({ request, auth })
    {
        const { email, password, id } = request.all()
        console.log(await auth.attempt(email, password, id))
    }
}

module.exports = AuthController
