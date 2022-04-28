import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import DefaultNavbar from '../../../examples/Navbars/DefaultNavbar';
import SimpleFooter from '../../../examples/Footers/SimpleFooter';
import MKBox from '../../../components/MKBox';
// Material Kit 2 React page layout routes
import routes from '../../../routes';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    console.log(process.env.REACT_APP_WEB_SERVICE);
    try {
      const url = `${process.env.REACT_APP_WEB_SERVICE}/auth`;
      const { data: res } = await axios.post(url, data);
      console.log(res);
      sessionStorage.setItem('token', res.token);
      Swal.fire({
        icon: 'success',
        title: 'เข้าสู่ระบบสำเร็จ',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        window.location = '/';
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง',
        showConfirmButton: false,
        timer: 1500
      });
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: 'external',
            route: '/pages/landing-pages/contact',
            label: 'ติดต่อเรา',
            color: 'info'
          }}
          transparent
          relative
          light
          center
        />
      </MKBox>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>ยินดีต้อนรับเข้าสู่ระบบ</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.purple_btn}>
                เข้าสู่ระบบ
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
