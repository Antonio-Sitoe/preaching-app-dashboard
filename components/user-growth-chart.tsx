"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Calendar, Filter } from "lucide-react"

const allChartData = {
  2023: [
    { month: "Jan", users: 800 },
    { month: "Fev", users: 950 },
    { month: "Mar", users: 1100 },
    { month: "Abr", users: 1280 },
    { month: "Mai", users: 1450 },
    { month: "Jun", users: 1620 },
    { month: "Jul", users: 1800 },
    { month: "Ago", users: 1950 },
    { month: "Set", users: 2100 },
    { month: "Out", users: 2250 },
    { month: "Nov", users: 2400 },
    { month: "Dez", users: 2580 },
  ],
  2024: [
    { month: "Jan", users: 1200 },
    { month: "Fev", users: 1450 },
    { month: "Mar", users: 1680 },
    { month: "Abr", users: 1920 },
    { month: "Mai", users: 2150 },
    { month: "Jun", users: 2380 },
    { month: "Jul", users: 2650 },
    { month: "Ago", users: 2847 },
    { month: "Set", users: 3020 },
    { month: "Out", users: 3200 },
    { month: "Nov", users: 3380 },
    { month: "Dez", users: 3560 },
  ],
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card border-primary/20 p-3 rounded-lg shadow-lg">
        <p className="text-foreground font-medium">{`${label}`}</p>
        <p className="text-primary">{`Usuários: ${payload[0].value.toLocaleString()}`}</p>
      </div>
    )
  }
  return null
}

export function UserGrowthChart() {
  const [selectedYear, setSelectedYear] = useState<string>("2024")
  const [selectedPeriod, setSelectedPeriod] = useState<string>("all")
  const [customStartDate, setCustomStartDate] = useState<string>("")
  const [customEndDate, setCustomEndDate] = useState<string>("")
  const [showCustomFilter, setShowCustomFilter] = useState(false)

  const getFilteredData = () => {
    let data = allChartData[selectedYear as keyof typeof allChartData] || allChartData[2024]

    if (selectedPeriod === "last3months") {
      data = data.slice(-3)
    } else if (selectedPeriod === "last6months") {
      data = data.slice(-6)
    } else if (selectedPeriod === "custom" && customStartDate && customEndDate) {
      // For demo purposes, we'll filter by month index
      const startMonth = new Date(customStartDate).getMonth()
      const endMonth = new Date(customEndDate).getMonth()
      data = data.slice(startMonth, endMonth + 1)
    }

    return data
  }

  return (
    <Card className="glass-card border-primary/20">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Crescimento Mensal de Usuários
        </CardTitle>

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="year-select" className="text-sm text-muted-foreground">
              Ano:
            </Label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-24 glass-card border-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-card border-primary/20">
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Label htmlFor="period-select" className="text-sm text-muted-foreground">
              Período:
            </Label>
            <Select
              value={selectedPeriod}
              onValueChange={(value) => {
                setSelectedPeriod(value)
                setShowCustomFilter(value === "custom")
              }}
            >
              <SelectTrigger className="w-40 glass-card border-primary/20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="glass-card border-primary/20">
                <SelectItem value="all">Ano Completo</SelectItem>
                <SelectItem value="last3months">Últimos 3 Meses</SelectItem>
                <SelectItem value="last6months">Últimos 6 Meses</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCustomFilter(!showCustomFilter)}
            className="glass-card border-primary/20 hover:bg-primary/10"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>

        {showCustomFilter && (
          <div className="flex flex-wrap gap-4 mt-3 p-4 glass-card border-primary/20 rounded-lg">
            <div className="flex items-center gap-2">
              <Label htmlFor="start-date" className="text-sm text-muted-foreground">
                De:
              </Label>
              <Input
                id="start-date"
                type="date"
                value={customStartDate}
                onChange={(e) => setCustomStartDate(e.target.value)}
                className="glass-card border-primary/20 w-40"
              />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="end-date" className="text-sm text-muted-foreground">
                Até:
              </Label>
              <Input
                id="end-date"
                type="date"
                value={customEndDate}
                onChange={(e) => setCustomEndDate(e.target.value)}
                className="glass-card border-primary/20 w-40"
              />
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={getFilteredData()}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#328048" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#328048" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="users" stroke="#328048" strokeWidth={2} fill="url(#colorUsers)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
