import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertModalType } from "@/components/types/alertModalType";
import { FC } from "react";

export const AlertDialogModal: FC<AlertModalType> = ({
  open,
  deleteTask,
  onCancel,
}) => {
  return (
    <AlertDialog open={open} onOpenChange={onCancel}>
      <AlertDialogContent>
        {alertHeader()}
        {alertFooter()}
      </AlertDialogContent>
    </AlertDialog>
  );

  function alertFooter() {
    return (
      <AlertDialogFooter>
        <AlertDialogCancel asChild>
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button onClick={deleteTask}>
            Continue
          </Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    );
  }

  function alertHeader() {
    return (
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your task
          from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
    );
  }
};

export default AlertDialogModal;
