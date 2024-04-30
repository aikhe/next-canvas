"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(1).max(50, {
    message: "Name is required",
  }),
});

export default function EditCutieTest({ id, name }: { id: any; name: any }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const [newName, setNewName] = useState(name);

  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await fetch(`http://localhost:3000/api/cuties/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      console.log(res);
      // router.refresh();
      router.push("/");
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
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onChange={(e) => setNewName(e.target.value)}
                    value={newName}
                    placeholder="hjkl"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="float-end my-2">Save</Button>
        </form>
      </Form>
    </>
  );
}
