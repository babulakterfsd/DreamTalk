import 'aos/dist/aos.css';
import Script from 'next/script';
import '../styles/globals.css';

export const metadata = {
  title: 'DreamTalk - Reinventing engagement',
  description:
    'Discover DreamTalk, the ultimate AI chatbot designed for influencers, offering personalized interactions, gamified fan engagement, and a powerful analytics dashboard to boost your digital presence and earnings.',
  keywords:
    'dreamtalk, dreamtalk ai, dreamtalkai, dreamtalk.ai, dreamtalk chatbot, dreamtalk chat bot, dreamtalk chatbot ai, dreamtalk chat bot ai, dreamtalk chatbot, AI chatbot, Instagram influencers, fan engagement, customization',
};

const ga_id = 'G-1J06P5QZ1G';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?
      id=${ga_id}`}
        ></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
        `,
          }}
        ></Script>
        {children}
      </body>
    </html>
  );
}
