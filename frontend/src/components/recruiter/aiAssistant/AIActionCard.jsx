import clsx from "clsx";

const AIActionCard = ({ action, loading, activeAction, onClick }) => {
  const Icon = action.icon;

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => onClick(action)}
      className={clsx(
        "group w-full rounded-2xl border p-5 text-left transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg",
        loading && "cursor-not-allowed opacity-70",
        activeAction === action.id
          ? "border-blue-600 bg-blue-50"
          : "border-gray-200 bg-white hover:border-blue-200",
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={clsx(
            "flex h-12 w-12 items-center justify-center rounded-xl transition",
            activeAction === action.id
              ? "bg-blue-600 text-white"
              : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
          )}
        >
          <Icon size={22} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-gray-900">
            {action.title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-gray-500">
            {action.description}
          </p>
        </div>
      </div>
    </button>
  );
};

export default AIActionCard;
