"use client"

import { Lightbulb, Calendar, Users, MessageCircle, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface RecommendationsSectionProps {
  isPaidUser: boolean
}

const recommendations = [
  {
    title: "Host an AI Discussion",
    description:
      "AI topics are trending +22% this week. Schedule a live discussion for Friday 8 PM when engagement peaks.",
    impact: "High",
    effort: "Medium",
    icon: MessageCircle,
    action: "Schedule Event",
  },
  {
    title: "Re-engage Silent Members",
    description:
      'Send personalized messages to 8 at-risk members. Template: "Hey [Name], loved your take on [topic]. Any new insights to share?"',
    impact: "High",
    effort: "Low",
    icon: Users,
    action: "Send Messages",
  },
  {
    title: "Celebrate Top Contributors",
    description:
      "Recognize Alex Chen and Sarah Kim as this week's conversation catalysts to encourage continued participation.",
    impact: "Medium",
    effort: "Low",
    icon: TrendingUp,
    action: "Post Recognition",
  },
  {
    title: "Weekly Digest Email",
    description: "Send automated summary of top discussions, trending topics, and member highlights every Sunday.",
    impact: "Medium",
    effort: "Low",
    icon: Calendar,
    action: "Set Up Automation",
  },
]

export function RecommendationsSection({ isPaidUser }: RecommendationsSectionProps) {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case "Low":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "High":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-[#25D366]" />
          AI Recommendations
        </CardTitle>
        <CardDescription>Personalized suggestions to improve your community engagement</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.slice(0, isPaidUser ? recommendations.length : 2).map((rec, index) => {
            const IconComponent = rec.icon
            return (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center">
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">{rec.title}</h4>
                    <div className="flex gap-2 mb-2">
                      <Badge className={getImpactColor(rec.impact)} variant="secondary">
                        {rec.impact} Impact
                      </Badge>
                      <Badge className={getEffortColor(rec.effort)} variant="secondary">
                        {rec.effort} Effort
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                <Button size="sm" variant="outline" className="w-full">
                  {rec.action}
                </Button>
              </div>
            )
          })}
        </div>

        {!isPaidUser && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-sm text-green-800 mb-2">
              Get {recommendations.length - 2} more personalized recommendations
            </p>
            <Button size="sm" className="bg-[#25D366] hover:bg-[#075E54]">
              Upgrade to Pro - $5
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
