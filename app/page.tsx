import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Code, Shield, Terminal, Zap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="w-full py-12 md:py-24 lg:py-32 cyber-gradient rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                CyberAI <span className="text-blue-300">OS</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl">
                منصة متكاملة للذكاء الاصطناعي وأدوات الأمن السيبراني
              </p>
            </div>
            <div className="space-x-4 rtl:space-x-reverse">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/ai-bots">استكشاف البوتات</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/tools">أدوات الأمن السيبراني</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">المميزات الرئيسية</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                اكتشف القدرات المتقدمة لمنصة CyberAI OS
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="cyber-card cyber-glow">
              <CardHeader>
                <Bot className="h-8 w-8 mb-2 text-blue-500" />
                <CardTitle>بوتات الذكاء الاصطناعي</CardTitle>
                <CardDescription>تكامل مع نماذج ذكاء اصطناعي متعددة مثل Gemini وxAI وDeepSeek</CardDescription>
              </CardHeader>
              <CardContent>
                <p>استفد من قوة الذكاء الاصطناعي لإنجاز مهامك بكفاءة عالية وإبداع لا محدود.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/ai-bots">استكشاف البوتات</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="cyber-card cyber-glow">
              <CardHeader>
                <Code className="h-8 w-8 mb-2 text-green-500" />
                <CardTitle>مولّد الأكواد والمشاريع</CardTitle>
                <CardDescription>إنشاء مشاريع برمجية كاملة وتوليد أكواد بمختلف اللغات</CardDescription>
              </CardHeader>
              <CardContent>
                <p>سرّع عملية التطوير باستخدام مولد الأكواد الذكي وقوالب المشاريع الجاهزة.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/code-generator">توليد الأكواد</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="cyber-card cyber-glow">
              <CardHeader>
                <Shield className="h-8 w-8 mb-2 text-red-500" />
                <CardTitle>أدوات الأمن السيبراني</CardTitle>
                <CardDescription>مجموعة متكاملة من أدوات الاختراق الأخلاقي والحماية</CardDescription>
              </CardHeader>
              <CardContent>
                <p>اختبر أنظمتك وعزز أمانها باستخدام أدوات احترافية للأمن السيبراني.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/tools">استكشاف الأدوات</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="cyber-card cyber-glow">
              <CardHeader>
                <Terminal className="h-8 w-8 mb-2 text-purple-500" />
                <CardTitle>تكامل مع Termux و Kali</CardTitle>
                <CardDescription>تشغيل أدوات Kali NetHunter عبر واجهة رسومية سهلة الاستخدام</CardDescription>
              </CardHeader>
              <CardContent>
                <p>استمتع بقوة أدوات لينكس للأمن السيبراني مع سهولة الاستخدام عبر واجهة مستخدم متطورة.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/terminal">فتح الطرفية</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="cyber-card cyber-glow">
              <CardHeader>
                <Zap className="h-8 w-8 mb-2 text-yellow-500" />
                <CardTitle>محرّك تحليل كلمات المرور</CardTitle>
                <CardDescription>أدوات متقدمة لتحليل قوة كلمات المرور وفك تشفير الهاشات</CardDescription>
              </CardHeader>
              <CardContent>
                <p>تحقق من أمان كلمات المرور واكتشف نقاط الضعف في أنظمة المصادقة.</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/password-tools">تحليل كلمات المرور</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="commands" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="commands">أوامر الطرفية</TabsTrigger>
              <TabsTrigger value="integrations">التكاملات</TabsTrigger>
              <TabsTrigger value="deployment">النشر والتوزيع</TabsTrigger>
            </TabsList>
            <TabsContent value="commands" className="p-4 border rounded-md mt-4 bg-black/50">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">أوامر التحكم الأساسية</h3>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <code className="terminal-text">cyber init</code>
                    <span className="text-sm">- إعداد بيئة العمل</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="terminal-text">cyber run ai</code>
                    <span className="text-sm">- تشغيل بوتات الذكاء الاصطناعي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="terminal-text">cyber hack wifi</code>
                    <span className="text-sm">- أدوات اختراق شبكات الواي فاي</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="terminal-text">cyber sign apk</code>
                    <span className="text-sm">- توقيع تطبيقات أندرويد</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="terminal-text">cyber deploy</code>
                    <span className="text-sm">- نشر المشروع على منصات مختلفة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="terminal-text">cyber extract info</code>
                    <span className="text-sm">- استخراج معلومات OSINT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="terminal-text">cyber tools</code>
                    <span className="text-sm">- عرض قائمة الأدوات المتاحة</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="integrations" className="p-4 border rounded-md mt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">التكاملات المدعومة</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-sm text-muted-foreground">إدارة المشاريع والتحكم بالإصدارات</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">Google Gemini</h4>
                    <p className="text-sm text-muted-foreground">نموذج ذكاء اصطناعي متقدم</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">Termux</h4>
                    <p className="text-sm text-muted-foreground">محاكي طرفية لينكس على أندرويد</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">Kali Linux</h4>
                    <p className="text-sm text-muted-foreground">توزيعة لينكس متخصصة بالأمن السيبراني</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="deployment" className="p-4 border rounded-md mt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">خيارات النشر والتوزيع</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">GitHub Pages</h4>
                    <p className="text-sm text-muted-foreground">استضافة مجانية للمواقع الثابتة</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">Vercel</h4>
                    <p className="text-sm text-muted-foreground">منصة استضافة للتطبيقات الحديثة</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">Termux</h4>
                    <p className="text-sm text-muted-foreground">تشغيل محلي على أجهزة أندرويد</p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium">Docker</h4>
                    <p className="text-sm text-muted-foreground">حاويات لتشغيل التطبيق على أي نظام</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
