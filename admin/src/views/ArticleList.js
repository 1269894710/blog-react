import React, {useState, useEffect} from 'react';
import {List, Row, Col, Modal, message, Button} from 'antd'
import axios from 'axios'
import dataPath from '../config/api'
const {confirm} = Modal


function ArticleList() {
  const [list, setList] = useState([])
  useEffect(() => {
    getArticleList()
  }, [])

  const getArticleList = () => {
    axios({
      method: 'get',
      url: dataPath.getArticleList,
      withCredentials: true
    }).then((res) => {
      setList(res.data.body)
    })
  }

  const deleteEvent = (id) => {
    confirm({
      title: '确定要删除吗？',
      content: '如果删除，文件将无法恢复！',
      onOk () {
        axios({
          method: 'get',
          url: dataPath.deleteArticle + id,
          withCredentials: true
        }).then((res) => {
          message.success('删除成功')
          getArticleList()
        })
      }
    })
  }
  return (
    <div className="ArticleList">
      <List
          header={
            <Row>
              <Col span={8}>标题</Col>
              <Col span={4}>类别</Col>
              <Col span={4}>发布时间</Col>
              <Col span={4}>浏览量</Col>
              <Col span={4}>操作</Col>
            </Row>
          }
          bordered
          dataSource={list}
          renderItem={item => (<div>
            <Row>
              <Col span={8}>{item.title}</Col>
              <Col span={4}>{item.typeName}</Col>
              <Col span={4}>{item.updateTime}</Col>
              <Col span={4}>{item.count_view}</Col>
              <Col span={4}>
                <Button type="primary">修改</Button>
                <Button onClick={() => {deleteEvent(item.id)}}>删除</Button>
              </Col>
            </Row>
          </div>)
          }
      ></List>
    </div>
  );
}

export default ArticleList;
