"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1).max(50, {
    message: "Name is required",
  }),
});

export default function AddCutie() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      form.reset();
      await axios.post("/api/cuties", values);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cutie</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Cutie Name" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="float-end my-2">Submit</Button>
        </form>
      </Form>
    </>
  );
}
