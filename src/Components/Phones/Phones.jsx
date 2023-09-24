import PhonesCart from "./PhonesCart";


const Phones = ({phones}) => {

    return (
        <div className="mt-16">
            <h1 className="text-center">All phones category</h1>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                phones?.map(phone => <PhonesCart key={phone.id} phone = {phone}></PhonesCart>)
            }
          </div>

        </div>
    );
};

export default Phones;