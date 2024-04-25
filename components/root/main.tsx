import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/them-toggle";
import { ArrowRight } from "lucide-react";

export default function Main() {
  return (
    <section className="mx-auto flex h-[100vh] max-w-64 flex-col items-center justify-center gap-2">
      <Card className="w-[100%]">
        <CardHeader>
          <CardTitle>Next-setup</CardTitle>
          <CardDescription>
            next-js boilerplate that will <strong>surely compliment</strong> my
            workflow, <strong>right?</strong>...
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="mx-auto flex w-[100%] gap-2">
        <ModeToggle />
        <Link
          className={buttonVariants({ variant: "fill" })}
          href="/playground"
        >
          Click here to begin{" "}
          <ArrowRight className="text-primary-500 ml-1 h-3 w-3 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
