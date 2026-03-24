import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import AddFacultyDialog from "@/pages/component/dialogs/add-faculty-dialog";
import AddFacultyForm from "@/pages/component/forms/add-faculty-form";
import AddStudentDialog from "@/pages/component/dialogs/add-student-dialog";
import AddStudentForm from "@/pages/component/forms/add-student-form";
import AddSessionDialog from "@/pages/component/dialogs/add-session-dialog";
import AddSessionForm from "@/pages/component/forms/add-session-form";
import AddModuleDialog from "@/pages/component/dialogs/add-module-dialog";
import AddModuleForm from "@/pages/component/forms/add-module-form";

function HomePage() {

  return (
    <div>
      <Button
      variant="outline"
      onClick={() => {
        console.log("clicked!");

        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }}
    >
      Show Toast
    </Button>
    
      <AddFacultyDialog>
        <AddFacultyForm />
      </AddFacultyDialog>
      <AddStudentDialog>
        <AddStudentForm />
      </AddStudentDialog>
      <AddSessionDialog>
        <AddSessionForm />
      </AddSessionDialog>
      <AddModuleDialog>
        <AddModuleForm />
      </AddModuleDialog>
    </div>
  );
}

export default HomePage;
