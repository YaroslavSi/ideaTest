/*  3. Завдання:
    Потрібно зробити парсинг масиву array:
    balance сума в копійках, потрібно перевести в гривні та зробити суму з пробілами та 2 символами після крапки, наприклад 1 000 000.00
    dateStartUnix перевести у формат 'день.місяць.рік(00.00.0000)' і змінити параметр на dateStart
    dateEnd перекласти у формат '00.00.0000'
    записати дані по терміну та типу в об'єкт, наприклад {term: 32, type: 'M', value: '32 місяці)'}
    відсортувати термін за зростанням по параметру term 1 , 100 , 4 , 6  і тд.
*/


const array = [
    {
      balance: 500000,
      term: 1,
      type: 'M',
      dateStartUnix: 1693947600,
      dateEnd: '2023-11-03T00:00:00',
    },
    {
      balance: 4508000,
      term: 6,
      type: 'M',
      dateStartUnix: 1693947600,
      dateEnd: '2023-11-03T00:00:00',
    },
    {
      balance: 87500,
      term: 18,
      type: 'M',
      dateStartUnix: 1693947600,
      dateEnd: '2023-11-03T00:00:00',
    },
    {
      balance: 2503,
      term: 100,
      type: 'D',
      dateStartUnix: 1693947600,
      dateEnd: '2023-11-03T00:00:00',
    },
    {
      balance: 126500,
      term: 4,
      type: 'M',
      dateStartUnix: 1693947600,
      dateEnd: '2023-11-03T00:00:00',
    },
  ];
  
  // баланс
  array.forEach(item => {
    item.balance = (item.balance / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  });
  
  // формат 'день.місяць.рік(00.00.0000)' 
  array.forEach(item => {
    const dateStart = new Date(item.dateStartUnix * 1000);
    const day = String(dateStart.getDate()).padStart(2, '0');
    const month = String(dateStart.getMonth() + 1).padStart(2, '0');
    const year = dateStart.getFullYear();
    item.dateStart = `${day}.${month}.${year}`;
    delete item.dateStartUnix;
  });
  
  // формат '00.00.0000'
  array.forEach(item => {
    const dateEnd = new Date(item.dateEnd);
    const day = String(dateEnd.getDate()).padStart(2, '0');
    const month = String(dateEnd.getMonth() + 1).padStart(2, '0');
    const year = dateEnd.getFullYear();
    item.dateEnd = `${day}.${month}.${year}`;
  });
  
  // дані по терміну та типу в об'єкт
  array.forEach(item => {
    item.value = `${item.term} ${item.type === 'M' ? 'місяці' : 'дні'}`;
  });
  
  // Відсортувати за терміном по зростанню
  array.sort((a, b) => a.term - b.term);
  
  console.log(array);