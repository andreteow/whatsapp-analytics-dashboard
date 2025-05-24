"use client"

import { User, Crown, Eye, TrendingDown, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface MembersTabProps {
  isPaidUser: boolean
  onUpgrade: () => void
}

const memberData = [
  { name: "Alex Chen", messages: 156, lastSeen: "2 hours ago", risk: "low", role: "admin" },
  { name: "Sarah Kim", messages: 89, lastSeen: "5 hours ago", risk: "low", role: "member" },
  { name: "Mike Johnson", messages: 134, lastSeen: "1 day ago", risk: "medium", role: "member" },
  { name: "Emma Davis", messages: 67, lastSeen: "3 days ago", risk: "medium", role: "member" },
  { name: "David Wilson", messages: 45, lastSeen: "1 week ago", risk: "high", role: "member" },
  { name: "Lisa Brown", messages: 23, lastSeen: "2 weeks ago", risk: "high", role: "member" },
]

const churnRiskMembers = [
  { name: "David Wilson", lastActive: "7 days ago", probability: 85 },
  { name: "Lisa Brown", lastActive: "14 days ago", probability: 92 },
  { name: "Tom Garcia", lastActive: "10 days ago", probability: 78 },
  { name: "Anna Lee", lastActive: "12 days ago", probability: 81 },
]

const memberActivityTimeline = [
  { week: "Week 1", newMembers: 12, activeMembers: 89, churnedMembers: 2 },
  { week: "Week 2", newMembers: 8, activeMembers: 94, churnedMembers: 1 },
  { week: "Week 3", newMembers: 15, activeMembers: 102, churnedMembers: 3 },
  { week: "Week 4", newMembers: 6, activeMembers: 98, churnedMembers: 4 },
]

const MockLineChart = ({ data }: { data: typeof memberActivityTimeline }) => (
  <div className="h-[300px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
        <span>120</span>
        <span>90</span>
        <span>60</span>
        <span>30</span>
        <span>0</span>
      </div>

      {/* X-axis */}
      <div className="absolute bottom-0 left-8 right-0 h-6 flex justify-between text-xs text-gray-500">
        {data.map((item) => (
          <span key={item.week}>{item.week}</span>
        ))}
      </div>

      {/* Chart area */}
      <div className="ml-8 mb-6 h-full relative">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* New Members Line */}
          <path d="M 0 90 L 33.33 93 L 66.67 87 L 100 95" fill="none" stroke="#25D366" strokeWidth="1" />
          {/* Active Members Line */}
          <path d="M 0 26 L 33.33 22 L 66.67 15 L 100 18" fill="none" stroke="#075E54" strokeWidth="1" />
          {/* Churned Members Line */}
          <path d="M 0 98 L 33.33 99 L 66.67 97 L 100 96" fill="none" stroke="#FF6B6B" strokeWidth="1" />

          {/* Data points */}
          <circle cx="0" cy="90" r="1" fill="#25D366" />
          <circle cx="33.33" cy="93" r="1" fill="#25D366" />
          <circle cx="66.67" cy="87" r="1" fill="#25D366" />
          <circle cx="100" cy="95" r="1" fill="#25D366" />

          <circle cx="0" cy="26" r="1" fill="#075E54" />
          <circle cx="33.33" cy="22" r="1" fill="#075E54" />
          <circle cx="66.67" cy="15" r="1" fill="#075E54" />
          <circle cx="100" cy="18" r="1" fill="#075E54" />

          <circle cx="0" cy="98" r="1" fill="#FF6B6B" />
          <circle cx="33.33" cy="99" r="1" fill="#FF6B6B" />
          <circle cx="66.67" cy="97" r="1" fill="#FF6B6B" />
          <circle cx="100" cy="96" r="1" fill="#FF6B6B" />
        </svg>
      </div>

      {/* Legend */}
      <div className="absolute top-2 right-2 bg-white p-2 rounded shadow text-xs">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3 h-0.5 bg-[#25D366]"></div>
          <span>New Members</span>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3 h-0.5 bg-[#075E54]"></div>
          <span>Active Members</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-0.5 bg-[#FF6B6B]"></div>
          <span>Churned Members</span>
        </div>
      </div>
    </div>
  </div>
)

const MockScatterChart = () => (
  <div className="h-[300px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-20 flex flex-col justify-between text-xs text-gray-500">
        <span>Interactions: 100</span>
        <span>75</span>
        <span>50</span>
        <span>25</span>
        <span>0</span>
      </div>

      {/* X-axis */}
      <div className="absolute bottom-0 left-20 right-0 h-6 flex justify-between text-xs text-gray-500">
        <span>0</span>
        <span>50</span>
        <span>100</span>
        <span>150</span>
        <span>200</span>
      </div>

      {/* Chart area */}
      <div className="ml-20 mb-6 h-full relative">
        {/* Scatter points representing member types */}
        <div
          className="absolute w-4 h-4 bg-[#25D366] rounded-full"
          style={{ left: "75%", top: "10%" }}
          title="Super Active: 150 messages, 89 interactions"
        />
        <div
          className="absolute w-3 h-3 bg-[#075E54] rounded-full"
          style={{ left: "47%", top: "55%" }}
          title="Frequent Poster: 95 messages, 45 interactions"
        />
        <div
          className="absolute w-3 h-3 bg-[#128C7E] rounded-full"
          style={{ left: "6%", top: "33%" }}
          title="Engaged Lurker: 12 messages, 67 interactions"
        />
        <div
          className="absolute w-2 h-2 bg-[#34D399] rounded-full"
          style={{ left: "22%", top: "77%" }}
          title="Occasional: 45 messages, 23 interactions"
        />
        <div
          className="absolute w-2 h-2 bg-gray-400 rounded-full"
          style={{ left: "1%", top: "92%" }}
          title="Silent: 3 messages, 8 interactions"
        />
      </div>
    </div>
  </div>
)

const engagementMatrix = [
  { name: "Super Active", messages: 150, interactions: 89, x: 150, y: 89 },
  { name: "Frequent Poster", messages: 95, interactions: 45, x: 95, y: 45 },
  { name: "Engaged Lurker", messages: 12, interactions: 67, x: 12, y: 67 },
  { name: "Occasional", messages: 45, interactions: 23, x: 45, y: 23 },
  { name: "Silent", messages: 3, interactions: 8, x: 3, y: 8 },
]

const onboardingFunnel = [
  { stage: "Joined Group", count: 25, percentage: 100 },
  { stage: "Read Messages", count: 23, percentage: 92 },
  { stage: "First Reaction", count: 18, percentage: 72 },
  { stage: "First Message", count: 15, percentage: 60 },
  { stage: "Regular Participant", count: 11, percentage: 44 },
]

export function MembersTab({ isPaidUser, onUpgrade }: MembersTabProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "high":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Member Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <User className="h-4 w-4 text-[#25D366]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">147</div>
            <p className="text-xs text-gray-600">+3 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Eye className="h-4 w-4 text-[#25D366]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-gray-600">Posted in last 7 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">At Risk</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-600">Haven't posted in 14+ days</p>
          </CardContent>
        </Card>
      </div>

      {/* Member List */}
      <Card>
        <CardHeader>
          <CardTitle>Member Activity</CardTitle>
          <CardDescription>Overview of member engagement and activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {memberData.map((member) => (
              <div key={member.name} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{member.name}</span>
                      {member.role === "admin" && <Crown className="h-4 w-4 text-yellow-500" />}
                    </div>
                    <div className="text-sm text-gray-600">
                      {member.messages} messages • Last seen {member.lastSeen}
                    </div>
                  </div>
                </div>
                <Badge className={getRiskColor(member.risk)}>{member.risk} risk</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Member Activity Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Member Activity Timeline</CardTitle>
          <CardDescription>New members, active members, and churn over time</CardDescription>
        </CardHeader>
        <CardContent>
          <MockLineChart data={memberActivityTimeline} />
        </CardContent>
      </Card>

      {/* Member Engagement Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Member Engagement Matrix</CardTitle>
          <CardDescription>Messages sent vs. interactions received</CardDescription>
        </CardHeader>
        <CardContent>
          <MockScatterChart />
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm font-medium text-green-800">High Influence</div>
              <div className="text-xs text-green-600">Many interactions per message</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm font-medium text-blue-800">High Volume</div>
              <div className="text-xs text-blue-600">Many messages sent</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Onboarding Success Funnel */}
      <Card>
        <CardHeader>
          <CardTitle>New Member Onboarding Funnel</CardTitle>
          <CardDescription>Journey from joining to becoming an active participant</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {onboardingFunnel.map((stage, index) => (
              <div key={stage.stage} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{stage.stage}</span>
                  <span className="text-sm text-gray-600">
                    {stage.count} members ({stage.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-[#25D366] h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${stage.percentage}%` }}
                  >
                    <span className="text-xs text-white font-medium">{stage.percentage}%</span>
                  </div>
                </div>
                {index < onboardingFunnel.length - 1 && (
                  <div className="flex justify-center my-2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-amber-50 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Opportunity:</strong> 40% drop-off between first reaction and first message. Consider welcome
              prompts.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Churn Risk Analysis - Paid Feature */}
      <Card className={!isPaidUser ? "relative overflow-hidden" : ""}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-500" />
            Churn Risk Prediction
            {!isPaidUser && <Lock className="h-4 w-4 text-gray-400" />}
          </CardTitle>
          <CardDescription>AI-powered predictions of members likely to leave</CardDescription>
        </CardHeader>
        <CardContent>
          {isPaidUser ? (
            <div className="space-y-4">
              {churnRiskMembers.map((member) => (
                <div key={member.name} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-gray-600">Last active: {member.lastActive}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-red-700">{member.probability}% risk</div>
                    <Progress value={member.probability} className="w-20 h-2" />
                  </div>
                </div>
              ))}
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Recommendation:</strong> Send personalized messages to high-risk members within 48 hours.
                </p>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-4">Unlock AI-powered churn prediction</p>
                  <Button onClick={onUpgrade} size="sm" className="bg-[#25D366] hover:bg-[#075E54]">
                    Upgrade to Pro
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Member Onboarding */}
      <Card>
        <CardHeader>
          <CardTitle>New Member Onboarding</CardTitle>
          <CardDescription>How well new members integrate into the community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">First week participation rate</span>
              <span className="font-medium">73%</span>
            </div>
            <Progress value={73} className="w-full" />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-lg font-bold text-green-700">11</div>
                <div className="text-sm text-green-600">Posted within 24h</div>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-lg font-bold text-yellow-700">4</div>
                <div className="text-sm text-yellow-600">Still silent</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
