import {  useDidShow } from '@tarojs/taro'
import {Button} from "@tarojs/components";
import {useState} from "react";

const Index = () => {
  const [num,setNum] = useState(0)
  useDidShow(()=>{
    console.log('触发了');
  })
  function onclick(){
    console.log('点击事件触发了');
    setNum(4)
  }
  return (<view>
    <Button onClick={onclick}>123</Button>
    <view>{num}</view>
  </view>)
}

export default Index;
