import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Contact() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const { Contact } = portfolioData;


    return (
        <div>
            <SectionTitle title="Say Hello!! " />

            <div className='flex sm:flex-col'>
                <div className='flex flex-col gap-2'>
                    <p className='text-tertiary text-sm'>{'{'}</p>
                    {Object.keys(Contact).map((key) => (
                        <p >
                            <span className='text-tertiary text-sm'>{key}:</span> : <span className='text-tertiary text-sm'>{Contact[key]}</span>
                        </p>
                    ))}
                    <p className='text-tertiary text-sm'>{'}'}</p>

                </div>
            </div>
        </div>
    )
}

export default Contact
