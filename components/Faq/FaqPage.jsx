import FaqCard from '../Faq/FaqCard'
import Footer from '../Footer/Footer';
import BackToTopButton from '../General/BackToTopButton';


const FaqPage = ({faqData}) => {
  return (
    <div className="bg-gray-100 h-screen">

      <p className="roboto700 text-center py-8 text-3xl mb-8">FAQ</p>

      <div className="container items-center mt-4 bg-gray-100 py-4 pb-14  mx-auto ">
        {faqData.map((dt,i)=> (
            <FaqCard text={dt.title} desc={dt.desc} key={i}/>
        ))}
      </div>
      <Footer/>
      <BackToTopButton/>
    </div>
  );
};

export default FaqPage;
