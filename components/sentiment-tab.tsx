"use client"

import { Heart, Frown, Meh, Smile, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface SentimentTabProps {
  isPaidUser: boolean
  onUpgrade: () => void
}

const sentimentTrendData = [
  { date: "2024-01-01", positive: 0.7, neutral: 0.2, negative: 0.1 },
  { date: "2024-01-02", positive: 0.8, neutral: 0.15, negative: 0.05 },
  { date: "2024-01-03", positive: 0.6, neutral: 0.3, negative: 0.1 },
  { date: "2024-01-04", positive: 0.9, neutral: 0.08, negative: 0.02 },
  { date: "2024-01-05", positive: 0.7, neutral: 0.25, negative: 0.05 },
  { date: "2024-01-06", positive: 0.8, neutral: 0.18, negative: 0.02 },
  { date: "2024-01-07", positive: 0.75, neutral: 0.2, negative: 0.05 },
]

const emotionRadarData = [
  { emotion: "Joy", current: 85, average: 70, fullMark: 100 },
  { emotion: "Trust", current: 78, average: 65, fullMark: 100 },
  { emotion: "Anticipation", current: 72, average: 60, fullMark: 100 },
  { emotion: "Surprise", current: 45, average: 50, fullMark: 100 },
  { emotion: "Fear", current: 15, average: 25, fullMark: 100 },
  { emotion: "Sadness", current: 12, average: 20, fullMark: 100 },
  { emotion: "Disgust", current: 8, average: 15, fullMark: 100 },
  { emotion: "Anger", current: 5, average: 12, fullMark: 100 },
]

const sentimentHeatmapData = Array.from({ length: 24 }, (_, hour) => ({
  hour: `${hour}:00`,
  sentiment: 0.3 + Math.random() * 0.6,
  messages: Math.floor(Math.random() * 50) + 10,
}))

const memberSentimentDistribution = [
  { range: "Very Positive (0.8-1.0)", count: 45, percentage: 31 },
  { range: "Positive (0.6-0.8)", count: 52, percentage: 35 },
  { range: "Neutral (0.4-0.6)", count: 38, percentage: 26 },
  { range: "Negative (0.2-0.4)", count: 9, percentage: 6 },
  { range: "Very Negative (0.0-0.2)", count: 3, percentage: 2 },
]

const toxicityTrendData = [
  { date: "2024-01-01", toxicity: 2.1, messages: 234 },
  { date: "2024-01-02", toxicity: 1.8, messages: 189 },
  { date: "2024-01-03", toxicity: 3.2, messages: 267 },
  { date: "2024-01-04", toxicity: 1.5, messages: 198 },
  { date: "2024-01-05", toxicity: 2.8, messages: 245 },
  { date: "2024-01-06", toxicity: 1.2, messages: 178 },
  { date: "2024-01-07", toxicity: 1.9, messages: 203 },
]

const MockLineChart = ({ data }: { data: typeof sentimentTrendData }) => (
  <div className="h-[300px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
        <span>1.0</span>
        <span>0.8</span>
        <span>0.6</span>
        <span>0.4</span>
        <span>0.2</span>
        <span>0.0</span>
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
          {/* Positive line */}
          <path
            d="M 0 30 L 16.67 20 L 33.33 40 L 50 10 L 66.67 30 L 83.33 20 L 100 25"
            fill="none"
            stroke="#25D366"
            strokeWidth="1"
          />
          {/* Neutral line */}
          <path
            d="M 0 80 L 16.67 85 L 33.33 70 L 50 92 L 66.67 75 L 83.33 82 L 100 80"
            fill="none"
            stroke="#128C7E"
            strokeWidth="1"
          />
          {/* Negative line */}
          <path
            d="M 0 90 L 16.67 95 L 33.33 90 L 50 98 L 66.67 95 L 83.33 98 L 100 95"
            fill="none"
            stroke="#FF6B6B"
            strokeWidth="1"
          />

          {/* Data points */}
          {[0, 16.67, 33.33, 50, 66.67, 83.33, 100].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={[30, 20, 40, 10, 30, 20, 25][i]} r="1" fill="#25D366" />
              <circle cx={x} cy={[80, 85, 70, 92, 75, 82, 80][i]} r="1" fill="#128C7E" />
              <circle cx={x} cy={[90, 95, 90, 98, 95, 98, 95][i]} r="1" fill="#FF6B6B" />
            </g>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="absolute top-2 right-2 bg-white p-2 rounded shadow text-xs">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3 h-0.5 bg-[#25D366]"></div>
          <span>Positive</span>
        </div>
        <div className="flex items-center gap-1 mb-1">
          <div className="w-3 h-0.5 bg-[#128C7E]"></div>
          <span>Neutral</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-0.5 bg-[#FF6B6B]"></div>
          <span>Negative</span>
        </div>
      </div>
    </div>
  </div>
)

const MockRadarChart = ({ data }: { data: typeof emotionRadarData }) => (
  <div className="h-[300px] w-full relative">
    <div className="w-64 h-64 mx-auto relative">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Grid circles */}
        <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#e5e7eb" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
        <circle cx="100" cy="100" r="20" fill="none" stroke="#e5e7eb" strokeWidth="1" />

        {/* Grid lines */}
        {data.map((_, i) => {
          const angle = (i * 360) / data.length - 90
          const x = 100 + 80 * Math.cos((angle * Math.PI) / 180)
          const y = 100 + 80 * Math.sin((angle * Math.PI) / 180)
          return <line key={i} x1="100" y1="100" x2={x} y2={y} stroke="#e5e7eb" strokeWidth="1" />
        })}

        {/* Current data polygon */}
        <polygon
          points={data
            .map((item, i) => {
              const angle = (i * 360) / data.length - 90
              const radius = (item.current / 100) * 80
              const x = 100 + radius * Math.cos((angle * Math.PI) / 180)
              const y = 100 + radius * Math.sin((angle * Math.PI) / 180)
              return `${x},${y}`
            })
            .join(" ")}
          fill="#25D366"
          fillOpacity="0.3"
          stroke="#25D366"
          strokeWidth="2"
        />

        {/* Average data polygon */}
        <polygon
          points={data
            .map((item, i) => {
              const angle = (i * 360) / data.length - 90
              const radius = (item.average / 100) * 80
              const x = 100 + radius * Math.cos((angle * Math.PI) / 180)
              const y = 100 + radius * Math.sin((angle * Math.PI) / 180)
              return `${x},${y}`
            })
            .join(" ")}
          fill="#075E54"
          fillOpacity="0.1"
          stroke="#075E54"
          strokeWidth="1"
        />

        {/* Labels */}
        {data.map((item, i) => {
          const angle = (i * 360) / data.length - 90
          const x = 100 + 95 * Math.cos((angle * Math.PI) / 180)
          const y = 100 + 95 * Math.sin((angle * Math.PI) / 180)
          return (
            <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#6b7280">
              {item.emotion}
            </text>
          )
        })}
      </svg>
    </div>
  </div>
)

const MockAreaChart = ({ data }: { data: typeof sentimentHeatmapData }) => (
  <div className="h-[200px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
        <span>100%</span>
        <span>75%</span>
        <span>50%</span>
        <span>25%</span>
        <span>0%</span>
      </div>

      {/* X-axis */}
      <div className="absolute bottom-0 left-8 right-0 h-6 flex justify-between text-xs text-gray-500">
        <span>0h</span>
        <span>6h</span>
        <span>12h</span>
        <span>18h</span>
        <span>24h</span>
      </div>

      {/* Chart area */}
      <div className="ml-8 mb-6 h-full relative">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sentimentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#25D366" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#25D366" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M 0 40 Q 25 30 50 35 Q 75 25 100 45 L 100 100 L 0 100 Z"
            fill="url(#sentimentGradient)"
            stroke="#25D366"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  </div>
)

const MockToxicityChart = ({ data }: { data: typeof toxicityTrendData }) => (
  <div className="h-[250px] w-full relative bg-gray-50 rounded border">
    <div className="absolute inset-4">
      {/* Y-axis */}
      <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
        <span>4%</span>
        <span>3%</span>
        <span>2%</span>
        <span>1%</span>
        <span>0%</span>
      </div>

      {/* X-axis */}
      <div className="absolute bottom-0 left-8 right-0 h-6 flex justify-between text-xs text-gray-500">
        <span>Jan 1</span>
        <span>Jan 3</span>
        <span>Jan 5</span>
        <span>Jan 7</span>
      </div>

      {/* Chart area */}
      <div className="ml-8 mb-6 h-full relative">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 0 47 L 16.67 55 L 33.33 20 L 50 62 L 66.67 30 L 83.33 70 L 100 52"
            fill="none"
            stroke="#FF6B6B"
            strokeWidth="1"
          />

          {/* Data points */}
          {[0, 16.67, 33.33, 50, 66.67, 83.33, 100].map((x, i) => (
            <circle key={i} cx={x} cy={[47, 55, 20, 62, 30, 70, 52][i]} r="1" fill="#FF6B6B" />
          ))}
        </svg>
      </div>
    </div>
  </div>
)

export function SentimentTab({ isPaidUser, onUpgrade }: SentimentTabProps) {
  return (
    <div className="space-y-6">
      {/* Sentiment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Sentiment</CardTitle>
            <Heart className="h-4 w-4 text-[#25D366]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Positive</div>
            <p className="text-xs text-gray-600">80% positive messages</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Positive</CardTitle>
            <Smile className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80%</div>
            <p className="text-xs text-green-600">+5% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Neutral</CardTitle>
            <Meh className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15%</div>
            <p className="text-xs text-gray-600">-2% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Negative</CardTitle>
            <Frown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5%</div>
            <p className="text-xs text-red-600">-3% from last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Sentiment Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Sentiment Trend</CardTitle>
          <CardDescription>How community mood has changed over time</CardDescription>
        </CardHeader>
        <CardContent>
          <MockLineChart data={sentimentTrendData} />
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Insight:</strong> Sentiment peaked on January 4th during the product launch discussion. Community
              is generally very positive.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Emotion Radar Chart */}
      <Card className={!isPaidUser ? "relative overflow-hidden" : ""}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-[#25D366]" />
            Emotion Radar Analysis
            {!isPaidUser && <Lock className="h-4 w-4 text-gray-400" />}
          </CardTitle>
          <CardDescription>Detailed breakdown of emotions vs. community average</CardDescription>
        </CardHeader>
        <CardContent>
          {isPaidUser ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MockRadarChart data={emotionRadarData} />
              <div className="space-y-3">
                {emotionRadarData.map((emotion) => (
                  <div key={emotion.emotion} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{emotion.emotion}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#25D366]">{emotion.current}%</span>
                      <span className="text-xs text-gray-500">vs {emotion.average}% avg</span>
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
                  <p className="text-gray-600 mb-4">Unlock detailed emotion radar</p>
                  <Button onClick={onUpgrade} size="sm" className="bg-[#25D366] hover:bg-[#075E54]">
                    Upgrade to Pro
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sentiment Heatmap by Time */}
      <Card>
        <CardHeader>
          <CardTitle>Sentiment by Time of Day</CardTitle>
          <CardDescription>How community mood changes throughout the day</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <MockAreaChart data={sentimentHeatmapData} />

            {/* Time-based insights */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-lg font-bold text-green-700">9-11 AM</div>
                <div className="text-sm text-green-600">Peak positivity</div>
              </div>
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-lg font-bold text-yellow-700">2-4 PM</div>
                <div className="text-sm text-yellow-600">Neutral period</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-700">7-9 PM</div>
                <div className="text-sm text-blue-600">High engagement</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Member Sentiment Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Member Sentiment Distribution</CardTitle>
          <CardDescription>How sentiment is distributed across community members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {memberSentimentDistribution.map((range) => (
              <div key={range.range} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{range.range}</span>
                  <span className="text-sm text-gray-600">
                    {range.count} members ({range.percentage}%)
                  </span>
                </div>
                <Progress value={range.percentage} className="w-full" />
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Insight:</strong> 66% of members maintain positive sentiment. Focus on supporting the 8% with
              negative sentiment.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Toxicity Trend Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Toxicity Trend Analysis</CardTitle>
          <CardDescription>Monitoring negative language and conflict patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <MockToxicityChart data={toxicityTrendData} />
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-700">1.8%</div>
              <div className="text-sm text-green-600">Average toxicity</div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <div className="text-lg font-bold text-yellow-700">3.2%</div>
              <div className="text-sm text-yellow-600">Peak this week</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-700">2</div>
              <div className="text-sm text-blue-600">Alerts triggered</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sentiment by Member */}
      <Card>
        <CardHeader>
          <CardTitle>Member Sentiment Patterns</CardTitle>
          <CardDescription>How different members contribute to overall mood</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Alex Chen", sentiment: "Very Positive", score: 0.9, messages: 45 },
              { name: "Sarah Kim", sentiment: "Positive", score: 0.7, messages: 32 },
              { name: "Mike Johnson", sentiment: "Positive", score: 0.6, messages: 28 },
              { name: "Emma Davis", sentiment: "Neutral", score: 0.3, messages: 19 },
              { name: "David Wilson", sentiment: "Mixed", score: 0.1, messages: 15 },
            ].map((member) => (
              <div key={member.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-gray-600">{member.messages} messages</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{member.sentiment}</div>
                  <div className="text-xs text-gray-600">Score: {member.score}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
