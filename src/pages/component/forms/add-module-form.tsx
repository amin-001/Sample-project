import { Field, FieldGroup, FieldLabel } from "../../../components/ui/field";
import { Input } from "../../../components/ui/input";
import { DialogClose, DialogFooter } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { useForm } from "react-hook-form";
import { Spinner } from "../../../components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModuleSchema, type IModule } from "@/lib/zod";
import { useAppDispatch } from "@/app/hook";
import { setData } from "@/features/modules/modulesSlice";

export default function AddModuleForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(ModuleSchema),
  });

  const handleForm = (data: IModule) => {
    setTimeout(() => {
      console.log(data)
    }, 20000);
      dispatch(setData(data));
      reset();
  };

  console.log(isSubmitting)

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <FieldGroup>
        <div>
          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input id="title" placeholder="title" {...register("title")} />
            {errors.title && errors.title.message}
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="no_of_faculty">No of faculty</FieldLabel>
          <Input id="no_of_faculty" {...register("faculty_count")} />
        </Field>

        <Field className="pb-4">
          <FieldLabel htmlFor="no_of_modules">Module</FieldLabel>
          <Input
            id="no_of_modules"
            placeholder="no. of modules"
            {...register("session_count")}
          />
          {errors.session_count && errors.session_count.message}
        </Field>
      </FieldGroup>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" disabled={isSubmitting ? true : false}>
            Cancel
          </Button>
        </DialogClose>
        {isSubmitting ? (
          <Button disabled>
            <Spinner />
            Save
          </Button>
        ) : (
          <Button type="submit">Save </Button>
        )}
      </DialogFooter>
    </form>
  );
}
