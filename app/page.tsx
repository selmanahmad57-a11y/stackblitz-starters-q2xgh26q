import SeoForm from './components/seoform';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">SEO Analyzer Pro 🚀</h1>
        <p className="text-lg mb-6">
          Analysez, optimisez et propulsez votre site web vers les sommets du référencement.
        </p>
        <SeoForm />
      </div>
    </main>
  );
}
