import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 py-4 px-4  border-t-[1px] bg-dark-gray border-light-blue  lg:hidden ">
      <div className="grid grid-cols-3 justify-items-center gap-14">
        <div className="col-span-1 text-light-gray hover:text-light-blue grid grid-rows-2 justify-items-center items-center ">
          <div className="row-span-1">
          <Link to={"/"} >
            <svg
              className="stroke-light-gray hover:stroke-light-blue"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" "
                d="M15.5246 21H13.7818H6.34876H4.60596C2.86861 21 1.46021 19.4607 1.46021 17.5618V8.84736C1.4669 8.09967 1.78834 7.39702 2.3316 6.94256L8.26584 1.6853C9.31003 0.771566 10.7944 0.771566 11.8386 1.6853L17.799 6.93303C18.3402 7.38935 18.6611 8.09083 18.6704 8.83784V17.5618C18.6704 19.4607 17.2619 21 15.5246 21Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </Link>
          </div>
          <Link to={"/"} >
          <div className="row-span-1 text-xs">Home</div>
          </Link>
        </div>
        <div className="col-span-1 text-light-gray hover:text-light-blue grid grid-rows-2 justify-items-center items-center">
         
          <Link className="row-span-1" to={"/search"}> <div >
            <svg
              className="stroke-light-gray hover:stroke-light-blue"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="9.78854"
                cy="10.7666"
                rx="8.14181"
                ry="8.98856"
               
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.4513 17.4851L18.6433 21"
              
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div></Link>
          <div className="row-span-1 text-xs">  Search</div>
        </div>
        <div className="col-span-1 text-light-gray hover:text-light-blue grid grid-rows-2 justify-items-center items-center">
          <div className="row-span-1">
            <svg
              className="stroke-light-gray hover:stroke-light-blue"
              width="17"
              height="22"
              viewBox="0 0 17 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.69633 17.6316L2.32373 20.881C1.89477 21.1271 1.3663 20.9529 1.12982 20.4874V20.4874C1.0614 20.3432 1.02449 20.1834 1.02203 20.0206V5.62244C1.02203 2.87644 2.7217 1.77805 5.16756 1.77805H10.9133C13.2845 1.77805 15.0588 2.80322 15.0588 5.43937V20.0206C15.0588 20.2804 14.9653 20.5295 14.7989 20.7132C14.6326 20.8968 14.4069 21 14.1716 21C14.0216 20.9974 13.874 20.9567 13.7405 20.881L8.33474 17.6316C8.13554 17.5128 7.89553 17.5128 7.69633 17.6316Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="row-span-1 text-xs">Watch List</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
