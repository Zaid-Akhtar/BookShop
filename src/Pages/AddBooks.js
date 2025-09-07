import axios from "axios";
import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddBooks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [Data, setData] = useState({
    bookname:"",
    aurthor:"",
    description:"",
    image:"",
    price:""
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const [bookId, setBookId] = useState(null);

  useEffect(() => {
    if(location.state && location.state.book){
      setData({
        bookname: location.state.book.bookname,
        aurthor: location.state.book.aurthor,
        description: location.state.book.description,
        image: location.state.book.image,
        price: location.state.book.price
      });
      setIsUpdate(true);
      setBookId(location.state.book._id);
    } else {
      setIsUpdate(false);
      setBookId(null);
      setData({
        bookname:"",
        aurthor:"",
        description:"",
        image:"",
        price:""
      });
    }
  }, [location.state]);

  const change = (e) => {
    const {name, value} = e.target
    setData({...Data, [name]: value })
  }

  const submit = async (e) => {
    e.preventDefault();
    console.log("isUpdate:", isUpdate, "bookId:", bookId, "Data:", Data);
    if(isUpdate && bookId){
      await axios.put(`http://localhost:5000/api/v1/updateBook/${bookId}`, Data)
        .then((res) => alert("Book is updated!"))
        .catch((err) => {
          console.log("Update error:", err);
          alert("Update failed!");
        });
    } else {
      await axios.post('http://localhost:5000/api/v1/add', Data)
        .then((res) => alert(res.data.message))
        .catch((err) => {
          console.log("Add error:", err);
          alert("Add failed!");
        });
    }
    setData({
      bookname:"",
      aurthor:"",
      description:"",
      image:"",
      price:""
    });
    setIsUpdate(false);
    setBookId(null);
    navigate('/books');
  };

  return (
    <>
      <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: "91.5vh" }}>
        <div className="container p-4">
          <div className=" mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Book Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Book Name"
              name="bookname"
              value={Data.bookname}
              onChange={change}
            />
          </div>
          <div className=" mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Author Name"
              name="aurthor"
              value={Data.aurthor}
              onChange={change}
            />
          </div>
          <div className=" mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Description of the Book"
              name="description"
              value={Data.description}
              onChange={change}
            />
          </div>
          <div className=" mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Image
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the URL of the Image"
              name="image"
              value={Data.image}
              onChange={change}
            />
          </div>
          <div className=" mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label text-white"
            >
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the Price"
              name="price"
              value={Data.price}
              onChange={change}
            />
          </div>
          <button className="btn btn-success" onClick={submit}>{isUpdate ? "Update" : "Submit"}</button>
        </div>
      </div>
    </>
  );
};

export default AddBooks;
