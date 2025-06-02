import { Carousel } from '@inatel/components/carousel'
import { NotificationCard } from '@inatel/components/notification-card'
import { SubjectCard } from '@inatel/components/subject-card'
import { TestCard } from '@inatel/components/test-card'

const notifications = [
  {
    id: crypto.randomUUID(),
    title: 'Alerta de entrega',
    message: 'Você possui um armário reservado com entrega para hoje!',
  },
  {
    id: crypto.randomUUID(),
    title: 'Alerta de entrega',
    message: 'Você possui um armário reservado com entrega para hoje!',
  },
  {
    id: crypto.randomUUID(),
    title: 'Alerta do financeiro',
    message: 'Você possui uma pendência no financeiro...',
  },
]

const subjects = [
  {
    id: crypto.randomUUID(),
    subject: 'Computação Gráfica',
    room: 'Sala 1',
    time: '08:00',
  },
  {
    id: crypto.randomUUID(),
    subject: 'Arquitetura de Computadores',
    room: 'Sala 2',
    time: '09:00',
  },
  {
    id: crypto.randomUUID(),
    subject: 'IHM - Interface Homem Máquina',
    room: 'Sala 3',
    time: '10:00',
  },
]

const classes = [
  {
    id: 1,
    subject: 'S05 - Interface Homem-máquina',
    date: 'ter',
    time: '10:00',
    location: 'P1-S17',
    exam_alert: false,
    exam: '12/05',
    attendance: '10/25',
    grade: 9,
  },
  {
    id: 2,
    subject: 'E01 - Circuitos Elétricos em Corrente Contínua',
    date: 'ter',
    time: '10:00',
    location: 'P1-S17',
    exam_alert: true,
    exam: '12/05',
    attendance: '10/25',
    grade: 5,
  },
  {
    id: 3,
    subject: 'M02 - Álgebra e Geometria Analítica',
    date: 'ter',
    time: '10:00',
    location: 'P1-S17',
    exam_alert: true,
    exam: '12/05',
    attendance: '10/25',
    grade: 7,
  },
]

export default async function Home() {
  return (
    <main className="">
      <h1 className="text-inatel text-4xl">Olá, Pedro Augusto!</h1>

      <div className="mt-6">
        <p className="text-inatel ubuntu-regular-italic text-lg">
          Notificações
        </p>

        <div className="space-y-2 mt-2">
          {notifications.map((notification) => (
            <NotificationCard key={notification.id} {...notification} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-inatel ubuntu-regular-italic text-lg">Disciplinas</p>

        <div className="space-y-2 mt-2">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} {...subject} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-inatel ubuntu-regular-italic text-lg">
          Horários de provas
        </p>

        <div className="space-y-2 mt-2">
          {classes.map((classe) => (
            <TestCard key={classe.id} {...classe} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-inatel ubuntu-regular-italic text-lg">Eventos</p>

        <Carousel />
      </div>
    </main>
  )
}
