'use client'

/* eslint-disable @next/next/no-img-element */
import { timeToCarouselAnimation } from '@inatel/constants/settings'
import { toMillis } from '@inatel/utils/to-millis'
import {
  CalendarClockIcon,
  ChevronLeft,
  ChevronRight,
  MapPinned,
} from 'lucide-react'
import {
  type CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { Button } from './ui/button'

const events = [
  {
    id: 1,
    title: 'Semana do Software 2025',
    date: '12/05',
    time: '10:00',
    location: 'Salão de Eventos',
    type: 'tech',
    description:
      'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400',
  },
  {
    id: 2,
    title: 'Workshop de IoT',
    date: '12/01',
    time: '08:00',
    location: 'Laboratório CS&I',
    type: 'tech',
    description:
      'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400',
  },
  {
    id: 3,
    title: 'Festa dos Alunos 2025',
    date: '18/05',
    time: '19:00',
    location: 'Área Esportiva do Inatel',
    type: 'cultural',
    description:
      'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400',
  },
  {
    id: 4,
    title: 'Feira de Oportunidades',
    date: '04/05',
    time: '10:00',
    location: 'Salão de Eventos',
    type: 'academic',
    description:
      'Venha conhecer empresas e projetos com destaque na área da engenharia.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400',
  },
]

export function Carousel() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [, setIndexOfImageOnCarousel] = useState<number>(0)
  const [carouselStyle, setCarouselStyle] = useState<CSSProperties>({
    transform: 'translateX(0)',
  })

  const startCarousel = useCallback(function startCarousel() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(
        handleNextImage,
        toMillis(timeToCarouselAnimation),
      )
    }
  }, [])

  function stopCarousel() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  function handleNextImage() {
    setIndexOfImageOnCarousel((prevIndex) => {
      const newIndex = (prevIndex + 1) % events.length
      setCarouselStyle({
        transform: `translateX(-${newIndex * 100}%)`,
      })
      return newIndex
    })
  }

  function handlePrevImage() {
    setIndexOfImageOnCarousel((prevIndex) => {
      const newIndex = (prevIndex - 1 + events.length) % events.length
      setCarouselStyle({
        transform: `translateX(-${newIndex * 100}%)`,
      })
      return newIndex
    })
  }

  useEffect(() => {
    startCarousel()
    return () => stopCarousel()
  }, [startCarousel])

  return (
    <div
      className="mt-2 relative overflow-hidden"
      onMouseEnter={stopCarousel}
      onMouseLeave={startCarousel}
    >
      <div
        className="bg-white rounded flex transition-all ease-in-out duration-500"
        style={carouselStyle}
      >
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className="min-w-full text-center bg-white rounded mb-4 last:mb-0"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full object-cover rounded-t"
              />
              <div className="p-4">
                <h3 className="text-3xl text-inatel ubuntu-medium">
                  {event.title}
                </h3>
                <p className="text-xs text-inatel">{event.description}</p>

                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <CalendarClockIcon className="size-4 text-inatel" />
                    <p className="text-xs text-inatel">
                      {event.date} às {event.time}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPinned className="size-4 text-inatel" />
                    <p className="text-xs text-inatel">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Button
        variant="secondary"
        size="icon"
        onClick={handlePrevImage}
        className="bg-white absolute top-1/2 -translate-y-1/2 left-4"
      >
        <ChevronLeft className="size-4 text-inatel" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        onClick={handleNextImage}
        className="bg-white absolute top-1/2 -translate-y-1/2 right-4"
      >
        <ChevronRight className="size-4 text-inatel" />
      </Button>
    </div>
  )
}
