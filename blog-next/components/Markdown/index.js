import ReactMarkdown from 'react-markdown'
import './markdown.css'

const Markdown = () => {
  let temp = '# 标题测试\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor** \n'
  return (
    <div className="markdown">
      <ReactMarkdown source={temp} escapeHtml={false}></ReactMarkdown>
    </div>
  )
}

export default Markdown
