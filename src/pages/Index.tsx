import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [apiKey, setApiKey] = useState("");

  const features = [
    {
      icon: "Gamepad2",
      title: "КЛАССИЧЕСКИЙ ГЕЙМПЛЕЙ",
      description: "8-битная механика с современным твистом"
    },
    {
      icon: "Users",
      title: "МУЛЬТИПЛЕЕР",
      description: "Играй с друзьями в реальном времени"
    },
    {
      icon: "Trophy",
      title: "РЕЙТИНГ",
      description: "Соревнуйся за первое место"
    },
    {
      icon: "Zap",
      title: "БЫСТРЫЙ СТАРТ",
      description: "Подключение через Roblox API"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16 animate-slide-up relative">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              src="https://cdn.poehali.dev/projects/8e9422cb-89de-4b67-b2d5-a807efe2e6b0/files/70c3225e-5214-4a0a-8682-741a3fdb9cdf.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10">
            <div className="inline-block mb-6 animate-float">
              <div className="w-32 h-32 pixel-corners overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/8e9422cb-89de-4b67-b2d5-a807efe2e6b0/files/8c2def6e-67af-45f5-8623-df27dc4d8cef.jpg"
                  alt="Pixel Hero"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
            <h1 className="pixel-heading text-4xl md:text-6xl text-primary mb-4 animate-pixel-pulse">
              PIXEL QUEST
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              ПРИКЛЮЧЕНИЕ В СТИЛЕ 8-БИТ
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="pixel-border bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              ИГРАТЬ СЕЙЧАС
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="pixel-border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold px-8 py-6 text-lg"
            >
              <Icon name="Info" size={20} className="mr-2" />
              ПОДРОБНЕЕ
            </Button>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="pixel-heading text-2xl md:text-3xl text-center text-primary mb-12">
            ВОЗМОЖНОСТИ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="pixel-border bg-card hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary pixel-corners mx-auto mb-4 flex items-center justify-center">
                    <Icon name={feature.icon as any} size={32} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-sm font-bold text-primary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="pixel-border bg-card max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="pixel-heading text-2xl text-primary mb-2">
                О ИГРЕ
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Погрузись в мир пиксельных приключений
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <p>
                <span className="text-primary font-bold">▸</span> Исследуй уникальные уровни в классическом пиксельном стиле
              </p>
              <p>
                <span className="text-secondary font-bold">▸</span> Собирай артефакты и улучшай своего персонажа
              </p>
              <p>
                <span className="text-accent font-bold">▸</span> Соревнуйся с друзьями в захватывающих битвах
              </p>
              <p>
                <span className="text-primary font-bold">▸</span> Создавай свои собственные карты и уровни
              </p>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Pixel Quest — это ностальгия по классике с современными возможностями мультиплеера
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-2xl mx-auto">
          <Card className="pixel-border bg-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent pixel-corners mx-auto mb-4 flex items-center justify-center">
                <Icon name="Key" size={32} className="text-accent-foreground" />
              </div>
              <CardTitle className="pixel-heading text-xl text-primary mb-2">
                ПОДКЛЮЧЕНИЕ ROBLOX API
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Интегрируй игру с Roblox платформой
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">
                  API КЛЮЧ ROBLOX
                </label>
                <input
                  type="password"
                  placeholder="Введи свой Roblox API ключ..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-4 py-3 bg-input border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <p className="text-xs text-muted-foreground">
                  Получи API ключ в настройках твоего Roblox аккаунта
                </p>
              </div>
              
              <Button 
                className="w-full pixel-border bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6"
                disabled={!apiKey}
              >
                <Icon name="Link" size={20} className="mr-2" />
                ПОДКЛЮЧИТЬ API
              </Button>
              
              <div className="pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Безопасное хранение API ключа
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Автоматическая синхронизация данных
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={16} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Поддержка всех функций Roblox
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="text-center mt-16 text-muted-foreground">
          <p className="text-sm">
            © 2024 PIXEL QUEST • СОЗДАНО С ❤️ ДЛЯ РЕТРО-ГЕЙМЕРОВ
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;