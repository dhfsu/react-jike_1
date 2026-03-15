import * as echarts from 'echarts';
import { use, useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        //获取渲染图表的dom元素
        const chartDom = document.getElementById('main');
        //初始化echarts实例
        const myChart = echarts.init(chartDom);
        //设置图表的配置项

        const option = {
            xAxis: {
                type: 'category',
                data: ['vue', 'React', 'Angular']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [10, 40, 70],
                    type: 'bar'
                }
            ]
        };
        //使用图表参数完成图表渲染
        option && myChart.setOption(option);
    }, [])

    return (
        <div><div id="main" style={{ width: '400px', height: '300px' }}></div></div>
    )
}

export default Home