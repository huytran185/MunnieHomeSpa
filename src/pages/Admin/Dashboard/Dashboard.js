import React, {useState, useEffect, useRef} from 'react'
import Booking from '../Booking/Booking'
const Dashboard = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div >
            Dashboard
            <div onClick={()=>setShowForm(true)}>Add New Booking</div>
            {showForm && <Booking setShowForm={setShowForm}/>}
        </div>
    )
}

export default Dashboard
