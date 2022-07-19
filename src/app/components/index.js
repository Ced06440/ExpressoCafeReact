import React from "react";

export const Navbar = ({ filter }) => {
    return (
        <nav className="navbar bg-primary navbar-expand-lg navbar-light">
            <a href="#" className="navbar-brand">
                <i className="fas fa-shopping-cart"></i> Expresso Café
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="ml-auto cart">
                    <div>
                        <form className="search form-inline my-2 my-lg-0">
                            <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Rechercher"
                            arial-label="Search"
                            onChange={(e) => {
                            filter(e.target.value)
                            }}
                            />
                        </form>
                    </div>
                    <div className="menu-right">
                        {/* Cart */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export const Card = props => {
    const {item} = props
    return (
        <div className="col-sm-4">
            <div className="card">
                <img
                width="170"
                height="170"
                src = {process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`}
                alt={item.name}
                />
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h5>{item.name}</h5>
                        </div>
                        <div className="col-sm-6">
                            <p>
                                {item.price}€/{item.unit}
                            </p>
                            <button className="btn btn-warning btn-sm" data-toggle="modal" data-target={`#${item.ref}`}>
                                Voir le produit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal item={item} />
        </div>
    );
};

export const Modal = ({item}) => {
    return(
        <div
        class="modal fade"
        id={item.ref}
        data-backdrop="static"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Expresso</h5>
                    <button 
                    type="button" 
                    class="close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close"
                    >
                    <span aria-hidden="true">X</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div className="row">
                        <div className="col-sm-4">
                            <img
                                width="170"
                                height="170"
                                src={
                                    process.env.PUBLIC_URL + "assets/0/expresso1.jpg"
                                }
                                alt="Expresso"
                            />
                        </div>
                        <div className="col-sm">
                            <p class="lead">
                                lorem ipsum dolor sit amet
                            </p>
                            <h3 className="price">1.99€</h3> <br />
                            <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                            >
                            <button
                            type="button"
                            className="btn btn-secondary">
                            -
                            </button>
                            <span className="btn btn-light qty">1</span>
                            <button
                            type="button"
                            className="btn btn-secondary">
                                +
                            </button>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export const List = props => {
    const { data, category } = props
    
    return (
        <div className="col-sm">
            <div className="row">
            {data.map(item => <Card key={item.ref} item ={item} />)}
            </div>
        </div>
    );
};