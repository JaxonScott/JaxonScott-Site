import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import "../styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="bg-slate-200 text-zinc-900 dark:bg-zinc-900 dark:text-slate-200">
        <NavBar />
        {children}
      </body>
    </html>
  )
}
