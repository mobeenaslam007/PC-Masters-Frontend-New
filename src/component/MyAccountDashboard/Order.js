import React from 'react'
import { Link } from 'react-router-dom'
const Order = () => {
    return (
        <>
            <div className="myaccount-content">
                <h4 className="title">Orders </h4>
                <div className="table_page table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mar 10, 2022</td>
                                <td><span className="badge badge-info">Completed</span></td>
                                <td>PKR 2500 for 1 item </td>
                                <td><Link to="/order-success" className="view">view</Link></td>
                            </tr>
                            {/* <tr>
                                <td>2</td>
                                <td>Mar 10, 2022</td>
                                <td> <span className="badge badge-warning">Processing</span></td>
                                <td>PKR 1700 for 1 item </td>
                                <td><Link to="/order-tracking" className="view">view</Link></td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Order
