import React from "react"

const ItemListContainer = (props) => {
    const dataProducts = [
        {img: props.img1,name: props.name1,},
        {img: props.img2,name: props.name2,},
        {img: props.img3,name: props.name3,},
    ]
    const dataProducts2 = [
        {img: props.img4,name: props.name4,},
        {img: props.img5,name: props.name5,},
        {img: props.img6,name: props.name6,},
    ]
    const dataProducts3 = [
        {img: props.img7,name: props.name7,},
        {img: props.img8,name: props.name8,},
        {img: props.img9,name: props.name9,},
    ]
    return (
        <>
<div class="container">
    <div class="row">
        <div class="col">
            <div className="containerCard">
                <div className="container">
                    <div className="row">
                        {dataProducts.map((data)=>{
                            return (
                                <div className="col">
                                    <div className="card">
                                        <img src={data.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.name}</h5>
                                            <p className="card-text">{props.desc}</p>
                                            <a href="#" className="btn btn-primary bg-dark card-shadow">Añadir al carrito</a>
                                        </div>
                                    </div>
                                </div>
                            )})}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col">
            <div className="containerCard">
                <div className="container">
                    <div className="row">
                        {dataProducts2.map((data)=>{
                            return (
                                <div className="col">
                                    <div className="card">
                                        <img src={data.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.name}</h5>
                                            <p className="card-text">{props.desc}</p>
                                            <a href="#" className="btn btn-primary bg-dark card-shadow">Añadir al carrito</a>
                                        </div>
                                    </div>
                                </div>
                            )})}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col">
            <div className="containerCard">
                <div className="container">
                    <div className="row">
                        {dataProducts3.map((data)=>{
                            return (
                                <div className="col">
                                    <div className="card">
                                        <img src={data.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.name}</h5>
                                            <p className="card-text">{props.desc}</p>
                                            <a href="#" className="btn btn-primary bg-dark card-shadow">Añadir al carrito</a>
                                        </div>
                                    </div>
                                </div>
                            )})}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default ItemListContainer;