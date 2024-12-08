// helpers.ts
export function getDate(format: string = 'YYYY-MM-DD'): string {
    const today = new Date();
  
    switch (format) {
      case 'YYYY-MM-DD':
        return today.toISOString().slice(0, 10);
      case 'MM/DD/YYYY':
        const month = today.getMonth() + 1; // JavaScript months are 0-indexed
        const day = today.getDate();
        const year = today.getFullYear();
        return `${month}/${day}/${year}`;
      default:
        throw new Error(`Unsupported format: ${format}`);
    }
  }