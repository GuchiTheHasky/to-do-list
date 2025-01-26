import { IndexType } from "@/components/types/genericIndexType";
import PencilButton from "./pencilButton";
import TrashButton from "./trashButton";
import { FC } from "react";

const TableAction: FC<IndexType> = ({ index }) => {
  return (
    <div className="flex gap-2">
      <PencilButton index={index} />
      <TrashButton index={index} />
    </div>
  );
};

export default TableAction;
