import { useAppSelector } from "@/app/hook";
import AddModuleDialog from "./component/dialogs/add-module-dialog";
import AddModuleForm from "./component/forms/add-module-form";
import { columns } from "./component/tables/Module/mcolunm";
import ModuleTable from "./component/tables/Module/module.table";

// function getData(): Module[] {
//   return [
//     {
//       id: 1,
//       title: "Programming Fundamental",
//       Sessions: 3,
//       no_faculty: 6,
//     },
//   ];
// }

export default function ModulePage() {
  const { data } = useAppSelector((state) => state.modules);
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 p-2">
        <AddModuleDialog>
          <AddModuleForm />
        </AddModuleDialog>
        <ModuleTable columns={columns} data={data} />
      </div>
    </div>
  );
}
