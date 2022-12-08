
import Pic1 from '../assets/img/1.jpg'
import Pic2 from '../assets/img/2.jpg'
import Pic3 from '../assets/img/3.jpg'
import Pic4 from '../assets/img/4.jpg'
import Pic5 from '../assets/img/5.jpg'
import Pic6 from '../assets/img/6.jpg'
import Pic7 from '../assets/img/7.jpg'
import Pic8 from '../assets/img/8.jpg'

function Headings (){
    return(
        <>
            <div className="container px-5 mb-5 w-75">
                <div className="row">
                    <div className="col-md-5 p-1 text-center d-none d-md-block">
                        <img src={Pic1} className="mgapicture img-fluid rounded-1" alt="picture1"/>
                    </div>
                    <div className=" col-md-7 p-1 text-center">
                        <img src={Pic2} className="img-fluid rounded-1" alt="picture2"/>
                        <div className='row g-2'>
                            <div className=" col-6 col-md-4 p-1 text-center">
                                <img src={Pic3} className="img-fluid rounded-1" alt="picture3"/>
                            </div>
                            <div className=" col-6 col-md-4 p-1 text-center">
                                <img src={Pic4} className="img-fluid rounded-1" alt="picture4"/>
                            </div>
                            <div className=" col-12 col-md-4 p-1 text-center">
                                <img src={Pic5} className="img-fluid rounded-1" alt="picture5"/>
                            </div>
                        </div>
                        <div className='row g-2'>
                            <div className=" col-6 col-md-4 p-1 text-center">
                                <img src={Pic6} className="img-fluid rounded-1" alt="picture6"/>
                            </div>
                            <div className=" col-6 col-md-4 p-1 text-center">
                                <img src={Pic7} className="img-fluid rounded-1" alt="picture7"/>
                            </div>
                            <div className=" col-12 col-md-4 p-1 text-center">
                                <img src={Pic8} className="img-fluid rounded-1" alt="picture8"/>
                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </>
    )
}

export default Headings;
