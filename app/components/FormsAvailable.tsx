type FormsAvailableProps = {
    forms: string[];
}

/*
Reusable "Forms Available" component that takes an array of strings as input.
*/
export default function FormsAvailable({
    forms
}: FormsAvailableProps) {
    return (
        <div>
            <h3 className="uppercase bg-primary text-white px-6 py-4 font-bold text-xl">
                Forms Available
            </h3>
            <ul className=" bg-primary-light px-6 py-4 list-disc list-inside">
                {forms.map((form, index) => (
                    <li key={index}>{form}</li>
                ))}
            </ul>
        </div>
    )
}