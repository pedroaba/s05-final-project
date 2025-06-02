import { cn } from '@inatel/lib/utils'

type TestCardProps = {
  exam: string
  subject: string
  location: string
  time: string
  attendance: string
  grade: number
  exam_alert: boolean
}

export function TestCard({
  attendance,
  exam,
  grade,
  location,
  subject,
  time,
  exam_alert,
}: TestCardProps) {
  return (
    <div className="bg-white rounded p-4 flex flex-col gap-0.5 mb-4 last:mb-0">
      <div
        className="text-lg text-inatel bg-accent p-2 rounded mb-5 text-center ubuntu-light"
        style={
          exam_alert
            ? {}
            : {
                display: 'none',
              }
        }
      >
        PROVA: <b>{exam}</b>
      </div>
      <div className="text-inatel text-lg ubuntu-medium">{subject}</div>
      <p className="text-inatel text-xs ubuntu-regular">
        Local e Horário:{' '}
        <b>
          {location} - {time}
        </b>
      </p>
      <div className="flex gap-2">
        <div className="text-sm text-inatel px-2 py-1 rounded bg-accent ubuntu-bold">
          FALTAS: <b>{attendance}</b>
        </div>
        <div
          className={cn(
            'text-sm text-white px-2 py-1 rounded bg-accent ubuntu-bold',
            grade >= 8 && 'bg-green-500',
            grade >= 6 && grade < 8 && 'bg-yellow-500',
            grade < 6 && 'bg-red-500',
          )}
        >
          CR: <b>{grade}</b>
        </div>
      </div>
    </div>
  )
}
