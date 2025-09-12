"use client";

import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold">It's a new homepage</h1>
      <Button className="primary">Click me</Button>
    </div>
  );
}
