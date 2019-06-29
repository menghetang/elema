import Vue from 'vue'
import Router from 'vue-router'
import Citylist from '@/components/home/citylist'
import Register from '@/components/home/register'
import Dingwei from '@/components/home/dingwei'
import Resetpasswords from '@/components/df/resetpasswords'
import Wode from '@/components/df/wode'
import Information from '@/components/df/information'
import Username from '@/components/df/username'
import Address from '@/components/df/address'
import Editaddress from '@/components/df/editaddress'
import Balance from '@/components/df/balance'
import Balexplain from '@/components/df/balexplain'
import Discounts from '@/components/df/discounts'
import Redpacket from '@/components/df/redpacket'
import Redexplain from '@/components/df/redexplain'
import Voucher from '@/components/df/voucher'
import Download from '@/components/df/download'
import Djqshuoming from '@/components/df/djqshuoming'
import Jifen from '@/components/df/jifen'
import Jfwenti from '@/components/df/jfwenti'
import Fuwuzhongxin from '@/components/df/fuwuzhongxin'
import Huiyuansm from '@/components/df/huiyuansm'
import Huiyuanwt from '@/components/df/huiyuanwt'
import Sousuo from '@/components/df/sousuo'
import Duihuan from '@/components/df/duihuan'
import Tuijianyj from '@/components/df/tuijianyj'
import Jifensc from '@/components/df/jifensc'
import Historyrb from '@/components/df/historyrb'
import Huiyuanzhongxin from '@/components/df/huiyuanzhongxin'
import Goumaivip from '@/components/df/goumaivip'
import Duihuanvip from '@/components/df/duihuanvip'
import Goumaijilu from '@/components/df/goumaijilu'
import Waimai from '@/components/home/waimai'
import Ss from '@/components/home/ss'
import Dingdan from '@/components/home/dingdan'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'citylist',
      component: Citylist
    },
    {
      path: '/citylist',
      name: 'citylist',
      component: Citylist
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/resetpasswords',
      name: 'resetpasswords',
      component: Resetpasswords
    },
    {
      path: '/dingwei',
      name: 'dingwei',
      component: Dingwei
    },
        {
          path: '/ss',
          name: 'ss',
          component: Ss
        },
        {
          path: '/dingdan',
          name: 'dingdan',
          component: Dingdan
        },
        {
          path: '/wode',
          name: 'wode',
          component: Wode
        },
        {
          path: '/waimai',
          name: 'waimai',
          component: Waimai
        },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/username',
      name: 'username',
      component: Username
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/editaddress',
      name: 'editaddress',
      component: Editaddress
    },
    {
      path: '/balance',
      name: 'balance',
      component: Balance
    },
    {
      path: '/balexplain',
      name: 'balexplain',
      component: Balexplain
    },
    {
      path: '/discounts',
      name: 'discounts',
      component: Discounts,
      redirect: '/redpacket',
      children: [
        {
          path: '/redpacket',
          name: 'redpacket',
          component: Redpacket,
        },
        
        {
          path: '/voucher',
          name: 'voucher',
          component: Voucher,
        }
        
      ]
    },
    {
      path: '/redexplain',
      name: 'redexplain',
      component:Redexplain
    },
    {
      path: '/download',
      name: 'download',
      component:Download
    },
    {
      path: '/djqshuoming',
      name: 'djqshuoming',
      component:Djqshuoming
    },
    {
      path: '/jifen',
      name: 'jifen',
      component:Jifen
    },
    {
      path: '/jfwenti',
      name: 'jfwenti',
      component:Jfwenti
    },
    {
      path: '/fuwuzhongxin',
      name: 'fuwuzhongxin',
      component:Fuwuzhongxin
    },
    {
      path: '/huiyuansm',
      name: 'huiyuansm',
      component:Huiyuansm
    },
    {
      path: '/huiyuanwt',
      name: 'huiyuanwt',
      component:Huiyuanwt
    },
    {
      path: '/sousuo',
      name: 'suosou',
      component:Sousuo
    },
    {
      path: '/duihuan',
      name: 'duihuan',
      component:Duihuan
    },
    {
      path: '/tuijianyj',
      name: 'tuijianyj',
      component:Tuijianyj
    },
    {
      path: '/jifensc',
      name: 'jifensc',
      component:Jifensc
    },
    {
      path: '/historyrb',
      name: 'historyrb',
      component:Historyrb
    },
    {
      path: '/huiyuanzhongxin',
      name: 'huiyuanzhongxin',
      component:Huiyuanzhongxin
    },
    {
      path: '/goumaivip',
      name: 'goumaivip',
      component:Goumaivip
    },
    {
      path: '/duihuanvip',
      name: 'duohuanvip',
      component:Duihuanvip
    },
    {
      path: '/goumaijilu',
      name: 'goumaijilu',
      component:Goumaijilu
    }
  ]
})
