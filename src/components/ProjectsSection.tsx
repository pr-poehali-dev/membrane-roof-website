
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Логистический центр «Восток»",
      location: "г. Москва",
      area: "12 500 м²",
      type: "ПВХ мембрана",
      image: "https://images.unsplash.com/photo-1630161861559-2c29f1650ed2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Монтаж кровельной системы для крупного логистического центра. Работы включали утепление, пароизоляцию и монтаж ПВХ мембраны."
    },
    {
      id: 2,
      title: "Торговый комплекс «Меридиан»",
      location: "г. Санкт-Петербург",
      area: "8 300 м²",
      type: "ТПО мембрана",
      image: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Реконструкция кровли действующего торгового комплекса без остановки работы объекта."
    },
    {
      id: 3,
      title: "Производственный цех «АвтоТех»",
      location: "г. Казань",
      area: "15 800 м²",
      type: "EPDM мембрана",
      image: "https://images.unsplash.com/photo-1621506821355-fdabf6968827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Устройство кровельной системы с повышенной химической стойкостью для промышленного предприятия."
    },
    {
      id: 4,
      title: "Спортивный комплекс «Олимп»",
      location: "г. Новосибирск",
      area: "6 200 м²",
      type: "ПВХ мембрана",
      image: "https://images.unsplash.com/photo-1524029567463-b6ef6961c467?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Монтаж кровли сложной конфигурации с системой водоотведения для спортивного объекта."
    },
    {
      id: 5,
      title: "Бизнес-центр «Горизонт»",
      location: "г. Екатеринбург",
      area: "9 450 м²",
      type: "ТПО мембрана",
      image: "https://images.unsplash.com/photo-1456699210408-56af4518ecdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Устройство инверсионной кровли с зоной озеленения для современного бизнес-центра."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Наши проекты</h2>
          <p className="text-lg text-gray-600">
            За время работы мы реализовали множество проектов различной сложности.
            Вот некоторые из наших недавних работ по устройству мембранных кровель.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-lg overflow-hidden h-full hover-scale">
                  <div className="relative h-64">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary">{project.type}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Местоположение:</span> {project.location}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Площадь:</span> {project.area}
                      </div>
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static translate-y-0 mr-2" />
            <CarouselNext className="relative static translate-y-0 ml-2" />
          </div>
        </Carousel>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-6 text-secondary">Статистика наших проектов</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <div className="text-gray-600">выполненных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500 000+</div>
              <div className="text-gray-600">квадратных метров</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">регионов России</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
