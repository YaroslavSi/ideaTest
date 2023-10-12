// 4. Завдання:
//   Показати кількість виконаних платежів за період openDate до datEnd з розрахунком 1 платіж на місяць 

function calculatePayments(user) {
    const openDate = new Date(user.openDate);
    const datEnd = new Date(user.datEnd);
  
    // кількість місяців в періоді
    const monthsDiff = (datEnd.getFullYear() - openDate.getFullYear()) * 12 + (datEnd.getMonth() - openDate.getMonth());
  
    // загальнa кількість платежів за період
    const totalPayments = Math.ceil(monthsDiff);
  
    // виконанi платежі
    const executedPayments = user.repaymentShedule.filter(payment => payment.repaymentStatus === "Виконано").length;
  
    // кількість залишкових платежів
    const remainingPayments = totalPayments - executedPayments;
  
    const result = [
      { value: executedPayments, text: `${executedPayments} з ${totalPayments}` },
      { value: remainingPayments, text: `залишилось ${remainingPayments} платежів` }
    ];
  
    return result;
  }
  
  const user1 = {
    datEnd: "2024-09-17T00:00:00",
    openDate: "2023-04-17T00:00:00",
    repaymentShedule: [
      {
        "repaymentDate": "2023-05-09T00:00:00",
        "repaymentStatus": "Виконано"
      },
      {
        "repaymentDate": "2023-06-09T00:00:00",
        "repaymentStatus": "Виконано"
      },
      {
        "repaymentDate": "2023-07-09T00:00:00",
        "repaymentStatus": "He виконано"
      },
      {
        "repaymentDate": "2023-08-09T00:00:00",
        "repaymentStatus": "Виконано"
      },
      {
        "repaymentDate": "2023-09-09T00:00:00",
        "repaymentStatus": "He виконано"
      },
      {
        "repaymentDate": "2023-10-09T00:00:00",
        "repaymentStatus": "Виконано"
      }
    ]
  };
  
  const result = calculatePayments(user1);
  console.log(result);