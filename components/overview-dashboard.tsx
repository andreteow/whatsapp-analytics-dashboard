"use client"

import { TrendingUp, TrendingDown, Users, MessageCircle, Heart, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface OverviewDashboardProps {
  isPaidUser: boolean
  onUpgrade: () => void
}

// Mock chart components
const MockAreaChart = () => (
  <div className="h-[300px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
        <span>60</span>
        <span>45</span>
        <span>30</span>
        <span>15</span>
        <span>0</span>
      </div>

      {/* X-axis */}
      <div className="absolute bottom-0 left-8 right-0 h-6 flex justify-between text-xs text-gray-500">
        <span>Jan 1</span>
        <span>Jan 2</span>
        <span>Jan 3</span>
        <span>Jan 4</span>
        <span>Jan 5</span>
        <span>Jan 6</span>
        <span>Jan 7</span>
      </div>

      {/* Chart area */}
      <div className="ml-8 mb-6 h-full relative">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#25D366" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#25D366" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M 0 25 L 16.67 13 L 33.33 38 L 50 2 L 66.67 22 L 83.33 8 L 100 30 L 100 100 L 0 100 Z"
            fill="url(#areaGradient)"
            stroke="#25D366"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  </div>
)

const MockLineChart = () => (
  <div className="h-[300px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
        <span>20</span>
        <span>15</span>
        <span>10</span>
        <span>5</span>
        <span>0</span>
      </div>

      {/* X-axis */}
      <div className="absolute bottom-0 left-8 right-0 h-6 flex justify-between text-xs text-gray-500">
        <span>Jan 1</span>
        <span>Jan 2</span>
        <span>Jan 3</span>
        <span>Jan 4</span>
        <span>Jan 5</span>
        <span>Jan 6</span>
        <span>Jan 7</span>
      </div>

      {/* Chart area */}
      <div className="ml-8 mb-6 h-full relative">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 0 40 L 16.67 25 L 33.33 60 L 50 10 L 66.67 45 L 83.33 20 L 100 55"
            fill="none"
            stroke="#075E54"
            strokeWidth="1"
          />
          {/* Data points */}
          <circle cx="0" cy="40" r="1" fill="#075E54" />
          <circle cx="16.67" cy="25" r="1" fill="#075E54" />
          <circle cx="33.33" cy="60" r="1" fill="#075E54" />
          <circle cx="50" cy="10" r="1" fill="#075E54" />
          <circle cx="66.67" cy="45" r="1" fill="#075E54" />
          <circle cx="83.33" cy="20" r="1" fill="#075E54" />
          <circle cx="100" cy="55" r="1" fill="#075E54" />
        </svg>
      </div>
    </div>
  </div>
)

const MockScatterChart = () => (
  <div className="h-[300px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-500">
        <span>Member 50</span>
        <span>Member 40</span>
        <span>Member 30</span>
        <span>Member 20</span>
        <span>Member 10</span>
        <span>Member 1</span>
      </div>

      {/* X-axis */}
      <div className="absolute bottom-0 left-12 right-0 h-6 flex justify-between text-xs text-gray-500">
        <span>0</span>
        <span>50</span>
        <span>100</span>
        <span>150</span>
        <span>200</span>
      </div>

      {/* Chart area */}
      <div className="ml-12 mb-6 h-full relative">
        {/* Scatter points */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#25D366] rounded-full opacity-70"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
)

export function OverviewDashboard({ isPaidUser, onUpgrade }: OverviewDashboardProps) {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Users className="h-4 w-4 text-[#25D366]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Conversations</CardTitle>
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% from last week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sentiment</CardTitle>
            <Heart className="h-4 w-4 text-[#25D366]" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">Positive</div>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            <div className="text-xs text-gray-600">80% positive sentiment</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Churn Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <div className="flex items-center text-xs text-amber-600">
              <TrendingDown className="h-3 w-3 mr-1" />
              Members at risk
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Member Activity Trend</CardTitle>
            <CardDescription>Daily active members over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <MockAreaChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversation Activity</CardTitle>
            <CardDescription>Number of active conversations per day</CardDescription>
          </CardHeader>
          <CardContent>
            <MockLineChart />
          </CardContent>
        </Card>
      </div>

      {/* Member Distribution Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Member Activity Distribution</CardTitle>
          <CardDescription>Message volume vs. member count (Dominance Analysis)</CardDescription>
        </CardHeader>
        <CardContent>
          <MockScatterChart />
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-[#25D366]">Top 10%</div>
              <div className="text-sm text-gray-600">Send 45% of messages</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[#075E54]">Middle 60%</div>
              <div className="text-sm text-gray-600">Send 40% of messages</div>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-500">Bottom 30%</div>
              <div className="text-sm text-gray-600">Send 15% of messages</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Heatmap Calendar */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Heatmap</CardTitle>
          <CardDescription>Message activity over the past 4 weeks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex gap-1">
                <div className="w-12 text-xs text-gray-500 flex items-center">Week {weekIndex + 1}</div>
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const activity = Math.floor(Math.random() * 100)
                  const intensity =
                    activity > 75
                      ? "bg-[#25D366]"
                      : activity > 50
                        ? "bg-[#25D366]/70"
                        : activity > 25
                          ? "bg-[#25D366]/40"
                          : "bg-gray-200"
                  return (
                    <div
                      key={dayIndex}
                      className={`w-4 h-4 rounded-sm ${intensity} border border-gray-300`}
                      title={`${activity} messages`}
                    />
                  )
                })}
              </div>
            ))}
            <div className="flex items-center gap-2 text-xs text-gray-600 mt-4">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-gray-200 rounded-sm" />
                <div className="w-3 h-3 bg-[#25D366]/40 rounded-sm" />
                <div className="w-3 h-3 bg-[#25D366]/70 rounded-sm" />
                <div className="w-3 h-3 bg-[#25D366] rounded-sm" />
              </div>
              <span>More</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Silent Lurker Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Silent Lurker Analysis</CardTitle>
          <CardDescription>Members by days since last message</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">89</div>
              <div className="text-sm text-green-600">Active (0-3 days)</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-700">32</div>
              <div className="text-sm text-yellow-600">Quiet (4-7 days)</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-700">18</div>
              <div className="text-sm text-orange-600">Dormant (8-14 days)</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-700">8</div>
              <div className="text-sm text-red-600">At Risk (15+ days)</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dominance Ratio */}
      <Card>
        <CardHeader>
          <CardTitle>Group Dominance Analysis</CardTitle>
          <CardDescription>Message distribution across members (Gini coefficient: 0.34)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Balanced participation</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Healthy
              </Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#25D366] h-2 rounded-full" style={{ width: "66%" }}></div>
            </div>
            <p className="text-sm text-gray-600">
              Your group shows healthy participation with no single member dominating conversations.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Prompt for Advanced Features */}
      {!isPaidUser && (
        <Card className="border-[#25D366] bg-green-50">
          <CardHeader>
            <CardTitle className="text-[#25D366]">Unlock Advanced Analytics</CardTitle>
            <CardDescription>
              Get deeper insights with topic analysis, response time heatmaps, and AI-powered recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={onUpgrade} className="bg-[#25D366] hover:bg-[#075E54]">
              Upgrade to Pro - $5
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
