import { Field, FieldGroup, FieldLabel } from "../../../components/ui/field";
import { Input } from "../../../components/ui/input";
import { Checkbox } from "../../../components/ui/checkbox";
import { DialogClose, DialogFooter } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Spinner } from "../../../components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { StudentSchema, type IStudent } from "@/lib/zod";

export default function AddStudentForm() {
  const {
    register,
    handleSubmit,
        control,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm({
    resolver: zodResolver(StudentSchema),
        defaultValues:{
            firstname: "",
            lastname: "",
            email: "",
            Batch: null,
            status:false,
        },

  });

  const handleForm = (data: IStudent) => {
    console.log(data);

    // reset()
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="firstname">First Name</FieldLabel>
            <Input
              id="firstname"
              placeholder="First name"
              {...register("firstname")}
            />
            {errors.firstname && errors.firstname.message}
          </Field>
          <Field>
            <FieldLabel htmlFor="lastname">Last Name</FieldLabel>
            <Input
              id="lastname"
              placeholder="Last name"
              {...register("lastname")}
            />
            {errors.lastname && errors.lastname.message}
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="@gmail.com" {...register("email")} />
        </Field>
        
        <Field>
          <FieldLabel htmlFor="batch">Batch</FieldLabel>
          <Input id="batch" type="number" placeholder="Batch" {...register("Batch",{valueAsNumber:true})}/>
        </Field>            
        <Field orientation="horizontal" className="pb-4">
                    <Controller 
                    control={control}
                    name="status"
                    render = {({field}) => (
                    <Checkbox id="status" checked={field.value}
                    onCheckedChange={field.onChange} />	
                    )}/>
          
          <FieldLabel htmlFor="status">Status</FieldLabel>
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
          <Button type="submit">Save</Button>
        )}
      </DialogFooter>
    </form>
  );
}
