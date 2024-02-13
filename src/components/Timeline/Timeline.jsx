import { timeline } from "../../data/data";
const Timeline = () => {
  return (
    <ol className="items-center sm:flex">
      {timeline.map((event, index) => (
        <li key={index} className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-bg-200 sm:ring-8 dark:ring-bg-300 shrink-0"></div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-bg-200"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {event.title}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {event.year}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {event.description}
            </p>
            <ul className="flex gap-3 mt-3">
              {event.skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-xs rounded-full bg-bg-100 border border-bg-200 px-3 py-1"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
