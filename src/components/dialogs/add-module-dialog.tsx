import type { ReactNode } from "react"; 
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function AddModuleDialog({ children }: { children: ReactNode}) {
  return (
    <Dialog>
      {/* iusse */}
      <DialogTrigger asChild>
        <Button size={"xs"} variant="outline">
          Add Module
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle> Module Details </DialogTitle>
          <DialogDescription>
            {" "}
            Enter Module Details For Students{" "}
          </DialogDescription>
        </DialogHeader>

        {children}

      </DialogContent>
    </Dialog>
  );
}
