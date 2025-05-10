import { Card } from "@/components/ui/card";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            Связаться с нами
          </h2>
          <p className="text-lg text-gray-600">
            Готовы обсудить ваш проект или у вас есть вопросы? Заполните форму
            ниже, и мы свяжемся с вами в ближайшее время.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <Card className="p-6 shadow-lg border-none h-full">
              <ContactForm />
            </Card>
          </div>

          <div className="lg:w-1/2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
