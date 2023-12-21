import image from './assets/img1.svg'
import "./Body.css"

export default function Body(){
    return(
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="body">
                                <span>
                                    <p className="textAbove">Virtual healthcare for you</p>
                                    <p className="text">Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="imgContainer">
                                <img src={image}/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
