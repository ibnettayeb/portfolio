import Timeline from "../components/Timeline/Timeline";

function Experience() {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <div className="w-[50%]">
        <h3 className="text-3xl font-syncopate font-bold mb-10 text-center">
          experience
        </h3>
        <div className="w-[71%] mx-auto">
          <Timeline />
        </div>
      </div>
    </div>
  );
}
export default Experience;
