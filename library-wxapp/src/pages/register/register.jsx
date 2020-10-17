import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './register.less'
import WxInfo from "../../components/wxInfo";
import Body from "./components/body";

export default class Register extends Component {

  componentWillMount () { }

  componentDidMount () {
    // if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
    //   Taro.getSetting({
    //     success: function (res) {
    //       console.log(res)
    //       if (!res.authSetting['scope.userInfo']) {
    //         Taro.authorize({
    //           scope: 'scope.userInfo',
    //           success: function () {
    //             Taro.getUserInfo({
    //               success: function (res) {
    //                 console.log(res)
    //               }
    //             })
    //           }
    //         })
    //       }
    //     }
    //   })
    // }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='register_head'>
          <Text className='title'>图书馆选座预约系统</Text>
          <WxInfo />
        </View>
        <Body />
      </View>
    )
  }
}
