import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid, AtNoticebar } from 'taro-ui'

import "taro-ui/dist/style/components/grid.scss" // 按需引入
import "taro-ui/dist/style/components/icon.scss" //
import "taro-ui/dist/style/components/noticebar.scss" //
import './func.less'

export default class FuncGrid extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (item, index) {
    switch (index) {
      case 0:
        Taro.reLaunch({ url: '/pages/center/center?page=record' })
        break;
      case 1:
        Taro.reLaunch({ url: '/pages/center/center?page=mistake' })
        break;
    }
  }

  render () {
    return (
      <View className='func'>
        <AtGrid
          data={
          [
            {
              iconInfo: {size: 30, color: 'blue', value: 'bookmark'},
              value: '使用记录'
            },
            {
              iconInfo: {size: 30, color: "tan", value: 'blocked'},
              value: '违规记录'
            }
          ]
        }
          columnNum={2}
          onClick={(item, index)=> (this.handleClick(item, index))}
        />
        <AtNoticebar
          icon='volume-plus'
          marquee
        >
          这是通告栏
        </AtNoticebar>
      </View>
    )
  }
}
