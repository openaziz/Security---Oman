"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Terminal, Maximize2, Minimize2, Copy, Download } from "lucide-react"

export default function TerminalPage() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "CyberAI OS Terminal v1.0.0",
    "Copyright (c) 2023 Abdulaziz",
    "Type 'help' to see available commands",
    "",
  ])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const newHistory = [...history, `$ ${input}`]

    // Process commands
    switch (input.toLowerCase().trim()) {
      case "help":
        newHistory.push(
          "Available commands:",
          "  help - Show this help message",
          "  clear - Clear the terminal",
          "  cyber init - Initialize CyberAI environment",
          "  cyber run ai - Run AI bots",
          "  cyber hack wifi - Run WiFi hacking tools",
          "  cyber sign apk - Sign Android APK",
          "  cyber deploy - Deploy project",
          "  cyber extract info - Extract information (OSINT)",
          "  cyber tools - Show available tools",
          "",
        )
        break
      case "clear":
        setHistory([])
        setInput("")
        return
      case "cyber init":
        newHistory.push(
          "Initializing CyberAI environment...",
          "Checking dependencies...",
          "Setting up configuration...",
          "Environment initialized successfully!",
          "",
        )
        break
      case "cyber run ai":
        newHistory.push(
          "Available AI models:",
          "  1. Gemini Pro",
          "  2. Grok-1",
          "  3. DeepSeek Coder",
          "",
          "Usage: cyber run ai [model-name]",
          "",
        )
        break
      case "cyber hack wifi":
        newHistory.push(
          "⚠️ WARNING: Use these tools ethically and only on networks you own or have permission to test.",
          "",
          "Available WiFi tools:",
          "  1. WiFi Scanner - Scan for available networks",
          "  2. WPS Cracker - Test WPS vulnerabilities",
          "  3. Handshake Capture - Capture handshakes for analysis",
          "",
          "Usage: cyber hack wifi [tool-name]",
          "",
        )
        break
      case "cyber sign apk":
        newHistory.push(
          "Android APK Signing Tool",
          "",
          "Usage: cyber sign apk [apk-file] [keystore]",
          "",
          "No APK file specified. Please provide the path to the APK file.",
          "",
        )
        break
      case "cyber deploy":
        newHistory.push(
          "Deployment Options:",
          "  1. GitHub Pages",
          "  2. Vercel",
          "  3. Local Server",
          "",
          "Usage: cyber deploy [platform] [options]",
          "",
        )
        break
      case "cyber extract info":
        newHistory.push(
          "OSINT Information Extraction Tool",
          "",
          "Usage: cyber extract info [target] [options]",
          "",
          "No target specified. Please provide a target (URL, IP, username, etc.)",
          "",
        )
        break
      case "cyber tools":
        newHistory.push(
          "Available Tools:",
          "  1. Network Scanner - Scan networks for devices and services",
          "  2. Password Cracker - Test password strength and decrypt hashes",
          "  3. SQL Injector - Test for SQL injection vulnerabilities",
          "  4. Digital Forensics - Recover and analyze digital evidence",
          "  5. Encryption Tool - Encrypt and decrypt data",
          "",
          "Use 'cyber tools [tool-name]' for more information",
          "",
        )
        break
      default:
        newHistory.push(`Command not found: ${input}`, "")
    }

    setHistory(newHistory)
    setInput("")
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const copyTerminalContent = () => {
    const content = history.join("\n")
    navigator.clipboard.writeText(content)
  }

  const downloadTerminalContent = () => {
    const content = history.join("\n")
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "terminal-session.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  useEffect(() => {
    // Auto-scroll to bottom when history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }

    // Focus input when component mounts or updates
    inputRef.current?.focus()
  }, [history])

  return (
    <div className={`container mx-auto py-6 ${isFullscreen ? "fixed inset-0 z-50 bg-background p-0" : ""}`}>
      <div className={`flex flex-col ${isFullscreen ? "h-full" : ""}`}>
        <div className="flex flex-col gap-2 mb-4">
          <h1 className="text-3xl font-bold tracking-tighter">محاكي الطرفية</h1>
          <p className="text-muted-foreground">واجهة طرفية متكاملة مع أدوات Kali Linux والأمن السيبراني</p>
        </div>

        <Card className={`cyber-card cyber-glow overflow-hidden ${isFullscreen ? "flex-1 flex flex-col" : ""}`}>
          <CardHeader className="border-b p-4 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              <CardTitle>CyberAI Terminal</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={copyTerminalContent}>
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={downloadTerminalContent}>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            </div>
          </CardHeader>
          <CardContent className={`p-0 ${isFullscreen ? "flex-1 overflow-hidden" : ""}`}>
            <div
              ref={terminalRef}
              className={`bg-black text-green-500 font-mono text-sm p-4 overflow-auto whitespace-pre-wrap ${isFullscreen ? "h-full" : "h-[400px]"}`}
            >
              {history.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t p-2">
            <form onSubmit={handleCommand} className="flex w-full gap-2">
              <div className="flex-none text-green-500 font-mono">$</div>
              <Input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none text-green-500 font-mono focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Type a command..."
              />
            </form>
          </CardFooter>
        </Card>

        <div className="mt-6">
          <Tabs defaultValue="commands" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="commands">الأوامر الشائعة</TabsTrigger>
              <TabsTrigger value="shortcuts">اختصارات لوحة المفاتيح</TabsTrigger>
              <TabsTrigger value="examples">أمثلة</TabsTrigger>
            </TabsList>
            <TabsContent value="commands" className="p-4 border rounded-md mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">أوامر النظام</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <code className="text-blue-500">help</code> - عرض المساعدة
                    </li>
                    <li>
                      <code className="text-blue-500">clear</code> - مسح الشاشة
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">أوامر CyberAI</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <code className="text-blue-500">cyber init</code> - تهيئة البيئة
                    </li>
                    <li>
                      <code className="text-blue-500">cyber run ai</code> - تشغيل بوتات الذكاء الاصطناعي
                    </li>
                    <li>
                      <code className="text-blue-500">cyber hack wifi</code> - أدوات اختراق الواي فاي
                    </li>
                    <li>
                      <code className="text-blue-500">cyber tools</code> - عرض الأدوات المتاحة
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shortcuts" className="p-4 border rounded-md mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium">اختصارات التنقل</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <code className="text-blue-500">↑/↓</code> - التنقل بين الأوامر السابقة
                    </li>
                    <li>
                      <code className="text-blue-500">Ctrl+L</code> - مسح الشاشة
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">اختصارات التحرير</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <code className="text-blue-500">Ctrl+A</code> - الانتقال إلى بداية السطر
                    </li>
                    <li>
                      <code className="text-blue-500">Ctrl+E</code> - الانتقال إلى نهاية السطر
                    </li>
                    <li>
                      <code className="text-blue-500">Ctrl+U</code> - حذف السطر الحالي
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="examples" className="p-4 border rounded-md mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">مثال: مسح شبكات الواي فاي</h3>
                  <div className="bg-black text-green-500 font-mono text-sm p-2 rounded">
                    $ cyber hack wifi scanner
                    <br />
                    Scanning for WiFi networks...
                    <br />
                    Found 5 networks:
                    <br />
                    1. Network_A (WPA2) - Signal: 90%
                    <br />
                    2. Network_B (WPA) - Signal: 75%
                    <br />
                    3. Network_C (WEP) - Signal: 60%
                    <br />
                    4. Network_D (Open) - Signal: 45%
                    <br />
                    5. Network_E (WPA2) - Signal: 30%
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">مثال: تشغيل بوت ذكاء اصطناعي</h3>
                  <div className="bg-black text-green-500 font-mono text-sm p-2 rounded">
                    $ cyber run ai gemini
                    <br />
                    Initializing Gemini AI model...
                    <br />
                    Model loaded successfully!
                    <br />
                    Gemini&gt; How can I help you today?
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
