import React from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import Provider from '@/components/provider';

export const metadata: Metadata = {
    title: 'TAT',
    description: '한 줄 설명',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
