
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("pvc");

  const services = [
    {
      id: "pvc",
      title: "ПВХ мембраны",
      description: "Поливинилхлоридные мембраны обладают высокой прочностью и устойчивостью к механическим повреждениям",
      features: [
        "Высокая эластичность и гибкость даже при низких температурах",
        "Устойчивость к УФ-излучению и атмосферным воздействиям",
        "Долговечность эксплуатации до 30 лет",
        "Экологическая безопасность и пожаростойкость",
        "Возможность монтажа при любых погодных условиях"
      ],
      image: "https://images.unsplash.com/photo-1582140161538-7595e3d1e437?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tpo",
      title: "ТПО мембраны",
      description: "Термопластичные полиолефиновые мембраны объединяют в себе лучшие качества термопластов и синтетических каучуков",
      features: [
        "Повышенная химическая стойкость к маслам и агрессивным веществам",
        "Высокая устойчивость к озоновому воздействию",
        "Срок службы до 50 лет без потери эксплуатационных свойств",
        "Отличная термостойкость (от -40°C до +120°C)",
        "Экологическая безопасность (не содержат хлора и пластификаторов)"
      ],
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "epdm",
      title: "EPDM мембраны",
      description: "Этилен-пропилен-диен-мономерные мембраны обладают высокой эластичностью и устойчивостью к воздействию окружающей среды",
      features: [
        "Исключительная эластичность (до 300%)",
        "Устойчивость к экстремальным температурам (от -45°C до +130°C)",
        "Срок службы до 50 лет без потери эластичности",
        "Высокая стойкость к озону и ультрафиолету",
        "Отличная устойчивость к кислотным дождям и химикатам"
      ],
      image: "https://images.unsplash.com/photo-1578852640637-cc5c2ce703d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Наши услуги</h2>
          <p className="text-lg text-gray-600">
            Предлагаем полный спектр услуг по устройству мембранных кровель различных типов.
            Работаем с коммерческими, промышленными и жилыми объектами любой сложности.
          </p>
        </div>

        <Tabs defaultValue="pvc" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full max-w-xl">
              {services.map(service => (
                <TabsTrigger key={service.id} value={service.id} className="text-base">
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map(service => (
            <TabsContent key={service.id} value={service.id}>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
                  <p className="text-lg mb-6 text-gray-700">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Преимущества:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="CheckCircle" className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button size="lg">
                    Заказать консультацию
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover-scale border-none shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="PenTool" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Проектирование</h3>
              <p className="text-gray-600">Разработка проектной документации и расчёт всех параметров будущей кровли</p>
            </CardContent>
          </Card>
          
          <Card className="hover-scale border-none shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="HardHat" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Монтаж</h3>
              <p className="text-gray-600">Профессиональный монтаж мембранных кровель любой сложности и площади</p>
            </CardContent>
          </Card>
          
          <Card className="hover-scale border-none shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Wrench" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Ремонт</h3>
              <p className="text-gray-600">Квалифицированный ремонт и восстановление существующих мембранных кровель</p>
            </CardContent>
          </Card>
          
          <Card className="hover-scale border-none shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="ClipboardCheck" className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Обслуживание</h3>
              <p className="text-gray-600">Регулярные осмотры, обслуживание и продление гарантии на кровельную систему</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
