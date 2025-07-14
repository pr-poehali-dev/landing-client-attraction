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
              <span className="text-xl font-bold text-black">EXTRABOND</span>
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
                EXTRABOND & RANGO FLEX
                <span className="block text-gray-600">Профессиональная линейка клеев</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Высококачественные аэрозольные клеи для различных сфер применения. 
                Быстрое схватывание, прочное соединение, широкий спектр материалов.
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
                <div className="text-2xl font-bold text-black">500мл</div>
                <div className="text-sm text-gray-600">Объем баллона</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">30сек</div>
                <div className="text-sm text-gray-600">Время схватывания</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">8м²</div>
                <div className="text-sm text-gray-600">Покрытие</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4 h-96">
                <img 
                  src="https://cdn.poehali.dev/files/10a29a86-975a-4cd8-9604-5a6ae119f525.png" 
                  alt="EXTRABOND F60 Contact Spray Adhesive" 
                  className="w-full h-full object-contain"
                />
                <img 
                  src="https://cdn.poehali.dev/files/d048ca7c-f4d4-4b7f-aeeb-8badc0558a3d.png" 
                  alt="RANGO FLEX Mah Contact Adhesive" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                Профессиональная линейка
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

      {/* Product Lineup Section */}
      <section id="product" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Линейка продуктов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональные клеи для различных сфер применения
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* EXTRABOND F60 */}
            <Card className="p-6 hover-scale animate-fade-in">
              <div className="text-center">
                <img 
                  src="https://cdn.poehali.dev/files/10a29a86-975a-4cd8-9604-5a6ae119f525.png" 
                  alt="EXTRABOND F60 Contact Spray Adhesive" 
                  className="w-full h-64 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">EXTRABOND F60</h3>
                <p className="text-blue-600 font-medium mb-4">Contact Spray Adhesive</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Объем:</span>
                    <span>500 мл</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Тип:</span>
                    <span>Контактный</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Применение:</span>
                    <span>Универсальный</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* RANGO FLEX Mah */}
            <Card className="p-6 hover-scale animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-center">
                <img 
                  src="https://cdn.poehali.dev/files/d048ca7c-f4d4-4b7f-aeeb-8badc0558a3d.png" 
                  alt="RANGO FLEX Mah Contact Adhesive" 
                  className="w-full h-64 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">RANGO FLEX Mah</h3>
                <p className="text-yellow-600 font-medium mb-4">Next Generation Contact Adhesive</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Объем:</span>
                    <span>500 мл</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Тип:</span>
                    <span>Контактный</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Применение:</span>
                    <span>Новое поколение</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* EXTRABOND F40 */}
            <Card className="p-6 hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-center">
                <img 
                  src="https://cdn.poehali.dev/files/ac50a0f8-75ab-40e6-8143-11f9ce7eadb7.png" 
                  alt="EXTRABOND F40 Multipurpose Spray Adhesive" 
                  className="w-full h-64 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">EXTRABOND F40</h3>
                <p className="text-green-600 font-medium mb-4">Multipurpose Spray Adhesive</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Объем:</span>
                    <span>500 мл</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Тип:</span>
                    <span>Универсальный</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Применение:</span>
                    <span>Многоцелевой</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* EXTRABOND T200 */}
            <Card className="p-6 hover-scale animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-center">
                <img 
                  src="https://cdn.poehali.dev/files/387ecbcd-1427-4d78-836b-1acebaa1e0ab.png" 
                  alt="EXTRABOND T200 Carpet Tile Tackifier" 
                  className="w-full h-64 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">EXTRABOND T200</h3>
                <p className="text-pink-600 font-medium mb-4">Carpet Tile Tackifier</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Объем:</span>
                    <span>500 мл</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Тип:</span>
                    <span>Ковровый</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Применение:</span>
                    <span>Плитка и ковры</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* EXTRABOND */}
            <Card className="p-6 hover-scale animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <img 
                  src="https://cdn.poehali.dev/files/3e1c6e1d-c713-49ff-bdd4-41e4fa55e122.png" 
                  alt="EXTRABOND Spray Adhesive" 
                  className="w-full h-64 object-contain mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">EXTRABOND 10</h3>
                <p className="text-gray-600 font-medium mb-4">Advanced Technology</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Объем:</span>
                    <span>400 мл</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Тип:</span>
                    <span>Профессиональный</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Применение:</span>
                    <span>Промышленность</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-bold text-black mb-6">Области применения</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {applications.map((app, index) => (
                <div key={index} className="flex items-center space-x-2 justify-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <Icon name="CheckCircle" size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{app}</span>
                </div>
              ))}
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
                <p className="text-gray-300">info@extrabond.ru</p>
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
              <span className="text-xl font-bold text-black">EXTRABOND</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600">© 2024 EXTRABOND. Все права защищены.</p>
              <p className="text-sm text-gray-500">Профессиональная линейка клеев</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;