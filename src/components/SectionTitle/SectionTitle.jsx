

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto md:w-3/12  my-8">
            <p className="text-yellow-600  mb-2 text-center">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4 text-center">{heading}</h3>
        </div>
    );
};

export default SectionTitle;