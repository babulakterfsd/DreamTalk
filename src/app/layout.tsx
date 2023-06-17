import 'aos/dist/aos.css';
import '../styles/globals.css';

export const metadata = {
  title: 'DreamTalk',
  description:
    'DreamTalk helps you maximize fan interactions and extend your reach using AI',
};

// const ga_id = '#########';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* <Script
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
        ></Script> */}
        {children}
      </body>
    </html>
  );
}
