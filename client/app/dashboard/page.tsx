"use client";

import { exportEvidenceBundle } from "@/lib/evidenceBundle";

const demoItem = {
  case_id: "DEMO-1001",
  filename: "evidence.dd",
  hash_value: "SHA256:abc123xyz",
  investigator: "admin@forensics.com",
  status: "Verified",
  created_at: new Date().toISOString(),
};

export default function DashboardPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Evidence Bundle Test
      </h1>

      <button
        onClick={() => exportEvidenceBundle(demoItem)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Export Bundle
      </button>
    </div>
  );
}