'use strict'

const Route = use('Route')

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

// ROTAS PARA O GAME CORE
Route.post('/account/create', 'AccountController.create')
Route.post('/account/edit', 'AccountController.edit')
Route.post('/account/delete', 'AccountController.delete')