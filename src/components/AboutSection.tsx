
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Высокое качество",
      description: "Используем только сертифицированные материалы от ведущих производителей"
    },
    {
      icon: "Clock",
      title: "Долговечность",
      description: "Срок службы мембранной кровли составляет от 30 до 50 лет"
    },
    {
      icon: "Workflow",
      title: "Комплексный подход",
      description: "От проектирования до монтажа и последующего обслуживания"
    },
    {
      icon: "Wrench",
      title: "Профессиональная установка",
      description: "Наши специалисты сертифицированы и имеют большой опыт работы"
    },
    {
      icon: "ThumbsUp",
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все выполненные работы"
    },
    {
      icon: "Wallet",
      title: "Оптимальная стоимость",
      description: "Справедливые цены без скрытых платежей и доплат"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">О нашей компании</h2>
          <p className="text-lg text-gray-600">
            Мы специализируемся на монтаже современных мембранных кровельных систем для 
            коммерческих и промышленных объектов. Наша команда экспертов обеспечивает полный цикл 
            работ от проектирования до монтажа и последующего обслуживания кровельных систем.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="hover-scale border-none shadow-lg overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Наша команда" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Почему мембранная кровля?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <p>Устойчивость к любым погодным условиям и УФ-излучению</p>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <p>Легкость материала, не создающая дополнительной нагрузки на конструкцию</p>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <p>Высокая эластичность и устойчивость к деформациям основания</p>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <p>Экологичность и пожаробезопасность материалов</p>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" className="text-primary mt-1 mr-2 flex-shrink-0" size={20} />
                  <p>Простота ремонта и обслуживания в течение всего срока службы</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
