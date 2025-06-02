import { Brain, Home, LogOut } from 'lucide-react'
import Link from 'next/link'

import { LogoInatel } from './logo-inatel'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function Header() {
  return (
    <header className="w-full bg-inatel h-20 flex items-center px-4 justify-between">
      <div className="flex items-center gap-4">
        <LogoInatel />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="size-12">
            <AvatarImage src="https://github.com/pedroaba.png" />
            <AvatarFallback>PE</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={6} className="w-[400px]">
          <div className="p-4 flex items-start justify-start gap-4">
            <Avatar className="size-16">
              <AvatarImage className="" src="https://github.com/pedroaba.png" />
              <AvatarFallback>PE</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg truncate max-w-[240px]">
                Pedro Augusto Barbosa Aparecido
              </p>
              <p className="text-muted-foreground text-sm">
                pedro.a@ges.inatel.br
              </p>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/">
              <Home />
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/chat">
              <Brain />
              Inatel AI
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive hover:!text-destructive">
            <LogOut className="text-destructive hover:text-destructive" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
