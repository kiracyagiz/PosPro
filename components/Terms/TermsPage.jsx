
import TermsSections from "./TermsSections";

const TermsPage = ({termsData}) => {



  return (
    <div className="bg-gray-100  ">
      <h1 className="text-center text-4xl py-12 font-semibold heroRoboto">
        {`TERMS`}
      </h1>

      <TermsSections
      termsData={termsData}
      />


    </div>
  );
};

export default TermsPage;
