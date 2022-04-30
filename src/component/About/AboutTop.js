import React from 'react'
// import img
import img1 from '../../assets/img/common/img-about.jpg'

const AboutTop = () => {
    return (
        <>
            <section id="about-top" className="ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_img">
                                <img src={"https://globalcomputers.pk/wp-content/uploads/2021/07/Perks-Of-Having-A-Custom-Gaming-PC.jpeg"} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_top_left_content">
                                <h2>ABOUT US</h2>
                                <h4>We believe that every project existing in digital world is a result of an idea and every
                                    idea has a cause.</h4>
                                <p><strong>"PC Masters "</strong> is a multi-vendor e-commerce company. The company mainly focuses on Computer Accessories,
                                    other Electronics and bring the best for you in reasonable prices. <strong>PC Masters </strong> mainly targets Pakistan but also focuses on Europe, America and Australia
                                    along with other consumer markets."</p>
                                <p>The brand was founded in October 2021, and since then it has upheld the
                                    philosophy that "everyone can enjoy the future of technology." Its business covers more than 220 countries and regions around the world</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTop
