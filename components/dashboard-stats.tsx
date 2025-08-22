import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FileText, GraduationCap, Eye } from "lucide-react"

const stats = [
  {
    title: "Usuários Ativos",
    value: "2,847",
    icon: Users,
    change: "+12%",
    changeType: "positive" as const,
  },
  {
    title: "Relatórios Cadastrados",
    value: "1,234",
    icon: FileText,
    change: "+8%",
    changeType: "positive" as const,
  },
  {
    title: "Estudantes Cadastrados",
    value: "5,692",
    icon: GraduationCap,
    change: "+15%",
    changeType: "positive" as const,
  },
  {
    title: "Visitas Realizadas",
    value: "18,456",
    icon: Eye,
    change: "+23%",
    changeType: "positive" as const,
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={stat.title}
          className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <p className="text-xs text-primary">{stat.change} em relação ao mês anterior</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
