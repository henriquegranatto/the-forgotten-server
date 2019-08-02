'use strict'

const Route = use('Route')

// ROTAS QUE NECESSITAM DE AUTENTICAÇÃO
Route.group(() => {
    // ROTAS PARA OS SCRIPTS
    Route.post('/action/script',    'ActionController.execute')
    Route.post('/chat/script',      'ChatController.execute')
    Route.post('/creature/script',  'CreatureController.execute')
    Route.post('/global/script',    'GlobalController.execute')
    Route.post('/monster/script',   'MonsterController.execute')
    Route.post('/movement/script',  'MovementController.execute')
    Route.post('/npc/script',       'NpcController.execute')
    Route.post('/player/script',    'PlayerController.execute')
    Route.post('/quest/script',     'QuestController.execute')
    Route.post('/talkaction/script','TalkactionController.execute')
    Route.post('/weapon/script',    'WeaponController.execute')

    // ROTAS PARA ACCOUNT 
    Route.post('/account/edit',     'AccountController.edit')
    Route.post('/account/delete',   'AccountController.delete')
    Route.post('/account/show',     'AccountController.show')
    Route.post('/auth/logout',      'AuthController.logout')

    // ROTAS PARA PLAYER
    Route.post('/player/create',    'PlayerController.create')
    Route.post('/player/edit',      'PlayerController.edit')
    Route.post('/player/delete',    'PlayerController.delete')
    Route.post('/player/show',      'PlayerController.show')
    Route.post('/player/show/all',  'PlayerController.showAllPlayers')

    // ROTAS PARA GUILDA
    Route.post('/guild/create',     'GuildController.create')
    Route.post('/guild/edit',       'GuildController.edit')
    Route.post('/guild/delete',     'GuildController.delete')
    Route.post('/guild/show',       'GuildController.show')
    Route.post('/guild/show/all',   'GuildController.showAllGuilds')

    // ROTAS PARA HOUSE
    Route.post('/house/create',     'HouseController.create')
    Route.post('/house/edit',       'HouseController.edit')
    Route.post('/house/delete',     'HouseController.delete')
    Route.post('/house/show',       'HouseController.show')
    Route.post('/house/show/all',   'HouseController.showAllHouses')

    // ROTAS PARA MARKET HISTORY
    Route.post('/markethistory/create',     'MarketHistoryController.create')
    Route.post('/markethistory/edit',       'MarketHistoryController.edit')
    Route.post('/markethistory/delete',     'MarketHistoryController.delete')
    Route.post('/markethistory/show',       'MarketHistoryController.show')
    Route.post('/markethistory/show/all',   'MarketHistoryController.showAllIPs')

    // ROTAS PARA MARKET OFFERS
    Route.post('/marketoffers/create',     'MarketOfferController.create')
    Route.post('/marketoffers/edit',       'MarketOfferController.edit')
    Route.post('/marketoffers/delete',     'MarketOfferController.delete')
    Route.post('/marketoffers/show',       'MarketOfferController.show')
    Route.post('/marketoffers/show/all',   'MarketOfferController.showAllIPs')

    // ROTAS PARA SERVER CONFIG
    Route.post('/serverconfig/create',     'ServerConfigController.create')
    Route.post('/serverconfig/edit',       'ServerConfigController.edit')
    Route.post('/serverconfig/delete',     'ServerConfigController.delete')
    Route.post('/serverconfig/show',       'ServerConfigController.show')
    Route.post('/serverconfig/show/all',   'ServerConfigController.showAllIPs')

    // ROTAS PARA TOWNS
    Route.post('/town/create',     'TownController.create')
    Route.post('/town/edit',       'TownController.edit')
    Route.post('/town/delete',     'TownController.delete')
    Route.post('/town/show',       'TownController.show')
    Route.post('/town/show/all',   'TownController.showAllIPs')

    // ROTAS PARA ACCOUNT BAN
    Route.post('/account/ban/create',     'AccountBanController.create')
    Route.post('/account/ban/edit',       'AccountBanController.edit')
    Route.post('/account/ban/delete',     'AccountBanController.delete')
    Route.post('/account/ban/show',       'AccountBanController.show')
    Route.post('/account/ban/show/all',   'AccountBanController.showAllIPs')

    // ROTAS PARA ACCOUNT BAN HISTORY
    Route.post('/account/ban/history/create',     'AccountBanHistoryController.create')
    Route.post('/account/ban/history/edit',       'AccountBanHistoryController.edit')
    Route.post('/account/ban/history/delete',     'AccountBanHistoryController.delete')
    Route.post('/account/ban/history/show',       'AccountBanHistoryController.show')
    Route.post('/account/ban/history/show/all',   'AccountBanHistoryController.showAllIPs')

    // ROTAS PARA ACCOUNT VIPLIST
    Route.post('/account/viplist/create',     'AccountVipListController.create')
    Route.post('/account/viplist/edit',       'AccountVipListController.edit')
    Route.post('/account/viplist/delete',     'AccountVipListController.delete')
    Route.post('/account/viplist/show',       'AccountVipListController.show')
    Route.post('/account/viplist/show/all',   'AccountVipListController.showAllIPs')

    // ROTAS PARA GUILDWAR KILL
    Route.post('/guildwar/kill/create',     'GuildWarKillController.create')
    Route.post('/guildwar/kill/edit',       'GuildWarKillController.edit')
    Route.post('/guildwar/kill/delete',     'GuildWarKillController.delete')
    Route.post('/guildwar/kill/show',       'GuildWarKillController.show')
    Route.post('/guildwar/kill/show/all',   'GuildWarKillController.showAllIPs')

    // ROTAS PARA GUILD INVITES
    Route.post('/guildinvites/create',     'GuildInviteController.create')
    Route.post('/guildinvites/edit',       'GuildInviteController.edit')
    Route.post('/guildinvites/delete',     'GuildInviteController.delete')
    Route.post('/guildinvites/show',       'GuildInviteController.show')
    Route.post('/guildinvites/show/all',   'GuildInviteController.showAllGuildInvites')

    // ROTAS PARA GUILD MEMBERSHIP
    Route.post('/guildmembership/create',     'GuildMembershipController.create')
    Route.post('/guildmembership/edit',       'GuildMembershipController.edit')
    Route.post('/guildmembership/delete',     'GuildMembershipController.delete')
    Route.post('/guildmembership/show',       'GuildMembershipController.show')
    Route.post('/guildmembership/show/all',   'GuildMembershipController.showAllIPs')

    // ROTAS PARA GUILD RANK
    Route.post('/guildrank/create',     'GuildRankController.create')
    Route.post('/guildrank/delete',     'GuildRankController.delete')
    Route.post('/guildrank/show',       'GuildRankController.show')
    Route.post('/guildrank/show/all',   'GuildRankController.showAllIPs')

    // ROTAS PARA GUILD WAR
    Route.post('/guildwar/create',     'GuildWarController.create')
    Route.post('/guildwar/delete',     'GuildWarController.delete')
    Route.post('/guildwar/show',       'GuildWarController.show')
    Route.post('/guildwar/show/all',   'GuildWarController.showAllIPs')

    // ROTAS PARA PLAYER
    Route.post('/playerdeaths/create',    'PlayerDeathController.create')
    Route.post('/playerdeaths/edit',      'PlayerDeathController.edit')
    Route.post('/playerdeaths/delete',    'PlayerDeathController.delete')
    Route.post('/playerdeaths/show',      'PlayerDeathController.show')
    Route.post('/playerdeaths/show/all',  'PlayerDeathController.showAllPlayers')

}).middleware(['auth'])

// ROTAS QUE NÃO NECESSITAM DE AUTENTICAÇÃO
    // ROTAS PARA O GAME CORE
    Route.post('/auth/login',       'AuthController.login')
    Route.post('/account/create',   'AccountController.create')
    Route.post('/account/password', 'AccountController.password')
