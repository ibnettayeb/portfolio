import { timeline } from "../../data/data";
const Timeline = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {timeline.map((event, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {event.year}
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {event.title}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {event.description}
          </p>
          <ul className="flex items-center gap-3">
            {event.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-bg-100 border  border-bg-200 py-1 px-3 rounded-full text-xs"
              >
                {skill}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
