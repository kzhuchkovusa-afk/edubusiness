import type { Metadata } from 'next';
import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyCTA from '@/components/layout/StickyCTA';
import RevealScript from '@/components/shared/RevealScript';
import { SITE_URL } from '@/lib/site';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'GoCoding — Licensed STEM Curriculum for Afterschool Centers',
    template: '%s | GoCoding',
  },
  description:
    'Licensed coding & robotics curriculum for independent afterschool and tutoring centers. $40/month. 10-minute teacher prep. 80% student retention.',
  openGraph: {
    title: 'GoCoding — Licensed STEM Curriculum for Afterschool Centers',
    description:
      'Licensed coding & robotics curriculum for independent afterschool centers. $40/month.',
    url: SITE_URL,
    siteName: 'GoCoding',
    type: 'website',
    images: ['/images/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoCoding — Licensed STEM Curriculum',
    description:
      'Licensed coding & robotics curriculum for independent afterschool centers. $40/month.',
    images: ['/images/og-image.svg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <head>
        <noscript>
          {/* Without JS the IntersectionObserver never runs — keep content visible. */}
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body className="bg-bg text-text">
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
        <RevealScript />
      </body>
    </html>
  );
}
