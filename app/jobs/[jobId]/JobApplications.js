import React from "react";
import JobApplication from "./JobApplication";

export default function JobApplications() {
  return (
    <div className="flex flex-col gap-5 border border-gray-300 p-5 rounded-md">
      <h1 className="text-lg font-bold">Primljene prijave</h1>
      <div className="flex flex-col gap-3">
        <JobApplication />
        <JobApplication />
        <JobApplication />
        <JobApplication />
        <JobApplication />
      </div>
    </div>
  );
}
