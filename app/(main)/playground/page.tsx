"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
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
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(1).max(50, {
    message: "Name is required",
  }),
});

export default function DataTest() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/cuties", values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex h-[100vh] items-center justify-center overflow-hidden">
        <Image src="/spiral.jpg" alt="" width={300} height={300} />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Cutie Name" />
                </FormControl>
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="mt-4 rounded bg-black p-4 text-white"
          >
            Submit
          </button>
        </form>
      </Form>
    </>
  );
}
