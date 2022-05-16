import * as React from 'react';
import MUIDataTable from "mui-datatables";
import { MerProps, InfoWellProps, Mer } from '@renderer/types';

const columns = ["Дата", "Характер работы", "Добыто газа", "Добыто жидкости", "Добыто нефти", "Приемистость"];

const options = {
    textLabels: {
        body: {
            noMatch: "К сожалению, подходящие записи не найдены",
            toolTip: "Сортировать",
            columnHeaderTooltip: (column: any) => `Сортировать по ${column.label}`
        },
        pagination: {
            next: "Следующая страница",
            previous: "Предыдущая страница",
            rowsPerPage: "Строк на странице:",
            displayRows: "из",
        },
        toolbar: {
            search: "Поиск",
            downloadCsv: "Загрузить CSV",
            print: "Печать",
            viewColumns: "Просмотр столбцов",
            filterTable: "Список фильтров",
        },
        filter: {
            all: "Все",
            title: "ФИЛЬТРЫ",
            reset: "СБРОСИТЬ",
        },
        viewColumns: {
            title: "Показать столбцы",
            titleAria: "Показать/скрыть столбцы таблицы",
        }
    },
    print: true,
    selectableRows: "none",
    selectableRowsHeader: false,
    download: true,
    rowsPerPage: 12,
    rowsPerPageOptions: [12, 24, 48, 96],
};

export default function DataTables(props: MerProps & InfoWellProps) {
    const toDate = (mer: Mer) => {
        const date = new Date(mer["dt"] as string);
        const month = date.getMonth() + 1;
        return `${month >= 10 ? month : "0" + month.toString()}.${date.getFullYear()}`
    }

    const charwork = props.dataMer.map(item => item["charwork"]);
    const dt = props.dataMer.map(toDate);
    const gas = props.dataMer.map(item => Number.parseInt(item["gas"].toFixed()));
    const liq = props.dataMer.map(item => Number.parseInt(item["liq"].toFixed()));
    const oil = props.dataMer.map(item => Number.parseInt(item["oil"].toFixed()));
    const priem = props.dataMer.map(item => Number.parseInt(item["priem"].toFixed()));



    let data = dt.map((item, index) => {
        return [item, charwork[index], gas[index], liq[index], oil[index], priem[index]]
    });

    return (
        <MUIDataTable
            title={`Таблица Mer для скважины: ${props.WellId}`}
            data={data}
            columns={columns}
            //@ts-ignore
            options={options}
        />
    );
}