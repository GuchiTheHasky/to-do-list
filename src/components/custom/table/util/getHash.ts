export const getHash = (task: string): number => {
  let hash = 0;
  const random = Math.floor(Math.random() * 10000);

  for (let i = 0; i < task.length; i++) {
    const char = task.charCodeAt(i); // Отримуємо ASCII-код
    hash = (hash << 5) - hash + char; // побітовий зсув
  }
  return Math.abs(hash + random); // Повертаємо лише позитивне значення
};
