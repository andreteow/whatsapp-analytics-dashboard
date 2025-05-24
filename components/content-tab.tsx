"use client"

import { Hash, Link, ImageIcon, Lock, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface ContentTabProps {
  isPaidUser: boolean
  onUpgrade: () => void
}

const topicData = [
  { topic: "AI & Machine Learning", messages: 234, trend: "up", growth: 15 },
  { topic: "Startup Funding", messages: 189, trend: "up", growth: 8 },
  { topic: "Remote Work", messages: 156, trend: "down", growth: -5 },
  { topic: "Crypto & Web3", messages: 134, trend: "up", growth: 22 },
  { topic: "Product Management", messages: 98, trend: "stable", growth: 2 },
]

const linkData = [
  { url: "techcrunch.com/ai-breakthrough", clicks: 45, shares: 12 },
  { url: "github.com/awesome-project", clicks: 38, shares: 8 },
  { url: "medium.com/startup-guide", clicks: 32, shares: 15 },
  { url: "youtube.com/tech-talk", clicks: 28, shares: 6 },
]

const topicEvolutionData = [
  { week: "Week 1", "AI & ML": 45, Startup: 32, "Remote Work": 28, Crypto: 15, Product: 12 },
  { week: "Week 2", "AI & ML": 52, Startup: 38, "Remote Work": 25, Crypto: 22, Product: 15 },
  { week: "Week 3", "AI & ML": 48, Startup: 42, "Remote Work": 22, Crypto: 28, Product: 18 },
  { week: "Week 4", "AI & ML": 58, Startup: 45, "Remote Work": 20, Crypto: 35, Product: 22 },
]

const contentTypeDistribution = [
  { type: "Text", count: 2234, percentage: 78, color: "#25D366" },
  { type: "Images", count: 398, percentage: 14, color: "#075E54" },
  { type: "Links", count: 156, percentage: 5, color: "#128C7E" },
  { type: "Documents", count: 89, percentage: 3, color: "#34D399" },
]

const viralContentTimeline = [
  { time: "9 AM", engagement: 45, content: "AI breakthrough article" },
  { time: "11 AM", engagement: 32, content: "Startup funding news" },
  { time: "2 PM", engagement: 67, content: "Remote work meme" },
  { time: "4 PM", engagement: 28, content: "Product launch video" },
  { time: "7 PM", engagement: 89, content: "Tech conference recap" },
  { time: "9 PM", engagement: 54, content: "Coding tutorial" },
]

const linkPerformanceData = [
  { domain: "techcrunch.com", clicks: 145, shares: 23, engagement: 89 },
  { domain: "github.com", clicks: 98, shares: 45, engagement: 76 },
  { domain: "medium.com", clicks: 87, shares: 12, engagement: 65 },
  { domain: "youtube.com", clicks: 76, shares: 8, engagement: 58 },
  { domain: "twitter.com", clicks: 65, shares: 34, engagement: 72 },
]

const MockStackedAreaChart = ({ data }: { data: typeof topicEvolutionData }) => (
  <div className="h-[300px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
        <span>200</span>
        <span>150</span>
        <span>100</span>
        <span>50</span>
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
          {/* Stacked areas */}
          <path d="M 0 100 L 0 70 L 33.33 68 L 66.67 72 L 100 65 L 100 100 Z" fill="#25D366" opacity="0.8" />
          <path
            d="M 0 70 L 0 54 L 33.33 50 L 66.67 48 L 100 45 L 100 65 L 66.67 72 L 33.33 68 Z"
            fill="#075E54"
            opacity="0.8"
          />
          <path
            d="M 0 54 L 0 40 L 33.33 42 L 66.67 44 L 100 46 L 100 45 L 66.67 48 L 33.33 50 Z"
            fill="#128C7E"
            opacity="0.8"
          />
          <path
            d="M 0 40 L 0 32 L 33.33 30 L 66.67 28 L 100 25 L 100 46 L 66.67 44 L 33.33 42 Z"
            fill="#34D399"
            opacity="0.8"
          />
          <path
            d="M 0 32 L 0 26 L 33.33 24 L 66.67 22 L 100 18 L 100 25 L 66.67 28 L 33.33 30 Z"
            fill="#6EE7B7"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Legend */}
      <div className="absolute top-2 right-2 bg-white p-2 rounded shadow text-xs">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3 h-2 bg-[#25D366]"></div>
          <span>AI & ML</span>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3 h-2 bg-[#075E54]"></div>
          <span>Startup</span>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3 h-2 bg-[#128C7E]"></div>
          <span>Remote Work</span>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3 h-2 bg-[#34D399]"></div>
          <span>Crypto</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-2 bg-[#6EE7B7]"></div>
          <span>Product</span>
        </div>
      </div>
    </div>
  </div>
)

const MockPieChart = ({ data }: { data: typeof contentTypeDistribution }) => (
  <div className="h-[200px] w-full relative">
    <div className="w-48 h-48 mx-auto relative">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Text: 78% */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#25D366"
          strokeWidth="20"
          strokeDasharray="78 22"
          strokeDashoffset="0"
        />
        {/* Images: 14% */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#075E54"
          strokeWidth="20"
          strokeDasharray="14 86"
          strokeDashoffset="-78"
        />
        {/* Links: 5% */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#128C7E"
          strokeWidth="20"
          strokeDasharray="5 95"
          strokeDashoffset="-92"
        />
        {/* Documents: 3% */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#34D399"
          strokeWidth="20"
          strokeDasharray="3 97"
          strokeDashoffset="-97"
        />
      </svg>
    </div>
  </div>
)

const MockBarChart = ({ data }: { data: typeof viralContentTimeline }) => (
  <div className="h-[250px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
        <span>100</span>
        <span>75</span>
        <span>50</span>
        <span>25</span>
        <span>0</span>
      </div>

      {/* Chart area */}
      <div className="ml-8 mb-6 h-full flex items-end justify-between gap-2">
        {data.map((item, index) => (
          <div key={item.time} className="flex flex-col items-center flex-1">
            <div className="bg-[#25D366] w-full rounded-t" style={{ height: `${(item.engagement / 100) * 100}%` }} />
            <div className="text-xs text-gray-500 mt-1">{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const MockScatterChart = ({ data }: { data: typeof linkPerformanceData }) => (
  <div className="h-[300px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-500">
        <span>Shares: 50</span>
        <span>40</span>
        <span>30</span>
        <span>20</span>
        <span>10</span>
        <span>0</span>
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
        {data.map((link, index) => (
          <div
            key={link.domain}
            className="absolute w-3 h-3 bg-[#25D366] rounded-full"
            style={{
              left: `${(link.clicks / 150) * 90}%`,
              top: `${100 - (link.shares / 50) * 90}%`,
            }}
            title={`${link.domain}: ${link.clicks} clicks, ${link.shares} shares`}
          />
        ))}
      </div>
    </div>
  </div>
)

export function ContentTab({ isPaidUser, onUpgrade }: ContentTabProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case "down":
        return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />
      default:
        return <div className="h-4 w-4" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="space-y-6">
      {/* Content Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <Hash className="h-4 w-4 text-[#25D366]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-gray-600">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Links Shared</CardTitle>
            <Link className="h-4 w-4 text-[#25D366]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67</div>
            <p className="text-xs text-gray-600">+12% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Media Shared</CardTitle>
            <ImageIcon className="h-4 w-4 text-[#25D366]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">143</div>
            <p className="text-xs text-gray-600">Images, videos, docs</p>
          </CardContent>
        </Card>
      </div>

      {/* Topic Evolution River Chart */}
      <Card className={!isPaidUser ? "relative overflow-hidden" : ""}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5 text-[#25D366]" />
            Topic Evolution
            {!isPaidUser && <Lock className="h-4 w-4 text-gray-400" />}
          </CardTitle>
          <CardDescription>How conversation topics have evolved over time</CardDescription>
        </CardHeader>
        <CardContent>
          {isPaidUser ? (
            <div className="space-y-6">
              <MockStackedAreaChart data={topicEvolutionData} />

              {/* Topic Trends */}
              <div className="space-y-3">
                {topicData.map((topic) => (
                  <div key={topic.topic} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-medium">{topic.topic}</div>
                        <div className="text-sm text-gray-600">{topic.messages} messages</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(topic.trend)}
                      <span className={`text-sm font-medium ${getTrendColor(topic.trend)}`}>
                        {topic.growth > 0 ? "+" : ""}
                        {topic.growth}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Lock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-4">Unlock AI-powered topic analysis</p>
                  <Button onClick={onUpgrade} size="sm" className="bg-[#25D366] hover:bg-[#075E54]">
                    Upgrade to Pro
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Content Type Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Content Type Distribution</CardTitle>
          <CardDescription>Breakdown of content types shared in the community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MockPieChart data={contentTypeDistribution} />
            <div className="space-y-3">
              {contentTypeDistribution.map((item) => (
                <div key={item.type} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm font-medium">{item.type}</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {item.count} ({item.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Viral Content Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Viral Content Timeline</CardTitle>
          <CardDescription>When content goes viral throughout the day</CardDescription>
        </CardHeader>
        <CardContent>
          <MockBarChart data={viralContentTimeline} />
        </CardContent>
      </Card>

      {/* Link Performance Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Link Performance Analysis</CardTitle>
          <CardDescription>Click-through rates and sharing patterns by domain</CardDescription>
        </CardHeader>
        <CardContent>
          <MockScatterChart data={linkPerformanceData} />
          <div className="mt-4 space-y-2">
            {linkPerformanceData.map((link) => (
              <div key={link.domain} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium">{link.domain}</span>
                <div className="flex gap-4 text-xs text-gray-600">
                  <span>{link.clicks} clicks</span>
                  <span>{link.shares} shares</span>
                  <span>{link.engagement}% engagement</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Message Types */}
      <Card>
        <CardHeader>
          <CardTitle>Message Types</CardTitle>
          <CardDescription>Breakdown of content types shared</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: "Text Messages", count: 2234, percentage: 78 },
              { type: "Images", count: 398, percentage: 14 },
              { type: "Links", count: 156, percentage: 5 },
              { type: "Documents", count: 59, percentage: 3 },
            ].map((item) => (
              <div key={item.type} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.type}</span>
                  <span className="text-sm text-gray-600">
                    {item.count} ({item.percentage}%)
                  </span>
                </div>
                <Progress value={item.percentage} className="w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Viral Content */}
      <Card>
        <CardHeader>
          <CardTitle>Viral Content</CardTitle>
          <CardDescription>Messages that generated the most engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                author: "Alex Chen",
                preview: "Just discovered this amazing AI tool that...",
                replies: 23,
                reactions: 45,
              },
              { author: "Sarah Kim", preview: "Thoughts on the new funding landscape?", replies: 18, reactions: 32 },
              {
                author: "Mike Johnson",
                preview: "Remote work productivity hack: try this...",
                replies: 15,
                reactions: 28,
              },
            ].map((message, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-medium text-sm">{message.author}</div>
                  <Badge variant="secondary">{message.replies + message.reactions} engagements</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{message.preview}</p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <span>{message.replies} replies</span>
                  <span>{message.reactions} reactions</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
