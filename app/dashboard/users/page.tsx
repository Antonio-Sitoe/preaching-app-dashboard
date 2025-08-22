"use client"

import { useState, useMemo } from "react"
import { Search, Filter, User, Mail, Shield, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for users
const mockUsers = [
  { id: 1, name: "João Silva", email: "joao.silva@email.com", type: "Administrador" },
  { id: 2, name: "Maria Santos", email: "maria.santos@email.com", type: "Estudante" },
  { id: 3, name: "Pedro Costa", email: "pedro.costa@email.com", type: "Visitante" },
  { id: 4, name: "Ana Oliveira", email: "ana.oliveira@email.com", type: "Estudante" },
  { id: 5, name: "Carlos Ferreira", email: "carlos.ferreira@email.com", type: "Administrador" },
  { id: 6, name: "Lucia Pereira", email: "lucia.pereira@email.com", type: "Estudante" },
  { id: 7, name: "Roberto Lima", email: "roberto.lima@email.com", type: "Visitante" },
  { id: 8, name: "Fernanda Rocha", email: "fernanda.rocha@email.com", type: "Estudante" },
  { id: 9, name: "Miguel Torres", email: "miguel.torres@email.com", type: "Administrador" },
  { id: 10, name: "Sofia Alves", email: "sofia.alves@email.com", type: "Visitante" },
  { id: 11, name: "Bruno Martins", email: "bruno.martins@email.com", type: "Estudante" },
  { id: 12, name: "Carla Mendes", email: "carla.mendes@email.com", type: "Estudante" },
]

const ITEMS_PER_PAGE = 8

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredUsers = useMemo(() => {
    return mockUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesFilter = filterType === "all" || user.type === filterType

      return matchesSearch && matchesFilter
    })
  }, [searchTerm, filterType])

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "Administrador":
        return "default"
      case "Estudante":
        return "secondary"
      case "Visitante":
        return "outline"
      default:
        return "outline"
    }
  }

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Administrador":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "Estudante":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Visitante":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      default:
        return ""
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Estatísticas por Tipo de Usuário</h1>
        <p className="text-muted-foreground">Gerencie e visualize informações dos usuários do sistema</p>
      </div>

      {/* Stats Card */}
      <div className="glassmorphic bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Lista de Usuários</h2>
              <p className="text-sm text-muted-foreground">Total: {filteredUsers.length} usuários</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background/50 border-border/50"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-48 bg-background/50 border-border/50">
                <SelectValue placeholder="Filtrar por tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="Administrador">Administrador</SelectItem>
                <SelectItem value="Estudante">Estudante</SelectItem>
                <SelectItem value="Visitante">Visitante</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-hidden rounded-lg border border-border/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Nome</span>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>Email</span>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Tipo de Perfil</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-background/30 divide-y divide-border/50">
                {paginatedUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-foreground">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={getBadgeVariant(user.type)} className={getBadgeColor(user.type)}>
                        {user.type}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              Mostrando {startIndex + 1} a {Math.min(startIndex + ITEMS_PER_PAGE, filteredUsers.length)} de{" "}
              {filteredUsers.length} usuários
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="bg-background/50 border-border/50"
              >
                <ChevronLeft className="h-4 w-4" />
                Anterior
              </Button>
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "" : "bg-background/50 border-border/50"}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="bg-background/50 border-border/50"
              >
                Próximo
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
