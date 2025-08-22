import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background dark flex items-center justify-center p-4 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rotate-45 float-animation"></div>
      <div
        className="absolute bottom-20 right-20 w-24 h-24 border border-primary/30 rotate-12 float-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-10 w-16 h-16 border border-primary/25 rotate-45 float-animation"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>

      <div className="w-full max-w-md relative z-10">
        <LoginForm />
      </div>
    </div>
  )
}
