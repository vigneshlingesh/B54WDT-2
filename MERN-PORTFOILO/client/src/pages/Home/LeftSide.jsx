import React from 'react'

function LeftSide() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <a href='#'><i class="ri-facebook-circle-fill text-gray-500"></i></a>
                    <a href='#'><i class="ri-instagram-line  text-gray-500">  </i></a>
                    <a href='#'><i class="ri-mail-fill  text-gray-500"></i></a>
                    <a href='#'><i class="ri-whatsapp-fill  text-gray-500 "></i></a>
                    <a href='#'><i class="ri-linkedin-fill   text-gray-500 "></i></a>
                    <a href='#'><i class="ri-github-fill   text-gray-500"></i></a>
                </div>
                <div className='w-[1px] h-52 bg-[#125f63] sm:hidden'>

                </div>

            </div>
        </div>
    )
}

export default LeftSide
