import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dumbbell Den - Premier Gym in Shaikpet, Hyderabad",
    description: "Top-rated local gym in Shaikpet with professional equipment and expert guidance. Strength training, weight loss programs, and personal training.",
    keywords: "gym, fitness, Shaikpet, Hyderabad, strength training, weight loss, personal training, Praveen Kumar",
    openGraph: {
        title: "Dumbbell Den - Premier Gym in Shaikpet, Hyderabad",
        description: "Train Hard. Stay Strong. Join Shaikpet's premier fitness destination.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
