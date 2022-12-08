import {useState,useEffect} from 'react';
import axios from 'axios';

function Regform (){
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [username, setusername] = useState();
    const [contactno, setcontactno] = useState();
    const [gender, setgender] = useState();
    const [pass, setpass] = useState();
    const [students, setStudents] = useState([]);
    //useEffect (function; param - dependency)
    
    // useEffect(() => {
    //   fetch("http://localhost/sat-app/db2.php")
    //     .then((response) => response.json())
    //     .then((data) => setStudents(data));
    // }, []);
  
    useEffect( ()=> {
      const url = 'http://localhost/kapedesulit/dbkape.php'; //link to db
      axios.get(url).then((response) => {
        setStudents(response.data);
        console.log(students);
      })
    },[])

    const submitBtn = function(e){
        e.preventDefault();
        let getData = new FormData ();
        getData.append('fname', fname); //key-value pairs
        getData.append('lname', lname); 
        getData.append('username', username); 
        getData.append('contactno', contactno); 
        getData.append('gender', gender);
        getData.append('pass', pass);
        getData.append('function', 'insert');
        
        setFname('');
        setLname('');
        setusername('');
        setcontactno('');
        setgender('');
        setpass('');

        axios({
          method:'POST', //get/post
          url:'http://localhost/kapedesulit/dbkape.php', //db link
          data: getData, // data to be transfered
          config:'Content-Type= "multipart/form-data"'
        }).then(function(response){
          const url = 'http://localhost/kapedesulit/dbkape.php';
          axios.get(url).then((response) => {
            setStudents(response.data);
            console.log(students);
          })
        });
      }

    return(
        <>
        <div className='container'>
        <h4 className='mb-3'>Registration Form</h4>
            <div className='reg'>
                <form className="row g-3" method="">
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip01" className="form-label">First name</label>
                        <input placeholder="Enter Firstname" className="form-control" id="validationTooltip01" type="text" name="fname" required value= {fname} onChange = {(e) => setFname(e.target.value)} />     
                    </div>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip02" className="form-label">Last name</label>
                        <input placeholder="Enter Lastname" type="text" className="form-control" id="validationTooltip02" name="lname"  required value= {lname} onChange = {(e) => setLname(e.target.value)} />
                    </div>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltipUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text">@</span>
                            <input placeholder="Enter Username" type="text" className="form-control" id="validationTooltipUsername" name="username" required value= {username} onChange = {(e) => setusername(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip03" className="form-label">Contact No.</label>
                        <input placeholder="09XXXXXXXXX" type="text" className="form-control" id="validationTooltip03" name="contactno" required value= {contactno} onChange = {(e) => setcontactno(e.target.value)} />
                    </div>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip04" className="form-label">Gender</label>
                        <select className="form-select" id="validationTooltip04" name="gender" required value= {gender} onChange = {(e) => setgender(e.target.value)}>
                        <option selected disabled value="">Choose Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        </select>
                    </div>
                    <div className="col-md-4 position-relative">
                        <label for="validationTooltip05" className="form-label">Password</label>
                        <input placeholder="Enter Password" type="password" className="form-control" id="validationTooltip05" name="pass" required value= {pass} onChange = {(e) => setpass(e.target.value)}/>
                    </div>
                    <div className="col-12 mt-5">
                        <input className="btn btn-secondary form-control" type="submit" name='submit' value='Register' onClick= {submitBtn}/>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Regform;