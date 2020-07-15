import React, {useState} from 'react';
import marked from 'marked'
import { Row, Col, Input, Button, DatePicker } from 'antd';
const { Search, TextArea } = Input;

function AddArticle() {
  const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle,setArticleTitle] = useState('')   //文章标题
  const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
  const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
  const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
  const [showDate,setShowDate] = useState()   //发布日期
  const [updateDate,setUpdateDate] = useState() //修改日志的日期
  const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
  const [selectedType,setSelectType] = useState(1) //选择的文章类别

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
  return (
    <div className="AddArticle">
      <Row gutter={10}>
        <Col span={18}>
          <Row gutter={10} style={{marginBottom: 10}}>
            <Col span={24}>
              <Search
                placeholder="请输入..."
                enterButton="搜索"
                onSearch={value => console.log(value)}
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
            <Button type="primary">发布文章</Button>
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
                onChange={value => console.log(value)}
              />
            </Col>
            <Col span={12}>
              <DatePicker
                placeholder="修改日期"
                onChange={value => console.log(value)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AddArticle;
