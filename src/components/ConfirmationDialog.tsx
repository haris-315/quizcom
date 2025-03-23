import React from "react";

type ConfirmationDialogProps = {
    skippedCount: number;
    onSolveSkipped: () => void;
};

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    skippedCount,
    onSolveSkipped,
}) => {
    return (
        <div className="confirmation-dialog">
            <h2 className="dialog-title">
                You have {skippedCount} skipped question{skippedCount !== 1 ? "s" : ""}. Do you want to solve them?
            </h2>
            <div className="dialog-buttons">
                <button className="dialog-button solve-skipped" onClick={onSolveSkipped}>
                    Solve Skipped
                </button>
            </div>
        </div>
    );
};

export default ConfirmationDialog;
