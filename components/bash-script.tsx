"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

export function BashScript() {
  const [isCopied, setIsCopied] = useState(false)

  const bashScript = `#!/bin/bash

# CyberAI OS - Setup Script
# هذا السكربت يقوم بإعداد بيئة تطوير متكاملة للذكاء الاصطناعي
# يعمل على Ubuntu/Debian وTermux على أندرويد

# تحديد نوع النظام
if [ -f /data/data/com.termux/files/usr/bin/bash ]; then
  TERMUX=true
  echo "🔍 تم اكتشاف بيئة Termux"
else
  TERMUX=false
  echo "🔍 تم اكتشاف بيئة Linux"
fi

# دالة لعرض الرسائل
print_message() {
  echo "\\n\\033[1;34m===> $1\\033[0m\\n"
}

# دالة للتحقق من نجاح التثبيت
check_success() {
  if [ $? -eq 0 ]; then
    echo "\\033[1;32m✓ تم تثبيت $1 بنجاح\\033[0m"
  else
    echo "\\033[1;31m✗ فشل تثبيت $1\\033[0m"
    echo "\\033[1;33mجاري محاولة إصلاح المشكلة...\\033[0m"
    return 1
  fi
}

# تحديث المستودعات
print_message "تحديث المستودعات"
if [ "$TERMUX" = true ]; then
  pkg update -y && pkg upgrade -y
  check_success "تحديث المستودعات"
else
  sudo apt update && sudo apt upgrade -y
  check_success "تحديث المستودعات"
fi

# تثبيت الأدوات الأساسية
print_message "تثبيت الأدوات الأساسية"
if [ "$TERMUX" = true ]; then
  pkg install -y git curl wget python nodejs openssh build-essential
  check_success "الأدوات الأساسية"
else
  sudo apt install -y git curl wget python3 python3-pip nodejs npm build-essential software-properties-common
  check_success "الأدوات الأساسية"
fi

# تثبيت وتكوين Git
print_message "تثبيت وتكوين Git"
if ! command -v git &> /dev/null; then
  if [ "$TERMUX" = true ]; then
    pkg install -y git
  else
    sudo apt install -y git
  fi
fi
check_success "Git"

# تكوين Git
git config --global init.defaultBranch main
echo "👤 الرجاء إدخال اسم المستخدم لـ Git:"
read git_username
git config --global user.name "$git_username"
echo "📧 الرجاء إدخال البريد الإلكتروني لـ Git:"
read git_email
git config --global user.email "$git_email"
check_success "تكوين Git"

# تثبيت GitHub CLI
print_message "تثبيت GitHub CLI"
if ! command -v gh &> /dev/null; then
  if [ "$TERMUX" = true ]; then
    pkg install -y gh
  else
    curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
    sudo apt update
    sudo apt install -y gh
  fi
fi
check_success "GitHub CLI"

# تثبيت Node.js و npm
print_message "تثبيت Node.js و npm"
if ! command -v node &> /dev/null; then
  if [ "$TERMUX" = true ]; then
    pkg install -y nodejs
  else
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt install -y nodejs
  fi
fi
check_success "Node.js"

# تثبيت أدوات Node.js العالمية
print_message "تثبيت أدوات Node.js العالمية"
if [ "$TERMUX" = true ]; then
  npm install -g yarn pnpm typescript ts-node next vercel
else
  sudo npm install -g yarn pnpm typescript ts-node next vercel
fi
check_success "أدوات Node.js العالمية"

# تثبيت Python وأدواته
print_message "تثبيت Python وأدواته"
if [ "$TERMUX" = true ]; then
  pkg install -y python
  pip install --upgrade pip
else
  sudo apt install -y python3 python3-pip python3-venv
  sudo pip3 install --upgrade pip
fi
check_success "Python"

# تثبيت مكتبات Python للذكاء الاصطناعي
print_message "تثبيت مكتبات Python للذكاء الاصطناعي"
if [ "$TERMUX" = true ]; then
  pip install numpy pandas scikit-learn tensorflow-cpu torch torchvision torchaudio transformers openai langchain
else
  pip3 install numpy pandas scikit-learn tensorflow torch torchvision torchaudio transformers openai langchain
fi
check_success "مكتبات Python للذكاء الاصطناعي"

# تثبيت أدوات توليد مفاتيح API
print_message "تثبيت أدوات توليد مفاتيح API"
if [ "$TERMUX" = true ]; then
  pip install cryptography pycryptodome jwt
else
  pip3 install cryptography pycryptodome pyjwt
fi
check_success "أدوات توليد مفاتيح API"

# تثبيت Android SDK (إذا لم تكن في Termux)
if [ "$TERMUX" = false ]; then
  print_message "تثبيت Android SDK"
  sudo apt install -y android-sdk
  if [ $? -ne 0 ]; then
    echo "\\033[1;33mجاري تثبيت Android SDK بطريقة بديلة...\\033[0m"
    sudo apt install -y android-tools-adb android-tools-fastboot
  fi
  check_success "Android SDK"
fi

# إنشاء مشروع ذكاء اصطناعي
print_message "إنشاء مشروع ذكاء اصطناعي"
echo "📁 الرجاء إدخال اسم المشروع:"
read project_name
project_name=\${project_name:-"cyberai-project"}

mkdir -p "\$project_name"
cd "\$project_name"

# إنشاء مشروع Next.js
print_message "إنشاء مشروع Next.js"
npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*"
check_success "مشروع Next.js"

# تثبيت مكتبات الذكاء الاصطناعي
print_message "تثبيت مكتبات الذكاء الاصطناعي"
npm install ai openai @ai-sdk/openai langchain @langchain/openai

# إنشاء هيكل المشروع
print_message "إنشاء هيكل المشروع"
mkdir -p src/app/api/ai/chat
mkdir -p src/components/ui
mkdir -p src/lib

# إنشاء ملف API للذكاء الاصطناعي
cat > src/app/api/ai/chat/route.ts << 'EOL'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { openai } from '@ai-sdk/openai'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const { messages } = await req.json()

  // استخدام مفتاح API من متغيرات البيئة
  const apiKey = process.env.OPENAI_API_KEY || 'your-api-key'
  
  const response = await openai({
    apiKey
  }).chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    stream: true,
  })
  
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
EOL

# إنشاء ملف .env
cat > .env << 'EOL'
OPENAI_API_KEY=your-api-key
EOL

# إنشاء ملف .env.example
cat > .env.example << 'EOL'
OPENAI_API_KEY=your-api-key
EOL

# إنشاء ملف .gitignore إذا لم يكن موجودًا
if [ ! -f .gitignore ]; then
  cat > .gitignore << 'EOL'
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOL
fi

# تهيئة مستودع Git
print_message "تهيئة مستودع Git"
git init
git add .
git commit -m "Initial commit: AI project setup"
check_success "تهيئة مستودع Git"

# إنشاء ملف README.md
cat > README.md << EOL
# \$project_name

مشروع ذكاء اصطناعي تم إنشاؤه باستخدام CyberAI OS.

## التثبيت

\`\`\`bash
npm install
\`\`\`

## التشغيل

\`\`\`bash
npm run dev
\`\`\`

## البناء

\`\`\`bash
npm run build
\`\`\`

## النشر

\`\`\`bash
npm run deploy
\`\`\`
EOL

# إضافة سكربت لتوقيع APK (إذا لم تكن في Termux)
if [ "$TERMUX" = false ]; then
  print_message "إنشاء سكربت لتوقيع APK"
  mkdir -p scripts
  cat > scripts/sign-apk.sh << 'EOL'
#!/bin/bash

# سكربت لتوقيع ملف APK

if [ $# -lt 1 ]; then
  echo "الاستخدام: $0 <path-to-apk>"
  exit 1
fi

APK_PATH=$1
KEYSTORE_PATH="keystore.jks"
KEYSTORE_ALIAS="cyberai"
SIGNED_APK="\${APK_PATH%.*}-signed.apk"

# إنشاء keystore إذا لم يكن موجودًا
if [ ! -f "$KEYSTORE_PATH" ]; then
  echo "إنشاء keystore جديد..."
  keytool -genkey -v -keystore "$KEYSTORE_PATH" -alias "$KEYSTORE_ALIAS" -keyalg RSA -keysize 2048 -validity 10000
fi

# توقيع APK
echo "توقيع APK..."
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore "$KEYSTORE_PATH" -storepass android -keypass android "$APK_PATH" "$KEYSTORE_ALIAS"

# التحقق من التوقيع
echo "التحقق من التوقيع..."
jarsigner -verify -verbose -certs "$APK_PATH"

# تحسين APK
echo "تحسين APK..."
zipalign -v 4 "$APK_PATH" "$SIGNED_APK"

echo "تم توقيع APK بنجاح: $SIGNED_APK"
EOL
  chmod +x scripts/sign-apk.sh
  check_success "سكربت توقيع APK"
fi

# إضافة سكربت للنشر
print_message "إنشاء سكربت للنشر"
mkdir -p scripts
cat > scripts/deploy.sh << 'EOL'
#!/bin/bash

# سكربت لنشر التطبيق

# بناء التطبيق
echo "بناء التطبيق..."
npm run build

# النشر على Vercel
if command -v vercel &> /dev/null; then
  echo "النشر على Vercel..."
  vercel --prod
else
  echo "Vercel غير مثبت. جاري التثبيت..."
  npm install -g vercel
  vercel --prod
fi
'EOL'
chmod +x scripts/deploy.sh
check_success "سكربت النشر"

# تحديث package.json لإضافة سكربتات مخصصة
print_message "تحديث package.json"
# استخدام jq إذا كان متاحًا، وإلا استخدام sed
if command -v jq &gt; /dev/null; then
  jq '.scripts += {"deploy": "bash scripts/deploy.sh"}' package.json > package.json.tmp && mv package.json.tmp package.json
  if [ "$TERMUX" = false ]; then
    jq '.scripts += {"sign-apk": "bash scripts/sign-apk.sh"}' package.json > package.json.tmp && mv package.json.tmp package.json
  fi
else
  # استخدام sed كبديل
  sed -i 's/"scripts": {/"scripts": {\\n    "deploy": "bash scripts\\/deploy.sh",/g' package.json
  if [ "$TERMUX" = false ]; then
    sed -i 's/"scripts": {/"scripts": {\\n    "sign-apk": "bash scripts\\/sign-apk.sh",/g' package.json
  fi
fi
check_success "تحديث package.json"

# عرض رسالة النجاح
print_message "تم إعداد بيئة تطوير الذكاء الاصطناعي بنجاح!"
echo "📁 المشروع: $project_name"
echo "🚀 للبدء، قم بتنفيذ الأوامر التالية:"
echo "  cd $project_name"
echo "  npm run dev"
echo ""
echo "🔑 لا تنس إضافة مفتاح API الخاص بك في ملف .env"
echo "🌐 للنشر، استخدم: npm run deploy"
if [ "$TERMUX" = false ]; then
  echo "📱 لتوقيع APK، استخدم: npm run sign-apk <path-to-apk>"
fi
echo ""
echo "🎉 استمتع بتطوير تطبيقات الذكاء الاصطناعي مع CyberAI OS!"
`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bashScript)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="relative">
      <pre className="bg-black text-green-500 p-4 rounded-md overflow-auto max-h-[400px] text-xs font-mono">
        {bashScript}
      </pre>
      <Button className="absolute top-2 right-2" size="sm" variant="outline" onClick={copyToClipboard}>
        {isCopied ? (
          <>
            <Check className="ml-2 h-4 w-4" />
            تم النسخ
          </>
        ) : (
          <>
            <Copy className="ml-2 h-4 w-4" />
            نسخ السكربت
          </>
        )}
      </Button>
    </div>
  )
}
