import React from "react";
import './Programmes.css'
import Programe1 from '../../assets/program-1.png';
import Programe2 from '../../assets/program-2.png';
import Programe3 from '../../assets/program-3.png';
import programme_icon_1 from '../../assets/program-icon-1.png';
import programme_icon_2 from '../../assets/program-icon-2.png';
import programme_icon_3 from '../../assets/program-icon-3.png';


function Programme(){
    return(
        <div className="programes" id="programe">
            <div className="programe">
                <img src={Programe1}></img>
                <div className="caption">
                    <img src={programme_icon_1}></img>
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="programe">
                <img src={Programe2}></img>
                <div className="caption">
                    <img src={programme_icon_2}></img>
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="programe">
                <img src={Programe3}></img>
                <div className="caption">
                    <img src={programme_icon_3}></img>
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    );

}
export default Programme