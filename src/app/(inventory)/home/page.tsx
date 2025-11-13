import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  // Defensive programming: This should never happen due to layout protection,
  // but TypeScript requires us to handle the null case
  if (!session?.user) {
    return null // Layout will redirect, but this satisfies TypeScript
  }

  const firstName = session.user.name?.split(" ")[0] || "there"

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome back, {firstName}!
        </h1>
        <p className="text-muted-foreground mt-2">
          Your inventory dashboard
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="rounded-lg border bg-card p-4">
          <div className="text-2xl font-bold">247</div>
          <div className="text-sm text-muted-foreground">Total Items</div>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="text-2xl font-bold text-yellow-600">12</div>
          <div className="text-sm text-muted-foreground">Low Stock</div>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="text-2xl font-bold text-green-600">5</div>
          <div className="text-sm text-muted-foreground">Pickup List</div>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="text-2xl font-bold">34</div>
          <div className="text-sm text-muted-foreground">This Week</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b">
            <div>
              <div className="font-medium">Vodka - Grey Goose</div>
              <div className="text-sm text-muted-foreground">Used 2 bottles</div>
            </div>
            <div className="text-sm text-muted-foreground">2 hours ago</div>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <div>
              <div className="font-medium">Mint - Fresh</div>
              <div className="text-sm text-muted-foreground">Used 3 bunches</div>
            </div>
            <div className="text-sm text-muted-foreground">5 hours ago</div>
          </div>
          <div className="flex justify-between items-center py-2">
            <div>
              <div className="font-medium">Lime Juice</div>
              <div className="text-sm text-muted-foreground">Restocked 4 bottles</div>
            </div>
            <div className="text-sm text-muted-foreground">1 day ago</div>
          </div>
        </div>
      </div>

      {/* Low Stock Alerts */}
      <div className="rounded-lg border bg-yellow-50 dark:bg-yellow-950 p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Low Stock Alerts</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Tequila - Patron Silver</span>
            <span className="text-sm font-medium">2 bottles left</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Triple Sec</span>
            <span className="text-sm font-medium">1 bottle left</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Simple Syrup</span>
            <span className="text-sm font-medium">0.5L left</span>
          </div>
        </div>
      </div>
    </div>
  )
}
