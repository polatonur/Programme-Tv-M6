import data from "../data.json";

const extra = (doc) => {
  if (doc.isUnseen) {
    return "• Inédit";
  } else if (doc.direct) {
    return "• Direct";
  } else return "";
};

const Programme = () => {
  return (
    <div className="mainContent">
      {data.map((program, index) => {
        return (
          <div className="program-item">
            <div className="col-1">
              <span>{program.time}</span>
            </div>
            <div className="col-2">
              <div>
                <img src={program.image} alt="program image" />
              </div>
              <div>
                <h2>{program.title}</h2>
                <p>{program.type}</p>
                <p>
                  <span>{program.duration}</span> <span>{extra(program)}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Programme;
