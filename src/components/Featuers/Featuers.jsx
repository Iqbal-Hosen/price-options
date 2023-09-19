// import { AiFillCheckCircle } from "react-icons/ai";

import { AiFillCheckCircle } from "react-icons/Ai";

const Featuers = ({ feature }) => {
    return (
        <div>
            <p className="flex items-center gap-3">
                <AiFillCheckCircle className="text-black"></AiFillCheckCircle>{feature}</p>

        </div>
    );
};

export default Featuers;