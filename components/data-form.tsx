"use client";

import { Button } from "./ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

interface DataFormProps {
  toggleModal: () => void;
}

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be atleast 2 or more characters.",
    })
    .max(50),
  description: z.string().min(5, {
    message: "Invalid description.",
  }),
});

const DataForm: React.FC<DataFormProps> = ({ toggleModal }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const router = useRouter();
  const handleSumbit = (values: z.infer<typeof formSchema>) => {
    form.reset();
    toggleModal();
    console.log({ values });
    // router.refresh();
    // router.push("/playground/db-play");
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[20rem] rounded-lg border bg-card px-4 py-6"
    >
      <Form {...form}>
        <form
          className="flex h-full flex-col justify-center gap-4"
          onSubmit={form.handleSubmit(handleSumbit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="data name..."
                    className="border-2 focus:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="description..."
                    className="resize-none border-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="float-end my-2 flex items-center gap-1"
            variant="fill"
          >
            Submit
            <Check className="size-3" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default DataForm;
