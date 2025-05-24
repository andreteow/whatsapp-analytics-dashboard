"use client"

import { AlertTriangle, Users, TrendingDown, MessageCircle, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface AlertsDrawerProps {
  isPaidUser: boolean
  onUpgrade: () => void
}

const alerts = [
  {
    type: "churn",
    title: "High Churn Risk",
    description: "8 members haven't posted in 14+ days",
    severity: "high",
    action: "Send re-engagement messages",
    icon: TrendingDown,
  },
  {
    type: "sentiment",
    title: "Sentiment Dip",
    description: "Negative sentiment increased 5% today",
    severity: "medium",
    action: "Monitor discussions",
    icon: AlertTriangle,
  },
  {
    type: "engagement",
    title: "Low Engagement",
    description: "Daily messages down 15% this week",
    severity: "medium",
    action: "Post conversation starter",
    icon: MessageCircle,
  },
  {
    type: "new_members",
    title: "New Member Integration",
    description: "3 new members haven't posted yet",
    severity: "low",
    action: "Send welcome message",
    icon: Users,
  },
]

export function AlertsDrawer({ isPaidUser, onUpgrade }: AlertsDrawerProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-red-200 bg-red-50"
      case "medium":
        return "border-amber-200 bg-amber-50"
      case "low":
        return "border-blue-200 bg-blue-50"
      default:
        return "border-gray-200 bg-gray-50"
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Alerts & Recommendations
          </CardTitle>
          <CardDescription>Issues requiring your attention</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {alerts.slice(0, isPaidUser ? alerts.length : 2).map((alert, index) => {
            const IconComponent = alert.icon
            return (
              <div key={index} className={`p-3 rounded-lg border ${getSeverityColor(alert.severity)}`}>
                <div className="flex items-start gap-3">
                  <IconComponent className="h-4 w-4 mt-0.5 text-gray-600" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-medium">{alert.title}</h4>
                      <Badge variant={getSeverityBadge(alert.severity)} className="text-xs">
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{alert.description}</p>
                    <Button size="sm" variant="outline" className="text-xs h-6">
                      {alert.action}
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}

          {!isPaidUser && (
            <div className="p-3 rounded-lg border border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                <Lock className="h-4 w-4 text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2">+{alerts.length - 2} more alerts available</p>
                  <Button onClick={onUpgrade} size="sm" className="bg-[#25D366] hover:bg-[#075E54] text-xs h-6">
                    Upgrade to see all
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" size="sm" className="w-full justify-start text-xs">
            📧 Send weekly digest
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start text-xs">
            🎯 Create engagement post
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start text-xs">
            👋 Welcome new members
          </Button>
          <Button variant="outline" size="sm" className="w-full justify-start text-xs">
            📊 Export insights
          </Button>
        </CardContent>
      </Card>

      {/* Community Health Score */}
      <Card>
        <CardHeader>
          <CardTitle>Community Health</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#25D366] mb-2">87</div>
            <div className="text-sm text-gray-600 mb-4">Health Score</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#25D366] h-2 rounded-full" style={{ width: "87%" }}></div>
            </div>
            <p className="text-xs text-gray-600 mt-2">Excellent community health</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
