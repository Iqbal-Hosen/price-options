import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { id: 1, name: 'Iqbal', math: 78 },
        { id: 2, name: 'Farhad', math: 80 },
        { id: 3, name: 'Rasel', math: 65 },
        { id: 1, name: 'Monir', math: 78 },
        { id: 4, name: 'Sharafat', math: 50 },
        { id: 5, name: 'Salman', math: 90 },
        { id: 6, name: 'Jisan', math: 70 },
        { id: 7, name: 'Sifat', math: 80 },
        { id: 8, name: 'Rahad', math: 67 },
        { id: 9, name: 'Santa', math: 95 },
        { id: 10, name: 'Iqbal', math: 75 }
    ];

    return (
        <div>
            <LChart width={900} height={400} data={mathMarksData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>

            </LChart>

        </div>
    );
};

export default LineChart;