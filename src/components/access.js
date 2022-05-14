import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import staticax from 'axios';

function Login()
{const [name, setName] = useState("")
const [secondn, setSurname] = useState("")
    const [error, setError] = useState('');
    const [userId, setUserId] = useState(0)

    let navigate = useNavigate();
    const submitHandler = (e) => {
        if (name == '' || secondn == '') {
            setError('Fill the fields')
        } else {
        e.preventDefault();
        const afterdb = {data : {name, surname: secondn}}
        staticax.post('https://pure-caverns-82881.herokuapp.com/api/v54/users', afterdb,  
        {headers:{
                        "X-Access-Token": "4a975d7232f12d57e1a89a9ee49e3a5c7c6161a6ed31a65e0e2a6867ab8befb6",
                    }
                })
        .then((res) => {
            console.log(res.data.id)
            afterdb.data.id = res.data.id
            setUserId(res.data.id)

            localStorage.setItem("user-info", res.data.id);
            navigate('/main')
            
        })
        .catch((err)=>{
            console.log(err)
            setError('User already exists!');
            
        })
    }
    }

    return (
        <div className="main">
            <div className="login-div"><form className="login-form" onSubmit={submitHandler}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" class="image2"></img><h1>Sign Up</h1>
                
                    <input type="text" name="name" className="name" placeholder="Username" 
                        value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" name="surname" className="surname" placeholder="Password" 
                        value={secondn} onChange={(e)=>setSurname(e.target.value)}/>
                    <input type="submit" className="login-button" value="Create" /></form> </div><div><p className='forgot'>
                            <a href="#">Forgot password?</a>
                        </p></div>
                    </div>
                    
                   
        )
}
export default Login;