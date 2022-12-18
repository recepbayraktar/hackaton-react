import React from 'react'

function NoSearchResult() {
  return (
    <div className='grid justify-items-center items-center'>
        <div className='mt-40 grid justify-items-center'>
        <img src="no-results.png" alt="" />
        <h2 className='text-xl mx-24 text-white mt-2'>We Are Sorry, We Can Not Find The Movie :(</h2>
        <p className='text-sm mx-24 mt-6 text-light-gray'>Find your movie by Type title, categories, years, etc</p>
        </div>
    </div>
  )
}

export default NoSearchResult