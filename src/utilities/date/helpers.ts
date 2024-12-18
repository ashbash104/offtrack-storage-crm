import dayjs from "dayjs";

/**
 * Formats a date to a specific format (default: 'YYYY-MM-DD').
 * @param date - The date to format, as a string or Date object.
 * @param format - The desired format (default: 'YYYY-MM-DD').
 * @returns Formatted date string.
 */
export const formatDate = (date: string | Date, format: string = "YYYY-MM-DD"): string => {
    if (!date) return "";
    return dayjs(date).format(format);
};

/**
 * Generates a human-readable date range from two dates.
 * @param startDate - Start date, as a string or Date object.
 * @param endDate - End date, as a string or Date object (optional).
 * @returns A formatted date range.
 */
export const getDate = (startDate: string | Date, endDate?: string | Date): string => {
    if (!startDate) return "Invalid date";
    const start = formatDate(startDate, "MMM DD, YYYY");
    if (!endDate) return start;

    const startDay = dayjs(startDate);
    const endDay = dayjs(endDate);

    // If both dates are the same, return one date
    if (startDay.isSame(endDay, "day")) {
        return start;
    }

    const end = formatDate(endDate, "MMM DD, YYYY");
    return `${start} - ${end}`;
};
