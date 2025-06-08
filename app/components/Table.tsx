import React from "react";

/**
 * These are the properties you must pass into the Table component.
 * - `title`: a heading shown at the top of the table
 * - `headers`: the names of each column in the table
 * - `rows`: the actual data, with each row being a list of cell values
 */
export type TableProps = {
    title: string;
    headers: string[];
    rows: string[][];
};

/**
 * Table Component
 * ---------------
 * A reusable table that shows:
 * - a full-width title at the top of the table
 * - column headers underneath
 * - multiple rows of data
 *
 * Useful for displaying structured data from spreadsheets or JSON.
 */
export default function Table({ title, headers, rows }: TableProps) {
    return (
        /* 
        This is the main HTML <table> element.
        It organizes all the headers and rows into a grid structure.
        `border-collapse` and `border` make sure borders are clean and visible.
        */
        <table className="w-full border-collapse border border-neutral-black text-center">
            
            {/* 
            <thead> contains two rows:
            1. A row that spans all columns to display the table title
            2. A row for column headers
            */}
            <thead>
                {/* Title Row: spans all columns using colSpan */}
                <tr className="bg-primary text-white">
                    <th colSpan={headers.length} className="bg-primary text-white px-6 py-4 font-bold text-xl text-left">
                        {title}
                    </th>
                </tr>

                {/* Header Row: displays column names */}
                <tr className="bg-primary-light">
                    {headers.map((header, index) => (
                    <th
                        key={index}
                        className="border border-neutral-black px-4 py-2 font-semibold"
                    >
                        {header}
                    </th>
                    ))}
                </tr>
            </thead>

            {/* 
            <tbody> contains all the data rows.
            Each row maps to a set of cells (like in Excel).
            */}
            <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="even:bg-gray-50 whitespace-pre-line">
                {row.map((cell, cellIndex) => (
                    <td
                    key={cellIndex}
                    className="border border-neutral-black px-4 py-2"
                    >
                    {/* 
                        If a cell is an empty string, we show a non-breaking space
                        so that the table keeps its shape (borders stay aligned).
                    */}
                        {cell || "\u00A0"}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
}
