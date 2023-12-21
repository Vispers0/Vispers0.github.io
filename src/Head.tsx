import pageLogo from './assets/T.svg'
import './Head.css'

export default function Head(){
    return(
        <>
            <div className="head">
                <div>
                    <img className="circle" src={pageLogo}/>
                    <p className="title">HealthCare</p>
                    <p className="category">About us</p>
                    <p className="category">Testimonials</p>
                    <p className="category">Apps</p>
                    <p className="category">Find a doctor</p>
                    <p className="category">Home</p>
                </div>
            </div>
        </>
    );
}
