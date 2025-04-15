import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Brain, Cpu, MessageSquare, Sparkles, Code, Eye } from "lucide-react"

export default function AIBotsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter">بوتات الذكاء الاصطناعي</h1>
          <p className="text-muted-foreground">استكشف مجموعة متنوعة من بوتات الذكاء الاصطناعي المتكاملة مع النظام</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">جميع البوتات</TabsTrigger>
            <TabsTrigger value="gemini">Gemini</TabsTrigger>
            <TabsTrigger value="xai">xAI</TabsTrigger>
            <TabsTrigger value="deepseek">DeepSeek</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BotCard
                name="Gemini Pro"
                description="نموذج متقدم من Google للمهام المتنوعة"
                icon={<Sparkles className="h-8 w-8 text-blue-500" />}
                capabilities={["توليد النصوص", "الإجابة على الأسئلة", "تحليل البيانات"]}
                actionText="تشغيل البوت"
                actionHref="/ai-bots/gemini-pro"
              />
              <BotCard
                name="Grok-1"
                description="نموذج xAI المتخصص في المحادثات الطبيعية"
                icon={<Brain className="h-8 w-8 text-purple-500" />}
                capabilities={["محادثات ذكية", "حل المشكلات المعقدة", "فهم السياق"]}
                actionText="تشغيل البوت"
                actionHref="/ai-bots/grok"
              />
              <BotCard
                name="DeepSeek Coder"
                description="نموذج متخصص في توليد وتحليل الأكواد البرمجية"
                icon={<Cpu className="h-8 w-8 text-green-500" />}
                capabilities={["توليد الأكواد", "تصحيح الأخطاء البرمجية", "شرح الخوارزميات"]}
                actionText="تشغيل البوت"
                actionHref="/ai-bots/deepseek-coder"
              />
              <BotCard
                name="CyberAI Assistant"
                description="مساعد ذكي متخصص في الأمن السيبراني"
                icon={<Bot className="h-8 w-8 text-red-500" />}
                capabilities={["تحليل الثغرات الأمنية", "اقتراح إجراءات الحماية", "تقييم المخاطر"]}
                actionText="تشغيل البوت"
                actionHref="/ai-bots/cyber-assistant"
              />
              <BotCard
                name="Code Generator"
                description="مولد أكواد متقدم لمختلف لغات البرمجة"
                icon={<Code className="h-8 w-8 text-yellow-500" />}
                capabilities={["إنشاء مشاريع كاملة", "توليد وظائف محددة", "تحويل بين اللغات"]}
                actionText="تشغيل البوت"
                actionHref="/ai-bots/code-generator"
              />
              <BotCard
                name="Chat Bot"
                description="بوت محادثة عام للمساعدة في مختلف المهام"
                icon={<MessageSquare className="h-8 w-8 text-blue-400" />}
                capabilities={["الإجابة على الاستفسارات", "تقديم المعلومات", "المساعدة في المهام"]}
                actionText="تشغيل البوت"
                actionHref="/ai-bots/chat-bot"
              />
            </div>
          </TabsContent>

          <TabsContent value="gemini" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BotCard
                name="Gemini Pro"
                description="نموذج متقدم من Google للمهام المتنوعة"
                icon={<Sparkles className="h-8 w-8 text-blue-500" />}
                capabilities={["توليد النصوص", "الإجابة على الأسئلة", "تحليل البيانات"]}
                actionText="تشغيل البوت"
                actionHref="/ai-bots/gemini-pro"
              />
              <BotCard
                name="Gemini Vision"
                description="نموذج متخصص في تحليل الصور والمحتوى المرئي"
                icon={<Eye className="h-8 w-8 text-blue-600" />}
                capabilities={["تحليل الصور", "التعرف على الأشياء", "وصف المحتوى المرئي"]}
                actionText="تشغيل البوت"
                actionHref="/ai-bots/gemini-vision"
              />
            </div>
          </TabsContent>

          <TabsContent value="xai" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BotCard
                name="Grok-1"
                description="نموذج xAI المتخصص في المحادثات الطبيعية"
                icon={<Brain className="h-8 w-8 text-purple-500" />}
                capabilities={["محادثات ذكية", "حل المشكلات المعقدة", "فهم السياق"]}
                actionText="تشغيل البوت"
                actionHref="/ai-bots/grok"
              />
            </div>
          </TabsContent>

          <TabsContent value="deepseek" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BotCard
                name="DeepSeek Coder"
                description="نموذج متخصص في توليد وتحليل الأكواد البرمجية"
                icon={<Cpu className="h-8 w-8 text-green-500" />}
                capabilities={["توليد الأكواد", "تصحيح الأخطاء البرمجية", "شرح الخوارزميات"]}
                actionText="تشغيل البوت"
                actionHref="/ai-bots/deepseek-coder"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface BotCardProps {
  name: string
  description: string
  icon: React.ReactNode
  capabilities: string[]
  actionText: string
  actionHref: string
}

function BotCard({ name, description, icon, capabilities, actionText, actionHref }: BotCardProps) {
  return (
    <Card className="cyber-card cyber-glow overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{name}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="text-sm font-medium mb-2">القدرات:</h4>
        <ul className="space-y-1">
          {capabilities.map((capability, index) => (
            <li key={index} className="text-sm flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              {capability}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={actionHref}>{actionText}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
