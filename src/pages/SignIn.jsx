import { useFormik } from "formik";
import Reacts from "react";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SignIn = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          username: ''
        },
        validationSchema: Yup.object({
          username: Yup.string()
            .required("Required")
        }),
        onSubmit: async () => {
          try {
            const response = await axios.post("https://test-react.agiletech.vn/auth/login", formik.values)
            if (response.data.code == 401) {
              alert("Wrong username!");
            } 
            else {
              const accessToken = response.data.accessToken;
              console.log(accessToken);
              localStorage.setItem('accessToken', accessToken);
              alert("Login successfully!");
              navigate("/");
            }
          }
          catch (error) {
            console.log(error);
          }
        }
      })

      
    return (
        <div>
            <div className='nav-bar'>
                <div className='nav-bar_logo'>
                <div className='nav-bar_logo-short'></div>
                <div className='nav-bar_logo-tall'></div>
                </div>
            </div>
            <form 
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            className="p-10 "
            style={{padding:'40px', width:'100%', maxWidth:'500px', marginTop:'auto', marginBottom:'auto'}}
            >
                <div 
                style={{display:'flex', flexDirection:'column', gap:'16px' }}>
                    <label htmlFor="username" style={{fontSize:'20px', lineHeight:'28px'}}> Username</label>
                    <input 
                    className="p-6 rounded-sm"
                    style={{padding: '24px', borderRadius : '20px', borderColor:'gray'}}
                    type="text"
                    id="username"
                    placeholder="Username"
                    {...formik.getFieldProps('username')}
                    />
                    {formik.touched.username && formik.errors.username ? <div style={{color :'red'}}>{formik.errors.username}</div> : null}
                </div>
                <div>
                    <button type="submit"
                    style={{width :'100%', padding: '12px' , background:'rgb(79 70 229)',marginTop:"20px", color:"white",  fontSize:'20px', lineHeight:'28px', borderRadius:"50px"}}>
                    Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;