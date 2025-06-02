import { AlarmClock, Calendar } from 'lucide-react'

type SubjectCardProps = {
  subject: string
  room: string
  time: string
}

export function SubjectCard({ room, subject, time }: SubjectCardProps) {
  return (
    <div className="flex w-full bg-white relative h-24 rounded p-4 items-center gap-4 justify-between">
      <div className="">
        <p className="text-2xl text-inatel !font-bold mb-2 capitalize">
          {subject}
        </p>
        <p className="text-xs text-muted-foreground">Sala: {room}</p>
        <p className="text-xs text-muted-foreground">Horário: {time}</p>
      </div>
      <div className="flex items-start justify-end gap-4 absolute top-4 right-4">
        <Calendar className="size-4 text-muted-foreground" />
        <AlarmClock className="size-4 text-muted-foreground" />
      </div>
    </div>
  )
}
