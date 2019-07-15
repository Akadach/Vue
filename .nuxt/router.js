import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _5179366c = () => interopDefault(import('..\\pages\\add_member.vue' /* webpackChunkName: "pages_add_member" */))
const _3ac8d208 = () => interopDefault(import('..\\pages\\data.vue' /* webpackChunkName: "pages_data" */))
const _2dc8befc = () => interopDefault(import('..\\pages\\from.vue' /* webpackChunkName: "pages_from" */))
const _5afdf9b1 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages_home" */))
const _04cace50 = () => interopDefault(import('..\\pages\\home1.vue' /* webpackChunkName: "pages_home1" */))
const _04d8e5d1 = () => interopDefault(import('..\\pages\\home2.vue' /* webpackChunkName: "pages_home2" */))
const _6fa48420 = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages_list" */))
const _339e37e4 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _4032567d = () => interopDefault(import('..\\pages\\test1.vue' /* webpackChunkName: "pages_test1" */))
const _893efdda = () => interopDefault(import('..\\pages\\u.vue' /* webpackChunkName: "pages_u" */))
const _e1c2e178 = () => interopDefault(import('..\\pages\\info\\history.vue' /* webpackChunkName: "pages_info_history" */))
const _753ad568 = () => interopDefault(import('..\\pages\\info\\vision.vue' /* webpackChunkName: "pages_info_vision" */))
const _4559d7b3 = () => interopDefault(import('..\\pages\\student\\list_student.vue' /* webpackChunkName: "pages_student_list_student" */))
const _6679ec0f = () => interopDefault(import('..\\pages\\teacher\\teacher1.vue' /* webpackChunkName: "pages_teacher_teacher1" */))
const _4da44908 = () => interopDefault(import('..\\pages\\info\\_code.vue' /* webpackChunkName: "pages_info__code" */))
const _58fe7ff0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'hash',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/add_member",
      component: _5179366c,
      name: "add_member"
    }, {
      path: "/data",
      component: _3ac8d208,
      name: "data"
    }, {
      path: "/from",
      component: _2dc8befc,
      name: "from"
    }, {
      path: "/home",
      component: _5afdf9b1,
      name: "home"
    }, {
      path: "/home1",
      component: _04cace50,
      name: "home1"
    }, {
      path: "/home2",
      component: _04d8e5d1,
      name: "home2"
    }, {
      path: "/list",
      component: _6fa48420,
      name: "list"
    }, {
      path: "/test",
      component: _339e37e4,
      name: "test"
    }, {
      path: "/test1",
      component: _4032567d,
      name: "test1"
    }, {
      path: "/u",
      component: _893efdda,
      name: "u"
    }, {
      path: "/info/history",
      component: _e1c2e178,
      name: "info-history"
    }, {
      path: "/info/vision",
      component: _753ad568,
      name: "info-vision"
    }, {
      path: "/student/list_student",
      component: _4559d7b3,
      name: "student-list_student"
    }, {
      path: "/teacher/teacher1",
      component: _6679ec0f,
      name: "teacher-teacher1"
    }, {
      path: "/info/:code?",
      component: _4da44908,
      name: "info-code"
    }, {
      path: "/",
      component: _58fe7ff0,
      name: "index"
    }],

    fallback: false
  })
}
