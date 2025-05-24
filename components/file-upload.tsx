"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, FileText, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FileUploadProps {
  onFileUpload: (file: File) => void
}

export function FileUpload({ onFileUpload }: FileUploadProps) {
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]

      if (!file) return

      // Validate file type
      if (!file.name.endsWith(".txt")) {
        setError("Please upload a WhatsApp chat export (.txt file)")
        return
      }

      // Validate file size (max 40MB as per requirements)
      if (file.size > 40 * 1024 * 1024) {
        setError("File size must be less than 40MB")
        return
      }

      setError(null)
      onFileUpload(file)
    },
    [onFileUpload],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/plain": [".txt"],
    },
    multiple: false,
  })

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Upload className="h-6 w-6 text-[#25D366]" />
            Upload WhatsApp Chat Export
          </CardTitle>
          <CardDescription>Export your WhatsApp group chat and upload the .txt file to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive ? "border-[#25D366] bg-green-50" : "border-gray-300 hover:border-[#25D366] hover:bg-gray-50"
            }`}
          >
            <input {...getInputProps()} />
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            {isDragActive ? (
              <p className="text-lg text-[#25D366] font-medium">Drop your chat export here</p>
            ) : (
              <div>
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Drag & drop your chat export, or click to browse
                </p>
                <p className="text-sm text-gray-600">Supports .txt files up to 40MB</p>
              </div>
            )}
          </div>

          {error && (
            <Alert className="mt-4" variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">How to export your WhatsApp chat:</h4>
            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
              <li>Open your WhatsApp group</li>
              <li>Tap the group name at the top</li>
              <li>Scroll down and tap "Export Chat"</li>
              <li>Choose "Without Media" for faster processing</li>
              <li>Save the .txt file and upload it here</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
