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
import { DataCardProps } from "@/types/data";

const DataCard: React.FC<DataCardProps> = ({
  dataId,
  dataName,
  dataDescription,
  dataCreatedDate,
  dataUpdatedDate,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function formatDate(dateString: string) {
    const GMT8_OFFSET = 8 * 60 * 60 * 1000;
    const date = new Date(dateString);
    const gmt8Date = new Date(date.getTime() + GMT8_OFFSET);

    const year = gmt8Date.getUTCFullYear();
    const day = String(gmt8Date.getUTCDate()).padStart(2, "0");
    const hours = String(gmt8Date.getUTCHours()).padStart(2, "0");
    const minutes = String(gmt8Date.getUTCMinutes()).padStart(2, "0");

    return `${new Intl.DateTimeFormat("en-PH", { month: "long" }).format(gmt8Date)}
    ${day}, ${year} ${hours === "00" ? `00:${minutes}` : `${hours}:${minutes}`}`;
  }

  return (
    <Card className="w-80">
      <CardHeader className="pb-3">
        <CardTitle>{dataName}</CardTitle>
        <CardDescription
          className={isExpanded ? "break-words" : "line-clamp-3 break-words"}
        >
          {dataDescription}
        </CardDescription>
        <p className="text-[.8rem] opacity-80">
          Created on {formatDate(dataCreatedDate)} <br />
          Updated on {formatDate(dataUpdatedDate)}
        </p>
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
