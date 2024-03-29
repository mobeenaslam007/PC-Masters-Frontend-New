import React from 'react'
import BarChart from '../VendorDashboard/BarChart'
import LineChart from '../VendorDashboard/LineChart'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const DashBoard = () => {
    // let products = useSelector((state) => state.products.products);
  let carts = useSelector((state) => state.products.carts);

    return (

        <>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="vendor_top_box pt-4">
                        <h2>0</h2>
                        <h4>Total Orders</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="vendor_top_box">
                        <h2>0</h2>
                        <h4>Total Delivery</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="vendor_top_box">
                        <h2>{carts?.length}</h2>
                        <h4>Total Pending</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                {/* <div className="col-lg-6">
                    <div className="mychart_area">
                        <LineChart />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="mychart_area">
                        <BarChart />
                    </div>
                </div> */}
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="vendor_order_boxed pt-4">
                        <h4>Pending Orders</h4>
                        <table className="table pending_table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Price</th>
                                    {/* <th scope="col">Sales</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((data, index) => (
                                    <tr key={index}>
                                        <td><img width="52px" src={data.image[0]} alt="img" /></td>
                                        <td>{data.title}</td>
                                        <td>PKR {data.price}</td>
                                        {/* <td>{parseInt(data.price) * 3}</td> */}
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="vendor_order_boxed pt-4">
                        <h4>All Orders</h4>
                        <table className="table pending_table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Product Details</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link href="/invoice-one" className="text-primary">#78153</Link></td>
                                    <td>Belted Trench Coat</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78154</Link></td>
                                    <td>Neck Velvet Dress</td>
                                    <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78155</Link></td>
                                    <td>T-Shirt For Woman</td>
                                    <td><span className="badge badge-success">Confirmed</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78156</Link></td>
                                    <td>Fit-Flare Dress</td>
                                    <td><span className="badge badge-danger">Canceled</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78157</Link></td>
                                    <td>Long-Shirt For Men</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78158</Link></td>
                                    <td>Sharee for women</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                </tr>
                                <tr>
                                    <td><Link to="/invoice-one" className="text-primary">#78159</Link></td>
                                    <td>Handbag for Girls</td>
                                    <td><span className="badge badge-info">Shipped</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default DashBoard
