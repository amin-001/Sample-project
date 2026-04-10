import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { type ColumnDef } from "@tanstack/react-table"

export interface Module {
  id: string | number,
  title: string,
  session_count: number,
  faculty_count: number
}

export const columns: ColumnDef<Module>[] = [
  {
    accessorKey: "id",
    header: " moduleID",
  },
  {
    accessorKey: "title",
    header: "moduleName",
  },
  {
    accessorKey: "session_count",
    header: "SessionCount",
  },
  {
    accessorKey: "faculty_count",
    header:"No_Faculty"
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