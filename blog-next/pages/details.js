import Head from 'next/head'
import { Row, Col, Breadcrumb } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Header from '../components/Header'
import Avatar from '../components/Avatar'
import Markdown from '../components/Markdown'
import '../public/style/global.css'
import '../public/style/page.css'

export default function Details() {
  return (
    <div className="container">
      <Head>
        <title>Details</title>
      </Head>
      <Header/>
      <Row className="main-content" type="flex" justify="center">
        <Col span={16}  className="main-left">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>详情页</Breadcrumb.Item>
          </Breadcrumb>
          <div className="details-title">详情标题详情标题详情标题详情标题详情标题</div>
          <div className="details-content">
            详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容--------------
          </div>
          <Markdown></Markdown>
        </Col>
        <Col span={6} className="main-right">
          <Avatar></Avatar>
        </Col>
      </Row>
    </div>
  )
}
