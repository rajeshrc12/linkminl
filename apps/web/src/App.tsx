import { Button } from "@/components/ui/button";

const App = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5173/dashboard";
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold tracking-tight text-slate-900">
          Link<span className="text-slate-500">Minl</span>
        </div>

        <Button onClick={handleLogin} className="rounded-full px-5">
          Login
        </Button>
      </header>

      <main className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 text-center">
        <div className="mb-6 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm text-slate-600">
          Simple URL Shortener
        </div>

        <h1 className="text-6xl font-semibold tracking-tight text-slate-900">
          Turn long URLs into
          <span className="block text-slate-500">beautiful short links</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Create short links, track clicks, and share them anywhere with a fast
          and reliable URL shortener.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <Button size="lg" onClick={handleLogin} className="rounded-full px-8">
            Get Started
          </Button>

          <Button variant="outline" size="lg" className="rounded-full px-8">
            Learn More
          </Button>
        </div>
      </main>
    </div>
  );
};

export default App;
