function Footer(){
    return(
        <>
        
            <div className=" footerko container-fluid py-2">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <a className='text-light' href="#"><h5 className=''>Kap<i class="bi bi-cup-hot-fill" style={{fontSize:'23px'}}></i> De Sulit</h5></a>
                    </div>
                    <div className='col-md-4 d-flex align-items-center justify-content-center'>
                        <p className='text-center text-light mb-0 fw-bold' style={{fontSize:'13px'}}>© 2022 Company, Inc</p>
                    </div>
                    <div className='col-md-4'>
                        <ul className='list-unstyled d-flex align-items-center justify-content-center mb-0'>
                            <li><i className="px-2 bi bi-facebook text-light" style={{fontSize:'26px'}}></i></li>
                            <li><i className="px-2 bi bi-instagram text-light" style={{fontSize:'26px'}}></i></li>
                            <li><i className="px-2 bi bi-twitter text-light" style={{fontSize:'26px'}}></i></li>
                            <li><i className="px-2 bi bi-github text-light" style={{fontSize:'26px'}}></i></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;