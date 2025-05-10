import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">
            <span className="text-secondary">Мембран</span>Кровля
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-primary font-medium transition-colors"
          >
            Главная
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-primary font-medium transition-colors"
          >
            О компании
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-primary font-medium transition-colors"
          >
            Услуги
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-primary font-medium transition-colors"
          >
            Контакты
          </a>
        </nav>

        <Button className="hidden md:flex">
          <Icon name="Phone" className="mr-2" />
          Заказать звонок
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              О компании
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Услуги
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Проекты
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="mt-4 w-full">
            <Icon name="Phone" className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
