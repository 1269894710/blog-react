import Link from 'next/link'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, YoutubeOutlined, FileTextOutlined } from '@ant-design/icons'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <Row type="flex" justify="center">
          <Col span={10}>
            <Link href="/">
              <a className="title">网站标题</a>
            </Link>
            <span className="describtion">网站标题文字说明......</span>
          </Col>
          <Col span={12} className="menu-content">
            <Menu mode="horizontal">
              <Menu.Item key="home" icon={<HomeOutlined />}>
                首页
              </Menu.Item>
              <Menu.Item key="video" icon={<YoutubeOutlined />}>
                视频
              </Menu.Item>
              <Menu.Item key="record" icon={<FileTextOutlined />}>
                记录
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
