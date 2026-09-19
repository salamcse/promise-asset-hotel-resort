import { Currency, Language } from '../types';
import { USD_EXCHANGE_RATE } from '../data/projectData';

export function formatCurrency(amountBDT: number, currency: Currency = 'BDT', language: Language = 'en'): string {
  if (currency === 'USD') {
    const usd = Math.round(amountBDT / (USD_EXCHANGE_RATE || 120));
    return `$ ${usd.toLocaleString('en-US')}`;
  }
  
  if (language === 'bn') {
    return `৳ ${amountBDT.toLocaleString('en-IN')}`;
  }
  
  return `৳ ${amountBDT.toLocaleString('en-IN')}`;
}
