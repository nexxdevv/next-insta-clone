import Header from "@/components/Header/Header"
import "./globals.css"
import BottomBar from "@/components/BottomBar"
import RightSide from "@/components/RightSide"
import BackToTopButton from "@/components/BackToTop"

export const metadata = {
  title: "Insta Clone",
  description: "Generated by create next app",
}

export default async function RootLayout({ children }) {
  const res2 = await fetch(
    "https://randomuser.me/api/?results=5&inc=picture,name,location&noinfo?nat=us?seed=fubu"
  )
  const data2 = await res2.json()
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <BackToTopButton />
        <BottomBar />
      </body>
    </html>
  )
}
