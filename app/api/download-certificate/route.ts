import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Path to the certificate file
    // Note: You'll need to add your certificate file to the public directory
    const filePath = path.join(process.cwd(), "public", "certificate.pdf")

    // For development purposes, if the file doesn't exist yet, return a placeholder response
    if (!fs.existsSync(filePath)) {
      return new NextResponse("Certificate file not found. Please add your certificate file to the public directory.", {
        status: 404,
      })
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)

    // Set appropriate headers for file download
    const headers = new Headers()
    headers.set("Content-Disposition", 'attachment; filename="NPTELCertificate.pdf"')
    headers.set("Content-Type", "application/pdf")

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error("Error downloading certificate:", error)
    return new NextResponse("Error downloading certificate", { status: 500 })
  }
}
