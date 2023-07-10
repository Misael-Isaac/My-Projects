import React from "react";

import propTypes from "prop-types";

function Card( {data} ) {
   const {
        location,
        current
   } = data
    return (
        <div className="bg-white text-center mt-6 rounded-lg flex flex-col justify-center items-center p-6">
            <div className="flex flex-col">
                <span className="font-bold text-3xl text-slate-700 mb-2">{location.name}</span>
                <span className="text-slate-600 font-medium font-bold">{`${location.region}, ${location.country}`}</span>
            </div>
            <div className="flex font-bold text-slate-700 mt-6 mb-4 ml-5">
                <span className="text-8xl">{current.temp_c}</span>
                <span className="mt-3 text-2xl">ºC</span>
            </div>
            <div className="flex flex col justify-center items-center">
                <img className="block" src={current.condition.icon} alt="" />
                <span className="text-slate-600 font-medium font-bold">{current.condition.text}</span>
            </div>
        </div>
    )
}

export default Card

Card.propTypes = {
    data: propTypes.object,
}.isRequired