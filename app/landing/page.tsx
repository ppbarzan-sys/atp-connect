import { redirect } from 'next/navigation'

// /landing is no longer the canonical URL — permanently moved to /.
export default function LandingRedirect() {
  redirect('/')
}
