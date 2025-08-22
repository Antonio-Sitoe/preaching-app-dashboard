"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { Clock, Smartphone, Monitor, Tablet, Users, Activity, TrendingUp } from "lucide-react"

// Mock data for analytics
const loginFrequencyData = [
  { user: "João Silva", logins: 45 },
  { user: "Maria Santos", logins: 38 },
  { user: "Pedro Costa", logins: 32 },
  { user: "Ana Oliveira", logins: 28 },
  { user: "Carlos Lima", logins: 25 },
  { user: "Lucia Ferreira", logins: 22 },
  { user: "Roberto Alves", logins: 18 },
  { user: "Fernanda Rocha", logins: 15 },
]

const deviceData = [
  { name: "Mobile", value: 65, color: "#328048" },
  { name: "Desktop", value: 28, color: "#22c55e" },
  { name: "Tablet", value: 7, color: "#16a34a" },
]

const featuresData = [
  { feature: "Dashboard", usage: 89, color: "#328048" },
  { feature: "Relatórios", usage: 76, color: "#22c55e" },
  { feature: "Usuários", usage: 68, color: "#16a34a" },
  { feature: "Configurações", usage: 45, color: "#15803d" },
  { feature: "Analytics", usage: 32, color: "#166534" },
]

const sessionTimeData = [
  { day: "Seg", time: 18 },
  { day: "Ter", time: 22 },
  { day: "Qua", time: 15 },
  { day: "Qui", time: 28 },
  { day: "Sex", time: 25 },
  { day: "Sáb", time: 12 },
  { day: "Dom", time: 8 },
]

export default function AnalyticsPage() {
  const [timeFilter, setTimeFilter] = useState("30d")

  return (
    <div className="min-h-screen from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics & Relatórios</h1>
            <p className="text-slate-400">Análise detalhada do comportamento dos usuários</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant={timeFilter === "7d" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeFilter("7d")}
              className="glassmorphic"
            >
              7 dias
            </Button>
            <Button
              variant={timeFilter === "30d" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeFilter("30d")}
              className="glassmorphic"
            >
              30 dias
            </Button>
            <Button
              variant={timeFilter === "90d" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeFilter("90d")}
              className="glassmorphic"
            >
              90 dias
            </Button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glassmorphic border-slate-700/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Tempo Médio de Sessão</CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">18min 32s</div>
              <p className="text-xs text-slate-400">
                <span className="text-green-400">+12%</span> vs mês anterior
              </p>
            </CardContent>
          </Card>

          <Card className="glassmorphic border-slate-700/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total de Sessões</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2,847</div>
              <p className="text-xs text-slate-400">
                <span className="text-green-400">+8%</span> vs mês anterior
              </p>
            </CardContent>
          </Card>

          <Card className="glassmorphic border-slate-700/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Usuários Ativos</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,234</div>
              <p className="text-xs text-slate-400">
                <span className="text-green-400">+15%</span> vs mês anterior
              </p>
            </CardContent>
          </Card>

          <Card className="glassmorphic border-slate-700/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Taxa de Retenção</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">78.5%</div>
              <p className="text-xs text-slate-400">
                <span className="text-green-400">+3%</span> vs mês anterior
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Login Frequency Chart */}
          <Card className="glassmorphic border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Frequência de Login por Usuário
              </CardTitle>
              <CardDescription className="text-slate-400">Usuários mais ativos nos últimos 30 dias</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={loginFrequencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="user" stroke="#9ca3af" fontSize={12} angle={-45} textAnchor="end" height={80} />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(30, 41, 59, 0.9)",
                      border: "1px solid #475569",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Bar dataKey="logins" fill="#328048" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Device Usage Chart */}
          <Card className="glassmorphic border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Monitor className="h-5 w-5 text-primary" />
                Dispositivos Mais Utilizados
              </CardTitle>
              <CardDescription className="text-slate-400">Distribuição por tipo de dispositivo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <ResponsiveContainer width="60%" height={200}>
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(30, 41, 59, 0.9)",
                        border: "1px solid #475569",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {deviceData.map((device, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: device.color }} />
                      <div className="flex items-center space-x-2">
                        {device.name === "Mobile" && <Smartphone className="h-4 w-4 text-slate-400" />}
                        {device.name === "Desktop" && <Monitor className="h-4 w-4 text-slate-400" />}
                        {device.name === "Tablet" && <Tablet className="h-4 w-4 text-slate-400" />}
                        <span className="text-sm text-slate-300">{device.name}</span>
                      </div>
                      <Badge variant="secondary" className="ml-auto">
                        {device.value}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Session Time Trend */}
          <Card className="glassmorphic border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Tempo de Sessão por Dia
              </CardTitle>
              <CardDescription className="text-slate-400">Média de tempo por sessão na última semana</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={sessionTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(30, 41, 59, 0.9)",
                      border: "1px solid #475569",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                    formatter={(value) => [`${value} min`, "Tempo Médio"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="time"
                    stroke="#328048"
                    strokeWidth={3}
                    dot={{ fill: "#328048", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Most Used Features */}
          <Card className="glassmorphic border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Funcionalidades Mais Utilizadas
              </CardTitle>
              <CardDescription className="text-slate-400">
                Ranking de uso das principais funcionalidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {featuresData.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-slate-300">{feature.feature}</span>
                        <span className="text-sm text-slate-400">{feature.usage}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${feature.usage}%`,
                            backgroundColor: feature.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
