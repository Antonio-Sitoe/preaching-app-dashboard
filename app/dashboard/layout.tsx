"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { LogOut, Settings, User, BarChart3, Users, TrendingUp } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background dark">
      {/* Top Navigation Bar */}
      <nav className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-primary/20 rounded-lg glassmorphic">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Sistema de Gerenciamento</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Administrador</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => (window.location.href = "/")}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="border-b border-border/30 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex space-x-8">
            <Link
              href="/dashboard"
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                pathname === "/dashboard"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>Visão Geral</span>
            </Link>
            <Link
              href="/dashboard/users"
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                pathname === "/dashboard/users"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Usuários</span>
            </Link>
            <Link
              href="/dashboard/analytics"
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                pathname === "/dashboard/analytics"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              <span>Analytics</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
}
