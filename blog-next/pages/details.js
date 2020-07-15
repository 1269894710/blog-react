import Head from 'next/head'
import axios from 'axios'
import { Row, Col, Breadcrumb } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Header from '../components/Header'
import Avatar from '../components/Avatar'
import Markdown from '../components/Markdown'
import '../public/style/global.css'
import '../public/style/page.css'

function Details(data) {
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
          <div className="details-title">{data.body}</div>
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

Details.getInitialProps = async (context) => {
  let id = context.query.id
  let result = await axios('http://127.0.0.1:7001/views/getArticleById/' + id).then((res) => {
    console.log(res)
    return res.data
  })
  console.log(result)
  return result
}

export default Details
