"use client"

import type React from "react"

import { useState } from "react"
import { Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function BuyerOnboarding() {
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
          Your buyer profile has been created. You can now start browsing products from local farmers.
        </p>
        <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">Explore Marketplace</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Buyer Type</Label>
          <RadioGroup defaultValue="individual" className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center space-y-2 rounded-md border p-4">
              <RadioGroupItem value="individual" id="individual" className="sr-only" />
              <Label htmlFor="individual" className="cursor-pointer text-center font-medium">
                Individual
                <p className="text-sm font-normal text-muted-foreground">Personal or family use</p>
              </Label>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-md border p-4">
              <RadioGroupItem value="business" id="business" className="sr-only" />
              <Label htmlFor="business" className="cursor-pointer text-center font-medium">
                Business
                <p className="text-sm font-normal text-muted-foreground">Restaurant, store, or other business</p>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferences">Shopping Preferences</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="organic" />
              <Label htmlFor="organic">Organic Products</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="local" />
              <Label htmlFor="local">Local Products (within 50 miles)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sustainable" />
              <Label htmlFor="sustainable">Sustainable Farming Practices</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="seasonal" />
              <Label htmlFor="seasonal">Seasonal Products</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="recycling" />
              <Label htmlFor="recycling">Interested in Recycling Programs</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="delivery-preferences">Delivery Preferences</Label>
          <RadioGroup defaultValue="pickup">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pickup" id="pickup" />
              <Label htmlFor="pickup">Pickup from farm</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="delivery" id="delivery" />
              <Label htmlFor="delivery">Delivery to my location</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="both" id="both" />
              <Label htmlFor="both">Both options</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="additional-info">Additional Information (Optional)</Label>
          <Textarea
            id="additional-info"
            placeholder="Any specific requirements or information you'd like farmers to know"
            className="min-h-[100px]"
          />
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
