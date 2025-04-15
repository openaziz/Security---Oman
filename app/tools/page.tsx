import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Wifi, Lock, FileSignature, Search, Terminal, Database, Key, Fingerprint } from "lucide-react"

export default function ToolsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter">أدوات الاختراق والحماية</h1>
          <p className="text-muted-foreground">مجموعة متكاملة من أدوات الأمن السيبراني للاختبار والحماية</p>
        </div>

        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Input type="search" placeholder="البحث عن أداة..." className="max-w-sm" />
          <Button type="submit">بحث</Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">جميع الأدوات</TabsTrigger>
            <TabsTrigger value="network">أدوات الشبكات</TabsTrigger>
            <TabsTrigger value="password">أدوات كلمات المرور</TabsTrigger>
            <TabsTrigger value="forensic">أدوات التحليل الجنائي</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard
                name="WiFi Analyzer"
                description="تحليل شبكات الواي فاي وكشف نقاط الضعف"
                icon={<Wifi className="h-8 w-8 text-blue-500" />}
                features={["مسح الشبكات المحيطة", "تحليل قوة الإشارة", "كشف ثغرات WPS"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/wifi-analyzer"
                category="network"
              />
              <ToolCard
                name="Password Cracker"
                description="أداة لاختبار قوة كلمات المرور وفك تشفير الهاشات"
                icon={<Key className="h-8 w-8 text-red-500" />}
                features={["فك تشفير MD5/SHA", "هجمات القاموس", "توليد قوائم كلمات المرور"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/password-cracker"
                category="password"
              />
              <ToolCard
                name="Network Scanner"
                description="مسح الشبكات واكتشاف الأجهزة والخدمات"
                icon={<Search className="h-8 w-8 text-green-500" />}
                features={["مسح منافذ TCP/UDP", "اكتشاف الأجهزة النشطة", "تحديد نظام التشغيل"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/network-scanner"
                category="network"
              />
              <ToolCard
                name="APK Signer"
                description="توقيع تطبيقات أندرويد وتحليل الحزم"
                icon={<FileSignature className="h-8 w-8 text-purple-500" />}
                features={["توقيع APK", "إعادة حزم التطبيقات", "تحليل التصاريح"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/apk-signer"
                category="forensic"
              />
              <ToolCard
                name="SQL Injector"
                description="أداة لاختبار ثغرات حقن SQL في المواقع"
                icon={<Database className="h-8 w-8 text-yellow-500" />}
                features={["كشف ثغرات SQL", "استخراج البيانات", "تجاوز المصادقة"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/sql-injector"
                category="network"
              />
              <ToolCard
                name="Digital Forensics"
                description="أدوات التحليل الجنائي الرقمي واستعادة البيانات"
                icon={<Fingerprint className="h-8 w-8 text-blue-400" />}
                features={["استعادة الملفات المحذوفة", "تحليل الذاكرة", "استخراج البيانات"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/digital-forensics"
                category="forensic"
              />
              <ToolCard
                name="Encryption Tool"
                description="أداة لتشفير وفك تشفير البيانات بخوارزميات متعددة"
                icon={<Lock className="h-8 w-8 text-indigo-500" />}
                features={["تشفير AES/RSA", "تشفير الملفات", "إنشاء المفاتيح"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/encryption-tool"
                category="password"
              />
              <ToolCard
                name="Kali Terminal"
                description="واجهة طرفية متكاملة مع أدوات Kali Linux"
                icon={<Terminal className="h-8 w-8 text-white" />}
                features={["تشغيل أوامر Kali", "تثبيت الأدوات", "تنفيذ السكربتات"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/kali-terminal"
                category="network"
              />
              <ToolCard
                name="Vulnerability Scanner"
                description="ماسح شامل للثغرات الأمنية في الأنظمة والشبكات"
                icon={<Shield className="h-8 w-8 text-green-400" />}
                features={["فحص الثغرات", "تقارير مفصلة", "اقتراحات الإصلاح"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/vulnerability-scanner"
                category="network"
              />
            </div>
          </TabsContent>

          <TabsContent value="network" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard
                name="WiFi Analyzer"
                description="تحليل شبكات الواي فاي وكشف نقاط الضعف"
                icon={<Wifi className="h-8 w-8 text-blue-500" />}
                features={["مسح الشبكات المحيطة", "تحليل قوة الإشارة", "كشف ثغرات WPS"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/wifi-analyzer"
                category="network"
              />
              <ToolCard
                name="Network Scanner"
                description="مسح الشبكات واكتشاف الأجهزة والخدمات"
                icon={<Search className="h-8 w-8 text-green-500" />}
                features={["مسح منافذ TCP/UDP", "اكتشاف الأجهزة النشطة", "تحديد نظام التشغيل"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/network-scanner"
                category="network"
              />
              <ToolCard
                name="SQL Injector"
                description="أداة لاختبار ثغرات حقن SQL في المواقع"
                icon={<Database className="h-8 w-8 text-yellow-500" />}
                features={["كشف ثغرات SQL", "استخراج البيانات", "تجاوز المصادقة"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/sql-injector"
                category="network"
              />
            </div>
          </TabsContent>

          <TabsContent value="password" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard
                name="Password Cracker"
                description="أداة لاختبار قوة كلمات المرور وفك تشفير الهاشات"
                icon={<Key className="h-8 w-8 text-red-500" />}
                features={["فك تشفير MD5/SHA", "هجمات القاموس", "توليد قوائم كلمات المرور"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/password-cracker"
                category="password"
              />
              <ToolCard
                name="Encryption Tool"
                description="أداة لتشفير وفك تشفير البيانات بخوارزميات متعددة"
                icon={<Lock className="h-8 w-8 text-indigo-500" />}
                features={["تشفير AES/RSA", "تشفير الملفات", "إنشاء المفاتيح"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/encryption-tool"
                category="password"
              />
            </div>
          </TabsContent>

          <TabsContent value="forensic" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard
                name="APK Signer"
                description="توقيع تطبيقات أندرويد وتحليل الحزم"
                icon={<FileSignature className="h-8 w-8 text-purple-500" />}
                features={["توقيع APK", "إعادة حزم التطبيقات", "تحليل التصاريح"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/apk-signer"
                category="forensic"
              />
              <ToolCard
                name="Digital Forensics"
                description="أدوات التحليل الجنائي الرقمي واستعادة البيانات"
                icon={<Fingerprint className="h-8 w-8 text-blue-400" />}
                features={["استعادة الملفات المحذوفة", "تحليل الذاكرة", "استخراج البيانات"]}
                actionText="تشغيل الأداة"
                actionHref="/tools/digital-forensics"
                category="forensic"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface ToolCardProps {
  name: string
  description: string
  icon: React.ReactNode
  features: string[]
  actionText: string
  actionHref: string
  category: string
}

function ToolCard({ name, description, icon, features, actionText, actionHref }: ToolCardProps) {
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
        <h4 className="text-sm font-medium mb-2">المميزات:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
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
