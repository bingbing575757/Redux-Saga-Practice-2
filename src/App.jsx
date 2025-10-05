// App 根组件：负责渲染路由主入口（AppRouter），管理页面切换。
import AppRouter from "./routes/AppRouter";
import "./styles/global.scss";


export default function App() {
  return <AppRouter />;
}
