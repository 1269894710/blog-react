import react, {useState} from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, Space, List } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Header from '../components/Header'
import Avatar from '../components/Avatar'
import '../public/style/global.css'
import '../public/style/page.css'

function Home(list) {
  const [myList, setList] = useState(list.body)
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Row className="main-content" type="flex" justify="center">
        <Col span={16}  className="main-left">
          <List
            header={<div className="page-list-header"><label>最新更新</label><Link href="/list"><a className="more">更多</a></Link></div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item
                actions={[
                  <IconText icon={StarOutlined} text="测试" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
              >
                <Link href={{pathname: '/details', query: {id: item.id}}}>
                  <a>
                    <List.Item.Meta
                      title={item.title}
                      description={item.content}
                    />
                  </a>
                </Link>
              </List.Item>
            )}
          />
        </Col>
        <Col span={6} className="main-right">
          <Avatar></Avatar>
        </Col>
      </Row>
    </div>
  )
}

Home.getInitialProps = async () => {
  let result = await axios('http://127.0.0.1:7001/views/getArticleList').then((res) => {
    return res.data
  })
  console.log(result)
  return result
}

export default Home
