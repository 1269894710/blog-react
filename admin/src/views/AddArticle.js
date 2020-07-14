import React, {useState} from 'react';
import marked from 'marked'
import { Row, Col, Input, Button, DatePicker } from 'antd';
const { Search, TextArea } = Input;

function AddArticle() {
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
                value=''
                onChange={value => console.log(value)}
                placeholder="Controlled autosize"
                rows={21}
              />
            </Col>
            <Col span={12}>
              <div className="preview-content"></div>
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
              value=''
              onChange={value => console.log(value)}
              placeholder="文章简介"
              rows={3}
            />
          </div>
          <div style={{marginBottom: 10}}>
            文章简介：等待编辑
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
