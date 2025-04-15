import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Tag, Shield } from "lucide-react"

export default function StorePage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter">متجر التطبيقات</h1>
          <p className="text-muted-foreground">استكشف وتنزيل التطبيقات والأدوات المتخصصة في الأمن السيبراني</p>
        </div>

        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Input type="search" placeholder="البحث عن تطبيق..." className="max-w-sm" />
          <Button type="submit">بحث</Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">الكل</TabsTrigger>
            <TabsTrigger value="security">الأمن</TabsTrigger>
            <TabsTrigger value="tools">الأدوات</TabsTrigger>
            <TabsTrigger value="ai">الذكاء الاصطناعي</TabsTrigger>
            <TabsTrigger value="games">الألعاب</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                name="WiFi Master"
                description="أداة متكاملة لإدارة وتحليل شبكات الواي فاي"
                category="security"
                rating={4.8}
                downloads="10K+"
                price="مجاني"
                actionText="تنزيل"
                actionHref="/store/download/wifi-master"
              />
              <AppCard
                name="Password Vault"
                description="خزنة آمنة لحفظ وإدارة كلمات المرور"
                category="security"
                rating={4.7}
                downloads="50K+"
                price="مجاني"
                actionText="تنزيل"
                actionHref="/store/download/password-vault"
              />
              <AppCard
                name="Cyber Terminal"
                description="محاكي طرفية متقدم مع أدوات الأمن السيبراني"
                category="tools"
                rating={4.9}
                downloads="25K+"
                price="مجاني"
                actionText="تنزيل"
                actionHref="/store/download/cyber-terminal"
              />
              <AppCard
                name="AI Assistant"
                description="مساعد ذكي مدعوم بنماذج الذكاء الاصطناعي المتقدمة"
                category="ai"
                rating={4.6}
                downloads="100K+"
                price="مجاني"
                actionText="تنزيل"
                actionHref="/store/download/ai-assistant"
              />
              <AppCard
                name="Hacker Simulator"
                description="محاكاة واقعية لعمليات الاختراق الأخلاقي"
                category="games"
                rating={4.5}
                downloads="30K+"
                price="مجاني"
                actionText="تنزيل"
                actionHref="/store/download/hacker-simulator"
              />
              <AppCard
                name="Network Monitor Pro"
                description="أداة احترافية لمراقبة وتحليل حركة الشبكة"
                category="security"
                rating={4.8}
                downloads="15K+"
                price="مدفوع"
                actionText="شراء"
                actionHref="/store/purchase/network-monitor-pro"
              />
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                name="WiFi Master"
                description="أداة متكاملة لإدارة وتحليل شبكات الواي فاي"
                category="security"
                rating={4.8}
                downloads="10K+"
                price="مجاني"
                actionText="تنزيل"
                actionHref="/store/download/wifi-master"
              />
              <AppCard
                name="Password Vault"
                description="خزنة آمنة لحفظ وإدارة كلمات المرور"
                category="security"
                rating={4.7}
                downloads="50K+"
                price="مجاني"
                actionText="تنزيل"
                actionHref="/store/download/password-vault"
              />
              <AppCard
                name="Network Monitor Pro"
                description="أداة احترافية لمراقبة وتحليل حركة الشبكة"
                category="security"
                rating={4.8}
                downloads="15K+"
                price="مدفوع"
                actionText="شراء"
                actionHref="/store/purchase/network-monitor-pro"
              />
            </div>
          </TabsContent>

          <TabsContent value="tools" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                name="Cyber Terminal"
                description="محاكي طرفية متقدم مع أدوات الأمن السيبراني"
                category="tools"
                rating={4.9}
                downloads="25K+"
                price="مجاني"
                actionText="تنزيل"
                actionHref="/store/download/cyber-terminal"
              />
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                name="AI Assistant"
                description="مساعد ذكي مدعوم بنماذج الذكاء الاصطناعي المتقدمة"
                category="ai"
                rating={4.6}
                downloads="100K+"
                price="مجاني"
                actionText="تنزيل"
                actionHref="/store/download/ai-assistant"
              />
            </div>
          </TabsContent>

          <TabsContent value="games" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AppCard
                name="Hacker Simulator"
                description="محاكاة واقعية لعمليات الاختراق الأخلاقي"
                category="games"
                rating={4.5}
                downloads="30K+"
                price="مجاني"
                actionText="تنزيل"
                actionHref="/store/download/hacker-simulator"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface AppCardProps {
  name: string
  description: string
  category: string
  rating: number
  downloads: string
  price: string
  actionText: string
  actionHref: string
}

function AppCard({ name, description, category, rating, downloads, price, actionText, actionHref }: AppCardProps) {
  return (
    <Card className="cyber-card cyber-glow overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <Badge
            variant={
              category === "security"
                ? "destructive"
                : category === "ai"
                  ? "secondary"
                  : category === "tools"
                    ? "outline"
                    : "default"
            }
          >
            {category === "security" && <Shield className="ml-1 h-3 w-3" />}
            {category}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <Star className="ml-1 h-4 w-4 text-yellow-500" />
            {rating}
          </div>
          <div className="flex items-center">
            <Download className="ml-1 h-4 w-4" />
            {downloads}
          </div>
          <div className="flex items-center">
            <Tag className="ml-1 h-4 w-4" />
            {price}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={actionHref}>{actionText}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
