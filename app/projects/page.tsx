import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FolderGit2, Github, ExternalLink, Code, Server, Globe } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter">المشاريع</h1>
          <p className="text-muted-foreground">إدارة واستعراض المشاريع البرمجية من مختلف المنصات</p>
        </div>

        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Input type="search" placeholder="البحث عن مشروع..." className="max-w-sm" />
          <Button type="submit">بحث</Button>
          <Button variant="outline" className="mr-auto">
            <FolderGit2 className="ml-2 h-4 w-4" />
            مشروع جديد
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">جميع المشاريع</TabsTrigger>
            <TabsTrigger value="github">GitHub</TabsTrigger>
            <TabsTrigger value="vercel">Vercel</TabsTrigger>
            <TabsTrigger value="local">المشاريع المحلية</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                name="CyberAI Dashboard"
                description="لوحة تحكم لإدارة أدوات الأمن السيبراني والذكاء الاصطناعي"
                platform="GitHub"
                lastUpdated="منذ 3 أيام"
                language="TypeScript"
                actionText="عرض المشروع"
                actionHref="/projects/cyberai-dashboard"
                githubUrl="https://github.com/username/cyberai-dashboard"
              />
              <ProjectCard
                name="Password Analyzer"
                description="أداة لتحليل قوة كلمات المرور وفك تشفير الهاشات"
                platform="Vercel"
                lastUpdated="منذ أسبوع"
                language="JavaScript"
                actionText="عرض المشروع"
                actionHref="/projects/password-analyzer"
                vercelUrl="https://password-analyzer.vercel.app"
              />
              <ProjectCard
                name="Network Scanner"
                description="أداة لمسح الشبكات واكتشاف الأجهزة والخدمات"
                platform="Local"
                lastUpdated="منذ شهر"
                language="Python"
                actionText="عرض المشروع"
                actionHref="/projects/network-scanner"
              />
              <ProjectCard
                name="AI Chat Bot"
                description="بوت محادثة ذكي مدعوم بنماذج الذكاء الاصطناعي المتقدمة"
                platform="GitHub"
                lastUpdated="منذ يومين"
                language="Python"
                actionText="عرض المشروع"
                actionHref="/projects/ai-chat-bot"
                githubUrl="https://github.com/username/ai-chat-bot"
              />
              <ProjectCard
                name="Cyber Security Blog"
                description="مدونة متخصصة في مجال الأمن السيبراني والاختراق الأخلاقي"
                platform="Vercel"
                lastUpdated="منذ 5 أيام"
                language="Next.js"
                actionText="عرض المشروع"
                actionHref="/projects/cyber-security-blog"
                vercelUrl="https://cyber-security-blog.vercel.app"
              />
              <ProjectCard
                name="APK Analyzer"
                description="أداة لتحليل وتوقيع تطبيقات أندرويد"
                platform="Local"
                lastUpdated="منذ أسبوعين"
                language="Java"
                actionText="عرض المشروع"
                actionHref="/projects/apk-analyzer"
              />
            </div>
          </TabsContent>

          <TabsContent value="github" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                name="CyberAI Dashboard"
                description="لوحة تحكم لإدارة أدوات الأمن السيبراني والذكاء الاصطناعي"
                platform="GitHub"
                lastUpdated="منذ 3 أيام"
                language="TypeScript"
                actionText="عرض المشروع"
                actionHref="/projects/cyberai-dashboard"
                githubUrl="https://github.com/username/cyberai-dashboard"
              />
              <ProjectCard
                name="AI Chat Bot"
                description="بوت محادثة ذكي مدعوم بنماذج الذكاء الاصطناعي المتقدمة"
                platform="GitHub"
                lastUpdated="منذ يومين"
                language="Python"
                actionText="عرض المشروع"
                actionHref="/projects/ai-chat-bot"
                githubUrl="https://github.com/username/ai-chat-bot"
              />
            </div>
          </TabsContent>

          <TabsContent value="vercel" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                name="Password Analyzer"
                description="أداة لتحليل قوة كلمات المرور وفك تشفير الهاشات"
                platform="Vercel"
                lastUpdated="منذ أسبوع"
                language="JavaScript"
                actionText="عرض المشروع"
                actionHref="/projects/password-analyzer"
                vercelUrl="https://password-analyzer.vercel.app"
              />
              <ProjectCard
                name="Cyber Security Blog"
                description="مدونة متخصصة في مجال الأمن السيبراني والاختراق الأخلاقي"
                platform="Vercel"
                lastUpdated="منذ 5 أيام"
                language="Next.js"
                actionText="عرض المشروع"
                actionHref="/projects/cyber-security-blog"
                vercelUrl="https://cyber-security-blog.vercel.app"
              />
            </div>
          </TabsContent>

          <TabsContent value="local" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                name="Network Scanner"
                description="أداة لمسح الشبكات واكتشاف الأجهزة والخدمات"
                platform="Local"
                lastUpdated="منذ شهر"
                language="Python"
                actionText="عرض المشروع"
                actionHref="/projects/network-scanner"
              />
              <ProjectCard
                name="APK Analyzer"
                description="أداة لتحليل وتوقيع تطبيقات أندرويد"
                platform="Local"
                lastUpdated="منذ أسبوعين"
                language="Java"
                actionText="عرض المشروع"
                actionHref="/projects/apk-analyzer"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  name: string
  description: string
  platform: string
  lastUpdated: string
  language: string
  actionText: string
  actionHref: string
  githubUrl?: string
  vercelUrl?: string
}

function ProjectCard({
  name,
  description,
  platform,
  lastUpdated,
  language,
  actionText,
  actionHref,
  githubUrl,
  vercelUrl,
}: ProjectCardProps) {
  return (
    <Card className="cyber-card cyber-glow overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <Badge variant={platform === "GitHub" ? "outline" : platform === "Vercel" ? "secondary" : "default"}>
            {platform === "GitHub" && <Github className="ml-1 h-3 w-3" />}
            {platform === "Vercel" && <ExternalLink className="ml-1 h-3 w-3" />}
            {platform === "Local" && <Server className="ml-1 h-3 w-3" />}
            {platform}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <Code className="ml-1 h-4 w-4" />
            {language}
          </div>
          <div className="text-muted-foreground">{lastUpdated}</div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button asChild className="w-full">
          <a href={actionHref}>{actionText}</a>
        </Button>
        <div className="flex w-full gap-2">
          {githubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="ml-1 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {vercelUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a href={vercelUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="ml-1 h-4 w-4" />
                موقع
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
