import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;
  const { email } = user;
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch(`https://tranquil-cove-79684.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDelete, email]);

  const deleteOrders = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tranquil-cove-79684.herokuapp.com/deleteOrders/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Order has been deleted.", "success");
              setIsDelete(true);
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
              setIsDelete(false);
            }
          });
      }
    });
  };
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <div className="order-section">
      <h3 className="text-center ">My Orders</h3>

      {!orders.length ? (
        <div className="text-center">
          <h4 className="title ">
            {" "}
            Book Some Toys
            <br /> Or <br />
            Please Wait...
          </h4>
          <button onClick={handleClick} className="btn my-btn">
            Book Tour
          </button>
        </div>
      ) : (
        <>
         <table class="table w-75 mx-auto  text-center">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
          {orders.map((order) => (
            <>  

                  <tr>
                    <td></td>
                    <td>
                      {" "}
                      <img src={order.item.img} alt="" width="40px"></img>{" "}
                    </td>
                    <td><p className="mt-3">{order.item.name}</p></td>
                    <td><p className="mt-3">{order.item.price}</p></td>
                    <td><p className="mt-3">{order.quantity}</p></td>
                    <td
                      className={
                        order.status === "pending"
                          ? "text-danger m-0"
                          : "text-success m-0"
                      }
                    >
                    <p className="mt-3">  {order.status} </p>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteOrders(order._id)}
                        className="btn my-btn mt-3"
                      >
                        Cancel Orders
                      </button>
                    </td>
                  </tr>
                
            </>
          ))}
          </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default MyOrders;
