import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select.tsx";
import { CaretSortIcon, PlusIcon, TextAlignCenterIcon } from "@radix-ui/react-icons";

export const Filters = () => {
  return (
    <div className="w-4/5 mx-auto flex flex-row items-center justify-between mt-16">
      {/*<h2 className="text-xl font-regular text-primary">Filter</h2>*/}
      <div className="flex gap-2">
        <Select>
          <SelectTrigger className="w-[220px] h-10 bg-offwhite flex border-none">
            <div className="flex gap-2 items-center">
              <TextAlignCenterIcon />
              <SelectValue
                placeholder="Filter" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[120px] h-10 bg-offwhite flex border-none">
            <div className="flex gap-2 items-center">
              <CaretSortIcon />
              <SelectValue
                placeholder="Filter" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select></div>
      <button
        className="flex items-center justify-center gap-2 text-offwhite  bg-primary py-2 px-3 leading-none rounded-lg">
        <PlusIcon />
        <span className="text-sm font-semibold">new task</span>
      </button>
    </div>
  );
};