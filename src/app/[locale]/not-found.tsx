import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-32 bg-shoreline-50/50 text-center">
      <Container size="narrow" className="space-y-6">
        <span className="px-3.5 py-1 rounded-full bg-shoreline-100 text-shoreline-800 text-xs uppercase tracking-widest font-semibold border border-shoreline-200">
          404 Error
        </span>

        <h1 className="text-4xl sm:text-6xl font-display font-normal text-neutral-900 leading-display">
          Sanctuary Not Found
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 max-w-md mx-auto leading-relaxed font-sans">
          The serene page or accommodation you are searching for does not exist
          or may have moved.
        </p>

        <div className="pt-4 flex justify-center">
          <Link href="/">
            <Button variant="primary" size="md">
              <Home className="w-4 h-4" />
              <span>Return to Sanctuary Home</span>
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}

