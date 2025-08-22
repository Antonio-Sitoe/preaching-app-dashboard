import { DashboardStats } from "@/components/dashboard-stats"
import { UserGrowthChart } from "@/components/user-growth-chart"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background dark p-6 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Painel Administrativo</h1>
          <p className="text-muted-foreground">Acompanhe o crescimento e métricas da aplicação</p>
        </div>

        {/* Stats Cards */}
        <DashboardStats />

        {/* Growth Chart */}
        <div className="mt-8">
          <UserGrowthChart />
        </div>
      </div>
    </div>
  )
}
