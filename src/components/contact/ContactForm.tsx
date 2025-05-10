
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formState, setFormState] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
      
      // Сбросить сообщение об успешной отправке через 5 секунд
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          placeholder="Иван Иванов"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formState.phone}
          onChange={handleChange}
          required
          placeholder="+7 (___) ___-__-__"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
          placeholder="example@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Опишите ваш проект или вопрос..."
          rows={5}
        />
      </div>

      {submitSuccess && (
        <div className="p-3 bg-green-50 text-green-800 rounded-md animate-fade-in">
          Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
        </div>
      )}
      
      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
            Отправка...
          </>
        ) : "Отправить заявку"}
      </Button>
    </form>
  );
};

export default ContactForm;
