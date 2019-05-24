# The Forgotten Server JS
Um servidor MMORPG baseado em Tibia.  
Implementação baseada no antigo projeto The Forgotten Server.  
O projeto possuí arquitetura NodeJS e é estruturado em Javascript.  
Projeto Original: https://github.com/otland/forgottenserver

# Links Úteis
- REPOSITÓRIO -> https://github.com/HenriqueGranatto/the-forgotten-server-js
- TRELLO -> https://trello.com/b/fXRUjILZ/otserver-js
- DISCORD -> https://discord.gg/Vvc636k  
- COLEÇÃO DO POSTMAN: https://www.getpostman.com/collections/edd489fe7997a37adcc0

# IMPORTANTE
Há um bug no sistema de autenticação, já sabemos a causa e a correção será realizada.  
Porém enquanto o mesmo não é corrigido, para que o sistema funcione comentem o seguinte código:  
  
#### Arquivo: node_modules/@adonisjs/auth/src/Schemes/Jwt.js  
#### Linhas: 256 - 258
