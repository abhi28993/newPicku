import React from 'react'

const Header = () => {
    return (
        <section className="w-full flex justify-center px-4 py-8 bg-[#f3f3f3]">
            <div className="w-full max-w-5xl flex flex-col items-center text-center gap-6">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-extrabold text-black uppercase">New Bharat</h1>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-800 leading-relaxed px-2">
                    Daily Superfast New Bharat Result of 30th June 2025 And Leak Numbers for Gali, Desawar, Ghaziabad and Faridabad With Complete Old New Bharat Chart of 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2023, 2024, 2025 From New Bharat, New Bharat Ghaziabad, New Bharat Desawar, New Bharat Gali, New Bharat Faridabad.
                </p>

                {/* Notice Box */}
                <div className="w-full bg-white rounded-md p-4 shadow text-left text-sm md:text-base leading-6 space-y-3">
                    <p className="text-black">
                        <span className="font-semibold text-blue-600">NewBharat.com</span> is the most popular gaming discussion forum for players to use freely and we are not in partnership with any gaming company.
                    </p>
                    <p className="text-black">
                        <span className="font-semibold text-blue-600">NewBharat.com</span> सबसे लोकप्रिय गेमिंग चर्चा मंच है जिसे खिलाड़ी स्वतंत्र रूप से उपयोग कर सकते हैं, और हम किसी भी गेमिंग कंपनी के साथ साझेदारी में नहीं हैं।
                    </p>
                    <p className="text-red-600 font-semibold">
                        कृपया ध्यान दें, लीक गेम के नाम पर किसी को कोई पैसा न दें, ना पहले ना बाद में - धन्यवाद
                    </p>
                </div>

                {/* Result Banner */}
                <div className="w-full">
                    <div className="bg-green-500 p-2 text-white font-semibold text-sm md:text-base text-center rounded-t-md">
                        New Bharat Results of June 30, 2025
                    </div>

                    {/* Games header and sample row could go here */}

                    {/* Monthly Table Section */}
                    <div className="overflow-x-auto mt-10 w-full">
                        <table className="w-full border-collapse text-center text-sm">
                            <thead>
                                <tr className="bg-green-500 text-white text-base font-semibold">
                                    <th colSpan={5} className="p-2">Monthly Satta King Result Chart of June 2025 for Gali, Desawar, Ghaziabad and Faridabad</th>
                                </tr>
                                <tr className="bg-yellow-400 text-black font-semibold">
                                    <th className="border px-3 py-2 text-red-600">DATE</th>
                                    <th className="border px-3 py-2">DSWR</th>
                                    <th className="border px-3 py-2">FRBD</th>
                                    <th className="border px-3 py-2">GZBD</th>
                                    <th className="border px-3 py-2">GALI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["01", "XX", "83", "15", "27"],
                                    ["02", "28", "01", "71", "94"],
                                    ["03", "79", "07", "60", "17"],
                                    ["04", "09", "84", "74", "43"],
                                    ["05", "53", "18", "74", "92"],
                                    ["06", "48", "50", "30", "03"],
                                    ["07", "19", "85", "50", "46"],
                                    ["08", "93", "42", "60", "15"],
                                    ["09", "24", "59", "96", "32"],
                                    ["10", "09", "26", "95", "06"],
                                    ["11", "14", "68", "26", "91"],
                                    ["12", "48", "38", "50", "25"],
                                    ["13", "46", "02", "40", "56"],
                                    ["14", "09", "36", "31", "28"],
                                    ["15", "02", "50", "28", "50"],
                                ].map(([date, dswr, frbd, gzbd, gali], idx) => (
                                    <tr key={idx} className="bg-white hover:bg-gray-50">
                                        <td className="border px-3 py-1 text-red-600 font-medium">{date}</td>
                                        <td className="border px-3 py-1">{dswr}</td>
                                        <td className="border px-3 py-1">{frbd}</td>
                                        <td className="border px-3 py-1">{gzbd}</td>
                                        <td className="border px-3 py-1">{gali}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Header