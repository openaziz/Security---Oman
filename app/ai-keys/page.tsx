"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Copy, Key, RefreshCw, Shield, Terminal, Check } from "lucide-react"
import { BashScript } from "@/components/bash-script"

export default function AIKeysPage() {
  const [generatedKey, setGeneratedKey] = useState("")
  const [keyType, setKeyType] = useState("openai")
  const [keyLength, setKeyLength] = useState("64")
  const [includePrefix, setIncludePrefix] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const generateKey = () => {
    setIsGenerating(true)

    // Simulate API key generation
    setTimeout(() => {
      const prefixes: Record<string, string> = {
        openai: "sk-",
        gemini: "AIza",
        anthropic: "sk-ant-",
        mistral: "msk-",
        groq: "gsk-",
        cohere: "coh-",
        stability: "sk-stb-",
        replicate: "r8_",
      }

      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      const length = Number.parseInt(keyLength)

      let result = includePrefix ? prefixes[keyType] || "" : ""
      const randomLength = length - result.length

      for (let i = 0; i < randomLength; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
      }

      setGeneratedKey(result)
      setIsGenerating(false)
    }, 1500)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedKey)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter">توليد مفاتيح الذكاء الاصطناعي</h1>
          <p className="text-muted-foreground">إنشاء وإدارة مفاتيح API للذكاء الاصطناعي وإعداد بيئة التطوير</p>
        </div>

        <Tabs defaultValue="generate" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="generate">توليد المفاتيح</TabsTrigger>
            <TabsTrigger value="manage">إدارة المفاتيح</TabsTrigger>
            <TabsTrigger value="setup">إعداد البيئة</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="cyber-card cyber-glow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-blue-500" />
                    <CardTitle>توليد مفتاح API</CardTitle>
                  </div>
                  <CardDescription>إنشاء مفاتيح API للذكاء الاصطناعي بتنسيقات مختلفة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="key-type">نوع المفتاح</Label>
                    <Select value={keyType} onValueChange={setKeyType}>
                      <SelectTrigger id="key-type">
                        <SelectValue placeholder="اختر نوع المفتاح" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="openai">OpenAI</SelectItem>
                        <SelectItem value="gemini">Google Gemini</SelectItem>
                        <SelectItem value="anthropic">Anthropic Claude</SelectItem>
                        <SelectItem value="mistral">Mistral AI</SelectItem>
                        <SelectItem value="groq">Groq</SelectItem>
                        <SelectItem value="cohere">Cohere</SelectItem>
                        <SelectItem value="stability">Stability AI</SelectItem>
                        <SelectItem value="replicate">Replicate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="key-length">طول المفتاح</Label>
                    <Select value={keyLength} onValueChange={setKeyLength}>
                      <SelectTrigger id="key-length">
                        <SelectValue placeholder="اختر طول المفتاح" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="32">32 حرف</SelectItem>
                        <SelectItem value="48">48 حرف</SelectItem>
                        <SelectItem value="64">64 حرف</SelectItem>
                        <SelectItem value="96">96 حرف</SelectItem>
                        <SelectItem value="128">128 حرف</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Switch id="include-prefix" checked={includePrefix} onCheckedChange={setIncludePrefix} />
                    <Label htmlFor="include-prefix">تضمين بادئة المفتاح</Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={generateKey} className="w-full" disabled={isGenerating}>
                    {isGenerating ? (
                      <>
                        <RefreshCw className="ml-2 h-4 w-4 animate-spin" />
                        جاري التوليد...
                      </>
                    ) : (
                      <>
                        <Key className="ml-2 h-4 w-4" />
                        توليد المفتاح
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>

              <Card className="cyber-card cyber-glow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <CardTitle>المفتاح المولد</CardTitle>
                  </div>
                  <CardDescription>نسخ واستخدام المفتاح المولد في تطبيقات الذكاء الاصطناعي</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={generatedKey}
                    readOnly
                    placeholder="سيظهر المفتاح المولد هنا..."
                    className="h-32 font-mono"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    ملاحظة: هذه المفاتيح مولدة محليًا لأغراض العرض فقط. للاستخدام الفعلي، يجب الحصول على مفاتيح API من
                    مزودي خدمات الذكاء الاصطناعي.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={copyToClipboard}
                    className="w-full"
                    disabled={!generatedKey}
                    variant={isCopied ? "outline" : "default"}
                  >
                    {isCopied ? (
                      <>
                        <Check className="ml-2 h-4 w-4" />
                        تم النسخ!
                      </>
                    ) : (
                      <>
                        <Copy className="ml-2 h-4 w-4" />
                        نسخ المفتاح
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="manage" className="mt-6">
            <Card className="cyber-card cyber-glow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-purple-500" />
                  <CardTitle>إدارة مفاتيح API</CardTitle>
                </div>
                <CardDescription>تخزين وإدارة مفاتيح API للذكاء الاصطناعي</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="api-name">اسم المفتاح</Label>
                    <Input id="api-name" placeholder="مثال: OpenAI GPT-4" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="api-key">مفتاح API</Label>
                    <Input id="api-key" type="password" placeholder="أدخل مفتاح API الخاص بك" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="api-service">الخدمة</Label>
                    <Select defaultValue="openai">
                      <SelectTrigger id="api-service">
                        <SelectValue placeholder="اختر الخدمة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="openai">OpenAI</SelectItem>
                        <SelectItem value="gemini">Google Gemini</SelectItem>
                        <SelectItem value="anthropic">Anthropic Claude</SelectItem>
                        <SelectItem value="mistral">Mistral AI</SelectItem>
                        <SelectItem value="groq">Groq</SelectItem>
                        <SelectItem value="cohere">Cohere</SelectItem>
                        <SelectItem value="stability">Stability AI</SelectItem>
                        <SelectItem value="replicate">Replicate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">إلغاء</Button>
                <Button>حفظ المفتاح</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="setup" className="mt-6">
            <Card className="cyber-card cyber-glow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-red-500" />
                  <CardTitle>إعداد بيئة تطوير الذكاء الاصطناعي</CardTitle>
                </div>
                <CardDescription>سكربت شامل لتثبيت وإعداد بيئة تطوير متكاملة للذكاء الاصطناعي</CardDescription>
              </CardHeader>
              <CardContent>
                <BashScript />
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  قم بنسخ السكربت وتشغيله في طرفية Linux/macOS أو في Termux على أندرويد. يقوم السكربت بتثبيت جميع
                  الأدوات اللازمة وإعداد بيئة تطوير متكاملة للذكاء الاصطناعي.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
