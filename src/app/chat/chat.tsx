'use client'

import { useChat } from '@ai-sdk/react'
import { LogoInatel } from '@inatel/components/logo-inatel'
import { MarkdownRender } from '@inatel/components/markdown-render'
import { Avatar, AvatarFallback } from '@inatel/components/ui/avatar'
import { Button } from '@inatel/components/ui/button'
import { ScrollArea } from '@inatel/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@inatel/components/ui/select'
import { Textarea } from '@inatel/components/ui/textarea'
import { cn } from '@inatel/lib/utils'
import { Loader, Send } from 'lucide-react'
import { type FormEvent, useEffect, useRef, useState } from 'react'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat()
  const [selectedSubject, setSelectedSubject] = useState('')
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleSubmitQuestion(e: FormEvent) {
    handleSubmit(e, {
      data: [
        {
          subject: selectedSubject,
        },
      ],
    })
  }

  return (
    <>
      {messages.length === 0 && (
        <div className="flex items-center justify-center text-center flex-col gap-6">
          <LogoInatel className="fill-muted-foreground" />
          <p className="text-zinc-400 text-sm max-w-[600px] text-center">
            Olá! Sou sua assistente de estudos. Posso ajudar você com dúvidas
            sobre suas matérias, revisar conceitos importantes e auxiliar na
            compreensão do conteúdo acadêmico. Me conte sobre qual disciplina ou
            assunto você gostaria de discutir!
          </p>
        </div>
      )}

      {messages.length > 0 && (
        <ScrollArea className="max-h-[45rem]">
          <div className="space-y-2 pr-4">
            {messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className={cn(
                    'w-full flex items-start gap-2',
                    message.role === 'user' && 'flex-row-reverse',
                  )}
                >
                  <Avatar className="size-10">
                    <AvatarFallback>
                      {message.role === 'user' ? 'PA' : 'IA'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-accent px-4 py-2 rounded mt-1 text-xs">
                    <MarkdownRender content={message.content} />

                    <div className="mt-3">
                      <span className="text-muted-foreground">
                        {message.createdAt?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}

            <div ref={bottomRef} />
          </div>
        </ScrollArea>
      )}

      <div className="flex items-center gap-2 mt-4 pb-4 w-full">
        <form
          onSubmit={handleSubmitQuestion}
          className="flex flex-col items-start h-fit gap-2 w-full border border-input rounded p-2"
        >
          <Textarea
            disabled={status === 'streaming'}
            value={input}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                handleSubmitQuestion(e)
              }
            }}
            onChange={handleInputChange}
            placeholder="Digite aqui sua dúvida..."
            className="resize-none max-h-72 w-full placeholder:pt-0.5 p-0 placeholder:text-xs text-xs ubuntu-regular text-foreground border-0 shadow-none focus-visible:ring-0 focus-visible:outline-0 focus-visible:ring-transparent"
          />
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center gap-2">
              {/* <Button type="button" size="icon">
                <Paperclip />
              </Button> */}

              <Select
                onValueChange={setSelectedSubject}
                disabled={status === 'streaming'}
              >
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Selecione uma matéria..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Computação Gráfica">
                    Computação Gráfica
                  </SelectItem>
                  <SelectItem value="Física">Física</SelectItem>
                  <SelectItem value="Algorítimo">Algorítimo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button disabled={status === 'streaming'} type="submit" size="icon">
              {status === 'streaming' ? (
                <Loader className="animate-spin" />
              ) : (
                <Send />
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
