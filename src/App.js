import { Routes, Route } from 'react-router-dom';
import  routers  from './routes';

function App() {
  return (
    <Routes>
      {routers.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />
      })}
      
    </Routes>
    
  );
}

export default App;
