/* eslint-disable react/prop-types */


const Link = ({ route }) => {
    return (
        <li className="mr-10 px-6 hover:bg-green-600" ><a href={`route.path`}></a>{route.name}
        </li>
    );
};

export default Link;