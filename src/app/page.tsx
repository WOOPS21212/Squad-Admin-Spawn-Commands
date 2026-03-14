import SpawnCommandsApp from "@/components/SpawnCommandsApp";

export default function Home() {
  return (
    <main className="p-5 min-h-screen">
      <h1 className="text-center text-3xl font-bold mb-1.5 text-[#58a6ff]">
        Squad Admin Spawn Commands
      </h1>
      <p className="text-center text-[#8b949e] mb-5 text-sm">
        Click any command to copy it to clipboard
      </p>

      <div className="text-center bg-[#1c2533] border border-[#30363d] rounded-lg px-5 py-3 mb-6 text-[0.85rem] text-[#8b949e] max-w-[700px] mx-auto">
        Open console with{" "}
        <kbd className="bg-[#2d333b] border border-[#444c56] rounded px-1.5 text-xs text-[#e6edf3]">
          ~
        </kbd>{" "}
        (tilde). Requires{" "}
        <strong className="text-amber-500">admin permissions</strong> on an
        unlicensed/local server.
        <br />
        Vehicles spawn at your position and may float &mdash; adjust as needed.
      </div>

      <SpawnCommandsApp />
    </main>
  );
}
