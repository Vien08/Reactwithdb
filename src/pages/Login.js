import {useState,useEffect} from 'react';
import axios from 'axios'
import Account from '../components/Account'

function Login (){
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = () => {
        const url = 'http://localhost/kapedesulit/login.php';
        let getData = new FormData ();
        getData.append('username', login);
        getData.append('password', password);
        axios.post(url,getData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    return(
        <>
        <div className='m-5 p-2'>
            <div className="container">
                <div className='row justify-content-center'>
                
                    <div className='regform col-12 col-md-7 bg-light justify-content-center'>
                    <h4 className='mb-4'>Sign in</h4>
                        <form>
                            <div className="form-floating">
                                <input className='form-control' name="Username" id="Username" type="text" placeholder="Enter Username" value= {login} onChange = {(e) => setLogin(e.target.value)} required/>
                                <label for="Username">Enter Username</label>
                            </div>
                            <div className="form-floating">
                                <input className='form-control mt-1' name="Pass" id="Pass" type="Password" placeholder="Password" value= {password} onChange = {(e) => setPassword(e.target.value)} required/>
                                <label for="Email">Enter Password</label>
                            </div>
                            <input className='btn btn-lg btn-secondary form-control mt-5' value='Login' onClick= {handleLogin}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;