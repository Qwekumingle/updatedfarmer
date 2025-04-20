"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { productCategories, regions, certifications } from "@/lib/marketplace-data"

export function ProductFilters() {
  const [showCategories, setShowCategories] = useState(true)
  const [showRegions, setShowRegions] = useState(true)
  const [showCertifications, setShowCertifications] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleRegion = (region: string) => {
    setSelectedRegions((prev) => (prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]))
  }

  const toggleCertification = (certification: string) => {
    setSelectedCertifications((prev) =>
      prev.includes(certification) ? prev.filter((c) => c !== certification) : [...prev, certification],
    )
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedRegions([])
    setSelectedCertifications([])
  }

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedRegions.length > 0 || selectedCertifications.length > 0

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 text-xs"
          >
            Clear all
          </Button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-4 border-b pb-4">
        <button
          className="flex justify-between items-center w-full mb-2"
          onClick={() => setShowCategories(!showCategories)}
        >
          <span className="font-medium">Categories</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${showCategories ? "rotate-180" : ""}`} />
        </button>
        {showCategories && (
          <div className="space-y-2 mt-2">
            {productCategories.map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer">
                <div
                  className={`h-4 w-4 rounded border flex items-center justify-center ${
                    selectedCategories.includes(category) ? "bg-emerald-600 border-emerald-600" : "border-gray-300"
                  }`}
                >
                  {selectedCategories.includes(category) && <Check className="h-3 w-3 text-white" />}
                </div>
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Regions */}
      <div className="mb-4 border-b pb-4">
        <button className="flex justify-between items-center w-full mb-2" onClick={() => setShowRegions(!showRegions)}>
          <span className="font-medium">Regions</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${showRegions ? "rotate-180" : ""}`} />
        </button>
        {showRegions && (
          <div className="space-y-2 mt-2">
            {regions.map((region) => (
              <label key={region} className="flex items-center gap-2 cursor-pointer">
                <div
                  className={`h-4 w-4 rounded border flex items-center justify-center ${
                    selectedRegions.includes(region) ? "bg-emerald-600 border-emerald-600" : "border-gray-300"
                  }`}
                >
                  {selectedRegions.includes(region) && <Check className="h-3 w-3 text-white" />}
                </div>
                <span className="text-sm">{region}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Certifications */}
      <div className="mb-4">
        <button
          className="flex justify-between items-center w-full mb-2"
          onClick={() => setShowCertifications(!showCertifications)}
        >
          <span className="font-medium">Certifications</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${showCertifications ? "rotate-180" : ""}`} />
        </button>
        {showCertifications && (
          <div className="space-y-2 mt-2">
            {certifications.map((certification) => (
              <label key={certification} className="flex items-center gap-2 cursor-pointer">
                <div
                  className={`h-4 w-4 rounded border flex items-center justify-center ${
                    selectedCertifications.includes(certification)
                      ? "bg-emerald-600 border-emerald-600"
                      : "border-gray-300"
                  }`}
                >
                  {selectedCertifications.includes(certification) && <Check className="h-3 w-3 text-white" />}
                </div>
                <span className="text-sm">{certification}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="pt-2">
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Apply Filters</Button>
      </div>
    </div>
  )
}
