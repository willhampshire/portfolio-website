"use client";

import { useState } from 'react';
import * as XLSX from 'xlsx';
import JSZip from 'jszip'; // Importing JSZip for zip functionality
import { saveAs } from 'file-saver'; // Importing file-saver

export default function ExcelToCsvConverter() {
    // Update state to store an array of objects, each with 'name' and 'csv'
    const [csvData, setCsvData] = useState<{ name: string, csv: string }[] | null>(null);
    const [fileName, setFileName] = useState<string>("");

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            setFileName(file.name);

            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                const result = e.target?.result;

                if (result && typeof result !== 'string') {
                    const data = new Uint8Array(result);
                    const workbook = XLSX.read(data, { type: 'array' });

                    // Convert each sheet in the workbook to CSV and prefix with sheet index
                    const csvArray = workbook.SheetNames.map((sheetName, index) => {
                        const worksheet = workbook.Sheets[sheetName];
                        const csv = XLSX.utils.sheet_to_csv(worksheet);
                        return { name: `${index + 1}_${sheetName}.csv`, csv }; // Prefixing with index
                    });

                    // Store all CSVs in state
                    setCsvData(csvArray);
                }
            };

            reader.readAsArrayBuffer(file);
        }
    };

    const handleDownloadCsv = () => {
        if (!csvData) return;

        const zip = new JSZip();

        // Add each CSV file to the zip folder
        csvData.forEach((sheet) => {
            zip.file(sheet.name, sheet.csv);
        });

        // Generate the zip and download
        zip.generateAsync({ type: 'blob' }).then((content) => {
            saveAs(content, `ZIP ${fileName.split('.').slice(0, -1).join('.')}.zip`);
        });
    };

    return (
        <div className="flex justify-center p-4">
            <main className="w-full max-w-4xl bg-black bg-opacity-40 backdrop-blur-2xl p-6 rounded-lg shadow-lg">
                <div className="rounded-3xl p-4 md:p-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Excel to CSV</h1>

                    <p className="mb-6 text-gray-300">Upload Excel file (.xlsx or .xls) to convert to CSV.
                        Download zip of all sheets.</p>

                    {/* Upload Button */}
                    <input
                        type="file"
                        accept=".xlsx,.xls"
                        onChange={handleFileUpload}
                        className="mb-4 p-2 text-white bg-gray-700 rounded-md"
                    />
                    <br />

                    {/* Download Button */}
                    <button
                        onClick={handleDownloadCsv}
                        disabled={!csvData} // Disabled until CSVs are generated
                        className={`text-sm md:text-lg bg-blue-500 hover:bg-blue-700 my-4 text-white font-bold py-2 px-4 rounded ${!csvData ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Download zip
                    </button>

                    {/* CSV Preview */}
                    {csvData && (
                        <div className="text-white mt-4">
                            <p>Preview of first sheet:</p>
                            <textarea
                                className="w-full h-48 bg-gray-800 text-white p-2 rounded-lg"
                                value={csvData[0].csv} // Show preview of the first sheet only
                                readOnly
                            ></textarea>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
