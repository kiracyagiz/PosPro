import TextPrimary from "../General/TextPrimary";

const AboutPage = ({about}) => {
 
  return (
    <div className="bg-gray-100">
   <div className="bg-gray-100 py-14 h-full ">
        <div className=" mx-auto flex gap-y-3 flex-col max-w-3xl p-12 rounded-lg shadow-2xl border border-gray-200 p bg-white">
          <h2 className=" aboutTitle text-center mb-4">{about.title}</h2>
          <p className="roboto400 text-lg leading-7 text-primaryAbout">
            {about.desc1}
          </p>
          <p className="roboto400 text-lg leading-7 text-primaryAbout">
            {about.desc2}
          </p>
          <p className="roboto700 text-3xl text-secondaryAbout text-center">
            {about.desc3}
          </p>
          <div className="flex flex-col gap-x-2 ">
            <TextPrimary text={about.category1} fontStyle={"roboto400"} />
            <TextPrimary text={about.category2} fontStyle={"roboto400"} />
          </div>
        </div>
      </div>
   
    </div>
  );
};



export default AboutPage;
