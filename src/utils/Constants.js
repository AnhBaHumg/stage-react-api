export const apiKey = "855eae8d766f4da590c8c0af11d12332";
export const BASE_URL = process.env.NODE_ENV === "http://localhost:3001";
export const lang = navigator.language.split("-");

function getcurrentDate() {
  const date = new Date();
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}
export const currentDate = getcurrentDate();

function getLastWeekDate() {
  const time = new Date().getTime() - 604800000;
  const previousWeek = new Date(time);
  const year = previousWeek.toLocaleString("default", { year: "numeric" });
  const month = previousWeek.toLocaleString("default", { month: "2-digit" });
  const day = previousWeek.toLocaleString("default", { day: "2-digit" });
  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
}
export const previousWeek = getLastWeekDate();

export const checkServerResponse = (res) => {
  if (!res.ok)
    return Promise.reject(
      `An error with the Status Code ${res.status} has occurred`
    );
  return res.json();
};

export const formatSearchResDate = (date) => {
  return new Date(date).toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
