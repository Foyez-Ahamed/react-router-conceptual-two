import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCart from "./PhoneCart";

const Phone = () => {

    const [phone , setPhone] = useState();

    // all phone id //
    const phones = useLoaderData();

    // single phone id // 
    const {id} = useParams();

    // console.log(phones, id);

     useEffect(() => {
        const findPhone = phones?.find(phoneId => phoneId.id === id);
        setPhone(findPhone);
     },[id, phones])

    return (
        <div className="flex justify-center items-center">
            <PhoneCart phone = {phone}></PhoneCart>
        </div>
    );
};

export default Phone;