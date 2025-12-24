const fs = require('fs');

// Mapping merek ke oil standard
const brandStandards = {
    'Toyota': 'API SP / ILSAC GF-6A',
    'Lexus': 'API SP / ILSAC GF-6A',
    'Honda': 'API SP / ILSAC GF-6A',
    'Nissan': 'API SP / ILSAC GF-6A',
    'Hyundai': 'API SP / ILSAC GF-6A',
    'Kia': 'API SP / ILSAC GF-6A',
    'Mercedes-Benz': 'API SP / ACEA C3',
    'BMW': 'API SP / ACEA C3',
    'Audi': 'API SP / ACEA C3',
    'Volvo': 'API SP / ACEA C3',
    'Mitsubishi': 'API SN / ILSAC GF-5',
    'Suzuki': 'API SN / ILSAC GF-5',
    'Wuling': 'API SN / ILSAC GF-5',
    'Chery': 'API SN / ILSAC GF-5'
};

// Read the file
const content = fs.readFileSync('src/components/HybridCarsData.jsx', 'utf8');

// Pattern to find car objects
const pattern = /(\{[\s\S]*?brand:\s*'([^']+)'[\s\S]*?oilType:\s*'[^']+')(\s*\})/g;

function addOilStandard(match, carObj, brand, closing) {
    // Check if oilStandard already exists
    if (carObj.includes('oilStandard')) {
        return match;
    }

    // Get standard for this brand
    const standard = brandStandards[brand] || 'API SN / ILSAC GF-5';

    // Add oilStandard before closing brace
    return `${carObj},\n            oilStandard: '${standard}'${closing}`;
}

// Replace all car objects
const newContent = content.replace(pattern, addOilStandard);

// Write back
fs.writeFileSync('src/components/HybridCarsData.jsx', newContent, 'utf8');

console.log('Successfully added oilStandard to all vehicles!');
