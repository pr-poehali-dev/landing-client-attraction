import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: "MapPin",
      title: "Российское производство",
      description: "Качественный клей от отечественного производителя с полным контролем качества"
    },
    {
      icon: "Zap",
      title: "Быстрое склеивание",
      description: "Мгновенная фиксация материалов - экономия времени на производстве"
    },
    {
      icon: "Shield",
      title: "Прочное соединение",
      description: "Надежная фиксация различных материалов на долгие годы"
    },
    {
      icon: "Wrench",
      title: "Универсальность",
      description: "Подходит для металла, пластика, дерева, резины и других материалов"
    }
  ];

  const applications = [
    "Производство мебели",
    "Автомобильная промышленность", 
    "Строительство и ремонт",
    "Упаковочная индустрия",
    "Обувное производство",
    "Рекламная индустрия"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Icon name="Droplets" size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-black">AeroGlue</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#product" className="text-gray-600 hover:text-black transition-colors story-link">
                О продукте
              </a>
              <a href="#features" className="text-gray-600 hover:text-black transition-colors story-link">
                Преимущества
              </a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors story-link">
                Контакты
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:flex">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#product" className="block text-gray-600 hover:text-black transition-colors">
              О продукте
            </a>
            <a href="#features" className="block text-gray-600 hover:text-black transition-colors">
              Преимущества
            </a>
            <a href="#contact" className="block text-gray-600 hover:text-black transition-colors">
              Контакты
            </a>
            <Button variant="outline" className="w-full">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <Badge variant="outline" className="w-fit">
              <Icon name="Award" size={14} className="mr-2" />
              Российское качество
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                Аэрозольный клей
                <span className="block text-gray-600">нового поколения</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Профессиональный клей российского производства для промышленного и бытового применения. 
                Мгновенная фиксация, долговечность и универсальность.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4 hover-scale">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать продукт
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Icon name="Download" size={20} className="mr-2" />
                Техническая документация
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">24ч</div>
                <div className="text-sm text-gray-600">Время схватывания</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">-40°C</div>
                <div className="text-sm text-gray-600">Минимальная температура</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">+80°C</div>
                <div className="text-sm text-gray-600">Максимальная температура</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <img 
                src="/img/46aaf41b-11cc-44db-b390-5f7e4432c86f.jpg" 
                alt="Аэрозольный клей AeroGlue" 
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                Новинка
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Преимущества нашего клея
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современная формула и российское качество для профессионального применения
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover-scale animate-fade-in bg-white" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/img/6e850801-dd5f-4425-9b3f-5f701d81f23a.jpg" 
                alt="Применение аэрозольного клея в производстве" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                  Широкий спектр применения
                </h2>
                <p className="text-xl text-gray-600">
                  Наш аэрозольный клей подходит для различных отраслей промышленности и бытового использования
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center space-x-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <Icon name="CheckCircle" size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Технические характеристики</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Объем баллона:</span>
                    <span className="font-medium">400 мл</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Время схватывания:</span>
                    <span className="font-medium">30-60 сек</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Температура применения:</span>
                    <span className="font-medium">-40°C до +80°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Срок хранения:</span>
                    <span className="font-medium">24 месяца</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Готовы заказать?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Свяжитесь с нами для получения коммерческого предложения и оформления заказа
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Телефон</h3>
                <p className="text-gray-300">+7 (800) 123-45-67</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">info@aeroglue.ru</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Адрес</h3>
                <p className="text-gray-300">г. Москва, ул. Промышленная, 15</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-black hover:bg-gray-100">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-black hover:bg-gray-100">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать письмо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Icon name="Droplets" size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-black">AeroGlue</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600">© 2024 AeroGlue. Все права защищены.</p>
              <p className="text-sm text-gray-500">Аэрозольный клей российского производства</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;