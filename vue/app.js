function loadTemplate (id) {
  return document.getElementById(id + '_tmpl').innerHTML
}

/**
 * /
 */
var Home = Vue.extend({
  template: loadTemplate('home')
})

/**
 * /songs
 */
var Songs = Vue.extend({
  template: loadTemplate('list'),
  data () {
    return {
      songs: [1,2,3,4,5]
    }
  }
})

/**
 * /songs/:item
 */
var Player = Vue.extend({
  template: loadTemplate('item')
})

// 根容器
var App = Vue.extend({})

// 创建一个路由器
var router = new VueRouter()
router.map({
  '/': { name: 'home', component: Home },
  '/songs': { name: 'list', component: Songs },
  '/songs/:item': { name: 'item', component: Player }
})
router.start(App, 'body')
