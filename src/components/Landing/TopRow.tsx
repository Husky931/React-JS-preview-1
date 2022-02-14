import React from "react"
import Globe from "../Globe"

const TopRow: React.FC = () => {
  return (
    <div className="w-full flex justify-start relative padding-top: 100px;">
      <div className="text-white font-bold w-auto mr-0 ml-16 md:pt-8 lg:pt-16 inline-block z-30">
        <div className="mb-10">
          <h1 className="text-8xl mb-5 text-white">Always</h1>
          <h1 className="text-8xl">
            <span className="text-white">Ready </span>
            <span className="text-white">to </span>
            <span className="text-white">code </span>
          </h1>
        </div>
        <div className="">
          <p className="text-lg mb-1 text-primary-p-color font-normal">Create, edit & deploy fullstack apps with</p>
          <p className="text-lg text-primary-p-color font-normal">
            <span className="text-secondary-p-color font-bold">faster package installations</span> &{" "}
            <span className="text-secondary-p-color font-bold">greater security</span>
          </p>
          <p className="text-lg text-primary-p-color font-normal">than even local environments</p>
        </div>
      </div>
      <div className="text-white font-bold text-3xl absolute bottom-30 right-6 ">
        <Globe />
      </div>
    </div>
  )
}

export default TopRow
