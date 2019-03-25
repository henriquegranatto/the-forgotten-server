'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/action/script', 'ActionController.execute')
Route.post('/chat/script', 'ChatController.execute')
Route.post('/creature/script', 'CreatureController.execute')
Route.post('/global/script', 'GlobalController.execute')
Route.post('/monster/script', 'MonsterController.execute')
Route.post('/movement/script', 'MovementController.execute')
Route.post('/npc/script', 'NpcController.execute')
Route.post('/player/script', 'PlayerController.execute')
Route.post('/talkaction/script', 'TalkactionController.execute')