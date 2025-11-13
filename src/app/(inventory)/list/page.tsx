import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function PickupListPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pickup List</h1>
          <p className="text-muted-foreground mt-2">
            Items to buy on your next trip
          </p>
        </div>
        <Button size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Pickup Items */}
      <div className="space-y-3">
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold">Tequila - Patron Silver</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Need: 4 bottles
              </p>
              <p className="text-sm text-muted-foreground">
                Current: 2 bottles (Low stock)
              </p>
            </div>
            <Button variant="outline" size="sm">
              Mark Picked Up
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold">Triple Sec</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Need: 3 bottles
              </p>
              <p className="text-sm text-muted-foreground">
                Current: 1 bottle (Low stock)
              </p>
            </div>
            <Button variant="outline" size="sm">
              Mark Picked Up
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold">Mint - Fresh</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Need: 10 bunches
              </p>
              <p className="text-sm text-muted-foreground">
                Current: 3 bunches
              </p>
            </div>
            <Button variant="outline" size="sm">
              Mark Picked Up
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold">Simple Syrup</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Need: 2L
              </p>
              <p className="text-sm text-muted-foreground">
                Current: 0.5L (Low stock)
              </p>
            </div>
            <Button variant="outline" size="sm">
              Mark Picked Up
            </Button>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold">Limes</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Need: 50 units
              </p>
              <p className="text-sm text-muted-foreground">
                Current: 15 units
              </p>
            </div>
            <Button variant="outline" size="sm">
              Mark Picked Up
            </Button>
          </div>
        </div>
      </div>

      {/* Empty State (hidden when items present) */}
      {/* <div className="flex flex-col items-center justify-center py-12 text-center">
        <ClipboardList className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No items on your list</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Add items you need to pick up
        </p>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add First Item
        </Button>
      </div> */}
    </div>
  )
}
