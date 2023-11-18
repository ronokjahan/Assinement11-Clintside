import { Link } from "react-router-dom";


const CarToyscard = ({car}) => {
    const{picture,name,_id}=car
    console.log(picture);
    return (
      <div >
          <div className="card w-96 bg-base-100 shadow-xl  ">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <Link to={`Cardetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
      </div>
    );
};

export default CarToyscard;