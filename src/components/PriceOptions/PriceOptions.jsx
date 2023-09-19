import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const data = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Basic fitness classes",
                "Towel service",
                "24/7 access"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited fitness classes",
                "Personal trainer consultation",
                "Nutrition counseling",
                "Sauna access"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": "$79.99",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited fitness classes",
                "Family access (2 adults, 2 children)",
                "Childcare services",
                "Swimming pool access"
            ]
        },

    ]

    return (
        <div className="m-12">
            <div className="grid md:grid-cols-3  gap-6">
                {/* <h2 className="text-2xl">Best Price of the town</h2> */}
                {
                    data.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;