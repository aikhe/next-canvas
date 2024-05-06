"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrench } from "lucide-react";
import RemoveData from "./remove-data";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

interface DataCardProps {
  dataId: string;
  dataName: string;
  dataDescription: string;
}

const DataCard: React.FC<DataCardProps> = ({
  dataId,
  dataName,
  dataDescription,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-80">
      <CardHeader className="pb-3">
        <CardTitle>{dataName}</CardTitle>
        <CardDescription
          className={isExpanded ? "break-words" : "line-clamp-3 break-words"}
        >
          {dataDescription}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between pb-4">
        {dataDescription.length >= 118 ? (
          <Button
            variant="link"
            className="h-0 p-0 text-primary/60 hover:text-primary"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read less" : "Read more"}
          </Button>
        ) : (
          <div></div>
        )}
        <div className="flex items-center gap-3">
          <RemoveData id={dataId} />
          <Link href={`/playground/db-play/${dataId}`}>
            <Wrench className="size-5 cursor-pointer text-slate-500" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DataCard;
