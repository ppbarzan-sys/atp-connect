const hits = new Map<string, number[]>()

// Cleanup expired entries every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now()
  for (const [key, timestamps] of hits) {
    const fresh = timestamps.filter((t) => now - t < 5 * 60 * 1000)
    if (fresh.length === 0) {
      hits.delete(key)
    } else {
      hits.set(key, fresh)
    }
  }
}, 5 * 60 * 1000).unref?.()

export function rateLimit(
  ip: string,
  limit: number,
  windowMs: number
): { success: boolean; remaining: number } {
  const now = Date.now()
  const timestamps = hits.get(ip) ?? []

  // Sliding window: keep only timestamps within the window
  const recent = timestamps.filter((t) => now - t < windowMs)

  if (recent.length >= limit) {
    hits.set(ip, recent)
    return { success: false, remaining: 0 }
  }

  recent.push(now)
  hits.set(ip, recent)
  return { success: true, remaining: limit - recent.length }
}
