import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 min-h-screen items-center justify-center font-sans overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="https://static.tradingview.com/static/bundles/lightweight-charts-video.avc1.d2a8feecfb879c75dea0.mp4" type="video/mp4" />
      </video>
      <main className="z-10 relative flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wide drop-shadow-md">
          <span className="text-white">Welcome to </span>
          <span className="text-[#b5b5b5]">Zorvyn</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-white mb-8 drop-shadow">
          Your Trusted Partner in Financial Growth
        </p>
        <Link 
          href="/dashboard"
          className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold py-3 px-8 rounded shadow-lg transition-colors text-sm tracking-wider uppercase"
        >
          Go to Dashboard
        </Link>
      </main>
    </div>
  );
}
