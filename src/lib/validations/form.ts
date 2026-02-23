import {z} from "zod"

type FormSchemaData = z.infer<typeof formSchema>;

const formSchema = z.object({
    name: 
        z.string()
        .min(2,"Name too short")
        .max(100,"Name too long")
        .trim(),
    email:
        z.string().email({message: "Please provide a valid email address"}).trim(),
    message:
      z.string().min(10,"Please provide more details about your project")
      .max(1500, "Message too long")
      .trim()
      .refine((val)=> !val.includes("<") && !val.includes(">"),{message: "Invalid character in message. < and > are not allowed."}),
    })

export default formSchema
export type {FormSchemaData};