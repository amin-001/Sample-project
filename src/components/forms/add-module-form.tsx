import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
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
import { ModuleSchema,type IModule } from "@/lib/zod";
import { Textarea } from "../ui/textarea";

export default function AddModuleForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm({
    resolver: zodResolver(ModuleSchema),
        defaultValues:{
            title: "",
            Description: "",
            Year:"",
        },

  });

  const handleForm = (data: IModule) => {
    console.log(data);

    // reset()
  };
  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <FieldGroup>
        <div>
          <Field>
            <FieldLabel htmlFor="title">Title</FieldLabel>
            <Input
              id="title"
              placeholder="title"
              {...register("title")}
            />
            {errors.title && errors.title.message}
          </Field>  
        </div>
        <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea className="resize-none rounded-md" id="description"  placeholder="Write Description" {...register("Description")}/>
        </Field>
        
        <Field className="pb-4">
          <FieldLabel htmlFor="year">Module</FieldLabel>
                    <Controller 
                    control={control}
                    name="Year"
                    render={({field})=> (
                        <Select  onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-45">
              <SelectValue  />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectItem value="Y1" >Y1</SelectItem>
                <SelectItem value="Y2" >Y2</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
                    )}/>
          {errors.Year && errors.Year.message}
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
