import { LoginForm } from '@/app/_components/LoginForm'

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
        <LoginForm />
      </div>
    </div>
  )
}
