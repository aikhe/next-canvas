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

interface DataCardProps {
  dataName: string;
  dataDescription: string;
}

const DataCard: React.FC<DataCardProps> = ({ dataName, dataDescription }) => {
  return (
    <Card className="w-72 md:w-80">
      <CardHeader className="pb-3">
        <CardTitle>{dataName}</CardTitle>
        <CardDescription>{dataDescription}</CardDescription>
      </CardHeader>
      <CardFooter className="float-end pb-4">
        <div className="flex items-center gap-3">
          <RemoveData />
          <Link href="/playground/db-play/123">
            <Wrench className="size-5 cursor-pointer text-slate-500" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DataCard;
