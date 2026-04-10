
import AddStudentDialog from "./component/dialogs/add-student-dialog";
import AddStudentForm from "./component/forms/add-student-form";
import { columns, type Student } from "./component/tables/students/columns";
import StudentsTable from "./component/tables/students/students.table";
function getData(): Student[] {
  return (
    
    [

    {
      id: "728ed52f",
      firstName: "Tarker",
      lastName: "Carson",
      email: "m@example.com",
      gender: "male",
      batch: 2025,
      program: "MBBS",
      role: "Student",
    },
  ])
}

export default function StudentPage() {
  const data = getData()
  
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 p-2">
        <AddStudentDialog>
          <AddStudentForm/>
          </AddStudentDialog>
  
        <StudentsTable columns={columns} data={data} />
      </div>
    </div>
  );
}
