import AddFacultyDialog from './component/dialogs/add-faculty-dialog';
import AddFacultyForm from './component/forms/add-faculty-form';
import FacultyTable from './component/tables/Faculty/faculty.table';
import { columns, type Faculty } from './component/tables/Faculty/fcolunm';


function getData(): Faculty[] {
  return [
    {
      id: "1",
      firstName: "Amin",
      lastName: "Muhammad",
      email: "m@example.com",
      gender: "male",
      speciality: "Computer Science",
      role: "Teacher"
    },
  ]
}

export default function FacultyPage() {
  const data = getData()

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 p-2">
        <AddFacultyDialog>
          <AddFacultyForm/>
        </AddFacultyDialog>
        <FacultyTable columns={columns} data={data} />
      </div>
    </div>
  )

}