import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PRIMATOURS — Agence de Voyage à Khemis Miliana',
  description: 'Découvrez les voyages, Omra, billetterie et réservation d’hôtels avec PRIMATOURS Khemis Miliana.',
  keywords: ['Primatours','Primatours Khemis Miliana','agence de voyage Khemis Miliana','Omra','billetterie','voyage organisé'],
  openGraph: { title: 'PRIMATOURS — Votre voyage commence ici.', description: 'Voyages, Omra, billetterie et hôtels à Khemis Miliana.', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body>{children}</body></html>;
}