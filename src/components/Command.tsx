import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type propTypes = {
  command: any;
  title: string;
};
async function copyTextToClipboard(text: string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}

const Command = (props: propTypes) => {
  const [showNotif, setShowNotif] = useState(false);
  return (
    <div className="m-5">
      <h1 className="mb-2 font-black">{props.title}</h1>
      <div
        onClick={() => {
          copyTextToClipboard(props.command);
          setShowNotif(true);
          setTimeout(() => setShowNotif(false), 1000);
        }}
        className="relative cursor-pointer bg-emerald-500 hover:bg-emerald-800 w-auto h-auto p-5 flex text-center justify-center items-center flex-col rounded-lg border-emerald-800 border-2"
      >
        {props.command}

        <div className="absolute top-1 right-2">
          {showNotif && <FontAwesomeIcon icon={faCheck} />}
        </div>
      </div>
    </div>
  );
};

export default Command;
