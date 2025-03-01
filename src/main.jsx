import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <HomePage />
    </>
  </StrictMode>,
)

/**
 * JSX Javascript XML
 * JSX không phải là chuỗi, không phải là HTML,
 * mà là một định dạng, 1 cú pháp giúp xây dựng giao diện cho người dàng dễ dàng hơn
 * Component là một phần giao diện. Bắt buộc phải viết thao PascalCase
 */

// function HomePage ({name, age, address}) {
//   return (
//     <>
//       <h1>Hello {name}</h1>
//       <span>Tuổi: {age}</span>
//       <span>Địa chỉ:{address}</span>
//       <p>Noi dung</p>
//     </>
//   )
// }