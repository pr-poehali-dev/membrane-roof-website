
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ContactItem {
  icon: string;
  title: string;
  lines: string[];
}

const ContactInfo = () => {
  const contactItems: ContactItem[] = [
    {
      icon: "MapPin",
      title: "Адрес",
      lines: ["г. Москва, ул. Кровельная, д. 123, офис 45"]
    },
    {
      icon: "Phone",
      title: "Телефон",
      lines: ["+7 (495) 123-45-67", "+7 (495) 765-43-21"]
    },
    {
      icon: "Mail",
      title: "Email",
      lines: ["info@membrankrovlya.ru", "sales@membrankrovlya.ru"]
    },
    {
      icon: "Clock",
      title: "Режим работы",
      lines: ["Пн-Пт: 9:00 - 18:00", "Сб-Вс: Выходной"]
    }
  ];

  const socialLinks = [
    { icon: "Facebook", url: "#" },
    { icon: "Instagram", url: "#" },
    { icon: "Youtube", url: "#" },
    { icon: "Linkedin", url: "#" }
  ];

  return (
    <Card className="p-6 shadow-lg border-none h-full">
      <h3 className="text-2xl font-bold mb-6 text-secondary">Контактная информация</h3>
      
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <ContactInfoItem key={index} item={item} />
        ))}
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">Мы в социальных сетях</h4>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Icon name={link.icon} className="text-primary" size={20} />
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
};

interface ContactInfoItemProps {
  item: ContactItem;
}

const ContactInfoItem = ({ item }: ContactInfoItemProps) => (
  <div className="flex items-start">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
      <Icon name={item.icon} className="text-primary" size={24} />
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
      {item.lines.map((line, idx) => (
        <p key={idx} className="text-gray-600">{line}</p>
      ))}
    </div>
  </div>
);

export default ContactInfo;
