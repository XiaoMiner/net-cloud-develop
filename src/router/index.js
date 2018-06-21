import Vue from 'vue'
import Router from 'vue-router'
/* 网易云主页 */
import NetCloudMusicIndex from '@/components/NetCloudMusicIndex'
/* 网易云导航 */
import FindMusic from '@/components/IndexComponents/IndexContent/IndexContentFindMusic'
import MyMusic from '@/components/IndexComponents/IndexContent/IndexContentMyMusic'
import Friend from '@/components/IndexComponents/IndexContent/IndexContentFriend'
import DownloadClient from '@/components/IndexComponents/IndexContent/IndexContentDownloadClient'
/* 网易云发现音乐导航 */
import Recommend from '@/components/IndexComponents/IndexContent/FindMusic/FindMusicRecommend'
import RankingList from '@/components/IndexComponents/IndexContent/FindMusic/FindMusicRankingList'
import SongSheet from '@/components/IndexComponents/IndexContent/FindMusic/FindMusicSongSheet'
import AnchorsPlatform from '@/components/IndexComponents/IndexContent/FindMusic/FindMusicAnchorsPlatform'
import MusicSinger from '@/components/IndexComponents/IndexContent/FindMusic/FindMusicSinger'
import NewPlate from '@/components/IndexComponents/IndexContent/FindMusic/FindMusicNewPlate'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/netCloudMusic', redirect: '/recommend'},
    {path: '/findMusic', redirect: '/recommend'},
    {
      path: '/',
      name: 'NetCloudMusicIndex',
      component: NetCloudMusicIndex,
      redirect: '/recommend',
      children: [
        {
          path: '/findMusic',
          name: 'IndexContentFindMusic',
          component: FindMusic,
          children: [
            {path: '/recommend', name: 'FindMusicRecommend', component: Recommend, meta: {auth: true}},
            {path: '/rankingList', name: 'FindMusicRankingList', component: RankingList, meta: {auth: true}},
            {path: '/songSheet', name: 'FindMusicSongSheet', component: SongSheet, meta: {auth: true}},
            {path: '/anchorsPlatform', name: 'FindMusicAnchorsPlatform', component: AnchorsPlatform, meta: {auth: true}},
            {path: '/singer', name: 'FindMusicSinger', component: MusicSinger, meta: {auth: true}},
            {path: '/newPlate', name: 'FindMusicNewPlate', component: NewPlate, meta: {auth: true}}
          ]
        },
        {
          path: '/myMusic',
          name: 'IndexContentMyMusic',
          component: MyMusic,
          meta: {auth: true}
        },
        {
          path: '/friend',
          name: 'IndexContentFriend',
          component: Friend,
          meta: {auth: true}
        },
        {
          path: '/downloadClient',
          name: 'IndexContentDownloadClient',
          component: DownloadClient,
          meta: {auth: true}
        }
      ]
    }

  ]
})
