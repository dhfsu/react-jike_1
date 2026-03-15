import BarChart from "./components/BarChart"

const Home = () => {

    return (
        <div>
            <BarChart title="前端框架使用情况" />
            <BarChart title={"前端框架点赞情况"} />
        </div>
    )
}

export default Home