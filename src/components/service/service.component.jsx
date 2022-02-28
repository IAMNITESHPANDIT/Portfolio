import './service.style.css'
import vectorIcon from '../../assest/icon/Vector.png';

function Service(){
    return (
        <div className="container ms-5 pt-5 text-center">
            <p className=" h2 m-4">Services</p>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis m
            dolor</p>

            <div className="card-group container pb-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                     <div className="card ">
                      <img src={vectorIcon}  alt="..."  />
                         <div className="card-body">
                            <h5 className="card-title">Web Development</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque cupiditate laborum porro illo maxime harum earum minima perspiciatis deleniti!</p>
                           <button className="readmeBtn rounded">Learn More</button>
                     </div>
                    </div>
                 </div>
                 <div className="col-12 col-md-6">
                     <div className="card">
                      <img src={vectorIcon} className="card-img-top" alt="..." width="20px;" height="20px;"/>
                         <div className="card-body">
                            <h5 className="card-title">Android Development</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque cupiditate laborum porro illo maxime harum earum minima perspiciatis deleniti!</p>
                           
                           <button className="readmeBtn rounded">Learn More</button>
                     </div>
                    </div>
                 </div>

                 <div className="col-12 col-md-6">
                     <div className="card">
                      <img src={vectorIcon} className="card-img-top" alt="..." width="20px;" height="20px;"/>
                         <div className="card-body">
                            <h5 className="card-title">React-Native Application</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque cupiditate laborum porro illo maxime harum earum minima perspiciatis deleniti!</p>
                           <button className="readmeBtn rounded">Learn More</button>
                     </div>
                    </div>
                 </div>

                 <div className="col-12 col-md-6">
                     <div className="card">
                      <img src={vectorIcon} className="card-img-top" alt="..." width="20px;" height="20px;"/>
                         <div className="card-body">
                            <h5 className="card-title">Cloud Development</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque cupiditate laborum porro illo maxime harum earum minima perspiciatis deleniti!</p>
                           <button className="readmeBtn rounded">Learn More</button>
                     </div>
                    </div>
                 </div>

                </div>
               
                
            </div>
            
        </div>
    )

}
export default Service;