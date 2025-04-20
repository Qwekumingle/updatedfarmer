"use client"

import type React from "react"

import { useState } from "react"
import { Check, Loader2, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function FarmerOnboarding() {
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsComplete(true)
    }, 1500)
  }

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-12">
        <div className="rounded-full bg-emerald-100 p-3">
          <Check className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-semibold">Profile Complete!</h3>
        <p className="text-center text-muted-foreground">
          Your farmer profile has been created. You can now start listing your products.
        </p>
        <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">Go to Dashboard</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="farm-name">Farm Name</Label>
          <Input id="farm-name" placeholder="Enter your farm name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="farm-description">Farm Description</Label>
          <Textarea
            id="farm-description"
            placeholder="Tell buyers about your farm, growing practices, etc."
            className="min-h-[120px]"
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Farm Photos</Label>
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Upload className="mb-2 h-10 w-10 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Drag and drop photos or click to browse</p>
              <Button variant="outline" className="mt-4">
                Upload Photos
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-2">
          <Label>Products & Services</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="vegetables" />
              <Label htmlFor="vegetables">Vegetables</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="fruits" />
              <Label htmlFor="fruits">Fruits</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="dairy" />
              <Label htmlFor="dairy">Dairy Products</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="meat" />
              <Label htmlFor="meat">Meat Products</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="grains" />
              <Label htmlFor="grains">Grains & Cereals</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="recycling" />
              <Label htmlFor="recycling">Agricultural Waste Recycling</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="certifications">Certifications (Optional)</Label>
          <Input id="certifications" placeholder="e.g., Organic, Non-GMO, etc." />
        </div>
      </div>

      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Completing profile...
          </>
        ) : (
          "Complete Profile"
        )}
      </Button>
    </form>
  )
}
