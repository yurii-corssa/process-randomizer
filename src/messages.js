export const messages = {
  ua: {
    required: 'Це поле є обовʼязковим і не може бути порожнім.',
    invalidLength: 'Кожне значення не може бути довшим ніж 50 символів.',
    oneProcessMinTwoEmployees:
      'Для 1 вибраного процесу потрібно вибрати щонайменше 2 співробітників.',
    multiProcessMinEmployees: count =>
      `Для ${count} вибраних процесів потрібно вибрати щонайменше ${count} співробітників.`,
    notUnique: 'Не можна вибирати одного і того ж співробітника кілька разів.',
  },
  en: {
    required: 'This field is required and cannot be empty.',
    invalidLength: 'Each value must not exceed 50 characters.',
    oneProcessMinTwoEmployees:
      'For 1 selected process, you must select at least 2 employees.',
    multiProcessMinEmployees: count =>
      `For ${count} selected processes, you must select at least ${count} employees.`,
    notUnique: 'The same employee cannot be selected more than once.',
    invalidType: 'Is invalid type',
  },
  pl: {
    required: 'To pole jest wymagane i nie może być puste.',
    invalidLength: 'Każda wartość nie może przekraczać 50 znaków.',
    oneProcessMinTwoEmployees:
      'Dla 1 wybranego procesu należy wybrać co najmniej 2 pracowników.',
    multiProcessMinEmployees: count =>
      `Dla ${count} wybranych procesów należy wybrać co najmniej ${count} pracowników.`,
    notUnique: 'Tego samego pracownika nie można wybrać więcej niż raz.',
  },
};
