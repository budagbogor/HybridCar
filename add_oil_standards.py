import re

# Mapping merek ke oil standard
brand_standards = {
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
}

# Read the file
with open('src/components/HybridCarsData.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find car objects
pattern = r"(\{[\s\S]*?brand:\s*'([^']+)'[\s\S]*?oilType:\s*'[^']+')(\s*\})"

def add_oil_standard(match):
    car_obj = match.group(1)
    brand = match.group(2)
    closing = match.group(3)
    
    # Check if oilStandard already exists
    if 'oilStandard' in car_obj:
        return match.group(0)
    
    # Get standard for this brand
    standard = brand_standards.get(brand, 'API SN / ILSAC GF-5')
    
    # Add oilStandard before closing brace
    return f"{car_obj},\n            oilStandard: '{standard}'{closing}"

# Replace all car objects
new_content = re.sub(pattern, add_oil_standard, content)

# Write back
with open('src/components/HybridCarsData.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added oilStandard to all vehicles!")
