import Link from 'next/link';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <div className="font-mono text-7xl font-extrabold text-primary">404</div>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="mt-3 text-text-muted">
        The page you're looking for doesn't exist. Try the{' '}
        <Link href="/" className="text-primary hover:underline">
          homepage
        </Link>
        .
      </p>
      <div className="mt-7 flex justify-center">
        <Button href="/" variant="primary">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Button>
      </div>
    </Container>
  );
}
