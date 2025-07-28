import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Figma, Sparkles, Clock, Award, Users, BarChart3 } from 'lucide-react';

export const About = () => {
  const stats = [
    {
      number: "2+",
      label: "года в дизайне",
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-50"
    },
    {
      number: "100+",
      label: "проектов",
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      color: "bg-green-50"
    },
    {
      number: "50+",
      label: "довольных клиентов",
      icon: <Users className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-50"
    },
    {
      number: "98%",
      label: "конверсия проектов",
      icon: <Award className="w-6 h-6 text-orange-500" />,
      color: "bg-orange-50"
    }
  ];

  const skills = [
    {
      name: "Figma",
      description: "для создания макетов",
      icon: <Figma className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-50"
    },
    {
      name: "AI",
      description: "для генерации идей и оптимизации",
      icon: <Sparkles className="w-6 h-6 text-yellow-600" />,
      color: "bg-yellow-50"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl mb-6 text-gray-900">
            Обо мне
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        {/* Основная информация с фото */}
        <div className="grid md:grid-cols-3 gap-12 items-center mb-20">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Привет! Меня зовут Алексей, я UX/UI дизайнер, специализируюсь на создании продающих карточек товаров.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              За 2+ года работы создал более 100 инфографик для Wildberries и OZON. 
              Мои карточки увеличивают CTR на 35% и конверсию в покупку на 40%. 
              Работаю только с проверенными методиками продаж.
            </p>
            
            {/* Навыки */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                  <div className="text-gray-900 mb-1">{skill.name}</div>
                  <div className="text-sm text-gray-600">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Фото профиля */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl bg-gray-200 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                  alt="Алексей - UX/UI дизайнер"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-3xl text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Что я предлагаю */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-xl mb-6 text-gray-900">Что я предлагаю:</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-gray-900 mb-1">Продающая инфографика</div>
                <div className="text-sm text-gray-600">Четкая структура с акцентом на преимущества товара, повышает CTR на 35%</div>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-gray-900 mb-1">Соответствие требованиям</div>
                <div className="text-sm text-gray-600">Знаю все технические требования Wildberries и OZON, карточки проходят модерацию</div>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="text-gray-900 mb-1">Быстрая работа</div>
                <div className="text-sm text-gray-600">Стандартный заказ — 24 часа, пакет из 5 карточек — 3 дня</div>
              </div>
            </div>
          </div>
          
          {/* Процесс работы */}
          <div>
            <h3 className="text-xl mb-6 text-gray-900">Процесс работы:</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full text-sm flex items-center justify-center">1</span>
                <div>
                  <div className="text-gray-900 mb-1">Обсуждение проекта</div>
                  <div className="text-sm text-gray-600">Детально разбираем техническое задание и цели</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full text-sm flex items-center justify-center">2</span>
                <div>
                  <div className="text-gray-900 mb-1">Создание дизайна</div>
                  <div className="text-sm text-gray-600">Разработка первого варианта с учетом всех требований</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full text-sm flex items-center justify-center">3</span>
                <div>
                  <div className="text-gray-900 mb-1">Внесение правок</div>
                  <div className="text-sm text-gray-600">Корректировки до идеального результата (бесплатно)</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full text-sm flex items-center justify-center">4</span>
                <div>
                  <div className="text-gray-900 mb-1">Передача файлов</div>
                  <div className="text-sm text-gray-600">Готовые макеты в нужных форматах</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};