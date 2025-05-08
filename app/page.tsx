import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <Link
        href="/api/download-certificate"
        className="bg-[#2e74c7] hover:bg-[#2464ad] text-white font-medium py-3 px-8 rounded-md text-lg transition-colors"
      >
        Course Certificate
      </Link>
    </div>
  )
}
