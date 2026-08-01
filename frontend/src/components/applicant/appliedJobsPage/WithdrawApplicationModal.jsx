import { TriangleAlert } from "lucide-react";

const WithdrawApplicationModal = ({ isOpen, onClose, onConfirm, loading }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Icon */}

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <TriangleAlert size={34} className="text-red-600" />
        </div>

        {/* Content */}

        <div className="mt-5 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Withdraw Application?
          </h2>

          <p className="mt-3 text-gray-600">
            Are you sure you want to withdraw this application?
            <br />
            This action cannot be undone.
          </p>
        </div>

        {/* Actions */}

        <div className="mt-8 flex gap-4">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="flex-1 rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-400"
          >
            {loading ? "Withdrawing..." : "Withdraw"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawApplicationModal;
