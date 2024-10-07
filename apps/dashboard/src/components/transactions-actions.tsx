"use client";

import { deleteTransactionsAction } from "@/actions/delete-transactions-action";
import { AddTransactions } from "@/components/add-transactions";
import { BulkActions } from "@/components/bulk-actions";
import { ColumnVisibility } from "@/components/column-visibility";
import { useTransactionsStore } from "@/store/transactions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@midday/ui/alert-dialog";
import { Button } from "@midday/ui/button";
import { Icons } from "@midday/ui/icons";
import { useToast } from "@midday/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { TransactionAnalytics } from "./bank-account/transaction-analytics";

export function TransactionsActions({ isEmpty }: { isEmpty: boolean }) {
  const { toast } = useToast();
  const { setRowSelection, canDelete, rowSelection } = useTransactionsStore();

  const transactionIds = Object.keys(rowSelection);

  const deleteTransactions = useAction(deleteTransactionsAction, {
    onSuccess: () => {
      setRowSelection({});
    },
    onError: () => {
      toast({
        duration: 3500,
        variant: "error",
        title: "Something went wrong please try again.",
      });
    },
  });

  if (transactionIds?.length) {
    return (
      <AlertDialog>
        <div className="ml-auto">
          <div className="flex items-center">
            <span className="text-sm text-[#606060] w-full">Bulk edit</span>
            <div className="h-8 w-[1px] bg-border ml-4 mr-4" />

            <div className="flex space-x-2">
              <BulkActions ids={transactionIds} />

              <div>
                {canDelete && (
                  <AlertDialogTrigger asChild>
                    <Button
                      size="icon"
                      variant="destructive"
                      className="bg-transparent border border-destructive hover:bg-transparent"
                    >
                      <Icons.Delete
                        className="text-destructive"
                        size={18}
                        strokeWidth={0.5}
                      />
                    </Button>
                  </AlertDialogTrigger>
                )}
              </div>
            </div>
          </div>
        </div>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              transactions.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                deleteTransactions.execute({ ids: transactionIds });
              }}
            >
              {deleteTransactions.status === "executing" ? (
                <Loader2 className="h-4 w-4 animate-spin" strokeWidth={0.5} />
              ) : (
                "Confirm"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <div className="space-x-2 hidden md:flex">
      <ColumnVisibility disabled={isEmpty} />
      <AddTransactions />
    </div>
  );
}
