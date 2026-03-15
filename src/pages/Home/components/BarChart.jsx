import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const BarChart = ({ title }) => {

    //获取渲染图表的dom元素
    const chartDom = useRef(null);

    useEffect(() => {

        //初始化echarts实例
        const myChart = echarts.init(chartDom.current);
        //设置图表的配置项

        const option = {
            title: {
                text: title
            },
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
    return <div ref={chartDom} style={{ width: '400px', height: '300px' }}></div>
}

export default BarChart;