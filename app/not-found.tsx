"use client";

import { Suspense } from "react";
import EmptyState from "./components/EmptyState";

export default function NotFound() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <EmptyState
      />
    </Suspense>
  );
}