
export default function Home({ children }) {
    // max-w-screen-sm px-4 py-12 mx-auto antialiased font-body
    return (
        <div className="">

        <main>
            {children}
        </main>
        <footer className="text-lg font-light">
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://nextjs.org/">Next.js</a>
          &#128293;
        </footer>
      </div>
    )
}