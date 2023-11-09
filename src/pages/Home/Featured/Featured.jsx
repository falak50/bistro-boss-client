import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed  text-white pt-8 my-20">
          <SectionTitle subHeading="check it out" heading="Featured Item">
          </SectionTitle>
          <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20  pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aur 20,2029</p>
                <p className="uppercase">where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur praesentium eaque id enim quod aperiam, corporis nulla eius? Quo veritatis dignissimos consequatur incidunt repellendus quis. Saepe velit nemo cupiditate harum. Enim consequuntur ut possimus sit voluptates illo rerum, suscipit culpa ipsam debitis reiciendis nisi, placeat exercitationem eveniet, dolorem sed!</p>
                <button className="btn btn-outline  border-0 border-b-4">Order Now</button>

            </div>
          </div>
        </div>
    );
};

export default Featured;