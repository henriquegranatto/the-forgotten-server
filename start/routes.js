'use strict'

const Route = use('Route')

// ROTAS QUE NECESSITAM DE AUTENTICAÇÃO
Route.group(() => {
    // ROTAS PARA OS SCRIPTS
    Route.post('/action/script', 'ActionController.execute')
    Route.post('/chat/script', 'ChatController.execute')
    Route.post('/creature/script', 'CreatureController.execute')
    Route.post('/global/script', 'GlobalController.execute')
    Route.post('/monster/script', 'MonsterController.execute')
    Route.post('/movement/script', 'MovementController.execute')
    Route.post('/npc/script', 'NpcController.execute')
    Route.post('/player/script', 'PlayerController.execute')
    Route.post('/quest/script', 'QuestController.execute')
    Route.post('/talkaction/script', 'TalkactionController.execute')
    Route.post('/weapon/script', 'WeaponController.execute')

    // ROTAS PARA ACCOUNT 
    Route.post('/account/edit', 'AccountController.edit')
    Route.post('/account/delete', 'AccountController.delete')
    Route.post('/account/show', 'AccountController.show')
    Route.post('/auth/logout', 'AuthController.logout')

    // ROTAS PARA PLAYER
    Route.post('/player/create', 'PlayerController.create')
    Route.post('/player/edit', 'PlayerController.edit')
    Route.post('/player/delete', 'PlayerController.delete')
    Route.post('/player/show', 'PlayerController.show')
    Route.post('/player/show/all', 'PlayerController.showAllPlayers')

    // ROTAS PARA GUILDA
    Route.post('/guild/create', 'GuildController.create')
    Route.post('/guild/edit', 'GuildController.edit')
    Route.post('/guild/delete', 'GuildController.delete')
    Route.post('/guild/show', 'GuildController.show')
    Route.post('/guild/show/all', 'GuildController.showAllGuilds')

}).middleware(['auth'])

// ROTAS QUE NÃO NECESSITAM DE AUTENTICAÇÃO
    // ROTAS PARA O GAME CORE
    Route.post('/auth/login', 'AuthController.login')
    Route.post('/account/create', 'AccountController.create')
    Route.post('/account/password', 'AccountController.password')
