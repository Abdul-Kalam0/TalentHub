const ConfirmModal = ({
  isOpen,
  title,
  message,
  confirmText,
  cancelText,
  variant = "danger",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  const confirmButtonClass =
    variant === "danger"
      ? "bg-red-600 hover:bg-red-700 focus:ring-red-200"
      : "bg-amber-500 hover:bg-amber-600 focus:ring-amber-200";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          bg-white
          p-6
          shadow-2xl
          sm:p-8
        "
      >
        {/* Header */}

        <div className="text-center">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
              variant === "danger"
                ? "bg-red-100 text-red-600"
                : "bg-amber-100 text-amber-600"
            }`}
          >
            <span className="text-3xl">
              {variant === "danger" ? "🗑️" : "⚠️"}
            </span>
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">{title}</h2>

          <p className="mt-3 leading-7 text-gray-600">{message}</p>
        </div>

        {/* Actions */}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-5
              py-3
              font-medium
              text-gray-700
              transition-all
              duration-200
              hover:bg-gray-100
              sm:w-auto
            "
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className={`
              w-full
              rounded-xl
              px-5
              py-3
              font-medium
              text-white
              transition-all
              duration-200
              focus:ring-4
              sm:w-auto
              ${confirmButtonClass}
            `}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
