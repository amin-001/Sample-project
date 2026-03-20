import type { ReactNode } from "react"; 
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

export default function AddStudentDialog({ children }: { children: ReactNode}) {
  return (
    <Dialog>
      {/* iusse */}
      <DialogTrigger asChild>
        <Button size={"xs"} variant="outline">
          Add Student
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle> Student Details </DialogTitle>
          <DialogDescription>
            {" "}
            Enter Student Data for Storing in your DataBase{" "}
          </DialogDescription>
        </DialogHeader>

        {children}

      </DialogContent>
    </Dialog>
  );
}
