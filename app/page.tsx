export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-sm w-full space-y-5 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Your app starts here
          </h1>
          <p className="text-sm text-muted-foreground">
            Edit{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              app/page.tsx
            </code>{" "}
            to get started. All shadcn/ui components are ready to use from{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              components/ui/
            </code>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
