import {createBrowserRouter} from "react-router-dom"
import App from '../App'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "/",
            element: <div>Xin chào</div>,
        },
        {
            path: "/about",
            element: <div>Giới thiệu</div>,
        },
        {
          path: "/contact",
            element: <div>Liên hệ</div>,
        }
      ]
    },
  ]);
  export default router;