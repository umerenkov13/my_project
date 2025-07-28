import React from 'react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl mb-6 text-gray-900">
            Стоимость услуг
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачное ценообразование для всех типов проектов
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Основной пакет */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="text-center mb-6">
              <h3 className="text-xl mb-2 text-gray-900">Одна карточка</h3>
              <div className="text-3xl text-gray-900 mb-2">400₽</div>
              <p className="text-gray-600 text-sm">За одну карточку товара</p>
            </div>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">✓</span>
                <span>Уникальный дизайн</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">✓</span>
                <span>Соответствие требованиям платформы</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">✓</span>
                <span>Готовность за 24 часа</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">✓</span>
                <span>Правки бесплатно</span>
              </li>
            </ul>
          </div>
          
          {/* Выгодный пакет */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl text-white relative transform scale-105 shadow-xl">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-1 rounded-full text-xs shadow-lg">
                ⭐ Лучший выбор
              </span>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
            
            <div className="text-center mb-6 relative">
              <h3 className="text-xl mb-2">3+ карточки</h3>
              <div className="text-3xl mb-1 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                360₽
              </div>
              <div className="text-xs text-gray-400 line-through mb-2">400₽</div>
              <p className="text-gray-300 text-sm">За карточку (экономия 10%)</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4 mb-4 backdrop-blur-sm">
              <div className="text-xs text-gray-300 mb-2">Экономия на пакете:</div>
              <div className="text-lg">120₽+ при заказе 3 карточек</div>
            </div>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Всё из базового пакета</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Скидка 10% при заказе 3+ карточек</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Единый фирменный стиль</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Приоритетное выполнение за 3 дня</span>
              </li>
            </ul>
          </div>
          
          {/* Дополнительные услуги */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="text-center mb-6">
              <h3 className="text-xl mb-2 text-gray-900">Доп. услуги</h3>
              <div className="text-lg text-gray-600 mb-2">от 200₽</div>
              <p className="text-gray-600 text-sm">Дополнительные опции</p>
            </div>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex justify-between items-center">
                <span>Ресайз под платформы</span>
                <span className="text-gray-900">200₽</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Замена товара на карточке</span>
                <span className="text-gray-900">200₽</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Изменение цвета товара</span>
                <span className="text-gray-900">250₽</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Блок рич-контента</span>
                <span className="text-gray-900">350₽</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Качество, скорость и внимание к деталям — это про мои работы!
          </p>
          <a 
            href="https://t.me/alexey_umerenkov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </section>
  );
};