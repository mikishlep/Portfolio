import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />

      <main className="w-full">
          <div className="mx-auto max-w-[1600px]">
              я пидор
          </div>
      </main>

     <Footer />
    </div>
  );
}