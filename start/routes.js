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
    Route.post('/player/show/all',  'PlayerController.showAll')

    // ROTAS PARA GUILDA
    Route.post('/guild/create',     'GuildController.create')
    Route.post('/guild/edit',       'GuildController.edit')
    Route.post('/guild/delete',     'GuildController.delete')
    Route.post('/guild/show',       'GuildController.show')
    Route.post('/guild/show/all',   'GuildController.showAll')

    // ROTAS PARA HOUSE
    Route.post('/house/create',     'HouseController.create')
    Route.post('/house/edit',       'HouseController.edit')
    Route.post('/house/delete',     'HouseController.delete')
    Route.post('/house/show',       'HouseController.show')
    Route.post('/house/show/all',   'HouseController.showAll')

    // ROTAS PARA MARKET HISTORY
    Route.post('/market/history/create',     'MarketHistoryController.create')
    Route.post('/market/history/edit',       'MarketHistoryController.edit')
    Route.post('/market/history/delete',     'MarketHistoryController.delete')
    Route.post('/market/history/show',       'MarketHistoryController.show')
    Route.post('/market/history/show/all',   'MarketHistoryController.showAll')

    // ROTAS PARA MARKET OFFERS
    Route.post('/market/offers/create',     'MarketOfferController.create')
    Route.post('/market/offers/edit',       'MarketOfferController.edit')
    Route.post('/market/offers/delete',     'MarketOfferController.delete')
    Route.post('/market/offers/show',       'MarketOfferController.show')
    Route.post('/market/offers/show/all',   'MarketOfferController.showAll')

    // ROTAS PARA SERVER CONFIG
    Route.post('/server/config/create',     'ServerConfigController.create')
    Route.post('/server/config/edit',       'ServerConfigController.edit')
    Route.post('/server/config/delete',     'ServerConfigController.delete')
    Route.post('/server/config/show',       'ServerConfigController.show')
    Route.post('/server/config/show/all',   'ServerConfigController.showAll')

    // ROTAS PARA TOWNS
    Route.post('/town/create',     'TownController.create')
    Route.post('/town/edit',       'TownController.edit')
    Route.post('/town/delete',     'TownController.delete')
    Route.post('/town/show',       'TownController.show')
    Route.post('/town/show/all',   'TownController.showAll')

    // ROTAS PARA ACCOUNT BAN
    Route.post('/account/ban/create',     'AccountBanController.create')
    Route.post('/account/ban/edit',       'AccountBanController.edit')
    Route.post('/account/ban/delete',     'AccountBanController.delete')
    Route.post('/account/ban/show',       'AccountBanController.show')
    Route.post('/account/ban/show/all',   'AccountBanController.showAll')

    // ROTAS PARA ACCOUNT BAN HISTORY
    Route.post('/account/ban/history/create',     'AccountBanHistoryController.create')
    Route.post('/account/ban/history/edit',       'AccountBanHistoryController.edit')
    Route.post('/account/ban/history/delete',     'AccountBanHistoryController.delete')
    Route.post('/account/ban/history/show',       'AccountBanHistoryController.show')
    Route.post('/account/ban/history/show/all',   'AccountBanHistoryController.showAll')

    // ROTAS PARA ACCOUNT VIPLIST
    Route.post('/account/viplist/create',     'AccountVipListController.create')
    Route.post('/account/viplist/edit',       'AccountVipListController.edit')
    Route.post('/account/viplist/delete',     'AccountVipListController.delete')
    Route.post('/account/viplist/show',       'AccountVipListController.show')
    Route.post('/account/viplist/show/all',   'AccountVipListController.showAll')

    // ROTAS PARA GUILDWAR KILL
    Route.post('/guild/war/kill/create',     'GuildWarKillController.create')
    Route.post('/guild/war/kill/edit',       'GuildWarKillController.edit')
    Route.post('/guild/war/kill/delete',     'GuildWarKillController.delete')
    Route.post('/guild/war/kill/show',       'GuildWarKillController.show')
    Route.post('/guild/war/kill/show/all',   'GuildWarKillController.showAll')

    // ROTAS PARA GUILD INVITES
    Route.post('/guild/invites/create',     'GuildInviteController.create')
    Route.post('/guild/invites/edit',       'GuildInviteController.edit')
    Route.post('/guild/invites/delete',     'GuildInviteController.delete')
    Route.post('/guild/invites/show',       'GuildInviteController.show')
    Route.post('/guild/invites/show/all',   'GuildInviteController.showAll')

    // ROTAS PARA GUILD MEMBERSHIP
    Route.post('/guild/membership/create',     'GuildMembershipController.create')
    Route.post('/guild/membership/edit',       'GuildMembershipController.edit')
    Route.post('/guild/membership/delete',     'GuildMembershipController.delete')
    Route.post('/guild/membership/show',       'GuildMembershipController.show')
    Route.post('/guild/membership/show/all',   'GuildMembershipController.showAll')

    // ROTAS PARA GUILD RANK
    Route.post('/guild/rank/create',     'GuildRankController.create')
    Route.post('/guild/rank/delete',     'GuildRankController.delete')
    Route.post('/guild/rank/show',       'GuildRankController.show')
    Route.post('/guild/rank/show/all',   'GuildRankController.showAll')

    // ROTAS PARA GUILD WAR
    Route.post('/guild/war/create',     'GuildWarController.create')
    Route.post('/guild/war/delete',     'GuildWarController.delete')
    Route.post('/guild/war/show',       'GuildWarController.show')
    Route.post('/guild/war/show/all',   'GuildWarController.showAll')

    // ROTAS PARA PLAYER
    Route.post('/player/deaths/create',    'PlayerDeathController.create')
    Route.post('/player/deaths/edit',      'PlayerDeathController.edit')
    Route.post('/player/deaths/delete',    'PlayerDeathController.delete')
    Route.post('/player/deaths/show',      'PlayerDeathController.show')
    Route.post('/player/deaths/show/all',  'PlayerDeathController.showAll')

    // ROTAS PARA PLAYER DEPOT ITEMS
    Route.post('/player/depotitems/create',    'PlayerDepotItemController.create')
    Route.post('/player/depotitems/edit',      'PlayerDepotItemController.edit')
    Route.post('/player/depotitems/delete',    'PlayerDepotItemController.delete')
    Route.post('/player/depotitems/show',      'PlayerDepotItemController.show')
    Route.post('/player/depotitems/show/all',  'PlayerDepotItemController.showAll')

    // ROTAS PARA PLAYER INBOX ITEMS
    Route.post('/player/inboxitems/create',    'PlayerInboxItemController.create')
    Route.post('/player/inboxitems/edit',      'PlayerInboxItemController.edit')
    Route.post('/player/inboxitems/delete',    'PlayerInboxItemController.delete')
    Route.post('/player/inboxitems/show',      'PlayerInboxItemController.show')
    Route.post('/player/inboxitems/show/all',  'PlayerInboxItemController.showAll')

    // ROTAS PARA PLAYER ITEMS
    Route.post('/player/items/create',    'PlayerItemsConstrollerController.create')
    Route.post('/player/items/delete',    'PlayerItemsConstrollerController.delete')
    Route.post('/player/items/show',      'PlayerItemsConstrollerController.show')
    Route.post('/player/items/show/all',  'PlayerItemsConstrollerController.showAll')

    // ROTAS PARA PLAYER NAMELOCK
    Route.post('/player/namelock/create',    'PlayerNameLockController.create')
    Route.post('/player/namelock/delete',    'PlayerNameLockController.delete')
    Route.post('/player/namelock/show',      'PlayerNameLockController.show')
    Route.post('/player/namelock/show/all',  'PlayerNameLockController.showAll')

}).middleware(['auth'])

// ROTAS QUE NÃO NECESSITAM DE AUTENTICAÇÃO
    // ROTAS PARA O GAME CORE
    Route.post('/auth/login',       'AuthController.login')
    Route.post('/account/create',   'AccountController.create')
    Route.post('/account/password', 'AccountController.password')
