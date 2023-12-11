import React from "react";

function Carousel() {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner mt-2">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <div className="row align-items-center">
                            <div className="col-6 text-center">
                                <img src={'./../../../images/products/1.jpg'} className="float-end" style={{width:'150px'}} />
                            </div>
                            <div className="col-6">
                                <h5>IC ĐÂY RỒI</h5>
                                <p>THẾ GIỚI ĐIỆN TỬ</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="4000">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={'./../../../images/products/1.jpg'} className="float-end" style={{width:'150px'}} />
                            </div>
                            <div className="col-7">
                                <h5>Chuyên phân phối sỉ lẻ các loại</h5>
                                <h4>Linh kiện điện tử</h4>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="4000">
                        <div className="row align-items-center">
                            <div className="col-5 text-center">
                                <img src={'./../../../images/products/12.jpg'} className="float-end" style={{width:'150px'}} />
                            </div>
                            <div className="col-7">
                                <h5>hotline</h5>
                                <p>0973819587</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
