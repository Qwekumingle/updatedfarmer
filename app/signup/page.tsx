"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Facebook, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FarmerOnboarding } from "@/components/farmer-onboarding"
import { BuyerOnboarding } from "@/components/buyer-onboarding"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState("buyer")
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setStep(2)
    }, 1500)
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-10">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost" className="flex items-center gap-1 text-emerald-700">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Button>
      </Link>

      {step === 1 ? (
        <Card className="mx-auto w-full max-w-md">
          <CardHeader className="space-y-1">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="FarmConnect Logo"
                width={48}
                height={48}
                className="rounded-md bg-emerald-600 p-2"
              />
            </div>
            <CardTitle className="text-center text-2xl">Create an account</CardTitle>
            <CardDescription className="text-center">
              Join FarmConnect to connect with farmers and buyers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State" required />
              </div>
              <div className="space-y-2">
                <Label>I am a:</Label>
                <RadioGroup defaultValue="buyer" className="flex" onValueChange={setUserType}>
                  <div className="flex flex-1 items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="farmer" id="farmer" />
                    <Label htmlFor="farmer" className="flex-1 cursor-pointer">
                      Farmer
                    </Label>
                  </div>
                  <div className="flex flex-1 items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="buyer" id="buyer" />
                    <Label htmlFor="buyer" className="flex-1 cursor-pointer">
                      Buyer
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <Facebook className="mr-2 h-4 w-4 text-blue-600" />
                Facebook
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-emerald-600 hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      ) : (
        <Card className="mx-auto w-full max-w-4xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Complete Your Profile</CardTitle>
            <CardDescription className="text-center">Tell us more about yourself to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={userType} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="farmer">Farmer</TabsTrigger>
                <TabsTrigger value="buyer">Buyer</TabsTrigger>
              </TabsList>
              <TabsContent value="farmer">
                <FarmerOnboarding />
              </TabsContent>
              <TabsContent value="buyer">
                <BuyerOnboarding />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
