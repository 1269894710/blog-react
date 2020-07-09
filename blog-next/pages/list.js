import react, {useState} from 'react'
import Head from 'next/head'
import { Row, Col, Space, List, Breadcrumb } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import Header from '../components/Header'
import Avatar from '../components/Avatar'
import '../public/style/global.css'
import '../public/style/page.css'

export default function MyList() {
  const [myList, setList] = useState(
    [
      {title: '标题1', content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'},
      {title: '标题2', content: '内容'},
      {title: '标题3', content: '内容'},
      {title: '标题4', content: '内容'},
      {title: '标题4', content: '内容'},
      {title: '标题4', content: '内容'}
    ]
  )
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
  return (
    <div className="container">
      <Head>
        <title>List</title>
      </Head>
      <Header/>
      <Row className="main-content" type="flex" justify="center">
        <Col span={16}  className="main-left">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>列表页</Breadcrumb.Item>
          </Breadcrumb>
          <List
            header={<div>最新更新</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item
                actions={[
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
              >
                <List.Item.Meta
                  title={item.title}
                  description={item.content}
                />
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
