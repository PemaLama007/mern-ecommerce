import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36' >Description</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36' >Care Guide</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36' >Size Guide</button>
      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos saepe tempore perspiciatis exercitationem nemo ipsum, ea aliquid, libero dolores quibusdam provident magni quasi et quis. Reprehenderit aut eveniet aperiam necessitatibus, quasi inventore, asperiores voluptatem commodi facere sed molestiae hic?</p>
        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, aliquid ipsam! Deleniti, ad consequatur. Quia eveniet in, odio enim distinctio tempora alias.</p>
      </div>
    </div>
  )
}

export default ProductDescription