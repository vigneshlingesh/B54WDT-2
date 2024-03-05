import React from 'react'


export default function Price() {
  return (
    <div className='card'>
     <div className='container'>
        <header>
            <div className='d-flex align-items-center ms-auto'>
                <nav>
                <strong><a href=''>Guvi</a></strong>
                </nav>
            </div>
            <div className='text-center w-75 my-4 mx-auto'>
                <h1>Price Card Task</h1>

                <p className='fs-5 text-muted'>Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.</p>

            </div>
        </header>
        <main>
            <div className='row row-cols-1 row-cols-md-3'>
                <div className='col'>
                    <div className='card'>
                        <div className='card text-center'>
                            <div className='card-header'>
                                <h4 className='fw-normal'>free</h4>

                            </div>
                            <div className='card-body'>
                                <h1 className='card-title'>
                                    $0<small className='text-muted fw-light'>/mo</small>
                                </h1>
                                <ul className='list-unstyled py-3'>
                                    <li className='fa fa-check'>Single User</li>
                                    <li className='fa fa-check'>50GB Storage</li>
                                    <li className='fa fa-check'>Unlimited Public Project</li>
                                    <li className='fa fa-check'>Community Access</li>
                                    <li className='fa '>Unlimiter Private Project</li>
                                    <li>Dedicated Phone Support</li>
                                    <li>Free Subdomain</li>
                                    <li>Monthly Status Report</li>
                                </ul>
                                <button>Button</button>
                            </div>
                           

                        </div>
                    </div>
                </div>

            </div>
        </main>
      </div>
      
    </div>
  )
}
