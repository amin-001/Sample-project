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

export default function AddFacultyDialog({ children }: { children: ReactNode}) {
  return (
    <Dialog>
      {/* iusse */}
      <DialogTrigger asChild>
        <Button size={"xs"} variant="outline">
          Add Faculty
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle> Faculty Details </DialogTitle>
          <DialogDescription>
            {" "}
            Enter Faculty member Data for Storing in your DataBase{" "}
          </DialogDescription>
        </DialogHeader>

        {children}

      </DialogContent>
    </Dialog>
  );
}
