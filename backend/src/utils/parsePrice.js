export function parsePriceToNumber(input) {
if (typeof input === 'number') return input;
if (!input) return 0;
const cleaned = String(input).replace(/[^\d.]/g, '');
const n = Number(cleaned);
return Number.isFinite(n) ? n : 0;
}