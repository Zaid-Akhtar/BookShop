import React from "react";

const Allbooks = ({ data, onDelete, onUpdate }) => {
  return (
    <>
      <div className="container ">
        <div className="row py-5">
          {data.map((item, index) => {
            return (
              <div className="col-4 mb-3" key={item._id}>
                <div className="card bg-light" style={{ width: "18rem", margin: "10px", border: "1px solid #ddd", display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', transition: 'transform 0.3s, box-shadow 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.16)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; }}
                >
                  <img src={item.image} className="card-img-top py-2" alt="..." style={{ width: '150px', height: '200px'  }} />
                  <div className="card-body">
                    <h5 className="card-title my-1">{item.bookname.slice(0,20)}...</h5>
                    <p className="card-author"><span className="fs-6 fw-bold">Author:</span> {item.aurthor.slice(0,20)}</p>
                    <p className="card-price"><span className="fs-6 fw-bold">Price:</span> Rs.{item.price}</p>
                    <p className="card-desc">{item.description.slice(0,90)}...</p>
                    <div className="d-flex justify-content-around align-item-center">
                      <button className="card-btn btn-primary" onClick={() => onUpdate(item)}>Update</button>
                      <button className="card-btn btn-danger" onClick={() => onDelete(item._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Allbooks;
