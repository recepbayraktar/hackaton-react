import React from 'react'
import { Link } from 'react-router-dom'

function HorizantalMovieCard({ title,id, poster_path,release_date,vote_average }: any) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="grid grid-cols-12 text-white mt-4  px-8 gap-3">
        <div className="col-span-4">
          <img
            className="w-[95] h-[120] rounded-[16px]"
            src={ `https://image.tmdb.org/t/p/w500${poster_path}`}
            alt=""
          />
        </div>
        <div className="col-span-8 ">
          <h1 className=" movie-title mb-4">{title}</h1>
          <div className="flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.27569 10.9208L10.4279 12.9179C10.8308 13.1732 11.3311 12.7935 11.2115 12.3232L10.3008 8.74052C10.2752 8.64073 10.2782 8.53573 10.3096 8.4376C10.3409 8.33946 10.3994 8.25218 10.4781 8.18577L13.3049 5.83306C13.6763 5.52392 13.4846 4.90751 13.0074 4.87654L9.31588 4.63696C9.21645 4.62986 9.12109 4.59465 9.04089 4.53545C8.96069 4.47625 8.89896 4.39548 8.86289 4.30255L7.48612 0.835486C7.44869 0.736852 7.38215 0.651935 7.29532 0.592013C7.2085 0.532092 7.1055 0.5 7 0.5C6.89451 0.5 6.79151 0.532092 6.70468 0.592013C6.61786 0.651935 6.55131 0.736852 6.51389 0.835486L5.13712 4.30255C5.10104 4.39548 5.03931 4.47625 4.95912 4.53545C4.87892 4.59465 4.78355 4.62986 4.68412 4.63696L0.992627 4.87654C0.515435 4.90751 0.323731 5.52392 0.695149 5.83306L3.52185 8.18577C3.60063 8.25218 3.65906 8.33946 3.69044 8.4376C3.72181 8.53573 3.72485 8.64073 3.6992 8.74052L2.85459 12.063C2.71111 12.6274 3.31143 13.083 3.79495 12.7767L6.72431 10.9208C6.8067 10.8683 6.90234 10.8405 7 10.8405C7.09767 10.8405 7.1933 10.8683 7.27569 10.9208V10.9208Z"
                stroke="#FF8700"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="ml-2 movie-rating">{vote_average}</div>
          </div>

          <div className="flex items-center mt-1">
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 7.44939C0.499978 7.3342 0.539787 7.22255 0.612679 7.13336C0.685571 7.04416 0.787061 6.98292 0.899948 6.96C1.35166 6.86772 1.75763 6.62224 2.04919 6.26509C2.34075 5.90794 2.5 5.46104 2.5 5C2.5 4.53896 2.34075 4.09206 2.04919 3.73491C1.75763 3.37776 1.35166 3.13228 0.899948 3.04C0.787061 3.01708 0.685571 2.95584 0.612679 2.86664C0.539787 2.77745 0.499978 2.6658 0.5 2.55061V1C0.5 0.867392 0.552678 0.740215 0.646447 0.646447C0.740215 0.552679 0.867392 0.5 1 0.5H13C13.1326 0.5 13.2598 0.552679 13.3536 0.646447C13.4473 0.740215 13.5 0.867392 13.5 1V2.55061C13.5 2.6658 13.4602 2.77745 13.3873 2.86665C13.3144 2.95584 13.2129 3.01708 13.1001 3.04C12.6483 3.13229 12.2424 3.37777 11.9508 3.73492C11.6592 4.09207 11.5 4.53896 11.5 5C11.5 5.46105 11.6592 5.90794 11.9508 6.26509C12.2424 6.62224 12.6483 6.86772 13.1001 6.96001C13.2129 6.98292 13.3144 7.04417 13.3873 7.13336C13.4602 7.22255 13.5 7.3342 13.5 7.44939V9C13.5 9.13261 13.4473 9.25979 13.3536 9.35355C13.2598 9.44732 13.1326 9.5 13 9.5H1C0.867392 9.5 0.740215 9.44732 0.646447 9.35355C0.552678 9.25979 0.5 9.13261 0.5 9V7.44939Z"
                stroke="#EEEEEE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="ml-2  movie-info">Action</div>
          </div>
          <div className="flex items-center mt-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V3C13.5 2.72386 13.2761 2.5 13 2.5Z"
                stroke="#EEEEEE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 1.5V3.5"
                stroke="#EEEEEE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 1.5V3.5"
                stroke="#EEEEEE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 5.5H13.5"
                stroke="#EEEEEE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="ml-2  movie-info">{release_date}</div>
          </div>
          <div className="flex items-center mt-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                stroke="#EEEEEE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 4.5V8H11.5"
                stroke="#EEEEEE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="ml-2  movie-info">139 minutes</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HorizantalMovieCard
