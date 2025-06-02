import { OctagonAlert } from 'lucide-react'

type NotificationCardProps = {
  title: string
  message: string
}

export function NotificationCard({ title, message }: NotificationCardProps) {
  return (
    <div className="flex w-full bg-white h-24 rounded px-4 items-center gap-4">
      <OctagonAlert className="size-12 text-zinc-300" />
      <div className="">
        <p className="text-2xl text-inatel !font-bold">{title}</p>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  )
}
