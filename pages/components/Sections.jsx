import React from 'react'
import Image from 'next/image'

const Sections = () => {
  return (
    <div className='my-12 mx-16 flex justify-left'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='sectionDet bg-blue-100 rounded-md shadow-md'>
                <h2 className='text-4xl text-black font-bold text-center'>Private Jets</h2>
                <p className='text-blue-500 text-center'>Fly High. Stay Private.</p>
                <Image src='/rrp.png' alt='Private Jets' width={650} height={650} className='planeIm rounded-b '/>
            </div>
            <div className='sectionDet bg-blue-100 rounded-md shadow-md'>
                <h2 className='text-4xl text-black font-bold text-center'>Private Jets</h2>
                <p className='text-blue-500 text-center'>Fly High. Stay Private.</p>
                <Image src='/rrp.png' alt='Private Jets' width={650} height={650} className='planeIm rounded-b '/>
            </div>
            <div className='sectionDet bg-blue-100 rounded-md shadow-md'>
                <h2 className='text-4xl text-black font-bold text-center'>Private Jets</h2>
                <p className='text-blue-500 text-center'>Fly High. Stay Private.</p>
                <Image src='/rrp.png' alt='Private Jets' width={650} height={650} className='planeIm rounded-b '/>
            </div>
            <div className='col-start-1 col-span-3 sectionDet bg-blue-100 rounded-md shadow-md'>
                <h2 className='text-4xl text-black font-bold text-center'>Private Jets</h2>
                <p className='text-blue-500 text-center'>Fly High. Stay Private.</p>
                <Image src='/rrp.png' alt='Private Jets' width={650} height={650} className='planeIm rounded-b '/>
            </div>
        </div>
      
    </div>
  )
}

export default Sections
