import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ShippingList.css'
import { useNavigate } from 'react-router-dom';
function ShippingList() {

  const [shippingList, setShippingList] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async() => {
    try {
      const response = await axios.get("http://localhost:5000/order")
      setShippingList(response.data)
    } catch (error) {
      alert(error)
    }
  }

  const handleDelete = async(shippingId) => {
    try {
      const response = await axios.delete("http://localhost:5000/order/" + shippingId)
      alert(response.data)
      fetchData();
    } catch (error) {
      alert(error)
    }
  }
  const handleEdit = (shippingId) => {
    navigate("/ShippingForm/"+shippingId)
  }
  return (
      <div className='list'>
        <div className="image">
          <img src="/service.jpg" alt="" srcset="" />
      </div>
      <div className="table-container">
        <center><table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Receiver's Name</th>
              <th>Weight(in kg's)</th>
              <th>Color</th>
              <th>Destination Country</th>
              <th>Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shippingList.map((shipping) => {
               const bg = shipping.color;
               let ShipCost;
               if (shipping.country === "Brazil") {
                 ShipCost = 15.36;
               } else if(shipping.country === "Sweden"){
                 ShipCost = 7.35;
               } else if(shipping.country === "China"){
                 ShipCost = 11.53;
               } else if(shipping.country === "Australia"){
                 ShipCost = 50.09;
               }
               const total = Math.round(shipping.weight * ShipCost * 100) / 100;
              return (
                <tr key={shipping._id}>
                  <td>{shipping._id}</td>
                  <td>{shipping.name}</td>
                  <td>{shipping.weight}</td>
                  <td><div class="box" style={{backgroundColor:`${bg}`}}></div></td>
                  <td>{shipping.country}</td>
                  <td>{total}</td>
                  <td>
                    <center><button className='edit' onClick={() => handleEdit(shipping._id)}>Edit</button>
                    <button className='delete' onClick={()=>handleDelete(shipping._id)}>Delete</button></center>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table></center>
        </div>
      </div>
  )
}

export default ShippingList