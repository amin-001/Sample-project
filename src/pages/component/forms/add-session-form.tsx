import { Field, FieldGroup, FieldLabel } from "../../../components/ui/field";
import { Input } from "../../../components/ui/input";
import { Checkbox } from "../../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { DialogClose, DialogFooter } from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { Spinner } from "../../../components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { SessionSchema, type ISession } from "@/lib/zod";
import { Textarea } from "../../../components/ui/textarea";

export default function AddSessionForm() {
  const {
    register,
    handleSubmit,
        control,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm({
    resolver: zodResolver(SessionSchema),
        defaultValues:{
            title: "",
            Description: "",
            Module: "",
            faculty:"",
            status:false,
        },

  });

  const handleForm = (data: ISession) => {
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
        <Textarea className="resize-none rounded-md" id="description" placeholder="Write Description" {...register("Description")}/>
        </Field>
        
        <Field>
          <FieldLabel htmlFor="Module">Module</FieldLabel>
                    <Controller 
                    control={control}
                    name="Module"
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
          {errors.Module && errors.Module.message}
        </Field>
        <Field>
          <FieldLabel htmlFor="faculty">faculty</FieldLabel>
                    <Controller 
                    control={control}
                    name="faculty"
                    render={({field})=> (
                        <Select  onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="w-45">
              <SelectValue  />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectItem value="Amin" >Amin</SelectItem>
                <SelectItem value="Hussain" >Hussain</SelectItem>
                <SelectItem value="Ali">Ali</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          
                    )}/>
          {errors.faculty && errors.faculty.message}
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
