import React from 'react'
import { useAppDispatch } from '../app/hooks';
import { getSearchResult } from '../features/Movie/actions/getSearchResult';
import { redirect } from 'react-router-dom';

function SearchBar() {
  const dispatch = useAppDispatch()
  function changeHandler(e:any) {
    dispatch(getSearchResult(`https://api.themoviedb.org/3/search/movie?api_key=466b0e29dbd5c11d6821c50afe76d920&language=en-US&query=${e.target.value}&page=1&include_adult=false`))
    redirect("/search");
  }

  return (
    <div className="grid grid-cols-1  justify-items-center mt-[30px]">
      <div className="col-span-1 ">
        <div className="relative w-[327px] h-[42px] ">
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none ">
            <svg
              aria-hidden="true"
              className="w-5 h-5 fill-[#67686D]  "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
          
          onChange={(e) => { changeHandler(e) }}
            type="text"
            id="search-input"
            className="bg-[#3A3F47] text-[#67686D] text-[14px] rounded-[16px] focus:none ring-0 outline-0  block w-full pl-[24px] py-[10px]"
            placeholder="Search"
            required
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
