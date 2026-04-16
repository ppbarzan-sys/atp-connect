/* Minimal app-wide event emitter for cross-component state sync */

type Callback = (data?: unknown) => void

class AppEventEmitter {
  private target = typeof window !== 'undefined' ? new EventTarget() : null
  private callbacks = new Map<string, Map<Callback, EventListener>>()

  on(event: string, callback: Callback) {
    if (!this.target) return
    const listener = ((e: CustomEvent) => callback(e.detail)) as EventListener
    if (!this.callbacks.has(event)) this.callbacks.set(event, new Map())
    this.callbacks.get(event)!.set(callback, listener)
    this.target.addEventListener(event, listener)
  }

  off(event: string, callback: Callback) {
    if (!this.target) return
    const listener = this.callbacks.get(event)?.get(callback)
    if (listener) {
      this.target.removeEventListener(event, listener)
      this.callbacks.get(event)!.delete(callback)
    }
  }

  emit(event: string, data?: unknown) {
    if (!this.target) return
    this.target.dispatchEvent(new CustomEvent(event, { detail: data }))
  }
}

export const appEvents = new AppEventEmitter()
