"use client"

import { useState } from "react"
import { BarChart3, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FileUpload } from "@/components/file-upload"
import { OverviewDashboard } from "@/components/overview-dashboard"
import { EngagementTab } from "@/components/engagement-tab"
import { MembersTab } from "@/components/members-tab"
import { ContentTab } from "@/components/content-tab"
import { SentimentTab } from "@/components/sentiment-tab"
import { AlertsDrawer } from "@/components/alerts-drawer"
import { RecommendationsSection } from "@/components/recommendations-section"
import { PaywallModal } from "@/components/paywall-modal"

export default function WhatsAppAnalyticsDashboard() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [isPaidUser, setIsPaidUser] = useState(false)
  const [scrollCount, setScrollCount] = useState(0)

  const handleFileUpload = async (file: File) => {
    setUploadedFile(file)
    setIsAnalyzing(true)

    // Simulate analysis processing
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 3000)
  }

  const handleScroll = () => {
    setScrollCount((prev) => {
      const newCount = prev + 1
      if (newCount >= 5 && !isPaidUser) {
        setShowPaywall(true)
      }
      return newCount
    })
  }

  const handlePaymentSuccess = () => {
    setIsPaidUser(true)
    setShowPaywall(false)
  }

  if (!analysisComplete) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">WhatsApp Community Analytics</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your WhatsApp group exports into actionable insights. Understand engagement, prevent churn, and
              build thriving communities.
            </p>
          </div>

          {!uploadedFile ? (
            <FileUpload onFileUpload={handleFileUpload} />
          ) : (
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-[#25D366]" />
                    Analyzing Your Community
                  </CardTitle>
                  <CardDescription>Processing {uploadedFile.name}...</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={isAnalyzing ? 65 : 100} className="w-full" />
                  <div className="text-sm text-gray-600">
                    {isAnalyzing ? "Extracting insights..." : "Analysis complete!"}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50" onScroll={handleScroll}>
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Community Analytics</h1>
                <p className="text-sm text-gray-600">Tech Innovators Group • 147 members</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!isPaidUser && (
                <Badge variant="outline" className="text-[#25D366] border-[#25D366]">
                  Free Plan
                </Badge>
              )}
              <Button variant="outline" size="sm" onClick={() => setShowPaywall(true)}>
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="engagement">Engagement</TabsTrigger>
                <TabsTrigger value="members">Members</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <OverviewDashboard isPaidUser={isPaidUser} onUpgrade={() => setShowPaywall(true)} />
              </TabsContent>

              <TabsContent value="engagement">
                <EngagementTab isPaidUser={isPaidUser} onUpgrade={() => setShowPaywall(true)} />
              </TabsContent>

              <TabsContent value="members">
                <MembersTab isPaidUser={isPaidUser} onUpgrade={() => setShowPaywall(true)} />
              </TabsContent>

              <TabsContent value="content">
                <ContentTab isPaidUser={isPaidUser} onUpgrade={() => setShowPaywall(true)} />
              </TabsContent>

              <TabsContent value="sentiment">
                <SentimentTab isPaidUser={isPaidUser} onUpgrade={() => setShowPaywall(true)} />
              </TabsContent>
            </Tabs>

            <RecommendationsSection isPaidUser={isPaidUser} />
          </div>

          <div className="lg:col-span-1">
            <AlertsDrawer isPaidUser={isPaidUser} onUpgrade={() => setShowPaywall(true)} />
          </div>
        </div>
      </div>

      <PaywallModal
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  )
}
