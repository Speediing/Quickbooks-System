import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChartComponent } from "@/app/(design)/components/[slug]/(demos)/bar-chart";
import { PieChartComponent } from "@/app/(design)/components/[slug]/(demos)/pie-chart";
import { AreaChartComponent } from "@/app/(design)/components/[slug]/(demos)/area-chart";

export default async function StarterSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold tracking-tight mb-2">
        Business overview
      </h1>
      <div className="grid gap-6 md:grid-cols-3">
        {/* Cash Flow */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">CASH FLOW</CardTitle>
            <div className="text-2xl font-bold mt-2">$16,000</div>
            <div className="text-sm text-muted-foreground">
              Current cash balance
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-end">
              <BarChartComponent />
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span className="text-green-700">Money in</span>
              <span className="text-blue-700">Money out</span>
            </div>
          </CardContent>
        </Card>
        {/* Expenses */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2 flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-semibold">
                EXPENSES
              </CardTitle>
              <div className="text-2xl font-bold mt-2">$14,000</div>
              <div className="text-sm text-muted-foreground">Last month</div>
            </div>
            <div className="text-xs text-muted-foreground">Last month</div>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-center justify-center">
              <PieChartComponent />
            </div>
            <ul className="mt-2 text-xs space-y-1">
              <li>
                <span className="font-semibold">$6,500</span> Rent & mort...
              </li>
              <li>
                <span className="font-semibold">$5,250</span> Automotive
              </li>
              <li>
                <span className="font-semibold">$2,250</span> Meals & enter...
              </li>
            </ul>
          </CardContent>
        </Card>
        {/* Profit and Loss */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2 flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-semibold">
                PROFIT AND LOSS
              </CardTitle>
              <div className="text-2xl font-bold mt-2">$20,000</div>
              <div className="text-sm text-muted-foreground">
                Net income for March
              </div>
            </div>
            <div className="text-xs text-muted-foreground">Last month</div>
          </CardHeader>
          <CardContent>
            <div className="mb-2 flex items-center justify-between text-xs">
              <span>Income</span>
              <span className="font-semibold">$100,000</span>
              <span className="text-green-700">8 to review</span>
            </div>
            <div className="w-full h-2 bg-green-100 rounded mb-2">
              <div
                className="h-2 bg-green-500 rounded"
                style={{ width: "80%" }}
              />
            </div>
            <div className="mb-2 flex items-center justify-between text-xs">
              <span>Expenses</span>
              <span className="font-semibold">$80,000</span>
              <span className="text-blue-700">15 to review</span>
            </div>
            <div className="w-full h-2 bg-blue-100 rounded">
              <div
                className="h-2 bg-blue-500 rounded"
                style={{ width: "60%" }}
              />
            </div>
          </CardContent>
        </Card>
        {/* Invoices */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">INVOICES</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex justify-between">
                <span className="font-semibold">$5,281.52</span>{" "}
                <span>Unpaid</span> <span>Last 365 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-600 font-semibold">$1,525.50</span>{" "}
                <span>Overdue</span>
                <span className="text-muted-foreground">
                  $3,756.02 Not due yet
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="font-semibold">$3,692.22</span>{" "}
                <span>Paid</span> <span>Last 30 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  $2,062.52 Not deposited
                </span>
                <span className="text-green-700 font-semibold">
                  $1,629.70 Deposited
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Sales */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2 flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-semibold">SALES</CardTitle>
              <div className="text-2xl font-bold mt-2">$3,500</div>
              <div className="text-sm text-muted-foreground">Last month</div>
            </div>
            <div className="text-xs text-muted-foreground">Last month</div>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-end">
              <AreaChartComponent />
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span>Mar 2</span>
              <span>Mar 31</span>
            </div>
          </CardContent>
        </Card>
        {/* Bank Accounts */}
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">
              BANK ACCOUNTS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex justify-between items-center">
                <span>Checking</span>
                <span className="font-semibold">$12,435.65</span>
                <span className="text-blue-700">94 to review</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">in QuickBooks</span>
                <span className="text-muted-foreground">$4,987.43</span>
                <span className="text-muted-foreground">
                  Updated 4 days ago
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span>Mastercard</span>
                <span className="font-semibold">-$3,435.65</span>
                <span className="text-blue-700">94 to review</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">in QuickBooks</span>
                <span className="text-muted-foreground">$157.72</span>
                <span className="text-muted-foreground">
                  Updated moments ago
                </span>
              </div>
              <div className="flex justify-end mt-2">
                <a
                  href="#"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Connect accounts
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
