import {API} from "../API";
const month = 6;
const year = 2023;

// массив объектов всех транзакций за указанный месяц
export async function getTransactionsSummaryByYear(year, type) {
  const { data } = await API.get(`/api/finances/reports?month=${month}&year=${year}`);
  return data;
}
// за указаный месяц "totalAmount expenses" и "totalAmount income"
export async function getTransactionsByDate(month, year) {
  const { data } = await API.get(
    `/api/finances/reports?month=${month}&year=${year}&total=2`
  );
  return data;
}
// за указаный месяц expenses totalAmount по категориям
export async function getTransactionsByMonth(month, year) {
  const { data } = await API.get(
    `/api/finances/reports?month=${month}&year=${year}&type=expenses`
  );
  return data;
}

export async function getTransactionsByCategory(category, month, year) {
  const { data } = await API.get(
    `/finances/report/amountByDescription/${category}/${month}/${year}`
  );
  return data;
}
