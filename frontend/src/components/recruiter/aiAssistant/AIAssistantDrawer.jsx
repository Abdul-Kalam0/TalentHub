import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import api from "../../../services/api";

import AIHeader from "./AIHeader";
import AIActionList from "./AIActionList";
import AILoading from "./AILoading";
import AIResponse from "./AIResponse";

const AIAssistantDrawer = ({ isOpen, onClose, job }) => {
  const [loading, setLoading] = useState(false);

  const [response, setResponse] = useState("");

  const [activeAction, setActiveAction] = useState("");

  const [highlight, setHighlight] = useState(false);

  const responseRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      setResponse("");
      setActiveAction("");
      setLoading(false);
      setHighlight(false);
    }
  }, [isOpen]);

  if (!job) {
    return null;
  }

  const handleActionClick = async (action) => {
    try {
      setLoading(true);
      setActiveAction(action.id);

      const { data } = await api.post(`/jobs/${job._id}/ai`, {
        prompt: action.prompt,
      });

      setResponse(data.data.answer);

      setTimeout(() => {
        responseRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setHighlight(true);

        setTimeout(() => {
          setHighlight(false);
        }, 1200);
      }, 150);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to generate AI response.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-2xl flex-col bg-gray-50 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <AIHeader job={job} onClose={onClose} />

        {/* Content */}

        <div className="flex-1 overflow-y-auto p-6">
          <AIActionList
            loading={loading}
            activeAction={activeAction}
            onActionClick={handleActionClick}
          />

          <div className="my-8 border-t border-gray-200" />

          <div
            ref={responseRef}
            className={`rounded-3xl transition-all duration-500 ${
              highlight
                ? "ring-4 ring-blue-300 ring-offset-4"
                : "ring-0 ring-offset-0"
            }`}
          >
            {loading ? <AILoading /> : <AIResponse response={response} />}
          </div>
        </div>
      </aside>
    </>
  );
};

export default AIAssistantDrawer;
