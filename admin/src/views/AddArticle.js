import React, {useState, useEffect} from 'react';
import marked from 'marked'
import axios from 'axios'
import dataPath from '../config/api'
import '../access/style/view.css'
import { Row, Col, Input, Button, Select, DatePicker, message } from 'antd';
const { Search, TextArea } = Input;


function AddArticle(props) {
  const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle,setArticleTitle] = useState('')   //文章标题
  const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
  const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
  const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
  const [sendDate,setSendDate] = useState()   //发布日期
  const [updateDate,setUpdateDate] = useState() //修改日志的日期
  const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
  const [selectedType,setSelectType] = useState(1) //选择的文章类别

  useEffect(() => {
    getTypeInfo()
  }, [])

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false
  })

  const changeContent = (e) => {
    setArticleContent(e.target.value)
    let html = marked(e.target.value)
    setMarkdownContent(html)
  }

  const changeIntroduce = (e) => {
    setIntroducemd(e.target.value)
    let html = marked(e.target.value)
    setIntroducehtml(html)
  }

  const typeChnageEvent = (v) => {
    setSelectType(v)
  }

  const dateChangeEvent = (e, v) => {
    setSendDate(v)
  }

  const getTypeInfo = (e) => {
    axios({
      method: 'get',
      url: dataPath.getTypeInfo,
      withCredentials: true
    }).then((res) => {
      const _data = res.data
      if (_data.code === 401) {
        localStorage.removeItem('openId')
        props.history.push('/')
      } else {
        setTypeInfo(_data.body)
      }
    })
  }

  const searchArticleEvent = (v) => {
    setArticleTitle(v.target.value)
  }

  const saveArticle = () => {
    if (!articleTitle) {
      message.error('文章标题不能为空')
    } else if (!articleTitle) {
      message.error('文章标题不能为空')
    }
    let dateText = sendDate.replace('-', '/')
    let params = {
      type_id: selectedType,
      title: articleTitle,
      art_content: articleContent,
      des: introducemd
    }
    params.updateTime = (new Date(dateText).getTime())/1000
    if (articleId === 0) {
      params.count_view = 0
      axios({
        method: 'post',
        url: dataPath.saveArticle,
        data: params,
        withCredentials: true
      }).then((res) => {})
    }
  }
  return (
    <div className="AddArticle">
      <Row gutter={10}>
        <Col span={18}>
          <Row gutter={10} style={{marginBottom: 10}}>
            <Col span={3}>
              <Select defaultValue={selectedType} className="search-type" onChange={typeChnageEvent}>
                {
                  typeInfo.map((item, index) => {
                    return (<Select.Option key={index} value={item.Id}>{item.typeName}</Select.Option>)
                  })
                }
              </Select>
            </Col>
            <Col span={21}>
              <Input
                value={articleTitle}
                placeholder="请输入博客标题..."
                onChange={searchArticleEvent}
              />
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                value={articleContent}
                onChange={changeContent}
                placeholder="Controlled autosize"
                rows={21}
              />
            </Col>
            <Col span={12}>
              <div className="preview-content"
                   dangerouslySetInnerHTML={{__html: markdownContent}}
              >
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <div style={{marginBottom: 10}}>
            <Button style={{marginRight: 10}}>暂存文章</Button>
            <Button type="primary" onClick={saveArticle}>发布文章</Button>
          </div>
          <div style={{marginBottom: 10}}>
            <TextArea
              value={introducemd}
              onChange={changeIntroduce}
              placeholder="文章简介"
              rows={3}
            />
          </div>
          <div style={{marginBottom: 10}} dangerouslySetInnerHTML={{__html: introducehtml}}>
          </div>
          <Row gutter={4}>
            <Col span={12}>
              <DatePicker
                placeholder="发布日期"
                onChange={dateChangeEvent}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AddArticle;
