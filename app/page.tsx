import Header from '../components/Header';
import Footer from '../components/Footer';
import SeoForm from '../components/SeoForm';
import SeoDashboard from '../components/SeoDashboard';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-indigo-100 py-10 space-y-10 px-4">
        <SeoForm />
        <SeoDashboard />
      </main>
      <Footer />
    </>
  );
}
