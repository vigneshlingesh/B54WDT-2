

function Home() {
  
return(
    <div className="container">
        <header>
            <div className="d-flex aligin-items-center ms-auto">
                <a href="#" className="navbar- brand fs-4">Easy Shop</a>
                <nav>
                 <strong><a href="">Priceing</a></strong>
                 <strong><a href="">Contact</a></strong>
                    
                </nav>
            </div >
            <div className="text-center w-75 mx-auto">
                <h1>Priceing</h1>
                <p>Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.</p>
            </div>
        </header>
        <main>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col">
                    <div className="card text-cent">
                        <div className="card-header">
                            <h4 className="fw-normal">Free</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title">
                                $0<small className="text-muted fw-light">mo</small>
                            </h1>
                            <ul className="list-unstyler py-3">
                           <li> 10 user Included</li>
                            <li>10GB of Storage</li>
                            <li>Priority email support</li>
                            <li>Help center acces</li>
                            </ul>
                            <button className="btn btn-lg btn-success w-100 btn-outline-success">Sing Up Free</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col">
                    <div className="card text-cent">
                        <div className="card-header">
                            <h4 className="fw-normal">Free</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title">
                                $0<small className="text-muted fw-light">mo</small>
                            </h1>
                            <ul className="list-unstyler py-3">
                           <li> 10 user Included</li>
                            <li>10GB of Storage</li>
                            <li>Priority email support</li>
                            <li>Help center acces</li>
                            </ul>
                            <button className="btn btn-lg btn-success w-100 btn-outline-success">Sing Up Free</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    </div>
)

  }
  
  export default Home