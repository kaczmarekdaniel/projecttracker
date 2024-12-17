import { ListIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress.tsx";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox.tsx";
export const Task = () => {
  const [showSubtasks, setShowSubtasks] = useState(true);

  return (
    <li className="bg-offwhite h-auto p-7 grid grid-cols-10 gap-4 rounded-xl">
      <div className="col-span-4 flex flex-col justify-center ">
        <h3 className="text-md font-bold leading-none">Fix the API error handling</h3>
        <p className="text-xs font-semibold opacity-80">Chatbot</p>
      </div>
      <div className="col-span-3 flex flex-row items-center justify-start gap-2 ">
        <button onClick={() => setShowSubtasks(!showSubtasks)}
                className="w-auto h-7 bg-offwhite flex items-center justify-center rounded-sm gap-1 px-3 border">
          <ListIcon className="w-3" />
          <span className="text-xs leading-0">4</span>
        </button>
      </div>
      <div className="col-span-3 flex items-center justify-between  ">
        <div className="w-3/4 flex gap-2 items-center justify-start">
          <Progress value={60} className="">
          </Progress>
        </div>
        <button className="w-1/4 flex justify-end">
          <DotsHorizontalIcon className="w-5 " />
        </button>
      </div>
      {showSubtasks && (
        <div className="grid grid-cols-4 gap-2 col-span-10 min-h-32 mt-2 ">
          <div className="col-span-1 bg-primary rounded-md p-4 text-offwhite">
            description
          </div>
          <div className="col-span-3 rounded-md bg-secondary flex flex-col p-4 gap-2">
            <div className="items-top flex space-x-2 w-auto border border-orange-600 shadow-sm hover:shadow-md transition-shadow duration-400 bg-white/60 rounded-md p-2">
              <Checkbox id="terms1" />
              <div className="flex flex-row items-center gap-2 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  setup Jest
                </label>
                <p className="text-xs opacity-70 font-extralight leading-none">lorem ipsum blah blah blah this is
                  description</p>

              </div>
            </div>
            <div className="items-top flex border border-green-600 space-x-2 w-auto bg-white/60 rounded-md p-2 ">
              <Checkbox id="terms1" />
              <div className="grid w-auto gap-1.5 leading-none cursor-pointer">
                <label
                  htmlFor="terms1"
                  className="text-sm cursor-pointer font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  setup Jest
                </label>

              </div>
            </div>
          </div>

        </div>)}
    </li>

  );
};