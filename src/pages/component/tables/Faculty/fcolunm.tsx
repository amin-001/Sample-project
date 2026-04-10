import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { type ColumnDef } from "@tanstack/react-table"

export interface Faculty {
  id: string | number,
  firstName: string,
  lastName: string | null,
  email: string,
  gender: "male" | "female",
  speciality: string,
  role: string
}

export const columns: ColumnDef<Faculty>[] = [
  {
    accessorKey: "id",
    header: "Student ID",
  },
  {
    header: "Name",
    cell: ({ row }) => `${row.original.firstName} ${row.original.lastName}`
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender"
  },
  {
    accessorKey:"speciality",
    header:"Speciality"
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "Actions",
    cell: ({ row }) => {
      const studentId = row.original.id

      return (
        <ButtonGroup className="cursor-pointer">
          <Button type="button" variant={"outline"} size={"sm"} onClick={() => console.log(studentId)}>
            <Eye />
          </Button>
          <Button type="button" variant={"outline"} size={"sm"} onClick={() => console.log(studentId)}>
            <Pencil />
          </Button>
          <Button type="button" variant={"outline"} size={"sm"} onClick={() => console.log(studentId)}>
            <Trash2 className="text-red-500" />
          </Button>
        </ButtonGroup>
      )
    }
  }
]