/* eslint-disable react/prop-types */

import Featuers from "../Featuers/Featuers";


const PriceOption = ({ option }) => {

    const { name, price, features } = option;
    return (
        <div className="bg-blue-500 rounded-md p-4 flex flex-col text-white">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                {/* <span className="text-3xl">/mon</span> */}
            </h2>
            <h4 className="text-53xl text-center my-8">{name}</h4>
            <div className="pl-6 flex-grow">
                {
                    features.map((feature, index) => <Featuers key={index} feature={feature}></Featuers>)
                }

            </div>
            <button className="mt-12 w-full bg-green-600 py-4 font-bold rounded-lg hover:bg-green-900">By now</button>

        </div>

    );
};

export default PriceOption;