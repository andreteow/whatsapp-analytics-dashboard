"use client"

import { Clock, Zap, Users, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface EngagementTabProps {
  isPaidUser: boolean
  onUpgrade: () => void
}

const hourlyData = [
  { hour: "00", messages: 2 },
  { hour: "01", messages: 1 },
  { hour: "02", messages: 0 },
  { hour: "03", messages: 1 },
  { hour: "04", messages: 3 },
  { hour: "05", messages: 8 },
  { hour: "06", messages: 15 },
  { hour: "07", messages: 25 },
  { hour: "08", messages: 45 },
  { hour: "09", messages: 52 },
  { hour: "10", messages: 38 },
  { hour: "11", messages: 42 },
  { hour: "12", messages: 35 },
  { hour: "13", messages: 28 },
  { hour: "14", messages: 33 },
  { hour: "15", messages: 41 },
  { hour: "16", messages: 38 },
  { hour: "17", messages: 45 },
  { hour: "18", messages: 55 },
  { hour: "19", messages: 62 },
  { hour: "20", messages: 48 },
  { hour: "21", messages: 35 },
  { hour: "22", messages: 22 },
  { hour: "23", messages: 12 },
]

const MockBarChart = ({ data }: { data: typeof hourlyData }) => (
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

      {/* Chart area */}
      <div className="ml-8 mb-6 h-full flex items-end justify-between gap-1">
        {data.map((item, index) => (
          <div key={item.hour} className="flex flex-col items-center flex-1">
            <div className="bg-[#25D366] w-full rounded-t" style={{ height: `${(item.messages / 62) * 100}%` }} />
            <div className="text-xs text-gray-500 mt-1 transform -rotate-45 origin-top-left">{item.hour}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const MockScatterChart = () => (
  <div className="h-[300px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col justify-between text-xs text-gray-500">
        <span>Messages: 70</span>
        <span>50</span>
        <span>30</span>
        <span>10</span>
        <span>0</span>
      </div>

      {/* X-axis */}
      <div className="absolute bottom-0 left-16 right-0 h-6 flex justify-between text-xs text-gray-500">
        <span>0 min</span>
        <span>5 min</span>
        <span>10 min</span>
        <span>15 min</span>
        <span>20 min</span>
      </div>

      {/* Chart area */}
      <div className="ml-16 mb-6 h-full relative">
        {/* Scatter points representing members */}
        <div
          className="absolute w-3 h-3 bg-[#25D366] rounded-full"
          style={{ left: "25%", top: "20%" }}
          title="Alex: 5.2 min avg, 67 messages"
        />
        <div
          className="absolute w-3 h-3 bg-[#25D366] rounded-full"
          style={{ left: "65%", top: "45%" }}
          title="Sarah: 12.8 min avg, 32 messages"
        />
        <div
          className="absolute w-3 h-3 bg-[#25D366] rounded-full"
          style={{ left: "15%", top: "15%" }}
          title="Mike: 3.1 min avg, 45 messages"
        />
        <div
          className="absolute w-3 h-3 bg-[#25D366] rounded-full"
          style={{ left: "45%", top: "60%" }}
          title="Emma: 8.7 min avg, 28 messages"
        />
        <div
          className="absolute w-3 h-3 bg-[#25D366] rounded-full"
          style={{ left: "80%", top: "75%" }}
          title="David: 15.3 min avg, 19 messages"
        />
      </div>
    </div>
  </div>
)

const engagementFlowData = [
  { stage: "Message Posted", count: 1000, percentage: 100 },
  { stage: "Viewed", count: 850, percentage: 85 },
  { stage: "Reacted", count: 320, percentage: 32 },
  { stage: "Replied", count: 180, percentage: 18 },
  { stage: "Shared", count: 45, percentage: 4.5 },
]

const threadAnalysisData = [
  { threadLength: "1-2 messages", count: 45, percentage: 35 },
  { threadLength: "3-5 messages", count: 38, percentage: 30 },
  { threadLength: "6-10 messages", count: 28, percentage: 22 },
  { threadLength: "11-20 messages", count: 12, percentage: 9 },
  { threadLength: "20+ messages", count: 5, percentage: 4 },
]

const MockHorizontalBarChart = ({ data }: { data: typeof threadAnalysisData }) => (
  <div className="h-[250px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Chart area */}
      <div className="h-full flex flex-col justify-between">
        {data.map((item, index) => (
          <div key={item.threadLength} className="flex items-center gap-4">
            <div className="w-24 text-xs text-gray-600 text-right">{item.threadLength}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
              <div
                className="bg-[#25D366] h-6 rounded-full flex items-center justify-end pr-2"
                style={{ width: `${(item.count / 45) * 100}%` }}
              >
                <span className="text-xs text-white font-medium">{item.count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export function EngagementTab({ isPaidUser, onUpgrade }: EngagementTabProps) {
  return (
    <div className="space-y-6">
      {/* Time-of-Day Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#25D366]" />
            Activity by Time of Day
          </CardTitle>
          <CardDescription>When your community is most active</CardDescription>
        </CardHeader>
        <CardContent>
          <MockBarChart data={hourlyData} />
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Peak hours:</strong> 7-9 PM (62 messages) • Best time for announcements
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Response Time Analysis */}
      <Card className={!isPaidUser ? "relative overflow-hidden" : ""}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-[#25D366]" />
            Response Time Analysis
            {!isPaidUser && <Lock className="h-4 w-4 text-gray-400" />}
          </CardTitle>
          <CardDescription>How quickly members respond to messages</CardDescription>
        </CardHeader>
        <CardContent>
          {isPaidUser ? (
            <div className="space-y-6">
              <MockScatterChart />

              {/* Response Time Distribution */}
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-700">32%</div>
                  <div className="text-xs text-green-600">&lt; 5 min</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-lg font-bold text-yellow-700">28%</div>
                  <div className="text-xs text-yellow-600">5-30 min</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-lg font-bold text-orange-700">25%</div>
                  <div className="text-xs text-orange-600">30min-2hr</div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-lg font-bold text-red-700">15%</div>
                  <div className="text-xs text-red-600">&gt; 2 hours</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-4">Unlock response time analysis</p>
                  <Button onClick={onUpgrade} size="sm" className="bg-[#25D366] hover:bg-[#075E54]">
                    Upgrade to Pro
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Engagement Flow Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>Engagement Flow</CardTitle>
          <CardDescription>How messages flow through the engagement funnel</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {engagementFlowData.map((stage, index) => (
              <div key={stage.stage} className="relative">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{stage.stage}</span>
                  <span className="text-sm text-gray-600">
                    {stage.count} ({stage.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[#25D366] h-3 rounded-full transition-all duration-500"
                    style={{ width: `${stage.percentage}%` }}
                  />
                </div>
                {index < engagementFlowData.length - 1 && (
                  <div className="flex justify-center my-2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Thread Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Conversation Thread Analysis</CardTitle>
          <CardDescription>Length distribution of conversation threads</CardDescription>
        </CardHeader>
        <CardContent>
          <MockHorizontalBarChart data={threadAnalysisData} />
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Insight:</strong> 65% of conversations are short (1-5 messages). Consider strategies to extend
              meaningful discussions.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Conversation Starters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#25D366]" />
            Top Conversation Starters
          </CardTitle>
          <CardDescription>Members who spark the most discussions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Alex Chen", conversations: 12, badge: "🚀" },
              { name: "Sarah Kim", conversations: 8, badge: "💡" },
              { name: "Mike Johnson", conversations: 6, badge: "🎯" },
              { name: "Emma Davis", conversations: 5, badge: "⭐" },
              { name: "David Wilson", conversations: 4, badge: "🔥" },
            ].map((member, index) => (
              <div key={member.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-gray-600">{member.conversations} conversations started</div>
                  </div>
                </div>
                <Badge variant="secondary">{member.badge}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Engagement Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Engagement Patterns</CardTitle>
          <CardDescription>How engagement varies throughout the week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
              const engagement = [85, 92, 78, 88, 95, 65, 72][index]
              return (
                <div key={day} className="text-center">
                  <div className="text-sm font-medium mb-2">{day}</div>
                  <div className="h-20 bg-gray-200 rounded relative">
                    <div
                      className="bg-[#25D366] rounded absolute bottom-0 w-full"
                      style={{ height: `${engagement}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{engagement}%</div>
                </div>
              )
            })}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Insight:</strong> Friday shows highest engagement (95%). Consider scheduling important discussions
              on Fridays.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
