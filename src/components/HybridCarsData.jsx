import React, { useState } from 'react';
import { Search, Car, Droplet, Calendar, DollarSign } from 'lucide-react';
import { getRecommendedOils, formatPrice } from '../utils/oilData';

const HybridCarsData = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterBrand, setFilterBrand] = useState('All');

    const hybridCars = [
        {
            brand: 'Toyota',
            model: 'Innova Zenix Hybrid',
            year: '2022-2024',
            engine: '2.0L M20A-FXS',
            sae: '0W-16 / 0W-20',
            capacity: '4.3 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Toyota',
            model: 'Voxy (All New)',
            year: '2022-2024',
            engine: '2.0L M20A-FKS',
            sae: '0W-20 / 5W-30',
            capacity: '4.4 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Toyota',
            model: 'Camry Hybrid',
            year: '2023-2024',
            engine: '2.5L A25A-FXS',
            sae: '0W-20',
            capacity: '4.3 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Toyota',
            model: 'C-HR Hybrid (HEV)',
            year: '2019-2021',
            engine: '1.8L 2ZR-FXE',
            sae: '0W-20',
            capacity: '4.2 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Toyota',
            model: 'Corolla Cross Hybrid',
            year: '2022-2024',
            engine: '1.8L 2ZR-FXE',
            sae: '0W-20',
            capacity: '4.2 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Toyota',
            model: 'Corolla Altis Hybrid',
            year: '2019-2024',
            engine: '1.8L 2ZR-FXE',
            sae: '0W-20',
            capacity: '4.2 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Toyota',
            model: 'Alphard Hybrid',
            year: '2023-2024',
            engine: '2.5L A25A-FXS',
            sae: '0W-20',
            capacity: '4.3 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Toyota',
            model: 'Vellfire Hybrid',
            year: '2023-2024',
            engine: '2.5L A25A-FXS',
            sae: '0W-20',
            capacity: '4.3 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Toyota',
            model: 'Yaris Cross Hybrid',
            year: '2023-2024',
            engine: '1.5L 2NR-VEX',
            sae: '0W-20',
            capacity: '3.3 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Toyota',
            model: 'RAV4 Hybrid',
            year: '2023-2024',
            engine: '2.5L A25A-FXS',
            sae: '0W-16 / 0W-20',
            capacity: '4.5 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Honda',
            model: 'HR-V e:HEV (RS / e:HEV / Modulo)',
            year: '2025',
            engine: '1.5L DOHC i-VTEC',
            sae: '0W-20',
            capacity: '3.7 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Honda',
            model: 'Civic RS e:HEV',
            year: '2025',
            engine: '2.0L Atkinson-cycle',
            sae: '0W-20',
            capacity: '4.2 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Honda',
            model: 'CR-V Hybrid (RS e:HEV)',
            year: '2023-2024',
            engine: '2.0L e:HEV',
            sae: '0W-20',
            capacity: '4.0 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Honda',
            model: 'Accord Hybrid',
            year: '2022-2024',
            engine: '2.0L e:HEV',
            sae: '0W-20',
            capacity: '4.0 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Honda',
            model: 'City Hybrid (e:HEV)',
            year: '2023-2024',
            engine: '1.5L i-VTEC e:HEV',
            sae: '0W-20',
            capacity: '3.7 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Nissan',
            model: 'Kicks e-POWER',
            year: '2020-2024',
            engine: '1.2L 3-Cylinder (Generator)',
            sae: '5W-30',
            capacity: '3.5 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Suzuki',
            model: 'Ertiga Hybrid (SHVS)',
            year: '2023-2024',
            engine: '1.5L K15C Smart Hybrid',
            sae: '0W-16',
            capacity: '3.7 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Suzuki',
            model: 'XL7 Hybrid',
            year: '2023-2024',
            engine: '1.5L K15C Smart Hybrid',
            sae: '0W-16',
            capacity: '3.7 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Wuling',
            model: 'Almaz Hybrid',
            year: '2022-2024',
            engine: '1.5L Turbo Hybrid',
            sae: '5W-30',
            capacity: '4.0 liter',
            interval: '5.000 km / 6 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Lexus',
            model: 'UX 300e Hybrid',
            year: '2023-2024',
            engine: '2.0L M20A-FKS',
            sae: '0W-20',
            capacity: '4.4 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Lexus',
            model: 'ES 300h',
            year: '2023-2024',
            engine: '2.5L A25A-FXS',
            sae: '0W-20',
            capacity: '4.3 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Lexus',
            model: 'NX 350h',
            year: '2023-2024',
            engine: '2.5L A25A-FXS',
            sae: '0W-20',
            capacity: '4.3 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Hyundai',
            model: 'Ioniq Hybrid',
            year: '2022-2024',
            engine: '1.6L Kappa GDI',
            sae: '5W-20',
            capacity: '4.0 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Kia',
            model: 'Niro Hybrid',
            year: '2022-2024',
            engine: '1.6L Kappa GDI',
            sae: '5W-20',
            capacity: '4.0 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Mercedes-Benz',
            model: 'E 300 e Plug-in Hybrid',
            year: '2023-2024',
            engine: '2.0L M264',
            sae: '5W-30',
            capacity: '5.5 liter',
            interval: '12.500 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'BMW',
            model: 'X5 xDrive45e',
            year: '2023-2024',
            engine: '3.0L B58 Plug-in Hybrid',
            sae: '5W-30',
            capacity: '6.5 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Lexus',
            model: 'UX 250h',
            year: '2023-2024',
            engine: '2.0L M20A-FXS',
            sae: '0W-16 / 0W-20',
            capacity: '4.5 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Lexus',
            model: 'RX 500h',
            year: '2023-2024',
            engine: '2.4L T24A-FTS',
            sae: '0W-20',
            capacity: '5.6 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Lexus',
            model: 'LM 350h',
            year: '2023-2024',
            engine: '2.5L A25A-FXS',
            sae: '0W-20',
            capacity: '4.3 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Mitsubishi',
            model: 'Outlander PHEV',
            year: '2023-2024',
            engine: '2.4L 4B12 MIVEC',
            sae: '0W-20',
            capacity: '4.6 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Mitsubishi',
            model: 'Eclipse Cross PHEV',
            year: '2023-2024',
            engine: '2.4L 4B12 MIVEC',
            sae: '0W-20 / 5W-30',
            capacity: '4.5 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Nissan',
            model: 'X-Trail e-POWER',
            year: '2023-2024',
            engine: '1.5L VC-Turbo (Generator)',
            sae: '0W-20 / 5W-30',
            capacity: '5.2 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Nissan',
            model: 'Serena e-POWER',
            year: '2023-2024',
            engine: '1.4L HR14DD-E (Generator)',
            sae: '0W-20',
            capacity: '3.2 liter',
            interval: '10.000 km / 6 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Wuling',
            model: 'Almaz RS Hybrid',
            year: '2023-2024',
            engine: '1.5L Turbo Hybrid',
            sae: '5W-30',
            capacity: '4.0 liter',
            interval: '5.000 km / 6 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'BMW',
            model: '330e',
            year: '2023-2024',
            engine: '2.0L B48 Plug-in Hybrid',
            sae: '0W-20 / 5W-30',
            capacity: '5.0 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'BMW',
            model: '530e',
            year: '2023-2024',
            engine: '2.0L B48 Plug-in Hybrid',
            sae: '0W-20 / 5W-30',
            capacity: '5.0 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'BMW',
            model: 'X3 30e',
            year: '2023-2024',
            engine: '2.0L B48 Plug-in Hybrid',
            sae: '0W-30 / 5W-30',
            capacity: '5.0 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Mercedes-Benz',
            model: 'C 300 e',
            year: '2023-2024',
            engine: '2.0L M254 Plug-in Hybrid',
            sae: '0W-40 / 5W-40',
            capacity: '6.0 liter',
            interval: '12.500 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Mercedes-Benz',
            model: 'GLE 350 de',
            year: '2023-2024',
            engine: '2.0L OM 654 Diesel Hybrid',
            sae: '0W-30 / 5W-30',
            capacity: '6.5 liter',
            interval: '12.500 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Mercedes-Benz',
            model: 'S 580 e',
            year: '2023-2024',
            engine: '3.0L M256 Plug-in Hybrid',
            sae: '0W-40 / 5W-40',
            capacity: '7.8 liter',
            interval: '12.500 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Audi',
            model: 'A6 55 TFSI e',
            year: '2023-2024',
            engine: '2.0L TFSI Plug-in Hybrid',
            sae: '0W-20',
            capacity: '5.2 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Audi',
            model: 'Q5 55 TFSI e',
            year: '2023-2024',
            engine: '2.0L TFSI Plug-in Hybrid',
            sae: '0W-20',
            capacity: '5.2 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Audi',
            model: 'A8 60 TFSI e',
            year: '2023-2024',
            engine: '3.0L TFSI Plug-in Hybrid',
            sae: '0W-20',
            capacity: '7.6 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Volvo',
            model: 'XC60 Recharge',
            year: '2023-2024',
            engine: '2.0L T8 Plug-in Hybrid',
            sae: '0W-20',
            capacity: '5.5 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Volvo',
            model: 'XC90 Recharge',
            year: '2023-2024',
            engine: '2.0L T8 Plug-in Hybrid',
            sae: '0W-20',
            capacity: '5.5 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Volvo',
            model: 'S90 Recharge',
            year: '2023-2024',
            engine: '2.0L T8 Plug-in Hybrid',
            sae: '0W-20',
            capacity: '5.5 liter',
            interval: '15.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Chery',
            model: 'OMODA 5 Hybrid',
            year: '2023-2024',
            engine: '1.5L Turbo Hybrid',
            sae: '5W-30 / 0W-20',
            capacity: '4.5 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        },
        {
            brand: 'Chery',
            model: 'Tiggo 7 Pro PHEV',
            year: '2023-2024',
            engine: '1.5L Turbo PHEV',
            sae: '5W-30 / 5W-40',
            capacity: '4.2 liter',
            interval: '10.000 km / 12 bulan',
            oilType: 'Full Synthetic'
        }
    ];

    const brands = ['All', ...new Set(hybridCars.map(car => car.brand))];

    const filteredCars = hybridCars.filter(car => {
        const matchesSearch = car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = filterBrand === 'All' || car.brand === filterBrand;
        return matchesSearch && matchesBrand;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <Car className="w-8 h-8 text-green-600" />
                        <h1 className="text-3xl font-bold text-gray-800">
                            Data Mobil Hybrid di Indonesia
                        </h1>
                    </div>
                    <p className="text-gray-600">Informasi lengkap spesifikasi oli mesin untuk kendaraan hybrid</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Cari merek atau model mobil..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <select
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            value={filterBrand}
                            onChange={(e) => setFilterBrand(e.target.value)}
                        >
                            {brands.map(brand => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="text-sm text-gray-600 mb-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <strong>Catatan Penting:</strong> Interval penggantian oli dapat bervariasi tergantung kondisi berkendara.
                    Selalu ikuti rekomendasi dari buku manual kendaraan dan konsultasi dengan bengkel resmi.
                </div>

                <div className="grid gap-4">
                    {filteredCars.map((car, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                                            {car.brand}
                                        </span>
                                        <span className="text-gray-500 text-sm">{car.year}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{car.model}</h2>
                                    <p className="text-gray-600 mb-4">
                                        <span className="font-semibold">Mesin:</span> {car.engine}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Droplet className="w-5 h-5 text-blue-600" />
                                            <span className="text-sm font-semibold text-blue-900">SAE Grade</span>
                                        </div>
                                        <p className="text-2xl font-bold text-blue-700">{car.sae}</p>
                                        <p className="text-xs text-blue-600 mt-1">{car.oilType}</p>
                                    </div>

                                    <div className="bg-purple-50 rounded-lg p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Droplet className="w-5 h-5 text-purple-600" />
                                            <span className="text-sm font-semibold text-purple-900">Kapasitas</span>
                                        </div>
                                        <p className="text-2xl font-bold text-purple-700">{car.capacity}</p>
                                    </div>

                                    <div className="bg-orange-50 rounded-lg p-4 col-span-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar className="w-5 h-5 text-orange-600" />
                                            <span className="text-sm font-semibold text-orange-900">Interval Ganti Oli</span>
                                        </div>
                                        <p className="text-lg font-bold text-orange-700">{car.interval}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Rekomendasi Oli Section */}
                            <div className="mt-4 border-t pt-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <DollarSign className="w-5 h-5 text-green-600" />
                                    <h3 className="text-sm font-semibold text-gray-800">Rekomendasi Oli di Pasaran</h3>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                    {getRecommendedOils(car.sae, car.brand).map((oil, oilIndex) => (
                                        <div key={oilIndex} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200 hover:shadow-md transition-shadow">
                                            <p className="text-xs font-semibold text-gray-800 mb-1">{oil.brand}</p>
                                            <p className="text-xs text-gray-600 mb-1">{oil.grade}</p>
                                            <p className="text-sm font-bold text-green-600">{formatPrice(oil.price)}/L</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500 mt-2">* Harga per liter, dapat bervariasi tergantung lokasi dan promo</p>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCars.length === 0 && (
                    <div className="bg-white rounded-xl shadow-md p-12 text-center">
                        <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg">Tidak ada mobil yang sesuai dengan pencarian Anda</p>
                    </div>
                )}

                <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Tambahan</h3>
                    <div className="space-y-3 text-gray-700">
                        <p><strong>Full Synthetic Oil:</strong> Semua mobil hybrid di Indonesia menggunakan oli full synthetic untuk performa optimal.</p>
                        <p><strong>SAE 0W-20:</strong> Grade oli yang paling umum untuk hybrid Toyota dan Honda - memberikan efisiensi bahan bakar maksimal.</p>
                        <p><strong>SAE 0W-16:</strong> Grade khusus untuk Suzuki Hybrid dan beberapa Toyota TNGA yang sangat encer untuk efisiensi maksimal.</p>
                        <p><strong>Interval Ganti Oli:</strong> Umumnya 10.000 km atau 12 bulan (mana yang lebih dulu), kecuali Wuling (5.000 km) dan beberapa merek premium (12.500-15.000 km).</p>
                        <p><strong>Catatan Penting:</strong> Beberapa mobil yang disebutkan seperti Toyota Raize Hybrid, Wuling VS HEV, Hyundai Tucson Hybrid, Mazda CX-60/80 PHEV, dan Mitsubishi Outlander PHEV belum tersedia atau sangat terbatas di Indonesia.</p>
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Total: {filteredCars.length} dari {hybridCars.length} mobil hybrid</p>
                </div>
            </div>
        </div>
    );
};

export default HybridCarsData;
