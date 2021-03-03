import { Course, SaleOption } from '../course.interface';

export const courses: Course[] = [
  {
    title: 'Для школьников',
    currency: 'грн',
    price: 250,
    time: 'час',
    items: [
      'Индивидуальный подход и интерактивные формы обучения',
      'Изучение грамматики в контексте и разговорная практика',
      'Работа с аутентичными аудио и видеоматериалами ',
      'Развитие лингвосоциокультурной компетентности',
      'Доступ к увлекательным видео материалам и онлайн играм',
    ],
  },
  {
    title: 'Подготовка к ДПА',
    price: 350,
    currency: 'грн',
    time: 'час',
    items: [
      'Без паники - наш студент точно сдаст!',
      'Определяем слабые стороны (грамматика, аудирование, лексика)',
      'Восполняем все пробелы в знаниях',
      'Подготовка согласно требованиям программы МОНУ',
      'Доступ к дополнительным материалам',
    ],
  },
  {
    title: 'Подготовка к ЗНО',
    currency: 'грн',
    price: 400,
    time: 'час',
    items: [
      'Без паники - наш студент точно сдаст!',
      'Определяем слабые стороны (грамматика, лексика, аудирование)',
      'Восполняем все пробелы в знаниях, используя дополнительные видеоматериалы и онлайн-ресурсы',
      'Подготовка согласно требованиям программы МОНУ',
      'Рекомендованная длительность курса 5 месяцев 3 раза в неделю',
    ],
  },
  {
    title: 'Для студентов',
    price: 250,
    time: 'час',
    currency: 'грн',
    items: [
      'Индивидуальный подход: подберем актуальные темы согласно потребностей студента',
      'Интерактивная форма обучения',
      'Много разговорной практики',
      'Работа с аутентичными аудио и видеоматериалами',
      'Открытый доступ к обучающим онлайн ресурсам',
    ],
  },
  {
    title: 'Общий английский',
    currency: 'грн',
    price: 300,
    time: 'час',
    items: [
      'Определение уровня владения английским языком',
      'Изучение грамматики в контексте, работа с аутентичными аудио и видеоматериалами',
      'Много разговорной практики',
      'Интерактивная методика - учимся легко и весело',
      'Открытый доступ и работа с онлайн ресурсами',
    ],
  },
  {
    title: 'Разговорный английский',
    currency: 'грн',
    price: 300,
    time: 'час',
    items: [
      'Определение уровня владения английским языком',
      'Подбор тем для дискуссий согласно интересам и требованиям студента',
      'Изучение разговорных конструкций, которые помогут поддержать диалог',
      'Система преодоления языкового барьера “No fear”',
      'Изучение бытового английского',
    ],
  },
  {
    title: 'Бизнес-английский',
    price: 400,
    currency: 'грн',
    time: 'час',
    items: [
      'Определение уровня владения английским языком',
      'Подбор программы согласно уровню и потребностям студента',
      'Изучение профильной бизнес-лексики, грамматических конструкций и принципов деловой переписки',
      'Работа с аудио и видео материалами бизнес-направлений',
      'Доступ к онлайн ресурсам',
    ],
  },

  {
    title: 'Курс фонетики',
    price: 500,
    time: 'час',
    currency: 'грн',
    items: [
      'Работа над интонацией, акцентом, произношением звуков и букв',
      'Разница между британским и американским английским',
      'Знакомство с фонетическим анализом',
      'Работа с транскрипцией',
      'Развитие аудиального восприятия',
    ],
  },
  {
    title: 'Общий английский\nГрупповые занятия',
    price: 150,
    time: 'час',
    currency: 'грн',
    items: [
      'В группе до 4 студентов',
      'Интерактивная форма обучения',
      'Много разговорной практики',
      'Работа с аутентичными аудио и видеоматериалами',
      'Работа с онлайн ресурсами',
    ],
  },
  {
    title: 'Бизнес-английский\nГрупповые занятия',
    price: 200,
    time: 'час',
    currency: 'грн',
    items: [
      'В группе до 4 студентов',
      'Изучение профильной бизнес-лексики, грамматических конструкций и принципов деловой переписки',
      'Подбор актуальных тем для бизнес-дискуссий',
      'Работа с аудио и видео-материалами',
      'Доступ к онлайн ресурсам',
    ],
  },
];

export const saleOptions: SaleOption[] = [
  'Абонемент на 12 занятий - при полной оплате скидка 5%',
  'Абонемент на 36 занятий - при полной оплате скидка 10% + 1 бонусное занятие',
];