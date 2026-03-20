import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Spinner } from "../ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { FacultySchema, type IFaculty } from "@/lib/zod";

export default function AddFacultyForm() {
  const {
    register,
    handleSubmit,
		control,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm({
    resolver: zodResolver(FacultySchema),
		defaultValues:{
			firstname: "",
			lastname: "",
			email: "",
			module: "",
			status:false,
		},

  });

  const handleForm = (data: IFaculty) => {
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
          <FieldLabel htmlFor="Module">Module</FieldLabel>
					<Controller 
					control={control}
					name="module"
					render={({field})=> (
						<Select  onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-45">
              <SelectValue  />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectItem value="Math" >Math</SelectItem>
                <SelectItem value="English" >English</SelectItem>
                <SelectItem value="Urdu">Urdu</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
					)}/>
          {errors.module && errors.module.message}
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
