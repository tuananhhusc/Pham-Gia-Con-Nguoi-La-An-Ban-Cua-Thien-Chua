import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';
import './globals.css';
import { ReadingProvider } from '@/components/ReadingProvider';

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const lora = Lora({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF9F6' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tuananhhusc.github.io'),
  title: 'Phẩm giá con người là ân ban của Thiên Chúa',
  description: 'Báo cáo Thần học chuyên sâu: Phẩm giá con người là ân ban của Thiên Chúa - Cội nguồn, Giáo huấn và Những thách đố đương đại.',
  keywords: ['Thần học Công giáo', 'Phẩm giá con người', 'Dignitas Infinita', 'Công đồng Vatican II', 'Imago Dei', 'Kinh Thánh', 'Giáo hội Công giáo'],
  authors: [{ name: 'Nghiên cứu Thần học Công giáo' }],
  creator: 'Nghiên cứu Thần học Công giáo',
  publisher: 'Nghiên cứu Thần học Công giáo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Phẩm giá con người là ân ban của Thiên Chúa',
    description: 'Báo cáo Thần học chuyên sâu: Phẩm giá con người là ân ban của Thiên Chúa - Cội nguồn, Giáo huấn và Những thách đố đương đại.',
    url: 'https://tuananhhusc.github.io/Pham-Gia-Con-Nguoi-La-An-Ban-Cua-Thien-Chua',
    siteName: 'Nghiên cứu Thần học Công giáo',
    type: 'article',
    locale: 'vi_VN',
    images: [
      {
        url: '/Pham-Gia-Con-Nguoi-La-An-Ban-Cua-Thien-Chua/og-image.jpg', // Adjusted for basePath
        width: 1200,
        height: 630,
        alt: 'Phẩm giá con người là ân ban của Thiên Chúa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phẩm giá con người là ân ban của Thiên Chúa',
    description: 'Báo cáo Thần học chuyên sâu: Cội nguồn, Giáo huấn và Những thách đố đương đại.',
    images: ['/Pham-Gia-Con-Nguoi-La-An-Ban-Cua-Thien-Chua/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://tuananhhusc.github.io/Pham-Gia-Con-Nguoi-La-An-Ban-Cua-Thien-Chua',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Phẩm giá con người là ân ban của Thiên Chúa',
    description: 'Báo cáo Thần học chuyên sâu về Cội nguồn, Giáo huấn và Những thách đố đương đại đối với phẩm giá con người.',
    author: [{
      '@type': 'Organization',
      name: 'Nghiên cứu Thần học Công giáo',
    }],
    datePublished: new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'Nghiên cứu Thần học Công giáo',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tuananhhusc.github.io/Pham-Gia-Con-Nguoi-La-An-Ban-Cua-Thien-Chua/favicon.ico'
      }
    }
  };

  return (
    <html lang="vi" className={`${playfair.variable} ${lora.variable}`}>
      <body className="font-body antialiased transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ReadingProvider>
          {children}
        </ReadingProvider>
      </body>
    </html>
  );
}
