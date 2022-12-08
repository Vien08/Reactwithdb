function Account (){
    return(
        <>
        <div className="container">
            <div className='row justify-content-center'>
            
                <div className='regform col-12 col-md-7 bg-light justify-content-center'>
                <h4 className='mb-4'>Sign in</h4>
                    <form>
                        <div className="form-floating">
                            <input className='form-control' name="Username" id="Username" type="text" placeholder="Enter Username" required/>
                            <label for="Username">Enter Username</label>
                        </div>
                        <div className="form-floating">
                            <input className='form-control mt-1' name="Pass" id="Pass" type="Password" placeholder="Password" required/>
                            <label for="Email">Enter Password</label>
                        </div>
                        <input className='btn btn-lg btn-secondary form-control mt-5' type='submit' name='submit' value='Login'/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Account; 