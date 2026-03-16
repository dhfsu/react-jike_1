import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select,
    message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useSearchParams } from 'react-router-dom'
import './index.scss'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import { createArticleAPI,getArticleById } from '@/apis/article'
import { useChannel } from '@/hooks/useChannel'
const { Option } = Select

const Publish = () => {

    const { channelList } = useChannel()
    
    const onFinsh = (formValue) => {
        // 这里打印出来的key值和antd的Form.Item的name值是一致的
        // console.log(formValue)
        if(imageList.length !== imageType) return message.warning('请上传正确数量的图片')
        const { title, channel_id, content } = formValue
        const reqData = {
            title,
            content,
            channel_id,
            cover: {
                type: imageType,
                images: imageList.map(item => item.response.data.url)

            }
        }
        createArticleAPI(reqData)
    }
    const [imageList, setImageList] = useState([])
    const onUploadChange = (info) => {
        setImageList(info.fileList)
    }
    const [imageType, setImageType] = useState(0)
    const onTypeChange = (e) => {
        // console.log('切换封面了',e.target.value)
        setImageType(e.target.value)
    }
    //回填数据
    const [searchParams] = useSearchParams()
    const articleId = searchParams.get('id')
    const [form] = Form.useForm()
    console.log('articleId', articleId)
    useEffect(() => {
        async function getArticleDetail() {
            const res = await getArticleById(articleId)
            form.setFieldsValue(res.data)
        }
        getArticleDetail()
    }, [articleId,form])   

    return (
        <div className="publish">
            <Card
                title={
                    // 面包屑导航
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>首页</Link> },
                        { title: '发布文章' },
                    ]}
                    />
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ type: 0 }}
                    onFinish={onFinsh}
                    form={form}
                >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: '请输入文章标题' }]}
                    >
                        <Input placeholder="请输入文章标题" style={{ width: 400 }} />
                    </Form.Item>
                    <Form.Item
                        label="频道"
                        name="channel_id"
                        rules={[{ required: true, message: '请选择文章频道' }]}
                    >
                        <Select placeholder="请选择文章频道" style={{ width: 400 }}>
                            {channelList.map(item => { return <Option key={item.id} value={item.id}>{item.name}</Option> }
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item label="封面">
                        <Form.Item name="type">
                            <Radio.Group onChange={onTypeChange}>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {imageType > 0 && <Upload
                            listType="picture-card" //决定选择文件框的外观样式
                            showUploadList          //控制显示的上传列表
                            action={'http://geek.itheima.net/v1_0/upload'}
                            name='image'
                            onChange={onUploadChange}
                            maxCount={imageType}
                        >
                            <div style={{ marginTop: 8 }}>
                                <PlusOutlined />
                            </div>
                        </Upload>}
                    </Form.Item>
                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{ required: true, message: '请输入文章内容' }]}
                    >
                        <ReactQuill
                            className="publish-quill"
                            theme="snow"
                            placeholder="请输入文章内容"
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button size="large" type="primary" htmlType="submit">
                                发布文章
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Publish