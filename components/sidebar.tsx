"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Home,
  Bot,
  Wrench,
  FolderGit2,
  ShoppingBag,
  Terminal,
  Shield,
  Code,
  Wifi,
  FileSignature,
  Menu,
  X,
  Key,
} from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  const navItems: NavItem[] = [
    {
      title: "الرئيسية",
      href: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "بوتات الذكاء الاصطناعي",
      href: "/ai-bots",
      icon: <Bot className="h-5 w-5" />,
    },
    {
      title: "أدوات الاختراق والحماية",
      href: "/tools",
      icon: <Wrench className="h-5 w-5" />,
    },
    {
      title: "المشاريع",
      href: "/projects",
      icon: <FolderGit2 className="h-5 w-5" />,
    },
    {
      title: "متجر التطبيقات",
      href: "/store",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      title: "مفاتيح الذكاء الاصطناعي",
      href: "/ai-keys",
      icon: <Key className="h-5 w-5" />,
    },
  ]

  const toolItems: NavItem[] = [
    {
      title: "محاكي الطرفية",
      href: "/terminal",
      icon: <Terminal className="h-5 w-5" />,
    },
    {
      title: "أدوات الأمن السيبراني",
      href: "/security",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "مولد الأكواد",
      href: "/code-generator",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "أدوات اختراق الواي فاي",
      href: "/wifi-tools",
      icon: <Wifi className="h-5 w-5" />,
    },
    {
      title: "توقيع التطبيقات",
      href: "/app-signing",
      icon: <FileSignature className="h-5 w-5" />,
    },
  ]

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-40 flex w-72 flex-col border-l bg-background transition-transform duration-300 md:translate-x-0",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="border-b p-4">
          <h2 className="text-2xl font-bold tracking-tight">
            CyberAI <span className="text-primary">OS</span>
          </h2>
          <p className="text-sm text-muted-foreground">بواسطة عبدالعزيز</p>
        </div>
        <ScrollArea className="flex-1">
          <nav className="flex flex-col gap-2 p-4">
            <div className="py-2">
              <h3 className="mb-2 px-2 text-sm font-semibold">القائمة الرئيسية</h3>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="py-2">
              <h3 className="mb-2 px-2 text-sm font-semibold">الأدوات المتقدمة</h3>
              {toolItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                  )}
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </ScrollArea>
        <div className="border-t p-4">
          <div className="rounded-md bg-secondary p-2">
            <p className="text-xs text-secondary-foreground">الإصدار: 1.0.0-beta</p>
          </div>
        </div>
      </div>
    </>
  )
}
