"use client"

import { useState } from "react"
import { Check, Zap, BarChart3, Users, Brain } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PaywallModalProps {
  isOpen: boolean
  onClose: () => void
  onPaymentSuccess: () => void
}

export function PaywallModal({ isOpen, onClose, onPaymentSuccess }: PaywallModalProps) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleUpgrade = async () => {
    setIsProcessing(true)

    // Simulate Stripe payment processing
    setTimeout(() => {
      setIsProcessing(false)
      onPaymentSuccess()
      onClose()
    }, 2000)
  }

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Topic analysis, response time heatmaps, and engagement patterns",
    },
    {
      icon: Users,
      title: "Churn Prediction",
      description: "AI-powered predictions of members likely to leave",
    },
    {
      icon: Brain,
      title: "AI Insights",
      description: "Automated recommendations and weekly digest emails",
    },
    {
      icon: Zap,
      title: "Real-time Alerts",
      description: "Instant notifications for sentiment changes and toxicity",
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Unlock Advanced Analytics</DialogTitle>
          <DialogDescription className="text-center text-lg">
            Get deeper insights into your WhatsApp community
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Pricing */}
          <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="text-4xl font-bold text-[#25D366] mb-2">$5</div>
            <div className="text-gray-600 mb-4">One-time payment per analysis</div>
            <Badge className="bg-[#25D366] text-white">60-second money-back guarantee</Badge>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="flex items-start gap-3 p-3">
                  <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* What you get */}
          <div className="space-y-2">
            <h4 className="font-medium">What you'll unlock:</h4>
            <div className="space-y-1 text-sm text-gray-600">
              {[
                "Topic river analysis showing conversation themes",
                "Response time heatmap for member engagement",
                "AI-powered churn risk predictions",
                "Detailed emotion analysis beyond basic sentiment",
                "Toxicity detection and moderation alerts",
                "Automated weekly digest with insights",
                "Personalized re-engagement message templates",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#25D366] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1" disabled={isProcessing}>
              Maybe Later
            </Button>
            <Button onClick={handleUpgrade} className="flex-1 bg-[#25D366] hover:bg-[#075E54]" disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Upgrade Now - $5"}
            </Button>
          </div>

          {/* Trust signals */}
          <div className="text-center text-xs text-gray-500">
            <p>🔒 Secure payment via Stripe • 💾 Your data stays private • ⚡ Instant access</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
