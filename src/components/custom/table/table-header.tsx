import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CustomTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Number</TableHead>
        <TableHead>Content</TableHead>
        <TableHead className="text-right">Action</TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default CustomTableHeader;
