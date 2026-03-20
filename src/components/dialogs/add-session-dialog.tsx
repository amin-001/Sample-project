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

export default function AddSessionDialog({ children }: { children: ReactNode}) {
  return (
    <Dialog>
      {/* iusse */}
      <DialogTrigger asChild>
        <Button size={"xs"} variant="outline">
          Add Session
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle> Session Details </DialogTitle>
          <DialogDescription>
            {" "}
            Enter Session Details For Students{" "}
          </DialogDescription>
        </DialogHeader>

        {children}

      </DialogContent>
    </Dialog>
  );
}
