/**
 * Format ENX amount from raw value (dividing by 10^8 and adding thousand separators)
 * @param {number} amount - Raw amount in smallest unit (1 ENX = 10^8 units)
 * @param {number} decimals - Number of decimal places to show (default: 4)
 * @returns {string} Formatted amount with ENX suffix
 */

export const COIN_NAME = 'ENX';


export function sompiToENX(amount, decimals = 8) {
    const value = Number(amount) / 100000000;
        
    // Format with specified decimal places
    const formatted = value.toFixed(decimals);

    return formatted;
}

export function formatENXAmount(amount, decimals = 2, showCoin = true) {
    if (!amount && amount !== 0) return '********';
    
    try {
        // Format with specified decimal places
        const formatted = sompiToENX(amount, decimals);
        
        // Add thousand separators
        const parts = formatted.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        
        // Combine with unit
        return `${parts.join('.')} ${showCoin ? COIN_NAME : ''}`;
    } catch (error) {
        console.error('Error formatting ENX amount:', error);
        return '********';
    }
}
