import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {


  return (

    <div className='container' >
      <div>
        <header>
          <div>
            <nav>
              <strong><a href=''>Guvi</a></strong>
            </nav>
          </div>
          <div className='title-head'>
            <h1>Price Card Task</h1>

            <p>Reproduce this user interface using a React.js application with JSX. Write the code in a dynamic manner.</p>

          </div>
        </header>
        <main>
          <div className='main-container'>
          <div className='sub-container1'>
            <div className='col'>
              <div className='card'>
                <div className='card-text-center'>
                  <div className='card-header'>
                    <h4 className='fw-normal'>Free</h4>

                  </div>
                  <div className='card-body'>
                    <h1 className='card-title'>
                      $0<small>/month</small>
                    </h1>
                    <ul className='list-unstyled py-3 text-small text-left'>
                      <li className='fa fa-check'>Single User</li>
                      <li className='fa fa-check'>50GB Storage</li>
                      <li className='fa fa-check'>Unlimited Public Project</li>
                      <li className='fa fa-check'>Community Access</li>
                      <li className='fa fa-times'>Unlimiter Private Project</li>
                      <li className='fa fa-times'>Dedicated Phone Support</li>
                      <li className='fa fa-times'>Free Subdomain</li>
                      <li className='fa fa-times'>Monthly Status Report</li>
                    </ul>
                    <button className='click-button'>Button</button>
                  </div>
                  


                </div>
              </div>
            </div>

          </div>
          <div className='sub-container2'>
            <div className='col'>
              <div className='card'>
                <div className='card text-center'>
                  <div className='card-header'>
                    <h4 className='fw-normal'>plus</h4>

                  </div>
                  <div className='card-body'>
                    <h1 className='card-title'>
                      $9<small>/month</small>
                    </h1>
                    <ul>
                      <li className='fa fa-check'>Single User</li>
                      <li className='fa fa-check'>50GB Storage</li>
                      <li className='fa fa-check'>Unlimited Public Project</li>
                      <li className='fa fa-check'>Community Access</li>
                      <li className='fa fa-check'>Unlimiter Private Project</li>
                      <li className='fa fa-check'>Dedicated Phone Support</li>
                      <li className='fa fa-check'>Free Subdomain</li>
                      <li className='fa-fa-times'>Monthly Status Report</li>
                    </ul>
                    <button className='click-button'>Button</button>
                  </div>
                  


                </div>
              </div>
            </div>

          </div>
          <div className='sub-container3'>
            <div className='col'>
              <div className='card'>
                <div className='card text-center'>
                  <div className='card-header'>
                    <h4>PRO</h4>

                  </div>
                  <div className='card-body'>
                    <h1 className='card-title'>
                      $49<small>/month</small>
                    </h1>
                    <ul>
                      <li className='fa fa-check'>Single User</li>
                      <li className='fa fa-check'>50GB Storage</li>
                      <li className='fa fa-check'>Unlimited Public Project</li>
                      <li className='fa fa-check'>Community Access</li>
                      <li className='fa fa-check'>Unlimiter Private Project</li>
                      <li className='fa fa-check'>Dedicated Phone Support</li>
                      <li className='fa fa-check'> Free Subdomain</li>
                      <li className='fa fa-check'>Monthly Status Report</li>
                    </ul>
                    <button className='click-button'>Button</button>
                  </div>
                  

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

export default App
