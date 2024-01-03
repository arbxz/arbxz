import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Alert = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between py-2 px-4 gap-4 text-white bg-danger rounded-md">
        Just an alert
        <button className="rounded-full h-6 w-6 flex items-center justify-center border-[1px] bg-white text-danger hover:bg-danger hover:text-white duration-300 transition-colors hover:border-white">
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <div className="flex items-center justify-between py-2 px-4 gap-4 text-white bg-warning rounded-md">
        Just an warning
        <button className="rounded-full h-6 w-6 flex items-center justify-center border-[1px] bg-white text-warning hover:bg-warning hover:text-white duration-300 transition-colors hover:border-white">
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
    </div>
  );
};

export default Alert;
