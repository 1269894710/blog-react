let url = 'http://127.0.0.1:7001/admin'

let path = {
  checkLogin: url + '/checkLogin', // 检查用户名密码
  getTypeInfo: url + '/getTypeInfo', // 获取文章类别信息
  saveArticle: url + '/saveArticle', // 保存文章
  getArticleList: url + '/getArticleList', // 获取文章列表
  deleteArticle: url + '/deleteArticle/' // 删除文章
}

export default path
