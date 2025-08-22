"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Lock, Mail, Shield, Activity } from "lucide-react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate login process
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Basic validation
      if (!email || !password) {
        throw new Error("Por favor, preencha todos os campos")
      }

      if (!email.includes("@")) {
        throw new Error("Por favor, insira um email válido")
      }

      // Simulate successful login
      console.log("Login successful:", { email })
      router.push("/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao fazer login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full glassmorphic bg-card/80 border-border/50 shadow-2xl">
      <CardHeader className="space-y-6 text-center relative">
        <div className="flex justify-center mb-6 relative">
          <div className="p-4 bg-primary/20 rounded-full glassmorphic glow-on-hover relative">
            <Shield className="h-10 w-10 text-primary" />
            <div className="absolute -top-1 -right-1">
              <Activity className="h-4 w-4 text-primary animate-pulse" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            SISTEMA ADMIN
          </CardTitle>
          <CardDescription className="text-muted-foreground text-base">
            Acesso Seguro • Tecnologia Avançada
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <Alert variant="destructive" className="glassmorphic bg-destructive/10 border-destructive/30">
              <AlertDescription className="text-destructive-foreground">{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              EMAIL DE ACESSO
            </Label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                id="email"
                type="email"
                placeholder="admin@sistema.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-12 glassmorphic bg-input/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground/70"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              SENHA SEGURA
            </Label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 pr-12 h-12 glassmorphic bg-input/50 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground/70"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-primary/10 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glassmorphic glow-on-hover transition-all duration-300 relative overflow-hidden group"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                <span>AUTENTICANDO...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>ACESSAR SISTEMA</span>
              </div>
            )}
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Button>

          <div className="text-center pt-4">
            <Button variant="link" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              <Lock className="w-3 h-3 mr-1" />
              Recuperar Acesso
            </Button>
          </div>
        </form>

        <div className="pt-4 border-t border-border/30"></div>
      </CardContent>
    </Card>
  )
}
