// Database merek oli yang tersedia di pasaran Indonesia dengan harga per liter (Desember 2024)
// forBrands: array merek mobil yang cocok (null = semua merek, array = merek tertentu saja)
// standards: standar kualitas oli (API, ILSAC, ACEA)
export const oilBrands = {
    '0W-16': [
        { brand: 'Toyota TMO', grade: '0W-16', price: 190000, forBrands: ['Toyota', 'Lexus'], standards: 'API SP / ILSAC GF-6A' },
        { brand: 'ENEOS X PRIME', grade: '0W-16', price: 235000, forBrands: null, standards: 'API SP / ILSAC GF-6B' },
        { brand: 'Idemitsu IFG 7', grade: '0W-16', price: 280000, forBrands: null, standards: 'API SP / ILSAC GF-6A' }
    ],
    '0W-20': [
        { brand: 'Toyota TMO', grade: '0W-20', price: 105000, forBrands: ['Toyota', 'Lexus'], standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Honda E-Pro Gold', grade: '0W-20', price: 80000, forBrands: ['Honda'], standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Nissan Genuine', grade: '0W-20', price: 95000, forBrands: ['Nissan'], standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Shell Helix Eco', grade: '0W-20', price: 85000, forBrands: null, standards: 'API SN Plus' },
        { brand: 'Shell Helix Ultra', grade: '0W-20', price: 125000, forBrands: null, standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Mobil 1', grade: '0W-20', price: 275000, forBrands: null, standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Castrol Magnatec', grade: '0W-20', price: 145000, forBrands: null, standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Pertamina Fastron Gold', grade: '0W-20', price: 147000, forBrands: null, standards: 'API SN Plus / ILSAC GF-5' },
        { brand: 'KIXX G1', grade: '0W-20', price: 125000, forBrands: null, standards: 'API SP / ILSAC GF-6A' }
    ],
    '5W-20': [
        { brand: 'Castrol Magnatec', grade: '5W-20', price: 125000, forBrands: null, standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Shell Helix Ultra', grade: '5W-20', price: 140000, forBrands: null, standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Mobil Super', grade: '5W-20', price: 95000, forBrands: null, standards: 'API SN / ILSAC GF-5' }
    ],
    '5W-30': [
        { brand: 'Toyota TMO', grade: '5W-30', price: 125000, forBrands: ['Toyota', 'Lexus'], standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Honda Genuine', grade: '5W-30', price: 110000, forBrands: ['Honda'], standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Nissan Genuine', grade: '5W-30', price: 105000, forBrands: ['Nissan'], standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Shell Helix Ultra', grade: '5W-30', price: 135000, forBrands: null, standards: 'API SP / ACEA C3' },
        { brand: 'Castrol Magnatec', grade: '5W-30', price: 125000, forBrands: null, standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Mobil Super 2000', grade: '5W-30', price: 100000, forBrands: null, standards: 'API SN / ILSAC GF-5' },
        { brand: 'Pertamina Prima XP', grade: '5W-30', price: 85000, forBrands: null, standards: 'API SN / ACEA A3/B4' }
    ],
    '0W-30': [
        { brand: 'Shell Helix Ultra', grade: '0W-30', price: 150000, forBrands: null, standards: 'API SP / ACEA C3' },
        { brand: 'Mobil 1', grade: '0W-30', price: 290000, forBrands: null, standards: 'API SP / ILSAC GF-6A' },
        { brand: 'Castrol Edge', grade: '0W-30', price: 180000, forBrands: null, standards: 'API SP / ACEA C3' }
    ],
    '0W-40': [
        { brand: 'Shell Helix Ultra', grade: '0W-40', price: 165000, forBrands: null, standards: 'API SP / ACEA C3' },
        { brand: 'Mobil 1', grade: '0W-40', price: 300000, forBrands: null, standards: 'API SP / ACEA A3/B4' },
        { brand: 'Castrol Edge', grade: '0W-40', price: 195000, forBrands: null, standards: 'API SP / ACEA C3' }
    ],
    '5W-40': [
        { brand: 'Shell Helix Ultra', grade: '5W-40', price: 155000, forBrands: null, standards: 'API SP / ACEA C3' },
        { brand: 'Castrol Edge', grade: '5W-40', price: 185000, forBrands: null, standards: 'API SP / ACEA C3' },
        { brand: 'Mobil Super 3000', grade: '5W-40', price: 120000, forBrands: null, standards: 'API SN / ACEA A3/B4' }
    ]
};

// Helper function untuk mendapatkan rekomendasi oli berdasarkan SAE grade dan merek mobil
export const getRecommendedOils = (saeGrade, carBrand) => {
    // Split jika ada multiple grades (contoh: "0W-16 / 0W-20")
    const grades = saeGrade.split('/').map(g => g.trim());

    const recommendations = [];
    grades.forEach(grade => {
        if (oilBrands[grade]) {
            // Filter berdasarkan merek mobil
            const filteredOils = oilBrands[grade].filter(oil => {
                // Jika forBrands null, oli cocok untuk semua merek
                if (oil.forBrands === null) return true;
                // Jika forBrands ada, cek apakah merek mobil ada dalam list
                return oil.forBrands.includes(carBrand);
            });
            recommendations.push(...filteredOils);
        }
    });

    // Remove duplicates based on brand
    const uniqueRecommendations = recommendations.filter((oil, index, self) =>
        index === self.findIndex((t) => t.brand === oil.brand)
    );

    return uniqueRecommendations;
};

// Format harga ke Rupiah
export const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
};
