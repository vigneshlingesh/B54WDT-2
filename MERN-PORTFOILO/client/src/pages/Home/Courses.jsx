import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';



function Courses() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { courses } = portfolioData;
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
    <SectionTitle title="co"/>
    <div className="flex py-10 gap-20 sm:flex-col">
              <div className='flex flex-col gap-10 border-l-2 border-[#135e4c] w-1/3 sm:flex-row  sm:overflow-scroll sm:w-full'>
                  {courses.map((courses, index) => (
                      <div onClick={() => {
                          setSelectedItemIndex(index);
                      }} className='cursor-pointer'>

                          <h1 className={`text-xl px-5 ${selectedItemIndex === index ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a36] py-3" : "text-white"}`}>{courses.title}</h1>
                      </div>
                  ))}
              </div>
             <div className='flex items-center justify-center gap-10 sm:flex-col'>
             
              
             <div className='flex flex-col gap-6 '>
               <h1 className="text-secondary text-2xl">{courses[selectedItemIndex].title}</h1>
             
               
               
               <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
             </div>
             <div>
             <img src={courses[selectedItemIndex].image} alt=''className='h-62 w-72'/>
             </div>
          </div>
  </div>
  )
}

export default Courses