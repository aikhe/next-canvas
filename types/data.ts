export interface DataItem {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface DataCardProps {
  dataId: string;
  dataName: any;
  dataDescription: string;
  dataCreatedDate: string;
  dataUpdatedDate: string;
}
