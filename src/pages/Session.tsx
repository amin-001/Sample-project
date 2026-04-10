import SessionTable from './component/tables/Session/session.table';
import { columns, type Student } from './component/tables/students/columns';

function getData(): Student[] {
  return [
    {
      id: "728ed52f",
      firstName: "Tarker",
      lastName: "Carson",
      email: "m@example.com",
      gender: "male",
      batch: 2025,
      program: "MBBS",
      role: "Student"
    },
  ]
}
export default function SessionPage() {
  const data = getData()
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 p-2">
       <SessionTable columns={columns} data={data} />
      </div>
    </div>
  )

}