import TextPrimary from "../General/TextPrimary";

const AboutPage = ({ about }) => {
  return (
    <div className="bg-gray-100 h-fit">
      <div className="bg-gray-100 py-14 h-full ">
        <div className=" m-auto flex gap-y-3 flex-col max-w-3xl p-12 rounded-lg shadow-2xl border border-gray-200 p bg-white">
          <h2 className=" aboutTitle text-center mb-4">{about.title}</h2>
          {about.desc &&
            about.desc.map((aboutData, i) => (
              <p
                className="roboto400 text-lg leading-7 text-primaryAbout"
                key={i}
              >
                {aboutData.title}
              </p>
            ))}

          <p className="roboto700 text-3xl text-secondaryAbout text-center">
            {about.desc3}
          </p>
          <div className="flex flex-col gap-x-2 ">
            {about.category && about.category.map((dt,i)=> (
            <TextPrimary text={dt.title} fontStyle={"roboto400"} />

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
