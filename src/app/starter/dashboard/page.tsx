import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StarterPage() {
  return (
    <div className="h-full min-w-full p-4">
      <h1 className="text-xl font-semibold mb-4">Business Overview</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Cash Flow */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">CASH FLOW</CardTitle>
            <div className="text-xl font-semibold">$16,000</div>
            <div className="text-xs text-muted-foreground">Current balance</div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-xs">
              <div>
                <div className="text-green-700">Money in</div>
                <div className="font-medium">$24,500</div>
              </div>
              <div>
                <div className="text-blue-700">Money out</div>
                <div className="font-medium">$8,500</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expenses */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">EXPENSES</CardTitle>
            <div className="text-xl font-semibold">$14,000</div>
            <div className="text-xs text-muted-foreground">Last month</div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Rent & mort...</span>
                <span className="font-medium">$6,500</span>
              </div>
              <div className="flex justify-between">
                <span>Automotive</span>
                <span className="font-medium">$5,250</span>
              </div>
              <div className="flex justify-between">
                <span>Meals & enter...</span>
                <span className="font-medium">$2,250</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profit and Loss */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">PROFIT & LOSS</CardTitle>
            <div className="text-xl font-semibold">$2,000</div>
            <div className="text-xs text-muted-foreground">This month</div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-xs">
              <div>
                <div className="text-green-700">Income</div>
                <div className="font-medium">$16,000</div>
              </div>
              <div>
                <div className="text-red-700">Expenses</div>
                <div className="font-medium">$14,000</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bank Accounts */}
      <Card className="mt-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">BANK ACCOUNTS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span>Checking</span>
              <span className="font-medium">$12,435.65</span>
              <span className="text-blue-700">94 to review</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Mastercard</span>
              <span className="font-medium">-$3,435.65</span>
              <span className="text-blue-700">94 to review</span>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-green-700 font-medium hover:underline"
              >
                Connect accounts
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
