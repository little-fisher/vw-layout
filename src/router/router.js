import appMain from '@/components/appmain.vue'

const loginRouter = {
  path: '/login',
  name: 'login',
  component: resolve => { require(['@/components/login/login'], resolve) }
}
const registerRouter = {
  path: '/register',
  name: 'register',
  component: resolve => { require(['@/components/login/register'], resolve) }
}
const bindingtpwdRouter = {
  path: '/binding',
  name: 'bingding',
  component: resolve => { require(['@/components/login/binding'], resolve) }
}
const setcodeRouter = {
  path: '/setcode',
  name: 'setcode',
  component: resolve => { require(['@/components/login/set-code'], resolve) }
}

const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: appMain,
  children: [
    { path: 'home', name: 'home', component: resolve => { require(['@/components/home/home'], resolve) } },
    { path: 'mind', name: 'mind', component: resolve => { require(['@/components/mind/mind'], resolve) } }
  ]
}

const orderRouter = {
  path: '/order',
  name: 'order',
  component: resolve => { require(['@/components/order/all-order'], resolve) },
  children: [
    {
      path: '/subscribe',
      name: 'subscribe',
      meta: {
        requireAuth: true
      },
      component: resolve => { require(['@/components/order/subscribe'], resolve) }
    },
    {
      path: '/obligation',
      name: 'obligation',
      meta: {
        requireAuth: true
      },
      component: resolve => { require(['@/components/order/obligation'], resolve) }
    },
    {
      path: '/complete',
      name: 'complete',
      meta: {
        requireAuth: true
      },
      component: resolve => { require(['@/components/order/complete'], resolve) }
    },
    {
      path: '/cancel',
      name: 'cancel',
      meta: {
        requireAuth: true
      },
      component: resolve => { require(['@/components/order/cancel'], resolve) }
    }
  ]
}
const orderInfoRouter = {
  path: '/orderinfo',
  name: 'orderInfo',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/order/order-info'], resolve) }
}
const addcarAge = {
  path: '/addcar-age',
  name: 'addcarAge',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/mycar/addcar-age'], resolve) }
}
const addcarTabbar = {
  path: '/addcar-tabbar',
  name: 'addcarTabbar',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/mycar/addcar-tabbar'], resolve) }
}
const addcarDisplacement = {
  path: '/addcar-displacement',
  name: 'addcarDisplacement',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/mycar/addcar-displacement'], resolve) }
}
const carOwner = {
  path: '/car-owner',
  name: 'carOwner',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/mycar/car-owner'], resolve) }
}
const detectionRecord = {
  path: '/detection-record',
  name: 'detectionRecord',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/mycar/detection-record'], resolve) }
}
const Garage = {
  path: '/garage',
  name: 'Garage',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/mycar/garage'], resolve) }
}
const vehicleManagement = {
  path: '/vehicle-management',
  name: 'vehicleManagement',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/mycar/vehicle-management'], resolve) }
}
const addCarIdcard = {
  path: '/addcar-idcard',
  name: 'addCarIdcard',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/mycar/addcar-idcard'], resolve) }
}
const storeList = {
  path: '/store-list',
  name: 'storeList',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/store/store-list'], resolve) }
}
const repairRouter = {
  path: '/repair',
  name: 'repair',
  meta: {
    requireAuth: true,
    hasCar: true
  },
  component: resolve => { require(['@/components/repair/repair'], resolve) }
}
const repairPreOrder = {
  path: '/repair-pre-order',
  name: 'repairPreOrder',
  component: resolve => { require(['@/components/repair/repair-pre-order'], resolve) }
}
const Reservations = {
  path: '/reservations',
  name: 'Reservations',
  component: resolve => { require(['@/components/repair/reservations'], resolve) }
}
const maintainPreOrder = {
  path: '/maintain-pre-order',
  name: 'maintainPreOrder',
  component: resolve => { require(['@/components/maintain/maintain-pre-order'], resolve) }
}
const maintain = {
  path: '/maintain',
  name: 'maintain',
  meta: {
    requireAuth: true,
    hasCar: true
  },
  component: resolve => { require(['@/components/maintain/maintain'], resolve) }
}
const addNewServer = {
  path: '/add-new-server',
  name: 'addNewServer',
  meta: {
    requireAuth: true,
    hasCar: true
  },
  component: resolve => { require(['@/components/maintain/add-new-server'], resolve) }
}
const serverInfo = {
  path: '/server-info',
  name: 'serverInfo',
  meta: {
    requireAuth: true,
    hasCar: true
  },
  component: resolve => { require(['@/components/maintain/server-info'], resolve) }
}
const payOrderInfo = {
  path: '/pay-order-info',
  name: 'payOrderInfo',
  meta: {
    requireAuth: true,
    hasCar: true
  },
  component: resolve => { require(['@/components/order/pay-order-info'], resolve) }
}
const payServerInfo = {
  path: '/pay-server-info',
  name: 'payServerInfo',
  meta: {
    requireAuth: true,
    hasCar: true
  },
  component: resolve => { require(['@/components/order/pay-server-info'], resolve) }
}
const changePre = {
  path: '/change-pre',
  name: 'changePre',
  meta: {
    requireAuth: true,
    hasCar: true
  },
  component: resolve => { require(['@/components/maintain/change-pre'], resolve) }
}
const payOver = {
  path: '/pay-over',
  name: 'payOver',
  component: resolve => { require(['@/components/pay/pay-over'], resolve) }
}
const washCar = {
  path: '/washcar',
  name: 'washCar',
  component: resolve => { require(['@/components/washcar/washcar'], resolve) }
}
const setUp = {
  path: '/set-up',
  name: 'setUp',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/mind/set-up'], resolve) }
}
const myInfo = {
  path: '/my-info',
  name: 'myInfo',
  meta: {
    requireAuth: true
  },
  component: resolve => { require(['@/components/mind/my-info'], resolve) }
}
const checkList = {
  path: '/check-list',
  name: 'checkList',
  component: resolve => { require(['@/components/checklist/checklist'], resolve) }
}
const seleCity = {
  path: '/sele-city',
  name: 'seleCity',
  component: resolve => { require(['@/components/city/sele-city'], resolve) }
}
const searchList = {
  path: '/search-list',
  name: 'searchList',
  component: resolve => { require(['@/components/search/search-list'], resolve) }
}
const errorRouter = {
  path: '*',
  redirect: '/home'
}

const setmealList = {
  path: '/setmeal-list',
  name: 'setmealList',
  component: resolve => { require(['@/components/setmeal/setmealList'], resolve) }
}

const setmealInfo = {
  path: '/setmeal-info',
  name: 'setmealInfo',
  component: resolve => { require(['@/components/setmeal/setmealInfo'], resolve) }
}

const confirmOrder = {
  path: '/confirm-order',
  name: 'confirmOrder',
  component: resolve => { require(['@/components/confirmOrder/confirmOrder'], resolve) }
}
export const routers = [
  loginRouter,
  registerRouter,
  setcodeRouter,
  bindingtpwdRouter,
  otherRouter,
  orderRouter,
  orderInfoRouter,
  addcarAge,
  addcarTabbar,
  addcarDisplacement,
  carOwner,
  detectionRecord,
  Garage,
  vehicleManagement,
  addCarIdcard,
  storeList,
  repairRouter,
  repairPreOrder,
  Reservations,
  confirmOrder,
  setmealInfo,
  setmealList,
  maintainPreOrder,
  maintain,
  serverInfo,
  payOrderInfo,
  payServerInfo,
  changePre,
  addNewServer,
  seleCity,
  payOver,
  washCar,
  setUp,
  myInfo,
  checkList,
  searchList,
  errorRouter
]
