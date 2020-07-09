import { Avatar } from 'antd'
import './avatar.css'

const Avatars = () => {
  return (
    <div className="avatar">
      <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <div className="name">张三</div>
      <div cla>详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述</div>
    </div>
  )
}

export default Avatars
