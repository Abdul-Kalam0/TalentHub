import AIActionCard from "./AIActionCard";
import aiActions from "./actions";

const AIActionList = ({ loading, activeAction, onActionClick }) => {
  return (
    <section>
      {/* Heading */}

      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          AI Recommendations
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Choose an AI action to analyze the applicants for this job.
        </p>
      </div>

      {/* Actions */}

      <div className="space-y-4">
        {aiActions.map((action) => (
          <AIActionCard
            key={action.id}
            action={action}
            loading={loading}
            activeAction={activeAction}
            onClick={onActionClick}
          />
        ))}
      </div>
    </section>
  );
};

export default AIActionList;
