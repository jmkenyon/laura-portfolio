import { useCvData } from "../assets/cvData";

const Resume = () => {
  const cvData = useCvData();

  return (
    <div className="columns-1 sm:columns-2 gap-8 lg:ml-30 md:ml-14 sm:ml:8 mt-18">
      {cvData.map((section) => (
        <div
          key={section.title}
          className="break-inside-avoid pb-18 max-w-sm text-sm"
        >
          <h2 className="mb-4">[{section.title}]</h2>
          {section.items.map((item, index) => (
            <div key={index}>
              {"subtitle" in item && (
                <h3 className="font-light mt-4 text-sm">{item.subtitle}</h3>
              )}
              {item.text &&
                (Array.isArray(item.text) ? (
                  item.text.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-sm">
                      {line}
                    </p>
                  ))
                ) : (
                  <p className="text-sm">{item.text}</p>
                ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Resume;
