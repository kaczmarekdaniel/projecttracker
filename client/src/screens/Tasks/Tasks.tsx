import BaseScreen from "@/layouts/BaseScreen/BaseScreen";
import { Task } from "@/screens/Tasks/components/Task.tsx";
import { Filters } from "@/screens/Tasks/components/Filters.tsx";

const Tasks = () => {
  return (
    <BaseScreen styles={"flex flex-col items-center justify-center mt-20 pb-20"}>
      <div className="bg-offwhite mx-auto w-4/5 p-8 flex flex-col gap-4 rounded-xl">
        <h2 className="text-xl font-regular text-primary leading-none">Recent groups</h2>
        <ul className="grid grid-cols-3 gap-3">
          <li className="h-24 rounded-lg shadow-sm border "></li>
          <li className="h-24 rounded-lg shadow-sm border "></li>
          <li className=" h-24  rounded-lg shadow-sm border"></li>
        </ul>
      </div>

      <Filters />

      <ul className="mx-auto w-4/5 mt-2 flex flex-col gap-2">
        <Task />

      </ul>
    </BaseScreen>
  );
};

export default Tasks;
