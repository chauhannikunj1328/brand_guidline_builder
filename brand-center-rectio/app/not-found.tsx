import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <main className="content-col flex min-h-[70vh] flex-col justify-center pt-40">
        <h1 className="t-h2">Page not found</h1>
        <div className="mt-8"><Button href="/" size="sm">Back to home</Button></div>
      </main>
      <Footer />
    </>
  );
}
