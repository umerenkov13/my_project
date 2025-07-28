import React from 'react';

export const Hero = () => {
  const platforms = [
    {
      name: "Figma",
      color: "bg-purple-50 border-purple-200 text-purple-700"
    },
    {
      name: "Wildberries",
      color: "bg-pink-50 border-pink-200 text-pink-700"
    },
    {
      name: "OZON",
      color: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      name: "Инфографика",
      color: "bg-green-50 border-green-200 text-green-700"
    }
  ];

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Дизайнер инфографики
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Создаю продающие карточки товаров для Wildberries и OZON.<br/>
            Увеличиваю конверсию через продуманный дизайн.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {platforms.map((platform, index) => (
            <span 
              key={index} 
              className={`px-4 py-2 border rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-md ${platform.color}`}
            >
              {platform.name}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center">
          <a 
            href="#contact" 
            className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Начать проект
          </a>
        </div>
      </div>
    </section>
  );
};