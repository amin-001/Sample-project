import { z } from "zod";

export const FacultySchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50).optional(),
  email: z.string(),
  module: z.string(),
  status: z.boolean().default(false),
});
export const StudentSchema = z.object({
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50).optional(),
    email: z.string(),
    Batch: z.coerce.number().int().positive(),
    status: z.boolean().default(false),
});

export const SessionSchema = z.object({
    title: z.string().min(2).max(50),
    Description: z.string().min(2).max(50).optional(),
    Module: z.string(),
    faculty: z.string(),
    status: z.boolean().default(false),

});
export const ModuleSchema = z.object({
    title: z.string().min(2).max(50),
    session_count: z.coerce.number().int().positive(),
    faculty_count: z.coerce.number().int().positive(),
});

export type IFaculty = z.infer<typeof FacultySchema>;
export type IStudent = z.infer<typeof StudentSchema>;
export type ISession = z.infer<typeof SessionSchema>;
export type IModule = z.infer<typeof ModuleSchema>;
